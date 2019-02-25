import React, {Component} from 'react';
import './styles/contact.css'

export default class Contact extends Component {
    render() {
        return(
            <div className="contact-container">
                <div className="contact-title">
                    <h2>Contact
                        <div className="contact-details">
                            <p>Looking for opportunity to grow, learn and support!</p>
                            <p>Hire me!</p>
                        </div>
                    </h2>
                    <h4>Location
                        <div className="contact-details">
                            <p>Vancouver, BC</p>
                        </div>
                    </h4>
                    <h4>Email
                        <div className="contact-details">
                            <p>kwanukyoo@gmail.com</p>
                        </div>
                    </h4>
                    <div className="contact-details">
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-github"></i></a>
                    </div>
                </div>

                {/* <div className="contact-tag-email-media">
                    <p>Looking for opportunity to grow, learn and support!</p>
                    <p>kwanukyoo@gmail.com</p>
                    <p>media</p>
                </div> */}
            </div>
        )
    }
}