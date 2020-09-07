(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-area/chat-area.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-area/chat-area.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-chat-header *ngIf=\"chatData.length > 0\" [contact]=\"currentContact\"></app-chat-header>\r\n\r\n<!-- Module Content -->\r\n<div class=\"dt-module__content position-relative\" perfectScrollbar>\r\n\r\n  <div *ngIf=\"chatData.length === 0\"\r\n       class=\"dt-module__content-inner h-100 d-flex flex-column justify-content-center align-items-center\">\r\n    <gx-icon name=\"message\" [fw]=\"true\" size=\"7x\" class=\"mb-2\"></gx-icon>\r\n    <h1 class=\"display-4\">Select User to start Chat</h1>\r\n\r\n    <button class=\"btn btn-primary d-md-none\"\r\n            (click)=\"toggleOpen($event)\">Select contact to start Chat\r\n    </button>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"chatData.length > 0\">\r\n\r\n    <!-- Module Content Inner -->\r\n    <div class=\"dt-module__content-inner\">\r\n\r\n      <!-- Chat Conversation -->\r\n      <div class=\"dt-chat__conversation\">\r\n\r\n        <app-chat-conversation *ngFor=\"let message of chatData; let i = index;\"\r\n                               [chatData]=\"chatData\"\r\n                               [message]=\"message\"\r\n                               [index]=\"i\"\r\n                               [operator]=\"operator\"\r\n                               [contact]=\"currentContact\"></app-chat-conversation>\r\n\r\n      </div>\r\n      <!-- /chat conversation -->\r\n\r\n    </div>\r\n    <!-- /module content inner -->\r\n\r\n  </ng-container>\r\n\r\n</div>\r\n<!-- /module content -->\r\n\r\n<app-chat-box *ngIf=\"chatData.length > 0\"\r\n              [operator]=\"operator\"></app-chat-box>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-area/chat-box/chat-box.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-area/chat-box/chat-box.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"chatForm\" (ngSubmit)=\"chatForm.valid && sendMessage()\">\r\n  <!-- Action Tools -->\r\n  <div class=\"action-tools\">\r\n    <button class=\"btn btn-primary dt-fab-btn\" type=\"submit\" [disabled]=\"chatForm.invalid\">\r\n      <gx-icon name=\"send-new\" size=\"xl\"></gx-icon>\r\n    </button>\r\n\r\n    <div class=\"dt-fab-btn dt-attachment-btn size-30\">\r\n      <input type=\"file\">\r\n      <gx-icon name=\"attach-v\"></gx-icon>\r\n    </div>\r\n  </div>\r\n  <!-- /action tools -->\r\n\r\n  <!-- Media -->\r\n  <bs-media-object [img]=\"{url: operator.thumb, alt: operator.name, classlist: 'dt-avatar mr-2'}\">\r\n    <!-- Text Area -->\r\n    <textarea class=\"form-control border-0 shadow-none bg-focus\"\r\n              rows=\"1\"\r\n              name=\"message\"\r\n              formControlName=\"message\"\r\n              (keydown)=\"onKeyDown($event)\"\r\n              required\r\n              placeholder=\"Write your comment...\"></textarea>\r\n    <!-- /text area -->\r\n  </bs-media-object>\r\n  <!-- /media -->\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-area/chat-conversation/chat-conversation.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-area/chat-conversation/chat-conversation.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"renderMessage\">\r\n\r\n  <gx-avatar [user]=\"avatar\" class=\"size-30\" [charLength]=\"\"></gx-avatar>\r\n\r\n  <!-- Messages -->\r\n  <div class=\"dt-chat__message-wrapper\">\r\n\r\n    <!-- Message -->\r\n    <div class=\"dt-chat__message\"\r\n         *ngFor=\"let item of messageList\" [innerHTML]=\"item.message | nl2br\"></div>\r\n    <!-- /message -->\r\n\r\n  </div>\r\n  <!-- /messages -->\r\n\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-area/chat-header/chat-header.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-area/chat-header/chat-header.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- User Detail  -->\r\n<div class=\"dt-avatar-wrapper\">\r\n  <div class=\"dt-avatar-status mr-2\">\r\n    <gx-avatar class=\"size-45\" [user]=\"contact\" [charLength]=\"0\"></gx-avatar>\r\n    <div class=\"dot-shape bg-success dot-shape-lg\"></div>\r\n  </div>\r\n  <span class=\"dt-avatar-info\">\r\n    <a href=\"javascript:void(0)\" class=\"dt-avatar-name\">{{contact.name}}</a>\r\n    <span class=\"d-inline-block\">{{contact.email}}</span>\r\n  </span>\r\n</div>\r\n<!-- User Detail  -->\r\n\r\n<!-- Dropdown -->\r\n<div class=\"ml-auto\" ngbDropdown placement=\"bottom-right\">\r\n  <a class=\"no-arrow text-dark\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n    <gx-icon name=\"horizontal-more\" size=\"lg\"></gx-icon>\r\n  </a>\r\n\r\n  <div ngbDropdownMenu>\r\n    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n      <gx-icon name=\"editors\" [fw]=\"true\"></gx-icon>\r\n      Edit\r\n    </a>\r\n    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n      <gx-icon name=\"trash\" [fw]=\"true\"></gx-icon>\r\n      Delete\r\n    </a>\r\n    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n      <gx-icon name=\"contacts\" [fw]=\"true\"></gx-icon>\r\n      Contact List</a>\r\n    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n      <gx-icon name=\"heart\" [fw]=\"true\"></gx-icon>\r\n      Favourite List\r\n    </a>\r\n  </div>\r\n</div>\r\n<!-- /dropdown -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-sidebar/chat-sidebar.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-sidebar/chat-sidebar.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-operator-profile (onMenuClick)=\"toggleOpen($event)\"></app-operator-profile>\r\n\r\n<!-- Sidebar Menu -->\r\n<div class=\"dt-module__sidebar-content position-relative\" [@collapseAppSidebar]=\"isOpen\">\r\n  <!-- Sidebar Content Inner -->\r\n  <div class=\"dt-module__sidebar-content-inner\">\r\n    <!-- Card Header -->\r\n    <div class=\"card-header card-nav bg-transparent border-bottom\">\r\n      <ul class=\"card-header-links nav nav-underline text-uppercase\" role=\"tablist\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\"\r\n             href=\"javascript:void(0)\"\r\n             [ngClass]=\"{'active':activeTab == 'recent'}\"\r\n             (click)=\"activeTab = 'recent'\">Recent</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\"\r\n             href=\"javascript:void(0)\"\r\n             [ngClass]=\"{'active':activeTab == 'contact'}\"\r\n             (click)=\"activeTab = 'contact'\">Contact</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!-- /card header -->\r\n\r\n    <!-- Tab Content-->\r\n    <div class=\"tab-content\">\r\n\r\n      <!-- Tab panel -->\r\n      <div class=\"tab-pane position-relative\" [ngClass]=\"{'active':activeTab == 'recent'}\" perfectScrollbar>\r\n\r\n        <!-- Contact Container -->\r\n        <div class=\"dt-contacts__container\">\r\n\r\n          <div class=\"dt-contacts__container-inner\">\r\n\r\n            <!-- Contacts -->\r\n            <div class=\"dt-contacts contacts-list\">\r\n\r\n              <!-- Contact Heading -->\r\n              <h5 class=\"dt-contact__heading\">Yesterday</h5>\r\n              <!-- /contact heading -->\r\n\r\n              <!-- Contact -->\r\n              <chat-contact *ngFor=\"let contact of recentChats\"\r\n                            [contact]=\"contact\"></chat-contact>\r\n              <!-- /contact -->\r\n\r\n            </div>\r\n            <!-- contacts -->\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <!-- /contact container -->\r\n\r\n      </div>\r\n      <!-- /tab panel -->\r\n\r\n      <!-- Tab panel -->\r\n      <div class=\"tab-pane position-relative\" [ngClass]=\"{'active':activeTab == 'contact'}\" perfectScrollbar>\r\n\r\n        <!-- Contact Container -->\r\n        <div class=\"dt-contacts__container\">\r\n\r\n          <div class=\"dt-contacts__container-inner\">\r\n\r\n            <!-- Contacts -->\r\n            <div class=\"dt-contacts contacts-list\">\r\n\r\n              <!-- Contact -->\r\n              <chat-contact *ngFor=\"let contact of contacts\"\r\n                            [contact]=\"contact\"></chat-contact>\r\n              <!-- /contact -->\r\n\r\n            </div>\r\n            <!-- contacts -->\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <!-- /contact container -->\r\n\r\n      </div>\r\n      <!-- /tab panel -->\r\n\r\n    </div>\r\n    <!-- /tab content-->\r\n  </div>\r\n  <!-- /sidebar content inner -->\r\n</div>\r\n<!-- /sidebar Menu -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-sidebar/operator-profile/operator-profile.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-sidebar/operator-profile/operator-profile.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- User Detail  -->\r\n<div *ngIf=\"profile\" class=\"dt-avatar-wrapper mb-8 d-none d-md-flex\">\r\n  <div class=\"dt-avatar-status\">\r\n    <gx-avatar [user]=\"profile\"></gx-avatar>\r\n    <div class=\"dot-shape bg-success dot-shape-lg\"></div>\r\n  </div>\r\n  <span class=\"dt-avatar-info\">\r\n    <a href=\"javascript:void(0)\" class=\"dt-avatar-name\">{{profile.name}}</a>\r\n    <span class=\"f-12 d-inline-block\">online</span>\r\n  </span>\r\n\r\n  <!-- Dropdown -->\r\n  <div class=\"ml-auto align-self-start mt-1\" ngbDropdown placement=\"bottom-right\">\r\n    <a class=\"no-arrow\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n      <gx-icon name=\"vertical-more\"></gx-icon>\r\n    </a>\r\n\r\n    <div ngbDropdownMenu>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"editors\" [fw]=\"true\"></gx-icon>\r\n        Edit\r\n      </a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"contacts\" [fw]=\"true\"></gx-icon>\r\n        Contact List</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"heart\" [fw]=\"true\"></gx-icon>\r\n        Favourite List\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <!-- /dropdown -->\r\n</div>\r\n<!-- User Detail  -->\r\n\r\n<!-- App Quick Menu -->\r\n<div class=\"quick-menu-list\">\r\n  <a *ngIf=\"hiddenPageHeader\"\r\n     href=\"javascript:void(0)\"\r\n     class=\"quick-menu mr-auto d-md-none\"\r\n     [ngClass]=\"{'active':settings.activeNavDrawer}\"\r\n     (click)=\"toggleNavigation($event)\">\r\n    <gx-icon name=\"menu\"></gx-icon>\r\n  </a>\r\n\r\n  <!-- Search Box -->\r\n  <form class=\"search-box d-md-none\" *ngIf=\"!hiddenPageHeader\">\r\n    <input class=\"form-control\" type=\"search\" id=\"address\" name=\"address\" placeholder=\"Search in app...\">\r\n    <button type=\"submit\" class=\"search-icon\">\r\n      <gx-icon name=\"search\" size=\"lg\"></gx-icon>\r\n    </button>\r\n  </form>\r\n  <!-- /search box -->\r\n\r\n  <a href=\"javascript:void(0)\"\r\n     class=\"quick-menu\"\r\n     [ngClass]=\"{'active':activeMenu == 'search', 'd-none d-md-block': !hiddenPageHeader}\"\r\n     (click)=\"onClickMenu($event, 'search')\">\r\n    <gx-icon name=\"search\"></gx-icon>\r\n  </a>\r\n\r\n  <a href=\"javascript:void(0)\"\r\n     class=\"quick-menu\"\r\n     [ngClass]=\"{'active':activeMenu == 'notifications'}\"\r\n     (click)=\"onClickMenu($event, 'notifications')\">\r\n    <gx-icon name=\"notification2\"></gx-icon>\r\n  </a>\r\n\r\n  <!-- Dropdown -->\r\n  <div class=\"quick-menu\" ngbDropdown placement=\"bottom-right\">\r\n\r\n    <!-- Dropdown Button -->\r\n    <a href=\"javascript:void(0)\" class=\"no-arrow\" ngbDropdownToggle>\r\n      <gx-icon name=\"circle-add-o\"></gx-icon>\r\n    </a>\r\n    <!-- /dropdown button -->\r\n\r\n    <!-- Dropdown Menu -->\r\n    <div ngbDropdownMenu>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Add New Group</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Add New Chat</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Add New Contact</a>\r\n    </div>\r\n    <!-- /dropdown menu -->\r\n\r\n  </div>\r\n  <!-- /dropdown -->\r\n\r\n  <div class=\"quick-menu d-md-none\" ngbDropdown placement=\"bottom-right\">\r\n    <a class=\"no-arrow\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n      <gx-avatar [user]=\"profile\" class=\"size-25\"></gx-avatar>\r\n    </a>\r\n\r\n    <div ngbDropdownMenu>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"editors\" [fw]=\"true\"></gx-icon>\r\n        Edit\r\n      </a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"contacts\" [fw]=\"true\"></gx-icon>\r\n        Contact List</a>\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"heart\" [fw]=\"true\"></gx-icon>\r\n        Favourite List\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <a href=\"javascript:void(0)\"\r\n     class=\"quick-menu d-md-none\"\r\n     [ngClass]=\"{'active':isOpen}\"\r\n     (click)=\"toggleOpen($event)\">\r\n    <gx-icon name=\"{{hiddenPageHeader? 'vertical-more': 'menu'}}\"></gx-icon>\r\n  </a>\r\n</div>\r\n<!-- /app quick menu -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-12\">\r\n\r\n    <!-- Module -->\r\n    <div class=\"dt-module dt-module--chat\">\r\n\r\n      <!-- Module sidebar -->\r\n      <app-chat-sidebar></app-chat-sidebar>\r\n      <!-- /module sidebar -->\r\n\r\n      <!-- Module Container -->\r\n      <app-chat-area></app-chat-area>\r\n      <!-- /module Container -->\r\n\r\n      <!-- Module Drawer -->\r\n      <chat-drawer [ngClass]=\"{'open':drawer.isOpen}\"></chat-drawer>\r\n      <div class=\"dt-backdrop\" *ngIf=\"drawer.isOpen\" (click)=\"closeDrawer($event)\"></div>\r\n      <!-- Module Drawer -->\r\n\r\n    </div>\r\n    <!-- /module -->\r\n\r\n  </div>\r\n  <!-- /grid Item -->\r\n\r\n</div>\r\n<!-- /grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/drawer/drawer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/drawer/drawer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Module Drawer Inner -->\r\n<div class=\"dt-module__drawer-inner\">\r\n\r\n  <div class=\"dt-module__drawer-header\">\r\n    <a href=\"javascript:void(0)\" class=\"d-inline-block\" (click)=\"closeDrawer($event)\">\r\n      <gx-icon name=\"arrow-long-left\" size=\"2x\" class=\"mr-3\"></gx-icon>\r\n      <span class=\"align-middle\">Back</span>\r\n    </a>\r\n  </div>\r\n\r\n  <!-- Actionable Drawer -->\r\n  <div class=\"dt-actionable-drawer\">\r\n\r\n    <!-- Menu Bar -->\r\n    <div class=\"dt-action-bar\">\r\n\r\n      <!-- Action Menu -->\r\n      <ul class=\"dt-action-nav\">\r\n\r\n        <!-- Menu Item -->\r\n        <li class=\"dt-action-nav__item\" [ngClass]=\"{'active':activeMenu == 'notifications'}\">\r\n          <a href=\"javascript:void(0)\"\r\n             class=\"dt-action-nav__link\"\r\n             (click)=\"onSelectMenu($event, 'notifications')\">\r\n            <gx-icon name=\"notification2\" [fw]=\"true\"></gx-icon>\r\n          </a>\r\n        </li>\r\n        <!-- /menu item -->\r\n\r\n        <!-- Menu Item -->\r\n        <li class=\"dt-action-nav__item\" [ngClass]=\"{'active':activeMenu == 'search'}\">\r\n          <a href=\"javascript:void(0)\"\r\n             class=\"dt-action-nav__link\"\r\n             (click)=\"onSelectMenu($event, 'search')\">\r\n            <gx-icon name=\"search\" [fw]=\"true\"></gx-icon>\r\n          </a>\r\n        </li>\r\n        <!-- /menu item -->\r\n\r\n        <!-- Menu Item -->\r\n        <li class=\"dt-action-nav__item\" ngbDropdown>\r\n          <!-- Dropdown Button -->\r\n          <a href=\"javascript:void(0)\" class=\"dt-action-nav__link no-arrow\" ngbDropdownToggle>\r\n            <gx-icon name=\"circle-add-o\"></gx-icon>\r\n          </a>\r\n          <!-- /dropdown button -->\r\n\r\n          <!-- Dropdown Menu -->\r\n          <div ngbDropdownMenu>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Add New Group</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Add New Chat</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Add New Contact</a>\r\n          </div>\r\n          <!-- /dropdown menu -->\r\n        </li>\r\n        <!-- /menu item -->\r\n\r\n      </ul>\r\n      <!-- /action menu -->\r\n\r\n    </div>\r\n    <!-- /menu bar -->\r\n\r\n    <!-- Drawer Content Area -->\r\n    <div class=\"dt-action-content-wrapper\">\r\n\r\n      <gx-loader [ngClass]=\"{'active':showLoader}\"></gx-loader>\r\n      <div class=\"dt-action-content fade position-relative\" [ngClass]=\"{'show':!showLoader && activeMenu == 'search'}\" perfectScrollbar>\r\n        <todo-search></todo-search>\r\n      </div>\r\n      <div class=\"dt-action-content fade position-relative\" [ngClass]=\"{'show':!showLoader && activeMenu == 'notifications'}\" perfectScrollbar>\r\n        <todo-notifications></todo-notifications>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- /drawer content area -->\r\n\r\n  </div>\r\n  <!-- /actionable drawer -->\r\n\r\n</div>\r\n<!-- /module drawer inner -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/drawer/notifications/notifications.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/drawer/notifications/notifications.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex align-items-center mb-6\">\r\n  <h5 class=\"mb-0\">Notifications ({{notifications.length}})</h5>\r\n\r\n  <div class=\"ml-auto action-area\">\r\n    <a href=\"javascript:void(0)\">Mark All Read</a>\r\n\r\n    <!-- Dropdown -->\r\n    <span class=\"ml-2 d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n      <a class=\"no-arrow\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n        <gx-icon name=\"settings\" size=\"lg\" class=\"text-light-gray\"></gx-icon>\r\n      </a>\r\n\r\n      <span ngbDropdownMenu>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"editors\" [fw]=\"true\"></gx-icon>\r\n          Edit\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"contacts\" [fw]=\"true\"></gx-icon>\r\n          Contact List</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"heart\" [fw]=\"true\"></gx-icon>\r\n          Favourite List\r\n        </a>\r\n      </span>\r\n    </span>\r\n    <!-- /dropdown -->\r\n  </div>\r\n</div>\r\n\r\n<!-- Media -->\r\n<a href=\"javascript:void(0)\" class=\"media\" *ngFor=\"let notification of notifications\">\r\n\r\n  <!-- Avatar -->\r\n  <gx-avatar [user]=\"notification\" [charLength]=\"0\" class=\"mr-3\"></gx-avatar>\r\n  <!-- avatar -->\r\n\r\n  <!-- Media Body -->\r\n  <span class=\"media-body\">\r\n    <span class=\"message\" [innerHTML]=\"notification.message\"></span>\r\n    <span class=\"meta-date\">\r\n      <gx-icon *ngIf=\"notification.icon.name\"\r\n               [name]=\"notification.icon.name\"\r\n               [ngClass]=\"notification.icon.color\"\r\n               [fw]=\"true\" class=\"mr-1\"></gx-icon>\r\n      {{notification.time}}\r\n    </span>\r\n  </span>\r\n  <!-- /media body -->\r\n\r\n</a>\r\n<!-- /media -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/drawer/search/search.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/drawer/search/search.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Search Box -->\r\n<form class=\"search-box right-side-icon mw-100 mb-8\">\r\n  <input type=\"search\"\r\n         class=\"form-control form-control-lg\"\r\n         [formControl]=\"searchQuery\"\r\n         placeholder=\"Search in mails...\">\r\n  <button type=\"submit\" class=\"search-icon\"><gx-icon name=\"search\" size=\"lg\"></gx-icon></button>\r\n</form>\r\n<!-- /search box -->\r\n\r\n<h4>Recently Viewed</h4>\r\n\r\n<!-- Search Result-->\r\n<div class=\"search-result\" *ngFor=\"let message of messages | filter: searchText\">\r\n  <a href=\"javascript:void(0)\" class=\"dt-avatar-wrapper\">\r\n    <!-- Avatar -->\r\n    <gx-avatar [user]=\"message\" [charLength]=\"0\" class=\"font-italic\"></gx-avatar>\r\n    <!-- /avatar -->\r\n\r\n    <!-- Avatar Info -->\r\n    <span class=\"dt-avatar-info\">\r\n      <span class=\"dt-avatar-name\">{{message.name}}</span>\r\n      <span class=\"f-12\" [innerHTML]=\"message.message\"></span>\r\n    </span>\r\n    <!-- /avatar info -->\r\n  </a>\r\n</div>\r\n<!-- /search result-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/helper-widgets/contact-hover-card/contact-hover-card.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/helper-widgets/contact-hover-card/contact-hover-card.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"contact && isVisible\">\r\n  <div class=\"p-4\">\r\n    <div class=\"dt-avatar-wrapper mb-3\">\r\n      <gx-avatar [user]=\"contact\" [charLength]=\"0\" class=\"size-50\"></gx-avatar>\r\n\r\n      <div class=\"dt-avatar-info\">\r\n        <span class=\"dt-avatar-name h4 mb-1\">{{contact.name}}</span>\r\n        <span class=\"dt-avatar-desc f-12\">{{contact.email}}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mb-1\">\r\n      <gx-icon name=\"maps\" [fw]=\"true\" class=\"mr-1\"></gx-icon>\r\n      <span class=\"f-12\">{{contact.location}}</span>\r\n    </div>\r\n\r\n    <div>\r\n      <gx-icon name=\"contacts\" [fw]=\"true\" class=\"mr-1\"></gx-icon>\r\n      <span class=\"f-12\">{{contact.connections}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"px-4 py-2 border-top d-flex justify-content-between\">\r\n    <a href=\"javascript:void(0)\" class=\"card-link\">Add to Contacts</a>\r\n    <div class=\"ml-2 ml-sm-10\">\r\n      <a class=\"mr-1\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"mail\" [fw]=\"true\" size=\"xl\"></gx-icon>\r\n      </a>\r\n      <a class=\"mr-1\" href=\"javascript:void(0)\">\r\n        <gx-icon name=\"tag-o\" [fw]=\"true\" size=\"xl\"></gx-icon>\r\n      </a>\r\n      <a href=\"javascript:void(0)\">\r\n        <gx-icon name=\"chat-app\" [fw]=\"true\" size=\"xl\"></gx-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/helper-widgets/contact/contact.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/helper-widgets/contact/contact.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<gx-avatar [user]=\"contact\" [charLength]=\"0\"></gx-avatar>\r\n<!-- Contact Info -->\r\n<div class=\"dt-contact__info\">\r\n  <h4 class=\"dt-contact__title\">{{contact.name}}</h4>\r\n  <p class=\"dt-contact__desc\">{{contact.bio}}</p>\r\n</div>\r\n<!-- /contact info -->\r\n");

