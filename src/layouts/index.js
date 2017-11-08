import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar'
import Layout from './layout'
import './index.css'

const TemplateWrapper = ({ children, data }) => (
  <Layout>
    <Helmet
      title={data ? data.site.siteMetadata.title : 'halfof8'}
      meta={[
        { name: 'description', content: 'Half of Eight' },
        { name: 'keywords', content: '' },
      ]}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <div style={{}}>
      <Sidebar />
    </div>
    <div style={{ flexGrow: 1 }}>{children()}</div>
  </Layout>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
