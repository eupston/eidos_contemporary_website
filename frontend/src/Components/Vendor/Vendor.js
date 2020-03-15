import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import ProductType from "../Products/ProductType/ProductType";


const productTypes = ["Ring", "Necklace"];


class Vendor extends Component {
    productTypeRoutes = productTypes.map(prod => {
        const productURL = prod.toLowerCase().replace(" ", "-");
        const completeURL = "/jewelry/" + this.props.vendorName + "/" + productURL;
        return <Route path={completeURL} render={() => <ProductType name={prod}/>}/>
    });
    productTypes = productTypes.map(prod => {
        const productURL = prod.toLowerCase().replace(" ", "-");
        const completeURL = "/jewelry/" + this.props.vendorName + "/" + productURL;
       return <ProductType completeURL={completeURL} vendorName={this.props.vendorName} productType={prod}/>
    });
    render() {
        return (
            <div>
            <h1>{this.props.vendorName}</h1>
                <Switch>
                    {this.productTypeRoutes}
                </Switch>
                {this.productTypes}
            </div>
        );
    }
}

export default Vendor;