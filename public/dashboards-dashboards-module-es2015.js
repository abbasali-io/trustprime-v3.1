(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-dashboards-module"],{

/***/ "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-echarts/fesm2015/ngx-echarts.js ***!
  \**********************************************************/
/*! exports provided: NgxEchartsModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxEchartsModule", function() { return NgxEchartsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxEchartsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChangeFilter {
    /**
     * @param {?} _changes
     */
    constructor(_changes) {
        this._changes = _changes;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    static of(changes) {
        return new ChangeFilter(changes);
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    notEmpty(key) {
        if (this._changes[key]) {
            /** @type {?} */
            const value = this._changes[key].currentValue;
            if (value !== undefined && value !== null) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value);
            }
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    has(key) {
        if (this._changes[key]) {
            /** @type {?} */
            const value = this._changes[key].currentValue;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    notFirst(key) {
        if (this._changes[key] && !this._changes[key].isFirstChange()) {
            /** @type {?} */
            const value = this._changes[key].currentValue;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    notFirstAndEmpty(key) {
        if (this._changes[key] && !this._changes[key].isFirstChange()) {
            /** @type {?} */
            const value = this._changes[key].currentValue;
            if (value !== undefined && value !== null) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value);
            }
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxEchartsDirective {
    /**
     * @param {?} el
     * @param {?} ngZone
     */
    constructor(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        this.autoResize = true;
        this.loadingType = 'default';
        this.detectEventChanges = true; // deprecated, left for compatibility reasons to avoid triggering major version
        // deprecated, left for compatibility reasons to avoid triggering major version
        // ngx-echarts events
        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // echarts mouse events
        this.chartClick = this.createLazyEvent('click');
        this.chartDblClick = this.createLazyEvent('dblclick');
        this.chartMouseDown = this.createLazyEvent('mousedown');
        this.chartMouseMove = this.createLazyEvent('mousemove');
        this.chartMouseUp = this.createLazyEvent('mouseup');
        this.chartMouseOver = this.createLazyEvent('mouseover');
        this.chartMouseOut = this.createLazyEvent('mouseout');
        this.chartGlobalOut = this.createLazyEvent('globalout');
        this.chartContextMenu = this.createLazyEvent('contextmenu');
        // echarts mouse events
        this.chartLegendSelectChanged = this.createLazyEvent('legendselectchanged');
        this.chartLegendSelected = this.createLazyEvent('legendselected');
        this.chartLegendUnselected = this.createLazyEvent('legendunselected');
        this.chartLegendScroll = this.createLazyEvent('legendscroll');
        this.chartDataZoom = this.createLazyEvent('datazoom');
        this.chartDataRangeSelected = this.createLazyEvent('datarangeselected');
        this.chartTimelineChanged = this.createLazyEvent('timelinechanged');
        this.chartTimelinePlayChanged = this.createLazyEvent('timelineplaychanged');
        this.chartRestore = this.createLazyEvent('restore');
        this.chartDataViewChanged = this.createLazyEvent('dataviewchanged');
        this.chartMagicTypeChanged = this.createLazyEvent('magictypechanged');
        this.chartPieSelectChanged = this.createLazyEvent('pieselectchanged');
        this.chartPieSelected = this.createLazyEvent('pieselected');
        this.chartPieUnselected = this.createLazyEvent('pieunselected');
        this.chartMapSelectChanged = this.createLazyEvent('mapselectchanged');
        this.chartMapSelected = this.createLazyEvent('mapselected');
        this.chartMapUnselected = this.createLazyEvent('mapunselected');
        this.chartAxisAreaSelected = this.createLazyEvent('axisareaselected');
        this.chartFocusNodeAdjacency = this.createLazyEvent('focusnodeadjacency');
        this.chartUnfocusNodeAdjacency = this.createLazyEvent('unfocusnodeadjacency');
        this.chartBrush = this.createLazyEvent('brush');
        this.chartBrushSelected = this.createLazyEvent('brushselected');
        this.chartRendered = this.createLazyEvent('rendered');
        this.chartFinished = this.createLazyEvent('finished');
        this.currentOffsetWidth = 0;
        this.currentOffsetHeight = 0;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const filter = ChangeFilter.of(changes);
        filter.notFirstAndEmpty('options').subscribe((/**
         * @param {?} opt
         * @return {?}
         */
        opt => this.onOptionsChange(opt)));
        filter.notFirstAndEmpty('merge').subscribe((/**
         * @param {?} opt
         * @return {?}
         */
        opt => this.setOption(opt)));
        filter.has('loading').subscribe((/**
         * @param {?} v
         * @return {?}
         */
        v => this.toggleLoading(!!v)));
        filter.notFirst('theme').subscribe((/**
         * @return {?}
         */
        () => this.refreshChart()));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.resizeSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(50)).subscribe((/**
         * @return {?}
         */
        () => {
            if (this.autoResize && window.innerWidth !== this.currentWindowWidth) {
                this.currentWindowWidth = window.innerWidth;
                this.currentOffsetWidth = this.el.nativeElement.offsetWidth;
                this.currentOffsetHeight = this.el.nativeElement.offsetHeight;
                this.resize();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.resizeSub) {
            this.resizeSub.unsubscribe();
        }
        this.dispose();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        // No heavy work in DoCheck!
        if (this.chart && this.autoResize) {
            /** @type {?} */
            const offsetWidth = this.el.nativeElement.offsetWidth;
            /** @type {?} */
            const offsetHeight = this.el.nativeElement.offsetHeight;
            if (this.currentOffsetWidth !== offsetWidth || this.currentOffsetHeight !== offsetHeight) {
                this.currentOffsetWidth = offsetWidth;
                this.currentOffsetHeight = offsetHeight;
                this.resize();
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => this.initChart()));
    }
    /**
     * @private
     * @return {?}
     */
    dispose() {
        if (this.chart) {
            this.chart.dispose();
            this.chart = null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    resize() {
        if (this.chart) {
            this.chart.resize();
        }
    }
    /**
     * @private
     * @param {?} loading
     * @return {?}
     */
    toggleLoading(loading) {
        if (this.chart) {
            loading ? this.chart.showLoading(this.loadingType, this.loadingOpts) : this.chart.hideLoading();
        }
    }
    /**
     * @private
     * @param {?} option
     * @param {?=} opts
     * @return {?}
     */
    setOption(option, opts) {
        if (this.chart) {
            this.chart.setOption(option, opts);
        }
    }
    /**
     * @private
     * @return {?}
     */
    refreshChart() {
        this.dispose();
        this.initChart();
    }
    /**
     * @private
     * @return {?}
     */
    createChart() {
        this.currentWindowWidth = window.innerWidth;
        this.currentOffsetWidth = this.el.nativeElement.offsetWidth;
        this.currentOffsetHeight = this.el.nativeElement.offsetHeight;
        /** @type {?} */
        const dom = this.el.nativeElement;
        if (window && window.getComputedStyle) {
            /** @type {?} */
            const prop = window.getComputedStyle(dom, null).getPropertyValue('height');
            if ((!prop || prop === '0px') &&
                (!dom.style.height || dom.style.height === '0px')) {
                dom.style.height = '400px';
            }
        }
        return this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => Object(echarts__WEBPACK_IMPORTED_MODULE_1__["init"])(dom, this.theme, this.initOpts)));
    }
    /**
     * @private
     * @return {?}
     */
    initChart() {
        this.onOptionsChange(this.options);
        if (this.merge && this.chart) {
            this.setOption(this.merge);
        }
    }
    /**
     * @private
     * @param {?} opt
     * @return {?}
     */
    onOptionsChange(opt) {
        if (opt) {
            if (!this.chart) {
                this.chart = this.createChart();
                this.chartInit.emit(this.chart);
            }
            this.chart.setOption(this.options, true);
        }
    }
    // allows to lazily bind to only those events that are requested through the `@Output` by parent components
    // see https://stackoverflow.com/questions/51787972/optimal-reentering-the-ngzone-from-eventemitter-event for more info
    /**
     * @private
     * @template T
     * @param {?} eventName
     * @return {?}
     */
    createLazyEvent(eventName) {
        return (/** @type {?} */ (this.chartInit.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
         * @param {?} chart
         * @return {?}
         */
        (chart) => new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            chart.on(eventName, (/**
             * @param {?} data
             * @return {?}
             */
            (data) => this.ngZone.run((/**
             * @return {?}
             */
            () => observer.next(data)))));
            return (/**
             * @return {?}
             */
            () => chart.off(eventName));
        })))))));
    }
}
NgxEchartsDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'echarts, [echarts]',
            },] }
];
/** @nocollapse */
NgxEchartsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
NgxEchartsDirective.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    initOpts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    merge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingOpts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    detectEventChanges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    chartInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartMouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartMouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartMouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartGlobalOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartContextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartLegendSelectChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartLegendSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartLegendUnselected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartLegendScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartDataZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartDataRangeSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartTimelineChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartTimelinePlayChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartRestore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartDataViewChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartMagicTypeChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartPieSelectChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartPieSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartPieUnselected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartMapSelectChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartMapSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartMapUnselected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartAxisAreaSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartFocusNodeAdjacency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartUnfocusNodeAdjacency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartBrush: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartBrushSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartRendered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartFinished: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxEchartsModule {
}
NgxEchartsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [],
                declarations: [
                    NgxEchartsDirective
                ],
                exports: [
                    NgxEchartsDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-echarts.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Grid -->\n<div class=\"row\" style=\"margin-bottom: 10px ;\">\n    <!-- Grid Item -->\n    <div class=\"col-xl-12 col-sm-12 col-xs-12\" >\n      <img src=\"http://localhost:5000/video_feed\" width=\"100%\" height=\"400px\">\n  \n    </div>\n    <!-- /grid item -->\n\n  </div>\n  <!-- /grid -->\n  <div class=\"row\">\n    <div class=\"row mb-sm-8\">\n\n      <!-- Grid Item -->\n      <div class=\"col-12\">\n    \n        <app-section-leads gxCard [cardTitle]=\"widgets.leads.title\" [data]=\"widgets.leads.data\"\n          [countries]=\"widgets.leads.countries\" [monthlyLead]=\"widgets.leads.monthlyLead\"></app-section-leads>\n    \n      </div>\n      <!-- /grid item -->\n    \n      <!-- Grid Item -->\n      <!-- <div class=\"col-md-6\">\n    \n        <app-section-campaigns-results gxCard fullHeight [campaigns]=\"widgets.campaigns\"></app-section-campaigns-results>\n    \n      </div> -->\n      <!-- /grid item -->\n    \n      <!-- Grid Item -->\n      <!-- <div class=\"col-md-6\">\n    \n        <app-section-social-media-advertising gxCard fullHeight [socialMedia]=\"widgets.socialMedia\">\n        </app-section-social-media-advertising>\n    \n      </div> -->\n      <!-- /grid item -->\n    \n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>cctv-cam2-dashboard works!</p>\n<!-- Grid -->\n<div class=\"row\" style=\"margin-bottom: 10px ;\">\n    <!-- Grid Item -->\n    <div class=\"col-xl-12 col-sm-12\" >\n      <img src=\"http://localhost:5000/video_feed_cam2\" width=\"100%\" height=\"400px\">\n  \n    </div>\n    <!-- /grid item -->\n\n  </div>\n  <!-- /grid -->\n  <div class=\"row\">\n    <div class=\"row mb-sm-8\">\n\n      <!-- Grid Item -->\n      <div class=\"col-12\">\n    \n        <app-section-leads gxCard [cardTitle]=\"widgets.leads.title\" [data]=\"widgets.leads.data\"\n          [countries]=\"widgets.leads.countries\" [monthlyLead]=\"widgets.leads.monthlyLead\"></app-section-leads>\n    \n      </div>\n      <!-- /grid item -->\n    \n      <!-- Grid Item -->\n      <!-- <div class=\"col-md-6\">\n    \n        <app-section-campaigns-results gxCard fullHeight [campaigns]=\"widgets.campaigns\"></app-section-campaigns-results>\n    \n      </div> -->\n      <!-- /grid item -->\n    \n      <!-- Grid Item -->\n      <!-- <div class=\"col-md-6\">\n    \n        <app-section-social-media-advertising gxCard fullHeight [socialMedia]=\"widgets.socialMedia\">\n        </app-section-social-media-advertising>\n    \n      </div> -->\n      <!-- /grid item -->\n    \n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">TrustPrime - Key KPIs & Indexes</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Entry Header -->\r\n<div class=\"dt-entry__header\">\r\n\r\n  <!-- Entry Heading -->\r\n  <div class=\"dt-entry__heading\">\r\n    <h3 class=\"dt-entry__title\">Malaysia Today :)</h3>\r\n  </div>\r\n  <!-- /entry heading -->\r\n\r\n</div>\r\n<!-- /entry header -->\r\n\r\n<!-- <div class=\"row\"> -->\r\n\r\n<!-- Grid Item -->\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-xl-3 col-sm-6\" *ngFor=\"let item of analyticsCards\">\r\n\r\n    <!-- Card -->\r\n    <gx-analytic-card gxCard [title]=\"item.title\" [description]=\"item.description\" [icon]=\"item.icon\"\r\n      [number]=\"item.number\" [percent]=\"item.percent\" [positiveGrowth]=\"item.positiveGrowth\"></gx-analytic-card>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- Entry Header -->\r\n<div class=\"dt-entry__header\">\r\n\r\n  <!-- Entry Heading -->\r\n  <div class=\"dt-entry__heading\">\r\n    <h3 class=\"dt-entry__title\">Smart Security</h3>\r\n  </div>\r\n  <!-- /entry heading -->\r\n\r\n</div>\r\n<!-- /entry header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row mb-sm-8\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-3 col-6\">\r\n\r\n    <gx-status-card [badge]=\"widgets.revenue.badge\" [icon]=\"widgets.revenue.icon\" [items]=\"widgets.revenue.items\">\r\n    </gx-status-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-3 col-6\">\r\n\r\n    <gx-status-card [badge]=\"widgets.order.badge\" [icon]=\"widgets.order.icon\" [items]=\"widgets.order.items\">\r\n    </gx-status-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-6 col-12\">\r\n\r\n    <gx-status-card [badge]=\"widgets.invoices.badge\" [icon]=\"widgets.invoices.icon\" [items]=\"widgets.invoices.items\">\r\n    </gx-status-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-6\" *ngFor=\"let reportCard of widgets.reportCards\">\r\n\r\n    <gx-report-card gxCard fullHeight [title]=\"reportCard.title\" [data]=\"reportCard.cardData\"\r\n      [chart]=\"reportCard.chart\"></gx-report-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n\r\n  <!-- Entry Header -->\r\n  <div class=\"dt-entry__header\">\r\n\r\n    <!-- Entry Heading -->\r\n    <div class=\"dt-entry__heading\">\r\n      <h3 class=\"dt-entry__title\">Smart Tourism Analysis</h3>\r\n    </div>\r\n    <!-- /entry heading -->\r\n\r\n  </div>\r\n  <!-- /entry header -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-12\">\r\n\r\n    <widget-overview gxCard [map]=\"widgets.overview.map\" [statusReports]=\"widgets.overview.statusReports\"\r\n      [stats]=\"widgets.overview.stats\"></widget-overview>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Entry Header -->\r\n<div class=\"dt-entry__header\">\r\n\r\n  <!-- Entry Heading -->\r\n  <div class=\"dt-entry__heading\">\r\n    <h3 class=\"dt-entry__title\">City Help Desk</h3>\r\n  </div>\r\n  <!-- /entry heading -->\r\n\r\n</div>\r\n<!-- /entry header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row mb-sm-8\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 col-md-8 order-xl-1 order-md-1\">\r\n\r\n    <widget-recent-tickets gxCard fullHeight class=\"pb-4\" [tickets]=\"widgets.recentTickets\"></widget-recent-tickets>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 col-md-8 order-xl-4 order-md-3\">\r\n\r\n    <gx-operator-card gxCard fullHeight cardTitle=\"Citizen Hero - current month\" [operator]=\"widgets.operator\">\r\n    </gx-operator-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-md-4 col-sm-6 order-xl-2 order-md-2\">\r\n\r\n    <gx-card fullHeight body-class=\"d-flex justify-content-center align-items-center\"\r\n      [card-title]=\"widgets.ticketsStatus.title\">\r\n\r\n      <!-- Chart -->\r\n      <gx-chart [chartType]=\"widgets.ticketsStatus.chart.chartType\" [options]=\"widgets.ticketsStatus.chart.options\"\r\n        [labels]=\"widgets.ticketsStatus.chart.labels\" [colors]=\"widgets.ticketsStatus.chart.colors\"\r\n        [datasets]=\"widgets.ticketsStatus.chart.datasets\"></gx-chart>\r\n      <!-- /chart -->\r\n\r\n    </gx-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-md-4 col-sm-6 order-xl-3 order-md-4\">\r\n\r\n    <gx-card fullHeight card-title=\"Tickets by department\">\r\n\r\n      <ul class=\"dt-indicator\">\r\n        <li class=\"dt-indicator-item\" *ngFor=\"let row of widgets.departments\">\r\n          <p class=\"dt-indicator-title\">{{row.name}}</p>\r\n\r\n          <gx-status-bar [fillVal]=\"row.progressBar.fillVal\" [maxVal]=\"row.progressBar.maxVal\"\r\n            [textColor]=\"row.progressBar.textColor\" [barPosition]=\"row.progressBar.barPosition\"\r\n            [barColor]=\"row.progressBar.barColor\"></gx-status-bar>\r\n\r\n        </li>\r\n      </ul>\r\n\r\n    </gx-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 order-md-5\">\r\n\r\n    <app-section-tickets bsCard [ticketStatus]=\"widgets.ticketStatus\" [tickets]=\"widgets.tickets\">\r\n    </app-section-tickets>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Entry Header -->\r\n<div class=\"dt-entry__header\">\r\n\r\n  <!-- Entry Heading -->\r\n  <div class=\"dt-entry__heading\">\r\n    <h3 class=\"dt-entry__title\">Citizen Happiness Analysis</h3>\r\n  </div>\r\n  <!-- /entry heading -->\r\n\r\n</div>\r\n<!-- /entry header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row mb-sm-8\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-12\">\r\n\r\n    <app-section-leads gxCard [cardTitle]=\"widgets.leads.title\" [data]=\"widgets.leads.data\"\r\n      [countries]=\"widgets.leads.countries\" [monthlyLead]=\"widgets.leads.monthlyLead\"></app-section-leads>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <!-- <div class=\"col-md-6\">\r\n\r\n    <app-section-campaigns-results gxCard fullHeight [campaigns]=\"widgets.campaigns\"></app-section-campaigns-results>\r\n\r\n  </div> -->\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <!-- <div class=\"col-md-6\">\r\n\r\n    <app-section-social-media-advertising gxCard fullHeight [socialMedia]=\"widgets.socialMedia\">\r\n    </app-section-social-media-advertising>\r\n\r\n  </div> -->\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Entry Header -->\r\n<div class=\"dt-entry__header\">\r\n\r\n  <!-- Entry Heading -->\r\n  <div class=\"dt-entry__heading\">\r\n    <h3 class=\"dt-entry__title\">Smart Governance &amp; Projects</h3>\r\n  </div>\r\n  <!-- /entry heading -->\r\n\r\n</div>\r\n<!-- /entry header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <!-- Grid -->\r\n    <div class=\"row\">\r\n      <!-- Grid Item -->\r\n      <div class=\"col-xl-12\">\r\n\r\n        <gx-tasks-report gxCard [tasks]=\"widgets.tasksReport\"></gx-tasks-report>\r\n\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-xl-12\">\r\n\r\n        <gx-my-tasks [tasks]=\"tasks\"></gx-my-tasks>\r\n\r\n      </div>\r\n      <!-- /grid item -->\r\n    </div>\r\n    <!-- /grid -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <app-section-projects gxCard [projects]=\"widgets.projects\"></app-section-projects>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crm-dashboard/widget-overview/widget-overview.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crm-dashboard/widget-overview/widget-overview.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Grid -->\r\n<div class=\"row no-gutters\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-6\">\r\n    <!-- Card Header -->\r\n    <card-header class=\" mb-3\" card-title=\"Overview\"></card-header>\r\n    <!-- /card header -->\r\n\r\n    <card-body class=\"pb-0 pb-sm-8\">\r\n      <div class=\"embed-responsive embed-responsive-21by9\">\r\n        <amCharts class=\"embed-responsive-item\"\r\n                  [options]=\"trackingMap\"\r\n                  [style.width.%]=\"100\"\r\n                  [style.height.%]=\"100\"></amCharts>\r\n      </div>\r\n    </card-body>\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-3 col-sm-6\">\r\n    <card-body class=\"pl-md-0 pr-sm-0\">\r\n      <ul class=\"dt-indicator mt-xl-6\">\r\n        <li class=\"dt-indicator-item\" *ngFor=\"let row of statusReports\">\r\n          <p class=\"dt-indicator-title\">{{row.label}}</p>\r\n\r\n          <gx-status-bar showPercent\r\n                         [fillVal]=\"row.progressBar.fillVal\"\r\n                         [maxVal]=\"row.progressBar.maxVal\"\r\n                         [textColor]=\"row.progressBar.textColor\"\r\n                         [barPosition]=\"row.progressBar.barPosition\"\r\n                         [barColor]=\"row.progressBar.barColor\"></gx-status-bar>\r\n\r\n        </li>\r\n      </ul>\r\n    </card-body>\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-3 col-sm-6\">\r\n    <div class=\"dt-zone-stats\">\r\n      <div class=\"dt-zone-stats__content\">\r\n        <div class=\"h1 display-4 font-weight-600 mb-1\">{{stats.revenue}}</div>\r\n        <span>{{stats.revenueTitle}}</span>\r\n      </div>\r\n      <div class=\"dt-zone-stats__content\">\r\n        <div class=\"row w-100\">\r\n          <div class=\"col-6 text-center border-right\">\r\n            <div class=\"h1 mb-1 font-weight-500\">{{stats.clients}}</div>\r\n            <span>{{stats.clientsTitle}}</span>\r\n          </div>\r\n          <div class=\"col-6 text-center\">\r\n            <div class=\"h1 mb-1 font-weight-500\">{{stats.countries}}</div>\r\n            <span>{{stats.countriesTitle}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /grid item -->\r\n</div>\r\n<!-- /grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crm-dashboard/widget-recent-tickets/widget-recent-tickets.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crm-dashboard/widget-recent-tickets/widget-recent-tickets.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header class=\"mb-4\" card-title=\"Recent Tickets\">\r\n\r\n  <!-- Card Tools -->\r\n  <card-tool>\r\n    <a href=\"javascript:void(0)\" class=\"dt-card__more\">See All</a>\r\n  </card-tool>\r\n  <!-- /card tools -->\r\n\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<card-body class=\"p-0\">\r\n  <!-- Widget -->\r\n  <div class=\"dt-widget dt-widget-hover-bg\">\r\n    <!-- Widget Item -->\r\n    <div class=\"dt-widget__item\" *ngFor=\"let ticket of tickets\">\r\n\r\n      <!-- Widget Image -->\r\n      <div class=\"dt-widget__img\">\r\n        <!-- Avatar -->\r\n        <gx-avatar [user]=\"ticket.user\" class=\"size-30\"></gx-avatar>\r\n        <!-- /avatar -->\r\n      </div>\r\n      <!-- /widget image -->\r\n\r\n      <!-- Widget Info -->\r\n      <div class=\"dt-widget__info text-truncate\">\r\n        <a href=\"javascript:void(0)\" class=\"dt-widget__title text-truncate\">{{ticket.message}}</a>\r\n        <p class=\"dt-widget__subtitle text-truncate\">\r\n          <a href=\"javascript:void(0)\">{{ticket.user.name == 'Babulal Kumawat'? 'You' : ticket.user.name}}</a>\r\n          {{ticket.replied}}\r\n        </p>\r\n      </div>\r\n      <!-- /widget info -->\r\n\r\n      <!-- Widget Extra -->\r\n      <div class=\"dt-widget__extra\">\r\n        <span class=\"badge badge-circle-animate align-text-top\" [ngClass]=\"ticket.status.color\">{{ticket.status.text}}</span>\r\n      </div>\r\n      <!-- /widget extra -->\r\n\r\n    </div>\r\n    <!-- /widgets item -->\r\n\r\n  </div>\r\n  <!-- /widget -->\r\n</card-body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Dashboard - Crypto</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n \r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6\" *ngFor=\"let crypto of widgets.cryptoCards\">\r\n\r\n    <gx-crypto-card gxCard [data]=\"crypto.data\">\r\n\r\n      <!-- Chart -->\r\n      <gx-chartist-chart class=\"dt-chart__body\"\r\n                         classNames=\"stroke-w-3 drop-shadow mt-n8 mb-n2\"\r\n                         [lineSmooth]=\"1\"\r\n                         [type]=\"crypto.chart.type\"\r\n                         [data]=\"crypto.chart.data\"\r\n                         [options]=\"crypto.chart.options\"\r\n                         [events]=\"crypto.chart.events\"></gx-chartist-chart>\r\n      <!-- /chart -->\r\n\r\n    </gx-crypto-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <section-balance-portfolio gxCard\r\n                               fullHeight\r\n                               [data]=\"widgets.balancePortfolio\"></section-balance-portfolio>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <section-balance-history gxCard\r\n                             fullHeight\r\n                             [data]=\"widgets.balanceHistory\"></section-balance-history>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-5 col-md-12\">\r\n\r\n    <app-section-pricing-updates gxCard fullHeight\r\n                                 class=\"pb-4\"\r\n                                 [data]=\"widgets.pricing\"></app-section-pricing-updates>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-6\">\r\n\r\n    <gx-currency-calculator gxCard fullHeight cardTitle=\"Currency Calculator\"></gx-currency-calculator>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-md-6\">\r\n\r\n    <gx-invite-friends-card gxCard fullHeight\r\n                            class=\"bg-image-v6 bg-overlay overlay-opacity-0_8 bg-gradient-blue--after text-white\"></gx-invite-friends-card>\r\n\r\n  </div>\r\n  <!-- / grid Item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 order-xl-2\">\r\n\r\n    <!-- Grid -->\r\n    <div class=\"row\">\r\n      <!-- Grid Item -->\r\n      <div class=\"col-xl-12 col-md-6\">\r\n\r\n        <gx-download-apps-card gxCard\r\n                               class=\"bg-image-v7 bg-overlay bg-overlay-black overlay-opacity-0_1 text-white overflow-hidden\"\r\n                               [cardData]=\"widgets.downloadApp\"></gx-download-apps-card>\r\n\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-xl-12\">\r\n        <table-payment-history gxCard></table-payment-history>\r\n      </div>\r\n      <!-- /grid item -->\r\n    </div>\r\n    <!-- /grid -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-8 order-xl-1\">\r\n\r\n    <gx-crepto-news bsCard\r\n                    [title]=\"widgets.cryptoNews.title\"\r\n                    [categories]=\"widgets.cryptoNews.categories\"\r\n                    [news]=\"widgets.cryptoNews.newsData\"></gx-crepto-news>\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crypto-dashboard/section-balance-history/section-balance-history.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crypto-dashboard/section-balance-history/section-balance-history.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header [card-title]=\"data.title\">\r\n\r\n  <!-- Card Tools -->\r\n  <card-tool>\r\n\r\n    <!-- Dropdown -->\r\n    <div class=\"d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n      <a class=\"d-inline-block f-12 py-1 px-2 border rounded text-light-gray\"\r\n         href=\"javascript:void(0)\" ngbDropdownToggle>\r\n        Last 30 days\r\n      </a>\r\n\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Last week</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Last 6 month</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Last 1 year</a>\r\n      </div>\r\n    </div>\r\n    <!-- /dropdown -->\r\n\r\n  </card-tool>\r\n  <!-- /card tools -->\r\n\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<!-- Chart Body -->\r\n<gx-chartist-chart class=\"dt-chart__body\"\r\n                   classNames=\"stroke-w-2 fill-opacity-1\"\r\n                   [type]=\"data.chart.type\"\r\n                   [lineSmooth]=\"data.chart.lineSmooth\"\r\n                   [data]=\"data.chart.data\"\r\n                   [options]=\"data.chart.options\"\r\n                   [events]=\"data.chart.events\"></gx-chartist-chart>\r\n<!-- /chart body -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crypto-dashboard/section-balance-portfolio/section-balance-portfolio.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crypto-dashboard/section-balance-portfolio/section-balance-portfolio.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header class=\"mb-4\">\r\n\r\n  <!-- Card Heading -->\r\n  <card-heading>\r\n    <h3 class=\"dt-card__title\">\r\n      <gx-icon name=\"revenue\" size=\"xl\" class=\"mr-3\"></gx-icon>\r\n      <span class=\"align-bottom\">{{data.title}}</span>\r\n    </h3>\r\n  </card-heading>\r\n  <!-- /card heading -->\r\n\r\n  <!-- Card Tools -->\r\n  <card-tool>\r\n    <a href=\"javascript:void(0)\" class=\"dt-card__more\">\r\n      <gx-icon name=\"circle-add-o\" class=\"mr-2\"></gx-icon>Add New\r\n    </a>\r\n  </card-tool>\r\n  <!-- /card tools -->\r\n\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<card-body class=\"pb-4\">\r\n  <!-- Grid -->\r\n  <div class=\"row no-gutters\">\r\n    <!-- Grid Item -->\r\n    <div class=\"col-sm-7 mb-8 mb-sm-0\">\r\n      <div class=\"d-flex align-items-baseline mb-1\">\r\n        <span class=\"display-2 font-weight-500 text-dark mr-2\">{{data.amount}}</span>\r\n        <div class=\"trending-section font-weight-500\" [ngClass]=\"data.progress.color\">\r\n          <span class=\"value\">{{data.progress.value}}</span>\r\n          <gx-icon [name]=\"data.progress.icon\"></gx-icon>\r\n        </div>\r\n      </div>\r\n      <p class=\"mb-0\">Overall balance</p>\r\n    </div>\r\n    <!-- /grid item -->\r\n\r\n    <!-- Grid Item -->\r\n    <div class=\"col-sm-5\">\r\n      <div class=\"mb-3\">\r\n        <button *ngFor=\"let btn of data.buttons\" class=\"btn mr-3 btn-sm\" [ngClass]=\"btn.style\">{{btn.label}}</button>\r\n      </div>\r\n      <p class=\"mb-0\">A/C: 4578******45</p>\r\n    </div>\r\n    <!-- /grid item -->\r\n\r\n  </div>\r\n  <!-- /grid -->\r\n\r\n  <!-- Separator -->\r\n  <hr class=\"my-5\">\r\n  <!-- /separator -->\r\n\r\n  <div class=\"position-relative\">\r\n    <h5>{{data.statusTitle}}</h5>\r\n    <!-- Grid -->\r\n    <div class=\"row no-gutters\">\r\n      <!-- Grid Item -->\r\n      <div class=\"col-sm-4 col-12 mb-2 mb-sm-0\" *ngFor=\"let row of data.records\">\r\n        <!-- Media -->\r\n        <div class=\"media\">\r\n\r\n          <circle-progress\r\n            class=\"mr-2 size-50\"\r\n            [percent]=\"row.circleProgress.percent\"\r\n            [radius]=\"row.circleProgress.radius\"\r\n            [outerStrokeWidth]=\"row.circleProgress.thickness\"\r\n            [outerStrokeColor]=\"row.circleProgress.color\"\r\n            [innerStrokeWidth]=\"row.circleProgress.thickness\"\r\n            [innerStrokeColor]=\"'#e7e8ea'\"\r\n            [space]=\"-row.circleProgress.thickness\"\r\n            [animation]=\"true\"\r\n            [animationDuration]=\"300\"\r\n            [showTitle]=\"false\"\r\n            [showSubtitle]=\"false\"\r\n            [showUnits]=\"false\"></circle-progress>\r\n\r\n          <!-- Media Body -->\r\n          <div class=\"media-body align-self-center\">\r\n            <h5 class=\"mb-0\">{{row.label}}</h5>\r\n            <div class=\"d-flex align-items-baseline\">\r\n              <span class=\"display-5 font-weight-500 text-primary mr-2\">{{row.value}}</span>\r\n              <div class=\"trending-section\">\r\n                <span class=\"value f-12\">{{(row.percentage/100) | percent:'1.0-2'}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /media body -->\r\n\r\n        </div>\r\n        <!-- /media -->\r\n      </div>\r\n      <!-- /grid item -->\r\n    </div>\r\n    <!-- /grid -->\r\n  </div>\r\n\r\n</card-body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crypto-dashboard/table-payment-history/table-payment-history.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crypto-dashboard/table-payment-history/table-payment-history.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header class=\"mb-4\" card-title=\"Order History\">\r\n\r\n  <!-- Card Tools -->\r\n  <card-tool><a href=\"javascript:void(0)\" class=\"dt-card__more\">Detailed History</a></card-tool>\r\n  <!-- /card tools -->\r\n\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<!-- Card Body -->\r\n<card-body class=\"pb-5\">\r\n\r\n  <!-- Tables -->\r\n  <div class=\"table-responsive ps-custom-scrollbar\">\r\n    <table class=\"table table-ordered table-bordered-0 mb-0\">\r\n      <thead>\r\n      <tr>\r\n        <th class=\"text-uppercase\">Currency</th>\r\n        <th class=\"text-uppercase text-right\" scope=\"col\">Rate (USD)\r\n        </th>\r\n        <th class=\"text-uppercase text-center\" scope=\"col\">Date</th>\r\n        <th class=\"text-uppercase text-right\" scope=\"col\">Fee</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td>0.24 BTC</td>\r\n        <td class=\"text-right text-nowrap\">1 BTC = $740</td>\r\n        <td class=\"text-center\">08.10.17</td>\r\n        <td class=\"text-right text-danger\">-$2.33</td>\r\n      </tr>\r\n      <tr>\r\n        <td>0.32 RPL</td>\r\n        <td class=\"text-right text-nowrap\">1 RPL = $80.2</td>\r\n        <td class=\"text-center\">08.03.17</td>\r\n        <td class=\"text-right text-danger\">-$1.23</td>\r\n      </tr>\r\n      <tr>\r\n        <td>0.24 BTC</td>\r\n        <td class=\"text-right text-nowrap\">1 BTC = $740</td>\r\n        <td class=\"text-center\">07.29.17</td>\r\n        <td class=\"text-right text-danger\">-$3.22</td>\r\n      </tr>\r\n      <tr>\r\n        <td>0.22 BTC</td>\r\n        <td class=\"text-right text-nowrap\">1 BTC = $740</td>\r\n        <td class=\"text-center\">07.28.17</td>\r\n        <td class=\"text-right text-danger\">-$3.22</td>\r\n      </tr>\r\n      <tr>\r\n        <td>0.74 LTE</td>\r\n        <td class=\"text-right text-nowrap\">1 LTE = $99.9</td>\r\n        <td class=\"text-center\">05.22.17</td>\r\n        <td class=\"text-right text-danger\">-$2.21</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <!-- /tables -->\r\n\r\n</card-body>\r\n<!-- /card body -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Dashboard - Listing</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6 col-12\" *ngFor=\"let item of widgets.statistics\">\r\n\r\n    <gx-statistics-card gxCard\r\n                        [data]=\"item\"></gx-statistics-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-6 order-xl-1\">\r\n\r\n    <widget-current-plan gxCard class=\"bg-primary text-white\"></widget-current-plan>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-6 order-xl-3\">\r\n\r\n    <gx-card body-class=\"p-6\">\r\n      <!-- Media -->\r\n      <div class=\"media mb-3\">\r\n\r\n        <!-- Avatar -->\r\n        <img class=\"img-fluid mr-6\" src=\"assets/images/widget/home-logo.jpg\"\r\n             alt=\"project\">\r\n        <!-- /avatar -->\r\n\r\n        <!-- Media Body -->\r\n        <div class=\"media-body align-self-center\">\r\n          <div class=\"h2 mb-1\">Modern home</div>\r\n          <span class=\"d-block text-light-gray\">Biloxy, Boston</span>\r\n        </div>\r\n        <!-- /media body -->\r\n\r\n      </div>\r\n      <!-- /media -->\r\n\r\n      <!-- Card text -->\r\n      <p>Structure sales Pvt. Ltd is boston’s reputed government construction company since 2011.</p>\r\n      <!-- /card text -->\r\n\r\n      <!-- Button -->\r\n      <a href=\"javascript:void(0)\" class=\"card-link\">Read More</a>\r\n      <!-- /button -->\r\n    </gx-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 order-xl-2\">\r\n\r\n    <widget-closed-deals gxCard fullHeight\r\n                         [data]=\"widgets.closedDeals.data\"\r\n                         [chart]=\"widgets.closedDeals.chart\"></widget-closed-deals>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-8 order-xl-4\">\r\n    <!-- Grid -->\r\n    <div class=\"row\">\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-xl-12\">\r\n\r\n        <gx-clients-list perfectScrollbar\r\n                         [perfectScrollbar]=\"{suppressScrollX: false}\"\r\n                         class=\"w-100 mb-6 position-relative d-block\"\r\n                         [clients]=\"widgets.clients\"></gx-clients-list>\r\n\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-xl-12\">\r\n\r\n        <widget-properties-list bsCard\r\n                                [categories]=\"widgets.categories\"\r\n                                [properties]=\"widgets.properties\"></widget-properties-list>\r\n\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n    </div>\r\n    <!-- /grid -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 order-xl-5\">\r\n\r\n    <gx-activities gxCard [activities]=\"activities\" title=\"Recent Activities\"></gx-activities>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/listing-dashboard/widget-closed-deals/widget-closed-deals.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/listing-dashboard/widget-closed-deals/widget-closed-deals.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header class=\"mb-0\">\r\n\r\n  <!-- Card Heading -->\r\n  <card-heading>\r\n    <h3 class=\"dt-card__title\">{{data.title}}</h3>\r\n    <span class=\"text-light-gray f-12\">{{data.sub_title}}</span>\r\n  </card-heading>\r\n  <!-- /card heading -->\r\n\r\n  <!-- Card Tools -->\r\n  <card-tool class=\"align-self-start\">\r\n      <span *ngFor=\"let legend of data.legends; let idx = index\"\r\n            class=\"dt-card__more font-weight-normal ml-{{idx + 1}}\">\r\n        <span class=\"dot-shape mr-2\" [ngClass]=\"legend.color\"></span>{{legend.name}}\r\n      </span>\r\n  </card-tool>\r\n  <!-- /card tools -->\r\n\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<card-body class=\"px-4 pb-1\">\r\n    <gx-chartist-chart\r\n      class=\"dt-chart__body my-n2 d-block\"\r\n      [type]=\"chart.chartType\"\r\n      [data]=\"chart.data\"\r\n      [options]=\"chart.options\"\r\n      [lineSmooth]=\"chart.lineSmooth\"\r\n      [events]=\"events\"\r\n      classNames=\"stroke-dasharray-0\"\r\n    ></gx-chartist-chart>\r\n</card-body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/listing-dashboard/widget-current-plan/widget-current-plan.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/listing-dashboard/widget-current-plan/widget-current-plan.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header class=\"pt-6 px-6 mb-4\">\r\n  <!-- Card Heading -->\r\n  <card-heading>\r\n    <h3 class=\"dt-card__title text-white\">Your Current Plan</h3>\r\n  </card-heading>\r\n  <!-- /card heading -->\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<card-body class=\"px-6\">\r\n  <!-- Grid -->\r\n  <div class=\"row no-gutters\">\r\n    <!-- Grid Item -->\r\n    <div class=\"col-6 pr-2 border-right\">\r\n      <div class=\"display-1 font-weight-500 mb-3\">\r\n        $19<span class=\"d-inline-block f-14\">/month</span>\r\n      </div>\r\n\r\n      <ul class=\"pl-4 mb-0 dt-list-square\">\r\n        <li>Max listing items 2K</li>\r\n        <li>Max agents - 10</li>\r\n      </ul>\r\n    </div>\r\n    <!-- /grid item -->\r\n    <!-- Grid Item -->\r\n    <div class=\"col-6 text-center\">\r\n      <p>Expires in 80 days</p>\r\n      <div class=\"mb-3\">\r\n        <a href=\"javascript:void(0)\"\r\n           class=\"btn btn-secondary btn-xs text-uppercase\">Renew Plan</a>\r\n      </div>\r\n      <a href=\"javascript:void(0)\" class=\"text-white\">Other Plans</a>\r\n    </div>\r\n    <!-- /grid item -->\r\n  </div>\r\n  <!-- /grid -->\r\n</card-body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/listing-dashboard/widget-properties-list/widget-properties-list.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/listing-dashboard/widget-properties-list/widget-properties-list.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<bs-card-header class=\"card-nav border-bottom-0\">\r\n\r\n  <div class=\"d-flex align-items-center justify-content-between mb-4\">\r\n    <h3 class=\"dt-card__title\">Properties</h3>\r\n\r\n    <!-- Search Box -->\r\n    <form class=\"search-box ml-2 max-w-250\">\r\n      <input class=\"form-control form-control-sm\"\r\n             placeholder=\"Search in app...\"\r\n             [formControl]=\"searchQuery\" [formControl]=\"searchQuery\"\r\n             type=\"search\">\r\n      <span class=\"search-icon\">\r\n        <gx-icon name=\"search\" size=\"lg\"></gx-icon>\r\n      </span>\r\n    </form>\r\n    <!-- /search box -->\r\n  </div>\r\n\r\n  <!-- Menu -->\r\n  <ul class=\"card-header-tabs nav nav-tabs nav-tabs-sm nav-scroll mx-0\">\r\n    <li class=\"nav-item\">\r\n      <a href=\"javascript:void(0)\"\r\n         class=\"nav-link\"\r\n         [ngClass]=\"{'active':currentCategory == 'All'}\"\r\n         (click)=\"onChangeCategory('All')\">All</a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\" *ngFor=\"let category of categories\">\r\n      <a href=\"javascript:void(0)\"\r\n         class=\"nav-link\"\r\n         [ngClass]=\"{'active':currentCategory == category}\"\r\n         (click)=\"onChangeCategory(category)\">{{category}}</a>\r\n    </li>\r\n  </ul>\r\n  <!-- /menu -->\r\n\r\n</bs-card-header>\r\n<!-- /card header -->\r\n\r\n<!-- Tab Content-->\r\n<bs-card-outer-body class=\"tab-content\">\r\n\r\n  <!-- Tab panel -->\r\n  <div class=\"tab-pane active\">\r\n\r\n    <bs-card-body>\r\n      <ng-container\r\n        *ngFor=\"let property of visibleList | filter: searchText; index as i; first as isFirst; last as isLast\">\r\n\r\n        <!-- Card -->\r\n        <gx-list *ngIf=\"i < maxVisibleItems\" class=\"shadow-none horizontal\"\r\n                 [ngClass]=\"{'rounded-0 pb-8 border-bottom':(i+1) < maxVisibleItems, 'mb-0':(i+1) === maxVisibleItems}\"\r\n                 classNames=\"order-sm-1\"\r\n                 bodyClass=\"pt-sm-0 pb-0 px-0 pr-sm-6 pr-md-8\"\r\n                 footerClass=\"d-flex flex-column justify-content-between p-0 text-sm-right\">\r\n          <!-- Slider Header -->\r\n          <gx-slider class=\"rounded-xl overflow-hidden order-sm-2\">\r\n            <gx-slider-header>\r\n              <span *ngIf=\"property.is_featured\" class=\"badge bg-orange text-white text-uppercase\">featured</span>\r\n\r\n              <!-- Checkbox -->\r\n              <div class=\"dt-checkbox dt-checkbox-icon dt-checkbox-only\">\r\n                <input id=\"checkbox-{{i}}\" type=\"checkbox\" [ngModel]=\"property.favourite\">\r\n                <label class=\"font-weight-light dt-checkbox-content\" for=\"checkbox-{{i}}\">\r\n                  <span class=\"unchecked\"><gx-icon name=\"heart-o\" class=\"text-white\"></gx-icon></span>\r\n                  <span class=\"checked\"><gx-icon name=\"heart\" class=\"text-white\"></gx-icon></span>\r\n                </label>\r\n              </div>\r\n              <!-- /checkbox -->\r\n            </gx-slider-header>\r\n\r\n            <!-- Slider Carouse -->\r\n            <slideshow class=\"grid-carousel\"\r\n                       dotColor=\"#D1C4E9\"\r\n                       [imageUrls]=\"property.imageUrls\"\r\n                       [showArrows]=\"false\"\r\n                       [showDots]=\"true\"\r\n                       [minHeight]=\"'150px'\"\r\n                       [lazyLoad]=\"true\">\r\n            </slideshow>\r\n            <!-- /Slider Carouse -->\r\n\r\n          </gx-slider>\r\n          <!-- /slider header -->\r\n\r\n          <!-- Badges -->\r\n          <span class=\"badge text-uppercase mb-2\"\r\n                [ngClass]=\"{'badge-secondary':property.for==='For sale', 'bg-orange text-white':property.for!=='For sale'}\">{{property.for}}</span>\r\n          <!-- /badges -->\r\n\r\n          <!-- Card Title-->\r\n          <h3 class=\"card-title font-weight-normal text-truncate\">{{property.title}}</h3>\r\n          <!-- Card Title-->\r\n\r\n          <!-- Card Sub Title-->\r\n          <h5 class=\"card-subtitle\">{{property.location}}</h5>\r\n          <!-- /card sub title-->\r\n\r\n          <!-- Pricing -->\r\n          <div class=\"d-flex align-items-baseline price mb-1\">\r\n            <span class=\"d-block text-primary font-weight-500 display-5 mr-1\">{{property.price|currency:'USD':'symbol-narrow':'4.0-2'}}</span>\r\n            <span class=\"d-inline-block text-light-gray f-12\">{{symbol+property.unit}}</span>\r\n          </div>\r\n          <!-- /pricing -->\r\n\r\n          <!-- Card Button -->\r\n          <a href=\"javascript:void(0)\" class=\"card-link font-weight-500\">\r\n            <span>Check in detail</span>\r\n            <gx-icon name=\"arrow-long-right\" size=\"lg\" class=\"ml-1\"></gx-icon>\r\n          </a>\r\n          <!-- /card button -->\r\n        </gx-list>\r\n        <!-- /card -->\r\n\r\n      </ng-container>\r\n    </bs-card-body>\r\n\r\n  </div>\r\n  <!-- /tab panel -->\r\n\r\n</bs-card-outer-body>\r\n<!-- /tab content-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/real-state-dashboard/most-search-places/most-search-places.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/real-state-dashboard/most-search-places/most-search-places.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Grid -->\r\n<div class=\"row no-gutters\">\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n    <!-- Card Body -->\r\n    <div class=\"dt-card__body pr-xl-0 h-100\">\r\n      <div class=\"embed-responsive embed-responsive-16by9 h-100\">\r\n        <agm-map class=\"embed-responsive-item border\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n            <agm-info-window>\r\n              <h3>Default Info Window</h3>\r\n              Adding an Info Window to a Map Marker\r\n            </agm-info-window>\r\n          </agm-marker>\r\n        </agm-map>\r\n      </div>\r\n    </div>\r\n    <!-- /card body -->\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <!-- Card Header -->\r\n    <div class=\"dt-card__header mb-0\">\r\n      <!-- Card Heading -->\r\n      <card-heading>\r\n        <h3 class=\"dt-card__title\">Most Search Places</h3>\r\n      </card-heading>\r\n      <!-- /card heading -->\r\n\r\n      <!-- Card Tools -->\r\n      <card-tool>\r\n        <ul class=\"nav nav-sm nav-underline nav-underline-none\">\r\n          <li class=\"nav-item\" *ngFor=\"let category of categories\">\r\n            <a href=\"javascript:void(0)\"\r\n               class=\"nav-link\"\r\n               [ngClass]=\"{'active':category.slug === currentCat}\"\r\n               (click)=\"onChangeCategory(category)\">{{category.name}}</a>\r\n          </li>\r\n        </ul>\r\n      </card-tool>\r\n      <!-- /card tools -->\r\n    </div>\r\n    <!-- /card header -->\r\n\r\n    <card-body>\r\n      <!-- Tab Content-->\r\n      <div class=\"tab-content\">\r\n\r\n        <!-- Tab panel -->\r\n        <div class=\"tab-pane active\">\r\n\r\n          <!-- Tables -->\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-hover-text mb-0 table-fluid\">\r\n              <thead>\r\n              <tr>\r\n                <th scope=\"col\">{{locationTitle}} Name</th>\r\n                <th class=\"text-right\" scope=\"col\">Properties</th>\r\n                <th class=\"text-right\" scope=\"col\">Vendors</th>\r\n                <th scope=\"col\">Visitors</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let place of visibleItems\">\r\n                <td class=\"text-dark\">{{place.location}}</td>\r\n                <td class=\"text-right\">{{place.properties|number}}</td>\r\n                <td class=\"text-right\">{{place.vendors|number}}</td>\r\n                <td>{{place.visitors|number}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- /tables -->\r\n\r\n        </div>\r\n        <!-- /tab panel -->\r\n\r\n      </div>\r\n      <!-- /tab content-->\r\n    </card-body>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n</div>\r\n<!-- /grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header pageTitle=\"Dashboard - Real Estate\"></app-page-header>\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-6 order-xl-1\">\r\n\r\n    <app-section-static-chart gxCard fullHeight class=\"dt-chart overflow-hidden\"></app-section-static-chart>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-6 order-xl-3\">\r\n\r\n    <app-section-revenue-chart gxCard fullHeight class=\"dt-chart overflow-hidden\"></app-section-revenue-chart>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 col-12 order-xl-2\">\r\n\r\n    <!-- Grid -->\r\n    <div class=\"row\">\r\n      <!-- Grid Item -->\r\n      <div class=\"col-sm-6\" *ngFor=\"let row of widgets.analyticsCards\">\r\n\r\n        <gx-analytic-card\r\n          gxCard\r\n          [title]=\"row.title\"\r\n          [description]=\"row.description\"\r\n          [icon]=\"row.icon\"\r\n          [number]=\"row.number\"\r\n          [percent]=\"row.percent\"\r\n          [positiveGrowth]=\"row.positiveGrowth\"></gx-analytic-card>\r\n\r\n      </div>\r\n      <!-- /grid item -->\r\n    </div>\r\n    <!-- /grid -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-6 order-xl-4\">\r\n\r\n    <gx-top-vendors gxCard\r\n                    [vendors]=\"widgets.topVendors\"\r\n                    class=\"pb-5\"></gx-top-vendors>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-6 order-xl-5\">\r\n\r\n    <!-- Card -->\r\n    <gx-properties gxCard class=\"pb-4\" card-title=\"Trending Properties\" [properties]=\"widgets.trendingProperties\"></gx-properties>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-12 order-xl-6\">\r\n    <!-- Card -->\r\n    <app-most-search-places gxCard [data]=\"widgets.places\"></app-most-search-places>\r\n    <!-- /card -->\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-6 order-xl-7\">\r\n\r\n    <!-- Card -->\r\n    <app-section-vendor-requests gxCard fullHeight\r\n                                 class=\"pb-4\"\r\n                                 [vendorRequests]=\"widgets.vendorRequests\"></app-section-vendor-requests>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-6 order-xl-7\">\r\n\r\n    <app-section-support-tickets gxCard fullHeight\r\n                                 class=\"pb-4\"\r\n                                 [supportTickets]=\"widgets.supportTickets\"></app-section-support-tickets>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 order-xl-11\">\r\n\r\n    <!-- Card -->\r\n    <gx-referral-traffic gxCard fullHeight\r\n                         [chart]=\"widgets.referralTrafficChart\"\r\n                         [progressRecords]=\"widgets.progressRecords\"></gx-referral-traffic>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6 order-xl-9\">\r\n\r\n    <gx-echarts-liquidfill gxCard\r\n                           fullHeight\r\n                           title=\"Realtime Users\"\r\n                           figure=\"270\"\r\n                           [data]=\"widgets.realUsersChart\"></gx-echarts-liquidfill>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6 order-xl-10\">\r\n\r\n    <!-- Card -->\r\n    <gx-ratings gxCard fullHeight [reviews]=\"widgets.reviews\"></gx-ratings>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-12 order-xl-12\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Recently Added Properties\" header-class=\"mb-0\"\r\n             body-class=\"pb-3\">\r\n\r\n      <card-tool><!-- List -->\r\n        <ul class=\"dt-list dt-list-sm dt-list-cm-0\">\r\n          <!-- List Item -->\r\n          <li class=\"dt-list__item\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-xs\">Add New</button>\r\n          </li>\r\n          <!-- /list item -->\r\n\r\n          <!-- List Item -->\r\n          <li class=\"dt-list__item\">\r\n            <!-- Dropdown -->\r\n            <div class=\"d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n              <a class=\"d-inline-block f-12 py-1 px-2 py-1 border rounded\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n                Unread\r\n              </a>\r\n\r\n              <div ngbDropdownMenu>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\">Read</a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\">Unread</a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\">Spam</a>\r\n              </div>\r\n            </div>\r\n            <!-- /dropdown -->\r\n          </li>\r\n          <!-- /list item -->\r\n        </ul>\r\n        <!-- /list -->\r\n      </card-tool>\r\n\r\n      <!-- Tables -->\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table mb-0 table-fluid\">\r\n          <thead>\r\n          <tr>\r\n            <th scope=\"col\">ID</th>\r\n            <th scope=\"col\">Property Name</th>\r\n            <th scope=\"col\">Owner</th>\r\n            <th scope=\"col\">City</th>\r\n            <th scope=\"col\">State</th>\r\n            <th scope=\"col\">Price</th>\r\n            <th scope=\"col\">Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let property of widgets.propertiesList; let i = index;\">\r\n            <td>{{i+1}}</td>\r\n            <td class=\"text-dark\">{{property.name}}</td>\r\n            <td>{{property.ownerName}}</td>\r\n            <td>{{property.city}}</td>\r\n            <td>{{property.state}}</td>\r\n            <td>{{property.price}}</td>\r\n            <td>\r\n              <!-- List -->\r\n              <ul class=\"dt-list dt-list-cm-0\">\r\n                <!-- List Item -->\r\n                <li class=\"dt-list__item\">\r\n                  <a class=\"text-light-gray\" href=\"javascript:void(0)\">\r\n                    <gx-icon name=\"editors\"></gx-icon>\r\n                  </a>\r\n                </li>\r\n                <!-- /list item -->\r\n\r\n                <!-- List Item -->\r\n                <li class=\"dt-list__item\">\r\n                  <a class=\"text-light-gray\" href=\"javascript:void(0)\">\r\n                    <gx-icon name=\"trash-filled\"></gx-icon>\r\n                  </a>\r\n                </li>\r\n                <!-- /list item -->\r\n\r\n                <!-- List Item -->\r\n                <li class=\"dt-list__item\">\r\n                  <!-- Dropdown -->\r\n                  <div ngbDropdown placement=\"left\">\r\n                    <a class=\"no-arrow text-light-gray\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n                      <gx-icon name=\"horizontal-more\" [fw]=\"true\"></gx-icon>\r\n                    </a>\r\n\r\n                    <div ngbDropdownMenu>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                  <!-- /dropdown -->\r\n                </li>\r\n                <!-- /list item -->\r\n              </ul>\r\n              <!-- /list -->\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <!-- /table -->\r\n\r\n    </gx-card>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6 col-12\" *ngFor=\"let socialCard of widgets.socialCards\">\r\n\r\n    <gx-social-card [title]=\"socialCard.title\"\r\n                    [color]=\"socialCard.color\"\r\n                    [logoIcon]=\"socialCard.logoIcon\"\r\n                    [likes]=\"socialCard.likes\"\r\n                    [friends]=\"socialCard.friends\"\r\n                    [followers]=\"socialCard.followers\"></gx-social-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-7 order-xl-2\">\r\n\r\n    <app-section-our-team gxCard\r\n                          class=\"dt-contact-card\"\r\n                          [teamCategories]=\"widgets.teamCategories\"\r\n                          [members]=\"widgets.teamMembers\"></app-section-our-team>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-5 col-md-6 order-xl-1\">\r\n\r\n    <app-section-pricing-plans gxCard [pricingPlans]=\"widgets.pricingPlans\" class=\"pb-4\"></app-section-pricing-plans>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-5 col-md-6 order-xl-4\">\r\n\r\n    <gx-value-calculator gxCard class=\"bg-info text-white\"></gx-value-calculator>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-7 order-xl-3\">\r\n\r\n    <gx-invoices gxCard [invoices]=\"widgets.invoices\"></gx-invoices>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/real-state-dashboard/revenue/revenue.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/real-state-dashboard/revenue/revenue.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<div class=\"dt-card__header\">\r\n\r\n  <!-- Card Heading -->\r\n  <div class=\"dt-card__heading\">\r\n    <h3 class=\"dt-card__title\">Revenue</h3>\r\n  </div>\r\n  <!-- /card heading -->\r\n\r\n  <card-tool>\r\n    <!-- Dropdown -->\r\n    <div class=\"d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n      <a class=\"d-inline-block f-12 py-1 px-2 py-1 border rounded\" href=\"javascript:void(0)\" ngbDropdownToggle>{{selectedDay.name}}</a>\r\n\r\n      <div ngbDropdownMenu>\r\n        <a *ngFor=\"let day of days\" href=\"javascript:void(0)\" class=\"dropdown-item\" [ngClass]=\"{active:selectedDay.slug === day.slug}\"\r\n           (click)=\"onClickDay($event, day)\">{{day.name}}</a>\r\n      </div>\r\n    </div>\r\n    <!-- /dropdown -->\r\n  </card-tool>\r\n\r\n</div>\r\n<!-- /card header -->\r\n\r\n<div class=\"px-7 mb-7\">\r\n  <!-- Media -->\r\n  <div class=\"media\">\r\n    <!-- Media Body -->\r\n    <div class=\"media-body\">\r\n      <p class=\"mb-1 h3 text-sky-blue font-weight-500\">$12,45,125</p>\r\n      <span class=\"d-block\">Business Revenue</span>\r\n    </div>\r\n    <!-- /media body -->\r\n    <!-- Media Body -->\r\n    <div class=\"media-body\">\r\n      <p class=\"mb-1 h3 text-warning font-weight-500\">$14,200</p>\r\n      <span class=\"d-block\">Total Expenses</span>\r\n    </div>\r\n    <!-- /media body -->\r\n  </div>\r\n  <!-- /media -->\r\n</div>\r\n\r\n<gx-chart\r\n  class=\"dt-chart__body\"\r\n  [datasets]=\"chart.dataSets[selectedDay.slug]\"\r\n  [labels]=\"chart.labels\"\r\n  [options]=\"chart.options\"\r\n  [colors]=\"chart.colors\"\r\n  [chartType]=\"chart.chartType\"></gx-chart>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/real-state-dashboard/statics/statics.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/real-state-dashboard/statics/statics.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<div class=\"dt-card__header\">\r\n\r\n  <!-- Card Heading -->\r\n  <div class=\"dt-card__heading\">\r\n    <h3 class=\"dt-card__title\">Statics</h3>\r\n  </div>\r\n  <!-- /card heading -->\r\n\r\n  <card-tool>\r\n    <!-- Dropdown -->\r\n    <div class=\"d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n      <a class=\"d-inline-block f-12 py-1 px-2 py-1 border rounded\" href=\"javascript:void(0)\" ngbDropdownToggle>{{selectedDay.name}}</a>\r\n\r\n      <div ngbDropdownMenu>\r\n        <a *ngFor=\"let day of days\" href=\"javascript:void(0)\" class=\"dropdown-item\" [ngClass]=\"{active:selectedDay.slug === day.slug}\"\r\n           (click)=\"onClickDay($event, day)\">{{day.name}}</a>\r\n      </div>\r\n    </div>\r\n    <!-- /dropdown -->\r\n  </card-tool>\r\n\r\n</div>\r\n<!-- /card header -->\r\n\r\n<gx-chart\r\n  class=\"dt-chart__body\"\r\n  [datasets]=\"chart.dataSets[selectedDay.slug]\"\r\n  [labels]=\"chart.labels\"\r\n  [options]=\"chart.options\"\r\n  [colors]=\"chart.colors\"\r\n  [chartType]=\"chart.chartType\"></gx-chart>\r\n");

