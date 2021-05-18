import React from "react"
import Card from "./Card"

const Value = () => {
  const services = [
    "Landscaping",
    "Hardscaping",
    "Drainage solutions",
    "Irrigation",
    "Fencing",
    "Lighting",
  ]
  return (
    <div className="value-section">
      <h2>Services</h2>
      {services.map(service => (
        <Card service={service} />
      ))}
    </div>
  )
}

export default Value
