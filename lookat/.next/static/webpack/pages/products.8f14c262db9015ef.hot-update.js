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

/***/ "./src/pages/product/[id].jsx":
/*!************************************!*\
  !*** ./src/pages/product/[id].jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products */ \"./src/pages/products.jsx\");\n\n\nfunction ProductDetail(param) {\n    let { productData  } = param;\n    const { product  } = params;\n    console.log(params);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                src: product.img,\n                height: \"200\",\n                width: \"200\",\n                alt: product.name\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/product/[id].jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Detail for \",\n                    product.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/product/[id].jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: product.description\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/product/[id].jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/product/[id].jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n} // export async function getStaticPaths() {\n //   paths: [];\n //   fallback: false;\n // }\n // export async function getStaticProps({ params }) {\n //   // Fetch necessary data for the blog post using params.id\n // }\n_c = ProductDetail;\nvar _c;\n$RefreshReg$(_c, \"ProductDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdC9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRDtBQUVqQyxTQUFTQyxjQUFjLEtBQWUsRUFBRTtRQUFqQixFQUFFQyxZQUFXLEVBQUUsR0FBZjtJQUVwQyxNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHQztJQUNwQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNDO2dCQUNDQyxLQUFLTixRQUFRTyxHQUFHO2dCQUNoQkMsUUFBTztnQkFDUEMsT0FBTTtnQkFDTkMsS0FBS1YsUUFBUVcsSUFBSTs7Ozs7OzBCQUVuQiw4REFBQ0M7O29CQUFHO29CQUFZWixRQUFRVyxJQUFJOzs7Ozs7OzBCQUM1Qiw4REFBQ0U7MEJBQUdiLFFBQVFjLFdBQVc7Ozs7Ozs7Ozs7OztBQUc3QixDQUFDLENBRUQsMkNBQTJDO0NBQzNDLGVBQWU7Q0FDZixxQkFBcUI7Q0FDckIsSUFBSTtDQUVKLHFEQUFxRDtDQUNyRCw4REFBOEQ7Q0FDOUQsSUFBSTtLQTFCb0JoQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdC9baWRdLmpzeD9kYzYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFsbFByb2R1Y3RJZHMgIH0gZnJvbSBcIi4uL3Byb2R1Y3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3REZXRhaWwoeyBwcm9kdWN0RGF0YSB9KSB7XG5cbiAgY29uc3QgeyBwcm9kdWN0IH0gPSBwYXJhbXM7XG4gIGNvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17cHJvZHVjdC5pbWd9XG4gICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XG4gICAgICAgIC8+XG4gICAgICA8aDE+RGV0YWlsIGZvciB7cHJvZHVjdC5uYW1lfTwvaDE+XG4gICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuLy8gICBwYXRoczogW107XG4vLyAgIGZhbGxiYWNrOiBmYWxzZTtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbi8vICAgLy8gRmV0Y2ggbmVjZXNzYXJ5IGRhdGEgZm9yIHRoZSBibG9nIHBvc3QgdXNpbmcgcGFyYW1zLmlkXG4vLyB9Il0sIm5hbWVzIjpbImdldEFsbFByb2R1Y3RJZHMiLCJQcm9kdWN0RGV0YWlsIiwicHJvZHVjdERhdGEiLCJwcm9kdWN0IiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsImRpdiIsIkltYWdlIiwic3JjIiwiaW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJuYW1lIiwiaDEiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/product/[id].jsx\n"));

/***/ })

});