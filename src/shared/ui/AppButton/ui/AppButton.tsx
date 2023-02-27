import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/className/className';
import cls from './AppButton.module.scss';

export type ValueOf<T> = T[keyof T]

export const ThemeButtonType = {
    CLEAR: 'clear',
} as const;

export type ThemeButton = ValueOf<typeof ThemeButtonType>

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}
export const AppButton: FC<AppButtonProps> = (props) => {
    const {
        className, children, theme, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
