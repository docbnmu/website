import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Date = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTimeZone
      }
    }
  `)

  return <p>Last updated: {data.site.buildTimeZone}</p>
}

export default Date
