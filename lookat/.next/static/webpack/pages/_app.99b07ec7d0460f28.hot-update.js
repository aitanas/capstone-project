"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_transition_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../styles/transition.css */ \"./src/styles/transition.css\");\n/* harmony import */ var _styles_transition_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_transition_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_dist_client_page_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/page-loader */ \"./node_modules/next/dist/client/page-loader.js\");\n/* harmony import */ var next_dist_client_page_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_page_loader__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const start = ()=>{\n            setLoading(true);\n        };\n        const end = ()=>{\n            setLoading(false);\n        };\n        next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeStart\", start);\n        next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeComplete\", end);\n        next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeError\", end);\n        return ()=>{\n            next_router__WEBPACK_IMPORTED_MODULE_5___default().events.off(\"routeChangeStart\", start);\n            next_router__WEBPACK_IMPORTED_MODULE_5___default().events.off(\"routeChangeComplete\", end);\n            next_router__WEBPACK_IMPORTED_MODULE_5___default().events.off(\"routeChangeError\", end);\n        };\n    });\n    return loading ? // <AnimatePresence mode=\"wait\" initial={false}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Transition, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/_app.jsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/_app.jsx\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/_app.jsx\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/_app.jsx\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/_app.jsx\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, this);\n// </AnimatePresence>\n}\n_s(MyApp, \"bp7W7BLZaxNmS0ceaCBH82+KoGQ=\");\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNHO0FBQ007QUFDTTtBQUNKO0FBQ1g7QUFDcUI7QUFFdEMsU0FBU00sTUFBTSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQXhCOztJQUM1QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUM1Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1RLFFBQVEsSUFBTTtZQUNsQkQsV0FBVyxJQUFJO1FBQ2pCO1FBQ0EsTUFBTUUsTUFBTSxJQUFNO1lBQ2hCRixXQUFXLEtBQUs7UUFDbEI7UUFDQU4sNERBQWdCLENBQUMsb0JBQW9CTztRQUNyQ1AsNERBQWdCLENBQUMsdUJBQXVCUTtRQUN4Q1IsNERBQWdCLENBQUMsb0JBQW9CUTtRQUNyQyxPQUFPLElBQU07WUFDWFIsNkRBQWlCLENBQUMsb0JBQW9CTztZQUN0Q1AsNkRBQWlCLENBQUMsdUJBQXVCUTtZQUN6Q1IsNkRBQWlCLENBQUMsb0JBQW9CUTtRQUN4QztJQUNGO0lBQ0EsT0FBT0gsVUFDTCxnREFBZ0Q7a0JBRTlDLDhEQUFDVCwwREFBTUE7a0JBQ0wsNEVBQUNnQjtzQkFDRCw0RUFBQ0M7MEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHTCw4REFBQ2pCLDBEQUFNQTtrQkFDTCw0RUFBQ087WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7O1lBQ2pCO0FBRVgscUJBQXFCO0FBQ3pCLENBQUM7R0EvQnVCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qc3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICcuLy4uL3N0eWxlcy90cmFuc2l0aW9uLmNzcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgUGFnZUxvYWRlciBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3BhZ2UtbG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIH1cbiAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBzdGFydClcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBlbmQpXG4gICAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgZW5kKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgc3RhcnQpXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgZW5kKVxuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGVuZClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBsb2FkaW5nID9cbiAgICAvLyA8QW5pbWF0ZVByZXNlbmNlIG1vZGU9XCJ3YWl0XCIgaW5pdGlhbD17ZmFsc2V9PlxuICAgICAgXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8VHJhbnNpdGlvbj5cbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgPC9MYXlvdXQ+IDogXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cblxuICAgIC8vIDwvQW5pbWF0ZVByZXNlbmNlPlxufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm91dGVyIiwiUGFnZUxvYWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdGFydCIsImVuZCIsImV2ZW50cyIsIm9uIiwib2ZmIiwiVHJhbnNpdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n"));

/***/ })

});