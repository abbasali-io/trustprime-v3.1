(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-pages-pages-module"],{

/***/ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js ***!
  \****************************************************************/
/*! exports provided: OrderModule, OrderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPipe", function() { return OrderPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



var OrderPipe_1;
let OrderPipe = OrderPipe_1 = class OrderPipe {
    /**
     * Check if a value is a string
     *
     * @param value
     */
    static isString(value) {
        return typeof value === "string" || value instanceof String;
    }
    /**
     * Sorts values ignoring the case
     *
     * @param a
     * @param b
     */
    static caseInsensitiveSort(a, b) {
        if (OrderPipe_1.isString(a) && OrderPipe_1.isString(b)) {
            return a.localeCompare(b);
        }
        return OrderPipe_1.defaultCompare(a, b);
    }
    /**
     * Default compare method
     *
     * @param a
     * @param b
     */
    static defaultCompare(a, b) {
        if (a === b) {
            return 0;
        }
        if (a == null) {
            return 1;
        }
        if (b == null) {
            return -1;
        }
        return a > b ? 1 : -1;
    }
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    static parseExpression(expression) {
        expression = expression.replace(/\[(\w+)\]/g, ".$1");
        expression = expression.replace(/^\./, "");
        return expression.split(".");
    }
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    static getValue(object, expression) {
        for (let i = 0, n = expression.length; i < n; ++i) {
            if (!object) {
                return;
            }
            const k = expression[i];
            if (!(k in object)) {
                return;
            }
            if (typeof object[k] === "function") {
                object = object[k]();
            }
            else {
                object = object[k];
            }
        }
        return object;
    }
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    static setValue(object, value, expression) {
        let i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    }
    transform(value, expression, reverse, isCaseInsensitive = false, comparator) {
        if (!value) {
            return value;
        }
        if (Array.isArray(expression)) {
            return this.multiExpressionTransform(value, expression, reverse, isCaseInsensitive, comparator);
        }
        if (Array.isArray(value)) {
            return this.sortArray(value.slice(), expression, reverse, isCaseInsensitive, comparator);
        }
        if (typeof value === "object") {
            return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
        }
        return value;
    }
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    sortArray(value, expression, reverse, isCaseInsensitive, comparator) {
        const isDeepLink = expression && expression.indexOf(".") !== -1;
        if (isDeepLink) {
            expression = OrderPipe_1.parseExpression(expression);
        }
        let compareFn;
        if (comparator && typeof comparator === "function") {
            compareFn = comparator;
        }
        else {
            compareFn = isCaseInsensitive
                ? OrderPipe_1.caseInsensitiveSort
                : OrderPipe_1.defaultCompare;
        }
        const array = value.sort((a, b) => {
            if (!expression) {
                return compareFn(a, b);
            }
            if (!isDeepLink) {
                if (a && b) {
                    return compareFn(a[expression], b[expression]);
                }
                return compareFn(a, b);
            }
            return compareFn(OrderPipe_1.getValue(a, expression), OrderPipe_1.getValue(b, expression));
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    }
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    transformObject(value, expression, reverse, isCaseInsensitive, comparator) {
        const parsedExpression = OrderPipe_1.parseExpression(expression);
        let lastPredicate = parsedExpression.pop();
        let oldValue = OrderPipe_1.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe_1.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    }
    /**
     * Apply multiple expressions
     *
     * @param value
     * @param {any[]} expressions
     * @param {boolean} reverse
     * @param {boolean} isCaseInsensitive
     * @param {Function} comparator
     * @returns {any}
     */
    multiExpressionTransform(value, expressions, reverse, isCaseInsensitive = false, comparator) {
        return expressions.reverse().reduce((result, expression) => {
            return this.transform(result, expression, reverse, isCaseInsensitive, comparator);
        }, value);
    }
};
OrderPipe = OrderPipe_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "orderBy",
        pure: false
    })
], OrderPipe);

let OrderModule = class OrderModule {
};
OrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [OrderPipe],
        exports: [OrderPipe],
        providers: [OrderPipe]
    })
], OrderModule);


