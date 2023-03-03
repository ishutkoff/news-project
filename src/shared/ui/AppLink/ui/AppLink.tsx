import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/className/className';
import cls from './AppLink.module.scss';

export enum AppLinkColorMod {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    colorMod: AppLinkColorMod
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className, colorMod, children, to, ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[colorMod]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