/***/ }),

/***/ "./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2NjdHYtY2FtMS1kYXNoYm9hcmQvY2N0di1jYW0xLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CctvCam1DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CctvCam1DashboardComponent", function() { return CctvCam1DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cctv_cam1_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cctv-cam1-dashboard.service */ "./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.service.ts");
/* harmony import */ var _widgets_widgets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/widgets.service */ "./src/app/content/main/widgets/widgets.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");





let CctvCam1DashboardComponent = class CctvCam1DashboardComponent {
    constructor(dataService, widgetService, db) {
        this.dataService = dataService;
        this.widgetService = widgetService;
        this.db = db;
        this.chartDataRef = this.db.database.ref('/chartdata/cam1');
        this.analyticsCards = [
            {
                title: 'Today\'s Temperature',
                description: 'Last update on 08:30 AM',
                icon: {
                    name: 'influence',
                    colorClasses: 'bg-primary text-primary'
                },
                number: '32 C',
                percent: '2',
                positiveGrowth: true
            },
            {
                title: 'Weather Today',
                description: 'Mostly Calm and Windy',
                icon: {
                    name: 'ripple',
                    colorClasses: 'bg-success text-success'
                },
                number: '21',
                percent: '1',
                positiveGrowth: true
            },
            {
                title: 'Total Attendance',
                description: 'Just updated',
                icon: {
                    name: 'customer',
                    colorClasses: 'bg-secondary text-secondary'
                },
                number: '508',
                percent: '5',
                positiveGrowth: false
            },
            {
                title: 'Issues Today',
                description: 'Last update 30 Min ago',
                icon: {
                    name: 'question-circle',
                    colorClasses: 'bg-orange text-orange'
                },
                number: '312',
                percent: '11',
                positiveGrowth: true
            }
        ];
        //this.chartData=this.dataService.getfirebaseData();
        this.widgets = this.dataService.widgets;
        this.topCards = this.widgetService.widgets;
        this.onTasksChanged = this.dataService.onTasksChanged.subscribe((tasks) => {
            this.tasks = tasks;
        });
    }
    ngOnInit() {
        let self = this;
        this.chartDataRef.on('value', ((snapshot) => {
            console.log(this);
            console.log(self);
            var x = self;
            snapshot.forEach((childSnapshot) => {
                console.log(x);
                let childKey = childSnapshot.key;
                let childData = childSnapshot.val();
                x.widgets.leads.monthlyLead.chart.datasets[0].data = childData.chartData[0].data;
                x.widgets.leads.monthlyLead.chart.datasets[0].label = childData.chartData[0].label;
                x.widgets.leads.monthlyLead.chart.labels = childData.chartLabels;
                //this.lineChartData1=childData.chartData;
                //this.lineChartLabels1=childData.chartLabels;
                // ...
            });
        }));
    }
    getfirebaseData() {
        this.chartDataRef.on('value', ((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let childKey = childSnapshot.key;
                let childData = childSnapshot.val();
                // ...
            });
        }));
    }
    ngOnDestroy() {
        this.onTasksChanged.unsubscribe();
    }
};
CctvCam1DashboardComponent.ctorParameters = () => [
    { type: _cctv_cam1_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["CctvCam1DashboardService"] },
    { type: _widgets_widgets_service__WEBPACK_IMPORTED_MODULE_3__["WidgetsService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] }
];
CctvCam1DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cctv-cam1-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cctv-cam1-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cctv-cam1-dashboard.component.scss */ "./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.component.scss")).default]
    })
], CctvCam1DashboardComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.service.ts ***!
  \********************************************************************************************/
