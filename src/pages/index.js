import * as React from "react"
import {graphql, useStaticQuery} from "gatsby";

const IndexPage = () => {
  const preprData = useStaticQuery(graphql`
    query {
      prepr {
        Posts {
          items {
            _id
            _slug
            title
          }
        }
      }
    }
  `)

  const posts = preprData.prepr.Posts

  return (
    <main>
      <h1>
        My blog site
      </h1>
      <ul>
        {posts.items.map(posts => (
          <li key={posts._id}>
            <a href={posts._slug}>{posts.title}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
