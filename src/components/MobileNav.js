import React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MobileNav = () => {
  const showMenu = () => {
    let nav = document.querySelector(".nav")
    nav.style.height = "100vh"
    nav.style.visibility = "visible"
    console.log(nav.style.display)
  }

  return (
    <div className="mobile-nav">
      <h1>Not Your Daddy's Landscaping</h1>
      <FontAwesomeIcon
        icon={faBars}
        className="fas fa-bars"
        onClick={showMenu}
      />
      <Header />
    </div>
  )
}

export default MobileNav
