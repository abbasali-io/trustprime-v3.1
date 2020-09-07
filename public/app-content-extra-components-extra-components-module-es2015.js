(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-extra-components-extra-components-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/notifications/notifications.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/notifications/notifications.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n  <h1 class=\"dt-page__title mb-0\">Notifications</h1>\r\n  <a href=\"https://scttcper.github.io/ngx-toastr/\" target=\"_blank\" title=\"Reference\">\r\n    <gx-icon name=\"link\" size=\"xl\"></gx-icon>\r\n  </a>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Notification Types\">\r\n\r\n      <button class=\"btn btn-outline-success mr-2 mb-2\" (click)=\"showSuccess()\">Success</button>\r\n      <button class=\"btn btn-outline-danger mr-2 mb-2\" (click)=\"showError()\">Error</button>\r\n      <button class=\"btn btn-outline-warning mr-2 mb-2\" (click)=\"showWarning()\">Warning</button>\r\n      <button class=\"btn btn-outline-info mb-2\" (click)=\"showInformation()\">Information</button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Progress Bar Animation\">\r\n\r\n      <button class=\"btn btn-outline-primary mr-2 mb-2\" (click)=\"showProgressBar('increasing')\">Increasing</button>\r\n      <button class=\"btn btn-outline-secondary mb-2\" (click)=\"showProgressBar('decreasing')\">Decreasing</button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Notification Position\">\r\n\r\n      <div class=\"card-row\">\r\n        <button class=\"btn btn-outline-primary mr-2 mb-2\" (click)=\"changePosition('toast-top-left')\">Top Left</button>\r\n        <button class=\"btn btn-outline-primary mr-2 mb-2\" (click)=\"changePosition('toast-top-center')\">Top Center</button>\r\n        <button class=\"btn btn-outline-primary mr-2 mb-2\" (click)=\"changePosition('toast-top-right')\">Top Right</button>\r\n        <button class=\"btn btn-outline-primary mb-2\" (click)=\"changePosition('toast-top-full-width')\">Top Full Width</button>\r\n      </div>\r\n\r\n      <div class=\"card-row\">\r\n        <button class=\"btn btn-outline-secondary mr-2 mb-2\" (click)=\"changePosition('toast-bottom-left')\">Bottom Left</button>\r\n        <button class=\"btn btn-outline-secondary mr-2 mb-2\" (click)=\"changePosition('toast-bottom-center')\">Bottom Center</button>\r\n        <button class=\"btn btn-outline-secondary mr-2 mb-2\" (click)=\"changePosition('toast-bottom-right')\">Bottom Right</button>\r\n        <button class=\"btn btn-outline-secondary mr-2 mb-2\" (click)=\"changePosition('toast-bottom-full-width')\">Bottom Full Width</button>\r\n        <button class=\"btn btn-primary mb-2\" (click)=\"openInlinePosition()\">Inline Position</button>\r\n      </div>\r\n\r\n      <div toastContainer></div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Custom Notifications\">\r\n\r\n      <button (click)=\"openToastNoAnimation()\" type=\"button\" class=\"btn btn-primary mr-2 mb-2\">No Animations</button>\r\n      <button (click)=\"openPinkToast()\" type=\"button\" class=\"btn btn-secondary mr-2 mb-2\">Pink</button>\r\n      <button (click)=\"openNotyf()\" type=\"button\" class=\"btn btn-dark mb-2\">Notyf</button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/sweet-alerts/sweet-alerts.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/sweet-alerts/sweet-alerts.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Sweet Alert</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Entry Header -->\r\n<div class=\"dt-entry__header\">\r\n  <h3 class=\"dt-entry__title\">Popup Types</h3>\r\n</div>\r\n<!-- /entry header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Toast Types\">\r\n\r\n      <swal #toastTypeSuccess\r\n            title=\"Success!\"\r\n            html=\"You clicked the button!\"\r\n            type=\"success\"\r\n            position=\"top-end\"\r\n            timer=\"3000\"\r\n            [showConfirmButton]=\"false\"\r\n            [toast]=\"true\">\r\n      </swal>\r\n\r\n      <swal #toastTypeError\r\n            title=\"Error!\"\r\n            html=\"You clicked the button!\"\r\n            type=\"error\"\r\n            position=\"top-end\"\r\n            timer=\"3000\"\r\n            [showConfirmButton]=\"false\"\r\n            [toast]=\"true\">\r\n      </swal>\r\n\r\n      <swal #toastTypeWarning\r\n            title=\"Warning!\"\r\n            html=\"You clicked the button!\"\r\n            type=\"warning\"\r\n            position=\"top-end\"\r\n            timer=\"3000\"\r\n            [showConfirmButton]=\"false\"\r\n            [toast]=\"true\">\r\n      </swal>\r\n\r\n      <swal #toastTypeInfo\r\n            title=\"Information!\"\r\n            html=\"You clicked the button!\"\r\n            type=\"info\"\r\n            position=\"top-end\"\r\n            timer=\"3000\"\r\n            [showConfirmButton]=\"false\"\r\n            [toast]=\"true\">\r\n      </swal>\r\n\r\n      <swal #toastTypeQuestion\r\n            title=\"Question!\"\r\n            html=\"You clicked the button!\"\r\n            type=\"question\"\r\n            position=\"top-end\"\r\n            timer=\"3000\"\r\n            [showConfirmButton]=\"false\"\r\n            [toast]=\"true\">\r\n      </swal>\r\n\r\n      <button class=\"btn btn-outline-success mr-2 mb-2\" (click)=\"toastTypeSuccess.fire()\">Success</button>\r\n      <button class=\"btn btn-outline-danger mr-2 mb-2\" (click)=\"toastTypeError.fire()\">Error</button>\r\n      <button class=\"btn btn-outline-warning mr-2 mb-2\" (click)=\"toastTypeWarning.fire()\">Warning</button>\r\n      <button class=\"btn btn-outline-info mr-2 mb-2\" (click)=\"toastTypeInfo.fire()\">Information</button>\r\n      <button class=\"btn btn-outline-primary mb-2\" (click)=\"toastTypeQuestion.fire()\">Question</button>\r\n\r\n    </gx-card>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Alert Types\">\r\n\r\n      <button class=\"btn btn-outline-success mr-2 mb-2\"\r\n              [swal]=\"['Success', 'You clicked the button!', 'success']\">\r\n        Success\r\n      </button>\r\n\r\n      <button class=\"btn btn-outline-danger mr-2 mb-2\"\r\n              [swal]=\"['Error', 'You clicked the button!', 'error']\">\r\n        Error\r\n      </button>\r\n\r\n      <button class=\"btn btn-outline-warning mr-2 mb-2\"\r\n              [swal]=\"['Warning', 'You clicked the button!', 'warning']\">\r\n        Warning\r\n      </button>\r\n\r\n      <button class=\"btn btn-outline-info mr-2 mb-2\"\r\n              [swal]=\"['Information', 'You clicked the button!', 'info']\">\r\n        Information\r\n      </button>\r\n\r\n      <button class=\"btn btn-outline-primary mb-2\"\r\n              [swal]=\"['Question', 'You clicked the button!', 'question']\">\r\n        Question\r\n      </button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n\r\n<!-- Entry Header -->\r\n<div class=\"dt-entry__header\">\r\n  <h3 class=\"dt-entry__title\">Alets Examples</h3>\r\n</div>\r\n<!-- /entry header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card body-class=\"text-center\">\r\n\r\n      <p class=\"lead\">A basic message</p>\r\n      <button class=\"btn btn-outline-primary\" [swal]=\"[ 'You clicked the button!']\">Click Me\r\n      </button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card body-class=\"text-center\">\r\n\r\n      <p class=\"lead\">Title with text</p>\r\n      <button class=\"btn btn-outline-primary\"\r\n              [swal]=\"[ 'Good job!' , 'Contrary to popular belief, Lorem Ipsum is not simply random text.']\">Click Me\r\n      </button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card body-class=\"text-center\">\r\n\r\n      <p class=\"lead\">Show succcess message</p>\r\n      <button class=\"btn btn-outline-primary\"\r\n              [swal]=\"[ 'Success' , 'Contrary to popular belief, Lorem Ipsum is not simply random text.', 'success']\">\r\n        Click Me\r\n      </button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card body-class=\"text-center\">\r\n\r\n      <p class=\"lead\">Show error message and footer</p>\r\n      <button class=\"btn btn-outline-primary\"\r\n              [swal]=\"{title: 'Oops!', text: 'This is not implemented yet :/', type: 'error', footer: '<a href=https://sweetalert2.github.io/>Why do I have this issue?</a>'}\">\r\n        Click Me\r\n      </button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card body-class=\"text-center\">\r\n\r\n      <p class=\"lead\">Image with message</p>\r\n      <button class=\"btn btn-outline-primary\"\r\n              [swal]=\"{title: 'Breakfast' , text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas cupiditate non provident.', imageUrl: 'https://via.placeholder.com/640x420', imageAlt: 'Coffee'}\">\r\n        Click Me\r\n      </button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card body-class=\"text-center\">\r\n\r\n      <p class=\"lead\">Custom HTML message</p>\r\n      <button class=\"btn btn-outline-primary\" [swal]=\"customHtml\">Click Me</button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card body-class=\"text-center\">\r\n\r\n      <p class=\"lead\">Custom Position</p>\r\n      <button class=\"btn btn-outline-primary\" [swal]=\"customPosition\">Click Me</button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card body-class=\"text-center\">\r\n\r\n      <p class=\"lead\">Auto close timer</p>\r\n      <swal #autoCloseSwal\r\n            title=\"Auto close alert!\"\r\n            [html]=\"'I will close automatically in ' + secondsLeft + ' milliseconds.'\"\r\n            timer=\"2000\"\r\n            (open)=\"openAutoClose($event)\"\r\n            (close)=\"closeAutoClose($event)\">\r\n      </swal>\r\n\r\n      <button class=\"btn btn-outline-primary\" (click)=\"autoCloseSwal.fire()\">Click Me</button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card body-class=\"text-center\">\r\n\r\n      <p class=\"lead\">Advanced Alert</p>\r\n      <swal\r\n        #deleteSwal\r\n        title=\"Are you sure?\"\r\n        text=\"Buttons below are styled with Bootstrap classes\"\r\n        type=\"warning\"\r\n        confirmButtonClass=\"btn btn-success ml-1\"\r\n        cancelButtonClass=\"btn btn-danger mr-1\"\r\n        confirmButtonText=\"Yes, delete it!\"\r\n        cancelButtonText=\"No, cancel!\"\r\n        [buttonsStyling]=\"false\"\r\n        [showCancelButton]=\"true\"\r\n        [focusCancel]=\"true\"\r\n        [reverseButtons]=\"true\"\r\n        (confirm)=\"deleteConfirm()\"\r\n        (cancel)=\"deleteCancel()\">\r\n      </swal>\r\n\r\n      <button class=\"btn btn-outline-primary\" (click)=\"deleteSwal.fire()\">Click Me</button>\r\n\r\n      <swal\r\n        #deleteConfirmSwal\r\n        title=\"Deleted!\"\r\n        text=\"Your file has been deleted.\"\r\n        type=\"success\"\r\n        timer=\"2000\">\r\n      </swal>\r\n\r\n      <swal\r\n        #deleteCancelSwal\r\n        title=\"Cancelled!\"\r\n        text=\"Your imaginary file is safe :)\"\r\n        type=\"error\"\r\n        timer=\"2000\">\r\n      </swal>\r\n\r\n    </gx-card>\r\n    <!-- /card -->\r\n\r\n  </div>\r\n  <!-- /grid item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n");

