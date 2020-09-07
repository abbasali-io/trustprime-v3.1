(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mail-mail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/drawer/drawer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/drawer/drawer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Module Drawer Inner -->\r\n<div class=\"dt-module__drawer-inner\">\r\n\r\n  <div class=\"dt-module__drawer-header\">\r\n    <a href=\"javascript:void(0)\" class=\"d-inline-block\" (click)=\"closeDrawer($event)\">\r\n      <gx-icon name=\"arrow-long-left\" size=\"2x\" class=\"mr-3\"></gx-icon>\r\n      <span class=\"align-middle\">Back</span>\r\n    </a>\r\n  </div>\r\n\r\n  <!-- Actionable Drawer -->\r\n  <div class=\"dt-actionable-drawer\">\r\n\r\n    <!-- Menu Bar -->\r\n    <div class=\"dt-action-bar\">\r\n\r\n      <!-- Action Menu -->\r\n      <ul class=\"dt-action-nav\">\r\n\r\n        <!-- Menu Item -->\r\n        <li class=\"dt-action-nav__item\" [ngClass]=\"{'active':activeMenu == 'notifications'}\">\r\n          <a href=\"javascript:void(0)\"\r\n             class=\"dt-action-nav__link\"\r\n             (click)=\"onSelectMenu($event, 'notifications')\">\r\n            <gx-icon name=\"notification2\" [fw]=\"true\"></gx-icon>\r\n          </a>\r\n        </li>\r\n        <!-- /menu item -->\r\n\r\n        <!-- Menu Item -->\r\n        <li class=\"dt-action-nav__item\" [ngClass]=\"{'active':activeMenu == 'search'}\">\r\n          <a href=\"javascript:void(0)\"\r\n             class=\"dt-action-nav__link\"\r\n             (click)=\"onSelectMenu($event, 'search')\">\r\n            <gx-icon name=\"search\" [fw]=\"true\"></gx-icon>\r\n          </a>\r\n        </li>\r\n        <!-- /menu item -->\r\n\r\n      </ul>\r\n      <!-- /action menu -->\r\n\r\n    </div>\r\n    <!-- /menu bar -->\r\n\r\n    <!-- Drawer Content Area -->\r\n    <div class=\"dt-action-content-wrapper\">\r\n\r\n      <gx-loader [ngClass]=\"{'active':showLoader}\"></gx-loader>\r\n      <div class=\"dt-action-content fade position-relative\" [ngClass]=\"{'show':!showLoader && activeMenu == 'search'}\" perfectScrollbar>\r\n        <todo-search></todo-search>\r\n      </div>\r\n      <div class=\"dt-action-content fade position-relative\" [ngClass]=\"{'show':!showLoader && activeMenu == 'notifications'}\" perfectScrollbar>\r\n        <todo-notifications></todo-notifications>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- /drawer content area -->\r\n\r\n  </div>\r\n  <!-- /actionable drawer -->\r\n\r\n</div>\r\n<!-- /module drawer inner -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/drawer/notifications/notifications.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/drawer/notifications/notifications.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex align-items-center mb-6\">\r\n  <h5 class=\"mb-0\">Notifications ({{notifications.length}})</h5>\r\n\r\n  <div class=\"ml-auto action-area\">\r\n    <a href=\"javascript:void(0)\">Mark All Read</a>\r\n\r\n    <!-- Dropdown -->\r\n    <span class=\"ml-2 d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n      <a class=\"no-arrow\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n        <gx-icon name=\"settings\" size=\"lg\" class=\"text-light-gray\"></gx-icon>\r\n      </a>\r\n\r\n      <span ngbDropdownMenu>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"editors\" [fw]=\"true\"></gx-icon>\r\n          Edit\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"contacts\" [fw]=\"true\"></gx-icon>\r\n          Contact List</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"heart\" [fw]=\"true\"></gx-icon>\r\n          Favourite List\r\n        </a>\r\n      </span>\r\n    </span>\r\n    <!-- /dropdown -->\r\n  </div>\r\n</div>\r\n\r\n<!-- Media -->\r\n<a href=\"javascript:void(0)\" class=\"media\" *ngFor=\"let notification of notifications\">\r\n\r\n  <!-- Avatar -->\r\n  <gx-avatar [user]=\"notification\" [charLength]=\"0\" class=\"mr-3\"></gx-avatar>\r\n  <!-- avatar -->\r\n\r\n  <!-- Media Body -->\r\n  <span class=\"media-body\">\r\n    <span class=\"message\" [innerHTML]=\"notification.message\"></span>\r\n    <span class=\"meta-date\">\r\n      <gx-icon *ngIf=\"notification.icon.name\"\r\n               [name]=\"notification.icon.name\"\r\n               [ngClass]=\"notification.icon.color\"\r\n               [fw]=\"true\" class=\"mr-1\"></gx-icon>\r\n      {{notification.time}}\r\n    </span>\r\n  </span>\r\n  <!-- /media body -->\r\n\r\n</a>\r\n<!-- /media -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/drawer/search/search.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/drawer/search/search.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Search Box -->\r\n<form class=\"search-box right-side-icon mw-100 mb-8\">\r\n  <input type=\"search\"\r\n         class=\"form-control form-control-lg\"\r\n         [formControl]=\"searchQuery\"\r\n         placeholder=\"Search in mails...\">\r\n  <button type=\"submit\" class=\"search-icon\"><gx-icon name=\"search\" size=\"lg\"></gx-icon></button>\r\n</form>\r\n<!-- /search box -->\r\n\r\n<h4>Recently Viewed</h4>\r\n\r\n<!-- Search Result-->\r\n<div class=\"search-result\" *ngFor=\"let message of messages | filter: searchText\">\r\n  <a href=\"javascript:void(0)\" class=\"dt-avatar-wrapper\">\r\n    <!-- Avatar -->\r\n    <gx-avatar [user]=\"message\" [charLength]=\"0\" class=\"font-italic\"></gx-avatar>\r\n    <!-- /avatar -->\r\n\r\n    <!-- Avatar Info -->\r\n    <span class=\"dt-avatar-info\">\r\n      <span class=\"dt-avatar-name\">{{message.name}}</span>\r\n      <span class=\"f-12\" [innerHTML]=\"message.message\"></span>\r\n    </span>\r\n    <!-- /avatar info -->\r\n  </a>\r\n</div>\r\n<!-- /search result-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/helper-widgets/badges/badges.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/helper-widgets/badges/badges.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"badge-group\">\r\n<span *ngFor=\"let lid of items\" class=\"badge\"\r\n      [ngClass]=\"labels | getById:lid:'color'\">{{labels | getById:lid:'title'}}</span>\r\n\r\n  <span *ngIf=\"!showAll && ids.length > 2\" #moreBadges class=\"badge badge-light\">...</span>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/helper-widgets/contact-hover-card/contact-hover-card.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/helper-widgets/contact-hover-card/contact-hover-card.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"contact && isVisible\">\r\n  <div class=\"p-4\">\r\n    <div class=\"dt-avatar-wrapper mb-3\">\r\n      <gx-avatar [user]=\"contact\" [charLength]=\"0\" class=\"size-50\"></gx-avatar>\r\n\r\n      <div class=\"dt-avatar-info\">\r\n        <span class=\"dt-avatar-name h4 mb-1\">{{contact.first_name + ' ' + contact.last_name}}</span>\r\n        <span class=\"dt-avatar-desc f-12\">{{contact.email}}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mb-1\">\r\n      <gx-icon name=\"maps\" [fw]=\"true\" class=\"mr-1\"></gx-icon>\r\n      <span class=\"f-12\">{{contact.location}}</span>\r\n    </div>\r\n\r\n    <div>\r\n      <gx-icon name=\"contacts\" [fw]=\"true\" class=\"mr-1\"></gx-icon>\r\n      <span class=\"f-12\">{{contact.connections}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"px-4 py-2 border-top d-flex justify-content-between\">\r\n    <a href=\"javascript:void(0)\" class=\"card-link\">Add to Contacts</a>\r\n    <div class=\"ml-2 ml-sm-10\">\r\n      <a class=\"mr-1\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"mail\" [fw]=\"true\" size=\"xl\"></gx-icon>\r\n      </a>\r\n      <a class=\"mr-1\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"tag-o\" [fw]=\"true\" size=\"xl\"></gx-icon>\r\n      </a>\r\n      <a href=\"javascript:void(0)\">\r\n        <gx-icon name=\"chat-app\" [fw]=\"true\" size=\"xl\"></gx-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/helper-widgets/contact/contact.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/helper-widgets/contact/contact.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<gx-avatar [user]=\"contact\" [charLength]=\"0\"></gx-avatar>\r\n<!-- Contact Info -->\r\n<div class=\"dt-contact__info\">\r\n  <h4 class=\"dt-contact__title\">{{contact.first_name + ' ' + contact.last_name}}</h4>\r\n  <p class=\"dt-contact__desc\">{{contact.bio}}</p>\r\n</div>\r\n<!-- /contact info -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/helper-widgets/search-bar/search-bar.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/helper-widgets/search-bar/search-bar.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <input type=\"search\"\r\n         class=\"form-control border-0 shadow-none bg-focus form-control-sm\"\r\n         [formControl]=\"searchQuery\"\r\n         placeholder=\"Search in mails...\">\r\n  <span class=\"search-icon\"><gx-icon name=\"search\" size=\"lg\"></gx-icon></span>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-compose/mail-compose.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-compose/mail-compose.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div perfectScrollbar>\r\n  <!-- Compose Mail Header -->\r\n  <div class=\"compose-mail-box__header cursor-pointer\" (click)=\"minimized = !minimized\">\r\n    <div class=\"title\">\r\n      <gx-icon name=\"editors\" class=\"mr-2\" [fw]=\"true\" size=\"xl\"></gx-icon>\r\n      Compose New Message\r\n    </div>\r\n\r\n    <div class=\"action-area ml-auto\">\r\n      <a *ngIf=\"minimized\" class=\"text-white mr-3\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"chevrolet-up\" size=\"xl\"></gx-icon>\r\n      </a>\r\n\r\n      <a *ngIf=\"!minimized\" class=\"text-white mr-3\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"chevrolet-down\" size=\"xl\"></gx-icon>\r\n      </a>\r\n      <a class=\"text-white\" href=\"javascript:void(0)\" (click)=\"onCloseClick($event)\">\r\n        <gx-icon name=\"remove\" size=\"sm\"></gx-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <!-- /compose mail header -->\r\n\r\n  <!-- Compose Mail Body -->\r\n  <div class=\"compose-mail-box__body\" [hidden]=\"minimized\">\r\n    <!-- Form -->\r\n    <form [formGroup]=\"composeMailForm\" (submit)=\"onSubmitForm()\">\r\n\r\n      <!-- Form Group -->\r\n      <div class=\"form-group mb-1\" formArrayName=\"to\">\r\n        <div [formGroupName]=\"0\">\r\n          <label class=\"sr-only\" for=\"email\">Email address</label>\r\n          <input type=\"email\"\r\n                 class=\"form-control\"\r\n                 id=\"email\"\r\n                 placeholder=\"Enter email\"\r\n                 name=\"email\"\r\n                 formControlName=\"email\">\r\n        </div>\r\n      </div>\r\n      <!-- /form group -->\r\n\r\n      <!-- Form Group -->\r\n      <div class=\"form-group\">\r\n        <label class=\"sr-only\" for=\"subject\">Subject</label>\r\n        <input type=\"text\"\r\n               class=\"form-control\"\r\n               placeholder=\"Subject\"\r\n               id=\"subject\"\r\n               name=\"subject\"\r\n               formControlName=\"subject\">\r\n      </div>\r\n      <!-- /form group -->\r\n\r\n      <!-- Form Group -->\r\n      <div class=\"form-group\">\r\n        <label class=\"sr-only\" for=\"textarea\">Example textarea</label>\r\n        <textarea class=\"form-control\"\r\n                  placeholder=\"Your message here...\"\r\n                  id=\"textarea\"\r\n                  name=\"message\"\r\n                  formControlName=\"message\"></textarea>\r\n      </div>\r\n      <!-- /form group -->\r\n\r\n      <!-- Form Group -->\r\n      <div class=\"d-flex align-items-center\">\r\n        <button type=\"submit\" class=\"btn btn-primary btn-sm\">Submit</button>\r\n\r\n        <div class=\"action-area ml-auto\">\r\n          <a class=\"text-dark\" href=\"javascript:void(0)\" (click)=\"onDiscardMail()\">\r\n            <gx-icon name=\"trash\" class=\"mr-1\"></gx-icon>\r\n            <span class=\"f-12 text-uppercase\">discard</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <!-- /form group -->\r\n    </form>\r\n    <!-- /form -->\r\n  </div>\r\n  <!-- /compose mail body -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-details/details-header/details-header.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-details/details-header/details-header.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Action Bar -->\r\n<div class=\"d-flex flex-wrap mb-5\">\r\n  <!-- Back Button -->\r\n  <a href=\"javascript:void(0)\"\r\n     class=\"btn btn-outline-dark btn-sm mr-auto mb-1\"\r\n     (click)=\"goToBack()\">\r\n    <gx-icon name=\"arrow-left\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n  </a>\r\n  <!-- /back button -->\r\n\r\n  <!-- Button Group -->\r\n  <div class=\"btn-group btn-group-sm mr-3 mr-lg-7 mb-1\" role=\"group\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"setFolder('archive')\">\r\n      <gx-icon name=\"archive\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"setFolder('spam')\">\r\n      <gx-icon name=\"spam\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"setFolder('trash')\">\r\n      <gx-icon name=\"trash-filled\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n    </button>\r\n\r\n  </div>\r\n  <!-- /button group -->\r\n\r\n  <!-- Button Group -->\r\n  <div class=\"btn-group btn-group-sm mr-4 mr-lg-7 mb-1\" role=\"group\">\r\n\r\n    <div class=\"btn-group btn-group-sm\" role=\"group\" ngbDropdown>\r\n      <button type=\"button\" class=\"btn btn-outline-dark no-arrow\" ngbDropdownToggle>\r\n        <gx-icon name=\"folder\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n      </button>\r\n\r\n      <div ngbDropdownMenu>\r\n        <a  *ngFor=\"let folder of folders\"\r\n            href=\"javascript:void(0)\"\r\n            class=\"dropdown-item\"\r\n            [ngClass]=\"{'active':folder.handle == currentMail.folder}\"\r\n            (click)=\"setFolder(folder.handle)\">{{folder.title}}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"btn-group btn-group-sm\" role=\"group\" ngbDropdown placement=\"bottom-right\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark no-arrow\" ngbDropdownToggle>\r\n        <gx-icon name=\"tag\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n      </button>\r\n\r\n      <div ngbDropdownMenu>\r\n        <a *ngFor=\"let label of labels\"\r\n           href=\"javascript:void(0)\"\r\n           class=\"dropdown-item\"\r\n           [ngClass]=\"{'active':hasLabel(label.id)}\"\r\n           (click)=\"toggleLabel(label.id)\">{{label.title}}</a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- /button group -->\r\n\r\n  <!-- Dropdown -->\r\n  <div ngbDropdown placement=\"bottom-right\">\r\n\r\n    <!-- Dropdown Button -->\r\n    <a href=\"javascript:void(0)\" class=\"btn btn-outline-dark btn-sm\" ngbDropdownToggle>\r\n      More\r\n    </a>\r\n    <!-- /dropdown button -->\r\n\r\n    <!-- Dropdown Menu -->\r\n    <div ngbDropdownMenu>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"markAsUnread()\">Unread</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onToggleStarred(true)\">Starred</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onToggleStarred(false)\">Unstarred</a>\r\n    </div>\r\n    <!-- /dropdown menu -->\r\n\r\n  </div>\r\n  <!-- /dropdown -->\r\n</div>\r\n<!-- /action bar -->\r\n\r\n<div class=\"d-flex flex-wrap\">\r\n  <h3 class=\"mb-0 text-truncate flex-1\">{{currentMail.subject}}</h3>\r\n\r\n  <!-- Badges -->\r\n  <task-badges class=\"ml-auto dt-module__list-item-info\"\r\n               [ids]=\"currentMail.labels\"\r\n               [labels]=\"labels\"></task-badges>\r\n  <!-- /badges -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-details/mail-conversation/mail-conversation.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-details/mail-conversation/mail-conversation.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Avatar -->\r\n<gx-avatar [user]=\"conversation.from\"\r\n           (click)=\"isOpened = !isOpened\"\r\n           class=\"mr-4 cursor-pointer\"></gx-avatar>\r\n<!-- /avatar -->\r\n\r\n<!-- Module Content -->\r\n<div class=\"dt-module__list-item-content\">\r\n  <h4 class=\"d-inline-block mb-1 cursor-pointer\" (click)=\"isOpened = !isOpened\">{{conversation.from.name}}</h4>\r\n  <p *ngIf=\"!isOpened\" class=\"mb-0 text-light-gray text-truncate\"\r\n     [innerHTML]=\"conversation.message | htmlToPlainText\"></p>\r\n  <p *ngIf=\"isOpened\" class=\"mb-0 text-light-gray\" [innerHTML]=\"conversation.message | nl2br\"></p>\r\n</div>\r\n<!-- /module content -->\r\n\r\n<!-- Module Info -->\r\n<div class=\"dt-module__list-item-info\">\r\n  <span class=\"mt-1\">{{conversation.time}}</span>\r\n\r\n  <!-- Checkbox -->\r\n  <gx-star class=\"ml-sm-3\"\r\n           [gxModel]=\"conversation.starred\"></gx-star>\r\n  <!-- /checkbox -->\r\n\r\n</div>\r\n<!-- /module info -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-details/mail-details.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-details/mail-details.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Module Content Inner -->\r\n<div class=\"dt-module__content-inner\">\r\n\r\n  <mail-details-header></mail-details-header>\r\n\r\n  <!-- Module List -->\r\n  <div class=\"dt-module__list mail-detail-list\">\r\n\r\n    <!-- Module Item -->\r\n    <div class=\"dt-module__list-item open\" [ngClass]=\"{'open': isOpened}\">\r\n      <!-- Avatar -->\r\n      <gx-avatar [user]=\"currentMail.from\"\r\n                 class=\"cursor-pointer mr-4\"\r\n                 (click)=\"isOpened = !isOpened\"></gx-avatar>\r\n      <!-- /avatar -->\r\n\r\n      <!-- Module Content -->\r\n      <div class=\"dt-module__list-item-content\">\r\n        <h4 class=\"d-inline-block cursor-pointer mb-1\"\r\n            (click)=\"isOpened = !isOpened\">{{currentMail.from.name}}</h4>\r\n\r\n        <p *ngIf=\"!isOpened\" class=\"mb-0 text-light-gray text-truncate\"\r\n           [innerHTML]=\"currentMail.message | htmlToPlainText\"></p>\r\n\r\n        <p *ngIf=\"isOpened\" class=\"mb-0 text-light-gray\" [innerHTML]=\"currentMail.message | nl2br\"></p>\r\n      </div>\r\n      <!-- /module content -->\r\n\r\n      <!-- Module Info -->\r\n      <div class=\"dt-module__list-item-info\">\r\n        <span class=\"mt-1\">{{currentMail.time}}</span>\r\n\r\n        <!-- Checkbox -->\r\n        <gx-star class=\"ml-sm-3\"\r\n                 [gxModel]=\"currentMail.starred\"\r\n                 (gxInputChange)=\"onToggleStarred($event)\"></gx-star>\r\n        <!-- /checkbox -->\r\n\r\n      </div>\r\n      <!-- /module info -->\r\n    </div>\r\n    <!-- /Module Item -->\r\n\r\n    <mail-conversation *ngFor=\"let conversation of currentMail.conversation;\"\r\n                       [conversation]=\"conversation\"></mail-conversation>\r\n\r\n  </div>\r\n  <!-- /Module List -->\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-header/mail-header.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-header/mail-header.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Action Bar -->\r\n<div class=\"d-flex flex-wrap\">\r\n  <!-- Dropdown -->\r\n  <div ngbDropdown class=\"mr-auto\">\r\n\r\n    <!-- Checkbox -->\r\n    <gx-checkbox  class=\"mr-3\"\r\n                  [gxModel]=\"hasSelectedMails\"\r\n                 [indeterminate]=\"isIndeterminate\"\r\n                 (gxInputChange)=\"toggleSelectAll()\"></gx-checkbox>\r\n    <!-- /checkbox -->\r\n\r\n    <!-- Dropdown Button -->\r\n    <a href=\"javascript:void(0)\" class=\"text-dark\" ngbDropdownToggle> {{selected}} </a>\r\n    <!-- /dropdown button -->\r\n\r\n    <!-- Dropdown Menu -->\r\n    <div ngbDropdownMenu>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"selectMails()\">All</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"deselectMails()\">None</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"selectMails('Read', 'read', true)\">Read</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"selectMails('Unread', 'read', false)\">Unread</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"selectMails('Starred', 'starred', true)\">Starred</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"selectMails('Unstarred', 'starred', false)\">Unstarred</a>\r\n    </div>\r\n    <!-- /dropdown menu -->\r\n\r\n  </div>\r\n  <!-- /dropdown -->\r\n\r\n  <!-- Button Group -->\r\n  <div *ngIf=\"hasSelectedMails\" class=\"btn-group btn-group-sm mr-3 mr-lg-7 mb-1\" role=\"group\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"setFolderOnSelectedMails('archive')\">\r\n      <gx-icon name=\"archive\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"setFolderOnSelectedMails('spam')\">\r\n      <gx-icon name=\"spam\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"setFolderOnSelectedMails('trash')\">\r\n      <gx-icon name=\"trash-filled\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n    </button>\r\n  </div>\r\n  <!-- /button group -->\r\n\r\n  <!-- Button Group -->\r\n  <div *ngIf=\"hasSelectedMails\" class=\"btn-group btn-group-sm mr-4 mr-lg-7 mb-1\" role=\"group\">\r\n\r\n    <div class=\"btn-group btn-group-sm\" role=\"group\" ngbDropdown>\r\n      <button type=\"button\" class=\"btn btn-outline-dark no-arrow\" ngbDropdownToggle>\r\n        <gx-icon name=\"folder\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n      </button>\r\n\r\n      <div ngbDropdownMenu>\r\n        <a  *ngFor=\"let folder of folders\"\r\n            href=\"javascript:void(0)\"\r\n            class=\"dropdown-item\"\r\n            (click)=\"setFolderOnSelectedMails(folder.handle)\">{{folder.title}}</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"btn-group btn-group-sm\" role=\"group\" ngbDropdown placement=\"bottom-right\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark no-arrow\" ngbDropdownToggle>\r\n        <gx-icon name=\"tag\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n      </button>\r\n\r\n      <div ngbDropdownMenu>\r\n        <a *ngFor=\"let label of labels\"\r\n           href=\"javascript:void(0)\"\r\n           class=\"dropdown-item\"\r\n           (click)=\"toggleLabelOnSelectedMails(label.id)\">{{label.title}}</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /button group -->\r\n\r\n  <!-- Dropdown -->\r\n  <div *ngIf=\"hasSelectedMails\" ngbDropdown placement=\"bottom-right\">\r\n\r\n    <!-- Dropdown Button -->\r\n    <a href=\"javascript:void(0)\" class=\"btn btn-outline-dark btn-sm\" ngbDropdownToggle>\r\n      More\r\n    </a>\r\n    <!-- /dropdown button -->\r\n\r\n    <!-- Dropdown Menu -->\r\n    <div ngbDropdownMenu>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Read</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Unread</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Starred</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Unstarred</a>\r\n    </div>\r\n    <!-- /dropdown menu -->\r\n\r\n  </div>\r\n  <!-- /dropdown -->\r\n</div>\r\n<!-- /action bar -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-list/mail-item/mail-item.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-list/mail-item/mail-item.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Checkbox -->\r\n<gx-checkbox class=\"mr-5\" [gxModel]=\"selected\" (gxInputChange)=\"onSelectedChange($event)\"></gx-checkbox>\r\n<!-- /checkbox -->\r\n\r\n<gx-star class=\"mr-5\" [gxModel]=\"mail.starred\" (gxInputChange)=\"onToggleStarred($event)\"></gx-star>\r\n\r\n<!-- Avatar -->\r\n<gx-avatar [user]=\"mail.from\" class=\"mr-4\"></gx-avatar>\r\n<!-- /avatar -->\r\n\r\n<!-- Module Content -->\r\n<div class=\"dt-module__list-item-content\"\r\n     data-location=\"mail-detail.html\">\r\n  <div class=\"user-detail\">\r\n    <span class=\"user-name\">{{mail.from.name}}</span>\r\n    <span class=\"dt-separator-v\">&nbsp;</span>\r\n    <span class=\"designation\">{{mail.subject | htmlToPlainText | slice:0:30}}</span>\r\n  </div>\r\n  <p class=\"mb-0 text-light-gray text-truncate\">{{mail.message | htmlToPlainText | slice:0:100}}</p>\r\n</div>\r\n<!-- /module content -->\r\n\r\n<!-- Module Info -->\r\n<div class=\"dt-module__list-item-info\">\r\n  <!-- Badges -->\r\n  <task-badges class=\"badge-group\"\r\n               [ids]=\"mail.labels\"\r\n               [labels]=\"labels\"\r\n               [showAll]=\"false\"></task-badges>\r\n  <!-- /badges -->\r\n\r\n  <span>{{mail.time}}</span>\r\n</div>\r\n<!-- /module info -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-list/mail-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-list/mail-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Module Content Inner -->\r\n<div class=\"dt-module__content-inner\">\r\n\r\n  <mail-header></mail-header>\r\n\r\n  <!-- Module List -->\r\n  <div class=\"dt-module__list\">\r\n\r\n    <div *ngIf=\"mails.length == 0\" class=\"dt-module__list-item\">\r\n      <p class=\"empty-result\">No record found.</p>\r\n    </div>\r\n\r\n    <!-- Module Item -->\r\n    <mail-item *ngFor=\"let mail of mails | filter: searchQuery\"\r\n               [mail]=\"mail\"\r\n               (click)=\"omMailClick(mail.id)\"></mail-item>\r\n    <!-- /Module Item -->\r\n\r\n  </div>\r\n  <!-- /Module List -->\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-sidebar/mail-sidebar.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-sidebar/mail-sidebar.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidebar Header -->\r\n<div class=\"dt-module__sidebar-header border-bottom\">\r\n  <div class=\"d-none d-md-flex align-items-center\">\r\n    <gx-icon name=\"open-mail\" size=\"1x\" class=\"mr-3 text-dark\"></gx-icon>\r\n    <span class=\"h3 mb-0\">Messages</span>\r\n  </div>\r\n\r\n  <!-- App Quick Menu -->\r\n  <div class=\"quick-menu-list d-md-none\">\r\n    <a *ngIf=\"hiddenPageHeader\"\r\n       href=\"javascript:void(0)\"\r\n       class=\"quick-menu mr-auto d-md-none\"\r\n       [ngClass]=\"{'active':settings.activeNavDrawer}\"\r\n       (click)=\"toggleNavigation($event)\">\r\n      <gx-icon name=\"menu\"></gx-icon>\r\n    </a>\r\n\r\n    <!-- Search Box -->\r\n    <form class=\"search-box d-md-none\" *ngIf=\"!hiddenPageHeader\">\r\n      <input class=\"form-control\" type=\"search\" id=\"address\" name=\"address\"\r\n             placeholder=\"Search in app...\">\r\n      <button type=\"submit\" class=\"search-icon\">\r\n        <gx-icon name=\"search\" size=\"lg\"></gx-icon>\r\n      </button>\r\n    </form>\r\n    <!-- /search box -->\r\n\r\n    <a href=\"javascript:void(0)\"\r\n       class=\"quick-menu\"\r\n       [ngClass]=\"{'active':activeMenu == 'search', 'd-none d-md-block': !hiddenPageHeader}\"\r\n       (click)=\"onClickMenu($event, 'search')\">\r\n      <gx-icon name=\"search\"></gx-icon>\r\n    </a>\r\n\r\n    <a href=\"javascript:void(0)\" class=\"quick-menu\" (click)=\"onComposeMail()\">\r\n      <gx-icon name=\"editors\"></gx-icon>\r\n    </a>\r\n\r\n    <a href=\"javascript:void(0)\"\r\n       class=\"quick-menu\"\r\n       [ngClass]=\"{'active':activeMenu == 'notifications'}\"\r\n       (click)=\"onClickMenu($event, 'notifications')\">\r\n      <gx-icon name=\"notification2\"></gx-icon>\r\n    </a>\r\n\r\n    <a href=\"javascript:void(0)\"\r\n       class=\"quick-menu d-md-none\"\r\n       [ngClass]=\"{'active':isOpen}\"\r\n       (click)=\"toggleOpen($event)\">\r\n      <gx-icon name=\"{{hiddenPageHeader? 'vertical-more': 'menu'}}\"></gx-icon>\r\n    </a>\r\n  </div>\r\n  <!-- /app quick menu -->\r\n</div>\r\n<!-- /sidebar header -->\r\n\r\n<!-- Sidebar Menu -->\r\n<div class=\"dt-module__sidebar-content position-relative\" [@collapseAppSidebar]=\"isOpen\" perfectScrollbar>\r\n  <!-- Sidebar Content Inner -->\r\n  <div class=\"dt-module__sidebar-content-inner\">\r\n    <!-- Button -->\r\n    <div class=\"action-area mt-5 mb-7 d-none d-md-block\">\r\n      <a href=\"javascript:void(0)\" class=\"btn btn-shadow btn-default compose-btn btn-rounded\" (click)=\"onComposeMail()\">\r\n        <gx-icon name=\"editors\" class=\"mr-2\" [fw]=\"true\"></gx-icon>Compose\r\n      </a>\r\n    </div>\r\n    <!-- /button -->\r\n\r\n    <!-- Sidebar Navigation -->\r\n    <ul class=\"dt-module-side-nav\">\r\n\r\n      <!-- Menu Header -->\r\n      <li class=\"dt-module-side-nav__header\">\r\n        <span class=\"dt-module-side-nav__text\">main</span>\r\n      </li>\r\n      <!-- /menu header -->\r\n\r\n      <!-- Menu Item -->\r\n      <li *ngFor=\"let folder of folders\"\r\n          class=\"dt-module-side-nav__item\"\r\n          routerLinkActive=\"active\">\r\n\r\n        <a class=\"dt-module-side-nav__link\"\r\n           [routerLink]=\"'/' + settings.layout + '/apps/mail/'+folder.handle\">\r\n          <gx-icon [name]=\"folder.icon\" size=\"lg\" [fw]=\"true\"></gx-icon>\r\n          <span class=\"dt-module-side-nav__text\">{{folder.title}}</span>\r\n        </a>\r\n      </li>\r\n\r\n      <!-- Menu Header -->\r\n      <li class=\"dt-module-side-nav__header\">\r\n        <span class=\"dt-module-side-nav__text\">FILTERS</span>\r\n      </li>\r\n      <!-- /menu header -->\r\n\r\n      <!-- Menu Item -->\r\n      <li *ngFor=\"let filter of filters\"\r\n          class=\"dt-module-side-nav__item\"\r\n          routerLinkActive=\"active\">\r\n        <a class=\"dt-module-side-nav__link\"\r\n           [routerLink]=\"'/' + settings.layout + '/apps/mail/filter/'+filter.handle\">\r\n          <gx-icon [name]=\"filter.icon\" size=\"lg\" [fw]=\"true\"></gx-icon>\r\n          <span class=\"dt-module-side-nav__text\">{{filter.title}}</span>\r\n        </a>\r\n      </li>\r\n      <!-- /menu item -->\r\n\r\n\r\n      <!-- Menu Header -->\r\n      <li class=\"dt-module-side-nav__header\">\r\n        <span class=\"dt-module-side-nav__text\">Labels</span>\r\n      </li>\r\n      <!-- /menu header -->\r\n\r\n      <!-- Menu Item -->\r\n      <li *ngFor=\"let label of labels\"\r\n          class=\"dt-module-side-nav__item\"\r\n          routerLinkActive=\"active\">\r\n        <a class=\"dt-module-side-nav__link\"\r\n           [routerLink]=\"'/' + settings.layout + '/apps/mail/label/'+label.handle\">\r\n          <gx-icon name=\"tag\" size=\"lg\" [fw]=\"true\" [ngClass]=\"label.icon\"></gx-icon>\r\n          <span class=\"dt-module-side-nav__text\">{{label.title}}</span>\r\n        </a>\r\n      </li>\r\n      <!-- /menu item -->\r\n\r\n    </ul>\r\n    <!-- /sidebar navigation -->\r\n\r\n    <!-- Contacts -->\r\n    <div class=\"dt-contacts contacts-list\">\r\n      <h6 class=\"dt-contact__heading text-uppercase\">CONNECTIONS</h6>\r\n\r\n      <!-- Contact -->\r\n      <mail-contact *ngFor=\"let contact of contacts\"\r\n                    [contact]=\"contact\"></mail-contact>\r\n      <!-- /contact -->\r\n\r\n    </div>\r\n    <!-- contacts -->\r\n  </div>\r\n  <!-- /sidebar content inner -->\r\n</div>\r\n<!-- /sidebar Menu -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-12\">\r\n\r\n    <!-- Module -->\r\n    <div class=\"dt-module\">\r\n\r\n      <!-- Module Sidebar -->\r\n      <mail-sidebar></mail-sidebar>\r\n      <!-- /Module Sidebar -->\r\n\r\n      <!-- Module Container -->\r\n      <div class=\"dt-module__container\">\r\n\r\n        <!-- Module Header -->\r\n        <mail-module-header></mail-module-header>\r\n        <!-- /Module Header -->\r\n\r\n        <!-- Module Content -->\r\n        <app-mail-list [hidden]=\"currentMail\" perfectScrollbar></app-mail-list>\r\n        <!-- Module Content -->\r\n\r\n        <app-mail-details *ngIf=\"currentMail\" perfectScrollbar></app-mail-details>\r\n\r\n      </div>\r\n      <!-- /Module Container -->\r\n\r\n      <!-- Module Drawer -->\r\n      <mail-drawer [ngClass]=\"{'open':drawer.isOpen}\"></mail-drawer>\r\n      <div class=\"dt-backdrop\" *ngIf=\"drawer.isOpen\" (click)=\"closeDrawer($event)\"></div>\r\n      <!-- Module Drawer -->\r\n\r\n    </div>\r\n    <!-- /Module -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/module-header/module-header.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/module-header/module-header.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mail-search-bar></mail-search-bar>\r\n\r\n<!-- Dropdown -->\r\n<div class=\"ml-auto dt-notification\" ngbDropdown placement=\"bottom-right\">\r\n\r\n  <!-- Dropdown Button -->\r\n  <a href=\"javascript:void(0)\" class=\"no-arrow\" ngbDropdownToggle>\r\n    <gx-icon name=\"notification2\" [fw]=\"true\" size=\"1x\" class=\"dt-icon-alert\"></gx-icon>\r\n  </a>\r\n  <!-- /dropdown button -->\r\n\r\n  <!-- Dropdown Menu -->\r\n  <div ngbDropdownMenu class=\"dropdown-menu-media\">\r\n    <!-- Dropdown Menu Header -->\r\n    <div class=\"dropdown-menu-header\">\r\n      <h4 class=\"title\">Notifications (9)</h4>\r\n\r\n      <div class=\"ml-auto action-area\">\r\n        <a href=\"javascript:void(0)\">Mark All Read</a> <a class=\"ml-2\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"settings\" size=\"lg\" class=\"text-light-gray\"></gx-icon>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <!-- /dropdown menu header -->\r\n\r\n    <!-- Dropdown Menu Body -->\r\n    <div class=\"dropdown-menu-body position-relative\" perfectScrollbar>\r\n\r\n      <div class=\"h-auto\">\r\n        <!-- Media -->\r\n        <a href=\"javascript:void(0)\" class=\"media\" *ngFor=\"let notification of notifications\">\r\n\r\n          <!-- Avatar -->\r\n          <gx-avatar [user]=\"notification\" [charLength]=\"0\" class=\"mr-3\"></gx-avatar>\r\n          <!-- avatar -->\r\n\r\n          <!-- Media Body -->\r\n          <span class=\"media-body\">\r\n            <span class=\"message\" [innerHTML]=\"notification.message\"></span>\r\n            <span class=\"meta-date\">\r\n              <gx-icon *ngIf=\"notification.icon.name\"\r\n                       [name]=\"notification.icon.name\"\r\n                       [ngClass]=\"notification.icon.color\"\r\n                       [fw]=\"true\" class=\"mr-1\"></gx-icon>\r\n              {{notification.time}}\r\n            </span>\r\n          </span>\r\n          <!-- /media body -->\r\n\r\n        </a>\r\n        <!-- /media -->\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Dropdown Menu Footer -->\r\n    <div class=\"dropdown-menu-footer\">\r\n      <a href=\"javascript:void(0)\" class=\"card-link\"> See All\r\n        <gx-icon name=\"arrow-right\" [fw]=\"true\"></gx-icon></a>\r\n    </div>\r\n    <!-- /dropdown menu footer -->\r\n  </div>\r\n  <!-- /dropdown menu -->\r\n\r\n</div>\r\n<!-- /dropdown -->\r\n");

