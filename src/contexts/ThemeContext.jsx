import { createContext, useContext, useEffect, useState } from "react"

// Provide default values to prevent context errors
const ThemeContext = createContext({
  theme: "system",
  resolvedTheme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
})

function getSystemTheme() {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function getStoredTheme() {
  if (typeof window === "undefined") return "system"
  try {
    return localStorage.getItem("theme") || "system"
  } catch {
    return "system"
  }
}

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState("system")
  const [resolvedTheme, setResolvedTheme] = useState("light")

 
  useEffect(() => {
    const storedTheme = getStoredTheme()
    const systemTheme = getSystemTheme()

    setThemeState(storedTheme)
    setResolvedTheme(storedTheme === "system" ? systemTheme : storedTheme)
  }, [])

  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = (e) => {
      if (theme === "system") {
        const newResolvedTheme = e.matches ? "dark" : "light"
        setResolvedTheme(newResolvedTheme)
        updateDocumentTheme(newResolvedTheme)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  // Update theme when it changes
  useEffect(() => {
    const newResolvedTheme = theme === "system" ? getSystemTheme() : theme
    setResolvedTheme(newResolvedTheme)
    updateDocumentTheme(newResolvedTheme)

    try {
      localStorage.setItem("theme", theme)
    } catch {
      
    }
  }, [theme])

  const updateDocumentTheme = (resolvedTheme) => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(resolvedTheme)

    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", resolvedTheme === "dark" ? "#000000" : "#ffffff")
    }
  }

  const setTheme = (newTheme) => {
    setThemeState(newTheme)
  }

  const toggleTheme = () => {
    setThemeState((prev) => {
      if (prev === "light") return "dark"
      if (prev === "dark") return "system"
      return "light" 
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
