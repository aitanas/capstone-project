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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,\n    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,\n    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,\n    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,\n    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,\n    appId: process.env.REACT_APP_FIREBASE_APP_ID\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZDO0FBQ0s7QUFFbEQsTUFBTUUsaUJBQWlCO0lBQ3JCQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLDBCQUEwQjtJQUM5Q0MsWUFBWUgsUUFBUUMsR0FBRyxDQUFDRyw4QkFBOEI7SUFDdERDLFdBQVdMLFFBQVFDLEdBQUcsQ0FBQ0ssNkJBQTZCO0lBQ3BEQyxlQUFlUCxRQUFRQyxHQUFHLENBQUNPLGlDQUFpQztJQUM1REMsbUJBQW1CVCxRQUFRQyxHQUFHLENBQUNTLDRCQUE0QjtJQUMzREMsT0FBT1gsUUFBUUMsR0FBRyxDQUFDVyx5QkFBeUI7QUFDOUM7QUFFQSxNQUFNQyxNQUFNakIsMkRBQWFBLENBQUNFO0FBQzFCLE1BQU1nQixLQUFLakIsZ0VBQVlBLENBQUNnQjtBQUV4QixpRUFBZUMsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvb2thdC8uL3NyYy9maXJlYmFzZS5qcz82N2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9BUElfS0VZLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9TRU5ERVJfSUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfQVBQX0lELFxufTtcblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0RmlyZXN0b3JlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJSRUFDVF9BUFBfRklSRUJBU0VfU0VOREVSX0lEIiwiYXBwSWQiLCJSRUFDVF9BUFBfRklSRUJBU0VfQVBQX0lEIiwiYXBwIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/firebase.js\n");

/***/ }),

