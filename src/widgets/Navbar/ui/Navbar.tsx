import { FC } from 'react';
import { classNames } from 'shared/lib/className/className';
import { AppLink } from 'shared/ui/AppLink/';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLinkColorMod } from 'shared/ui/AppLink/ui/AppLink';
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
                    <AppLink
                        to="/"
                        className={cls.NavbarLink}
                        colorMod={AppLinkColorMod.SECONDARY}
                    >
                        {t('Главная страница')}
                    </AppLink>
                    <AppLink
                        to="/about"
                        className={cls.NavbarLink}
                        colorMod={AppLinkColorMod.PRIMARY}
                    >
                        {t('О сайте')}
                    </AppLink>
                </div>
                <LangSwitcher />
            </div>
        </div>
    );
};
