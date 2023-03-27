"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/productTest";
exports.ids = ["pages/productTest"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,\n    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,\n    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,\n    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,\n    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,\n    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// const auth = getAuth(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkM7QUFDSztBQUVsRCxNQUFNRSxpQkFBaUI7SUFDckJDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsNEJBQTRCO0lBQ2hEQyxZQUFZSCxRQUFRQyxHQUFHLENBQUNHLGdDQUFnQztJQUN4REMsV0FBV0wsUUFBUUMsR0FBRyxDQUFDSywrQkFBK0I7SUFDdERDLGVBQWVQLFFBQVFDLEdBQUcsQ0FBQ08sbUNBQW1DO0lBQzlEQyxtQkFBbUJULFFBQVFDLEdBQUcsQ0FBQ1MsOEJBQThCO0lBQzdEQyxPQUFPWCxRQUFRQyxHQUFHLENBQUNXLDJCQUEyQjtBQUNoRDtBQUVBLE1BQU1DLE1BQU1qQiwyREFBYUEsQ0FBQ0U7QUFDMUIsNkJBQTZCO0FBQzdCLE1BQU1nQixLQUFLakIsZ0VBQVlBLENBQUNnQjtBQUV4QixpRUFBZUMsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvb2thdC8uL2ZpcmViYXNlLmpzPzRkOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9TRU5ERVJfSUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSURcbn07XG5cbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuLy8gY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRiO1xuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJhcHAiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./src/pages/productTest.jsx":
/*!***********************************!*\
  !*** ./src/pages/productTest.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductTest)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../firebase.js */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase_js__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction ProductTest() {\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const getData = async ()=>{\n        let array = [];\n        const collectionArray = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_js__WEBPACK_IMPORTED_MODULE_2__.db, \"test\"));\n        collectionArray.forEach((doc)=>{\n            array.push({\n                ...doc.data(),\n                id: doc.id\n            });\n        });\n        setProducts(array);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getData();\n        console.log(process.env.NEXT_PUBLIC_FIREBASE_APP_ID);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: products.map((product)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: product.name\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/productTest.jsx\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/capstone-project/lookat/src/pages/productTest.jsx\",\n        lineNumber: 24,\n        columnNumber: 3\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdFRlc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ3JCO0FBQ0c7QUFFN0IsU0FBU00sY0FBYztJQUVwQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxNQUFNSSxVQUFVLFVBQVk7UUFDMUIsSUFBSUMsUUFBUSxFQUFFO1FBQ2QsTUFBTUMsa0JBQWtCLE1BQU1WLDJEQUFPQSxDQUFDRCw4REFBVUEsQ0FBQ0csNENBQUVBLEVBQUU7UUFDckRRLGdCQUFnQkMsT0FBTyxDQUFDLENBQUNWLE1BQVE7WUFDL0JRLE1BQU1HLElBQUksQ0FBQztnQkFBRSxHQUFHWCxJQUFJWSxJQUFJLEVBQUU7Z0JBQUVDLElBQUliLElBQUlhLEVBQUU7WUFBQztRQUN6QztRQUNBUCxZQUFZRTtJQUNkO0lBRUFOLGdEQUFTQSxDQUFDLElBQU07UUFDZEs7UUFDQU8sUUFBUUMsR0FBRyxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLDJCQUEyQjtJQUNyRCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7a0JBQUdkLFNBQVNlLEdBQUcsQ0FBQyxDQUFDQyxVQUFZOzBCQUM1Qiw4REFBQ0Y7MEJBQUdFLFFBQVFDLElBQUk7Ozs7OztRQUNsQjs7Ozs7O0FBR0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvb2thdC8uL3NyYy9wYWdlcy9wcm9kdWN0VGVzdC5qc3g/ZDZjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBkb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLy4uLy4uL2ZpcmViYXNlLmpzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RUZXN0KCkge1xuXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgYXJyYXkgPSBbXTtcbiAgY29uc3QgY29sbGVjdGlvbkFycmF5ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInRlc3RcIikpO1xuICBjb2xsZWN0aW9uQXJyYXkuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgYXJyYXkucHVzaCh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSk7XG4gIH0pO1xuICBzZXRQcm9kdWN0cyhhcnJheSk7XG59O1xuXG51c2VFZmZlY3QoKCkgPT4ge1xuICBnZXREYXRhKCk7XG4gIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCk7XG59LCBbXSk7XG5cbnJldHVybihcbiAgPHA+e3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgIDxwPntwcm9kdWN0Lm5hbWV9PC9wPlxuICB9KX08L3A+XG4pXG5cbn0iXSwibmFtZXMiOlsiY29sbGVjdGlvbiIsImdldERvY3MiLCJkb2MiLCJkYiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdFRlc3QiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZ2V0RGF0YSIsImFycmF5IiwiY29sbGVjdGlvbkFycmF5IiwiZm9yRWFjaCIsInB1c2giLCJkYXRhIiwiaWQiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCIsInAiLCJtYXAiLCJwcm9kdWN0IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/productTest.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/productTest.jsx"));
module.exports = __webpack_exports__;

})();