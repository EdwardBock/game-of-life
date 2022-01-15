import {Cell, HabitatState} from "types";
import produce from "immer";

export const buildHabitat = (
    columns: number,
    rows: number,
    alive: {x:number,y:number}[] = []
) => {
    return [...Array(rows)].map((_,yIndex) => {
        return [...Array(columns)].map((_, xIndex) => {
            return alive.find(({x,y}) => x == xIndex && y == yIndex) ? 1 : 0;
        })
    }).map(row => {
        return row.map(value => ({alive: value === 1} as Cell))
    });
}

export const toggleCell = (
    state:HabitatState, x:number, y:number,
): HabitatState => {
    return produce(state, draft => {
        draft[y][x] = {
            alive: !draft[y][x].alive,
        }
    });
}

export const countSurroundingLife = (
    state: HabitatState, x:number, y: number
) => {
    const candidates = [
        // over cell
        {x: x-1, y: y-1},
        {x: x, y: y-1},
        {x: x+1, y: y-1},
        // same row
        {x: x-1, y: y},
        {x: x+1, y: y},
        // below row
        {x: x-1, y: y+1},
        {x: x, y: y+1},
        {x: x+1, y: y+1},
    ].filter(candidate => {
        return candidate.x >= 0 && candidate.y >= 0 &&
            candidate.y < state.length && candidate.x < state[0].length;
    });

    return candidates.reduce((count, {x,y})=>{
        return state[y][x].alive ? count+1 : count;
    },0);
}

export const evolve = (
    state: HabitatState
): HabitatState => {
    return produce(state, draft => {
        state.forEach((row, y) => {
            row.forEach((cell, x) => {
                const surroundingLives = countSurroundingLife(state, x, y);
                if(!cell.alive && surroundingLives == 3){
                    draft[y][x].alive = true;
                } else if(cell.alive && (surroundingLives < 2 || surroundingLives > 3)){
                    draft[y][x].alive = false;
                }
            })
        });
    });
}