import React, {Component} from 'react';
import './styles/skills.css'
export default class Skills extends Component {
    render() {
        return(
            <div>
                <div className="intro-container">
                    <h1 className="intro-title">Intro</h1>
                    <p className="intro">
                    <p>Hello, I'm Daniel.</p><br/>
                    <p>Web Developer and natural leader who gains satisfaction by problem solving and code that empowers users. </p><br/>
                    <p>I have an applied science background with teaching and management experience that gave me the foundation to excel in my passion of web development. </p><br/>
                    <p>Love to stay curious, accept new challenges, seek for opportunities to grow and learn new technologies everyday.</p>
                    </p>
                </div>
                <div className="skills-container">
                    <div className="skills-title">
                        <h1>Skills</h1> 
                    </div>
                    <div className="skills">
                        <span className="front-end"><h1>Front-End</h1><br/>
                        <p className="lists-of-skills">HTML5, CSS3, CSS Framework, Flexbox, Javascript, JS Framework( React, jQuery )</p>
                        </span>
                        <span className="back-end"><h1>Back-End</h1><br/>
                        <p className="lists-of-skills">Node.js, Ruby, Ruby on Rails, PostgreSQL, MongoDB, RSpec( testing )</p>
                        </span>
                    </div>
                </div>
                <div className="projects-container">
                    <div className="projects-title">
                        <h1>Projects</h1>
                    </div>
                </div>
            </div>
        )
    }
}