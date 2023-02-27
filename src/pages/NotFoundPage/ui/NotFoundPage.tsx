import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/className';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps{
    className?:string
}

const NotFoundPage = (props:NotFoundPageProps) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Ошибка 404')}
        </div>
    );
};

export default NotFoundPage;
