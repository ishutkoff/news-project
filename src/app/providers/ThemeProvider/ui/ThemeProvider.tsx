import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext'
import { FC, useMemo, useState } from 'react'

const ThemeProvider: FC = ({ children }) => {
	const defaultTheme =
		(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

	const [theme, setTheme] = useState<Theme>(defaultTheme)

	const defaultProps = useMemo(
		() => ({ theme: theme, setTheme: setTheme }),
		[theme]
	)
	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
