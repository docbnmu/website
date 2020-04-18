import React from "react"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"


const PhotoGallery = () => (
  <Layout pageInfo={{ pageName: "Photo Gallery" }}>
    <SEO title="Photo Gallery" />
    <h1>Photo Gallery</h1>
    <hr>
    </hr>
    <br></br>
      <a href="https://photos.app.goo.gl/JftTj3VzsgyPqJQUA">
        <Button variant="outline-dark" size="lg" block>
          Open in Google Photos
        </Button>
      </a>
      <hr>
    </hr>
    <br></br>
      <Gallery />
      <hr>
    </hr>
    <br></br>
  </Layout>
)
export default PhotoGallery
