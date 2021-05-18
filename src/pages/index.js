import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import Social from "../components/Social"
import Value from "../components/Value"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageWithOverlay from "../components/ImageWithOverlay"

const IndexPage = ({ data }) => {
  const hero = getImage(data.allFile.edges[0])

  return (
    <Layout>
      <Seo title="Home" />
      {/* Hero image */}
      <StaticImage
        src="../images/index/house-front-lawn.jpg"
        alt="hero image"
      />
      <div className="about">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <ImageWithOverlay
        title="Lorem Ipsum"
        text="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cta={true}
      />
      <div></div>
      <Value />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "static-images" }
        name: { eq: "house-front-lawn" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(aspectRatio: 1)
          }
        }
      }
    }
  }
`
