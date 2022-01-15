import {Pattern} from "types";
import {getRotations} from "../../utils/matrix";

export const blockPattern: Pattern = {
    id: "block",
    variants: [
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ]
    ]
}

export const beeHivePattern: Pattern = {
    id: "bee-hive",
    variants: getRotations(
        [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [0, 1, 1, 0],
        ],
        false
    )
};

export const loafPattern: Pattern = {
    id: "loaf",
    variants: getRotations(
        [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [0, 1, 0, 1],
            [0, 0, 1, 0],
        ],
        true
    )
};

export const boatPattern: Pattern = {
    id: "boat",
    variants: getRotations(
        [
            [1, 1, 0],
            [1, 0, 1],
            [0, 1, 0],
        ],
        true
    )
};

export const tubePattern: Pattern = {
    id: "loaf",
    variants: [
        [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0],
        ]
    ]
};
