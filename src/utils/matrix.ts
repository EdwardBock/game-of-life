import produce from "immer";
import {Matrix} from "../types";

export const rotateMatrix = (state: Matrix): Matrix => {
    return produce(state, matrix => {
        const n = matrix.length;
        const x = Math.floor(n/ 2);
        const y = n - 1;
        for (let i = 0; i < x; i++) {
            for (let j = i; j < y - i; j++) {
                const k = matrix[i][j];
                matrix[i][j] = matrix[y - j][i];
                matrix[y - j][i] = matrix[y - i][y - j];
                matrix[y - i][y - j] = matrix[j][y - i]
                matrix[j][y - i] = k;
            }
        }
        return matrix
    }).map(row => {
        return row.filter(cell => cell != undefined);
    }).filter(row => row.length > 0);
}

export const getRotations = (state: Matrix, fullRotation: boolean): Matrix[] => {
    let rotate90 = rotateMatrix(state);
    if(fullRotation){
        let rotate180 = rotateMatrix(rotate90);
        let rotate270 = rotateMatrix(rotate180);
        return [
            state,
            rotate90,
            rotate180,
            rotate270,
        ];
    }
    return [
        state,
        rotate90,
    ]
}


export const getMatrixHeight = (state: Matrix): number => {
    return state.length;
}
export const getMatrixWidth = (state: Matrix): number => {
    return state[0].length;
}

export const detectInMatrix = (pattern: Matrix, state: Matrix): boolean => {
    const stateHeight = getMatrixHeight(state);
    const patternHeight = getMatrixHeight(pattern);

    if(stateHeight < patternHeight) return false;

    const stateWidth = getMatrixWidth(state);
    const patternWidth = getMatrixWidth(pattern);
    if(stateWidth < patternWidth) return false;

    for (let y = 0; y < stateHeight; y++) {

        // if no room left to match the pattern break
        if(y+patternHeight > stateHeight) {
            break;
        }

        for (let x = 0; x <= stateWidth; x++) {

            // if no room left to match the pattern break
            if(x+patternWidth > stateWidth) {
                break;
            }

            let isMatch = false;

            for(let yPattern = 0; yPattern < patternHeight; yPattern++){
                for (let xPattern = 0; xPattern < patternWidth; xPattern++) {

                    const yCompare = y + yPattern;
                    const xCompare = x + xPattern;

                    const stateValue = state[yCompare][xCompare];
                    const patternValue = pattern[yPattern][xPattern];

                    isMatch = stateValue === patternValue;
                    if(!isMatch) {
                        break;
                    }
                }
                if(!isMatch) {
                    break;
                }
            }

            if(isMatch) return true;
        }
    }
    return false;
}