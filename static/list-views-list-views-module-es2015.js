(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-views-list-views-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-views/list-views/advanced-list/advanced-list.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-views/list-views/advanced-list/advanced-list.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Advanced List View</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-12\" *ngFor=\"let property of realestates; index as i; first as isFirst\">\r\n\r\n    <!-- Card -->\r\n    <gx-list class=\"horizontal\">\r\n      <!-- Slider Header -->\r\n      <gx-slider>\r\n        <gx-slider-header>\r\n          <span *ngIf=\"property.is_featured\" class=\"badge bg-orange text-white text-uppercase\">featured</span>\r\n\r\n          <!-- Checkbox -->\r\n          <div class=\"dt-checkbox dt-checkbox-icon dt-checkbox-only\">\r\n            <input id=\"checkbox-{{i}}\" type=\"checkbox\" [ngModel]=\"property.favourite\">\r\n            <label class=\"font-weight-light dt-checkbox-content\" for=\"checkbox-{{i}}\">\r\n              <span class=\"unchecked\"><gx-icon name=\"heart-o\" class=\"text-white\"></gx-icon></span>\r\n              <span class=\"checked\"><gx-icon name=\"heart\" class=\"text-white\"></gx-icon></span>\r\n            </label>\r\n          </div>\r\n          <!-- /checkbox -->\r\n        </gx-slider-header>\r\n\r\n        <!-- Slider Carouse -->\r\n        <slideshow [imageUrls]=\"property.imageUrls\"\r\n                   [showArrows]=\"false\"\r\n                   [showDots]=\"true\"\r\n                   [minHeight]=\"'200px'\"\r\n                   [lazyLoad]=\"true\">\r\n        </slideshow>\r\n        <!-- /Slider Carouse -->\r\n\r\n      </gx-slider>\r\n      <!-- /slider header -->\r\n\r\n      <!-- Badges -->\r\n      <span class=\"badge text-uppercase mb-2\"\r\n            [ngClass]=\"{'badge-secondary':property.for==='For sale', 'bg-orange text-white':property.for!=='For sale'}\">{{property.for}}</span>\r\n      <!-- /badges -->\r\n\r\n      <!-- Card Title-->\r\n      <h2 class=\"card-title text-truncate\">{{property.title}}</h2>\r\n      <!-- Card Title-->\r\n\r\n      <!-- Card Sub Title-->\r\n      <h4 class=\"card-subtitle\">{{property.location}}</h4>\r\n      <!-- /card sub title-->\r\n\r\n      <!-- Content Area -->\r\n      <p class=\"card-text text-truncate\">\r\n        Single family home at beach side. Enjoy the beach time daily with home at beach side.\r\n        Enjoy the beach time daily with family home at beach side...\r\n      </p>\r\n\r\n      <span class=\"min-w-150 d-inline-block border-top mb-2\"></span>\r\n\r\n      <!-- Content Area -->\r\n      <div class=\"d-flex flex-wrap mb-4\">\r\n        <div class=\"pr-3\">Bedrooms: <span class=\"text-dark\">{{property.bedrooms}}</span></div>\r\n        <div>Area: <span class=\"text-dark\" [innerHTML]=\"property.area\"></span></div>\r\n      </div>\r\n      <!-- /content area -->\r\n\r\n      <div>\r\n        <span class=\"d-inline-block mr-3\"><gx-icon name=\"user\" [fw]=\"true\"></gx-icon> {{property.author}}</span>\r\n        <span class=\"d-inline-block\"><gx-icon name=\"calendar\" [fw]=\"true\"></gx-icon> {{property.posted}}</span>\r\n      </div>\r\n\r\n      <gx-list-footer class=\"d-flex flex-column justify-content-between\">\r\n        <!-- Pricing -->\r\n        <div class=\"price mb-6\">\r\n          <span class=\"d-block text-orange font-weight-500 display-5\">{{property.price|currency:'USD':'symbol-narrow':'4.0-2'}}</span>\r\n          <span class=\"d-inline-block text-light-gray f-12\">{{symbol+property.unit}}</span>\r\n        </div>\r\n        <!-- /pricing -->\r\n\r\n        <!-- Card Button -->\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-primary text-uppercase\">Detail</a>\r\n        <!-- /card button -->\r\n      </gx-list-footer>\r\n    </gx-list>\r\n\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-views/list-views/basic-list/basic-list.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-views/list-views/basic-list/basic-list.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">List View</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-12\" *ngFor=\"let user of usersList; index as i; first as isFirst\">\r\n    <gx-card>\r\n      <!-- List -->\r\n      <div class=\"d-sm-flex flex-sm-row\">\r\n\r\n        <!-- User Avatar-->\r\n        <img class=\"dt-avatar size-60 mr-6 mb-6 mb-sm-0\" [src]=\"user.picture\" alt=\"{{user.name}}\">\r\n        <!-- /user avatar-->\r\n\r\n        <!-- Content -->\r\n        <div class=\"flex-1 overflow-hidden mb-6 mb-sm-0 pr-sm-3\">\r\n          <div class=\"user-detail mb-3\">\r\n            <span class=\"user-name\">{{user.name}}</span>\r\n            <span class=\"dt-separator-v\">&nbsp;</span>\r\n            <span class=\"designation\">{{user.position}}</span>\r\n          </div>\r\n          <p class=\"text-truncate\">{{user.description}}</p>\r\n          <div class=\"d-flex flex-sm-row flex-column\">\r\n            <div class=\"mb-4 mb-sm-0\">\r\n              <span class=\"mr-4 mr-md-6 text-nowrap\"><span\r\n                class=\"text-dark\">{{user.hourly_rate | currency}}</span>/hr</span>\r\n              <span class=\"mr-4 mr-md-6 text-nowrap\"><span class=\"text-dark\">{{user.earned | currency}}k+ </span>earned</span>\r\n            </div>\r\n            <gx-status-bar *ngIf=\"user.job_done\"\r\n                           [style.width.px]=\"220\"\r\n                           [fullWidth]=\"true\"\r\n                           [fillVal]=\"user.job_done\"\r\n                           [maxVal]=\"100\"\r\n                           showPercent>\r\n            </gx-status-bar>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- /content -->\r\n\r\n        <div class=\"min-w-120\">\r\n          <a href=\"javascript:void(0)\" class=\"btn btn-primary text-uppercase btn-block\">Hire me</a>\r\n          <a href=\"javascript:void(0)\" class=\"btn btn-outline-light text-light-gray text-uppercase btn-block\">\r\n            <gx-icon class=\"mr-1\" name=\"star-o\" [fw]=\"true\"></gx-icon>\r\n            <span>Save</span>\r\n          </a>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- /list -->\r\n\r\n    </gx-card>\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n");

