(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/metrics/metrics.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/metrics/metrics.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Metrics</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-6 order-md-1\">\r\n\r\n    <app-section-revenue-chart gxCard fullHeight class=\"dt-chart overflow-hidden\"></app-section-revenue-chart>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 col-md-6 order-md-2\">\r\n\r\n    <app-section-static-chart gxCard fullHeight class=\"dt-chart overflow-hidden\"></app-section-static-chart>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-md-5 col-sm-6 order-xl-6 order-md-3\">\r\n\r\n    <gx-echarts-liquidfill gxCard\r\n                           fullHeight\r\n                           title=\"Realtime Users\"\r\n                           figure=\"270\"\r\n                           [data]=\"widgets.realUsersChart\"></gx-echarts-liquidfill>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-md-5 col-sm-6 order-xl-5 order-md-6\">\r\n\r\n    <gx-card fullHeight\r\n             body-class=\"d-flex justify-content-center align-items-center\"\r\n             [card-title]=\"widgets.ticketsStatus.title\">\r\n\r\n      <!-- Chart -->\r\n      <gx-chart [chartType]=\"widgets.ticketsStatus.chart.chartType\"\r\n                [options]=\"widgets.ticketsStatus.chart.options\"\r\n                [labels]=\"widgets.ticketsStatus.chart.labels\"\r\n                [colors]=\"widgets.ticketsStatus.chart.colors\"\r\n                [datasets]=\"widgets.ticketsStatus.chart.datasets\"></gx-chart>\r\n      <!-- /chart -->\r\n\r\n    </gx-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 col-md-7 order-md-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-referral-traffic gxCard fullHeight\r\n                         [chart]=\"widgets.referralTrafficChart\"\r\n                         [progressRecords]=\"widgets.progressRecords\"></gx-referral-traffic>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-2 col-md-7 order-xl-3 order-md-5\">\r\n    <!-- Grid -->\r\n    <div class=\"row\">\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-xl-12 col-6\" *ngFor=\"let widget of simpleWidgets.slice(4, 6)\">\r\n\r\n        <gx-counter-card gxCard fullHeight\r\n                         [data]=\"widget\"\r\n                         [isVertical]=\"true\"\r\n                         [ngClass]=\"widget.bgColor\"></gx-counter-card>\r\n\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n    </div>\r\n    <!-- /grid -->\r\n  </div>\r\n  <!-- /grid item -->\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6\" *ngFor=\"let widget of simpleWidgets.slice(0, 4)\">\r\n\r\n    <gx-counter-card gxCard fullHeight\r\n                     class=\"text-white\"\r\n                     [ngClass]=\"widget.bgColor\"\r\n                     [data]=\"widget\"></gx-counter-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-2 col-sm-4 col-6\" *ngFor=\"let card of trendingCards.slice(4, 7)\">\r\n\r\n    <!-- Chart Card -->\r\n    <gx-trending-card gxCard fullHeight\r\n                      [data]=\"card.data\"\r\n                      [isVertical]=\"true\"\r\n                      [ngClass]=\"card.bgColor\">\r\n      <!-- Chart -->\r\n      <gx-chart chartClasses=\"rounded-bottom\"\r\n                [shadowType]=\"card.shadowType\"\r\n                [datasets]=\"card.chart.datasets\"\r\n                [labels]=\"card.chart.labels\"\r\n                [options]=\"card.chart.options\"\r\n                [colors]=\"card.chart.colors\"\r\n                [chartType]=\"card.chart.chartType\"\r\n                [gradients]=\"card.chart.gradients\"></gx-chart>\r\n      <!-- /chart -->\r\n\r\n    </gx-trending-card>\r\n    <!-- /chart card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <!-- Grid -->\r\n    <div class=\"row\">\r\n      <!-- Grid Item -->\r\n      <div class=\"col-sm-6\" *ngFor=\"let card of trendingCards.slice(0, 4)\">\r\n\r\n        <!-- Chart Card -->\r\n        <gx-trending-card gxCard fullHeight\r\n                          [data]=\"card.data\">\r\n          <!-- Chart -->\r\n          <gx-chart chartClasses=\"rounded-bottom\"\r\n                    [shadowType]=\"card.shadowType\"\r\n                    [datasets]=\"card.chart.datasets\"\r\n                    [labels]=\"card.chart.labels\"\r\n                    [options]=\"card.chart.options\"\r\n                    [colors]=\"card.chart.colors\"\r\n                    [chartType]=\"card.chart.chartType\"\r\n                    [gradients]=\"card.chart.gradients\"></gx-chart>\r\n          <!-- /chart -->\r\n\r\n        </gx-trending-card>\r\n        <!-- /chart card -->\r\n\r\n      </div>\r\n      <!-- /grid item -->\r\n    </div>\r\n    <!-- /grid -->\r\n\r\n  </div>\r\n  <!-- / grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-4 col-sm-6\">\r\n\r\n    <!-- Chart Card -->\r\n    <gx-card body-class=\"p-5\">\r\n\r\n      <!-- Grid -->\r\n      <div class=\"row no-gutters\">\r\n\r\n        <!-- Grid Item -->\r\n        <div class=\"col-xl-5 pr-2 d-flex flex-column justify-content-center\">\r\n          <div class=\"d-flex align-items-center text-success\">\r\n            <span class=\"mb-0 display-3 font-weight-500 mr-1\">{{widgets.chartTrafficRaise.data.trending.value}}</span>\r\n            <gx-icon [name]=\"widgets.chartTrafficRaise.data.trending.icon\"></gx-icon>\r\n          </div>\r\n          <p class=\"mb-0 text-light-gray\">{{widgets.chartTrafficRaise.data.tagLine.text}}</p>\r\n        </div>\r\n        <!-- /grid item -->\r\n\r\n        <!-- Grid Item -->\r\n        <div class=\"col-xl-7\">\r\n\r\n          <!-- Chart -->\r\n          <gx-chart class=\"dt-chart__body\" chartClasses=\"rounded-bottom\"\r\n                    [datasets]=\"widgets.chartTrafficRaise.chart.datasets\"\r\n                    [labels]=\"widgets.chartTrafficRaise.chart.labels\"\r\n                    [options]=\"widgets.chartTrafficRaise.chart.options\"\r\n                    [colors]=\"widgets.chartTrafficRaise.chart.colors\"\r\n                    [chartType]=\"widgets.chartTrafficRaise.chart.chartType\"></gx-chart>\r\n          <!-- /chart -->\r\n\r\n        </div>\r\n        <!-- /grid item -->\r\n\r\n      </div>\r\n      <!-- /grid -->\r\n\r\n    </gx-card>\r\n    <!-- /chart card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-4\"\r\n       *ngFor=\"let card of trendingCards.slice(8, 10); first as isFirst; last as isLast\"\r\n       [ngClass]=\"{'col-sm-6':!isLast, 'col-sm-8': isLast}\">\r\n\r\n    <!-- Chart Card -->\r\n    <gx-progress-card class=\"overflow-hidden\" [data]=\"card.data\" [coloums]=\"card.coloums\">\r\n      <!-- Chart -->\r\n      <gx-chart class=\"dt-chart__body\"\r\n                [ngClass]=\"{'mb-n5 mr-n5': card.chart.chartType != 'bar'}\"\r\n                [datasets]=\"card.chart.datasets\"\r\n                [labels]=\"card.chart.labels\"\r\n                [options]=\"card.chart.options\"\r\n                [colors]=\"card.chart.colors\"\r\n                [chartType]=\"card.chart.chartType\"\r\n                [gradients]=\"card.chart.gradients\"></gx-chart>\r\n      <!-- /chart -->\r\n\r\n    </gx-progress-card>\r\n    <!-- /chart card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n");

