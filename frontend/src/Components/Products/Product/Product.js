import React, {Component} from 'react';
import classes from './product.module.css';
import {Link} from "react-router-dom";

class Product extends Component {
    render() {
        const productURL = this.props.productInfo.productType.toLowerCase().replace(" ", "-");
        const productIdURL = productURL + "/" + this.props.productInfo.id;
        return (
            <div className={classes.Product}>
                <Link  to={productIdURL}>
                    <img src={this.props.productInfo.images[0].originalSrc} alt="Not Available" />
                </Link>
                <button type="button" className="btn btn-dark">Quick View</button>
            </div>
        );
    }
}

export default Product;