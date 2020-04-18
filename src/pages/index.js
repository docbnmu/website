import React from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BNMU36 from "../../static/images/Chem.BNMU36.jpg.webp"
import BNMU16 from "../../static/images/Chem.BNMU16.jpg.webp"
import BNMU14 from "../../static/images/Chem.BNMU14.jpg.webp"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "Home" }}>
    <SEO
      title="Home - University Department of Chemistry"
      keywords={[`docbnmu`, `bnmu`, `madhepura`]}
    />
    <Container>
      <Carousel>
        <Carousel.Item>
          <img class="img-fluid lazy" src={BNMU16} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-fluid lazy" src={BNMU36} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-fluid lazy" src={BNMU14} alt="" />
        </Carousel.Item>
      </Carousel>
    </Container>
    <hr>
    </hr>
    <br></br>
    <br></br>
    <h1>Notice.</h1>
    <hr></hr>
    <br></br>
    <div>
      <Alert variant="success">
        <Alert.Heading>
          List of admitted students in Ph.D coursework 2019.
        </Alert.Heading>
        <p>Ph.D. - 03.03.2020</p>
        <hr />
        <p className="mb-0">
          <a href="../documents/Admitted.Students.in.Ph.D.coursework.2019.pdf">
            <Button variant="outline-dark" size="lg" block>
              Download list
            </Button>
          </a>
        </p>
      </Alert>
    </div>
    <hr></hr>

    <div>
      <Alert variant="info">
        <Alert.Heading>Students of IInd and IIIrd semester</Alert.Heading>
        <p>IInd Semester, IIIrd Semester - 17.07.2019</p>
        <hr />
        <p className="mb-0">
          Classes of 2nd semester and 3rd semester are going on. Students are
          requested to attend the classes to maintain atleast 75% attendance to
          appear in semester end examinations.
        </p>
      </Alert>
    </div>
    <hr></hr>

    <div>
      <Alert variant="info">
        <Alert.Heading>
          Assignment for CIA of semester IInd and IIIrd
        </Alert.Heading>
        <p>IInd Semester, IIIrd Semester - 16.07.2019</p>
        <hr />
        <p className="mb-0">
          Assignment for CIA of semester 2nd and 3rd are being distributed at
          the Student's Gallery. All students are requested to submit their
          assignment or project before the scheduled date as per the notice.
        </p>
      </Alert>
    </div>
    <hr></hr>
  </Layout>
)

export default IndexPage
