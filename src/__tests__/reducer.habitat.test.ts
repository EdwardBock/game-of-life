import {buildHabitat, countSurroundingLife, evolve} from "../utils/habitat";

describe("Count cell life surroundings", ()=>{
    it('Should be surrounded by none', ()=>{
        const habitatState = buildHabitat(3,3, []);

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                expect(
                    countSurroundingLife(habitatState, i, j)
                ).toBe(0);
            }
        }
    })

    it('Should be surrounded by one', ()=>{
        const habitatState = buildHabitat(3,3, [{x:0,y:0}]);

        const count = countSurroundingLife(habitatState, 1, 0);

        expect(count).toBe(1);
    });
    it('Should be surrounded by two', ()=>{
        const habitatState = buildHabitat(
            3,
            3,
            [{x:0,y:0},{x:1,y:0}]
        );

        const count = countSurroundingLife(habitatState, 0, 1);

        expect(count).toBe(2);
    });
    it('Should be surrounded by two next to', ()=>{
        const habitatState = buildHabitat(
            3,
            3,
            [{x:0,y:1},{x:2,y:1}]
        );

        const count = countSurroundingLife(habitatState, 1, 1);

        expect(count).toBe(2);
    });
    it('Should be surrounded by three on top', ()=>{
        const habitatState = buildHabitat(
            3,
            3,
            [{x:0,y:0},{x:1,y:0},{x:2,y:0}]
        );

        const count = countSurroundingLife(habitatState, 1, 1);

        expect(count).toBe(3);
    });
    it('Should be surrounded by three below', ()=>{
        const habitatState = buildHabitat(
            3,
            3,
            [{x:0,y:2},{x:1,y:2},{x:2,y:2}]
        );

        const count = countSurroundingLife(habitatState, 1, 1);

        expect(count).toBe(3);
    });
});
describe("Habitat evolution", ()=>{
    it("Should all cells be dead", ()=>{
        const habitatState = buildHabitat(3,3, [{x:0,y:0}]);
        const evolved = evolve(habitatState);
        evolved.forEach(row => {
            row.forEach(cell => {
                expect(cell.alive).toBeFalsy();
            })
        })
    });
    it("Should behave like a blinker", ()=>{
        const habitatState = buildHabitat(
            3, 3,
            [{x:0,y:1},{x:1,y:1},{x:2,y:1}]
        );
        const evolved = evolve(habitatState);
        const expected = buildHabitat(
            3,3,
            [{x:1,y:0},{x:1,y:1},{x:1,y:2}]
        );
        expect(evolved).toStrictEqual(expected)
    });
});