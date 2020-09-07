(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-manager-task-manager-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/drawer/drawer.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/drawer/drawer.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Module Drawer Inner -->\r\n<div class=\"dt-module__drawer-inner\">\r\n\r\n  <div class=\"dt-module__drawer-header\">\r\n    <a href=\"javascript:void(0)\" class=\"d-inline-block\" (click)=\"closeDrawer($event)\">\r\n      <gx-icon name=\"arrow-long-left\" size=\"2x\" class=\"mr-3\"></gx-icon>\r\n      <span class=\"align-middle\">Back</span>\r\n    </a>\r\n  </div>\r\n\r\n  <!-- Actionable Drawer -->\r\n  <div class=\"dt-actionable-drawer\">\r\n\r\n    <!-- Menu Bar -->\r\n    <div class=\"dt-action-bar\">\r\n\r\n      <!-- Action Menu -->\r\n      <ul class=\"dt-action-nav\">\r\n\r\n        <!-- Menu Item -->\r\n        <li class=\"dt-action-nav__item\" [ngClass]=\"{'active':activeMenu == 'notifications'}\">\r\n          <a href=\"javascript:void(0)\"\r\n             class=\"dt-action-nav__link\"\r\n             (click)=\"onSelectMenu($event, 'notifications')\">\r\n            <gx-icon name=\"notification2\" [fw]=\"true\"></gx-icon>\r\n          </a>\r\n        </li>\r\n        <!-- /menu item -->\r\n\r\n        <!-- Menu Item -->\r\n        <li class=\"dt-action-nav__item\" [ngClass]=\"{'active':activeMenu == 'messages'}\">\r\n          <a href=\"javascript:void(0)\"\r\n             class=\"dt-action-nav__link\"\r\n             (click)=\"onSelectMenu($event, 'messages')\">\r\n            <gx-icon name=\"message\" [fw]=\"true\"></gx-icon>\r\n          </a>\r\n        </li>\r\n        <!-- /menu item -->\r\n\r\n        <!-- Menu Item -->\r\n        <li class=\"dt-action-nav__item\" [ngClass]=\"{'active':activeMenu == 'search'}\">\r\n          <a href=\"javascript:void(0)\"\r\n             class=\"dt-action-nav__link\"\r\n             (click)=\"onSelectMenu($event, 'search')\">\r\n            <gx-icon name=\"search\" [fw]=\"true\"></gx-icon>\r\n          </a>\r\n        </li>\r\n        <!-- /menu item -->\r\n\r\n        <!-- Menu Item -->\r\n        <li class=\"dt-action-nav__item\" ngbDropdown>\r\n          <!-- Dropdown Button -->\r\n          <a href=\"javascript:void(0)\" class=\"no-arrow dt-action-nav__link\" ngbDropdownToggle>\r\n            <gx-icon name=\"circle-add-o\" [fw]=\"true\"></gx-icon>\r\n          </a>\r\n          <!-- /dropdown button -->\r\n\r\n          <!-- Dropdown Menu -->\r\n          <div ngbDropdownMenu>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Add New Project</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onCreateTask()\">Add New Task</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Add New Team Member</a>\r\n          </div>\r\n          <!-- /dropdown menu -->\r\n        </li>\r\n        <!-- /menu item -->\r\n\r\n      </ul>\r\n      <!-- /action menu -->\r\n\r\n    </div>\r\n    <!-- /menu bar -->\r\n\r\n    <!-- Drawer Content Area -->\r\n    <div class=\"dt-action-content-wrapper\">\r\n      <gx-loader [ngClass]=\"{'active':showLoader}\"></gx-loader>\r\n\r\n      <div class=\"dt-action-content fade position-relative\" [ngClass]=\"{'show':!showLoader && activeMenu == 'search'}\" perfectScrollbar>\r\n        <todo-search></todo-search>\r\n      </div>\r\n      <div class=\"dt-action-content fade position-relative\" [ngClass]=\"{'show':!showLoader && activeMenu == 'notifications'}\" perfectScrollbar>\r\n        <todo-notifications></todo-notifications>\r\n      </div>\r\n      <div class=\"dt-action-content fade position-relative\" [ngClass]=\"{'show':!showLoader && activeMenu == 'messages'}\" perfectScrollbar>\r\n        <todo-messages></todo-messages>\r\n      </div>\r\n    </div>\r\n    <!-- /drawer content area -->\r\n\r\n  </div>\r\n  <!-- /actionable drawer -->\r\n\r\n</div>\r\n<!-- /module drawer inner -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/drawer/messages/messages.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/drawer/messages/messages.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex align-items-center mb-6\">\r\n  <h5 class=\"mb-0\">Messages ({{messages.length}})</h5>\r\n\r\n  <div class=\"ml-auto action-area\">\r\n    <a href=\"javascript:void(0)\">Mark All Read</a>\r\n\r\n    <!-- Dropdown -->\r\n    <span class=\"ml-2 d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n      <a class=\"no-arrow\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n        <gx-icon name=\"settings\" size=\"lg\" class=\"text-light-gray\"></gx-icon>\r\n      </a>\r\n\r\n      <span ngbDropdownMenu>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"editors\" [fw]=\"true\"></gx-icon>\r\n          Edit\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"contacts\" [fw]=\"true\"></gx-icon>\r\n          Contact List</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"heart\" [fw]=\"true\"></gx-icon>\r\n          Favourite List\r\n        </a>\r\n      </span>\r\n    </span>\r\n    <!-- /dropdown -->\r\n  </div>\r\n</div>\r\n\r\n<!-- Media -->\r\n<a href=\"javascript:void(0)\" class=\"media\" *ngFor=\"let message of messages\">\r\n  <!-- Avatar -->\r\n  <gx-avatar [user]=\"message\" [charLength]=\"0\" class=\"mr-3\"></gx-avatar>\r\n  <!-- avatar -->\r\n\r\n  <!-- Media Body -->\r\n  <span class=\"media-body text-truncate\">\r\n    <span class=\"user-name mb-1\">{{message.name}}</span>\r\n    <span class=\"message text-light-gray text-truncate\" [innerHTML]=\"message.message\"></span>\r\n  </span>\r\n  <!-- /media body -->\r\n\r\n  <span class=\"action-area h-100 min-w-80 text-right\">\r\n    <span class=\"meta-date mb-1\">{{message.time}}</span>\r\n\r\n    <ng-template #tipContent>{{message.read ? 'Mark as read' : 'Mark as unread'}}</ng-template>\r\n\r\n    <!-- Toggle Button -->\r\n    <span class=\"toggle-button\"\r\n          [ngClass]=\"{'active':message.read}\"\r\n          [ngbTooltip]=\"tipContent\"\r\n          (click)=\"message.read = !message.read\">\r\n      <span class=\"show\"><gx-icon name=\"dot-o\" [fw]=\"true\" class=\"f-10 text-light-gray\"></gx-icon></span>\r\n      <span class=\"hide\"><gx-icon name=\"dot\" [fw]=\"true\"  class=\"f-10 text-light-gray\"></gx-icon></span>\r\n    </span>\r\n    <!-- /toggle button -->\r\n  </span>\r\n</a>\r\n<!-- /media -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/drawer/notifications/notifications.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/drawer/notifications/notifications.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex align-items-center mb-6\">\r\n  <h5 class=\"mb-0\">Notifications ({{notifications.length}})</h5>\r\n\r\n  <div class=\"ml-auto action-area\">\r\n    <a href=\"javascript:void(0)\">Mark All Read</a>\r\n\r\n    <!-- Dropdown -->\r\n    <span class=\"ml-2 d-inline-block\" ngbDropdown placement=\"bottom-right\">\r\n      <a class=\"no-arrow\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n        <gx-icon name=\"settings\" size=\"lg\" class=\"text-light-gray\"></gx-icon>\r\n      </a>\r\n\r\n      <span ngbDropdownMenu>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"editors\" [fw]=\"true\"></gx-icon>\r\n          Edit\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"contacts\" [fw]=\"true\"></gx-icon>\r\n          Contact List</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n          <gx-icon name=\"heart\" [fw]=\"true\"></gx-icon>\r\n          Favourite List\r\n        </a>\r\n      </span>\r\n    </span>\r\n    <!-- /dropdown -->\r\n  </div>\r\n</div>\r\n\r\n<!-- Media -->\r\n<a href=\"javascript:void(0)\" class=\"media\" *ngFor=\"let notification of notifications\">\r\n\r\n  <!-- Avatar -->\r\n  <gx-avatar [user]=\"notification\" [charLength]=\"0\" class=\"mr-3\"></gx-avatar>\r\n  <!-- avatar -->\r\n\r\n  <!-- Media Body -->\r\n  <span class=\"media-body\">\r\n    <span class=\"message\" [innerHTML]=\"notification.message\"></span>\r\n    <span class=\"meta-date\">\r\n      <gx-icon *ngIf=\"notification.icon.name\"\r\n               [name]=\"notification.icon.name\"\r\n               [ngClass]=\"notification.icon.color\"\r\n               [fw]=\"true\" class=\"mr-1\"></gx-icon>\r\n      {{notification.time}}\r\n    </span>\r\n  </span>\r\n  <!-- /media body -->\r\n\r\n</a>\r\n<!-- /media -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/drawer/search/search.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/drawer/search/search.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Search Box -->\r\n<form class=\"search-box right-side-icon mw-100 mb-8\">\r\n  <input type=\"search\"\r\n         class=\"form-control form-control-lg\"\r\n         [formControl]=\"searchQuery\"\r\n         placeholder=\"Search in mails...\">\r\n  <button type=\"submit\" class=\"search-icon\"><gx-icon name=\"search\" size=\"lg\"></gx-icon></button>\r\n</form>\r\n<!-- /search box -->\r\n\r\n<h4>Recently Viewed</h4>\r\n\r\n<!-- Search Result-->\r\n<div class=\"search-result\" *ngFor=\"let message of messages | filter: searchText\">\r\n  <a href=\"javascript:void(0)\" class=\"dt-avatar-wrapper\">\r\n    <!-- Avatar -->\r\n    <gx-avatar [user]=\"message\" [charLength]=\"0\" class=\"font-italic\"></gx-avatar>\r\n    <!-- /avatar -->\r\n\r\n    <!-- Avatar Info -->\r\n    <span class=\"dt-avatar-info\">\r\n      <span class=\"dt-avatar-name\">{{message.name}}</span>\r\n      <span class=\"f-12\" [innerHTML]=\"message.message\"></span>\r\n    </span>\r\n    <!-- /avatar info -->\r\n  </a>\r\n</div>\r\n<!-- /search result-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/helper-widgets/badges/badges.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/helper-widgets/badges/badges.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"wrap; else unwrapped\">\r\n  <div class=\"badge-group\">\r\n<span *ngFor=\"let lid of items\" class=\"badge\"\r\n      [ngClass]=\"labels | getById:lid:'color'\">{{labels | getById:lid:'title'}}</span>\r\n\r\n    <span *ngIf=\"!showAll && ids.length > 2\" #moreBadges class=\"badge badge-light\">...</span>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #unwrapped>\r\n  <div class=\"badge-group\">\r\n<span *ngFor=\"let lid of items\" class=\"badge\"\r\n      [ngClass]=\"labels | getById:lid:'color'\">{{labels | getById:lid:'title'}}</span>\r\n\r\n    <span *ngIf=\"!showAll && ids.length > 2\" #moreBadges class=\"badge badge-light\">...</span>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/helper-widgets/btn-complete/btn-complete.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/helper-widgets/btn-complete/btn-complete.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span *ngIf=\"display === 'checkbox'; else typeBtn\" class=\"dt-checkbox dt-checkbox-icon dt-checkbox-only mr-4\" [ngClass]=\"{'active':task.completed}\"\r\n      (click)=\"$event.stopPropagation()\">\r\n  <input id=\"task-checkbox-{{task.id}}\" type=\"checkbox\" [(ngModel)]=\"task.completed\" (change)=\"onToggleChange()\">\r\n  <label class=\"font-weight-light dt-checkbox-content\" for=\"task-checkbox-{{task.id}}\">\r\n    <span class=\"unchecked\">\r\n      <gx-icon name=\"circle-check-o\" [fw]=\"true\" size=\"1x\" class=\"text-light-gray\"></gx-icon>\r\n    </span>\r\n    <span class=\"checked\">\r\n      <gx-icon name=\"circle-check-o\" [fw]=\"true\" size=\"1x\" class=\"text-success\"></gx-icon>\r\n    </span>\r\n  </label>\r\n</span>\r\n\r\n<ng-template #typeBtn>\r\n  <button type=\"button\" class=\"btn btn-outline-dark btn-sm mb-2 mr-5\"\r\n          [ngClass]=\"{'btn-success text-white':task.completed,'btn-outline-dark':!task.completed}\"\r\n          (click)=\"onToggleClick()\"\r\n          data-toggle=\"button\" aria-pressed=\"false\">\r\n    <gx-icon name=\"check\" [fw]=\"true\" class=\"mr-1\"></gx-icon>\r\n    {{task.completed? 'Completed':'Mark As Done'}}\r\n  </button>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/helper-widgets/header/header.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/helper-widgets/header/header.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Dropdown -->\r\n<div *ngIf=\"!isTask\" class=\"dropdown\" ngbDropdown>\r\n\r\n  <!-- Dropdown Button -->\r\n  <a href=\"javascript:void(0)\" ngbDropdownToggle>\r\n    Tasks\r\n  </a>\r\n  <!-- /dropdown button -->\r\n\r\n  <!-- Dropdown Menu -->\r\n  <div ngbDropdownMenu>\r\n    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n    <div class=\"dropdown-divider\"></div>\r\n    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Separated link</a>\r\n  </div>\r\n  <!-- /dropdown menu -->\r\n\r\n</div>\r\n<!-- /dropdown -->\r\n\r\n<!-- Back -->\r\n<a class=\"text-dark\" *ngIf=\"isTask\" href=\"#back\" (click)=\"goToBack($event)\">\r\n  <gx-icon name=\"arrow-left\" size=\"1x\" [fw]=\"true\"></gx-icon>\r\n  <span class=\"display-6 align-middle ml-1\">Back</span>\r\n</a>\r\n<!-- /back -->\r\n\r\n<!-- Title -->\r\n<div class=\"mx-auto text-center\">\r\n  <h3 class=\"dt-module__title\">{{title}}</h3>\r\n  <gx-icon name=\"horizontal-more\" size=\"xl\"></gx-icon>\r\n</div>\r\n<!-- Title -->\r\n\r\n<!-- Filter -->\r\n<a *ngIf=\"!isTask\" class=\"dt-module__filter text-dark\" href=\"javascript:void(0)\">\r\n  <gx-icon name=\"filter-new\" size=\"xl\"></gx-icon>\r\n</a>\r\n<!-- /filter -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/comment-box/comment-box.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/comment-box/comment-box.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"commentForm\" (ngSubmit)=\"commentForm.valid && sendComment()\">\r\n  <!-- Action Tools -->\r\n  <div class=\"action-tools\">\r\n    <button class=\"btn btn-primary dt-fab-btn\" type=\"submit\" [disabled]=\"commentForm.invalid\">\r\n      <gx-icon name=\"send-new\" size=\"xl\"></gx-icon>\r\n    </button>\r\n\r\n    <div class=\"dt-fab-btn dt-attachment-btn size-30\">\r\n      <input type=\"file\">\r\n      <gx-icon name=\"attach-v\"></gx-icon>\r\n    </div>\r\n  </div>\r\n  <!-- /action tools -->\r\n\r\n  <!-- Media -->\r\n  <bs-media-object [img]=\"{url: currentUser.thumb, alt: currentUser.name, classlist: 'dt-avatar mr-2'}\">\r\n    <!-- Text Area -->\r\n    <textarea class=\"form-control border-0 shadow-none bg-focus\"\r\n              rows=\"1\"\r\n              name=\"notes\"\r\n              formControlName=\"notes\"\r\n              (keydown)=\"onKeyDown($event)\"\r\n              required\r\n              placeholder=\"Write your comment...\"></textarea>\r\n    <!-- /text area -->\r\n  </bs-media-object>\r\n  <!-- /media -->\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/header/assignees/assignees.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/header/assignees/assignees.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Dropdown -->\r\n<div class=\"mb-2\" ngbDropdown>\r\n  <!-- Dropdown Link -->\r\n  <a href=\"javascript:void(0)\" class=\"no-arrow dt-avatar-wrapper text-dark\" ngbDropdownToggle>\r\n    <!-- Module Assignee -->\r\n    <ng-container *ngIf=\"task.user_id; else unassigned\">\r\n      <ng-container #user=\"item\"\r\n                    [getbyid]=\"task.user_id\"\r\n                    [items]=\"assignees\">\r\n        <gx-avatar [user]=\"user.data\"\r\n                   class=\"size-35\"></gx-avatar>\r\n        <span class=\"dt-avatar-info\">\r\n            <span class=\"dt-avatar-name\">{{user.data.name}}</span>\r\n          </span>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-template #unassigned>\r\n      <span class=\"dt-avatar\"><gx-icon name=\"user\" size=\"xl\"></gx-icon></span>\r\n\r\n      <span class=\"dt-avatar-info\">\r\n        <span class=\"dt-avatar-name\">Unassigned</span>\r\n      </span>\r\n    </ng-template>\r\n  </a>\r\n  <!-- /dropdown link -->\r\n\r\n  <!-- Dropdown Option -->\r\n  <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n    <ng-container *ngFor=\"let assignee of assignees\">\r\n      <a class=\"dropdown-item dt-avatar-wrapper\"\r\n         (click)=\"onAssigneeChange(assignee.id)\"\r\n         [ngClass]=\"{'active':assignee.id==task.user_id}\"\r\n         href=\"javascript:void(0)\">\r\n\r\n        <gx-avatar [user]=\"assignee\"\r\n                   class=\"size-30\"></gx-avatar>\r\n        <span class=\"dt-avatar-info\">\r\n            <span class=\"dt-avatar-name\">{{assignee.name}}</span>\r\n          </span>\r\n      </a>\r\n    </ng-container>\r\n  </div>\r\n  <!-- /dropdown option -->\r\n\r\n</div>\r\n<!-- /dropdown -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/header/date/date.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/header/date/date.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Calender -->\r\n<a href=\"javascript:void(0)\" class=\"text-dark d-inline-block mb-2 mr-6\" data-target-input=\"nearest\">\r\n  <div class=\"dt-avatar-wrapper\" data-target=\"#date-time-picker-1\" data-toggle=\"datetimepicker\">\r\n    <input\r\n      [hidden]=\"true\"\r\n      name=\"dueDate\"\r\n      [min]=\"task.created\"\r\n      [(ngModel)]=\"task.dueDate\"\r\n      (dateTimeChange)=\"onDuedateChange()\"\r\n      [owlDateTime]=\"dueDatePicker\"/>\r\n    <owl-date-time pickerType=\"calendar\" [pickerMode]=\"'dialog'\" #dueDatePicker></owl-date-time>\r\n    <span class=\"dt-avatar dt-avatar__outline size-35\" [owlDateTimeTrigger]=\"dueDatePicker\">\r\n          <gx-icon name=\"calendar\" [fw]=\"true\"></gx-icon>\r\n        </span>\r\n    <span class=\"dt-avatar-info\" [owlDateTimeTrigger]=\"dueDatePicker\">\r\n          <span class=\"dt-avatar-name\">{{ task.dueDate | date:\"d MMMM, yy\" }}</span>\r\n        </span>\r\n  </div>\r\n</a>\r\n<!-- /calender -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/header/header.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/header/header.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Complete Button -->\r\n<btn-complete [task]=\"task\" display=\"button\"></btn-complete>\r\n<!-- /Complete Button -->\r\n\r\n<!-- Labels -->\r\n<task-labels [task]=\"task\"></task-labels>\r\n<!-- /Labels -->\r\n\r\n<!-- Calender -->\r\n<task-date [task]=\"task\"></task-date>\r\n<!-- /calender -->\r\n\r\n<!-- Assignees -->\r\n<task-assignees [task]=\"task\"></task-assignees>\r\n<!-- /Assignees -->\r\n\r\n<!-- Dropdown -->\r\n<div class=\"ml-auto\" ngbDropdown placement=\"bottom-right\">\r\n  <a class=\"no-arrow dt-avatar dt-avatar__outline size-30\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n    <gx-icon name=\"vertical-more\" [fw]=\"true\" size=\"sm\" class=\"text-light-gray\"></gx-icon>\r\n  </a>\r\n\r\n  <div ngbDropdownMenu>\r\n    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n  </div>\r\n</div>\r\n<!-- /dropdown -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/header/labels/labels.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/header/labels/labels.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Dropdown -->\r\n<div class=\"mb-2 mr-6\" ngbDropdown>\r\n  <!-- Dropdown Button -->\r\n  <button class=\"btn btn-outline-dark btn-sm\" type=\"button\" ngbDropdownToggle>\r\n    <gx-icon name=\"check\" [fw]=\"true\" class=\"mr-1\"></gx-icon>\r\n    Label\r\n  </button>\r\n  <!-- /dropdown button -->\r\n\r\n  <!-- Dropdown Menu -->\r\n  <div ngbDropdownMenu>\r\n    <a *ngFor=\"let label of labels\" class=\"dropdown-item\" href=\"javascript:void(0)\"\r\n       (click)=\"onToggleLabel(label.id)\">\r\n      <gx-icon name=\"box-check\" [fw]=\"true\" class=\"mr-1\" *ngIf=\"hasLabel(label.id)\"></gx-icon>\r\n      <gx-icon name=\"box-o\" [fw]=\"true\" class=\"mr-1\" *ngIf=\"!hasLabel(label.id)\"></gx-icon>\r\n      {{label.title}}\r\n    </a>\r\n  </div>\r\n  <!-- /dropdown menu -->\r\n</div>\r\n<!-- /dropdown -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/task-conversation/task-conversation.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/task-conversation/task-conversation.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a *ngIf=\"itemFrom > 0\"\r\n   class=\"d-inline-block mb-6 text-decoration-underline\"\r\n   href=\"javascript:void(0)\"\r\n  (click)=\"showOlder()\">\r\n  +{{itemFrom}} Previous messages\r\n</a>\r\n\r\n<ng-container *ngFor=\"let comment of comments\"\r\n              #user=\"item\"\r\n              [getbyid]=\"comment.user_id\"\r\n              [items]=\"assignees\">\r\n\r\n  <!-- Media -->\r\n  <bs-media-object class=\"mb-6\"\r\n                   [img]=\"{url: user.data.thumb, alt: user.data.name, classlist: 'dt-avatar size-25 mr-4'}\">\r\n\r\n    <h5 class=\"text-light-gray mb-1\">\r\n      {{user.data.name}}\r\n      <span class=\"d-inline-block f-12 ml-2\">{{comment.createdeAt | timeAgo}}</span>\r\n    </h5>\r\n    <p class=\"mb-0 text-dark\">{{comment.notes}}</p>\r\n\r\n  </bs-media-object>\r\n  <!-- /media -->\r\n\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/task-details.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/task-details.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Module Header -->\r\n<setion-header [title]=\"projects | getById:currentTask.project_id:'title'\"></setion-header>\r\n<!-- /module header -->\r\n\r\n<!-- Module Content -->\r\n<div class=\"dt-module__content position-relative\" perfectScrollbar>\r\n\r\n  <!-- Module Content Inner -->\r\n  <div class=\"dt-module__content-inner\">\r\n\r\n    <!-- task header -->\r\n    <task-header [task]=\"currentTask\"></task-header>\r\n    <!-- /task header -->\r\n\r\n    <!-- Form -->\r\n    <form [formGroup]=\"taskForm\">\r\n\r\n      <h2 class=\"display-4\">\r\n        {{currentTask.title}}\r\n        <a href=\"javascript:void(0)\" class=\"ml-auto\" (click)=\"editTitle = !editTitle\">\r\n          <gx-icon name=\"editors\"></gx-icon>\r\n        </a>\r\n      </h2>\r\n      <div class=\"form-group\" *ngIf=\"editTitle\">\r\n        <textarea class=\"form-control bg-focus display-4\"\r\n                rows=\"2\"\r\n                name=\"title\"\r\n                formControlName=\"title\"\r\n                placeholder=\"Title\"></textarea>\r\n\r\n        <button class=\"btn btn-primary btn-xs mt-1\" (click)=\"editTitle = !editTitle\">Done</button>\r\n      </div>\r\n\r\n      <!-- Badges -->\r\n      <task-badges class=\"d-block mb-5\" [wrap]=\"true\"\r\n                   [ids]=\"currentTask.labels\"\r\n                   [labels]=\"labels\"></task-badges>\r\n      <!-- /badges -->\r\n\r\n      <!-- Text Area -->\r\n      <div class=\"form-group d-flex\">\r\n        <gx-icon name=\"forms-advanced\" class=\"mt-2 mr-1\"></gx-icon>\r\n        <textarea class=\"form-control border-0 shadow-none bg-focus\"\r\n                  rows=\"2\"\r\n                  name=\"content\"\r\n                  formControlName=\"content\"\r\n                  placeholder=\"Description\"></textarea>\r\n      </div>\r\n      <!-- /text area -->\r\n\r\n    </form>\r\n    <!-- /form -->\r\n\r\n    <!-- Separator -->\r\n    <hr class=\"my-7\">\r\n    <!-- /separator -->\r\n\r\n    <app-task-conversation></app-task-conversation>\r\n\r\n  </div>\r\n  <!-- /module content inner -->\r\n\r\n</div>\r\n\r\n<!-- Comment Box -->\r\n<app-comment-box></app-comment-box>\r\n<!-- /comment box -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-list/task-list-item/task-list-item.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-list/task-list-item/task-list-item.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Checkbox Icon -->\r\n<btn-complete [task]=\"task\"></btn-complete>\r\n<!-- /checkbox icon -->\r\n\r\n<!-- Module Content -->\r\n<a href=\"#{{task.id}}\"\r\n   (click)=\"onClickTask($event, task.id)\"\r\n   class=\"dt-module__list-item-content\"\r\n   [ngClass]=\"{'complete':task.completed}\">{{task.title || 'New Task'}}</a>\r\n<!-- /module content -->\r\n\r\n<!-- Module Info -->\r\n<div class=\"dt-module__list-item-info\">\r\n\r\n  <!-- Badges -->\r\n  <task-badges [ids]=\"task.labels\"\r\n               [labels]=\"labels\"\r\n               [showAll]=\"false\"></task-badges>\r\n  <!-- /badges -->\r\n\r\n  <!-- Module Date -->\r\n  <span>{{ task.dueDate | date:\"MMMM d\" }}</span>\r\n\r\n  <!-- Module Assignee -->\r\n  <ng-container *ngIf=\"task.user_id\" #user=\"item\" [getbyid]=\"task.user_id\" [items]=\"assignees\">\r\n    <gx-avatar [user]=\"user.data\" class=\"size-25\"></gx-avatar>\r\n  </ng-container>\r\n\r\n</div>\r\n<!-- /module info -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-list/task-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-list/task-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Module Header -->\r\n<setion-header [title]=\"module_title\"></setion-header>\r\n<!-- /module header -->\r\n\r\n<!-- Module Content -->\r\n<div class=\"dt-module__content position-relative\" perfectScrollbar>\r\n\r\n  <!-- Module Content Inner -->\r\n  <div class=\"dt-module__content-inner\">\r\n\r\n    <p *ngIf=\"sections.length === 0\" class=\"text-center\">No record found.</p>\r\n\r\n    <!-- Module List -->\r\n    <ng-container *ngFor=\"let section of sections; index as i_section; first as isFirstSection\">\r\n      <div *ngIf=\"section.tasks.length > 0\"\r\n           class=\"dt-module__list\">\r\n\r\n        <!-- Module Heading -->\r\n        <h5 *ngIf=\"section.title\" class=\"text-light-gray mb-2\">{{section.title}}</h5>\r\n        <!-- /module heading -->\r\n\r\n        <!-- Module Item -->\r\n        <ng-container *ngFor=\"let task of section.tasks; index as i; first as isFirst\">\r\n          <app-task-list-item\r\n            *ngIf=\"!task.deleted\"\r\n            [task]=\"task\"></app-task-list-item>\r\n        </ng-container>\r\n        <!-- /module item -->\r\n\r\n      </div>\r\n    </ng-container>\r\n    <!-- /Module List -->\r\n\r\n  </div>\r\n  <!-- /module content inner -->\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-manager.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-manager.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-12\">\r\n\r\n    <!-- Module -->\r\n    <div class=\"dt-module\">\r\n\r\n      <!-- Module Sidebar -->\r\n      <app-task-sidebar></app-task-sidebar>\r\n      <!-- /module sidebar -->\r\n\r\n      <!-- Module List -->\r\n      <app-task-list [hidden]=\"currentTask\"></app-task-list>\r\n      <!-- /module list -->\r\n\r\n      <!-- Module details -->\r\n      <app-task-details *ngIf=\"currentTask\"></app-task-details>\r\n      <!-- /module list -->\r\n\r\n      <todo-drawer [ngClass]=\"{'open':drawer.isOpen}\"></todo-drawer>\r\n\r\n      <div class=\"dt-backdrop\" *ngIf=\"drawer.isOpen\" (click)=\"closeDrawer($event)\"></div>\r\n    </div>\r\n    <!-- /module -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-sidebar/task-sidebar.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-sidebar/task-sidebar.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidebar Header -->\r\n<div class=\"dt-module__sidebar-header\">\r\n\r\n  <!-- App Quick Menu -->\r\n  <div class=\"quick-menu-list\">\r\n    <a *ngIf=\"hiddenPageHeader\"\r\n       href=\"javascript:void(0)\"\r\n       class=\"quick-menu mr-auto d-md-none\"\r\n       [ngClass]=\"{'active':settings.activeNavDrawer}\"\r\n       (click)=\"toggleNavigation($event)\">\r\n      <gx-icon name=\"menu\"></gx-icon>\r\n    </a>\r\n\r\n    <!-- Search Box -->\r\n    <form class=\"search-box d-md-none\" *ngIf=\"!hiddenPageHeader\">\r\n      <input class=\"form-control\" type=\"search\" id=\"address\" name=\"address\" placeholder=\"Search in app...\">\r\n      <button type=\"submit\" class=\"search-icon\">\r\n        <gx-icon name=\"search\" size=\"lg\"></gx-icon>\r\n      </button>\r\n    </form>\r\n    <!-- /search box -->\r\n\r\n    <a href=\"javascript:void(0)\"\r\n       class=\"quick-menu\"\r\n       [ngClass]=\"{'active':activeMenu == 'search', 'd-none d-md-block': !hiddenPageHeader}\"\r\n       (click)=\"onClickMenu($event, 'search')\">\r\n      <gx-icon name=\"search\"></gx-icon>\r\n    </a>\r\n\r\n    <a href=\"javascript:void(0)\"\r\n       class=\"quick-menu\"\r\n       [ngClass]=\"{'active':activeMenu == 'notifications'}\"\r\n       (click)=\"onClickMenu($event, 'notifications')\">\r\n      <gx-icon name=\"notification2\"></gx-icon>\r\n    </a>\r\n\r\n    <a href=\"javascript:void(0)\"\r\n       class=\"quick-menu\"\r\n       [ngClass]=\"{'active':activeMenu == 'messages'}\"\r\n       (click)=\"onClickMenu($event, 'messages')\">\r\n      <gx-icon name=\"message\"></gx-icon>\r\n    </a>\r\n\r\n    <!-- Dropdown -->\r\n    <div class=\"quick-menu\" ngbDropdown placement=\"bottom-right\">\r\n      <a href=\"javascript:void(0)\" class=\"no-arrow\" ngbDropdownToggle>\r\n        <gx-icon name=\"circle-add-o\"></gx-icon>\r\n      </a>\r\n\r\n      <!-- Dropdown Menu -->\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Add New Project</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onCreateTask()\">Add New Task</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Add New Team Member</a>\r\n      </div>\r\n      <!-- /dropdown menu -->\r\n    </div>\r\n    <!-- /dropdown -->\r\n\r\n    <a href=\"javascript:void(0)\"\r\n       class=\"quick-menu d-md-none\"\r\n       [ngClass]=\"{'active':isOpen}\"\r\n       (click)=\"toggleOpen($event)\">\r\n      <gx-icon name=\"{{hiddenPageHeader? 'vertical-more': 'menu'}}\"></gx-icon>\r\n    </a>\r\n  </div>\r\n  <!-- /app quick menu -->\r\n\r\n</div>\r\n<!-- /sidebar header -->\r\n\r\n<!-- Sidebar Content -->\r\n<div class=\"dt-module__sidebar-content position-relative\" [@collapseAppSidebar]=\"isOpen\" perfectScrollbar>\r\n  <!-- Sidebar Content Inner -->\r\n  <div class=\"dt-module__sidebar-content-inner pt-md-7\">\r\n    <!-- Sidebar Navigation -->\r\n    <ul class=\"dt-module-side-nav\">\r\n\r\n      <!-- Menu Header -->\r\n      <li class=\"dt-module-side-nav__header\">\r\n        <span class=\"dt-module-side-nav__text\">QUICK MENU</span>\r\n      </li>\r\n      <!-- /menu header -->\r\n\r\n      <!-- Menu Item -->\r\n      <li class=\"dt-module-side-nav__item\"\r\n          routerLinkActive=\"active\">\r\n        <a class=\"dt-module-side-nav__link\"\r\n           [routerLink]=\"'/' + settings.layout + '/apps/task-manager/dashboard'\">\r\n          <gx-icon name=\"dashboard\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n          <span class=\"dt-module-side-nav__text\">Dashboard</span>\r\n        </a>\r\n      </li>\r\n      <!-- /menu item -->\r\n\r\n      <!-- Menu Item -->\r\n      <li class=\"dt-module-side-nav__item\"\r\n          routerLinkActive=\"active\">\r\n        <a class=\"dt-module-side-nav__link\"\r\n           [routerLink]=\"'/' + settings.layout + '/apps/task-manager/user/'+currentUser.id\">\r\n          <gx-icon name=\"description\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n          <span class=\"dt-module-side-nav__text\">My Tasks</span>\r\n        </a>\r\n      </li>\r\n      <!-- /menu item -->\r\n\r\n      <!-- Menu Item -->\r\n      <li class=\"dt-module-side-nav__item\"\r\n          routerLinkActive=\"active\">\r\n        <a class=\"dt-module-side-nav__link\"\r\n           [routerLink]=\"'/' + settings.layout + '/apps/task-manager/user/watchlist'\">\r\n          <gx-icon name=\"users\" [fw]=\"true\" size=\"lg\"></gx-icon>\r\n          <span class=\"dt-module-side-nav__text\">My Watchlist</span>\r\n        </a>\r\n      </li>\r\n      <!-- /menu item -->\r\n\r\n      <!-- Menu Header -->\r\n      <li class=\"dt-module-side-nav__header\">\r\n        <span class=\"dt-module-side-nav__text\">PROJECTS</span>\r\n      </li>\r\n      <!-- /menu header -->\r\n\r\n      <!-- Menu Item -->\r\n      <li class=\"dt-module-side-nav__item\"\r\n          *ngFor=\"let project of projects; index as i; first as isFirst\"\r\n          routerLinkActive=\"active\">\r\n        <a class=\"dt-module-side-nav__link\"\r\n           [routerLink]=\"'/' + settings.layout + '/apps/task-manager/project/'+project.id\">\r\n          <span class=\"dt-module-side-nav__text\">{{project.title}}</span>\r\n        </a>\r\n      </li>\r\n      <!-- /menu item -->\r\n\r\n    </ul>\r\n    <!-- /sidebar navigation -->\r\n\r\n    <!-- Contacts -->\r\n    <div class=\"dt-contacts contacts-list\">\r\n\r\n      <!-- Contact Heading -->\r\n      <h6 class=\"dt-contact__heading text-uppercase\">Team</h6>\r\n      <!-- /contact heading -->\r\n\r\n      <div class=\"action-area\">\r\n        <ul class=\"dt-team-list\">\r\n          <li *ngFor=\"let user of assignees; last as isLast\" [ngClass]=\"{'mb-2':!isLast}\">\r\n            <!-- Avatar -->\r\n            <a [routerLink]=\"'/' + settings.layout + '/apps/task-manager/user/'+user.id\">\r\n              <gx-avatar [user]=\"user\" class=\"size-30\"></gx-avatar>\r\n            </a>\r\n            <!-- /avatar -->\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- contacts -->\r\n  </div>\r\n  <!-- /sidebar content inner -->\r\n</div>\r\n<!-- /sidebar content -->\r\n");

