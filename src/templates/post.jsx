import React from "react"
import { graphql } from "gatsby"

const Post = ({ data: { prismicBlogpost } }) => {
  const { data } = prismicBlogpost
  return (
    <React.Fragment>
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </React.Fragment>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicBlogpost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`