import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const Card = ({ service }) => {
  const data = useStaticQuery(
    graphql`
      query ServicesQuery {
        allFile(filter: { sourceInstanceName: { eq: "static-images" } }) {
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
  )
  let image = data.allFile.edges.find(e => e.node.name === service)
  if (!image) {
    image = data.allFile.edges[0]
  }
  const img = getImage(image.node)

  return (
    <div className="card">
      <GatsbyImage image={img} alt="img" />
      <div className="overlay">
        <p>{service}</p>
      </div>
    </div>
  )
}

export default Card
