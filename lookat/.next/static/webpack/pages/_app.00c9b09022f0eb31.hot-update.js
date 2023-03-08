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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_transition_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../styles/transition.css */ \"./src/styles/transition.css\");\n/* harmony import */ var _styles_transition_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_transition_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_dist_client_page_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/page-loader */ \"./node_modules/next/dist/client/page-loader.js\");\n/* harmony import */ var next_dist_client_page_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_page_loader__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Transition */ \"./src/components/Transition.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const start = ()=>{\n            setLoading(true);\n        };\n        const end = ()=>{\n            setLoading(false);\n        };\n        next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeStart\", start);\n        next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeComplete\", end);\n        next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeError\", end);\n        return ()=>{\n            next_router__WEBPACK_IMPORTED_MODULE_5___default().events.off(\"routeChangeStart\", start);\n            next_router__WEBPACK_IMPORTED_MODULE_5___default().events.off(\"routeChangeComplete\", end);\n            next_router__WEBPACK_IMPORTED_MODULE_5___default().events.off(\"routeChangeError\", end);\n        };\n    });\n    return loading ? // <AnimatePresence mode=\"wait\" initial={false}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Transition__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/_app.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/_app.jsx\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/_app.jsx\",\n        lineNumber: 31,\n        columnNumber: 7\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Transition__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/_app.jsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/_app.jsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/_app.jsx\",\n        lineNumber: 36,\n        columnNumber: 7\n    }, this);\n// </AnimatePresence>\n}\n_s(MyApp, \"bp7W7BLZaxNmS0ceaCBH82+KoGQ=\");\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDRztBQUNNO0FBQ007QUFDSjtBQUNYO0FBQ3FCO0FBQ0o7QUFFbEMsU0FBU08sTUFBTSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQXhCOztJQUM1QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUM1Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1TLFFBQVEsSUFBTTtZQUNsQkQsV0FBVyxJQUFJO1FBQ2pCO1FBQ0EsTUFBTUUsTUFBTSxJQUFNO1lBQ2hCRixXQUFXLEtBQUs7UUFDbEI7UUFDQVAsNERBQWdCLENBQUMsb0JBQW9CUTtRQUNyQ1IsNERBQWdCLENBQUMsdUJBQXVCUztRQUN4Q1QsNERBQWdCLENBQUMsb0JBQW9CUztRQUNyQyxPQUFPLElBQU07WUFDWFQsNkRBQWlCLENBQUMsb0JBQW9CUTtZQUN0Q1IsNkRBQWlCLENBQUMsdUJBQXVCUztZQUN6Q1QsNkRBQWlCLENBQUMsb0JBQW9CUztRQUN4QztJQUNGO0lBQ0EsT0FBT0gsVUFDTCxnREFBZ0Q7a0JBRTlDLDhEQUFDViwwREFBTUE7a0JBQ0wsNEVBQUNNLDhEQUFVQTtzQkFDWCw0RUFBQ1c7MEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHTCw4REFBQ2pCLDBEQUFNQTtrQkFDTCw0RUFBQ00sOERBQVVBO3NCQUNYLDRFQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7WUFFakI7QUFFWCxxQkFBcUI7QUFDekIsQ0FBQztHQWpDdUJGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzeD80Yzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi8uLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgJy4vLi4vc3R5bGVzL3RyYW5zaXRpb24uY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBQYWdlTG9hZGVyIGZyb20gJ25leHQvZGlzdC9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1RyYW5zaXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgfVxuICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHN0YXJ0KVxuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGVuZClcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCBlbmQpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBzdGFydClcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBlbmQpXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgZW5kKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGxvYWRpbmcgP1xuICAgIC8vIDxBbmltYXRlUHJlc2VuY2UgbW9kZT1cIndhaXRcIiBpbml0aWFsPXtmYWxzZX0+XG4gICAgICBcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxUcmFuc2l0aW9uPlxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICA8L0xheW91dD4gOiBcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxUcmFuc2l0aW9uPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgLy8gPC9BbmltYXRlUHJlc2VuY2U+XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJQYWdlTG9hZGVyIiwiVHJhbnNpdGlvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdGFydCIsImVuZCIsImV2ZW50cyIsIm9uIiwib2ZmIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n"));

/***/ })

});