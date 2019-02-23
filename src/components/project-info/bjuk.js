import React, {Component} from 'react';

export default class Bjuk extends Component {
    render() {
        return (
        <div className="project-popup">
            <div className="project-details-container">
                <div className="project-title-close-button">
                    <p>Bjuk</p>
                    <button onClick={this.props.onClickCloseProject}>close</button>
                </div>
                <div className="project-details-stack">
                    <div className="project-details">Curate your own textbook! Users can save learning resources to collections on their profile. This allows them to have a custom textbook based on resources they find most useful.</div>
                    <div className="project-stack"><p>Stack</p>Html / Css / Bootstrap / Javascript / jQuery / PostgreSQL / Node / Express</div>
                </div>
                <div className="project-website">
                    <a href="https://github.com/DanielKwanUkYoo/Bjuk">Github Repo</a>
                </div>
            </div>
        </div>  
        )
    }
}