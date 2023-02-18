import { useTranslation } from 'react-i18next'
import i18n from 'shared/config/i18n.ts/i18n'
import { classNames } from 'shared/lib'
import { AppButton } from 'shared/ui/AppButton'
import { ThemeButton } from 'shared/ui/AppButton/ui/AppButton'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
	className?: string
}
export const LangSwitcher = (props: LangSwitcherProps) => {
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}
	const { className } = props
	return (
		<div className={classNames(cls.LangSwitcher, {}, [className])}>
			<AppButton
				className={cls.LangBtn}
				onClick={toggle}
				theme={ThemeButton.CLEAR}
			>
				{i18n.language === 'ru' ? 'en' : 'ru'}
			</AppButton>
		</div>
	)
}
