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
exports.id = "pages/products";
exports.ids = ["pages/products"];
exports.modules = {

/***/ "./src/firebase.js":
/*!*************************!*\
  !*** ./src/firebase.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,\n    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,\n    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,\n    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,\n    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,\n    appId: process.env.REACT_APP_FIREBASE_APP_ID\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// const auth = getAuth(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app, {\n    experimentalForceLongPolling: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZDO0FBQ0s7QUFFbEQsTUFBTUUsaUJBQWlCO0lBQ3JCQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLDBCQUEwQjtJQUM5Q0MsWUFBWUgsUUFBUUMsR0FBRyxDQUFDRyw4QkFBOEI7SUFDdERDLFdBQVdMLFFBQVFDLEdBQUcsQ0FBQ0ssNkJBQTZCO0lBQ3BEQyxlQUFlUCxRQUFRQyxHQUFHLENBQUNPLGlDQUFpQztJQUM1REMsbUJBQW1CVCxRQUFRQyxHQUFHLENBQUNTLDRCQUE0QjtJQUMzREMsT0FBT1gsUUFBUUMsR0FBRyxDQUFDVyx5QkFBeUI7QUFDOUM7QUFFQSxNQUFNQyxNQUFNakIsMkRBQWFBLENBQUNFO0FBQzFCLDZCQUE2QjtBQUM3QixNQUFNZ0IsS0FBS2pCLGdFQUFZQSxDQUFDZ0IsS0FBSztJQUMzQkUsOEJBQThCLElBQUk7QUFDcEM7QUFFQSxpRUFBZUQsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvb2thdC8uL3NyYy9maXJlYmFzZS5qcz82N2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9BUElfS0VZLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9TRU5ERVJfSUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfQVBQX0lEXG59O1xuXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbi8vIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHAsIHtcbiAgZXhwZXJpbWVudGFsRm9yY2VMb25nUG9sbGluZzogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0RmlyZXN0b3JlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJSRUFDVF9BUFBfRklSRUJBU0VfU0VOREVSX0lEIiwiYXBwSWQiLCJSRUFDVF9BUFBfRklSRUJBU0VfQVBQX0lEIiwiYXBwIiwiZGIiLCJleHBlcmltZW50YWxGb3JjZUxvbmdQb2xsaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/firebase.js\n");

/***/ }),

