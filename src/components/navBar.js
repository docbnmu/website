import React from "react"
import { Link } from "gatsby"
import logo from "../../static/images/logo@white.svg"

import { Navbar, Nav, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
        <Navbar collapseOnSelect expand="lg" id="site-navbar" className="sticky-top collapsed">
        
        <div
          className="container"
          style={{
            margin: `0 auto`,
            maxWidth: 1280,
          }}
        >
          <Link to="/" className="link-no-style">
            <Navbar.Brand>
              <img
                className="img-fluid lazy"
                src={logo}
                width="64"
                height="64"
                alt="Home"
              ></img>
            </Navbar.Brand>
          </Link>
          
          <Navbar.Toggle bsPrefix="navbar-toggler" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="responsive-navbar-nav"
            
          >
            <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/about/">
                <Nav.Link as="span" eventKey="about">
                  <Button variant="outline-light">About</Button>
                </Nav.Link>
              </Link>
              <Link to="/alaschem/">
                <Nav.Link as="span" eventKey="ALASCHEM">
                  <Button variant="outline-light">Alumni</Button>
                </Nav.Link>
              </Link>
              <Link to="/faculty/">
                <Nav.Link as="span" eventKey="Faculty">
                  <Button variant="outline-light">Faculty</Button>
                </Nav.Link>
              </Link>
              <Link to="/statistics/">
                <Nav.Link as="span" eventKey="Statistics">
                  <Button variant="outline-light">Statistics</Button>
                </Nav.Link>
              </Link>
              <Link to="/syllabus/">
                <Nav.Link as="span" eventKey="Syllabus">
                  <Button variant="outline-light">Syllabus</Button>
                </Nav.Link>
              </Link>
              <Link to="/NAAC/">
                <Nav.Link as="span" eventKey="NAAC">
                  <Button variant="outline-light">NAAC</Button>
                </Nav.Link>
              </Link>
              <Link to="/reading-material/">
                <Nav.Link as="span" eventKey="ReadingMaterial">
                  <Button variant="outline-light">Reading Material</Button>
                </Nav.Link>
              </Link>
              <Link to="/photo-gallery/">
                <Nav.Link as="span" eventKey="PhotoGallery">
                  <Button variant="outline-light">Photo Gallery</Button>
                </Nav.Link>
              </Link>
              <Link to="/my-birth-my-earth/">
                <Nav.Link as="span" eventKey="MyBirthMyEarth">
                  <Button variant="outline-light">My Birth - My Earth</Button>
                </Nav.Link>
              </Link>
              <Link to="/notice/">
                <Nav.Link as="span" eventKey="Notice">
                  <Button variant="outline-light">Notice</Button>
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}

export default CustomNavbar
