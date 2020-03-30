const axios = require('axios');

const instance = axios.create(
    {
        baseURL: process.env.SHOPIFY_ADMIN_URL,
        headers: {
                "X-Shopify-Access-Token": process.env.SHOPIFY_API_PASSWORD,
                "Accept": "application/json",
                "Content-Type": "application/json"
        }

    });

module.exports = instance;