/***/ }),

/***/ "./src/app/content/apps/task-manager/drawer/drawer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/drawer/drawer.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy90YXNrLW1hbmFnZXIvZHJhd2VyL2RyYXdlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/apps/task-manager/drawer/drawer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/apps/task-manager/drawer/drawer.component.ts ***!
  \**********************************************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return DrawerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");
/* harmony import */ var _drawer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../drawer.service */ "./src/app/content/apps/drawer.service.ts");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../task */ "./src/app/content/apps/task-manager/task.ts");
/* harmony import */ var _gaxon_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gaxon/helpers */ "./src/gaxon/helpers/index.ts");






let DrawerComponent = class DrawerComponent {
    constructor(tasksService, drawerService) {
        this.tasksService = tasksService;
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
    /**
     * Create new Task
     */
    onCreateTask() {
        const newTask = new _task__WEBPACK_IMPORTED_MODULE_4__["Task"]();
        newTask.id = _gaxon_helpers__WEBPACK_IMPORTED_MODULE_5__["GxHelper"].UUID();
        newTask.created = new Date();
        newTask.labels = [];
        newTask.user_id = '';
        if (this.tasksService.currentProject) {
            newTask.project_id = this.tasksService.currentProject.id;
        }
        this.tasksService.addTask(newTask).then((response) => {
            this.drawer.isOpen = false;
            this.drawerService.update(this.drawer);
            this.tasksService.setCurrentTask(newTask.id);
        });
    }
    ngOnDestroy() {
        this.onDrawerChanged.unsubscribe();
    }
};
DrawerComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] },
    { type: _drawer_service__WEBPACK_IMPORTED_MODULE_3__["DrawerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], DrawerComponent.prototype, "draverClasses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
], DrawerComponent.prototype, "isOpen", void 0);
DrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'todo-drawer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drawer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/drawer/drawer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drawer.component.scss */ "./src/app/content/apps/task-manager/drawer/drawer.component.scss")).default]
    })
], DrawerComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/drawer/messages/messages.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/drawer/messages/messages.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy90YXNrLW1hbmFnZXIvZHJhd2VyL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/apps/task-manager/drawer/messages/messages.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/drawer/messages/messages.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.service */ "./src/app/app.service.ts");



