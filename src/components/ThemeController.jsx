import React,{useState, useEffect} from 'react'
import { Sun, Moon } from 'lucide-react'
import { useContext } from 'react'

const ThemeController = () => {

    const [theme, setTheme] = useState(localStorage.getItem("darkMode") || false)

    const handleThemeChange = () => {
        setTheme(!theme)
    }

    useEffect(() => {
        if (theme) {
            localStorage.setItem("darkMode", true);
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem("darkMode", false);
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
            <label onClick={handleThemeChange} className="swap swap-rotate">
                {/* moon icon */}
                {theme && <Moon/>}

                {/* sun icon */}
               {!theme && <Sun/>}


            </label>
    )
}

export default ThemeController