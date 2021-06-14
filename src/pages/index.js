import React from "react"
import NoticeBoard from "./post-notice"
import { Container, Carousel, Row } from "react-bootstrap"
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
              placeholder="dominantColor"
            />
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage
              placeholder="dominantColor"
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
              placeholder="dominantColor"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <br />
      

    <Container fluid>
      <div class="w-auto vh-100">
      <p> <b>Department @ Social</b></p>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdocbnmu&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
        title="Department @ Social"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        loading="lazy"
        scrolling="yes"
        allowtransparency="true"
        frameborder="0"
        height="100%"
        width="100%"
      />
        </div>
      </Container>

      <br />
      <NoticeBoard />
    </Layout>
  </React.Fragment>
)
export default IndexPage
