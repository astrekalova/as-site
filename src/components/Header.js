import React from 'react'
import { Link } from 'gatsby'
import styles from "./Header.module.css"

export default () => (
    <header className={styles.header}>
      <Link to="/">
        <span className={styles.logo}>AS</span>
        <h1 className={styles.name}>Alexandra Strekalova</h1>
      </Link>
      <nav>
        <ul className={styles.navigationList}>
          <li  className={styles.navigationListItem}>
            <Link className={`${styles.navigationLink} ${styles.aboutLink}`} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={`${styles.navigationLink} ${styles.contactLink}`} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>)
