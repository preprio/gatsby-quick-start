exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      prepr {
        Posts {
          items {
            _slug
          }
        }
      }
    }
  `)
  data.prepr.Posts.items.forEach( (item) => {
    const slug = item._slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/article.js`),
      context: { slug },
    })
  })
}
