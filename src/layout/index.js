import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import config from '../../data/SiteConfig'
import favicon from '../images/favicon.png'
import '../styles/main.scss'

export default class MainLayout extends Component {

  render() {
    const { children } = this.props

    return (
      <>
        <Helmet
          bodyAttributes={{
            class: `single-layout`,
          }}
        >
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Helmet>
        <main id="main-content">
          <div className="boxed-page">
            {children}
            <Footer />
          </div>
        </main>
      </>
    )
  }
}
