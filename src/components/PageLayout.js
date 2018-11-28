import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';

import logo from "../images/favicon.png"
import styles from "./PageLayout.module.css"
import Footer from './Footer';

export default ({ children }) => (
  <div>
    <Helmet
      title="Alexandra Strekalova"
      meta={[
        { name: 'description', content: 'Personal site of Alexandra Strekalova' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${logo}` }
      ]}
      />
    <link rel="canonical" href="https://alexandrastrekalova.com/" />
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
)
