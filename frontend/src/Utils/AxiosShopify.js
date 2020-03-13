import axios from 'axios';

const instance = axios.create(
    {
        baseURL: process.env.REACT_APP_SHOPIFY_STORE,
        headers: {
            post: {
                "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN,
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }

    });

export default instance;