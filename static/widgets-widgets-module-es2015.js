(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-widgets-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/classic-widgets/classic-widgets.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/classic-widgets/classic-widgets.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Widgets</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6\" *ngFor=\"let row of widgets.analyticsCards\">\r\n\r\n    <!-- Card -->\r\n    <gx-analytic-card\r\n      gxCard\r\n      [title]=\"row.title\"\r\n      [description]=\"row.description\"\r\n      [icon]=\"row.icon\"\r\n      [number]=\"row.number\"\r\n      [percent]=\"row.percent\"\r\n      [positiveGrowth]=\"row.positiveGrowth\"></gx-analytic-card>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-3 col-6\">\r\n\r\n    <gx-status-card [badge]=\"widgets.revenue.badge\"\r\n                    [icon]=\"widgets.revenue.icon\"\r\n                    [items]=\"widgets.revenue.items\"></gx-status-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-3 col-6\">\r\n\r\n    <gx-status-card [badge]=\"widgets.order.badge\"\r\n                    [icon]=\"widgets.order.icon\"\r\n                    [items]=\"widgets.order.items\"></gx-status-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-6 col-12\">\r\n\r\n    <gx-status-card [badge]=\"widgets.invoices.badge\"\r\n                    [icon]=\"widgets.invoices.icon\"\r\n                    [items]=\"widgets.invoices.items\"></gx-status-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 col-lg-7 order-xl-1\">\r\n\r\n    <gx-operator-card gxCard fullHeight\r\n                      cardTitle=\"Staff of the week\"\r\n                      [operator]=\"widgets.operator\"></gx-operator-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-lg-5 order-xl-3\">\r\n\r\n    <app-section-pricing-plans gxCard [pricingPlans]=\"widgets.pricingPlans\" class=\"pb-4\"></app-section-pricing-plans>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 order-xl-2\">\r\n\r\n    <app-section-tickets bsCard [ticketStatus]=\"widgets.ticketStatus\" [tickets]=\"widgets.tickets\"></app-section-tickets>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-7 order-xl-4\">\r\n\r\n    <app-section-our-team gxCard\r\n                          class=\"dt-contact-card\"\r\n                          [teamCategories]=\"widgets.teamCategories\"\r\n                          [members]=\"widgets.teamMembers\"></app-section-our-team>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-12 order-xl-5\">\r\n\r\n    <app-section-leads gxCard\r\n                       [cardTitle]=\"widgets.leads.title\"\r\n                       [data]=\"widgets.leads.data\"\r\n                       [countries]=\"widgets.leads.countries\"\r\n                       [monthlyLead]=\"widgets.leads.monthlyLead\"></app-section-leads>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 col-md-6 order-xl-1\">\r\n\r\n    <app-section-support-tickets gxCard fullHeight\r\n                                 class=\"pb-4\"\r\n                                 [supportTickets]=\"widgets.supportTickets\"></app-section-support-tickets>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-5 col-md-6 order-xl-4\">\r\n\r\n    <gx-value-calculator gxCard class=\"bg-info text-white\"></gx-value-calculator>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 order-xl-2\">\r\n\r\n    <app-section-vendor-requests gxCard fullHeight\r\n                                 class=\"pb-4\"\r\n                                 [vendorRequests]=\"widgets.vendorRequests\"></app-section-vendor-requests>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-7 order-xl-3\">\r\n\r\n    <app-section-projects gxCard scrollable [projects]=\"widgets.projects\"></app-section-projects>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-6 order-xl-5\" *ngFor=\"let reportCard of widgets.reportCards\">\r\n\r\n    <gx-report-card gxCard fullHeight\r\n                    [title]=\"reportCard.title\"\r\n                    [data]=\"reportCard.cardData\"\r\n                    [chart]=\"reportCard.chart\"></gx-report-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6 col-12\" *ngFor=\"let socialCard of widgets.socialCards\">\r\n\r\n    <gx-social-card [title]=\"socialCard.title\"\r\n                    [color]=\"socialCard.color\"\r\n                    [logoIcon]=\"socialCard.logoIcon\"\r\n                    [likes]=\"socialCard.likes\"\r\n                    [friends]=\"socialCard.friends\"\r\n                    [followers]=\"socialCard.followers\"></gx-social-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 order-xl-1\">\r\n\r\n    <gx-tasks-report gxCard [tasks]=\"widgets.tasksReport\"></gx-tasks-report>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 col-md-7 order-xl-2\">\r\n\r\n    <!-- Card -->\r\n    <gx-referral-traffic gxCard fullHeight\r\n                         [chart]=\"widgets.referralTrafficChart\"\r\n                         [progressRecords]=\"widgets.progressRecords\"></gx-referral-traffic>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-5 order-xl-5\">\r\n\r\n    <!-- Card -->\r\n    <gx-ratings gxCard [reviews]=\"widgets.reviews\"></gx-ratings>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-6 order-xl-3\">\r\n\r\n    <gx-top-vendors gxCard\r\n                    [vendors]=\"widgets.vendors\"\r\n                    class=\"pb-5\"></gx-top-vendors>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-6 order-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-properties gxCard class=\"pb-4\" card-title=\"Trending Properties\"\r\n                   [properties]=\"widgets.properties\"></gx-properties>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 order-xl-6\">\r\n\r\n    <gx-invoices gxCard [invoices]=\"widgets.invoicesList\"></gx-invoices>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 order-xl-7\">\r\n\r\n    <gx-my-tasks [tasks]=\"tasks\"></gx-my-tasks>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/modern-widgets/modern-widgets.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/modern-widgets/modern-widgets.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Widgets</h1>\r\n</div>\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n  <!-- Grid Item DONE -->\r\n  <div class=\"col-xl-3 col-sm-6\">\r\n    <gx-project-card gxCard class=\"overflow-hidden\" [project]=\"widgets.project\" cardTitle=\"Project Widget\">\r\n\r\n      <a class=\"text-light-gray\"\r\n         href=\"javascript:void(0)\"\r\n         ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n         triggers=\"mouseenter:mouseleave\" container=\"body\">\r\n        <gx-icon name=\"info\" size=\"lg\"></gx-icon>\r\n      </a>\r\n\r\n      <a class=\"text-light-gray mx-2\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"invert-color\" size=\"lg\"></gx-icon>\r\n      </a>\r\n\r\n      <!-- Dropdown -->\r\n      <div class=\"d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n        <a class=\"no-arrow text-light-gray\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n          <gx-icon name=\"chevrolet-down\" size=\"lg\"></gx-icon>\r\n        </a>\r\n\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else\r\n            here</a>\r\n        </div>\r\n      </div>\r\n      <!-- /dropdown -->\r\n\r\n    </gx-project-card>\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item DONE-->\r\n  <div class=\"col-xl-3 col-sm-6\">\r\n    <ng-template #actionTpl>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n        <gx-icon [fw]=\"true\" name=\"editors\"></gx-icon>\r\n        Edit\r\n      </a> <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n      <gx-icon [fw]=\"true\" name=\"contacts\"></gx-icon>\r\n      Contact List</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n        <gx-icon [fw]=\"true\" name=\"heart\"></gx-icon>\r\n        Favourite List </a>\r\n    </ng-template>\r\n\r\n    <gx-employee-card gxCard\r\n                      [actionItems]=\"actionTpl\"\r\n                      [employee]=\"widgets.employee\"\r\n                      bodyClasses=\"text-center\"\r\n                      class=\"dt-card-performance\"></gx-employee-card>\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item DONE-->\r\n  <div class=\"col-xl-3 col-sm-6\">\r\n\r\n    <widget-social-media gxCard\r\n                         class=\"bg-image-v5 bg-overlay bg-overlay-black overlay-opacity-0_5 text-white\"></widget-social-media>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6\">\r\n    <gx-media-card bsCard [data]=\"widgets.carousel_card\">\r\n      <!-- Slider Carouse -->\r\n      <slideshow [imageUrls]=\"widgets.carousel_card.imageUrls\"\r\n                 [lazyLoad]=\"true\"\r\n                 [minHeight]=\"'180px'\"\r\n                 [showArrows]=\"false\"\r\n                 [showDots]=\"true\"\r\n                 class=\"card-img-top overflow-hidden\"\r\n                 dotColor=\"#D1C4E9\">\r\n      </slideshow>\r\n      <!-- /Slider Carouse -->\r\n    </gx-media-card>\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-sm-6\">\r\n\r\n    <gx-newsletter-card gxCard\r\n                        fullHeight\r\n                        [newsletter]=\"widgets.newsletter\"\r\n                        bodyClasses=\"text-center\"></gx-newsletter-card>\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-sm-6\">\r\n\r\n    <app-widget-bgcolor gxCard\r\n                        fullHeight\r\n                        class=\"bg-image-v3 bg-overlay overlay-opacity-0_8 bg-gradient-blue--after text-white\"></app-widget-bgcolor>\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-sm-6\">\r\n\r\n    <app-widget-flying-bird gxCard\r\n                            fullHeight></app-widget-flying-bird>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-2 col-md-3 col-sm-6\" *ngFor=\"let card of widgets.info_cards\">\r\n\r\n    <gx-info-card gxCard class=\"text-center\"\r\n                  [style]=\"card.style\"\r\n                  [data]=\"card.data\"></gx-info-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-2 col-md-3 col-sm-4\">\r\n\r\n    <!-- Grid -->\r\n    <div class=\"row\">\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-sm-6 col-4\">\r\n        <gx-ibox class=\"text-primary\" label=\"Pictures\" icon=\"camera\" icon-class=\"mb-1\"></gx-ibox>\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-sm-6 col-4\">\r\n        <gx-ibox class=\"text-primary\" label=\"Places\" icon=\"pin\" icon-class=\"mb-1\"></gx-ibox>\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-sm-6 col-4 d-sm-none\">\r\n        <gx-ibox class=\"text-primary\" label=\"burger\" icon=\"burger\" icon-class=\"mb-1\"></gx-ibox>\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-12\">\r\n        <gx-media-card bsCard [data]=\"widgets.media_card\" bodyClasses=\"p-4\"></gx-media-card>\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n    </div>\r\n    <!-- /grid -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-2 col-md-3 col-sm-4\">\r\n\r\n    <!-- Grid -->\r\n    <div class=\"row\">\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-6 col-sm-12\">\r\n\r\n        <bs-card fullHeight class=\"bg-gradient-orange text-white\" body-class=\"p-6\">\r\n          <p class=\"display-3 mb-1\">523</p>\r\n          <p class=\"f-12\">+18 New this week</p>\r\n          <a class=\"text-light f-12 font-weight-500 text- uppercase\" href=\"javascript:void(0)\">Photos</a>\r\n        </bs-card>\r\n\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-6 col-sm-12\">\r\n\r\n        <bs-card fullHeight class=\"bg-gradient-blue text-white\" body-class=\"p-6\">\r\n          <div class=\"d-flex flex-wrap mb-3\">\r\n            <gx-icon name=\"open-mail\" size=\"2x\" class=\"mr-1\"></gx-icon>\r\n            <a class=\"text-white ml-auto\" href=\"javascript:void(0)\">\r\n              <gx-icon name=\"arrow-right\" size=\"2x\"></gx-icon>\r\n            </a>\r\n          </div>\r\n          <p class=\"display-3 mb-2 font-weight-500\">271</p>\r\n          <p class=\"card-text\">New messages</p>\r\n        </bs-card>\r\n\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n    </div>\r\n    <!-- /grid -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-2 col-md-3 col-sm-4\">\r\n\r\n    <!-- Grid -->\r\n    <div class=\"row\">\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-12\">\r\n\r\n        <app-widget-work-status [data]=\"widgets.work_status\" gxCard class=\"dt-chart\"></app-widget-work-status>\r\n\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-6 d-none d-sm-block\">\r\n        <gx-ibox class=\"bg-primary text-white\" label=\"$299.32\" icon=\"bitcoin\" icon-class=\"mb-1\"></gx-ibox>\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n      <!-- Grid Item -->\r\n      <div class=\"col-6 d-none d-sm-block\">\r\n        <gx-ibox class=\"bg-secondary text-white\" label=\"1.2k sold\" icon=\"jumbo\" icon-class=\"mb-1\"></gx-ibox>\r\n      </div>\r\n      <!-- /grid item -->\r\n\r\n    </div>\r\n    <!-- /grid -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6 order-xl-1\">\r\n\r\n    <gx-intro-card bsCard [data]=\"widgets.introCard.data\"\r\n                   [titlePos]=\"widgets.introCard.titlePos\"></gx-intro-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6 order-xl-4\">\r\n\r\n    <gx-flex-card bsCard [data]=\"widgets.flexCard.data\"\r\n                  [titlePos]=\"widgets.flexCard.titlePos\"></gx-flex-card>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6 order-xl-2\">\r\n\r\n    <widget-increment-users bsCard [widget]=\"widgets.active_users\"></widget-increment-users>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-3 col-sm-6 order-xl-3\">\r\n\r\n    <widget-campaign-stats bsCard [data]=\"widgets.campaign\"></widget-campaign-stats>\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n    <gx-media-card bsCard [data]=\"widgets.carousel_card_horizontal\">\r\n      <!-- Slider Carouse -->\r\n      <slideshow [imageUrls]=\"widgets.carousel_card_horizontal.imageUrls\"\r\n                 [lazyLoad]=\"true\"\r\n                 [minHeight]=\"'180px'\"\r\n                 [showArrows]=\"false\"\r\n                 [showDots]=\"true\"\r\n                 class=\"card-img-top overflow-hidden\"\r\n                 dotColor=\"#D1C4E9\">\r\n      </slideshow>\r\n      <!-- /Slider Carouse -->\r\n    </gx-media-card>\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item DONE-->\r\n  <div class=\"col-xl-6\">\r\n    <gx-trip-card bsCard class=\"bg-image-v4 bg-overlay bg-overlay-black overlay-opacity-0_2 text-white\"\r\n                  [data]=\"widgets.outdoor\"></gx-trip-card>\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/social-media/social-media.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/social-media/social-media.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-overlay__inner\">\r\n    <card-header class=\"mb-6\">\r\n        <!-- Card Heading -->\r\n        <card-heading>\r\n            <h3 class=\"dt-card__title text-white\">Social Media</h3>\r\n        </card-heading>\r\n        <!-- /card heading -->\r\n    </card-header>\r\n\r\n    <card-body>\r\n        <!-- Project Title -->\r\n        <div class=\"mb-4 display-6 text-uppercase\">Digital Media Marketing Online Webinar</div>\r\n        <!-- /project title -->\r\n\r\n        <!-- Meta Date -->\r\n        <div class=\"meta-date text-light-gray f-12 mb-4\">27th Aug, 09:30 PM EST</div>\r\n        <!-- Meta Date -->\r\n\r\n        <p class=\"mb-6\">Learn from experts. This webinar explains right...</p>\r\n\r\n        <!-- Link -->\r\n        <p class=\"mb-5\">\r\n            <a href=\"javascript:void(0)\" class=\"f-16 d-inline-block text-white\">Are you ready to join?</a>\r\n        </p>\r\n        <!-- /link -->\r\n\r\n        <!-- Button Group -->\r\n        <div class=\"btn-group btn-group-toggle btn-group-sm\" ngbRadioGroup [(ngModel)]=\"option\">\r\n            <label class=\"btn btn-default\" ngbButtonLabel><input type=\"radio\" value=\"yes\" ngbButton>Yes</label>\r\n            <label class=\"btn btn-default\" ngbButtonLabel><input type=\"radio\" value=\"maybe\" ngbButton>Maybe</label>\r\n            <label class=\"btn btn-default\" ngbButtonLabel><input type=\"radio\" value=\"no\" ngbButton>No</label>\r\n        </div>\r\n        <!-- /button group -->\r\n\r\n    </card-body>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-bgcolor/widget-bgcolor.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-bgcolor/widget-bgcolor.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-overlay__inner\">\r\n  <card-header>\r\n    <!-- Card Heading -->\r\n    <card-heading>\r\n      <h3 class=\"dt-card__title text-white\">Platinum</h3>\r\n    </card-heading>\r\n    <!-- /card heading -->\r\n\r\n    <!-- Card Tools -->\r\n    <card-tool>\r\n      <span class=\"dt-card__more font-weight-500\">$20/month</span>\r\n    </card-tool>\r\n    <!-- /card tools -->\r\n  </card-header>\r\n\r\n  <card-body>\r\n    <div class=\"media mb-5\">\r\n      <!-- Icon -->\r\n      <gx-icon name=\"list-group\" size=\"7x\" class=\"mr-7\"></gx-icon>\r\n      <!-- /icon -->\r\n\r\n      <!-- Media Body -->\r\n      <div class=\"media-body\">\r\n        <div class=\"d-block display-2 font-weight-600 mb-1\">\r\n          40\r\n          <sup>\r\n            <small class=\"font-weight-600\">Gb</small>\r\n          </sup>\r\n        </div>\r\n        <p class=\"card-text font-weight-500\">24X7 online dedicated server</p>\r\n      </div>\r\n      <!-- /media body -->\r\n    </div>\r\n\r\n    <p class=\"card-text\">Now kickstart with your next design. Subscribe today and save $20/month</p>\r\n\r\n    <!-- Button -->\r\n    <a href=\"javascript:void(0)\" class=\"btn btn-warning text-white\">Subscribe</a>\r\n    <!-- /button -->\r\n\r\n  </card-body>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-campaign-stats/widget-campaign-stats.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-campaign-stats/widget-campaign-stats.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<bs-card-body class=\"py-4 px-5\">\r\n  <div class=\"d-flex align-items-center justify-content-between mb-2\">\r\n    <div class=\"flex-1\">\r\n      <h4 class=\"mb-1\">{{data.title}}</h4>\r\n      <span class=\"f-12\">{{data.sub_title}}</span>\r\n    </div>\r\n    <a [routerLink]=\"data.route\">\r\n      <gx-icon name=\"arrow-right\" size=\"xl\"></gx-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <gx-status-bar fullWidth\r\n                 hideCounter\r\n                 [fillVal]=\"88\"\r\n                 [maxVal]=\"100\"\r\n                 barColor=\"bg-warning\"></gx-status-bar>\r\n\r\n</bs-card-body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-flying-bird/widget-flying-bird.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-flying-bird/widget-flying-bird.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Body -->\r\n<card-body>\r\n  <!-- Media -->\r\n  <bs-media-object class=\"mb-7\"\r\n                   [img]=\"mediaImg\"\r\n                   body-class=\"align-self-center\">\r\n\r\n    <div class=\"h2 mb-1\">Flying bird</div>\r\n    <span class=\"d-block text-light-gray\">Bob Bush</span>\r\n  </bs-media-object>\r\n  <!-- /media -->\r\n\r\n  <!-- Card text -->\r\n  <p class=\"card-text mb-10\">\r\n    Some description about the card. This widget\r\n    could be used to describe a project, a product,\r\n    user’s profile or may be more.\r\n  </p>\r\n  <!-- /card text -->\r\n\r\n  <!-- Button -->\r\n  <a href=\"javascript:void(0)\" class=\"btn btn-primary\">Go to detail</a>\r\n  <!-- /button -->\r\n</card-body>\r\n<!-- /card body -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-increment-users/widget-increment-users.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-increment-users/widget-increment-users.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card Body -->\r\n<bs-card-body class=\"py-4 px-5\">\r\n  <!-- Grid -->\r\n  <div class=\"row no-gutters align-items-center\">\r\n    <!-- Grid Item -->\r\n    <div class=\"col-8 pr-2\">\r\n      <div class=\"d-flex align-items-center\">\r\n        <h4 class=\"mb-0 mr-1\" [ngClass]=\"widget.data.trending.color\">{{widget.data.trending.value}}</h4>\r\n        <gx-icon name=\"pointer-up\" class=\"mr-3\" [ngClass]=\"widget.data.trending.color\"></gx-icon>\r\n      </div>\r\n      <p class=\"mb-0 f-12\">{{widget.data.tagline.text}}</p>\r\n    </div>\r\n    <!-- /grid item -->\r\n\r\n    <!-- Grid Item -->\r\n    <div class=\"col-4 text-right\">\r\n      <!-- Chart Body -->\r\n      <circle-progress class=\"size-55\"\r\n                       [percent]=\"52\"\r\n                       [radius]=\"70\"\r\n                       [innerStrokeWidth]=\"30\"\r\n                       [outerStrokeWidth]=\"30\"\r\n                       [outerStrokeColor]=\"'#52c41a'\"\r\n                       [innerStrokeColor]=\"'#e7e8ea'\"\r\n                       [animation]=\"true\"\r\n                       [animationDuration]=\"300\"\r\n                       [showTitle]=\"false\"\r\n                       [showSubtitle]=\"false\"\r\n                       [showUnits]=\"false\"\r\n                       space=\"-30\"></circle-progress>\r\n      <!-- /chart body -->\r\n    </div>\r\n    <!-- /grid item -->\r\n  </div>\r\n  <!-- /grid -->\r\n</bs-card-body>\r\n<!-- /card body -->\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-work-status/widget-work-status.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-work-status/widget-work-status.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Chart Header -->\r\n<div class=\"dt-chart__header pt-4 px-5 mb-6\">\r\n  <div class=\"d-flex align-items-center mb-2\">\r\n    <div class=\"flex-1\">\r\n      <h5 class=\"font-weight-500 mb-1\">{{data.title}}</h5>\r\n      <p class=\"f-12 mb-0\">{{data.content}}</p>\r\n    </div>\r\n    <a href=\"#\" class=\"d-inline-block ml-1 mr-n2\">\r\n      <gx-icon name=\"arrow-right\" size=\"1x\"></gx-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"trending-section align-items-baseline\">\r\n    <span class=\"value display-3 font-weight-500 text-primary\">{{data.profit}}</span>\r\n    <gx-icon name=\"pointer-up\" size=\"lg\"></gx-icon>\r\n  </div>\r\n</div>\r\n<!-- /chart header -->\r\n\r\n<!-- Chart Body -->\r\n<div class=\"dt-chart__body\">\r\n  <!-- Chart -->\r\n  <gx-chartist-chart lineSmooth=\"1\"\r\n                     [type]=\"data.chart.type\"\r\n                     [data]=\"data.chart.data\"\r\n                     [options]=\"data.chart.options\"\r\n                     [events]=\"events\"></gx-chartist-chart>\r\n  <!-- /chart -->\r\n</div>\r\n<!-- /chart body -->\r\n");