/***/ "./src/pages/products.jsx":
/*!********************************!*\
  !*** ./src/pages/products.jsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Products)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nasync function Products() {\n    // const [products, setProducts] = useState([]);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    let products = [];\n    const collectionArray = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"products\"));\n    collectionArray.forEach((doc)=>{\n        products.push({\n            ...doc.data(),\n            id: doc.id\n        });\n    });\n    console.log(products);\n    // const getProducts = async () => {\n    //   let array = [];\n    //   const collectionArray = await getDocs(collection(db, \"products\"));\n    //   collectionArray.forEach((doc) => {\n    //     array.push({...doc.data(), id: doc.id});\n    //   });\n    //   console.log(collectionArray);\n    //   setProducts(array);\n    //   console.log(array);\n    // }\n    // useEffect(() => {\n    //   getProducts();\n    // }, []);\n    // type props = {\n    //   name: string;\n    //   img: string;\n    //   price: number;\n    //   description: string;\n    //   id: string;\n    // };\n    // const querySnapshot = await getDocs(collection(db, \"users\"));\n    // querySnapshot.forEach((doc) => {\n    //   console.log(`${doc.id} => ${doc.data()}`);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: products.map((product)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.img\n                    }, void 0, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, product.id, true, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBUVU7QUFFeEIsZUFBZU0sV0FBVztJQUV2QyxnREFBZ0Q7SUFDaEQsZ0VBQWdFO0lBQ2hFLElBQUlDLFdBQVcsRUFBRTtJQUNqQixNQUFNQyxrQkFBa0IsTUFBTUgsMkRBQU9BLENBQUNELDhEQUFVQSxDQUFDRCxpREFBRUEsRUFBRTtJQUNyREssZ0JBQWdCQyxPQUFPLENBQUMsQ0FBQ0MsTUFBUTtRQUMvQkgsU0FBU0ksSUFBSSxDQUFDO1lBQUMsR0FBR0QsSUFBSUUsSUFBSSxFQUFFO1lBQUVDLElBQUlILElBQUlHLEVBQUU7UUFBQTtJQUMxQztJQUVBQyxRQUFRQyxHQUFHLENBQUNSO0lBR1osb0NBQW9DO0lBQ3BDLG9CQUFvQjtJQUNwQix1RUFBdUU7SUFDdkUsdUNBQXVDO0lBQ3ZDLCtDQUErQztJQUMvQyxRQUFRO0lBQ1Isa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsSUFBSTtJQUVKLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsVUFBVTtJQUVWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLEtBQUs7SUFFTCxnRUFBZ0U7SUFDaEUsbUNBQW1DO0lBQ25DLCtDQUErQztJQUMvQyxNQUFNO0lBR04scUJBQ0UsOERBQUNTO2tCQUNBVCxTQUFTVSxHQUFHLENBQUMsQ0FBQ0MsVUFBWTswQkFDekIsOERBQUNGOztrQ0FDQyw4REFBQ0c7a0NBQUdELFFBQVFFLElBQUk7Ozs7OztrQ0FDaEIsOERBQUNEO2tDQUFHRCxRQUFRRyxHQUFHOzs7Ozs7a0NBQ2YsOERBQUNGO2tDQUFHRCxRQUFRSSxXQUFXOzs7Ozs7O2VBSGZKLFFBQVFMLEVBQUU7Ozs7O1FBS3RCOzs7Ozs7QUFHSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9va2F0Ly4vc3JjL3BhZ2VzL3Byb2R1Y3RzLmpzeD9lODNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGIgZnJvbSAnLi4vZmlyZWJhc2UnO1xuaW1wb3J0IHsgICBcbiAgY29sbGVjdGlvbixcbiAgLy8gcXVlcnksXG4gIC8vIGFkZERvYyxcbiAgLy8gb25TbmFwc2hvdCxcbiAgLy8gZG9jLFxuICAvLyB1cGRhdGVEb2MsXG4gIGdldERvY3MsIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBQcm9kdWN0cygpIHtcblxuICAvLyBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgW3NlbGVjdGVkUHJvZHVjdCwgc2V0U2VsZWN0ZWRQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBsZXQgcHJvZHVjdHMgPSBbXTtcbiAgY29uc3QgY29sbGVjdGlvbkFycmF5ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInByb2R1Y3RzXCIpKTtcbiAgY29sbGVjdGlvbkFycmF5LmZvckVhY2goKGRvYykgPT4ge1xuICAgIHByb2R1Y3RzLnB1c2goey4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWR9KTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xuXG5cbiAgLy8gY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgbGV0IGFycmF5ID0gW107XG4gIC8vICAgY29uc3QgY29sbGVjdGlvbkFycmF5ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInByb2R1Y3RzXCIpKTtcbiAgLy8gICBjb2xsZWN0aW9uQXJyYXkuZm9yRWFjaCgoZG9jKSA9PiB7XG4gIC8vICAgICBhcnJheS5wdXNoKHsuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkfSk7XG4gIC8vICAgfSk7XG4gIC8vICAgY29uc29sZS5sb2coY29sbGVjdGlvbkFycmF5KTtcbiAgLy8gICBzZXRQcm9kdWN0cyhhcnJheSk7XG4gIC8vICAgY29uc29sZS5sb2coYXJyYXkpO1xuICAvLyB9XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBnZXRQcm9kdWN0cygpO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8gdHlwZSBwcm9wcyA9IHtcbiAgLy8gICBuYW1lOiBzdHJpbmc7XG4gIC8vICAgaW1nOiBzdHJpbmc7XG4gIC8vICAgcHJpY2U6IG51bWJlcjtcbiAgLy8gICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvLyAgIGlkOiBzdHJpbmc7XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKSk7XG4gIC8vIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coYCR7ZG9jLmlkfSA9PiAke2RvYy5kYXRhKCl9YCk7XG4gIC8vIH0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgPHA+e3Byb2R1Y3QubmFtZX08L3A+XG4gICAgICAgIDxwPntwcm9kdWN0LmltZ308L3A+XG4gICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGIiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsIlByb2R1Y3RzIiwicHJvZHVjdHMiLCJjb2xsZWN0aW9uQXJyYXkiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJwcm9kdWN0IiwicCIsIm5hbWUiLCJpbWciLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n");

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