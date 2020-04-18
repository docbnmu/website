import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ReadingMaterial = () => (
  <Layout pageInfo={{ pageName: "Reading Material" }}>
    <SEO title="Reading Material" />
    <hr></hr>
    <br></br>
    <h4>Misc.</h4>
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Misc.
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
          <Card.Body>
              <p>
                <a href="../documents/Core.Paper.MOT.Question.Bank.pdf">
                  <Button variant="outline-dark">
                  Core Paper MOT Question Bank ↗
                  </Button>
                </a>
              </p>
              <hr></hr>
              <p>
                <a href="../documents/Core.Paper.X-Ray.Technique.pdf">
                  <Button variant="outline-dark">
                  Core Paper X-Ray Technique ↗
                  </Button>
                </a>
              </p>
              <hr></hr>
              <p>
                <a href="../documents/Research.Methodology.Lecture.Note.pdf">
                  <Button variant="outline-dark">
                  Research Methodology Lecture Note ↗
                  </Button>
                </a>
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    <hr></hr>
    <br></br>
    <h4>Post Graduate</h4>
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Semester I
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello!</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Semester II
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Semester III
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Semester IV
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    <hr></hr>
    <br></br>
    <h4>Ph.D.</h4>
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Ph.D.
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello!</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    <hr></hr>
    <br></br>
  </Layout>
)

export default ReadingMaterial
