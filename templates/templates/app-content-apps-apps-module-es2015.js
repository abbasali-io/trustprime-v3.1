(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-apps-apps-module"],{

/***/ "./src/app/content/apps/apps.module.ts":
/*!*********************************************!*\
  !*** ./src/app/content/apps/apps.module.ts ***!
  \*********************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _drawer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawer.service */ "./src/app/content/apps/drawer.service.ts");





const routes = [
    {
        path: 'task-manager',
        loadChildren: './task-manager/task-manager.module#TaskManagerModule'
    },
    {
        path: 'mail',
        loadChildren: './mail/mail.module#MailModule'
    },
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
    },
    {
        path: 'chat',
        loadChildren: './chat/chat.module#ChatModule'
    }
];
let AppsModule = class AppsModule {
};
AppsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: [],
        providers: [
            _drawer_service__WEBPACK_IMPORTED_MODULE_4__["DrawerService"]
        ]
    })
], AppsModule);



/***/ })

}]);
//# sourceMappingURL=app-content-apps-apps-module-es2015.js.map