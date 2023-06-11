import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from 'shared/contexts/ThemeContext/ThemeContext';
import { FC, useMemo, useState } from 'react';

const ThemeProvider: FC = ({ children }) => {
    const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({ theme, setTheme }),
        [theme],
    );
    document.body.className = theme;
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
