import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './footer.css';
import Logo from "../../UI/Logo/Logo";

export class Footer extends Component {
  render() {
    return (
        <div className="Footer">
            <hr></hr>
            <div className="FooterItems">
                <div className="AddressItem">
                    <div className="Logo">
                        <Logo className="Logomargin" subtitle={true} subtitle_size={'6'}/>
                    </div>
                    <small className="d-block text-muted">&copy; Eidos Jewelry 2020</small>
                    <small className="d-block text-muted">All Rights Reserved</small>
                    <br/>
                    <small className="d-block text-muted">508 Camino de la Familia</small>
                    <small className="d-block text-muted">Santa Fe, NM 87501</small>
                </div>
                <div className="FooterItem">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link to="#">Returns and Exchanges</Link></li>
                        <li><Link to="#">Shipping Policy</Link></li>
                        <li><Link to="#">Ethical Trading</Link></li>
                        <li><Link to="#">Warranty</Link></li>
                    </ul>
                </div>
                <div className="FooterItem">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/our-story">Our Story</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="FooterItem">
                    <h5>Social Media</h5>
                    <ul className="list-unstyled text-small">
                        <li><i className="fa fa-instagram"></i><a href="https://www.instagram.com/eidoscontemporary/" target="_blank"> Instagram</a></li>
                        <li><i className="fa fa-facebook-square"></i><a href="https://www.facebook.com/eidosjewelry/" target="_blank"> Facebook</a></li>
                        <li><i className="fa fa-twitter-square"></i><a href="https://twitter.com/eidosj" target="_blank"> Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
