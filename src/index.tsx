import { ThemeProvider } from 'shared/contexts/ThemeContext';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import 'shared/config/i18n/i18n';
import App from './app/App';

render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary>
                <StoreProvider>
                    <App />
                </StoreProvider>
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
