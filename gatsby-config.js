module.exports = {
  pathPrefix: '/gatsby-fresh',
  siteMetadata: {
    title: "Rustom Ichhaporia's Home on the Web",
    siteUrl: 'https://rustom.dev',
    description: "The third iteration of Rustom Ichhaporia's personal website.",
    socialMedia: [
      {
        name: 'Email',
        url: 'rustom@rustom.dev',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/rustom-ichhaporia',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rustom-ichhaporia',
      },
      {
        name: 'Scholar',
        url: 'https://scholar.google.com/citations?user=fhRRnW8AAAAJ',
      },
      {
        name: 'Medium',
        url: 'https://rustom-ichhaporia.medium.com',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/rust.om',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/cantspellrustom',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-164610470-1',
      },
    },
    'gatsby-plugin-styled-components',
    'styled-components',
    'babel-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
};
