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
                    formats: [AUTO, AVIF, WEBP]
                  )
                  full: gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: TRACED_SVG
                    formats: [AUTO, AVIF, WEBP]
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
          <Layout pageInfo={{ pageName: "Notice" }}>
            <SEO title="Notice" />
            <Gallery images={images} title="Photo Gallery" />
          </Layout>
        )
      }}
    />
  )
}
export default PhotoGallery
