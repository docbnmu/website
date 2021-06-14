import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import Gallery from "@browniebroke/gatsby-image-gallery"

const PhotoGallery = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query ImagesForGallery {
          images: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
            edges {
              node {
                childImageSharp {
                  thumb: gatsbyImageData(
                    width: 270
                    height: 270
                    placeholder: TRACED_SVG
                    formats: [AUTO, WEBP]
                  )
                  full: gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: TRACED_SVG
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const images = data.images.edges.map(({ node }) => ({
          ...node.childImageSharp,
          // caption: node.childImageSharp.meta.originalName,
        }))
        return (
          <React.Fragment>
          <Layout pageInfo={{ pageName: "Photo Gallery" }}>
            <SEO title="Photo Gallery" />
            <Gallery images={images} title="Photo Gallery" />
          </Layout>
          </React.Fragment>
        )
      }}
    />
  )
}
export default PhotoGallery
