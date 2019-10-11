import React from "react";
import axios from 'axios';
import Helmet from "react-helmet";
import Countdown from 'react-countdown-now';
import questions from "../../data/questions";
import config from "../../data/SiteConfig";

const date = Date.now() + 900000;

const renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
    return <span>Time out!</span>;
  } 
  return (<span>{minutes}:{seconds}</span>);
};

export default class Exam extends React.Component {

  state = {
    result: [],
    scrolled: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
    setTimeout(() => {
      this.timeOut();
    }, 900000)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 70) {
      this.setState({scrolled: true})
    } else {
      this.setState({scrolled: false})
    }
  }

  onSelectChange = async event => {
    const { name, value } = event.target;
    let { result } = this.state;
    const valueExist = result.find(item => item.question === name) !== undefined;
    if (!valueExist) {
      result = [...result, { question: name, answer: value }];
    } else {
      result = result.map(item => {
        const temp = Object.assign({}, item);
        if (temp.question === name) {
            temp.answer = value;
        }
        return temp;
      })
    }
    this.state.result = result;
  }

  onSubmitForm = async event => {
    event.preventDefault();
    this.timeOut();
    const { result } = this.state;
    const { nric, examCompleted } = this.props;
    
    await axios.post(`${config.apiUrl}/exam`, { nric, data: result })
    .then(() => {
      examCompleted();
    });
  }

  timeOut() {
    const form = document.getElementById("exam");
    const elements = form.elements;
    for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].type !== "submit")
          elements[i].disabled = true;
    }
  }

  render() {
    return (
      <>
        <Helmet 
          title="Exam" 
          bodyAttributes={{
            class: `${this.state.scrolled ? 'single-layout not-on-top' : 'single-layout'}`,
          }}
        />
        <nav id="gtco-header-navbar" className="navbar navbar-expand-lg py-4">
          <div className="container">
            <div className="flex flex-grow-1" id="navbar-nav-header">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <span><Countdown date={date} renderer={renderer} /></span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="jumbotron d-flex align-items-center">
          <div className="container text-center">
            <h1 className="display-2 mb-4 single-blog-title"><span>Exam</span></h1>
          </div>
        </div> 
        <section id="gtco-single-content" className="bg-white">
          <div className="container">
            <div className="section-content blog-content">
              <div className="row">
                <form id="exam" className="col-md-10 offset-md-1" onSubmit={this.onSubmitForm}>
                  {questions.map((question, index) => {
                    return (
                      <div key={question.id} className="mb-5">
                        <h4>{index+1}. {question.question}</h4>
                        {question.answers.map(answer => {
                          return (
                            <div key={`${question.id}${answer.label}`}>
                              <input type="radio" value={answer.label} className="mr-2" name={question.id} onChange={this.onSelectChange} /> 
                              <span>{answer.label} . {answer.value}</span>
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                  <button className="btn btn-block btn-secondary btn-red">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}