//# sourceMappingURL=ngx-order-pipe.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/blank/blank.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/blank/blank.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"settings.layout !== 'intranet'\">\r\n  <!-- Page Header -->\r\n  <app-page-header pageTitle=\"Blank Page\"></app-page-header>\r\n  <!-- /page header -->\r\n\r\n  <!-- Grid -->\r\n  <div class=\"row\">\r\n\r\n    <!-- Grid Item -->\r\n    <div class=\"col-xl-12\">\r\n\r\n      <p class=\"lead\">This is a blank page provided in the template which could be used to setup your\r\n        own custom page.</p>\r\n\r\n    </div>\r\n    <!-- /grid item -->\r\n\r\n  </div>\r\n  <!-- /grid -->\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"settings.layout === 'intranet'\">\r\n  <gx-card card-title=\"Blank Page\" [ngStyle]=\"{height: '400px'}\">\r\n    <p class=\"lead\">This is a blank page provided in the template which could be used to setup your own custom page.</p>\r\n  </gx-card>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/frontend/lock-screen/lock-screen.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/frontend/lock-screen/lock-screen.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Login Content -->\r\n<div class=\"dt-login__content-wrapper\">\r\n\r\n    <!-- Avatar -->\r\n    <img class=\"dt-avatar size-120\" src=\"https://via.placeholder.com/150X150\" alt=\"Zakie chain\">\r\n    <!-- /avatar -->\r\n\r\n    <h2 class=\"text-white display-1 font-weight-light mb-6\">Reece Jacklin</h2>\r\n\r\n    <!-- Form -->\r\n    <form>\r\n\r\n        <!-- Form Group -->\r\n        <div class=\"form-group mb-6\">\r\n            <label class=\"sr-only\" for=\"password\">Email address</label>\r\n            <input type=\"password\" class=\"form-control border-0 shadow-none\" id=\"password\"\r\n                   placeholder=\"Enter you password\">\r\n        </div>\r\n        <!-- /form group -->\r\n\r\n        <div class=\"mb-5\">\r\n            <a class=\"d-inline-block text-white f-16\" href=\"javascript:void(0)\">I forgot my PIN</a>\r\n        </div>\r\n\r\n        <div>\r\n            <a class=\"d-inline-block text-white f-16\" href=\"javascript:void(0)\">Sign-in options</a>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- /form -->\r\n\r\n</div>\r\n<!-- /login content -->\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/help/help.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/help/help.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Help Page</h1>\r\n</div>\r\n<!-- /page header -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/layouts/layouts.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/layouts/layouts.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Layouts</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-6 col-12\" *ngFor=\"let layout of layouts\">\r\n\r\n    <!-- Card -->\r\n    <gx-card class=\"dt-showcase-card\" [card-title]=\"layout.name\">\r\n\r\n      <card-tool>\r\n        <a [href]=\"getLayoutUrl(layout.slug)\" class=\"dt-card__more\">View Demo</a>\r\n        <gx-icon name=\"chevrolet-right\" size=\"lg\" class=\"ml-1\"></gx-icon>\r\n      </card-tool>\r\n\r\n      <!-- Card Body -->\r\n      <div class=\"layout-container\">\r\n        <a [href]=\"getLayoutUrl(layout.slug)\" class=\"d-block\">\r\n          <img class=\"img-fluid\" [src]=\"layout.thumb\" alt=\"{{layout.name}}\"> </a>\r\n      </div>\r\n      <!-- /card body -->\r\n\r\n    </gx-card>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/banner/profile-banner.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/banner/profile-banner.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Profile Banner -->\r\n<div class=\"profile__banner\">\r\n\r\n    <!-- Profile Banner Top -->\r\n    <div class=\"profile__banner-detail\">\r\n        <!-- Avatar Wrapper -->\r\n        <div class=\"dt-avatar-wrapper\">\r\n            <!-- Avatar -->\r\n            <img class=\"dt-avatar dt-avatar__shadow size-90 mr-sm-4\"\r\n                 src=\"{{bannerData.user.image}}\" alt=\"Reece Jacklin\">\r\n            <!-- /avatar -->\r\n\r\n            <!-- Info -->\r\n            <div class=\"dt-avatar-info\">\r\n                <span class=\"dt-avatar-name display-4 mb-2 font-weight-light\">{{bannerData.user.name}}</span>\r\n                <span class=\"f-16\">{{bannerData.user.address}}</span>\r\n            </div>\r\n            <!-- /info -->\r\n        </div>\r\n        <!-- /avatar wrapper -->\r\n\r\n        <div class=\"ml-sm-auto\">\r\n            <!-- List -->\r\n            <ul class=\"dt-list dt-list-bordered dt-list-col-4\">\r\n                <!-- List Item -->\r\n                <li class=\"dt-list__item text-center\" *ngFor=\"let feed of bannerData.feeds\">\r\n                    <span class=\"h4 font-weight-500 mb-0 text-white\">{{feed.value | thousandSuff}}</span>\r\n                    <span class=\"d-block f-12\">{{feed.label}}</span>\r\n                </li>\r\n                <!-- /list item -->\r\n            </ul>\r\n            <!-- /list -->\r\n        </div>\r\n    </div>\r\n    <!-- /profile banner top -->\r\n\r\n    <!-- Profile Banner Bottom -->\r\n    <div class=\"profile__banner-navigation\">\r\n\r\n        <!-- Navbar -->\r\n        <ul class=\"navbar-nav\">\r\n\r\n            <!-- Nav Item -->\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link \" href=\"javascript:void(0)\">Timeline</a>\r\n            </li>\r\n            <!-- /nav item -->\r\n\r\n            <!-- Nav Item -->\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\">About</a>\r\n            </li>\r\n            <!-- /nav item -->\r\n\r\n            <!-- Nav Item -->\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\">Photos</a>\r\n            </li>\r\n            <!-- /nav item -->\r\n\r\n            <!-- Nav Item -->\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\">Friends\r\n                    <small class=\"text-light-gray\">287</small>\r\n                </a>\r\n            </li>\r\n            <!-- /nav item -->\r\n\r\n            <!-- Nav Item -->\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\">More</a>\r\n            </li>\r\n            <!-- /nav item -->\r\n\r\n        </ul>\r\n        <!-- /navbar -->\r\n\r\n        <!-- Dropdown -->\r\n        <div class=\"pl-3 mt-2 ml-auto\" ngbDropdown placement=\"bottom-right\">\r\n\r\n            <!-- Dropdown Button -->\r\n            <a href=\"javascript:void(0)\" class=\"no-arrow text-white\" ngbDropdownToggle>\r\n                <gx-icon name=\"settings\" size=\"xl\" class=\"mr-2\"></gx-icon><span\r\n                    class=\"d-none d-sm-inline-block\">Settings</span>\r\n            </a>\r\n            <!-- /dropdown button -->\r\n\r\n            <!-- Dropdown Menu -->\r\n            <div ngbDropdownMenu>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\">Separated link</a>\r\n            </div>\r\n            <!-- /dropdown menu -->\r\n\r\n        </div>\r\n        <!-- /dropdown -->\r\n\r\n    </div>\r\n    <!-- /profile banner bottom -->\r\n\r\n</div>\r\n<!-- /profile banner -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/about/profile-about.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/about/profile-about.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tabs-about-profile title=\"About\">\r\n    <tab-about-profile tabTitle=\"Overview\">\r\n        <!-- List -->\r\n        <ul class=\"dt-list dt-list-col-4\">\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <gx-media-icon-card label=\"Works at\">\r\n                    <gx-icon name=\"company\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <p class=\"h5 mb-0\" text>{{data.company}}</p>\r\n                </gx-media-icon-card>\r\n                <!-- /media -->\r\n            </li>\r\n            <!-- /list item -->\r\n\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <gx-media-icon-card label=\"Birthday\">\r\n                    <gx-icon name=\"birthday-new\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <p class=\"h5 mb-0\" text>{{data.birthday}}</p>\r\n                </gx-media-icon-card>\r\n                <!-- /media -->\r\n            </li>\r\n            <!-- /list item -->\r\n\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <gx-media-icon-card label=\"Went to\">\r\n                    <gx-icon name=\"graduation\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <p class=\"h5 mb-0\" text>{{data.university}}</p>\r\n                </gx-media-icon-card>\r\n                <!-- /media -->\r\n            </li>\r\n            <!-- /list item -->\r\n\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <gx-media-icon-card [label]=\"'Lives in '+data.current_city\">\r\n                    <gx-icon name=\"home\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <p class=\"h5 mb-0\" text>From {{data.hometown}}</p>\r\n                </gx-media-icon-card>\r\n                <!-- /media -->\r\n            </li>\r\n            <!-- /list item -->\r\n\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <!-- Media -->\r\n                <gx-media-icon-card [label]=\"data.members.length +' Family Members'\">\r\n                    <gx-icon name=\"family\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <!-- Project Team -->\r\n                    <ul class=\"dt-list dt-team-list dt-team-list-sm\" text>\r\n                        <li *ngFor=\"let member of data.members\">\r\n                            <!-- Avatar -->\r\n                            <a class=\"dt-avatar size-25\"\r\n                               href=\"javascript:void(0)\">\r\n                                <img [src]=\"member.image\"\r\n                                     alt=\"{{member.name}}\"> </a>\r\n                            <!-- /avatar -->\r\n                        </li>\r\n                    </ul>\r\n                    <!-- /project team -->\r\n                </gx-media-icon-card>\r\n            </li>\r\n            <!-- /list item -->\r\n        </ul>\r\n        <!-- /list -->\r\n    </tab-about-profile>\r\n    <tab-about-profile tabTitle=\"Work\">\r\n        <!-- List -->\r\n        <ul class=\"dt-list dt-list-col-4\">\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <gx-media-icon-card label=\"Works at\">\r\n                    <gx-icon name=\"company\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <p class=\"h5 mb-0\" text>{{data.company}}</p>\r\n                </gx-media-icon-card>\r\n                <!-- /media -->\r\n            </li>\r\n            <!-- /list item -->\r\n\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <gx-media-icon-card label=\"Birthday\">\r\n                    <gx-icon name=\"birthday-new\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <p class=\"h5 mb-0\" text>{{data.birthday}}</p>\r\n                </gx-media-icon-card>\r\n                <!-- /media -->\r\n            </li>\r\n            <!-- /list item -->\r\n\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <gx-media-icon-card label=\"Went to\">\r\n                    <gx-icon name=\"graduation\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <p class=\"h5 mb-0\" text>{{data.university}}</p>\r\n                </gx-media-icon-card>\r\n                <!-- /media -->\r\n            </li>\r\n            <!-- /list item -->\r\n\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <gx-media-icon-card [label]=\"'Lives in '+data.current_city\">\r\n                    <gx-icon name=\"home\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <p class=\"h5 mb-0\" text>From {{data.hometown}}</p>\r\n                </gx-media-icon-card>\r\n                <!-- /media -->\r\n            </li>\r\n            <!-- /list item -->\r\n\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <!-- Media -->\r\n                <gx-media-icon-card [label]=\"data.members.length +' Family Members'\">\r\n                    <gx-icon name=\"family\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <!-- Project Team -->\r\n                    <ul class=\"dt-list dt-team-list dt-team-list-sm\" text>\r\n                        <li *ngFor=\"let member of data.members\">\r\n                            <!-- Avatar -->\r\n                            <a class=\"dt-avatar size-25\"\r\n                               href=\"javascript:void(0)\">\r\n                                <img [src]=\"member.image\"\r\n                                     alt=\"{{member.name}}\"> </a>\r\n                            <!-- /avatar -->\r\n                        </li>\r\n                    </ul>\r\n                    <!-- /project team -->\r\n                </gx-media-icon-card>\r\n            </li>\r\n            <!-- /list item -->\r\n        </ul>\r\n        <!-- /list -->\r\n    </tab-about-profile>\r\n    <tab-about-profile tabTitle=\"Education\">\r\n        <!-- List -->\r\n        <ul class=\"dt-list dt-list-col-4\">\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <gx-media-icon-card label=\"Works at\">\r\n                    <gx-icon name=\"company\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <p class=\"h5 mb-0\" text>{{data.company}}</p>\r\n                </gx-media-icon-card>\r\n                <!-- /media -->\r\n            </li>\r\n            <!-- /list item -->\r\n\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <gx-media-icon-card label=\"Birthday\">\r\n                    <gx-icon name=\"birthday-new\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <p class=\"h5 mb-0\" text>{{data.birthday}}</p>\r\n                </gx-media-icon-card>\r\n                <!-- /media -->\r\n            </li>\r\n            <!-- /list item -->\r\n\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <gx-media-icon-card label=\"Went to\">\r\n                    <gx-icon name=\"graduation\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <p class=\"h5 mb-0\" text>{{data.university}}</p>\r\n                </gx-media-icon-card>\r\n                <!-- /media -->\r\n            </li>\r\n            <!-- /list item -->\r\n\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <gx-media-icon-card [label]=\"'Lives in '+data.current_city\">\r\n                    <gx-icon name=\"home\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <p class=\"h5 mb-0\" text>From {{data.hometown}}</p>\r\n                </gx-media-icon-card>\r\n                <!-- /media -->\r\n            </li>\r\n            <!-- /list item -->\r\n\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\">\r\n                <!-- Media -->\r\n                <!-- Media -->\r\n                <gx-media-icon-card [label]=\"data.members.length +' Family Members'\">\r\n                    <gx-icon name=\"family\" size=\"4x\" class=\"mr-5 align-self-center text-yellow\" icon></gx-icon>\r\n                    <!-- Project Team -->\r\n                    <ul class=\"dt-list dt-team-list dt-team-list-sm\" text>\r\n                        <li *ngFor=\"let member of data.members\">\r\n                            <!-- Avatar -->\r\n                            <a class=\"dt-avatar size-25\"\r\n                               href=\"javascript:void(0)\">\r\n                                <img [src]=\"member.image\"\r\n                                     alt=\"{{member.name}}\"> </a>\r\n                            <!-- /avatar -->\r\n                        </li>\r\n                    </ul>\r\n                    <!-- /project team -->\r\n                </gx-media-icon-card>\r\n            </li>\r\n            <!-- /list item -->\r\n        </ul>\r\n        <!-- /list -->\r\n    </tab-about-profile>\r\n</tabs-about-profile>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/about/tab-about-profile/tab-about-profile.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/about/tab-about-profile/tab-about-profile.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [hidden]=\"!active\" class=\"tab-pane\">\r\n    <ng-content></ng-content>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/about/tabs-about-profile/tabs-about-profile.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/about/tabs-about-profile/tabs-about-profile.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<div class=\"card-header card-nav bg-transparent border-bottom d-sm-flex justify-content-sm-between\">\r\n    <h3 class=\"mb-2 mb-sm-n5\">{{title}}</h3>\r\n\r\n    <ul class=\"card-header-links nav nav-underline\" role=\"tablist\">\r\n        <li class=\"nav-item\" *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\" [class.active]=\"tab.active\">{{tab.title}}</a>\r\n        </li>\r\n    </ul>\r\n\r\n</div>\r\n<!-- /card header -->\r\n\r\n<!-- Card Body -->\r\n<div class=\"card-body pb-2\">\r\n\r\n    <!-- Tab Content-->\r\n    <div class=\"tab-content mt-5\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/contact/profile-contact.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/contact/profile-contact.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Media -->\r\n<gx-media-icon-card class=\"mb-5\" label=\"Mail\">\r\n    <gx-icon name=\"mail\" size=\"xl\" class=\"mr-5\" icon></gx-icon>\r\n    <a href=\"javascript:void(0)\" text>{{contactDetail.email}}</a>\r\n</gx-media-icon-card>\r\n<!-- /media -->\r\n\r\n<!-- Media -->\r\n<gx-media-icon-card class=\"mb-5\" label=\"Web Page\">\r\n    <gx-icon name=\"link\" size=\"xl\" class=\"mr-5\" icon></gx-icon>\r\n    <a href=\"javascript:void(0)\" text>{{contactDetail.website}}</a>\r\n</gx-media-icon-card>\r\n<!-- /media -->\r\n\r\n<!-- Media -->\r\n<gx-media-icon-card label=\"Phone\">\r\n    <gx-icon name=\"phone-o\" size=\"xl\" class=\"mr-5\" icon></gx-icon>\r\n    <span class=\"h5\" text>{{contactDetail.mobile}}</span>\r\n</gx-media-icon-card>\r\n<!-- /media -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/events/profile-events.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/events/profile-events.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Slider -->\r\n<div class=\"dt-slider rounded-xl overflow-hidden\">\r\n\r\n    <!-- Slider Header -->\r\n    <div class=\"dt-slider__header\">\r\n        <span class=\"badge bg-orange text-white text-uppercase\">{{event.tag}}</span>\r\n    </div>\r\n    <!-- /slider header -->\r\n    <img class=\"img-fluid\" [src]=\"event.image\"\r\n         alt=\"{{event.name}}\">\r\n\r\n</div>\r\n<!-- /slider -->\r\n\r\n<!-- Card Stacked -->\r\n<div class=\"card-stacked\">\r\n\r\n    <!-- Card Body -->\r\n    <div class=\"card-body py-sm-0 px-0 px-sm-6 px-md-8\">\r\n\r\n        <!-- Badges -->\r\n        <span class=\"badge badge-secondary text-uppercase mb-2\">{{event.category}}</span>\r\n        <!-- /badges -->\r\n\r\n        <!-- Card Title-->\r\n        <h3 class=\"card-title font-weight-normal text-truncate mb-3\">{{event.title}}</h3>\r\n        <!-- Card Title-->\r\n\r\n        <p class=\"card-text\">\r\n            <gx-icon name=\"location\" [fw]=\"true\" class=\"mr-1\"></gx-icon>\r\n            <span>{{event.address}}</span>\r\n        </p>\r\n\r\n        <!-- Content Area -->\r\n        <p class=\"card-text text-truncate\">{{event.desc}}</p>\r\n        <!-- /content area -->\r\n\r\n    </div>\r\n    <!-- /card body -->\r\n\r\n    <!-- Card Footer -->\r\n    <div class=\"card-footer d-flex flex-column justify-content-between p-0 text-sm-right\">\r\n        <!-- Pricing -->\r\n        <a href=\"javascript:void(0)\"\r\n           class=\"display-5 font-weight-500 mb-6\">\r\n            <gx-icon name=\"calendar\" class=\"mr-2\" [fw]=\"true\"></gx-icon>\r\n            <span\r\n                    class=\"align-middle\">{{event.start_date}}</span> </a>\r\n        <!-- /pricing -->\r\n\r\n        <!-- Card Button -->\r\n        <a class=\"card-link font-weight-500\"\r\n           href=\"javascript:void(0)\">\r\n            <span>Check in detail</span>\r\n            <gx-icon name=\"arrow-long-right\" size=\"lg\" class=\"ml-1\"></gx-icon>\r\n        </a>\r\n        <!-- /card button -->\r\n    </div>\r\n    <!-- /card footer -->\r\n\r\n</div>\r\n<!-- /card stacked -->\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/profile-content.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/profile-content.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Profile Content -->\r\n<div class=\"profile-content\">\r\n\r\n    <!-- Grid -->\r\n    <div class=\"row\">\r\n\r\n        <!-- Grid Item -->\r\n        <div class=\"col-xl-4 order-xl-2\">\r\n\r\n            <!-- Grid -->\r\n            <div class=\"row\">\r\n\r\n                <!-- Grid Item -->\r\n                <div class=\"col-xl-12 col-md-6 col-12 order-xl-2\">\r\n                    <!-- Card -->\r\n                    <gx-card [card-title]=\"friendsCardTitle\" [fullHeight]=\"true\">\r\n                        <gx-online-user-list-card [userList]=\"data.friends\"></gx-online-user-list-card>\r\n                    </gx-card>\r\n                    <!-- /card -->\r\n                </div>\r\n                <!-- /grid item -->\r\n\r\n                <!-- Grid Item -->\r\n                <div class=\"col-xl-12 col-md-6 col-12 order-xl-1\">\r\n                    <!-- Card -->\r\n                    <gx-card [fullHeight]=\"true\" card-title=\"Contact\" header-class=\"pt-6\">\r\n                        <profile-contact [contactDetail]=\"data.contact_detail\"></profile-contact>\r\n                    </gx-card>\r\n                    <!-- /card -->\r\n                </div>\r\n                <!-- /grid item -->\r\n\r\n            </div>\r\n            <!-- /grid -->\r\n\r\n        </div>\r\n        <!-- /grid item -->\r\n\r\n        <!-- Grid Item -->\r\n        <div class=\"col-xl-8 order-xl-1\">\r\n            <!-- Card -->\r\n            <profile-about [aboutProfile]=\"data.about_user\"></profile-about>\r\n            <!-- /card -->\r\n\r\n            <!-- Card -->\r\n            <gx-card>\r\n                <h3 class=\"card-title\">Biography</h3>\r\n                <!-- Card Text -->\r\n                <h6 class=\"card-subtitle\">A little flash back of Kiley Brown</h6>\r\n                <!-- /card text -->\r\n\r\n                <!-- Card Text -->\r\n                <p class=\"card-text lead\">\r\n                    Donec dignissim gravida sem, ut cursus dolor hendrerit et. Morbi\r\n                    volutpat.\r\n                </p>\r\n                <!-- /card text -->\r\n\r\n                <!-- Card Text -->\r\n                <p class=\"card-text\">\r\n                    Augue mauris dignissim arcu, ut venenatis metus ante eu orci. Donec non\r\n                    maximus neque, ut finibus ex. Quisque semper ornare magna, sed\r\n                    ullamcorper risus luctus quis. Etiam tristique dui vitae diam rutrum\r\n                    sodales. Mauris feugiat lectus felis, nec ullamcorper risus elementum\r\n                    at. Aliquam erat volutpat. Nullam et est eget metus gravida tincidunt.\r\n                    Phasellus sed odio eu lacus venenatis.\r\n                </p>\r\n                <!-- /card text -->\r\n\r\n                <!-- Card Text -->\r\n                <p class=\"card-text\">\r\n                    Suspendisse vel bibendum ex. Interdum et malesuada fames ac ante ipsum\r\n                    primis in faucibus. Sed a felis nisi. Lorem ipsum dolor sit amet,\r\n                    consectetur adipiscing elit. In molestie ultricies urna non volutpat.\r\n                    Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. Sed\r\n                    tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque\r\n                    consequat leo tortor.\r\n                </p>\r\n                <!-- /card text -->\r\n            </gx-card>\r\n            <!-- /card -->\r\n\r\n            <gx-card card-title=\"Events\">\r\n                <profile-events class=\"card shadow-none horizontal rounded-0\" *ngFor=\"let event of data.events; let last = last\" [event]=\"event\" [ngClass]=\"last ? 'mb-0' :'pb-8 border-bottom'\"  ></profile-events>\r\n            </gx-card>\r\n        </div>\r\n        <!-- /grid item -->\r\n\r\n    </div>\r\n    <!-- /grid -->\r\n\r\n</div>\r\n<!-- /profile content -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/profile-page.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/profile-page.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Profile -->\r\n<div class=\"profile\">\r\n    <profile-banner></profile-banner>\r\n    <profile-content></profile-content>\r\n</div>\r\n<!-- /profile -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/search/search-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/search/search-page.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<app-page-header pageTitle=\"Search Page\"></app-page-header>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n    <!-- Grid Item -->\r\n    <div class=\"col-xl-12\">\r\n\r\n        <!-- Card -->\r\n        <div class=\"dt-card\">\r\n\r\n            <!-- Card Body -->\r\n            <div class=\"dt-card__body\">\r\n                <h2 class=\"display-4 mb-2\">{{data.length}} results found <ng-container *ngIf=\"filterKeyword\">for: <span class=\"text-primary\">“{{filterKeyword}}”</span></ng-container>\r\n                </h2>\r\n                <small class=\"d-block mb-4\">Request time (0.23 seconds)</small>\r\n\r\n                <!-- Search Box -->\r\n                <form class=\"search-box right-side-icon mw-100\" [formGroup]=\"searchForm\" (ngSubmit)=\"searchData()\">\r\n                    <input class=\"form-control form-control-lg\" type=\"search\"\r\n                           name=\"address\"\r\n                           placeholder=\"Search in app...\" formControlName=\"keyword\">\r\n                    <button type=\"submit\" class=\"search-icon\">\r\n                      <gx-icon name=\"search\" size=\"lg\"></gx-icon>\r\n                    </button>\r\n                </form>\r\n                <!-- /search box -->\r\n\r\n                <ng-container *ngFor=\"let item of pagedItems; let last = last\">\r\n                    <!-- Separator -->\r\n                    <hr class=\"border-dashed my-6\">\r\n                    <!-- /separator -->\r\n\r\n                    <!-- Search Result-->\r\n                    <div class=\"search-result\">\r\n                        <h3 class=\"search-heading\"><a href=\"javascript:void(0)\">{{item.title}}</a>\r\n                        </h3>\r\n                        <a href=\"javascript:void(0)\" class=\"search-link\">{{item.url}}</a>\r\n                        <p>\r\n                            {{item.text}}\r\n                        </p>\r\n                    </div>\r\n                    <!-- /search result-->\r\n\r\n                    <!-- Separator -->\r\n                    <hr *ngIf=\"last\" class=\"border-dashed my-6\">\r\n                    <!-- /separator -->\r\n                </ng-container>\r\n\r\n                <!-- Pagination -->\r\n                <nav>\r\n                    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination justify-content-center mb-0\">\r\n                        <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\r\n                            <a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"setPage(1)\">\r\n                                <gx-icon name=\"chevrolet-left\"></gx-icon>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\r\n                            [ngClass]=\"{'active':pager.currentPage === page}\">\r\n                            <a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"setPage(page)\">{{page}}</a>\r\n                        </li>\r\n\r\n                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                            <a class=\"page-link\" href=\"javascript:vo0id(0)\" (click)=\"setPage(pager.totalPages)\">\r\n                                <gx-icon name=\"chevrolet-right\"></gx-icon>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n                <!-- /pagination -->\r\n            </div>\r\n            <!-- /card body -->\r\n\r\n        </div>\r\n        <!-- /card -->\r\n\r\n    </div>\r\n    <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/left-sidebar/wall-left-sidebar.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/left-sidebar/wall-left-sidebar.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Grid Item -->\r\n\r\n    <!-- User Information -->\r\n    <div class=\"card user-bg-card\"  [ngStyle]=\"{'background-image': 'url(' + data.user.image + ')'}\">\r\n        <div class=\"user-bg-card__info p-5\">\r\n            <a href=\"javascript:void(0)\" class=\"dt-avatar-name mb-1 text-white\">{{data.user.name}}</a>\r\n            <span class=\"d-inline-block f-12\" *ngIf=\"data.user.address\">{{data.user.address}}</span>\r\n        </div>\r\n    </div>\r\n    <!-- /user information -->\r\n\r\n    <!-- List -->\r\n    <ul class=\"dt-list dt-list-col-4 dt-list-bordered\">\r\n        <!-- List Item -->\r\n        <li class=\"dt-list__item text-center\" *ngFor=\"let feed of data.feeds\">\r\n            <span class=\"h4 font-weight-500 mb-0\">{{feed.value | thousandSuff}}</span>\r\n            <span class=\"d-block text-light-gray f-12\">{{feed.label}}</span>\r\n        </li>\r\n    </ul>\r\n    <!-- /list -->\r\n\r\n\r\n<!-- Separator -->\r\n    <hr class=\"my-6\">\r\n    <!-- /separator -->\r\n\r\n    <div class=\"d-none d-sm-block\">\r\n        <div class=\"mb-10\">\r\n            <p class=\"mb-3\">You are following Chelsea Jones.</p>\r\n\r\n            <!-- Toggle Button -->\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-xs toggle-button\" [ngClass]=\"{'active':!follow}\">\r\n                <span (click)=\"toggleFollow()\">{{follow ? 'Unfollow' : 'Follow'}}</span>\r\n            </a>\r\n            <!-- /toggle button -->\r\n        </div>\r\n\r\n        <!-- Entry Header -->\r\n        <app-entry-header class=\"mb-5\" heading=\"Interests\"></app-entry-header>\r\n        <!-- /entry header -->\r\n\r\n        <!-- Interest List -->\r\n        <ul class=\"dt-list mb-8\">\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item\" *ngFor=\"let interest of data.interests\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-light\">{{interest}}</a>\r\n            </li>\r\n            <!-- /list item -->\r\n        </ul>\r\n        <!-- /Interest List -->\r\n\r\n        <!-- Entry Header -->\r\n        <app-entry-header class=\"mb-5\" [heading]=\"friendListCardTitle\"></app-entry-header>\r\n        <!-- /entry header -->\r\n        <gx-online-user-list-card [userList]=\"data.friends\" limit=\"6\"></gx-online-user-list-card>\r\n    </div>\r\n<!-- /grid item -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/posts/post-detail/comment-box/comment-box.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/posts/post-detail/comment-box/comment-box.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Avatar -->\r\n<img class=\"dt-avatar dt-avatar__shadow size-{{imageSize}} mr-2\" [src]=\"currentUser.small_image\" alt=\"{{currentUser.name}}\">\r\n<!-- /avatar -->\r\n\r\n<!-- Media Body -->\r\n<div class=\"media-body\">\r\n    <form [formGroup]=\"commentForm\" (ngSubmit)=\"commentForm.valid && submitComment()\">\r\n        <!-- Input Area -->\r\n        <input type=\"text\" class=\"form-control border-0 shadow-none bg-focus\"\r\n               [ngClass]=\"{'form-control-sm':formSize == 'small'}\" formControlName=\"message\"\r\n               placeholder=\"Type your comment here...\">\r\n        <!-- /input area -->\r\n    </form>\r\n</div>\r\n<!-- /media body -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/posts/post-detail/post-detail.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/posts/post-detail/post-detail.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Body -->\r\n<card-body>\r\n    <!-- Avatar Wrapper -->\r\n    <div class=\"dt-avatar-wrapper mb-3\">\r\n        <!-- Avatar -->\r\n        <img class=\"dt-avatar dt-avatar__shadow size-50\"\r\n             [src]=\"post.user_image\"\r\n             alt=\"{{post.user_name}}\">\r\n        <!-- /avatar -->\r\n\r\n        <!-- Info -->\r\n        <div class=\"dt-avatar-info\">\r\n            <span class=\"h5 dt-avatar-name mb-1\">{{post.user_name}}</span>\r\n            <span class=\"meta-date\">{{post.created_at | dateAgo}}</span>\r\n        </div>\r\n        <!-- /info -->\r\n    </div>\r\n    <!-- /avatar wrapper -->\r\n\r\n    <!-- Wall Post Content -->\r\n    <div class=\"wall-post\">\r\n        <p class=\"text-dark\" *ngIf=\"post.message\">{{post.message}}</p>\r\n\r\n        <ul class=\"dt-list dt-list-col-6 mb-4\"\r\n            *ngIf=\"post.hasOwnProperty('attachments') && post.attachments.length > 0\">\r\n            <!-- List Item -->\r\n            <li class=\"dt-list__item text-center\" *ngFor=\"let attachment of post.attachments; let last=last\">\r\n                <a href=\"javascript:void(0)\" class=\"d-block\" [ngClass]=\"{'more-thumb rounded':last}\">\r\n                    <img src=\"{{attachment.image}}\" alt=\"{{attachment.name}}\" class=\"img-fluid rounded\">\r\n                    <span class=\"count-number display-4\" *ngIf=\"last\">+4</span>\r\n                </a>\r\n            </li>\r\n            <!-- /list item -->\r\n        </ul>\r\n    </div>\r\n    <!-- /wall post content -->\r\n\r\n    <!-- Wall Action Area -->\r\n    <div class=\"d-flex flex-wrap mb-6\">\r\n        <a *ngIf=\"post.feeds.hasOwnProperty('views')\" href=\"javascript:void(0)\"\r\n           class=\"f-12 d-inline-block text-light-gray mr-3\">\r\n            <gx-icon name=\"eye\" class=\"mr-1\" size=\"lg\"></gx-icon>\r\n            <span class=\"d-inline-block\">{{post.feeds.views | thousandSuff}} Views</span>\r\n        </a>\r\n        <a *ngIf=\"post.feeds.hasOwnProperty('likes')\" href=\"javascript:void(0)\"\r\n           class=\"f-12 d-inline-block text-light-gray mr-3\" (click)=\"toggleLike()\">\r\n            <gx-icon name=\"heart-o\" size=\"sm\" [fw]=\"true\" [ngClass]=\"{'text-danger':likePost}\"></gx-icon>\r\n            <span class=\"d-inline-block\">{{post.feeds.likes | thousandSuff}} Likes</span>\r\n        </a>\r\n        <a *ngIf=\"post.hasOwnProperty('comments')\" href=\"javascript:void(0)\"\r\n           class=\"f-12 d-inline-block text-light-gray\">\r\n            <gx-icon name=\"message\" size=\"sm\" [fw]=\"true\"></gx-icon>\r\n            <span class=\"d-inline-block\">{{post.comments.length | thousandSuff}} Comments</span>\r\n        </a>\r\n    </div>\r\n    <!-- /wall action area -->\r\n\r\n    <!-- Media -->\r\n    <div class=\"media px-5 mb-3\" *ngFor=\"let comment of post.comments ;let commentIndexNumber=index\">\r\n        <!-- Avatar -->\r\n        <img class=\"dt-avatar dt-avatar__shadow size-35 mr-2\"\r\n             src=\"{{comment.image}}\"\r\n             alt=\"{{comment.name}}\">\r\n        <!-- /avatar -->\r\n\r\n        <!-- Media Body -->\r\n        <div class=\"media-body\">\r\n            <span class=\"h5 dt-avatar-name mb-1\">{{comment.name}}</span>\r\n            <span class=\"meta-date mb-2\">{{comment.created_at | dateAgo}}</span>\r\n            <p>\r\n                {{comment.text}}\r\n            </p>\r\n\r\n            <p>\r\n                <!-- Toggle Button -->\r\n                <a href=\"javascript:void(0)\"\r\n                   class=\"btn btn-primary btn-xs mr-2 toggle-button\">\r\n                    <span class=\"show\" #likeLabel\r\n                          (click)=\"toggleShowHideClass(likeLabel);toggleShowHideClass(unlikeLabel)\">Like</span>\r\n                    <span class=\"hide\" #unlikeLabel\r\n                          (click)=\"toggleShowHideClass(likeLabel);toggleShowHideClass(unlikeLabel)\">Unlike</span>\r\n                </a>\r\n                <!-- /toggle button -->\r\n                <a class=\"btn btn-light btn-xs\" href=\"javascript:void(0);\" role=\"button\"\r\n                   (click)=\"toggleShowHideClass(commentReplyBox)\">Comment</a>\r\n            </p>\r\n\r\n            <div class=\"media px-5 mb-3\" *ngFor=\"let reply of comment.replies;\">\r\n                <!-- Avatar -->\r\n                <img class=\"dt-avatar dt-avatar__shadow size-25 mr-2\"\r\n                     src=\"{{reply.image}}\"\r\n                     alt=\"{{reply.name}}\">\r\n                <!-- /avatar -->\r\n\r\n                <!-- Media Body -->\r\n                <div class=\"media-body\">\r\n                    <span class=\"h5 dt-avatar-name mb-1\">{{reply.name}}</span>\r\n                    <span class=\"meta-date mb-2\">{{reply.created_at | dateAgo}}</span>\r\n                    <p>\r\n                        {{reply.text}}\r\n                    </p>\r\n                </div>\r\n                <!-- /media body -->\r\n            </div>\r\n\r\n            <!-- Media -->\r\n            <div class=\"collapse\" #commentReplyBox>\r\n                <!-- Media -->\r\n                <comment-box imageSize=\"25\" formSize=\"small\" [postId]=\"post.id\" [isReply]=\"true\"\r\n                             [commentId]=\"comment.id\"></comment-box>\r\n                <!-- /media -->\r\n            </div>\r\n            <!-- /media -->\r\n\r\n        </div>\r\n        <!-- /media body -->\r\n    </div>\r\n    <!-- /media -->\r\n\r\n    <!-- Media -->\r\n    <comment-box class=\"px-5 {{post.id}}\" [postId]=\"post.id\"></comment-box>\r\n    <!-- /media -->\r\n</card-body>\r\n<!-- /card body -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/posts/posts.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/posts/posts.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- User Activity Form Card -->\r\n<div class=\"dt-card\">\r\n    <card-body>\r\n        <form [formGroup]=\"postForm\" (ngSubmit)=\"postForm.valid && onSubmitPost()\">\r\n            <!-- Media -->\r\n            <div class=\"media\">\r\n                <!-- Avatar -->\r\n                <img class=\"dt-avatar dt-avatar__shadow size-50 mr-2\"\r\n                     [src]=\"currentUser.small_image\"\r\n                     alt=\"{{currentUser.name}}\">\r\n                <!-- /avatar -->\r\n\r\n                <!-- Media Body -->\r\n                <div class=\"media-body\">\r\n                    <!-- Text Area -->\r\n                    <textarea class=\"form-control border-0 shadow-none bg-focus\" rows=\"3\"\r\n                              placeholder=\"Whats in your mind?\" formControlName=\"message\"></textarea>\r\n                    <!-- /text area -->\r\n                </div>\r\n                <!-- /media body -->\r\n            </div>\r\n            <!-- /media -->\r\n\r\n            <!-- Separator -->\r\n            <hr>\r\n            <!-- /separator -->\r\n\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"dt-attachment-btn border-0 d-inline-flex align-items-center overflow-hidden\">\r\n                    <input type=\"file\">\r\n                    <gx-icon name=\"camera\" class=\"mr-2\" size=\"xl\"></gx-icon>\r\n                    <span class=\"d-inline-block\">Add Photos/Album</span>\r\n                </div>\r\n\r\n                <button type=\"submit\"\r\n                        class=\"btn btn-primary btn-xs text-uppercase ml-auto\" [disabled]=\"postForm.invalid\">send</button>\r\n            </div>\r\n        </form>\r\n    </card-body>\r\n</div>\r\n<!-- /card body -->\r\n\r\n<!-- User Activity Detail Card -->\r\n<post-detail *ngFor=\"let post of posts | orderBy:'created_at':true\" gxCard [post]=\"post\"></post-detail>\r\n<!-- /user activity detail card -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/right-sidebar/wall-right-sidebar.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/right-sidebar/wall-right-sidebar.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Entry Header -->\r\n<app-entry-header class=\"mb-5\" heading=\"Recent Activities\"></app-entry-header>\r\n<!-- /entry header -->\r\n\r\n<!-- Widget -->\r\n<div *ngFor=\"let item of data\" class=\"dt-widget dt-widget-hover\">\r\n    <span class=\"dt-widget__heading px-0\">{{item.date}}</span>\r\n    <!-- Widget Item -->\r\n    <div *ngFor=\"let activity of item.activities\" class=\"dt-widget__item px-0\">\r\n\r\n        <!-- Widget Image -->\r\n        <div class=\"dt-widget__img\">\r\n\r\n            <span class=\"dt-avatar size-35 rounded {{activity.imageClass ? activity.imageClass: 'bg-light-blue' }} text-white\"\r\n                  *ngIf=\"!activity.image\">{{activity.name | shortTitle}}</span>\r\n\r\n            <!-- Avatar -->\r\n            <img *ngIf=\"activity.image\" class=\"dt-avatar size-35 rounded\"\r\n                 src=\"{{activity.image}}\" alt=\"User\">\r\n            <!-- /avatar -->\r\n        </div>\r\n        <!-- /widget image -->\r\n\r\n        <!-- Widget Info -->\r\n        <div class=\"dt-widget__info\">\r\n            <a href=\"javascript:void(0)\" class=\"dt-widget__title\">{{activity.content}}</a>\r\n            <ul class=\"dt-team-list mt-2\" *ngIf=\"activity.hasOwnProperty('images')\">\r\n                <li *ngFor=\"let image of activity.images; let last = last\">\r\n                    <!-- Avatar -->\r\n                    <a class=\"dt-avatar size-35 min-w-55 rounded\" href=\"javascript:void(0)\">\r\n                        <img class=\"img-fluid\" src=\"{{image}}\" alt=\"Beach\">\r\n                    </a>\r\n                    <!-- /avatar -->\r\n                </li>\r\n                <li>\r\n                    <!-- Avatar -->\r\n                    <a class=\"border py-2 px-4 rounded text-light-gray d-inline-block\" href=\"javascript:void(0)\">\r\n                        +5 More\r\n                    </a>\r\n                    <!-- /avatar -->\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- /widget info -->\r\n\r\n    </div>\r\n    <!-- /widgets item -->\r\n</div>\r\n<!-- /widget -->\r\n\r\n<!-- Widget Link -->\r\n<div class=\"dt-widget-link px-0\">\r\n    <a href=\"javascript:void(0)\" class=\"text-uppercase font-weight-500\">Load More</a>\r\n</div>\r\n<!-- /widget link -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/wall-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/wall-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<app-page-header pageTitle=\"Wall Page\"></app-page-header>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n    <!-- Grid Item -->\r\n        <wall-left-sidebar [leftSidebarData]=\"pageInfo\"></wall-left-sidebar>\r\n    <!-- /grid item -->\r\n\r\n    <!-- Grid Item -->\r\n        <posts></posts>\r\n    <!-- /grid item -->\r\n\r\n    <!-- Grid Item -->\r\n        <wall-right-sidebar [rightSidebarData]=\"pageInfo.recent_activities\"></wall-right-sidebar>\r\n    <!-- /grid item -->\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/map.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/_esm2015/operator/map.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/map.js ***!
  \***********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function map(project, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/content/pages/blank/blank.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/content/pages/blank/blank.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvcGFnZXMvYmxhbmsvYmxhbmsuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/pages/blank/blank.component.ts":
/*!********************************************************!*\
  !*** ./src/app/content/pages/blank/blank.component.ts ***!
  \********************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/settings/settings.service */ "./src/app/settings/settings.service.ts");



