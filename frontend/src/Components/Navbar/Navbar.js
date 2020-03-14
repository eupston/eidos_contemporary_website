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
                    <a href="/" className="nav-link" id="navbar_home">Home</a>
                    {/*<a href="/jewelry" className="nav-link" id="navbar_jewelry">Jewelry</a>*/}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Jewlery
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/jewelry/liam-fashions">Liam Fashions</a>
                            <a className="dropdown-item" href="/jewelry/ben-fashions">Ben Fashions</a>
                        </div>
                    </li>
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