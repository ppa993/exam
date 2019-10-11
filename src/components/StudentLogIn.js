import React from "react";
import axios from 'axios';
import Helmet from "react-helmet";
import { Modal, Button } from 'react-bootstrap';
import config from "../../data/SiteConfig";

export default class StudentLogIn extends React.Component {

  state = {
    nric: '',
    show: false,
    completed: false,
  }

  handleClose = () => { this.setState({show: false})};

  handleNext = () => { 
    const { updateNRIC } = this.props;
    updateNRIC(this.state.nric);
  }

  onInputChange = async event => {
    const { value } = event.target;
    this.state.nric = value.toUpperCase();
  }

  onSubmitForm = async event => {
    event.preventDefault();
    await axios.get(`${config.apiUrl}/exam/${this.state.nric}`)
    .then(res => {
      this.setState({show: true});
      if (res.data) {
        this.setState({completed: true})
      }
    });
  }

  render() {
    return (
      <>
        <Helmet 
          title="Input NRIC" 
        />
        <section id="gtco-contact-form" className="bg-white">
          <div className="container">
            <div className="section-content">
              <div className="title-wrap">
                <h2 className="section-title">Log in</h2>
                <p className="section-sub-title">Please input the NRIC provided to log in to the test</p>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2 contact-form-holder mt-4 mb-4">
                  <form name="contact-us" onSubmit={this.onSubmitForm}>
                    <div className="row">
                      <div className="col-md-12 form-input flex">
                        <input type="text" className="form-control mr-3 uppercase" placeholder="NRIC" onChange={this.onInputChange} />
                        <button className="btn btn-secondary btn-cyan" name="submit">Log in</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Attention!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              this.state.completed ? 
                <span>Hello {this.state.nric}, you have completed the test</span> :
                <span>Are you ready to take the test?</span> 
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleNext}>
              {this.state.completed ? 'View result' : 'Start'}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}