/***/ }),

/***/ "./src/app/content/extra-views/list-views/advanced-list/advanced-list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/extra-views/list-views/advanced-list/advanced-list.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvZXh0cmEtdmlld3MvbGlzdC12aWV3cy9hZHZhbmNlZC1saXN0L2FkdmFuY2VkLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/extra-views/list-views/advanced-list/advanced-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/extra-views/list-views/advanced-list/advanced-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdvancedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedListComponent", function() { return AdvancedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _list_views_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-views.service */ "./src/app/content/extra-views/list-views/list-views.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AdvancedListComponent = class AdvancedListComponent {
    constructor(listService) {
        this.listService = listService;
        this.realestates = this.listService.realestates;
        this.symbol = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["getCurrencySymbol"])('USD', 'narrow');
    }
    ngOnInit() {
    }
};
AdvancedListComponent.ctorParameters = () => [
    { type: _list_views_service__WEBPACK_IMPORTED_MODULE_2__["ListViewsService"] }
];
AdvancedListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-advanced-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advanced-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-views/list-views/advanced-list/advanced-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./advanced-list.component.scss */ "./src/app/content/extra-views/list-views/advanced-list/advanced-list.component.scss")).default]
    })
], AdvancedListComponent);



/***/ }),

/***/ "./src/app/content/extra-views/list-views/basic-list/basic-list.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/content/extra-views/list-views/basic-list/basic-list.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvZXh0cmEtdmlld3MvbGlzdC12aWV3cy9iYXNpYy1saXN0L2Jhc2ljLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/extra-views/list-views/basic-list/basic-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/extra-views/list-views/basic-list/basic-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicListComponent", function() { return BasicListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _list_views_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../list-views.service */ "./src/app/content/extra-views/list-views/list-views.service.ts");



let BasicListComponent = class BasicListComponent {
    constructor(listService) {
        this.listService = listService;
        this.usersList = this.listService.usersList;
    }
    ngOnInit() {
    }
};
BasicListComponent.ctorParameters = () => [
    { type: _list_views_service__WEBPACK_IMPORTED_MODULE_2__["ListViewsService"] }
];
BasicListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-views/list-views/basic-list/basic-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-list.component.scss */ "./src/app/content/extra-views/list-views/basic-list/basic-list.component.scss")).default]
    })
], BasicListComponent);



/***/ }),

/***/ "./src/app/content/extra-views/list-views/list-views.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/content/extra-views/list-views/list-views.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewsModule", function() { return ListViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
/* harmony import */ var _basic_list_basic_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-list/basic-list.component */ "./src/app/content/extra-views/list-views/basic-list/basic-list.component.ts");
/* harmony import */ var _list_views_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-views.service */ "./src/app/content/extra-views/list-views/list-views.service.ts");
/* harmony import */ var _advanced_list_advanced_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./advanced-list/advanced-list.component */ "./src/app/content/extra-views/list-views/advanced-list/advanced-list.component.ts");









const routes = [
    {
        path: 'basic',
        component: _basic_list_basic_list_component__WEBPACK_IMPORTED_MODULE_6__["BasicListComponent"],
        resolve: {
            usersList: _list_views_service__WEBPACK_IMPORTED_MODULE_7__["ListViewsService"]
        }
    },
    {
        path: 'advanced',
        component: _advanced_list_advanced_list_component__WEBPACK_IMPORTED_MODULE_8__["AdvancedListComponent"],
        resolve: {
            realestates: _list_views_service__WEBPACK_IMPORTED_MODULE_7__["ListViewsService"]
        }
    }
];
let ListViewsModule = class ListViewsModule {
};
ListViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__["SlideshowModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _basic_list_basic_list_component__WEBPACK_IMPORTED_MODULE_6__["BasicListComponent"],
            _advanced_list_advanced_list_component__WEBPACK_IMPORTED_MODULE_8__["AdvancedListComponent"]
        ]
    })
], ListViewsModule);



/***/ }),

/***/ "./src/app/content/extra-views/list-views/list-views.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/extra-views/list-views/list-views.service.ts ***!
  \**********************************************************************/
/*! exports provided: ListViewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewsService", function() { return ListViewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ListViewsService = class ListViewsService {
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
            this.http.get('api/list-views-users')
                .subscribe((response) => {
                this.usersList = response;
                resolve(response);
            }, reject);
        });
    }
    getRealEstates() {
        return new Promise((resolve, reject) => {
            this.http.get('api/list-views-realestates')
                .subscribe((response) => {
                this.realestates = response;
                resolve(response);
            }, reject);
        });
    }
};
ListViewsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ListViewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ListViewsService);



/***/ })

}]);
//# sourceMappingURL=list-views-list-views-module-es2015.js.map