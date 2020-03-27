import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from '../auth.module.css';
import ShopifyQuery from "../../../Utils/ShopifyQuery";
import {Link, Redirect} from "react-router-dom";
import * as authActions from '../../../Store/Actions/index';
import PageHeader from "../../../UI/PageHeader/PageHeader";

// example login that's active
// email: "user@example.com"
// password: "password"

class Login extends Component {
    state = {
        loginForm: {
            email: {
                value: '',
            },
            password: {
                value: '',
            }
        },
        errors:null,
    };

    inputChangeHandler = (event) => {
        const input = event.target.id;
        const currentValue = event.target.value;
        this.setState(prevState => {
            const updatedForm = {
                ...prevState.loginForm,
                [input]: {
                    ...prevState.loginForm[input],
                    value: currentValue
                }
            };
            return {loginForm: updatedForm, errors: null};
        });
    };

    loginHandler = async (event, data) => {
        const loginQuery = {
            query: `
           mutation {
              customerAccessTokenCreate(input: {email: "${data.email}", password: "${data.password}"}) {
                customerUserErrors {
                  code
                  field
                  message
                }
                customerAccessToken {
                  accessToken
                  expiresAt
                }
              }
            }
      `};
        event.preventDefault();
        console.log("logging in");
        const response = await ShopifyQuery(loginQuery);
        if(!response.customerAccessTokenCreate){
            this.setState({errors: "Incorrect email or password."});
            return null;
        }
        const errors = response.customerAccessTokenCreate.customerUserErrors;
        if(errors.length === 0) {
            const accessToken = response.customerAccessTokenCreate.customerAccessToken.accessToken;
            this.props.setCustomerAccessToken(accessToken);
            console.log("logged in");
        }
        else{
            console.log(errors[0].message);
            this.setState({errors:"Incorrect email or password."})
        }
    };

    render() {
        return (
            <React.Fragment>
                <PageHeader title={"Login"}/>
                <div className={classes.Error}>
                    {this.state.errors}
                </div>
                <div className={classes.Auth}>
                    <form onSubmit={e => this.loginHandler(e, {
                        email: this.state.loginForm.email.value,
                        password: this.state.loginForm.password.value
                    })}>
                        <label>Email address</label>
                        <input
                            id="email"
                            type="email"
                            control="input"
                            className="form-control"
                            placeholder="Enter email"
                            value={this.state.loginForm['email'].value}
                            onChange={this.inputChangeHandler}
                        />
                        <label>Password</label>
                        <input
                            id="password"
                            type="password"
                            control="input"
                            className="form-control"
                            placeholder="Password"
                            value={this.state.loginForm['password'].value}
                            onChange={this.inputChangeHandler}
                        />
                        <button type="submit" className="btn btn-primary" >Login</button>
                        {this.props.redirect ?  <p>New Customer? <Link to={'/signup'}>Signup</Link></p> : null}
                    </form>
                    {this.props.redirect ? this.props.isLoggedIn ? <Redirect to="/account"/> : null : null}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        accessToken: state.auth.customerAccessToken,
        isLoggedIn: state.auth.isLoggedIn,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCustomerAccessToken: (token) => dispatch(authActions.setCustomerAccessToken(token)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);