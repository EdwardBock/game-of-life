import {detectInMatrix, rotateMatrix} from "../utils/matrix";
import {Matrix} from "../types";

describe('Matrix rotate 90 deg', ()=>{
    it("Should be rotated correctly 2x2", ()=>{
        const state: Matrix = [
            [1,0],
            [1,0]
        ];
        expect(rotateMatrix(state)).toStrictEqual([
            [1,1],
            [0,0]
        ]);
    });
    it("Should be rotated correctly 3x3", ()=>{
        const state: Matrix = [
            [1,0,0],
            [1,0,0],
            [1,0,0]
        ];
        expect(rotateMatrix(state)).toStrictEqual([
            [1,1,1],
            [0,0,0],
            [0,0,0],
        ]);
        expect(rotateMatrix(rotateMatrix(state))).toStrictEqual([
            [0,0,1],
            [0,0,1],
            [0,0,1],
        ]);
    });
})

describe("Detect in matrix", ()=>{
    it("Should not detect if pattern larger than matrix", ()=>{
        const isDetected = detectInMatrix(
            [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ],
            [
                [0,0],
                [0,0],
            ]
        );
        expect(isDetected).toBeFalsy();
    });
    it("Should not detect simple 1x1 pattern", ()=>{
        const isDetected = detectInMatrix(
            [
                [1]
            ],
            [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ]
        );
        expect(isDetected).toBeFalsy();
    });
    it("Should detect simple 1x1 pattern", ()=>{
       const isDetected = detectInMatrix(
           [
               [1]
           ],
           [
               [0,0,0],
               [0,1,0],
               [0,0,0]
           ]
       );
       expect(isDetected).toBeTruthy();
    });
    it("Should detect if identical", ()=>{
        const isDetected = detectInMatrix(
            [
                [0,0,0],
                [0,1,0],
                [0,0,0]
            ],
            [
                [0,0,0],
                [0,1,0],
                [0,0,0]
            ]
        );
        expect(isDetected).toBeTruthy();
    });
    it("Should not detect 2x1 pattern", ()=>{
        const isDetected = detectInMatrix(
            [
                [1],
                [1]
            ],
            [
                [0,0,0],
                [0,1,0],
                [0,0,0],
            ]
        );
        expect(isDetected).toBeFalsy();
    });
    it("Should detect 2x1 pattern in edge", ()=>{
        const isDetected = detectInMatrix(
            [
                [1],
                [1]
            ],
            [
                [0,0,0],
                [0,0,1],
                [0,0,1],
            ]
        );
        expect(isDetected).toBeTruthy();
    });
    it("Should not detect 3x3 pattern", ()=>{
        const isDetected = detectInMatrix(
            [
                [0,1,0],
                [0,1,0],
                [0,1,0],
            ],
            [
                [0,1,0,0],
                [0,1,0,0],
                [0,0,0,0]
            ]
        );
        expect(isDetected).toBeFalsy();
    });
    it("Should detect 3x3 pattern", ()=>{
        const isDetected = detectInMatrix(
            [
                [0,1,0],
                [0,1,0],
                [0,1,0],
            ],
            [
                [0,0,0,0],
                [0,0,0,1],
                [0,0,0,1],
                [0,0,0,1]
            ]
        );
        expect(isDetected).toBeFalsy();
    });
    it("Should detect blinker pattern", ()=>{
        const isDetected = detectInMatrix(
            [
                [0,0,0],
                [0,1,0],
                [0,1,0],
                [0,1,0],
                [0,0,0],
            ],
            [
                [0,0,0,0],
                [0,0,1,0],
                [0,0,1,0],
                [0,0,1,0],
                [0,0,0,0],
            ]
        );
        expect(isDetected).toBeTruthy();
    });
})
