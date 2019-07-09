module.exports = ({ contentPath }) => ({
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {}
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath || "docs/"
      }
    }

  ]
})
