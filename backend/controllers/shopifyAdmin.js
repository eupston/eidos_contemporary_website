const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const axios = require('../utils/AxiosShopify');

// // @desc    Gets all vendors and their products types in store
// // @route   GET /api/v1/shopify_admin/vendor_product_types
// // @access  PUBLIC
exports.getVendorProductTypes = asyncHandler(async (req, res, next) => {
    const response = await axios.get('/products.json?fields=vendor,productType')
    if(response.data.products){
        const vendors = {}
        response.data.products.map(item => {
            const current_vendor = item['vendor'];
            const current_product_type = item['product_type'];
            vendors[current_vendor] = vendors[current_vendor] || { "Product Types": [] };
            if(!vendors[current_vendor]["Product Types"].includes(current_product_type)){
                vendors[current_vendor]["Product Types"].push(current_product_type);
            }
        })
        return res.status(200)
            .json({
                success: true,
                data: vendors,
            });
    }
    else{
        error = new ErrorResponse("Something Went Wrong with the request", 400);
    }
});
