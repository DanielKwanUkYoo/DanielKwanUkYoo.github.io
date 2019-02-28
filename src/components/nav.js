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
                    <li><a style={{color: this.state.fontColor}} href="#intro">About me</a></li>
                    <li><a style={{color: this.state.fontColor}} href="#skills">Skills</a></li>
                    <li><a style={{color: this.state.fontColor}} href="#projects">Projects</a></li>
                    <li><a style={{color: this.state.fontColor}} href="#contact">Contact</a></li>
                    <li>
                        <i onClick={this.props.onClickNav} 
                        style={{backgroundColor: this.state.navColor, opacity: this.state.opacity, color: this.state.fontColor}}className="fas fa-bars">
                        </i>
                    </li>
                </ul>
                <ul className="resp-menu-lists" 
                style={{transform: this.props.respNavClicked ? "scaleY(1)" : "scaleY(0)", backgroundColor: this.state.navColor, opacity: this.state.opacity}}>
                    <li style={{marginTop: '1em'}}><a onClick={this.props.onClickNav} style={{color: this.state.fontColor}} href="#">Home</a></li>
                    <li><a onClick={this.props.onClickNav} style={{color: this.state.fontColor}} href="#intro">About me</a></li>
                    <li><a onClick={this.props.onClickNav} style={{color: this.state.fontColor}} href="#skills">Skills</a></li>
                    <li><a onClick={this.props.onClickNav} style={{color: this.state.fontColor}} href="#projects">Projects</a></li>
                    <li><a onClick={this.props.onClickNav} style={{color: this.state.fontColor}} href="#contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}