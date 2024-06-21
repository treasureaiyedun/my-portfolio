import React,{useState, useEffect} from 'react'
import { Moon, Sun } from 'lucide-react'
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

                {/* sun icon */}
               {!theme && <Sun/>}

                {/* moon icon */}
                {theme && <Moon/>}

            </label>
    )
}

export default ThemeController