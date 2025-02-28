"use strict";
var _a;
exports.__esModule = true;
exports.selectCount = exports.clearProductState = exports.resetProductState = exports.checkIsClicked = exports.decrementQuantity = exports.incrementQuantity = exports.productSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var data_1 = require("../data");
var initialState = {
    products: data_1.storeData
};
exports.productSlice = toolkit_1.createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        incrementQuantity: function (state, action) {
            var product = state.products.find(function (item) { return item.id == action.payload.transferProduct.product.product.id; });
            if (product) {
                product.quantity = action.payload.quantity + 1;
            }
        },
        checkIsClicked: function (state, action) {
            var product = state.products.find(function (item) { return item.id == action.payload; });
            if (product) {
                product.isClicked = !product.isClicked;
                product.quantity = product.quantity + 1;
            }
        },
        decrementQuantity: function (state, action) {
            var product = state.products.find(function (item) { return item.id == action.payload.transferProduct.product.product.id; });
            var minQuantity = action.payload.transferProduct.product.product.quantity;
            if (product && minQuantity > 1) {
                product.quantity = action.payload.quantity - 1;
            }
            if (minQuantity == 1 && product) {
                product.isClicked = false;
                product.quantity = 0;
            }
        },
        resetProductState: function (state, action) {
            var product = state.products.find(function (item) { return item.id == action.payload; });
            if (product) {
                product.quantity = 0;
            }
        },
        clearProductState: function (state) {
            state.products.forEach(function (item) {
                item.isClicked = false;
                item.quantity = 0;
            });
        }
    }
});
exports.incrementQuantity = (_a = exports.productSlice.actions, _a.incrementQuantity), exports.decrementQuantity = _a.decrementQuantity, exports.checkIsClicked = _a.checkIsClicked, exports.resetProductState = _a.resetProductState, exports.clearProductState = _a.clearProductState;
exports.selectCount = function (state) { return state.product.products; };
exports["default"] = exports.productSlice.reducer;