/***/ "./src/pages/products.jsx":
/*!********************************!*\
  !*** ./src/pages/products.jsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../firebase.js */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_js__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase_js__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\"use client\";\n\n\n\n\n// import products from '../products';\nconst products = [\n    {\n        name: \"product name\",\n        img: \"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg\",\n        price: \"12.99\",\n        description: \"a cat.\",\n        id: 1,\n        key: 1\n    },\n    {\n        name: \"product name\",\n        img: \"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg\",\n        price: \"12.99\",\n        description: \"a cat.\",\n        id: 2,\n        key: 2\n    }\n];\nfunction Products() {\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    // const getProducts = async () => {\n    //   let products = [];\n    //   const collectionArray = await getDocs(collection(db, \"test\"));\n    //   console.log(collectionArray);\n    //   collectionArray.forEach((doc) => {\n    //     products.push({... doc.data(), id: doc.id});\n    //   });\n    //   setProductList(products);\n    //   console.log(productList);\n    // }\n    // useEffect(() => {\n    //   getProducts();\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setProductList(products);\n        console.log(productList);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: product.name\n            }, product.key, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFbUQ7QUFDakI7QUFDdUU7QUFDekcsc0NBQXNDO0FBRXRDLE1BQU1XLFdBQVc7SUFBQztRQUNoQkMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxJQUFJO1FBQ0pDLEtBQUs7SUFDUDtJQUNBO1FBQ0VMLE1BQU07UUFDTkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsSUFBSTtRQUNKQyxLQUFLO0lBQ1A7Q0FDQztBQUVELFNBQVNDLFdBQVc7SUFFbEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdsQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ25ELGdFQUFnRTtJQUdoRSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLG1FQUFtRTtJQUVuRSxrQ0FBa0M7SUFDbEMsdUNBQXVDO0lBQ3ZDLG1EQUFtRDtJQUNuRCxRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixJQUFJO0lBRUosb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1ZELGdEQUFTQSxDQUFDLElBQU07UUFDZG1CLGVBQWVUO1FBQ2ZVLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDZCxHQUFHLEVBQUU7SUFHTCxxQkFDRSw4REFBQ0k7a0JBQ0FaLFNBQVNhLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ0Y7MEJBQ0VFLFFBQVFiLElBQUk7ZUFETGEsUUFBUVIsR0FBRzs7Ozs7Ozs7OztBQU8zQjtBQUVBLGlFQUFlQyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9va2F0Ly4vc3JjL3BhZ2VzL3Byb2R1Y3RzLmpzeD9lODNhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYiBmcm9tICcuLy4uL2ZpcmViYXNlLmpzJztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYywgb25TbmFwc2hvdCwgZG9jLCB1cGRhdGVEb2MsIGRlbGV0ZURvYywgZ2V0RG9jcyB9ICBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG4vLyBpbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vcHJvZHVjdHMnO1xuXG5jb25zdCBwcm9kdWN0cyA9IFt7XG4gIG5hbWU6IFwicHJvZHVjdCBuYW1lXCIsXG4gIGltZzogXCJodHRwczovL2kubmF0Z2VvZmUuY29tL24vNTQ4NDY3ZDgtYzVmMS00NTUxLTlmNTgtNjgxN2E4ZDJjNDVlL05hdGlvbmFsR2VvZ3JhcGhpY18yNTcyMTg3X3NxdWFyZS5qcGdcIixcbiAgcHJpY2U6IFwiMTIuOTlcIixcbiAgZGVzY3JpcHRpb246IFwiYSBjYXQuXCIsXG4gIGlkOiAxLFxuICBrZXk6IDFcbn0sXG57XG4gIG5hbWU6IFwicHJvZHVjdCBuYW1lXCIsXG4gIGltZzogXCJodHRwczovL2kubmF0Z2VvZmUuY29tL24vNTQ4NDY3ZDgtYzVmMS00NTUxLTlmNTgtNjgxN2E4ZDJjNDVlL05hdGlvbmFsR2VvZ3JhcGhpY18yNTcyMTg3X3NxdWFyZS5qcGdcIixcbiAgcHJpY2U6IFwiMTIuOTlcIixcbiAgZGVzY3JpcHRpb246IFwiYSBjYXQuXCIsXG4gIGlkOiAyLFxuICBrZXk6IDJcbn0sXG5dXG5cbmZ1bmN0aW9uIFByb2R1Y3RzKCkge1xuXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUobnVsbCk7XG4gIC8vIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3QsIHNldFNlbGVjdGVkUHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuXG4gIC8vIGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGxldCBwcm9kdWN0cyA9IFtdO1xuICAvLyAgIGNvbnN0IGNvbGxlY3Rpb25BcnJheSA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJ0ZXN0XCIpKTtcbiAgICBcbiAgLy8gICBjb25zb2xlLmxvZyhjb2xsZWN0aW9uQXJyYXkpO1xuICAvLyAgIGNvbGxlY3Rpb25BcnJheS5mb3JFYWNoKChkb2MpID0+IHtcbiAgLy8gICAgIHByb2R1Y3RzLnB1c2goey4uLiBkb2MuZGF0YSgpLCBpZDogZG9jLmlkfSk7XG4gIC8vICAgfSk7XG4gIC8vICAgc2V0UHJvZHVjdExpc3QocHJvZHVjdHMpO1xuICAvLyAgIGNvbnNvbGUubG9nKHByb2R1Y3RMaXN0KTtcbiAgLy8gfVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZ2V0UHJvZHVjdHMoKTtcbiAgLy8gfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdClcbiAgfSwgW10pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmtleX0+XG4gICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkYiIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJvblNuYXBzaG90IiwiZG9jIiwidXBkYXRlRG9jIiwiZGVsZXRlRG9jIiwiZ2V0RG9jcyIsInByb2R1Y3RzIiwibmFtZSIsImltZyIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpZCIsImtleSIsIlByb2R1Y3RzIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJwcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/products.jsx"));
module.exports = __webpack_exports__;

})();