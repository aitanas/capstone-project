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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../firebase.js */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n// import products from '../products';\nconst products = [\n    {\n        name: \"product name\",\n        img: \"/../public/bem.png\",\n        price: \"12.99\",\n        description: \"a cat.\",\n        id: 1,\n        key: 1\n    },\n    {\n        name: \"product name\",\n        img: \"/images/backpack.png\",\n        price: \"12.99\",\n        description: \"a cat.\",\n        id: 2,\n        key: 2\n    }\n];\nfunction Products() {\n    _s();\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    // const getProducts = async () => {\n    //   let products = [];\n    //   const collectionArray = await getDocs(collection(db, \"test\"));\n    //   console.log(collectionArray);\n    //   collectionArray.forEach((doc) => {\n    //     products.push({... doc.data(), id: doc.id});\n    //   });\n    //   setProductList(products);\n    //   console.log(productList);\n    // }\n    // useEffect(() => {\n    //   getProducts();\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setProductList(products);\n        console.log(productList);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex grid-cols-3 gap-8 justify-evenly\",\n            children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"max-w-sm rounded overflow-hidden shadow-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: product.img,\n                            className: \"w-full\",\n                            fill: \"true\",\n                            alt: product.name\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"font-bold text-xl mb-2\",\n                            children: [\n                                product.name,\n                                \" / \",\n                                product.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"text-gray-700 text-base\",\n                            children: product.description\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, product.key, true, {\n                    fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 7\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/products.jsx\",\n            lineNumber: 57,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Products, \"HrzrZ4RU063ahV9WWHO6LsHUe9A=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFbUQ7QUFDcEI7QUFDRztBQUN1RTtBQUV6RyxzQ0FBc0M7QUFFdEMsTUFBTVksV0FBVztJQUFDO1FBQ2hCQyxNQUFNO1FBQ05DLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLElBQUk7UUFDSkMsS0FBSztJQUNQO0lBQ0E7UUFDRUwsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxJQUFJO1FBQ0pDLEtBQUs7SUFDUDtDQUNDO0FBRWMsU0FBU0MsV0FBVzs7SUFFakMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUduQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ25ELGdFQUFnRTtJQUdoRSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLG1FQUFtRTtJQUVuRSxrQ0FBa0M7SUFDbEMsdUNBQXVDO0lBQ3ZDLG1EQUFtRDtJQUNuRCxRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixJQUFJO0lBRUosb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1ZELGdEQUFTQSxDQUFDLElBQU07UUFDZG9CLGVBQWVUO1FBQ2ZVLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDZCxHQUFHLEVBQUU7SUFHTCxxQkFDRTtrQkFDQSw0RUFBQ0k7WUFBSUMsV0FBVTtzQkFDZGIsU0FBU2MsR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDSDtvQkFBc0JJLE9BQU07O3NDQUMzQiw4REFBQ3pCLG1EQUFLQTs0QkFDSjBCLEtBQUtGLFFBQVFiLEdBQUc7NEJBQ2hCVyxXQUFVOzRCQUNWSyxNQUFLOzRCQUNMQyxLQUFLSixRQUFRZCxJQUFJOzs7Ozs7c0NBRW5CLDhEQUFDbUI7NEJBQUVKLE9BQU07O2dDQUNORCxRQUFRZCxJQUFJO2dDQUFDO2dDQUFJYyxRQUFRWixLQUFLOzs7Ozs7O3NDQUVqQyw4REFBQ2lCOzRCQUFFSixPQUFNO3NDQUNORCxRQUFRWCxXQUFXOzs7Ozs7O21CQVhkVyxRQUFRVCxHQUFHOzs7Ozs7Ozs7OztBQW1CM0IsQ0FBQztHQWxEdUJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0cy5qc3g/ZTgzYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgZGIgZnJvbSAnLi8uLi9maXJlYmFzZS5qcyc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIG9uU25hcHNob3QsIGRvYywgdXBkYXRlRG9jLCBkZWxldGVEb2MsIGdldERvY3MgfSAgZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG4vLyBpbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vcHJvZHVjdHMnO1xuXG5jb25zdCBwcm9kdWN0cyA9IFt7XG4gIG5hbWU6IFwicHJvZHVjdCBuYW1lXCIsXG4gIGltZzogJy8uLi9wdWJsaWMvYmVtLnBuZycsXG4gIHByaWNlOiBcIjEyLjk5XCIsXG4gIGRlc2NyaXB0aW9uOiBcImEgY2F0LlwiLFxuICBpZDogMSxcbiAga2V5OiAxXG59LFxue1xuICBuYW1lOiBcInByb2R1Y3QgbmFtZVwiLFxuICBpbWc6ICcvaW1hZ2VzL2JhY2twYWNrLnBuZycsXG4gIHByaWNlOiBcIjEyLjk5XCIsXG4gIGRlc2NyaXB0aW9uOiBcImEgY2F0LlwiLFxuICBpZDogMixcbiAga2V5OiAyXG59LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcblxuICBjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAvLyBjb25zdCBbc2VsZWN0ZWRQcm9kdWN0LCBzZXRTZWxlY3RlZFByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XG5cblxuICAvLyBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICBsZXQgcHJvZHVjdHMgPSBbXTtcbiAgLy8gICBjb25zdCBjb2xsZWN0aW9uQXJyYXkgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwidGVzdFwiKSk7XG4gICAgXG4gIC8vICAgY29uc29sZS5sb2coY29sbGVjdGlvbkFycmF5KTtcbiAgLy8gICBjb2xsZWN0aW9uQXJyYXkuZm9yRWFjaCgoZG9jKSA9PiB7XG4gIC8vICAgICBwcm9kdWN0cy5wdXNoKHsuLi4gZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZH0pO1xuICAvLyAgIH0pO1xuICAvLyAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RzKTtcbiAgLy8gICBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdCk7XG4gIC8vIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldFByb2R1Y3RzKCk7XG4gIC8vIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0cyk7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdExpc3QpXG4gIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3JpZC1jb2xzLTMgZ2FwLTgganVzdGlmeS1ldmVubHlcIj5cbiAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICA8ZGl2IGtleT17cHJvZHVjdC5rZXl9IGNsYXNzPVwibWF4LXctc20gcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnXCI+XG4gICAgICAgIDxJbWFnZSBcbiAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1nfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgZmlsbD1cInRydWVcIlxuICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxuICAgICAgICAvPlxuICAgICAgICA8cCBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTJcIj5cbiAgICAgICAgICB7cHJvZHVjdC5uYW1lfSAvIHtwcm9kdWN0LnByaWNlfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5LTcwMCB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICAgICl9XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsImRiIiwiY29sbGVjdGlvbiIsImFkZERvYyIsIm9uU25hcHNob3QiLCJkb2MiLCJ1cGRhdGVEb2MiLCJkZWxldGVEb2MiLCJnZXREb2NzIiwicHJvZHVjdHMiLCJuYW1lIiwiaW1nIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImlkIiwia2V5IiwiUHJvZHVjdHMiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInByb2R1Y3QiLCJjbGFzcyIsInNyYyIsImZpbGwiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n"));

/***/ })

});