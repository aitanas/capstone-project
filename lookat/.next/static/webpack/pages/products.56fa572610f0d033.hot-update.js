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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"../../../../../node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Products() {\n    _s();\n    // const [products, setProducts] = useState([]);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    let products = [];\n    const getProducts = async ()=>{\n        const collectionArray = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"products\"));\n        collectionArray.forEach((doc)=>{\n            products.push({\n                ...doc.data(),\n                id: doc.id\n            });\n        });\n        console.log(products);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProducts();\n    }, []);\n    // const querySnapshot = await getDocs(collection(db, \"users\"));\n    // querySnapshot.forEach((doc) => {\n    //   console.log(`${doc.id} => ${doc.data()}`);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: products.map((product)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: product.name\n                }, void 0, false, {\n                    fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQVFVO0FBRXhCLFNBQVNLLFdBQVc7O0lBRWpDLGdEQUFnRDtJQUNoRCxnRUFBZ0U7SUFFaEUsSUFBSUMsV0FBVyxFQUFFO0lBRWpCLE1BQU1DLGNBQWMsVUFBWTtRQUNoQyxNQUFNQyxrQkFBa0IsTUFBTUosMkRBQU9BLENBQUNELDhEQUFVQSxDQUFDRCxpREFBRUEsRUFBRTtRQUNyRE0sZ0JBQWdCQyxPQUFPLENBQUMsQ0FBQ0MsTUFBUTtZQUMvQkosU0FBU0ssSUFBSSxDQUFDO2dCQUFDLEdBQUdELElBQUlFLElBQUksRUFBRTtnQkFBRUMsSUFBSUgsSUFBSUcsRUFBRTtZQUFBO1FBQzFDO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFDZDtJQUVFTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RNO0lBQ0YsR0FBRyxFQUFFO0lBd0JMLGdFQUFnRTtJQUNoRSxtQ0FBbUM7SUFDbkMsK0NBQStDO0lBQy9DLE1BQU07SUFHTixxQkFDRSw4REFBQ1M7a0JBQ0FWLFNBQVNXLEdBQUcsQ0FBQyxDQUFDQyxVQUFZOzBCQUN6Qiw4REFBQ0Y7MEJBQ0MsNEVBQUNHOzhCQUFJRCxRQUFRRSxJQUFJOzs7Ozs7Ozs7OztRQUVyQjs7Ozs7O0FBR0osQ0FBQztHQXpEdUJmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0cy50c3g/YTQ0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRiIGZyb20gJy4uL2ZpcmViYXNlJztcbmltcG9ydCB7ICAgXG4gIGNvbGxlY3Rpb24sXG4gIC8vIHF1ZXJ5LFxuICAvLyBhZGREb2MsXG4gIC8vIG9uU25hcHNob3QsXG4gIC8vIGRvYyxcbiAgLy8gdXBkYXRlRG9jLFxuICBnZXREb2NzLCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XG5cbiAgLy8gY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3QsIHNldFNlbGVjdGVkUHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBsZXQgcHJvZHVjdHMgPSBbXTtcblxuICBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY29sbGVjdGlvbkFycmF5ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInByb2R1Y3RzXCIpKTtcbiAgY29sbGVjdGlvbkFycmF5LmZvckVhY2goKGRvYykgPT4ge1xuICAgIHByb2R1Y3RzLnB1c2goey4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWR9KTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xufVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UHJvZHVjdHMoKTtcbiAgfSwgW10pO1xuICAvLyBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICBsZXQgYXJyYXkgPSBbXTtcbiAgLy8gICBjb25zdCBjb2xsZWN0aW9uQXJyYXkgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwicHJvZHVjdHNcIikpO1xuICAvLyAgIGNvbGxlY3Rpb25BcnJheS5mb3JFYWNoKChkb2MpID0+IHtcbiAgLy8gICAgIGFycmF5LnB1c2goey4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWR9KTtcbiAgLy8gICB9KTtcbiAgLy8gICBjb25zb2xlLmxvZyhjb2xsZWN0aW9uQXJyYXkpO1xuICAvLyAgIHNldFByb2R1Y3RzKGFycmF5KTtcbiAgLy8gICBjb25zb2xlLmxvZyhhcnJheSk7XG4gIC8vIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldFByb2R1Y3RzKCk7XG4gIC8vIH0sIFtdKTtcblxuICB0eXBlIHByb2R1Y3RzID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpbWc6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaWQ6IHN0cmluZztcbiAgfTtcblxuICAvLyBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpKTtcbiAgLy8gcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhgJHtkb2MuaWR9ID0+ICR7ZG9jLmRhdGEoKX1gKTtcbiAgLy8gfSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPntwcm9kdWN0Lm5hbWV9PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImRiIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJQcm9kdWN0cyIsInByb2R1Y3RzIiwiZ2V0UHJvZHVjdHMiLCJjb2xsZWN0aW9uQXJyYXkiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJwcm9kdWN0IiwiaDEiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/products.tsx\n"));

/***/ })

});