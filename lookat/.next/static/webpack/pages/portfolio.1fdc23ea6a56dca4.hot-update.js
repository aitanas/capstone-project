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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// import portfolioPieces from \"../portfolioData\";\nconst portfolioPieces = [\n    {\n        title: \"untitled\",\n        img: \"/images/backpack.png\",\n        id: \"1\",\n        key: 1,\n        isHovering: false\n    },\n    {\n        title: \"untitled 2\",\n        img: \"/images/backpack.png\",\n        id: \"2\",\n        key: 2,\n        isHovering: false\n    },\n    {\n        title: \"untitled\",\n        img: \"/images/backpack.png\",\n        id: \"1\",\n        key: 3,\n        isHovering: false\n    },\n    {\n        title: \"untitled 2\",\n        img: \"/images/backpack.png\",\n        id: \"2\",\n        key: 4,\n        isHovering: false\n    }\n];\nfunction Portfolio() {\n    // code for portfolio image hover\n    // const [isHovering, setIsHovered] = useState(false);\n    // const onMouseEnter = () => setIsHovered(true);\n    // const onMouseLeave = () => setIsHovered(false);\n    const [portfolioPieces, setPortfolioPieces] = react__WEBPACK_IMPORTED_MODULE_2__.useState;\n    const onPieceHover = (key, isHovering1)=>{\n        setPortfolioPieces;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-flow-row-dense gap-4 grid-cols-2 lg:grid-cols-4\",\n                children: portfolioPieces.map((piece)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"max-w-sm overflow-hidden w-full h-full\",\n                        onMouseEnter: onMouseEnter,\n                        onMouseLeave: onMouseLeave,\n                        children: isHovering ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: piece.img,\n                            alt: \"\".concat(piece.title, \" by Natalie Shough\"),\n                            height: \"200\",\n                            width: \"200\",\n                            className: \"sepia transition\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: piece.img,\n                            alt: \"\".concat(piece.title, \" by Natalie Shough\"),\n                            height: \"200\",\n                            width: \"200\",\n                            className: \"transition\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 15\n                        }, this)\n                    }, piece.key, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9ydGZvbGlvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNFO0FBQ2pDLGtEQUFrRDtBQUVsRCxNQUFNRSxrQkFBa0I7SUFDdEI7UUFDRUMsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLElBQUk7UUFDSkMsS0FBSztRQUNMQyxZQUFZLEtBQUs7SUFDbkI7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsSUFBSTtRQUNKQyxLQUFLO1FBQ0xDLFlBQVksS0FBSztJQUNuQjtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsS0FBSztRQUNMQyxJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsWUFBWSxLQUFLO0lBQ25CO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxLQUFLO1FBQ0xDLElBQUk7UUFDSkMsS0FBSztRQUNMQyxZQUFZLEtBQUs7SUFDbkI7Q0FDRDtBQUVjLFNBQVNDLFlBQVk7SUFFbEMsaUNBQWlDO0lBQ2pDLHNEQUFzRDtJQUN0RCxpREFBaUQ7SUFDakQsa0RBQWtEO0lBRWxELE1BQU0sQ0FBQ04saUJBQWlCTyxtQkFBbUIsR0FBR1IsMkNBQVFBO0lBRXRELE1BQU1TLGVBQWUsQ0FBQ0osS0FBS0MsY0FBZTtRQUN4Q0U7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0U7Z0JBQUdDLFdBQVU7MEJBQVc7Ozs7OzswQkFDekIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNaVixnQkFBZ0JZLEdBQUcsQ0FBQyxDQUFDQyxRQUFVO29CQUM5QixxQkFDRSw4REFBQ0Y7d0JBRUNHLE9BQU07d0JBQ05DLGNBQWNBO3dCQUNkQyxjQUFjQTtrQ0FFYlgsMkJBQ0QsOERBQUNQLG1EQUFLQTs0QkFDSm1CLEtBQUtKLE1BQU1YLEdBQUc7NEJBQ2RnQixLQUFLLEdBQWUsT0FBWkwsTUFBTVosS0FBSyxFQUFDOzRCQUNwQmtCLFFBQU87NEJBQ1BDLE9BQU07NEJBQ05WLFdBQVU7Ozs7O2lEQUVaLDhEQUFDWixtREFBS0E7NEJBQ0ptQixLQUFLSixNQUFNWCxHQUFHOzRCQUNkZ0IsS0FBSyxHQUFlLE9BQVpMLE1BQU1aLEtBQUssRUFBQzs0QkFDcEJrQixRQUFPOzRCQUNQQyxPQUFNOzRCQUNOVixXQUFVOzs7OztnQ0FFWDt1QkFwQklHLE1BQU1ULEdBQUc7Ozs7O2dCQXVCcEI7Ozs7Ozs7O0FBSVIsQ0FBQztLQS9DdUJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb3J0Zm9saW8uanN4PzcxNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHBvcnRmb2xpb1BpZWNlcyBmcm9tIFwiLi4vcG9ydGZvbGlvRGF0YVwiO1xuXG5jb25zdCBwb3J0Zm9saW9QaWVjZXMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJ1bnRpdGxlZFwiLFxuICAgIGltZzogXCIvaW1hZ2VzL2JhY2twYWNrLnBuZ1wiLFxuICAgIGlkOiBcIjFcIixcbiAgICBrZXk6IDEsXG4gICAgaXNIb3ZlcmluZzogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJ1bnRpdGxlZCAyXCIsXG4gICAgaW1nOiBcIi9pbWFnZXMvYmFja3BhY2sucG5nXCIsXG4gICAgaWQ6IFwiMlwiLFxuICAgIGtleTogMixcbiAgICBpc0hvdmVyaW5nOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcInVudGl0bGVkXCIsXG4gICAgaW1nOiBcIi9pbWFnZXMvYmFja3BhY2sucG5nXCIsXG4gICAgaWQ6IFwiMVwiLFxuICAgIGtleTogMyxcbiAgICBpc0hvdmVyaW5nOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcInVudGl0bGVkIDJcIixcbiAgICBpbWc6IFwiL2ltYWdlcy9iYWNrcGFjay5wbmdcIixcbiAgICBpZDogXCIyXCIsXG4gICAga2V5OiA0LFxuICAgIGlzSG92ZXJpbmc6IGZhbHNlLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvKCkge1xuXG4gIC8vIGNvZGUgZm9yIHBvcnRmb2xpbyBpbWFnZSBob3ZlclxuICAvLyBjb25zdCBbaXNIb3ZlcmluZywgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3Qgb25Nb3VzZUVudGVyID0gKCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpO1xuICAvLyBjb25zdCBvbk1vdXNlTGVhdmUgPSAoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpO1xuXG4gIGNvbnN0IFtwb3J0Zm9saW9QaWVjZXMsIHNldFBvcnRmb2xpb1BpZWNlc10gPSB1c2VTdGF0ZVxuXG4gIGNvbnN0IG9uUGllY2VIb3ZlciA9IChrZXksIGlzSG92ZXJpbmcpID0+IHtcbiAgICBzZXRQb3J0Zm9saW9QaWVjZXNcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlBvcnRmb2xpbzwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvdy1kZW5zZSBnYXAtNCBncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNFwiPlxuICAgICAgICB7cG9ydGZvbGlvUGllY2VzLm1hcCgocGllY2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAga2V5PXtwaWVjZS5rZXl9IFxuICAgICAgICAgICAgICBjbGFzcz1cIm1heC13LXNtIG92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgaC1mdWxsXCIgXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfSBcbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2lzSG92ZXJpbmc/IChcbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtwaWVjZS5pbWd9XG4gICAgICAgICAgICAgICAgYWx0PXtgJHtwaWVjZS50aXRsZX0gYnkgTmF0YWxpZSBTaG91Z2hgfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlcGlhIHRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAvPikgOiAoXG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17cGllY2UuaW1nfVxuICAgICAgICAgICAgICAgIGFsdD17YCR7cGllY2UudGl0bGV9IGJ5IE5hdGFsaWUgU2hvdWdoYH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsInBvcnRmb2xpb1BpZWNlcyIsInRpdGxlIiwiaW1nIiwiaWQiLCJrZXkiLCJpc0hvdmVyaW5nIiwiUG9ydGZvbGlvIiwic2V0UG9ydGZvbGlvUGllY2VzIiwib25QaWVjZUhvdmVyIiwiaDEiLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJwaWVjZSIsImNsYXNzIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/portfolio.jsx\n"));

/***/ })

});