"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./src/pages/portfolio.jsx":
/*!*********************************!*\
  !*** ./src/pages/portfolio.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import portfolioPieces from \"../portfolioData\";\nconst portfolioPieces = [\n    {\n        title: \"untitled\",\n        img: \"/images/backpack.png\",\n        id: \"1\",\n        key: 1\n    },\n    {\n        title: \"untitled 2\",\n        img: \"/images/backpack.png\",\n        id: \"2\",\n        key: 2\n    },\n    {\n        title: \"untitled\",\n        img: \"/images/backpack.png\",\n        id: \"1\",\n        key: 1\n    },\n    {\n        title: \"untitled 2\",\n        img: \"/images/backpack.png\",\n        id: \"2\",\n        key: 2\n    }\n];\nfunction Portfolio() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid justify-space-evenly auto-cols-auto grid-flow-row-dense gap-4\",\n                children: portfolioPieces.map((piece)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"group max-w-sm overflow-hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: piece.img,\n                            alt: \"\".concat(piece.title, \" by Natalie Shough\"),\n                            height: \"200\",\n                            width: \"200\",\n                            className: \"transition hover:sepia\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 15\n                        }, this)\n                    }, piece.key, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9ydGZvbGlvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0I7QUFDL0Isa0RBQWtEO0FBRWxELE1BQU1DLGtCQUFrQjtJQUN0QjtRQUNFQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsSUFBSTtRQUNKQyxLQUFLO0lBQ1A7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsSUFBSTtRQUNKQyxLQUFLO0lBQ1A7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsSUFBSTtRQUNKQyxLQUFLO0lBQ1A7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsSUFBSTtRQUNKQyxLQUFLO0lBQ1A7Q0FDRDtBQUVjLFNBQVNDLFlBQVk7SUFDbEMscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBVzs7Ozs7OzBCQUN6Qiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ1pQLGdCQUFnQlMsR0FBRyxDQUFDLENBQUNDLFFBQVU7b0JBQzlCLHFCQUNFLDhEQUFDRjt3QkFBb0JHLE9BQU07a0NBQ3pCLDRFQUFDWixtREFBS0E7NEJBQ0phLEtBQUtGLE1BQU1SLEdBQUc7NEJBQ2RXLEtBQUssR0FBZSxPQUFaSCxNQUFNVCxLQUFLLEVBQUM7NEJBQ3BCYSxRQUFPOzRCQUNQQyxPQUFNOzRCQUNOUixXQUFVOzs7Ozs7dUJBTkpHLE1BQU1OLEdBQUc7Ozs7O2dCQVV2Qjs7Ozs7Ozs7QUFJUixDQUFDO0tBckJ1QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcnRmb2xpby5qc3g/NzE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbi8vIGltcG9ydCBwb3J0Zm9saW9QaWVjZXMgZnJvbSBcIi4uL3BvcnRmb2xpb0RhdGFcIjtcblxuY29uc3QgcG9ydGZvbGlvUGllY2VzID0gW1xuICB7XG4gICAgdGl0bGU6IFwidW50aXRsZWRcIixcbiAgICBpbWc6IFwiL2ltYWdlcy9iYWNrcGFjay5wbmdcIixcbiAgICBpZDogXCIxXCIsXG4gICAga2V5OiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwidW50aXRsZWQgMlwiLFxuICAgIGltZzogXCIvaW1hZ2VzL2JhY2twYWNrLnBuZ1wiLFxuICAgIGlkOiBcIjJcIixcbiAgICBrZXk6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJ1bnRpdGxlZFwiLFxuICAgIGltZzogXCIvaW1hZ2VzL2JhY2twYWNrLnBuZ1wiLFxuICAgIGlkOiBcIjFcIixcbiAgICBrZXk6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJ1bnRpdGxlZCAyXCIsXG4gICAgaW1nOiBcIi9pbWFnZXMvYmFja3BhY2sucG5nXCIsXG4gICAgaWQ6IFwiMlwiLFxuICAgIGtleTogMixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpbygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+UG9ydGZvbGlvPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBqdXN0aWZ5LXNwYWNlLWV2ZW5seSBhdXRvLWNvbHMtYXV0byBncmlkLWZsb3ctcm93LWRlbnNlIGdhcC00XCI+XG4gICAgICAgIHtwb3J0Zm9saW9QaWVjZXMubWFwKChwaWVjZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cGllY2Uua2V5fSBjbGFzcz1cImdyb3VwIG1heC13LXNtIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e3BpZWNlLmltZ31cbiAgICAgICAgICAgICAgICBhbHQ9e2Ake3BpZWNlLnRpdGxlfSBieSBOYXRhbGllIFNob3VnaGB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBob3ZlcjpzZXBpYVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwicG9ydGZvbGlvUGllY2VzIiwidGl0bGUiLCJpbWciLCJpZCIsImtleSIsIlBvcnRmb2xpbyIsImgxIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwicGllY2UiLCJjbGFzcyIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/portfolio.jsx\n"));

/***/ })

});