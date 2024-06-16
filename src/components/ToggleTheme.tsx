'use client'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

const ToggleTheme = ({ children, ...props }: ThemeProviderProps) => {

    return (
        <div className="">
            <NextThemesProvider {...props}>{children}</NextThemesProvider>
        </div>
    );
};

export default ToggleTheme;