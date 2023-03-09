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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n// import portfolioPieces from \"../portfolioData\";\nconst portfolioPieces = [\n    {\n        title: \"untitled\",\n        img: \"/images/backpack.png\",\n        id: \"1\",\n        key: 1,\n        isHovering: false\n    },\n    {\n        title: \"untitled 2\",\n        img: \"/images/backpack.png\",\n        id: \"2\",\n        key: 2,\n        isHovering: false\n    },\n    {\n        title: \"untitled\",\n        img: \"/images/backpack.png\",\n        id: \"1\",\n        key: 3,\n        isHovering: false\n    },\n    {\n        title: \"untitled 2\",\n        img: \"/images/backpack.png\",\n        id: \"2\",\n        key: 4,\n        isHovering: false\n    }\n];\nfunction Portfolio() {\n    _s();\n    // code for portfolio image hover\n    // const [isHovering, setIsHovered] = useState(false);\n    // const onMouseEnter = () => setIsHovered(true);\n    // const onMouseLeave = () => setIsHovered(false);\n    const [isHovering, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(portfolioPieces);\n    const onPieceHover = (key, isHovering)=>{\n        setIsHovered((prevPiece)=>{\n            return prevPiece.map((piece)=>{\n                if (piece.key === key) {\n                    return {\n                        ...piece,\n                        isHovering\n                    };\n                }\n            });\n        });\n    };\n    //products.filter((product) => product.id === id)[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-flow-row-dense gap-4 grid-cols-2 lg:grid-cols-4\",\n                children: portfolioPieces.map((piece)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"max-w-sm overflow-hidden w-full h-full\",\n                        onMouseEnter: ()=>onPieceHover(piece.key, true),\n                        onMouseLeave: ()=>onPieceHover(piece.key, false),\n                        children: piece.isHovering ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: piece.img,\n                            alt: \"\".concat(piece.title, \" by Natalie Shough\"),\n                            height: \"200\",\n                            width: \"200\",\n                            className: \"sepia transition\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 17\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: piece.img,\n                            alt: \"\".concat(piece.title, \" by Natalie Shough\"),\n                            height: \"200\",\n                            width: \"200\",\n                            className: \"transition\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, this)\n                    }, piece.key, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/portfolio.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Portfolio, \"02w9ABxGBHOZyyYZjhzciBpa0mQ=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9ydGZvbGlvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRTtBQUNqQyxrREFBa0Q7QUFFbEQsTUFBTUUsa0JBQWtCO0lBQ3RCO1FBQ0VDLE9BQU87UUFDUEMsS0FBSztRQUNMQyxJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsWUFBWSxLQUFLO0lBQ25CO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxLQUFLO1FBQ0xDLElBQUk7UUFDSkMsS0FBSztRQUNMQyxZQUFZLEtBQUs7SUFDbkI7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsSUFBSTtRQUNKQyxLQUFLO1FBQ0xDLFlBQVksS0FBSztJQUNuQjtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsS0FBSztRQUNMQyxJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsWUFBWSxLQUFLO0lBQ25CO0NBQ0Q7QUFFYyxTQUFTQyxZQUFZOztJQUNsQyxpQ0FBaUM7SUFDakMsc0RBQXNEO0lBQ3RELGlEQUFpRDtJQUNqRCxrREFBa0Q7SUFFbEQsTUFBTSxDQUFDRCxZQUFZRSxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDQztJQUU1QyxNQUFNUSxlQUFlLENBQUNKLEtBQUtDLGFBQWU7UUFDeENFLGFBQWEsQ0FBQ0UsWUFBYztZQUMxQixPQUFPQSxVQUFVQyxHQUFHLENBQUMsQ0FBQ0MsUUFBVTtnQkFDOUIsSUFBSUEsTUFBTVAsR0FBRyxLQUFLQSxLQUFLO29CQUNyQixPQUFPO3dCQUFFLEdBQUdPLEtBQUs7d0JBQUVOO29CQUFXO2dCQUNoQyxDQUFDO1lBQ0g7UUFDRjtJQUNGO0lBQ0EscURBQXFEO0lBRXJELHFCQUNFOzswQkFDRSw4REFBQ087Z0JBQUdDLFdBQVU7MEJBQVc7Ozs7OzswQkFDekIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNaYixnQkFBZ0JVLEdBQUcsQ0FBQyxDQUFDQyxRQUFVO29CQUM5QixxQkFDRSw4REFBQ0c7d0JBRUNDLE9BQU07d0JBQ05DLGNBQWMsSUFBTVIsYUFBYUcsTUFBTVAsR0FBRyxFQUFFLElBQUk7d0JBQ2hEYSxjQUFjLElBQU1ULGFBQWFHLE1BQU1QLEdBQUcsRUFBRSxLQUFLO2tDQUVoRE8sTUFBTU4sVUFBVSxpQkFDZiw4REFBQ1AsbURBQUtBOzRCQUNKb0IsS0FBS1AsTUFBTVQsR0FBRzs0QkFDZGlCLEtBQUssR0FBZSxPQUFaUixNQUFNVixLQUFLLEVBQUM7NEJBQ3BCbUIsUUFBTzs0QkFDUEMsT0FBTTs0QkFDTlIsV0FBVTs7Ozs7aURBR1osOERBQUNmLG1EQUFLQTs0QkFDSm9CLEtBQUtQLE1BQU1ULEdBQUc7NEJBQ2RpQixLQUFLLEdBQWUsT0FBWlIsTUFBTVYsS0FBSyxFQUFDOzRCQUNwQm1CLFFBQU87NEJBQ1BDLE9BQU07NEJBQ05SLFdBQVU7Ozs7O2dDQUViO3VCQXJCSUYsTUFBTVAsR0FBRzs7Ozs7Z0JBd0JwQjs7Ozs7Ozs7QUFJUixDQUFDO0dBdER1QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcnRmb2xpby5qc3g/NzE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgcG9ydGZvbGlvUGllY2VzIGZyb20gXCIuLi9wb3J0Zm9saW9EYXRhXCI7XG5cbmNvbnN0IHBvcnRmb2xpb1BpZWNlcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcInVudGl0bGVkXCIsXG4gICAgaW1nOiBcIi9pbWFnZXMvYmFja3BhY2sucG5nXCIsXG4gICAgaWQ6IFwiMVwiLFxuICAgIGtleTogMSxcbiAgICBpc0hvdmVyaW5nOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcInVudGl0bGVkIDJcIixcbiAgICBpbWc6IFwiL2ltYWdlcy9iYWNrcGFjay5wbmdcIixcbiAgICBpZDogXCIyXCIsXG4gICAga2V5OiAyLFxuICAgIGlzSG92ZXJpbmc6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwidW50aXRsZWRcIixcbiAgICBpbWc6IFwiL2ltYWdlcy9iYWNrcGFjay5wbmdcIixcbiAgICBpZDogXCIxXCIsXG4gICAga2V5OiAzLFxuICAgIGlzSG92ZXJpbmc6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwidW50aXRsZWQgMlwiLFxuICAgIGltZzogXCIvaW1hZ2VzL2JhY2twYWNrLnBuZ1wiLFxuICAgIGlkOiBcIjJcIixcbiAgICBrZXk6IDQsXG4gICAgaXNIb3ZlcmluZzogZmFsc2UsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oKSB7XG4gIC8vIGNvZGUgZm9yIHBvcnRmb2xpbyBpbWFnZSBob3ZlclxuICAvLyBjb25zdCBbaXNIb3ZlcmluZywgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3Qgb25Nb3VzZUVudGVyID0gKCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpO1xuICAvLyBjb25zdCBvbk1vdXNlTGVhdmUgPSAoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpO1xuXG4gIGNvbnN0IFtpc0hvdmVyaW5nLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUocG9ydGZvbGlvUGllY2VzKTtcblxuICBjb25zdCBvblBpZWNlSG92ZXIgPSAoa2V5LCBpc0hvdmVyaW5nKSA9PiB7XG4gICAgc2V0SXNIb3ZlcmVkKChwcmV2UGllY2UpID0+IHtcbiAgICAgIHJldHVybiBwcmV2UGllY2UubWFwKChwaWVjZSkgPT4ge1xuICAgICAgICBpZiAocGllY2Uua2V5ID09PSBrZXkpIHtcbiAgICAgICAgICByZXR1cm4geyAuLi5waWVjZSwgaXNIb3ZlcmluZyB9O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgLy9wcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGlkKVswXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5Qb3J0Zm9saW88L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgZ2FwLTQgZ3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAge3BvcnRmb2xpb1BpZWNlcy5tYXAoKHBpZWNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtwaWVjZS5rZXl9XG4gICAgICAgICAgICAgIGNsYXNzPVwibWF4LXctc20gb3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBoLWZ1bGxcIlxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IG9uUGllY2VIb3ZlcihwaWVjZS5rZXksIHRydWUpfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IG9uUGllY2VIb3ZlcihwaWVjZS5rZXksIGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BpZWNlLmlzSG92ZXJpbmcgPyAoXG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e3BpZWNlLmltZ31cbiAgICAgICAgICAgICAgICAgIGFsdD17YCR7cGllY2UudGl0bGV9IGJ5IE5hdGFsaWUgU2hvdWdoYH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXBpYSB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtwaWVjZS5pbWd9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2Ake3BpZWNlLnRpdGxlfSBieSBOYXRhbGllIFNob3VnaGB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsInBvcnRmb2xpb1BpZWNlcyIsInRpdGxlIiwiaW1nIiwiaWQiLCJrZXkiLCJpc0hvdmVyaW5nIiwiUG9ydGZvbGlvIiwic2V0SXNIb3ZlcmVkIiwib25QaWVjZUhvdmVyIiwicHJldlBpZWNlIiwibWFwIiwicGllY2UiLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsImNsYXNzIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/portfolio.jsx\n"));

/***/ })

});