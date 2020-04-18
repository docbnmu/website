import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Badge from "react-bootstrap/Badge"

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
                  Core Paper MOT Question Bank <Badge variant="secondary">PDF</Badge>
                  </Button>
                </a>
              </p>
              <hr></hr>
              <p>
                <a href="../documents/Core.Paper.X-Ray.Technique.pdf">
                  <Button variant="outline-dark">
                  Core Paper X-Ray Technique <Badge variant="secondary">PDF</Badge>
                  </Button>
                </a>
              </p>
              <hr></hr>
              <p>
                <a href="../documents/Research.Methodology.Lecture.Note.pdf">
                  <Button variant="outline-dark">
                  Research Methodology Lecture Note <Badge variant="secondary">PDF</Badge>
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
      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Semester I
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello!</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Semester II
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Semester III
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Hello! </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Semester IV
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>Hello! </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    <hr></hr>
    <br></br>
    <h4>Ph.D.</h4>
    <div>
      <Accordion defaultActiveKey="5">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            Ph.D.
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
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
