import React from "react";
import Helmet from "react-helmet";

export default class TeacherLogIn extends React.Component {

  state = {
    username: '',
    password: ''
  }

  onUsernameChange = async event => {
    const { value } = event.target;
    this.state.username = value;
  }

  onPasswordChange = async event => {
    const { value } = event.target;
    this.state.password = value;
  }

  onSubmitForm = async event => {
    event.preventDefault();
    if (this.state.username === 'teacher' && this.state.password === 'teacher') {
      localStorage.setItem('loggedIn', true);
      const { logIn } = this.props;
      logIn();
    }
  }

  render() {
    return (
      <>
        <Helmet 
          title="Đăng nhập vào trang giáo viên" 
          bodyAttributes={{
            class: `fade-in`,
          }}
        />
        <section id="gtco-contact-form" className="bg-grey">
          <div className="container">
            <div className="section-content">
              <div className="title-wrap">
                <h2 className="section-title">Đăng nhập</h2>
                <p className="section-sub-title">Vui lòng nhập tên đăng nhập và mật khẩu</p>
              </div>
              <div className="row">
                <div className="col-md-6 offset-md-3 mt-4 mb-4">
                  <form name="contact-us" onSubmit={this.onSubmitForm}>
                    <div className="row">
                      <div className="col-md-12 mb-3 form-input">
                        <input type="text" className="form-control" placeholder="Tên đăng nhập" onChange={this.onUsernameChange} />
                      </div>
                      <div className="col-md-12 mb-5 form-input">
                        <input type="password" className="form-control" placeholder="Mật khẩu" onChange={this.onPasswordChange} />
                      </div>
                      <div className="col-md-12 form-input">
                        <button className="btn btn-cyan" name="submit">Đăng nhập</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}