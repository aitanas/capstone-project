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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"../../../../../node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nasync function Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    const getProducts = async ()=>{\n        let products = [];\n        const collectionArray = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"products\"));\n        console.log(collectionArray);\n        collectionArray.forEach((doc)=>{\n            products.push({\n                ...doc.data(),\n                id: doc.id\n            });\n        });\n        setProducts(products);\n        console.log(products);\n    };\n    getProducts();\n    // useEffect(() => {\n    //   getProducts();\n    // }, []);\n    // const getProducts = async () => {\n    //   let array = [];\n    //   const collectionArray = await getDocs(collection(db, \"products\"));\n    //   collectionArray.forEach((doc) => {\n    //     array.push({...doc.data(), id: doc.id});\n    //   });\n    //   console.log(collectionArray);\n    //   setProducts(array);\n    //   console.log(array);\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProducts();\n    }, []);\n    // const querySnapshot = await getDocs(collection(db, \"users\"));\n    // querySnapshot.forEach((doc) => {\n    //   console.log(`${doc.id} => ${doc.data()}`);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.tsx\",\n            lineNumber: 57,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Products, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQVFVO0FBR3hCLGVBQWVNLFdBQVc7O0lBRXZDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLGdFQUFnRTtJQUdoRSxNQUFNTyxjQUFjLFVBQVk7UUFDOUIsSUFBSUYsV0FBVyxFQUFFO1FBQ2pCLE1BQU1HLGtCQUFrQixNQUFNTCwyREFBT0EsQ0FBQ0QsOERBQVVBLENBQUNELGlEQUFFQSxFQUFFO1FBQ3JEUSxRQUFRQyxHQUFHLENBQUNGO1FBQ1pBLGdCQUFnQkcsT0FBTyxDQUFDLENBQUNDLE1BQVE7WUFDL0JQLFNBQVNRLElBQUksQ0FBQztnQkFBQyxHQUFHRCxJQUFJRSxJQUFJLEVBQUU7Z0JBQUVDLElBQUlILElBQUlHLEVBQUU7WUFBQTtRQUMxQztRQUNBVCxZQUFZRDtRQUNaSSxRQUFRQyxHQUFHLENBQUNMO0lBQ2Q7SUFFQUU7SUFDQSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsb0JBQW9CO0lBQ3BCLHVFQUF1RTtJQUN2RSx1Q0FBdUM7SUFDdkMsK0NBQStDO0lBQy9DLFFBQVE7SUFDUixrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixJQUFJO0lBRUpSLGdEQUFTQSxDQUFDLElBQU07UUFDZFE7SUFDRixHQUFHLEVBQUU7SUFFTCxnRUFBZ0U7SUFDaEUsbUNBQW1DO0lBQ25DLCtDQUErQztJQUMvQyxNQUFNO0lBR04scUJBQ0U7a0JBQ0EsNEVBQUNTOzs7Ozs7QUFXTCxDQUFDO0dBdkQ2Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzLnRzeD9hNDRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGIgZnJvbSAnLi4vZmlyZWJhc2UnO1xuaW1wb3J0IHsgICBcbiAgY29sbGVjdGlvbixcbiAgLy8gcXVlcnksXG4gIC8vIGFkZERvYyxcbiAgLy8gb25TbmFwc2hvdCxcbiAgLy8gZG9jLFxuICAvLyB1cGRhdGVEb2MsXG4gIGdldERvY3MsIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuICBpbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBQcm9kdWN0cygpIHtcblxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgW3NlbGVjdGVkUHJvZHVjdCwgc2V0U2VsZWN0ZWRQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHByb2R1Y3RzID0gW107XG4gICAgY29uc3QgY29sbGVjdGlvbkFycmF5ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInByb2R1Y3RzXCIpKTtcbiAgICBjb25zb2xlLmxvZyhjb2xsZWN0aW9uQXJyYXkpXG4gICAgY29sbGVjdGlvbkFycmF5LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgcHJvZHVjdHMucHVzaCh7Li4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZH0pO1xuICAgIH0pO1xuICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XG4gIH1cblxuICBnZXRQcm9kdWN0cygpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldFByb2R1Y3RzKCk7XG4gIC8vIH0sIFtdKTtcbiAgLy8gY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgbGV0IGFycmF5ID0gW107XG4gIC8vICAgY29uc3QgY29sbGVjdGlvbkFycmF5ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInByb2R1Y3RzXCIpKTtcbiAgLy8gICBjb2xsZWN0aW9uQXJyYXkuZm9yRWFjaCgoZG9jKSA9PiB7XG4gIC8vICAgICBhcnJheS5wdXNoKHsuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkfSk7XG4gIC8vICAgfSk7XG4gIC8vICAgY29uc29sZS5sb2coY29sbGVjdGlvbkFycmF5KTtcbiAgLy8gICBzZXRQcm9kdWN0cyhhcnJheSk7XG4gIC8vICAgY29uc29sZS5sb2coYXJyYXkpO1xuICAvLyB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQcm9kdWN0cygpO1xuICB9LCBbXSk7XG5cbiAgLy8gY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKSk7XG4gIC8vIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coYCR7ZG9jLmlkfSA9PiAke2RvYy5kYXRhKCl9YCk7XG4gIC8vIH0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXY+XG4gICAgey8qIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgIDxQcm9kdWN0XG4gICAgICAgIGtleT17cHJvZHVjdC5pZH1cbiAgICAgICAgbmFtZT17cHJvZHVjdC5uYW1lfVxuICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgfSl9ICovfVxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGIiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsIlByb2R1Y3RzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImdldFByb2R1Y3RzIiwiY29sbGVjdGlvbkFycmF5IiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiZGF0YSIsImlkIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/products.tsx\n"));

/***/ })

});