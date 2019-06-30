import React from 'react'
import Layout from '../components/PageLayout'

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}
