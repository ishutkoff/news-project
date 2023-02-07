import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from 'shared/contexts/ThemeContext'
import { AppRouter } from 'app/router/'
import { Navbar } from 'widgets/ui/Navbar/Navbar'

const App = () => {
	const { theme } = useTheme()
	return (
		<div className={`app ${theme}`}>
			<Navbar />
			<AppRouter />
		</div>
	)
}

export default App
