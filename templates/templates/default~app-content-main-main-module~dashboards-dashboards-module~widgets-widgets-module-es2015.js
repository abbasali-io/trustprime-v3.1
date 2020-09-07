(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-content-main-main-module~dashboards-dashboards-module~widgets-widgets-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-campaigns-results/section-campaigns-results.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-campaigns-results/section-campaigns-results.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header card-title=\"Campaigns &amp; Results\"></card-header>\r\n<!-- /card header -->\r\n\r\n<card-body class=\"pb-3\">\r\n\r\n  <!-- Campaigns Widget -->\r\n  <div class=\"campaigns-widget\">\r\n\r\n    <!-- Grid -->\r\n    <div class=\"row no-gutters pb-3 mb-1 border-bottom\">\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-5 col-sm-6 text-truncate pr-2\">Campaign Name</div>\r\n      <!-- /grid item -->\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-7 col-sm-6\">Leads & Conversion</div>\r\n      <!-- /grid item -->\r\n\r\n    </div>\r\n    <!-- /grid -->\r\n\r\n    <!-- Widget -->\r\n    <div class=\"dt-widget dt-widget-hover-bg\">\r\n\r\n      <!-- Widget Item -->\r\n      <div class=\"dt-widget__item\" *ngFor=\"let campaign of campaigns\">\r\n\r\n        <!-- Grid -->\r\n        <div class=\"row no-gutters\">\r\n\r\n          <!-- Grid Item -->\r\n          <div class=\"col-5 col-sm-6 pr-2\">\r\n            <p class=\"dt-widget__title mb-0 text-truncate\">{{campaign.title}}</p>\r\n          </div>\r\n          <!-- /grid item -->\r\n\r\n          <!-- Grid Item -->\r\n          <div class=\"col-7 col-sm-6\">\r\n            <div class=\"row no-gutters\">\r\n              <div class=\"col-sm-6 col-7\">\r\n                <span class=\"d-inline-block text-nowrap\">\r\n                  <span class=\"text-dark\">{{campaign.leadGain}}</span>\r\n                  out of <span class=\"text-dark\">{{campaign.totalLead}}</span>\r\n                </span>\r\n              </div>\r\n              <div class=\"col-sm-4 col-4 text-center\">\r\n                <span class=\"d-inline-block\" [ngClass]=\"campaign.percentColor\">{{campaign.percentLead}}</span>\r\n              </div>\r\n\r\n              <div class=\"col-sm-2 col-1 text-right\">\r\n                <!-- Dropdown -->\r\n                <div class=\"d-inline-block\" ngbDropdown placement=\"bootom-right\">\r\n                  <a class=\"no-arrow\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n                    <gx-icon name=\"vertical-more\" [fw]=\"true\" class=\"text-light-gray\"></gx-icon>\r\n                  </a>\r\n\r\n                  <div ngbDropdownMenu>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                  </div>\r\n                </div>\r\n                <!-- /dropdown -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /grid item -->\r\n\r\n        </div>\r\n        <!-- /grid -->\r\n\r\n      </div>\r\n      <!-- /widgets item -->\r\n\r\n    </div>\r\n    <!-- /widget -->\r\n\r\n  </div>\r\n  <!-- /campaigns widget -->\r\n\r\n</card-body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-leads/section-leads.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-leads/section-leads.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header [card-title]=\"cardTitle\"></card-header>\r\n<!-- /card header -->\r\n\r\n<card-body>\r\n\r\n  <!-- Grid -->\r\n  <div class=\"row\">\r\n\r\n    <!-- Grid Item -->\r\n    <div class=\"col-xl-4 col-md-6 mb-8 mb-xl-0\">\r\n\r\n      <div class=\"row no-gutters mb-5 border-bottom\">\r\n        <div class=\"col-6\">\r\n\r\n          <!-- Chart -->\r\n          <gx-chart chartClasses=\"ml-n5 mt-n4\" [chartType]=\"data.chart.chartType\" [options]=\"data.chart.options\"\r\n            [labels]=\"data.chart.labels\" [colors]=\"data.chart.colors\" [data]=\"leadNumbers.data\"></gx-chart>\r\n          <!-- /chart -->\r\n        </div>\r\n\r\n        <div class=\"col-6 d-flex\">\r\n          <div class=\"d-flex flex-column justify-content-end align-items-end flex-fill\">\r\n            <a href=\"javascript:void(0)\" id=\"toggle-view\" class=\"dt-avatar bg-primary shadow-lg mb-10\"\r\n              (click)=\"onToggleView()\">\r\n              <gx-icon [name]=\"activeView\" class=\"text-white\"></gx-icon>\r\n            </a>\r\n\r\n            <div class=\"text-dark display-3 font-weight-500 mb-5\">\r\n              <span>{{leadNumbers.lead}}&nbsp;</span>\r\n              <span class=\"h3\">% Happy Citizens</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ul class=\"dt-list dt-list-col-4\">\r\n        <li class=\"dt-list__item\" *ngFor=\"let browser of data.browsers\">\r\n          <div class=\"d-flex align-items-center\">\r\n            <span class=\"dot-shape dot-shape-lg mr-2\" [ngClass]=\"browser.dotColor\"></span>\r\n            <span class=\"d-inline-block\">{{browser.title}}</span>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n    <!-- /grid item -->\r\n\r\n    <!-- Grid Item -->\r\n    <div class=\"col-xl-4 col-md-6 px-xl-10 pl-md-10 mb-8 mb-md-0\">\r\n      <div class=\"h4 mb-2\">{{countries.heading}}</div>\r\n      <p class=\"mb-sm-6 text-light-gray\">{{countries.desc}}</p>\r\n\r\n      <ul class=\"dt-list flex-column\">\r\n        <li class=\"dt-list__item\" *ngFor=\"let country of countries.data\">\r\n          <div class=\"d-flex align-items-center\">\r\n            <i class=\"flag-icon flag-icon-rounded flag-icon-lg mr-5\" [ngClass]=\"'flag-icon-' + country.flag\"></i>\r\n            <span class=\"text-dark mr-1\">{{country.name}}</span>\r\n            <span class=\"ml-auto\">{{country.lead}}</span>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!-- /grid item -->\r\n\r\n    <!-- Grid Item -->\r\n    <div class=\"col-xl-4\">\r\n      <div class=\"h4 mb-2\">{{monthlyLead.heading}}</div>\r\n      <p class=\"mb-sm-6 text-light-gray\">{{monthlyLead.desc}}</p>\r\n\r\n      <!-- Chart -->\r\n      <gx-chart [chartType]=\"monthlyLead.chart.chartType\" [options]=\"barChartOptions\"\r\n        [labels]=\"monthlyLead.chart.labels\" [colors]=\"monthlyLead.chart.colors\" [datasets]=\"monthlyLead.chart.datasets\">\r\n      </gx-chart>\r\n      <!-- /chart -->\r\n\r\n    </div>\r\n    <!-- /grid item -->\r\n\r\n  </div>\r\n  <!-- /grid -->\r\n\r\n</card-body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-our-team/section-our-team.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-our-team/section-our-team.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header class=\"mb-3 header-sm-inline\" card-title=\"Our Team\">\r\n\r\n  <!-- Card Tools -->\r\n  <card-tool>\r\n    <ul class=\"nav nav-sm nav-underline nav-underline-none\">\r\n      <li class=\"nav-item\" *ngFor=\"let category of teamCategories\">\r\n        <a class=\"nav-link\" [href]=\"'#'+category.slug\" [ngClass]=\"{active:activeCategory===category.slug}\"\r\n           (click)=\"getFilteredTeam(category.slug, $event)\">{{category.name}}</a>\r\n      </li>\r\n    </ul>\r\n  </card-tool>\r\n  <!-- /card tools -->\r\n\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<!-- Card Body -->\r\n<card-body class=\"pb-4\">\r\n\r\n  <!-- Tab Content-->\r\n  <div class=\"tab-content\">\r\n\r\n    <!-- Tab panel -->\r\n    <div class=\"tab-pane active\">\r\n      <!-- Grid -->\r\n      <div class=\"row no-gutters\">\r\n\r\n        <!-- Grid Item -->\r\n        <div class=\"col-md-4 col-sm-6 col-12\" *ngFor=\"let member of teamMembers\">\r\n\r\n          <!-- Contact Short Info -->\r\n          <div class=\"dt-contact-info-short\">\r\n\r\n            <!-- Avatar Wrapper -->\r\n            <div class=\"dt-avatar-wrapper\">\r\n              <!-- Avatar -->\r\n              <img class=\"dt-avatar\"\r\n                   [src]=\"member.thumb\"\r\n                   alt=\"{{member.name}}\">\r\n              <!-- /avatar -->\r\n\r\n              <!-- Info -->\r\n              <div class=\"dt-avatar-info\">\r\n                <a href=\"javascript:void(0)\"\r\n                   class=\"dt-avatar-name text-dark\">{{member.name}}</a>\r\n                <span class=\"f-12 text-light-gray\">{{member.phoneNo}}</span>\r\n              </div>\r\n              <!-- /info -->\r\n            </div>\r\n            <!-- /avatar wrapper -->\r\n\r\n          </div>\r\n          <!-- /contact short info -->\r\n\r\n        </div>\r\n        <!-- /grid item -->\r\n\r\n        <!-- Grid Item -->\r\n        <div class=\"col-md-4 col-12\">\r\n          <a\r\n            class=\"border border-dashed py-3 px-4 rounded h-100 text-light-gray d-flex align-items-center justify-content-center\"\r\n            href=\"javascript:void(0)\">Add New</a>\r\n        </div>\r\n        <!-- /grid item -->\r\n\r\n      </div>\r\n      <!-- /grid -->\r\n\r\n    </div>\r\n    <!-- /tab panel -->\r\n\r\n  </div>\r\n  <!-- /tab content-->\r\n\r\n</card-body>\r\n<!-- /card body -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-pricing-plans/section-pricing-plans.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-pricing-plans/section-pricing-plans.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header class=\"mb-5\" card-title=\"Pricing Plans\">\r\n\r\n  <!-- Card Tools -->\r\n  <card-tool>\r\n    <button type=\"button\" class=\"btn btn-success btn-xs\">Add New</button>\r\n  </card-tool>\r\n  <!-- /card tools -->\r\n\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<!-- Card Body -->\r\n<card-body class=\"p-0\">\r\n\r\n  <!-- Widget -->\r\n  <div class=\"dt-widget dt-widget-hl-item dt-widget-hl-item-space dt-widget-mb-item dt-widget-hover-bg\">\r\n\r\n    <!-- Widget Item -->\r\n    <div *ngFor=\"let plan of pricingPlans\" class=\"dt-widget__item\" [ngClass]=\"plan.color\">\r\n\r\n      <!-- Widget Info -->\r\n      <div class=\"dt-widget__info text-truncate\">\r\n        <div class=\"dt-widget__title f-16 font-weight-500 text-truncate\">\r\n          {{plan.title}}\r\n        </div>\r\n        <p class=\"mb-0 text-truncate text-light-gray\">\r\n              <span class=\"text-dark mr-1\"><gx-icon name=\"wall\"\r\n                                                    class=\"mr-1\"></gx-icon>{{plan.subscribers | number}}</span>\r\n          subscribers\r\n        </p>\r\n      </div>\r\n      <!-- /widget info -->\r\n\r\n      <!-- Widget Extra -->\r\n      <div class=\"dt-widget__extra text-right\">\r\n        <!-- Show Content -->\r\n        <div class=\"show-content\">\r\n          <span class=\"d-block text-dark\">{{plan.monthlyPrice | currency}}</span>\r\n          <span class=\"d-block\">Per Month</span>\r\n        </div>\r\n        <!-- /show content -->\r\n        <!-- Hide Content -->\r\n        <div class=\"hide-content\">\r\n          <!-- Action Button Group -->\r\n          <div class=\"action-btn-group\">\r\n            <button class=\"btn btn-default text-success dt-fab-btn\">\r\n              <gx-icon name=\"editors\" size=\"1x\"></gx-icon>\r\n            </button>\r\n            <button class=\"btn btn-default text-danger dt-fab-btn\">\r\n              <gx-icon name=\"trash\" size=\"1x\"></gx-icon>\r\n            </button>\r\n          </div>\r\n          <!-- /action button group -->\r\n        </div>\r\n        <!-- /hide content -->\r\n      </div>\r\n      <!-- /widget extra -->\r\n\r\n    </div>\r\n    <!-- /widgets item -->\r\n\r\n  </div>\r\n  <!-- /widget -->\r\n</card-body>\r\n<!-- /card body -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-pricing-updates/section-pricing-updates.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-pricing-updates/section-pricing-updates.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header class=\"mb-5\" card-title=\"Pricing Updates\">\r\n\r\n  <!-- Card Tools -->\r\n  <card-tool>\r\n    <a href=\"javascript:void(0)\" class=\"dt-card__more\">\r\n      <gx-icon name=\"circle-add-o\" class=\"mr-2\"></gx-icon>Add New\r\n    </a>\r\n  </card-tool>\r\n  <!-- /card tools -->\r\n\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<!-- Card Body -->\r\n<div class=\"dt-card__body p-0\">\r\n  <!-- Widget -->\r\n  <div class=\"dt-widget dt-widget-sm dt-widget-hover\">\r\n\r\n    <!-- Widget Item -->\r\n    <div class=\"dt-widget__item\" *ngFor=\"let row of data\">\r\n\r\n      <!-- Widget Image -->\r\n      <div class=\"dt-widget__img align-self-center\">\r\n        <!-- Avatar -->\r\n        <gx-icon [name]=\"row.icon.name\" [fw]=\"true\" size=\"3x\" [ngClass]=\"row.icon.color\"></gx-icon>\r\n        <!-- /avatar -->\r\n      </div>\r\n      <!-- /widget image -->\r\n\r\n      <!-- Widget Info -->\r\n      <div class=\"dt-widget__info text-truncate\">\r\n        <div class=\"dt-widget__title d-flex\">\r\n          <span class=\"f-16 font-weight-500\">{{row.name}}</span>\r\n          <div class=\"trending-section ml-2\" [ngClass]=\"row.percentage.color\">\r\n            <span class=\"value\">{{(row.percentage.value/100) | percent}}</span>\r\n            <gx-icon [name]=\"row.percentage.icon\" class=\"f-10\"></gx-icon>\r\n          </div>\r\n        </div>\r\n        <p class=\"mb-0 text-truncate text-light-gray\">\r\n          High: {{row.highPrice | currency}} Low: {{row.lowPrice | currency}}\r\n        </p>\r\n      </div>\r\n      <!-- /widget info -->\r\n\r\n      <!-- Widget Extra -->\r\n      <div class=\"dt-widget__extra text-right\">\r\n        <!-- Hide Content -->\r\n        <div class=\"hide-content\">\r\n          <!-- Action Button Group -->\r\n          <div class=\"action-btn-group\">\r\n            <button class=\"btn btn-primary btn-sm\">Buy</button>\r\n            <button class=\"btn btn-secondary btn-sm\">Sell</button>\r\n          </div>\r\n          <!-- /action button group -->\r\n        </div>\r\n        <!-- /hide content -->\r\n      </div>\r\n      <!-- /widget extra -->\r\n\r\n    </div>\r\n    <!-- /widgets item -->\r\n\r\n  </div>\r\n  <!-- /widget -->\r\n</div>\r\n<!-- /card body -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-projects/section-projects.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-projects/section-projects.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header card-title=\"Projects\" class=\"mb-4\">\r\n  <!-- Card Tools -->\r\n  <card-tool>\r\n    <a href=\"javascript:void(0)\" class=\"dt-card__more\">See All</a>\r\n  </card-tool>\r\n  <!-- /card tools -->\r\n\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<!-- Card Body -->\r\n<card-body perfectScrollbar\r\n           [disabled]=\"!isScrollable\"\r\n           class=\"p-0 position-relative\"\r\n           [ngClass]=\"{'max-h-350':isScrollable}\">\r\n\r\n  <!-- Widget-->\r\n  <div class=\"dt-widget dt-widget-xl dt-widget-separator dt-widget-hover\">\r\n    <!-- Widget Item -->\r\n    <div class=\"dt-widget__item\" *ngFor=\"let project of projects\">\r\n\r\n      <!-- Widget Image -->\r\n      <div class=\"dt-widget__img\">\r\n        <!-- Avatar -->\r\n        <img *ngIf=\"project.logo.img\" class=\"\" [src]=\"project.logo.img\" alt=\"Logo\">\r\n\r\n        <gx-icon *ngIf=\"project.logo.icon\"\r\n                 [name]=\"project.logo.icon\"\r\n                 size=\"3x\"\r\n                 [ngClass]=\"project.logo.color\"></gx-icon>\r\n        <!-- /avatar -->\r\n      </div>\r\n      <!-- /widget image -->\r\n\r\n      <!-- Shape -->\r\n      <div class=\"dot-shape dot-shape-lg mx-5\" [ngClass]=\"project.color\"></div>\r\n      <!-- /shape -->\r\n\r\n      <!-- Widget Info -->\r\n      <div class=\"dt-widget__info align-text-top\">\r\n        <a class=\"dt-widget__title\" href=\"javascript:void(0)\">{{project.title}}</a>\r\n\r\n        <gx-status-bar showPercent\r\n                       [style.width.px]=\"120\"\r\n                       [fillVal]=\"project.avgProgress\"\r\n                       [maxVal]=\"100\"\r\n                       [textColor]=\"''\"\r\n                       [barPosition]=\"'start'\"\r\n                       [fullWidth]=\"true\"\r\n                       [barColor]=\"project.color\"></gx-status-bar>\r\n      </div>\r\n      <!-- /widget info -->\r\n\r\n      <!-- Widget Extra -->\r\n      <div class=\"dt-widget__extra\">\r\n        <div class=\"dt-task\">\r\n          <div class=\"dt-task__number\">{{project.tasks}} Tasks</div>\r\n          <a class=\"dt-task__redirect\" href=\"javascript:void(0)\">\r\n            <gx-icon name=\"open-new-tab\"></gx-icon>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <!-- /widget extra -->\r\n\r\n    </div>\r\n    <!-- /widget item -->\r\n  </div>\r\n  <!-- /widget-->\r\n\r\n</card-body>\r\n<!-- /card body -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-revenue-chart/section-revenue-chart.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-revenue-chart/section-revenue-chart.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header card-title=\"Revenue\">\r\n\r\n  <card-tool>\r\n    <!-- Dropdown -->\r\n    <div class=\"d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n      <a class=\"d-inline-block f-12 py-1 px-2 py-1 border rounded\" href=\"javascript:void(0)\" ngbDropdownToggle>{{selectedDay.name}}</a>\r\n\r\n      <div ngbDropdownMenu>\r\n        <a *ngFor=\"let day of days\" href=\"javascript:void(0)\" class=\"dropdown-item\" [ngClass]=\"{active:selectedDay.slug === day.slug}\"\r\n           (click)=\"onClickDay($event, day)\">{{day.name}}</a>\r\n      </div>\r\n    </div>\r\n    <!-- /dropdown -->\r\n  </card-tool>\r\n\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<div class=\"px-7 mb-7\">\r\n  <!-- Media -->\r\n  <div class=\"media\">\r\n    <!-- Media Body -->\r\n    <div class=\"media-body\">\r\n      <p class=\"mb-1 h3 text-sky-blue font-weight-500\">$12,45,125</p>\r\n      <span class=\"d-block\">Business Revenue</span>\r\n    </div>\r\n    <!-- /media body -->\r\n    <!-- Media Body -->\r\n    <div class=\"media-body\">\r\n      <p class=\"mb-1 h3 text-warning font-weight-500\">$14,200</p>\r\n      <span class=\"d-block\">Total Expenses</span>\r\n    </div>\r\n    <!-- /media body -->\r\n  </div>\r\n  <!-- /media -->\r\n</div>\r\n\r\n<gx-chart\r\n  class=\"dt-chart__body\"\r\n  [datasets]=\"chart.dataSets[selectedDay.slug]\"\r\n  [labels]=\"chart.labels\"\r\n  [options]=\"chart.options\"\r\n  [colors]=\"chart.colors\"\r\n  [chartType]=\"chart.chartType\"></gx-chart>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-social-media-advertising/section-social-media-advertising.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-social-media-advertising/section-social-media-advertising.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header class=\"mb-3\" card-title=\"Social Media Advertising\"></card-header>\r\n<!-- /card header -->\r\n\r\n<card-body class=\"pb-2\">\r\n\r\n  <!-- Media -->\r\n  <div class=\"media py-5\" *ngFor=\"let row of socialMedia; last as isLast;\" [ngClass]=\"{'border-bottom ':!isLast}\">\r\n\r\n    <!-- Icon -->\r\n    <gx-icon [name]=\"row.logo.icon\" size=\"4x\" class=\"mr-4\" [ngClass]=\"row.logo.color\"></gx-icon>\r\n    <!-- /icon -->\r\n\r\n    <!-- Media Body -->\r\n    <div class=\"media-body\">\r\n      <a class=\"dt-widget__title font-weight-500\" href=\"javascript:void(0)\">{{row.title}}</a>\r\n      <p class=\"dt-widget__subtitle\">{{row.likes}} Likes, {{row.shares}} Shares</p>\r\n    </div>\r\n    <!-- /media body -->\r\n\r\n    <span class=\"d-block min-w-60 text-center mr-xl-10 mr-md-2 mr-sm-10 ml-2\">\r\n       <span class=\"d-block font-weight-500 mb-1 h4\">{{row.spent | currency:'USD':'symbol':'0.0-0'}}</span>\r\n       <span class=\"d-block f-12\">Spent</span>\r\n     </span>\r\n\r\n    <span class=\"d-block min-w-60 text-center ml-xl-10\">\r\n      <span class=\"d-block text-success mb-1 h5\"><gx-icon name=\"profit\" [fw]=\"true\"></gx-icon>{{row.progress}}</span>\r\n      <span class=\"d-block f-12\">up</span>\r\n    </span>\r\n\r\n  </div>\r\n  <!-- /media -->\r\n\r\n</card-body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-static-chart/section-static-chart.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-static-chart/section-static-chart.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header card-title=\"Statics\">\r\n\r\n  <card-tool>\r\n    <!-- Dropdown -->\r\n    <div class=\"d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n      <a class=\"d-inline-block f-12 py-1 px-2 py-1 border rounded\" href=\"javascript:void(0)\" ngbDropdownToggle>{{selectedDay.name}}</a>\r\n\r\n      <div ngbDropdownMenu>\r\n        <a *ngFor=\"let day of days\" href=\"javascript:void(0)\" class=\"dropdown-item\" [ngClass]=\"{active:selectedDay.slug === day.slug}\"\r\n           (click)=\"onClickDay($event, day)\">{{day.name}}</a>\r\n      </div>\r\n    </div>\r\n    <!-- /dropdown -->\r\n  </card-tool>\r\n\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<gx-chart\r\n  class=\"dt-chart__body\"\r\n  [datasets]=\"chart.dataSets[selectedDay.slug]\"\r\n  [labels]=\"chart.labels\"\r\n  [options]=\"chart.options\"\r\n  [colors]=\"chart.colors\"\r\n  [chartType]=\"chart.chartType\"></gx-chart>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-support-tickets/section-support-tickets.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-support-tickets/section-support-tickets.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header class=\"mb-3\" card-title=\"Support Tickets\">\r\n  <card-tool>\r\n    <!-- Dropdown -->\r\n    <div class=\"d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n      <a class=\"d-inline-block f-12 py-1 px-2 py-1 border rounded\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n        Unread\r\n      </a>\r\n\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Read</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Unread</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Spam</a>\r\n      </div>\r\n    </div>\r\n    <!-- /dropdown -->\r\n  </card-tool>\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<!-- Card Body -->\r\n<card-body perfectScrollbar class=\"p-0 max-h-400 position-relative\">\r\n\r\n\r\n    <!-- Widget -->\r\n    <div class=\"dt-widget dt-widget-hover\">\r\n\r\n      <!-- Widget Item -->\r\n      <div class=\"dt-widget__item\" *ngFor=\"let ticket of supportTickets\">\r\n\r\n        <!-- Widget Image -->\r\n        <div class=\"dt-widget__img\">\r\n          <img class=\"dt-avatar size-35\" [src]=\"ticket.user.thumb\" alt=\"User\">\r\n        </div>\r\n        <!-- /widget image -->\r\n\r\n        <!-- Widget Info -->\r\n        <div class=\"dt-widget__info text-truncate\">\r\n          <a href=\"javascript:void(0)\" class=\"dt-widget__title text-truncate\">{{ticket.heading}}</a>\r\n          <p class=\"dt-widget__subtitle text-truncate text-light-gray\">\r\n            <a class=\"text-dark\" href=\"javascript:void(0)\">{{ticket.user.name}}</a>\r\n            created ticket {{ticket.created | timeAgo}}\r\n          </p>\r\n        </div>\r\n        <!-- /widget info -->\r\n\r\n        <!-- Widget Extra -->\r\n        <div class=\"dt-extra animate-slide align-self-center\">\r\n              <span class=\"badge badge-circle-animate badge-pill badge-sm align-text-top\"\r\n                    [ngClass]=\"ticket.priority.color\">{{ticket.priority.label}}</span>\r\n          <div class=\"slide-content\">\r\n            <a href=\"javascript:void(0)\">\r\n              <gx-icon name=\"arrow-right\" size=\"xl\" [fw]=\"true\"></gx-icon>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <!-- /widget extra -->\r\n\r\n      </div>\r\n      <!-- /widgets item -->\r\n\r\n    </div>\r\n    <!-- /widget -->\r\n\r\n</card-body>\r\n<!-- /card body -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-tickets/section-tickets.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-tickets/section-tickets.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<bs-card-header class=\"card-nav bg-transparent border-bottom\">\r\n\r\n  <ul class=\"card-header-links nav nav-underline nav-scroll text-uppercase\">\r\n    <li class=\"nav-item\">\r\n      <a href=\"#all\"\r\n         class=\"nav-link\"\r\n         [ngClass]=\"{'active':activeTab == ''}\"\r\n         (click)=\"onTabChange($event, '')\">All</a>\r\n    </li>\r\n    <li class=\"nav-item\" *ngFor=\"let status of ticketStatus\">\r\n      <a href=\"#tab-pane1\"\r\n         class=\"nav-link\"\r\n         [ngClass]=\"{'active': activeTab == status.type}\"\r\n         (click)=\"onTabChange($event, status.type)\">{{status.title}}</a>\r\n    </li>\r\n  </ul>\r\n\r\n</bs-card-header>\r\n<!-- /card header -->\r\n\r\n<bs-card-body class=\"px-0 pt-4\">\r\n\r\n  <!-- Tab Content-->\r\n  <div class=\"tab-content\">\r\n\r\n    <!-- Tab panel -->\r\n    <div class=\"tab-pane active\">\r\n\r\n      <div class=\"dt-widget dt-widget-sm dt-widget-hover\">\r\n        <!-- Widget Item -->\r\n        <div class=\"dt-widget__item\" *ngFor=\"let ticket of filteredTickets.slice(0, 4)\">\r\n\r\n          <!-- Widget Image -->\r\n          <div class=\"dt-widget__img\">\r\n            <!-- Avatar -->\r\n            <gx-avatar [user]=\"ticket.user\" class=\"size-30\"></gx-avatar>\r\n            <!-- /avatar -->\r\n          </div>\r\n          <!-- /widget image -->\r\n\r\n          <!-- Widget Info -->\r\n          <div class=\"dt-widget__info text-truncate\">\r\n            <a href=\"javascript:void(0)\" class=\"dt-widget__title text-truncate\">{{ticket.message}}</a>\r\n          </div>\r\n          <!-- /widget info -->\r\n\r\n          <!-- Widget Extra -->\r\n          <div class=\"dt-widget__extra min-w-60 text-center align-self-center\">\r\n            <span class=\"badge badge-circle-animate\" [ngClass]=\"ticket.status.color\">{{ticket.status.text}}</span>\r\n          </div>\r\n          <!-- /widget extra -->\r\n\r\n          <!-- Dropdown -->\r\n          <div class=\"align-self-center ml-1 ml-sm-10\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"dropdown-toggle no-arrow\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n              <gx-icon name=\"vertical-more\" [fw]=\"true\" class=\"text-light-gray\"></gx-icon>\r\n\r\n            </a>\r\n\r\n            <div ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <!-- /dropdown -->\r\n\r\n        </div>\r\n        <!-- /widgets item -->\r\n\r\n        <!-- Widget Link -->\r\n        <div class=\"dt-widget-link\">\r\n          <a href=\"javascript:void(0)\" class=\"text-uppercase font-weight-500\">View all tickets</a>\r\n        </div>\r\n        <!-- /widget link -->\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <!-- /tab panel -->\r\n\r\n  </div>\r\n  <!-- /tab content-->\r\n\r\n</bs-card-body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-vendor-requests/section-vendor-requests.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-vendor-requests/section-vendor-requests.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Header -->\r\n<card-header class=\"mb-3\" card-title=\"Vendor Requests\">\r\n\r\n  <card-tool>\r\n    <!-- Dropdown -->\r\n    <div class=\"d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n      <a class=\"d-inline-block f-12 py-1 px-2 py-1 border rounded\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n        Today\r\n      </a>\r\n\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Yesterday</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Today</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Tomorrow</a>\r\n      </div>\r\n    </div>\r\n    <!-- /dropdown -->\r\n  </card-tool>\r\n\r\n</card-header>\r\n<!-- /card header -->\r\n\r\n<!-- Card Body -->\r\n<card-body perfectScrollbar class=\"p-0 max-h-400 position-relative\">\r\n\r\n  <!-- Widget -->\r\n  <div class=\"dt-widget dt-widget-hover-bg text-light-gray\">\r\n\r\n    <!-- Widget Item -->\r\n    <div class=\"dt-widget__item\" *ngFor=\"let request of vendorRequests\">\r\n\r\n      <!-- Widget Image -->\r\n      <div class=\"dt-widget__img\">\r\n        <img class=\"img-fluid max-w-105\" [src]=\"request.thumb\" alt=\"Logo\">\r\n      </div>\r\n      <!-- /widget image -->\r\n\r\n      <!-- Widget Info -->\r\n      <div class=\"dt-widget__info text-truncate\">\r\n        <div class=\"dt-widget__title text-truncate\">\r\n          <a href=\"#\">{{request.name}}</a>\r\n          <span class=\"badge badge-sm badge-pill d-none d-sm-inline-block ml-1\" [ngClass]=\"request.badgeColor\">{{request.badge}}</span>\r\n        </div>\r\n        <p class=\"dt-widget__subtitle text-truncate\">{{request.email}}</p>\r\n      </div>\r\n      <!-- /widget info -->\r\n\r\n      <!-- Widget Extra -->\r\n      <div class=\"dt-widget__extra\">\r\n        <!-- Show Content -->\r\n        <div class=\"show-content\">\r\n          <span class=\"d-block\">{{request.placed}}</span>\r\n        </div>\r\n        <!-- /show content -->\r\n        <!-- Hide Content -->\r\n        <div class=\"hide-content\">\r\n          <!-- Action Button Group -->\r\n          <div class=\"action-btn-group\">\r\n            <button class=\"btn btn-default text-success dt-fab-btn\">\r\n              <gx-icon name=\"task-manager\" size=\"1x\"></gx-icon>\r\n            </button>\r\n            <button class=\"btn btn-default text-danger dt-fab-btn\">\r\n              <gx-icon name=\"circle-remove-o\" size=\"1x\"></gx-icon>\r\n            </button>\r\n          </div>\r\n          <!-- /action button group -->\r\n        </div>\r\n        <!-- /hide content -->\r\n      </div>\r\n      <!-- /widget extra -->\r\n    </div>\r\n    <!-- /widgets item -->\r\n\r\n  </div>\r\n  <!-- /widget -->\r\n\r\n</card-body>\r\n<!-- /card body -->\r\n");

