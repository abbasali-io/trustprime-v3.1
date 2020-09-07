function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/content/apps/drawer.service.ts":
  /*!************************************************!*\
    !*** ./src/app/content/apps/drawer.service.ts ***!
    \************************************************/

  /*! exports provided: DrawerService */

  /***/
  function srcAppContentAppsDrawerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawerService", function () {
      return DrawerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DrawerService = /*#__PURE__*/function () {
      function DrawerService() {
        _classCallCheck(this, DrawerService);

        this.onDrawerChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        var drawer = {
          isOpen: false,
          activeMenu: ''
        };
        this.onDrawerChanged.next(drawer);
      }
      /**
       * Update
       * @param drawer
       */


      _createClass(DrawerService, [{
        key: "update",
        value: function update(drawer) {
          this.onDrawerChanged.next(drawer);
        }
      }]);

      return DrawerService;
    }();

    DrawerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DrawerService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map