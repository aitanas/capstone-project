"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./src/pages/products.jsx":
/*!********************************!*\
  !*** ./src/pages/products.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../firebase.js */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n// import products from '../products';\nconst products = [\n    {\n        name: \"product name\",\n        img: \"/images/bem.png\",\n        price: \"12.99\",\n        description: \"a cat.\",\n        id: 1,\n        key: 1\n    },\n    {\n        name: \"Passport Tag\",\n        img: \"/images/backpack.png\",\n        price: \"12.99\",\n        description: \"a cat.\",\n        id: 2,\n        key: 2\n    }\n];\nfunction Products() {\n    _s();\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setProductList(products);\n        console.log(productList);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex grid-cols-3 gap-8 justify-evenly\",\n            children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"max-w-sm rounded overflow-hidden shadow-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: product.img,\n                            className: \"w-full\",\n                            width: \"200\",\n                            height: \"200\",\n                            alt: product.name\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"font-bold text-xl mb-2\",\n                            children: [\n                                product.name,\n                                \" / \",\n                                product.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"text-gray-700 text-base\",\n                            children: product.description\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, product.key, true, {\n                    fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n            lineNumber: 41,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Products, \"HrzrZ4RU063ahV9WWHO6LsHUe9A=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFbUQ7QUFDcEI7QUFDRztBQUN1RTtBQUV6RyxzQ0FBc0M7QUFFdEMsTUFBTVksV0FBVztJQUFDO1FBQ2hCQyxNQUFNO1FBQ05DLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLElBQUk7UUFDSkMsS0FBSztJQUNQO0lBQ0E7UUFDRUwsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxJQUFJO1FBQ0pDLEtBQUs7SUFDUDtDQUNDO0FBRWMsU0FBU0MsV0FBVzs7SUFFakMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUduQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ25ELGdFQUFnRTtJQUVoRUQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkb0IsZUFBZVQ7UUFDZlUsUUFBUUMsR0FBRyxDQUFDSDtJQUNkLEdBQUcsRUFBRTtJQUdMLHFCQUNFO2tCQUNBLDRFQUFDSTtZQUFJQyxXQUFVO3NCQUNkYixTQUFTYyxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNIO29CQUFzQkksT0FBTTs7c0NBQzNCLDhEQUFDekIsbURBQUtBOzRCQUNKMEIsS0FBS0YsUUFBUWIsR0FBRzs0QkFDaEJXLFdBQVU7NEJBQ1ZLLE9BQU07NEJBQ05DLFFBQU87NEJBQ1BDLEtBQUtMLFFBQVFkLElBQUk7Ozs7OztzQ0FFbkIsOERBQUNvQjs0QkFBRUwsT0FBTTs7Z0NBQ05ELFFBQVFkLElBQUk7Z0NBQUM7Z0NBQUljLFFBQVFaLEtBQUs7Ozs7Ozs7c0NBRWpDLDhEQUFDa0I7NEJBQUVMLE9BQU07c0NBQ05ELFFBQVFYLFdBQVc7Ozs7Ozs7bUJBWmRXLFFBQVFULEdBQUc7Ozs7Ozs7Ozs7O0FBb0IzQixDQUFDO0dBbkN1QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzLmpzeD9lODNhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBkYiBmcm9tICcuLy4uL2ZpcmViYXNlLmpzJztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYywgb25TbmFwc2hvdCwgZG9jLCB1cGRhdGVEb2MsIGRlbGV0ZURvYywgZ2V0RG9jcyB9ICBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbi8vIGltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9wcm9kdWN0cyc7XG5cbmNvbnN0IHByb2R1Y3RzID0gW3tcbiAgbmFtZTogXCJwcm9kdWN0IG5hbWVcIixcbiAgaW1nOiAnL2ltYWdlcy9iZW0ucG5nJyxcbiAgcHJpY2U6IFwiMTIuOTlcIixcbiAgZGVzY3JpcHRpb246IFwiYSBjYXQuXCIsXG4gIGlkOiAxLFxuICBrZXk6IDFcbn0sXG57XG4gIG5hbWU6IFwiUGFzc3BvcnQgVGFnXCIsXG4gIGltZzogJy9pbWFnZXMvYmFja3BhY2sucG5nJyxcbiAgcHJpY2U6IFwiMTIuOTlcIixcbiAgZGVzY3JpcHRpb246IFwiYSBjYXQuXCIsXG4gIGlkOiAyLFxuICBrZXk6IDJcbn0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xuXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUobnVsbCk7XG4gIC8vIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3QsIHNldFNlbGVjdGVkUHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdClcbiAgfSwgW10pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncmlkLWNvbHMtMyBnYXAtOCBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmtleX0gY2xhc3M9XCJtYXgtdy1zbSByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGdcIj5cbiAgICAgICAgPEltYWdlIFxuICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHAgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+XG4gICAgICAgICAge3Byb2R1Y3QubmFtZX0gLyB7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlXCI+XG4gICAgICAgICAge3Byb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgICApfVxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJkYiIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJvblNuYXBzaG90IiwiZG9jIiwidXBkYXRlRG9jIiwiZGVsZXRlRG9jIiwiZ2V0RG9jcyIsInByb2R1Y3RzIiwibmFtZSIsImltZyIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpZCIsImtleSIsIlByb2R1Y3RzIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0IiwiY2xhc3MiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n"));

/***/ })

});