/*! exports provided: CctvCam1DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CctvCam1DashboardService", function() { return CctvCam1DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let CctvCam1DashboardService = class CctvCam1DashboardService {
    constructor(http) {
        this.http = http;
        this.widgetsUrl = 'api/dashboard-crm-widgets';
        this.tasksUrl = 'api/tasks-list'; // URL to web api
        this.onTasksChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getWidgets(),
                this.getTasksList()
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    getWidgets() {
        return new Promise((resolve, reject) => {
            this.http.get(this.widgetsUrl)
                .subscribe((response) => {
                this.widgets = response;
                resolve(response);
            }, reject);
        });
    }
    /**
     * Get all tasks
     * @returns {Promise<any>}
     */
    getTasksList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.tasksUrl)
                .subscribe((response) => {
                this.tasks = response;
                this.onTasksChanged.next(this.tasks);
                resolve(this.tasks);
            }, reject);
        });
    }
    updateTask(task) {
        return new Promise((resolve, reject) => {
            this.http.post(this.tasksUrl + '/' + task.id, Object.assign({}, task))
                .subscribe(response => {
                this.getTasksList().then(tasks => {
                    resolve(tasks);
                }, reject);
            });
        });
    }
};
CctvCam1DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CctvCam1DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CctvCam1DashboardService);



