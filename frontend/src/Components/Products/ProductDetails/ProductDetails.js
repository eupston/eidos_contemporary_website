import React,{Component} from 'react';
import classes from './productdetails.module.css';
import Carousel from "../../../UI/Carousel/Carousel";
import {connect} from 'react-redux';
import axios from "axios";
import customerQuery from "../../../Utils/CustomerQuery";
import Modal from "../../../UI/Modal/Modal";
import Login from "../../Auth/Login/Login";
import Signup from "../../Auth/Signup/Signup";
import Button from "../../../UI/Button/Button";

class ProductDetails extends Component {

    state ={
        amount : this.props.productInfo.priceRange.maxVariantPrice.amount,
        price: "",
        hasMadeRequest: false,
        showModal: false,
        authMethod : "Login",
        signedUp : false,
        showImgModel:false,
        imgURLSelected: null
    };

    componentWillMount() {
        if(this.state.amount === "0.0"){
            this.setState({price:"Price on Request"});
        }
        else if(this.state.amount.split(".")[1].length < 2){
            this.setState({price:"$"+this.state.amount + "0" + " USD"});
        }
        else {
            this.setState({price:"$"+this.state.amount + " USD"});
        }
    }

    handleImageClick = (imgUrl) => {
        console.log(imgUrl)
        this.setState({showImgModel:true, imgURLSelected:imgUrl});
    }

    handleImageModalHide = () => {
        this.setState({showImgModel:false, imgURLClick:''});
    }


    handleModalHide = () => {
        this.setState({showModal:false, authMethod:"Login"});
    };

    handleMakeRequest = () => {
        this.setState({hasMadeRequest:true});
    };


    handleSendRequest = async () => {
        if(!this.props.isLoggedIn){
            this.setState({showModal:true});
        }
        else {
            window.confirm("Please Click Ok to Confirm Sending this Message.")
            const message = document.getElementById("product_message");
            const customerData = await customerQuery(this.props.accessToken);
            console.log(customerData.customer.firstName);
            const subject = customerData.customer.firstName + " "
                + customerData.customer.lastName
                + " is inquiring about "
                + this.props.productInfo.title;

            const content = "<h3>Customer Message</h3>" +
                "<br>" + message.value + "<br><hr>" +
                "<br><h3>Product Information</h3>" +
                "<br>" + "Product Name: " + this.props.productInfo.title +
                "<br>" + "Product Price: " + this.price +
                "<br>" + "Product Id: " + this.props.productInfo.id +
                "<br>" + "Product Vendor: " + this.props.productInfo.vendor +
                "<br>" + "Product Type: " + this.props.productInfo.productType +
                "<br>" + "<img src=" + this.props.productInfo.images[0].originalSrc + " width='250' height='250' alt=''/>" +
                "<hr>" + "<h3>Customer Information</h3>" +
                "<br>" + "Customer Name: " + customerData.customer.firstName + " " + customerData.customer.lastName +
                "<br>" + "Email: " + customerData.customer.email +
                "<br>" + "Phone Number: " + customerData.customer.phonenumber;

            const request = {
                "subject": subject,
                "content": content
            };

            axios.post('/api/v1/auth/email', request
            )
                .then(res => {
                    console.log(res.data);
                    if (res.data.data.message == "success") {
                        console.log(res.data.data.message)
                    }
                    return res.data;
                })
                .catch(err => console.log(err));
        }
    };

    handleCancelRequest = () => {
        this.setState({hasMadeRequest:false});

    };

    handleAuthSwitch = () => {
        if(this.state.authMethod === "Login") {
            this.setState({authMethod: "Signup"});
        }
        else{
            this.setState({authMethod: "Login"});
        }
    }

    render() {
        const currencyCode = this.props.productInfo.priceRange.maxVariantPrice.currencyCode;
        // const price = new Intl.NumberFormat(locale, {
        //                     style: 'currency',
        //                     currency: currencyCode
        //                 }).format(amount);

        return (
            <div className={classes.ProductDetails}>
                <Carousel
                    images={this.props.productInfo.images}
                    carousel_item_width={"400"}
                    carousel_item_height={"400"}
                    clickHandler={this.handleImageClick.bind(this)}
                />
                <div className={classes.ProductInfo}>
                    <h4>{this.props.productInfo.title}</h4>
                    <h6>{this.state.price}</h6>
                    <hr></hr>
                    <p>{this.props.productInfo.description}</p>
                    {!this.state.hasMadeRequest ?
                        <Button title={"Make Request"} onClick={this.handleMakeRequest}/>
                    :
                        null
                    }
                    <hr></hr>
                    {!this.state.hasMadeRequest ?
                        <div className={classes.SocialMedia}>
                            <p>Contact Us</p>
                            <a href="https://www.facebook.com/eidosjewelry/" className="fa fa-facebook" target="_blank"/>
                            <a href="https://www.instagram.com/eidoscontemporary/" className="fa fa-instagram" target="_blank"/>
                            <a href="https://twitter.com/eidosj" className="fa fa-twitter" target="_blank"/>
                        </div>
                    :

                        <React.Fragment>
                            <textarea
                                id="product_message"
                                type="textarea"
                                control="input"
                                placeholder=" Message"
                                required
                            />
                            <div className={classes.SendRequestButtons}>
                                <Button title={"Send"} onClick={this.handleSendRequest}/>
                                <Button title={"Cancel"} onClick={this.handleCancelRequest}/>
                            </div>
                        </React.Fragment>
                    }
                </div>
                <Modal show={this.state.showImgModel} onHide={this.handleImageModalHide} {...this.props} >
                    <img src={this.state.imgURLSelected} width={"650"} alt={''}/>
                </Modal>
                <Modal show={this.state.showModal} onHide={this.handleModalHide} {...this.props} >
                    {this.state.authMethod === "Login" ?
                            this.props.isLoggedIn ?
                                <React.Fragment>
                                    <p>Successfully Logged!</p>
                                    <p>You May Close the Window</p>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <Login redirect={false}/>
                                    <h6 onClick={this.handleAuthSwitch}>Signup</h6>
                                </React.Fragment>
                        :
                        !this.state.signedUp ?
                            <React.Fragment>
                                <Signup redirect={false}/>
                                <h6 onClick={this.handleAuthSwitch}>Login</h6>
                            </React.Fragment>
                        :
                        <Login redirect={false}/>
                    }
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        accessToken: state.auth.customerAccessToken,
        isLoggedIn: state.auth.isLoggedIn,
    }
};

export default connect(mapStateToProps)(ProductDetails);