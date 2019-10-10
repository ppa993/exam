import React, { Component } from 'react'
import config from '../../data/SiteConfig'

export default class Contact extends Component {
  render() {
    const { email, github, facebook, linkedin } = config.anstLinks;
    return (
      <>
        <h1>Stay in Touch</h1>
        <p>You can contact me via email or find me around the web.</p>
        <ul>
          <li>
            <strong>Email</strong>: <a href={email.url}>{email.name}</a>
          </li>
          <li>
            <strong>Facebook</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href={facebook.url}>
              {facebook.name}
            </a>
          </li>
          <li>
            <strong>LinkedIn</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href={linkedin.url}>
              {linkedin.name}
            </a>
          </li>
          <li>
            <strong>GitHub</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href={github.url}>
              {github.name}
            </a>
          </li>
        </ul>
      </>
    )
  }
}
