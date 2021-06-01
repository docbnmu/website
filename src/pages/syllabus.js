import React from "react"
import { Accordion, Button, Card, Badge } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Syllabus = () => (
  <Layout pageInfo={{ pageName: "Syllabus" }}>
    <SEO title="Syllabus" />
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Post Graduate</Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <p>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    href="../documents/syllabus/Syllabus.for.PG.Semester.19-11-15.pdf"
                  >
                    Syllabus for P.G. semester <Badge bg="secondary">PDF</Badge>
                  </Button>
                </p>

                <p>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    href="../documents/syllabus/Final.Syllabus.CBCS.Revised.Chemistry.pdf"
                  >
                    CBCS-based syllabus for M.Sc. Chemistry{" "}
                    <Badge bg="secondary">PDF</Badge>
                  </Button>
                </p>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Pre Ph.D.</Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <p>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    href="../documents/syllabus/Pre.Ph.D.Coursework.Syllabus.19-11-15.pdf"
                  >
                    (2015) Pre Ph.D. coursework{" "}
                    <Badge bg="secondary">PDF</Badge>
                  </Button>
                </p>

                <p>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    href="../documents/syllabus/Pre.Ph.D.Coursework.Syllabus.Final.03.2020.pdf"
                  >
                    (2020) Pre Ph.D. coursework{" "}
                    <Badge bg="secondary">PDF</Badge>{" "}
                  </Button>
                </p>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Ph.D.</Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <p>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    href="../documents/syllabus/Ph.D.First.Paper.Syllabus.pdf"
                  >
                    Ph.D First Paper Syllabus. <Badge bg="secondary">PDF</Badge>{" "}
                  </Button>
                </p>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  </Layout>
)

export default Syllabus
