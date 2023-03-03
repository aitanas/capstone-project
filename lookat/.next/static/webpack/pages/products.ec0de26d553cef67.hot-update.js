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

/***/ "./src/pages/products.tsx":
/*!********************************!*\
  !*** ./src/pages/products.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"../../../../../node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ \"./src/pages/Product.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    const getProducts = async ()=>{\n        let products = [];\n        const collectionArray = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"products\"));\n        collectionArray.forEach((doc)=>{\n            products.push({\n                ...doc.data(),\n                id: doc.id\n            });\n        });\n        setProducts(products);\n        console.log(products);\n    };\n    // const querySnapshot = await getDocs(collection(db, \"users\"));\n    // querySnapshot.forEach((doc) => {\n    //   console.log(`${doc.id} => ${doc.data()}`);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: Object.keys(products).map((product)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: product.name,\n                    description: product.description\n                }, product.id, false, {\n                    fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 7\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.tsx\",\n            lineNumber: 64,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Products, \"/ZAmBmUKriWz3XDcp0xu079Wyow=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7QUFRVTtBQUNMO0FBRW5CLFNBQVNNLFdBQVc7O0lBRWpDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLGdFQUFnRTtJQUdoRSxNQUFNUSxjQUFjLFVBQVk7UUFDOUIsSUFBSUYsV0FBVyxFQUFFO1FBQ2pCLE1BQU1HLGtCQUFrQixNQUFNTiwyREFBT0EsQ0FBQ0QsOERBQVVBLENBQUNELGlEQUFFQSxFQUFFO1FBQ3JEUSxnQkFBZ0JDLE9BQU8sQ0FBQyxDQUFDQyxNQUFRO1lBQy9CTCxTQUFTTSxJQUFJLENBQUM7Z0JBQUMsR0FBR0QsSUFBSUUsSUFBSSxFQUFFO2dCQUFFQyxJQUFJSCxJQUFJRyxFQUFFO1lBQUE7UUFDMUM7UUFDQVAsWUFBWUQ7UUFDWlMsUUFBUUMsR0FBRyxDQUFDVjtJQUNoQjtJQTZCRSxnRUFBZ0U7SUFDaEUsbUNBQW1DO0lBQ25DLCtDQUErQztJQUMvQyxNQUFNO0lBR04scUJBQ0U7a0JBQ0EsNEVBQUNXO3NCQUNBQyxPQUFPQyxJQUFJLENBQUNiLFVBQVVjLEdBQUcsQ0FBQyxDQUFDQyxVQUFZOzhCQUN0Qyw4REFBQ2pCLGdEQUFPQTtvQkFFTmtCLE1BQU1ELFFBQVFDLElBQUk7b0JBQ2xCQyxhQUFhRixRQUFRRSxXQUFXO21CQUYzQkYsUUFBUVAsRUFBRTs7Ozs7WUFJbkI7Ozs7Ozs7QUFJSixDQUFDO0dBOUR1QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzLnRzeD9hNDRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGIgZnJvbSAnLi4vZmlyZWJhc2UnO1xuaW1wb3J0IHsgICBcbiAgY29sbGVjdGlvbixcbiAgLy8gcXVlcnksXG4gIC8vIGFkZERvYyxcbiAgLy8gb25TbmFwc2hvdCxcbiAgLy8gZG9jLFxuICAvLyB1cGRhdGVEb2MsXG4gIGdldERvY3MsIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuICBpbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcblxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgW3NlbGVjdGVkUHJvZHVjdCwgc2V0U2VsZWN0ZWRQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHByb2R1Y3RzID0gW107XG4gICAgY29uc3QgY29sbGVjdGlvbkFycmF5ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInByb2R1Y3RzXCIpKTtcbiAgICBjb2xsZWN0aW9uQXJyYXkuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICBwcm9kdWN0cy5wdXNoKHsuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkfSk7XG4gICAgfSk7XG4gICAgc2V0UHJvZHVjdHMocHJvZHVjdHMpO1xuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcbn1cblxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZ2V0UHJvZHVjdHMoKTtcbiAgLy8gfSwgW10pO1xuICAvLyBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICBsZXQgYXJyYXkgPSBbXTtcbiAgLy8gICBjb25zdCBjb2xsZWN0aW9uQXJyYXkgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwicHJvZHVjdHNcIikpO1xuICAvLyAgIGNvbGxlY3Rpb25BcnJheS5mb3JFYWNoKChkb2MpID0+IHtcbiAgLy8gICAgIGFycmF5LnB1c2goey4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWR9KTtcbiAgLy8gICB9KTtcbiAgLy8gICBjb25zb2xlLmxvZyhjb2xsZWN0aW9uQXJyYXkpO1xuICAvLyAgIHNldFByb2R1Y3RzKGFycmF5KTtcbiAgLy8gICBjb25zb2xlLmxvZyhhcnJheSk7XG4gIC8vIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldFByb2R1Y3RzKCk7XG4gIC8vIH0sIFtdKTtcblxuICB0eXBlIHByb2R1Y3RzID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpbWc6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaWQ6IHN0cmluZztcbiAgfTtcblxuICAvLyBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpKTtcbiAgLy8gcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhgJHtkb2MuaWR9ID0+ICR7ZG9jLmRhdGEoKX1gKTtcbiAgLy8gfSk7XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdj5cbiAgICB7T2JqZWN0LmtleXMocHJvZHVjdHMpLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgPFByb2R1Y3RcbiAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICBuYW1lPXtwcm9kdWN0Lm5hbWV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICB9KX1cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImRiIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJQcm9kdWN0IiwiUHJvZHVjdHMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZ2V0UHJvZHVjdHMiLCJjb2xsZWN0aW9uQXJyYXkiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicHJvZHVjdCIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products.tsx\n"));

/***/ })

});