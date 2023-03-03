import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppButton, ThemeButtonType } from './AppButton';

export default {
    title: 'shared/AppButton',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButtonType.CLEAR,
};
export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButtonType.OUTLINE,
};
