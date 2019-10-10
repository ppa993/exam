import React, { Component } from 'react'
import anst from '../../content/images/anst.jpg'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={anst} alt="An ST" />
            </div>
            <div>
              <p>
                {`I'm An, a software developer specializing in modern JavaScript. I make
              open source coding projects and write free, quality articles and tutorials that help
              thousands of people daily. No ads, no sponsored posts, no bullshit.`}
              </p>

              <div className="flex">
                <a
                  href="https://ko-fi.com/ppa993"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee!
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
