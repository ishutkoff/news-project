import { ThemeProvider } from 'shared/contexts/ThemeContext'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'

import 'shared/config/i18n.ts/i18n'

render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
)
