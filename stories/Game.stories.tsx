import React from 'react';
import {ComponentMeta} from '@storybook/react';
import Game from "components/Game";

export default {
    title: 'Game',
    component: Game,
} as ComponentMeta<typeof Game>;

export const _Game = () => {

    return <Game />
}