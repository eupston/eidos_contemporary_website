import axios from "./AxiosShopify";

const ShopifyQuery = async (query) => {
    return (
            axios.post('/graphql', JSON.stringify(query))
                .then(res => {
                    return res.data.data;
                })
                .catch(err => console.log(err))
            )
};

export default ShopifyQuery;