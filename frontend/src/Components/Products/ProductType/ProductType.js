import React, {Component} from 'react';
import ProductsQuery from "../../../Utils/ProductsQuery";
import {Link} from "react-router-dom";
import classes from './producttype.module.css';

class ProductType extends Component {
    state = {
        products: null,
    };

    async componentWillMount() {
        const response = await ProductsQuery(this.props.productNumber, this.props.queryFilterParam);
        const cleanedProducts = response.products.edges.map(prod => {
            return {...prod.node, images:prod.node.images.edges.map(img => {
                    return img.node
                })};
        });
        this.setState({products:cleanedProducts});
    };

    render() {
        if(!this.state.products){
            return null;
        }

        const productImgElements = this.state.products.map(prod => {
            return <img key={prod.id} src={prod.images[0].originalSrc} alt="" />
        });
        return (
            <Link className={classes.Link} to={this.props.completeProductURL}>
                <div className={classes.ProductType}>
                    <div className={classes.ProductTypeItems}>
                        <h1>{this.props.productType}</h1>
                        {productImgElements}
                    </div>
                </div>
            </Link>
        );
    }
}

export default ProductType;