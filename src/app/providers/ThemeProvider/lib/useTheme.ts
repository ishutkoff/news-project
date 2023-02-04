import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext)
	const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

	const toggleTheme = () => {
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
		setTheme(newTheme)
	}
	return {
		toggleTheme,
		theme,
	}
}