/***/ }),

/***/ "./src/app/content/main/widgets/classic-widgets/classic-widgets.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/content/main/widgets/classic-widgets/classic-widgets.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi93aWRnZXRzL2NsYXNzaWMtd2lkZ2V0cy9jbGFzc2ljLXdpZGdldHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/main/widgets/classic-widgets/classic-widgets.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/main/widgets/classic-widgets/classic-widgets.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClassicWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassicWidgetsComponent", function() { return ClassicWidgetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _widgets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets.service */ "./src/app/content/main/widgets/widgets.service.ts");



let ClassicWidgetsComponent = class ClassicWidgetsComponent {
    constructor(widgetService) {
        this.widgetService = widgetService;
        this.widgets = this.widgetService.widgets;
        this.onTasksChanged = this.widgetService.onTasksChanged.subscribe((tasks) => {
            this.tasks = tasks;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.onTasksChanged.unsubscribe();
    }
};
ClassicWidgetsComponent.ctorParameters = () => [
    { type: _widgets_service__WEBPACK_IMPORTED_MODULE_2__["WidgetsService"] }
];
ClassicWidgetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widgets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./classic-widgets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/classic-widgets/classic-widgets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./classic-widgets.component.scss */ "./src/app/content/main/widgets/classic-widgets/classic-widgets.component.scss")).default]
    })
], ClassicWidgetsComponent);



