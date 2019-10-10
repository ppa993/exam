import React from "react";
import Helmet from "react-helmet";

export default class Result extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <>
        <Helmet 
          title="Result" 
        />
        <div className="jumbotron d-flex align-items-center">
          <div className="container text-center">
            <h1 className="display-2 mb-4 single-blog-title"><span>Your result</span></h1>
          </div>
        </div> 
        <section id="gtco-single-content" className="bg-white">
          <div className="container">
            <div className="section-content blog-content">
              <div className="row">
                <span>Hello, this is your result: {data.result}/{data.total}</span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}