/***/ }),

/***/ "./src/app/content/apps/chat/chat-area/chat-area.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/content/apps/chat/chat-area/chat-area.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9jaGF0L2NoYXQtYXJlYS9jaGF0LWFyZWEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/chat/chat-area/chat-area.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/content/apps/chat/chat-area/chat-area.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatAreaComponent", function() { return ChatAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../chat.service */ "./src/app/content/apps/chat/chat.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");




let ChatAreaComponent = class ChatAreaComponent {
    constructor(eleRef, chatService) {
        this.eleRef = eleRef;
        this.chatService = chatService;
        this.chatData = [];
        this.isOpen = false;
        this.eleRef.nativeElement.classList.add('dt-module__container');
        // Subscribe to update conversation on changes
        this.onChatConversationChanged = this.chatService.onChatConversationChanged.subscribe((conversation) => {
            if (conversation.id && conversation.conversationData.length > 0) {
                this.chatData = conversation.conversationData;
                setTimeout(() => {
                    this.scrollToBottom();
                }, 300);
            }
        });
        // Subscribe to update conversation on changes
        this.onCurrentContactChanged = this.chatService.onCurrentContactChanged.subscribe((contact) => {
            this.currentContact = contact;
        });
        // Subscribe to update operator on changes
        this.onChatOperatorChanged = this.chatService.onChatOperatorChanged.subscribe((operator) => {
            this.operator = operator;
        });
        this.toggleChatSidebarService = this.chatService.toggleChatSubject.subscribe(toggleChatSidebar => {
            this.isOpen = toggleChatSidebar;
        });
    }
    ngOnInit() {
    }
    scrollToBottom() {
        if (this.directiveRef) {
            this.directiveRef.update();
            this.directiveRef.scrollToBottom();
        }
    }
    ngOnDestroy() {
        this.onChatConversationChanged.unsubscribe();
        this.onCurrentContactChanged.unsubscribe();
        this.toggleChatSidebarService.unsubscribe();
        this.onChatOperatorChanged.unsubscribe();
    }
    onResize(event) {
        this.isOpen = event.target.innerWidth > 767;
        this.chatService.toggleChatSubject.next(this.isOpen);
    }
    toggleOpen(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
        this.chatService.toggleChatSubject.next(this.isOpen);
    }
};
ChatAreaComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], { static: false })
], ChatAreaComponent.prototype, "directiveRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], ChatAreaComponent.prototype, "onResize", null);
ChatAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-area',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-area/chat-area.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-area.component.scss */ "./src/app/content/apps/chat/chat-area/chat-area.component.scss")).default]
    })
], ChatAreaComponent);



