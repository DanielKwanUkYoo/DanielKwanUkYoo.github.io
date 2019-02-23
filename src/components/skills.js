import React, {Component} from 'react';
import './styles/skills.css';
import Bjuk from './images/bjuk.png';
import OnTime from './images/on-time.png';
import OnTimeView from './images/on-time-view.png';


export default class Skills extends Component {
    render() {
        let Project = this.props.state.projectName;
        return(
            <div>
                <div className="intro-container"><a className="anchor" id="intro"></a>
                    <h1 className="intro-title">Intro</h1>
                    <p className="intro">
                    <p>Hello, I'm Daniel.</p><br/>
                    <p>Web Developer and natural leader who gains satisfaction by problem solving and code that empowers users. </p><br/>
                    <p>I have an applied science background with teaching and management experience that gave me the foundation to excel in my passion of web development. </p><br/>
                    <p>Love to stay curious, accept new challenges, seek for opportunities to grow and learn new technologies everyday.</p>
                    </p>
                </div>
                <div className="skills-container"><a className="anchor" id="skills"></a>
                    <div className="skills-title">
                        <h1>Skills</h1>
                        <p>I am continuously practicing to solidify these skills<br/> and searching for opportunities to learn new tools.</p> 
                    </div>
                    <div className="skills">
                        <span className="front-end"><h1>Front-End</h1><br/>
                        <p className="lists-of-skills">HTML5, CSS3, CSS Framework, Flexbox, Javascript, JS Framework( React, jQuery )</p>
                        </span>
                        <span className="back-end"><h1>Back-End</h1><br/>
                        <p className="lists-of-skills">Node.js, Ruby, Ruby on Rails(MVC), PostgreSQL, MongoDB, RSpec( testing )</p>
                        </span>
                    </div>
                </div>
        
                <div className="projects-title"><a className="anchor" id="projects"></a>
                    <h1>Projects</h1>
                    <p>Click on image to see more in details</p>
                </div>

                <div className="projects-container">
                    <div className="projects-on-time">
                        <img project-name="on-time" onClick={this.props.onClickProject} src={OnTime} 
                        style={{width: '500px', height: '300px', marginRight: '1em'}}/>
                        <img project-name="on-time" onClick={this.props.onClickProject} src={OnTimeView} 
                        style={{width: '300px', height: '300px'}} />
                        <div className="projects-jungle-chatty">
                            <span project-name="jungleapp" onClick={this.props.onClickProject} className="jungleapp">E-Commerce App</span>
                            <span project-name="chattyapp" onClick={this.props.onClickProject} className="chattyapp">Chatty App<br/>Real-time chatting app</span>
                        </div>
                    </div>
                    <div className="projects-bjuk" >
                        <img project-name="bjuk" onClick={this.props.onClickProject} src={Bjuk} 
                        style={{width: '300px', height: '400px'}}/>
                    </div>
                {this.props.state.projectClicked ? <Project onClickCloseProject={this.props.onClickCloseProject} /> : null}
                </div>
            </div>
        )
    }
}