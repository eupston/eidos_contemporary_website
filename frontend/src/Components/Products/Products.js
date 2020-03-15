import React, {Component} from 'react';
import ShopifyQuery from '../../Utils/ShopifyQuery';
import Product from '../Products/Product/Product';
import classes from './products.module.css';

class Products extends Component {

    state = {
        products: [],
    };

    productsQuery = () => {
        return({
            query: `query GetProducts($pages: Int!, $queryFilter: String!){
                  products(first:$pages, query:$queryFilter){
                    edges {
                      node {
                        id
                        title
                        description
                        vendor
                        productType
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
          `,
            variables: {
                pages: this.props.productNumber,
                queryFilter: this.props.queryFilterParam
            }
    })};

    async componentWillMount() {
        const url = window.location.href;
        let queryFilterParam = "";
        if(url.includes('/jewelry')){
            queryFilterParam = "vendor:" + url.split("/").pop().replace("-"," ");
        }
        const query = this.productsQuery(queryFilterParam);
        const response = await ShopifyQuery(query);
        console.log(query);
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