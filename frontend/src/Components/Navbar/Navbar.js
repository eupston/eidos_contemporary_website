import React, {Component} from 'react';
import classes from './navbar.module.css';
import eidosLogo from '../../assets/images/EidosLogo.jpg';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';


class StickyNavbar extends Component {
    state = {
        isHovered : false,
        isScrolling: false,
        navBarClasses: [classes.MainBar]
    };

    handleStickyNavbar = () => {
        const page_position = window.pageYOffset;

        if ( page_position >= 50) {
            this.setState({navBarClasses:[classes.MainBar, classes.MainBarSticky], isScrolling:true})
        }
        else {
            this.setState({navBarClasses:[classes.MainBar], isScrolling:false});
        }
    };

    componentDidMount(){
        window.addEventListener('scroll', this.handleStickyNavbar);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleStickyNavbar);
    }

    handleOnHover = () => {
        this.setState({isHovered: true});
    };

    handleOffHover = () => {
        this.setState({isHovered: false});
    };


    vendorDropDowns = Object.keys(this.props.jewelers.vendors).map(ven => {
        const vendorURL = ven.toLowerCase().replace(" ", "-");
        const completeURL = "/jewelry/" + vendorURL;
        return <Link className="dropdown-item " to={completeURL}>{ven}</Link>
    });
    render() {
        console.log(this.state)
        return (
                 <div className={this.state.navBarClasses.join(' ') } id="mainnavbar">
                    {!this.state.isScrolling ? <img src={eidosLogo} ></img> : null}
                    <nav className={classes.Navbar}  >
                        <div className={classes.NavbarLeft}>
                            {this.state.isScrolling ? <img src={eidosLogo} width={200} ></img> : null}
                        </div>
                        <div className={classes.NavbarMiddle}>
                            <Link to="/">Home</Link>
                            <span className="nav-item dropdown" onMouseOver={this.handleOnHover} >
                                <Link className="dropdown-toggle"
                                      href="/"
                                      id="navbarDropdownMenuLink"
                                      to="/"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false">Jewelery</Link>

                                <span className={this.state.isHovered ? "dropdown-menu show" : "dropdown-menu"}
                                      aria-labelledby="navbarDropdownMenuLink"
                                      onMouseOver={this.handleOnHover}
                                      onMouseLeave={this.handleOffHover}
                                >
                                    {this.vendorDropDowns}
                                </span>
                            </span>
                            <Link to="/our-story">Our Story</Link>
                            <Link to="/custom">Custom</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className={classes.NavbarRight}>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    </nav>
                  <hr ></hr>
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