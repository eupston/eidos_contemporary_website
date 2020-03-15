import React, {Component} from 'react';
import ProductsQuery from '../../Utils/ProductsQuery';
import Product from '../Products/Product/Product';
import classes from './products.module.css';

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
        return (
            <div className={classes.Products}>
                {productElements}
            </div>
        );
    }
}

export default Products;