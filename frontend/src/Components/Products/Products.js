import React, {Component} from 'react';
import ShopifyQuery from '../../Utils/ShopifyQuery';
import Product from '../Products/Product/Product';
import classes from './products.module.css';

class Products extends Component {

    state = {
        products: []
    };

    PRODUCTS_QUERY = {
        query: `
            {
              products(first:${this.props.productNumber}){
                edges {
                  node {
                    id
                    title
                    description
                    images(first:2){
                        edges{
                            node {
                                id
                                originalSrc
                                transformedSrc
                            }
                        }
                    }
                  }
                }
              }
            }
      `
    };

    async componentWillMount() {
        const response = await ShopifyQuery(this.PRODUCTS_QUERY);
        const cleanedProducts = response.products.edges.map(prod => {
           return {...prod.node, images:prod.node.images.edges.map(img => {
               return img.node
               })};
        });
        console.log(cleanedProducts)
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