import React, {Component} from 'react';
import classes from './product.module.css';

class Product extends Component {
    render() {
        return (
            <div className={classes.Product}>
                <img src={this.props.productInfo.images[0].originalSrc} alt="" width={200} height={200}/>
                <h2>{this.props.productInfo.title}</h2>
                <p>{this.props.productInfo.description}</p>
            </div>
        );
    }
}

export default Product;