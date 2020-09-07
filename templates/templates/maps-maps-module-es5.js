function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"], {
  /***/
  "./node_modules/@agm/snazzy-info-window/fesm2015/agm-snazzy-info-window.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/@agm/snazzy-info-window/fesm2015/agm-snazzy-info-window.js ***!
    \*********************************************************************************/

  /*! exports provided: AgmSnazzyInfoWindow, AgmSnazzyInfoWindowModule */

  /***/
  function node_modulesAgmSnazzyInfoWindowFesm2015AgmSnazzyInfoWindowJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmSnazzyInfoWindow", function () {
      return AgmSnazzyInfoWindow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmSnazzyInfoWindowModule", function () {
      return AgmSnazzyInfoWindowModule;
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


    var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");

    var AgmSnazzyInfoWindow = /*#__PURE__*/function () {
      function AgmSnazzyInfoWindow(_marker, _wrapper, _manager, _loader) {
        _classCallCheck(this, AgmSnazzyInfoWindow);

        this._marker = _marker;
        this._wrapper = _wrapper;
        this._manager = _manager;
        this._loader = _loader;
        /**
         * Changes the open status of the snazzy info window.
         */

        this.isOpen = false;
        /**
         * Emits when the open status changes.
         */

        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Choose where you want the info window to be displayed, relative to the marker.
         */

        this.placement = 'top';
        /**
         * The max width in pixels of the info window.
         */

        this.maxWidth = 200;
        /**
         * The max height in pixels of the info window.
         */

        this.maxHeight = 200;
        /**
         * Determines if the info window will open when the marker is clicked.
         * An internal listener is added to the Google Maps click event which calls the open() method.
         */

        this.openOnMarkerClick = true;
        /**
         * Determines if the info window will close when the map is clicked. An internal listener is added to the Google Maps click event which calls the close() method.
         * This will not activate on the Google Maps drag event when the user is panning the map.
         */

        this.closeOnMapClick = true;
        /**
         * Determines if the info window will close when any other Snazzy Info Window is opened.
         */

        this.closeWhenOthersOpen = false;
        /**
         * Determines if the info window will show a close button.
         */

        this.showCloseButton = true;
        /**
         * Determines if the info window will be panned into view when opened.
         */

        this.panOnOpen = true;
        /**
         * Emits before the info window opens.
         */

        this.beforeOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits before the info window closes.
         */

        this.afterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._snazzyInfoWindowInitialized = null;
      }
      /**
       * @internal
       */


      _createClass(AgmSnazzyInfoWindow, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this._nativeSnazzyInfoWindow == null) {
            return;
          }

          if ('isOpen' in changes && this.isOpen) {
            this._openInfoWindow();
          } else if ('isOpen' in changes && !this.isOpen) {
            this._closeInfoWindow();
          }

          if (('latitude' in changes || 'longitude' in changes) && this._marker == null) {
            this._updatePosition();
          }
        }
        /**
         * @internal
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          var m = this._manager != null ? this._manager.getNativeMarker(this._marker) : null;
          this._snazzyInfoWindowInitialized = this._loader.load().then(function () {
            return __webpack_require__(
            /*! snazzy-info-window */
            "./node_modules/snazzy-info-window/dist/snazzy-info-window.min.js");
          }).then(function (module) {
            return Promise.all([module, m, _this._wrapper.getNativeMap()]);
          }).then(function (elems) {
            var options = {
              map: elems[2],
              content: '',
              placement: _this.placement,
              maxWidth: _this.maxWidth,
              maxHeight: _this.maxHeight,
              backgroundColor: _this.backgroundColor,
              padding: _this.padding,
              border: _this.border,
              borderRadius: _this.borderRadius,
              fontColor: _this.fontColor,
              pointer: _this.pointer,
              shadow: _this.shadow,
              closeOnMapClick: _this.closeOnMapClick,
              openOnMarkerClick: _this.openOnMarkerClick,
              closeWhenOthersOpen: _this.closeWhenOthersOpen,
              showCloseButton: _this.showCloseButton,
              panOnOpen: _this.panOnOpen,
              wrapperClass: _this.wrapperClass,
              callbacks: {
                beforeOpen: function beforeOpen() {
                  _this._createViewContent();

                  _this.beforeOpen.emit();
                },
                afterOpen: function afterOpen() {
                  _this.isOpenChange.emit(_this.openStatus());
                },
                afterClose: function afterClose() {
                  _this.afterClose.emit();

                  _this.isOpenChange.emit(_this.openStatus());
                }
              }
            };

            if (elems[1] != null) {
              options.marker = elems[1];
            } else {
              options.position = {
                lat: _this.latitude,
                lng: _this.longitude
              };
            }

            _this._nativeSnazzyInfoWindow = new elems[0](options);
          });

          this._snazzyInfoWindowInitialized.then(function () {
            if (_this.isOpen) {
              _this._openInfoWindow();
            }
          });
        }
      }, {
        key: "_openInfoWindow",
        value: function _openInfoWindow() {
          var _this2 = this;

          this._snazzyInfoWindowInitialized.then(function () {
            _this2._createViewContent();

            _this2._nativeSnazzyInfoWindow.open();
          });
        }
      }, {
        key: "_closeInfoWindow",
        value: function _closeInfoWindow() {
          var _this3 = this;

          this._snazzyInfoWindowInitialized.then(function () {
            _this3._nativeSnazzyInfoWindow.close();
          });
        }
      }, {
        key: "_createViewContent",
        value: function _createViewContent() {
          if (this._viewContainerRef.length === 1) {
            return;
          }

          var evr = this._viewContainerRef.createEmbeddedView(this._templateRef);

          this._nativeSnazzyInfoWindow.setContent(this._outerWrapper.nativeElement); // we have to run this in a separate cycle.


          setTimeout(function () {
            evr.detectChanges();
          });
        }
      }, {
        key: "_updatePosition",
        value: function _updatePosition() {
          this._nativeSnazzyInfoWindow.setPosition({
            lat: this.latitude,
            lng: this.longitude
          });
        }
        /**
         * Returns true when the Snazzy Info Window is initialized and open.
         */

      }, {
        key: "openStatus",
        value: function openStatus() {
          return this._nativeSnazzyInfoWindow && this._nativeSnazzyInfoWindow.isOpen();
        }
        /**
         * @internal
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._nativeSnazzyInfoWindow) {
            this._nativeSnazzyInfoWindow.destroy();
          }
        }
      }]);

      return AgmSnazzyInfoWindow;
    }();

    AgmSnazzyInfoWindow.ctorParameters = function () {
      return [{
        type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMarker"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"]
      }, {
        type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MarkerManager"]
      }, {
        type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmSnazzyInfoWindow.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmSnazzyInfoWindow.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmSnazzyInfoWindow.prototype, "isOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmSnazzyInfoWindow.prototype, "isOpenChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmSnazzyInfoWindow.prototype, "placement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmSnazzyInfoWindow.prototype, "maxWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmSnazzyInfoWindow.prototype, "maxHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmSnazzyInfoWindow.prototype, "backgroundColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmSnazzyInfoWindow.prototype, "padding", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmSnazzyInfoWindow.prototype, "border", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmSnazzyInfoWindow.prototype, "borderRadius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmSnazzyInfoWindow.prototype, "fontColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmSnazzyInfoWindow.prototype, "fontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmSnazzyInfoWindow.prototype, "pointer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmSnazzyInfoWindow.prototype, "shadow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmSnazzyInfoWindow.prototype, "openOnMarkerClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmSnazzyInfoWindow.prototype, "closeOnMapClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmSnazzyInfoWindow.prototype, "wrapperClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmSnazzyInfoWindow.prototype, "closeWhenOthersOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmSnazzyInfoWindow.prototype, "showCloseButton", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmSnazzyInfoWindow.prototype, "panOnOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmSnazzyInfoWindow.prototype, "beforeOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmSnazzyInfoWindow.prototype, "afterClose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('outerWrapper', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AgmSnazzyInfoWindow.prototype, "_outerWrapper", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('viewContainer', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])], AgmSnazzyInfoWindow.prototype, "_viewContainerRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], AgmSnazzyInfoWindow.prototype, "_templateRef", void 0);
    AgmSnazzyInfoWindow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: 'agm-snazzy-info-window',
      template: '<div #outerWrapper><div #viewContainer></div></div><ng-content></ng-content>'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["MarkerManager"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]])], AgmSnazzyInfoWindow);

    var AgmSnazzyInfoWindowModule = function AgmSnazzyInfoWindowModule() {
      _classCallCheck(this, AgmSnazzyInfoWindowModule);
    };

    AgmSnazzyInfoWindowModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [AgmSnazzyInfoWindow],
      exports: [AgmSnazzyInfoWindow]
    })], AgmSnazzyInfoWindowModule); // public API

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=agm-snazzy-info-window.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/visualization/maps/am-map/am-map.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/visualization/maps/am-map/am-map.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentVisualizationMapsAmMapAmMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Vector Maps</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-12\">\r\n\r\n    <!-- Card -->\r\n    <gx-card [card-title]=\"maps.animationsMap.title\">\r\n\r\n      <div class=\"embed-responsive embed-responsive-21by9\">\r\n        <amCharts id=\"animationsMap\"\r\n                  class=\"embed-responsive-item\"\r\n                  [options]=\"maps.animationsMap.options\"\r\n                  [style.width.%]=\"100\"\r\n                  [style.height.%]=\"100\"></amCharts>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card [card-title]=\"maps.trackingMap.title\">\r\n\r\n      <div class=\"embed-responsive embed-responsive-21by9\">\r\n        <amCharts id=\"trackingMap\"\r\n                  class=\"embed-responsive-item\"\r\n                  [options]=\"maps.trackingMap.options\"\r\n                  [style.width.%]=\"100\"\r\n                  [style.height.%]=\"100\"></amCharts>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card [card-title]=\"maps.zoomingMap.title\">\r\n\r\n      <div class=\"embed-responsive embed-responsive-21by9\">\r\n        <amCharts id=\"zoomingMap\"\r\n                  class=\"embed-responsive-item\"\r\n                  [options]=\"maps.zoomingMap.options\"\r\n                  [style.width.%]=\"100\"\r\n                  [style.height.%]=\"100\"></amCharts>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/visualization/maps/google-map/google-map.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/visualization/maps/google-map/google-map.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentVisualizationMapsGoogleMapGoogleMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Google Maps</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-12\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Basic Map\">\r\n\r\n      <div class=\"embed-responsive embed-responsive-21by9\">\r\n        <agm-map class=\"embed-responsive-item border\"\r\n                 [latitude]=\"lat\"\r\n                 [longitude]=\"lng\"\r\n                 [zoom]=\"zoom\"\r\n                 [disableDefaultUI]=\"false\"\r\n                 [zoomControl]=\"false\"\r\n                 (mapClick)=\"mapClicked($event)\">\r\n\r\n          <agm-marker\r\n            *ngFor=\"let m of markers; let i = index\"\r\n            (markerClick)=\"clickedMarker(m.label, i)\"\r\n            [latitude]=\"m.lat\"\r\n            [longitude]=\"m.lng\"\r\n            [label]=\"m.label\"\r\n            [markerDraggable]=\"m.draggable\"\r\n            (dragEnd)=\"markerDragEnd(m, $event)\">\r\n\r\n            <agm-info-window>\r\n              <strong>InfoWindow content</strong>\r\n            </agm-info-window>\r\n\r\n          </agm-marker>\r\n\r\n          <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\"\r\n                      [radius]=\"50000\"\r\n                      [fillColor]=\"'red'\"\r\n                      [circleDraggable]=\"true\"\r\n                      [editable]=\"true\">\r\n          </agm-circle>\r\n        </agm-map>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Basic Info Windows + Zoom Control\">\r\n\r\n      <div class=\"embed-responsive embed-responsive-21by9\">\r\n        <agm-map class=\"embed-responsive-item border\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n            <agm-info-window>\r\n              <h3>Default Info Window</h3>\r\n              Adding an Info Window to a Map Marker\r\n            </agm-info-window>\r\n          </agm-marker>\r\n        </agm-map>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Styled info windows with 'Snazzy Info Window'\">\r\n\r\n      <div class=\"embed-responsive embed-responsive-21by9 border\">\r\n        <agm-map class=\"embed-responsive-item\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n            <agm-snazzy-info-window [maxWidth]=\"400\" [maxHeight]=\"400\" [closeWhenOthersOpen]=\"true\">\r\n              <ng-template>\r\n                <div class=\"card\">\r\n                  <img class=\"card-img-top\" src=\"https://via.placeholder.com/640X420\" alt=\"Skateboard\">\r\n                  <div class=\"card-body\">\r\n                    <p class=\"card-text\">\r\n                      Some quick example text to build on the\r\n                      card title and make up the bulk of the\r\n                      card's content.\r\n                    </p>\r\n                    <a href=\"javascript:void(0)\" class=\"btn btn-primary\">Go somewhere</a>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </agm-snazzy-info-window>\r\n          </agm-marker>\r\n        </agm-map>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /rid Item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n";
    /***/
  },

  /***/
  "./node_modules/snazzy-info-window/dist/snazzy-info-window.min.js":
  /*!************************************************************************!*\
    !*** ./node_modules/snazzy-info-window/dist/snazzy-info-window.min.js ***!
    \************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSnazzyInfoWindowDistSnazzyInfoWindowMinJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !function (t, e) {
      if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = e, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
        var o;
      }
    }(this, function (t, e) {
      "use strict";

      function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }

      function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
      }

      function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }

      function n(t, e) {
        t && e && Object.keys(e).forEach(function (o) {
          t[o] = e[o];
        });
      }

      function r(t) {
        var e = {};
        return n(e, f), n(e, t), Object.keys(f).forEach(function (t) {
          var o = f[t];

          if ("object" === (void 0 === o ? "undefined" : d(o))) {
            var i = {};
            n(i, o), n(i, e[t]), e[t] = i;
          }
        }), e;
      }

      function h(t, e) {
        var o = /^(-{0,1}\.{0,1}\d+(\.\d+)?)[\s|\.]*(\w*)$/;

        if (t && o.test(t)) {
          var i = o.exec(t);
          return {
            value: 1 * i[1],
            units: i[3] || "px",
            original: t
          };
        }

        return e ? h(e) : {
          original: e
        };
      }

      function p(t, e) {
        if (t) {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          e && ("string" == typeof e ? t.innerHTML = e : t.appendChild(e));
        }
      }

      function a(t) {
        return "top" === t ? "bottom" : "bottom" === t ? "top" : "left" === t ? "right" : "right" === t ? "left" : t;
      }

      function l(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }

      function c(t) {
        if (void 0 !== t && null !== t) {
          if (t instanceof google.maps.LatLng) return t;
          if (void 0 !== t.lat && void 0 !== t.lng) return new google.maps.LatLng(t);
        }

        return null;
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var _ = function () {
        function t(t, e) {
          for (var o = 0; o < e.length; o++) {
            var i = e[o];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
          }
        }

        return function (e, o, i) {
          return o && t(e.prototype, o), i && t(e, i), e;
        };
      }(),
          d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      },
          u = {
        h: "0px",
        v: "3px",
        blur: "6px",
        spread: "0px",
        color: "#000"
      },
          f = {
        placement: "top",
        pointer: !0,
        openOnMarkerClick: !0,
        closeOnMapClick: !0,
        closeWhenOthersOpen: !1,
        showCloseButton: !0,
        panOnOpen: !0,
        edgeOffset: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }
      },
          m = function (t) {
        function e(t) {
          o(this, e);
          var s = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          if ("undefined" == typeof google) return console.warn("Snazzy Info Window: Google Maps is not defined!"), i(s);
          s._html = null, s._opts = r(t), s._callbacks = s._opts.callbacks || {}, s._marker = s._opts.marker, s._map = s._opts.map, s._position = c(s._opts.position), s._isOpen = !1, s._listeners = [], s._marker && s._opts.openOnMarkerClick && s.trackListener(google.maps.event.addListener(s._marker, "click", function () {
            s.getMap() || s.open();
          }), !0), s._position && !s._opts.offset && (s._opts.offset = {
            top: "0px",
            left: "0px"
          });
          var n = t.placement || s._opts.position;
          return ("string" == typeof n || n instanceof String) && (n = n.toLowerCase()), s._opts.placement = "top" !== n && "bottom" !== n && "left" !== n && "right" !== n ? f.placement : n, n = s._opts.position, void 0 === n || null === n || "string" == typeof n || n instanceof String || (s._opts.position = n), void 0 !== s._opts.border && s._opts.border !== !0 || (s._opts.border = {}), void 0 === s._opts.pointer && (s._opts.pointer = f.pointer), void 0 !== s._opts.shadow && s._opts.shadow !== !0 || (s._opts.shadow = {}), s;
        }

        return s(e, t), _(e, [{
          key: "activateCallback",
          value: function value(t) {
            var e = this._callbacks[t];
            return e ? e.apply(this) : void 0;
          }
        }, {
          key: "trackListener",
          value: function value(t, e) {
            this._listeners.push({
              listener: t,
              persistent: e
            });
          }
        }, {
          key: "clearListeners",
          value: function value(t) {
            this._listeners && (this._listeners.forEach(function (e) {
              !t && e.persistent || (google.maps.event.removeListener(e.listener), e.listener = null);
            }), this._listeners = this._listeners.filter(function (t) {
              return null != t.listener;
            }));
          }
        }, {
          key: "isOpen",
          value: function value() {
            return this._isOpen;
          }
        }, {
          key: "open",
          value: function value() {
            var t = this.activateCallback("beforeOpen");
            (void 0 === t || t) && (this._marker ? this.setMap(this._marker.getMap()) : this._map && this._position && this.setMap(this._map));
          }
        }, {
          key: "close",
          value: function value() {
            var t = this.activateCallback("beforeClose");
            (void 0 === t || t) && (this.clearListeners(), this.setMap(null));
          }
        }, {
          key: "destroy",
          value: function value() {
            this.getMap() && this.setMap(null), this.clearListeners(!0);
          }
        }, {
          key: "setContent",
          value: function value(t) {
            this._opts.content = t, this._html && this._html.content && p(this._html.content, t);
          }
        }, {
          key: "setPosition",
          value: function value(t) {
            this._position = c(t), this._isOpen && this._position && (this.draw(), this.resize(), this.reposition());
          }
        }, {
          key: "setWrapperClass",
          value: function value(t) {
            if (this._html && this._html.wrapper) {
              var e = this._html.wrapper;
              e.className = "si-wrapper-" + this._opts.placement, this._opts.border && (e.className += " si-has-border"), t && (e.className += " " + t);
            }

            this._opts.wrapperClass = t;
          }
        }, {
          key: "getWrapper",
          value: function value() {
            return this._html ? this._html.wrapper : null;
          }
        }, {
          key: "draw",
          value: function value() {
            if (this.getMap() && this._html && (this._marker || this._position)) {
              var t = this._opts.offset;
              t && (t.left && (this._html.wrapper.style.marginLeft = t.left), t.top && (this._html.wrapper.style.marginTop = t.top));
              var e = this._opts.backgroundColor;

              if (e && (this._html.contentWrapper.style.backgroundColor = e, this._opts.pointer && (this._html.pointerBg.style["border" + l(this._opts.placement) + "Color"] = e)), this._opts.padding && (this._html.contentWrapper.style.padding = this._opts.padding, this._opts.shadow && (this._html.shadowFrame.style.padding = this._opts.padding)), this._opts.borderRadius && (this._html.contentWrapper.style.borderRadius = this._opts.borderRadius, this._opts.shadow && (this._html.shadowFrame.style.borderRadius = this._opts.borderRadius)), this._opts.fontSize && (this._html.wrapper.style.fontSize = this._opts.fontSize), this._opts.fontColor && (this._html.contentWrapper.style.color = this._opts.fontColor), this._opts.pointer && this._opts.pointer !== !0 && (this._opts.shadow && (this._html.shadowPointer.style.width = this._opts.pointer, this._html.shadowPointer.style.height = this._opts.pointer), this._html.pointerBorder && (this._html.pointerBorder.style.borderWidth = this._opts.pointer), this._html.pointerBg.style.borderWidth = this._opts.pointer), this._opts.border) {
                var o = 0;

                if (void 0 !== this._opts.border.width && (o = h(this._opts.border.width, "0px"), this._html.contentWrapper.style.borderWidth = o.value + o.units), o = Math.round((this._html.contentWrapper.offsetWidth - this._html.contentWrapper.clientWidth) / 2), o = h(o + "px", "0px"), this._opts.pointer) {
                  var i = Math.min(this._html.pointerBorder.offsetHeight, this._html.pointerBorder.offsetWidth);
                  i = h(i + "px", "0px");
                  var s = Math.round(o.value * (1.41421356237 - 1));
                  s = Math.min(s, i.value), this._html.pointerBg.style.borderWidth = i.value - s + i.units;
                  var n = l(a(this._opts.placement));
                  this._html.pointerBg.style["margin" + n] = s + o.units, this._html.pointerBg.style[this._opts.placement] = -o.value + o.units;
                }

                var r = this._opts.border.color;
                r && (this._html.contentWrapper.style.borderColor = r, this._html.pointerBorder && (this._html.pointerBorder.style["border" + l(this._opts.placement) + "Color"] = r));
              }

              if (this._opts.shadow) {
                var p = this._opts.shadow,
                    c = function c(t) {
                  var e = p[t];
                  return void 0 !== e && null != e;
                };

                if (c("h") || c("v") || c("blur") || c("spread") || c("color")) {
                  var _ = h(p.h, u.h),
                      d = h(p.v, u.v),
                      f = h(p.blur, u.blur),
                      m = h(p.spread, u.spread),
                      g = p.color || u.color,
                      v = function v(t, e) {
                    return t + " " + e + " " + f.original + " " + m.original + " " + g;
                  };

                  this._html.shadowFrame.style.boxShadow = v(_.original, d.original);
                  var y = .7071067811865474 * (_.value - d.value) + _.units,
                      w = .7071067811865474 * (_.value + d.value) + d.units;
                  this._html.shadowPointerInner && (this._html.shadowPointerInner.style.boxShadow = v(y, w));
                }

                this._opts.shadow.opacity && (this._html.shadowWrapper.style.opacity = this._opts.shadow.opacity);
              }

              var b = this.getProjection().fromLatLngToDivPixel(this._position || this._marker.position);
              b && (this._html.floatWrapper.style.top = Math.floor(b.y) + "px", this._html.floatWrapper.style.left = Math.floor(b.x) + "px"), this._isOpen || (this._isOpen = !0, this.resize(), this.reposition(), this.activateCallback("afterOpen"), google.maps.event.trigger(this.getMap(), "snazzy-info-window-opened", this));
            }
          }
        }, {
          key: "onAdd",
          value: function value() {
            var t = this;

            if (!this._html) {
              var e = function e(t, _e) {
                if (t && _e) for (var o = 0; o < _e.length; o++) {
                  var i = _e[o];
                  i && (t.className && (t.className += " "), t.className += "si-" + i);
                }
              },
                  o = function o() {
                for (var t = arguments.length, o = Array(t), i = 0; i < t; i++) {
                  o[i] = arguments[i];
                }

                var s = document.createElement("div");
                return e(s, o), s;
              };

              if (this._html = {}, this._html.wrapper = o(), this.setWrapperClass(this._opts.wrapperClass), this._opts.shadow && (this._html.shadowWrapper = o("shadow-wrapper-" + this._opts.placement), this._html.shadowFrame = o("frame", "shadow-frame"), this._html.shadowWrapper.appendChild(this._html.shadowFrame), this._opts.pointer && (this._html.shadowPointer = o("shadow-pointer-" + this._opts.placement), this._html.shadowPointerInner = o("shadow-inner-pointer-" + this._opts.placement), this._html.shadowPointer.appendChild(this._html.shadowPointerInner), this._html.shadowWrapper.appendChild(this._html.shadowPointer)), this._html.wrapper.appendChild(this._html.shadowWrapper)), this._html.contentWrapper = o("frame", "content-wrapper"), this._html.content = o("content"), this._opts.content && p(this._html.content, this._opts.content), this._opts.showCloseButton) {
                if (this._opts.closeButtonMarkup) {
                  var i = document.createElement("div");
                  p(i, this._opts.closeButtonMarkup), this._html.closeButton = i.firstChild;
                } else this._html.closeButton = document.createElement("button"), this._html.closeButton.setAttribute("type", "button"), this._html.closeButton.innerHTML = "&#215;", e(this._html.closeButton, ["close-button"]);

                this._html.contentWrapper.appendChild(this._html.closeButton);
              }

              this._html.contentWrapper.appendChild(this._html.content), this._html.wrapper.appendChild(this._html.contentWrapper), this._opts.pointer && (this._opts.border && (this._html.pointerBorder = o("pointer-" + this._opts.placement, "pointer-border-" + this._opts.placement), this._html.wrapper.appendChild(this._html.pointerBorder)), this._html.pointerBg = o("pointer-" + this._opts.placement, "pointer-bg-" + this._opts.placement), this._html.wrapper.appendChild(this._html.pointerBg)), this._html.floatWrapper = o("float-wrapper"), this._html.floatWrapper.appendChild(this._html.wrapper), this.getPanes().floatPane.appendChild(this._html.floatWrapper);
              var s = this.getMap();
              this.clearListeners(), this._opts.closeOnMapClick && this.trackListener(google.maps.event.addListener(s, "click", function () {
                t.close();
              })), this._opts.closeWhenOthersOpen && this.trackListener(google.maps.event.addListener(s, "snazzy-info-window-opened", function (e) {
                t !== e && t.close();
              })), this._previousWidth = null, this._previousHeight = null, this.trackListener(google.maps.event.addListener(s, "bounds_changed", function () {
                var e = s.getDiv(),
                    o = e.offsetWidth,
                    i = e.offsetHeight,
                    n = t._previousWidth,
                    r = t._previousHeight;
                null !== n && null !== r && n === o && r === i || (t._previousWidth = o, t._previousHeight = i, t.resize());
              })), this._marker && this.trackListener(google.maps.event.addListener(this._marker, "position_changed", function () {
                t.draw();
              })), this._opts.showCloseButton && !this._opts.closeButtonMarkup && this.trackListener(google.maps.event.addDomListener(this._html.closeButton, "click", function (e) {
                e.cancelBubble = !0, e.stopPropagation && e.stopPropagation(), t.close();
              }));
              ["click", "dblclick", "rightclick", "contextmenu", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup", "touchstart", "touchend", "touchmove", "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"].forEach(function (e) {
                t.trackListener(google.maps.event.addDomListener(t._html.wrapper, e, function (t) {
                  t.cancelBubble = !0, t.stopPropagation && t.stopPropagation();
                }));
              }), this.activateCallback("open");
            }
          }
        }, {
          key: "onRemove",
          value: function value() {
            if (this.activateCallback("close"), this._html) {
              var t = this._html.floatWrapper.parentElement;
              t && t.removeChild(this._html.floatWrapper), this._html = null;
            }

            this._isOpen = !1, this.activateCallback("afterClose");
          }
        }, {
          key: "getMapInnerBounds",
          value: function value() {
            var t = this.getMap().getDiv().getBoundingClientRect(),
                e = {
              top: t.top + this._opts.edgeOffset.top,
              right: t.right - this._opts.edgeOffset.right,
              bottom: t.bottom - this._opts.edgeOffset.bottom,
              left: t.left + this._opts.edgeOffset.left
            };
            return e.width = e.right - e.left, e.height = e.bottom - e.top, e;
          }
        }, {
          key: "reposition",
          value: function value() {
            if (this._opts.panOnOpen && this._html) {
              var t = this.getMapInnerBounds(),
                  e = this._html.wrapper.getBoundingClientRect(),
                  o = 0,
                  i = 0;

              t.left >= e.left ? o = e.left - t.left : t.right <= e.right && (o = e.left - (t.right - e.width)), t.top >= e.top ? i = e.top - t.top : t.bottom <= e.bottom && (i = e.top - (t.bottom - e.height)), 0 === o && 0 === i || this.getMap().panBy(o, i);
            }
          }
        }, {
          key: "resize",
          value: function value() {
            if (this._html) {
              var t = this.getMapInnerBounds(),
                  e = t.width;
              void 0 !== this._opts.maxWidth && (e = Math.min(e, this._opts.maxWidth)), e -= this._html.wrapper.offsetWidth - this._html.content.offsetWidth, this._html.content.style.maxWidth = e + "px";
              var o = t.height;
              void 0 !== this._opts.maxHeight && (o = Math.min(o, this._opts.maxHeight)), o -= this._html.wrapper.offsetHeight - this._html.content.offsetHeight, this._html.content.style.maxHeight = o + "px";
            }
          }
        }]), e;
      }(function () {
        return "undefined" != typeof google ? google.maps.OverlayView : function () {};
      }());

      e["default"] = m, t.exports = e["default"];
    }); //# sourceMappingURL=snazzy-info-window.min.js.map

    /***/
  },

  /***/
  "./src/app/content/visualization/maps/am-map/am-map.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/content/visualization/maps/am-map/am-map.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentVisualizationMapsAmMapAmMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvdmlzdWFsaXphdGlvbi9tYXBzL2FtLW1hcC9hbS1tYXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/content/visualization/maps/am-map/am-map.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/content/visualization/maps/am-map/am-map.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AmMapComponent */

  /***/
  function srcAppContentVisualizationMapsAmMapAmMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmMapComponent", function () {
      return AmMapComponent;
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


    var _am_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./am-map.service */
    "./src/app/content/visualization/maps/am-map/am-map.service.ts");

    var AmMapComponent = /*#__PURE__*/function () {
      function AmMapComponent(ammapService) {
        _classCallCheck(this, AmMapComponent);

        this.ammapService = ammapService;
        this.maps = this.ammapService.mapsList;
      }

      _createClass(AmMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.maps.trackingMap.options.listeners = [{
            event: 'init',
            method: function method(event) {
              // get map object
              var map = event.chart; // map.amLink.classList.add('amcharts-link');

              map.amLink.remove();

              function createCustomMarker(image) {
                // create holder
                var holder = document.createElement('div');
                holder.className = 'map-marker';
                holder.title = image.title;
                holder.style.position = 'absolute'; // maybe add a link to it?

                if (undefined !== image.url) {
                  holder.onclick = function () {
                    window.location.href = image.url;
                  };

                  holder.className += ' map-clickable';
                } // create dot


                var dot = document.createElement('div');
                var dotClass = image.dotColor ? ' bg-' + image.dotColor : '';
                var pulseClass = image.pulseColor ? ' pulse-' + image.pulseColor : '';
                dot.className = 'dot-shape dot-shape-lg' + dotClass + pulseClass;
                holder.appendChild(dot); // append the marker to the map container

                image.chart.chartDiv.appendChild(holder);
                return holder;
              } // go through all of the images


              for (var x in map.dataProvider.images) {
                // get MapImage object
                var image = map.dataProvider.images[x]; // check if it has corresponding HTML element

                if ('undefined' === typeof image.externalElement) {
                  image.externalElement = createCustomMarker(image);
                } // reposition the element accoridng to coordinates


                var xy = map.coordinatesToStageXY(image.longitude, image.latitude);
                image.externalElement.style.top = xy.y + 'px';
                image.externalElement.style.left = xy.x + 'px';
              }
            }
          }];
        }
      }]);

      return AmMapComponent;
    }();

    AmMapComponent.ctorParameters = function () {
      return [{
        type: _am_map_service__WEBPACK_IMPORTED_MODULE_2__["AmMapService"]
      }];
    };

    AmMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-am-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./am-map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/visualization/maps/am-map/am-map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./am-map.component.scss */
      "./src/app/content/visualization/maps/am-map/am-map.component.scss"))["default"]]
    })], AmMapComponent);
    /***/
  },

  /***/
  "./src/app/content/visualization/maps/am-map/am-map.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/content/visualization/maps/am-map/am-map.service.ts ***!
    \*********************************************************************/

  /*! exports provided: AmMapService */

  /***/
  function srcAppContentVisualizationMapsAmMapAmMapServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmMapService", function () {
      return AmMapService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AmMapService = /*#__PURE__*/function () {
      function AmMapService(http) {
        _classCallCheck(this, AmMapService);

        this.http = http;
      }

      _createClass(AmMapService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            Promise.all([_this4.getMapsData()]).then(function () {
              resolve();
            }, reject);
          });
        }
      }, {
        key: "getMapsData",
        value: function getMapsData() {
          var _this5 = this;

          return new Promise(function (resolve, reject) {
            _this5.http.get('api/am-maps-list').subscribe(function (response) {
              _this5.mapsList = response;
              resolve(response);
            }, reject);
          });
        }
      }]);

      return AmMapService;
    }();

    AmMapService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AmMapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AmMapService);
    /***/
  },

  /***/
  "./src/app/content/visualization/maps/google-map/google-map.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/content/visualization/maps/google-map/google-map.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentVisualizationMapsGoogleMapGoogleMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvdmlzdWFsaXphdGlvbi9tYXBzL2dvb2dsZS1tYXAvZ29vZ2xlLW1hcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/content/visualization/maps/google-map/google-map.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/content/visualization/maps/google-map/google-map.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: GoogleMapComponent */

  /***/
  function srcAppContentVisualizationMapsGoogleMapGoogleMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function () {
      return GoogleMapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GoogleMapComponent = /*#__PURE__*/function () {
      function GoogleMapComponent() {
        _classCallCheck(this, GoogleMapComponent);

        // google maps zoom level
        this.zoom = 3; // initial center position for the map

        this.lat = 28.673858;
        this.lng = 77.815982;
        this.markers = [{
          lat: 29.673858,
          lng: 78.815982,
          label: 'A',
          draggable: true
        }, {
          lat: 31.673858,
          lng: 74.815982,
          label: 'B',
          draggable: false
        }, {
          lat: 41.723858,
          lng: 7.895982,
          label: 'C',
          draggable: true
        }];
      }

      _createClass(GoogleMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "clickedMarker",
        value: function clickedMarker(label, index) {
          console.log("clicked the marker: ".concat(label || index));
        }
      }, {
        key: "mapClicked",
        value: function mapClicked($event) {
          this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
          });
        }
      }, {
        key: "markerDragEnd",
        value: function markerDragEnd(m, $event) {
          console.log('dragEnd', m, $event);
        }
      }]);

      return GoogleMapComponent;
    }();

    GoogleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-google-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./google-map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/visualization/maps/google-map/google-map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./google-map.component.scss */
      "./src/app/content/visualization/maps/google-map/google-map.component.scss"))["default"]]
    })], GoogleMapComponent);
    /***/
  },

  /***/
  "./src/app/content/visualization/maps/maps.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/content/visualization/maps/maps.module.ts ***!
    \***********************************************************/

  /*! exports provided: MapsModule */

  /***/
  function srcAppContentVisualizationMapsMapsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsModule", function () {
      return MapsModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @gaxon/modules */
    "./src/gaxon/modules/index.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @agm/snazzy-info-window */
    "./node_modules/@agm/snazzy-info-window/fesm2015/agm-snazzy-info-window.js");
    /* harmony import */


    var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @amcharts/amcharts3-angular */
    "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
    /* harmony import */


    var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./google-map/google-map.component */
    "./src/app/content/visualization/maps/google-map/google-map.component.ts");
    /* harmony import */


    var _am_map_am_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./am-map/am-map.component */
    "./src/app/content/visualization/maps/am-map/am-map.component.ts");
    /* harmony import */


    var _am_map_am_map_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./am-map/am-map.service */
    "./src/app/content/visualization/maps/am-map/am-map.service.ts");

    var routes = [{
      path: 'google',
      component: _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_8__["GoogleMapComponent"]
    }, {
      path: 'vector',
      component: _am_map_am_map_component__WEBPACK_IMPORTED_MODULE_9__["AmMapComponent"],
      resolve: {
        maps: _am_map_am_map_service__WEBPACK_IMPORTED_MODULE_10__["AmMapService"]
      }
    }];

    var MapsModule = function MapsModule() {
      _classCallCheck(this, MapsModule);
    };

    MapsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyCe30oyb0aY980X3GfHqY7jhqsBMBfI9Ek'
      }), _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_6__["AgmSnazzyInfoWindowModule"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_7__["AmChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      declarations: [_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_8__["GoogleMapComponent"], _am_map_am_map_component__WEBPACK_IMPORTED_MODULE_9__["AmMapComponent"]]
    })], MapsModule);
    /***/
  }
}]);
//# sourceMappingURL=maps-maps-module-es5.js.map