let MessagesComponent = class MessagesComponent {
    constructor(appService) {
        this.appService = appService;
        this.classlist = 'dt-notification';
        this.messages = [];
        this.onMessagesChanged = this.appService.onMessagesChanged.subscribe((messages) => {
            this.messages = messages;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.onMessagesChanged.unsubscribe();
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], MessagesComponent.prototype, "classlist", void 0);
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'todo-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/drawer/messages/messages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.component.scss */ "./src/app/content/apps/task-manager/drawer/messages/messages.component.scss")).default]
    })
], MessagesComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/drawer/notifications/notifications.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/drawer/notifications/notifications.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy90YXNrLW1hbmFnZXIvZHJhd2VyL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/apps/task-manager/drawer/notifications/notifications.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/drawer/notifications/notifications.component.ts ***!
  \*******************************************************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/drawer/notifications/notifications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.component.scss */ "./src/app/content/apps/task-manager/drawer/notifications/notifications.component.scss")).default]
    })
], NotificationsComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/drawer/search/search.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/drawer/search/search.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy90YXNrLW1hbmFnZXIvZHJhd2VyL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/apps/task-manager/drawer/search/search.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/drawer/search/search.component.ts ***!
  \*****************************************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/drawer/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/content/apps/task-manager/drawer/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/helper-widgets/badges/badges.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/helper-widgets/badges/badges.component.ts ***!
  \*************************************************************************************/
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
], BadgesComponent.prototype, "wrap", void 0);
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./badges.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/helper-widgets/badges/badges.component.html")).default
    })
], BadgesComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/helper-widgets/btn-complete/btn-complete.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/helper-widgets/btn-complete/btn-complete.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BtnCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnCompleteComponent", function() { return BtnCompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");



