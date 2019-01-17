import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/PageLayout'

const Post = ({ data: { prismicBlogpost } }) => {
  const { data } = prismicBlogpost
  return (
    <Layout>
      <React.Fragment>
        <h1>{data.title.text}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </React.Fragment>
    </Layout>
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