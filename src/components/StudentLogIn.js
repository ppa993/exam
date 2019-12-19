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
    this.state.nric = value;
  }

  onSubmitForm = async event => {
    event.preventDefault();
    await axios.get(`${config.apiUrl}/exam/${this.state.nric}`)
    .then(res => {
      this.setState({show: true});
      if (res.data) {
        this.setState({completed: true});
      } else {
        this.setState({completed: false});
      }
    });
  }

  render() {
    return (
      <>
        <Helmet 
          title="Đăng nhập" 
        />
        <section id="gtco-contact-form" className="bg-grey">
          <div className="container">
            <div className="section-content">
              <div className="title-wrap">
                <h2 className="section-title">Họ và Tên</h2>
                <p className="section-sub-title">Để bắt đầu, vui lòng nhập họ tên</p>
              </div>
              <div className="row">
                <div className="col-md-6 offset-md-3 mt-4 mb-4">
                  <form name="contact-us" onSubmit={this.onSubmitForm}>
                    <div className="row">
                      <div className="col-md-12 form-input flex">
                        <input type="text" className="form-control mr-3" placeholder="Họ và tên" onChange={this.onInputChange} />
                        <button className="btn btn-secondary btn-cyan" name="submit">Bắt đầu</button>
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
            <Modal.Title>Chú ý!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              this.state.completed ? 
                <span>Chào {this.state.nric}, bạn đã hoàn thành bài kiểm tra!</span> :
                <span>Bạn đã sẵn sàng?</span> 
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Đóng
            </Button>
            <Button variant="primary" onClick={this.handleNext} className="btn-cyan">
              {this.state.completed ? 'Xem kết quả' : 'Bắt đầu'}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}