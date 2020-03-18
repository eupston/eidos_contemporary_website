import React, {Component} from 'react';
import classes from './product.module.css';
import {Link} from "react-router-dom";

class Product extends Component {
    render() {
        const productURL = this.props.productInfo.productType.toLowerCase().replace(" ", "-");
        const productIdURL = productURL + "/" + this.props.productInfo.id;
        return (
            <div className={classes.Product}>
                <img src={this.props.productInfo.images[0].originalSrc} alt="" width={200} height={200}/>
                <Link to={productIdURL}><h3>{this.props.productInfo.title}</h3></Link>
                <p>{this.props.productInfo.description}</p>
            </div>
        );
    }
}

export default Product;