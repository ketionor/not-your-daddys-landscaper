import React, { useEffect } from "react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ThemeToggle = () => {
  let body
  useEffect(() => {
    body = document.querySelector("body")
    body.className = "light"
  })

  const toggleTheme = () => {
    if (body.className === "dark") {
      body.classList.replace("dark", "light")
    } else {
      body.classList.replace("light", "dark")
    }
    console.log(body.className)
  }

  return (
    <div className="theme-toggle">
      <div className="dark-button">
        <input
          type="checkbox"
          id="toggle"
          onClick={toggleTheme}
          //   onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          //   checked={theme === "dark"}
        />
        <label className="label" for="toggle">
          <FontAwesomeIcon icon={faMoon} className="fas fa-moon" />
          <FontAwesomeIcon icon={faSun} className="fas fa-sun" />
          <div className="ball"></div>
        </label>
      </div>
    </div>
  )
}

export default ThemeToggle
