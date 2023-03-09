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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portfolioData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portfolioData */ \"./src/portfolioData.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Portfolio() {\n    _s();\n    // code for portfolio image hover\n    // const [isHovering, setIsHovered] = useState(false);\n    // const onMouseEnter = () => setIsHovered(true);\n    // const onMouseLeave = () => setIsHovered(false);\n    const [isHovering, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_portfolioData__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const onPieceHover = (key, isHovering)=>{\n        setIsHovered(()=>{\n            return _portfolioData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((piece)=>piece.key === key)[0];\n        });\n    };\n    //products.filter((product) => product.id === id)[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl mt-6 bg-ivory rounded-full p-4 px-10\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-flow-row-dense gap-4 grid-cols-2 lg:grid-cols-4\",\n                children: _portfolioData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((piece)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-sm overflow-hidden w-full h-full\",\n                        onMouseEnter: ()=>onPieceHover(piece.key, true),\n                        onMouseLeave: ()=>onPieceHover(piece.key, false),\n                        children: piece.isHovering ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: piece.url,\n                            alt: \"\".concat(piece.title, \" by Natalie Shough\"),\n                            height: \"300\",\n                            width: \"300\",\n                            className: \"sepia transition\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: piece.url,\n                            alt: \"\".concat(piece.title, \" by Natalie Shough\"),\n                            height: \"300\",\n                            width: \"300\",\n                            className: \"transition\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, this)\n                    }, piece.key, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Portfolio, \"02w9ABxGBHOZyyYZjhzciBpa0mQ=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9ydGZvbGlvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0U7QUFDYztBQUVoQyxTQUFTRyxZQUFZOztJQUNsQyxpQ0FBaUM7SUFDakMsc0RBQXNEO0lBQ3RELGlEQUFpRDtJQUNqRCxrREFBa0Q7SUFFbEQsTUFBTSxDQUFDQyxZQUFZQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDQyxzREFBZUE7SUFFM0QsTUFBTUksZUFBZSxDQUFDQyxLQUFLSCxhQUFlO1FBQ3hDQyxhQUFhLElBQU07WUFDakIsT0FBT0gsNkRBQXNCLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUYsR0FBRyxLQUFLQSxJQUFJLENBQUMsRUFBRTtRQUM1RDtJQUVKO0lBQ0YscURBQXFEO0lBRXJELHFCQUNFOzswQkFDRSw4REFBQ0c7Z0JBQUdDLFdBQVU7MEJBQWdEOzs7Ozs7MEJBQzlELDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWlQsMERBQW1CLENBQUMsQ0FBQ08sUUFBVTtvQkFDOUIscUJBQ0UsOERBQUNHO3dCQUVDRCxXQUFVO3dCQUNWRyxjQUFjLElBQU1SLGFBQWFHLE1BQU1GLEdBQUcsRUFBRSxJQUFJO3dCQUNoRFEsY0FBYyxJQUFNVCxhQUFhRyxNQUFNRixHQUFHLEVBQUUsS0FBSztrQ0FFaERFLE1BQU1MLFVBQVUsaUJBQ2YsOERBQUNKLG1EQUFLQTs0QkFDSmdCLEtBQUtQLE1BQU1RLEdBQUc7NEJBQ2RDLEtBQUssR0FBZSxPQUFaVCxNQUFNVSxLQUFLLEVBQUM7NEJBQ3BCQyxRQUFPOzRCQUNQQyxPQUFNOzRCQUNOVixXQUFVOzs7OztpREFHWiw4REFBQ1gsbURBQUtBOzRCQUNKZ0IsS0FBS1AsTUFBTVEsR0FBRzs0QkFDZEMsS0FBSyxHQUFlLE9BQVpULE1BQU1VLEtBQUssRUFBQzs0QkFDcEJDLFFBQU87NEJBQ1BDLE9BQU07NEJBQ05WLFdBQVU7Ozs7O2dDQUViO3VCQXJCSUYsTUFBTUYsR0FBRzs7Ozs7Z0JBd0JwQjs7Ozs7Ozs7QUFJUixDQUFDO0dBbkR1Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcnRmb2xpby5qc3g/NzE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcG9ydGZvbGlvUGllY2VzIGZyb20gXCIuLi9wb3J0Zm9saW9EYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpbygpIHtcbiAgLy8gY29kZSBmb3IgcG9ydGZvbGlvIGltYWdlIGhvdmVyXG4gIC8vIGNvbnN0IFtpc0hvdmVyaW5nLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBvbk1vdXNlRW50ZXIgPSAoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSk7XG4gIC8vIGNvbnN0IG9uTW91c2VMZWF2ZSA9ICgpID0+IHNldElzSG92ZXJlZChmYWxzZSk7XG5cbiAgY29uc3QgW2lzSG92ZXJpbmcsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShwb3J0Zm9saW9QaWVjZXMpO1xuXG4gIGNvbnN0IG9uUGllY2VIb3ZlciA9IChrZXksIGlzSG92ZXJpbmcpID0+IHtcbiAgICBzZXRJc0hvdmVyZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHBvcnRmb2xpb1BpZWNlcy5maWx0ZXIoKHBpZWNlKSA9PiBwaWVjZS5rZXkgPT09IGtleSlbMF1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9O1xuICAvL3Byb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gaWQpWzBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtdC02IGJnLWl2b3J5IHJvdW5kZWQtZnVsbCBwLTQgcHgtMTBcIj5Qb3J0Zm9saW88L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgZ2FwLTQgZ3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAge3BvcnRmb2xpb1BpZWNlcy5tYXAoKHBpZWNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtwaWVjZS5rZXl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LXNtIG92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBvblBpZWNlSG92ZXIocGllY2Uua2V5LCB0cnVlKX1cbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBvblBpZWNlSG92ZXIocGllY2Uua2V5LCBmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwaWVjZS5pc0hvdmVyaW5nID8gKFxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtwaWVjZS51cmx9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2Ake3BpZWNlLnRpdGxlfSBieSBOYXRhbGllIFNob3VnaGB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VwaWEgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17cGllY2UudXJsfVxuICAgICAgICAgICAgICAgICAgYWx0PXtgJHtwaWVjZS50aXRsZX0gYnkgTmF0YWxpZSBTaG91Z2hgfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwicG9ydGZvbGlvUGllY2VzIiwiUG9ydGZvbGlvIiwiaXNIb3ZlcmluZyIsInNldElzSG92ZXJlZCIsIm9uUGllY2VIb3ZlciIsImtleSIsImZpbHRlciIsInBpZWNlIiwiaDEiLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzcmMiLCJ1cmwiLCJhbHQiLCJ0aXRsZSIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/portfolio.jsx\n"));

/***/ })

});