/***/ }),

/***/ "./src/app/content/main/main.module.ts":
/*!*********************************************!*\
  !*** ./src/app/content/main/main.module.ts ***!
  \*********************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var _app_content_sections_sections_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/content/sections/sections.module */ "./src/app/content/sections/sections.module.ts");
/* harmony import */ var _metrics_metrics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metrics/metrics.component */ "./src/app/content/main/metrics/metrics.component.ts");
/* harmony import */ var _metrics_metrics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metrics/metrics.service */ "./src/app/content/main/metrics/metrics.service.ts");








const appsRoutes = [
    {
        path: '',
        loadChildren: './dashboards/dashboards.module#DashboardsModule'
    },
    {
        path: 'dashboards',
        loadChildren: './dashboards/dashboards.module#DashboardsModule'
    },
    {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
    },
    {
        path: 'metrics',
        component: _metrics_metrics_component__WEBPACK_IMPORTED_MODULE_6__["MetricsComponent"],
        resolve: {
            data: _metrics_metrics_service__WEBPACK_IMPORTED_MODULE_7__["MetricsService"]
        }
    }
];
let MainModule = class MainModule {
};
MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _app_content_sections_sections_module__WEBPACK_IMPORTED_MODULE_5__["SectionsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appsRoutes)
        ],
        declarations: [
            _metrics_metrics_component__WEBPACK_IMPORTED_MODULE_6__["MetricsComponent"]
        ]
    })
], MainModule);



