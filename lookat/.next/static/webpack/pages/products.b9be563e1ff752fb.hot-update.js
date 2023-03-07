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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.jsx */ \"./src/pages/Product.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../firebase.js */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _productData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../productData */ \"./src/productData.jsx\");\n\n\n\n\n\n\n\nfunction Products() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex grid-cols-3 gap-8 justify-evenly\",\n            children: _productData__WEBPACK_IMPORTED_MODULE_6__[\"default\"].map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"max-w-sm rounded overflow-hidden shadow-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: product.img,\n                            className: \"w-full\",\n                            width: \"200\",\n                            height: \"200\",\n                            alt: product.name\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"font-bold text-xl mb-2 text-center\",\n                            children: product.name\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"text-gray-700 text-base text-center\",\n                            children: product.price\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, product.key, true, {\n                    fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ0w7QUFDRztBQUN1RTtBQUNuRTtBQUV2QixTQUFTYyxXQUFXO0lBRWpDLHFCQUNFO2tCQUNBLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNkSCx3REFBWSxDQUFDLENBQUNLLHdCQUNiLDhEQUFDSDtvQkFBc0JJLE9BQU07O3NDQUUzQiw4REFBQ2YsbURBQUtBOzRCQUNKZ0IsS0FBS0YsUUFBUUcsR0FBRzs0QkFDaEJMLFdBQVU7NEJBQ1ZNLE9BQU07NEJBQ05DLFFBQU87NEJBQ1BDLEtBQUtOLFFBQVFPLElBQUk7Ozs7OztzQ0FFbkIsOERBQUNDOzRCQUFFUCxPQUFNO3NDQUNORCxRQUFRTyxJQUFJOzs7Ozs7c0NBRWYsOERBQUNDOzRCQUFFUCxPQUFNO3NDQUNORCxRQUFRUyxLQUFLOzs7Ozs7O21CQWJSVCxRQUFRVSxHQUFHOzs7Ozs7Ozs7OztBQXFCM0IsQ0FBQztLQTNCdUJkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0cy5qc3g/ZTgzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdC5qc3hcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBkYiBmcm9tICcuLy4uL2ZpcmViYXNlLmpzJztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYywgb25TbmFwc2hvdCwgZG9jLCB1cGRhdGVEb2MsIGRlbGV0ZURvYywgZ2V0RG9jcyB9ICBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vcHJvZHVjdERhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdyaWQtY29scy0zIGdhcC04IGp1c3RpZnktZXZlbmx5XCI+XG4gICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e3Byb2R1Y3Qua2V5fSBjbGFzcz1cIm1heC13LXNtIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZ1wiPlxuICAgICAgICBcbiAgICAgICAgPEltYWdlIFxuICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHAgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAge3Byb2R1Y3QubmFtZX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAge3Byb2R1Y3QucHJpY2V9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgICApfVxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdCIsIkltYWdlIiwiZGIiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwib25TbmFwc2hvdCIsImRvYyIsInVwZGF0ZURvYyIsImRlbGV0ZURvYyIsImdldERvY3MiLCJwcm9kdWN0cyIsIlByb2R1Y3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicHJvZHVjdCIsImNsYXNzIiwic3JjIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJuYW1lIiwicCIsInByaWNlIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n"));

/***/ })

});