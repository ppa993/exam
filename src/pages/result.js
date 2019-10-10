import React from "react";
import Layout from "../layout";
import ResultComponent from '../components/Result'

export default class Result extends React.Component {

  render() {
    return (
      <Layout>
        <ResultComponent />
      </Layout>
    );
  }
}