/***/ }),

/***/ "./src/app/content/main/widgets/modern-widgets/modern-widgets.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/content/main/widgets/modern-widgets/modern-widgets.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi93aWRnZXRzL21vZGVybi13aWRnZXRzL21vZGVybi13aWRnZXRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/main/widgets/modern-widgets/modern-widgets.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/main/widgets/modern-widgets/modern-widgets.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ModernWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModernWidgetsComponent", function() { return ModernWidgetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _widgets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets.service */ "./src/app/content/main/widgets/widgets.service.ts");



let ModernWidgetsComponent = class ModernWidgetsComponent {
    constructor(widgetService) {
        this.widgetService = widgetService;
        this.widgets = this.widgetService.widgets;
    }
    ngOnInit() {
    }
};
ModernWidgetsComponent.ctorParameters = () => [
    { type: _widgets_service__WEBPACK_IMPORTED_MODULE_2__["WidgetsService"] }
];
ModernWidgetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modern',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modern-widgets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/modern-widgets/modern-widgets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modern-widgets.component.scss */ "./src/app/content/main/widgets/modern-widgets/modern-widgets.component.scss")).default]
    })
], ModernWidgetsComponent);



/***/ }),

/***/ "./src/app/content/main/widgets/social-media/social-media.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/main/widgets/social-media/social-media.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SocialMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaComponent", function() { return SocialMediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SocialMediaComponent = class SocialMediaComponent {
    constructor() {
        this.option = 'maybe';
    }
    ngOnInit() {
    }
};
SocialMediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'widget-social-media',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-media.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/social-media/social-media.component.html")).default
    })
], SocialMediaComponent);



