import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"
import Footer from "./Footer"
import MobileNav from "./MobileNav"

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

  return (
    <>
      <MobileNav />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="content-container">
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        ></footer>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