let BtnCompleteComponent = class BtnCompleteComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
        this.display = 'checkbox';
    }
    ngOnInit() {
    }
    onToggleClick() {
        this.task.completed = !this.task.completed;
        this.tasksService.updateTask(this.task);
    }
    /**
     * On Toggle complete status change
     */
    onToggleChange() {
        this.tasksService.updateTask(this.task);
    }
};
BtnCompleteComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BtnCompleteComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BtnCompleteComponent.prototype, "display", void 0);
BtnCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'btn-complete',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./btn-complete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/helper-widgets/btn-complete/btn-complete.component.html")).default
    })
], BtnCompleteComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/helper-widgets/header/header.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/helper-widgets/header/header.component.ts ***!
  \*************************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
        this.classlist = 'dt-module__header';
        this.isTask = false;
    }
    ngOnInit() {
        // Subscribe to update current task on changes
        this.onCurrentTaskChanged =
            this.tasksService.onCurrentTaskChanged
                .subscribe(task => {
                if (task) {
                    this.currentTask = task;
                    this.isTask = true;
                }
                else {
                    this.isTask = false;
                }
            });
    }
    goToBack(event) {
        event.preventDefault();
        this.tasksService.setCurrentTask(null);
    }
    ngOnDestroy() {
        this.onCurrentTaskChanged.unsubscribe();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], HeaderComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "isTask", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'setion-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/helper-widgets/header/header.component.html")).default
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-details/comment-box/comment-box.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-details/comment-box/comment-box.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CommentBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentBoxComponent", function() { return CommentBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");




