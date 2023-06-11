import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/className/className';
import { AppLink } from 'shared/ui/AppLink/';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLinkColorMod } from 'shared/ui/AppLink/ui/AppLink';
import { Portal } from 'shared/ui/Portal/Portal';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppButton, ThemeButtonType } from 'shared/ui/AppButton/AppButton';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const toggleAuthModal = useCallback(() => {
        setIsAuthModal(!isAuthModal);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.NavbarWrapper}>
                <div className={cls.Left}>
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
                <div className={cls.Right}>
                    <LangSwitcher />
                    <AppButton
                        className={cls.LoginButton}
                        onClick={toggleAuthModal}
                        theme={ThemeButtonType.OUTLINE}
                    >
                        {t('Войти')}
                    </AppButton>
                    <Portal>
                        <Modal
                            isOpen={isAuthModal}
                            onClose={() => setIsAuthModal(false)}
                        >
                            sdfsdf

                        </Modal>
                    </Portal>
                </div>

            </div>
        </div>
    );
};
