require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteTitle = "Just Burgers"
const siteDescription = "Burgers store"
const siteAuthor = "@ciszekmarcell"
const siteUrl = "https://gatsby-starter-typescript-deluxe.netlify.com"
const titleTemplate = `%s · ${siteTitle}`
const twitterUsername = "@Ciszekmarcell"

const siteImage = `images/dark-icon.png`
const siteKeywords = ["gatsby", "typescript", "food", "javascript", "react"]
const navigationLinks = [
  {
    name: "your favorites",
    path: "favorites",
  },
  {
    name: "burgers",
    path: "burgers",
  },
  {
    name: "chefs",
    path: "chefs",
  },
  {
    name: "order",
    path: "order",
  },
]

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    siteUrl,
    titleTemplate,
    keywords: siteKeywords,
    image: siteImage, // Path to your image you placed in the 'static' folder
    twitterUsername,
    navigationLinks,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-react-axe",
      options: {
        showInProduction: false,
        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        shortName: siteTitle,
        description: siteDescription,
        startUrl: `/`,
        backgroundColor: `#1565C0`,
        themeColor: `#1565C0`,
        display: `minimal-ui`,
        icon: "src/images/dark-icon.png",
        icons: [
          {
            src: "icons/dark-icon512x512.png",
            sizes: "512x512",
            types: "image/png",
          },
          {
            src: "icons/dark_icon192x192.png",
            sizes: "192x192",
            types: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
