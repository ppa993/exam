/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="mastfoot bg-white py-4 border-top">
        <div className="inner container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-md-start justify-content-center">
              <p className="mb-0">&copy; 2019</p>
            </div>

            <div className="col-md-6">
              <nav className="nav nav-mastfoot justify-content-md-end justify-content-center">
                <a className="nav-link" href="#">
                  <i className="icon-facebook" />
                </a>
                <a className="nav-link" href="#">
                  <i className="icon-twitter" />
                </a>
                <a className="nav-link" href="#">
                  <i className="icon-instagram" />
                </a>
                <a className="nav-link" href="#">
                  <i className="icon-linkedin" />
                </a>
                <a className="nav-link" href="#">
                  <i className="icon-youtube" />
                </a>
                <a className="nav-link" href="#">
                  <i className="icon-pinterest" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
