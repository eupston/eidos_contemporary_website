import ShopifyQuery from "./ShopifyQuery";

const productsQuery = (productNumber, queryFilterParam ) => {
    return(
        ShopifyQuery({
        query: `query GetProducts($products: Int!, $queryFilter: String!){
                  products(first:$products, query:$queryFilter){
                    edges {
                      node {
                        id
                        title
                        description
                        vendor
                        productType
                        priceRange{
                            maxVariantPrice {
                                amount
                                currencyCode
                            }
                        }
                        images(first:5){
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
            products: productNumber,
            queryFilter: queryFilterParam
        }

    })
)};

export default productsQuery;