/***/ }),

/***/ "./src/app/content/sections/section-campaigns-results/section-campaigns-results.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/sections/section-campaigns-results/section-campaigns-results.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvc2VjdGlvbnMvc2VjdGlvbi1jYW1wYWlnbnMtcmVzdWx0cy9zZWN0aW9uLWNhbXBhaWducy1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/sections/section-campaigns-results/section-campaigns-results.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/sections/section-campaigns-results/section-campaigns-results.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SectionCampaignsResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionCampaignsResultsComponent", function() { return SectionCampaignsResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionCampaignsResultsComponent = class SectionCampaignsResultsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionCampaignsResultsComponent.prototype, "campaigns", void 0);
SectionCampaignsResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-campaigns-results',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-campaigns-results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-campaigns-results/section-campaigns-results.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-campaigns-results.component.scss */ "./src/app/content/sections/section-campaigns-results/section-campaigns-results.component.scss")).default]
    })
], SectionCampaignsResultsComponent);



/***/ }),

/***/ "./src/app/content/sections/section-leads/section-leads.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/content/sections/section-leads/section-leads.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvc2VjdGlvbnMvc2VjdGlvbi1sZWFkcy9zZWN0aW9uLWxlYWRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/sections/section-leads/section-leads.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/content/sections/section-leads/section-leads.component.ts ***!
  \***************************************************************************/
