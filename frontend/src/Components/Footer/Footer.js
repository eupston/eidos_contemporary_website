import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './footer.css';
import Logo from "../../UI/Logo/Logo";

export class Footer extends Component {
  render() {
    return (
        <div className="Footer">
            <hr></hr>
            <div className="row">
                <div className="col-12 col-md">
                    {/*<img src={eidosLogo} width={150} ></img>*/}
                    <Logo subtitle={true} subtitle_size={'6'}/>
                    <small className="d-block mb-3 text-muted">&copy; Eidos Jewelry 2020</small>
                    <small className="d-block mb-3 text-muted">508 Camino de la Familia</small>
                    <small className="d-block mb-3 text-muted">Santa Fe, NM 87501</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link className="text-muted" to="#">Returns and Exchanges</Link></li>
                        <li><Link className="text-muted" to="#">Shipping Policy</Link></li>
                        <li><Link className="text-muted" to="#">Ethical Trading</Link></li>
                        <li><Link className="text-muted" to="#">Warranty</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link className="text-muted" to="/our-story">Our Story</Link></li>
                        <li><Link className="text-muted" to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Follow Us!</h5>
                    <ul className="list-unstyled text-small">
                    <li><i className="fa fa-instagram"></i><a className="text-muted" href="https://www.instagram.com/eidoscontemporary/"> Instagram</a></li>
                    <li><i className="fa fa-facebook"></i><a className="text-muted" href="https://www.facebook.com/eidosjewelry/"> Facebook</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