let BlankComponent = class BlankComponent {
    constructor(settingService) {
        this.settingService = settingService;
        this.onSettingChanged = this.settingService.onSettingChanged.subscribe((newSettings) => {
            this.settings = newSettings;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.onSettingChanged.unsubscribe();
    }
};
BlankComponent.ctorParameters = () => [
    { type: _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
];
BlankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blank',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blank.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/blank/blank.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blank.component.scss */ "./src/app/content/pages/blank/blank.component.scss")).default]
    })
], BlankComponent);



/***/ }),

/***/ "./src/app/content/pages/frontend/lock-screen/lock-screen.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/frontend/lock-screen/lock-screen.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LockScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenComponent", function() { return LockScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LockScreenComponent = class LockScreenComponent {
    constructor() {
        this.classlist = 'dt-login--container dt-lock-screen';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], LockScreenComponent.prototype, "classlist", void 0);
LockScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'lock-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lock-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/frontend/lock-screen/lock-screen.component.html")).default
    })
], LockScreenComponent);



/***/ }),

/***/ "./src/app/content/pages/help/help.component.scss":
/*!********************************************************!*\
  !*** ./src/app/content/pages/help/help.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvcGFnZXMvaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/pages/help/help.component.ts":
/*!******************************************************!*\
  !*** ./src/app/content/pages/help/help.component.ts ***!
  \******************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelpComponent = class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/help/help.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./help.component.scss */ "./src/app/content/pages/help/help.component.scss")).default]
    })
], HelpComponent);