/***/ }),

/***/ "./src/app/content/apps/mail/drawer/drawer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/content/apps/mail/drawer/drawer.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9tYWlsL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/mail/drawer/drawer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/content/apps/mail/drawer/drawer.component.ts ***!
  \**************************************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return DrawerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _drawer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../drawer.service */ "./src/app/content/apps/drawer.service.ts");



let DrawerComponent = class DrawerComponent {
    constructor(drawerService) {
        this.drawerService = drawerService;
        this.draverClasses = 'dt-module__drawer dt-drawer position-left';
        this.isOpen = false;
        this.showLoader = false;
        this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
            if (!this.activeMenu) {
                this.processLoader();
            }
            this.drawer = drawer;
            this.isOpen = this.isOpen;
            this.activeMenu = this.drawer.activeMenu;
            if (!this.drawer.isOpen) {
                this.activeMenu = '';
            }
        });
    }
    ngOnInit() {
    }
    processLoader() {
        this.showLoader = true;
        setTimeout(() => {
            this.showLoader = false;
        }, 1000);
    }
    /**
     * Close Drawer
     * @param event
     */
    closeDrawer(event) {
        event.preventDefault();
        this.drawer.isOpen = false;
        this.drawerService.update(this.drawer);
    }
    onSelectMenu(event, activeMenu) {
        event.preventDefault();
        this.processLoader();
        this.drawer.activeMenu = this.activeMenu = activeMenu;
        this.drawerService.update(this.drawer);
    }
    ngOnDestroy() {
        this.onDrawerChanged.unsubscribe();
    }
};
DrawerComponent.ctorParameters = () => [
    { type: _drawer_service__WEBPACK_IMPORTED_MODULE_2__["DrawerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], DrawerComponent.prototype, "draverClasses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
], DrawerComponent.prototype, "isOpen", void 0);
DrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mail-drawer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drawer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/drawer/drawer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drawer.component.scss */ "./src/app/content/apps/mail/drawer/drawer.component.scss")).default]
    })
], DrawerComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/drawer/notifications/notifications.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/content/apps/mail/drawer/notifications/notifications.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9tYWlsL2RyYXdlci9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/mail/drawer/notifications/notifications.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/apps/mail/drawer/notifications/notifications.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.service */ "./src/app/app.service.ts");



