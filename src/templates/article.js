import * as React from "react"
import {graphql} from "gatsby";

const PostPage = ({data}) => {
  const post = data.prepr.Post
  return (
    <main>
      <h1>
        {post.title}
      </h1>

      {post.content.map((content,index) => (
        <div key={index}>

          {
            content.__typename === "Prepr_Assets" &&
            <img src={content.items[0].url} width="300" height="250" alt="{post.title}" />
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
      Post (slug: $slug) {
        _id
        title
        cover {
          url(width: 300, height: 250)
        }
        content {
          __typename
          ... on Prepr_Text {
            _id
            body
            text
          }
          ... on Prepr_Assets {
            items {
              _id
              url(width: 300, height: 250)
            }
          }
        }
      }
    }
  }
`

export default PostPage

export const Head = () => <title>Post Page</title>
