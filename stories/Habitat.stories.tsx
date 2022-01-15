import React from 'react';
import {ComponentMeta} from '@storybook/react';
import Habitat from "components/Habitat";
import {useHabitatState} from "../src/hooks/use-habitat-state";
import {buildHabitat} from "utils/habitat";

export default {
    title: 'Habitat',
    component: Habitat,
} as ComponentMeta<typeof Habitat>;

export const _Habitat = () => {
    const {
        state,
        toggleCell,
    } = useHabitatState( buildHabitat(
        50,
        20,
        [
            {x: 5, y: 5},
            {x: 4, y: 5},
            {x: 0, y: 5},
        ]
    ))
    const handleCellClick = (x, y) => {
        toggleCell(x, y);
    }
    return <Habitat data={state} onCellClick={handleCellClick}/>
}