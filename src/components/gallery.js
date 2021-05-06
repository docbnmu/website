import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

class LightboxPage extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
      "../images/gallery/Chem.BNMU1.jpg",
      "../images/gallery/Chem.BNMU2.jpg",
      "../images/gallery/Chem.BNMU3.jpg",
      "../images/gallery/Chem.BNMU4.jpg",
      "../images/gallery/Chem.BNMU5.jpg",
      "../images/gallery/Chem.BNMU7.jpg",
      "../images/gallery/Chem.BNMU8.jpg",
      "../images/gallery/Chem.BNMU9.jpg",
      "../images/gallery/Chem.BNMU10.jpg",
      "../images/gallery/Chem.BNMU11.jpg",
      "../images/gallery/Chem.BNMU59.jpg",
      "../images/gallery/Chem.BNMU12.jpg",
      "../images/gallery/Chem.BNMU14@2x.jpg",
      "../images/gallery/Chem.BNMU15.jpg",
      "../images/gallery/Chem.BNMU17.jpg",
      "../images/gallery/Chem.BNMU18.jpg",
      "../images/gallery/Chem.BNMU19.jpg",
      "../images/gallery/Chem.BNMU26.jpg",
      "../images/gallery/Chem.BNMU20.jpg",
      "../images/gallery/Chem.BNMU21.jpg",
      "../images/gallery/Chem.BNMU22.jpg",
      "../images/gallery/Chem.BNMU23.jpg",
      "../images/gallery/Chem.BNMU24.jpg",
      "../images/gallery/Chem.BNMU25.jpg",
      "../images/gallery/Chem.BNMU27.jpg",
      "../images/gallery/Chem.BNMU28.jpg",
      "../images/gallery/Chem.BNMU29.jpg",
      "../images/gallery/Chem.BNMU30.jpg",
      "../images/gallery/Chem.BNMU31.jpg",
      "../images/gallery/Chem.BNMU32.jpg",
      "../images/gallery/Chem.BNMU33.jpg",
      "../images/gallery/Chem.BNMU34.jpg",
      "../images/gallery/Chem.BNMU36.jpg",
      "../images/gallery/Chem.BNMU37.jpg",
      "../images/gallery/Chem.BNMU38.jpg",
      "../images/gallery/Chem.BNMU39.jpg",
      "../images/gallery/Chem.BNMU41.jpg",
      "../images/gallery/Chem.BNMU42.jpg",
      "../images/gallery/Chem.BNMU43.jpg",
      "../images/gallery/Chem.BNMU44.jpg",
      "../images/gallery/Chem.BNMU46.jpg",
      "../images/gallery/Chem.BNMU47.jpg",
      "../images/gallery/Chem.BNMU48.jpg",
      "../images/gallery/Chem.BNMU50.jpg",
      "../images/gallery/Chem.BNMU51.jpg",
      "../images/gallery/Chem.BNMU52.jpg",
      "../images/gallery/Chem.BNMU53.jpg",
      "../images/gallery/Chem.BNMU54.jpg",
      "../images/gallery/Chem.BNMU55.jpg",
      "../images/gallery/Chem.BNMU56.jpg",
      "../images/gallery/Chem.BNMU57.jpg",
      "../images/gallery/Chem.BNMU58.jpg",
      "../images/gallery/Chem.BNMU60.jpg",
      "../images/gallery/Chem.BNMU49.jpg",
      "../images/gallery/Chem.BNMU45.jpg",
      "../images/gallery/Chem.BNMU35.jpg",
      "../images/gallery/Chem.BNMU40.jpg",
      "../images/gallery/Chem.BNMU13.jpg",
    ],
  }

  renderImages = () => {
    let photoIndex = -1
    const { images } = this.state

    return images.map((imageSrc) => {
      photoIndex++
      const privateKey = photoIndex
      return (
        <Col md="4" className="inline-flex" key={photoIndex}>
          <figure>
            <img
              src={imageSrc}
              alt="#"
              loading="lazy"
              className="lazy img-fluid rounded-lg"
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </Col>
      )
    })
  }

  render() {
    const { photoIndex, isOpen, images } = this.state
    return (
      <Container className="mt-5">
        <div className="container-fluid">
          <Row>{this.renderImages()}</Row>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </Container>
    )
  }
}

export default LightboxPage