let CommentBoxComponent = class CommentBoxComponent {
    constructor(tasksService, formBuilder) {
        this.tasksService = tasksService;
        this.formBuilder = formBuilder;
        this.classlist = 'add-comment-box';
        this.currentUser = this.tasksService.currentUser;
    }
    ngOnInit() {
        this.createForm();
    }
    /**
     * Create form for Task
     */
    createForm() {
        this.commentForm = this.formBuilder.group({
            user_id: this.currentUser.id,
            notes: '',
            createdeAt: new Date()
        });
    }
    /**
     * Call function on keydown
     * @param event
     */
    onKeyDown(event) {
        if (event.keyCode === 13 && this.commentForm.valid) {
            if (!event.shiftKey) {
                this.sendComment();
                event.preventDefault();
            }
            // rest of your code
        }
        else if (event.keyCode === 13) {
            event.preventDefault();
        }
    }
    /**
     * Send new comment
     */
    sendComment() {
        this.commentForm.value.createdeAt = new Date();
        if (this.tasksService.saveComment(this.commentForm.value)) {
            this.createForm();
        }
    }
};
CommentBoxComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_3__["TaskManagerService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], CommentBoxComponent.prototype, "classlist", void 0);
CommentBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comment-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/comment-box/comment-box.component.html")).default
    })
], CommentBoxComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-details/header/assignees/assignees.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-details/header/assignees/assignees.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AssigneesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssigneesComponent", function() { return AssigneesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");



let AssigneesComponent = class AssigneesComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
        this.assignees = [];
    }
    ngOnInit() {
        // Subscribe to update assignees on changes
        this.onAssigneesChanged =
            this.tasksService.onAssigneesChanged
                .subscribe(assignees => {
                this.assignees = assignees;
            });
    }
    onAssigneeChange(assigneeId) {
        this.task.user_id = assigneeId;
        this.tasksService.updateTask(this.task);
    }
    ngOnDestroy() {
        this.onAssigneesChanged.unsubscribe();
    }
};
AssigneesComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AssigneesComponent.prototype, "task", void 0);
AssigneesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'task-assignees',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assignees.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/header/assignees/assignees.component.html")).default
    })
], AssigneesComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-details/header/date/date.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-details/header/date/date.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");



let DateComponent = class DateComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    ngOnInit() {
    }
    onDuedateChange() {
        this.tasksService.updateTask(this.task);
    }
};
DateComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DateComponent.prototype, "task", void 0);
DateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'task-date',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./date.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/header/date/date.component.html")).default
    })
], DateComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-details/header/header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-details/header/header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TaskHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHeaderComponent", function() { return TaskHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TaskHeaderComponent = class TaskHeaderComponent {
    constructor() {
        this.classlist = 'd-flex flex-wrap align-items-center mb-5';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], TaskHeaderComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskHeaderComponent.prototype, "task", void 0);
TaskHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'task-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/header/header.component.html")).default
    })
], TaskHeaderComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-details/header/labels/labels.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-details/header/labels/labels.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LabelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsComponent", function() { return LabelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");



let LabelsComponent = class LabelsComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
        this.labels = [];
    }
    ngOnInit() {
        // Subscribe to update labels on changes
        this.onLabelsChanged =
            this.tasksService.onLabelsChanged
                .subscribe(labels => {
                this.labels = labels;
            });
    }
    hasLabel(labelId) {
        return this.tasksService.hasLabel(labelId, this.task);
    }
    onToggleLabel(labelId) {
        this.tasksService.toggleLabel(labelId, this.task);
    }
    ngOnDestroy() {
        this.onLabelsChanged.unsubscribe();
    }
};
LabelsComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LabelsComponent.prototype, "task", void 0);
LabelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'task-labels',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./labels.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/header/labels/labels.component.html")).default
    })
], LabelsComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-details/task-conversation/task-conversation.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-details/task-conversation/task-conversation.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TaskConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskConversationComponent", function() { return TaskConversationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");



