import React from "react"
import { Link } from "gatsby"
import logo from "../../static/images/logo.png"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="md" id="site-navbar">
        {/* <Container> */}
        <div class="container">
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">
              <img class= "img-fluid lazy" src={logo} width="40" height="40" alt="&#8962;"></img>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/about">
                <Nav.Link as="span" eventKey="about">
                  <button type="button" class="btn btn-dark">
                    About
                  </button>
                </Nav.Link>
              </Link>
              <Link to="/alaschem">
                <Nav.Link as="span" eventKey="ALASCHEM">
                  <button type="button" class="btn btn-dark">
                    ALASCHEM
                  </button>
                </Nav.Link>
              </Link>
              <Link to="/faculty">
                <Nav.Link as="span" eventKey="Faculty">
                  <button type="button" class="btn btn-dark">
                    Faculty
                  </button>
                </Nav.Link>
              </Link>
              <Link to="/statistics">
                <Nav.Link as="span" eventKey="Statistics">
                  <button type="button" class="btn btn-dark">
                    Statistics
                  </button>
                </Nav.Link>
              </Link>
              <Link to="/syllabus">
                <Nav.Link as="span" eventKey="Syllabus">
                  <button type="button" class="btn btn-dark">
                    Syllabus
                  </button>
                </Nav.Link>
              </Link>
              <Link to="/NAAC">
                <Nav.Link as="span" eventKey="NAAC">
                  <button type="button" class="btn btn-dark">
                    NAAC
                  </button>
                </Nav.Link>
              </Link>
              <Link to="/reading-material">
                <Nav.Link as="span" eventKey="ReadingMaterial">
                  <button type="button" class="btn btn-dark">
                    Reading Material
                  </button>
                </Nav.Link>
              </Link>
              <Link to="/photo-gallery">
                <Nav.Link as="span" eventKey="PhotoGallery">
                  <button type="button" class="btn btn-dark">
                    Photo Gallery
                  </button>
                </Nav.Link>
              </Link>
              <Link to="/notice">
                <Nav.Link as="span" eventKey="Notice">
                  <button type="button" class="btn btn-dark">
                    Notice
                  </button>
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </div>
      </Navbar>
    </>
  )
}

export default CustomNavbar
