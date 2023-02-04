import { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'

import { useTheme } from 'app/providers/ThemeProvider'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={`app ${theme}`}>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<button onClick={() => toggleTheme()}>Сменить тему</button>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPage />} />
					<Route path={'/'} element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
