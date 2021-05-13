import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/" activeClassName="nav-item-active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName="nav-item-active">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/portfolio" activeClassName="nav-item-active">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="nav-item-active">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName=".nav-item-active">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