/***/ }),

/***/ "./src/app/content/extra-components/extra-components.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/content/extra-components/extra-components.module.ts ***!
  \*********************************************************************/
/*! exports provided: ExtraComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraComponentsModule", function() { return ExtraComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _sweet_alerts_sweet_alerts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sweet-alerts/sweet-alerts.component */ "./src/app/content/extra-components/sweet-alerts/sweet-alerts.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/content/extra-components/notifications/notifications.component.ts");









const routes = [
    {
        path: 'editors',
        loadChildren: './editors/editors.module#EditorsModule'
    },
    {
        path: 'pickers',
        loadChildren: './pickers/pickers.module#PickersModule'
    },
    {
        path: 'sweet-alerts',
        component: _sweet_alerts_sweet_alerts_component__WEBPACK_IMPORTED_MODULE_7__["SweetAlertsComponent"]
    },
    {
        path: 'notifications',
        component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"]
    }
];
let ExtraComponentsModule = class ExtraComponentsModule {
};
ExtraComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SweetAlert2Module"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastContainerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _sweet_alerts_sweet_alerts_component__WEBPACK_IMPORTED_MODULE_7__["SweetAlertsComponent"],
            _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"]
        ]
    })
], ExtraComponentsModule);



/***/ }),

/***/ "./src/app/content/extra-components/notifications/notifications.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/content/extra-components/notifications/notifications.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvZXh0cmEtY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/extra-components/notifications/notifications.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/extra-components/notifications/notifications.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _gaxon_components_notifications_notyf_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gaxon/components/notifications/notyf.toast */ "./src/gaxon/components/notifications/notyf.toast.ts");
/* harmony import */ var _gaxon_components_notifications_pink_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gaxon/components/notifications/pink.toast */ "./src/gaxon/components/notifications/pink.toast.ts");







