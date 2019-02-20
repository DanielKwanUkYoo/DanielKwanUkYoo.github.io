import React, {Component} from 'react';
import './styles/skills.css'
export default class Skills extends Component {
    render() {
        return(
            <div>
                <div className="intro-container">
                    <h1>Background</h1>
                    <h1>About</h1>
                    <h1>Interests</h1>
                </div>
                <div className="skills-container">
                    <h1>Front-End</h1>
                    <h1>Back-End</h1>
                </div>
            </div>
        )
    }
}