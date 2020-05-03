import React from "react"
import NoticeBoard from "./post-notice"
import { Container } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImgA from "../images/gallery/Chem.BNMU14@2xx.jpg"
import ImgB from "../images/gallery/Chem.BNMU55@2xx.jpg"
import ImgC from "../images/gallery/Chem.BNMU36@2xx.jpg"
import ImgAb from "../images/gallery/Chem.BNMU14@2x.jpg"
import ImgBb from "../images/gallery/Chem.BNMU55@2x.jpg"
import ImgCb from "../images/gallery/Chem.BNMU36@2x.jpg"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "Home" }}>
    <SEO title="Home" keywords={[`docbnmu`, `bnmu`, `madhepura`]} />
    <Container>
      <Carousel>
        <Carousel.Item>
          <picture>
            <source media="(max-width: 600px)" srcset={ImgA} />
            <source media="(min-width: 601px)" srcset={ImgAb} />
            <img class="img-fluid lazy" src={ImgAb} alt="" />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source media="(max-width: 600px)" srcset={ImgB} />
            <source media="(min-width: 601px)" srcset={ImgBb} />
            <img class="img-fluid lazy" src={ImgBb} alt="" />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source media="(max-width: 600px)" srcset={ImgC} />
            <source media="(min-width: 601px)" srcset={ImgCb} />
            <img class="img-fluid lazy" src={ImgCb} alt="" />
          </picture>
        </Carousel.Item>
      </Carousel>
    </Container>
    <hr></hr>
    <br></br>
    <br></br>
    <NoticeBoard />
  </Layout>
)
export default IndexPage