/***/ }),

/***/ "./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2NjdHYtY2FtMi1kYXNoYm9hcmQvY2N0di1jYW0yLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CctvCam2DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CctvCam2DashboardComponent", function() { return CctvCam2DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cctv_cam2_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cctv-cam2-dashboard.service */ "./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.service.ts");
/* harmony import */ var _widgets_widgets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/widgets.service */ "./src/app/content/main/widgets/widgets.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");





let CctvCam2DashboardComponent = class CctvCam2DashboardComponent {
    constructor(dataService, widgetService, db) {
        this.dataService = dataService;
        this.widgetService = widgetService;
        this.db = db;
        this.chartDataRef = this.db.database.ref('/chartdata/cam2');
        this.analyticsCards = [
            {
                title: 'Today\'s Temperature',
                description: 'Last update on 08:30 AM',
                icon: {
                    name: 'influence',
                    colorClasses: 'bg-primary text-primary'
                },
                number: '32 C',
                percent: '2',
                positiveGrowth: true
            },
            {
                title: 'Weather Today',
                description: 'Mostly Calm and Windy',
                icon: {
                    name: 'ripple',
                    colorClasses: 'bg-success text-success'
                },
                number: '21',
                percent: '1',
                positiveGrowth: true
            },
            {
                title: 'Total Attendance',
                description: 'Just updated',
                icon: {
                    name: 'customer',
                    colorClasses: 'bg-secondary text-secondary'
                },
                number: '508',
                percent: '5',
                positiveGrowth: false
            },
            {
                title: 'Issues Today',
                description: 'Last update 30 Min ago',
                icon: {
                    name: 'question-circle',
                    colorClasses: 'bg-orange text-orange'
                },
                number: '312',
                percent: '11',
                positiveGrowth: true
            }
        ];
        //this.chartData=this.dataService.getfirebaseData();
        this.widgets = this.dataService.widgets;
        this.topCards = this.widgetService.widgets;
        this.onTasksChanged = this.dataService.onTasksChanged.subscribe((tasks) => {
            this.tasks = tasks;
        });
    }
    ngOnInit() {
        let self = this;
        this.chartDataRef.on('value', ((snapshot) => {
            var x = self;
            snapshot.forEach((childSnapshot) => {
                let childKey = childSnapshot.key;
                let childData = childSnapshot.val();
                x.widgets.leads.monthlyLead.chart.datasets[0].data = childData.chartData[0].data;
                x.widgets.leads.monthlyLead.chart.datasets[0].label = childData.chartData[0].label;
                x.widgets.leads.monthlyLead.chart.labels = childData.chartLabels;
            });
        }));
    }
    ngOnDestroy() {
        this.onTasksChanged.unsubscribe();
    }
};
CctvCam2DashboardComponent.ctorParameters = () => [
    { type: _cctv_cam2_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["CctvCam2DashboardService"] },
    { type: _widgets_widgets_service__WEBPACK_IMPORTED_MODULE_3__["WidgetsService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] }
];
CctvCam2DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cctv-cam2-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cctv-cam2-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cctv-cam2-dashboard.component.scss */ "./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.component.scss")).default]
    })
], CctvCam2DashboardComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.service.ts ***!
  \********************************************************************************************/
