import React, {Component} from 'react';
import classes from './productdetails.module.css';
import Carousel from "../../../UI/Carousel/Carousel";

class ProductDetails extends Component {

    state ={
        amount : this.props.productInfo.priceRange.maxVariantPrice.amount,
        price: ""
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
                />
                <div className={classes.ProductInfo}>
                    <h4>{this.props.productInfo.title}</h4>
                    <h6>{this.state.price}</h6>
                    <hr></hr>
                    <p>{this.props.productInfo.description}</p>
                    <button type="button" className="btn btn-outline-dark">Make Request</button>
                    <hr></hr>
                    <div className={classes.SocialMedia}>
                        <p>Contact Us</p>
                        <a href="https://www.facebook.com/eidosjewelry/" className="fa fa-facebook"/>
                        <a href="https://www.instagram.com/eidoscontemporary/" className="fa fa-instagram"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductDetails;