import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import styles from "./index.module.css"
import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
} from "@material/material-color-utilities"

import { SketchPicker } from "react-color"

export const Home = () => {
  const [theme, setTheme] = useState("light")
  const [hex, setHex] = useState<string>("#1da1f2")

  const isDark =
    window.matchMedia("(prefers-color-scheme: dark)").matches ||
    theme === "dark"

  // Get the theme from a hex color
  const _theme = themeFromSourceColor(argbFromHex(hex))

  useEffect(() => {
    // Apply the theme to the body by updating custom properties for material tokens
    applyTheme(_theme, { target: document.body, dark: isDark })
  }, [isDark, hex])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    document.body.dataset.theme = theme
  }

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        Customed Theme for Tailwind & Material you
        <button onClick={toggleTheme}>Toggle light/dark mode</button>
      </header>
      <main className={styles.main}>
        <h2>{hex}</h2>
        <section>
          <div>
            <h5>I'm a cute card</h5>
            <button>
              <Icon icon="fa-solid:pen" />
            </button>
          </div>
          <SketchPicker color={hex} onChange={(color) => setHex(color.hex)} />
        </section>
      </main>
    </div>
  )
}
