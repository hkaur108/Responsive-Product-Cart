"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var OrderConfirmedSlice_1 = require("./OrderConfirmedSlice");
var productSlice_1 = require("./productSlice");
var cartSlice_1 = require("./cartSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        cart: cartSlice_1["default"],
        product: productSlice_1["default"],
        order: OrderConfirmedSlice_1["default"]
    }
});
