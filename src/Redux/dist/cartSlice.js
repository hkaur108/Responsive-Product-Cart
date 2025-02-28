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
var _a;
exports.__esModule = true;
exports.resetCart = exports.calculateCartTotal = exports.decrementCartQuantity = exports.incrementCartQuantity = exports.removeFromCart = exports.addToCart = exports.cartSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    cart: []
};
exports.cartSlice = toolkit_1.createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: function (state, action) {
            var productAddedToCart = __assign(__assign({}, action.payload.product), { quantity: 1 });
            state.cart.push(productAddedToCart);
        },
        removeFromCart: function (state, action) {
            var filteredResult = state.cart.filter(function (item) { return item.id !== action.payload.id; });
            state.cart = filteredResult;
        },
        incrementCartQuantity: function (state, action) {
            var product = state.cart.find(function (item) { return item.id == action.payload.transferProduct.product.product.id; });
            if (product) {
                product.quantity = action.payload.quantity + 1;
                product.sum = product.quantity * product.price;
            }
        },
        decrementCartQuantity: function (state, action) {
            var product = state.cart.find(function (item) { return item.id == action.payload.transferProduct.product.product.id; });
            if (product && action.payload.transferProduct.product.product.quantity > 1) {
                product.quantity = action.payload.quantity - 1;
                product.sum = product.quantity * product.price;
            }
            else if (action.payload.transferProduct.product.product.quantity == 1) {
                var filteredResult = state.cart.filter(function (item) { return item.id !== action.payload.transferProduct.product.product.id; });
                state.cart = filteredResult;
            }
        },
        calculateCartTotal: function (state) {
            var initialValues = 0;
            state.cart.reduce(function (accumulator, item) { return accumulator + item.sum; }, initialValues);
        },
        resetCart: function (state) {
            state.cart = [];
        }
    }
});
exports.addToCart = (_a = exports.cartSlice.actions, _a.addToCart), exports.removeFromCart = _a.removeFromCart, exports.incrementCartQuantity = _a.incrementCartQuantity, exports.decrementCartQuantity = _a.decrementCartQuantity, exports.calculateCartTotal = _a.calculateCartTotal, exports.resetCart = _a.resetCart;
exports["default"] = exports.cartSlice.reducer;