/***/ }),

/***/ "./src/app/content/main/widgets/widget-bgcolor/widget-bgcolor.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/main/widgets/widget-bgcolor/widget-bgcolor.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetBgcolorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetBgcolorComponent", function() { return WidgetBgcolorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetBgcolorComponent = class WidgetBgcolorComponent {
    constructor() { }
    ngOnInit() {
    }
};
WidgetBgcolorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-bgcolor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-bgcolor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-bgcolor/widget-bgcolor.component.html")).default
    })
], WidgetBgcolorComponent);



/***/ }),

/***/ "./src/app/content/main/widgets/widget-campaign-stats/widget-campaign-stats.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/main/widgets/widget-campaign-stats/widget-campaign-stats.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi93aWRnZXRzL3dpZGdldC1jYW1wYWlnbi1zdGF0cy93aWRnZXQtY2FtcGFpZ24tc3RhdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/main/widgets/widget-campaign-stats/widget-campaign-stats.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/content/main/widgets/widget-campaign-stats/widget-campaign-stats.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: WidgetCampaignStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetCampaignStatsComponent", function() { return WidgetCampaignStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetCampaignStatsComponent = class WidgetCampaignStatsComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WidgetCampaignStatsComponent.prototype, "data", void 0);
WidgetCampaignStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'widget-campaign-stats',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-campaign-stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-campaign-stats/widget-campaign-stats.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-campaign-stats.component.scss */ "./src/app/content/main/widgets/widget-campaign-stats/widget-campaign-stats.component.scss")).default]
    })
], WidgetCampaignStatsComponent);



