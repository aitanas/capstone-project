"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/productTest",{

/***/ "./src/pages/productTest.jsx":
/*!***********************************!*\
  !*** ./src/pages/productTest.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductTest; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _src_firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../src/firebase.js */ \"./src/firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProductTest() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const getData = async ()=>{\n        let array = [];\n        const collectionArray = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_src_firebase_js__WEBPACK_IMPORTED_MODULE_2__.db, \"test\"));\n        collectionArray.forEach((doc)=>{\n            array.push({\n                ...doc.data(),\n                id: doc.id\n            });\n        });\n        setProducts(array);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getData();\n        console.log(process.env.NEXT_PUBLIC_FIREBASE_APP_ID);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: products.map((product)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: product.name\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/productTest.jsx\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/productTest.jsx\",\n        lineNumber: 24,\n        columnNumber: 3\n    }, this);\n}\n_s(ProductTest, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = ProductTest;\nvar _c;\n$RefreshReg$(_c, \"ProductTest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdFRlc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDeEI7QUFDTTtBQUU3QixTQUFTTSxjQUFjOztJQUVwQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxNQUFNSSxVQUFVLFVBQVk7UUFDMUIsSUFBSUMsUUFBUSxFQUFFO1FBQ2QsTUFBTUMsa0JBQWtCLE1BQU1WLDJEQUFPQSxDQUFDRCw4REFBVUEsQ0FBQ0csZ0RBQUVBLEVBQUU7UUFDckRRLGdCQUFnQkMsT0FBTyxDQUFDLENBQUNWLE1BQVE7WUFDL0JRLE1BQU1HLElBQUksQ0FBQztnQkFBRSxHQUFHWCxJQUFJWSxJQUFJLEVBQUU7Z0JBQUVDLElBQUliLElBQUlhLEVBQUU7WUFBQztRQUN6QztRQUNBUCxZQUFZRTtJQUNkO0lBRUFOLGdEQUFTQSxDQUFDLElBQU07UUFDZEs7UUFDQU8sUUFBUUMsR0FBRyxDQUFDQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLDJCQUEyQjtJQUNyRCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7a0JBQUdkLFNBQVNlLEdBQUcsQ0FBQyxDQUFDQyxVQUFZOzBCQUM1Qiw4REFBQ0Y7MEJBQUdFLFFBQVFDLElBQUk7Ozs7OztRQUNsQjs7Ozs7O0FBR0YsQ0FBQztHQXhCdUJsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdFRlc3QuanN4P2Q2Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcywgZG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiL3NyYy9maXJlYmFzZS5qc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0VGVzdCgpIHtcblxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgbGV0IGFycmF5ID0gW107XG4gIGNvbnN0IGNvbGxlY3Rpb25BcnJheSA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJ0ZXN0XCIpKTtcbiAgY29sbGVjdGlvbkFycmF5LmZvckVhY2goKGRvYykgPT4ge1xuICAgIGFycmF5LnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xuICB9KTtcbiAgc2V0UHJvZHVjdHMoYXJyYXkpO1xufTtcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgZ2V0RGF0YSgpO1xuICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQpO1xufSwgW10pO1xuXG5yZXR1cm4oXG4gIDxwPntwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICA8cD57cHJvZHVjdC5uYW1lfTwvcD5cbiAgfSl9PC9wPlxuKVxuXG59Il0sIm5hbWVzIjpbImNvbGxlY3Rpb24iLCJnZXREb2NzIiwiZG9jIiwiZGIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RUZXN0IiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImdldERhdGEiLCJhcnJheSIsImNvbGxlY3Rpb25BcnJheSIsImZvckVhY2giLCJwdXNoIiwiZGF0YSIsImlkIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJwIiwibWFwIiwicHJvZHVjdCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/productTest.jsx\n"));

/***/ })

});