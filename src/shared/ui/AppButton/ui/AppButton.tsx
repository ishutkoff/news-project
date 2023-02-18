import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './AppButton.module.scss';

export type ValueOf<T> = T[keyof T]
// eslint-disable-next-line no-undef
export type ThemeButton = ValueOf<typeof ThemeButton>

export const ThemeButtonType = {
    CLEAR: 'clear',
} as const;

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme: ThemeButton
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