/***/ }),

/***/ "./src/app/content/pages/layouts/layouts.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/content/pages/layouts/layouts.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvcGFnZXMvbGF5b3V0cy9sYXlvdXRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/pages/layouts/layouts.component.ts":
/*!************************************************************!*\
  !*** ./src/app/content/pages/layouts/layouts.component.ts ***!
  \************************************************************/
/*! exports provided: LayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsComponent", function() { return LayoutsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/settings/settings.service */ "./src/app/settings/settings.service.ts");




let LayoutsComponent = class LayoutsComponent {
    constructor(settingService, location) {
        this.settingService = settingService;
        this.location = location;
        this.layouts = [
            {
                name: 'Default Layout',
                slug: 'default',
                thumb: 'assets/images/demo-images/demo-1.jpg'
            },
            {
                name: 'SAAS Layout',
                slug: 'saas',
                thumb: 'assets/images/demo-images/demo-2.jpg'
            },
            {
                name: 'Listing Layout',
                slug: 'listing',
                thumb: 'assets/images/demo-images/demo-3.jpg'
            },
            {
                name: 'Intranet Layout',
                slug: 'intranet',
                thumb: 'assets/images/demo-images/demo-4.jpg'
            },
            {
                name: 'Back Office Layout',
                slug: 'back-office',
                thumb: 'assets/images/demo-images/demo-5.jpg'
            },
            {
                name: 'Back Office Minimal Layout',
                slug: 'back-office-mini',
                thumb: 'assets/images/demo-images/demo-6.jpg'
            },
            {
                name: 'Modern Layout',
                slug: 'modern',
                thumb: 'assets/images/demo-images/demo-7.jpg'
            },
            {
                name: 'CRM Layout',
                slug: 'crm',
                thumb: 'assets/images/demo-images/demo-8.jpg'
            }
        ];
        this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
            this.settings = settings;
        });
    }
    ngOnInit() {
    }
    /**
     * Get layout URL
     * @param layout
     */
    getLayoutUrl(layout) {
        return this.location.path().replace(this.settings.layout + '/', layout + '/');
    }
};
LayoutsComponent.ctorParameters = () => [
    { type: _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
LayoutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layouts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layouts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/layouts/layouts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layouts.component.scss */ "./src/app/content/pages/layouts/layouts.component.scss")).default]
    })
], LayoutsComponent);



