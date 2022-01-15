import {useState} from "react";

export const useMyPatternIds = () =>{
    const [state, setState] = useState<string[]>([]);

    return {
        patternIds: state,
        addPatternId: (id: string) => {
            if(!state.includes(id)){
                setState([...state, id]);
            }
        }
    }
}