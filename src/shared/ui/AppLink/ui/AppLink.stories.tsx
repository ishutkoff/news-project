import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/ThemeContext';
import { AppLink, AppLinkColorMod } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    colorMod: AppLinkColorMod.PRIMARY,
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    colorMod: AppLinkColorMod.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    colorMod: AppLinkColorMod.SECONDARY,
};
Secondary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Text',
    colorMod: AppLinkColorMod.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