/*! exports provided: SectionLeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionLeadsComponent", function() { return SectionLeadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionLeadsComponent = class SectionLeadsComponent {
    constructor() {
        this.activeView = 'smart-phone';
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
    ngOnInit() {
        this.leadNumbers = this.data.mobile;
        this.barChartOptions = this.monthlyLead.chart.options;
        this.barChartOptions.tooltips = {
            callbacks: {
                title: ((tooltipItem) => {
                    const tindex = tooltipItem[0].index;
                    return this.months[tindex];
                })
            }
        };
    }
    onToggleView() {
        if (this.activeView === 'smart-phone') {
            this.activeView = 'desktop';
            this.leadNumbers = this.data.desktop;
        }
        else {
            this.activeView = 'smart-phone';
            this.leadNumbers = this.data.mobile;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionLeadsComponent.prototype, "cardTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionLeadsComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionLeadsComponent.prototype, "countries", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionLeadsComponent.prototype, "monthlyLead", void 0);
SectionLeadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-leads',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-leads.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-leads/section-leads.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-leads.component.scss */ "./src/app/content/sections/section-leads/section-leads.component.scss")).default]
    })
], SectionLeadsComponent);



/***/ }),

/***/ "./src/app/content/sections/section-our-team/section-our-team.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/content/sections/section-our-team/section-our-team.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvc2VjdGlvbnMvc2VjdGlvbi1vdXItdGVhbS9zZWN0aW9uLW91ci10ZWFtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/sections/section-our-team/section-our-team.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/sections/section-our-team/section-our-team.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SectionOurTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionOurTeamComponent", function() { return SectionOurTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionOurTeamComponent = class SectionOurTeamComponent {
    constructor() {
        this.activeCategory = 'marketing';
    }
    set members(members) {
        this._members = members;
        this.teamMembers = this._members.filter((member) => member.categories.includes(this.activeCategory));
    }
    ngOnInit() {
    }
    getFilteredTeam(category, event) {
        event.preventDefault();
        this.activeCategory = category;
        this.teamMembers = this._members.filter((member) => member.categories.includes(category));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionOurTeamComponent.prototype, "teamCategories", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionOurTeamComponent.prototype, "members", null);
SectionOurTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-our-team',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-our-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-our-team/section-our-team.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-our-team.component.scss */ "./src/app/content/sections/section-our-team/section-our-team.component.scss")).default]
    })
], SectionOurTeamComponent);