/*! exports provided: CctvCam2DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CctvCam2DashboardService", function() { return CctvCam2DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let CctvCam2DashboardService = class CctvCam2DashboardService {
    constructor(http) {
        this.http = http;
        this.widgetsUrl = 'api/dashboard-crm-widgets';
        this.tasksUrl = 'api/tasks-list'; // URL to web api
        this.onTasksChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getWidgets(),
                this.getTasksList()
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    getWidgets() {
        return new Promise((resolve, reject) => {
            this.http.get(this.widgetsUrl)
                .subscribe((response) => {
                this.widgets = response;
                resolve(response);
            }, reject);
        });
    }
    /**
     * Get all tasks
     * @returns {Promise<any>}
     */
    getTasksList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.tasksUrl)
                .subscribe((response) => {
                this.tasks = response;
                this.onTasksChanged.next(this.tasks);
                resolve(this.tasks);
            }, reject);
        });
    }
    updateTask(task) {
        return new Promise((resolve, reject) => {
            this.http.post(this.tasksUrl + '/' + task.id, Object.assign({}, task))
                .subscribe(response => {
                this.getTasksList().then(tasks => {
                    resolve(tasks);
                }, reject);
            });
        });
    }
};
CctvCam2DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CctvCam2DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CctvCam2DashboardService);