let NotificationsComponent = class NotificationsComponent {
    constructor(appService) {
        this.appService = appService;
        this.classlist = 'dt-notification';
        this.notifications = [];
        this.onNotificationsChanged = this.appService.onNotificationsChanged.subscribe((notifications) => {
            this.notifications = notifications;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.onNotificationsChanged.unsubscribe();
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: _app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], NotificationsComponent.prototype, "classlist", void 0);
NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'todo-notifications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/drawer/notifications/notifications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.component.scss */ "./src/app/content/apps/mail/drawer/notifications/notifications.component.scss")).default]
    })
], NotificationsComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/drawer/search/search.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/content/apps/mail/drawer/search/search.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9tYWlsL2RyYXdlci9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/apps/mail/drawer/search/search.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/content/apps/mail/drawer/search/search.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let SearchComponent = class SearchComponent {
    constructor(appService) {
        this.appService = appService;
        this.classlist = 'dt-notification';
        this.messages = [];
        this.searchText = '';
        this.searchQuery = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.onMessagesChanged = this.appService.onMessagesChanged.subscribe((messages) => {
            this.messages = messages;
        });
    }
    ngOnInit() {
        this.searchQuery.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(searchText => {
            this.searchText = searchText;
        });
    }
    ngOnDestroy() {
        this.onMessagesChanged.unsubscribe();
    }
};
SearchComponent.ctorParameters = () => [
    { type: _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], SearchComponent.prototype, "classlist", void 0);
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'todo-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/drawer/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/content/apps/mail/drawer/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/helper-widgets/badges/badges.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/apps/mail/helper-widgets/badges/badges.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BadgesComponent = class BadgesComponent {
    constructor() {
        this.showAll = true;
    }
    ngOnInit() {
        if (this.showAll) {
            this.items = this.ids;
        }
        else {
            this.items = this.ids.slice(0, 2);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BadgesComponent.prototype, "ids", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BadgesComponent.prototype, "labels", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BadgesComponent.prototype, "showAll", void 0);
BadgesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'task-badges',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./badges.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/helper-widgets/badges/badges.component.html")).default
    })
], BadgesComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/helper-widgets/contact-hover-card/contact-hover-card.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/content/apps/mail/helper-widgets/contact-hover-card/contact-hover-card.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  position: fixed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9hcHBzL21haWwvaGVscGVyLXdpZGdldHMvY29udGFjdC1ob3Zlci1jYXJkL0M6XFxVc2Vyc1xcdmlub1xcQWJiYXNzXFx0cnVzdC1wcmltZS12My9zcmNcXGFwcFxcY29udGVudFxcYXBwc1xcbWFpbFxcaGVscGVyLXdpZGdldHNcXGNvbnRhY3QtaG92ZXItY2FyZFxcY29udGFjdC1ob3Zlci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9tYWlsL2hlbHBlci13aWRnZXRzL2NvbnRhY3QtaG92ZXItY2FyZC9jb250YWN0LWhvdmVyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/content/apps/mail/helper-widgets/contact-hover-card/contact-hover-card.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/apps/mail/helper-widgets/contact-hover-card/contact-hover-card.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ContactHoverCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactHoverCardComponent", function() { return ContactHoverCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mail.service */ "./src/app/content/apps/mail/mail.service.ts");



