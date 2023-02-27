import Loader, { LoaderTheme } from 'shared/ui/Loader/ui/Loader';
import { Theme, useTheme } from 'shared/contexts/ThemeContext';
import cls from './PageLoader.module.scss';

const PageLoader = () => {
    const { theme } = useTheme();

    return (
        <div className={cls.PageLoader}>
            <Loader
                theme={theme === Theme.DARK
                    ? LoaderTheme.LIGHT : LoaderTheme.DARK}
            />
        </div>
    );
};

export default PageLoader;
