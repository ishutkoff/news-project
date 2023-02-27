import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
};

export const PageError = () => {
    const { t } = useTranslation('main');

    return (
        <div className={cls.PageError}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <button type="button" onClick={reloadPage}>
                {t('Обновить страницу')}
            </button>
        </div>
    );
};
