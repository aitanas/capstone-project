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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Products)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ \"./src/pages/Product.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction Products() {\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    const getProducts = async ()=>{\n        let products = [];\n        const collectionArray = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"products\"));\n        collectionArray.forEach((doc)=>{\n            products.push({\n                ...doc.data(),\n                id: doc.id\n            });\n        });\n        console.log(collectionArray);\n        setProducts(products);\n        console.log(products);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProducts();\n    }, []);\n    // ticketList way\n    // useEffect(() => {\n    //   const unSubscribe = onSnapshot(\n    //     collection(db, \"products\"),\n    //     (collectionSnapshot) => {\n    //       const products = [];\n    //       collectionSnapshot.forEach((doc) => {\n    //         products.push({\n    //           ...doc.data(),\n    //           id: doc.id\n    //         });\n    //       });\n    //       setProducts(products);\n    //     }\n    //   );\n    //   return () => unSubscribe();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: products.map((product)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: product.name,\n                    description: product.description\n                }, product.id, false, {\n                    fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n            lineNumber: 54,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQVNhO0FBQ1I7QUFFbkIsU0FBU1EsV0FBVztJQUVqQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxnRUFBZ0U7SUFFaEUsTUFBTVMsY0FBYyxVQUFZO1FBQzlCLElBQUlGLFdBQVcsRUFBRTtRQUNqQixNQUFNRyxrQkFBa0IsTUFBTVAsMkRBQU9BLENBQUNELDhEQUFVQSxDQUFDRCxpREFBRUEsRUFBRTtRQUNyRFMsZ0JBQWdCQyxPQUFPLENBQUMsQ0FBQ0MsTUFBUTtZQUMvQkwsU0FBU00sSUFBSSxDQUFDO2dCQUFDLEdBQUlELElBQUlFLElBQUksRUFBRTtnQkFBRUMsSUFBSUgsSUFBSUcsRUFBRTtZQUFBO1FBQzNDO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQ1A7UUFDWkYsWUFBWUQ7UUFDWlMsUUFBUUMsR0FBRyxDQUFDVjtJQUNkO0lBRUFSLGdEQUFTQSxDQUFDLElBQU07UUFDZFU7SUFDRixHQUFHLEVBQUU7SUFFTCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qiw4Q0FBOEM7SUFDOUMsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsUUFBUTtJQUNSLE9BQU87SUFDUCxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUVWLHFCQUNFO2tCQUNBLDRFQUFDUztzQkFDQVgsU0FBU1ksR0FBRyxDQUFDLENBQUNDLFVBQVk7OEJBQ3pCLDhEQUFDZixnREFBT0E7b0JBRU5nQixNQUFNRCxRQUFRQyxJQUFJO29CQUNsQkMsYUFBYUYsUUFBUUUsV0FBVzttQkFGM0JGLFFBQVFMLEVBQUU7Ozs7O1lBSW5COzs7Ozs7O0FBSUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvb2thdC8uL3NyYy9wYWdlcy9wcm9kdWN0cy5qc3g/ZTgzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRiIGZyb20gJy4uL2ZpcmViYXNlJztcbmltcG9ydCB7ICAgXG4gIGNvbGxlY3Rpb24sXG4gIC8vIHF1ZXJ5LFxuICAvLyBhZGREb2MsXG4gIC8vIG9uU25hcHNob3QsXG4gIC8vIGRvYyxcbiAgLy8gdXBkYXRlRG9jLFxuICBnZXREb2NzLFxuICBvblNuYXBzaG90LCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbiAgaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XG5cbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3QsIHNldFNlbGVjdGVkUHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcHJvZHVjdHMgPSBbXTtcbiAgICBjb25zdCBjb2xsZWN0aW9uQXJyYXkgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwicHJvZHVjdHNcIikpO1xuICAgIGNvbGxlY3Rpb25BcnJheS5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgIHByb2R1Y3RzLnB1c2goey4uLiBkb2MuZGF0YSgpLCBpZDogZG9jLmlkfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coY29sbGVjdGlvbkFycmF5KTtcbiAgICBzZXRQcm9kdWN0cyhwcm9kdWN0cyk7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQcm9kdWN0cygpO1xuICB9LCBbXSk7XG5cbiAgLy8gdGlja2V0TGlzdCB3YXlcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCB1blN1YnNjcmliZSA9IG9uU25hcHNob3QoXG4gIC8vICAgICBjb2xsZWN0aW9uKGRiLCBcInByb2R1Y3RzXCIpLFxuICAvLyAgICAgKGNvbGxlY3Rpb25TbmFwc2hvdCkgPT4ge1xuICAvLyAgICAgICBjb25zdCBwcm9kdWN0cyA9IFtdO1xuICAvLyAgICAgICBjb2xsZWN0aW9uU25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gIC8vICAgICAgICAgcHJvZHVjdHMucHVzaCh7XG4gIC8vICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxuICAvLyAgICAgICAgICAgaWQ6IGRvYy5pZFxuICAvLyAgICAgICAgIH0pO1xuICAvLyAgICAgICB9KTtcbiAgLy8gICAgICAgc2V0UHJvZHVjdHMocHJvZHVjdHMpO1xuICAvLyAgICAgfVxuICAvLyAgICk7XG4gIC8vICAgcmV0dXJuICgpID0+IHVuU3Vic2NyaWJlKCk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdj5cbiAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgICA8UHJvZHVjdFxuICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgIG5hbWU9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgZGVzY3JpcHRpb249e3Byb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgIH0pfVxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGIiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsIm9uU25hcHNob3QiLCJQcm9kdWN0IiwiUHJvZHVjdHMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZ2V0UHJvZHVjdHMiLCJjb2xsZWN0aW9uQXJyYXkiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJwcm9kdWN0IiwibmFtZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n");

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