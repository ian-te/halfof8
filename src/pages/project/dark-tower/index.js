import React from 'react'
import logo from './dark_tower_logo.jpg'
import Helmet from 'react-helmet'

const Page = () => (
  <div>
    <Helmet title="This is a dark tower page" />
    <h2>This is a super page</h2>
    <img src={logo} />
  </div>
)

export default Page
