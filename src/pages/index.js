import React from "react";
import axios from 'axios';
import Layout from "../layout";
import Exam from '../components/Exam';
import Result from '../components/Result';
import StudentLogIn from '../components/StudentLogIn';
import config from "../../data/SiteConfig";

export default class TakeExam extends React.Component {
  constructor(props) {
    super(props);
    this.examCompleted = this.examCompleted.bind(this);
    this.updateNRIC = this.updateNRIC.bind(this);
  }

  state = {
    completed: false,
    nric: ''
  }

  updateNRIC = async nric => {
    await axios.get(`${config.apiUrl}/exam/${nric}`)
    .then(res => {
      this.setState({nric});
      if (res.data) {
        this.setState({completed: true});
      }
    });
  }

  examCompleted() {
    this.setState({completed: true})
  }

  render() {
    if (!this.state.nric) return (
      <Layout>
        <StudentLogIn updateNRIC={this.updateNRIC} />
      </Layout>
    )

    if (this.state.completed) return (
      <Layout>
        <Result nric={this.state.nric} />
      </Layout>
    )

    return (
      <Layout>
        <Exam nric={this.state.nric} examCompleted={this.examCompleted} />
      </Layout>
    );
  }
}