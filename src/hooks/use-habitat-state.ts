import {HabitatState} from "types";
import {useState} from "react";
import {evolve, toggleCell} from "utils/habitat";

export const useHabitatState = (
    initialState: HabitatState
) => {
    const [state, setState] = useState<HabitatState>(initialState);
    return {
        state,
        toggleCell:(x:number,y:number) => setState(toggleCell(state,x,y)),
        evolve: ()=> setState(evolve(state)),
    }
}