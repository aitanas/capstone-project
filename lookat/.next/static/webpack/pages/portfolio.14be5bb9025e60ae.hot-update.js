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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// import portfolioPieces from \"../portfolioData\";\nconst portfolioPieces = [\n    {\n        title: \"untitled\",\n        img: \"/images/backpack.png\",\n        id: \"1\",\n        key: 1\n    },\n    {\n        title: \"untitled 2\",\n        img: \"/images/backpack.png\",\n        id: \"2\",\n        key: 2\n    },\n    {\n        title: \"untitled\",\n        img: \"/images/backpack.png\",\n        id: \"1\",\n        key: 3\n    },\n    {\n        title: \"untitled 2\",\n        img: \"/images/backpack.png\",\n        id: \"2\",\n        key: 4\n    }\n];\nfunction Portfolio() {\n    _s();\n    // \n    const [isHovering, setIsHovered] = useState(false);\n    const onMouseEnter = ()=>setIsHovered(true);\n    const onMouseLeave = ()=>setIsHovered(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-flow-row-dense gap-4 grid-cols-2 lg:grid-cols-4\",\n                children: portfolioPieces.map((piece)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"group max-w-sm overflow-hidden w-full h-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: piece.img,\n                            alt: \"\".concat(piece.title, \" by Natalie Shough\"),\n                            height: \"200\",\n                            width: \"200\",\n                            className: \"transition hover:sepia\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, this)\n                    }, piece.key, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Portfolio, \"RTRvfbsacFKA/H7Oqn4UUNMNgyo=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9ydGZvbGlvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBQy9CLGtEQUFrRDtBQUVsRCxNQUFNQyxrQkFBa0I7SUFDdEI7UUFDRUMsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLElBQUk7UUFDSkMsS0FBSztJQUNQO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLElBQUk7UUFDSkMsS0FBSztJQUNQO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLElBQUk7UUFDSkMsS0FBSztJQUNQO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLElBQUk7UUFDSkMsS0FBSztJQUNQO0NBQ0Q7QUFFYyxTQUFTQyxZQUFZOztJQUVsQyxHQUFHO0lBQ0gsTUFBTSxDQUFDQyxZQUFZQyxhQUFhLEdBQUdDLFNBQVMsS0FBSztJQUNqRCxNQUFNQyxlQUFlLElBQU1GLGFBQWEsSUFBSTtJQUM1QyxNQUFNRyxlQUFlLElBQU1ILGFBQWEsS0FBSztJQUU3QyxxQkFDRTs7MEJBQ0UsOERBQUNJO2dCQUFHQyxXQUFVOzBCQUFXOzs7Ozs7MEJBQ3pCLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWlosZ0JBQWdCYyxHQUFHLENBQUMsQ0FBQ0MsUUFBVTtvQkFDOUIscUJBQ0UsOERBQUNGO3dCQUFvQkcsT0FBTTtrQ0FDekIsNEVBQUNqQixtREFBS0E7NEJBQ0prQixLQUFLRixNQUFNYixHQUFHOzRCQUNkZ0IsS0FBSyxHQUFlLE9BQVpILE1BQU1kLEtBQUssRUFBQzs0QkFDcEJrQixRQUFPOzRCQUNQQyxPQUFNOzRCQUNOUixXQUFVOzs7Ozs7dUJBTkpHLE1BQU1YLEdBQUc7Ozs7O2dCQVV2Qjs7Ozs7Ozs7QUFJUixDQUFDO0dBM0J1QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcnRmb2xpby5qc3g/NzE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbi8vIGltcG9ydCBwb3J0Zm9saW9QaWVjZXMgZnJvbSBcIi4uL3BvcnRmb2xpb0RhdGFcIjtcblxuY29uc3QgcG9ydGZvbGlvUGllY2VzID0gW1xuICB7XG4gICAgdGl0bGU6IFwidW50aXRsZWRcIixcbiAgICBpbWc6IFwiL2ltYWdlcy9iYWNrcGFjay5wbmdcIixcbiAgICBpZDogXCIxXCIsXG4gICAga2V5OiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwidW50aXRsZWQgMlwiLFxuICAgIGltZzogXCIvaW1hZ2VzL2JhY2twYWNrLnBuZ1wiLFxuICAgIGlkOiBcIjJcIixcbiAgICBrZXk6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJ1bnRpdGxlZFwiLFxuICAgIGltZzogXCIvaW1hZ2VzL2JhY2twYWNrLnBuZ1wiLFxuICAgIGlkOiBcIjFcIixcbiAgICBrZXk6IDMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJ1bnRpdGxlZCAyXCIsXG4gICAgaW1nOiBcIi9pbWFnZXMvYmFja3BhY2sucG5nXCIsXG4gICAgaWQ6IFwiMlwiLFxuICAgIGtleTogNCxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpbygpIHtcblxuICAvLyBcbiAgY29uc3QgW2lzSG92ZXJpbmcsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uTW91c2VFbnRlciA9ICgpID0+IHNldElzSG92ZXJlZCh0cnVlKTtcbiAgY29uc3Qgb25Nb3VzZUxlYXZlID0gKCkgPT4gc2V0SXNIb3ZlcmVkKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5Qb3J0Zm9saW88L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgZ2FwLTQgZ3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAge3BvcnRmb2xpb1BpZWNlcy5tYXAoKHBpZWNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtwaWVjZS5rZXl9IGNsYXNzPVwiZ3JvdXAgbWF4LXctc20gb3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtwaWVjZS5pbWd9XG4gICAgICAgICAgICAgICAgYWx0PXtgJHtwaWVjZS50aXRsZX0gYnkgTmF0YWxpZSBTaG91Z2hgfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gaG92ZXI6c2VwaWFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInBvcnRmb2xpb1BpZWNlcyIsInRpdGxlIiwiaW1nIiwiaWQiLCJrZXkiLCJQb3J0Zm9saW8iLCJpc0hvdmVyaW5nIiwic2V0SXNIb3ZlcmVkIiwidXNlU3RhdGUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsInBpZWNlIiwiY2xhc3MiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/portfolio.jsx\n"));

/***/ })

});