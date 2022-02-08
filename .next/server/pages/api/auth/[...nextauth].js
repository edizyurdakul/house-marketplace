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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/fauna-adapter":
/*!*******************************************!*\
  !*** external "@next-auth/fauna-adapter" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@next-auth/fauna-adapter");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _next_auth_fauna_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/fauna-adapter */ \"@next-auth/fauna-adapter\");\n/* harmony import */ var _next_auth_fauna_adapter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_auth_fauna_adapter__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst client = new faunadb__WEBPACK_IMPORTED_MODULE_1__.Client({\n    secret: \"fnAEe1RGZ9AAQkzOEJuLucqMHTU4TNHxBjakwVjl\",\n    scheme: \"http\",\n    domain: \"localhost\",\n    port: 8443\n});\n// For more information on each option (and a full list of options) go to\n// https://next-auth.js.org/configuration/options\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // https://next-auth.js.org/providers/overview\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            // The name to display on the sign in form (e.g. \"Sign in with...\")\n            name: \"Credentials\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                // Add logic here to look up the user from the credentials supplied\n                const user = {\n                    id: 1,\n                    name: \"J Smith\",\n                    email: \"jsmith@example.com\"\n                };\n                if (user) {\n                    // Any object returned will be saved in `user` property of the JWT\n                    return user;\n                } else {\n                    // If you return null then an error will be displayed advising the user to check their details.\n                    return null;\n                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter\n                }\n            }\n        }), \n    ],\n    pages: {\n        signIn: \"/auth/signin\",\n        signOut: \"/auth/signout\",\n        error: \"/auth/error\",\n        verifyRequest: \"/auth/verify-request\"\n    },\n    adapter: (0,_next_auth_fauna_adapter__WEBPACK_IMPORTED_MODULE_3__.FaunaAdapter)(client)\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUNlO0FBQ2tCO0FBQ1Y7QUFFdkQsS0FBSyxDQUFDSyxNQUFNLEdBQUcsR0FBRyxDQUFDSCwyQ0FBVyxDQUFDLENBQUM7SUFDOUJJLE1BQU0sRUFBRSxDQUEwQztJQUNsREMsTUFBTSxFQUFFLENBQU07SUFDZEMsTUFBTSxFQUFFLENBQVc7SUFDbkJDLElBQUksRUFBRSxJQUFJO0FBQ1osQ0FBQztBQUVELEVBQXlFO0FBQ3pFLEVBQWlEO0FBQ2pELGlFQUFlVCxnREFBUSxDQUFDLENBQUM7SUFDdkIsRUFBOEM7SUFDOUNVLFNBQVMsRUFBRSxDQUFDO1FBQ1ZQLHNFQUFtQixDQUFDLENBQUM7WUFDbkIsRUFBbUU7WUFDbkVRLElBQUksRUFBRSxDQUFhO1lBQ25CLEVBQTJFO1lBQzNFLEVBQXFFO1lBQ3JFLEVBQW1EO1lBQ25ELEVBQXlFO1lBQ3pFQyxXQUFXLEVBQUUsQ0FBQztnQkFDWkMsUUFBUSxFQUFFLENBQUM7b0JBQUNDLEtBQUssRUFBRSxDQUFVO29CQUFFQyxJQUFJLEVBQUUsQ0FBTTtvQkFBRUMsV0FBVyxFQUFFLENBQVE7Z0JBQUMsQ0FBQztnQkFDcEVDLFFBQVEsRUFBRSxDQUFDO29CQUFDSCxLQUFLLEVBQUUsQ0FBVTtvQkFBRUMsSUFBSSxFQUFFLENBQVU7Z0JBQUMsQ0FBQztZQUNuRCxDQUFDO2tCQUNLRyxTQUFTLEVBQUNOLFdBQVcsRUFBRU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2pDLEVBQW1FO2dCQUNuRSxLQUFLLENBQUNDLElBQUksR0FBRyxDQUFDO29CQUFDQyxFQUFFLEVBQUUsQ0FBQztvQkFBRVYsSUFBSSxFQUFFLENBQVM7b0JBQUVXLEtBQUssRUFBRSxDQUFvQjtnQkFBQyxDQUFDO2dCQUVwRSxFQUFFLEVBQUVGLElBQUksRUFBRSxDQUFDO29CQUNULEVBQWtFO29CQUNsRSxNQUFNLENBQUNBLElBQUk7Z0JBQ2IsQ0FBQyxNQUFNLENBQUM7b0JBQ04sRUFBK0Y7b0JBQy9GLE1BQU0sQ0FBQyxJQUFJO2dCQUVYLEVBQTJJO2dCQUM3SSxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0RHLEtBQUssRUFBRSxDQUFDO1FBQ05DLE1BQU0sRUFBRSxDQUFjO1FBQ3RCQyxPQUFPLEVBQUUsQ0FBZTtRQUN4QkMsS0FBSyxFQUFFLENBQWE7UUFDcEJDLGFBQWEsRUFBRSxDQUFzQjtJQUN2QyxDQUFDO0lBQ0RDLE9BQU8sRUFBRXhCLHNFQUFZLENBQUNDLE1BQU07QUFDOUIsQ0FBQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3VzZS1tYXJrZXRwbGFjZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgeyBDbGllbnQgYXMgRmF1bmFDbGllbnQgfSBmcm9tIFwiZmF1bmFkYlwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBGYXVuYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9mYXVuYS1hZGFwdGVyXCI7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgRmF1bmFDbGllbnQoe1xyXG4gIHNlY3JldDogXCJmbkFFZTFSR1o5QUFRa3pPRUp1THVjcU1IVFU0VE5IeEJqYWt3VmpsXCIsXHJcbiAgc2NoZW1lOiBcImh0dHBcIixcclxuICBkb21haW46IFwibG9jYWxob3N0XCIsXHJcbiAgcG9ydDogODQ0MyxcclxufSk7XHJcblxyXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBlYWNoIG9wdGlvbiAoYW5kIGEgZnVsbCBsaXN0IG9mIG9wdGlvbnMpIGdvIHRvXHJcbi8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL29wdGlvbnNcclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9wcm92aWRlcnMvb3ZlcnZpZXdcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAvLyBUaGUgbmFtZSB0byBkaXNwbGF5IG9uIHRoZSBzaWduIGluIGZvcm0gKGUuZy4gXCJTaWduIGluIHdpdGguLi5cIilcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICAvLyBUaGUgY3JlZGVudGlhbHMgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIHN1aXRhYmxlIGZvcm0gb24gdGhlIHNpZ24gaW4gcGFnZS5cclxuICAgICAgLy8gWW91IGNhbiBzcGVjaWZ5IHdoYXRldmVyIGZpZWxkcyB5b3UgYXJlIGV4cGVjdGluZyB0byBiZSBzdWJtaXR0ZWQuXHJcbiAgICAgIC8vIGUuZy4gZG9tYWluLCB1c2VybmFtZSwgcGFzc3dvcmQsIDJGQSB0b2tlbiwgZXRjLlxyXG4gICAgICAvLyBZb3UgY2FuIHBhc3MgYW55IEhUTUwgYXR0cmlidXRlIHRvIHRoZSA8aW5wdXQ+IHRhZyB0aHJvdWdoIHRoZSBvYmplY3QuXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwiVXNlcm5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcImpzbWl0aFwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XHJcbiAgICAgICAgLy8gQWRkIGxvZ2ljIGhlcmUgdG8gbG9vayB1cCB0aGUgdXNlciBmcm9tIHRoZSBjcmVkZW50aWFscyBzdXBwbGllZFxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7IGlkOiAxLCBuYW1lOiBcIkogU21pdGhcIiwgZW1haWw6IFwianNtaXRoQGV4YW1wbGUuY29tXCIgfTtcclxuXHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgIC8vIEFueSBvYmplY3QgcmV0dXJuZWQgd2lsbCBiZSBzYXZlZCBpbiBgdXNlcmAgcHJvcGVydHkgb2YgdGhlIEpXVFxyXG4gICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIElmIHlvdSByZXR1cm4gbnVsbCB0aGVuIGFuIGVycm9yIHdpbGwgYmUgZGlzcGxheWVkIGFkdmlzaW5nIHRoZSB1c2VyIHRvIGNoZWNrIHRoZWlyIGRldGFpbHMuXHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAvLyBZb3UgY2FuIGFsc28gUmVqZWN0IHRoaXMgY2FsbGJhY2sgd2l0aCBhbiBFcnJvciB0aHVzIHRoZSB1c2VyIHdpbGwgYmUgc2VudCB0byB0aGUgZXJyb3IgcGFnZSB3aXRoIHRoZSBlcnJvciBtZXNzYWdlIGFzIGEgcXVlcnkgcGFyYW1ldGVyXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBcIi9hdXRoL3NpZ25pblwiLFxyXG4gICAgc2lnbk91dDogXCIvYXV0aC9zaWdub3V0XCIsXHJcbiAgICBlcnJvcjogXCIvYXV0aC9lcnJvclwiLCAvLyBFcnJvciBjb2RlIHBhc3NlZCBpbiBxdWVyeSBzdHJpbmcgYXMgP2Vycm9yPVxyXG4gICAgdmVyaWZ5UmVxdWVzdDogXCIvYXV0aC92ZXJpZnktcmVxdWVzdFwiLCAvLyAodXNlZCBmb3IgY2hlY2sgZW1haWwgbWVzc2FnZSlcclxuICB9LFxyXG4gIGFkYXB0ZXI6IEZhdW5hQWRhcHRlcihjbGllbnQpLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ2xpZW50IiwiRmF1bmFDbGllbnQiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiRmF1bmFBZGFwdGVyIiwiY2xpZW50Iiwic2VjcmV0Iiwic2NoZW1lIiwiZG9tYWluIiwicG9ydCIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsInVzZXIiLCJpZCIsImVtYWlsIiwicGFnZXMiLCJzaWduSW4iLCJzaWduT3V0IiwiZXJyb3IiLCJ2ZXJpZnlSZXF1ZXN0IiwiYWRhcHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();