/***/ }),

/***/ "./src/app/content/apps/chat/chat-area/chat-box/chat-box.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/content/apps/chat/chat-area/chat-box/chat-box.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChatBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function() { return ChatBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../chat.service */ "./src/app/content/apps/chat/chat.service.ts");




let ChatBoxComponent = class ChatBoxComponent {
    constructor(chatService, formBuilder) {
        this.chatService = chatService;
        this.formBuilder = formBuilder;
        this.classlist = 'd-block add-comment-box';
    }
    ngOnInit() {
        this.createForm();
    }
    /**
     * Create form for Task
     */
    createForm() {
        this.chatForm = this.formBuilder.group({
            senderId: this.operator.id,
            message: '',
            sentAt: new Date()
        });
    }
    /**
     * Call function on keydown
     * @param event
     */
    onKeyDown(event) {
        if (event.keyCode === 13 && this.chatForm.valid) {
            if (!event.shiftKey) {
                this.sendMessage();
                event.preventDefault();
            }
            // rest of your code
        }
        else if (event.keyCode === 13) {
            event.preventDefault();
        }
    }
    /**
     * Send Chat message
     */
    sendMessage() {
        this.chatForm.value.sentAt = new Date();
        if (this.chatService.saveConversation(this.chatForm.value)) {
            this.createForm();
        }
    }
};
ChatBoxComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], ChatBoxComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatBoxComponent.prototype, "operator", void 0);
ChatBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-area/chat-box/chat-box.component.html")).default
    })
], ChatBoxComponent);