/***/ }),

/***/ "./src/app/content/sections/section-pricing-plans/section-pricing-plans.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/sections/section-pricing-plans/section-pricing-plans.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvc2VjdGlvbnMvc2VjdGlvbi1wcmljaW5nLXBsYW5zL3NlY3Rpb24tcHJpY2luZy1wbGFucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/sections/section-pricing-plans/section-pricing-plans.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/sections/section-pricing-plans/section-pricing-plans.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SectionPricingPlansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPricingPlansComponent", function() { return SectionPricingPlansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionPricingPlansComponent = class SectionPricingPlansComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionPricingPlansComponent.prototype, "pricingPlans", void 0);
SectionPricingPlansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-pricing-plans',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-pricing-plans.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-pricing-plans/section-pricing-plans.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-pricing-plans.component.scss */ "./src/app/content/sections/section-pricing-plans/section-pricing-plans.component.scss")).default]
    })
], SectionPricingPlansComponent);



/***/ }),

/***/ "./src/app/content/sections/section-pricing-updates/section-pricing-updates.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/sections/section-pricing-updates/section-pricing-updates.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvc2VjdGlvbnMvc2VjdGlvbi1wcmljaW5nLXVwZGF0ZXMvc2VjdGlvbi1wcmljaW5nLXVwZGF0ZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/sections/section-pricing-updates/section-pricing-updates.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/content/sections/section-pricing-updates/section-pricing-updates.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SectionPricingUpdatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPricingUpdatesComponent", function() { return SectionPricingUpdatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionPricingUpdatesComponent = class SectionPricingUpdatesComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionPricingUpdatesComponent.prototype, "data", void 0);
SectionPricingUpdatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-pricing-updates',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-pricing-updates.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-pricing-updates/section-pricing-updates.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-pricing-updates.component.scss */ "./src/app/content/sections/section-pricing-updates/section-pricing-updates.component.scss")).default]
    })
], SectionPricingUpdatesComponent);



