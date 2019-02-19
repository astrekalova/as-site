import React from "react"
import { Link } from "gatsby"
import styles from "./PostLink.module.css"

const PostLink = ({ post }) => (
  <div className={styles.blogEntry}>
    <Link className={styles.blogHeading} to={post.uid}>
      <h2>{post.data.title.text}</h2>
      <p>{post.data.date}</p>
      <p>{post.data.content.raw[0].text.substring(0,100) + ' ...'}</p>
    </Link>
  </div>
)

export default PostLink