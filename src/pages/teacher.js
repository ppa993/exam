import React from "react";
import Layout from "../layout";
import TeacherLogIn from '../components/TeacherLogIn'
import Manage from "../components/Manage";

export default class Teacher extends React.Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  
  state = {
    loggedIn: false
  }

  componentDidMount() {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    this.setState({ loggedIn });
  }

  logIn() {
    this.setState({loggedIn: true})
  }

  logOut() {
    this.setState({loggedIn: false})
  }

  render() {
    if (!this.state.loggedIn) return (
      <Layout>
        <TeacherLogIn logIn={this.logIn} />
      </Layout>
    )
    return (
      <Layout>
        <Manage logOut={this.logOut} />
      </Layout>
    );
  }
}