let TaskConversationComponent = class TaskConversationComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
        this.limit = 2;
        this._items = [];
        this.comments = [];
        this.assignees = [];
    }
    ngOnInit() {
        // Subscribe to update task conversation on changes
        this.onTaskConversationChanged =
            this.tasksService.onTaskConversationChanged
                .subscribe(data => {
                if (data.id) {
                    this._items = data.conversations;
                    if (this.limit >= this._items.length) {
                        this.itemFrom = 0;
                        this.comments = this._items;
                    }
                    else {
                        this.itemFrom = this._items.length - this.limit;
                        this.itemTo = this._items.length;
                        this.comments = this._items.slice(this.itemFrom, this.itemTo);
                    }
                }
            });
        // Subscribe to update assignees on changes
        this.onAssigneesChanged =
            this.tasksService.onAssigneesChanged
                .subscribe(assignees => {
                this.assignees = assignees;
            });
    }
    showOlder() {
        if (this.itemFrom - this.limit >= 0) {
            this.itemFrom -= this.limit;
        }
        else {
            this.itemFrom = 0;
        }
        this.comments = this._items.slice(this.itemFrom, this.itemTo);
    }
    ngOnDestroy() {
        this.onTaskConversationChanged.unsubscribe();
        this.onAssigneesChanged.unsubscribe();
    }
};
TaskConversationComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] }
];
TaskConversationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-conversation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-conversation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/task-conversation/task-conversation.component.html")).default
    })
], TaskConversationComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-details/task-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-details/task-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TaskDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailsComponent", function() { return TaskDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");





let TaskDetailsComponent = class TaskDetailsComponent {
    constructor(tasksService, formBuilder) {
        this.tasksService = tasksService;
        this.formBuilder = formBuilder;
        this.classlist = 'dt-module__container';
        this.labels = [];
        this.editTitle = false;
        this.currentUser = this.tasksService.currentUser;
    }
    ngOnInit() {
        // Subscribe to update projects on changes
        this.onProjectsChanged =
            this.tasksService.onProjectsChanged
                .subscribe(projects => {
                this.projects = projects;
            });
        // Subscribe to update current task on changes
        this.onCurrentTaskChanged =
            this.tasksService.onCurrentTaskChanged
                .subscribe(task => {
                if (task) {
                    this.currentTask = task;
                    this.taskForm = this.createTaskForm();
                    this.onFormChange = this.taskForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe((data) => {
                        this.currentTask = data;
                        this.tasksService.updateTask(data);
                    });
                }
            });
        // Subscribe to update labels on changes
        this.onLabelsChanged =
            this.tasksService.onLabelsChanged
                .subscribe(labels => {
                this.labels = labels;
            });
    }
    /**
     * Create form for Task
     */
    createTaskForm() {
        return this.formBuilder.group({
            id: [this.currentTask.id],
            title: [this.currentTask.title],
            content: [this.currentTask.content],
            completed: [this.currentTask.completed],
            labels: [this.currentTask.labels],
            created: [this.currentTask.created],
            dueDate: [this.currentTask.dueDate],
            user_id: [this.currentTask.user_id],
            project_id: [this.currentTask.project_id],
            deleted: [this.currentTask.deleted]
        });
    }
    ngOnDestroy() {
        this.onProjectsChanged.unsubscribe();
        this.onCurrentTaskChanged.unsubscribe();
        this.onLabelsChanged.unsubscribe();
        if (this.onFormChange) {
            this.onFormChange.unsubscribe();
        }
    }
};
TaskDetailsComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_4__["TaskManagerService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], TaskDetailsComponent.prototype, "classlist", void 0);
TaskDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-details/task-details.component.html")).default
    })
], TaskDetailsComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-list/task-list-item/task-list-item.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-list/task-list-item/task-list-item.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy90YXNrLW1hbmFnZXIvdGFzay1saXN0L3Rhc2stbGlzdC1pdGVtL3Rhc2stbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/apps/task-manager/task-list/task-list-item/task-list-item.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-list/task-list-item/task-list-item.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TaskListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListItemComponent", function() { return TaskListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");



let TaskListItemComponent = class TaskListItemComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
        this.classlist = 'dt-module__list-item';
        this.assignees = [];
        this.labels = [];
    }
    ngOnInit() {
        this.completed = this.task.completed;
        // Subscribe to update assignees on changes
        this.onAssigneesChanged =
            this.tasksService.onAssigneesChanged
                .subscribe(assignees => {
                this.assignees = assignees;
            });
        // Subscribe to update labels on changes
        this.onLabelsChanged =
            this.tasksService.onLabelsChanged
                .subscribe(labels => {
                this.labels = labels;
            });
    }
    /**
     * On Click Task
     * @param event
     * @param taskId
     */
    onClickTask(event, taskId) {
        event.preventDefault();
        // Set current Task
        this.tasksService.setCurrentTask(taskId);
    }
    ngOnDestroy() {
        this.onLabelsChanged.unsubscribe();
        this.onAssigneesChanged.unsubscribe();
    }
};
TaskListItemComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], TaskListItemComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.completed')
], TaskListItemComponent.prototype, "completed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskListItemComponent.prototype, "task", void 0);
TaskListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-list-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-list/task-list-item/task-list-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-list-item.component.scss */ "./src/app/content/apps/task-manager/task-list/task-list-item/task-list-item.component.scss")).default]
    })
], TaskListItemComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-list/task-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-list/task-list.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy90YXNrLW1hbmFnZXIvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/apps/task-manager/task-list/task-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-list/task-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");




let TaskListComponent = class TaskListComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
        this.classlist = 'dt-module__container';
        this.sections = [];
        this.tasks = [];
        this.module_title = 'Dashboard';
    }
    ngOnInit() {
        // Subscribe to update sections on changes
        this.onTasksChanged =
            this.tasksService.onTasksChanged
                .subscribe(tasks => {
                this.tasks = tasks;
                this.sections = [];
                if (this.currentProject) {
                    this.setSections();
                }
                else {
                    this.sections.push({ title: '', tasks: this.tasks });
                }
                setTimeout(() => {
                    this.scrollToBottom();
                }, 300);
            });
        // Subscribe to update current project on changes
        this.onCurrentProjectChanged =
            this.tasksService.onCurrentProjectChanged
                .subscribe(project => {
                if (project) {
                    this.currentProject = project;
                    this.module_title = this.currentProject.title;
                    this.setSections();
                }
                else {
                    this.currentProject = null;
                }
            });
    }
    setSections() {
        this.sections = [];
        this.newSection = {
            title: '',
            tasks: []
        };
        this.sections.push(this.newSection);
        const assignedToSections = [];
        this.currentProject.sections.forEach(row => {
            this.newSection = {
                title: row.title,
                tasks: []
            };
            this.newSection.tasks = this.tasks.filter(task => {
                if (row.tasks.indexOf(task.id) !== -1) {
                    assignedToSections.push(task.id);
                    return true;
                }
                return false;
            });
            this.sections.push(this.newSection);
        });
        this.sections[0].tasks = this.tasks.filter(task => {
            if (assignedToSections.indexOf(task.id) !== -1) {
                return false;
            }
            return true;
        });
    }
    scrollToBottom() {
        if (this.directiveRef) {
            this.directiveRef.update();
            this.directiveRef.scrollToBottom();
        }
    }
    ngOnDestroy() {
        this.onTasksChanged.unsubscribe();
        this.onCurrentProjectChanged.unsubscribe();
    }
};
TaskListComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], TaskListComponent.prototype, "classlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], { static: false })
], TaskListComponent.prototype, "directiveRef", void 0);
TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-list/task-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-list.component.scss */ "./src/app/content/apps/task-manager/task-list/task-list.component.scss")).default]
    })
], TaskListComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-manager.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-manager.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy90YXNrLW1hbmFnZXIvdGFzay1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/apps/task-manager/task-manager.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-manager.component.ts ***!
  \*********************************************************************/
/*! exports provided: TaskManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManagerComponent", function() { return TaskManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");
/* harmony import */ var _drawer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../drawer.service */ "./src/app/content/apps/drawer.service.ts");




let TaskManagerComponent = class TaskManagerComponent {
    constructor(tasksService, drawerService) {
        this.tasksService = tasksService;
        this.drawerService = drawerService;
        this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
            this.drawer = drawer;
        });
    }
    ngOnInit() {
        // Subscribe to update current project on changes
        this.onCurrentProjectChanged =
            this.tasksService.onCurrentProjectChanged
                .subscribe(project => {
                if (project) {
                    this.currentProject = project;
                }
                else {
                    this.currentProject = null;
                }
            });
        // Subscribe to update current task on changes
        this.onCurrentTaskChanged =
            this.tasksService.onCurrentTaskChanged
                .subscribe(task => {
                if (task) {
                    this.currentTask = task;
                }
                else {
                    this.currentTask = null;
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
        this.onCurrentProjectChanged.unsubscribe();
        this.onCurrentTaskChanged.unsubscribe();
        this.onDrawerChanged.unsubscribe();
    }
};
TaskManagerComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] },
    { type: _drawer_service__WEBPACK_IMPORTED_MODULE_3__["DrawerService"] }
];
TaskManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-manager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-manager.component.scss */ "./src/app/content/apps/task-manager/task-manager.component.scss")).default]
    })
], TaskManagerComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-manager.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-manager.module.ts ***!
  \******************************************************************/
