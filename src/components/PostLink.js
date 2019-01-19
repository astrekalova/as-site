import React from "react"
import { Link } from "gatsby"
import styles from "./PostLink.module.css"

const PostLink = ({ post }) => (
  <div>
    <Link  className={styles.blogHeading} to={post.uid}>
      <h1>{post.data.title.text}</h1>
      <p>{post.data.date}</p>
      <p>{post.data.content.raw[0].text.substring(0,100) + ' ...'}</p>
    </Link>
  </div>
)

export default PostLink