import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import ProductType from "../Products/ProductType/ProductType";
import Products from "../Products/Products";
import classes from './vendor.module.css';

const productTypes = ["Ring", "Necklace"];


class Vendor extends Component {

    productsRoutes = productTypes.map(prod => {
        const productURL = prod.toLowerCase().replace(" ", "-");
        const completeProductURL = this.props.completeVendorURL + "/" + productURL;
        console.log(completeProductURL);
        return <Route
            path={completeProductURL}
            render={() => <Products
                productNumber={14}
                queryFilterParam={"vendor:" + this.props.vendorName + " " + "product_type:" + prod}
                completeProductURL={completeProductURL}
                />
            }/>
    });

    productTypesElements = productTypes.map(prod => {
        const productURL = prod.toLowerCase().replace(" ", "-");
        const completeProductURL = this.props.completeVendorURL + "/" + productURL;
       return <ProductType
           completeProductURL={completeProductURL}
           vendorName={this.props.vendorName}
           productType={prod}
           productNumber={1}
           queryFilterParam={"vendor:" + this.props.vendorName + " " + "product_type:" + prod}
       />
    });
    render() {
        return (
            <div className={classes.Vendor}>
            <h5>{this.props.vendorName}</h5>
                <Switch>
                    {this.productsRoutes}
                    <Route path={this.props.completeVendorURL} render={() => this.productTypesElements}/>
                </Switch>
            </div>
        );
    }
}

export default Vendor;