/*! exports provided: TaskManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManagerModule", function() { return TaskManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _task_manager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-manager.component */ "./src/app/content/apps/task-manager/task-manager.component.ts");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/content/apps/task-manager/task-list/task-list.component.ts");
/* harmony import */ var _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-details/task-details.component */ "./src/app/content/apps/task-manager/task-details/task-details.component.ts");
/* harmony import */ var _task_sidebar_task_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-sidebar/task-sidebar.component */ "./src/app/content/apps/task-manager/task-sidebar/task-sidebar.component.ts");
/* harmony import */ var _task_list_task_list_item_task_list_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-list/task-list-item/task-list-item.component */ "./src/app/content/apps/task-manager/task-list/task-list-item/task-list-item.component.ts");
/* harmony import */ var _task_details_task_conversation_task_conversation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./task-details/task-conversation/task-conversation.component */ "./src/app/content/apps/task-manager/task-details/task-conversation/task-conversation.component.ts");
/* harmony import */ var _task_details_comment_box_comment_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./task-details/comment-box/comment-box.component */ "./src/app/content/apps/task-manager/task-details/comment-box/comment-box.component.ts");
/* harmony import */ var _helper_widgets_badges_badges_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helper-widgets/badges/badges.component */ "./src/app/content/apps/task-manager/helper-widgets/badges/badges.component.ts");
/* harmony import */ var _helper_widgets_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helper-widgets/header/header.component */ "./src/app/content/apps/task-manager/helper-widgets/header/header.component.ts");
/* harmony import */ var _helper_widgets_btn_complete_btn_complete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helper-widgets/btn-complete/btn-complete.component */ "./src/app/content/apps/task-manager/helper-widgets/btn-complete/btn-complete.component.ts");
/* harmony import */ var _task_details_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./task-details/header/header.component */ "./src/app/content/apps/task-manager/task-details/header/header.component.ts");
/* harmony import */ var _task_details_header_assignees_assignees_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./task-details/header/assignees/assignees.component */ "./src/app/content/apps/task-manager/task-details/header/assignees/assignees.component.ts");
/* harmony import */ var _task_details_header_date_date_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./task-details/header/date/date.component */ "./src/app/content/apps/task-manager/task-details/header/date/date.component.ts");
/* harmony import */ var _task_details_header_labels_labels_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./task-details/header/labels/labels.component */ "./src/app/content/apps/task-manager/task-details/header/labels/labels.component.ts");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./drawer/drawer.component */ "./src/app/content/apps/task-manager/drawer/drawer.component.ts");
/* harmony import */ var _drawer_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./drawer/notifications/notifications.component */ "./src/app/content/apps/task-manager/drawer/notifications/notifications.component.ts");
/* harmony import */ var _drawer_messages_messages_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./drawer/messages/messages.component */ "./src/app/content/apps/task-manager/drawer/messages/messages.component.ts");
/* harmony import */ var _drawer_search_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./drawer/search/search.component */ "./src/app/content/apps/task-manager/drawer/search/search.component.ts");

























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: true
};
const routes = [
    {
        path: 'dashboard',
        component: _task_manager_component__WEBPACK_IMPORTED_MODULE_6__["TaskManagerComponent"],
        resolve: {
            tasks: _task_manager_service__WEBPACK_IMPORTED_MODULE_7__["TaskManagerService"]
        }
    },
    {
        path: 'dashboard/:taskId',
        component: _task_manager_component__WEBPACK_IMPORTED_MODULE_6__["TaskManagerComponent"],
        resolve: {
            tasks: _task_manager_service__WEBPACK_IMPORTED_MODULE_7__["TaskManagerService"]
        }
    },
    {
        path: 'user/:userId',
        component: _task_manager_component__WEBPACK_IMPORTED_MODULE_6__["TaskManagerComponent"],
        resolve: {
            tasks: _task_manager_service__WEBPACK_IMPORTED_MODULE_7__["TaskManagerService"]
        }
    },
    {
        path: 'user/:userId/:taskId',
        component: _task_manager_component__WEBPACK_IMPORTED_MODULE_6__["TaskManagerComponent"],
        resolve: {
            tasks: _task_manager_service__WEBPACK_IMPORTED_MODULE_7__["TaskManagerService"]
        }
    },
    {
        path: 'project/:projectId',
        component: _task_manager_component__WEBPACK_IMPORTED_MODULE_6__["TaskManagerComponent"],
        resolve: {
            tasks: _task_manager_service__WEBPACK_IMPORTED_MODULE_7__["TaskManagerService"]
        }
    },
    {
        path: 'project/:projectId/:taskId',
        component: _task_manager_component__WEBPACK_IMPORTED_MODULE_6__["TaskManagerComponent"],
        resolve: {
            tasks: _task_manager_service__WEBPACK_IMPORTED_MODULE_7__["TaskManagerService"]
        }
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
let TaskManagerModule = class TaskManagerModule {
};
TaskManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _task_manager_component__WEBPACK_IMPORTED_MODULE_6__["TaskManagerComponent"],
            _task_sidebar_task_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["TaskSidebarComponent"],
            _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_9__["TaskDetailsComponent"],
            _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_8__["TaskListComponent"],
            _task_list_task_list_item_task_list_item_component__WEBPACK_IMPORTED_MODULE_11__["TaskListItemComponent"],
            _task_details_task_conversation_task_conversation_component__WEBPACK_IMPORTED_MODULE_12__["TaskConversationComponent"],
            _task_details_comment_box_comment_box_component__WEBPACK_IMPORTED_MODULE_13__["CommentBoxComponent"],
            _helper_widgets_badges_badges_component__WEBPACK_IMPORTED_MODULE_14__["BadgesComponent"],
            _helper_widgets_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _helper_widgets_btn_complete_btn_complete_component__WEBPACK_IMPORTED_MODULE_16__["BtnCompleteComponent"],
            _task_details_header_header_component__WEBPACK_IMPORTED_MODULE_17__["TaskHeaderComponent"],
            _task_details_header_assignees_assignees_component__WEBPACK_IMPORTED_MODULE_18__["AssigneesComponent"],
            _task_details_header_date_date_component__WEBPACK_IMPORTED_MODULE_19__["DateComponent"],
            _task_details_header_labels_labels_component__WEBPACK_IMPORTED_MODULE_20__["LabelsComponent"],
            _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_21__["DrawerComponent"],
            _drawer_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_22__["NotificationsComponent"],
            _drawer_messages_messages_component__WEBPACK_IMPORTED_MODULE_23__["MessagesComponent"],
            _drawer_search_search_component__WEBPACK_IMPORTED_MODULE_24__["SearchComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__["OwlNativeDateTimeModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"]
        ],
        exports: [
            _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_8__["TaskListComponent"]
        ],
        providers: [
            _task_manager_service__WEBPACK_IMPORTED_MODULE_7__["TaskManagerService"],
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ]
    })
], TaskManagerModule);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-manager.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-manager.service.ts ***!
  \*******************************************************************/