let ContactHoverCardComponent = class ContactHoverCardComponent {
    constructor(el, mailService) {
        this.mailService = mailService;
        this.classlist = 'card user-info-card';
        this.isVisible = false;
        this.el = el.nativeElement;
    }
    ngOnInit() {
        this.onContactHovered = this.mailService.onContactHovered
            .subscribe(data => {
            this.contact = data.contact;
            this.isVisible = data.show;
            this.position = data.position;
            this.setPosition();
        });
    }
    onMouseEnter() {
        this.showContactHoveredCard();
    }
    onMouseLeave() {
        this.hideContactHoveredCard();
    }
    /**
     * Show contact hover card
     */
    showContactHoveredCard() {
        this.isVisible = true;
    }
    /**
     * Hide contact hover card
     */
    hideContactHoveredCard() {
        this.isVisible = false;
    }
    ngOnDestroy() {
        this.onContactHovered.unsubscribe();
    }
    /**
     * Set hover card position
     */
    setPosition() {
        if (this.position && this.isVisible) {
            const windowHeight = window.innerHeight;
            if (!this.el.style.top) {
                this.el.style.top = (windowHeight / 2) + 'px';
            }
            this.el.style.left = (this.position.left + this.position.width) + 'px';
            setTimeout(() => {
                const cardHeight = this.el.offsetHeight;
                const cardTotalHeight = cardHeight + this.position.top + 20;
                if (cardTotalHeight > windowHeight) {
                    this.el.style.top = (windowHeight - (cardHeight + 20)) + 'px';
                }
                else if (cardHeight > 0) {
                    this.el.style.top = this.position.top + 'px';
                }
            }, 100);
        }
    }
};
ContactHoverCardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], ContactHoverCardComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')
], ContactHoverCardComponent.prototype, "onMouseEnter", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')
], ContactHoverCardComponent.prototype, "onMouseLeave", null);
ContactHoverCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'contact-hover-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-hover-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/helper-widgets/contact-hover-card/contact-hover-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-hover-card.component.scss */ "./src/app/content/apps/mail/helper-widgets/contact-hover-card/contact-hover-card.component.scss")).default]
    })
], ContactHoverCardComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/helper-widgets/contact/contact.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/content/apps/mail/helper-widgets/contact/contact.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mail.service */ "./src/app/content/apps/mail/mail.service.ts");



