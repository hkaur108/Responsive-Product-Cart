"use strict";
exports.__esModule = true;
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
require("../App.css");
var hooks_1 = require("../Redux/hooks");
var productSlice_1 = require("../Redux/productSlice");
var cartSlice_1 = require("../Redux/cartSlice");
var Quantity_1 = require("./Quantity");
function Product(product) {
    var _a = product.product, image = _a.image, name = _a.name, category = _a.category, isClicked = _a.isClicked, quantity = _a.quantity, price = _a.price, id = _a.id;
    var dispatch = hooks_1.useAppDispatch();
    var handleClick = function (product) {
        dispatch(productSlice_1.checkIsClicked(id));
        dispatch(cartSlice_1.addToCart(product));
        dispatch(cartSlice_1.calculateCartTotal());
    };
    return (React.createElement("section", { className: 'product', style: { width: "200px" } },
        React.createElement("figure", { className: 'position-relative' },
            React.createElement("img", { className: isClicked && quantity > 0 ? 'selectedItem' : "none", src: image.desktop, alt: name, width: "200px", style: { borderRadius: "10px" } }),
            (isClicked == false) ?
                (React.createElement("button", { onClick: function () { return handleClick(product); }, style: { borderRadius: "30px", fontSize: '.8rem' }, className: 'w-75 btn btn-light border border-secondary fw-bold card-button position-absolute top-100 start-50 translate-middle' },
                    React.createElement("img", { src: "/images/icon-add-to-cart.svg", alt: "add-to-cart" }),
                    " Add to Cart")) :
                (React.createElement("div", { className: ' w-75 position-absolute top-100 start-50 translate-middle bg-danger text-light', style: { borderRadius: "30px" } }, (isClicked == true) && React.createElement(Quantity_1["default"], { product: product })))),
        React.createElement("article", { className: 'my-4' },
            React.createElement("small", { className: 'product-name' }, category),
            React.createElement("p", { className: 'product-category' }, name),
            React.createElement("h6", { className: 'product-price' },
                "$",
                price.toFixed(2)))));
}
exports["default"] = Product;
