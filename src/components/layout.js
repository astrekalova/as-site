import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Main = styled.main`
  max-width: 960px;
  margin: 60px auto;
  min-height: 70vh;
  padding: 100px 5% 80px;
`;

export default ({ children }) => (
  <div>
    <Helmet
      title="Alexandra Strekalova"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </div>
)