let ContactComponent = class ContactComponent {
    constructor(el, mailService) {
        this.mailService = mailService;
        this.classlist = 'dt-contact';
        this.contactCardData = { show: false };
        this.el = el.nativeElement;
    }
    ngOnInit() {
    }
    onMouseEnter() {
        this.contactCardData.position = this.el.getBoundingClientRect();
        this.contactCardData.show = true;
        this.contactCardData.contact = this.contact;
        this.mailService.onContactHovered.next(this.contactCardData);
    }
    onMouseLeave() {
        this.contactCardData.show = false;
        this.mailService.onContactHovered.next(this.contactCardData);
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], ContactComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactComponent.prototype, "contact", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')
], ContactComponent.prototype, "onMouseEnter", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')
], ContactComponent.prototype, "onMouseLeave", null);
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mail-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/helper-widgets/contact/contact.component.html")).default
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/helper-widgets/search-bar/search-bar.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/content/apps/mail/helper-widgets/search-bar/search-bar.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9tYWlsL2hlbHBlci13aWRnZXRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/apps/mail/helper-widgets/search-bar/search-bar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/apps/mail/helper-widgets/search-bar/search-bar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../mail.service */ "./src/app/content/apps/mail/mail.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let SearchBarComponent = class SearchBarComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.classlist = 'search-box ml-n4';
        this.searchQuery = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngOnInit() {
        this.searchQuery.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(searchText => {
            this.mailService.onSearchQueryChanged.next(searchText);
        });
    }
};
SearchBarComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], SearchBarComponent.prototype, "classlist", void 0);
SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mail-search-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/helper-widgets/search-bar/search-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/content/apps/mail/helper-widgets/search-bar/search-bar.component.scss")).default]
    })
], SearchBarComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/mail-compose/mail-compose.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-compose/mail-compose.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9tYWlsL21haWwtY29tcG9zZS9tYWlsLWNvbXBvc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/mail/mail-compose/mail-compose.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-compose/mail-compose.component.ts ***!
  \**************************************************************************/
/*! exports provided: MailComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComposeComponent", function() { return MailComposeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _gaxon_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gaxon/helpers */ "./src/gaxon/helpers/index.ts");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../mail.service */ "./src/app/content/apps/mail/mail.service.ts");
/* harmony import */ var _models_mail_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../models/mail.model */ "./src/app/content/apps/mail/models/mail.model.ts");






let MailComposeComponent = class MailComposeComponent {
    constructor(mailService, componentRef, formBuilder) {
        this.mailService = mailService;
        this.componentRef = componentRef;
        this.formBuilder = formBuilder;
        this.classlist = 'compose-mail-box';
        this.minimized = false;
        this.componentRef.nativeElement.style.display = 'none';
    }
    ngOnInit() {
        this.composeMailForm = this.createComposeForm();
        // Subscribe to update composedMail on changes
        this.onComposeMailClicked = this.mailService.onComposeMailClicked
            .subscribe((response) => {
            this.componentRef.nativeElement.style.display = 'block';
            this.composeMail = this.resetMail();
        });
    }
    /**
     * Reset new mail
     * @return {Mail}
     */
    resetMail() {
        const newMail = new _models_mail_model__WEBPACK_IMPORTED_MODULE_5__["Mail"]();
        newMail.id = _gaxon_helpers__WEBPACK_IMPORTED_MODULE_3__["GxHelper"].UUID();
        newMail.from = this.mailService.currentUser;
        newMail.read = true;
        newMail.attachments = [];
        newMail.labels = [];
        newMail.conversation = [];
        return newMail;
    }
    /**
     * Create comose reactive form
     */
    createComposeForm() {
        const subject = 'subject';
        const message = 'Hi Mate,\n' +
            'Sorry for the delay in response!\n' +
            'I’m afraid, I won’t be able to join you in the conference call. I have to take my\n' +
            'daughter for her game. I hope that is ok.\n' +
            '\n' +
            'Cheers!\n' +
            'Dom';
        const toUsers = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        toUsers.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }));
        return this.formBuilder.group({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](subject, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](message, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            to: toUsers
        });
    }
    /**
     * On close form
     * @param event
     */
    onCloseClick(event) {
        event.stopPropagation();
        const today = new Date();
        this.composeMail.time = today.getDate() + ' ' + today.toLocaleString('en', { month: 'short' });
        this.composeMail.folder = 'drafts';
        this.composeMail.subject = this.composeMailForm.get('subject').value;
        this.composeMail.message = this.composeMailForm.get('message').value;
        this.composeMail.to = this.composeMailForm.get('to').value;
        this.saveMail(this.composeMail).then((response) => {
            this.composeMailForm = this.createComposeForm();
            this.composeMail = this.resetMail();
            this.componentRef.nativeElement.style.display = 'none';
        });
    }
    /**
     * On submit form
     */
    onSubmitForm() {
        const today = new Date();
        this.composeMail.time = today.getDate() + ' ' + today.toLocaleString('en', { month: 'short' });
        this.composeMail.folder = 'sent';
        this.composeMail.subject = this.composeMailForm.get('subject').value;
        this.composeMail.message = this.composeMailForm.get('message').value;
        this.composeMail.to = this.composeMailForm.get('to').value;
        this.saveMail(this.composeMail).then((response) => {
            this.composeMailForm = this.createComposeForm();
            this.composeMail = this.resetMail();
            this.componentRef.nativeElement.style.display = 'none';
        });
    }
    /**
     * Save mail in data
     * @param mail
     * @return {Promise<any>}
     */
    saveMail(mail) {
        return this.mailService.saveMail(mail);
    }
    /**
     * On Discard Mail
     */
    onDiscardMail() {
        this.composeMailForm = this.createComposeForm();
        this.composeMail = this.resetMail();
        this.componentRef.nativeElement.style.display = 'none';
    }
    ngOnDestroy() {
        this.onComposeMailClicked.unsubscribe();
    }
};
MailComposeComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], MailComposeComponent.prototype, "classlist", void 0);
MailComposeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mail-compose',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mail-compose.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-compose/mail-compose.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mail-compose.component.scss */ "./src/app/content/apps/mail/mail-compose/mail-compose.component.scss")).default]
    })
], MailComposeComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/mail-details/details-header/details-header.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-details/details-header/details-header.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9tYWlsL21haWwtZGV0YWlscy9kZXRhaWxzLWhlYWRlci9kZXRhaWxzLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/apps/mail/mail-details/details-header/details-header.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-details/details-header/details-header.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DetailsHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsHeaderComponent", function() { return DetailsHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../mail.service */ "./src/app/content/apps/mail/mail.service.ts");



let DetailsHeaderComponent = class DetailsHeaderComponent {
    constructor(eleRef, mailService) {
        this.eleRef = eleRef;
        this.mailService = mailService;
        this.classlist = 'd-block px-1 pb-4 border-bottom border-w-2';
        this.labels = [];
        this.folders = [];
    }
    ngOnInit() {
        // Subscribe to update currentMail on changes
        this.onCurrentMailChanged =
            this.mailService.onCurrentMailChanged
                .subscribe(currentMail => {
                if (!currentMail) {
                    this.currentMail = null;
                    this.eleRef.nativeElement.classList.add('mb-1');
                    this.eleRef.nativeElement.classList.add('mt-n1');
                }
                else {
                    this.currentMail = currentMail;
                }
            });
        // Subscribe to update labels on changes
        this.onLabelsChanged =
            this.mailService.onLabelsChanged
                .subscribe((labels) => {
                this.labels = labels;
            });
        // Subscribe to update folders on changes
        this.onFoldersChanged =
            this.mailService.onFoldersChanged
                .subscribe((folders) => {
                this.folders = folders;
            });
    }
    /**
     * Go to back mail listing
     */
    goToBack() {
        this.mailService.setCurrentMail(null);
    }
    /**
     * On toggle starred
     */
    onToggleStarred(event) {
        this.currentMail.starred = event;
        this.mailService.saveMail(this.currentMail);
    }
    /**
     * Mark mail as unread
     */
    markAsUnread() {
        this.currentMail.read = false;
        this.mailService.saveMail(this.currentMail).then((response) => {
            this.goToBack();
        });
    }
    /**
     * Change folder to selected emails
     * @param folderHandle
     */
    setFolder(folderHandle) {
        this.currentMail.folder = folderHandle;
        this.mailService.saveMail(this.currentMail).then((response) => {
            if (folderHandle == 'trash') {
                this.goToBack();
            }
        });
    }
    /**
     * Check Mail has label
     * @param labelId
     * @return {any | boolean}
     */
    hasLabel(labelId) {
        return this.mailService.hasLabel(labelId, this.currentMail);
    }
    /**
     * Change lables to selectd emails
     * @param labelId
     */
    toggleLabel(labelId) {
        this.mailService.toggleLabel(labelId, this.currentMail);
    }
    ngOnDestroy() {
        this.onCurrentMailChanged.unsubscribe();
        this.onLabelsChanged.unsubscribe();
        this.onFoldersChanged.unsubscribe();
    }
};
DetailsHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], DetailsHeaderComponent.prototype, "classlist", void 0);
DetailsHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mail-details-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-details/details-header/details-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details-header.component.scss */ "./src/app/content/apps/mail/mail-details/details-header/details-header.component.scss")).default]
    })
], DetailsHeaderComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/mail-details/mail-conversation/mail-conversation.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-details/mail-conversation/mail-conversation.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MailConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConversationComponent", function() { return MailConversationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MailConversationComponent = class MailConversationComponent {
    constructor() {
        this.classlist = 'dt-module__list-item';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], MailConversationComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
], MailConversationComponent.prototype, "isOpened", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MailConversationComponent.prototype, "conversation", void 0);
MailConversationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mail-conversation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mail-conversation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-details/mail-conversation/mail-conversation.component.html")).default
    })
], MailConversationComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/mail-details/mail-details.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-details/mail-details.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9tYWlsL21haWwtZGV0YWlscy9tYWlsLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/mail/mail-details/mail-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-details/mail-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: MailDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailDetailsComponent", function() { return MailDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../mail.service */ "./src/app/content/apps/mail/mail.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");




