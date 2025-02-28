"use strict";
exports.__esModule = true;
var react_1 = require("react");
var productSlice_1 = require("../Redux/productSlice");
var hooks_1 = require("../Redux/hooks");
var cartSlice_1 = require("../Redux/cartSlice");
function Quantity(product) {
    var quantity = product.product.product.quantity;
    var _a = react_1.useState(0), count = _a[0], setcount = _a[1];
    var dispatch = hooks_1.useAppDispatch();
    var handleDecrement = function (transferProduct) {
        if (count > 0) {
            setcount(function (count) { return count - 1; });
            dispatch(productSlice_1.decrementQuantity({ transferProduct: transferProduct, quantity: count }));
            dispatch(cartSlice_1.decrementCartQuantity({ transferProduct: transferProduct, quantity: count }));
        }
    };
    var handleIncrement = function (transferProduct) {
        setcount(function (count) { return count + 1; });
        dispatch(productSlice_1.incrementQuantity({ transferProduct: transferProduct, quantity: count }));
        dispatch(cartSlice_1.incrementCartQuantity({ transferProduct: transferProduct, quantity: count }));
    };
    return (React.createElement("section", { style: { borderRadius: "10px", padding: "0.5rem" }, className: 'quantityStyles' },
        React.createElement("div", { className: 'd-flex align-items-center justify-content-around' },
            React.createElement("button", { className: 'btn', onClick: function () { return handleDecrement(product); }, style: { width: "20px", border: "1px solid white", borderRadius: "50%", padding: "5px", cursor: "pointer" } },
                React.createElement("img", { src: process.env.PUBLIC_URL + '/images/icon-decrement-quantity.svg', alt: 'decrement', style: { margin: "auto", display: "block", width: "100%", height: "7px" } })),
            React.createElement("div", { className: 'text-light' }, quantity),
            React.createElement("button", { className: 'btn', onClick: function () { return handleIncrement(product); }, style: { width: "20px", border: "1px solid white", borderRadius: "50%", padding: "5px", cursor: "pointer" } },
                React.createElement("img", { src: process.env.PUBLIC_URL + '/images/icon-increment-quantity.svg', alt: 'increment', style: { margin: "auto", display: "block", width: "100%" } })))));
}
exports["default"] = Quantity;
