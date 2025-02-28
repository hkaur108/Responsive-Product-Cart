"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
var Heading_1 = require("./Heading");
var Cart_1 = require("./Cart");
var hooks_1 = require("../Redux/hooks");
var CartOverlay_1 = require("./CartOverlay");
function Main() {
    var orderValue = hooks_1.useAppSelector(function (state) { return state.order; });
    var products = hooks_1.useAppSelector(function (state) { return state.product.products; });
    return (React.createElement("main", { className: 'container' },
        React.createElement("section", { className: 'row' },
            React.createElement("header", { className: 'col-lg-6 heading-container' },
                React.createElement(Heading_1["default"], null))),
        React.createElement("div", { className: "row w-100" },
            React.createElement("div", { className: 'col-lg-6 col-md-12 col-sm-12' },
                React.createElement("div", { className: "row product-container" }, products.map(function (product, index) {
                    return (React.createElement("div", { key: index },
                        React.createElement(Product_1["default"], { product: product })));
                }))),
            React.createElement("section", { className: 'col-lg-3 col-md-6 col-sm-8 cart-styling' },
                React.createElement(Cart_1["default"], null))),
        React.createElement("section", { className: orderValue.orderConfirmed ? 'cart-overlay' : "none" }, orderValue.orderConfirmed && React.createElement(CartOverlay_1["default"], null))));
}
exports["default"] = Main;
