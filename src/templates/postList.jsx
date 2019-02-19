import React from "react"
import Layout from '../components/PageLayout'
import PostLink from "../components/PostLink"

const Posts = (data) => {
  const Posts = data.pageContext.edges
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <h1>Blog posts</h1>
      <div>{Posts}</div>
    </Layout>
  )
}

export default Posts
