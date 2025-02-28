"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
var cartSlice_1 = require("../Redux/cartSlice");
var hooks_1 = require("../Redux/hooks");
var productSlice_1 = require("../Redux/productSlice");
function CartItems(item) {
    var dispatch = hooks_1.useAppDispatch();
    var _a = item.item, name = _a.name, category = _a.category, price = _a.price, quantity = _a.quantity, id = _a.id;
    var _b = react_1.useState({ productName: "", productCategory: "", productPrice: 0, productQuantity: 0, productId: 0, productTotal: 0 }), values = _b[0], setValues = _b[1];
    react_1.useEffect(function () {
        setValues(__assign(__assign({}, values), { productName: name, productCategory: category, productId: id, productQuantity: quantity, productPrice: price }));
    }, [item, quantity]);
    var handleRemoveItem = function (item) {
        dispatch(cartSlice_1.removeFromCart(item));
        dispatch(productSlice_1.checkIsClicked(id));
        dispatch(productSlice_1.resetProductState(id));
    };
    return (React.createElement("section", { className: 'd-flex align-items-center justify-content-between listStyles' },
        React.createElement("article", null,
            React.createElement("header", null,
                React.createElement("p", { className: 'my-1 single-cart-name' }, values.productName),
                " "),
            React.createElement("div", { className: 'w-100  d-flex align-items-center justify-space-between' },
                React.createElement("small", { className: 'single-cart-quantity' },
                    values.productQuantity,
                    React.createElement("span", { className: 'text-danger fw-bold' }, "x")),
                React.createElement("small", { className: 'single-cart-rate' },
                    " ",
                    React.createElement("span", { className: 'text-secondary' }, " @ "),
                    " $",
                    (values.productPrice).toFixed(2)),
                React.createElement("small", { className: 'single-cart-total' },
                    "$",
                    (values.productQuantity * values.productPrice).toFixed(2)))),
        React.createElement("figure", { onClick: function () { return handleRemoveItem(item.item); }, className: 'remove-icon', style: { border: "1px solid grey", borderRadius: "50%", width: "20px", padding: "2px 1px", cursor: "pointer" } },
            React.createElement("img", { src: process.env.PUBLIC_URL + "/images/icon-remove-item.svg", alt: "button to remove cart items", style: { margin: "auto", display: "block", width: "80%" } }))));
}
exports["default"] = CartItems;
