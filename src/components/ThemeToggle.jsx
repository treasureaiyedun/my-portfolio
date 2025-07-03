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
        <Moon className="text-gray-800" />
      ) : (
        <Sun />
      )}
    </button>
  )
}

export default ThemeToggle
