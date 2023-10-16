import * as React from "react"
import {graphql, useStaticQuery} from "gatsby";

const IndexPage = () => {
  const preprData = useStaticQuery(graphql`
    query {
      prepr {
        Articles {
          items {
            _id
            _slug
            title
          }
        }
      }
    }
  `)

  const articles = preprData.prepr.Articles

  return (
    <main>
      <h1>
        My blog site
      </h1>
      <ul>
        {articles.items.map(article => (
          <li key={article._id}>
            <a href={article._slug}>{article.title}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
