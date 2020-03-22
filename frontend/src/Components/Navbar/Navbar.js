import React, {Component} from 'react';
import classes from './navbar.module.css';
import eidosLogo from '../../assets/images/EidosLogo.jpg';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import './navbarMobile.css'

class StickyNavbar extends Component {
    state = {
        isHovered : false,
        isScrolling: false,
        navBarClasses: [classes.MainBar],
        mobile_navbar_active: false
    };

    componentDidMount(){
        window.addEventListener('scroll', this.handleStickyNavbar);
        window.addEventListener('resize', this.handleMobileNavbarTransition);
        this.handleMobileNavbarTransition();

    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleStickyNavbar);
        window.removeEventListener('resize', this.handleMobileNavbarTransition);

    }

    handleStickyNavbar = () => {
        const page_position = window.pageYOffset;
        let nav = false;
        try {
            nav = document.getElementById("mainlogo").getBoundingClientRect().top + window.scrollY;
        }
        catch(err){
            console.log(err)
        }
        if (page_position==0){
            this.setState({navBarClasses:[classes.MainBar], isScrolling:false});
        }
        else if (!nav || page_position > 80) {
            this.setState({navBarClasses:[classes.MainBar, classes.MainBarSticky], isScrolling:true})
        }

    };

    handleOnHover = () => {
        this.setState({isHovered: true});
    };

    handleOffHover = () => {
        this.setState({isHovered: false});
    };


    handleMobileNavbarTransition = () => {
        if (window.innerWidth < 1000){
            this.setState({mobile_navbar_active:true});
        }
        else{
            this.setState({mobile_navbar_active:false});
        }
    }
    openNav = ( ) => {
        document.getElementById("mySidenav").style.width = "300px";
        // document.getElementById("app").style.marginLeft = "300px";

        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    };

    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("app").style.marginLeft= "0";
    };

    vendorDropDowns = Object.keys(this.props.jewelers.vendors).map(ven => {
        const vendorURL = ven.toLowerCase().replace(" ", "-");
        const completeURL = "/jewelry/" + vendorURL;
        return <Link onClick={this.closeNav} className="dropdown-item " to={completeURL}>{ven}</Link>
    });

    render() {
        return (
            <React.Fragment>
                {!this.state.mobile_navbar_active ?
                  <div className={this.state.navBarClasses.join(' ') } id="mainnavbar">
                         {!this.state.isScrolling ? <img className={classes.MainLogoImg} id="mainlogo" onMouseOver={this.handleOffHover}  src={eidosLogo} ></img> : null}
                         <nav className={classes.Navbar}  >
                             <div className={classes.NavbarLeft}>
                                 {this.state.isScrolling ? <img src={eidosLogo} width={200} ></img> : null}
                             </div>

                             <div className={classes.NavbarMiddle}>
                                 <Link onMouseOver={this.handleOffHover}  to="/">Home</Link>
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
                                <Link onMouseOver={this.handleOffHover} to="/our-story">Our Story</Link>
                                <Link  to="/custom">Custom</Link>
                                <Link  to="/contact">Contact</Link>
                            </div>
                            <div className={classes.NavbarRight}>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                            </div>
                        </nav>
                     {!this.state.isScrolling ? <hr style={{width:"80%"}}></hr> :  <hr style={{width:"100%"}}></hr>}
                 </div>
                    :
            <div className={classes.NavbarMobile}>

                <div className={classes.NavbarMobileItems}>
                    <button aria-label="Menu"
                            data-header-nav-toggle=""
                            onClick={this.openNav}

                    >
                                <span className="navigation-toggle-icon">
                                <svg aria-hidden="true"
                            focusable="false"
                            role="presentation"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="12"
                            viewBox="0 0 18 12">
                                <path fill="currentColor"
                            fill-rule="evenodd"
                            d="M0 0h18v2H0zM0 5h18v2H0zM0 10h18v2H0z"></path>
                        </svg>
                        </span>
                    </button>

                    <img src={eidosLogo} width={200} ></img>
             </div>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <Link onClick={this.closeNav} to="/">Home</Link>
                    <span className="nav-item dropdown" >
                                     <Link className="dropdown-toggle"
                                                 href="/"
                                                 id="navbarDropdownMenuLink"
                                                 to="/"
                                                 data-toggle="dropdown"
                                                 aria-haspopup="true"
                                                 aria-expanded="false"
                                                onClick={this.closeNav}>Jewelery</Link>

                                           <span className="dropdown-menu"
                                                 aria-labelledby="navbarDropdownMenuLink"
                                           >
                                               {this.vendorDropDowns}
                                           </span>
                        </span>
                    <Link onClick={this.closeNav} to="/our-story">Our Story</Link>
                    <Link onClick={this.closeNav} to="/custom">Custom</Link>
                    <Link onClick={this.closeNav} to="/contact">Contact</Link>
                    <Link onClick={this.closeNav} to="/login">Login</Link>
                    <Link onClick={this.closeNav} to="/signup">Signup</Link>
                </div>
                <hr style={{width:"100%"}}/>
            </div>}
        </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        jewelers: state.vendors,
    }
};

export default connect(mapStateToProps)(StickyNavbar);