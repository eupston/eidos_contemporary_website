import React, {Component} from 'react';
import classes from './navbar.module.css';
import eidosLogo from '../../assets/images/EidosLogo.jpg';
import {Link} from "react-router-dom";



const vendorsList = ["Gordon Lawrie", "Deborah Alexander"];

const vendorDropDowns = vendorsList.map(ven => {
    const vendorURL = ven.toLowerCase().replace(" ", "-");
    const completeURL = "/jewelry/" + vendorURL;
   return <Link className="dropdown-item" to={completeURL}>{ven}</Link>
});


class StickyNavbar extends Component {
    render() {
        return (
            <div className={classes.Navbar} >
                <br></br>
                <img src={eidosLogo}></img>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to="/">Home</Link>
                    <li className="nav-item dropdown">

                        <Link className="nav-link dropdown-toggle"
                              href="/"
                              id="navbarDropdownMenuLink"
                              to="/"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false">Jewelery</Link>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            {vendorDropDowns}
                        </div>
                    </li>
                    <Link to="/our-story">Our Story</Link>
                    <Link to="/custom">Custom</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </nav>
                <hr></hr>
            </div>

        );
    }
}

export default StickyNavbar;