/***/ }),

/***/ "./src/app/content/pages/pages.module.ts":
/*!***********************************************!*\
  !*** ./src/app/content/pages/pages.module.ts ***!
  \***********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");
/* harmony import */ var _search_SearchPageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/SearchPageService */ "./src/app/content/pages/search/SearchPageService.ts");
/* harmony import */ var _profile_profile_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile-page.service */ "./src/app/content/pages/profile/profile-page.service.ts");
/* harmony import */ var _wall_page_wall_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wall-page/wall-page.service */ "./src/app/content/pages/wall-page/wall-page.service.ts");
/* harmony import */ var _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/layouts.component */ "./src/app/content/pages/layouts/layouts.component.ts");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blank/blank.component */ "./src/app/content/pages/blank/blank.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./help/help.component */ "./src/app/content/pages/help/help.component.ts");
/* harmony import */ var _search_search_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/search-page.component */ "./src/app/content/pages/search/search-page.component.ts");
/* harmony import */ var _frontend_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./frontend/lock-screen/lock-screen.component */ "./src/app/content/pages/frontend/lock-screen/lock-screen.component.ts");
/* harmony import */ var _wall_page_wall_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wall-page/wall-page.component */ "./src/app/content/pages/wall-page/wall-page.component.ts");
/* harmony import */ var _wall_page_right_sidebar_wall_right_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wall-page/right-sidebar/wall-right-sidebar.component */ "./src/app/content/pages/wall-page/right-sidebar/wall-right-sidebar.component.ts");
/* harmony import */ var _wall_page_left_sidebar_wall_left_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wall-page/left-sidebar/wall-left-sidebar.component */ "./src/app/content/pages/wall-page/left-sidebar/wall-left-sidebar.component.ts");
/* harmony import */ var _wall_page_posts_posts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wall-page/posts/posts.component */ "./src/app/content/pages/wall-page/posts/posts.component.ts");
/* harmony import */ var _wall_page_posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wall-page/posts/post-detail/post-detail.component */ "./src/app/content/pages/wall-page/posts/post-detail/post-detail.component.ts");
/* harmony import */ var _wall_page_posts_post_detail_comment_box_comment_box_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./wall-page/posts/post-detail/comment-box/comment-box.component */ "./src/app/content/pages/wall-page/posts/post-detail/comment-box/comment-box.component.ts");
/* harmony import */ var _profile_profile_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/profile-page.component */ "./src/app/content/pages/profile/profile-page.component.ts");
/* harmony import */ var _profile_banner_profile_banner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/banner/profile-banner.component */ "./src/app/content/pages/profile/banner/profile-banner.component.ts");
/* harmony import */ var _profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile/content/profile-content.component */ "./src/app/content/pages/profile/content/profile-content.component.ts");
/* harmony import */ var _profile_content_contact_profile_contact_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./profile/content/contact/profile-contact.component */ "./src/app/content/pages/profile/content/contact/profile-contact.component.ts");
/* harmony import */ var _profile_content_about_profile_about_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./profile/content/about/profile-about.component */ "./src/app/content/pages/profile/content/about/profile-about.component.ts");
/* harmony import */ var _profile_content_events_profile_events_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./profile/content/events/profile-events.component */ "./src/app/content/pages/profile/content/events/profile-events.component.ts");
/* harmony import */ var _profile_content_about_tabs_about_profile_tabs_about_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./profile/content/about/tabs-about-profile/tabs-about-profile.component */ "./src/app/content/pages/profile/content/about/tabs-about-profile/tabs-about-profile.component.ts");
/* harmony import */ var _profile_content_about_tab_about_profile_tab_about_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./profile/content/about/tab-about-profile/tab-about-profile.component */ "./src/app/content/pages/profile/content/about/tab-about-profile/tab-about-profile.component.ts");




























