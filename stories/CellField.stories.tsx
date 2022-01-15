import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CellField from "components/CellField";

export default {
    title: 'Cell Field',
    component: CellField,
} as ComponentMeta<typeof CellField>;

const Template: ComponentStory<typeof CellField> = (args) => <CellField {...args} />;

export const Life = Template.bind({});
Life.args = {
    alive: true,
};

export const Dead = Template.bind({});
Dead.args = {
    alive: false,
};