import {Pattern} from "types";
import {getRotations} from "utils/matrix";

export const blinkerPattern: Pattern = {
    id: "blinker",
    variants: getRotations(
        [
            [1],
            [1],
            [1],
        ],
        false
    )
};


export const toadPattern: Pattern = {
    id: "toad",
    variants: [
        ...getRotations(
            [
                [0, 1, 1, 1],
                [1, 1, 1, 0],
            ],
            false
        ),
        ...getRotations(
            [
                [0, 0, 1, 0],
                [1, 0, 0, 1],
                [1, 0, 0, 1],
                [0, 1, 0, 0],
            ],
            false
        )
    ],
}