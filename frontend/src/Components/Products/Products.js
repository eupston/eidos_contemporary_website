import React, {Component} from 'react';
import ProductsQuery from '../../Utils/ProductsQuery';
import Product from '../Products/Product/Product';
import classes from './products.module.css';
import {Route, Switch} from "react-router-dom";
import ProductDetails from "./ProductDetails/ProductDetails";

class Products extends Component {

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
        const productElements = this.state.products.map(prod => {
            return <Product key={prod.id} productInfo={prod}/>
        });
        const productDetails = this.state.products.map(prod => {
            return <Route
                path={this.props.completeProductURL + "/" + prod.id}
                render={() => <ProductDetails
                    key={prod.id}
                    productInfo={prod}
                    />
                }/>
        });

        return (
            <div className={classes.Products}>
                <Switch>
                {productDetails}
                <Route path={this.props.completeProductURL} render={() => productElements}/>
                </Switch>
            </div>
        );
    }
}

export default Products;