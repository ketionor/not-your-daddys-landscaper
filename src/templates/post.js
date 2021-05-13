import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <>
      <Layout>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
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
        date
        title
      }
    }
  }
`
