import { FC, useState } from 'react';
import { classNames } from 'shared/lib/className/className';
import { AppButton } from 'shared/ui/AppButton';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import CollapseIcon from './icons/collapse.svg';
// @ts-ignore
import ExpandIcon from './icons/expand.svg';
// @ts-ignore
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { t } = useTranslation();
    const { className, ...otherProps } = props;
    const [collapsed, setCollapse] = useState(
        localStorage.getItem('sidebarCollapsed') === 'true',
    );

    const collapseButtonHandler = () => {
        const newValue = !collapsed;
        localStorage.setItem('sidebarCollapsed', `${newValue}`);
        setCollapse(newValue);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.root, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            {...otherProps}
        >
            {t('Главная страница')}
            <AppButton
                data-testid="toggle-btn"
                theme="clear"
                onClick={() => collapseButtonHandler()}
                className={classNames(cls['collapse-button'], {}, [])}
                {...otherProps}
            >
                {collapsed ? <ExpandIcon /> : <CollapseIcon />}
            </AppButton>
            {' '}
            <ThemeSwitcher
                className={classNames(cls['navbar-theme-selector'], {}, [])}
            />
        </div>
    );
};
