require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `University Department of Chemistry`,
    description: `University Department of Chemistry, B. N. Mandal University, Madhepura (Bihar).`,
    author: `docbnmu.in`,
    siteUrl: `https://docbnmu.in/`,
    siteDescription: `Bhupendra Narayan Mandal University also called B. N. Mandal University and in short BNMU is situated at the district headquarter, Madhepura a district in Bihar. It is known for adding glory to the educational atmosphere of this district and it’s surrounding. It is a regional university famous for its quality teaching.`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
      options: {
        name: `gallery`,
        path: `${__dirname}/static/images/gallery/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: 'gatsby-plugin-buildtime-timezone',
      options: {
        tz: 'Asia/Kolkata',
        format: 'dddd, MMM D, YYYY HH:mm:s Z',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `University Department of Chemistry`,
        short_name: `Univ. Dept. of Chem.`,
        icon: `static/images/maskable_icon.png`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `standalone`,
        purpose: `any maskable`,
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  ],
}
