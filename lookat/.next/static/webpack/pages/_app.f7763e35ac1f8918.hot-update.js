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

/***/ "./src/components/Transition.jsx":
/*!***************************************!*\
  !*** ./src/components/Transition.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Transition; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"../../../../../node_modules/framer-motion/dist/es/index.mjs\");\n\n\nfunction Transition(param) {\n    let { children  } = param;\n    const variants = {\n        out: {\n            opacity: 0,\n            transition: {\n                duration: 0.75\n            }\n        },\n        in: {\n            opacity: 1,\n            transition\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"effect-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {\n            initial: false,\n            mode: \"wait\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/components/Transition.jsx\",\n                lineNumber: 21,\n                columnNumber: 8\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/components/Transition.jsx\",\n            lineNumber: 18,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/components/Transition.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = Transition;\nvar _c;\n$RefreshReg$(_c, \"Transition\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFuc2l0aW9uLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUV6QyxTQUFTRSxXQUFXLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaO0lBQ2pDLE1BQU1DLFdBQVc7UUFDZkMsS0FBSztZQUNIQyxTQUFTO1lBQ1RDLFlBQVk7Z0JBQ1ZDLFVBQVU7WUFDWjtRQUNGO1FBQ0FDLElBQUk7WUFDRkgsU0FBUztZQUNUQztRQUNGO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDaEIsNEVBQUNWLDBEQUFlQTtZQUNaVyxTQUFTLEtBQUs7WUFDZEMsTUFBSztzQkFDTCw0RUFBQ2IscURBQVU7MEJBQ1JHOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztLQXhCdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RyYW5zaXRpb24uanN4PzQwNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNpdGlvbih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgb3V0OiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogMC43NVxuICAgICAgfVxuICAgIH0sXG4gICAgaW46IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2l0aW9uXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJlZmZlY3QtMVwiPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZVxuXHQgICAgICBpbml0aWFsPXtmYWxzZX1cblx0ICAgICAgbW9kZT0nd2FpdCc+XG5cdCAgICAgIDxtb3Rpb24uZGl2PlxuXHQgICAgICAgIHtjaGlsZHJlbn1cblx0ICAgICAgPC9tb3Rpb24uZGl2PlxuXHQgICAgPC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIlRyYW5zaXRpb24iLCJjaGlsZHJlbiIsInZhcmlhbnRzIiwib3V0Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImluIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Transition.jsx\n"));

/***/ })

});