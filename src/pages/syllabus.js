import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Badge from 'react-bootstrap/Badge'


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
                <a href="../documents/Syllabus.for.PG.Semester.19-11-15.pdf">
                  <Button variant="outline-dark">
                    Syllabus for P.G. semester. <Badge variant="secondary">PDF</Badge>
                  </Button>
                </a>
              </p>
              <hr></hr>
              <p>
                <a href="../documents/Final.Syllabus.CBCS.Revised.Chemistry.pdf">
                  <Button variant="outline-dark">
                    CBCS-based syllabus for M.Sc. Chemistry <Badge variant="secondary">PDF</Badge>
                  </Button>
                </a>
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
                <a href="../documents/Pre.Ph.D.Coursework.Syllabus.19-11-15.pdf">
                  <Button variant="outline-dark">
                    (2015) Pre Ph.D. coursework. <Badge variant="secondary">PDF</Badge>
                  </Button>
                </a>
              </p>
              <hr></hr>
              <p>
                <a href="../documents/Pre.Ph.D.Coursework.Syllabus.Final.03.2020.pdf">
                  <Button variant="outline-dark">
                    (2020) Pre Ph.D. coursework. <Badge variant="secondary">PDF</Badge>{" "}
                  </Button>
                </a>
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
                <a href="../documents/Ph.D.First.Paper.Syllabus.pdf">
                  <Button variant="outline-dark">
                    Ph.D First Paper Syllabus. <Badge variant="secondary">PDF</Badge>{" "}
                  </Button>
                </a>
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    <hr></hr>
    <br></br><br></br>
  </Layout>
)

export default Syllabus
