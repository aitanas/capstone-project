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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; },\n/* harmony export */   \"getAllProductIds\": function() { return /* binding */ getAllProductIds; },\n/* harmony export */   \"getProductData\": function() { return /* binding */ getProductData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _productData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../productData */ \"./src/productData.jsx\");\n\n\n\n\nfunction Products() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex grid-cols-3 gap-8 justify-evenly\",\n            children: _productData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"group max-w-sm rounded-lg overflow-hidden shadow-lg bg-stonewash hover:bg-orange-dark\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/product/\".concat(product.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: product.img,\n                                className: \"w-full ring-white ring-\",\n                                width: \"200\",\n                                height: \"200\",\n                                alt: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                                lineNumber: 12,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold text-xl mb-2 text-center group-hover:text-ivory\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700 text-base text-center group-hover:text-white\",\n                                children: product.price\n                            }, void 0, false, {\n                                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                }, product.key, false, {\n                    fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = Products;\nfunction getAllProductIds() {\n    return _productData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((product)=>{\n        return {\n            params: {\n                id: product.id\n            }\n        };\n    });\n}\nfunction getProductData(id) {\n    return _productData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((product)=>product.id === id)[0];\n}\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0Y7QUFDUztBQUV2QixTQUFTRyxXQUFXO0lBQ2pDLHFCQUNFO2tCQUNBLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNkSCx3REFBWSxDQUFDLENBQUNLLHdCQUNiLDhEQUFDSDtvQkFBc0JJLE9BQU07OEJBQzNCLDRFQUFDUCxrREFBSUE7d0JBQUNRLE1BQU0sWUFBdUIsT0FBWEYsUUFBUUcsRUFBRTs7MENBQ2hDLDhEQUFDVixtREFBS0E7Z0NBQ0pXLEtBQUtKLFFBQVFLLEdBQUc7Z0NBQ2hCUCxXQUFVO2dDQUNWUSxPQUFNO2dDQUNOQyxRQUFPO2dDQUNQQyxLQUFLUixRQUFRUyxJQUFJOzs7Ozs7MENBRW5CLDhEQUFDQztnQ0FBRVosV0FBVTswQ0FDVkUsUUFBUVMsSUFBSTs7Ozs7OzBDQUVmLDhEQUFDQztnQ0FBRVosV0FBVTswQ0FDVkUsUUFBUVcsS0FBSzs7Ozs7Ozs7Ozs7O21CQWJWWCxRQUFRWSxHQUFHOzs7Ozs7Ozs7OztBQXNCM0IsQ0FBQztLQTNCdUJoQjtBQTZCakIsU0FBU2lCLG1CQUFtQjtJQUNqQyxPQUFPbEIsd0RBQVksQ0FBQyxDQUFDSyxVQUFZO1FBQy9CLE9BQU87WUFDTGMsUUFBUTtnQkFDTlgsSUFBSUgsUUFBUUcsRUFBRTtZQUNoQjtRQUNGO0lBQ0Y7QUFDRixDQUFDO0FBRU0sU0FBU1ksZUFBZVosRUFBRSxFQUFFO0lBQ2pDLE9BQU9SLDJEQUFlLENBQUNLLENBQUFBLFVBQVdBLFFBQVFHLEVBQUUsS0FBS0EsR0FBRyxDQUFDLEVBQUU7QUFDekQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4P2U4M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9wcm9kdWN0RGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdyaWQtY29scy0zIGdhcC04IGp1c3RpZnktZXZlbmx5XCI+XG4gICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e3Byb2R1Y3Qua2V5fSBjbGFzcz1cImdyb3VwIG1heC13LXNtIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyBiZy1zdG9uZXdhc2ggaG92ZXI6Ymctb3JhbmdlLWRhcmtcIj5cbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJpbmctd2hpdGUgcmluZy1cIlxuICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbWItMiB0ZXh0LWNlbnRlciBncm91cC1ob3Zlcjp0ZXh0LWl2b3J5XCI+XG4gICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIHRleHQtYmFzZSB0ZXh0LWNlbnRlciBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICB7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgICApfVxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUHJvZHVjdElkcygpIHtcbiAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IHByb2R1Y3QuaWRcbiAgICAgIH0sXG4gICAgfTtcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2R1Y3REYXRhKGlkKSB7XG4gIHJldHVybiBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmlkID09PSBpZClbMF07XG59Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInByb2R1Y3RzIiwiUHJvZHVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0IiwiY2xhc3MiLCJocmVmIiwiaWQiLCJzcmMiLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm5hbWUiLCJwIiwicHJpY2UiLCJrZXkiLCJnZXRBbGxQcm9kdWN0SWRzIiwicGFyYW1zIiwiZ2V0UHJvZHVjdERhdGEiLCJmaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n"));

/***/ })

});