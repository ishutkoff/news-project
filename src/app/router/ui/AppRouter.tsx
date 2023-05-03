import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLoader from 'widgets/PageLoader/PageLoader';
import { routeConfig } from '../config/routeConfig';

export default function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                        key={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
