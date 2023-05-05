import React, { useState, useEffect } from 'react';
import './darkMode.css';
import Home from "./Home";
import { Header } from "./components/index.components"; 

function App() {

    // let getCurrent = new Date();
    // let currentTime = `${getCurrent.getDay()} | ${getCurrent.getMonth() + 1} | ${getCurrent.getFullYear()}`;ss

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`App ${theme}`}>
           
            <section>

                <nav className="topNavbar">
                    <div className="displayDate">
                        <p></p>
                    </div>
                    <div className="toggleCheckbox{">
                       
                    </div>
                </nav>

                <Header className={`App ${theme}`}  />

            </section>

            <button onClick={toggleTheme}>Toggle Theme</button>
            <Home />
        </div>
    );
}
export default App;
