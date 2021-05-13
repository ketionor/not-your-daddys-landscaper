/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const showMenu = () => {
    let nav = document.querySelector(".nav")
    nav.style.width = "100%"
  }

  return (
    <>
      <div className="light" id="global-container">
        <div class="theme-container">
          <div className="mobile-nav">
            <FontAwesomeIcon
              icon={faBars}
              className="fas fa-bars"
              onClick={showMenu}
            />
          </div>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <div className="content-container">
            <main>{children}</main>
            <footer
              style={{
                marginTop: `2rem`,
              }}
            ></footer>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
