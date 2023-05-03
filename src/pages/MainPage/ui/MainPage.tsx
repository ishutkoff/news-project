import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/className';

export default function MainPage() {
    const { t } = useTranslation('main');
    return (
        <div className={classNames('main', { second: true, test: false }, [])}>
            {t('Главная страница')}
            <Counter />
        </div>
    );
}
