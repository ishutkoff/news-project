import { classNames } from 'shared/lib/className/className';
import React, { ReactNode } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose?: () => void
}
export const Modal = (props: ModalProps) => {
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
        <div className={classNames(cls.root, mods, [className])}>
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