/***/ }),

/***/ "./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2NybS1kYXNoYm9hcmQvY3JtLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CrmDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmDashboardComponent", function() { return CrmDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _crm_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crm-dashboard.service */ "./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.service.ts");
/* harmony import */ var _widgets_widgets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/widgets.service */ "./src/app/content/main/widgets/widgets.service.ts");




let CrmDashboardComponent = class CrmDashboardComponent {
    constructor(dataService, widgetService) {
        this.dataService = dataService;
        this.widgetService = widgetService;
        this.analyticsCards = [
            {
                title: 'Today\'s Temperature',
                description: 'Last update on 08:30 AM',
                icon: {
                    name: 'influence',
                    colorClasses: 'bg-primary text-primary'
                },
                number: '32 C',
                percent: '2',
                positiveGrowth: true
            },
            {
                title: 'Weather Today',
                description: 'Mostly Calm and Windy',
                icon: {
                    name: 'ripple',
                    colorClasses: 'bg-success text-success'
                },
                number: '21',
                percent: '1',
                positiveGrowth: true
            },
            {
                title: 'Total Attendance',
                description: 'Just updated',
                icon: {
                    name: 'customer',
                    colorClasses: 'bg-secondary text-secondary'
                },
                number: '508',
                percent: '5',
                positiveGrowth: false
            },
            {
                title: 'Issues Today',
                description: 'Last update 30 Min ago',
                icon: {
                    name: 'question-circle',
                    colorClasses: 'bg-orange text-orange'
                },
                number: '312',
                percent: '11',
                positiveGrowth: true
            }
        ];
        this.widgets = this.dataService.widgets;
        this.topCards = this.widgetService.widgets;
        this.onTasksChanged = this.dataService.onTasksChanged.subscribe((tasks) => {
            this.tasks = tasks;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.onTasksChanged.unsubscribe();
    }
};
CrmDashboardComponent.ctorParameters = () => [
    { type: _crm_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["CrmDashboardService"] },
    { type: _widgets_widgets_service__WEBPACK_IMPORTED_MODULE_3__["WidgetsService"] }
];
CrmDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crm-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crm-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crm-dashboard.component.scss */ "./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.component.scss")).default]
    })
], CrmDashboardComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.service.ts ***!
  \********************************************************************************/
/*! exports provided: CrmDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmDashboardService", function() { return CrmDashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let CrmDashboardService = class CrmDashboardService {
    constructor(http) {
        this.http = http;
        this.widgetsUrl = 'api/dashboard-crm-widgets';
        this.tasksUrl = 'api/tasks-list'; // URL to web api
        this.onTasksChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getWidgets(),
                this.getTasksList()
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    getWidgets() {
        return new Promise((resolve, reject) => {
            this.http.get(this.widgetsUrl)
                .subscribe((response) => {
                this.widgets = response;
                resolve(response);
            }, reject);
        });
    }
    /**
     * Get all tasks
     * @returns {Promise<any>}
     */
    getTasksList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.tasksUrl)
                .subscribe((response) => {
                this.tasks = response;
                this.onTasksChanged.next(this.tasks);
                resolve(this.tasks);
            }, reject);
        });
    }
    updateTask(task) {
        return new Promise((resolve, reject) => {
            this.http.post(this.tasksUrl + '/' + task.id, Object.assign({}, task))
                .subscribe(response => {
                this.getTasksList().then(tasks => {
                    resolve(tasks);
                }, reject);
            });
        });
    }
};
CrmDashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CrmDashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CrmDashboardService);



/***/ }),

/***/ "./src/app/content/main/dashboards/crm-dashboard/widget-overview/widget-overview.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crm-dashboard/widget-overview/widget-overview.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2NybS1kYXNoYm9hcmQvd2lkZ2V0LW92ZXJ2aWV3L3dpZGdldC1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/dashboards/crm-dashboard/widget-overview/widget-overview.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crm-dashboard/widget-overview/widget-overview.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: WidgetOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetOverviewComponent", function() { return WidgetOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetOverviewComponent = class WidgetOverviewComponent {
    constructor() {
    }
    set map(map) {
        map.listeners = [
            {
                event: 'init',
                method: function (event) {
                    // get map object
                    const map = event.chart;
                    map.amLink.classList.add('amcharts-link');
                    // map.amLink.remove();
                    function createCustomMarker(image) {
                        // create holder
                        const holder = document.createElement('div');
                        holder.className = 'map-marker';
                        holder.title = image.title;
                        holder.style.position = 'absolute';
                        // maybe add a link to it?
                        if (undefined !== image.url) {
                            holder.onclick = function () {
                                window.location.href = image.url;
                            };
                            holder.className += ' map-clickable';
                        }
                        // create dot
                        const dot = document.createElement('div');
                        const dotClass = (image.dotColor) ? ' bg-' + image.dotColor : '';
                        const pulseClass = (image.pulseColor) ? ' pulse-' + image.pulseColor : '';
                        dot.className = 'dot-shape dot-shape-lg' + dotClass + pulseClass;
                        holder.appendChild(dot);
                        // append the marker to the map container
                        image.chart.chartDiv.appendChild(holder);
                        return holder;
                    }
                    // go through all of the images
                    for (let x in map.dataProvider.images) {
                        // get MapImage object
                        const image = map.dataProvider.images[x];
                        // check if it has corresponding HTML element
                        if ('undefined' === typeof image.externalElement) {
                            image.externalElement = createCustomMarker(image);
                        }
                        // reposition the element accoridng to coordinates
                        const xy = map.coordinatesToStageXY(image.longitude, image.latitude);
                        image.externalElement.style.top = xy.y + 'px';
                        image.externalElement.style.left = xy.x + 'px';
                    }
                }
            }
        ];
        this.trackingMap = map;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WidgetOverviewComponent.prototype, "statusReports", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WidgetOverviewComponent.prototype, "stats", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WidgetOverviewComponent.prototype, "map", null);
WidgetOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'widget-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crm-dashboard/widget-overview/widget-overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-overview.component.scss */ "./src/app/content/main/dashboards/crm-dashboard/widget-overview/widget-overview.component.scss")).default]
    })
], WidgetOverviewComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/crm-dashboard/widget-recent-tickets/widget-recent-tickets.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crm-dashboard/widget-recent-tickets/widget-recent-tickets.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2NybS1kYXNoYm9hcmQvd2lkZ2V0LXJlY2VudC10aWNrZXRzL3dpZGdldC1yZWNlbnQtdGlja2V0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/dashboards/crm-dashboard/widget-recent-tickets/widget-recent-tickets.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crm-dashboard/widget-recent-tickets/widget-recent-tickets.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: WidgetRecentTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetRecentTicketsComponent", function() { return WidgetRecentTicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetRecentTicketsComponent = class WidgetRecentTicketsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WidgetRecentTicketsComponent.prototype, "tickets", void 0);
WidgetRecentTicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'widget-recent-tickets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-recent-tickets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crm-dashboard/widget-recent-tickets/widget-recent-tickets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-recent-tickets.component.scss */ "./src/app/content/main/dashboards/crm-dashboard/widget-recent-tickets/widget-recent-tickets.component.scss")).default]
    })
], WidgetRecentTicketsComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2NyeXB0by1kYXNoYm9hcmQvY3J5cHRvLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CryptoDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoDashboardComponent", function() { return CryptoDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _crypto_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crypto-dashboard.service */ "./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.service.ts");



let CryptoDashboardComponent = class CryptoDashboardComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.widgets = this.dataService.widgets;
    }
    ngOnInit() {
        this.widgets.cryptoCards.map((crypto) => {
            crypto.chart.events = {
                draw: (data) => {
                    data.element._node.setAttribute('style', 'stroke:' + crypto.chart.color);
                }
            };
        });
        this.widgets.balanceHistory.chart.events = {
            created: (data) => {
                const defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'gradient3',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0.3,
                    'stop-opacity': '0.4',
                    'stop-color': 'rgba(255, 255, 255, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-opacity': '1',
                    'stop-color': 'rgba(255, 192, 214, 1)'
                });
            },
            draw: (data) => {
                if (data.type === 'area') {
                    data.element._node.setAttribute('style', 'fill:url(' + window.location.href + '#gradient3);fill-opacity:1');
                }
                if (data.type === 'line') {
                    data.element._node.setAttribute('style', 'stroke:#FF4081;stroke-width:2px;');
                }
            }
        };
    }
};
CryptoDashboardComponent.ctorParameters = () => [
    { type: _crypto_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["CryptoDashboardService"] }
];
CryptoDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crypto-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crypto-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crypto-dashboard.component.scss */ "./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.component.scss")).default]
    })
], CryptoDashboardComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.service.ts ***!
  \**************************************************************************************/
/*! exports provided: CryptoDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoDashboardService", function() { return CryptoDashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CryptoDashboardService = class CryptoDashboardService {
    constructor(http) {
        this.http = http;
        this.widgetsUrl = 'api/dashboard-crypto-widgets';
    }
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getWidgets()
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    getWidgets() {
        return new Promise((resolve, reject) => {
            this.http.get(this.widgetsUrl)
                .subscribe((response) => {
                this.widgets = response;
                resolve(response);
            }, reject);
        });
    }
};
CryptoDashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CryptoDashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CryptoDashboardService);



/***/ }),

