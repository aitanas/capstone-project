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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"../../../../../node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\n\nfunction Products() {\n    // const [products, setProducts] = useState([]);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    const getProducts = async ()=>{\n        let products1 = [];\n        const collectionArray = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"products\"));\n        collectionArray.forEach((doc)=>{\n            products1.push({\n                ...doc.data(),\n                id: doc.id\n            });\n        });\n        console.log(products1);\n    };\n    // const getProducts = async () => {\n    //   let array = [];\n    //   const collectionArray = await getDocs(collection(db, \"products\"));\n    //   collectionArray.forEach((doc) => {\n    //     array.push({...doc.data(), id: doc.id});\n    //   });\n    //   console.log(collectionArray);\n    //   setProducts(array);\n    //   console.log(array);\n    // }\n    // useEffect(() => {\n    //   getProducts();\n    // }, []);\n    // type props = {\n    //   name: string;\n    //   img: string;\n    //   price: number;\n    //   description: string;\n    //   id: string;\n    // };\n    // const querySnapshot = await getDocs(collection(db, \"users\"));\n    // querySnapshot.forEach((doc) => {\n    //   console.log(`${doc.id} => ${doc.data()}`);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: products.map((product)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.img\n                    }, void 0, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, product.id, true, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBUVU7QUFFeEIsU0FBU0ksV0FBVztJQUVqQyxnREFBZ0Q7SUFDaEQsZ0VBQWdFO0lBQ2hFLE1BQU1DLGNBQWMsVUFBWTtRQUNoQyxJQUFJQyxZQUFXLEVBQUU7UUFDakIsTUFBTUMsa0JBQWtCLE1BQU1KLDJEQUFPQSxDQUFDRCw4REFBVUEsQ0FBQ0QsaURBQUVBLEVBQUU7UUFDckRNLGdCQUFnQkMsT0FBTyxDQUFDLENBQUNDLE1BQVE7WUFDL0JILFVBQVNJLElBQUksQ0FBQztnQkFBQyxHQUFHRCxJQUFJRSxJQUFJLEVBQUU7Z0JBQUVDLElBQUlILElBQUlHLEVBQUU7WUFBQTtRQUMxQztRQUVBQyxRQUFRQyxHQUFHLENBQUNSO0lBQ2Q7SUFHRSxvQ0FBb0M7SUFDcEMsb0JBQW9CO0lBQ3BCLHVFQUF1RTtJQUN2RSx1Q0FBdUM7SUFDdkMsK0NBQStDO0lBQy9DLFFBQVE7SUFDUixrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixJQUFJO0lBRUosb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixVQUFVO0lBRVYsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsS0FBSztJQUVMLGdFQUFnRTtJQUNoRSxtQ0FBbUM7SUFDbkMsK0NBQStDO0lBQy9DLE1BQU07SUFHTixxQkFDRSw4REFBQ1M7a0JBQ0FULFNBQVNVLEdBQUcsQ0FBQyxDQUFDQyxVQUFZOzBCQUN6Qiw4REFBQ0Y7O2tDQUNDLDhEQUFDRztrQ0FBR0QsUUFBUUUsSUFBSTs7Ozs7O2tDQUNoQiw4REFBQ0Q7a0NBQUdELFFBQVFHLEdBQUc7Ozs7OztrQ0FDZiw4REFBQ0Y7a0NBQUdELFFBQVFJLFdBQVc7Ozs7Ozs7ZUFIZkosUUFBUUwsRUFBRTs7Ozs7UUFLdEI7Ozs7OztBQUdKLENBQUM7S0F2RHVCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdHMudHN4P2E0NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYiBmcm9tICcuLi9maXJlYmFzZSc7XG5pbXBvcnQgeyAgIFxuICBjb2xsZWN0aW9uLFxuICAvLyBxdWVyeSxcbiAgLy8gYWRkRG9jLFxuICAvLyBvblNuYXBzaG90LFxuICAvLyBkb2MsXG4gIC8vIHVwZGF0ZURvYyxcbiAgZ2V0RG9jcywgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xuXG4gIC8vIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICAvLyBjb25zdCBbc2VsZWN0ZWRQcm9kdWN0LCBzZXRTZWxlY3RlZFByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgcHJvZHVjdHMgPSBbXTtcbiAgY29uc3QgY29sbGVjdGlvbkFycmF5ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInByb2R1Y3RzXCIpKTtcbiAgY29sbGVjdGlvbkFycmF5LmZvckVhY2goKGRvYykgPT4ge1xuICAgIHByb2R1Y3RzLnB1c2goey4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWR9KTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xufVxuXG5cbiAgLy8gY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgbGV0IGFycmF5ID0gW107XG4gIC8vICAgY29uc3QgY29sbGVjdGlvbkFycmF5ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInByb2R1Y3RzXCIpKTtcbiAgLy8gICBjb2xsZWN0aW9uQXJyYXkuZm9yRWFjaCgoZG9jKSA9PiB7XG4gIC8vICAgICBhcnJheS5wdXNoKHsuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkfSk7XG4gIC8vICAgfSk7XG4gIC8vICAgY29uc29sZS5sb2coY29sbGVjdGlvbkFycmF5KTtcbiAgLy8gICBzZXRQcm9kdWN0cyhhcnJheSk7XG4gIC8vICAgY29uc29sZS5sb2coYXJyYXkpO1xuICAvLyB9XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBnZXRQcm9kdWN0cygpO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8gdHlwZSBwcm9wcyA9IHtcbiAgLy8gICBuYW1lOiBzdHJpbmc7XG4gIC8vICAgaW1nOiBzdHJpbmc7XG4gIC8vICAgcHJpY2U6IG51bWJlcjtcbiAgLy8gICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvLyAgIGlkOiBzdHJpbmc7XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKSk7XG4gIC8vIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coYCR7ZG9jLmlkfSA9PiAke2RvYy5kYXRhKCl9YCk7XG4gIC8vIH0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgPHA+e3Byb2R1Y3QubmFtZX08L3A+XG4gICAgICAgIDxwPntwcm9kdWN0LmltZ308L3A+XG4gICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsImRiIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJQcm9kdWN0cyIsImdldFByb2R1Y3RzIiwicHJvZHVjdHMiLCJjb2xsZWN0aW9uQXJyYXkiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJwcm9kdWN0IiwicCIsIm5hbWUiLCJpbWciLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products.tsx\n"));

/***/ })

});