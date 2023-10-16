import * as React from "react"
import {graphql} from "gatsby";

const ArticlePage = ({data}) => {
  const article = data.prepr.Article
  return (
    <main>
      <h1>
        {article.title}
      </h1>

      {article.content.map((content,index) => (
        <div key={index}>

          {
            content.__typename === "Prepr_Assets" &&
            <img src={content.items[0].url} width="300" height="250" alt="{article.title}" />
          }

          {
            content.__typename === 'Prepr_Text' &&
            <div dangerouslySetInnerHTML={{ __html: content.body }}></div>
          }
        </div>
      ))}
    </main>
  )
}

export const query = graphql`
  query($slug: String!) {
    prepr {
      Article(slug: $slug) {
        _id
        title
        content {
          __typename
          ... on Prepr_Text {
            body
            text
          }
          ... on Prepr_Assets {
            items {
              url
            }
          }
        }
      }
    }
  }
`

export default ArticlePage

export const Head = () => <title>Article Page</title>
