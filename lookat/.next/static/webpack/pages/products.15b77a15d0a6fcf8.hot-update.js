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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../firebase.js */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _assets_photos_backpack_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../assets/photos/backpack.png */ \"./src/assets/photos/backpack.png\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n// import products from '../products';\nconst products = [\n    {\n        name: \"product name\",\n        img: {\n            Backpack: _assets_photos_backpack_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        },\n        price: \"12.99\",\n        description: \"a cat.\",\n        id: 1,\n        key: 1\n    },\n    {\n        name: \"product name\",\n        img: {\n            Backpack: _assets_photos_backpack_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        },\n        price: \"12.99\",\n        description: \"a cat.\",\n        id: 2,\n        key: 2\n    }\n];\nfunction Products() {\n    _s();\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    // const getProducts = async () => {\n    //   let products = [];\n    //   const collectionArray = await getDocs(collection(db, \"test\"));\n    //   console.log(collectionArray);\n    //   collectionArray.forEach((doc) => {\n    //     products.push({... doc.data(), id: doc.id});\n    //   });\n    //   setProductList(products);\n    //   console.log(productList);\n    // }\n    // useEffect(() => {\n    //   getProducts();\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setProductList(products);\n        console.log(productList);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid-cols-3\",\n        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"max-w-sm rounded overflow-hidden shadow-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: product.img,\n                        className: \"w-full\",\n                        width: \"200\",\n                        height: \"200\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"font-bold text-xl mb-2\",\n                        children: [\n                            product.name,\n                            \" / \",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        class: \"text-gray-700 text-base\",\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, product.key, true, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"HrzrZ4RU063ahV9WWHO6LsHUe9A=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRW1EO0FBQ3BCO0FBQ0c7QUFDdUU7QUFDbkQ7QUFDdEQsc0NBQXNDO0FBRXRDLE1BQU1hLFdBQVc7SUFBQztRQUNoQkMsTUFBTTtRQUNOQyxLQUFLO1lBQUNILFFBQVFBLHFFQUFBQTtRQUFBO1FBQ2RJLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxJQUFJO1FBQ0pDLEtBQUs7SUFDUDtJQUNBO1FBQ0VMLE1BQU07UUFDTkMsS0FBSztZQUFDSCxRQUFRQSxxRUFBQUE7UUFBQTtRQUNkSSxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsSUFBSTtRQUNKQyxLQUFLO0lBQ1A7Q0FDQztBQUVELFNBQVNDLFdBQVc7O0lBRWxCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQUMsSUFBSTtJQUNuRCxnRUFBZ0U7SUFHaEUsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixtRUFBbUU7SUFFbkUsa0NBQWtDO0lBQ2xDLHVDQUF1QztJQUN2QyxtREFBbUQ7SUFDbkQsUUFBUTtJQUNSLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsSUFBSTtJQUVKLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RxQixlQUFlVDtRQUNmVSxRQUFRQyxHQUFHLENBQUNIO0lBQ2QsR0FBRyxFQUFFO0lBR0wscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ2RiLFNBQVNjLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ0g7Z0JBQXNCSSxPQUFNOztrQ0FDM0IsOERBQUMxQixtREFBS0E7d0JBQ0oyQixLQUFLRixRQUFRYixHQUFHO3dCQUNoQlcsV0FBVTt3QkFDVkssT0FBTTt3QkFDTkMsUUFBTzs7Ozs7O2tDQUVULDhEQUFDUDt3QkFBSUksT0FBTTs7NEJBQ1JELFFBQVFkLElBQUk7NEJBQUM7NEJBQUljLFFBQVFaLEtBQUs7Ozs7Ozs7a0NBRWpDLDhEQUFDaUI7d0JBQUVKLE9BQU07a0NBQ05ELFFBQVFYLFdBQVc7Ozs7Ozs7ZUFYZFcsUUFBUVQsR0FBRzs7Ozs7Ozs7OztBQWtCM0I7R0FoRFNDO0tBQUFBO0FBa0RULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0cy5qc3g/ZTgzYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgZGIgZnJvbSAnLi8uLi9maXJlYmFzZS5qcyc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIG9uU25hcHNob3QsIGRvYywgdXBkYXRlRG9jLCBkZWxldGVEb2MsIGdldERvY3MgfSAgZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IEJhY2twYWNrIGZyb20gJy4vLi4vYXNzZXRzL3Bob3Rvcy9iYWNrcGFjay5wbmcnXG4vLyBpbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vcHJvZHVjdHMnO1xuXG5jb25zdCBwcm9kdWN0cyA9IFt7XG4gIG5hbWU6IFwicHJvZHVjdCBuYW1lXCIsXG4gIGltZzoge0JhY2twYWNrfSxcbiAgcHJpY2U6IFwiMTIuOTlcIixcbiAgZGVzY3JpcHRpb246IFwiYSBjYXQuXCIsXG4gIGlkOiAxLFxuICBrZXk6IDFcbn0sXG57XG4gIG5hbWU6IFwicHJvZHVjdCBuYW1lXCIsXG4gIGltZzoge0JhY2twYWNrfSxcbiAgcHJpY2U6IFwiMTIuOTlcIixcbiAgZGVzY3JpcHRpb246IFwiYSBjYXQuXCIsXG4gIGlkOiAyLFxuICBrZXk6IDJcbn0sXG5dXG5cbmZ1bmN0aW9uIFByb2R1Y3RzKCkge1xuXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUobnVsbCk7XG4gIC8vIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3QsIHNldFNlbGVjdGVkUHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuXG4gIC8vIGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGxldCBwcm9kdWN0cyA9IFtdO1xuICAvLyAgIGNvbnN0IGNvbGxlY3Rpb25BcnJheSA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJ0ZXN0XCIpKTtcbiAgICBcbiAgLy8gICBjb25zb2xlLmxvZyhjb2xsZWN0aW9uQXJyYXkpO1xuICAvLyAgIGNvbGxlY3Rpb25BcnJheS5mb3JFYWNoKChkb2MpID0+IHtcbiAgLy8gICAgIHByb2R1Y3RzLnB1c2goey4uLiBkb2MuZGF0YSgpLCBpZDogZG9jLmlkfSk7XG4gIC8vICAgfSk7XG4gIC8vICAgc2V0UHJvZHVjdExpc3QocHJvZHVjdHMpO1xuICAvLyAgIGNvbnNvbGUubG9nKHByb2R1Y3RMaXN0KTtcbiAgLy8gfVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZ2V0UHJvZHVjdHMoKTtcbiAgLy8gfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdClcbiAgfSwgW10pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29scy0zXCI+XG4gICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e3Byb2R1Y3Qua2V5fSBjbGFzcz1cIm1heC13LXNtIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZ1wiPlxuICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgc3JjPXtwcm9kdWN0LmltZ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgIHdpZHRoPScyMDAnXG4gICAgICAgICAgaGVpZ2h0PScyMDAnXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+XG4gICAgICAgICAge3Byb2R1Y3QubmFtZX0gLyB7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5LTcwMCB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJkYiIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJvblNuYXBzaG90IiwiZG9jIiwidXBkYXRlRG9jIiwiZGVsZXRlRG9jIiwiZ2V0RG9jcyIsIkJhY2twYWNrIiwicHJvZHVjdHMiLCJuYW1lIiwiaW1nIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImlkIiwia2V5IiwiUHJvZHVjdHMiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInByb2R1Y3QiLCJjbGFzcyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n"));

/***/ })

});