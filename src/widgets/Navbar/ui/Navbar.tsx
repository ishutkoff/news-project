import { FC } from 'react';
import { classNames } from 'shared/lib/className/className';
import { AppLink } from 'shared/ui/AppLink/';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.NavbarWrapper}>
                <div>
                    <AppLink to="/" className={cls.NavbarLink} colorMod="secondary">
                        {t('Главная страница')}
                    </AppLink>
                    <AppLink to="/about" className={cls.NavbarLink} colorMod="primary">
                        {t('О сайте')}
                    </AppLink>
                </div>
                <LangSwitcher />
            </div>
        </div>
    );
};
