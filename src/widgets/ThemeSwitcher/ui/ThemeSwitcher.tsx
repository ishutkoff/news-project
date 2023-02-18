import { FC } from 'react';
import { useTheme, Theme } from 'shared/contexts/ThemeContext';
import { classNames } from 'shared/lib';
import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';

import { AppButton } from 'shared/ui/AppButton';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className, ...otherProps } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <AppButton
            theme="clear"
            onClick={() => toggleTheme()}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            {...otherProps}
        >
            {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
        </AppButton>
    );
};