/***/ }),

/***/ "./src/app/content/sections/section-projects/section-projects.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/content/sections/section-projects/section-projects.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvc2VjdGlvbnMvc2VjdGlvbi1wcm9qZWN0cy9zZWN0aW9uLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/sections/section-projects/section-projects.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/sections/section-projects/section-projects.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SectionProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionProjectsComponent", function() { return SectionProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionProjectsComponent = class SectionProjectsComponent {
    constructor() {
        this.isScrollable = false;
    }
    set scrollable(scrollable) {
        if (scrollable !== false) {
            this.isScrollable = true;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionProjectsComponent.prototype, "projects", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionProjectsComponent.prototype, "scrollable", null);
SectionProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-projects/section-projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-projects.component.scss */ "./src/app/content/sections/section-projects/section-projects.component.scss")).default]
    })
], SectionProjectsComponent);



/***/ }),

/***/ "./src/app/content/sections/section-revenue-chart/section-revenue-chart.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/sections/section-revenue-chart/section-revenue-chart.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvc2VjdGlvbnMvc2VjdGlvbi1yZXZlbnVlLWNoYXJ0L3NlY3Rpb24tcmV2ZW51ZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/sections/section-revenue-chart/section-revenue-chart.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/sections/section-revenue-chart/section-revenue-chart.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SectionRevenueChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionRevenueChartComponent", function() { return SectionRevenueChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionRevenueChartComponent = class SectionRevenueChartComponent {
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
SectionRevenueChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-revenue-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-revenue-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-revenue-chart/section-revenue-chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-revenue-chart.component.scss */ "./src/app/content/sections/section-revenue-chart/section-revenue-chart.component.scss")).default]
    })
], SectionRevenueChartComponent);



