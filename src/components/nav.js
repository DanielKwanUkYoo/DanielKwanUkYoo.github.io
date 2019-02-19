import React, {Component} from 'react';
import './styles/nav.css'

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialScroll: 0,
            navColor: "",
            fontColor: "",
            opacity: ""
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    };

    componentWillUnmount() {
        window.removeEventListener('scorll', this.handleScroll)
    };

    handleScroll = () => {
        const initialScroll = this.state.initialScroll;
        const currentScroll = window.scrollY;
        if (currentScroll > initialScroll) {
            this.setState({ navColor: '#fff', fontColor: '#222', opacity: 0.8 })
        } else if (currentScroll < 1){
            this.setState({ navColor: '#222', fontColor: '#fff', opacity: 1})
        }
    }
    
    render() {

        return(
            <nav onScroll={this.handleScroll} className="nav-container" style={{backgroundColor: this.state.navColor, opacity: this.state.opacity}}>
                <ul className="menu-lists">
                    <li><a style={{color: this.state.fontColor}} href="#">Home</a></li>
                    <li><a style={{color: this.state.fontColor}} href="#">About me</a></li>
                    <li><a style={{color: this.state.fontColor}} href="#">Skills</a></li>
                    <li><a style={{color: this.state.fontColor}} href="#">Projects</a></li>
                    <li><a style={{color: this.state.fontColor}} href="#">Contact</a></li>
                </ul>
            </nav>
        )
    }
}