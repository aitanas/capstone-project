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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../firebase.js */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _assets_photos_backpack_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../assets/photos/backpack.png */ \"./src/assets/photos/backpack.png\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n// import products from '../products';\nconst products = [\n    {\n        name: \"product name\",\n        img: {\n            Backpack: _assets_photos_backpack_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        },\n        price: \"12.99\",\n        description: \"a cat.\",\n        id: 1,\n        key: 1\n    },\n    {\n        name: \"product name\",\n        img: {\n            Backpack: _assets_photos_backpack_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        },\n        price: \"12.99\",\n        description: \"a cat.\",\n        id: 2,\n        key: 2\n    }\n];\nfunction Products() {\n    _s();\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    // const getProducts = async () => {\n    //   let products = [];\n    //   const collectionArray = await getDocs(collection(db, \"test\"));\n    //   console.log(collectionArray);\n    //   collectionArray.forEach((doc) => {\n    //     products.push({... doc.data(), id: doc.id});\n    //   });\n    //   setProductList(products);\n    //   console.log(productList);\n    // }\n    // useEffect(() => {\n    //   getProducts();\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setProductList(products);\n        console.log(productList);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"max-w-sm rounded overflow-hidden shadow-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: product.img,\n                        className: \"w-full\",\n                        width: \"200\",\n                        height: \"200\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"font-bold text-xl mb-2\",\n                        children: [\n                            product.name,\n                            \" / \",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        class: \"text-gray-700 text-base\",\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, product.key, true, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"HrzrZ4RU063ahV9WWHO6LsHUe9A=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRW1EO0FBQ3BCO0FBQ0c7QUFDdUU7QUFDbkQ7QUFDdEQsc0NBQXNDO0FBRXRDLE1BQU1hLFdBQVc7SUFBQztRQUNoQkMsTUFBTTtRQUNOQyxLQUFLO1lBQUNILFFBQVFBLHFFQUFBQTtRQUFBO1FBQ2RJLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxJQUFJO1FBQ0pDLEtBQUs7SUFDUDtJQUNBO1FBQ0VMLE1BQU07UUFDTkMsS0FBSztZQUFDSCxRQUFRQSxxRUFBQUE7UUFBQTtRQUNkSSxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsSUFBSTtRQUNKQyxLQUFLO0lBQ1A7Q0FDQztBQUVELFNBQVNDLFdBQVc7O0lBRWxCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQUMsSUFBSTtJQUNuRCxnRUFBZ0U7SUFHaEUsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixtRUFBbUU7SUFFbkUsa0NBQWtDO0lBQ2xDLHVDQUF1QztJQUN2QyxtREFBbUQ7SUFDbkQsUUFBUTtJQUNSLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsSUFBSTtJQUVKLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RxQixlQUFlVDtRQUNmVSxRQUFRQyxHQUFHLENBQUNIO0lBQ2QsR0FBRyxFQUFFO0lBR0wscUJBQ0UsOERBQUNJO2tCQUNBWixTQUFTYSxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNGO2dCQUFzQkcsT0FBTTs7a0NBQzNCLDhEQUFDekIsbURBQUtBO3dCQUNKMEIsS0FBS0YsUUFBUVosR0FBRzt3QkFDaEJlLFdBQVU7d0JBQ1ZDLE9BQU07d0JBQ05DLFFBQU87Ozs7OztrQ0FFVCw4REFBQ1A7d0JBQUlHLE9BQU07OzRCQUNSRCxRQUFRYixJQUFJOzRCQUFDOzRCQUFJYSxRQUFRWCxLQUFLOzs7Ozs7O2tDQUVqQyw4REFBQ2lCO3dCQUFFTCxPQUFNO2tDQUNORCxRQUFRVixXQUFXOzs7Ozs7O2VBWGRVLFFBQVFSLEdBQUc7Ozs7Ozs7Ozs7QUFrQjNCO0dBaERTQztLQUFBQTtBQWtEVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4P2U4M2EiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGRiIGZyb20gJy4vLi4vZmlyZWJhc2UuanMnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBvblNuYXBzaG90LCBkb2MsIHVwZGF0ZURvYywgZGVsZXRlRG9jLCBnZXREb2NzIH0gIGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCBCYWNrcGFjayBmcm9tICcuLy4uL2Fzc2V0cy9waG90b3MvYmFja3BhY2sucG5nJ1xuLy8gaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3Byb2R1Y3RzJztcblxuY29uc3QgcHJvZHVjdHMgPSBbe1xuICBuYW1lOiBcInByb2R1Y3QgbmFtZVwiLFxuICBpbWc6IHtCYWNrcGFja30sXG4gIHByaWNlOiBcIjEyLjk5XCIsXG4gIGRlc2NyaXB0aW9uOiBcImEgY2F0LlwiLFxuICBpZDogMSxcbiAga2V5OiAxXG59LFxue1xuICBuYW1lOiBcInByb2R1Y3QgbmFtZVwiLFxuICBpbWc6IHtCYWNrcGFja30sXG4gIHByaWNlOiBcIjEyLjk5XCIsXG4gIGRlc2NyaXB0aW9uOiBcImEgY2F0LlwiLFxuICBpZDogMixcbiAga2V5OiAyXG59LFxuXVxuXG5mdW5jdGlvbiBQcm9kdWN0cygpIHtcblxuICBjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAvLyBjb25zdCBbc2VsZWN0ZWRQcm9kdWN0LCBzZXRTZWxlY3RlZFByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XG5cblxuICAvLyBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICBsZXQgcHJvZHVjdHMgPSBbXTtcbiAgLy8gICBjb25zdCBjb2xsZWN0aW9uQXJyYXkgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwidGVzdFwiKSk7XG4gICAgXG4gIC8vICAgY29uc29sZS5sb2coY29sbGVjdGlvbkFycmF5KTtcbiAgLy8gICBjb2xsZWN0aW9uQXJyYXkuZm9yRWFjaCgoZG9jKSA9PiB7XG4gIC8vICAgICBwcm9kdWN0cy5wdXNoKHsuLi4gZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZH0pO1xuICAvLyAgIH0pO1xuICAvLyAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RzKTtcbiAgLy8gICBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdCk7XG4gIC8vIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldFByb2R1Y3RzKCk7XG4gIC8vIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0cyk7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdExpc3QpXG4gIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICA8ZGl2IGtleT17cHJvZHVjdC5rZXl9IGNsYXNzPVwibWF4LXctc20gcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnXCI+XG4gICAgICAgIDxJbWFnZSBcbiAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1nfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+XG4gICAgICAgICAge3Byb2R1Y3QubmFtZX0gLyB7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5LTcwMCB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJkYiIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJvblNuYXBzaG90IiwiZG9jIiwidXBkYXRlRG9jIiwiZGVsZXRlRG9jIiwiZ2V0RG9jcyIsIkJhY2twYWNrIiwicHJvZHVjdHMiLCJuYW1lIiwiaW1nIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImlkIiwia2V5IiwiUHJvZHVjdHMiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1hcCIsInByb2R1Y3QiLCJjbGFzcyIsInNyYyIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n"));

/***/ })

});