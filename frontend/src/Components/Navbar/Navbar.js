import React, {Component} from 'react';
import classes from './navbar.module.css';
import eidosLogo from '../../assets/images/EidosLogo.jpg';

class StickyNavbar extends Component {
    render() {
        return (
            <div className={classes.Navbar} >
                <br></br>
                <img src={eidosLogo}></img>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a href="/home" className="nav-link" id="navbar_home">Home</a>
                    <a href="/jewelry" className="nav-link" id="navbar_jewelry">Jewelry</a>
                    <a href="/our-story" className="nav-link" id="navbar_our_story">Our Story</a>
                    <a href="/custom" className="nav-link" id="navbar_custom">Custom</a>
                    <a href="/contact" className="nav-link" id="navbar_contact" >Contact</a>
                    <a href="/login" className="nav-link" id="navbar_login" >Login</a>
                    <a href="/signup" className="nav-link" id="navbar_signup" >Signup</a>
                </nav>
                <hr></hr>
            </div>

        );
    }
}

export default StickyNavbar;