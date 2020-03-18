import React, {Component} from 'react';
import ProductsQuery from "../../../Utils/ProductsQuery";
import {Link} from "react-router-dom";

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
            return <img src={prod.images[0].originalSrc} alt="" height={400} width={400}/>
        });
        return (
        <div>
            <h1><Link to={this.props.completeProductURL} >{this.props.productType}</Link></h1>
            {productImgElements}
            <hr></hr>
        </div>
        );
    }
}

export default ProductType;