const appsRoutes = [
    {
        path: 'blank',
        component: _blank_blank_component__WEBPACK_IMPORTED_MODULE_10__["BlankComponent"]
    },
    {
        path: 'wall',
        component: _wall_page_wall_page_component__WEBPACK_IMPORTED_MODULE_14__["WallPageComponent"],
        resolve: {
            data: _wall_page_wall_page_service__WEBPACK_IMPORTED_MODULE_8__["WallPageService"]
        }
    },
    {
        path: 'search',
        component: _search_search_page_component__WEBPACK_IMPORTED_MODULE_12__["SearchPageComponent"],
        resolve: {
            data: _search_SearchPageService__WEBPACK_IMPORTED_MODULE_6__["SearchPageService"]
        }
    },
    {
        path: 'profile',
        component: _profile_profile_page_component__WEBPACK_IMPORTED_MODULE_20__["ProfilePageComponent"],
        resolve: {
            data: _profile_profile_page_service__WEBPACK_IMPORTED_MODULE_7__["ProfilePageService"]
        }
    },
    {
        path: 'layouts',
        component: _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_9__["LayoutsComponent"]
    },
    {
        path: 'lock-screen',
        component: _frontend_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_13__["LockScreenComponent"]
    },
    {
        path: '**',
        component: _blank_blank_component__WEBPACK_IMPORTED_MODULE_10__["BlankComponent"]
    }
];
let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appsRoutes)
        ],
        declarations: [
            _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_9__["LayoutsComponent"],
            _blank_blank_component__WEBPACK_IMPORTED_MODULE_10__["BlankComponent"],
            _help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"],
            _search_search_page_component__WEBPACK_IMPORTED_MODULE_12__["SearchPageComponent"],
            _frontend_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_13__["LockScreenComponent"],
            _wall_page_wall_page_component__WEBPACK_IMPORTED_MODULE_14__["WallPageComponent"],
            _wall_page_right_sidebar_wall_right_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["WallRightSidebarComponent"],
            _wall_page_left_sidebar_wall_left_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["WallLeftSidebarComponent"],
            _wall_page_posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_18__["PostDetailComponent"],
            _wall_page_posts_post_detail_comment_box_comment_box_component__WEBPACK_IMPORTED_MODULE_19__["CommentBoxComponent"],
            _wall_page_posts_posts_component__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"],
            _profile_content_contact_profile_contact_component__WEBPACK_IMPORTED_MODULE_23__["ProfileContactComponent"],
            _profile_profile_page_component__WEBPACK_IMPORTED_MODULE_20__["ProfilePageComponent"],
            _profile_banner_profile_banner_component__WEBPACK_IMPORTED_MODULE_21__["ProfileBannerComponent"],
            _profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_22__["ProfileContentComponent"],
            _profile_content_about_profile_about_component__WEBPACK_IMPORTED_MODULE_24__["ProfileAboutComponent"],
            _profile_content_events_profile_events_component__WEBPACK_IMPORTED_MODULE_25__["ProfileEventsComponent"],
            _profile_content_about_tabs_about_profile_tabs_about_profile_component__WEBPACK_IMPORTED_MODULE_26__["TabsAboutProfileComponent"],
            _profile_content_about_tab_about_profile_tab_about_profile_component__WEBPACK_IMPORTED_MODULE_27__["TabAboutProfileComponent"]
        ]
    })
], PagesModule);



