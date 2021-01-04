"use strict";
exports.__esModule = true;
exports.productService = void 0;
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.getProducts = function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve([
                        {
                            id: 1,
                            label: 'Product 1'
                        },
                        {
                            id: 2,
                            label: 'Product 2'
                        },
                        {
                            id: 3,
                            label: 'Product 3'
                        },
                    ]);
                }, 1000);
            });
        };
    }
    return ProductService;
}());
exports.productService = new ProductService();
