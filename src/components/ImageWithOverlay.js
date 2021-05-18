import { StaticImage } from "gatsby-plugin-image"
import CTAButton from "./CTAButton"
import React from "react"

const ImageWithOverlay = ({ text, title, cta }) => {
  return (
    <div className="image-with-overlay">
      <StaticImage src="../images/index/house-front-lawn.jpg" alt="img" />
      <div className="overlay">
        <div className="text-backdrop">
          <h3>{title}</h3>
          <p>{text}</p>
          {cta ? <CTAButton text="Contact Us" /> : null}
        </div>
      </div>
    </div>
  )
}

export default ImageWithOverlay
