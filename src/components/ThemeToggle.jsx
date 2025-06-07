import { useTheme } from "../contexts/ThemeContext"
import { Moon, Sun } from "lucide-react"

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const handleToggle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={handleToggle}
      className="p-1 rounded-lg"
      aria-label={`Toggle ${resolvedTheme === "light" ? "dark" : "light"} mode`}
    >
      {resolvedTheme === "light" ? (
        <Moon className="text-gray-800 2xl:w-8 2xl:h-8" />
      ) : (
        <Sun className="2xl:w-8 2xl:h-8" />
      )}
    </button>
  )
}

export default ThemeToggle
