"use strict";
exports.__esModule = true;
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
var hooks_1 = require("../Redux/hooks");
var hooks_2 = require("../Redux/hooks");
var OrderConfirmedSlice_1 = require("../Redux/OrderConfirmedSlice");
var productSlice_1 = require("../Redux/productSlice");
function ConfirmOrder() {
    var dispatch = hooks_2.useAppDispatch();
    var cartProducts = hooks_1.useAppSelector(function (state) { return state.cart.cart; });
    var initialValue = 0;
    var orderTotalValue = cartProducts.reduce(function (accumulator, item) { return accumulator + (item.price * item.quantity); }, initialValue);
    var handleConfirmOrder = function () {
        dispatch(OrderConfirmedSlice_1.flipOrder());
        dispatch(productSlice_1.clearProductState());
    };
    return (React.createElement("section", null,
        React.createElement("div", { className: 'w-100 d-flex align-items-center justify-content-between' },
            React.createElement("p", null, "Order Total"),
            React.createElement("p", { className: "fw-bold fs-5" },
                "$",
                orderTotalValue.toFixed(2))),
        React.createElement("div", { className: 'carbon-delivery d-flex align-items-center justify-content-evenly' },
            React.createElement("figure", null,
                React.createElement("img", { src: process.env.PUBLIC_URL + "/images/icon-carbon-neutral.svg", alt: "carbon neutral delivery icon" })),
            React.createElement("p", null,
                " This is a ",
                React.createElement("strong", { className: "carbon" }, "carbon-neutral"),
                " delivery")),
        React.createElement("button", { className: 'cart-confirm-order-button  w-100 p-2', onClick: handleConfirmOrder }, "Confirm Order")));
}
exports["default"] = ConfirmOrder;