/***/ }),

/***/ "./src/app/content/sections/section-social-media-advertising/section-social-media-advertising.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/content/sections/section-social-media-advertising/section-social-media-advertising.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvc2VjdGlvbnMvc2VjdGlvbi1zb2NpYWwtbWVkaWEtYWR2ZXJ0aXNpbmcvc2VjdGlvbi1zb2NpYWwtbWVkaWEtYWR2ZXJ0aXNpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/sections/section-social-media-advertising/section-social-media-advertising.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/content/sections/section-social-media-advertising/section-social-media-advertising.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SectionSocialMediaAdvertisingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionSocialMediaAdvertisingComponent", function() { return SectionSocialMediaAdvertisingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionSocialMediaAdvertisingComponent = class SectionSocialMediaAdvertisingComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionSocialMediaAdvertisingComponent.prototype, "socialMedia", void 0);
SectionSocialMediaAdvertisingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-social-media-advertising',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-social-media-advertising.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-social-media-advertising/section-social-media-advertising.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-social-media-advertising.component.scss */ "./src/app/content/sections/section-social-media-advertising/section-social-media-advertising.component.scss")).default]
    })
], SectionSocialMediaAdvertisingComponent);



/***/ }),

/***/ "./src/app/content/sections/section-static-chart/section-static-chart.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/sections/section-static-chart/section-static-chart.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvc2VjdGlvbnMvc2VjdGlvbi1zdGF0aWMtY2hhcnQvc2VjdGlvbi1zdGF0aWMtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/sections/section-static-chart/section-static-chart.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/sections/section-static-chart/section-static-chart.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SectionStaticChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionStaticChartComponent", function() { return SectionStaticChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const color = window.Chart.helpers.color;
let SectionStaticChartComponent = class SectionStaticChartComponent {
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
SectionStaticChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-static-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-static-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-static-chart/section-static-chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-static-chart.component.scss */ "./src/app/content/sections/section-static-chart/section-static-chart.component.scss")).default]
    })
], SectionStaticChartComponent);



