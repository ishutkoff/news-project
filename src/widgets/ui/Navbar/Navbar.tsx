import { FC } from 'react'
import { classNames } from 'shared/lib'
import { AppLink } from 'shared/ui/AppLink/'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = props => {
	const { className } = props

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<AppLink to={'/'} className={cls.NavbarLink} colorMod='secondary'>
				Main
			</AppLink>
			<AppLink to={'/about'} className={cls.NavbarLink} colorMod='primary'>
				About
			</AppLink>
			<ThemeSwitcher />
		</div>
	)
}
