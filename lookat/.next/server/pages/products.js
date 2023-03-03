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

/***/ "./src/pages/Product.jsx":
/*!*******************************!*\
  !*** ./src/pages/Product.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Product({ name , price , description  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/Product.jsx\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: price\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/Product.jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: description\n            }, void 0, false, {\n                fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/Product.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/Product.jsx\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvUHJvZHVjdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLFFBQVEsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRSxFQUFFO0lBRTVELHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFJSjs7Ozs7OzBCQUNMLDhEQUFDSzswQkFBSUo7Ozs7OzswQkFDTCw4REFBQ0s7MEJBQUdKOzs7Ozs7Ozs7Ozs7QUFHVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9va2F0Ly4vc3JjL3BhZ2VzL1Byb2R1Y3QuanN4PzY0Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdCh7IG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiB9KSB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntuYW1lfTwvaDE+XG4gICAgICA8aDI+e3ByaWNlfTwvaDI+XG4gICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJQcm9kdWN0IiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJoMSIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Product.jsx\n");

/***/ }),

/***/ "./src/pages/products.jsx":
/*!********************************!*\
  !*** ./src/pages/products.jsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Products)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ \"./src/pages/Product.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction Products() {\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    const getProducts = async ()=>{\n        let products = [];\n        const collectionArray = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"products\"));\n        collectionArray.forEach((doc)=>{\n            products.push({\n                ...doc.data(),\n                id: doc.id\n            });\n        });\n        setProducts(products);\n        console.log(products);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProducts();\n    }, []);\n    // ticketList way\n    // useEffect(() => {\n    //   const unSubscribe = onSnapshot(\n    //     collection(db, \"products\"),\n    //     (collectionSnapshot) => {\n    //       const products = [];\n    //       collectionSnapshot.forEach((doc) => {\n    //         products.push({\n    //           ...doc.data(),\n    //           id: doc.id\n    //         });\n    //       });\n    //       setProducts(products);\n    //     }\n    //   );\n    //   return () => unSubscribe();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: products.map((product)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: product.name,\n                    description: product.description\n                }, product.id, false, {\n                    fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n            lineNumber: 53,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQVNhO0FBQ1I7QUFFbkIsU0FBU1EsV0FBVztJQUVqQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxnRUFBZ0U7SUFFaEUsTUFBTVMsY0FBYyxVQUFZO1FBQzlCLElBQUlGLFdBQVcsRUFBRTtRQUNqQixNQUFNRyxrQkFBa0IsTUFBTVAsMkRBQU9BLENBQUNELDhEQUFVQSxDQUFDRCxpREFBRUEsRUFBRTtRQUNyRFMsZ0JBQWdCQyxPQUFPLENBQUMsQ0FBQ0MsTUFBUTtZQUMvQkwsU0FBU00sSUFBSSxDQUFDO2dCQUFDLEdBQUlELElBQUlFLElBQUksRUFBRTtnQkFBRUMsSUFBSUgsSUFBSUcsRUFBRTtZQUFBO1FBQzNDO1FBQ0FQLFlBQVlEO1FBQ1pTLFFBQVFDLEdBQUcsQ0FBQ1Y7SUFDZDtJQUVBUixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RVO0lBQ0YsR0FBRyxFQUFFO0lBRUwsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsOENBQThDO0lBQzlDLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLFFBQVE7SUFDUixPQUFPO0lBQ1AsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFFVixxQkFDRTtrQkFDQSw0RUFBQ1M7c0JBQ0FYLFNBQVNZLEdBQUcsQ0FBQyxDQUFDQyxVQUFZOzhCQUN6Qiw4REFBQ2YsZ0RBQU9BO29CQUVOZ0IsTUFBTUQsUUFBUUMsSUFBSTtvQkFDbEJDLGFBQWFGLFFBQVFFLFdBQVc7bUJBRjNCRixRQUFRTCxFQUFFOzs7OztZQUluQjs7Ozs7OztBQUlKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb29rYXQvLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4P2U4M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYiBmcm9tICcuLi9maXJlYmFzZSc7XG5pbXBvcnQgeyAgIFxuICBjb2xsZWN0aW9uLFxuICAvLyBxdWVyeSxcbiAgLy8gYWRkRG9jLFxuICAvLyBvblNuYXBzaG90LFxuICAvLyBkb2MsXG4gIC8vIHVwZGF0ZURvYyxcbiAgZ2V0RG9jcyxcbiAgb25TbmFwc2hvdCwgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG4gIGltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xuXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICAvLyBjb25zdCBbc2VsZWN0ZWRQcm9kdWN0LCBzZXRTZWxlY3RlZFByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHByb2R1Y3RzID0gW107XG4gICAgY29uc3QgY29sbGVjdGlvbkFycmF5ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInByb2R1Y3RzXCIpKTtcbiAgICBjb2xsZWN0aW9uQXJyYXkuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICBwcm9kdWN0cy5wdXNoKHsuLi4gZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZH0pO1xuICAgIH0pO1xuICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFByb2R1Y3RzKCk7XG4gIH0sIFtdKTtcblxuICAvLyB0aWNrZXRMaXN0IHdheVxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IHVuU3Vic2NyaWJlID0gb25TbmFwc2hvdChcbiAgLy8gICAgIGNvbGxlY3Rpb24oZGIsIFwicHJvZHVjdHNcIiksXG4gIC8vICAgICAoY29sbGVjdGlvblNuYXBzaG90KSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IHByb2R1Y3RzID0gW107XG4gIC8vICAgICAgIGNvbGxlY3Rpb25TbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgLy8gICAgICAgICBwcm9kdWN0cy5wdXNoKHtcbiAgLy8gICAgICAgICAgIC4uLmRvYy5kYXRhKCksXG4gIC8vICAgICAgICAgICBpZDogZG9jLmlkXG4gIC8vICAgICAgICAgfSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgICBzZXRQcm9kdWN0cyhwcm9kdWN0cyk7XG4gIC8vICAgICB9XG4gIC8vICAgKTtcbiAgLy8gICByZXR1cm4gKCkgPT4gdW5TdWJzY3JpYmUoKTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2PlxuICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgIDxQcm9kdWN0XG4gICAgICAgIGtleT17cHJvZHVjdC5pZH1cbiAgICAgICAgbmFtZT17cHJvZHVjdC5uYW1lfVxuICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgfSl9XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkYiIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwib25TbmFwc2hvdCIsIlByb2R1Y3QiLCJQcm9kdWN0cyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJnZXRQcm9kdWN0cyIsImNvbGxlY3Rpb25BcnJheSIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiZGF0YSIsImlkIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1hcCIsInByb2R1Y3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n");

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