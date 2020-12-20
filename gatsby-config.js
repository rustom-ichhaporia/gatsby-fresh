module.exports = {
  siteMetadata: {
    title: "Rustom Ichhaporia's Home on the Web",
    siteUrl: "https://rustom.dev",
    description: "The third iteration of Rustom Ichhaporia's personal website."
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-164610470-1",
      },
    },
    // {
    //   resolve: "gatsby-plugin-styled-components", 
    //   options: {

    //   }
    // },
    "gatsby-plugin-styled-components",
    "styled-components", 
    "babel-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