/***/ }),

/***/ "./src/app/content/sections/section-support-tickets/section-support-tickets.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/sections/section-support-tickets/section-support-tickets.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvc2VjdGlvbnMvc2VjdGlvbi1zdXBwb3J0LXRpY2tldHMvc2VjdGlvbi1zdXBwb3J0LXRpY2tldHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/sections/section-support-tickets/section-support-tickets.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/content/sections/section-support-tickets/section-support-tickets.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SectionSupportTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionSupportTicketsComponent", function() { return SectionSupportTicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionSupportTicketsComponent = class SectionSupportTicketsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionSupportTicketsComponent.prototype, "supportTickets", void 0);
SectionSupportTicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-support-tickets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-support-tickets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-support-tickets/section-support-tickets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-support-tickets.component.scss */ "./src/app/content/sections/section-support-tickets/section-support-tickets.component.scss")).default]
    })
], SectionSupportTicketsComponent);



/***/ }),

/***/ "./src/app/content/sections/section-tickets/section-tickets.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/content/sections/section-tickets/section-tickets.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvc2VjdGlvbnMvc2VjdGlvbi10aWNrZXRzL3NlY3Rpb24tdGlja2V0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/sections/section-tickets/section-tickets.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/content/sections/section-tickets/section-tickets.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SectionTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTicketsComponent", function() { return SectionTicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionTicketsComponent = class SectionTicketsComponent {
    constructor() {
        this.activeTab = '';
    }
    set tickets(tickets) {
        this._tickets = tickets;
        this.filteredTickets = this._tickets;
    }
    ngOnInit() {
    }
    onTabChange(event, tab) {
        event.preventDefault();
        this.activeTab = tab;
        if (this.activeTab === '') {
            this.filteredTickets = this._tickets;
        }
        else {
            this.filteredTickets = this._tickets.filter((ticket) => {
                return ticket.type === this.activeTab;
            });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionTicketsComponent.prototype, "ticketStatus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionTicketsComponent.prototype, "tickets", null);
SectionTicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-tickets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-tickets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-tickets/section-tickets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-tickets.component.scss */ "./src/app/content/sections/section-tickets/section-tickets.component.scss")).default]
    })
], SectionTicketsComponent);



/***/ }),

/***/ "./src/app/content/sections/section-vendor-requests/section-vendor-requests.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/sections/section-vendor-requests/section-vendor-requests.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvc2VjdGlvbnMvc2VjdGlvbi12ZW5kb3ItcmVxdWVzdHMvc2VjdGlvbi12ZW5kb3ItcmVxdWVzdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/sections/section-vendor-requests/section-vendor-requests.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/content/sections/section-vendor-requests/section-vendor-requests.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SectionVendorRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionVendorRequestsComponent", function() { return SectionVendorRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionVendorRequestsComponent = class SectionVendorRequestsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionVendorRequestsComponent.prototype, "vendorRequests", void 0);
SectionVendorRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-vendor-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-vendor-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/sections/section-vendor-requests/section-vendor-requests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-vendor-requests.component.scss */ "./src/app/content/sections/section-vendor-requests/section-vendor-requests.component.scss")).default]
    })
], SectionVendorRequestsComponent);



