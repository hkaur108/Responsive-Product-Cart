"use strict";
exports.__esModule = true;
exports.flipOrder = exports.orderSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    orderConfirmed: false
};
exports.orderSlice = toolkit_1.createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        flipOrder: function (state) {
            state.orderConfirmed = !state.orderConfirmed;
        }
    }
});
exports.flipOrder = exports.orderSlice.actions.flipOrder;
exports["default"] = exports.orderSlice.reducer;