/***/ }),

/***/ "./src/app/content/apps/chat/chat-area/chat-conversation/chat-conversation.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/content/apps/chat/chat-area/chat-conversation/chat-conversation.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ChatConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatConversationComponent", function() { return ChatConversationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let storedMessages = [];
let ChatConversationComponent = class ChatConversationComponent {
    constructor(eleRef) {
        this.eleRef = eleRef;
        this.replied = false;
        this.renderMessage = true;
        this.messageList = [];
    }
    ngOnInit() {
        if (this.operator.id === this.message.senderId) {
            this.replied = true;
            this.avatar = this.operator;
        }
        else {
            this.replied = false;
            this.avatar = this.contact;
        }
        if (this.index > 0) {
            this.prevMessage = this.chatData[this.index - 1];
        }
        if (this.index < (this.chatData.length - 1)) {
            this.nextMessage = this.chatData[this.index + 1];
        }
        if (this.nextMessage) {
            if (this.nextMessage && this.nextMessage.senderId === this.message.senderId) {
                storedMessages.push(this.message);
                this.renderMessage = false;
            }
            else if (this.nextMessage.senderId !== this.message.senderId) {
                storedMessages.push(this.message);
                this.messageList = storedMessages;
                storedMessages = [];
                this.renderMessage = true;
            }
        }
        else {
            storedMessages.push(this.message);
            this.messageList = storedMessages;
            storedMessages = [];
            this.renderMessage = true;
        }
        if (this.renderMessage) {
            this.eleRef.nativeElement.classList.add('dt-chat__item');
        }
        else {
            this.eleRef.nativeElement.style.display = 'none';
        }
    }
};
ChatConversationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.reply')
], ChatConversationComponent.prototype, "replied", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatConversationComponent.prototype, "chatData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatConversationComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatConversationComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatConversationComponent.prototype, "operator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatConversationComponent.prototype, "contact", void 0);
ChatConversationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-conversation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-conversation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-area/chat-conversation/chat-conversation.component.html")).default
    })
], ChatConversationComponent);



