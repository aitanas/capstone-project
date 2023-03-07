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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; },\n/* harmony export */   \"getAllProductIds\": function() { return /* binding */ getAllProductIds; },\n/* harmony export */   \"getProductData\": function() { return /* binding */ getProductData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product_id_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/[id].jsx */ \"./src/pages/product/[id].jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../firebase.js */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _productData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../productData */ \"./src/productData.jsx\");\n\n\n\n\n\n\n\n\nfunction Products() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex grid-cols-3 gap-8 justify-evenly\",\n            children: _productData__WEBPACK_IMPORTED_MODULE_7__[\"default\"].map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"max-w-sm rounded overflow-hidden shadow-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/product/\".concat(product.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: product.img,\n                                className: \"w-full\",\n                                width: \"200\",\n                                height: \"200\",\n                                alt: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"font-bold text-xl mb-2 text-center\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"text-gray-700 text-base text-center\",\n                                children: product.price\n                            }, void 0, false, {\n                                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                }, product.key, false, {\n                    fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = Products;\nfunction getAllProductIds() {\n    return _productData__WEBPACK_IMPORTED_MODULE_7__[\"default\"].map((product)=>{\n        return {\n            params: {\n                id: product.id\n            }\n        };\n    });\n}\nfunction getProductData(id) {}\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDVjtBQUNWO0FBQ0Y7QUFDSztBQUN1RTtBQUNuRTtBQUV2QixTQUFTZSxXQUFXO0lBRWpDLHFCQUNFO2tCQUNBLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNkSCx3REFBWSxDQUFDLENBQUNLLHdCQUNiLDhEQUFDSDtvQkFBc0JJLE9BQU07OEJBQzNCLDRFQUFDZixrREFBSUE7d0JBQUNnQixNQUFNLFlBQXVCLE9BQVhGLFFBQVFHLEVBQUU7OzBDQUNoQyw4REFBQ2xCLG1EQUFLQTtnQ0FDSm1CLEtBQUtKLFFBQVFLLEdBQUc7Z0NBQ2hCUCxXQUFVO2dDQUNWUSxPQUFNO2dDQUNOQyxRQUFPO2dDQUNQQyxLQUFLUixRQUFRUyxJQUFJOzs7Ozs7MENBRW5CLDhEQUFDQztnQ0FBRVQsT0FBTTswQ0FDTkQsUUFBUVMsSUFBSTs7Ozs7OzBDQUVmLDhEQUFDQztnQ0FBRVQsT0FBTTswQ0FDTkQsUUFBUVcsS0FBSzs7Ozs7Ozs7Ozs7O21CQWJWWCxRQUFRWSxHQUFHOzs7Ozs7Ozs7OztBQXNCM0IsQ0FBQztLQTVCdUJoQjtBQThCakIsU0FBU2lCLG1CQUFtQjtJQUNqQyxPQUFPbEIsd0RBQVksQ0FBQyxDQUFDSyxVQUFZO1FBQy9CLE9BQU87WUFDTGMsUUFBUTtnQkFDTlgsSUFBSUgsUUFBUUcsRUFBRTtZQUNoQjtRQUNGO0lBQ0Y7QUFDRixDQUFDO0FBRU0sU0FBU1ksZUFBZVosRUFBRSxFQUFFLENBRW5DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzLmpzeD9lODNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9wcm9kdWN0L1tpZF0uanN4XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGRiIGZyb20gJy4vLi4vZmlyZWJhc2UuanMnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBvblNuYXBzaG90LCBkb2MsIHVwZGF0ZURvYywgZGVsZXRlRG9jLCBnZXREb2NzIH0gIGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9wcm9kdWN0RGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3JpZC1jb2xzLTMgZ2FwLTgganVzdGlmeS1ldmVubHlcIj5cbiAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICA8ZGl2IGtleT17cHJvZHVjdC5rZXl9IGNsYXNzPVwibWF4LXctc20gcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltZ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5LTcwMCB0ZXh0LWJhc2UgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICAgICl9XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQcm9kdWN0SWRzKCkge1xuICByZXR1cm4gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZDogcHJvZHVjdC5pZFxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2R1Y3REYXRhKGlkKSB7XG4gIFxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdCIsIkltYWdlIiwiTGluayIsImRiIiwiY29sbGVjdGlvbiIsImFkZERvYyIsIm9uU25hcHNob3QiLCJkb2MiLCJ1cGRhdGVEb2MiLCJkZWxldGVEb2MiLCJnZXREb2NzIiwicHJvZHVjdHMiLCJQcm9kdWN0cyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInByb2R1Y3QiLCJjbGFzcyIsImhyZWYiLCJpZCIsInNyYyIsImltZyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibmFtZSIsInAiLCJwcmljZSIsImtleSIsImdldEFsbFByb2R1Y3RJZHMiLCJwYXJhbXMiLCJnZXRQcm9kdWN0RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n"));

/***/ })

});