const quotes = [
    {
        title: 'Title',
        message: 'Message',
    },
    {
        title: '😃',
        message: 'Supports Emoji',
    },
    {
        message: 'My name is Inigo Montoya. You killed my father. Prepare to die!',
    },
    {
        message: 'Titles are not always needed',
    },
    {
        title: 'Title only 👊',
    },
    {
        title: '',
        message: `Supports Angular ${_angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full}`,
    },
];
let NotificationsComponent = class NotificationsComponent {
    constructor(title, toastr) {
        this.toastr = toastr;
        this.types = ['success', 'error', 'info', 'warning'];
        this.type = this.types[0];
        this.options = this.toastr.toastrConfig;
        const current = title.getTitle();
        title.setTitle(`${current}: Notifications`);
    }
    ngOnInit() {
    }
    getMessage() {
        const randomMessage = quotes[Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["random"])(0, quotes.length - 1)];
        const m = randomMessage.message;
        const t = randomMessage.title;
        return { message: m, title: t };
    }
    showSuccess() {
        this.toastr.success('Signed in successfully', 'Success!');
    }
    showError() {
        this.toastr.error('Do not press this button', 'Error!');
    }
    showWarning() {
        this.toastr.warning('You have pressed the button.', 'Warning!');
    }
    showInformation() {
        this.toastr.info('Press this button to go to next step.', 'Information!');
    }
    showProgressBar(progressAnimation) {
        const opt = Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(this.options);
        opt.progressBar = true;
        opt.progressAnimation = progressAnimation;
        this.type = this.types[Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["random"])(0, this.types.length - 1)];
        const toastType = this.options.iconClasses[this.type];
        this.toastr.show('You have pressed the Progress Bar button.', 'Progress Bar!', opt, toastType);
    }
    changePosition(positionClass) {
        const opt = Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(this.options);
        opt.positionClass = positionClass;
        this.type = this.types[Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["random"])(0, this.types.length - 1)];
        const toastType = this.options.iconClasses[this.type];
        this.toastr.show('You have pressed the Position button.', 'Progress Bar!', opt, toastType);
    }
    openInlinePosition() {
        this.toastr.overlayContainer = this.inlineContainer;
        const { message, title } = this.getMessage();
        const opt = Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(this.options);
        opt.positionClass = 'toast-inline';
        this.type = this.types[Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["random"])(0, this.types.length - 1)];
        this.toastr.show(message, title, opt, this.options.iconClasses[this.type]);
    }
    openToastNoAnimation() {
        const { message, title } = this.getMessage();
        const opt = Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(this.options);
        this.type = this.types[Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["random"])(0, this.types.length - 1)];
        opt.toastComponent = ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastNoAnimation"];
        this.toastr.show(message, title, opt, this.options.iconClasses[this.type]);
    }
    openPinkToast() {
        const opt = Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(this.options);
        opt.toastComponent = _gaxon_components_notifications_pink_toast__WEBPACK_IMPORTED_MODULE_6__["PinkToastComponent"];
        opt.toastClass = 'pinktoast';
        const { message, title } = this.getMessage();
        this.toastr.show(message, title, opt);
    }
    openNotyf() {
        const opt = Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(this.options);
        opt.toastComponent = _gaxon_components_notifications_notyf_toast__WEBPACK_IMPORTED_MODULE_5__["NotyfToastComponent"];
        opt.toastClass = 'notyf confirm';
        opt.positionClass = 'notyf-container';
        this.options.newestOnTop = false;
        const { message, title } = this.getMessage();
        this.toastr.show(message || 'Success', title, opt);
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastContainerDirective"], { static: false })
], NotificationsComponent.prototype, "inlineContainer", void 0);
NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/notifications/notifications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.component.scss */ "./src/app/content/extra-components/notifications/notifications.component.scss")).default]
    })
], NotificationsComponent);



