import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Badge from "react-bootstrap/Badge"
import Date from "../components/date"

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
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/Enviromental.Ethics.pdf"
                >
                  Enviromental Ethics <Badge variant="secondary">PDF</Badge>
                </Button>

                {"   "}

                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/Enviromental.Ethics.pptx"
                >
                  Enviromental Ethics <Badge variant="secondary">PPTX</Badge>
                </Button>
              </p>
              <hr></hr>

              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/IR.Spectroscopy.pdf"
                >
                  IR Spectroscopy <Badge variant="secondary">PDF</Badge>
                </Button>
              </p>
              <hr></hr>
              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/Reaction.Mechanism.Oh.Complex.pdf"
                >
                  Reaction mechanism of Octahedral complex compound{" "}
                  <Badge variant="secondary">PDF</Badge>
                </Button>
              </p>
              <hr></hr>
              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/Poly.Acid.pdf"
                >
                  Iso Poly Anion & Hetero Poly Anion{" "}
                  <Badge variant="secondary">PDF</Badge>
                </Button>
              </p>
              <hr></hr>

              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/NMR.Spectroscopy.pdf"
                >
                  NMR Spectroscopy <Badge variant="secondary">PDF</Badge>
                </Button>
              </p>
              <hr></hr>
              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/Mass.Spectroscopy.pdf"
                >
                  Mass Spectroscopy <Badge variant="secondary">PDF</Badge>
                </Button>
              </p>
              <hr></hr>

              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/UV.Spectroscopy.pdf"
                >
                  UV Spectroscopy <Badge variant="secondary">PDF</Badge>
                </Button>
              </p>
              <hr></hr>

              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/Core.Paper.MOT.Question.Bank.pdf"
                >
                  Core Paper MOT Question Bank{" "}
                  <Badge variant="secondary">PDF</Badge>
                </Button>
              </p>
              <hr></hr>
              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/Core.Paper.X-Ray.Technique.pdf"
                >
                  Core Paper X-Ray Technique{" "}
                  <Badge variant="secondary">PDF</Badge>
                </Button>
              </p>
              <hr></hr>
              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/Research.Methodology.Lecture.Note.pdf"
                >
                  Research Methodology Lecture Note{" "}
                  <Badge variant="secondary">PDF</Badge>
                </Button>
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
            <Card.Body>
              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/Vilsmeir.Reaction.pdf"
                >
                  Vilsmeir reaction <Badge variant="secondary">PDF</Badge>
                </Button>
              </p>
              <hr></hr>
              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/Gattermann-Koch.Reaction.pdf"
                >
                  Gattermann-Koch Reaction{" "}
                  <Badge variant="secondary">PDF</Badge>
                </Button>
              </p>
              <hr></hr>
            </Card.Body>
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
            <Card.Body>
              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/Terpenoids.pdf"
                >
                  Terpenoids <Badge variant="secondary">PDF</Badge>
                </Button>
              </p>
              <hr></hr>
              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/ETR.402.I.pdf"
                >
                  Electron Transfer Reaction in Oh Complexes{" "}
                  <Badge variant="secondary">PDF</Badge>
                </Button>
              </p>
              <hr></hr>
            </Card.Body>
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
            Ph.D. coursework
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <p>
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/Research.Hypothesis.pdf"
                >
                  Research Hypothesis <Badge variant="secondary">PDF</Badge>
                </Button>
                {"   "}
                <Button
                  variant="outline-dark"
                  href="../documents/reading-material/Research.Hypothesis.pptx"
                >
                  Research Hypothesis <Badge variant="secondary">PPTX</Badge>
                </Button>
              </p>
              <hr></hr>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    <hr></hr>
    <br></br>
    <Date />
    <hr />
  </Layout>
)

export default ReadingMaterial
