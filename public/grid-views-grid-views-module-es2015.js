(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-views-grid-views-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-views/grid-views/advanced-grid/advanced-grid.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-views/grid-views/advanced-grid/advanced-grid.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Advance Grid View</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-md-4 col-sm-6 col-12\" *ngFor=\"let property of realestates; index as i; first as isFirst\">\r\n\r\n    <!-- Card -->\r\n    <gx-grid>\r\n      <!-- Slider Header -->\r\n      <gx-grid-header>\r\n        <gx-slider class=\"card-img-top\">\r\n          <gx-slider-header>\r\n            <span *ngIf=\"property.is_featured\" class=\"badge bg-orange text-white text-uppercase\">featured</span>\r\n\r\n            <!-- Checkbox -->\r\n            <div class=\"dt-checkbox dt-checkbox-icon dt-checkbox-only\">\r\n              <input id=\"checkbox-{{i}}\" type=\"checkbox\" [ngModel]=\"property.favourite\">\r\n              <label class=\"font-weight-light dt-checkbox-content\" for=\"checkbox-{{i}}\">\r\n                <span class=\"unchecked\"><gx-icon name=\"heart-o\" class=\"text-white\"></gx-icon></span>\r\n                <span class=\"checked\"><gx-icon name=\"heart\" class=\"text-white\"></gx-icon></span>\r\n              </label>\r\n            </div>\r\n            <!-- /checkbox -->\r\n          </gx-slider-header>\r\n\r\n          <!-- Slider Carouse -->\r\n          <slideshow [imageUrls]=\"property.imageUrls\"\r\n                     [showArrows]=\"false\"\r\n                     [showDots]=\"true\"\r\n                     [minHeight]=\"'160px'\"\r\n                     [lazyLoad]=\"true\">\r\n          </slideshow>\r\n          <!-- /Slider Carouse -->\r\n        </gx-slider>\r\n\r\n      </gx-grid-header>\r\n      <!-- /slider header -->\r\n\r\n      <!-- Badges -->\r\n      <span class=\"badge text-uppercase mb-2\"\r\n            [ngClass]=\"{'badge-secondary':property.for==='For sale', 'bg-orange text-white':property.for!=='For sale'}\">{{property.for}}</span>\r\n      <!-- /badges -->\r\n\r\n      <!-- Card Title-->\r\n      <h2 class=\"card-title text-truncate\">{{property.title}}</h2>\r\n      <!-- Card Title-->\r\n\r\n      <!-- Card Sub Title-->\r\n      <h4 class=\"card-subtitle\">{{property.location}}</h4>\r\n      <!-- /card sub title-->\r\n\r\n      <!-- Content Area -->\r\n      <div class=\"d-flex flex-wrap mb-4\">\r\n        <div class=\"pr-3\">Bedrooms: <span class=\"text-dark\">{{property.bedrooms}}</span></div>\r\n        <div>Area: <span class=\"text-dark\" [innerHTML]=\"property.area\"></span></div>\r\n      </div>\r\n      <!-- /content area -->\r\n\r\n      <!-- Pricing -->\r\n      <div class=\"price mb-4\">\r\n        <span class=\"d-block text-orange font-weight-500 display-5\">{{property.price|currency:'USD':'symbol-narrow':'4.0-2'}}</span>\r\n        <span class=\"d-inline-block text-light-gray f-12\">{{symbol+property.unit}}</span>\r\n      </div>\r\n      <!-- /pricing -->\r\n\r\n      <!-- card Link -->\r\n      <a class=\"card-link\" href=\"javascript:void(0)\">\r\n        Check Detail\r\n        <gx-icon name=\"double-arrow-right\"></gx-icon>\r\n      </a>\r\n      <!-- card Link -->\r\n\r\n      <gx-grid-footer>\r\n        <span class=\"d-inline-block mr-3\"><gx-icon name=\"user\" [fw]=\"true\"></gx-icon> {{property.author}}</span>\r\n        <span class=\"d-inline-block\"><gx-icon name=\"calendar\" [fw]=\"true\"></gx-icon> {{property.posted}}</span>\r\n      </gx-grid-footer>\r\n    </gx-grid>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- Grid Item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-views/grid-views/basic-grid/basic-grid.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-views/grid-views/basic-grid/basic-grid.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Grid View</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div *ngFor=\"let user of usersList; index as i; first as isFirst\" class=\"col-xl-3 col-md-4 col-sm-6 col-12\">\r\n\r\n    <!-- Card -->\r\n    <gx-grid>\r\n      <!-- User Avatar-->\r\n      <img class=\"dt-avatar size-60\" [src]=\"user.picture\" alt=\"{{user.name}}\">\r\n      <!-- /user avatar-->\r\n\r\n      <div class=\"mt-7\">\r\n        <h4 class=\"mb-1 mb-sm-0\">{{user.name}}</h4>\r\n        <span class=\"d-block text-light-gray mb-5\">{{user.position}}</span>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm\">Contact</a>\r\n      </div>\r\n\r\n      <div class=\"action-tools\">\r\n        <!-- Checkbox -->\r\n        <div class=\"dt-checkbox dt-checkbox-icon dt-checkbox-only\">\r\n          <input id=\"checkbox-{{i}}\" type=\"checkbox\" [ngModel]=\"user.favourite\">\r\n          <label class=\"font-weight-light dt-checkbox-content\" for=\"checkbox-{{i}}\">\r\n            <span class=\"unchecked\"><gx-icon name=\"star-o\" size=\"xl\" class=\"text-light-gray\"></gx-icon></span>\r\n            <span class=\"checked\"><gx-icon name=\"star-fill\" size=\"xl\" class=\"text-secondary\"></gx-icon></span>\r\n          </label>\r\n        </div>\r\n        <!-- /checkbox -->\r\n\r\n        <!-- Dropdown -->\r\n        <div ngbDropdown placement=\"bottom-right\">\r\n          <a class=\"no-arrow\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n            <gx-icon name=\"horizontal-more\" [fw]=\"true\" size=\"lg\" class=\"text-light-gray\"></gx-icon>\r\n          </a>\r\n\r\n          <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n              <gx-icon name=\"editors\" [fw]=\"true\"></gx-icon>\r\n              Edit\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n              <gx-icon name=\"contacts\" [fw]=\"true\"></gx-icon>\r\n              Contact List</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n              <gx-icon name=\"heart\" [fw]=\"true\"></gx-icon>\r\n              Favourite List\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <!-- /dropdown -->\r\n      </div>\r\n\r\n    </gx-grid>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n");