/***/ "./src/app/content/main/dashboards/crypto-dashboard/section-balance-history/section-balance-history.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crypto-dashboard/section-balance-history/section-balance-history.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2NyeXB0by1kYXNoYm9hcmQvc2VjdGlvbi1iYWxhbmNlLWhpc3Rvcnkvc2VjdGlvbi1iYWxhbmNlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/main/dashboards/crypto-dashboard/section-balance-history/section-balance-history.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crypto-dashboard/section-balance-history/section-balance-history.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: SectionBalanceHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionBalanceHistoryComponent", function() { return SectionBalanceHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionBalanceHistoryComponent = class SectionBalanceHistoryComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionBalanceHistoryComponent.prototype, "data", void 0);
SectionBalanceHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'section-balance-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-balance-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crypto-dashboard/section-balance-history/section-balance-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-balance-history.component.scss */ "./src/app/content/main/dashboards/crypto-dashboard/section-balance-history/section-balance-history.component.scss")).default]
    })
], SectionBalanceHistoryComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/crypto-dashboard/section-balance-portfolio/section-balance-portfolio.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crypto-dashboard/section-balance-portfolio/section-balance-portfolio.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2NyeXB0by1kYXNoYm9hcmQvc2VjdGlvbi1iYWxhbmNlLXBvcnRmb2xpby9zZWN0aW9uLWJhbGFuY2UtcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/main/dashboards/crypto-dashboard/section-balance-portfolio/section-balance-portfolio.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crypto-dashboard/section-balance-portfolio/section-balance-portfolio.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: SectionBalancePortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionBalancePortfolioComponent", function() { return SectionBalancePortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionBalancePortfolioComponent = class SectionBalancePortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionBalancePortfolioComponent.prototype, "data", void 0);
SectionBalancePortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'section-balance-portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-balance-portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crypto-dashboard/section-balance-portfolio/section-balance-portfolio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-balance-portfolio.component.scss */ "./src/app/content/main/dashboards/crypto-dashboard/section-balance-portfolio/section-balance-portfolio.component.scss")).default]
    })
], SectionBalancePortfolioComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/crypto-dashboard/table-payment-history/table-payment-history.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crypto-dashboard/table-payment-history/table-payment-history.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2NyeXB0by1kYXNoYm9hcmQvdGFibGUtcGF5bWVudC1oaXN0b3J5L3RhYmxlLXBheW1lbnQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/dashboards/crypto-dashboard/table-payment-history/table-payment-history.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/crypto-dashboard/table-payment-history/table-payment-history.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: TablePaymentHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePaymentHistoryComponent", function() { return TablePaymentHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TablePaymentHistoryComponent = class TablePaymentHistoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
TablePaymentHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'table-payment-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-payment-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/crypto-dashboard/table-payment-history/table-payment-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-payment-history.component.scss */ "./src/app/content/main/dashboards/crypto-dashboard/table-payment-history/table-payment-history.component.scss")).default]
    })
], TablePaymentHistoryComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/dashboards.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/content/main/dashboards/dashboards.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsModule", function() { return DashboardsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/fesm2015/ng-chartist.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
/* harmony import */ var _app_content_sections_sections_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/content/sections/sections.module */ "./src/app/content/sections/sections.module.ts");
/* harmony import */ var _cctv_cam1_dashboard_cctv_cam1_dashboard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cctv-cam1-dashboard/cctv-cam1-dashboard.service */ "./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.service.ts");
/* harmony import */ var _cctv_cam2_dashboard_cctv_cam2_dashboard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cctv-cam2-dashboard/cctv-cam2-dashboard.service */ "./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.service.ts");
/* harmony import */ var _crm_dashboard_crm_dashboard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./crm-dashboard/crm-dashboard.service */ "./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.service.ts");
/* harmony import */ var _listing_dashboard_listing_dashboard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./listing-dashboard/listing-dashboard.service */ "./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.service.ts");
/* harmony import */ var _crypto_dashboard_crypto_dashboard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./crypto-dashboard/crypto-dashboard.service */ "./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.service.ts");
/* harmony import */ var _real_state_dashboard_real_state_dashboard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./real-state-dashboard/real-state-dashboard.service */ "./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.service.ts");
/* harmony import */ var _crm_dashboard_crm_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./crm-dashboard/crm-dashboard.component */ "./src/app/content/main/dashboards/crm-dashboard/crm-dashboard.component.ts");
/* harmony import */ var _listing_dashboard_listing_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./listing-dashboard/listing-dashboard.component */ "./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.component.ts");
/* harmony import */ var _crypto_dashboard_crypto_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./crypto-dashboard/crypto-dashboard.component */ "./src/app/content/main/dashboards/crypto-dashboard/crypto-dashboard.component.ts");
/* harmony import */ var _crypto_dashboard_section_balance_portfolio_section_balance_portfolio_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./crypto-dashboard/section-balance-portfolio/section-balance-portfolio.component */ "./src/app/content/main/dashboards/crypto-dashboard/section-balance-portfolio/section-balance-portfolio.component.ts");
/* harmony import */ var _crypto_dashboard_section_balance_history_section_balance_history_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./crypto-dashboard/section-balance-history/section-balance-history.component */ "./src/app/content/main/dashboards/crypto-dashboard/section-balance-history/section-balance-history.component.ts");
/* harmony import */ var _crypto_dashboard_table_payment_history_table_payment_history_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./crypto-dashboard/table-payment-history/table-payment-history.component */ "./src/app/content/main/dashboards/crypto-dashboard/table-payment-history/table-payment-history.component.ts");
/* harmony import */ var _listing_dashboard_widget_current_plan_widget_current_plan_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./listing-dashboard/widget-current-plan/widget-current-plan.component */ "./src/app/content/main/dashboards/listing-dashboard/widget-current-plan/widget-current-plan.component.ts");
/* harmony import */ var _listing_dashboard_widget_closed_deals_widget_closed_deals_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./listing-dashboard/widget-closed-deals/widget-closed-deals.component */ "./src/app/content/main/dashboards/listing-dashboard/widget-closed-deals/widget-closed-deals.component.ts");
/* harmony import */ var _listing_dashboard_widget_properties_list_widget_properties_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./listing-dashboard/widget-properties-list/widget-properties-list.component */ "./src/app/content/main/dashboards/listing-dashboard/widget-properties-list/widget-properties-list.component.ts");
/* harmony import */ var _crm_dashboard_widget_overview_widget_overview_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./crm-dashboard/widget-overview/widget-overview.component */ "./src/app/content/main/dashboards/crm-dashboard/widget-overview/widget-overview.component.ts");
/* harmony import */ var _crm_dashboard_widget_recent_tickets_widget_recent_tickets_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./crm-dashboard/widget-recent-tickets/widget-recent-tickets.component */ "./src/app/content/main/dashboards/crm-dashboard/widget-recent-tickets/widget-recent-tickets.component.ts");
/* harmony import */ var _real_state_dashboard_real_state_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./real-state-dashboard/real-state-dashboard.component */ "./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.component.ts");
/* harmony import */ var _real_state_dashboard_statics_statics_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./real-state-dashboard/statics/statics.component */ "./src/app/content/main/dashboards/real-state-dashboard/statics/statics.component.ts");
/* harmony import */ var _real_state_dashboard_revenue_revenue_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./real-state-dashboard/revenue/revenue.component */ "./src/app/content/main/dashboards/real-state-dashboard/revenue/revenue.component.ts");
/* harmony import */ var _real_state_dashboard_most_search_places_most_search_places_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./real-state-dashboard/most-search-places/most-search-places.component */ "./src/app/content/main/dashboards/real-state-dashboard/most-search-places/most-search-places.component.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");
/* harmony import */ var _cctv_cam1_dashboard_cctv_cam1_dashboard_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./cctv-cam1-dashboard/cctv-cam1-dashboard.component */ "./src/app/content/main/dashboards/cctv-cam1-dashboard/cctv-cam1-dashboard.component.ts");
/* harmony import */ var _cctv_cam2_dashboard_cctv_cam2_dashboard_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./cctv-cam2-dashboard/cctv-cam2-dashboard.component */ "./src/app/content/main/dashboards/cctv-cam2-dashboard/cctv-cam2-dashboard.component.ts");




































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
const dashboardsRoutes = [
    {
        path: '',
        component: _crm_dashboard_crm_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["CrmDashboardComponent"],
        resolve: {
            data: _crm_dashboard_crm_dashboard_service__WEBPACK_IMPORTED_MODULE_14__["CrmDashboardService"]
        }
    },
    {
        path: 'crm',
        component: _crm_dashboard_crm_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["CrmDashboardComponent"],
        resolve: {
            data: _crm_dashboard_crm_dashboard_service__WEBPACK_IMPORTED_MODULE_14__["CrmDashboardService"]
        }
    },
    {
        path: 'listing',
        component: _listing_dashboard_listing_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["ListingDashboardComponent"],
        resolve: {
            data: _listing_dashboard_listing_dashboard_service__WEBPACK_IMPORTED_MODULE_15__["ListingDashboardService"]
        }
    },
    {
        path: 'crypto',
        component: _crypto_dashboard_crypto_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["CryptoDashboardComponent"],
        resolve: {
            data: _crypto_dashboard_crypto_dashboard_service__WEBPACK_IMPORTED_MODULE_16__["CryptoDashboardService"]
        }
    },
    {
        path: 'real-estate',
        component: _real_state_dashboard_real_state_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["RealStateDashboardComponent"],
        resolve: {
            data: _real_state_dashboard_real_state_dashboard_service__WEBPACK_IMPORTED_MODULE_17__["RealStateDashboardService"]
        }
    },
    {
        path: 'cctv-cam1',
        component: _cctv_cam1_dashboard_cctv_cam1_dashboard_component__WEBPACK_IMPORTED_MODULE_34__["CctvCam1DashboardComponent"],
        resolve: {
            data: _cctv_cam1_dashboard_cctv_cam1_dashboard_service__WEBPACK_IMPORTED_MODULE_12__["CctvCam1DashboardService"]
        }
    },
    {
        path: 'cctv-cam2',
        component: _cctv_cam2_dashboard_cctv_cam2_dashboard_component__WEBPACK_IMPORTED_MODULE_35__["CctvCam2DashboardComponent"],
        resolve: {
            data: _cctv_cam2_dashboard_cctv_cam2_dashboard_service__WEBPACK_IMPORTED_MODULE_13__["CctvCam2DashboardService"]
        }
    }
];
let DashboardsModule = class DashboardsModule {
};
DashboardsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _app_content_sections_sections_module__WEBPACK_IMPORTED_MODULE_11__["SectionsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCe30oyb0aY980X3GfHqY7jhqsBMBfI9Ek'
            }),
            ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__["SlideshowModule"],
            _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_6__["AmChartsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(dashboardsRoutes),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_10__["NgxEchartsModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_33__["NgCircleProgressModule"].forRoot({
                // set defaults here
                radius: 100,
                outerStrokeWidth: 16,
                innerStrokeWidth: 8,
                outerStrokeColor: '#78C000',
                innerStrokeColor: '#C7E596',
                animationDuration: 300
            })
        ],
        declarations: [
            _crm_dashboard_crm_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["CrmDashboardComponent"],
            _listing_dashboard_listing_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["ListingDashboardComponent"],
            _crypto_dashboard_crypto_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["CryptoDashboardComponent"],
            _real_state_dashboard_real_state_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["RealStateDashboardComponent"],
            _crypto_dashboard_section_balance_portfolio_section_balance_portfolio_component__WEBPACK_IMPORTED_MODULE_21__["SectionBalancePortfolioComponent"],
            _crypto_dashboard_section_balance_history_section_balance_history_component__WEBPACK_IMPORTED_MODULE_22__["SectionBalanceHistoryComponent"],
            _crypto_dashboard_table_payment_history_table_payment_history_component__WEBPACK_IMPORTED_MODULE_23__["TablePaymentHistoryComponent"],
            _listing_dashboard_widget_current_plan_widget_current_plan_component__WEBPACK_IMPORTED_MODULE_24__["WidgetCurrentPlanComponent"],
            _listing_dashboard_widget_closed_deals_widget_closed_deals_component__WEBPACK_IMPORTED_MODULE_25__["WidgetClosedDealsComponent"],
            _listing_dashboard_widget_properties_list_widget_properties_list_component__WEBPACK_IMPORTED_MODULE_26__["WidgetPropertiesListComponent"],
            _crm_dashboard_widget_overview_widget_overview_component__WEBPACK_IMPORTED_MODULE_27__["WidgetOverviewComponent"],
            _crm_dashboard_widget_recent_tickets_widget_recent_tickets_component__WEBPACK_IMPORTED_MODULE_28__["WidgetRecentTicketsComponent"],
            _real_state_dashboard_statics_statics_component__WEBPACK_IMPORTED_MODULE_30__["StaticsComponent"],
            _real_state_dashboard_revenue_revenue_component__WEBPACK_IMPORTED_MODULE_31__["RevenueComponent"],
            _real_state_dashboard_most_search_places_most_search_places_component__WEBPACK_IMPORTED_MODULE_32__["MostSearchPlacesComponent"],
            _cctv_cam1_dashboard_cctv_cam1_dashboard_component__WEBPACK_IMPORTED_MODULE_34__["CctvCam1DashboardComponent"],
            _cctv_cam2_dashboard_cctv_cam2_dashboard_component__WEBPACK_IMPORTED_MODULE_35__["CctvCam2DashboardComponent"]
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ]
    })
], DashboardsModule);



/***/ }),

/***/ "./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2xpc3RpbmctZGFzaGJvYXJkL2xpc3RpbmctZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ListingDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingDashboardComponent", function() { return ListingDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _listing_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing-dashboard.service */ "./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.service.ts");



let ListingDashboardComponent = class ListingDashboardComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.widgets = this.dataService.widgets;
        this.activities = this.dataService.activities;
    }
    ngOnInit() {
    }
};
ListingDashboardComponent.ctorParameters = () => [
    { type: _listing_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["ListingDashboardService"] }
];
ListingDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saas-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listing-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listing-dashboard.component.scss */ "./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.component.scss")).default]
    })
], ListingDashboardComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/listing-dashboard/listing-dashboard.service.ts ***!
  \****************************************************************************************/
/*! exports provided: ListingDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingDashboardService", function() { return ListingDashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ListingDashboardService = class ListingDashboardService {
    constructor(http) {
        this.http = http;
        this.widgetsUrl = 'api/dashboard-listing-widgets';
        this.activitiesUrl = 'api/recent-activities';
    }
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getWidgets(),
                this.getRecentActivities()
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    getWidgets() {
        return new Promise((resolve, reject) => {
            this.http.get(this.widgetsUrl)
                .subscribe((response) => {
                this.widgets = response;
                resolve(response);
            }, reject);
        });
    }
    getRecentActivities() {
        return new Promise((resolve, reject) => {
            this.http.get(this.activitiesUrl)
                .subscribe((activities) => {
                this.activities = activities;
                resolve(activities);
            }, reject);
        });
    }
};
ListingDashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ListingDashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ListingDashboardService);



/***/ }),

