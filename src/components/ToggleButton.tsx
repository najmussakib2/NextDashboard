"use client"

import { MoonFilled,  SunFilled } from "@ant-design/icons";
import * as React from "react"

const ToggleButton = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        console.log(isDarkMode);
    };

    React.useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <>
            <div 
            className={`flex items-center justify-between  p-2 rounded-full cursor-pointer transition-colors`} 
            onClick={toggleTheme}
        >
            <div 
                className={`rounded-full flex items-center justify-center transition-transform transform ${isDarkMode ? 'translate-x-0' : 'translate-x-0'}`}
            >
                {isDarkMode ? <MoonFilled className='text-lg' style={{color: "#b4bad4"}}/> : <SunFilled className='text-lg' style={{color: "#b4bad4"}} />}
            </div>
        </div>
        </>
    )
};

export default ToggleButton;