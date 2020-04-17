import React from "react"
import { Container } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BNMU36 from "../../static/images/Chem.BNMU36.jpg.webp"
import BNMU16 from "../../static/images/Chem.BNMU16.jpg.webp"
import BNMU14 from "../../static/images/Chem.BNMU14.jpg.webp"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home - University Department of Chemistry" keywords={[`docbnmu`, `bnmu`, `madhepura`]} />
    <Container>
    <Carousel>
  <Carousel.Item>
    <img
      class="img-fluid"
      src={BNMU16}
      alt=""
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      class="img-fluid"
      src={BNMU36}
      alt=""
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      class="img-fluid"
      src={BNMU14}
      alt=""
    />

  </Carousel.Item>
</Carousel>
    </Container>
  </Layout>
)

export default IndexPage
