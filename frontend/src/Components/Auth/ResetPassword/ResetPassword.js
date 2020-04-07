import React, {Component} from 'react';
import ShopifyQuery from "../../../Utils/ShopifyQuery";
import PageHeader from "../../../UI/PageHeader/PageHeader";
import classes from "../auth.module.css";
import Button from "../../../UI/Button/Button";

class ResetPassword extends Component {
    state = {
        forgotPasswordForm: {
            email: {
                value: '',
            }
        },
        errors:null,
        success:null
    };

    inputChangeHandler = (event) => {
        const input = event.target.id;
        const currentValue = event.target.value;
        this.setState(prevState => {
            const updatedForm = {
                ...prevState.forgotPasswordForm,
                [input]: {
                    ...prevState.forgotPasswordForm[input],
                    value: currentValue
                }
            };
            return {forgotPasswordForm: updatedForm, errors: null};
        });
    };

    forgotPasswordHandler = async (event, data) => {
        event.preventDefault();
        console.log(data)
        const forgotPasswordQuery = {
            query: `
                mutation customerRecover($email: String!) {
                  customerRecover(email: $email) {
                    customerUserErrors {
                      code
                      field
                      message
                    }
                  }
                }
            `,
            variables: {
                email: data.email
            }
        };
        const response = await ShopifyQuery(forgotPasswordQuery);
        if(!response.customerRecover){
            this.setState({errors:"Resetting password limit exceeded. Please try again later."})
            return false;
        }
        const errors = response.customerRecover.customerUserErrors;

        if(errors.length === 0) {
            this.setState({success:"Password Reset Email has been sent to you.",errors:""})
        }
        else{
            const error = errors[0].message;
            this.setState({errors:error,success:"" })
        }
    };
    render() {
        return (
            <React.Fragment>
                <PageHeader title={"Forgot Password"}/>
                <div className={classes.Error}>
                    {this.state.errors}
                </div>
                <div className={classes.Success}>
                    {this.state.success}
                </div>
                <div className={classes.Auth}>
                    <form onSubmit={e => this.forgotPasswordHandler(e, {
                        email: this.state.forgotPasswordForm.email.value,
                    })}>
                        <label>Email address</label>
                        <input
                            id="email"
                            type="email"
                            control="input"
                            className="form-control"
                            placeholder="Enter email"
                            value={this.state.forgotPasswordForm['email'].value}
                            onChange={this.inputChangeHandler}
                        />
                        <Button type={'submit'} title={'Reset Password'} Inverted={true} />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default ResetPassword;