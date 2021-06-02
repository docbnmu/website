import React from "react"
import NoticeBoard from "./post-notice"
import { Container, Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <React.Fragment>
    <Layout pageInfo={{ pageName: "Home" }}>
      <SEO title="Home" keywords={[`docbnmu`, `bnmu`, `madhepura`]} />
      <Container>
        <Carousel>
          <Carousel.Item>
            <StaticImage
              formats={["auto", "webp"]}
              src="../../static/images/gallery/Chem.BNMU14@2x.jpg"
              alt="#"
              placeholder="traced_svg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage
              placeholder="traced_svg"
              src="../../static/images/gallery/Chem.BNMU55@2x.jpg"
              formats={["auto", "webp"]}
              alt="#"
            />
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage
              formats={["auto", "webp"]}
              src="../../static/images/gallery/Chem.BNMU36@2x.jpg"
              alt="#"
              placeholder="traced_svg"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <br />
      <NoticeBoard />
    </Layout>
  </React.Fragment>
)
export default IndexPage
