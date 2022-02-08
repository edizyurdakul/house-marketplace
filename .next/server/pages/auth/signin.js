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
exports.id = "pages/auth/signin";
exports.ids = ["pages/auth/signin"];
exports.modules = {

/***/ "./pages/auth/signin.js":
/*!******************************!*\
  !*** ./pages/auth/signin.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignIn),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction SignIn({ csrfToken  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"post\",\n        action: \"/api/auth/callback/credentials\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"csrfToken\",\n                type: \"hidden\",\n                defaultValue: csrfToken\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PWSEY\\\\Desktop\\\\Projects\\\\house-marketplace\\\\pages\\\\auth\\\\signin.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Username\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"username\",\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PWSEY\\\\Desktop\\\\Projects\\\\house-marketplace\\\\pages\\\\auth\\\\signin.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PWSEY\\\\Desktop\\\\Projects\\\\house-marketplace\\\\pages\\\\auth\\\\signin.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Password\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"password\",\n                        type: \"password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PWSEY\\\\Desktop\\\\Projects\\\\house-marketplace\\\\pages\\\\auth\\\\signin.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PWSEY\\\\Desktop\\\\Projects\\\\house-marketplace\\\\pages\\\\auth\\\\signin.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PWSEY\\\\Desktop\\\\Projects\\\\house-marketplace\\\\pages\\\\auth\\\\signin.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PWSEY\\\\Desktop\\\\Projects\\\\house-marketplace\\\\pages\\\\auth\\\\signin.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n};\n// This is the recommended way for Next.js 9.3 or newer\nasync function getServerSideProps(context) {\n    return {\n        props: {\n            csrfToken: await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getCsrfToken)(context)\n        }\n    };\n} /*\r\n// If older than Next.js 9.3\r\nSignIn.getInitialProps = async (context) => {\r\n  return {\r\n    csrfToken: await getCsrfToken(context)\r\n  }\r\n}\r\n*/ \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25pbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBRS9CLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdDLE1BQU0sNkVBQ0hDLENBQUk7UUFBQ0MsTUFBTSxFQUFDLENBQU07UUFBQ0MsTUFBTSxFQUFDLENBQWdDOzt3RkFDeERDLENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFXO2dCQUFDQyxJQUFJLEVBQUMsQ0FBUTtnQkFBQ0MsWUFBWSxFQUFFUCxTQUFTOzs7Ozs7d0ZBQzVEUSxDQUFLOztvQkFBQyxDQUVMO2dHQUFDSixDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTt3QkFBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozs7Ozs7Ozt3RkFFbkNFLENBQUs7O29CQUFDLENBRUw7Z0dBQUNKLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFVO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTs7Ozs7Ozs7Ozs7O3dGQUV2Q0csQ0FBTTtnQkFBQ0gsSUFBSSxFQUFDLENBQVE7MEJBQUMsQ0FBTzs7Ozs7Ozs7Ozs7O0FBR25DLENBQUM7QUFFRCxFQUF1RDtBQUNoRCxlQUFlSSxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7SUFDakQsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFDTlosU0FBUyxFQUFFLEtBQUssQ0FBQ0YsNkRBQVksQ0FBQ2EsT0FBTztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FTQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvdXNlLW1hcmtldHBsYWNlLy4vcGFnZXMvYXV0aC9zaWduaW4uanM/ZDM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDc3JmVG9rZW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oeyBjc3JmVG9rZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiL2FwaS9hdXRoL2NhbGxiYWNrL2NyZWRlbnRpYWxzXCI+XHJcbiAgICAgIDxpbnB1dCBuYW1lPVwiY3NyZlRva2VuXCIgdHlwZT1cImhpZGRlblwiIGRlZmF1bHRWYWx1ZT17Y3NyZlRva2VufSAvPlxyXG4gICAgICA8bGFiZWw+XHJcbiAgICAgICAgVXNlcm5hbWVcclxuICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8bGFiZWw+XHJcbiAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICA8aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgdGhlIHJlY29tbWVuZGVkIHdheSBmb3IgTmV4dC5qcyA5LjMgb3IgbmV3ZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNzcmZUb2tlbjogYXdhaXQgZ2V0Q3NyZlRva2VuKGNvbnRleHQpLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4vKlxyXG4vLyBJZiBvbGRlciB0aGFuIE5leHQuanMgOS4zXHJcblNpZ25Jbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjc3JmVG9rZW46IGF3YWl0IGdldENzcmZUb2tlbihjb250ZXh0KVxyXG4gIH1cclxufVxyXG4qL1xyXG4iXSwibmFtZXMiOlsiZ2V0Q3NyZlRva2VuIiwiU2lnbkluIiwiY3NyZlRva2VuIiwiZm9ybSIsIm1ldGhvZCIsImFjdGlvbiIsImlucHV0IiwibmFtZSIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJsYWJlbCIsImJ1dHRvbiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/signin.js\n");

/***/ }),

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signin.js"));
module.exports = __webpack_exports__;

})();