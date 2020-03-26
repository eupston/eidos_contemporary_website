import React, {Component} from 'react';
import ShopifyQuery from "../../../Utils/ShopifyQuery";
import { Redirect } from "react-router-dom";
import classes from '../auth.module.css';
import PageHeader from "../../../UI/PageHeader/PageHeader";
import {isNullableType} from "graphql";

class Signup extends Component {
    state = {
        signupForm: {
            firstName: {
                value: '',
            },
            lastName: {
                value: '',
            },
            email: {
                value: '',
            },
            password: {
                value: '',
            },
            confirmedPassword: {
                value: '',
            }
        },
        isSignedUp: false,
        errors: null,
        success: null,
    };

    inputChangeHandler = (event) => {
        const input = event.target.id;
        const currentValue = event.target.value;
        this.setState(prevState => {
            const updatedForm = {
                ...prevState.signupForm,
                [input]: {
                    ...prevState.signupForm[input],
                    value: currentValue
                }
            };
            return {signupForm: updatedForm, errors: null};
        });
    };

    signupHandler = async (event, data) => {
        event.preventDefault();
        console.log(data.password);
        console.log(data.confirmedPassword);
        if(data.password !== data.confirmedPassword) {
            this.setState({errors: "Passwords don't match"});
            return null
        }
        const signupQuery = {
            query: `mutation {
                      customerCreate(input:  {
                        firstName: "${data.firstName}",
                        lastName: "${data.lastName}",
                        email: "${data.email}",
                        password: "${data.password}"
                         }) 
                        {
                        customerUserErrors {
                          code
                          field
                          message
                        }
                        customer {
                          id
                        }
                      }
                    }
      `};
        console.log("signing up");
        const response = await ShopifyQuery(signupQuery);
        console.log(response);
        if(!response.customerCreate){
            this.setState({errors: "Missing Required Fields."});
            return null;
        }
        const errors = response.customerCreate.customerUserErrors;
        if(errors.length === 0) {
            this.setState({
                isSignedUp: true,
                success: "Successfully Signed up.",
                signupForm: {
                    ...this.state.signupForm,
                    firstName: { value: ""},
                    lastName: { value: ""},
                    email: { value: ""},
                    password: { value: ""},
                    confirmedPassword: { value: ""}
                }
            });
            console.log("signed up");
        }
        else{
            console.log(errors[0].message);
            this.setState({errors:errors[0].message})
        }
    };

    render() {
        return (
            <React.Fragment>
                <PageHeader title={"Signup"}/>
                <div className={classes.Error}>
                    {this.state.errors}
                </div>
                <div className={classes.Success}>
                    {this.state.success}
                </div>
                <div className={classes.Auth}>
                    <form onSubmit={e => this.signupHandler(e, {
                        firstName: this.state.signupForm.firstName.value,
                        lastName: this.state.signupForm.lastName.value,
                        email: this.state.signupForm.email.value,
                        password: this.state.signupForm.password.value,
                        confirmedPassword: this.state.signupForm.confirmedPassword.value,
                    })}>
                        <label>First Name</label>
                        <input
                            id="firstName"
                            type="name"
                            control="input"
                            className="form-control"
                            placeholder="Enter First Name"
                            value={this.state.signupForm['firstName'].value}
                            onChange={this.inputChangeHandler}
                        />
                        <label>Last Name</label>
                        <input
                            id="lastName"
                            type="name"
                            control="input"
                            className="form-control"
                            placeholder="Enter Last Name"
                            value={this.state.signupForm['lastName'].value}
                            onChange={this.inputChangeHandler}
                        />
                        <label>Email address</label>
                        <input
                            id="email"
                            type="email"
                            control="input"
                            className="form-control"
                            placeholder="Enter email"
                            value={this.state.signupForm['email'].value}
                            onChange={this.inputChangeHandler}
                        />
                        <label>Password</label>
                        <input
                            id="password"
                            type="password"
                            control="input"
                            className="form-control"
                            placeholder="Password"
                            value={this.state.signupForm['password'].value}
                            onChange={this.inputChangeHandler}
                        />
                        <label>Confirm Password</label>
                        <input
                            id="confirmedPassword"
                            type="password"
                            control="input"
                            className="form-control"
                            placeholder="Password"
                            value={this.state.signupForm['confirmedPassword'].value}
                            onChange={this.inputChangeHandler}
                        />
                        <button type="submit" className="btn btn-primary" >Signup</button>
                    </form>
                    {this.props.redirect ? this.props.isSignedUp ? <Redirect to="/login"/> : null : null}
                </div>
            </React.Fragment>
        );
    }
}

export default Signup;