import React, {Component} from 'react';
import ProductsQuery from "../../../Utils/ProductsQuery";
import {Link} from "react-router-dom";
import classes from './producttype.module.css';

class ProductType extends Component {
    state = {
        products: [],
    };

    async componentWillMount() {
        const response = await ProductsQuery(this.props.productNumber, this.props.queryFilterParam);
        console.log(response);
        const cleanedProducts = response.products.edges.map(prod => {
            return {...prod.node, images:prod.node.images.edges.map(img => {
                    return img.node
                })};
        });
        console.log(cleanedProducts);
        this.setState({products:cleanedProducts});
    };

    render() {
        const productImgElements = this.state.products.map(prod => {
            return <img src={prod.images[0].originalSrc} alt="" />
        });
        return (
            <Link className={classes.Link} to={this.props.completeProductURL}>
                <div className={classes.ProductType}>
                    <div className={classes.ProductTypeItems}>
                        {productImgElements}
                        <h1>{this.props.productType}</h1>

                    </div>
                </div>
            </Link>
        );
    }
}

export default ProductType;