/***/ }),

/***/ "./src/app/content/pages/profile/banner/profile-banner.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/pages/profile/banner/profile-banner.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileBannerComponent", function() { return ProfileBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_content_pages_profile_profile_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/content/pages/profile/profile-page.service */ "./src/app/content/pages/profile/profile-page.service.ts");



let ProfileBannerComponent = class ProfileBannerComponent {
    constructor(profilePageService) {
        this.profilePageService = profilePageService;
        this.bannerData = this.profilePageService.bannerData;
    }
};
ProfileBannerComponent.ctorParameters = () => [
    { type: _app_content_pages_profile_profile_page_service__WEBPACK_IMPORTED_MODULE_2__["ProfilePageService"] }
];
ProfileBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile-banner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/banner/profile-banner.component.html")).default
    })
], ProfileBannerComponent);



/***/ }),

/***/ "./src/app/content/pages/profile/content/about/profile-about.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/profile/content/about/profile-about.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProfileAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAboutComponent", function() { return ProfileAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileAboutComponent = class ProfileAboutComponent {
    constructor() {
        this.classList = 'card';
    }
    ngOnInit() {
        if (this.class) {
            this.classList += ' ' + this.class;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('aboutProfile')
], ProfileAboutComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], ProfileAboutComponent.prototype, "classList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileAboutComponent.prototype, "class", void 0);
ProfileAboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/about/profile-about.component.html")).default
    })
], ProfileAboutComponent);



/***/ }),

/***/ "./src/app/content/pages/profile/content/about/tab-about-profile/tab-about-profile.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/content/pages/profile/content/about/tab-about-profile/tab-about-profile.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: TabAboutProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabAboutProfileComponent", function() { return TabAboutProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */


let TabAboutProfileComponent = class TabAboutProfileComponent {
    constructor() {
        this.active = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tabTitle')
], TabAboutProfileComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabAboutProfileComponent.prototype, "active", void 0);
TabAboutProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tab-about-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab-about-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/about/tab-about-profile/tab-about-profile.component.html")).default
    })
], TabAboutProfileComponent);



/***/ }),

/***/ "./src/app/content/pages/profile/content/about/tabs-about-profile/tabs-about-profile.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/content/pages/profile/content/about/tabs-about-profile/tabs-about-profile.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: TabsAboutProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsAboutProfileComponent", function() { return TabsAboutProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_content_pages_profile_content_about_tab_about_profile_tab_about_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/content/pages/profile/content/about/tab-about-profile/tab-about-profile.component */ "./src/app/content/pages/profile/content/about/tab-about-profile/tab-about-profile.component.ts");
/**
 * The main component that renders single TabComponent
 * instances.
 */



let TabsAboutProfileComponent = class TabsAboutProfileComponent {
    // contentChildren are set
    ngAfterContentInit() {
        // get all active tabs
        const activeTabs = this.tabs.filter((tab) => tab.active);
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }
    selectTab(tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(tab => tab.active = false);
        // activate the tab the user has clicked on.
        tab.active = true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabsAboutProfileComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_app_content_pages_profile_content_about_tab_about_profile_tab_about_profile_component__WEBPACK_IMPORTED_MODULE_2__["TabAboutProfileComponent"])
], TabsAboutProfileComponent.prototype, "tabs", void 0);
TabsAboutProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tabs-about-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs-about-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/about/tabs-about-profile/tabs-about-profile.component.html")).default
    })
], TabsAboutProfileComponent);



/***/ }),

/***/ "./src/app/content/pages/profile/content/contact/profile-contact.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/content/pages/profile/content/contact/profile-contact.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileContactComponent", function() { return ProfileContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileContactComponent = class ProfileContactComponent {
    constructor() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileContactComponent.prototype, "contactDetail", void 0);
ProfileContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/contact/profile-contact.component.html")).default
    })
], ProfileContactComponent);



/***/ }),

/***/ "./src/app/content/pages/profile/content/events/profile-events.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/content/pages/profile/content/events/profile-events.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEventsComponent", function() { return ProfileEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileEventsComponent = class ProfileEventsComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
};
ProfileEventsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileEventsComponent.prototype, "event", void 0);
ProfileEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-events.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/events/profile-events.component.html")).default,
    })
], ProfileEventsComponent);



/***/ }),

/***/ "./src/app/content/pages/profile/content/profile-content.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/content/pages/profile/content/profile-content.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileContentComponent", function() { return ProfileContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_content_pages_profile_profile_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/content/pages/profile/profile-page.service */ "./src/app/content/pages/profile/profile-page.service.ts");



let ProfileContentComponent = class ProfileContentComponent {
    constructor(profilePageService) {
        this.profilePageService = profilePageService;
        this.friendsCardTitle = 'Friends - 530 <span class="f-12 text-light-gray">(27 Mutual)</span>';
        this.data = this.profilePageService.contentData;
    }
};
ProfileContentComponent.ctorParameters = () => [
    { type: _app_content_pages_profile_profile_page_service__WEBPACK_IMPORTED_MODULE_2__["ProfilePageService"] }
];
ProfileContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/content/profile-content.component.html")).default
    })
], ProfileContentComponent);



/***/ }),

/***/ "./src/app/content/pages/profile/profile-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/content/pages/profile/profile-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfilePageComponent = class ProfilePageComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ProfilePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/profile/profile-page.component.html")).default
    })
], ProfilePageComponent);



/***/ }),

/***/ "./src/app/content/pages/profile/profile-page.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/content/pages/profile/profile-page.service.ts ***!
  \***************************************************************/
/*! exports provided: ProfilePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageService", function() { return ProfilePageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProfilePageService = class ProfilePageService {
    constructor(http) {
        this.http = http;
        this.profileContentApiUrl = 'api/profile-content'; // URL to web api
        this.profileBannerApiUrl = 'api/profile-banner'; // URL to web api
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
                this.fetchProfileBannerData(),
                this.fetchProfileContentData(),
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get profile page banner data
     * @return {Promise<any>}
     */
    fetchProfileBannerData() {
        return new Promise((resolve, reject) => {
            this.http.get(this.profileBannerApiUrl).subscribe((data) => {
                this.bannerData = data;
                resolve(data);
            }, reject);
        });
    }
    /**
     * Get profile page content
     * @return {Promise<any>}
     */
    fetchProfileContentData() {
        return new Promise((resolve, reject) => {
            this.http.get(this.profileContentApiUrl).subscribe((data) => {
                this.contentData = data;
                resolve(data);
            }, reject);
        });
    }
};
ProfilePageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfilePageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfilePageService);



/***/ }),

/***/ "./src/app/content/pages/search/SearchPageService.ts":
/*!***********************************************************!*\
  !*** ./src/app/content/pages/search/SearchPageService.ts ***!
  \***********************************************************/
/*! exports provided: SearchPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageService", function() { return SearchPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SearchPageService = class SearchPageService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'api/search-data'; // URL to web api
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
                this.fetchSearchData(),
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get wall page data
     * @return {Promise<any>}
     */
    fetchSearchData() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl).subscribe((data) => {
                this.searchData = data;
                resolve(data);
            }, reject);
        });
    }
    /**
     * filter data
     * @param keyword
     */
    filterData(keyword) {
        console.log(keyword);
        if (!keyword || keyword === '') {
            return this.searchData;
        }
        return this.searchData.filter(function (item) {
            if (item.title.indexOf(keyword) > -1 || item.url.indexOf(keyword) > -1 || item.text.indexOf(keyword) > -1) {
                return item;
            }
        });
    }
};
SearchPageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SearchPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SearchPageService);



/***/ }),

/***/ "./src/app/content/pages/search/search-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/content/pages/search/search-page.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _app_content_pages_search_SearchPageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/content/pages/search/SearchPageService */ "./src/app/content/pages/search/SearchPageService.ts");
/* harmony import */ var _gaxon_services_pager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gaxon/services/pager.service */ "./src/gaxon/services/pager.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let SearchPageComponent = class SearchPageComponent {
    constructor(searchService, pagerService) {
        this.searchService = searchService;
        this.pagerService = pagerService;
        this.filterKeyword = 'Admin Theme';
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            keyword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
        // pager object
        this.pager = {};
    }
    ngOnInit() {
        this.data = this.searchService.filterData(this.filterKeyword);
        // initialize to page 1
        this.setPage(1);
    }
    /**
     * Set page number to fetch data
     * @param page
     */
    setPage(page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.data.length, page);
        // get current page of items
        this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
    /**
     * Search data by keyword in form
     */
    searchData() {
        this.filterKeyword = this.searchForm.value.keyword;
        this.data = this.searchService.filterData(this.filterKeyword);
        this.searchForm.reset();
        this.setPage(1);
    }
};
SearchPageComponent.ctorParameters = () => [
    { type: _app_content_pages_search_SearchPageService__WEBPACK_IMPORTED_MODULE_3__["SearchPageService"] },
    { type: _gaxon_services_pager_service__WEBPACK_IMPORTED_MODULE_4__["PagerService"] }
];
SearchPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/search/search-page.component.html")).default
    })
], SearchPageComponent);



/***/ }),

