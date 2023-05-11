import './styles/index.scss';
import { useTheme } from 'shared/contexts/ThemeContext';
import { AppRouter } from 'app/router/';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { Portal } from 'shared/ui/Portal/Portal';

function App() {
    const { theme } = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Suspense fallback="">
                <div className="main-wrapper">
                    <Sidebar />
                    <div className="content-page">
                        <Navbar />
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
