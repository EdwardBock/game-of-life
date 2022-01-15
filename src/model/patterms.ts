import {Pattern} from "types";
import {
    beeHivePattern,
    blockPattern,
    boatPattern,
    loafPattern,
    tubePattern,
} from './patterns/still-lifes';
import {
    blinkerPattern, toadPattern
} from "./patterns/oscillators";

export const patternLibrary: Pattern[] = [

    // still-lifes
    blockPattern,
    beeHivePattern,
    loafPattern,
    boatPattern,
    tubePattern,

    // oscillators
    blinkerPattern,
    toadPattern,

    // spaceships

]