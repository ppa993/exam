import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    const { loading } = this.props
    return loading ? (
      <div className="lds-css ng-scope">
        <div className="lds-eclipse">
          <div />
        </div>
      </div>
    ) : null
  }
}
