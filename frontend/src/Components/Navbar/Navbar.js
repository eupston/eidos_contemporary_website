import React, {Component} from 'react';
import classes from './navbar.module.css';
import eidosLogo from '../../assets/images/EidosLogo.jpg';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';


class StickyNavbar extends Component {
    state = {

    };
    vendorDropDowns = Object.keys(this.props.jewelers.vendors).map(ven => {
        const vendorURL = ven.toLowerCase().replace(" ", "-");
        const completeURL = "/jewelry/" + vendorURL;
        return <Link className="dropdown-item" to={completeURL}>{ven}</Link>
    });
    render() {
        return (
            <div className={classes.Navbar} >
                {console.log(this.props.jewelers.vendors)}
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
                            {this.vendorDropDowns}
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

const mapStateToProps = state => {
    return {
        jewelers: state.vendors,
    }
};

export default connect(mapStateToProps)(StickyNavbar);