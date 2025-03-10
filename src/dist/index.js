"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./styles/index.css");
var App_1 = require("./App");
require("./styles/index.css");
var reportWebVitals_1 = require("./reportWebVitals");
var react_redux_1 = require("react-redux");
var store_1 = require("./Redux/store");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
        react_1["default"].createElement(App_1["default"], null))));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
