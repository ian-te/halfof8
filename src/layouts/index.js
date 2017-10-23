import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar'
import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div style={{display: 'flex'}}>
    <Helmet
      title="halfof8"
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
