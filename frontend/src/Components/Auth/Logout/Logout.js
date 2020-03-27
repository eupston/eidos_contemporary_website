import {connect} from "react-redux";
import * as authActions from "../../../Store/Actions";
import {Redirect} from "react-router-dom";

import React, {Component} from 'react';

class Logout extends Component {
    componentDidMount() {
        this.props.customerLogout()
    }

    render() {
        return (
            <div>
                <Redirect to='/'/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
};
const mapDispatchToProps = dispatch => {
    return {
        customerLogout: () => dispatch(authActions.customerLogout()),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Logout);
