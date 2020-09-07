(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-extra-views-extra-views-module"],{

/***/ "./src/app/content/extra-views/extra-views.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/content/extra-views/extra-views.module.ts ***!
  \***********************************************************/
/*! exports provided: ExtraViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraViewsModule", function() { return ExtraViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: 'grid-view',
        loadChildren: './grid-views/grid-views.module#GridViewsModule'
    },
    {
        path: 'list-view',
        loadChildren: './list-views/list-views.module#ListViewsModule'
    }
];
let ExtraViewsModule = class ExtraViewsModule {
};
ExtraViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: []
    })
], ExtraViewsModule);



/***/ })

}]);
//# sourceMappingURL=app-content-extra-views-extra-views-module-es2015.js.map