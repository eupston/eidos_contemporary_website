import React, {Component} from 'react';
import classes from '../auth.module.css';
import ShopifyQuery from "../../../Utils/ShopifyQuery";
import { Redirect } from "react-router-dom";

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
        accessToken: "",
        isLoggedIn: false,
        errors:null
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
            this.setState({accessToken: accessToken, isLoggedIn: true});
            const loginNavbar = document.getElementById("navbar_login");
            loginNavbar.innerText = "Logout";
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
                    </form>
                    {this.state.isLoggedIn ? <Redirect to={"/"}/> : null}
                </div>
            </React.Fragment>
        );
    }
}

export default Login;