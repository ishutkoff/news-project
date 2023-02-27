import { classNames } from 'shared/lib/className/className';
import cls from './Loader.module.scss';

export enum LoaderTheme {
    DARK= 'dark',
    LIGHT= 'light',
}

interface LoaderPropTypes {
    className?:string
    theme:LoaderTheme
}
const Loader = (props:LoaderPropTypes) => {
    const { className, theme } = props;

    return (
        <div className={classNames(cls.Loader, { }, [className, theme])} />
    );
};

export default Loader;