/***/ }),

/***/ "./src/app/content/main/metrics/metrics.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/content/main/metrics/metrics.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9tZXRyaWNzL21ldHJpY3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/main/metrics/metrics.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/content/main/metrics/metrics.component.ts ***!
  \***********************************************************/
/*! exports provided: MetricsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsComponent", function() { return MetricsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _metrics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metrics.service */ "./src/app/content/main/metrics/metrics.service.ts");



let MetricsComponent = class MetricsComponent {
    constructor(metrics) {
        this.metrics = metrics;
        this.widgets = this.metrics.widgets;
        this.simpleWidgets = this.metrics.simpleWidgets;
        this.trendingCards = this.metrics.trendingCards;
    }
    ngOnInit() {
    }
};
MetricsComponent.ctorParameters = () => [
    { type: _metrics_service__WEBPACK_IMPORTED_MODULE_2__["MetricsService"] }
];
MetricsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-metrics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./metrics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/metrics/metrics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./metrics.component.scss */ "./src/app/content/main/metrics/metrics.component.scss")).default]
    })
], MetricsComponent);



/***/ }),

/***/ "./src/app/content/main/metrics/metrics.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/content/main/metrics/metrics.service.ts ***!
  \*********************************************************/
/*! exports provided: MetricsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsService", function() { return MetricsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MetricsService = class MetricsService {
    constructor(http) {
        this.http = http;
        this.simpleWidgetsUrl = 'api/metrics-simple-widgets'; // URL to web api
        this.trendingCardsUrl = 'api/metrics-trending-cards'; // URL to web api
        this.widgetsUrl = 'api/metrics-widgets'; // URL to web api
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getWidgets(),
                this.getSimpleWidgets(),
                this.getTrendingCards()
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get widgets
     * @return {Promise<any>}
     */
    getWidgets() {
        return new Promise((resolve, reject) => {
            this.http.get(this.widgetsUrl).subscribe((widgets) => {
                this.widgets = widgets;
                resolve(widgets);
            }, reject);
        });
    }
    /**
     * Get simple widgets
     * @return {Promise<any>}
     */
    getSimpleWidgets() {
        return new Promise((resolve, reject) => {
            this.http.get(this.simpleWidgetsUrl).subscribe((widgets) => {
                this.simpleWidgets = widgets;
                resolve(widgets);
            }, reject);
        });
    }
    /**
     * Get trending cards
     * @return {Promise<any>}
     */
    getTrendingCards() {
        return new Promise((resolve, reject) => {
            this.http.get(this.trendingCardsUrl).subscribe((cards) => {
                this.trendingCards = cards;
                resolve(cards);
            }, reject);
        });
    }
};
MetricsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MetricsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MetricsService);



/***/ })

}]);
//# sourceMappingURL=app-content-main-main-module-es2015.js.map