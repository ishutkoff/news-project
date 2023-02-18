import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui/AppLink/';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.NavbarWrapper}>
                <div>
                    <AppLink to="/" className={cls.NavbarLink} colorMod="secondary">
                        Main
                    </AppLink>
                    <AppLink to="/about" className={cls.NavbarLink} colorMod="primary">
                        About
                    </AppLink>
                </div>
                <LangSwitcher />
            </div>
        </div>
    );
};
