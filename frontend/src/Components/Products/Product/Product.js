import React, {Component} from 'react';
import classes from './product.module.css';
import {Link} from "react-router-dom";
import ProductModal from './ProductModal/ProductModal';

class Product extends Component {
    state = {
        showModal: true,
    };

    handleModalShow = () => {
        this.setState({showModal:true});
    };

    handleModalHide = () => {
        console.log("handleModalHide");
        const closebutton = document.getElementById(this.props.productInfo.title);
        const productModalId = "#" + this.props.productInfo.title;



    };

    render() {
        const productURL = this.props.productInfo.productType.toLowerCase().replace(" ", "-");
        const productIdURL = productURL + "/" + this.props.productInfo.id;
        const productModalId = "#" + this.props.productInfo.title;

        return (
            <div>
                <div className={classes.Product}>
                    <h4>{this.props.productInfo.title}</h4>
                    <Link  to={productIdURL}>
                        <img src={this.props.productInfo.images[0].originalSrc} alt="Not Available" />
                    </Link>
                    <button type="button"
                            data-toggle="modal"
                            data-target={productModalId}
                            onClick={this.handleModalShow}
                            className="btn btn-dark">Quick View</button>
                </div>
                {this.state.showModal ? <ProductModal handleModalHide={this.handleModalHide} productIdURL={productIdURL} productInfo={this.props.productInfo}/> : null}
            </div>
        );
    }
}

export default Product;