/*! exports provided: TaskManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManagerService", function() { return TaskManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let TaskManagerService = class TaskManagerService {
    constructor(http, location) {
        this.http = http;
        this.location = location;
        this.tasksUrl = 'api/tasks-list'; // URL to web api
        this.taskConversationUrl = 'api/task-conversation'; // URL to web api
        this.labelsUrl = 'api/tasks-labels'; // URL to web api
        this.assigneesUrl = 'api/tasks-users'; // URL to web api
        this.projectsUrl = 'api/tasks-projects'; // URL to web api
        this.onSectionsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onTasksChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onTaskConversationChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.onCurrentTaskChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.onLabelsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onAssigneesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onProjectsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onCurrentProjectChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
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
                this.getTasks(),
                this.getLabels(),
                this.getAssignees(),
                this.getProjects()
            ]).then(() => {
                this.currentUser = this.assignees[0];
                if (this.routeParams.projectId) {
                    this.setCurrentProject(this.routeParams.projectId);
                }
                else {
                    this.setCurrentProject(null);
                }
                if (this.routeParams.taskId) {
                    this.setCurrentTask(this.routeParams.taskId);
                }
                else {
                    this.setCurrentTask(null);
                }
                resolve();
            }, reject);
        });
    }
    /**
     * Get tasks
     * @returns {Promise<Task[]>}
     */
    getTasks() {
        if (this.routeParams.projectId) {
            return this.getTasksByProjectId(this.routeParams.projectId);
        }
        else if (this.routeParams.userId) {
            if (this.routeParams.userId === 'watchlist') {
                return this.getTasksList();
            }
            else {
                return this.getTasksByAssigneeId(this.routeParams.userId);
            }
        }
        else {
            return this.getTasksList();
        }
    }
    /**
     * Get tasks by Project ID
     * @param projectId
     * @returns {Promise<Task[]>}
     */
    getTasksByProjectId(projectId) {
        return new Promise((resolve, reject) => {
            this.http.get(this.tasksUrl + '?project_id=' + projectId)
                .subscribe((response) => {
                this.tasks = response;
                this.onTasksChanged.next(this.tasks);
                resolve(this.tasks);
            }, reject);
        });
    }
    /**
     * Get tasks by Assignee ID
     * @param userId
     * @returns {Promise<Task[]>}
     */
    getTasksByAssigneeId(userId) {
        return new Promise((resolve, reject) => {
            this.http.get(this.tasksUrl + '?user_id=' + userId)
                .subscribe((response) => {
                this.tasks = response;
                this.onTasksChanged.next(this.tasks);
                resolve(this.tasks);
            }, reject);
        });
    }
    /**
     * Get all tasks
     * @returns {Promise<Task>}
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
    /**
     * Get all labels
     * @returns {Promise<any>}
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
     * Get all assignees
     * @returns {Promise<Assignee>}
     */
    getAssignees() {
        return new Promise((resolve, reject) => {
            this.http.get(this.assigneesUrl)
                .subscribe((response) => {
                this.assignees = response;
                this.onAssigneesChanged.next(this.assignees);
                resolve(this.assignees);
            }, reject);
        });
    }
    /**
     * Get all projects
     * @returns {Promise<Project>}
     */
    getProjects() {
        return new Promise((resolve, reject) => {
            this.http.get(this.projectsUrl)
                .subscribe((response) => {
                this.projects = response;
                this.onProjectsChanged.next(this.projects);
                resolve(this.projects);
            }, reject);
        });
    }
    /**
     * Set current project by id
     * @param id
     */
    setCurrentProject(id) {
        this.currentProject = this.projects.find(project => {
            if (id) {
                return project.id === id;
            }
            return false;
        });
        this.onCurrentProjectChanged.next(this.currentProject);
    }
    /**
     * Set current task by id
     * @param id
     */
    setCurrentTask(id) {
        this.currentTask = this.tasks.find(task => {
            if (id) {
                return task.id === id;
            }
            return false;
        });
        if (this.currentTask) {
            this.getTaskConversations(this.currentTask.id);
        }
        else {
            this.onTaskConversationChanged.next({});
        }
        this.onCurrentTaskChanged.next(this.currentTask);
        const taskParam = (this.currentTask) ? '/' + this.currentTask.id : '';
        const projectId = this.routeParams.projectId;
        const userId = this.routeParams.userId;
        const segments = this.location.path().split('/');
        if (projectId) {
            this.location.go(segments[1] + '/apps/task-manager/project/' + projectId + taskParam);
        }
        else if (userId) {
            this.location.go(segments[1] + '/apps/task-manager/user/' + userId + taskParam);
        }
        else {
            this.location.go(segments[1] + '/apps/task-manager/dashboard' + taskParam);
        }
    }
    /**
     * Add New Task
     * @param {Task} task
     * @return {Promise<any>}
     */
    addTask(task) {
        return new Promise((resolve, reject) => {
            this.http.post(this.tasksUrl + '/' + task.id, Object.assign({}, task))
                .subscribe(response => {
                this.getTasks().then(tasks => {
                    resolve(tasks);
                }, reject);
                const conversation = {
                    id: task.id,
                    conversations: []
                };
                this.createTaskConversation(conversation);
            });
        });
    }
    /**
     * Toggle label on task
     * @param labelId
     * @param task Task
     */
    toggleLabel(labelId, task) {
        const index = task.labels.indexOf(labelId);
        if (index !== -1) {
            task.labels.splice(index, 1);
        }
        else {
            task.labels.push(labelId);
        }
        // this.onCurrentTaskChanged.next(task);
        this.updateTask(task);
    }
    hasLabel(labelId, task) {
        if (!task.labels) {
            return false;
        }
        return task.labels.indexOf(labelId) !== -1;
    }
    updateTask(task) {
        return new Promise((resolve, reject) => {
            this.http.post(this.tasksUrl + '/' + task.id, Object.assign({}, task))
                .subscribe(response => {
                this.getTasks().then(tasks => {
                    resolve(tasks);
                }, reject);
            });
        });
    }
    /**
     * Create Task conversation entry in data
     * @param conversation
     * @return {Promise<any>}
     */
    createTaskConversation(conversation) {
        this.conversation = conversation;
        return new Promise((resolve, reject) => {
            this.http.post(this.taskConversationUrl + '/' + this.conversation.id, Object.assign({}, this.conversation))
                .subscribe(response => {
            });
        });
    }
    /**
     * Get task conversation by Task ID
     * @param taskId
     * @returns {Promise<any>}
     */
    getTaskConversations(taskId) {
        return new Promise((resolve, reject) => {
            this.http.get(this.taskConversationUrl + '/' + taskId)
                .subscribe((conversation) => {
                this.conversation = conversation;
                this.onTaskConversationChanged.next(this.conversation);
                resolve(this.conversation);
            }, reject);
        });
    }
    /**
     * Save comment
     * @param conversation
     * @return boolean
     */
    saveComment(commnet) {
        if (!this.conversation.conversations) {
            this.conversation.conversations = [];
        }
        this.conversation.conversations.push(commnet);
        return new Promise((resolve, reject) => {
            this.http.post(this.taskConversationUrl + '/' + this.conversation.id, Object.assign({}, this.conversation))
                .subscribe(response => {
                this.getTaskConversations(this.conversation.id).then(conversation => {
                    resolve(conversation);
                }, reject);
            });
        });
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};
TaskManagerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
TaskManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TaskManagerService);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task-sidebar/task-sidebar.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-sidebar/task-sidebar.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYXBwcy90YXNrLW1hbmFnZXIvdGFzay1zaWRlYmFyL3Rhc2stc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/apps/task-manager/task-sidebar/task-sidebar.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/content/apps/task-manager/task-sidebar/task-sidebar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TaskSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSidebarComponent", function() { return TaskSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/settings/settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../task-manager.service */ "./src/app/content/apps/task-manager/task-manager.service.ts");
/* harmony import */ var _drawer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../drawer.service */ "./src/app/content/apps/drawer.service.ts");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../task */ "./src/app/content/apps/task-manager/task.ts");
/* harmony import */ var _gaxon_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gaxon/helpers */ "./src/gaxon/helpers/index.ts");
/* harmony import */ var _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @gaxon/mix/animations */ "./src/gaxon/mix/animations.ts");









let TaskSidebarComponent = class TaskSidebarComponent {
    constructor(tasksService, drawerService, settingService, router) {
        this.tasksService = tasksService;
        this.drawerService = drawerService;
        this.settingService = settingService;
        this.router = router;
        this.classNames = 'dt-module__sidebar';
        this.isOpen = false;
        this.projects = [];
        this.assignees = [];
        this.headerLessLayout = ['modern', 'back-office', 'back-office-mini'];
        this.currentUser = this.tasksService.currentUser;
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
        // Subscribe to update projects on changes
        this.onProjectsChanged =
            this.tasksService.onProjectsChanged
                .subscribe(projects => {
                this.projects = projects;
            });
        // Subscribe to update assignees on changes
        this.onAssigneesChanged =
            this.tasksService.onAssigneesChanged
                .subscribe(assignees => {
                this.assignees = assignees;
            });
        // display app sidebar
        this.isOpen = window.innerWidth > 767;
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
        this.onProjectsChanged.unsubscribe();
        this.onAssigneesChanged.unsubscribe();
        this.onDrawerChanged.unsubscribe();
        this.onSettingChanged.unsubscribe();
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
    /**
     * Create new Task
     */
    onCreateTask() {
        const newTask = new _task__WEBPACK_IMPORTED_MODULE_6__["Task"]();
        newTask.id = _gaxon_helpers__WEBPACK_IMPORTED_MODULE_7__["GxHelper"].UUID();
        newTask.created = new Date();
        newTask.labels = [];
        newTask.user_id = '';
        if (this.tasksService.currentProject) {
            newTask.project_id = this.tasksService.currentProject.id;
        }
        this.tasksService.addTask(newTask).then((response) => {
            this.tasksService.setCurrentTask(newTask.id);
        });
    }
};
TaskSidebarComponent.ctorParameters = () => [
    { type: _task_manager_service__WEBPACK_IMPORTED_MODULE_4__["TaskManagerService"] },
    { type: _drawer_service__WEBPACK_IMPORTED_MODULE_5__["DrawerService"] },
    { type: _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], TaskSidebarComponent.prototype, "classNames", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.active')
], TaskSidebarComponent.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], TaskSidebarComponent.prototype, "onResize", null);
TaskSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/apps/task-manager/task-sidebar/task-sidebar.component.html")).default,
        animations: _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_8__["appAnimations"],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-sidebar.component.scss */ "./src/app/content/apps/task-manager/task-sidebar/task-sidebar.component.scss")).default]
    })
], TaskSidebarComponent);



/***/ }),

/***/ "./src/app/content/apps/task-manager/task.ts":
/*!***************************************************!*\
  !*** ./src/app/content/apps/task-manager/task.ts ***!
  \***************************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Task {
}


/***/ })

}]);
//# sourceMappingURL=task-manager-task-manager-module-es2015.js.map