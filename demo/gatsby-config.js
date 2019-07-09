/*
  [gatsby-theme-styleguide]
  Options:
    basePath = URL path in the browser added with our slug (default: /)
    contentPath = directory from the root of our project where to store
      the mdx documents. (default: docs/)
*/

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-styleguide",
      options: {
        dogsAreBetter: true,
        // basePath: "/myPath",
        // contentPath: "docs/"
      }
    }
  ]
};
