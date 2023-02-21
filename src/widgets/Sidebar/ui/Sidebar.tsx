import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import { AppButton } from 'shared/ui/AppButton';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import CollapseIcon from './icons/collapse.svg';
import ExpandIcon from './icons/expand.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
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
            className={classNames(cls.root, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            {...otherProps}
        >
            <AppButton
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