/***/ }),

/***/ "./src/app/content/apps/chat/chat-area/chat-header/chat-header.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/content/apps/chat/chat-area/chat-header/chat-header.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9jaGF0L2NoYXQtYXJlYS9jaGF0LWhlYWRlci9jaGF0LWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/apps/chat/chat-area/chat-header/chat-header.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/content/apps/chat/chat-area/chat-header/chat-header.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChatHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatHeaderComponent", function() { return ChatHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatHeaderComponent = class ChatHeaderComponent {
    constructor() {
        this.classlist = 'dt-module__header';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], ChatHeaderComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatHeaderComponent.prototype, "contact", void 0);
ChatHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-area/chat-header/chat-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-header.component.scss */ "./src/app/content/apps/chat/chat-area/chat-header/chat-header.component.scss")).default]
    })
], ChatHeaderComponent);



/***/ }),

/***/ "./src/app/content/apps/chat/chat-sidebar/chat-sidebar.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/content/apps/chat/chat-sidebar/chat-sidebar.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9jaGF0L2NoYXQtc2lkZWJhci9jaGF0LXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/chat/chat-sidebar/chat-sidebar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/apps/chat/chat-sidebar/chat-sidebar.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChatSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSidebarComponent", function() { return ChatSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../chat.service */ "./src/app/content/apps/chat/chat.service.ts");
/* harmony import */ var _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gaxon/mix/animations */ "./src/gaxon/mix/animations.ts");




