import React from 'react';
import {Route} from 'react-router-dom';
import Products from "../Products";

const ProductType = (props) => {
    return (
        <div>
        <h1><a href={props.completeProductURL} >{props.productType + "s"}</a></h1>
            <Products productNumber={1} queryFilterParam={"vendor:" + props.vendorName + " " + "product_type:" + props.productType}/>
            <hr></hr>
        </div>
    );
};

export default ProductType;