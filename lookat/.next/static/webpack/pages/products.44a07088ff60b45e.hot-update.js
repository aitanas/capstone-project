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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../firebase.js */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n// import products from '../products';\nconst products = {\n    name: \"product name\",\n    img: \"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg\",\n    price: \"12.99\",\n    description: \"a cat.\",\n    id: 1\n};\nfunction Products() {\n    _s();\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    // const getProducts = async () => {\n    //   let products = [];\n    //   const collectionArray = await getDocs(collection(db, \"test\"));\n    //   console.log(collectionArray);\n    //   collectionArray.forEach((doc) => {\n    //     // console.log(doc.id, \" => \", doc.data());\n    //     products.push({... doc.data(), id: doc.id});\n    //   });\n    //   setProductList(products);\n    //   console.log(productList);\n    // }\n    // useEffect(() => {\n    //   getProducts();\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(products);\n        setProductList(products);\n        console.log(productList);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: Object.keys(productList).forEach((product)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: product.name\n                }, void 0, false, {\n                    fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n            lineNumber: 47,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Products, \"OqBFtcRPuEK5n5yG0OhgJizsaa8=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRW1EO0FBQ2pCO0FBQ3VFO0FBQ3pHLHNDQUFzQztBQUV0QyxNQUFNVyxXQUFXO0lBQ2ZDLE1BQU07SUFDTkMsS0FBSztJQUNMQyxPQUFPO0lBQ1BDLGFBQWE7SUFDYkMsSUFBSTtBQUNOO0FBRUEsU0FBU0MsV0FBVzs7SUFFbEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELGdFQUFnRTtJQUdoRSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLG1FQUFtRTtJQUVuRSxrQ0FBa0M7SUFDbEMsdUNBQXVDO0lBQ3ZDLGtEQUFrRDtJQUNsRCxtREFBbUQ7SUFDbkQsUUFBUTtJQUNSLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsSUFBSTtJQUVKLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RtQixRQUFRQyxHQUFHLENBQUNWO1FBQ1pRLGVBQWVSO1FBQ2ZTLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDZCxHQUFHLEVBQUU7SUFHTCxxQkFDRTtrQkFDQSw0RUFBQ0k7c0JBQ0FDLE9BQU9DLElBQUksQ0FBQ04sYUFBYU8sT0FBTyxDQUFDLENBQUNDLFVBQVk7OEJBQzdDLDhEQUFDQzs4QkFBR0QsUUFBUWQsSUFBSTs7Ozs7O1lBQ2xCOzs7Ozs7O0FBSUo7R0F0Q1NLO0tBQUFBO0FBd0NULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0cy5qc3g/ZTgzYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGIgZnJvbSAnLi8uLi9maXJlYmFzZS5qcyc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIG9uU25hcHNob3QsIGRvYywgdXBkYXRlRG9jLCBkZWxldGVEb2MsIGdldERvY3MgfSAgZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuLy8gaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3Byb2R1Y3RzJztcblxuY29uc3QgcHJvZHVjdHMgPSB7XG4gIG5hbWU6IFwicHJvZHVjdCBuYW1lXCIsXG4gIGltZzogXCJodHRwczovL2kubmF0Z2VvZmUuY29tL24vNTQ4NDY3ZDgtYzVmMS00NTUxLTlmNTgtNjgxN2E4ZDJjNDVlL05hdGlvbmFsR2VvZ3JhcGhpY18yNTcyMTg3X3NxdWFyZS5qcGdcIixcbiAgcHJpY2U6IFwiMTIuOTlcIixcbiAgZGVzY3JpcHRpb246IFwiYSBjYXQuXCIsXG4gIGlkOiAxXG59O1xuXG5mdW5jdGlvbiBQcm9kdWN0cygpIHtcblxuICBjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgW3NlbGVjdGVkUHJvZHVjdCwgc2V0U2VsZWN0ZWRQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cbiAgLy8gY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgbGV0IHByb2R1Y3RzID0gW107XG4gIC8vICAgY29uc3QgY29sbGVjdGlvbkFycmF5ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInRlc3RcIikpO1xuICAgIFxuICAvLyAgIGNvbnNvbGUubG9nKGNvbGxlY3Rpb25BcnJheSk7XG4gIC8vICAgY29sbGVjdGlvbkFycmF5LmZvckVhY2goKGRvYykgPT4ge1xuICAvLyAgICAgLy8gY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gIC8vICAgICBwcm9kdWN0cy5wdXNoKHsuLi4gZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZH0pO1xuICAvLyAgIH0pO1xuICAvLyAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RzKTtcbiAgLy8gICBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdCk7XG4gIC8vIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldFByb2R1Y3RzKCk7XG4gIC8vIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0cylcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0cyk7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdExpc3QpXG4gIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2PlxuICAgIHtPYmplY3Qua2V5cyhwcm9kdWN0TGlzdCkuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgPHA+e3Byb2R1Y3QubmFtZX08L3A+XG4gICAgfSl9XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGIiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwib25TbmFwc2hvdCIsImRvYyIsInVwZGF0ZURvYyIsImRlbGV0ZURvYyIsImdldERvY3MiLCJwcm9kdWN0cyIsIm5hbWUiLCJpbWciLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJQcm9kdWN0cyIsInByb2R1Y3RMaXN0Iiwic2V0UHJvZHVjdExpc3QiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9kdWN0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n"));

/***/ })

});