let ChatSidebarComponent = class ChatSidebarComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.classNames = 'dt-module__sidebar';
        this.isOpen = false;
        this.contacts = [];
        this.recentChats = [];
        this.activeTab = 'recent';
        // Subscribe to update contacts on changes
        this.onContactsChanged = this.chatService.onContactsChanged.subscribe((contacts) => {
            this.contacts = contacts;
        });
        // Subscribe to update recentChats on changes
        this.onRecentChatsChanged = this.chatService.onRecentChatsChanged.subscribe((recentChats) => {
            this.recentChats = recentChats;
        });
        this.toggleChatSidebarService = this.chatService.toggleChatSubject.subscribe(toggleChatSidebar => {
            this.isOpen = toggleChatSidebar;
        });
        // Subscribe to update conversation on changes
        this.onChatConversationChanged = this.chatService.onChatConversationChanged.subscribe((conversation) => {
            this.isOpen = window.innerWidth > 767;
            this.chatService.toggleChatSubject.next(this.isOpen);
        });
    }
    ngOnInit() {
        // display app sidebar
        this.isOpen = window.innerWidth > 767;
    }
    onResize(event) {
        this.isOpen = event.target.innerWidth > 767;
        this.chatService.toggleChatSubject.next(this.isOpen);
    }
    /**
     * Toggle collapse
     *
     * @param ev
     */
    toggleOpen(event) {
        this.isOpen = event;
        this.chatService.toggleChatSubject.next(this.isOpen);
    }
    ngOnDestroy() {
        this.onContactsChanged.unsubscribe();
        this.onRecentChatsChanged.unsubscribe();
        this.toggleChatSidebarService.unsubscribe();
        this.onChatConversationChanged.unsubscribe();
    }
};
ChatSidebarComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], ChatSidebarComponent.prototype, "classNames", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.active')
], ChatSidebarComponent.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabset', { static: false })
], ChatSidebarComponent.prototype, "tabset", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], ChatSidebarComponent.prototype, "onResize", null);
ChatSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-sidebar/chat-sidebar.component.html")).default,
        animations: _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_3__["appAnimations"],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-sidebar.component.scss */ "./src/app/content/apps/chat/chat-sidebar/chat-sidebar.component.scss")).default]
    })
], ChatSidebarComponent);



/***/ }),

/***/ "./src/app/content/apps/chat/chat-sidebar/operator-profile/operator-profile.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/apps/chat/chat-sidebar/operator-profile/operator-profile.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9jaGF0L2NoYXQtc2lkZWJhci9vcGVyYXRvci1wcm9maWxlL29wZXJhdG9yLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/chat/chat-sidebar/operator-profile/operator-profile.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/content/apps/chat/chat-sidebar/operator-profile/operator-profile.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: OperatorProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorProfileComponent", function() { return OperatorProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/settings/settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../chat.service */ "./src/app/content/apps/chat/chat.service.ts");
/* harmony import */ var _drawer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../drawer.service */ "./src/app/content/apps/drawer.service.ts");





let OperatorProfileComponent = class OperatorProfileComponent {
    constructor(chatService, drawerService, settingService) {
        this.chatService = chatService;
        this.drawerService = drawerService;
        this.settingService = settingService;
        this.classlist = 'dt-module__sidebar-header pb-0';
        this.isOpen = false;
        this.headerLessLayout = ['modern', 'back-office', 'back-office-mini'];
        this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
            this.drawer = drawer;
            this.activeMenu = this.drawer.activeMenu;
            if (!this.drawer.isOpen) {
                this.activeMenu = '';
            }
        });
        this.toggleChatSidebarService = this.chatService.toggleChatSubject.subscribe(toggleChatSidebar => {
            this.isOpen = toggleChatSidebar;
        });
        // Subscribe to update operator on changes
        this.onChatOperatorChanged = this.chatService.onChatOperatorChanged.subscribe((operator) => {
            this.profile = operator;
        });
        this.onSettingChanged = this.settingService.onSettingChanged.subscribe((newSettings) => {
            this.settings = newSettings;
            this.hiddenPageHeader = this.headerLessLayout.includes(this.settings.layout);
        });
    }
    ngOnInit() {
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
        this.chatService.toggleChatSubject.next(this.isOpen);
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
        this.onChatOperatorChanged.unsubscribe();
        this.onDrawerChanged.unsubscribe();
        this.toggleChatSidebarService.unsubscribe();
        this.onSettingChanged.unsubscribe();
    }
};
OperatorProfileComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
    { type: _drawer_service__WEBPACK_IMPORTED_MODULE_4__["DrawerService"] },
    { type: _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], OperatorProfileComponent.prototype, "classlist", void 0);
OperatorProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-operator-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./operator-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat-sidebar/operator-profile/operator-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./operator-profile.component.scss */ "./src/app/content/apps/chat/chat-sidebar/operator-profile/operator-profile.component.scss")).default]
    })
], OperatorProfileComponent);



/***/ }),

/***/ "./src/app/content/apps/chat/chat.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/content/apps/chat/chat.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/chat/chat.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/content/apps/chat/chat.component.ts ***!
  \*****************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _gaxon_services_dynamic_dom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gaxon/services/dynamic-dom.service */ "./src/gaxon/services/dynamic-dom.service.ts");
