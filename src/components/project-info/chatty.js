import React, {Component} from 'react';

export default class Chatty extends Component {
    render() {
        return (
        <div className="project-popup">
            <div className="project-details-container">
                <div className="project-title-close-button">
                    <p>ChattyApp</p>
                    <button onClick={this.props.onClickCloseProject}>close</button>
                </div>
                <div className="project-details-stack">
                    <div className="project-details">A real-time communication chatting app built on React, WebSocket where multiple of clients can chat online!</div>
                    <div className="project-stack"><p>Stack</p>Javascript / React / WebSocket / Node / Express</div>
                </div>
                <div className="project-website">
                    <a href="https://github.com/DanielKwanUkYoo/ChattyApp">Github Repo</a>
                </div>
            </div>
        </div>  
        )
    }
}