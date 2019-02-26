import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'
import About from './components/about'
import Skills from './components/skills'
import Contact from './components/contact'
import OnTimeInfo from './components/project-info/ontime';
import BjukInfo from './components/project-info/bjuk';
import JungleInfo from './components/project-info/jungle';
import ChattyInfo from './components/project-info/chatty';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectClicked: false,
      projectName: ""
    };
  }

  onClickProject = (event) => {
    const projectName = event.target.getAttribute('project-name');
  
    if (projectName === "on-time") {
      this.setState({ projectClicked: true, projectName: OnTimeInfo});
    } else if (projectName === "bjuk") {
      this.setState({ projectClicked: true, projectName: BjukInfo});
    } else if (projectName === "chattyapp"){
      this.setState({ projectClicked: true, projectName: ChattyInfo});
    } else if (projectName === "jungleapp") {
      this.setState({ projectClicked: true, projectName: JungleInfo});
    }
  };

  onClickCloseProject = (event) => {
    const projectDetail = document.getElementsByClassName('project-details-container')[0];
    projectDetail.style.animation = "fadeOut 0.5s";
    setTimeout(() => this.setState({ projectClicked: false }), 300);
  };

  render() {
    return (
      <div>
        <Nav />,
        <About />
        <Skills onClickProject={this.onClickProject} onClickCloseProject={this.onClickCloseProject} state={this.state}/>
        <Contact />
      </div>
    );
  }
}

export default App;