/* harmony import */ var _helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-widgets/contact-hover-card/contact-hover-card.component */ "./src/app/content/apps/chat/helper-widgets/contact-hover-card/contact-hover-card.component.ts");
/* harmony import */ var _drawer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../drawer.service */ "./src/app/content/apps/drawer.service.ts");





let ChatComponent = class ChatComponent {
    constructor(dynamicDom, drawerService) {
        this.dynamicDom = dynamicDom;
        this.drawerService = drawerService;
        this.hoverCard = this.dynamicDom.appendComponentToBody(_helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_3__["ContactHoverCardComponent"]);
        this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
            this.drawer = drawer;
        });
    }
    ngOnInit() {
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
        this.onDrawerChanged.unsubscribe();
    }
};
ChatComponent.ctorParameters = () => [
    { type: _gaxon_services_dynamic_dom_service__WEBPACK_IMPORTED_MODULE_2__["DynamicDomService"] },
    { type: _drawer_service__WEBPACK_IMPORTED_MODULE_4__["DrawerService"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/chat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.scss */ "./src/app/content/apps/chat/chat.component.scss")).default]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/content/apps/chat/chat.module.ts":
/*!**************************************************!*\
  !*** ./src/app/content/apps/chat/chat.module.ts ***!
  \**************************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.service */ "./src/app/content/apps/chat/chat.service.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat.component */ "./src/app/content/apps/chat/chat.component.ts");
/* harmony import */ var _chat_sidebar_chat_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-sidebar/chat-sidebar.component */ "./src/app/content/apps/chat/chat-sidebar/chat-sidebar.component.ts");
/* harmony import */ var _chat_sidebar_operator_profile_operator_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat-sidebar/operator-profile/operator-profile.component */ "./src/app/content/apps/chat/chat-sidebar/operator-profile/operator-profile.component.ts");
/* harmony import */ var _chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-area/chat-area.component */ "./src/app/content/apps/chat/chat-area/chat-area.component.ts");
/* harmony import */ var _chat_area_chat_conversation_chat_conversation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat-area/chat-conversation/chat-conversation.component */ "./src/app/content/apps/chat/chat-area/chat-conversation/chat-conversation.component.ts");
/* harmony import */ var _chat_area_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat-area/chat-box/chat-box.component */ "./src/app/content/apps/chat/chat-area/chat-box/chat-box.component.ts");
/* harmony import */ var _helper_widgets_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helper-widgets/contact/contact.component */ "./src/app/content/apps/chat/helper-widgets/contact/contact.component.ts");
/* harmony import */ var _helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helper-widgets/contact-hover-card/contact-hover-card.component */ "./src/app/content/apps/chat/helper-widgets/contact-hover-card/contact-hover-card.component.ts");
/* harmony import */ var _chat_area_chat_header_chat_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chat-area/chat-header/chat-header.component */ "./src/app/content/apps/chat/chat-area/chat-header/chat-header.component.ts");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./drawer/drawer.component */ "./src/app/content/apps/chat/drawer/drawer.component.ts");
/* harmony import */ var _drawer_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./drawer/notifications/notifications.component */ "./src/app/content/apps/chat/drawer/notifications/notifications.component.ts");
/* harmony import */ var _drawer_search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./drawer/search/search.component */ "./src/app/content/apps/chat/drawer/search/search.component.ts");



















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: true
};
const routes = [
    {
        path: '',
        component: _chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"],
        resolve: {
            list: _chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"]
        }
    }
];
let ChatModule = class ChatModule {
};
ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"]
        ],
        declarations: [
            _chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"],
            _chat_sidebar_chat_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["ChatSidebarComponent"],
            _chat_sidebar_operator_profile_operator_profile_component__WEBPACK_IMPORTED_MODULE_9__["OperatorProfileComponent"],
            _chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_10__["ChatAreaComponent"],
            _chat_area_chat_conversation_chat_conversation_component__WEBPACK_IMPORTED_MODULE_11__["ChatConversationComponent"],
            _chat_area_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_12__["ChatBoxComponent"],
            _helper_widgets_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
            _helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_14__["ContactHoverCardComponent"],
            _chat_area_chat_header_chat_header_component__WEBPACK_IMPORTED_MODULE_15__["ChatHeaderComponent"],
            _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_16__["DrawerComponent"],
            _drawer_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_17__["NotificationsComponent"],
            _drawer_search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"]
        ],
        entryComponents: [
            _helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_14__["ContactHoverCardComponent"]
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ]
    })
], ChatModule);



/***/ }),

/***/ "./src/app/content/apps/chat/chat.service.ts":
/*!***************************************************!*\
  !*** ./src/app/content/apps/chat/chat.service.ts ***!
  \***************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ChatService = class ChatService {
    constructor(http, location) {
        this.http = http;
        this.location = location;
        this.contactsUrl = 'api/chat-contacts'; // URL to web api
        this.chatConversationUrl = 'api/chat-conversation'; // URL to web api
        this.chatOperatorUrl = 'api/chat-operator'; // URL to web api
        this.toggleChatSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onCurrentContactChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.onRecentChatsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onChatConversationChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.onChatOperatorChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.onSearchQueryChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.onContactHovered = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
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
                this.getContacts(),
                this.getRecentChats(),
                this.getChatOperator()
            ]).then(() => {
                /* if (this.routeParams.mailId) {
                  this.setCurrentMail(this.routeParams.mailId);
                } else {
                  this.setCurrentMail(null);
                } */
                resolve();
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
     * Get recent chats
     * @returns {Promise<Contact[]>}
     */
    getRecentChats() {
        return new Promise((resolve, reject) => {
            this.http.get(this.contactsUrl + '?recent=true')
                .subscribe((response) => {
                this.recentChats = response;
                this.onRecentChatsChanged.next(this.recentChats);
                resolve(this.recentChats);
            }, reject);
        });
    }
    /**
     * Get Chat Operator
     * @return {Promise<any[]>}
     */
    getChatOperator() {
        return new Promise((resolve, reject) => {
            this.http.get(this.chatOperatorUrl)
                .subscribe((operator) => {
                this.chatOperator = operator;
                this.onChatOperatorChanged.next(this.chatOperator);
                resolve(this.chatOperator);
            }, reject);
        });
    }
    /**
     * Get chat conversation by conversation id
     * @param cId
     * @return {Promise<any[]>}
     */
    getChatConversation(cId) {
        return new Promise((resolve, reject) => {
            this.http.get(this.chatConversationUrl + '/' + cId)
                .subscribe((response) => {
                this.chatConversation = response;
                this.onChatConversationChanged.next(this.chatConversation);
                resolve(this.chatConversation);
            }, reject);
        });
    }
    /**
     * Save a conversation
     * @param {any} newMessage
     * @return {Promise<any>}
     */
    saveConversation(newMessage) {
        this.chatConversation.conversationData.push(newMessage);
        return new Promise((resolve, reject) => {
            this.http.post(this.chatConversationUrl + '/' + this.chatConversation.id, Object.assign({}, this.chatConversation))
                .subscribe(response => {
                this.getChatConversation(this.chatConversation.id).then(res => {
                    resolve(res);
                }, reject);
            });
        });
    }
};
ChatService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatService);