let MailDetailsComponent = class MailDetailsComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.classlist = 'dt-module__content position-relative ps';
        this.isOpened = true;
    }
    ngOnInit() {
        // Subscribe to update currentMail on changes
        this.onCurrentMailChanged =
            this.mailService.onCurrentMailChanged
                .subscribe(currentMail => {
                if (!currentMail) {
                    this.currentMail = null;
                }
                else {
                    this.currentMail = currentMail;
                    this.markAsRead();
                }
                setTimeout(() => {
                    this.scrollToBottom();
                }, 300);
            });
    }
    /**
     * Mark as read mail
     */
    markAsRead() {
        this.currentMail.read = true;
        this.mailService.saveMail(this.currentMail);
    }
    /**
     * On toggle starred
     */
    onToggleStarred(event) {
        this.currentMail.starred = event;
        this.mailService.saveMail(this.currentMail);
    }
    scrollToBottom() {
        if (this.directiveRef) {
            this.directiveRef.update();
            this.directiveRef.scrollToBottom();
        }
    }
    ngOnDestroy() {
        this.onCurrentMailChanged.unsubscribe();
    }
};
MailDetailsComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], MailDetailsComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], { static: false })
], MailDetailsComponent.prototype, "directiveRef", void 0);
MailDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mail-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mail-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-details/mail-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mail-details.component.scss */ "./src/app/content/apps/mail/mail-details/mail-details.component.scss")).default]
    })
], MailDetailsComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/mail-header/mail-header.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-header/mail-header.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9hcHBzL21haWwvbWFpbC1oZWFkZXIvQzpcXFVzZXJzXFx2aW5vXFxBYmJhc3NcXHRydXN0LXByaW1lLXYzL3NyY1xcYXBwXFxjb250ZW50XFxhcHBzXFxtYWlsXFxtYWlsLWhlYWRlclxcbWFpbC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2FwcHMvbWFpbC9tYWlsLWhlYWRlci9tYWlsLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/content/apps/mail/mail-header/mail-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-header/mail-header.component.ts ***!
  \************************************************************************/
/*! exports provided: MailHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailHeaderComponent", function() { return MailHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../mail.service */ "./src/app/content/apps/mail/mail.service.ts");



let MailHeaderComponent = class MailHeaderComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.classlist = 'px-1 pb-4 border-bottom border-w-2 mb-1 mt-n1';
        this.selected = 'None';
        this.labels = [];
        this.folders = [];
    }
    ngOnInit() {
        // Subscribe to update SelectedMails on changes
        this.onSelectedMailsChanged =
            this.mailService.onSelectedMailsChanged
                .subscribe(selectedMails => {
                setTimeout(() => {
                    this.hasSelectedMails = selectedMails.length > 0;
                    this.isIndeterminate = (selectedMails.length !== this.mailService.mails.length && selectedMails.length > 0);
                    if (selectedMails.length === 0) {
                        this.selected = 'None';
                    }
                    else if (selectedMails.length === this.mailService.mails.length) {
                        this.selected = 'All';
                    }
                }, 0);
            });
        // Subscribe to update labels on changes
        this.onLabelsChanged =
            this.mailService.onLabelsChanged
                .subscribe((labels) => {
                this.labels = labels;
            });
        // Subscribe to update folders on changes
        this.onFoldersChanged =
            this.mailService.onFoldersChanged
                .subscribe((folders) => {
                this.folders = folders;
            });
    }
    /**
     * Toggle select all mails
     */
    toggleSelectAll() {
        this.mailService.toggleSelectAll();
    }
    /**
     * Select mails by filter
     * @param selected
     * @param filterParameter
     * @param filterValue
     */
    selectMails(selected, filterParameter, filterValue) {
        this.selected = (selected) ? selected : this.selected;
        this.mailService.selectMails(filterParameter, filterValue);
    }
    /**
     * Deselect all mails
     */
    deselectMails() {
        this.mailService.deselectMails();
    }
    /**
     * Change folder to selected emails
     * @param folderHandle
     */
    setFolderOnSelectedMails(folderHandle) {
        this.mailService.setFolderOnSelectedMails(folderHandle);
    }
    /**
     * Change lables to selectd emails
     * @param labelId
     */
    toggleLabelOnSelectedMails(labelId) {
        this.mailService.toggleLabelOnSelectedMails(labelId);
    }
    ngOnDestroy() {
        this.onLabelsChanged.unsubscribe();
        this.onFoldersChanged.unsubscribe();
        this.onSelectedMailsChanged.unsubscribe();
    }
};
MailHeaderComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], MailHeaderComponent.prototype, "classlist", void 0);
MailHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mail-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mail-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-header/mail-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mail-header.component.scss */ "./src/app/content/apps/mail/mail-header/mail-header.component.scss")).default]
    })
], MailHeaderComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/mail-list/mail-item/mail-item.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-list/mail-item/mail-item.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9tYWlsL21haWwtbGlzdC9tYWlsLWl0ZW0vbWFpbC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/apps/mail/mail-list/mail-item/mail-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-list/mail-item/mail-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: MailItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailItemComponent", function() { return MailItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../mail.service */ "./src/app/content/apps/mail/mail.service.ts");



let MailItemComponent = class MailItemComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.classlist = 'dt-module__list-item cursor-pointer';
        this.labels = [];
    }
    ngOnInit() {
        // Subscribe to update labels on changes
        this.onLabelsChanged =
            this.mailService.onLabelsChanged
                .subscribe((labels) => {
                this.labels = labels;
            });
        // Subscribe to update SelectedMails on changes
        this.onSelectedMailsChanged =
            this.mailService.onSelectedMailsChanged
                .subscribe(selectedMails => {
                this.selected = selectedMails.find((mail) => {
                    return mail.id === this.mail.id;
                });
            });
    }
    onSelectedChange(event) {
        this.selected = event;
        this.mailService.toggleSelectedMail(this.mail.id);
    }
    /**
     * On toggle starred
     */
    onToggleStarred(event) {
        this.mail.starred = event;
        this.mailService.saveMail(this.mail);
    }
    ngOnDestroy() {
        this.onLabelsChanged.unsubscribe();
        this.onSelectedMailsChanged.unsubscribe();
    }
};
MailItemComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], MailItemComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.selected')
], MailItemComponent.prototype, "selected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MailItemComponent.prototype, "mail", void 0);
MailItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mail-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mail-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-list/mail-item/mail-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mail-item.component.scss */ "./src/app/content/apps/mail/mail-list/mail-item/mail-item.component.scss")).default]
    })
], MailItemComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/mail-list/mail-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-list/mail-list.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9tYWlsL21haWwtbGlzdC9tYWlsLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/mail/mail-list/mail-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-list/mail-list.component.ts ***!
  \********************************************************************/
/*! exports provided: MailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailListComponent", function() { return MailListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../mail.service */ "./src/app/content/apps/mail/mail.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");




let MailListComponent = class MailListComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.classlist = 'dt-module__content position-relative ps';
        this.mails = [];
        this.searchQuery = '';
    }
    ngOnInit() {
        // Subscribe to update mails on changes
        this.onMailsChanged = this.mailService.onMailsChanged
            .subscribe(mails => {
            this.mails = mails;
            setTimeout(() => {
                this.scrollToBottom();
            }, 300);
        });
        // Subscribe to update search keywords on changes
        this.onSearchQueryChanged = this.mailService.onSearchQueryChanged
            .subscribe(searchStr => {
            this.searchQuery = searchStr;
            if (searchStr) {
                this.mailService.setCurrentMail(null);
            }
        });
    }
    /**
     * On click mail
     * @param mailId
     */
    omMailClick(mailId) {
        this.mailService.setCurrentMail(mailId);
    }
    scrollToBottom() {
        if (this.directiveRef) {
            this.directiveRef.update();
            this.directiveRef.scrollToBottom();
        }
    }
    ngOnDestroy() {
        this.onMailsChanged.unsubscribe();
        this.onSearchQueryChanged.unsubscribe();
    }
};
MailListComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], MailListComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], { static: false })
], MailListComponent.prototype, "directiveRef", void 0);
MailListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mail-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mail-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-list/mail-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mail-list.component.scss */ "./src/app/content/apps/mail/mail-list/mail-list.component.scss")).default]
    })
], MailListComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/mail-sidebar/mail-sidebar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/apps/mail/mail-sidebar/mail-sidebar.component.ts ***!
  \**************************************************************************/
/*! exports provided: MailSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSidebarComponent", function() { return MailSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/settings/settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gaxon/mix/animations */ "./src/gaxon/mix/animations.ts");
/* harmony import */ var _drawer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../drawer.service */ "./src/app/content/apps/drawer.service.ts");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../mail.service */ "./src/app/content/apps/mail/mail.service.ts");







