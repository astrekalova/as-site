import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import ErrorBoundary from './ErrorBoundary'
import logo from "../images/favicon.png"
import Footer from './Footer';
import styled from 'styled-components';

export default ({ children }) => (
 <ErrorBoundary>
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
    <Content>{children}</Content>

  </ErrorBoundary>
)

const Content = styled.main`
  max-width: 960px;
  margin: 60px auto;
  min-height: 70vh;
  padding: 100px 5% 80px;
`;