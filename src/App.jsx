import React, { useState, useEffect } from 'react';
import './darkMode.css';
import Home from "./Home";
import { Header } from "./components/index.components";
import useLocalStorage from 'use-local-storage'

function App() {

    // let getCurrent = new Date();
    // let currentTime = `${getCurrent.getDay()} | ${getCurrent.getMonth() + 1} | ${getCurrent.getFullYear()}`;ss

    // const [theme, setTheme] = useState(
    //     localStorage.getItem('theme') || 'light'
    // );
    // const toggleTheme = () => {
    //     if (theme === 'light') {
    //         setTheme('dark');
    //     } else {
    //         setTheme('light');
    //     }
    // };
    // useEffect(() => {
    //     localStorage.setItem('theme', theme);
    //     document.body.className = theme;
    // }, [theme]);

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : "light";
        setTheme(newTheme);
    }

    return (

        <div className="app" data-theme={theme}>

            <section>
                <div>
                    <div></div>
                    <button onClick={switchTheme}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                </button>
                </div>

                <Header className={`App ${theme}`} />
            </section>

            <Home />

        </div>
        
    );
}
export default App;
