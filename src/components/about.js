import React, {Component} from 'react';
import './styles/about.css'


export default class About extends Component {
    render() {
        return(    

            <div className="about-container">
                <div className="about-name">DANIEL YOO<br/>
                    <div className="about-tagline">
                        Junior Fullstack Developer<br/><br/><hr/><br/>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>

            
        )
    }
}