/***/ }),

/***/ "./src/app/content/main/widgets/widget-flying-bird/widget-flying-bird.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/main/widgets/widget-flying-bird/widget-flying-bird.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: WidgetFlyingBirdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetFlyingBirdComponent", function() { return WidgetFlyingBirdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetFlyingBirdComponent = class WidgetFlyingBirdComponent {
    constructor() {
        this.mediaImg = {
            url: 'assets/images/widget/icon-project-3.png',
            alt: 'Bob Bush',
            classlist: 'img-fluid mr-4'
        };
    }
    ngOnInit() {
    }
};
WidgetFlyingBirdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-flying-bird',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-flying-bird.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-flying-bird/widget-flying-bird.component.html")).default
    })
], WidgetFlyingBirdComponent);



/***/ }),

/***/ "./src/app/content/main/widgets/widget-increment-users/widget-increment-users.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/main/widgets/widget-increment-users/widget-increment-users.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi93aWRnZXRzL3dpZGdldC1pbmNyZW1lbnQtdXNlcnMvd2lkZ2V0LWluY3JlbWVudC11c2Vycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/main/widgets/widget-increment-users/widget-increment-users.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/main/widgets/widget-increment-users/widget-increment-users.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: WidgetIncrementUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetIncrementUsersComponent", function() { return WidgetIncrementUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetIncrementUsersComponent = class WidgetIncrementUsersComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WidgetIncrementUsersComponent.prototype, "widget", void 0);
WidgetIncrementUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'widget-increment-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-increment-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-increment-users/widget-increment-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-increment-users.component.scss */ "./src/app/content/main/widgets/widget-increment-users/widget-increment-users.component.scss")).default]
    })
], WidgetIncrementUsersComponent);



