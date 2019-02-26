import React, {Component} from 'react';
import './styles/contact.css'

export default class Contact extends Component {
    render() {
        return(
            <div className="contact-container"><a id="contact"></a>
                <div className="contact-title">
                    <h2>Contact
                        <div className="contact-contact-details">
                            <p>Looking for opportunity to grow, learn and support!</p>
                            <p>Hire me!</p>
                        </div>
                    </h2>
                    <h5>Location
                        <div className="contact-details">
                            <p>Vancouver, BC</p>
                        </div>
                    </h5>
                    <h5>Email
                        <div className="contact-details">
                            <p>kwanukyoo@gmail.com</p>
                        </div>
                    </h5>
                    <div className="contact-details">
                        <a href="https://www.linkedin.com/in/daniel-yoo-3269b6b0/"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/DanielKwanUkYoo"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}