/***/ }),

/***/ "./src/app/content/extra-views/grid-views/advanced-grid/advanced-grid.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/extra-views/grid-views/advanced-grid/advanced-grid.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvZXh0cmEtdmlld3MvZ3JpZC12aWV3cy9hZHZhbmNlZC1ncmlkL2FkdmFuY2VkLWdyaWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/extra-views/grid-views/advanced-grid/advanced-grid.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/extra-views/grid-views/advanced-grid/advanced-grid.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdvancedGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedGridComponent", function() { return AdvancedGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _grid_views_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid-views.service */ "./src/app/content/extra-views/grid-views/grid-views.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AdvancedGridComponent = class AdvancedGridComponent {
    constructor(gridService) {
        this.gridService = gridService;
        this.realestates = this.gridService.realestates;
        this.symbol = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["getCurrencySymbol"])('USD', 'narrow');
    }
    ngOnInit() {
    }
};
AdvancedGridComponent.ctorParameters = () => [
    { type: _grid_views_service__WEBPACK_IMPORTED_MODULE_2__["GridViewsService"] }
];
AdvancedGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-advanced-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advanced-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-views/grid-views/advanced-grid/advanced-grid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./advanced-grid.component.scss */ "./src/app/content/extra-views/grid-views/advanced-grid/advanced-grid.component.scss")).default]
    })
], AdvancedGridComponent);



