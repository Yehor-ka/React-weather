import React, { ReactNode } from 'react'
import { Theme, ThemeContext } from '../context/ThemeContext'
import { changeCssRootVar } from '../model/ChangeCssRootVar';
import { storage } from '../model/Storage';

interface Props {
    children: ReactNode;
}

export const ThemeProvider = ({children, ...props}: Props) => {
    const [theme, setTheme] = React.useState<Theme>(storage.getItem('theme') || Theme.LIGHT);

    changeCssRootVar(theme)
    const changeTheme = (theme: Theme) => {
        storage.setItem('theme', theme)
        setTheme(theme)
        changeCssRootVar(theme)
    }

    return <ThemeContext.Provider value={{
        theme,
        changeTheme
    }}
    {...props}>
        {children}
    </ThemeContext.Provider>
}