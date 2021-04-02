import React from "react"
import { Accordion, Card, Button, Badge, Alert } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Date from "../components/date"

const ReadingMaterial = () => (
  <React.Fragment>
    <Layout pageInfo={{ pageName: "Reading Material" }}>
      <SEO title="Reading Material" />
      <h4>Misc.</h4>
      <div>
        <Accordion defaultActiveKey="7">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Misc.
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/misc/Enviromental.Ethics.pdf"
                  >
                    Enviromental Ethics <Badge variant="secondary">PDF</Badge>
                  </Button>

                  {"   "}

                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/misc/Enviromental.Ethics.pptx"
                  >
                    Enviromental Ethics <Badge variant="secondary">PPTX</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/misc/Poly.Acid.pdf"
                  >
                    Isopoly & Heteropoly anion{" "}
                    <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>

                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/misc/Core.Paper.MOT.Question.Bank.pdf"
                  >
                    Core Paper MOT Question Bank{" "}
                    <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/misc/Core.Paper.X-Ray.Technique.pdf"
                  >
                    Core Paper X-Ray Technique{" "}
                    <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/misc/Research.Methodology.Lecture.Note.pdf"
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
        <Accordion defaultActiveKey="9">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Semester I
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/I/Vilsmeir.Reaction.pdf"
                  >
                    Vilsmeir reaction <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/I/Gattermann-Koch.Reaction.pdf"
                  >
                    Gattermann-Koch Reaction{" "}
                    <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/I/Diazonium.Coupling.pdf"
                  >
                    Diazonium Coupling <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/I/Aromatic.Electrophilic.Substitution.pdf"
                  >
                    Aromatic Electrophilic Substitution{" "}
                    <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/I/Aromatic.Electrophilic.Substitution-2.pdf"
                  >
                    Aromatic Electrophilic Substitution II{" "}
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
            <Card.Body>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/II/Orgel.Diagram.pdf"
                  >
                    Orgel Diagram <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/II/Racah.Parameter.pdf"
                  >
                    Racah Parameter <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/II/Nephelauxtic.Effect.pdf"
                  >
                    Nephelauxtic Effect <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Semester III
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/III/UV.Spectroscopy.pdf"
                  >
                    UV Spectroscopy <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/III/IR.Spectroscopy.pdf"
                  >
                    IR Spectroscopy <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/III/NMR.Spectroscopy.pdf"
                  >
                    NMR Spectroscopy <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/III/Mass.Spectroscopy.pdf"
                  >
                    Mass Spectroscopy <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
              </Card.Body>
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
                    href="../documents/reading-material/IV/Terpenoids.pdf"
                  >
                    Terpenoids <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Terpenoids-2.pdf"
                  >
                    Terpenoids II <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/ETR.402.I.pdf"
                  >
                    Electron Transfer Reaction in Oh Complexes{" "}
                    <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Marcus.Hush.Theory.pdf"
                  >
                    Marcus Hush Theory <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Supramolecular.Chemistry.pdf"
                  >
                    Supramolecular Chemistry{" "}
                    <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr />
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Metal.Alkoxide.pdf"
                  >
                    Metal Alkoxide <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Basic.Concepts.Supramolecular.Chemistry.pdf"
                  >
                    Basic concepts of Supramolecular Chemistry{" "}
                    <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Synthesis.Preparation.and.Properties.of.Metal.Acetylacetonate.Complex.pdf"
                  >
                    Synthesis, preparation & properties of Metal Acetylacetonate
                    complex <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Reaction.Mechanism.Oh.Complex.pdf"
                  >
                    Reaction Mechanism of Oh Complexes{" "}
                    <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Photochemistry.pdf"
                  >
                    Photochemistry <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Photochemistry-II.pdf"
                  >
                    Photochemistry II<Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Zinziberene.pdf"
                  >
                    Zinziberene <Badge variant="secondary">PDF</Badge>
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
        <Accordion defaultActiveKey="8">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              Ph.D. coursework
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/Ph.D/Research.Hypothesis.pdf"
                  >
                    Research Hypothesis <Badge variant="secondary">PDF</Badge>
                  </Button>
                  {"   "}
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/Ph.D/Research.Hypothesis.pptx"
                  >
                    Research Hypothesis <Badge variant="secondary">PPTX</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Synthesis.Preparation.and.Properties.of.Metal.Acetylacetonate.Complex.pdf"
                  >
                    Synthesis, preparation & properties of Metal Acetylacetonate
                    complex <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/III/UV.Spectroscopy.pdf"
                  >
                    UV Spectroscopy <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/III/IR.Spectroscopy.pdf"
                  >
                    IR Spectroscopy <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/III/NMR.Spectroscopy.pdf"
                  >
                    NMR Spectroscopy <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/III/Mass.Spectroscopy.pdf"
                  >
                    Mass Spectroscopy <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Photochemistry.pdf"
                  >
                    Photochemistry <Badge variant="secondary">PDF</Badge>
                  </Button>
                </p>
                <hr></hr>
                <p>
                  <Button
                    variant="outline-dark"
                    href="../documents/reading-material/IV/Photochemistry-II.pdf"
                  >
                    Photochemistry II<Badge variant="secondary">PDF</Badge>
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
      <Alert variant="dark">
        Download all files{" "}
        <Alert.Link href="https://docbnmu.github.io/">here.</Alert.Link>
      </Alert>
      <Date />
      <hr />
    </Layout>
  </React.Fragment>
)

export default ReadingMaterial