let MailSidebarComponent = class MailSidebarComponent {
    constructor(mailService, drawerService, settingService, router) {
        this.mailService = mailService;
        this.drawerService = drawerService;
        this.settingService = settingService;
        this.router = router;
        this.classNames = 'dt-module__sidebar';
        this.isOpen = false;
        this.contacts = [];
        this.labels = [];
        this.folders = [];
        this.filters = [];
        this.headerLessLayout = ['modern', 'back-office', 'back-office-mini'];
        this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
            this.drawer = drawer;
            this.activeMenu = this.drawer.activeMenu;
            if (!this.drawer.isOpen) {
                this.activeMenu = '';
            }
        });
        this.onSettingChanged = this.settingService.onSettingChanged.subscribe((newSettings) => {
            this.settings = newSettings;
            this.hiddenPageHeader = this.headerLessLayout.includes(this.settings.layout);
        });
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.isOpen = window.innerWidth > 767;
            }
        });
    }
    onResize(event) {
        this.isOpen = event.target.innerWidth > 767;
    }
    ngOnInit() {
        // Subscribe to update lebels on changes
        this.onLabelsChanged = this.mailService.onLabelsChanged
            .subscribe(labels => {
            this.labels = labels;
        });
        // Subscribe to update filters on changes
        this.onFiltersChanged = this.mailService.onFiltersChanged
            .subscribe(filters => {
            this.filters = filters;
        });
        // Subscribe to update folders on changes
        this.onFoldersChanged = this.mailService.onFoldersChanged
            .subscribe(folders => {
            this.folders = folders;
        });
        // Subscribe to update contacts on changes
        this.onContactsChanged = this.mailService.onContactsChanged
            .subscribe(contacts => {
            this.contacts = contacts;
        });
        // display app sidebar
        this.isOpen = window.innerWidth > 767;
    }
    /**
     * On Click Menu
     */
    onClickMenu(event, activeMenu) {
        event.preventDefault();
        this.drawer.activeMenu = this.activeMenu = activeMenu;
        this.drawer.isOpen = true;
        this.drawerService.update(this.drawer);
    }
    /**
     * Toggle collapse
     *
     * @param ev
     */
    toggleOpen(ev) {
        ev.preventDefault();
        this.isOpen = !this.isOpen;
    }
    onComposeMail() {
        this.mailService.onComposeMailClicked.next('');
    }
    /**
     * Toggle main navigation
     * @param event
     */
    toggleNavigation(event) {
        event.preventDefault();
        this.settings.activeNavDrawer = !this.settings.activeNavDrawer;
        this.settingService.setSettings(this.settings);
    }
    ngOnDestroy() {
        this.onContactsChanged.unsubscribe();
        this.onLabelsChanged.unsubscribe();
        this.onFiltersChanged.unsubscribe();
        this.onFoldersChanged.unsubscribe();
        this.onDrawerChanged.unsubscribe();
        this.onSettingChanged.unsubscribe();
    }
};
MailSidebarComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_6__["MailService"] },
    { type: _drawer_service__WEBPACK_IMPORTED_MODULE_5__["DrawerService"] },
    { type: _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], MailSidebarComponent.prototype, "classNames", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.active')
], MailSidebarComponent.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], MailSidebarComponent.prototype, "onResize", null);
MailSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mail-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mail-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail-sidebar/mail-sidebar.component.html")).default,
        animations: _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_4__["appAnimations"]
    })
], MailSidebarComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/mail.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/content/apps/mail/mail.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9tYWlsL21haWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/mail/mail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/content/apps/mail/mail.component.ts ***!
  \*****************************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _gaxon_services_dynamic_dom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gaxon/services/dynamic-dom.service */ "./src/gaxon/services/dynamic-dom.service.ts");
/* harmony import */ var _drawer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../drawer.service */ "./src/app/content/apps/drawer.service.ts");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail.service */ "./src/app/content/apps/mail/mail.service.ts");
/* harmony import */ var _helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper-widgets/contact-hover-card/contact-hover-card.component */ "./src/app/content/apps/mail/helper-widgets/contact-hover-card/contact-hover-card.component.ts");
/* harmony import */ var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mail-compose/mail-compose.component */ "./src/app/content/apps/mail/mail-compose/mail-compose.component.ts");







let MailComponent = class MailComponent {
    constructor(dynamicDom, mailService, drawerService) {
        this.dynamicDom = dynamicDom;
        this.mailService = mailService;
        this.drawerService = drawerService;
        this.hoverCard = this.dynamicDom.appendComponentToBody(_helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_5__["ContactHoverCardComponent"]);
        this.composeMail = this.dynamicDom.appendComponentToBody(_mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_6__["MailComposeComponent"]);
        this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
            this.drawer = drawer;
        });
    }
    ngOnInit() {
        this.onCurrentMailChanged =
            this.mailService.onCurrentMailChanged
                .subscribe(currentMail => {
                if (!currentMail) {
                    this.currentMail = null;
                }
                else {
                    this.currentMail = currentMail;
                }
            });
    }
    /**
     * Close Drawer
     * @param event
     */
    closeDrawer(event) {
        event.preventDefault();
        this.drawer.isOpen = false;
        this.drawerService.update(this.drawer);
    }
    ngOnDestroy() {
        this.dynamicDom.destroyCard(this.hoverCard);
        this.dynamicDom.destroyCard(this.composeMail);
        this.onCurrentMailChanged.unsubscribe();
        this.onDrawerChanged.unsubscribe();
    }
};
MailComponent.ctorParameters = () => [
    { type: _gaxon_services_dynamic_dom_service__WEBPACK_IMPORTED_MODULE_2__["DynamicDomService"] },
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"] },
    { type: _drawer_service__WEBPACK_IMPORTED_MODULE_3__["DrawerService"] }
];
MailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/mail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mail.component.scss */ "./src/app/content/apps/mail/mail.component.scss")).default]
    })
], MailComponent);



/***/ }),

/***/ "./src/app/content/apps/mail/mail.module.ts":
/*!**************************************************!*\
  !*** ./src/app/content/apps/mail/mail.module.ts ***!
  \**************************************************/
/*! exports provided: MailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mail.service */ "./src/app/content/apps/mail/mail.service.ts");
/* harmony import */ var _mail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mail.component */ "./src/app/content/apps/mail/mail.component.ts");
/* harmony import */ var _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mail-list/mail-list.component */ "./src/app/content/apps/mail/mail-list/mail-list.component.ts");
/* harmony import */ var _mail_list_mail_item_mail_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mail-list/mail-item/mail-item.component */ "./src/app/content/apps/mail/mail-list/mail-item/mail-item.component.ts");
/* harmony import */ var _mail_sidebar_mail_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mail-sidebar/mail-sidebar.component */ "./src/app/content/apps/mail/mail-sidebar/mail-sidebar.component.ts");
/* harmony import */ var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mail-compose/mail-compose.component */ "./src/app/content/apps/mail/mail-compose/mail-compose.component.ts");
/* harmony import */ var _mail_details_mail_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mail-details/mail-details.component */ "./src/app/content/apps/mail/mail-details/mail-details.component.ts");
/* harmony import */ var _helper_widgets_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helper-widgets/contact/contact.component */ "./src/app/content/apps/mail/helper-widgets/contact/contact.component.ts");
/* harmony import */ var _helper_widgets_badges_badges_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helper-widgets/badges/badges.component */ "./src/app/content/apps/mail/helper-widgets/badges/badges.component.ts");
/* harmony import */ var _helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helper-widgets/contact-hover-card/contact-hover-card.component */ "./src/app/content/apps/mail/helper-widgets/contact-hover-card/contact-hover-card.component.ts");
/* harmony import */ var _helper_widgets_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helper-widgets/search-bar/search-bar.component */ "./src/app/content/apps/mail/helper-widgets/search-bar/search-bar.component.ts");
/* harmony import */ var _mail_header_mail_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mail-header/mail-header.component */ "./src/app/content/apps/mail/mail-header/mail-header.component.ts");
/* harmony import */ var _module_header_module_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./module-header/module-header.component */ "./src/app/content/apps/mail/module-header/module-header.component.ts");
/* harmony import */ var _mail_details_details_header_details_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mail-details/details-header/details-header.component */ "./src/app/content/apps/mail/mail-details/details-header/details-header.component.ts");
/* harmony import */ var _mail_details_mail_conversation_mail_conversation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mail-details/mail-conversation/mail-conversation.component */ "./src/app/content/apps/mail/mail-details/mail-conversation/mail-conversation.component.ts");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./drawer/drawer.component */ "./src/app/content/apps/mail/drawer/drawer.component.ts");
/* harmony import */ var _drawer_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./drawer/notifications/notifications.component */ "./src/app/content/apps/mail/drawer/notifications/notifications.component.ts");
/* harmony import */ var _drawer_search_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./drawer/search/search.component */ "./src/app/content/apps/mail/drawer/search/search.component.ts");























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: true
};
const routes = [
    {
        path: 'filter/:filterHandle',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_6__["MailComponent"],
        resolve: {
            mails: _mail_service__WEBPACK_IMPORTED_MODULE_5__["MailService"]
        }
    },
    {
        path: 'filter/:filterHandle/:mailId',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_6__["MailComponent"],
        resolve: {
            mails: _mail_service__WEBPACK_IMPORTED_MODULE_5__["MailService"]
        }
    },
    {
        path: 'label/:labelHandle',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_6__["MailComponent"],
        resolve: {
            tasks: _mail_service__WEBPACK_IMPORTED_MODULE_5__["MailService"]
        }
    },
    {
        path: 'label/:labelHandle/:mailId',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_6__["MailComponent"],
        resolve: {
            mails: _mail_service__WEBPACK_IMPORTED_MODULE_5__["MailService"]
        }
    },
    {
        path: ':folderHandle',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_6__["MailComponent"],
        resolve: {
            mails: _mail_service__WEBPACK_IMPORTED_MODULE_5__["MailService"]
        }
    },
    {
        path: ':folderHandle/:mailId',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_6__["MailComponent"],
        resolve: {
            mails: _mail_service__WEBPACK_IMPORTED_MODULE_5__["MailService"]
        }
    },
    {
        path: '**',
        redirectTo: 'inbox'
    }
];
let MailModule = class MailModule {
};
MailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]
        ],
        declarations: [
            _mail_component__WEBPACK_IMPORTED_MODULE_6__["MailComponent"],
            _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_7__["MailListComponent"],
            _mail_list_mail_item_mail_item_component__WEBPACK_IMPORTED_MODULE_8__["MailItemComponent"],
            _mail_sidebar_mail_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["MailSidebarComponent"],
            _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_10__["MailComposeComponent"],
            _mail_details_mail_details_component__WEBPACK_IMPORTED_MODULE_11__["MailDetailsComponent"],
            _helper_widgets_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
            _helper_widgets_badges_badges_component__WEBPACK_IMPORTED_MODULE_13__["BadgesComponent"],
            _helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_14__["ContactHoverCardComponent"],
            _helper_widgets_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_15__["SearchBarComponent"],
            _mail_header_mail_header_component__WEBPACK_IMPORTED_MODULE_16__["MailHeaderComponent"],
            _module_header_module_header_component__WEBPACK_IMPORTED_MODULE_17__["ModuleHeaderComponent"],
            _mail_details_details_header_details_header_component__WEBPACK_IMPORTED_MODULE_18__["DetailsHeaderComponent"],
            _mail_details_mail_conversation_mail_conversation_component__WEBPACK_IMPORTED_MODULE_19__["MailConversationComponent"],
            _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_20__["DrawerComponent"],
            _drawer_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_21__["NotificationsComponent"],
            _drawer_search_search_component__WEBPACK_IMPORTED_MODULE_22__["SearchComponent"]
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ],
        entryComponents: [
            _helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_14__["ContactHoverCardComponent"],
            _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_10__["MailComposeComponent"]
        ]
    })
], MailModule);



