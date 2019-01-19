import React from "react"
import Layout from '../components/PageLayout'
import PostLink from "../components/postLink"

const Posts = (data) => {
  console.log(data.pageContext.edges);
  const Posts = data.pageContext.edges
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <div>{Posts}</div>
    </Layout>
  )
}

export default Posts
