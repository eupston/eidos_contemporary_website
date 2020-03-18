import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import ProductType from "../Products/ProductType/ProductType";
import Products from "../Products/Products";
import classes from './vendor.module.css';
import {connect} from 'react-redux';

const Vendor = (props) => {
    let match = useRouteMatch();

    const productTypes = props.jewelers.vendors[props.vendorName]["Product Types"];

    const productsRoutes = productTypes.map(prod => {
        const productTypeURL = prod.toLowerCase().replace(" ", "-");
        const completeProductURL = match.url + "/" + productTypeURL;
        return <Route
            path={completeProductURL}
            render={() => <Products
                productNumber={14}
                queryFilterParam={"vendor:" + props.vendorName + " " + "product_type:" + prod}
                completeProductURL={completeProductURL}
                />
            }/>
    });

    const productTypesElements = productTypes.map(prod => {
        const productURL = prod.toLowerCase().replace(" ", "-");
        const completeProductURL = match.url + "/" + productURL;
       return <ProductType
           completeProductURL={completeProductURL}
           vendorName={props.vendorName}
           productType={prod}
           productNumber={3}
           queryFilterParam={"vendor:" + props.vendorName + " " + "product_type:" + prod}
       />
    });
    return (
        <div className={classes.Vendor}>
        <h5>{props.vendorName}</h5>
            <Switch>
                {productsRoutes}
                <Route path={match.url}  render={() => productTypesElements}/>
            </Switch>
        </div>
    );

};


const mapStateToProps = state => {
    return {
        jewelers: state.vendors,
    }
};
export default connect(mapStateToProps)(Vendor);