/***/ "./src/app/content/pages/wall-page/left-sidebar/wall-left-sidebar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/wall-page/left-sidebar/wall-left-sidebar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WallLeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallLeftSidebarComponent", function() { return WallLeftSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WallLeftSidebarComponent = class WallLeftSidebarComponent {
    constructor() {
        this.classList = 'col-xl-3 col-md-4 col-sm-5';
        this.friendListCardTitle = 'Friends - 530 <span class="f-12 text-light-gray">(27 Mutual)';
        this.follow = true;
    }
    ngOnInit() {
    }
    toggleFollow() {
        this.follow = !this.follow;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('leftSidebarData')
], WallLeftSidebarComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], WallLeftSidebarComponent.prototype, "classList", void 0);
WallLeftSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'wall-left-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wall-left-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/left-sidebar/wall-left-sidebar.component.html")).default
    })
], WallLeftSidebarComponent);



/***/ }),

/***/ "./src/app/content/pages/wall-page/posts/post-detail/comment-box/comment-box.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/content/pages/wall-page/posts/post-detail/comment-box/comment-box.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CommentBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentBoxComponent", function() { return CommentBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_content_pages_wall_page_wall_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/content/pages/wall-page/wall-page.service */ "./src/app/content/pages/wall-page/wall-page.service.ts");




let CommentBoxComponent = class CommentBoxComponent {
    constructor(wallPageService) {
        this.wallPageService = wallPageService;
        this.additionalClass = '';
        this.imageSize = '35';
        this.formSize = 'large';
        this.classList = 'media';
        this.isReply = false;
        this.commentId = 0;
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
        if (this.class) {
            this.classList += ' ' + this.class;
        }
        this.currentUser = this.wallPageService.currentUserData;
    }
    submitComment() {
        const commentData = this.commentForm.value;
        commentData.is_reply = this.isReply;
        commentData.post_id = this.postId;
        commentData.comment_id = this.commentId;
        this.wallPageService.saveComment(commentData);
        this.commentForm.reset();
    }
};
CommentBoxComponent.ctorParameters = () => [
    { type: _app_content_pages_wall_page_wall_page_service__WEBPACK_IMPORTED_MODULE_3__["WallPageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentBoxComponent.prototype, "additionalClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentBoxComponent.prototype, "imageSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentBoxComponent.prototype, "formSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], CommentBoxComponent.prototype, "classList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentBoxComponent.prototype, "class", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentBoxComponent.prototype, "isReply", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentBoxComponent.prototype, "postId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentBoxComponent.prototype, "commentId", void 0);
CommentBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'comment-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comment-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/posts/post-detail/comment-box/comment-box.component.html")).default
    })
], CommentBoxComponent);



/***/ }),

/***/ "./src/app/content/pages/wall-page/posts/post-detail/post-detail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/content/pages/wall-page/posts/post-detail/post-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostDetailComponent = class PostDetailComponent {
    constructor() {
        this.likePost = false;
    }
    toggleShowHideClass(element) {
        if (element.classList.contains('show')) {
            element.classList.remove('show');
            element.classList.add('hide');
        }
        else {
            element.classList.add('show');
            element.classList.remove('hide');
        }
    }
    toggleLike() {
        this.likePost = !this.likePost;
        if (!this.likePost) {
            this.post.feeds.likes -= 1;
        }
        else {
            this.post.feeds.likes += 1;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostDetailComponent.prototype, "post", void 0);
PostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'post-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/posts/post-detail/post-detail.component.html")).default
    })
], PostDetailComponent);



/***/ }),

/***/ "./src/app/content/pages/wall-page/posts/posts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/content/pages/wall-page/posts/posts.component.ts ***!
  \******************************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_content_pages_wall_page_wall_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/content/pages/wall-page/wall-page.service */ "./src/app/content/pages/wall-page/wall-page.service.ts");




let PostsComponent = class PostsComponent {
    constructor(wallPageService) {
        this.wallPageService = wallPageService;
        this.classList = 'col-xl-5 col-md-8 col-sm-7';
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.currentUser = this.wallPageService.currentUserData;
        this.posts = this.wallPageService.posts;
    }
    ngOnInit() {
        this.fetchPosts();
    }
    ngOnDestroy() {
        if (this.postDataSubscribe) {
            this.postDataSubscribe.unsubscribe();
        }
    }
    fetchPosts() {
    }
    onSubmitPost() {
        const post = this.postForm.value;
        post.attachments = [];
        post.feeds = {
            views: 1,
            likes: 0,
            comments: 0
        };
        post.comments = [];
        this.wallPageService.saveWallPost(post);
        this.postForm.reset();
    }
};
PostsComponent.ctorParameters = () => [
    { type: _app_content_pages_wall_page_wall_page_service__WEBPACK_IMPORTED_MODULE_3__["WallPageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], PostsComponent.prototype, "classList", void 0);
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/posts/posts.component.html")).default
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/content/pages/wall-page/right-sidebar/wall-right-sidebar.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/content/pages/wall-page/right-sidebar/wall-right-sidebar.component.ts ***!
  \***************************************************************************************/
/*! exports provided: WallRightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallRightSidebarComponent", function() { return WallRightSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WallRightSidebarComponent = class WallRightSidebarComponent {
    constructor() {
        this.classList = 'col-xl-4 d-none d-xl-block';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rightSidebarData')
], WallRightSidebarComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], WallRightSidebarComponent.prototype, "classList", void 0);
WallRightSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'wall-right-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wall-right-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/right-sidebar/wall-right-sidebar.component.html")).default
    })
], WallRightSidebarComponent);



/***/ }),

/***/ "./src/app/content/pages/wall-page/wall-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/content/pages/wall-page/wall-page.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvcGFnZXMvd2FsbC1wYWdlL3dhbGwtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/pages/wall-page/wall-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/content/pages/wall-page/wall-page.component.ts ***!
  \****************************************************************/
/*! exports provided: WallPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallPageComponent", function() { return WallPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_content_pages_wall_page_wall_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/content/pages/wall-page/wall-page.service */ "./src/app/content/pages/wall-page/wall-page.service.ts");



let WallPageComponent = class WallPageComponent {
    constructor(wallPageService) {
        this.wallPageService = wallPageService;
        this.pageInfo = this.wallPageService.wallPageData;
    }
    ngOnInit() {
    }
};
WallPageComponent.ctorParameters = () => [
    { type: _app_content_pages_wall_page_wall_page_service__WEBPACK_IMPORTED_MODULE_2__["WallPageService"] }
];
WallPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wall-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wall-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/wall-page/wall-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wall-page.component.scss */ "./src/app/content/pages/wall-page/wall-page.component.scss")).default]
    })
], WallPageComponent);



/***/ }),

/***/ "./src/app/content/pages/wall-page/wall-page.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/content/pages/wall-page/wall-page.service.ts ***!
  \**************************************************************/
/*! exports provided: WallPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallPageService", function() { return WallPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WallPageService = class WallPageService {
    constructor(http) {
        this.http = http;
        this.wallPageUrl = 'api/wall-page-data'; // URL to web api
        this.postUrl = 'api/wall-page-posts'; // URL to web api
        this.currentUserData = { name: 'Chelsea Jones', small_image: 'https://via.placeholder.com/150X150' };
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
                this.getWallPage(),
                this.fetchPosts(),
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get wall page data
     * @return {Promise<any>}
     */
    fetchPosts() {
        return new Promise((resolve, reject) => {
            this.http.get(this.postUrl).subscribe((data) => {
                this.posts = data;
                resolve(data);
            }, reject);
        });
    }
    /**
     * Get wall page data
     * @return {Promise<any>}
     */
    getWallPage() {
        return new Promise((resolve, reject) => {
            this.http.get(this.wallPageUrl).subscribe((data) => {
                this.wallPageData = data;
                resolve(data);
            }, reject);
        });
    }
    /**
     *  Save wall page user post
     */
    saveWallPost(post) {
        const noOfPosts = this.posts.length;
        post.id = noOfPosts + 1;
        post.user_name = this.currentUserData.name;
        post.user_image = this.currentUserData.small_image;
        post.created_at = new Date();
        this.posts.push(post);
    }
    savePostComment(post_id, comment) {
        this.posts.find(item => item.id === post_id).comments.push(comment);
    }
    saveReplyOnComment(post_id, comment_id, newComment) {
        const postComments = this.posts.find(item => item.id === post_id).comments;
        const comment = postComments.find(item => item.id === comment_id);
        if (!comment.hasOwnProperty('replies')) {
            postComments.find(item => item.id === comment_id).replies = [];
        }
        postComments.find(item => item.id === comment_id).replies.push(newComment);
        this.posts.find(item => item.id === post_id).comments = postComments;
    }
    /**
     *
     * @param comment
     */
    saveComment(comment) {
        const newComment = {
            name: this.currentUserData.name,
            image: this.currentUserData.small_image,
            created_at: new Date(),
            text: comment.message
        };
        if (comment.is_reply) {
            this.saveReplyOnComment(comment.post_id, comment.comment_id, newComment);
        }
        else {
            this.savePostComment(comment.post_id, newComment);
        }
    }
};
WallPageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WallPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WallPageService);



/***/ }),

/***/ "./src/gaxon/services/pager.service.ts":
/*!*********************************************!*\
  !*** ./src/gaxon/services/pager.service.ts ***!
  \*********************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagerService = class PagerService {
    getPager(totalItems, currentPage = 1, pageSize = 7) {
        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        let startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
};
PagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PagerService);



/***/ })

}]);
//# sourceMappingURL=app-content-pages-pages-module-es2015.js.map