/***/ }),

/***/ "./src/app/content/extra-views/grid-views/basic-grid/basic-grid.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/content/extra-views/grid-views/basic-grid/basic-grid.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvZXh0cmEtdmlld3MvZ3JpZC12aWV3cy9iYXNpYy1ncmlkL2Jhc2ljLWdyaWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/extra-views/grid-views/basic-grid/basic-grid.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/extra-views/grid-views/basic-grid/basic-grid.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicGridComponent", function() { return BasicGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _grid_views_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid-views.service */ "./src/app/content/extra-views/grid-views/grid-views.service.ts");



let BasicGridComponent = class BasicGridComponent {
    constructor(gridService) {
        this.gridService = gridService;
        this.usersList = this.gridService.usersList;
    }
    ngOnInit() {
    }
};
BasicGridComponent.ctorParameters = () => [
    { type: _grid_views_service__WEBPACK_IMPORTED_MODULE_2__["GridViewsService"] }
];
BasicGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-views/grid-views/basic-grid/basic-grid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-grid.component.scss */ "./src/app/content/extra-views/grid-views/basic-grid/basic-grid.component.scss")).default]
    })
], BasicGridComponent);



/***/ }),

/***/ "./src/app/content/extra-views/grid-views/grid-views.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/content/extra-views/grid-views/grid-views.module.ts ***!
  \*********************************************************************/
/*! exports provided: GridViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridViewsModule", function() { return GridViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
/* harmony import */ var _basic_grid_basic_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-grid/basic-grid.component */ "./src/app/content/extra-views/grid-views/basic-grid/basic-grid.component.ts");
/* harmony import */ var _advanced_grid_advanced_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./advanced-grid/advanced-grid.component */ "./src/app/content/extra-views/grid-views/advanced-grid/advanced-grid.component.ts");
/* harmony import */ var _grid_views_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid-views.service */ "./src/app/content/extra-views/grid-views/grid-views.service.ts");









const routes = [
    {
        path: 'basic',
        component: _basic_grid_basic_grid_component__WEBPACK_IMPORTED_MODULE_6__["BasicGridComponent"],
        resolve: {
            usersList: _grid_views_service__WEBPACK_IMPORTED_MODULE_8__["GridViewsService"]
        }
    },
    {
        path: 'advanced',
        component: _advanced_grid_advanced_grid_component__WEBPACK_IMPORTED_MODULE_7__["AdvancedGridComponent"],
        resolve: {
            realestates: _grid_views_service__WEBPACK_IMPORTED_MODULE_8__["GridViewsService"]
        }
    }
];
let GridViewsModule = class GridViewsModule {
};
GridViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__["SlideshowModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _basic_grid_basic_grid_component__WEBPACK_IMPORTED_MODULE_6__["BasicGridComponent"],
            _advanced_grid_advanced_grid_component__WEBPACK_IMPORTED_MODULE_7__["AdvancedGridComponent"]
        ]
    })
], GridViewsModule);



/***/ }),

/***/ "./src/app/content/extra-views/grid-views/grid-views.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/extra-views/grid-views/grid-views.service.ts ***!
  \**********************************************************************/
/*! exports provided: GridViewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridViewsService", function() { return GridViewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GridViewsService = class GridViewsService {
    constructor(http) {
        this.http = http;
    }
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getUsers(),
                this.getRealEstates()
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    getUsers() {
        return new Promise((resolve, reject) => {
            this.http.get('api/grid-views-users')
                .subscribe((response) => {
                this.usersList = response;
                resolve(response);
            }, reject);
        });
    }
    getRealEstates() {
        return new Promise((resolve, reject) => {
            this.http.get('api/grid-views-realestates')
                .subscribe((response) => {
                this.realestates = response;
                resolve(response);
            }, reject);
        });
    }
};
GridViewsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GridViewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GridViewsService);



/***/ })

}]);
//# sourceMappingURL=grid-views-grid-views-module-es2015.js.map