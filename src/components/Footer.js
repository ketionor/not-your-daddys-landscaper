import React from "react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import Social from "./Social"

export default function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query FooterQuery {
        site {
          siteMetadata {
            contact {
              address
              city
              phone
              email
              state
              zip
            }
          }
        }
      }
    `
  )
  return (
    <div className="footer">
      <Social size="30" />
      <div className="contact-info">
        <p>{site.siteMetadata.contact.phone}</p>
        <p>{site.siteMetadata.contact.email}</p>
        <div className="address">
          <p>{site.siteMetadata.contact.address}</p>
          <p>
            {site.siteMetadata.contact.city}, {site.siteMetadata.contact.state}{" "}
            {site.siteMetadata.contact.zip}
          </p>
        </div>
      </div>
    </div>
  )
}
