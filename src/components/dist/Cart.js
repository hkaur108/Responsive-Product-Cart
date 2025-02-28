"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
var hooks_1 = require("../Redux/hooks");
var EmptyCart_1 = require("./EmptyCart");
var CartItems_1 = require("./CartItems");
var ConfirmOrder_1 = require("./ConfirmOrder");
function Cart() {
    var cartProducts = hooks_1.useAppSelector(function (state) { return state.cart.cart; });
    var _a = react_1.useState(0), len = _a[0], setlen = _a[1];
    var _b = react_1.useState(0), totalCartItems = _b[0], settotalCartItems = _b[1];
    react_1.useEffect(function () {
        var l = cartProducts.length;
        setlen(l);
    }, [cartProducts.length]);
    react_1.useEffect(function () {
        setInterval(function () {
            settotalCartItems(totalCartValue);
        }, 2000);
    }, [totalCartItems]);
    var initialValues = 0;
    var totalCartValue = cartProducts.reduce(function (accumulator, item) { return accumulator + item.quantity; }, initialValues);
    return (React.createElement("section", { className: 'w-100 p-4 cart-container', style: { backgroundColor: "#fff", borderRadius: "15px" } },
        React.createElement("h4", { className: 'cart-heading' },
            "Your Cart (",
            len > 0 ? totalCartValue : 0,
            ")"),
        len == 0 && (React.createElement(EmptyCart_1["default"], null)),
        cartProducts.map(function (item, index) {
            return (React.createElement("div", { key: index }, len > 0 && React.createElement(CartItems_1["default"], { item: item })));
        }),
        (len > 0) && React.createElement(ConfirmOrder_1["default"], null)));
}
exports["default"] = Cart;
