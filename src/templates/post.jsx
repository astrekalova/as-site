import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/PageLayout'

const Post = ({ data: { prismicBlogpost } }) => {
  const { data } = prismicBlogpost
  const url = data.embedded_link.embed_url
    ? <iframe width="560" height="315" 
        title="microfrontends video"
        src={data.embedded_link.embed_url.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")} 
        frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
    : null
  return (
    <Layout>
      <React.Fragment>
        <h1>{data.title.text}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        {url}
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
        embedded_link {
          embed_url
        }
      }
    }
  }
`