import React from "react"
import { Button, Spinner } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import GooglePhotos from "../../static/images/google-photos.svg"

const PhotoGallery = () => (
    <Layout pageInfo={{ pageName: "Photo Gallery" }}>
      <SEO title="Photo Gallery" />
      <h1>Photo Gallery</h1>
    
      <Gallery />
      <hr></hr>
      <br></br>
    </Layout>
)
export default PhotoGallery
