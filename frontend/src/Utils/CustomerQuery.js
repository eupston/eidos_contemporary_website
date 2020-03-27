import ShopifyQuery from "./ShopifyQuery";

const customerQuery = (accessToken) => {
    return(
        ShopifyQuery({
        query: `query GetCustomer($customerAccessToken: String!){
                    customer(customerAccessToken:$customerAccessToken){
                        id
                        firstName
                        lastName
                        email
                        phone
                        defaultAddress {
                            id
                            address1
                            city
                            country
                            zip
                        }
                    }
                }`,
        variables: {
            customerAccessToken: accessToken,
        }

    })
)};

export default customerQuery;