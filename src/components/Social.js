import React from "react"
import { StaticQuery, graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Social({ size }) {
  const { site } = useStaticQuery(
    graphql`
      query SocialQuery {
        site {
          siteMetadata {
            social {
              twitter
              instagram
            }
          }
        }
      }
    `
  )
  return (
    <div className="social-icons">
      <a
        href={`https://www.twitter.com/${site.siteMetadata.social.twitter}`}
        target="_blank"
      >
        <StaticImage
          src="../images/social-icons/iconmonstr-twitter-1-64.png"
          width={parseInt(size)}
        />
      </a>
      <a
        href={`https://www.instagram.com/${site.siteMetadata.social.instagram}`}
      >
        <StaticImage
          src="../images/social-icons/iconmonstr-instagram-1-64.png"
          alt="poop"
        />
      </a>
    </div>
  )
}
