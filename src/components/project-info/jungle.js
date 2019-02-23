import React, {Component} from 'react';

export default class Tiny extends Component {
    render() {
        return (
            <div className="project-popup">
            <div className="project-details-container">
                <div className="project-title-close-button">
                    <p>Jungle-Rails</p>
                    <button onClick={this.props.onClickCloseProject}>close</button>
                </div>
                <div className="project-details-stack">
                    <div className="project-details">A mini e-commerce application to practice fix bugs / add new features to given application. The purpose of this project was to simulate what I will be doing out in the world!</div>
                    <div className="project-stack"><p>Stack</p>Ruby / Ruby on Rails(MVC) / postgreSQL</div>
                </div>
                <div className="project-website">
                    <a href="https://github.com/DanielKwanUkYoo/jungle-rails">Github Repo</a>
                </div>
            </div>
        </div>  
        )
    }
}