/***/ }),

/***/ "./src/app/content/apps/mail/mail.service.ts":
/*!***************************************************!*\
  !*** ./src/app/content/apps/mail/mail.service.ts ***!
  \***************************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let MailService = class MailService {
    constructor(http, location) {
        this.http = http;
        this.location = location;
        this.mailsUrl = 'api/mail-list'; // URL to web api
        this.contactsUrl = 'api/mail-contacts'; // URL to web api
        this.labelsUrl = 'api/mail-labels'; // URL to web api
        this.filtersUrl = 'api/mail-filters'; // URL to web api
        this.foldersUrl = 'api/mail-folders'; // URL to web api
        this.selectedMails = [];
        this.currentUser = {
            name: 'Alex Dolgove',
            email: 'alex-dolgove@example.com',
            avatar: ''
        };
        this.onMailsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onSelectedMailsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onCurrentMailChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onComposeMailClicked = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.onContactHovered = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onLabelsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onFiltersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onFoldersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onSearchQueryChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        this.routeParams = route.params;
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getMails(),
                this.getContacts(),
                this.getLabels(),
                this.getFilters(),
                this.getFolders()
            ]).then(() => {
                if (this.routeParams.mailId) {
                    this.setCurrentMail(this.routeParams.mailId);
                }
                else {
                    this.setCurrentMail(null);
                }
                resolve();
            }, reject);
        });
    }
    /**
     * Get mails
     * @returns {Promise<Mail[]>}
     */
    getMails() {
        if (this.routeParams.folderHandle) {
            return this.getMailsByFolder(this.routeParams.folderHandle);
        }
        else if (this.routeParams.filterHandle) {
            return this.getMailsByFilter(this.routeParams.filterHandle);
        }
        else if (this.routeParams.labelHandle) {
            return this.getMailsByLabel(this.routeParams.labelHandle);
        }
        else {
            return this.getMailsList();
        }
    }
    /**
     * Get mails list
     * @returns {Promise<Mail[]>}
     */
    getMailsList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.mailsUrl)
                .subscribe((response) => {
                this.mails = response;
                this.onMailsChanged.next(this.mails);
                resolve(this.mails);
            }, reject);
        });
    }
    /**
     * Get mails by folder
     * @param folder
     * @returns {Promise<Mail[]>}
     */
    getMailsByFolder(folder) {
        return new Promise((resolve, reject) => {
            this.http.get(this.mailsUrl + '?folder=' + folder)
                .subscribe((response) => {
                this.mails = response;
                this.onMailsChanged.next(this.mails);
                resolve(this.mails);
            }, reject);
        });
    }
    /**
     * Get mails by filter
     * @param filter
     * @returns {Promise<Mail[]>}
     */
    getMailsByFilter(filter) {
        return new Promise((resolve, reject) => {
            this.http.get(this.mailsUrl + '?' + filter + '=true')
                .subscribe((mails) => {
                this.mails = mails;
                this.onMailsChanged.next(this.mails);
                resolve(this.mails);
            }, reject);
        });
    }
    /**
     * Get mails by label
     * @param handle
     * @returns {Promise<Mail[]>}
     */
    getMailsByLabel(handle) {
        return new Promise((resolve, reject) => {
            this.http.get(this.labelsUrl + '?handle=' + handle)
                .subscribe((labels) => {
                const labelId = labels[0].id;
                this.http.get(this.mailsUrl + '?labels=' + labelId)
                    .subscribe((mails) => {
                    this.mails = mails;
                    this.onMailsChanged.next(this.mails);
                    resolve(this.mails);
                }, reject);
            });
        });
    }
    /**
     * Get all labels
     * @returns {Promise<any[]>}
     */
    getLabels() {
        return new Promise((resolve, reject) => {
            this.http.get(this.labelsUrl)
                .subscribe((response) => {
                this.labels = response;
                this.onLabelsChanged.next(this.labels);
                resolve(this.labels);
            }, reject);
        });
    }
    /**
     * Get all filters
     * @returns {Promise<any[]>}
     */
    getFilters() {
        return new Promise((resolve, reject) => {
            this.http.get(this.filtersUrl)
                .subscribe((response) => {
                this.filters = response;
                this.onFiltersChanged.next(this.filters);
                resolve(this.filters);
            }, reject);
        });
    }
    /**
     * Get all folders
     * @returns {Promise<any[]>}
     */
    getFolders() {
        return new Promise((resolve, reject) => {
            this.http.get(this.foldersUrl)
                .subscribe((response) => {
                this.folders = response;
                this.onFoldersChanged.next(this.folders);
                resolve(this.folders);
            }, reject);
        });
    }
    /**
     * Get all contacts
     * @returns {Promise<Contact[]>}
     */
    getContacts() {
        return new Promise((resolve, reject) => {
            this.http.get(this.contactsUrl)
                .subscribe((response) => {
                this.contacts = response;
                this.onContactsChanged.next(this.contacts);
                resolve(this.contacts);
            }, reject);
        });
    }
    /**
     * Toggle selected mail by id
     * @param id
     */
    toggleSelectedMail(id) {
        // First, check if we already have that mail as selected...
        if (this.selectedMails.length > 0) {
            for (const mail of this.selectedMails) {
                // ...delete the selected mail
                if (mail.id === id) {
                    const index = this.selectedMails.indexOf(mail);
                    if (index !== -1) {
                        this.selectedMails.splice(index, 1);
                        // Trigger the next event
                        this.onSelectedMailsChanged.next(this.selectedMails);
                        // Return
                        return;
                    }
                }
            }
        }
        // If we don't have it, push as selected
        this.selectedMails.push(this.mails.find(mail => {
            return mail.id === id;
        }));
        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    }
    /**
     * Toggle select all
     */
    toggleSelectAll() {
        if (this.selectedMails.length > 0) {
            this.deselectMails();
        }
        else {
            this.selectMails();
        }
    }
    selectMails(filterParameter, filterValue) {
        this.selectedMails = [];
        // If there is no filter, select all mails
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedMails = this.mails.map(x => Object.assign({}, x));
        }
        else {
            this.selectedMails.push(...this.mails.filter(mail => {
                return mail[filterParameter] === filterValue;
            }));
        }
        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    }
    deselectMails() {
        this.selectedMails = [];
        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    }
    /**
     * Toggle label on selected mails
     * @param labelId
     */
    toggleLabelOnSelectedMails(labelId) {
        this.selectedMails.map(mail => {
            const index = mail.labels.indexOf(labelId);
            if (index !== -1) {
                mail.labels.splice(index, 1);
            }
            else {
                mail.labels.push(labelId);
            }
            this.saveMail(mail);
        });
    }
    /**
     * Set folder on selected mails
     * @param folderHandle
     */
    setFolderOnSelectedMails(folderHandle) {
        this.selectedMails.map(mail => {
            mail.folder = folderHandle;
            this.saveMail(mail);
        });
        this.deselectMails();
    }
    /**
     * Set current mail by id
     * @param id
     */
    setCurrentMail(id) {
        this.currentMail = this.mails.find(mail => {
            if (id) {
                return mail.id === id;
            }
            return false;
        });
        this.onCurrentMailChanged.next(this.currentMail);
        const taskParam = (this.currentMail) ? '/' + this.currentMail.id : '';
        const labelHandle = this.routeParams.labelHandle;
        const folderHandle = this.routeParams.folderHandle;
        const filterHandle = this.routeParams.filterHandle;
        const segments = this.location.path().split('/');
        if (labelHandle) {
            this.location.go(segments[1] + '/apps/mail/label/' + labelHandle + taskParam);
        }
        else if (filterHandle) {
            this.location.go(segments[1] + '/apps/mail/filter/' + filterHandle + taskParam);
        }
        else if (filterHandle) {
            this.location.go(segments[1] + '/apps/mail/' + folderHandle + taskParam);
        }
        else {
            this.location.go(segments[1] + '/apps/mail/inbox' + taskParam);
        }
    }
    /**
     * Toggle label on task
     * @param labelId
     * @param mail
     */
    toggleLabel(labelId, mail) {
        const index = mail.labels.indexOf(labelId);
        if (index !== -1) {
            mail.labels.splice(index, 1);
        }
        else {
            mail.labels.push(labelId);
        }
        this.saveMail(mail);
    }
    /**
     * Check mail has given label
     * @param labelId
     * @param mail
     * @return {boolean}
     */
    hasLabel(labelId, mail) {
        if (!mail.labels) {
            return false;
        }
        return mail.labels.indexOf(labelId) !== -1;
    }
    /**
     * Save a mail
     * @param {Mail} mail
     * @return {Promise<any>}
     */
    saveMail(mail) {
        return new Promise((resolve, reject) => {
            this.http.post(this.mailsUrl + '/' + mail.id, Object.assign({}, mail))
                .subscribe(response => {
                this.getMails().then(mails => {
                    resolve(mails);
                }, reject);
            });
        });
    }
};
MailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
MailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MailService);



/***/ }),

/***/ "./src/app/content/apps/mail/models/mail.model.ts":
/*!********************************************************!*\
  !*** ./src/app/content/apps/mail/models/mail.model.ts ***!
  \********************************************************/
/*! exports provided: Mail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Mail {
}


/***/ }),

/***/ "./src/app/content/apps/mail/module-header/module-header.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/content/apps/mail/module-header/module-header.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9tYWlsL21vZHVsZS1oZWFkZXIvbW9kdWxlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/apps/mail/module-header/module-header.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/content/apps/mail/module-header/module-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: ModuleHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleHeaderComponent", function() { return ModuleHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.service */ "./src/app/app.service.ts");



let ModuleHeaderComponent = class ModuleHeaderComponent {
    constructor(appService) {
        this.appService = appService;
        this.classlist = 'dt-module__header d-none d-md-flex';
        this.notifications = [];
        this.onNotificationsChanged = this.appService.onNotificationsChanged.subscribe((notifications) => {
            this.notifications = notifications;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.onNotificationsChanged.unsubscribe();
    }
};
ModuleHeaderComponent.ctorParameters = () => [
    { type: _app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], ModuleHeaderComponent.prototype, "classlist", void 0);
ModuleHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mail-module-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./module-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/mail/module-header/module-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./module-header.component.scss */ "./src/app/content/apps/mail/module-header/module-header.component.scss")).default]
    })
], ModuleHeaderComponent);



/***/ })

}]);
//# sourceMappingURL=mail-mail-module-es2015.js.map