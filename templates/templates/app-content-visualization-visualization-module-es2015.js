(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-visualization-visualization-module"],{

/***/ "./src/app/content/visualization/visualization.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/content/visualization/visualization.module.ts ***!
  \***************************************************************/
/*! exports provided: VisualizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationModule", function() { return VisualizationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        loadChildren: './charts/the-charts.module#TheChartsModule'
    },
    {
        path: 'charts',
        loadChildren: './charts/the-charts.module#TheChartsModule'
    },
    {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
    }
];
let VisualizationModule = class VisualizationModule {
};
VisualizationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: []
    })
], VisualizationModule);



/***/ })

}]);
//# sourceMappingURL=app-content-visualization-visualization-module-es2015.js.map