import React, {Component} from 'react';
import './styles/nav.css'

export default class Nav extends Component {
    render() {
        return(
            <nav className="nav-container">
                <ul className="menu-lists">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        )
    }
}