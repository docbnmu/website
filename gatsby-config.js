require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  //pathPrefix: `/website/`,
  //assetPrefix: `https://docbnmu.github.io/website/`,
  siteMetadata: {
    title: `University Department of Chemistry`,
    description: `University Department of Chemistry, B. N. Mandal University, Madhepura (Bihar).`,
    author: `docbnmu.in`,
    siteUrl: `https://docbnmu.in/`,
    siteDescription: `Bhupendra Narayan Mandal University also called B. N. Mandal University and in short BNMU is situated at the district headquarter, Madhepura a district in Bihar. It is known for adding glory to the educational atmosphere of this district and it’s surrounding. It is a regional university famous for its quality teaching.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/static/documents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        //useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    'gatsby-plugin-optimize-svgs',
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatting: {
          format: `dddd, MMM D, YYYY HH:mm:s Z`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `University Department of Chemistry`,
        short_name: `Univ. Dept. of Chem.`,
        icon: `static/images/logo.png`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  ],
}
