import { classNames } from 'shared/lib/className/className';
import React, { ReactNode } from 'react';
import { useTheme } from 'shared/contexts/ThemeContext';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
    const { theme } = useTheme();
    const {
        className, children, isOpen, onClose,
    } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const onCloseHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={classNames(cls.root, mods, [className, theme])}>
            <div
                onClick={onCloseHandler}
                className={classNames(cls.overlay, {}, [className])}
            >
                <div
                    onClick={onContentClick}
                    className={classNames(cls.content, {}, [className])}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
