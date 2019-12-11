import React from "react";
import axios from 'axios';
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import { formatDate } from '../utils/global';

export default class Result extends React.Component {

  state = {
    data: {
      nric: '',
      result: '',
      total: '',
      time: Date.now()
    }
  }

  componentDidMount() {
    const { nric } = this.props;
    axios.get(`${config.apiUrl}/exam/${nric}`)
    .then(res => {
      this.setState({data: res.data})
    });
  }

  render() {
    const { data } = this.state;
    const date = new Date(data.time);
    return (
      <>
        <Helmet 
          title="Kết quả" 
        />
        <div className="jumbotron d-flex align-items-center">
          <div className="container text-center">
            <h1 className="display-2 mb-4 single-blog-title"><span>Kết quả của bạn</span></h1>
          </div>
        </div> 
        <section id="gtco-single-content" className="bg-white">
          <div className="container">
            <div className="section-content blog-content">
              <div className="row">
                <div className="col-md-6 offset-md-4 mt-4 mb-4">
                  <span>Chào {data.nric}, bạn đã trả lời đúng {data.result}/{data.total} câu hỏi.</span><br />
                  <span>Hoàn thành lúc {`${formatDate(date)} ${date.toLocaleTimeString()}`}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}