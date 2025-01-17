module.exports = {
  siteMetadata: {
    title: 'CovHack2020',
    description: `CovHackSoc's Second Annual Hackathon`,
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `how-to-find-us`,
        path: `${__dirname}/src/collections/how-to-find-us`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-148892494-1',
      },
    },
  ],
}