/***/ }),

/***/ "./src/app/content/main/widgets/widget-work-status/widget-work-status.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/main/widgets/widget-work-status/widget-work-status.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: WidgetWorkStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetWorkStatusComponent", function() { return WidgetWorkStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetWorkStatusComponent = class WidgetWorkStatusComponent {
    constructor() {
        this.events = {
            created(data) {
                const defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'ws-gradient',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0.3,
                    'stop-opacity': '0.8',
                    'stop-color': 'rgba(255, 255, 255, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-opacity': '1',
                    'stop-color': 'rgba(181, 164, 241, 1)'
                });
            },
            draw(data) {
                if (data.type === 'area') {
                    data.element._node.setAttribute('style', 'fill:url(' + window.location.href + '#ws-gradient);fill-opacity:0.8');
                }
                if (data.type === 'line') {
                    data.element._node.setAttribute('style', 'stroke:#512DA8;stroke-width:1px;');
                }
            }
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WidgetWorkStatusComponent.prototype, "data", void 0);
WidgetWorkStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-work-status',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-work-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/main/widgets/widget-work-status/widget-work-status.component.html")).default
    })
], WidgetWorkStatusComponent);



/***/ }),

/***/ "./src/app/content/main/widgets/widgets.module.ts":
/*!********************************************************!*\
  !*** ./src/app/content/main/widgets/widgets.module.ts ***!
  \********************************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_content_sections_sections_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/content/sections/sections.module */ "./src/app/content/sections/sections.module.ts");
