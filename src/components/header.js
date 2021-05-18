import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  const hideMenu = () => {
    let nav = document.querySelector(".nav")
    nav.style.height = "0px"
    nav.style.visibility = "hidden"
    console.log(nav.style.display)
  }

  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/" activeClassName="nav-item-active" onClick={hideMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName="nav-item-active" onClick={hideMenu}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            activeClassName="nav-item-active"
            onClick={hideMenu}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            activeClassName="nav-item-active"
            onClick={hideMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            activeClassName=".nav-item-active"
            onClick={hideMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