/***/ }),

/***/ "./src/app/content/sections/sections.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/content/sections/sections.module.ts ***!
  \*****************************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _section_tickets_section_tickets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section-tickets/section-tickets.component */ "./src/app/content/sections/section-tickets/section-tickets.component.ts");
/* harmony import */ var _section_pricing_plans_section_pricing_plans_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-pricing-plans/section-pricing-plans.component */ "./src/app/content/sections/section-pricing-plans/section-pricing-plans.component.ts");
/* harmony import */ var _section_our_team_section_our_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section-our-team/section-our-team.component */ "./src/app/content/sections/section-our-team/section-our-team.component.ts");
/* harmony import */ var _section_leads_section_leads_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section-leads/section-leads.component */ "./src/app/content/sections/section-leads/section-leads.component.ts");
/* harmony import */ var _section_support_tickets_section_support_tickets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section-support-tickets/section-support-tickets.component */ "./src/app/content/sections/section-support-tickets/section-support-tickets.component.ts");
/* harmony import */ var _section_vendor_requests_section_vendor_requests_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./section-vendor-requests/section-vendor-requests.component */ "./src/app/content/sections/section-vendor-requests/section-vendor-requests.component.ts");
/* harmony import */ var _section_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./section-projects/section-projects.component */ "./src/app/content/sections/section-projects/section-projects.component.ts");
/* harmony import */ var _section_campaigns_results_section_campaigns_results_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./section-campaigns-results/section-campaigns-results.component */ "./src/app/content/sections/section-campaigns-results/section-campaigns-results.component.ts");
/* harmony import */ var _section_social_media_advertising_section_social_media_advertising_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./section-social-media-advertising/section-social-media-advertising.component */ "./src/app/content/sections/section-social-media-advertising/section-social-media-advertising.component.ts");
/* harmony import */ var _section_pricing_updates_section_pricing_updates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./section-pricing-updates/section-pricing-updates.component */ "./src/app/content/sections/section-pricing-updates/section-pricing-updates.component.ts");
/* harmony import */ var _section_static_chart_section_static_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./section-static-chart/section-static-chart.component */ "./src/app/content/sections/section-static-chart/section-static-chart.component.ts");
/* harmony import */ var _section_revenue_chart_section_revenue_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./section-revenue-chart/section-revenue-chart.component */ "./src/app/content/sections/section-revenue-chart/section-revenue-chart.component.ts");

















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
let SectionsModule = class SectionsModule {
};
SectionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]
        ],
        declarations: [
            _section_tickets_section_tickets_component__WEBPACK_IMPORTED_MODULE_5__["SectionTicketsComponent"],
            _section_pricing_plans_section_pricing_plans_component__WEBPACK_IMPORTED_MODULE_6__["SectionPricingPlansComponent"],
            _section_our_team_section_our_team_component__WEBPACK_IMPORTED_MODULE_7__["SectionOurTeamComponent"],
            _section_leads_section_leads_component__WEBPACK_IMPORTED_MODULE_8__["SectionLeadsComponent"],
            _section_support_tickets_section_support_tickets_component__WEBPACK_IMPORTED_MODULE_9__["SectionSupportTicketsComponent"],
            _section_vendor_requests_section_vendor_requests_component__WEBPACK_IMPORTED_MODULE_10__["SectionVendorRequestsComponent"],
            _section_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_11__["SectionProjectsComponent"],
            _section_campaigns_results_section_campaigns_results_component__WEBPACK_IMPORTED_MODULE_12__["SectionCampaignsResultsComponent"],
            _section_social_media_advertising_section_social_media_advertising_component__WEBPACK_IMPORTED_MODULE_13__["SectionSocialMediaAdvertisingComponent"],
            _section_pricing_updates_section_pricing_updates_component__WEBPACK_IMPORTED_MODULE_14__["SectionPricingUpdatesComponent"],
            _section_static_chart_section_static_chart_component__WEBPACK_IMPORTED_MODULE_15__["SectionStaticChartComponent"],
            _section_revenue_chart_section_revenue_chart_component__WEBPACK_IMPORTED_MODULE_16__["SectionRevenueChartComponent"]
        ],
        exports: [
            _section_tickets_section_tickets_component__WEBPACK_IMPORTED_MODULE_5__["SectionTicketsComponent"],
            _section_pricing_plans_section_pricing_plans_component__WEBPACK_IMPORTED_MODULE_6__["SectionPricingPlansComponent"],
            _section_our_team_section_our_team_component__WEBPACK_IMPORTED_MODULE_7__["SectionOurTeamComponent"],
            _section_leads_section_leads_component__WEBPACK_IMPORTED_MODULE_8__["SectionLeadsComponent"],
            _section_support_tickets_section_support_tickets_component__WEBPACK_IMPORTED_MODULE_9__["SectionSupportTicketsComponent"],
            _section_vendor_requests_section_vendor_requests_component__WEBPACK_IMPORTED_MODULE_10__["SectionVendorRequestsComponent"],
            _section_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_11__["SectionProjectsComponent"],
            _section_campaigns_results_section_campaigns_results_component__WEBPACK_IMPORTED_MODULE_12__["SectionCampaignsResultsComponent"],
            _section_social_media_advertising_section_social_media_advertising_component__WEBPACK_IMPORTED_MODULE_13__["SectionSocialMediaAdvertisingComponent"],
            _section_pricing_updates_section_pricing_updates_component__WEBPACK_IMPORTED_MODULE_14__["SectionPricingUpdatesComponent"],
            _section_static_chart_section_static_chart_component__WEBPACK_IMPORTED_MODULE_15__["SectionStaticChartComponent"],
            _section_revenue_chart_section_revenue_chart_component__WEBPACK_IMPORTED_MODULE_16__["SectionRevenueChartComponent"]
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ]
    })
], SectionsModule);



/***/ })

}]);
//# sourceMappingURL=default~app-content-main-main-module~dashboards-dashboards-module~widgets-widgets-module-es2015.js.map