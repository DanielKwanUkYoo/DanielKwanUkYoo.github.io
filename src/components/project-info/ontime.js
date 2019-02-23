import React, {Component} from 'react';
import '../styles/project-info.css'

export default class OnTime extends Component {
    render() {
        return (
            <div className="project-popup">
                <div className="project-details-container">
                    <div className="project-title-close-button">
                        <p>OnTime</p>
                        <button onClick={this.props.onClickCloseProject}>close</button>
                    </div>
                    <div className="project-details-stack">
                        <div className="project-details">OnTime is SPA scheduling platform based on real user where any employer can schedule with all the information on hand. Employees can also time request off that will help communicate better with Employer.</div>
                        <div className="project-stack"><p>Stack</p> Javascript / Css / React / Ruby on Rails(MVC) / PostgreSQL</div>
                    </div>
                    <div className="project-website">
                        <a href="https://github.com/DanielKwanUkYoo/OnTime">Github Repo</a>
                    </div>
                </div>
            </div>  
        )
    }
}
