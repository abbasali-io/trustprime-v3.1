(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-pages-frontend-error-error-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/frontend/error/page-not-found/page-not-found.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/frontend/error/page-not-found/page-not-found.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"error-page text-center\">\r\n    <!-- Title -->\r\n    <h1 class=\"title\">404</h1>\r\n    <!-- /title -->\r\n\r\n    <p class=\"display-2 text-dark mb-7\">Sorry! The page not found</p>\r\n    <p class=\"mb-10\">The Link You Followed Probably Broken, or the page has been removed.</p>\r\n\r\n    <!-- Search Box -->\r\n    <form class=\"search-box right-side-icon\">\r\n        <input class=\"form-control form-control-lg\" type=\"search\" id=\"address\" name=\"address\" placeholder=\"Search in app...\">\r\n        <button type=\"submit\" class=\"search-icon\">\r\n            <gx-icon name=\"search\" size=\"lg\"></gx-icon>\r\n        </button>\r\n    </form>\r\n    <!-- /search box -->\r\n\r\n    <!---->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/frontend/error/server-error/server-error.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/frontend/error/server-error/server-error.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 404 Page -->\r\n<div class=\"error-page text-center\">\r\n    <!-- Title -->\r\n    <h1 class=\"title\">500</h1>\r\n    <!-- /title -->\r\n\r\n    <p class=\"display-2 text-dark mb-7\">Sorry! The page not found</p>\r\n    <p class=\"mb-10\">The Link You Followed Probably Broken, or the page has been removed.</p>\r\n\r\n    <!-- Search Box -->\r\n    <form class=\"search-box right-side-icon\">\r\n        <input class=\"form-control form-control-lg\" type=\"search\" id=\"address\" name=\"address\"\r\n               placeholder=\"Search in app...\">\r\n        <button type=\"submit\" class=\"search-icon\">\r\n            <gx-icon name=\"search\" size=\"lg\"></gx-icon>\r\n        </button>\r\n    </form>\r\n    <!-- /search box -->\r\n</div>\r\n<!-- /404 page -->\r\n\r\n");

/***/ }),

/***/ "./src/app/content/pages/frontend/error/error-page.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/pages/frontend/error/error-page.module.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageModule", function() { return ErrorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/content/pages/frontend/error/page-not-found/page-not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/content/pages/frontend/error/server-error/server-error.component.ts");








const frontendRoutes = [
    {
        path: '404',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    },
    {
        path: '500',
        component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_7__["ServerErrorComponent"]
    }
];
let ErrorPageModule = class ErrorPageModule {
};
ErrorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__["NgProgressModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(frontendRoutes)
        ],
        declarations: [
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
            _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_7__["ServerErrorComponent"]
        ]
    })
], ErrorPageModule);



/***/ }),

/***/ "./src/app/content/pages/frontend/error/page-not-found/page-not-found.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/pages/frontend/error/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() {
        this.classlist = 'dt-page--container';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], PageNotFoundComponent.prototype, "classlist", void 0);
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/frontend/error/page-not-found/page-not-found.component.html")).default
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/content/pages/frontend/error/server-error/server-error.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/frontend/error/server-error/server-error.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServerErrorComponent = class ServerErrorComponent {
    constructor() {
        this.classlist = 'dt-page--container';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], ServerErrorComponent.prototype, "classlist", void 0);
ServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-server-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./server-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/frontend/error/server-error/server-error.component.html")).default
    })
], ServerErrorComponent);



/***/ })

}]);
//# sourceMappingURL=app-content-pages-frontend-error-error-page-module-es2015.js.map