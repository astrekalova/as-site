import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

const PostLink = ({ post }) => (
  <BlogEntry>
    <Link to={`blog/${post.uid}`} className="blogHeading">
      <h2>{post.data.title.text}</h2>
      <p>{post.data.date}</p>
      <p>{post.data.content.raw[0].text.substring(0,100) + ' ...'}</p>
    </Link>
  </BlogEntry>
)

export default PostLink

const BlogEntry = styled.div`
  background: #333333;
  padding: 30px;
  margin: 30px;

  .blogHeading {
    color:#FFF;
  }
`;