/***/ }),

/***/ "./src/app/content/extra-components/sweet-alerts/sweet-alerts.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/content/extra-components/sweet-alerts/sweet-alerts.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvZXh0cmEtY29tcG9uZW50cy9zd2VldC1hbGVydHMvc3dlZXQtYWxlcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/extra-components/sweet-alerts/sweet-alerts.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/extra-components/sweet-alerts/sweet-alerts.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SweetAlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlertsComponent", function() { return SweetAlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SweetAlertsComponent = class SweetAlertsComponent {
    constructor() {
        this.customHtml = {
            title: '<i>HTML</i> <u>example</u>',
            type: 'info',
            html: 'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="icon icon-thumbs-up icon-fw"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="icon icon-thumbs-down icon-fw"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
        };
        this.customPosition = {
            position: 'top-start',
            type: 'success',
            title: 'Custom Position',
            text: 'Alert message postion Top Start'
        };
        this.secondsLeft = 2000;
    }
    ngOnInit() {
    }
    openAutoClose(event) {
        this.timerInterval = setInterval(() => {
            this.secondsLeft = this.secondsLeft - 50;
        }, 50);
    }
    closeAutoClose(event) {
        this.secondsLeft = 2000;
        clearInterval(this.timerInterval);
    }
    deleteConfirm() {
        this.deleteConfirmSwal.fire();
    }
    deleteCancel() {
        this.deleteCancelSwal.fire();
    }
    saveEmail(email) {
        // ... save user email
    }
    handleRefusalToSetEmail(dismissMethod) {
        // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
        // ... do something
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteSwal', { static: true })
], SweetAlertsComponent.prototype, "deleteSwal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoCloseSwal', { static: true })
], SweetAlertsComponent.prototype, "autoCloseSwal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteConfirmSwal', { static: true })
], SweetAlertsComponent.prototype, "deleteConfirmSwal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteCancelSwal', { static: true })
], SweetAlertsComponent.prototype, "deleteCancelSwal", void 0);
SweetAlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sweet-alerts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sweet-alerts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/sweet-alerts/sweet-alerts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sweet-alerts.component.scss */ "./src/app/content/extra-components/sweet-alerts/sweet-alerts.component.scss")).default]
    })
], SweetAlertsComponent);



/***/ })

}]);
//# sourceMappingURL=app-content-extra-components-extra-components-module-es2015.js.map