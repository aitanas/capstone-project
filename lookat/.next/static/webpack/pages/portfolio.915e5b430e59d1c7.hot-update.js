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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n// import portfolioPieces from \"../portfolioData\";\nconst portfolioPieces = [\n    {\n        title: \"untitled\",\n        img: \"/images/backpack.png\",\n        id: \"1\",\n        key: 1,\n        isHovering: false\n    },\n    {\n        title: \"untitled 2\",\n        img: \"/images/backpack.png\",\n        id: \"2\",\n        key: 2\n    },\n    {\n        title: \"untitled\",\n        img: \"/images/backpack.png\",\n        id: \"1\",\n        key: 3\n    },\n    {\n        title: \"untitled 2\",\n        img: \"/images/backpack.png\",\n        id: \"2\",\n        key: 4\n    }\n];\nfunction Portfolio() {\n    _s();\n    // code for portfolio image hover\n    const [isHovering, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const onMouseEnter = ()=>setIsHovered(true);\n    const onMouseLeave = ()=>setIsHovered(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-flow-row-dense gap-4 grid-cols-2 lg:grid-cols-4\",\n                children: portfolioPieces.map((piece)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"max-w-sm overflow-hidden w-full h-full\",\n                        onMouseEnter: onMouseEnter,\n                        onMouseLeave: onMouseLeave,\n                        children: isHovering ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: piece.img,\n                            alt: \"\".concat(piece.title, \" by Natalie Shough\"),\n                            height: \"200\",\n                            width: \"200\",\n                            className: \"sepia transition\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: piece.img,\n                            alt: \"\".concat(piece.title, \" by Natalie Shough\"),\n                            height: \"200\",\n                            width: \"200\",\n                            className: \"transition\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, this)\n                    }, piece.key, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Portfolio, \"RTRvfbsacFKA/H7Oqn4UUNMNgyo=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9ydGZvbGlvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRTtBQUNqQyxrREFBa0Q7QUFFbEQsTUFBTUUsa0JBQWtCO0lBQ3RCO1FBQ0VDLE9BQU87UUFDUEMsS0FBSztRQUNMQyxJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsWUFBWSxLQUFLO0lBQ25CO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxLQUFLO1FBQ0xDLElBQUk7UUFDSkMsS0FBSztJQUNQO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLElBQUk7UUFDSkMsS0FBSztJQUNQO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLElBQUk7UUFDSkMsS0FBSztJQUNQO0NBQ0Q7QUFFYyxTQUFTRSxZQUFZOztJQUVsQyxpQ0FBaUM7SUFDakMsTUFBTSxDQUFDRCxZQUFZRSxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFDakQsTUFBTVMsZUFBZSxJQUFNRCxhQUFhLElBQUk7SUFDNUMsTUFBTUUsZUFBZSxJQUFNRixhQUFhLEtBQUs7SUFFN0MscUJBQ0U7OzBCQUNFLDhEQUFDRztnQkFBR0MsV0FBVTswQkFBVzs7Ozs7OzBCQUN6Qiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ1pYLGdCQUFnQmEsR0FBRyxDQUFDLENBQUNDLFFBQVU7b0JBQzlCLHFCQUNFLDhEQUFDRjt3QkFFQ0csT0FBTTt3QkFDTlAsY0FBY0E7d0JBQ2RDLGNBQWNBO2tDQUViSiwyQkFDRCw4REFBQ1AsbURBQUtBOzRCQUNKa0IsS0FBS0YsTUFBTVosR0FBRzs0QkFDZGUsS0FBSyxHQUFlLE9BQVpILE1BQU1iLEtBQUssRUFBQzs0QkFDcEJpQixRQUFPOzRCQUNQQyxPQUFNOzRCQUNOUixXQUFVOzs7OztpREFFWiw4REFBQ2IsbURBQUtBOzRCQUNKa0IsS0FBS0YsTUFBTVosR0FBRzs0QkFDZGUsS0FBSyxHQUFlLE9BQVpILE1BQU1iLEtBQUssRUFBQzs0QkFDcEJpQixRQUFPOzRCQUNQQyxPQUFNOzRCQUNOUixXQUFVOzs7OztnQ0FFWDt1QkFwQklHLE1BQU1WLEdBQUc7Ozs7O2dCQXVCcEI7Ozs7Ozs7O0FBSVIsQ0FBQztHQXpDdUJFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb3J0Zm9saW8uanN4PzcxNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHBvcnRmb2xpb1BpZWNlcyBmcm9tIFwiLi4vcG9ydGZvbGlvRGF0YVwiO1xuXG5jb25zdCBwb3J0Zm9saW9QaWVjZXMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJ1bnRpdGxlZFwiLFxuICAgIGltZzogXCIvaW1hZ2VzL2JhY2twYWNrLnBuZ1wiLFxuICAgIGlkOiBcIjFcIixcbiAgICBrZXk6IDEsXG4gICAgaXNIb3ZlcmluZzogZmFsc2VcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcInVudGl0bGVkIDJcIixcbiAgICBpbWc6IFwiL2ltYWdlcy9iYWNrcGFjay5wbmdcIixcbiAgICBpZDogXCIyXCIsXG4gICAga2V5OiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwidW50aXRsZWRcIixcbiAgICBpbWc6IFwiL2ltYWdlcy9iYWNrcGFjay5wbmdcIixcbiAgICBpZDogXCIxXCIsXG4gICAga2V5OiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwidW50aXRsZWQgMlwiLFxuICAgIGltZzogXCIvaW1hZ2VzL2JhY2twYWNrLnBuZ1wiLFxuICAgIGlkOiBcIjJcIixcbiAgICBrZXk6IDQsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oKSB7XG5cbiAgLy8gY29kZSBmb3IgcG9ydGZvbGlvIGltYWdlIGhvdmVyXG4gIGNvbnN0IFtpc0hvdmVyaW5nLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvbk1vdXNlRW50ZXIgPSAoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSk7XG4gIGNvbnN0IG9uTW91c2VMZWF2ZSA9ICgpID0+IHNldElzSG92ZXJlZChmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+UG9ydGZvbGlvPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctcm93LWRlbnNlIGdhcC00IGdyaWQtY29scy0yIGxnOmdyaWQtY29scy00XCI+XG4gICAgICAgIHtwb3J0Zm9saW9QaWVjZXMubWFwKChwaWVjZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBrZXk9e3BpZWNlLmtleX0gXG4gICAgICAgICAgICAgIGNsYXNzPVwibWF4LXctc20gb3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBoLWZ1bGxcIiBcbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9IFxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNIb3ZlcmluZz8gKFxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e3BpZWNlLmltZ31cbiAgICAgICAgICAgICAgICBhbHQ9e2Ake3BpZWNlLnRpdGxlfSBieSBOYXRhbGllIFNob3VnaGB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VwaWEgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgIC8+KSA6IChcbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtwaWVjZS5pbWd9XG4gICAgICAgICAgICAgICAgYWx0PXtgJHtwaWVjZS50aXRsZX0gYnkgTmF0YWxpZSBTaG91Z2hgfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwicG9ydGZvbGlvUGllY2VzIiwidGl0bGUiLCJpbWciLCJpZCIsImtleSIsImlzSG92ZXJpbmciLCJQb3J0Zm9saW8iLCJzZXRJc0hvdmVyZWQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsInBpZWNlIiwiY2xhc3MiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/portfolio.jsx\n"));

/***/ })

});