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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; },\n/* harmony export */   \"getAllProductIds\": function() { return /* binding */ getAllProductIds; },\n/* harmony export */   \"getProductData\": function() { return /* binding */ getProductData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _productData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../productData */ \"./src/productData.jsx\");\n\n\n\n\nfunction Products() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex grid-c gap-8 justify-evenly\",\n            children: _productData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"group max-w-sm rounded-lg overflow-hidden shadow-lg bg-stonewash hover:bg-orange-dark ring-ivory ring-2 ring-offset-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/product/\".concat(product.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: product.img,\n                                className: \"w-full shadow-md\",\n                                width: \"200\",\n                                height: \"200\",\n                                alt: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                                lineNumber: 15,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold text-xl mb-1 text-center group-hover:text-ivory mt-2 text-brown\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700 text-base text-center group-hover:text-white mb-1 text-brown\",\n                                children: product.price\n                            }, void 0, false, {\n                                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this)\n                }, product.key, false, {\n                    fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Products;\nfunction getAllProductIds() {\n    return _productData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((product)=>{\n        return {\n            params: {\n                id: product.id\n            }\n        };\n    });\n}\nfunction getProductData(id) {\n    return _productData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((product)=>product.id === id)[0];\n}\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0Y7QUFDUztBQUV2QixTQUFTRyxXQUFXO0lBQ2pDLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNaSCx3REFBWSxDQUFDLENBQUNLLHdCQUNiLDhEQUFDSDtvQkFFQ0ksT0FBTTs4QkFFTiw0RUFBQ1Asa0RBQUlBO3dCQUFDUSxNQUFNLFlBQXVCLE9BQVhGLFFBQVFHLEVBQUU7OzBDQUNoQyw4REFBQ1YsbURBQUtBO2dDQUNKVyxLQUFLSixRQUFRSyxHQUFHO2dDQUNoQlAsV0FBVTtnQ0FDVlEsT0FBTTtnQ0FDTkMsUUFBTztnQ0FDUEMsS0FBS1IsUUFBUVMsSUFBSTs7Ozs7OzBDQUVuQiw4REFBQ0M7Z0NBQUVaLFdBQVU7MENBQ1ZFLFFBQVFTLElBQUk7Ozs7OzswQ0FFZiw4REFBQ0M7Z0NBQUVaLFdBQVU7MENBQ1ZFLFFBQVFXLEtBQUs7Ozs7Ozs7Ozs7OzttQkFmYlgsUUFBUVksR0FBRzs7Ozs7Ozs7Ozs7QUF1QjVCLENBQUM7S0E3QnVCaEI7QUErQmpCLFNBQVNpQixtQkFBbUI7SUFDakMsT0FBT2xCLHdEQUFZLENBQUMsQ0FBQ0ssVUFBWTtRQUMvQixPQUFPO1lBQ0xjLFFBQVE7Z0JBQ05YLElBQUlILFFBQVFHLEVBQUU7WUFDaEI7UUFDRjtJQUNGO0FBQ0YsQ0FBQztBQUVNLFNBQVNZLGVBQWVaLEVBQUUsRUFBRTtJQUNqQyxPQUFPUiwyREFBZSxDQUFDLENBQUNLLFVBQVlBLFFBQVFHLEVBQUUsS0FBS0EsR0FBRyxDQUFDLEVBQUU7QUFDM0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4P2U4M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3Byb2R1Y3REYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3JpZC1jIGdhcC04IGp1c3RpZnktZXZlbmx5XCI+XG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e3Byb2R1Y3Qua2V5fVxuICAgICAgICAgICAgY2xhc3M9XCJncm91cCBtYXgtdy1zbSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgYmctc3RvbmV3YXNoIGhvdmVyOmJnLW9yYW5nZS1kYXJrIHJpbmctaXZvcnkgcmluZy0yIHJpbmctb2Zmc2V0LTJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy1tZFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTEgdGV4dC1jZW50ZXIgZ3JvdXAtaG92ZXI6dGV4dC1pdm9yeSBtdC0yIHRleHQtYnJvd25cIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlIHRleHQtY2VudGVyIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgbWItMSB0ZXh0LWJyb3duXCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RJZHMoKSB7XG4gIHJldHVybiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2R1Y3REYXRhKGlkKSB7XG4gIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGlkKVswXTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJwcm9kdWN0cyIsIlByb2R1Y3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicHJvZHVjdCIsImNsYXNzIiwiaHJlZiIsImlkIiwic3JjIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJuYW1lIiwicCIsInByaWNlIiwia2V5IiwiZ2V0QWxsUHJvZHVjdElkcyIsInBhcmFtcyIsImdldFByb2R1Y3REYXRhIiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n"));

/***/ })

});