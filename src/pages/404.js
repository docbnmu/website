import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Date from "../components/date"
const NotFoundPage = () => (
  <Layout pageInfo={{ pageName: "404" }}>
    <SEO title="404: Not found" />
    <h1>Page not found.</h1>
    <br />

    <h2>Error 4xx: We can't find the page you're looking for.</h2>

    <br></br>
    <Date />
  </Layout>
)

export default NotFoundPage
