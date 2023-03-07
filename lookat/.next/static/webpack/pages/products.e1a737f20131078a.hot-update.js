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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; },\n/* harmony export */   \"getAllProductIds\": function() { return /* binding */ getAllProductIds; },\n/* harmony export */   \"getProductData\": function() { return /* binding */ getProductData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product_id_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/[id].jsx */ \"./src/pages/product/[id].jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../firebase.js */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _productData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../productData */ \"./src/productData.jsx\");\n\n\n\n\n\n\n\n\nfunction Products() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex grid-cols-3 gap-8 justify-evenly\",\n            children: _productData__WEBPACK_IMPORTED_MODULE_7__[\"default\"].map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"max-w-sm rounded overflow-hidden shadow-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/product/\".concat(product.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: product.img,\n                                className: \"w-full\",\n                                width: \"200\",\n                                height: \"200\",\n                                alt: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"font-bold text-xl mb-2 text-center\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"text-gray-700 text-base text-center\",\n                                children: product.price\n                            }, void 0, false, {\n                                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                }, product.key, false, {\n                    fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = Products;\nfunction getAllProductIds() {\n    return _productData__WEBPACK_IMPORTED_MODULE_7__[\"default\"].map((product)=>{\n        return {\n            params: {\n                id: product.id\n            }\n        };\n    });\n}\nfunction getProductData(id) {\n    return _productData__WEBPACK_IMPORTED_MODULE_7__[\"default\"].filter((product)=>product.id === id);\n}\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDVjtBQUNWO0FBQ0Y7QUFDSztBQUN1RTtBQUNuRTtBQUV2QixTQUFTZSxXQUFXO0lBRWpDLHFCQUNFO2tCQUNBLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNkSCx3REFBWSxDQUFDLENBQUNLLHdCQUNiLDhEQUFDSDtvQkFBc0JJLE9BQU07OEJBQzNCLDRFQUFDZixrREFBSUE7d0JBQUNnQixNQUFNLFlBQXVCLE9BQVhGLFFBQVFHLEVBQUU7OzBDQUNoQyw4REFBQ2xCLG1EQUFLQTtnQ0FDSm1CLEtBQUtKLFFBQVFLLEdBQUc7Z0NBQ2hCUCxXQUFVO2dDQUNWUSxPQUFNO2dDQUNOQyxRQUFPO2dDQUNQQyxLQUFLUixRQUFRUyxJQUFJOzs7Ozs7MENBRW5CLDhEQUFDQztnQ0FBRVQsT0FBTTswQ0FDTkQsUUFBUVMsSUFBSTs7Ozs7OzBDQUVmLDhEQUFDQztnQ0FBRVQsT0FBTTswQ0FDTkQsUUFBUVcsS0FBSzs7Ozs7Ozs7Ozs7O21CQWJWWCxRQUFRWSxHQUFHOzs7Ozs7Ozs7OztBQXNCM0IsQ0FBQztLQTVCdUJoQjtBQThCakIsU0FBU2lCLG1CQUFtQjtJQUNqQyxPQUFPbEIsd0RBQVksQ0FBQyxDQUFDSyxVQUFZO1FBQy9CLE9BQU87WUFDTGMsUUFBUTtnQkFDTlgsSUFBSUgsUUFBUUcsRUFBRTtZQUNoQjtRQUNGO0lBQ0Y7QUFDRixDQUFDO0FBRU0sU0FBU1ksZUFBZVosRUFBRSxFQUFFO0lBQ2pDLE9BQU9SLDJEQUFlLENBQUNLLENBQUFBLFVBQVdBLFFBQVFHLEVBQUUsS0FBS0E7QUFDbkQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4P2U4M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuL3Byb2R1Y3QvW2lkXS5qc3hcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZGIgZnJvbSAnLi8uLi9maXJlYmFzZS5qcyc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIG9uU25hcHNob3QsIGRvYywgdXBkYXRlRG9jLCBkZWxldGVEb2MsIGdldERvY3MgfSAgZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3Byb2R1Y3REYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncmlkLWNvbHMtMyBnYXAtOCBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmtleX0gY2xhc3M9XCJtYXgtdy1zbSByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGdcIj5cbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC1ib2xkIHRleHQteGwgbWItMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNzAwIHRleHQtYmFzZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAge3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gICAgKX1cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RJZHMoKSB7XG4gIHJldHVybiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkOiBwcm9kdWN0LmlkXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdERhdGEoaWQpIHtcbiAgcmV0dXJuIHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuaWQgPT09IGlkKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3QiLCJJbWFnZSIsIkxpbmsiLCJkYiIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJvblNuYXBzaG90IiwiZG9jIiwidXBkYXRlRG9jIiwiZGVsZXRlRG9jIiwiZ2V0RG9jcyIsInByb2R1Y3RzIiwiUHJvZHVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0IiwiY2xhc3MiLCJocmVmIiwiaWQiLCJzcmMiLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm5hbWUiLCJwIiwicHJpY2UiLCJrZXkiLCJnZXRBbGxQcm9kdWN0SWRzIiwicGFyYW1zIiwiZ2V0UHJvZHVjdERhdGEiLCJmaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n"));

/***/ })

});