/***/ }),

/***/ "./src/app/content/apps/chat/drawer/drawer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/content/apps/chat/drawer/drawer.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9jaGF0L2RyYXdlci9kcmF3ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/chat/drawer/drawer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/content/apps/chat/drawer/drawer.component.ts ***!
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
        selector: 'chat-drawer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drawer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/drawer/drawer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drawer.component.scss */ "./src/app/content/apps/chat/drawer/drawer.component.scss")).default]
    })
], DrawerComponent);



/***/ }),

/***/ "./src/app/content/apps/chat/drawer/notifications/notifications.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/content/apps/chat/drawer/notifications/notifications.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9jaGF0L2RyYXdlci9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/chat/drawer/notifications/notifications.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/apps/chat/drawer/notifications/notifications.component.ts ***!
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/drawer/notifications/notifications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.component.scss */ "./src/app/content/apps/chat/drawer/notifications/notifications.component.scss")).default]
    })
], NotificationsComponent);



/***/ }),

/***/ "./src/app/content/apps/chat/drawer/search/search.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/content/apps/chat/drawer/search/search.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9jaGF0L2RyYXdlci9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/apps/chat/drawer/search/search.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/content/apps/chat/drawer/search/search.component.ts ***!
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
        this.classNames = 'dt-notification';
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
], SearchComponent.prototype, "classNames", void 0);
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'todo-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/drawer/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/content/apps/chat/drawer/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/content/apps/chat/helper-widgets/contact-hover-card/contact-hover-card.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/content/apps/chat/helper-widgets/contact-hover-card/contact-hover-card.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  position: fixed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9hcHBzL2NoYXQvaGVscGVyLXdpZGdldHMvY29udGFjdC1ob3Zlci1jYXJkL0M6XFxVc2Vyc1xcdmlub1xcQWJiYXNzXFx0cnVzdC1wcmltZS12My9zcmNcXGFwcFxcY29udGVudFxcYXBwc1xcY2hhdFxcaGVscGVyLXdpZGdldHNcXGNvbnRhY3QtaG92ZXItY2FyZFxcY29udGFjdC1ob3Zlci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy9jaGF0L2hlbHBlci13aWRnZXRzL2NvbnRhY3QtaG92ZXItY2FyZC9jb250YWN0LWhvdmVyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/content/apps/chat/helper-widgets/contact-hover-card/contact-hover-card.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/apps/chat/helper-widgets/contact-hover-card/contact-hover-card.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ContactHoverCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactHoverCardComponent", function() { return ContactHoverCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chat.service */ "./src/app/content/apps/chat/chat.service.ts");



let ContactHoverCardComponent = class ContactHoverCardComponent {
    constructor(el, chatService) {
        this.chatService = chatService;
        this.classlist = 'card user-info-card';
        this.isVisible = false;
        this.el = el.nativeElement;
    }
    ngOnInit() {
        this.onContactHovered = this.chatService.onContactHovered
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
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-hover-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/helper-widgets/contact-hover-card/contact-hover-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-hover-card.component.scss */ "./src/app/content/apps/chat/helper-widgets/contact-hover-card/contact-hover-card.component.scss")).default]
    })
], ContactHoverCardComponent);



/***/ }),

/***/ "./src/app/content/apps/chat/helper-widgets/contact/contact.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/content/apps/chat/helper-widgets/contact/contact.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chat.service */ "./src/app/content/apps/chat/chat.service.ts");



let ContactComponent = class ContactComponent {
    constructor(el, chatService) {
        this.chatService = chatService;
        this.classlist = 'dt-contact';
        this.isActive = false;
        this.contactCardData = { show: false };
        this.el = el.nativeElement;
    }
    ngOnInit() {
        // Subscribe to update conversation on changes
        this.onChatConversationChanged = this.chatService.onChatConversationChanged.subscribe((conversation) => {
            if (conversation.id && conversation.conversationData.length > 0) {
                this.isActive = conversation.id === this.contact.id;
            }
            else {
                this.isActive = false;
            }
        });
    }
    onClick() {
        this.chatService.getChatConversation(this.contact.id).then((data) => {
            this.chatService.onCurrentContactChanged.next(this.contact);
        });
    }
    onMouseEnter() {
        this.contactCardData.position = this.el.getBoundingClientRect();
        this.contactCardData.show = true;
        this.contactCardData.contact = this.contact;
        this.chatService.onContactHovered.next(this.contactCardData);
    }
    onMouseLeave() {
        this.contactCardData.show = false;
        this.chatService.onContactHovered.next(this.contactCardData);
    }
    ngOnDestroy() {
        this.onChatConversationChanged.unsubscribe();
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], ContactComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.active')
], ContactComponent.prototype, "isActive", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactComponent.prototype, "contact", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], ContactComponent.prototype, "onClick", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')
], ContactComponent.prototype, "onMouseEnter", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')
], ContactComponent.prototype, "onMouseLeave", null);
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'chat-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/chat/helper-widgets/contact/contact.component.html")).default
    })
], ContactComponent);



/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es2015.js.map