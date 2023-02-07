import { FC } from 'react'
import { Link } from 'react-router-dom'
import { LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib'
import cls from './AppLink.module.scss'

type ColorMod = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
	className?: string
	colorMod: ColorMod
}

export const AppLink: FC<AppLinkProps> = props => {
	const { className, colorMod, children, to, ...otherProps } = props
	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[colorMod]])}
			{...otherProps}
		>
			{children}
		</Link>
	)
}