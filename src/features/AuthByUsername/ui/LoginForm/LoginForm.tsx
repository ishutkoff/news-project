import { classNames } from 'shared/lib/className/className';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
className?: string

}
export const LoginForm = (props:LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input type="text" placeholder={t('Логин')} />
            <input type="text" placeholder={t('Пароль')} />
            <AppButton theme="outline">{t('Войти')}</AppButton>
        </div>
    );
};
