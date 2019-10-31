import React from "react";
import axios from 'axios';
import Helmet from "react-helmet";
import ResultListing from "./ResultListing";
import config from "../../data/SiteConfig";

export default class Manage extends React.Component {
  
  state = {
    searchTerm: '',
    results: [],
    filteredResults: []
  }
  
  componentDidMount() {
    axios.get(`${config.apiUrl}/exam`)
    .then(res => {
      if (res.data) {
        this.setState({results: res.data, filteredResults: res.data})
      }
    });
  }

  handleChange = async event => {
    const { name, value } = event.target

    await this.setState({ [name]: value })

    this.filterPosts()
  }
  
  filterPosts = () => {
    const { results, searchTerm } = this.state

    const filteredResults = results.filter(result =>
      result.nric.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.result.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )

    this.setState({ filteredResults })
  }

  onLogOut = async () => {
    const { logOut } = this.props;
    localStorage.setItem('loggedIn', false);
    logOut();
  }

  render() {
    const { searchTerm, filteredResults } = this.state
    
    return (
      <>
        <Helmet 
          title="Manage" 
        />
        <section id="gtco-contact-form" className="bg-white">
          <div className="container">
            <div className="log-out">
              <button className="btn btn-cyan" name="submit" onClick={this.onLogOut}>Log out</button>
            </div>
            <div className="section-content">
              <div className="title-wrap">
                <h2 className="section-title">Hello</h2>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2 mt-4 mb-4 test">
                  <form>
                    <input className="form-control" name="searchTerm" value={searchTerm} placeholder="Type here to filter posts..." onChange={this.handleChange} />
                  </form>
                  <ResultListing results={filteredResults} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}