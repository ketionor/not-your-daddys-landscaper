import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const hero = getImage(data.fileName)

  return (
    <Layout>
      <Seo title="Home" />
      {/* Hero image */}
      <GatsbyImage image={hero} alt="hero image" />
      <div className="value-prop">
        <h2>I Make Websites</h2>
        <div className="value-prop-items">
          <span>
            <h3>User Experience</h3>
            <p>
              I build websites taht are focused on an awesome user experience,
              which means more paying customers for your business.
            </p>
          </span>
          <span>
            <h3>Speed</h3>
            <p>
              Websites need to be fast, or your customers will go back to Google
              and find your competitors.
            </p>
          </span>
          <span>
            <h3>Search Engine oprimization</h3>
            <p>
              More people use Google than ever before, and if your business
              shows up on Google, you will see more customers!
            </p>
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    fileName: file(
      relativePath: { eq: "hero.jpg" }
      sourceInstanceName: { eq: "static-images" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: WEBP, layout: FULL_WIDTH)
      }
    }
  }
`
