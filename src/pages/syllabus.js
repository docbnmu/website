import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Badge from "react-bootstrap/Badge"
import { Link } from "gatsby"

const Syllabus = () => (
  <Layout pageInfo={{ pageName: "Syllabus" }}>
    <SEO title="Syllabus" />
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Post Graduate
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                <Link to="../documents/syllabus/Syllabus.for.PG.Semester.19-11-15.pdf">
                  <Button variant="outline-dark">
                    Syllabus for P.G. semester.{" "}
                    <Badge variant="secondary">PDF</Badge>
                  </Button>
                </Link>
              </p>
              <hr></hr>
              <p>
                <Link to="../documents/syllabus/Final.Syllabus.CBCS.Revised.Chemistry.pdf">
                  <Button variant="outline-dark">
                    CBCS-based syllabus for M.Sc. Chemistry{" "}
                    <Badge variant="secondary">PDF</Badge>
                  </Button>
                </Link>
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Pre. Ph.D.
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                <Link to="../documents/syllabus/Pre.Ph.D.Coursework.Syllabus.19-11-15.pdf">
                  <Button variant="outline-dark">
                    (2015) Pre Ph.D. coursework.{" "}
                    <Badge variant="secondary">PDF</Badge>
                  </Button>
                </Link>
              </p>
              <hr></hr>
              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/syllabus/Pre.Ph.D.Coursework.Syllabus.Final.03.2020.pdf"
                >
                  (2020) Pre Ph.D. coursework.{" "}
                  <Badge variant="secondary">PDF</Badge>{" "}
                </Button>
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Ph.D.
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/syllabus/Ph.D.First.Paper.Syllabus.pdf"
                >
                  Ph.D First Paper Syllabus.{" "}
                  <Badge variant="secondary">PDF</Badge>{" "}
                </Button>
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    <hr></hr>
    <br></br>
    <br></br>
  </Layout>
)

export default Syllabus
