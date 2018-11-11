import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

import logo from "../images/favicon.png"

const Main = styled.main`
  max-width: 960px;
  margin: 60px auto;
  min-height: 70vh;
  padding: 100px 5% 80px;
`;

export const Heading = styled.h1`
  color: ${props => props.color};
`
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
    <Main>{children}</Main>
    <Footer />
  </div>
)
