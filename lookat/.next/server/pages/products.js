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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../firebase.js */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var reactfire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactfire */ \"reactfire\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_js__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, reactfire__WEBPACK_IMPORTED_MODULE_4__]);\n([_firebase_js__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, reactfire__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\"use client\";\n\n\n\n\n\nconst fetcher = (...args)=>fetch(...args).then((res)=>res.json());\nfunction Products() {\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [selectedProduct, setSelectedProduct] = useState(null);\n    // reactfire function to get our firestore instance\n    const firestore = (0,reactfire__WEBPACK_IMPORTED_MODULE_4__.useFirestore)();\n    const testCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(firestore, \"test\");\n    // use reactfire hook useFirestoreCollectionData to get our collection and deconstruct into data variable\n    const { status , data  } = (0,reactfire__WEBPACK_IMPORTED_MODULE_4__.useFirestoreCollectionData)(testCollection, {\n        idField: \"id\"\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/aitana/Documents/Epicodus/Projects/Lookat/lookat/src/pages/products.jsx\",\n            lineNumber: 24,\n            columnNumber: 14\n        }, this);\n    }\n    console.log(data);\n    // const getProducts = async () => {\n    //   let products = [];\n    //   const collectionArray = await getDocs(collection(db, \"test\"));\n    //   console.log(collectionArray);\n    //   collectionArray.forEach((doc) => {\n    //     // console.log(doc.id, \" => \", doc.data());\n    //     products.push({... doc.data(), id: doc.id});\n    //   });\n    //   setProductList(products);\n    //   console.log(productList);\n    // }\n    // useEffect(() => {\n    //   getProducts();\n    // }, []);\n    // ticketList way\n    // useEffect(() => {\n    //   const unSubscribe = onSnapshot(\n    //     collection(db, \"test\"),\n    //     (collectionSnapshot) => {\n    //       const products = [];\n    //       collectionSnapshot.forEach((doc) => {\n    //         products.push({\n    //           ... doc.data(),\n    //           id: doc.id\n    //         });\n    //       });\n    //       setProductList(products);\n    //     },\n    //     (error) => {\n    //       setError(error.message);\n    //     }\n    //   );\n    //   return () => unSubscribe();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRW1EO0FBQ2pCO0FBQ3VFO0FBQ3BDO0FBR3JFLE1BQU1hLFVBQVUsQ0FBQyxHQUFHQyxPQUFTQyxTQUFTRCxNQUFNRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUVsRSxTQUFTQyxXQUFXO0lBRWxCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHbkIsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxnRUFBZ0U7SUFFOUQsbURBQW1EO0lBQ25ELE1BQU1vQixZQUFZWCx1REFBWUE7SUFDOUIsTUFBTVksaUJBQWlCbkIsOERBQVVBLENBQUNrQixXQUFXO0lBRTdDLHlHQUF5RztJQUN6RyxNQUFNLEVBQUVFLE9BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdiLHFFQUEwQkEsQ0FBQ1csZ0JBQWdCO1FBQUVHLFNBQVM7SUFBSztJQUVwRixJQUFJRixXQUFXLFdBQVc7UUFDeEIscUJBQU8sOERBQUNHO3NCQUFFOzs7Ozs7SUFDWixDQUFDO0lBRURDLFFBQVFDLEdBQUcsQ0FBQ0o7SUFHZCxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLG1FQUFtRTtJQUVuRSxrQ0FBa0M7SUFDbEMsdUNBQXVDO0lBQ3ZDLGtEQUFrRDtJQUNsRCxtREFBbUQ7SUFDbkQsUUFBUTtJQUNSLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsSUFBSTtJQUVKLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsVUFBVTtJQUVWLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDhDQUE4QztJQUM5QywwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxRQUFRO0lBQ1IsT0FBTztJQUNQLGdDQUFnQztJQUNoQyxVQUFVO0lBRVYscUJBQ0U7QUFZSjtBQUVBLGlFQUFlTixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9va2F0Ly4vc3JjL3BhZ2VzL3Byb2R1Y3RzLmpzeD9lODNhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYiBmcm9tICcuLy4uL2ZpcmViYXNlLmpzJztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYywgb25TbmFwc2hvdCwgZG9jLCB1cGRhdGVEb2MsIGRlbGV0ZURvYywgZ2V0RG9jcyB9ICBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyB1c2VGaXJlc3RvcmUsIHVzZUZpcmVzdG9yZUNvbGxlY3Rpb25EYXRhIH0gZnJvbSAncmVhY3RmaXJlJztcblxuXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcblxuZnVuY3Rpb24gUHJvZHVjdHMoKSB7XG5cbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3QsIHNldFNlbGVjdGVkUHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8vIHJlYWN0ZmlyZSBmdW5jdGlvbiB0byBnZXQgb3VyIGZpcmVzdG9yZSBpbnN0YW5jZVxuICAgIGNvbnN0IGZpcmVzdG9yZSA9IHVzZUZpcmVzdG9yZSgpO1xuICAgIGNvbnN0IHRlc3RDb2xsZWN0aW9uID0gY29sbGVjdGlvbihmaXJlc3RvcmUsICd0ZXN0Jyk7XG5cbiAgICAvLyB1c2UgcmVhY3RmaXJlIGhvb2sgdXNlRmlyZXN0b3JlQ29sbGVjdGlvbkRhdGEgdG8gZ2V0IG91ciBjb2xsZWN0aW9uIGFuZCBkZWNvbnN0cnVjdCBpbnRvIGRhdGEgdmFyaWFibGVcbiAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gdXNlRmlyZXN0b3JlQ29sbGVjdGlvbkRhdGEodGVzdENvbGxlY3Rpb24sIHsgaWRGaWVsZDogJ2lkJyB9KTtcblxuICAgIGlmIChzdGF0dXMgPT09ICdsb2FkaW5nJykge1xuICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG5cbiAgLy8gY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgbGV0IHByb2R1Y3RzID0gW107XG4gIC8vICAgY29uc3QgY29sbGVjdGlvbkFycmF5ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInRlc3RcIikpO1xuICAgIFxuICAvLyAgIGNvbnNvbGUubG9nKGNvbGxlY3Rpb25BcnJheSk7XG4gIC8vICAgY29sbGVjdGlvbkFycmF5LmZvckVhY2goKGRvYykgPT4ge1xuICAvLyAgICAgLy8gY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gIC8vICAgICBwcm9kdWN0cy5wdXNoKHsuLi4gZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZH0pO1xuICAvLyAgIH0pO1xuICAvLyAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RzKTtcbiAgLy8gICBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdCk7XG4gIC8vIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldFByb2R1Y3RzKCk7XG4gIC8vIH0sIFtdKTtcblxuICAvLyB0aWNrZXRMaXN0IHdheVxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IHVuU3Vic2NyaWJlID0gb25TbmFwc2hvdChcbiAgLy8gICAgIGNvbGxlY3Rpb24oZGIsIFwidGVzdFwiKSxcbiAgLy8gICAgIChjb2xsZWN0aW9uU25hcHNob3QpID0+IHtcbiAgLy8gICAgICAgY29uc3QgcHJvZHVjdHMgPSBbXTtcbiAgLy8gICAgICAgY29sbGVjdGlvblNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAvLyAgICAgICAgIHByb2R1Y3RzLnB1c2goe1xuICAvLyAgICAgICAgICAgLi4uIGRvYy5kYXRhKCksXG4gIC8vICAgICAgICAgICBpZDogZG9jLmlkXG4gIC8vICAgICAgICAgfSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0cyk7XG4gIC8vICAgICB9LFxuICAvLyAgICAgKGVycm9yKSA9PiB7XG4gIC8vICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAvLyAgICAgfVxuICAvLyAgICk7XG4gIC8vICAgcmV0dXJuICgpID0+IHVuU3Vic2NyaWJlKCk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgey8qIDxkaXY+XG4gICAge3Byb2R1Y3RMaXN0Lm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgPFByb2R1Y3RcbiAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICBuYW1lPXtwcm9kdWN0Lm5hbWV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICB9KX1cbiAgICA8L2Rpdj4gKi99XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGIiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwib25TbmFwc2hvdCIsImRvYyIsInVwZGF0ZURvYyIsImRlbGV0ZURvYyIsImdldERvY3MiLCJ1c2VGaXJlc3RvcmUiLCJ1c2VGaXJlc3RvcmVDb2xsZWN0aW9uRGF0YSIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIlByb2R1Y3RzIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsImZpcmVzdG9yZSIsInRlc3RDb2xsZWN0aW9uIiwic3RhdHVzIiwiZGF0YSIsImlkRmllbGQiLCJwIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products.jsx\n");

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

/***/ }),

/***/ "reactfire":
/*!****************************!*\
  !*** external "reactfire" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("reactfire");;

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