import React, {Component} from 'react';
import classes from './contact.module.css';
import eidosLogo from "../../assets/images/EidosLogo.jpg";
import PageHeader from "../../UI/PageHeader/PageHeader";
import axios from 'axios';

class Contact extends Component {
    state = {
        contactForm: {
            firstName: {
                value: '',
            },
            lastName: {
                value: '',
            },
            email: {
                value: '',
            },
            phonenumber: {
                value: '',
            },
            message: {
                value: '',
            }
        },
        errors:null,
        successMessage: null
    };


    inputChangeHandler = (event) => {
        const input = event.target.id;
        const currentValue = event.target.value;
        this.setState(prevState => {
            const updatedForm = {
                ...prevState.contactForm,
                [input]: {
                    ...prevState.contactForm[input],
                    value: currentValue
                }
            };
            return {contactForm: updatedForm, errors: null, successMessage: null};
        });
    };

    submitHandler = async (event, data) => {
        event.preventDefault();
        const subject = data.firstName + " " + data.lastName + " has sent you a Message.";
        const content = data.message +
            "<br>" + "Customer Name: " + data.firstName + " " + data.lastName +
            "<br>" + "Email: " + data.email +
            "<br>" + "Phone Number: " + data.phonenumber;

        const request = {
            "subject": subject,
            "content": content
        };

        axios.post('/api/v1/auth/email', request
        )
            .then(res => {
                console.log(res.data);
                if(res.data.data.message == "success"){
                    this.setState({successMessage:"Message Successfully Sent"});
                    this.setState({ contactForm: {
                        ...this.state.contactForm,
                            firstName: { value: ""},
                            lastName: { value: ""},
                            email: { value: ""},
                            phonenumber: { value: ""},
                            message: { value: ""}
                    }});

                }
                return res.data;
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <React.Fragment>
                <PageHeader title={"Contact"}/>
                <div className={classes.Success}>
                    {this.state.successMessage}
                </div>
                <div className={classes.Contact} >
                    <div className={classes.Address}>
                        <img src={eidosLogo} width={300} ></img>
                        <span>
                            <br/>Gordon Lawrie and Deborah Alexander
                            <br/>508 Camino de la Familia
                            <br/>(directly behind REI in the Railyard)
                            <br/>Santa Fe, NM 87501
                        </span>
                        <span>Office Hours:
                            <br/>Monday-Friday 9am-6pm
                            <br/>Phone: 505 992 0020
                            <br/>eidosalex@aol.com
                        </span>
                    </div>

                    <div className={classes.ContactForm}>
                        <form ref="messageForm" onSubmit={e => this.submitHandler(e,{
                            firstName : this.state.contactForm.firstName.value,
                            lastName : this.state.contactForm.lastName.value,
                            email: this.state.contactForm.email.value,
                            phonenumber : this.state.contactForm.phonenumber.value,
                            message : this.state.contactForm.message.value
                        })}>
                            <label>First Name</label>
                            <input
                                id="firstName"
                                type="name"
                                control="input"
                                className="form-control"
                                placeholder="Enter First Name"
                                value={this.state.contactForm['firstName'].value}
                                onChange={this.inputChangeHandler}
                                required
                            />
                            <label>Last Name</label>
                            <input
                                id="lastName"
                                type="name"
                                control="input"
                                className="form-control"
                                placeholder="Enter Last Name"
                                value={this.state.contactForm['lastName'].value}
                                onChange={this.inputChangeHandler}
                                required
                            />
                            <label>Email</label>
                            <input
                                id="email"
                                type="email"
                                control="input"
                                className="form-control"
                                placeholder="Enter email"
                                value={this.state.contactForm['email'].value}
                                onChange={this.inputChangeHandler}
                                required
                            />
                            <label>Phone Number</label>
                            <input
                                id="phonenumber"
                                type="tel"
                                control="input"
                                className="form-control"
                                placeholder="Phone Number"
                                value={this.state.contactForm['phonenumber'].value}
                                onChange={this.inputChangeHandler}
                                required
                            />
                            <label>Message</label>
                            <textarea
                                id="message"
                                type="textarea"
                                control="input"
                                className="form-control"
                                placeholder="Message"
                                value={this.state.contactForm['message'].value}
                                onChange={this.inputChangeHandler}
                                required
                            />
                            <button type="submit" className="btn btn-primary" >Submit</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;