/* harmony import */ var _widgets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets.service */ "./src/app/content/main/widgets/widgets.service.ts");
/* harmony import */ var _modern_widgets_modern_widgets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modern-widgets/modern-widgets.component */ "./src/app/content/main/widgets/modern-widgets/modern-widgets.component.ts");
/* harmony import */ var _classic_widgets_classic_widgets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classic-widgets/classic-widgets.component */ "./src/app/content/main/widgets/classic-widgets/classic-widgets.component.ts");
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./social-media/social-media.component */ "./src/app/content/main/widgets/social-media/social-media.component.ts");
/* harmony import */ var _widget_bgcolor_widget_bgcolor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widget-bgcolor/widget-bgcolor.component */ "./src/app/content/main/widgets/widget-bgcolor/widget-bgcolor.component.ts");
/* harmony import */ var _widget_flying_bird_widget_flying_bird_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widget-flying-bird/widget-flying-bird.component */ "./src/app/content/main/widgets/widget-flying-bird/widget-flying-bird.component.ts");
/* harmony import */ var _widget_work_status_widget_work_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widget-work-status/widget-work-status.component */ "./src/app/content/main/widgets/widget-work-status/widget-work-status.component.ts");
/* harmony import */ var _widget_increment_users_widget_increment_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widget-increment-users/widget-increment-users.component */ "./src/app/content/main/widgets/widget-increment-users/widget-increment-users.component.ts");
/* harmony import */ var _widget_campaign_stats_widget_campaign_stats_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widget-campaign-stats/widget-campaign-stats.component */ "./src/app/content/main/widgets/widget-campaign-stats/widget-campaign-stats.component.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");



















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
const dashboardsRoutes = [
    {
        path: '',
        component: _classic_widgets_classic_widgets_component__WEBPACK_IMPORTED_MODULE_11__["ClassicWidgetsComponent"],
        resolve: {
            data: _widgets_service__WEBPACK_IMPORTED_MODULE_9__["WidgetsService"]
        }
    },
    {
        path: 'classic',
        component: _classic_widgets_classic_widgets_component__WEBPACK_IMPORTED_MODULE_11__["ClassicWidgetsComponent"],
        resolve: {
            data: _widgets_service__WEBPACK_IMPORTED_MODULE_9__["WidgetsService"]
        }
    },
    {
        path: 'modern',
        component: _modern_widgets_modern_widgets_component__WEBPACK_IMPORTED_MODULE_10__["ModernWidgetsComponent"],
        resolve: {
            data: _widgets_service__WEBPACK_IMPORTED_MODULE_9__["WidgetsService"]
        }
    }
];
let WidgetsModule = class WidgetsModule {
};
WidgetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            // Specify ng-circle-progress as an import
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_18__["NgCircleProgressModule"].forRoot({
                // set defaults here
                radius: 100,
                outerStrokeWidth: 16,
                innerStrokeWidth: 8,
                outerStrokeColor: '#78C000',
                innerStrokeColor: '#C7E596',
                animationDuration: 300,
            }),
            _app_content_sections_sections_module__WEBPACK_IMPORTED_MODULE_8__["SectionsModule"],
            ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__["SlideshowModule"],
            _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_6__["AmChartsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(dashboardsRoutes),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"]
        ],
        declarations: [
            _classic_widgets_classic_widgets_component__WEBPACK_IMPORTED_MODULE_11__["ClassicWidgetsComponent"],
            _modern_widgets_modern_widgets_component__WEBPACK_IMPORTED_MODULE_10__["ModernWidgetsComponent"],
            _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_12__["SocialMediaComponent"],
            _widget_bgcolor_widget_bgcolor_component__WEBPACK_IMPORTED_MODULE_13__["WidgetBgcolorComponent"],
            _widget_flying_bird_widget_flying_bird_component__WEBPACK_IMPORTED_MODULE_14__["WidgetFlyingBirdComponent"],
            _widget_work_status_widget_work_status_component__WEBPACK_IMPORTED_MODULE_15__["WidgetWorkStatusComponent"],
            _widget_increment_users_widget_increment_users_component__WEBPACK_IMPORTED_MODULE_16__["WidgetIncrementUsersComponent"],
            _widget_campaign_stats_widget_campaign_stats_component__WEBPACK_IMPORTED_MODULE_17__["WidgetCampaignStatsComponent"]
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ]
    })
], WidgetsModule);



/***/ })

}]);
//# sourceMappingURL=widgets-widgets-module-es2015.js.map