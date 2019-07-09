const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

/*
  [gatsby-theme-styleguide]
  Options:
    basePath = URL path in the browser added with our slug
    contentPath = directory from the root of our project where to store
      the mdx documents.
*/

exports.createPages = async ({ actions, graphql, reporter }, { dogsAreBetter }) => {
  console.log(`Dogs Are Better - ${dogsAreBetter}`)
  const result = await graphql(`
    query {
      allFile {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Error loading the mdx files', result.errors)
  }

  result.data.allFile.nodes.forEach(node => {
    actions.createPage({
      path: node.fields.slug,
      component: require.resolve('./src/templates/default.js'),
      context: {
        slug: node.fields.slug
      }
    })
  })
}

exports.onCreateNode = ({ node, actions }, options) => {
  if (node.internal.type !== 'File') { return }

  // Get the post slug path from the relative path and options basePath
  //  so the user of the theme can get the correct path
  const toPostPath = (node) => {
    const { dir } = path.parse(node.relativePath)
    const basePath = options.basePath || '/'
    return path.join(basePath, dir, node.name).replace(/\\/g, '/')
  }

  const slug = toPostPath(node)
  actions.createNodeField({
    node,
    name: 'slug',
    value: slug
  })
}

/*
  Runs prior to Gatsby doing anything else
  We are creating the content path if it does not exist!
  So, dynamic and failsafe!
*/
exports.onPreBootstrap = ({store}, options) => {
  const { program } = store.getState()
  const contentPath = options.contentPath || 'docs'
  const dir = path.join(program.directory, contentPath)

  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir)
  }
}