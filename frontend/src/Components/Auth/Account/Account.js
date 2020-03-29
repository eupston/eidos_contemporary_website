import React, {Component} from 'react';
import classes from '../auth.module.css';
import PageHeader from "../../../UI/PageHeader/PageHeader";
import customerQuery from "../../../Utils/CustomerQuery";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import ShopifyQuery from "../../../Utils/ShopifyQuery";

class Account extends Component {
    state = {
        customerForm: {
            firstName: {
                value: '',
            },
            lastName: {
                value: '',
            },
            email: {
                value: '',
            },
            phoneNumber: {
                value: '',
            },
            street: {
                value: '',
            },
            city: {
                value: '',
            },
            country: {
                value: '',
            },
            zip: {
                value: '',
            },
        },
        addressId: null,
        id: null,
        redirect: false,
        success: null
    };
    
    async componentWillMount () {
        if(!this.props.isLoggedIn){
            this.setState({redirect:true});
            return false;
        }
        const customerData = await customerQuery(this.props.accessToken);
        const customerHasAddress = customerData.customer.defaultAddress;
        this.setState({
            id: customerData.customer.id,
            customerForm: {
            ...this.state.customerForm,
                firstName: { value: customerData.customer.firstName},
                lastName: { value: customerData.customer.lastName},
                email: { value: customerData.customer.email},
                phoneNumber: { value: customerData.customer.phone}
        }});
        if(customerHasAddress) {
            this.setState({
                addressId: customerData.customer.defaultAddress.id,
                street: {value: customerData.customer.defaultAddress.address1},
                city: {value: customerData.customer.defaultAddress.city},
                country: {value: customerData.customer.defaultAddress.country},
                zip: {value: customerData.customer.defaultAddress.zip}
            })
        }
    };
    
    inputChangeHandler = (event) => {
        const input = event.target.id;
        const currentValue = event.target.value;
        this.setState(prevState => {
            const updatedForm = {
                ...prevState.customerForm,
                [input]: {
                    ...prevState.customerForm[input],
                    value: currentValue
                }
            };
            return {customerForm: updatedForm,errors: null, success:null};
        });
    };

    submitHandler = async (event, data) => {
        event.preventDefault();
        const phoneNumber = data.phoneNumber.replace(/ /g,"")
        const customerUpdateQuery = {
            query: `mutation customerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
                      customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
                        customer {
                          id
                        }
                        customerAccessToken {
                          accessToken
                          expiresAt
                        }
                        customerUserErrors {
                          code
                          field
                          message
                        }
                      }
                    }`,
            variables: {
                customerAccessToken: this.props.accessToken,
                customer: {
                    email:data.email,
                    firstName:data.firstName,
                    lastName:data.lastName,
                    phone:phoneNumber,
                }
            }
        };
        const customerAddressUpdate = {
            query: `mutation customerAddressUpdate($customerAccessToken: String!, $id: ID!, $address: MailingAddressInput!) {
                          customerAddressUpdate(customerAccessToken: $customerAccessToken, id: $id, address: $address) {
                            customerAddress {
                              id
                            }
                            customerUserErrors {
                              code
                              field
                              message
                            }
                          }
                        }`,
            variables: {
                "customerAccessToken": this.props.accessToken,
                "id": data.addressId,
                "address": {
                    address1: data.street,
                    city: data.city,
                    country: data.country,
                    zip: data.zip
                }
            }
        }

        const response = await ShopifyQuery(customerUpdateQuery);
        let errors = response.customerUpdate.customerUserErrors;
        if(errors.length === 0) {
            this.setState({ success: "Successfully Updated Account Information."});
        }
        else{
            console.log(errors[0].message);
            this.setState({errors:errors[0].message, success:null})
            return false;
        }

        const addressResponse = await ShopifyQuery(customerAddressUpdate);
        errors = addressResponse.customerAddressUpdate.customerUserErrors;
        if(errors.length === 0) {
            this.setState({ success: "Successfully Updated Account Information."});
        }
        else{
            console.log(errors[0].message);
            this.setState({errors:errors[0].message, success:null})
            return false;
        }

    };

    render() {
        return (
            <React.Fragment>
                {this.state.redirect ? <Redirect to="/login"/> : null}
                <PageHeader title="Account"/>
                    <div className={classes.Error}>
                        {this.state.errors}
                    </div>
                    <div className={classes.Success}>
                        {this.state.success}
                    </div>
                    <div className={classes.Auth}>
                        <form  onSubmit={e => this.submitHandler(e,{
                            firstName : this.state.customerForm.firstName.value,
                            lastName : this.state.customerForm.lastName.value,
                            email: this.state.customerForm.email.value,
                            phoneNumber : this.state.customerForm.phoneNumber.value,
                            street : this.state.customerForm.street.value,
                            city : this.state.customerForm.city.value,
                            country : this.state.customerForm.country.value,
                            zip : this.state.customerForm.zip.value,
                            addressId: this.state.addressId
                        })}>
                            <label>First Name</label>
                            <input
                                id="firstName"
                                type="name"
                                control="input"
                                className="form-control"
                                placeholder="Enter First Name"
                                value={this.state.customerForm['firstName'].value}
                                onChange={this.inputChangeHandler}
                            />
                            <label>Last Name</label>
                            <input
                                id="lastName"
                                type="name"
                                control="input"
                                className="form-control"
                                placeholder="Enter Last Name"
                                value={this.state.customerForm['lastName'].value}
                                onChange={this.inputChangeHandler}
                            />
                            <label>Email address</label>
                            <input
                                id="email"
                                type="email"
                                control="input"
                                className="form-control"
                                placeholder="Enter email"
                                value={this.state.customerForm['email'].value}
                                onChange={this.inputChangeHandler}
                            />
                            <label>Phone Number</label>
                            <input
                                id="phoneNumber"
                                type="tel"
                                control="input"
                                className="form-control"
                                placeholder="Phone Number (Example: +1 999 999 9999)"
                                value={this.state.customerForm['phoneNumber'].value}
                                onChange={this.inputChangeHandler}
                            />
                            <label>Street</label>
                            <input
                                id="street"
                                type="text"
                                control="input"
                                className="form-control"
                                placeholder="street"
                                value={this.state.customerForm['street'].value}
                                onChange={this.inputChangeHandler}
                            />
                            <label>City</label>
                            <input
                                id="city"
                                type="text"
                                control="input"
                                className="form-control"
                                placeholder="City"
                                value={this.state.customerForm['city'].value}
                                onChange={this.inputChangeHandler}
                            />
                            <label>Country</label>
                            <input
                                id="country"
                                type="text"
                                control="input"
                                className="form-control"
                                placeholder="Country"
                                value={this.state.customerForm['country'].value}
                                onChange={this.inputChangeHandler}
                            />
                            <label>Zip Code</label>
                            <input
                                id="zip"
                                type="number"
                                control="input"
                                className="form-control"
                                placeholder="Zip Code"
                                value={this.state.customerForm['zip'].value}
                                onChange={this.inputChangeHandler}
                            />
                            <button type="submit" className="btn btn-primary" >Update Information</button>
                        </form>

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

export default connect(mapStateToProps)(Account);