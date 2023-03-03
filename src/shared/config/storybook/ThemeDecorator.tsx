import { Story } from '@storybook/react';
import { Theme } from 'shared/contexts/ThemeContext';

export const ThemeDecorator = (theme:Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
