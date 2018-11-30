import React from 'react'
import styles from "./Footer.module.css"

export default () => (
<footer>
    <h3 className={styles.subheader}>You can find me here</h3>
    <ul className={styles.socialLinks}>
      <li className={styles.socialLink} key='twitter'>
          <a
            href='https://twitter.com/astrekalova'
            className={`${styles.socialLinkIcon} ${styles.twitter}`}
          >
            <i className={`fa fa-twitter fa-lg`}></i>
          </a>
      </li>
      <li className={styles.socialLink} key='github'>
          <a
            href='https://github.com/astrekalova'
            className={`${styles.socialLinkIcon} ${styles.github}`}
          >
            <i className={`fa fa-github fa-lg`}></i>
          </a>
      </li>
      <li className={styles.socialLink} key='linkedin'>
          <a
            href='https://www.linkedin.com/in/alexandra-strekalova-a1a78aa6'
            className={`${styles.socialLinkIcon} ${styles.linkedin}`}
          >
            <i className={`fa fa-linkedin fa-lg`}></i>
          </a>
      </li>
    </ul>
</footer>)
