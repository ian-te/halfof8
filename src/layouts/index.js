import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar'
import './index.css'

const TemplateWrapper = ({ children, data}) => (
  <div style={{display: 'flex'}}>
    <Helmet
      title={data ? data.site.siteMetadata.title : 'halfof8'}
      meta={[
        { name: 'description', content: 'Half of Eight' },
        { name: 'keywords', content: '' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400" rel="stylesheet" /> 
    </Helmet>
    <Sidebar />
    <div style={{ flexGrow: 1 }}>
      {children()}
    </div>
  </div>
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