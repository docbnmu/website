import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

class LightboxPage extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU1.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU2.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU3.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU4.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU5.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU7.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU8.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU9.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU10.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU11.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU59.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU12.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU14@2x.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU15.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU17.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU18.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU19.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU26.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU20.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU21.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU22.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU23.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU24.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU25.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU27.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU28.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU29.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU30.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU31.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU32.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU33.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU34.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU36.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU37.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU38.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU39.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU41.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU42.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU43.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU44.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU46.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU47.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU48.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU50.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU51.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU52.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU53.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU54.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU55.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU56.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU57.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU58.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU60.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU49.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU45.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU35.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU40.jpg",
      "https://ik.imagekit.io/85x/https://docbnmu.github.io/website//images/gallery/Chem.BNMU13.jpg",
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
