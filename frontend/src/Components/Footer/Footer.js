import React, { Component } from "react";
import eidosLogo from '../../assets/images/EidosLogo.jpg'
import './footer.css';

export class Footer extends Component {
  render() {
    return (
        <div className="pt-4 my-md-5 pt-md-5 Footer">
            <hr></hr>
            <div className="row">
                <div className="col-12 col-md">
                    <img src={eidosLogo} width={150} ></img>
                    <small className="d-block mb-3 text-muted">&copy; Eidos Jewelry 2020</small>
                    <small className="d-block mb-3 text-muted">508 Camino de la Familia</small>
                    <small className="d-block mb-3 text-muted">Santa Fe, NM 87501</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Follow Us!</h5>
                    <ul className="list-unstyled text-small">
                    <li><i className="fa fa-twitter"></i><a className="text-muted" href="#"> Twitter</a></li>
                    <li><i className="fa fa-instagram"></i><a className="text-muted" href="#"> Instagram</a></li>
                    <li><i className="fa fa-facebook"></i><a className="text-muted" href="#"> Facebook</a></li>
                    <li><i className="fa fa-google"></i><a className="text-muted" href="#"> Google+</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Returns and Exchanges</a></li>
                    <li><a className="text-muted" href="#">Shipping Policy</a></li>
                    <li><a className="text-muted" href="#">Ethical Trading</a></li>
                    <li><a className="text-muted" href="#">Warranty</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Our Story</a></li>
                    <li><a className="text-muted" href="#">Contact Us</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
