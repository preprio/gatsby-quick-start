exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      prepr {
        Articles {
          items {
            _slug
          }
        }
      }
    }
  `)
  data.prepr.Articles.items.forEach( (item) => {
    const slug = item._slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/article.js`),
      context: { slug },
    })
  })
}