/***/ "./src/app/content/main/dashboards/listing-dashboard/widget-closed-deals/widget-closed-deals.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/listing-dashboard/widget-closed-deals/widget-closed-deals.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2xpc3RpbmctZGFzaGJvYXJkL3dpZGdldC1jbG9zZWQtZGVhbHMvd2lkZ2V0LWNsb3NlZC1kZWFscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/dashboards/listing-dashboard/widget-closed-deals/widget-closed-deals.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/listing-dashboard/widget-closed-deals/widget-closed-deals.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: WidgetClosedDealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetClosedDealsComponent", function() { return WidgetClosedDealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetClosedDealsComponent = class WidgetClosedDealsComponent {
    constructor() {
        this.events = {
            created: (data) => {
                const defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'gradient-0',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-opacity': '1',
                    'stop-color': 'rgba(255, 255, 255, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-opacity': '0.8',
                    'stop-color': 'rgba(226, 218, 255, 1)'
                });
                defs.elem('linearGradient', {
                    id: 'gradient-1',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0.3,
                    'stop-opacity': '1',
                    'stop-color': 'rgba(255, 255, 255, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-opacity': '0.5',
                    'stop-color': 'rgba(252, 217, 228, 1)'
                });
            },
            draw(data) {
                const colors = ['#512DA8', '#FF4081'];
                if (data.type === 'area') {
                    data.element._node.setAttribute('style', 'fill:url(' + window.location.href + '#gradient-' + data.index + ');fill-opacity:0.5');
                }
                if (data.type === 'line') {
                    data.element._node.setAttribute('style', 'stroke:' + colors[data.index] + ';stroke-width:1px;');
                }
            }
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WidgetClosedDealsComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WidgetClosedDealsComponent.prototype, "chart", void 0);
WidgetClosedDealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'widget-closed-deals',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-closed-deals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/listing-dashboard/widget-closed-deals/widget-closed-deals.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-closed-deals.component.scss */ "./src/app/content/main/dashboards/listing-dashboard/widget-closed-deals/widget-closed-deals.component.scss")).default]
    })
], WidgetClosedDealsComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/listing-dashboard/widget-current-plan/widget-current-plan.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/listing-dashboard/widget-current-plan/widget-current-plan.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2xpc3RpbmctZGFzaGJvYXJkL3dpZGdldC1jdXJyZW50LXBsYW4vd2lkZ2V0LWN1cnJlbnQtcGxhbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/dashboards/listing-dashboard/widget-current-plan/widget-current-plan.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/listing-dashboard/widget-current-plan/widget-current-plan.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: WidgetCurrentPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetCurrentPlanComponent", function() { return WidgetCurrentPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetCurrentPlanComponent = class WidgetCurrentPlanComponent {
    constructor() {
    }
};
WidgetCurrentPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'widget-current-plan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-current-plan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/listing-dashboard/widget-current-plan/widget-current-plan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-current-plan.component.scss */ "./src/app/content/main/dashboards/listing-dashboard/widget-current-plan/widget-current-plan.component.scss")).default]
    })
], WidgetCurrentPlanComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/listing-dashboard/widget-properties-list/widget-properties-list.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/listing-dashboard/widget-properties-list/widget-properties-list.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL2xpc3RpbmctZGFzaGJvYXJkL3dpZGdldC1wcm9wZXJ0aWVzLWxpc3Qvd2lkZ2V0LXByb3BlcnRpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/dashboards/listing-dashboard/widget-properties-list/widget-properties-list.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/listing-dashboard/widget-properties-list/widget-properties-list.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: WidgetPropertiesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetPropertiesListComponent", function() { return WidgetPropertiesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WidgetPropertiesListComponent = class WidgetPropertiesListComponent {
    constructor() {
        this.maxVisibleItems = 3;
        this.searchQuery = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.searchText = '';
        this.currentCategory = 'All';
        this.symbol = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["getCurrencySymbol"])('USD', 'narrow');
        // this.searchQuery = new FormControl('');
    }
    set properties(items) {
        this._properties = items;
        this.visibleList = this._properties;
    }
    ngOnInit() {
        this.searchQuery.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(searchText => {
            console.log('searchText:', searchText);
            this.searchText = searchText;
        });
    }
    onChangeCategory(category) {
        this.currentCategory = category;
        if (this.currentCategory === 'All') {
            this.visibleList = this._properties;
        }
        else {
            this.visibleList = this._properties.filter((item) => {
                return item.category === this.currentCategory;
            });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WidgetPropertiesListComponent.prototype, "categories", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WidgetPropertiesListComponent.prototype, "maxVisibleItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WidgetPropertiesListComponent.prototype, "properties", null);
WidgetPropertiesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'widget-properties-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-properties-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/listing-dashboard/widget-properties-list/widget-properties-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-properties-list.component.scss */ "./src/app/content/main/dashboards/listing-dashboard/widget-properties-list/widget-properties-list.component.scss")).default]
    })
], WidgetPropertiesListComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/real-state-dashboard/most-search-places/most-search-places.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/real-state-dashboard/most-search-places/most-search-places.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL3JlYWwtc3RhdGUtZGFzaGJvYXJkL21vc3Qtc2VhcmNoLXBsYWNlcy9tb3N0LXNlYXJjaC1wbGFjZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/main/dashboards/real-state-dashboard/most-search-places/most-search-places.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/real-state-dashboard/most-search-places/most-search-places.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: MostSearchPlacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostSearchPlacesComponent", function() { return MostSearchPlacesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MostSearchPlacesComponent = class MostSearchPlacesComponent {
    constructor() {
        this.categories = [
            { name: 'City', slug: 'city' },
            { name: 'State', slug: 'state' },
            { name: 'Area', slug: 'area' }
        ];
        this.locationTitle = 'City';
        // google maps zoom level
        this.zoom = 3;
        // initial center position for the map
        this.lat = 28.673858;
        this.lng = 77.815982;
        this.markers = [
            {
                lat: 29.673858,
                lng: 78.815982,
                label: 'A',
                draggable: true
            },
            {
                lat: 31.673858,
                lng: 74.815982,
                label: 'B',
                draggable: false
            },
            {
                lat: 41.723858,
                lng: 7.895982,
                label: 'C',
                draggable: true
            }
        ];
    }
    set data(data) {
        this._data = data;
        this.onChangeCategory(this.categories[0]);
    }
    onChangeCategory(category) {
        if (category) {
            this.currentCat = category.slug;
            this.locationTitle = category.name;
            this.visibleItems = this._data.filter((item) => {
                return item.category === this.currentCat;
            });
        }
        else {
            this.currentCat = null;
            this.locationTitle = 'City';
            this.visibleItems = this._data;
        }
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
    mapClicked($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }
    markerDragEnd(m, $event) {
        console.log('dragEnd', m, $event);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MostSearchPlacesComponent.prototype, "data", null);
MostSearchPlacesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-most-search-places',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./most-search-places.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/real-state-dashboard/most-search-places/most-search-places.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./most-search-places.component.scss */ "./src/app/content/main/dashboards/real-state-dashboard/most-search-places/most-search-places.component.scss")).default]
    })
], MostSearchPlacesComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL3JlYWwtc3RhdGUtZGFzaGJvYXJkL3JlYWwtc3RhdGUtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.component.ts ***!
  \************************************************************************************************/
/*! exports provided: RealStateDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateDashboardComponent", function() { return RealStateDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _real_state_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./real-state-dashboard.service */ "./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.service.ts");



let RealStateDashboardComponent = class RealStateDashboardComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.widgets = this.dataService.widgets;
    }
    ngOnInit() {
    }
};
RealStateDashboardComponent.ctorParameters = () => [
    { type: _real_state_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["RealStateDashboardService"] }
];
RealStateDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-real-state-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./real-state-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./real-state-dashboard.component.scss */ "./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.component.scss")).default]
    })
], RealStateDashboardComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/real-state-dashboard/real-state-dashboard.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: RealStateDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateDashboardService", function() { return RealStateDashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RealStateDashboardService = class RealStateDashboardService {
    constructor(http) {
        this.http = http;
        this.widgetsUrl = 'api/dashboard-real-state-widgets';
    }
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getWidgets()
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    getWidgets() {
        return new Promise((resolve, reject) => {
            this.http.get(this.widgetsUrl)
                .subscribe((response) => {
                this.widgets = response;
                resolve(response);
            }, reject);
        });
    }
};
RealStateDashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RealStateDashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RealStateDashboardService);



/***/ }),

/***/ "./src/app/content/main/dashboards/real-state-dashboard/revenue/revenue.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/real-state-dashboard/revenue/revenue.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL3JlYWwtc3RhdGUtZGFzaGJvYXJkL3JldmVudWUvcmV2ZW51ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/dashboards/real-state-dashboard/revenue/revenue.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/real-state-dashboard/revenue/revenue.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RevenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenueComponent", function() { return RevenueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RevenueComponent = class RevenueComponent {
    constructor() {
        this.days = [
            { name: '2016', slug: '2016' },
            { name: '2017', slug: '2017' },
            { name: '2018', slug: '2018' },
            { name: '2019', slug: '2019' }
        ];
        this.selectedDay = { name: '2019', slug: '2019' };
        this.chart = {
            chartType: 'line',
            labels: ['', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', ''],
            dataSets: {
                '2016': [
                    {
                        label: 'Revenue',
                        data: [20, 40, 34, 45, 50, 55, 45, 35, 29, 40, 30, 22]
                    },
                    {
                        label: 'Revenue',
                        data: [50, 60, 45, 51, 60, 63, 74, 50, 53, 48, 64, 50]
                    },
                    {
                        label: 'Revenue',
                        data: [90, 95, 90, 75, 86, 97, 90, 102, 96, 79, 101, 80]
                    }
                ],
                '2017': [
                    {
                        label: 'Revenue',
                        data: [20, 28, 34, 45, 33, 25, 30, 35, 29, 32, 26, 22]
                    },
                    {
                        label: 'Revenue',
                        data: [50, 60, 45, 51, 60, 63, 74, 50, 53, 48, 64, 50]
                    },
                    {
                        label: 'Revenue',
                        data: [90, 85, 90, 75, 86, 92, 75, 85, 88, 79, 101, 80]
                    }
                ],
                '2018': [
                    {
                        label: 'Revenue',
                        data: [20, 28, 34, 45, 33, 25, 30, 35, 29, 32, 26, 22]
                    },
                    {
                        label: 'Revenue',
                        data: [20, 40, 34, 45, 50, 55, 45, 35, 29, 40, 30, 22]
                    },
                    {
                        label: 'Revenue',
                        data: [20, 28, 34, 45, 33, 25, 30, 35, 29, 32, 26, 22]
                    }
                ],
                '2019': [
                    {
                        label: 'Revenue',
                        data: [20, 28, 34, 45, 33, 25, 30, 35, 29, 32, 26, 22]
                    },
                    {
                        label: 'Revenue',
                        data: [50, 43, 45, 51, 49, 46, 50, 55, 53, 48, 64, 50]
                    },
                    {
                        label: 'Revenue',
                        data: [90, 85, 90, 75, 86, 92, 75, 85, 88, 79, 101, 80]
                    }
                ]
            },
            options: {
                responsive: true,
                height: 175,
                legend: {
                    display: false
                },
                layout: {
                    padding: 0
                },
                scales: {
                    xAxes: [{
                            gridLines: {
                                display: false
                            },
                            display: true
                        }],
                    yAxes: [{
                            display: false
                        }]
                }
            },
            colors: [
                {
                    pointRadius: 0,
                    backgroundColor: '#ffffff',
                    borderWidth: 0,
                    borderColor: '#ffffff',
                    hoverBorderWidth: 0,
                    pointBorderWidth: 0,
                    pointHoverBorderWidth: 0,
                },
                {
                    pointRadius: 0,
                    backgroundColor: '#FE9E15',
                    borderWidth: 0,
                    borderColor: '#FE9E15',
                    hoverBorderWidth: 0,
                    pointBorderWidth: 0,
                    pointHoverBorderWidth: 0
                },
                {
                    pointRadius: 0,
                    backgroundColor: '#038FDE',
                    borderWidth: 0,
                    borderColor: '#038FDE',
                    hoverBorderWidth: 0,
                    pointBorderWidth: 0,
                    pointHoverBorderWidth: 0
                }
            ]
        };
    }
    onClickDay(event, day) {
        event.preventDefault();
        this.selectedDay = day;
    }
};
RevenueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-revenue',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./revenue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/real-state-dashboard/revenue/revenue.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./revenue.component.scss */ "./src/app/content/main/dashboards/real-state-dashboard/revenue/revenue.component.scss")).default]
    })
], RevenueComponent);



/***/ }),

/***/ "./src/app/content/main/dashboards/real-state-dashboard/statics/statics.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/real-state-dashboard/statics/statics.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi9kYXNoYm9hcmRzL3JlYWwtc3RhdGUtZGFzaGJvYXJkL3N0YXRpY3Mvc3RhdGljcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/dashboards/real-state-dashboard/statics/statics.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/main/dashboards/real-state-dashboard/statics/statics.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StaticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticsComponent", function() { return StaticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const color = window.Chart.helpers.color;
let StaticsComponent = class StaticsComponent {
    constructor() {
        this.days = [
            { name: 'Today', slug: 'today' },
            { name: 'Yesterday', slug: 'yesterday' },
            { name: 'Tomorrow', slug: 'tomorrow' },
        ];
        this.selectedDay = { name: 'Today', slug: 'today' };
        this.chart = {
            chartType: 'line',
            labels: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G', 'Page K', 'Page M', 'Page R', 'Page S', 'Page T'],
            dataSets: {
                today: [
                    {
                        label: 'Work Status',
                        data: [70, 85, 67, 78, 75, 85, 71, 85, 95, 107, 100, 105],
                        fill: '-1'
                    },
                    {
                        label: 'Financial Status',
                        data: [63, 65, 58, 55, 60, 70, 83, 90, 92, 90, 83, 75]
                    },
                    {
                        label: 'Financial Status',
                        data: [78, 79, 67, 62, 68, 73, 75, 78, 82, 87, 93, 100]
                    }
                ],
                yesterday: [
                    {
                        label: 'Work Status',
                        data: [70, 85, 67, 78, 75, 85, 71, 85, 95, 107, 100, 105],
                        fill: '-1'
                    },
                    {
                        label: 'Financial Status',
                        data: [63, 65, 58, 55, 60, 70, 83, 80, 82, 80, 83, 75]
                    },
                    {
                        label: 'Financial Status',
                        data: [78, 89, 77, 72, 78, 73, 75, 78, 82, 87, 93, 100]
                    }
                ],
                tomorrow: [
                    {
                        label: 'Work Status',
                        data: [70, 85, 67, 78, 75, 85, 71, 85, 95, 107, 100, 105],
                        fill: '-1'
                    },
                    {
                        label: 'Financial Status',
                        data: [63, 65, 58, 55, 60, 70, 83, 90, 92, 90, 83, 75]
                    },
                    {
                        label: 'Financial Status',
                        data: [78, 89, 77, 72, 78, 73, 75, 78, 82, 87, 93, 100]
                    }
                ]
            },
            options: {
                responsive: true,
                height: 155,
                legend: {
                    display: false
                },
                layout: {
                    padding: 0
                },
                scales: {
                    xAxes: [{
                            display: false
                        }],
                    yAxes: [{
                            display: false
                        }]
                }
            },
            colors: [
                {
                    pointRadius: 0,
                    backgroundColor: '#52c41a',
                    borderWidth: 3,
                    borderColor: '#52c41a',
                    hoverBorderWidth: 0,
                    pointBorderWidth: 0,
                    pointHoverBorderWidth: 0,
                },
                {
                    pointRadius: 0,
                    borderWidth: 0,
                    hoverBorderWidth: 0,
                    pointBorderWidth: 0,
                    pointHoverBorderWidth: 0,
                    backgroundColor: color('#3f3f91').alpha(0.7).rgbString(),
                },
                {
                    pointRadius: 0,
                    borderWidth: 0,
                    hoverBorderWidth: 0,
                    pointBorderWidth: 0,
                    pointHoverBorderWidth: 0,
                    backgroundColor: color('#ec45a0').alpha(0.8).rgbString(),
                }
            ]
        };
    }
    onClickDay(event, day) {
        event.preventDefault();
        this.selectedDay = day;
    }
};
StaticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/dashboards/real-state-dashboard/statics/statics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statics.component.scss */ "./src/app/content/main/dashboards/real-state-dashboard/statics/statics.component.scss")).default]
    })
], StaticsComponent);



/***/ })

}]);
//# sourceMappingURL=dashboards-dashboards-module-es2015.js.map