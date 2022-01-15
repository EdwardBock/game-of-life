import {HabitatState, Matrix, Pattern} from "types";
import {detectInMatrix, rotateMatrix} from "./matrix";

export const detectPattern = (state: HabitatState, pattern: Pattern): boolean => {
    for (const variant of pattern.variants) {
        if (detectInMatrix(variant, state)) return true;
    }
    return false;
}