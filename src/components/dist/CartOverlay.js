"use strict";
exports.__esModule = true;
var hooks_1 = require("../Redux/hooks");
var OrderConfirmedSlice_1 = require("../Redux/OrderConfirmedSlice");
var hooks_2 = require("../Redux/hooks");
var cartSlice_1 = require("../Redux/cartSlice");
var CartOverlay = function () {
    var cartProducts = hooks_2.useAppSelector(function (state) { return state.cart.cart; });
    var dispatch = hooks_1.useAppDispatch();
    var initialValue = 0;
    var orderTotalValue = cartProducts.reduce(function (accumulator, item) { return accumulator + (item.price * item.quantity); }, initialValue);
    var handleStartOver = function () {
        dispatch(OrderConfirmedSlice_1.flipOrder());
        dispatch(cartSlice_1.resetCart());
    };
    return (React.createElement("div", { className: 'final-order-confirmed-background' },
        React.createElement("section", { className: 'final-order-confirmed' },
            React.createElement("figure", null,
                React.createElement("img", { src: process.env.PUBLIC_URL + "/images/icon-order-confirmed.svg", alt: "order confirmation", width: '30px' })),
            React.createElement("header", null,
                React.createElement("h4", { className: 'fw-bold' }, "Order Confirmed"),
                React.createElement("small", { className: 'text-secondary' }, "We hope you enjoy your food!")),
            React.createElement("section", { className: 'list-items-styling' },
                cartProducts.map(function (item, index) {
                    return (React.createElement("div", { key: index },
                        React.createElement("div", { className: 'order-list-styling d-flex align-items-center justify-content-between' },
                            React.createElement("div", { className: 'd-flex align-items-center' },
                                React.createElement("figure", { className: 'order-picture' },
                                    React.createElement("img", { src: process.env.PUBLIC_URL + item.image.thumbnail, alt: "image of the product", width: '50px' })),
                                React.createElement("div", null,
                                    React.createElement("small", { className: 'order-confirmed-name' }, item.name),
                                    React.createElement("br", null),
                                    React.createElement("small", null,
                                        " ",
                                        React.createElement("span", { className: 'order-confirmed-quantity' },
                                            item.quantity,
                                            "x"),
                                        " @ $",
                                        (item.price).toFixed(2)))),
                            React.createElement("div", null,
                                React.createElement("small", { className: 'order-product' },
                                    "$",
                                    (item.quantity * item.price).toFixed(2))))));
                }),
                React.createElement("div", { className: 'cart-order-total d-flex align-items-center justify-content-between' },
                    React.createElement("div", { className: 'order-total' }, "Order total"),
                    React.createElement("div", { className: 'fw-bold fs-5' },
                        "$",
                        orderTotalValue.toFixed(2)))),
            React.createElement("button", { className: 'btn order-confirmed-button my-3', onClick: function () { return handleStartOver(); } }, "Start New Order"))));
};
exports["default"] = CartOverlay;
