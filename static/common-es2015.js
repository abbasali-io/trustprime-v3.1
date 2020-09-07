(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/content/apps/drawer.service.ts":
/*!************************************************!*\
  !*** ./src/app/content/apps/drawer.service.ts ***!
  \************************************************/
/*! exports provided: DrawerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerService", function() { return DrawerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let DrawerService = class DrawerService {
    constructor() {
        this.onDrawerChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        const drawer = {
            isOpen: false,
            activeMenu: ''
        };
        this.onDrawerChanged.next(drawer);
    }
    /**
     * Update
     * @param drawer
     */
    update(drawer) {
        this.onDrawerChanged.next(drawer);
    }
};
DrawerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DrawerService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map