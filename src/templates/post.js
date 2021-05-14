import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const hero = getImage(post.frontmatter.featuredImage)
  return (
    <>
      <Layout>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        {/* Pulls an image the exact width of the body, and then scales to fit content container. */}
        <GatsbyImage loading="eager" image={hero} alt="fart" />
        <article>
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>

          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
          <footer>{/* <Bio /> */}</footer>
        </article>
      </Layout>
    </>
  )
}

export const postQuery = graphql`
  query BlogPostBypath {
    markdownRemark {
      html
      frontmatter {
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: WEBP
              layout: FULL_WIDTH
            )
          }
        }
        date
        title
      }
    }
  }
`
