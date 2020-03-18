import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
        <div className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <div className="col-12 col-md">
                    <small className="d-block mb-3 text-muted">&copy; Eidos Jewelry 2020</small>
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
                    <li><a className="text-muted" href="#">Resource name</a></li>
                    <li><a className="text-muted" href="#">Another resource</a></li>
                    <li><a className="text-muted" href="#">Final resource</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Our Story</a></li>
                    <li><a className="text-muted" href="#">Locations</a></li>
                    <li><a className="text-muted" href="#">Address: 
                    <small className="d-block mb-3 text-muted">1827 Ledgemont Ave. Apt 773</small>
                    </a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
