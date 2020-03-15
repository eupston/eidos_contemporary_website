import ShopifyQuery from "./ShopifyQuery";

const productsQuery = (productNumber, queryFilterParam ) => {
    return(
        ShopifyQuery({
        query: `query GetProducts($pages: Int!, $queryFilter: String!){
                  products(first:$pages, query:$queryFilter){
                    edges {
                      node {
                        id
                        title
                        description
                        vendor
                        productType
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
            pages: productNumber,
            queryFilter: queryFilterParam
        }

    })
)};

export default productsQuery;