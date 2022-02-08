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
exports.id = "pages/api/auth/signin";
exports.ids = ["pages/api/auth/signin"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "(api)/./pages/api/auth/signin.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignIn),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction SignIn({ providers  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id)\n                    ,\n                    children: [\n                        \"Sign in with \",\n                        provider.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PWSEY\\\\Desktop\\\\Projects\\\\house-marketplace\\\\pages\\\\api\\\\auth\\\\signin.js\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, this)\n            }, provider.name, false, {\n                fileName: \"C:\\\\Users\\\\PWSEY\\\\Desktop\\\\Projects\\\\house-marketplace\\\\pages\\\\api\\\\auth\\\\signin.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        )\n    }, void 0, false));\n};\nasync function getServerSideProps(context) {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    console.log(providers);\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzRDtBQUV2QyxRQUFRLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUNDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUM3QyxNQUFNO2tCQUVEQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0YsU0FBUyxFQUFFRyxHQUFHLEVBQUVDLFFBQVEsK0VBQ3BDQyxDQUFHO3NHQUNEQyxDQUFNO29CQUFDQyxPQUFPLE1BQVFULHVEQUFNLENBQUNNLFFBQVEsQ0FBQ0ksRUFBRTs7O3dCQUFHLENBQzdCO3dCQUFDSixRQUFRLENBQUNLLElBQUk7Ozs7Ozs7ZUFGckJMLFFBQVEsQ0FBQ0ssSUFBSTs7Ozs7OztBQVEvQixDQUFDO0FBRU0sZUFBZUMsa0JBQWtCLENBQUNDLE9BQU8sRUFBRSxDQUFDO0lBQ2pELEtBQUssQ0FBQ1gsU0FBUyxHQUFHLEtBQUssQ0FBQ0gsNkRBQVk7SUFDcENlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixTQUFTO0lBQ3JCLE1BQU0sQ0FBQyxDQUFDO1FBQ05jLEtBQUssRUFBRSxDQUFDO1lBQUNkLFNBQVM7UUFBQyxDQUFDO0lBQ3RCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG91c2UtbWFya2V0cGxhY2UvLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4uanM/OGIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm92aWRlcnMsIHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25Jbih7IHByb3ZpZGVycyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKChwcm92aWRlcikgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtwcm92aWRlci5uYW1lfT5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKHByb3ZpZGVyLmlkKX0+XHJcbiAgICAgICAgICAgIFNpZ24gaW4gd2l0aCB7cHJvdmlkZXIubmFtZX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHByb3ZpZGVycyA9IGF3YWl0IGdldFByb3ZpZGVycygpO1xyXG4gIGNvbnNvbGUubG9nKHByb3ZpZGVycyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHByb3ZpZGVycyB9LFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldFByb3ZpZGVycyIsInNpZ25JbiIsIlNpZ25JbiIsInByb3ZpZGVycyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImlkIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signin.js"));
module.exports = __webpack_exports__;

})();