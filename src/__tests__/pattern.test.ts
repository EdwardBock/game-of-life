import {detectPattern} from "utils/pattern";
import {Matrix} from "types";
import {blinkerPattern} from "model/patterns/oscillators";

it("Should detect blinker", ()=>{
    const state: Matrix = [
        [0,0,0,0,0,0],
        [0,0,1,0,0,0],
        [0,0,1,0,0,0],
        [0,0,1,0,0,0],
        [0,0,0,0,0,0],
    ];
    expect(detectPattern(state, blinkerPattern)).toBeTruthy()
})