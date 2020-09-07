function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pickers-pickers-module~task-manager-task-manager-module"], {
  /***/
  "./node_modules/@angular/cdk/esm2015/a11y.js":
  /*!***************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/a11y.js ***!
    \***************************************************/

  /*! exports provided: ARIA_DESCRIBER_PROVIDER_FACTORY, MESSAGES_CONTAINER_ID, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, AriaDescriber, ARIA_DESCRIBER_PROVIDER, ActiveDescendantKeyManager, FocusKeyManager, ListKeyManager, FocusTrap, FocusTrapFactory, CdkTrapFocus, InteractivityChecker, LIVE_ANNOUNCER_PROVIDER_FACTORY, LiveAnnouncer, CdkAriaLive, LIVE_ANNOUNCER_PROVIDER, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_DEFAULT_OPTIONS, FOCUS_MONITOR_PROVIDER_FACTORY, TOUCH_BUFFER_MS, FocusMonitor, CdkMonitorFocus, FOCUS_MONITOR_PROVIDER, isFakeMousedownFromScreenReader, A11yModule */

  /***/
  function node_modulesAngularCdkEsm2015A11yJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER_FACTORY", function () {
      return ARIA_DESCRIBER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function () {
      return MESSAGES_CONTAINER_ID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function () {
      return CDK_DESCRIBEDBY_ID_PREFIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function () {
      return CDK_DESCRIBEDBY_HOST_ATTRIBUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AriaDescriber", function () {
      return AriaDescriber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER", function () {
      return ARIA_DESCRIBER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function () {
      return ActiveDescendantKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function () {
      return FocusKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListKeyManager", function () {
      return ListKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrap", function () {
      return FocusTrap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function () {
      return FocusTrapFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function () {
      return CdkTrapFocus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function () {
      return InteractivityChecker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER_FACTORY", function () {
      return LIVE_ANNOUNCER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function () {
      return LiveAnnouncer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function () {
      return CdkAriaLive;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER", function () {
      return LIVE_ANNOUNCER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function () {
      return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function () {
      return LIVE_ANNOUNCER_ELEMENT_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function () {
      return LIVE_ANNOUNCER_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER_FACTORY", function () {
      return FOCUS_MONITOR_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function () {
      return TOUCH_BUFFER_MS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusMonitor", function () {
      return FocusMonitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function () {
      return CdkMonitorFocus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER", function () {
      return FOCUS_MONITOR_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function () {
      return isFakeMousedownFromScreenReader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "A11yModule", function () {
      return A11yModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * IDs are deliminated by an empty space, as per the spec.
     * @type {?}
     */


    var ID_DELIMINATOR = ' ';
    /**
     * Adds the given ID to the specified ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @param {?} id
     * @return {?}
     */

    function addAriaReferencedId(el, attr, id) {
      /** @type {?} */
      var ids = getAriaReferenceIds(el, attr);

      if (ids.some(
      /**
      * @param {?} existingId
      * @return {?}
      */
      function (existingId) {
        return existingId.trim() == id.trim();
      })) {
        return;
      }

      ids.push(id.trim());
      el.setAttribute(attr, ids.join(ID_DELIMINATOR));
    }
    /**
     * Removes the given ID from the specified ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @param {?} id
     * @return {?}
     */


    function removeAriaReferencedId(el, attr, id) {
      /** @type {?} */
      var ids = getAriaReferenceIds(el, attr);
      /** @type {?} */

      var filteredIds = ids.filter(
      /**
      * @param {?} val
      * @return {?}
      */
      function (val) {
        return val != id.trim();
      });

      if (filteredIds.length) {
        el.setAttribute(attr, filteredIds.join(ID_DELIMINATOR));
      } else {
        el.removeAttribute(attr);
      }
    }
    /**
     * Gets the list of IDs referenced by the given ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @return {?}
     */


    function getAriaReferenceIds(el, attr) {
      // Get string array of all individual ids (whitespace deliminated) in the attribute value
      return (el.getAttribute(attr) || '').match(/\S+/g) || [];
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * ID used for the body container where all messages are appended.
     * @type {?}
     */


    var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
    /**
     * ID prefix used for each created message element.
     * @type {?}
     */

    var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
    /**
     * Attribute given to each host element that is described by a message element.
     * @type {?}
     */

    var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
    /**
     * Global incremental identifier for each registered message element.
     * @type {?}
     */

    var nextId = 0;
    /**
     * Global map of all registered message elements that have been placed into the document.
     * @type {?}
     */

    var messageRegistry = new Map();
    /**
     * Container for all registered messages.
     * @type {?}
     */

    var messagesContainer = null;
    /**
     * Utility that creates visually hidden elements with a message content. Useful for elements that
     * want to use aria-describedby to further describe themselves without adding additional visual
     * content.
     */

    var AriaDescriber = /*#__PURE__*/function () {
      /**
       * @param {?} _document
       */
      function AriaDescriber(_document) {
        _classCallCheck(this, AriaDescriber);

        this._document = _document;
      }
      /**
       * Adds to the host element an aria-describedby reference to a hidden element that contains
       * the message. If the same message has already been registered, then it will reuse the created
       * message element.
       * @param {?} hostElement
       * @param {?} message
       * @return {?}
       */


      _createClass(AriaDescriber, [{
        key: "describe",
        value: function describe(hostElement, message) {
          if (!this._canBeDescribed(hostElement, message)) {
            return;
          }

          if (typeof message !== 'string') {
            // We need to ensure that the element has an ID.
            this._setMessageId(message);

            messageRegistry.set(message, {
              messageElement: message,
              referenceCount: 0
            });
          } else if (!messageRegistry.has(message)) {
            this._createMessageElement(message);
          }

          if (!this._isElementDescribedByMessage(hostElement, message)) {
            this._addMessageReference(hostElement, message);
          }
        }
        /**
         * Removes the host element's aria-describedby reference to the message element.
         * @param {?} hostElement
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "removeDescription",
        value: function removeDescription(hostElement, message) {
          if (!this._isElementNode(hostElement)) {
            return;
          }

          if (this._isElementDescribedByMessage(hostElement, message)) {
            this._removeMessageReference(hostElement, message);
          } // If the message is a string, it means that it's one that we created for the
          // consumer so we can remove it safely, otherwise we should leave it in place.


          if (typeof message === 'string') {
            /** @type {?} */
            var registeredMessage = messageRegistry.get(message);

            if (registeredMessage && registeredMessage.referenceCount === 0) {
              this._deleteMessageElement(message);
            }
          }

          if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
          }
        }
        /**
         * Unregisters all created message elements and removes the message container.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var describedElements = this._document.querySelectorAll("[".concat(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, "]"));

          for (var i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);

            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
          }

          if (messagesContainer) {
            this._deleteMessagesContainer();
          }

          messageRegistry.clear();
        }
        /**
         * Creates a new element in the visually hidden message container element with the message
         * as its content and adds it to the message registry.
         * @private
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_createMessageElement",
        value: function _createMessageElement(message) {
          /** @type {?} */
          var messageElement = this._document.createElement('div');

          this._setMessageId(messageElement);

          messageElement.textContent = message;

          this._createMessagesContainer();

          /** @type {?} */
          messagesContainer.appendChild(messageElement);
          messageRegistry.set(message, {
            messageElement: messageElement,
            referenceCount: 0
          });
        }
        /**
         * Assigns a unique ID to an element, if it doesn't have one already.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_setMessageId",
        value: function _setMessageId(element) {
          if (!element.id) {
            element.id = "".concat(CDK_DESCRIBEDBY_ID_PREFIX, "-").concat(nextId++);
          }
        }
        /**
         * Deletes the message element from the global messages container.
         * @private
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_deleteMessageElement",
        value: function _deleteMessageElement(message) {
          /** @type {?} */
          var registeredMessage = messageRegistry.get(message);
          /** @type {?} */

          var messageElement = registeredMessage && registeredMessage.messageElement;

          if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
          }

          messageRegistry["delete"](message);
        }
        /**
         * Creates the global container for all aria-describedby messages.
         * @private
         * @return {?}
         */

      }, {
        key: "_createMessagesContainer",
        value: function _createMessagesContainer() {
          if (!messagesContainer) {
            /** @type {?} */
            var preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
            // already a container on the page, but we don't have a reference to it. Clear the
            // old container so we don't get duplicates. Doing this, instead of emptying the previous
            // container, should be slightly faster.


            if (preExistingContainer) {
              /** @type {?} */
              preExistingContainer.parentNode.removeChild(preExistingContainer);
            }

            messagesContainer = this._document.createElement('div');
            messagesContainer.id = MESSAGES_CONTAINER_ID;
            messagesContainer.setAttribute('aria-hidden', 'true');
            messagesContainer.style.display = 'none';

            this._document.body.appendChild(messagesContainer);
          }
        }
        /**
         * Deletes the global messages container.
         * @private
         * @return {?}
         */

      }, {
        key: "_deleteMessagesContainer",
        value: function _deleteMessagesContainer() {
          if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
          }
        }
        /**
         * Removes all cdk-describedby messages that are hosted through the element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_removeCdkDescribedByReferenceIds",
        value: function _removeCdkDescribedByReferenceIds(element) {
          // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX

          /** @type {?} */
          var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(
          /**
          * @param {?} id
          * @return {?}
          */
          function (id) {
            return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0;
          });
          element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
        }
        /**
         * Adds a message reference to the element using aria-describedby and increments the registered
         * message's reference count.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_addMessageReference",
        value: function _addMessageReference(element, message) {
          /** @type {?} */
          var registeredMessage =
          /** @type {?} */
          messageRegistry.get(message); // Add the aria-describedby reference and set the
          // describedby_host attribute to mark the element.

          addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
          element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
          registeredMessage.referenceCount++;
        }
        /**
         * Removes a message reference from the element using aria-describedby
         * and decrements the registered message's reference count.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_removeMessageReference",
        value: function _removeMessageReference(element, message) {
          /** @type {?} */
          var registeredMessage =
          /** @type {?} */
          messageRegistry.get(message);
          registeredMessage.referenceCount--;
          removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
          element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        /**
         * Returns true if the element has been described by the provided message ID.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_isElementDescribedByMessage",
        value: function _isElementDescribedByMessage(element, message) {
          /** @type {?} */
          var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
          /** @type {?} */

          var registeredMessage = messageRegistry.get(message);
          /** @type {?} */

          var messageId = registeredMessage && registeredMessage.messageElement.id;
          return !!messageId && referenceIds.indexOf(messageId) != -1;
        }
        /**
         * Determines whether a message can be described on a particular element.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_canBeDescribed",
        value: function _canBeDescribed(element, message) {
          if (!this._isElementNode(element)) {
            return false;
          }

          if (message && typeof message === 'object') {
            // We'd have to make some assumptions about the description element's text, if the consumer
            // passed in an element. Assume that if an element is passed in, the consumer has verified
            // that it can be used as a description.
            return true;
          }
          /** @type {?} */


          var trimmedMessage = message == null ? '' : "".concat(message).trim();
          /** @type {?} */

          var ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
          // element, because screen readers will end up reading out the same text twice in a row.

          return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
        }
        /**
         * Checks whether a node is an Element node.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_isElementNode",
        value: function _isElementNode(element) {
          return element.nodeType === this._document.ELEMENT_NODE;
        }
      }]);

      return AriaDescriber;
    }();

    AriaDescriber.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    AriaDescriber.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    AriaDescriber.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AriaDescriber_Factory() {
        return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: AriaDescriber,
      providedIn: "root"
    });
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentDispatcher
     * @param {?} _document
     * @return {?}
     */

    function ARIA_DESCRIBER_PROVIDER_FACTORY(parentDispatcher, _document) {
      return parentDispatcher || new AriaDescriber(_document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var ARIA_DESCRIBER_PROVIDER = {
      // If there is already an AriaDescriber available, use that. Otherwise, provide a new one.
      provide: AriaDescriber,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), AriaDescriber],
      /** @type {?} */
      _angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]],
      useFactory: ARIA_DESCRIBER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This class manages keyboard events for selectable lists. If you pass it a query list
     * of items, it will set the active item correctly when arrow events occur.
     * @template T
     */

    var ListKeyManager = /*#__PURE__*/function () {
      /**
       * @param {?} _items
       */
      function ListKeyManager(_items) {
        var _this2 = this;

        _classCallCheck(this, ListKeyManager);

        this._items = _items;
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._vertical = true;
        this._allowedModifierKeys = [];
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */

        this._skipPredicateFn =
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return item.disabled;
        }; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */

        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */

        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).

        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
          _items.changes.subscribe(
          /**
          * @param {?} newItems
          * @return {?}
          */
          function (newItems) {
            if (_this2._activeItem) {
              /** @type {?} */
              var itemArray = newItems.toArray();
              /** @type {?} */

              var newIndex = itemArray.indexOf(_this2._activeItem);

              if (newIndex > -1 && newIndex !== _this2._activeItemIndex) {
                _this2._activeItemIndex = newIndex;
              }
            }
          });
        }
      }
      /**
       * Sets the predicate function that determines which items should be skipped by the
       * list key manager.
       * @template THIS
       * @this {THIS}
       * @param {?} predicate Function that determines whether the given item should be skipped.
       * @return {THIS}
       */


      _createClass(ListKeyManager, [{
        key: "skipPredicate",
        value: function skipPredicate(predicate) {
          /** @type {?} */
          this._skipPredicateFn = predicate;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures wrapping mode, which determines whether the active item will wrap to
         * the other end of list when there are no more items in the given direction.
         * @template THIS
         * @this {THIS}
         * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
         * @return {THIS}
         */

      }, {
        key: "withWrap",
        value: function withWrap() {
          var shouldWrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._wrap = shouldWrap;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures whether the key manager should be able to move the selection vertically.
         * @template THIS
         * @this {THIS}
         * @param {?=} enabled Whether vertical selection should be enabled.
         * @return {THIS}
         */

      }, {
        key: "withVerticalOrientation",
        value: function withVerticalOrientation() {
          var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._vertical = enabled;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures the key manager to move the selection horizontally.
         * Passing in `null` will disable horizontal movement.
         * @template THIS
         * @this {THIS}
         * @param {?} direction Direction in which the selection can be moved.
         * @return {THIS}
         */

      }, {
        key: "withHorizontalOrientation",
        value: function withHorizontalOrientation(direction) {
          /** @type {?} */
          this._horizontal = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Modifier keys which are allowed to be held down and whose default actions will be prevented
         * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
         * @template THIS
         * @this {THIS}
         * @param {?} keys
         * @return {THIS}
         */

      }, {
        key: "withAllowedModifierKeys",
        value: function withAllowedModifierKeys(keys) {
          /** @type {?} */
          this._allowedModifierKeys = keys;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Turns on typeahead mode which allows users to set the active item by typing.
         * @template THIS
         * @this {THIS}
         * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
         * @return {THIS}
         */

      }, {
        key: "withTypeAhead",
        value: function withTypeAhead() {
          var _this3 = this;

          var debounceInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

          if (
          /** @type {?} */
          this._items.length &&
          /** @type {?} */
          this._items.some(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return typeof item.getLabel !== 'function';
          })) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
          }

          /** @type {?} */
          this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
          // and convert those letters back into a string. Afterwards find the first item that starts
          // with that string and select it.


          /** @type {?} */
          this._typeaheadSubscription =
          /** @type {?} */
          this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
          /**
          * @param {?} keyCode
          * @return {?}
          */
          function (keyCode) {
            return (
              /** @type {?} */
              _this3._pressedLetters.push(keyCode)
            );
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return (
              /** @type {?} */
              _this3._pressedLetters.length > 0
            );
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @return {?}
          */
          function () {
            return (
              /** @type {?} */
              _this3._pressedLetters.join('')
            );
          })).subscribe(
          /**
          * @param {?} inputString
          * @return {?}
          */
          function (inputString) {
            /** @type {?} */
            var items =
            /** @type {?} */
            _this3._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
            // following the current active item.


            for (var i = 1; i < items.length + 1; i++) {
              /** @type {?} */
              var index = (
              /** @type {?} */
              _this3._activeItemIndex + i) % items.length;
              /** @type {?} */

              var item = items[index];

              if (!
              /** @type {?} */
              _this3._skipPredicateFn(item) &&
              /** @type {?} */
              item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
                /** @type {?} */
                _this3.setActiveItem(index);

                break;
              }
            }

            /** @type {?} */
            _this3._pressedLetters = [];
          });
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "setActiveItem",
        value: function setActiveItem(item) {
          /** @type {?} */
          var previousIndex = this._activeItemIndex;
          this.updateActiveItem(item);

          if (this._activeItemIndex !== previousIndex) {
            this.change.next(this._activeItemIndex);
          }
        }
        /**
         * Sets the active item depending on the key event passed in.
         * @param {?} event Keyboard event to be used for determining which element should be active.
         * @return {?}
         */

      }, {
        key: "onKeydown",
        value: function onKeydown(event) {
          var _this4 = this;

          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
          /** @type {?} */

          var isModifierAllowed = modifiers.every(
          /**
          * @param {?} modifier
          * @return {?}
          */
          function (modifier) {
            return !event[modifier] || _this4._allowedModifierKeys.indexOf(modifier) > -1;
          });

          switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
              this.tabOut.next();
              return;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
              if (this._vertical && isModifierAllowed) {
                this.setNextItemActive();
                break;
              } else {
                return;
              }

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
              if (this._vertical && isModifierAllowed) {
                this.setPreviousItemActive();
                break;
              } else {
                return;
              }

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
              if (this._horizontal && isModifierAllowed) {
                this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                break;
              } else {
                return;
              }

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
              if (this._horizontal && isModifierAllowed) {
                this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                break;
              } else {
                return;
              }

            default:
              if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
                // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                // otherwise fall back to resolving alphanumeric characters via the keyCode.
                if (event.key && event.key.length === 1) {
                  this._letterKeyStream.next(event.key.toLocaleUpperCase());
                } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"] || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"]) {
                  this._letterKeyStream.next(String.fromCharCode(keyCode));
                }
              } // Note that we return here, in order to avoid preventing
              // the default action of non-navigational keys.


              return;
          }

          this._pressedLetters = [];
          event.preventDefault();
        }
        /**
         * Index of the currently active item.
         * @return {?}
         */

      }, {
        key: "setFirstItemActive",

        /**
         * Sets the active item to the first enabled item in the list.
         * @return {?}
         */
        value: function setFirstItemActive() {
          this._setActiveItemByIndex(0, 1);
        }
        /**
         * Sets the active item to the last enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setLastItemActive",
        value: function setLastItemActive() {
          this._setActiveItemByIndex(this._items.length - 1, -1);
        }
        /**
         * Sets the active item to the next enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setNextItemActive",
        value: function setNextItemActive() {
          this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
        }
        /**
         * Sets the active item to a previous enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setPreviousItemActive",
        value: function setPreviousItemActive() {
          this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "updateActiveItem",
        value: function updateActiveItem(item) {
          /** @type {?} */
          var itemArray = this._getItemsArray();
          /** @type {?} */


          var index = typeof item === 'number' ? item : itemArray.indexOf(item);
          /** @type {?} */

          var activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

          this._activeItem = activeItem == null ? null : activeItem;
          this._activeItemIndex = index;
        }
        /**
         * Allows setting of the activeItemIndex without any other effects.
         * @deprecated Use `updateActiveItem` instead.
         * \@breaking-change 8.0.0
         * @param {?} index The new activeItemIndex.
         * @return {?}
         */

      }, {
        key: "updateActiveItemIndex",
        value: function updateActiveItemIndex(index) {
          this.updateActiveItem(index);
        }
        /**
         * This method sets the active item, given a list of items and the delta between the
         * currently active item and the new active item. It will calculate differently
         * depending on whether wrap mode is turned on.
         * @private
         * @param {?} delta
         * @return {?}
         */

      }, {
        key: "_setActiveItemByDelta",
        value: function _setActiveItemByDelta(delta) {
          this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
        }
        /**
         * Sets the active item properly given "wrap" mode. In other words, it will continue to move
         * down the list until it finds an item that is not disabled, and it will wrap if it
         * encounters either end of the list.
         * @private
         * @param {?} delta
         * @return {?}
         */

      }, {
        key: "_setActiveInWrapMode",
        value: function _setActiveInWrapMode(delta) {
          /** @type {?} */
          var items = this._getItemsArray();

          for (var i = 1; i <= items.length; i++) {
            /** @type {?} */
            var index = (this._activeItemIndex + delta * i + items.length) % items.length;
            /** @type {?} */

            var item = items[index];

            if (!this._skipPredicateFn(item)) {
              this.setActiveItem(index);
              return;
            }
          }
        }
        /**
         * Sets the active item properly given the default mode. In other words, it will
         * continue to move down the list until it finds an item that is not disabled. If
         * it encounters either end of the list, it will stop and not wrap.
         * @private
         * @param {?} delta
         * @return {?}
         */

      }, {
        key: "_setActiveInDefaultMode",
        value: function _setActiveInDefaultMode(delta) {
          this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
        }
        /**
         * Sets the active item to the first enabled item starting at the index specified. If the
         * item is disabled, it will move in the fallbackDelta direction until it either
         * finds an enabled item or encounters the end of the list.
         * @private
         * @param {?} index
         * @param {?} fallbackDelta
         * @return {?}
         */

      }, {
        key: "_setActiveItemByIndex",
        value: function _setActiveItemByIndex(index, fallbackDelta) {
          /** @type {?} */
          var items = this._getItemsArray();

          if (!items[index]) {
            return;
          }

          while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;

            if (!items[index]) {
              return;
            }
          }

          this.setActiveItem(index);
        }
        /**
         * Returns the items as an array.
         * @private
         * @return {?}
         */

      }, {
        key: "_getItemsArray",
        value: function _getItemsArray() {
          return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
        }
      }, {
        key: "activeItemIndex",
        get: function get() {
          return this._activeItemIndex;
        }
        /**
         * The active item.
         * @return {?}
         */

      }, {
        key: "activeItem",
        get: function get() {
          return this._activeItem;
        }
      }]);

      return ListKeyManager;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var ActiveDescendantKeyManager = /*#__PURE__*/function (_ListKeyManager) {
      _inherits(ActiveDescendantKeyManager, _ListKeyManager);

      var _super2 = _createSuper(ActiveDescendantKeyManager);

      function ActiveDescendantKeyManager() {
        _classCallCheck(this, ActiveDescendantKeyManager);

        return _super2.apply(this, arguments);
      }

      _createClass(ActiveDescendantKeyManager, [{
        key: "setActiveItem",

        /**
         * @param {?} index
         * @return {?}
         */
        value: function setActiveItem(index) {
          if (this.activeItem) {
            this.activeItem.setInactiveStyles();
          }

          _get(_getPrototypeOf(ActiveDescendantKeyManager.prototype), "setActiveItem", this).call(this, index);

          if (this.activeItem) {
            this.activeItem.setActiveStyles();
          }
        }
      }]);

      return ActiveDescendantKeyManager;
    }(ListKeyManager);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var FocusKeyManager = /*#__PURE__*/function (_ListKeyManager2) {
      _inherits(FocusKeyManager, _ListKeyManager2);

      var _super3 = _createSuper(FocusKeyManager);

      function FocusKeyManager() {
        var _this5;

        _classCallCheck(this, FocusKeyManager);

        _this5 = _super3.apply(this, arguments);
        _this5._origin = 'program';
        return _this5;
      }
      /**
       * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
       * @template THIS
       * @this {THIS}
       * @param {?} origin Focus origin to be used when focusing items.
       * @return {THIS}
       */


      _createClass(FocusKeyManager, [{
        key: "setFocusOrigin",
        value: function setFocusOrigin(origin) {
          /** @type {?} */
          this._origin = origin;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "setActiveItem",
        value: function setActiveItem(item) {
          _get(_getPrototypeOf(FocusKeyManager.prototype), "setActiveItem", this).call(this, item);

          if (this.activeItem) {
            this.activeItem.focus(this._origin);
          }
        }
      }]);

      return FocusKeyManager;
    }(ListKeyManager);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
    // Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
    // supported.

    /**
     * Utility for checking the interactivity of an element, such as whether is is focusable or
     * tabbable.
     */


    var InteractivityChecker = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       */
      function InteractivityChecker(_platform) {
        _classCallCheck(this, InteractivityChecker);

        this._platform = _platform;
      }
      /**
       * Gets whether an element is disabled.
       *
       * @param {?} element Element to be checked.
       * @return {?} Whether the element is disabled.
       */


      _createClass(InteractivityChecker, [{
        key: "isDisabled",
        value: function isDisabled(element) {
          // This does not capture some cases, such as a non-form control with a disabled attribute or
          // a form control inside of a disabled form, but should capture the most common cases.
          return element.hasAttribute('disabled');
        }
        /**
         * Gets whether an element is visible for the purposes of interactivity.
         *
         * This will capture states like `display: none` and `visibility: hidden`, but not things like
         * being clipped by an `overflow: hidden` parent or being outside the viewport.
         *
         * @param {?} element
         * @return {?} Whether the element is visible.
         */

      }, {
        key: "isVisible",
        value: function isVisible(element) {
          return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
        }
        /**
         * Gets whether an element can be reached via Tab key.
         * Assumes that the element has already been checked with isFocusable.
         *
         * @param {?} element Element to be checked.
         * @return {?} Whether the element is tabbable.
         */

      }, {
        key: "isTabbable",
        value: function isTabbable(element) {
          // Nothing is tabbable on the server 😎
          if (!this._platform.isBrowser) {
            return false;
          }
          /** @type {?} */


          var frameElement = getFrameElement(getWindow(element));

          if (frameElement) {
            /** @type {?} */
            var frameType = frameElement && frameElement.nodeName.toLowerCase(); // Frame elements inherit their tabindex onto all child elements.

            if (getTabIndexValue(frameElement) === -1) {
              return false;
            } // Webkit and Blink consider anything inside of an <object> element as non-tabbable.


            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
              return false;
            } // Webkit and Blink disable tabbing to an element inside of an invisible frame.


            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
              return false;
            }
          }
          /** @type {?} */


          var nodeName = element.nodeName.toLowerCase();
          /** @type {?} */

          var tabIndexValue = getTabIndexValue(element);

          if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
          }

          if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
          }

          if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
              // By default an <audio> element without the controls enabled is not tabbable.
              return false;
            } else if (this._platform.BLINK) {
              // In Blink <audio controls> elements are always tabbable.
              return true;
            }
          }

          if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
              // In Trident a <video> element without the controls enabled is not tabbable.
              return false;
            } else if (this._platform.BLINK || this._platform.FIREFOX) {
              // In Chrome and Firefox <video controls> elements are always tabbable.
              return true;
            }
          }

          if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
          } // In iOS the browser only considers some specific elements as tabbable.


          if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
          }

          return element.tabIndex >= 0;
        }
        /**
         * Gets whether an element can be focused by the user.
         *
         * @param {?} element Element to be checked.
         * @return {?} Whether the element is focusable.
         */

      }, {
        key: "isFocusable",
        value: function isFocusable(element) {
          // Perform checks in order of left to most expensive.
          // Again, naive approach that does not capture many edge cases and browser quirks.
          return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
        }
      }]);

      return InteractivityChecker;
    }();

    InteractivityChecker.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    InteractivityChecker.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }];
    };
    /** @nocollapse */


    InteractivityChecker.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function InteractivityChecker_Factory() {
        return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]));
      },
      token: InteractivityChecker,
      providedIn: "root"
    });
    /**
     * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
     * the frameElement property is being accessed from a different host address, this property
     * should be accessed carefully.
     * @param {?} window
     * @return {?}
     */

    function getFrameElement(window) {
      try {
        return (
          /** @type {?} */
          window.frameElement
        );
      } catch (_a) {
        return null;
      }
    }
    /**
     * Checks whether the specified element has any geometry / rectangles.
     * @param {?} element
     * @return {?}
     */


    function hasGeometry(element) {
      // Use logic from jQuery to check for an invisible element.
      // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
      return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
    }
    /**
     * Gets whether an element's
     * @param {?} element
     * @return {?}
     */


    function isNativeFormElement(element) {
      /** @type {?} */
      var nodeName = element.nodeName.toLowerCase();
      return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
    }
    /**
     * Gets whether an element is an `<input type="hidden">`.
     * @param {?} element
     * @return {?}
     */


    function isHiddenInput(element) {
      return isInputElement(element) && element.type == 'hidden';
    }
    /**
     * Gets whether an element is an anchor that has an href attribute.
     * @param {?} element
     * @return {?}
     */


    function isAnchorWithHref(element) {
      return isAnchorElement(element) && element.hasAttribute('href');
    }
    /**
     * Gets whether an element is an input element.
     * @param {?} element
     * @return {?}
     */


    function isInputElement(element) {
      return element.nodeName.toLowerCase() == 'input';
    }
    /**
     * Gets whether an element is an anchor element.
     * @param {?} element
     * @return {?}
     */


    function isAnchorElement(element) {
      return element.nodeName.toLowerCase() == 'a';
    }
    /**
     * Gets whether an element has a valid tabindex.
     * @param {?} element
     * @return {?}
     */


    function hasValidTabIndex(element) {
      if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
      }
      /** @type {?} */


      var tabIndex = element.getAttribute('tabindex'); // IE11 parses tabindex="" as the value "-32768"

      if (tabIndex == '-32768') {
        return false;
      }

      return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
    }
    /**
     * Returns the parsed tabindex from the element attributes instead of returning the
     * evaluated tabindex from the browsers defaults.
     * @param {?} element
     * @return {?}
     */


    function getTabIndexValue(element) {
      if (!hasValidTabIndex(element)) {
        return null;
      } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054

      /** @type {?} */


      var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
      return isNaN(tabIndex) ? -1 : tabIndex;
    }
    /**
     * Checks whether the specified element is potentially tabbable on iOS
     * @param {?} element
     * @return {?}
     */


    function isPotentiallyTabbableIOS(element) {
      /** @type {?} */
      var nodeName = element.nodeName.toLowerCase();
      /** @type {?} */

      var inputType = nodeName === 'input' &&
      /** @type {?} */
      element.type;
      return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
    }
    /**
     * Gets whether an element is potentially focusable without taking current visible/disabled state
     * into account.
     * @param {?} element
     * @return {?}
     */


    function isPotentiallyFocusable(element) {
      // Inputs are potentially focusable *unless* they're type="hidden".
      if (isHiddenInput(element)) {
        return false;
      }

      return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
    }
    /**
     * Gets the parent window of a DOM node with regards of being inside of an iframe.
     * @param {?} node
     * @return {?}
     */


    function getWindow(node) {
      // ownerDocument is null if `node` itself *is* a document.
      return node.ownerDocument && node.ownerDocument.defaultView || window;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class that allows for trapping focus within a DOM element.
     *
     * This class currently uses a relatively simple approach to focus trapping.
     * It assumes that the tab order is the same as DOM order, which is not necessarily true.
     * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
     */


    var FocusTrap = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?=} deferAnchors
       */
      function FocusTrap(_element, _checker, _ngZone, _document) {
        var _this6 = this;

        var deferAnchors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

        _classCallCheck(this, FocusTrap);

        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

        this.startAnchorListener =
        /**
        * @return {?}
        */
        function () {
          return _this6.focusLastTabbableElement();
        };

        this.endAnchorListener =
        /**
        * @return {?}
        */
        function () {
          return _this6.focusFirstTabbableElement();
        };

        this._enabled = true;

        if (!deferAnchors) {
          this.attachAnchors();
        }
      }
      /**
       * Whether the focus trap is active.
       * @return {?}
       */


      _createClass(FocusTrap, [{
        key: "destroy",

        /**
         * Destroys the focus trap by cleaning up the anchors.
         * @return {?}
         */
        value: function destroy() {
          /** @type {?} */
          var startAnchor = this._startAnchor;
          /** @type {?} */

          var endAnchor = this._endAnchor;

          if (startAnchor) {
            startAnchor.removeEventListener('focus', this.startAnchorListener);

            if (startAnchor.parentNode) {
              startAnchor.parentNode.removeChild(startAnchor);
            }
          }

          if (endAnchor) {
            endAnchor.removeEventListener('focus', this.endAnchorListener);

            if (endAnchor.parentNode) {
              endAnchor.parentNode.removeChild(endAnchor);
            }
          }

          this._startAnchor = this._endAnchor = null;
        }
        /**
         * Inserts the anchors into the DOM. This is usually done automatically
         * in the constructor, but can be deferred for cases like directives with `*ngIf`.
         * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
         * if the target element isn't currently in the DOM.
         */

      }, {
        key: "attachAnchors",
        value: function attachAnchors() {
          var _this7 = this;

          // If we're not on the browser, there can be no focus to trap.
          if (this._hasAttached) {
            return true;
          }

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            if (!_this7._startAnchor) {
              _this7._startAnchor = _this7._createAnchor();

              /** @type {?} */
              _this7._startAnchor.addEventListener('focus', _this7.startAnchorListener);
            }

            if (!_this7._endAnchor) {
              _this7._endAnchor = _this7._createAnchor();

              /** @type {?} */
              _this7._endAnchor.addEventListener('focus', _this7.endAnchorListener);
            }
          });

          if (this._element.parentNode) {
            this._element.parentNode.insertBefore(
            /** @type {?} */
            this._startAnchor, this._element);

            this._element.parentNode.insertBefore(
            /** @type {?} */
            this._endAnchor, this._element.nextSibling);

            this._hasAttached = true;
          }

          return this._hasAttached;
        }
        /**
         * Waits for the zone to stabilize, then either focuses the first element that the
         * user specified, or the first tabbable element.
         * @return {?} Returns a promise that resolves with a boolean, depending
         * on whether focus was moved successfuly.
         */

      }, {
        key: "focusInitialElementWhenReady",
        value: function focusInitialElementWhenReady() {
          var _this8 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this8._executeOnStable(
            /**
            * @return {?}
            */
            function () {
              return resolve(_this8.focusInitialElement());
            });
          });
        }
        /**
         * Waits for the zone to stabilize, then focuses
         * the first tabbable element within the focus trap region.
         * @return {?} Returns a promise that resolves with a boolean, depending
         * on whether focus was moved successfuly.
         */

      }, {
        key: "focusFirstTabbableElementWhenReady",
        value: function focusFirstTabbableElementWhenReady() {
          var _this9 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this9._executeOnStable(
            /**
            * @return {?}
            */
            function () {
              return resolve(_this9.focusFirstTabbableElement());
            });
          });
        }
        /**
         * Waits for the zone to stabilize, then focuses
         * the last tabbable element within the focus trap region.
         * @return {?} Returns a promise that resolves with a boolean, depending
         * on whether focus was moved successfuly.
         */

      }, {
        key: "focusLastTabbableElementWhenReady",
        value: function focusLastTabbableElementWhenReady() {
          var _this10 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this10._executeOnStable(
            /**
            * @return {?}
            */
            function () {
              return resolve(_this10.focusLastTabbableElement());
            });
          });
        }
        /**
         * Get the specified boundary element of the trapped region.
         * @private
         * @param {?} bound The boundary to get (start or end of trapped region).
         * @return {?} The boundary element.
         */

      }, {
        key: "_getRegionBoundary",
        value: function _getRegionBoundary(bound) {
          // Contains the deprecated version of selector, for temporary backwards comparability.

          /** @type {?} */
          var markers =
          /** @type {?} */
          this._element.querySelectorAll("[cdk-focus-region-".concat(bound, "], ") + "[cdkFocusRegion".concat(bound, "], ") + "[cdk-focus-".concat(bound, "]"));

          for (var i = 0; i < markers.length; i++) {
            // @breaking-change 8.0.0
            if (markers[i].hasAttribute("cdk-focus-".concat(bound))) {
              console.warn("Found use of deprecated attribute 'cdk-focus-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated ") + "attribute will be removed in 8.0.0.", markers[i]);
            } else if (markers[i].hasAttribute("cdk-focus-region-".concat(bound))) {
              console.warn("Found use of deprecated attribute 'cdk-focus-region-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated attribute ") + "will be removed in 8.0.0.", markers[i]);
            }
          }

          if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
          }

          return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
        }
        /**
         * Focuses the element that should be focused when the focus trap is initialized.
         * @return {?} Whether focus was moved successfuly.
         */

      }, {
        key: "focusInitialElement",
        value: function focusInitialElement() {
          // Contains the deprecated version of selector, for temporary backwards comparability.

          /** @type {?} */
          var redirectToElement =
          /** @type {?} */
          this._element.querySelector("[cdk-focus-initial], " + "[cdkFocusInitial]");

          if (redirectToElement) {
            // @breaking-change 8.0.0
            if (redirectToElement.hasAttribute("cdk-focus-initial")) {
              console.warn("Found use of deprecated attribute 'cdk-focus-initial', " + "use 'cdkFocusInitial' instead. The deprecated attribute " + "will be removed in 8.0.0", redirectToElement);
            } // Warn the consumer if the element they've pointed to
            // isn't focusable, when not in production mode.


            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !this._checker.isFocusable(redirectToElement)) {
              console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
            }

            redirectToElement.focus();
            return true;
          }

          return this.focusFirstTabbableElement();
        }
        /**
         * Focuses the first tabbable element within the focus trap region.
         * @return {?} Whether focus was moved successfuly.
         */

      }, {
        key: "focusFirstTabbableElement",
        value: function focusFirstTabbableElement() {
          /** @type {?} */
          var redirectToElement = this._getRegionBoundary('start');

          if (redirectToElement) {
            redirectToElement.focus();
          }

          return !!redirectToElement;
        }
        /**
         * Focuses the last tabbable element within the focus trap region.
         * @return {?} Whether focus was moved successfuly.
         */

      }, {
        key: "focusLastTabbableElement",
        value: function focusLastTabbableElement() {
          /** @type {?} */
          var redirectToElement = this._getRegionBoundary('end');

          if (redirectToElement) {
            redirectToElement.focus();
          }

          return !!redirectToElement;
        }
        /**
         * Checks whether the focus trap has successfuly been attached.
         * @return {?}
         */

      }, {
        key: "hasAttached",
        value: function hasAttached() {
          return this._hasAttached;
        }
        /**
         * Get the first tabbable element from a DOM subtree (inclusive).
         * @private
         * @param {?} root
         * @return {?}
         */

      }, {
        key: "_getFirstTabbableElement",
        value: function _getFirstTabbableElement(root) {
          if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
          } // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
          // back to `childNodes` which includes text nodes, comments etc.

          /** @type {?} */


          var children = root.children || root.childNodes;

          for (var i = 0; i < children.length; i++) {
            /** @type {?} */
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(
            /** @type {?} */
            children[i]) : null;

            if (tabbableChild) {
              return tabbableChild;
            }
          }

          return null;
        }
        /**
         * Get the last tabbable element from a DOM subtree (inclusive).
         * @private
         * @param {?} root
         * @return {?}
         */

      }, {
        key: "_getLastTabbableElement",
        value: function _getLastTabbableElement(root) {
          if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
          } // Iterate in reverse DOM order.

          /** @type {?} */


          var children = root.children || root.childNodes;

          for (var i = children.length - 1; i >= 0; i--) {
            /** @type {?} */
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(
            /** @type {?} */
            children[i]) : null;

            if (tabbableChild) {
              return tabbableChild;
            }
          }

          return null;
        }
        /**
         * Creates an anchor element.
         * @private
         * @return {?}
         */

      }, {
        key: "_createAnchor",
        value: function _createAnchor() {
          /** @type {?} */
          var anchor = this._document.createElement('div');

          this._toggleAnchorTabIndex(this._enabled, anchor);

          anchor.classList.add('cdk-visually-hidden');
          anchor.classList.add('cdk-focus-trap-anchor');
          anchor.setAttribute('aria-hidden', 'true');
          return anchor;
        }
        /**
         * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
         * @private
         * @param {?} isEnabled Whether the focus trap is enabled.
         * @param {?} anchor Anchor on which to toggle the tabindex.
         * @return {?}
         */

      }, {
        key: "_toggleAnchorTabIndex",
        value: function _toggleAnchorTabIndex(isEnabled, anchor) {
          // Remove the tabindex completely, rather than setting it to -1, because if the
          // element has a tabindex, the user might still hit it when navigating with the arrow keys.
          isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
        }
        /**
         * Executes a function when the zone is stable.
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_executeOnStable",
        value: function _executeOnStable(fn) {
          if (this._ngZone.isStable) {
            fn();
          } else {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
          }
        }
      }, {
        key: "enabled",
        get: function get() {
          return this._enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._enabled = value;

          if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(value, this._startAnchor);

            this._toggleAnchorTabIndex(value, this._endAnchor);
          }
        }
      }]);

      return FocusTrap;
    }();
    /**
     * Factory that allows easy instantiation of focus traps.
     */


    var FocusTrapFactory = /*#__PURE__*/function () {
      /**
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       */
      function FocusTrapFactory(_checker, _ngZone, _document) {
        _classCallCheck(this, FocusTrapFactory);

        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
      }
      /**
       * Creates a focus-trapped region around the given element.
       * @param {?} element The element around which focus will be trapped.
       * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
       *     manually by the user.
       * @return {?} The created focus trap instance.
       */


      _createClass(FocusTrapFactory, [{
        key: "create",
        value: function create(element) {
          var deferCaptureElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
        }
      }]);

      return FocusTrapFactory;
    }();

    FocusTrapFactory.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FocusTrapFactory.ctorParameters = function () {
      return [{
        type: InteractivityChecker
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    FocusTrapFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusTrapFactory_Factory() {
        return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: FocusTrapFactory,
      providedIn: "root"
    });
    /**
     * Directive for trapping focus within a region.
     */

    var CdkTrapFocus = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _focusTrapFactory
       * @param {?} _document
       */
      function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
        _classCallCheck(this, CdkTrapFocus);

        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */

        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
      }
      /**
       * Whether the focus trap is active.
       * @return {?}
       */


      _createClass(CdkTrapFocus, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
          // element now that the trapped region is being destroyed.

          if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();

            this._previouslyFocusedElement = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.focusTrap.attachAnchors();

          if (this.autoCapture) {
            this._previouslyFocusedElement =
            /** @type {?} */
            this._document.activeElement;
            this.focusTrap.focusInitialElementWhenReady();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (!this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
          }
        }
      }, {
        key: "enabled",
        get: function get() {
          return this.focusTrap.enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         * @return {?}
         */

      }, {
        key: "autoCapture",
        get: function get() {
          return this._autoCapture;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkTrapFocus;
    }();

    CdkTrapFocus.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkTrapFocus]',
        exportAs: 'cdkTrapFocus'
      }]
    }];
    /** @nocollapse */

    CdkTrapFocus.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: FocusTrapFactory
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };

    CdkTrapFocus.propDecorators = {
      enabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTrapFocus']
      }],
      autoCapture: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTrapFocusAutoCapture']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
      providedIn: 'root',
      factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
      return null;
    }
    /**
     * Injection token that can be used to configure the default options for the LiveAnnouncer.
     * @type {?}
     */


    var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var LiveAnnouncer = /*#__PURE__*/function () {
      /**
       * @param {?} elementToken
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?=} _defaultOptions
       */
      function LiveAnnouncer(elementToken, _ngZone, _document, _defaultOptions) {
        _classCallCheck(this, LiveAnnouncer);

        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
        // reference browser globals (HTMLElement, Document) on non-browser environments, since having
        // a class decorator causes TypeScript to preserve the constructor signature types.

        this._document = _document;
        this._liveElement = elementToken || this._createLiveElement();
      }
      /**
       * @param {?} message
       * @param {...?} args
       * @return {?}
       */


      _createClass(LiveAnnouncer, [{
        key: "announce",
        value: function announce(message) {
          var _this11 = this;

          /** @type {?} */
          var defaultOptions = this._defaultOptions;
          /** @type {?} */

          var politeness;
          /** @type {?} */

          var duration;

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          if (args.length === 1 && typeof args[0] === 'number') {
            duration = args[0];
          } else {
            politeness = args[0];
            duration = args[1];
          }

          this.clear();
          clearTimeout(this._previousTimeout);

          if (!politeness) {
            politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
          }

          if (duration == null && defaultOptions) {
            duration = defaultOptions.duration;
          } // TODO: ensure changing the politeness works on all environments we support.


          this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
          // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
          // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
          //   second time without clearing and then using a non-zero delay.
          // (using JAWS 17 at time of this writing).


          return this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              clearTimeout(_this11._previousTimeout);
              _this11._previousTimeout = setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this11._liveElement.textContent = message;
                resolve();

                if (typeof duration === 'number') {
                  _this11._previousTimeout = setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this11.clear();
                  }, duration);
                }
              }, 100);
            });
          });
        }
        /**
         * Clears the current text from the announcer element. Can be used to prevent
         * screen readers from reading the text out again while the user is going
         * through the page landmarks.
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          if (this._liveElement) {
            this._liveElement.textContent = '';
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearTimeout(this._previousTimeout);

          if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);

            this._liveElement =
            /** @type {?} */
            null;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createLiveElement",
        value: function _createLiveElement() {
          /** @type {?} */
          var elementClass = 'cdk-live-announcer-element';
          /** @type {?} */

          var previousElements = this._document.getElementsByClassName(elementClass);
          /** @type {?} */


          var liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


          for (var i = 0; i < previousElements.length; i++) {
            /** @type {?} */
            previousElements[i].parentNode.removeChild(previousElements[i]);
          }

          liveEl.classList.add(elementClass);
          liveEl.classList.add('cdk-visually-hidden');
          liveEl.setAttribute('aria-atomic', 'true');
          liveEl.setAttribute('aria-live', 'polite');

          this._document.body.appendChild(liveEl);

          return liveEl;
        }
      }]);

      return LiveAnnouncer;
    }();

    LiveAnnouncer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    LiveAnnouncer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
        }]
      }];
    };
    /** @nocollapse */


    LiveAnnouncer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function LiveAnnouncer_Factory() {
        return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
      },
      token: LiveAnnouncer,
      providedIn: "root"
    });
    /**
     * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
     * with a wider range of browsers and screen readers.
     */

    var CdkAriaLive = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _liveAnnouncer
       * @param {?} _contentObserver
       * @param {?} _ngZone
       */
      function CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
        _classCallCheck(this, CdkAriaLive);

        this._elementRef = _elementRef;
        this._liveAnnouncer = _liveAnnouncer;
        this._contentObserver = _contentObserver;
        this._ngZone = _ngZone;
        this._politeness = 'off';
      }
      /**
       * The aria-live politeness level to use when announcing messages.
       * @return {?}
       */


      _createClass(CdkAriaLive, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          if (this._subscription) {
            this._subscription.unsubscribe();
          }
        }
      }, {
        key: "politeness",
        get: function get() {
          return this._politeness;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this12 = this;

          this._politeness = value === 'polite' || value === 'assertive' ? value : 'off';

          if (this._politeness === 'off') {
            if (this._subscription) {
              this._subscription.unsubscribe();

              this._subscription = null;
            }
          } else if (!this._subscription) {
            this._subscription = this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return _this12._contentObserver.observe(_this12._elementRef).subscribe(
              /**
              * @return {?}
              */
              function () {
                // Note that we use textContent here, rather than innerText, in order to avoid a reflow.

                /** @type {?} */
                var elementText = _this12._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
                // changes which we don't want to announce.

                if (elementText !== _this12._previousAnnouncedText) {
                  _this12._liveAnnouncer.announce(elementText, _this12._politeness);

                  _this12._previousAnnouncedText = elementText;
                }
              });
            });
          }
        }
      }]);

      return CdkAriaLive;
    }();

    CdkAriaLive.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkAriaLive]',
        exportAs: 'cdkAriaLive'
      }]
    }];
    /** @nocollapse */

    CdkAriaLive.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: LiveAnnouncer
      }, {
        type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkAriaLive.propDecorators = {
      politeness: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAriaLive']
      }]
    };
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentAnnouncer
     * @param {?} liveElement
     * @param {?} _document
     * @param {?} ngZone
     * @return {?}
     */

    function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentAnnouncer, liveElement, _document, ngZone) {
      return parentAnnouncer || new LiveAnnouncer(liveElement, ngZone, _document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var LIVE_ANNOUNCER_PROVIDER = {
      // If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
      provide: LiveAnnouncer,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), LiveAnnouncer], [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](LIVE_ANNOUNCER_ELEMENT_TOKEN)], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]],
      useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
    // that a value of around 650ms seems appropriate.

    /** @type {?} */

    var TOUCH_BUFFER_MS = 650;
    /**
     * Event listener options that enable capturing and also
     * mark the listener as passive if the browser supports it.
     * @type {?}
     */

    var captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["normalizePassiveListenerOptions"])({
      passive: true,
      capture: true
    });
    /**
     * Monitors mouse and keyboard events to determine the cause of focus events.
     */

    var FocusMonitor = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _platform
       */
      function FocusMonitor(_ngZone, _platform) {
        var _this13 = this;

        _classCallCheck(this, FocusMonitor);

        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * The focus origin that the next focus event is a result of.
         */

        this._origin = null;
        /**
         * Whether the window has just been focused.
         */

        this._windowFocused = false;
        /**
         * Map of elements being monitored to their info.
         */

        this._elementInfo = new Map();
        /**
         * The number of elements currently being monitored.
         */

        this._monitoredElementCount = 0;
        /**
         * Event listener for `keydown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */

        this._documentKeydownListener =
        /**
        * @return {?}
        */
        function () {
          // On keydown record the origin and clear any touch event that may be in progress.
          _this13._lastTouchTarget = null;

          _this13._setOriginForCurrentEventQueue('keyboard');
        };
        /**
         * Event listener for `mousedown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._documentMousedownListener =
        /**
        * @return {?}
        */
        function () {
          // On mousedown record the origin only if there is not touch
          // target, since a mousedown can happen as a result of a touch event.
          if (!_this13._lastTouchTarget) {
            _this13._setOriginForCurrentEventQueue('mouse');
          }
        };
        /**
         * Event listener for `touchstart` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._documentTouchstartListener =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // When the touchstart event fires the focus event is not yet in the event queue. This means
          // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
          // see if a focus happens.
          if (_this13._touchTimeoutId != null) {
            clearTimeout(_this13._touchTimeoutId);
          } // Since this listener is bound on the `document` level, any events coming from the shadow DOM
          // will have their `target` set to the shadow root. If available, use `composedPath` to
          // figure out the event target.


          _this13._lastTouchTarget = event.composedPath ? event.composedPath()[0] : event.target;
          _this13._touchTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this13._lastTouchTarget = null;
          }, TOUCH_BUFFER_MS);
        };
        /**
         * Event listener for `focus` events on the window.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._windowFocusListener =
        /**
        * @return {?}
        */
        function () {
          // Make a note of when the window regains focus, so we can
          // restore the origin info for the focused element.
          _this13._windowFocused = true;
          _this13._windowFocusTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this13._windowFocused = false;
          });
        };
      }
      /**
       * @param {?} element
       * @param {?=} checkChildren
       * @return {?}
       */


      _createClass(FocusMonitor, [{
        key: "monitor",
        value: function monitor(element) {
          var _this14 = this;

          var checkChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          // Do nothing if we're not on the browser platform.
          if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }
          /** @type {?} */


          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element); // Check if we're already monitoring this element.

          if (this._elementInfo.has(nativeElement)) {
            /** @type {?} */
            var cachedInfo = this._elementInfo.get(nativeElement);

            /** @type {?} */
            cachedInfo.checkChildren = checkChildren;
            return (
              /** @type {?} */
              cachedInfo.subject.asObservable()
            );
          } // Create monitored element info.

          /** @type {?} */


          var info = {
            unlisten:
            /**
            * @return {?}
            */
            function unlisten() {},
            checkChildren: checkChildren,
            subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]()
          };

          this._elementInfo.set(nativeElement, info);

          this._incrementMonitoredElementCount(); // Start listening. We need to listen in capture phase since focus events don't bubble.

          /** @type {?} */


          var focusListener =
          /**
          * @param {?} event
          * @return {?}
          */
          function focusListener(event) {
            return _this14._onFocus(event, nativeElement);
          };
          /** @type {?} */


          var blurListener =
          /**
          * @param {?} event
          * @return {?}
          */
          function blurListener(event) {
            return _this14._onBlur(event, nativeElement);
          };

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            nativeElement.addEventListener('focus', focusListener, true);
            nativeElement.addEventListener('blur', blurListener, true);
          }); // Create an unlisten function for later.


          info.unlisten =
          /**
          * @return {?}
          */
          function () {
            nativeElement.removeEventListener('focus', focusListener, true);
            nativeElement.removeEventListener('blur', blurListener, true);
          };

          return info.subject.asObservable();
        }
        /**
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "stopMonitoring",
        value: function stopMonitoring(element) {
          /** @type {?} */
          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);
          /** @type {?} */

          var elementInfo = this._elementInfo.get(nativeElement);

          if (elementInfo) {
            elementInfo.unlisten();
            elementInfo.subject.complete();

            this._setClasses(nativeElement);

            this._elementInfo["delete"](nativeElement);

            this._decrementMonitoredElementCount();
          }
        }
        /**
         * @param {?} element
         * @param {?} origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focusVia",
        value: function focusVia(element, origin, options) {
          /** @type {?} */
          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);

          this._setOriginForCurrentEventQueue(origin); // `focus` isn't available on the server


          if (typeof nativeElement.focus === 'function') {
            // Cast the element to `any`, because the TS typings don't have the `options` parameter yet.

            /** @type {?} */
            nativeElement.focus(options);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this15 = this;

          this._elementInfo.forEach(
          /**
          * @param {?} _info
          * @param {?} element
          * @return {?}
          */
          function (_info, element) {
            return _this15.stopMonitoring(element);
          });
        }
        /**
         * @private
         * @param {?} element
         * @param {?} className
         * @param {?} shouldSet
         * @return {?}
         */

      }, {
        key: "_toggleClass",
        value: function _toggleClass(element, className, shouldSet) {
          if (shouldSet) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
        }
        /**
         * Sets the focus classes on the element based on the given focus origin.
         * @private
         * @param {?} element The element to update the classes on.
         * @param {?=} origin The focus origin.
         * @return {?}
         */

      }, {
        key: "_setClasses",
        value: function _setClasses(element, origin) {
          /** @type {?} */
          var elementInfo = this._elementInfo.get(element);

          if (elementInfo) {
            this._toggleClass(element, 'cdk-focused', !!origin);

            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');

            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');

            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');

            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
          }
        }
        /**
         * Sets the origin and schedules an async function to clear it at the end of the event queue.
         * @private
         * @param {?} origin The origin to set.
         * @return {?}
         */

      }, {
        key: "_setOriginForCurrentEventQueue",
        value: function _setOriginForCurrentEventQueue(origin) {
          var _this16 = this;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this16._origin = origin; // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
            // tick after the interaction event fired. To ensure the focus origin is always correct,
            // the focus origin will be determined at the beginning of the next tick.

            _this16._originTimeoutId = setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this16._origin = null;
            }, 1);
          });
        }
        /**
         * Checks whether the given focus event was caused by a touchstart event.
         * @private
         * @param {?} event The focus event to check.
         * @return {?} Whether the event was caused by a touch.
         */

      }, {
        key: "_wasCausedByTouch",
        value: function _wasCausedByTouch(event) {
          // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
          // Consider the following dom structure:
          //
          // <div #parent tabindex="0" cdkFocusClasses>
          //   <div #child (click)="#parent.focus()"></div>
          // </div>
          //
          // If the user touches the #child element and the #parent is programmatically focused as a
          // result, this code will still consider it to have been caused by the touch event and will
          // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
          // relatively small edge-case that can be worked around by using
          // focusVia(parentEl, 'program') to focus the parent element.
          //
          // If we decide that we absolutely must handle this case correctly, we can do so by listening
          // for the first focus event after the touchstart, and then the first blur event after that
          // focus event. When that blur event fires we know that whatever follows is not a result of the
          // touchstart.

          /** @type {?} */
          var focusTarget = event.target;
          return this._lastTouchTarget instanceof Node && focusTarget instanceof Node && (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
        }
        /**
         * Handles focus events on a registered element.
         * @private
         * @param {?} event The focus event.
         * @param {?} element The monitored element.
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus(event, element) {
          // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
          // focus event affecting the monitored element. If we want to use the origin of the first event
          // instead we should check for the cdk-focused class here and return if the element already has
          // it. (This only matters for elements that have includesChildren = true).
          // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
          // focus event affecting the monitored element. If we want to use the origin of the first event
          // instead we should check for the cdk-focused class here and return if the element already has
          // it. (This only matters for elements that have includesChildren = true).
          // If we are not counting child-element-focus as focused, make sure that the event target is the
          // monitored element itself.

          /** @type {?} */
          var elementInfo = this._elementInfo.get(element);

          if (!elementInfo || !elementInfo.checkChildren && element !== event.target) {
            return;
          } // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
          // 1) The window has just regained focus, in which case we want to restore the focused state of
          //    the element from before the window blurred.
          // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
          // 3) The element was programmatically focused, in which case we should mark the origin as
          //    'program'.

          /** @type {?} */


          var origin = this._origin;

          if (!origin) {
            if (this._windowFocused && this._lastFocusOrigin) {
              origin = this._lastFocusOrigin;
            } else if (this._wasCausedByTouch(event)) {
              origin = 'touch';
            } else {
              origin = 'program';
            }
          }

          this._setClasses(element, origin);

          this._emitOrigin(elementInfo.subject, origin);

          this._lastFocusOrigin = origin;
        }
        /**
         * Handles blur events on a registered element.
         * @param {?} event The blur event.
         * @param {?} element The monitored element.
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur(event, element) {
          // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
          // order to focus another child of the monitored element.

          /** @type {?} */
          var elementInfo = this._elementInfo.get(element);

          if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
            return;
          }

          this._setClasses(element);

          this._emitOrigin(elementInfo.subject, null);
        }
        /**
         * @private
         * @param {?} subject
         * @param {?} origin
         * @return {?}
         */

      }, {
        key: "_emitOrigin",
        value: function _emitOrigin(subject, origin) {
          this._ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return subject.next(origin);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_incrementMonitoredElementCount",
        value: function _incrementMonitoredElementCount() {
          var _this17 = this;

          // Register global listeners when first element is monitored.
          if (++this._monitoredElementCount == 1 && this._platform.isBrowser) {
            // Note: we listen to events in the capture phase so we
            // can detect them even if the user stops propagation.
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              document.addEventListener('keydown', _this17._documentKeydownListener, captureEventListenerOptions);
              document.addEventListener('mousedown', _this17._documentMousedownListener, captureEventListenerOptions);
              document.addEventListener('touchstart', _this17._documentTouchstartListener, captureEventListenerOptions);
              window.addEventListener('focus', _this17._windowFocusListener);
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_decrementMonitoredElementCount",
        value: function _decrementMonitoredElementCount() {
          // Unregister global listeners when last element is unmonitored.
          if (! --this._monitoredElementCount) {
            document.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
            document.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
            document.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
            window.removeEventListener('focus', this._windowFocusListener); // Clear timeouts for all potentially pending timeouts to prevent the leaks.

            clearTimeout(this._windowFocusTimeoutId);
            clearTimeout(this._touchTimeoutId);
            clearTimeout(this._originTimeoutId);
          }
        }
      }]);

      return FocusMonitor;
    }();

    FocusMonitor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FocusMonitor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }];
    };
    /** @nocollapse */


    FocusMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusMonitor_Factory() {
        return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]));
      },
      token: FocusMonitor,
      providedIn: "root"
    });
    /**
     * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
     * programmatically) and adds corresponding classes to the element.
     *
     * There are two variants of this directive:
     * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
     *    focused.
     * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
     */

    var CdkMonitorFocus = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _focusMonitor
       */
      function CdkMonitorFocus(_elementRef, _focusMonitor) {
        var _this18 = this;

        _classCallCheck(this, CdkMonitorFocus);

        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._monitorSubscription = this._focusMonitor.monitor(this._elementRef, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(
        /**
        * @param {?} origin
        * @return {?}
        */
        function (origin) {
          return _this18.cdkFocusChange.emit(origin);
        });
      }
      /**
       * @return {?}
       */


      _createClass(CdkMonitorFocus, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);

          this._monitorSubscription.unsubscribe();
        }
      }]);

      return CdkMonitorFocus;
    }();

    CdkMonitorFocus.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
      }]
    }];
    /** @nocollapse */

    CdkMonitorFocus.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: FocusMonitor
      }];
    };

    CdkMonitorFocus.propDecorators = {
      cdkFocusChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentDispatcher
     * @param {?} ngZone
     * @param {?} platform
     * @return {?}
     */

    function FOCUS_MONITOR_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
      return parentDispatcher || new FocusMonitor(ngZone, platform);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var FOCUS_MONITOR_PROVIDER = {
      // If there is already a FocusMonitor available, use that. Otherwise, provide a new one.
      provide: FocusMonitor,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), FocusMonitor], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]],
      useFactory: FOCUS_MONITOR_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Screenreaders will often fire fake mousedown events when a focusable element
     * is activated using the keyboard. We can typically distinguish between these faked
     * mousedown events and real mousedown events using the "buttons" property. While
     * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
     * the left mouse button), faked mousedowns will usually set the property value to 0.
     * @param {?} event
     * @return {?}
     */

    function isFakeMousedownFromScreenReader(event) {
      return event.buttons === 0;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var A11yModule = function A11yModule() {
      _classCallCheck(this, A11yModule);
    };

    A11yModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]],
        declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
        exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=a11y.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/bidi.js":
  /*!***************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/bidi.js ***!
    \***************************************************/

  /*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */

  /***/
  function node_modulesAngularCdkEsm2015BidiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Directionality", function () {
      return Directionality;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () {
      return DIR_DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dir", function () {
      return Dir;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidiModule", function () {
      return BidiModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DIR_DOCUMENT_FACTORY;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to inject the document into Directionality.
     * This is used so that the value can be faked in tests.
     *
     * We can't use the real document in tests because changing the real `dir` causes geometry-based
     * tests in Safari to fail.
     *
     * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
     * themselves use things like `querySelector` in test code.
     *
     * This token is defined in a separate file from Directionality as a workaround for
     * https://github.com/angular/angular/issues/22559
     *
     * \@docs-private
     * @type {?}
     */


    var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
      providedIn: 'root',
      factory: DIR_DOCUMENT_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function DIR_DOCUMENT_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The directionality (LTR / RTL) context for the application (or a subtree of it).
     * Exposes the current direction and a stream of direction changes.
     */


    var Directionality = /*#__PURE__*/function () {
      /**
       * @param {?=} _document
       */
      function Directionality(_document) {
        _classCallCheck(this, Directionality);

        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (_document) {
          // TODO: handle 'auto' value -
          // We still need to account for dir="auto".
          // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
          // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now

          /** @type {?} */
          var bodyDir = _document.body ? _document.body.dir : null;
          /** @type {?} */

          var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
          /** @type {?} */

          var value = bodyDir || htmlDir;
          this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
        }
      }
      /**
       * @return {?}
       */


      _createClass(Directionality, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.change.complete();
        }
      }]);

      return Directionality;
    }();

    Directionality.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    Directionality.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [DIR_DOCUMENT]
        }]
      }];
    };
    /** @nocollapse */


    Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function Directionality_Factory() {
        return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DIR_DOCUMENT, 8));
      },
      token: Directionality,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to listen for changes of direction of part of the DOM.
     *
     * Provides itself as Directionality such that descendant directives only need to ever inject
     * Directionality to get the closest direction.
     */

    var Dir = /*#__PURE__*/function () {
      function Dir() {
        _classCallCheck(this, Dir);

        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */

        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * \@docs-private
       * @return {?}
       */


      _createClass(Dir, [{
        key: "ngAfterContentInit",

        /**
         * Initialize once default value has been set.
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._isInitialized = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.change.complete();
        }
      }, {
        key: "dir",
        get: function get() {
          return this._dir;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var old = this._dir;
          /** @type {?} */

          var normalizedValue = value ? value.toLowerCase() : value;
          this._rawDir = value;
          this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

          if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
          }
        }
        /**
         * Current layout direction of the element.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.dir;
        }
      }]);

      return Dir;
    }();

    Dir.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[dir]',
        providers: [{
          provide: Directionality,
          useExisting: Dir
        }],
        host: {
          '[attr.dir]': '_rawDir'
        },
        exportAs: 'dir'
      }]
    }];
    Dir.propDecorators = {
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['dirChange']
      }],
      dir: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var BidiModule = function BidiModule() {
      _classCallCheck(this, BidiModule);
    };

    BidiModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        exports: [Dir],
        declarations: [Dir]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=bidi.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/coercion.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/coercion.js ***!
    \*******************************************************/

  /*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */

  /***/
  function node_modulesAngularCdkEsm2015CoercionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
      return coerceBooleanProperty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function () {
      return coerceNumberProperty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_isNumberValue", function () {
      return _isNumberValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
      return coerceArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function () {
      return coerceCssPixelValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceElement", function () {
      return coerceElement;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Coerces a data-bound value (typically a string) to a boolean.
     * @param {?} value
     * @return {?}
     */


    function coerceBooleanProperty(value) {
      return value != null && "".concat(value) !== 'false';
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @param {?=} fallbackValue
     * @return {?}
     */


    function coerceNumberProperty(value) {
      var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return _isNumberValue(value) ? Number(value) : fallbackValue;
    }
    /**
     * Whether the provided value is considered a number.
     * \@docs-private
     * @param {?} value
     * @return {?}
     */


    function _isNumberValue(value) {
      // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
      // and other non-number values as NaN, where Number just uses 0) but it considers the string
      // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
      return !isNaN(parseFloat(
      /** @type {?} */
      value)) && !isNaN(Number(value));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wraps the provided value in an array, unless the provided value is an array.
     * @template T
     * @param {?} value
     * @return {?}
     */


    function coerceArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Coerces a value to a CSS pixel value.
     * @param {?} value
     * @return {?}
     */


    function coerceCssPixelValue(value) {
      if (value == null) {
        return '';
      }

      return typeof value === 'string' ? value : "".concat(value, "px");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Coerces an ElementRef or an Element into an element.
     * Useful for APIs that can accept either a ref or the native element itself.
     * @template T
     * @param {?} elementOrRef
     * @return {?}
     */


    function coerceElement(elementOrRef) {
      return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=coercion.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/esm2015/collections.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/collections.js ***!
    \**********************************************************/

  /*! exports provided: UniqueSelectionDispatcher, ArrayDataSource, isDataSource, DataSource, getMultipleValuesInSingleSelectionError, SelectionModel */

  /***/
  function node_modulesAngularCdkEsm2015CollectionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
      return UniqueSelectionDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
      return ArrayDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
      return isDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return DataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
      return getMultipleValuesInSingleSelectionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
      return SelectionModel;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @abstract
     * @template T
     */


    var DataSource = function DataSource() {
      _classCallCheck(this, DataSource);
    };
    /**
     * Checks whether an object is a data source.
     * @param {?} value
     * @return {?}
     */


    function isDataSource(value) {
      // Check if the value is a DataSource by observing if it has a connect function. Cannot
      // be checked as an `instanceof DataSource` since people could create their own sources
      // that match the interface, but don't extend DataSource.
      return value && typeof value.connect === 'function';
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * DataSource wrapper for a native array.
     * @template T
     */


    var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
      _inherits(ArrayDataSource, _DataSource);

      var _super4 = _createSuper(ArrayDataSource);

      /**
       * @param {?} _data
       */
      function ArrayDataSource(_data) {
        var _this19;

        _classCallCheck(this, ArrayDataSource);

        _this19 = _super4.call(this);
        _this19._data = _data;
        return _this19;
      }
      /**
       * @return {?}
       */


      _createClass(ArrayDataSource, [{
        key: "connect",
        value: function connect() {
          return this._data instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"] ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
      }]);

      return ArrayDataSource;
    }(DataSource);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to be used to power selecting one or more options from a list.
     * @template T
     */


    var SelectionModel = /*#__PURE__*/function () {
      /**
       * @param {?=} _multiple
       * @param {?=} initiallySelectedValues
       * @param {?=} _emitChanges
       */
      function SelectionModel() {
        var _this20 = this;

        var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

        var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, SelectionModel);

        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */

        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */

        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */

        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */

        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * Event emitted when the value has changed.
         * @deprecated Use `changed` instead.
         * \@breaking-change 8.0.0 To be changed to `changed`
         */

        this.onChange = this.changed;

        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this20._markSelected(value);
            });
          } else {
            this._markSelected(initiallySelectedValues[0]);
          } // Clear the array in order to avoid firing the change event for preselected values.


          this._selectedToEmit.length = 0;
        }
      }
      /**
       * Selected values.
       * @return {?}
       */


      _createClass(SelectionModel, [{
        key: "select",

        /**
         * Selects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */
        value: function select() {
          var _this21 = this;

          for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            values[_key2] = arguments[_key2];
          }

          this._verifyValueAssignment(values);

          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this21._markSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Deselects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          var _this22 = this;

          for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            values[_key3] = arguments[_key3];
          }

          this._verifyValueAssignment(values);

          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this22._unmarkSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Toggles a value between selected and deselected.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle(value) {
          this.isSelected(value) ? this.deselect(value) : this.select(value);
        }
        /**
         * Clears all of the selected values.
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          this._unmarkAll();

          this._emitChangeEvent();
        }
        /**
         * Determines whether a value is selected.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isSelected",
        value: function isSelected(value) {
          return this._selection.has(value);
        }
        /**
         * Determines whether the model does not have a value.
         * @return {?}
         */

      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return this._selection.size === 0;
        }
        /**
         * Determines whether the model has a value.
         * @return {?}
         */

      }, {
        key: "hasValue",
        value: function hasValue() {
          return !this.isEmpty();
        }
        /**
         * Sorts the selected values based on a predicate function.
         * @param {?=} predicate
         * @return {?}
         */

      }, {
        key: "sort",
        value: function sort(predicate) {
          if (this._multiple && this.selected) {
            /** @type {?} */
            this._selected.sort(predicate);
          }
        }
        /**
         * Gets whether multiple values can be selected.
         * @return {?}
         */

      }, {
        key: "isMultipleSelection",
        value: function isMultipleSelection() {
          return this._multiple;
        }
        /**
         * Emits a change event and clears the records of selected and deselected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          // Clear the selected values so they can be re-cached.
          this._selected = null;

          if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
              source: this,
              added: this._selectedToEmit,
              removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
          }
        }
        /**
         * Selects a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_markSelected",
        value: function _markSelected(value) {
          if (!this.isSelected(value)) {
            if (!this._multiple) {
              this._unmarkAll();
            }

            this._selection.add(value);

            if (this._emitChanges) {
              this._selectedToEmit.push(value);
            }
          }
        }
        /**
         * Deselects a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_unmarkSelected",
        value: function _unmarkSelected(value) {
          if (this.isSelected(value)) {
            this._selection["delete"](value);

            if (this._emitChanges) {
              this._deselectedToEmit.push(value);
            }
          }
        }
        /**
         * Clears out the selected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_unmarkAll",
        value: function _unmarkAll() {
          var _this23 = this;

          if (!this.isEmpty()) {
            this._selection.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this23._unmarkSelected(value);
            });
          }
        }
        /**
         * Verifies the value assignment and throws an error if the specified value array is
         * including multiple values while the selection model is not supporting multiple values.
         * @private
         * @param {?} values
         * @return {?}
         */

      }, {
        key: "_verifyValueAssignment",
        value: function _verifyValueAssignment(values) {
          if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
          }
        }
      }, {
        key: "selected",
        get: function get() {
          if (!this._selected) {
            this._selected = Array.from(this._selection.values());
          }

          return this._selected;
        }
      }]);

      return SelectionModel;
    }();
    /**
     * Returns an error that reports that multiple values are passed into a selection model
     * with a single value.
     * \@docs-private
     * @return {?}
     */


    function getMultipleValuesInSingleSelectionError() {
      return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to coordinate unique selection based on name.
     * Intended to be consumed as an Angular service.
     * This service is needed because native radio change events are only fired on the item currently
     * being selected, and we still need to uncheck the previous selection.
     *
     * This service does not *store* any IDs and names because they may change at any time, so it is
     * less error-prone if they are simply passed through when the events occur.
     */


    var UniqueSelectionDispatcher = /*#__PURE__*/function () {
      function UniqueSelectionDispatcher() {
        _classCallCheck(this, UniqueSelectionDispatcher);

        this._listeners = [];
      }
      /**
       * Notify other items that selection for the given name has been set.
       * @param {?} id ID of the item.
       * @param {?} name Name of the item.
       * @return {?}
       */


      _createClass(UniqueSelectionDispatcher, [{
        key: "notify",
        value: function notify(id, name) {
          var _iterator = _createForOfIteratorHelper(this._listeners),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var listener = _step.value;
              listener(id, name);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * Listen for future changes to item selection.
         * @param {?} listener
         * @return {?} Function used to deregister listener
         */

      }, {
        key: "listen",
        value: function listen(listener) {
          var _this24 = this;

          this._listeners.push(listener);

          return (
            /**
            * @return {?}
            */
            function () {
              _this24._listeners = _this24._listeners.filter(
              /**
              * @param {?} registered
              * @return {?}
              */
              function (registered) {
                return listener !== registered;
              });
            }
          );
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._listeners = [];
        }
      }]);

      return UniqueSelectionDispatcher;
    }();

    UniqueSelectionDispatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    UniqueSelectionDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function UniqueSelectionDispatcher_Factory() {
        return new UniqueSelectionDispatcher();
      },
      token: UniqueSelectionDispatcher,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=collections.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/keycodes.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/keycodes.js ***!
    \*******************************************************/

  /*! exports provided: MAC_ENTER, BACKSPACE, TAB, NUM_CENTER, ENTER, SHIFT, CONTROL, ALT, PAUSE, CAPS_LOCK, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, PLUS_SIGN, PRINT_SCREEN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, FF_SEMICOLON, FF_EQUALS, QUESTION_MARK, AT_SIGN, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, CONTEXT_MENU, NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE, NUMPAD_MULTIPLY, NUMPAD_PLUS, NUMPAD_MINUS, NUMPAD_PERIOD, NUMPAD_DIVIDE, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, NUM_LOCK, SCROLL_LOCK, FIRST_MEDIA, FF_MINUS, MUTE, VOLUME_DOWN, VOLUME_UP, FF_MUTE, FF_VOLUME_DOWN, LAST_MEDIA, FF_VOLUME_UP, SEMICOLON, EQUALS, COMMA, DASH, SLASH, APOSTROPHE, TILDE, OPEN_SQUARE_BRACKET, BACKSLASH, CLOSE_SQUARE_BRACKET, SINGLE_QUOTE, MAC_META, hasModifierKey */

  /***/
  function node_modulesAngularCdkEsm2015KeycodesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function () {
      return MAC_ENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKSPACE", function () {
      return BACKSPACE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TAB", function () {
      return TAB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function () {
      return NUM_CENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ENTER", function () {
      return ENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SHIFT", function () {
      return SHIFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTROL", function () {
      return CONTROL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALT", function () {
      return ALT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAUSE", function () {
      return PAUSE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function () {
      return CAPS_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ESCAPE", function () {
      return ESCAPE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPACE", function () {
      return SPACE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_UP", function () {
      return PAGE_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function () {
      return PAGE_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "END", function () {
      return END;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HOME", function () {
      return HOME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function () {
      return LEFT_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UP_ARROW", function () {
      return UP_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function () {
      return RIGHT_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function () {
      return DOWN_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function () {
      return PLUS_SIGN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function () {
      return PRINT_SCREEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INSERT", function () {
      return INSERT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE", function () {
      return DELETE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZERO", function () {
      return ZERO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ONE", function () {
      return ONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TWO", function () {
      return TWO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "THREE", function () {
      return THREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOUR", function () {
      return FOUR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIVE", function () {
      return FIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIX", function () {
      return SIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEVEN", function () {
      return SEVEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EIGHT", function () {
      return EIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NINE", function () {
      return NINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function () {
      return FF_SEMICOLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function () {
      return FF_EQUALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function () {
      return QUESTION_MARK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AT_SIGN", function () {
      return AT_SIGN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "A", function () {
      return A;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "B", function () {
      return B;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C", function () {
      return C;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "D", function () {
      return D;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "E", function () {
      return E;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F", function () {
      return F;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "G", function () {
      return G;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "H", function () {
      return H;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "I", function () {
      return I;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "J", function () {
      return J;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "K", function () {
      return K;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "L", function () {
      return L;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "M", function () {
      return M;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "N", function () {
      return N;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "O", function () {
      return O;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P", function () {
      return P;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Q", function () {
      return Q;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "R", function () {
      return R;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return S;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "T", function () {
      return T;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "U", function () {
      return U;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "V", function () {
      return V;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "W", function () {
      return W;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "X", function () {
      return X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Y", function () {
      return Y;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Z", function () {
      return Z;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "META", function () {
      return META;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function () {
      return MAC_WK_CMD_LEFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function () {
      return MAC_WK_CMD_RIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function () {
      return CONTEXT_MENU;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function () {
      return NUMPAD_ZERO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function () {
      return NUMPAD_ONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function () {
      return NUMPAD_TWO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function () {
      return NUMPAD_THREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function () {
      return NUMPAD_FOUR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function () {
      return NUMPAD_FIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function () {
      return NUMPAD_SIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function () {
      return NUMPAD_SEVEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function () {
      return NUMPAD_EIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function () {
      return NUMPAD_NINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function () {
      return NUMPAD_MULTIPLY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function () {
      return NUMPAD_PLUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function () {
      return NUMPAD_MINUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function () {
      return NUMPAD_PERIOD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function () {
      return NUMPAD_DIVIDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F1", function () {
      return F1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F2", function () {
      return F2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F3", function () {
      return F3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F4", function () {
      return F4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F5", function () {
      return F5;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F6", function () {
      return F6;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F7", function () {
      return F7;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F8", function () {
      return F8;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F9", function () {
      return F9;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F10", function () {
      return F10;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F11", function () {
      return F11;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F12", function () {
      return F12;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function () {
      return NUM_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function () {
      return SCROLL_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function () {
      return FIRST_MEDIA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_MINUS", function () {
      return FF_MINUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MUTE", function () {
      return MUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function () {
      return VOLUME_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function () {
      return VOLUME_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_MUTE", function () {
      return FF_MUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function () {
      return FF_VOLUME_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function () {
      return LAST_MEDIA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function () {
      return FF_VOLUME_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEMICOLON", function () {
      return SEMICOLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EQUALS", function () {
      return EQUALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMMA", function () {
      return COMMA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DASH", function () {
      return DASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SLASH", function () {
      return SLASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function () {
      return APOSTROPHE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TILDE", function () {
      return TILDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function () {
      return OPEN_SQUARE_BRACKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKSLASH", function () {
      return BACKSLASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function () {
      return CLOSE_SQUARE_BRACKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function () {
      return SINGLE_QUOTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_META", function () {
      return MAC_META;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hasModifierKey", function () {
      return hasModifierKey;
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAC_ENTER = 3;
    /** @type {?} */

    var BACKSPACE = 8;
    /** @type {?} */

    var TAB = 9;
    /** @type {?} */

    var NUM_CENTER = 12;
    /** @type {?} */

    var ENTER = 13;
    /** @type {?} */

    var SHIFT = 16;
    /** @type {?} */

    var CONTROL = 17;
    /** @type {?} */

    var ALT = 18;
    /** @type {?} */

    var PAUSE = 19;
    /** @type {?} */

    var CAPS_LOCK = 20;
    /** @type {?} */

    var ESCAPE = 27;
    /** @type {?} */

    var SPACE = 32;
    /** @type {?} */

    var PAGE_UP = 33;
    /** @type {?} */

    var PAGE_DOWN = 34;
    /** @type {?} */

    var END = 35;
    /** @type {?} */

    var HOME = 36;
    /** @type {?} */

    var LEFT_ARROW = 37;
    /** @type {?} */

    var UP_ARROW = 38;
    /** @type {?} */

    var RIGHT_ARROW = 39;
    /** @type {?} */

    var DOWN_ARROW = 40;
    /** @type {?} */

    var PLUS_SIGN = 43;
    /** @type {?} */

    var PRINT_SCREEN = 44;
    /** @type {?} */

    var INSERT = 45;
    /** @type {?} */

    var DELETE = 46;
    /** @type {?} */

    var ZERO = 48;
    /** @type {?} */

    var ONE = 49;
    /** @type {?} */

    var TWO = 50;
    /** @type {?} */

    var THREE = 51;
    /** @type {?} */

    var FOUR = 52;
    /** @type {?} */

    var FIVE = 53;
    /** @type {?} */

    var SIX = 54;
    /** @type {?} */

    var SEVEN = 55;
    /** @type {?} */

    var EIGHT = 56;
    /** @type {?} */

    var NINE = 57;
    /** @type {?} */

    var FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

    /** @type {?} */

    var FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

    /** @type {?} */

    var QUESTION_MARK = 63;
    /** @type {?} */

    var AT_SIGN = 64;
    /** @type {?} */

    var A = 65;
    /** @type {?} */

    var B = 66;
    /** @type {?} */

    var C = 67;
    /** @type {?} */

    var D = 68;
    /** @type {?} */

    var E = 69;
    /** @type {?} */

    var F = 70;
    /** @type {?} */

    var G = 71;
    /** @type {?} */

    var H = 72;
    /** @type {?} */

    var I = 73;
    /** @type {?} */

    var J = 74;
    /** @type {?} */

    var K = 75;
    /** @type {?} */

    var L = 76;
    /** @type {?} */

    var M = 77;
    /** @type {?} */

    var N = 78;
    /** @type {?} */

    var O = 79;
    /** @type {?} */

    var P = 80;
    /** @type {?} */

    var Q = 81;
    /** @type {?} */

    var R = 82;
    /** @type {?} */

    var S = 83;
    /** @type {?} */

    var T = 84;
    /** @type {?} */

    var U = 85;
    /** @type {?} */

    var V = 86;
    /** @type {?} */

    var W = 87;
    /** @type {?} */

    var X = 88;
    /** @type {?} */

    var Y = 89;
    /** @type {?} */

    var Z = 90;
    /** @type {?} */

    var META = 91; // WIN_KEY_LEFT

    /** @type {?} */

    var MAC_WK_CMD_LEFT = 91;
    /** @type {?} */

    var MAC_WK_CMD_RIGHT = 93;
    /** @type {?} */

    var CONTEXT_MENU = 93;
    /** @type {?} */

    var NUMPAD_ZERO = 96;
    /** @type {?} */

    var NUMPAD_ONE = 97;
    /** @type {?} */

    var NUMPAD_TWO = 98;
    /** @type {?} */

    var NUMPAD_THREE = 99;
    /** @type {?} */

    var NUMPAD_FOUR = 100;
    /** @type {?} */

    var NUMPAD_FIVE = 101;
    /** @type {?} */

    var NUMPAD_SIX = 102;
    /** @type {?} */

    var NUMPAD_SEVEN = 103;
    /** @type {?} */

    var NUMPAD_EIGHT = 104;
    /** @type {?} */

    var NUMPAD_NINE = 105;
    /** @type {?} */

    var NUMPAD_MULTIPLY = 106;
    /** @type {?} */

    var NUMPAD_PLUS = 107;
    /** @type {?} */

    var NUMPAD_MINUS = 109;
    /** @type {?} */

    var NUMPAD_PERIOD = 110;
    /** @type {?} */

    var NUMPAD_DIVIDE = 111;
    /** @type {?} */

    var F1 = 112;
    /** @type {?} */

    var F2 = 113;
    /** @type {?} */

    var F3 = 114;
    /** @type {?} */

    var F4 = 115;
    /** @type {?} */

    var F5 = 116;
    /** @type {?} */

    var F6 = 117;
    /** @type {?} */

    var F7 = 118;
    /** @type {?} */

    var F8 = 119;
    /** @type {?} */

    var F9 = 120;
    /** @type {?} */

    var F10 = 121;
    /** @type {?} */

    var F11 = 122;
    /** @type {?} */

    var F12 = 123;
    /** @type {?} */

    var NUM_LOCK = 144;
    /** @type {?} */

    var SCROLL_LOCK = 145;
    /** @type {?} */

    var FIRST_MEDIA = 166;
    /** @type {?} */

    var FF_MINUS = 173;
    /** @type {?} */

    var MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

    /** @type {?} */

    var VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

    /** @type {?} */

    var VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

    /** @type {?} */

    var FF_MUTE = 181;
    /** @type {?} */

    var FF_VOLUME_DOWN = 182;
    /** @type {?} */

    var LAST_MEDIA = 183;
    /** @type {?} */

    var FF_VOLUME_UP = 183;
    /** @type {?} */

    var SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

    /** @type {?} */

    var EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

    /** @type {?} */

    var COMMA = 188;
    /** @type {?} */

    var DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

    /** @type {?} */

    var SLASH = 191;
    /** @type {?} */

    var APOSTROPHE = 192;
    /** @type {?} */

    var TILDE = 192;
    /** @type {?} */

    var OPEN_SQUARE_BRACKET = 219;
    /** @type {?} */

    var BACKSLASH = 220;
    /** @type {?} */

    var CLOSE_SQUARE_BRACKET = 221;
    /** @type {?} */

    var SINGLE_QUOTE = 222;
    /** @type {?} */

    var MAC_META = 224;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Checks whether a modifier key is pressed.
     * @param {?} event Event to be checked.
     * @param {...?} modifiers
     * @return {?}
     */

    function hasModifierKey(event) {
      for (var _len4 = arguments.length, modifiers = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        modifiers[_key4 - 1] = arguments[_key4];
      }

      if (modifiers.length) {
        return modifiers.some(
        /**
        * @param {?} modifier
        * @return {?}
        */
        function (modifier) {
          return event[modifier];
        });
      }

      return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=keycodes.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/esm2015/observers.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/observers.js ***!
    \********************************************************/

  /*! exports provided: MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule */

  /***/
  function node_modulesAngularCdkEsm2015ObserversJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function () {
      return MutationObserverFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentObserver", function () {
      return ContentObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function () {
      return CdkObserveContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObserversModule", function () {
      return ObserversModule;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
     * \@docs-private
     */


    var MutationObserverFactory = /*#__PURE__*/function () {
      function MutationObserverFactory() {
        _classCallCheck(this, MutationObserverFactory);
      }

      _createClass(MutationObserverFactory, [{
        key: "create",

        /**
         * @param {?} callback
         * @return {?}
         */
        value: function create(callback) {
          return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
        }
      }]);

      return MutationObserverFactory;
    }();

    MutationObserverFactory.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MutationObserverFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function MutationObserverFactory_Factory() {
        return new MutationObserverFactory();
      },
      token: MutationObserverFactory,
      providedIn: "root"
    });
    /**
     * An injectable service that allows watching elements for changes to their content.
     */

    var ContentObserver = /*#__PURE__*/function () {
      /**
       * @param {?} _mutationObserverFactory
       */
      function ContentObserver(_mutationObserverFactory) {
        _classCallCheck(this, ContentObserver);

        this._mutationObserverFactory = _mutationObserverFactory;
        /**
         * Keeps track of the existing MutationObservers so they can be reused.
         */

        this._observedElements = new Map();
      }
      /**
       * @return {?}
       */


      _createClass(ContentObserver, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this25 = this;

          this._observedElements.forEach(
          /**
          * @param {?} _
          * @param {?} element
          * @return {?}
          */
          function (_, element) {
            return _this25._cleanupObserver(element);
          });
        }
        /**
         * @param {?} elementOrRef
         * @return {?}
         */

      }, {
        key: "observe",
        value: function observe(elementOrRef) {
          var _this26 = this;

          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            /** @type {?} */
            var stream = _this26._observeElement(element);
            /** @type {?} */


            var subscription = stream.subscribe(observer);
            return (
              /**
              * @return {?}
              */
              function () {
                subscription.unsubscribe();

                _this26._unobserveElement(element);
              }
            );
          });
        }
        /**
         * Observes the given element by using the existing MutationObserver if available, or creating a
         * new one if not.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_observeElement",
        value: function _observeElement(element) {
          if (!this._observedElements.has(element)) {
            /** @type {?} */
            var stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** @type {?} */

            var observer = this._mutationObserverFactory.create(
            /**
            * @param {?} mutations
            * @return {?}
            */
            function (mutations) {
              return stream.next(mutations);
            });

            if (observer) {
              observer.observe(element, {
                characterData: true,
                childList: true,
                subtree: true
              });
            }

            this._observedElements.set(element, {
              observer: observer,
              stream: stream,
              count: 1
            });
          } else {
            /** @type {?} */this._observedElements.get(element).count++;
          }

          return (
            /** @type {?} */
            this._observedElements.get(element).stream
          );
        }
        /**
         * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
         * observing this element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_unobserveElement",
        value: function _unobserveElement(element) {
          if (this._observedElements.has(element)) {
            /** @type {?} */this._observedElements.get(element).count--;

            if (!
            /** @type {?} */
            this._observedElements.get(element).count) {
              this._cleanupObserver(element);
            }
          }
        }
        /**
         * Clean up the underlying MutationObserver for the specified element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_cleanupObserver",
        value: function _cleanupObserver(element) {
          if (this._observedElements.has(element)) {
            var _this$_observedElemen =
            /** @type {?} */
            this._observedElements.get(element),
                observer = _this$_observedElemen.observer,
                stream = _this$_observedElemen.stream;

            if (observer) {
              observer.disconnect();
            }

            stream.complete();

            this._observedElements["delete"](element);
          }
        }
      }]);

      return ContentObserver;
    }();

    ContentObserver.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ContentObserver.ctorParameters = function () {
      return [{
        type: MutationObserverFactory
      }];
    };
    /** @nocollapse */


    ContentObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ContentObserver_Factory() {
        return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MutationObserverFactory));
      },
      token: ContentObserver,
      providedIn: "root"
    });
    /**
     * Directive that triggers a callback whenever the content of
     * its associated element has changed.
     */

    var CdkObserveContent = /*#__PURE__*/function () {
      /**
       * @param {?} _contentObserver
       * @param {?} _elementRef
       * @param {?} _ngZone
       */
      function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
        _classCallCheck(this, CdkObserveContent);

        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event emitted for each change in the element's content.
         */

        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._disabled = false;
        this._currentSubscription = null;
      }
      /**
       * Whether observing content is disabled. This option can be used
       * to disconnect the underlying MutationObserver until it is needed.
       * @return {?}
       */


      _createClass(CdkObserveContent, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._unsubscribe();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribe",
        value: function _subscribe() {
          var _this27 = this;

          this._unsubscribe();
          /** @type {?} */


          var stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
          // Consider brining it back inside the zone next time we're making breaking changes.
          // Bringing it back inside can cause things like infinite change detection loops and changed
          // after checked errors if people's code isn't handling it properly.


          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this27._currentSubscription = (_this27.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(_this27.debounce)) : stream).subscribe(_this27.event);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          if (this._currentSubscription) {
            this._currentSubscription.unsubscribe();
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          this._disabled ? this._unsubscribe() : this._subscribe();
        }
        /**
         * Debounce interval for emitting the changes.
         * @return {?}
         */

      }, {
        key: "debounce",
        get: function get() {
          return this._debounce;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);

          this._subscribe();
        }
      }]);

      return CdkObserveContent;
    }();

    CdkObserveContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkObserveContent]',
        exportAs: 'cdkObserveContent'
      }]
    }];
    /** @nocollapse */

    CdkObserveContent.ctorParameters = function () {
      return [{
        type: ContentObserver
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkObserveContent.propDecorators = {
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['cdkObserveContent']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkObserveContentDisabled']
      }],
      debounce: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };

    var ObserversModule = function ObserversModule() {
      _classCallCheck(this, ObserversModule);
    };

    ObserversModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        exports: [CdkObserveContent],
        declarations: [CdkObserveContent],
        providers: [MutationObserverFactory]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=observers.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/overlay.js":
  /*!******************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/overlay.js ***!
    \******************************************************/

  /*! exports provided: ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkScrollable, ScrollDispatcher, Overlay, OverlayContainer, CdkOverlayOrigin, CdkConnectedOverlay, FullscreenOverlayContainer, OverlayRef, OverlayKeyboardDispatcher, OverlayPositionBuilder, GlobalPositionStrategy, ConnectedPositionStrategy, FlexibleConnectedPositionStrategy, OverlayConfig, validateVerticalPosition, validateHorizontalPosition, ConnectionPositionPair, ScrollingVisibility, ConnectedOverlayPositionChange, ScrollStrategyOptions, RepositionScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, BlockScrollStrategy, OverlayModule, OVERLAY_PROVIDERS, ɵg, ɵf, ɵb, ɵa, ɵc, ɵe, ɵd */

  /***/
  function node_modulesAngularCdkEsm2015OverlayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Overlay", function () {
      return Overlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
      return OverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function () {
      return CdkOverlayOrigin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function () {
      return CdkConnectedOverlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function () {
      return FullscreenOverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
      return OverlayRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function () {
      return OverlayKeyboardDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function () {
      return OverlayPositionBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function () {
      return GlobalPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function () {
      return ConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function () {
      return FlexibleConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayConfig", function () {
      return OverlayConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function () {
      return validateVerticalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function () {
      return validateHorizontalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function () {
      return ConnectionPositionPair;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function () {
      return ScrollingVisibility;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function () {
      return ConnectedOverlayPositionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function () {
      return ScrollStrategyOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function () {
      return RepositionScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function () {
      return CloseScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function () {
      return NoopScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function () {
      return BlockScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayModule", function () {
      return OverlayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function () {
      return OVERLAY_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return OVERLAY_CONTAINER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return OVERLAY_CONTAINER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"];
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Strategy that will prevent the user from scrolling while the overlay is visible.
     */


    var BlockScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} _viewportRuler
       * @param {?} document
       */
      function BlockScrollStrategy(_viewportRuler, document) {
        _classCallCheck(this, BlockScrollStrategy);

        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = {
          top: '',
          left: ''
        };
        this._isEnabled = false;
        this._document = document;
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @return {?}
       */


      _createClass(BlockScrollStrategy, [{
        key: "attach",
        value: function attach() {}
        /**
         * Blocks page-level scroll while the attached overlay is open.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          if (this._canBeEnabled()) {
            /** @type {?} */
            var root =
            /** @type {?} */
            this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(); // Cache the previous inline styles in case the user had set them.

            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || ''; // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.

            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
          }
        }
        /**
         * Unblocks page-level scroll while the attached overlay is open.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          if (this._isEnabled) {
            /** @type {?} */
            var html =
            /** @type {?} */
            this._document.documentElement;
            /** @type {?} */

            var body =
            /** @type {?} */
            this._document.body;
            /** @type {?} */

            var htmlStyle =
            /** @type {?} */
            html.style;
            /** @type {?} */

            var bodyStyle =
            /** @type {?} */
            body.style;
            /** @type {?} */

            var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            /** @type {?} */

            var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock'); // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_canBeEnabled",
        value: function _canBeEnabled() {
          // Since the scroll strategies can't be singletons, we have to use a global CSS class
          // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
          // scrolling multiple times.

          /** @type {?} */
          var html =
          /** @type {?} */
          this._document.documentElement;

          if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
          }
          /** @type {?} */


          var body = this._document.body;
          /** @type {?} */

          var viewport = this._viewportRuler.getViewportSize();

          return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
        }
      }]);

      return BlockScrollStrategy;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
     * @return {?}
     */


    function getMatScrollStrategyAlreadyAttachedError() {
      return Error("Scroll strategy has already been attached.");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Strategy that will close the overlay as soon as the user starts scrolling.
     */


    var CloseScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} _scrollDispatcher
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?=} _config
       */
      function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this28 = this;

        _classCallCheck(this, CloseScrollStrategy);

        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */

        this._detach =
        /**
        * @return {?}
        */
        function () {
          _this28.disable();

          if (_this28._overlayRef.hasAttached()) {
            _this28._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this28._overlayRef.detach();
            });
          }
        };
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @param {?} overlayRef
       * @return {?}
       */


      _createClass(CloseScrollStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
          }

          this._overlayRef = overlayRef;
        }
        /**
         * Enables the closing of the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          var _this29 = this;

          if (this._scrollSubscription) {
            return;
          }
          /** @type {?} */


          var stream = this._scrollDispatcher.scrolled(0);

          if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var scrollPosition = _this29._viewportRuler.getViewportScrollPosition().top;

              if (Math.abs(scrollPosition - _this29._initialScrollPosition) >
              /** @type {?} */

              /** @type {?} */
              _this29._config.threshold) {
                _this29._detach();
              } else {
                _this29._overlayRef.updatePosition();
              }
            });
          } else {
            this._scrollSubscription = stream.subscribe(this._detach);
          }
        }
        /**
         * Disables the closing the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();

            this._scrollSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this.disable();
          this._overlayRef =
          /** @type {?} */
          null;
        }
      }]);

      return CloseScrollStrategy;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Scroll strategy that doesn't do anything.
     */


    var NoopScrollStrategy = /*#__PURE__*/function () {
      function NoopScrollStrategy() {
        _classCallCheck(this, NoopScrollStrategy);
      }

      _createClass(NoopScrollStrategy, [{
        key: "enable",

        /**
         * Does nothing, as this scroll strategy is a no-op.
         * @return {?}
         */
        value: function enable() {}
        /**
         * Does nothing, as this scroll strategy is a no-op.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {}
        /**
         * Does nothing, as this scroll strategy is a no-op.
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach() {}
      }]);

      return NoopScrollStrategy;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(jelbourn): move this to live with the rest of the scrolling code
    // TODO(jelbourn): someday replace this with IntersectionObservers

    /**
     * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
     * \@docs-private
     * @param {?} element Dimensions of the element (from getBoundingClientRect)
     * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @return {?} Whether the element is scrolled out of view
     */


    function isElementScrolledOutsideView(element, scrollContainers) {
      return scrollContainers.some(
      /**
      * @param {?} containerBounds
      * @return {?}
      */
      function (containerBounds) {
        /** @type {?} */
        var outsideAbove = element.bottom < containerBounds.top;
        /** @type {?} */

        var outsideBelow = element.top > containerBounds.bottom;
        /** @type {?} */

        var outsideLeft = element.right < containerBounds.left;
        /** @type {?} */

        var outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
      });
    }
    /**
     * Gets whether an element is clipped by any of its scrolling containers.
     * \@docs-private
     * @param {?} element Dimensions of the element (from getBoundingClientRect)
     * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @return {?} Whether the element is clipped
     */


    function isElementClippedByScrolling(element, scrollContainers) {
      return scrollContainers.some(
      /**
      * @param {?} scrollContainerRect
      * @return {?}
      */
      function (scrollContainerRect) {
        /** @type {?} */
        var clippedAbove = element.top < scrollContainerRect.top;
        /** @type {?} */

        var clippedBelow = element.bottom > scrollContainerRect.bottom;
        /** @type {?} */

        var clippedLeft = element.left < scrollContainerRect.left;
        /** @type {?} */

        var clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Strategy that will update the element position as the user is scrolling.
     */


    var RepositionScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} _scrollDispatcher
       * @param {?} _viewportRuler
       * @param {?} _ngZone
       * @param {?=} _config
       */
      function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        _classCallCheck(this, RepositionScrollStrategy);

        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @param {?} overlayRef
       * @return {?}
       */


      _createClass(RepositionScrollStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
          }

          this._overlayRef = overlayRef;
        }
        /**
         * Enables repositioning of the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          var _this30 = this;

          if (!this._scrollSubscription) {
            /** @type {?} */
            var throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this30._overlayRef.updatePosition(); // TODO(crisbeto): make `close` on by default once all components can handle it.


              if (_this30._config && _this30._config.autoClose) {
                /** @type {?} */
                var overlayRect = _this30._overlayRef.overlayElement.getBoundingClientRect();

                var _this30$_viewportRule = _this30._viewportRuler.getViewportSize(),
                    width = _this30$_viewportRule.width,
                    height = _this30$_viewportRule.height; // TODO(crisbeto): include all ancestor scroll containers here once
                // we have a way of exposing the trigger element to the scroll strategy.

                /** @type {?} */


                var parentRects = [{
                  width: width,
                  height: height,
                  bottom: height,
                  right: width,
                  top: 0,
                  left: 0
                }];

                if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                  _this30.disable();

                  _this30._ngZone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this30._overlayRef.detach();
                  });
                }
              }
            });
          }
        }
        /**
         * Disables repositioning of the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();

            this._scrollSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this.disable();
          this._overlayRef =
          /** @type {?} */
          null;
        }
      }]);

      return RepositionScrollStrategy;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Options for how an overlay will handle scrolling.
     *
     * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
     * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
     */


    var ScrollStrategyOptions =
    /**
     * @param {?} _scrollDispatcher
     * @param {?} _viewportRuler
     * @param {?} _ngZone
     * @param {?} document
     */
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
      var _this31 = this;

      _classCallCheck(this, ScrollStrategyOptions);

      this._scrollDispatcher = _scrollDispatcher;
      this._viewportRuler = _viewportRuler;
      this._ngZone = _ngZone;
      /**
       * Do nothing on scroll.
       */

      this.noop =
      /**
      * @return {?}
      */
      function () {
        return new NoopScrollStrategy();
      };
      /**
       * Close the overlay as soon as the user scrolls.
       * @param config Configuration to be used inside the scroll strategy.
       */


      this.close =
      /**
      * @param {?=} config
      * @return {?}
      */
      function (config) {
        return new CloseScrollStrategy(_this31._scrollDispatcher, _this31._ngZone, _this31._viewportRuler, config);
      };
      /**
       * Block scrolling.
       */


      this.block =
      /**
      * @return {?}
      */
      function () {
        return new BlockScrollStrategy(_this31._viewportRuler, _this31._document);
      };
      /**
       * Update the overlay's position on scroll.
       * @param config Configuration to be used inside the scroll strategy.
       * Allows debouncing the reposition calls.
       */


      this.reposition =
      /**
      * @param {?=} config
      * @return {?}
      */
      function (config) {
        return new RepositionScrollStrategy(_this31._scrollDispatcher, _this31._viewportRuler, _this31._ngZone, config);
      };

      this._document = document;
    };

    ScrollStrategyOptions.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ScrollStrategyOptions.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ScrollStrategyOptions.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
      factory: function ScrollStrategyOptions_Factory() {
        return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      },
      token: ScrollStrategyOptions,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Initial configuration used when creating an overlay.
     */

    var OverlayConfig =
    /**
     * @param {?=} config
     */
    function OverlayConfig(config) {
      _classCallCheck(this, OverlayConfig);

      /**
       * Strategy to be used when handling scroll events while the overlay is open.
       */
      this.scrollStrategy = new NoopScrollStrategy();
      /**
       * Custom class to add to the overlay pane.
       */

      this.panelClass = '';
      /**
       * Whether the overlay has a backdrop.
       */

      this.hasBackdrop = false;
      /**
       * Custom class to add to the backdrop
       */

      this.backdropClass = 'cdk-overlay-dark-backdrop';
      /**
       * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.disposeOnNavigation = false;

      if (config) {
        /** @type {?} */
        var configKeys =
        /** @type {?} */
        Object.keys(config);

        for (var _i2 = 0, _configKeys = configKeys; _i2 < _configKeys.length; _i2++) {
          var key = _configKeys[_i2];

          if (config[key] !== undefined) {
            // TypeScript, as of version 3.5, sees the left-hand-side of this expression
            // as "I don't know *which* key this is, so the only valid value is the intersection
            // of all the posible values." In this case, that happens to be `undefined`. TypeScript
            // is not smart enough to see that the right-hand-side is actually an access of the same
            // exact type with the same exact key, meaning that the value type must be identical.
            // So we use `any` to work around this.
            this[key] =
            /** @type {?} */
            config[key];
          }
        }
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The points of the origin element and the overlay element to connect.
     */


    var ConnectionPositionPair =
    /**
     * @param {?} origin
     * @param {?} overlay
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @param {?=} panelClass
     */
    function ConnectionPositionPair(origin, overlay, offsetX, offsetY, panelClass) {
      _classCallCheck(this, ConnectionPositionPair);

      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.panelClass = panelClass;
      this.originX = origin.originX;
      this.originY = origin.originY;
      this.overlayX = overlay.overlayX;
      this.overlayY = overlay.overlayY;
    };
    /**
     * Set of properties regarding the position of the origin and overlay relative to the viewport
     * with respect to the containing Scrollable elements.
     *
     * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
     * bounds of any one of the strategy's Scrollable's bounding client rectangle.
     *
     * The overlay and origin are outside view if there is no overlap between their bounding client
     * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
     *
     *       -----------                    -----------
     *       | outside |                    | clipped |
     *       |  view   |              --------------------------
     *       |         |              |     |         |        |
     *       ----------               |     -----------        |
     *  --------------------------    |                        |
     *  |                        |    |      Scrollable        |
     *  |                        |    |                        |
     *  |                        |     --------------------------
     *  |      Scrollable        |
     *  |                        |
     *  --------------------------
     *
     * \@docs-private
     */


    var ScrollingVisibility = function ScrollingVisibility() {
      _classCallCheck(this, ScrollingVisibility);
    };
    /**
     * The change event emitted by the strategy when a fallback position is used.
     */


    var ConnectedOverlayPositionChange =
    /**
     * @param {?} connectionPair
     * @param {?} scrollableViewProperties
     */
    function ConnectedOverlayPositionChange(connectionPair, scrollableViewProperties) {
      _classCallCheck(this, ConnectedOverlayPositionChange);

      this.connectionPair = connectionPair;
      this.scrollableViewProperties = scrollableViewProperties;
    };
    /** @nocollapse */


    ConnectedOverlayPositionChange.ctorParameters = function () {
      return [{
        type: ConnectionPositionPair
      }, {
        type: ScrollingVisibility,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /**
     * Validates whether a vertical position property matches the expected values.
     * \@docs-private
     * @param {?} property Name of the property being validated.
     * @param {?} value Value of the property being validated.
     * @return {?}
     */


    function validateVerticalPosition(property, value) {
      if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"top\", \"bottom\" or \"center\".");
      }
    }
    /**
     * Validates whether a horizontal position property matches the expected values.
     * \@docs-private
     * @param {?} property Name of the property being validated.
     * @param {?} value Value of the property being validated.
     * @return {?}
     */


    function validateHorizontalPosition(property, value) {
      if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"start\", \"end\" or \"center\".");
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
     * if any. It maintains a list of attached overlays to determine best suited overlay based
     * on event target and order of overlay opens.
     */


    var OverlayKeyboardDispatcher = /*#__PURE__*/function () {
      /**
       * @param {?} document
       */
      function OverlayKeyboardDispatcher(document) {
        var _this32 = this;

        _classCallCheck(this, OverlayKeyboardDispatcher);

        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
        /**
         * Keyboard event listener that will be attached to the body.
         */

        this._keydownListener =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          /** @type {?} */
          var overlays = _this32._attachedOverlays;

          for (var i = overlays.length - 1; i > -1; i--) {
            // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
            // We want to target the most recent overlay, rather than trying to match where the event came
            // from, because some components might open an overlay, but keep focus on a trigger element
            // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
            // because we don't want overlays that don't handle keyboard events to block the ones below
            // them that do.
            if (overlays[i]._keydownEventSubscriptions > 0) {
              overlays[i]._keydownEvents.next(event);

              break;
            }
          }
        };

        this._document = document;
      }
      /**
       * @return {?}
       */


      _createClass(OverlayKeyboardDispatcher, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._detach();
        }
        /**
         * Add a new overlay to the list of attached overlay refs.
         * @param {?} overlayRef
         * @return {?}
         */

      }, {
        key: "add",
        value: function add(overlayRef) {
          // Ensure that we don't get the same overlay multiple times.
          this.remove(overlayRef); // Lazily start dispatcher once first overlay is added

          if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener);

            this._isAttached = true;
          }

          this._attachedOverlays.push(overlayRef);
        }
        /**
         * Remove an overlay from the list of attached overlay refs.
         * @param {?} overlayRef
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove(overlayRef) {
          /** @type {?} */
          var index = this._attachedOverlays.indexOf(overlayRef);

          if (index > -1) {
            this._attachedOverlays.splice(index, 1);
          } // Remove the global listener once there are no more overlays.


          if (this._attachedOverlays.length === 0) {
            this._detach();
          }
        }
        /**
         * Detaches the global keyboard event listener.
         * @private
         * @return {?}
         */

      }, {
        key: "_detach",
        value: function _detach() {
          if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener);

            this._isAttached = false;
          }
        }
      }]);

      return OverlayKeyboardDispatcher;
    }();

    OverlayKeyboardDispatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    OverlayKeyboardDispatcher.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    OverlayKeyboardDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
      factory: function OverlayKeyboardDispatcher_Factory() {
        return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      },
      token: OverlayKeyboardDispatcher,
      providedIn: "root"
    });
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} dispatcher
     * @param {?} _document
     * @return {?}
     */

    function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
      return dispatcher || new OverlayKeyboardDispatcher(_document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
      // If there is already an OverlayKeyboardDispatcher available, use that.
      // Otherwise, provide a new one.
      provide: OverlayKeyboardDispatcher,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), OverlayKeyboardDispatcher],
      /** @type {?} */
      // Coerce to `InjectionToken` so that the `deps` match the "shape"
      // of the type expected by Angular
      _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]],
      useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Container inside which all overlays will render.
     */

    var OverlayContainer = /*#__PURE__*/function () {
      /**
       * @param {?} document
       */
      function OverlayContainer(document) {
        _classCallCheck(this, OverlayContainer);

        this._document = document;
      }
      /**
       * @return {?}
       */


      _createClass(OverlayContainer, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._containerElement && this._containerElement.parentNode) {
            this._containerElement.parentNode.removeChild(this._containerElement);
          }
        }
        /**
         * This method returns the overlay container element. It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @return {?} the container element
         */

      }, {
        key: "getContainerElement",
        value: function getContainerElement() {
          if (!this._containerElement) {
            this._createContainer();
          }

          return this._containerElement;
        }
        /**
         * Create the overlay container element, which is simply a div
         * with the 'cdk-overlay-container' class on the document body.
         * @protected
         * @return {?}
         */

      }, {
        key: "_createContainer",
        value: function _createContainer() {
          /** @type {?} */
          var containerClass = 'cdk-overlay-container';
          /** @type {?} */

          var previousContainers = this._document.getElementsByClassName(containerClass); // Remove any old containers. This can happen when transitioning from the server to the client.


          for (var i = 0; i < previousContainers.length; i++) {
            /** @type {?} */
            previousContainers[i].parentNode.removeChild(previousContainers[i]);
          }
          /** @type {?} */


          var container = this._document.createElement('div');

          container.classList.add(containerClass);

          this._document.body.appendChild(container);

          this._containerElement = container;
        }
      }]);

      return OverlayContainer;
    }();

    OverlayContainer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    OverlayContainer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    OverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
      factory: function OverlayContainer_Factory() {
        return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      },
      token: OverlayContainer,
      providedIn: "root"
    });
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentContainer
     * @param {?} _document
     * @return {?}
     */

    function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
      return parentContainer || new OverlayContainer(_document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var OVERLAY_CONTAINER_PROVIDER = {
      // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
      provide: OverlayContainer,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), OverlayContainer],
      /** @type {?} */
      _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]],
      useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */

    var OverlayRef = /*#__PURE__*/function () {
      /**
       * @param {?} _portalOutlet
       * @param {?} _host
       * @param {?} _pane
       * @param {?} _config
       * @param {?} _ngZone
       * @param {?} _keyboardDispatcher
       * @param {?} _document
       * @param {?=} _location
       */
      function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location) {
        var _this33 = this;

        _classCallCheck(this, OverlayRef);

        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;

        this._backdropClickHandler =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return _this33._backdropClick.next(event);
        };

        this._keydownEventsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          /** @type {?} */
          var subscription = _this33._keydownEvents.subscribe(observer);

          _this33._keydownEventSubscriptions++;
          return (
            /**
            * @return {?}
            */
            function () {
              subscription.unsubscribe();
              _this33._keydownEventSubscriptions--;
            }
          );
        });
        /**
         * Stream of keydown events dispatched to this overlay.
         */

        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Amount of subscriptions to the keydown events.
         */

        this._keydownEventSubscriptions = 0;

        if (_config.scrollStrategy) {
          this._scrollStrategy = _config.scrollStrategy;

          this._scrollStrategy.attach(this);
        }

        this._positionStrategy = _config.positionStrategy;
      }
      /**
       * The overlay's HTML element
       * @return {?}
       */


      _createClass(OverlayRef, [{
        key: "attach",

        /**
         * Attaches content, given via a Portal, to the overlay.
         * If the overlay is configured to have a backdrop, it will be created.
         *
         * @param {?} portal Portal instance to which to attach the overlay.
         * @return {?} The portal attachment result.
         */
        value: function attach(portal) {
          var _this34 = this;

          /** @type {?} */
          var attachResult = this._portalOutlet.attach(portal);

          if (this._positionStrategy) {
            this._positionStrategy.attach(this);
          } // Update the pane element with the given configuration.


          if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
          }

          this._updateStackingOrder();

          this._updateElementSize();

          this._updateElementDirection();

          if (this._scrollStrategy) {
            this._scrollStrategy.enable();
          } // Update the position once the zone is stable so that the overlay will be fully rendered
          // before attempting to position it, as the position may depend on the size of the rendered
          // content.


          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this34.hasAttached()) {
              _this34.updatePosition();
            }
          }); // Enable pointer events for the overlay pane element.


          this._togglePointerEvents(true);

          if (this._config.hasBackdrop) {
            this._attachBackdrop();
          }

          if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
          } // Only emit the `attachments` event once all other setup is done.


          this._attachments.next(); // Track this overlay by the keyboard dispatcher


          this._keyboardDispatcher.add(this); // @breaking-change 8.0.0 remove the null check for `_location`
          // once the constructor parameter is made required.


          if (this._config.disposeOnNavigation && this._location) {
            this._locationChanges = this._location.subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this34.dispose();
            });
          }

          return attachResult;
        }
        /**
         * Detaches an overlay from a portal.
         * @return {?} The portal detachment result.
         */

      }, {
        key: "detach",
        value: function detach() {
          if (!this.hasAttached()) {
            return;
          }

          this.detachBackdrop(); // When the overlay is detached, the pane element should disable pointer events.
          // This is necessary because otherwise the pane element will cover the page and disable
          // pointer events therefore. Depends on the position strategy and the applied pane boundaries.

          this._togglePointerEvents(false);

          if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
          }

          if (this._scrollStrategy) {
            this._scrollStrategy.disable();
          }
          /** @type {?} */


          var detachmentResult = this._portalOutlet.detach(); // Only emit after everything is detached.


          this._detachments.next(); // Remove this overlay from keyboard dispatcher tracking.


          this._keyboardDispatcher.remove(this); // Keeping the host element in DOM the can cause scroll jank, because it still gets
          // rendered, even though it's transparent and unclickable which is why we remove it.


          this._detachContentWhenStable(); // Stop listening for location changes.


          this._locationChanges.unsubscribe();

          return detachmentResult;
        }
        /**
         * Cleans up the overlay from the DOM.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          /** @type {?} */
          var isAttached = this.hasAttached();

          if (this._positionStrategy) {
            this._positionStrategy.dispose();
          }

          this._disposeScrollStrategy();

          this.detachBackdrop();

          this._locationChanges.unsubscribe();

          this._keyboardDispatcher.remove(this);

          this._portalOutlet.dispose();

          this._attachments.complete();

          this._backdropClick.complete();

          this._keydownEvents.complete();

          if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);

            this._host =
            /** @type {?} */
            null;
          }

          this._previousHostParent = this._pane =
          /** @type {?} */
          null;

          if (isAttached) {
            this._detachments.next();
          }

          this._detachments.complete();
        }
        /**
         * Whether the overlay has attached content.
         * @return {?}
         */

      }, {
        key: "hasAttached",
        value: function hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        /**
         * Gets an observable that emits when the backdrop has been clicked.
         * @return {?}
         */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._backdropClick.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay has been attached.
         * @return {?}
         */

      }, {
        key: "attachments",
        value: function attachments() {
          return this._attachments.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay has been detached.
         * @return {?}
         */

      }, {
        key: "detachments",
        value: function detachments() {
          return this._detachments.asObservable();
        }
        /**
         * Gets an observable of keydown events targeted to this overlay.
         * @return {?}
         */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._keydownEventsObservable;
        }
        /**
         * Gets the current overlay configuration, which is immutable.
         * @return {?}
         */

      }, {
        key: "getConfig",
        value: function getConfig() {
          return this._config;
        }
        /**
         * Updates the position of the overlay based on the position strategy.
         * @return {?}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          if (this._positionStrategy) {
            this._positionStrategy.apply();
          }
        }
        /**
         * Switches to a new position strategy and updates the overlay position.
         * @param {?} strategy
         * @return {?}
         */

      }, {
        key: "updatePositionStrategy",
        value: function updatePositionStrategy(strategy) {
          if (strategy === this._positionStrategy) {
            return;
          }

          if (this._positionStrategy) {
            this._positionStrategy.dispose();
          }

          this._positionStrategy = strategy;

          if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
          }
        }
        /**
         * Update the size properties of the overlay.
         * @param {?} sizeConfig
         * @return {?}
         */

      }, {
        key: "updateSize",
        value: function updateSize(sizeConfig) {
          this._config = Object.assign({}, this._config, sizeConfig);

          this._updateElementSize();
        }
        /**
         * Sets the LTR/RTL direction for the overlay.
         * @param {?} dir
         * @return {?}
         */

      }, {
        key: "setDirection",
        value: function setDirection(dir) {
          this._config = Object.assign({}, this._config, {
            direction: dir
          });

          this._updateElementDirection();
        }
        /**
         * Add a CSS class or an array of classes to the overlay pane.
         * @param {?} classes
         * @return {?}
         */

      }, {
        key: "addPanelClass",
        value: function addPanelClass(classes) {
          if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
          }
        }
        /**
         * Remove a CSS class or an array of classes from the overlay pane.
         * @param {?} classes
         * @return {?}
         */

      }, {
        key: "removePanelClass",
        value: function removePanelClass(classes) {
          if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
          }
        }
        /**
         * Returns the layout direction of the overlay panel.
         * @return {?}
         */

      }, {
        key: "getDirection",
        value: function getDirection() {
          /** @type {?} */
          var direction = this._config.direction;

          if (!direction) {
            return 'ltr';
          }

          return typeof direction === 'string' ? direction : direction.value;
        }
        /**
         * Switches to a new scroll strategy.
         * @param {?} strategy
         * @return {?}
         */

      }, {
        key: "updateScrollStrategy",
        value: function updateScrollStrategy(strategy) {
          if (strategy === this._scrollStrategy) {
            return;
          }

          this._disposeScrollStrategy();

          this._scrollStrategy = strategy;

          if (this.hasAttached()) {
            strategy.attach(this);
            strategy.enable();
          }
        }
        /**
         * Updates the text direction of the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateElementDirection",
        value: function _updateElementDirection() {
          this._host.setAttribute('dir', this.getDirection());
        }
        /**
         * Updates the size of the overlay element based on the overlay config.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateElementSize",
        value: function _updateElementSize() {
          if (!this._pane) {
            return;
          }
          /** @type {?} */


          var style = this._pane.style;
          style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.width);
          style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.height);
          style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minWidth);
          style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minHeight);
          style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxWidth);
          style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxHeight);
        }
        /**
         * Toggles the pointer events for the overlay pane element.
         * @private
         * @param {?} enablePointer
         * @return {?}
         */

      }, {
        key: "_togglePointerEvents",
        value: function _togglePointerEvents(enablePointer) {
          this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
        }
        /**
         * Attaches a backdrop for this overlay.
         * @private
         * @return {?}
         */

      }, {
        key: "_attachBackdrop",
        value: function _attachBackdrop() {
          var _this35 = this;

          /** @type {?} */
          var showingClass = 'cdk-overlay-backdrop-showing';
          this._backdropElement = this._document.createElement('div');

          this._backdropElement.classList.add('cdk-overlay-backdrop');

          if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
          } // Insert the backdrop before the pane in the DOM order,
          // in order to handle stacked overlays properly.


          /** @type {?} */
          this._host.parentElement.insertBefore(this._backdropElement, this._host); // Forward backdrop clicks such that the consumer of the overlay can perform whatever
          // action desired when such a click occurs (usually closing the overlay).


          this._backdropElement.addEventListener('click', this._backdropClickHandler); // Add class to fade-in the backdrop after one frame.


          if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                if (_this35._backdropElement) {
                  _this35._backdropElement.classList.add(showingClass);
                }
              });
            });
          } else {
            this._backdropElement.classList.add(showingClass);
          }
        }
        /**
         * Updates the stacking order of the element, moving it to the top if necessary.
         * This is required in cases where one overlay was detached, while another one,
         * that should be behind it, was destroyed. The next time both of them are opened,
         * the stacking will be wrong, because the detached element's pane will still be
         * in its original DOM position.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateStackingOrder",
        value: function _updateStackingOrder() {
          if (this._host.nextSibling) {
            /** @type {?} */
            this._host.parentNode.appendChild(this._host);
          }
        }
        /**
         * Detaches the backdrop (if any) associated with the overlay.
         * @return {?}
         */

      }, {
        key: "detachBackdrop",
        value: function detachBackdrop() {
          var _this36 = this;

          /** @type {?} */
          var backdropToDetach = this._backdropElement;

          if (!backdropToDetach) {
            return;
          }
          /** @type {?} */


          var timeoutId;
          /** @type {?} */

          var finishDetach =
          /**
          * @return {?}
          */
          function finishDetach() {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach) {
              backdropToDetach.removeEventListener('click', _this36._backdropClickHandler);
              backdropToDetach.removeEventListener('transitionend', finishDetach);

              if (backdropToDetach.parentNode) {
                backdropToDetach.parentNode.removeChild(backdropToDetach);
              }
            } // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.


            if (_this36._backdropElement == backdropToDetach) {
              _this36._backdropElement = null;
            }

            if (_this36._config.backdropClass) {
              _this36._toggleClasses(
              /** @type {?} */
              backdropToDetach, _this36._config.backdropClass, false);
            }

            clearTimeout(timeoutId);
          };

          backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            backdropToDetach.addEventListener('transitionend', finishDetach);
          }); // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
          // In this case we make it unclickable and we try to remove it after a delay.


          backdropToDetach.style.pointerEvents = 'none'; // Run this outside the Angular zone because there's nothing that Angular cares about.
          // If it were to run inside the Angular zone, every test that used Overlay would have to be
          // either async or fakeAsync.

          timeoutId = this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return setTimeout(finishDetach, 500);
          });
        }
        /**
         * Toggles a single CSS class or an array of classes on an element.
         * @private
         * @param {?} element
         * @param {?} cssClasses
         * @param {?} isAdd
         * @return {?}
         */

      }, {
        key: "_toggleClasses",
        value: function _toggleClasses(element, cssClasses, isAdd) {
          /** @type {?} */
          var classList = element.classList;
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach(
          /**
          * @param {?} cssClass
          * @return {?}
          */
          function (cssClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            // Also trying to add an empty string to a DOMTokenList will throw.
            if (cssClass) {
              isAdd ? classList.add(cssClass) : classList.remove(cssClass);
            }
          });
        }
        /**
         * Detaches the overlay content next time the zone stabilizes.
         * @private
         * @return {?}
         */

      }, {
        key: "_detachContentWhenStable",
        value: function _detachContentWhenStable() {
          var _this37 = this;

          // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
          // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
          // be patched to run inside the zone, which will throw us into an infinite loop.
          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            // We can't remove the host here immediately, because the overlay pane's content
            // might still be animating. This stream helps us avoid interrupting the animation
            // by waiting for the pane to become empty.

            /** @type {?} */
            var subscription = _this37._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_this37._attachments, _this37._detachments))).subscribe(
            /**
            * @return {?}
            */
            function () {
              // Needs a couple of checks for the pane and host, because
              // they may have been removed by the time the zone stabilizes.
              if (!_this37._pane || !_this37._host || _this37._pane.children.length === 0) {
                if (_this37._pane && _this37._config.panelClass) {
                  _this37._toggleClasses(_this37._pane, _this37._config.panelClass, false);
                }

                if (_this37._host && _this37._host.parentElement) {
                  _this37._previousHostParent = _this37._host.parentElement;

                  _this37._previousHostParent.removeChild(_this37._host);
                }

                subscription.unsubscribe();
              }
            });
          });
        }
        /**
         * Disposes of a scroll strategy.
         * @private
         * @return {?}
         */

      }, {
        key: "_disposeScrollStrategy",
        value: function _disposeScrollStrategy() {
          /** @type {?} */
          var scrollStrategy = this._scrollStrategy;

          if (scrollStrategy) {
            scrollStrategy.disable();

            if (scrollStrategy.detach) {
              scrollStrategy.detach();
            }
          }
        }
      }, {
        key: "overlayElement",
        get: function get() {
          return this._pane;
        }
        /**
         * The overlay's backdrop HTML element.
         * @return {?}
         */

      }, {
        key: "backdropElement",
        get: function get() {
          return this._backdropElement;
        }
        /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         * @return {?}
         */

      }, {
        key: "hostElement",
        get: function get() {
          return this._host;
        }
      }]);

      return OverlayRef;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO: refactor clipping detection into a separate thing (part of scrolling module)
    // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.

    /**
     * Class to be added to the overlay bounding box.
     * @type {?}
     */


    var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     */

    var FlexibleConnectedPositionStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} connectedTo
       * @param {?} _viewportRuler
       * @param {?} _document
       * @param {?} _platform
       * @param {?} _overlayContainer
       */
      function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        _classCallCheck(this, FlexibleConnectedPositionStrategy);

        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /**
         * Last size used for the bounding box. Used to avoid resizing the overlay after open.
         */

        this._lastBoundingBoxSize = {
          width: 0,
          height: 0
        };
        /**
         * Whether the overlay was pushed in a previous positioning.
         */

        this._isPushed = false;
        /**
         * Whether the overlay can be pushed on-screen on the initial open.
         */

        this._canPush = true;
        /**
         * Whether the overlay can grow via flexible width/height after the initial open.
         */

        this._growAfterOpen = false;
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         */

        this._hasFlexibleDimensions = true;
        /**
         * Whether the overlay position is locked.
         */

        this._positionLocked = false;
        /**
         * Amount of space that must be maintained between the overlay and the edge of the viewport.
         */

        this._viewportMargin = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */

        this._scrollables = [];
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */

        this._preferredPositions = [];
        /**
         * Subject that emits whenever the position changes.
         */

        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Subscription to viewport size changes.
         */

        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Default offset for the overlay along the x axis.
         */

        this._offsetX = 0;
        /**
         * Default offset for the overlay along the y axis.
         */

        this._offsetY = 0;
        /**
         * Keeps track of the CSS classes that the position strategy has applied on the overlay panel.
         */

        this._appliedPanelClasses = [];
        /**
         * Observable sequence of position changes.
         */

        this.positionChanges = this._positionChanges.asObservable();
        this.setOrigin(connectedTo);
      }
      /**
       * Ordered list of preferred positions, from most to least desirable.
       * @return {?}
       */


      _createClass(FlexibleConnectedPositionStrategy, [{
        key: "attach",

        /**
         * Attaches this position strategy to an overlay.
         * @param {?} overlayRef
         * @return {?}
         */
        value: function attach(overlayRef) {
          var _this38 = this;

          if (this._overlayRef && overlayRef !== this._overlayRef) {
            throw Error('This position strategy is already attached to an overlay');
          }

          this._validatePositions();

          overlayRef.hostElement.classList.add(boundingBoxClass);
          this._overlayRef = overlayRef;
          this._boundingBox = overlayRef.hostElement;
          this._pane = overlayRef.overlayElement;
          this._isDisposed = false;
          this._isInitialRender = true;
          this._lastPosition = null;

          this._resizeSubscription.unsubscribe();

          this._resizeSubscription = this._viewportRuler.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            // When the window is resized, we want to trigger the next reposition as if it
            // was an initial render, in order for the strategy to pick a new optimal position,
            // otherwise position locking will cause it to stay at the old one.
            _this38._isInitialRender = true;

            _this38.apply();
          });
        }
        /**
         * Updates the position of the overlay element, using whichever preferred position relative
         * to the origin best fits on-screen.
         *
         * The selection of a position goes as follows:
         *  - If any positions fit completely within the viewport as-is,
         *      choose the first position that does so.
         *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
         *      choose the position with the greatest available size modified by the positions' weight.
         *  - If pushing is enabled, take the position that went off-screen the least and push it
         *      on-screen.
         *  - If none of the previous criteria were met, use the position that goes off-screen the least.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "apply",
        value: function apply() {
          // We shouldn't do anything if the strategy was disposed or we're on the server.
          if (this._isDisposed || !this._platform.isBrowser) {
            return;
          } // If the position has been applied already (e.g. when the overlay was opened) and the
          // consumer opted into locking in the position, re-use the old position, in order to
          // prevent the overlay from jumping around.


          if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
          }

          this._clearPanelClasses();

          this._resetOverlayElementStyles();

          this._resetBoundingBoxStyles(); // We need the bounding rects for the origin and the overlay to determine how to position
          // the overlay relative to the origin.
          // We use the viewport rect to determine whether a position would go off-screen.


          this._viewportRect = this._getNarrowedViewportRect();
          this._originRect = this._getOriginRect();
          this._overlayRect = this._pane.getBoundingClientRect();
          /** @type {?} */

          var originRect = this._originRect;
          /** @type {?} */

          var overlayRect = this._overlayRect;
          /** @type {?} */

          var viewportRect = this._viewportRect; // Positions where the overlay will fit with flexible dimensions.

          /** @type {?} */

          var flexibleFits = []; // Fallback if none of the preferred positions fit within the viewport.

          /** @type {?} */

          var fallback; // Go through each of the preferred positions looking for a good fit.
          // If a good fit is found, it will be applied immediately.

          var _iterator2 = _createForOfIteratorHelper(this._preferredPositions),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var pos = _step2.value;

              // Get the exact (x, y) coordinate for the point-of-origin on the origin element.

              /** @type {?} */
              var originPoint = this._getOriginPoint(originRect, pos); // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
              // overlay in this position. We use the top-left corner for calculations and later translate
              // this into an appropriate (top, left, bottom, right) style.

              /** @type {?} */


              var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos); // Calculate how well the overlay would fit into the viewport with this point.

              /** @type {?} */


              var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos); // If the overlay, without any further work, fits into the viewport, use this position.


              if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;

                this._applyPosition(pos, originPoint);

                return;
              } // If the overlay has flexible dimensions, we can use this position
              // so long as there's enough space for the minimum dimensions.


              if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                  position: pos,
                  origin: originPoint,
                  overlayRect: overlayRect,
                  boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
              } // If the current preferred position does not fit on the screen, remember the position
              // if it has more visible area on-screen than we've seen and move onto the next preferred
              // position.


              if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = {
                  overlayFit: overlayFit,
                  overlayPoint: overlayPoint,
                  originPoint: originPoint,
                  position: pos,
                  overlayRect: overlayRect
                };
              }
            } // If there are any positions where the overlay would fit with flexible dimensions, choose the
            // one that has the greatest area available modified by the position's weight

          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (flexibleFits.length) {
            /** @type {?} */
            var bestFit = null;
            /** @type {?} */

            var bestScore = -1;

            var _iterator3 = _createForOfIteratorHelper(flexibleFits),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var fit = _step3.value;

                /** @type {?} */
                var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);

                if (score > bestScore) {
                  bestScore = score;
                  bestFit = fit;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this._isPushed = false;

            this._applyPosition(
            /** @type {?} */
            bestFit.position,
            /** @type {?} */
            bestFit.origin);

            return;
          } // When none of the preferred positions fit within the viewport, take the position
          // that went off-screen the least and attempt to push it on-screen.


          if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;

            this._applyPosition(
            /** @type {?} */
            fallback.position,
            /** @type {?} */
            fallback.originPoint);

            return;
          } // All options for getting the overlay within the viewport have been exhausted, so go with the
          // position that went off-screen the least.


          this._applyPosition(
          /** @type {?} */
          fallback.position,
          /** @type {?} */
          fallback.originPoint);
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._clearPanelClasses();

          this._lastPosition = null;
          this._previousPushAmount = null;

          this._resizeSubscription.unsubscribe();
        }
        /**
         * Cleanup after the element gets destroyed.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this._isDisposed) {
            return;
          } // We can't use `_resetBoundingBoxStyles` here, because it resets
          // some properties to zero, rather than removing them.


          if (this._boundingBox) {
            extendStyles(this._boundingBox.style,
            /** @type {?} */
            {
              top: '',
              left: '',
              right: '',
              bottom: '',
              height: '',
              width: '',
              alignItems: '',
              justifyContent: ''
            });
          }

          if (this._pane) {
            this._resetOverlayElementStyles();
          }

          if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
          }

          this.detach();

          this._positionChanges.complete();

          this._overlayRef = this._boundingBox =
          /** @type {?} */
          null;
          this._isDisposed = true;
        }
        /**
         * This re-aligns the overlay element with the trigger in its last calculated position,
         * even if a position higher in the "preferred positions" list would now fit. This
         * allows one to re-align the panel without changing the orientation of the panel.
         * @return {?}
         */

      }, {
        key: "reapplyLastPosition",
        value: function reapplyLastPosition() {
          if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            /** @type {?} */

            var lastPosition = this._lastPosition || this._preferredPositions[0];
            /** @type {?} */

            var originPoint = this._getOriginPoint(this._originRect, lastPosition);

            this._applyPosition(lastPosition, originPoint);
          }
        }
        /**
         * Sets the list of Scrollable containers that host the origin element so that
         * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
         * Scrollable must be an ancestor element of the strategy's origin element.
         * @template THIS
         * @this {THIS}
         * @param {?} scrollables
         * @return {THIS}
         */

      }, {
        key: "withScrollableContainers",
        value: function withScrollableContainers(scrollables) {
          /** @type {?} */
          this._scrollables = scrollables;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Adds new preferred positions.
         * @template THIS
         * @this {THIS}
         * @param {?} positions List of positions options for this overlay.
         * @return {THIS}
         */

      }, {
        key: "withPositions",
        value: function withPositions(positions) {
          /** @type {?} */
          this._preferredPositions = positions; // If the last calculated position object isn't part of the positions anymore, clear
          // it in order to avoid it being picked up if the consumer tries to re-apply.

          if (positions.indexOf(
          /** @type {?} */

          /** @type {?} */
          this._lastPosition) === -1) {
            /** @type {?} */
            this._lastPosition = null;
          }

          /** @type {?} */
          this._validatePositions();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
         * @template THIS
         * @this {THIS}
         * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
         * @return {THIS}
         */

      }, {
        key: "withViewportMargin",
        value: function withViewportMargin(margin) {
          /** @type {?} */
          this._viewportMargin = margin;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay's width and height can be constrained to fit within the viewport.
         * @template THIS
         * @this {THIS}
         * @param {?=} flexibleDimensions
         * @return {THIS}
         */

      }, {
        key: "withFlexibleDimensions",
        value: function withFlexibleDimensions() {
          var flexibleDimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._hasFlexibleDimensions = flexibleDimensions;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay can grow after the initial open via flexible width/height.
         * @template THIS
         * @this {THIS}
         * @param {?=} growAfterOpen
         * @return {THIS}
         */

      }, {
        key: "withGrowAfterOpen",
        value: function withGrowAfterOpen() {
          var growAfterOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._growAfterOpen = growAfterOpen;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
         * @template THIS
         * @this {THIS}
         * @param {?=} canPush
         * @return {THIS}
         */

      }, {
        key: "withPush",
        value: function withPush() {
          var canPush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._canPush = canPush;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay's position should be locked in after it is positioned
         * initially. When an overlay is locked in, it won't attempt to reposition itself
         * when the position is re-applied (e.g. when the user scrolls away).
         * @template THIS
         * @this {THIS}
         * @param {?=} isLocked Whether the overlay should locked in.
         * @return {THIS}
         */

      }, {
        key: "withLockedPosition",
        value: function withLockedPosition() {
          var isLocked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._positionLocked = isLocked;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the origin, relative to which to position the overlay.
         * Using an element origin is useful for building components that need to be positioned
         * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
         * used for cases like contextual menus which open relative to the user's pointer.
         * @template THIS
         * @this {THIS}
         * @param {?} origin Reference to the new origin.
         * @return {THIS}
         */

      }, {
        key: "setOrigin",
        value: function setOrigin(origin) {
          /** @type {?} */
          this._origin = origin;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the default offset for the overlay's connection point on the x-axis.
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the X axis.
         * @return {THIS}
         */

      }, {
        key: "withDefaultOffsetX",
        value: function withDefaultOffsetX(offset) {
          /** @type {?} */
          this._offsetX = offset;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the default offset for the overlay's connection point on the y-axis.
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the Y axis.
         * @return {THIS}
         */

      }, {
        key: "withDefaultOffsetY",
        value: function withDefaultOffsetY(offset) {
          /** @type {?} */
          this._offsetY = offset;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures that the position strategy should set a `transform-origin` on some elements
         * inside the overlay, depending on the current position that is being applied. This is
         * useful for the cases where the origin of an animation can change depending on the
         * alignment of the overlay.
         * @template THIS
         * @this {THIS}
         * @param {?} selector CSS selector that will be used to find the target
         *    elements onto which to set the transform origin.
         * @return {THIS}
         */

      }, {
        key: "withTransformOriginOn",
        value: function withTransformOriginOn(selector) {
          /** @type {?} */
          this._transformOriginSelector = selector;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
         * @private
         * @param {?} originRect
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_getOriginPoint",
        value: function _getOriginPoint(originRect, pos) {
          /** @type {?} */
          var x;

          if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + originRect.width / 2;
          } else {
            /** @type {?} */
            var startX = this._isRtl() ? originRect.right : originRect.left;
            /** @type {?} */

            var endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
          }
          /** @type {?} */


          var y;

          if (pos.originY == 'center') {
            y = originRect.top + originRect.height / 2;
          } else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
          }

          return {
            x: x,
            y: y
          };
        }
        /**
         * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
         * origin point to which the overlay should be connected.
         * @private
         * @param {?} originPoint
         * @param {?} overlayRect
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_getOverlayPoint",
        value: function _getOverlayPoint(originPoint, overlayRect, pos) {
          // Calculate the (overlayStartX, overlayStartY), the start of the
          // potential overlay position relative to the origin point.

          /** @type {?} */
          var overlayStartX;

          if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
          } else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
          } else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
          }
          /** @type {?} */


          var overlayStartY;

          if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
          } else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
          } // The (x, y) coordinates of the overlay.


          return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY
          };
        }
        /**
         * Gets how well an overlay at the given point will fit within the viewport.
         * @private
         * @param {?} point
         * @param {?} overlay
         * @param {?} viewport
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_getOverlayFit",
        value: function _getOverlayFit(point, overlay, viewport, position) {
          var x = point.x,
              y = point.y;
          /** @type {?} */

          var offsetX = this._getOffset(position, 'x');
          /** @type {?} */


          var offsetY = this._getOffset(position, 'y'); // Account for the offsets since they could push the overlay out of the viewport.


          if (offsetX) {
            x += offsetX;
          }

          if (offsetY) {
            y += offsetY;
          } // How much the overlay would overflow at this position, on each side.

          /** @type {?} */


          var leftOverflow = 0 - x;
          /** @type {?} */

          var rightOverflow = x + overlay.width - viewport.width;
          /** @type {?} */

          var topOverflow = 0 - y;
          /** @type {?} */

          var bottomOverflow = y + overlay.height - viewport.height; // Visible parts of the element on each axis.

          /** @type {?} */

          var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
          /** @type {?} */


          var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
          /** @type {?} */


          var visibleArea = visibleWidth * visibleHeight;
          return {
            visibleArea: visibleArea,
            isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width
          };
        }
        /**
         * Whether the overlay can fit within the viewport when it may resize either its width or height.
         * @private
         * @param {?} fit How well the overlay fits in the viewport at some position.
         * @param {?} point The (x, y) coordinates of the overlat at some position.
         * @param {?} viewport The geometry of the viewport.
         * @return {?}
         */

      }, {
        key: "_canFitWithFlexibleDimensions",
        value: function _canFitWithFlexibleDimensions(fit, point, viewport) {
          if (this._hasFlexibleDimensions) {
            /** @type {?} */
            var availableHeight = viewport.bottom - point.y;
            /** @type {?} */

            var availableWidth = viewport.right - point.x;
            /** @type {?} */

            var minHeight = this._overlayRef.getConfig().minHeight;
            /** @type {?} */


            var minWidth = this._overlayRef.getConfig().minWidth;
            /** @type {?} */


            var verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
            /** @type {?} */

            var horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
            return verticalFit && horizontalFit;
          }

          return false;
        }
        /**
         * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
         * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
         * right and bottom).
         *
         * @private
         * @param {?} start Starting point from which the overlay is pushed.
         * @param {?} overlay Dimensions of the overlay.
         * @param {?} scrollPosition Current viewport scroll position.
         * @return {?} The point at which to position the overlay after pushing. This is effectively a new
         *     originPoint.
         */

      }, {
        key: "_pushOverlayOnScreen",
        value: function _pushOverlayOnScreen(start, overlay, scrollPosition) {
          // If the position is locked and we've pushed the overlay already, reuse the previous push
          // amount, rather than pushing it again. If we were to continue pushing, the element would
          // remain in the viewport, which goes against the expectations when position locking is enabled.
          if (this._previousPushAmount && this._positionLocked) {
            return {
              x: start.x + this._previousPushAmount.x,
              y: start.y + this._previousPushAmount.y
            };
          }
          /** @type {?} */


          var viewport = this._viewportRect; // Determine how much the overlay goes outside the viewport on each
          // side, which we'll use to decide which direction to push it.

          /** @type {?} */

          var overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
          /** @type {?} */

          var overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
          /** @type {?} */

          var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
          /** @type {?} */

          var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0); // Amount by which to push the overlay in each axis such that it remains on-screen.

          /** @type {?} */

          var pushX = 0;
          /** @type {?} */

          var pushY = 0; // If the overlay fits completely within the bounds of the viewport, push it from whichever
          // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
          // viewport and allow for the trailing end of the overlay to go out of bounds.

          if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
          } else {
            pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
          }

          if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
          } else {
            pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
          }

          this._previousPushAmount = {
            x: pushX,
            y: pushY
          };
          return {
            x: start.x + pushX,
            y: start.y + pushY
          };
        }
        /**
         * Applies a computed position to the overlay and emits a position change.
         * @private
         * @param {?} position The position preference
         * @param {?} originPoint The point on the origin element where the overlay is connected.
         * @return {?}
         */

      }, {
        key: "_applyPosition",
        value: function _applyPosition(position, originPoint) {
          this._setTransformOrigin(position);

          this._setOverlayElementStyles(originPoint, position);

          this._setBoundingBoxStyles(originPoint, position);

          if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
          } // Save the last connected position in case the position needs to be re-calculated.


          this._lastPosition = position; // Notify that the position has been changed along with its change properties.
          // We only emit if we've got any subscriptions, because the scroll visibility
          // calculcations can be somewhat expensive.

          if (this._positionChanges.observers.length) {
            /** @type {?} */
            var scrollableViewProperties = this._getScrollVisibility();
            /** @type {?} */


            var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);

            this._positionChanges.next(changeEvent);
          }

          this._isInitialRender = false;
        }
        /**
         * Sets the transform origin based on the configured selector and the passed-in position.
         * @private
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_setTransformOrigin",
        value: function _setTransformOrigin(position) {
          if (!this._transformOriginSelector) {
            return;
          }
          /** @type {?} */


          var elements =
          /** @type {?} */
          this._boundingBox.querySelectorAll(this._transformOriginSelector);
          /** @type {?} */


          var xOrigin;
          /** @type {?} */

          var yOrigin = position.overlayY;

          if (position.overlayX === 'center') {
            xOrigin = 'center';
          } else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
          } else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
          }

          for (var i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = "".concat(xOrigin, " ").concat(yOrigin);
          }
        }
        /**
         * Gets the position and size of the overlay's sizing container.
         *
         * This method does no measuring and applies no styles so that we can cheaply compute the
         * bounds for all positions and choose the best fit based on these results.
         * @private
         * @param {?} origin
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_calculateBoundingBoxRect",
        value: function _calculateBoundingBoxRect(origin, position) {
          /** @type {?} */
          var viewport = this._viewportRect;
          /** @type {?} */

          var isRtl = this._isRtl();
          /** @type {?} */


          var height;
          /** @type {?} */

          var top;
          /** @type {?} */

          var bottom;

          if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.height - top + this._viewportMargin;
          } else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
          } else {
            // If neither top nor bottom, it means that the overlay is vertically centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.bottom - origin.y` and
            // `origin.y - viewport.top`.

            /** @type {?} */
            var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            /** @type {?} */

            var previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;

            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
              top = origin.y - previousHeight / 2;
            }
          } // The overlay is opening 'right-ward' (the content flows to the right).

          /** @type {?} */


          var isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl; // The overlay is opening 'left-ward' (the content flows to the left).

          /** @type {?} */

          var isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
          /** @type {?} */

          var width;
          /** @type {?} */

          var left;
          /** @type {?} */

          var right;

          if (isBoundedByLeftViewportEdge) {
            right = viewport.width - origin.x + this._viewportMargin;
            width = origin.x - this._viewportMargin;
          } else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
          } else {
            // If neither start nor end, it means that the overlay is horizontally centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.right - origin.x` and
            // `origin.x - viewport.left`.

            /** @type {?} */
            var _smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
            /** @type {?} */


            var previousWidth = this._lastBoundingBoxSize.width;
            width = _smallestDistanceToViewportEdge * 2;
            left = origin.x - _smallestDistanceToViewportEdge;

            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
              left = origin.x - previousWidth / 2;
            }
          }

          return {
            top:
            /** @type {?} */
            top,
            left:
            /** @type {?} */
            left,
            bottom:
            /** @type {?} */
            bottom,
            right:
            /** @type {?} */
            right,
            width: width,
            height: height
          };
        }
        /**
         * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
         * origin's connection point and stetches to the bounds of the viewport.
         *
         * @private
         * @param {?} origin The point on the origin element where the overlay is connected.
         * @param {?} position The position preference
         * @return {?}
         */

      }, {
        key: "_setBoundingBoxStyles",
        value: function _setBoundingBoxStyles(origin, position) {
          /** @type {?} */
          var boundingBoxRect = this._calculateBoundingBoxRect(origin, position); // It's weird if the overlay *grows* while scrolling, so we take the last size into account
          // when applying a new size.


          if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
          }
          /** @type {?} */


          var styles =
          /** @type {?} */
          {};

          if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = '';
            styles.width = styles.height = '100%';
          } else {
            /** @type {?} */
            var maxHeight = this._overlayRef.getConfig().maxHeight;
            /** @type {?} */


            var maxWidth = this._overlayRef.getConfig().maxWidth;

            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.right); // Push the pane content towards the proper direction.

            if (position.overlayX === 'center') {
              styles.alignItems = 'center';
            } else {
              styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }

            if (position.overlayY === 'center') {
              styles.justifyContent = 'center';
            } else {
              styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }

            if (maxHeight) {
              styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxHeight);
            }

            if (maxWidth) {
              styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxWidth);
            }
          }

          this._lastBoundingBoxSize = boundingBoxRect;
          extendStyles(
          /** @type {?} */
          this._boundingBox.style, styles);
        }
        /**
         * Resets the styles for the bounding box so that a new positioning can be computed.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetBoundingBoxStyles",
        value: function _resetBoundingBoxStyles() {
          extendStyles(
          /** @type {?} */
          this._boundingBox.style,
          /** @type {?} */
          {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: ''
          });
        }
        /**
         * Resets the styles for the overlay pane so that a new positioning can be computed.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetOverlayElementStyles",
        value: function _resetOverlayElementStyles() {
          extendStyles(this._pane.style,
          /** @type {?} */
          {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: ''
          });
        }
        /**
         * Sets positioning styles to the overlay element.
         * @private
         * @param {?} originPoint
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_setOverlayElementStyles",
        value: function _setOverlayElementStyles(originPoint, position) {
          /** @type {?} */
          var styles =
          /** @type {?} */
          {};

          if (this._hasExactPosition()) {
            /** @type {?} */
            var scrollPosition = this._viewportRuler.getViewportScrollPosition();

            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
          } else {
            styles.position = 'static';
          } // Use a transform to apply the offsets. We do this because the `center` positions rely on
          // being in the normal flex flow and setting a `top` / `left` at all will completely throw
          // off the position. We also can't use margins, because they won't have an effect in some
          // cases where the element doesn't have anything to "push off of". Finally, this works
          // better both with flexible and non-flexible positioning.

          /** @type {?} */


          var transformString = '';
          /** @type {?} */

          var offsetX = this._getOffset(position, 'x');
          /** @type {?} */


          var offsetY = this._getOffset(position, 'y');

          if (offsetX) {
            transformString += "translateX(".concat(offsetX, "px) ");
          }

          if (offsetY) {
            transformString += "translateY(".concat(offsetY, "px)");
          }

          styles.transform = transformString.trim(); // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
          // we need these values to both be set to "100%" for the automatic flexible sizing to work.
          // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.

          if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxHeight) {
            styles.maxHeight = '';
          }

          if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxWidth) {
            styles.maxWidth = '';
          }

          extendStyles(this._pane.style, styles);
        }
        /**
         * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
         * @private
         * @param {?} position
         * @param {?} originPoint
         * @param {?} scrollPosition
         * @return {?}
         */

      }, {
        key: "_getExactOverlayY",
        value: function _getExactOverlayY(position, originPoint, scrollPosition) {
          // Reset any existing styles. This is necessary in case the
          // preferred position has changed since the last `apply`.

          /** @type {?} */
          var styles =
          /** @type {?} */
          {
            top: null,
            bottom: null
          };
          /** @type {?} */

          var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

          if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
          }
          /** @type {?} */


          var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top; // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
          // autocomplete), mobile browsers will shift everything in order to put the input in the middle
          // of the screen and to make space for the virtual keyboard. We need to account for this offset,
          // otherwise our positioning will be thrown off.


          overlayPoint.y -= virtualKeyboardOffset; // We want to set either `top` or `bottom` based on whether the overlay wants to appear
          // above or below the origin and the direction in which the element will expand.

          if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.

            /** @type {?} */
            var documentHeight =
            /** @type {?} */
            this._document.documentElement.clientHeight;
            styles.bottom = "".concat(documentHeight - (overlayPoint.y + this._overlayRect.height), "px");
          } else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.y);
          }

          return styles;
        }
        /**
         * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
         * @private
         * @param {?} position
         * @param {?} originPoint
         * @param {?} scrollPosition
         * @return {?}
         */

      }, {
        key: "_getExactOverlayX",
        value: function _getExactOverlayX(position, originPoint, scrollPosition) {
          // Reset any existing styles. This is necessary in case the preferred position has
          // changed since the last `apply`.

          /** @type {?} */
          var styles =
          /** @type {?} */
          {
            left: null,
            right: null
          };
          /** @type {?} */

          var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

          if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
          } // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
          // or "after" the origin, which determines the direction in which the element will expand.
          // For the horizontal axis, the meaning of "before" and "after" change based on whether the
          // page is in RTL or LTR.

          /** @type {?} */


          var horizontalStyleProperty;

          if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
          } else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
          } // When we're setting `right`, we adjust the x position such that it is the distance
          // from the right edge of the viewport rather than the left edge.


          if (horizontalStyleProperty === 'right') {
            /** @type {?} */
            var documentWidth =
            /** @type {?} */
            this._document.documentElement.clientWidth;
            styles.right = "".concat(documentWidth - (overlayPoint.x + this._overlayRect.width), "px");
          } else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.x);
          }

          return styles;
        }
        /**
         * Gets the view properties of the trigger and overlay, including whether they are clipped
         * or completely outside the view of any of the strategy's scrollables.
         * @private
         * @return {?}
         */

      }, {
        key: "_getScrollVisibility",
        value: function _getScrollVisibility() {
          // Note: needs fresh rects since the position could've changed.

          /** @type {?} */
          var originBounds = this._getOriginRect();
          /** @type {?} */


          var overlayBounds = this._pane.getBoundingClientRect(); // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
          // every time, we should be able to use the scrollTop of the containers if the size of those
          // containers hasn't changed.

          /** @type {?} */


          var scrollContainerBounds = this._scrollables.map(
          /**
          * @param {?} scrollable
          * @return {?}
          */
          function (scrollable) {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
          });

          return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
          };
        }
        /**
         * Subtracts the amount that an element is overflowing on an axis from its length.
         * @private
         * @param {?} length
         * @param {...?} overflows
         * @return {?}
         */

      }, {
        key: "_subtractOverflows",
        value: function _subtractOverflows(length) {
          for (var _len5 = arguments.length, overflows = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            overflows[_key5 - 1] = arguments[_key5];
          }

          return overflows.reduce(
          /**
          * @param {?} currentValue
          * @param {?} currentOverflow
          * @return {?}
          */
          function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
          }, length);
        }
        /**
         * Narrows the given viewport rect by the current _viewportMargin.
         * @private
         * @return {?}
         */

      }, {
        key: "_getNarrowedViewportRect",
        value: function _getNarrowedViewportRect() {
          // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
          // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
          // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
          // and `innerHeight` that do. This is necessary, because the overlay container uses
          // 100% `width` and `height` which don't include the scrollbar either.

          /** @type {?} */
          var width =
          /** @type {?} */
          this._document.documentElement.clientWidth;
          /** @type {?} */

          var height =
          /** @type {?} */
          this._document.documentElement.clientHeight;
          /** @type {?} */

          var scrollPosition = this._viewportRuler.getViewportScrollPosition();

          return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - 2 * this._viewportMargin,
            height: height - 2 * this._viewportMargin
          };
        }
        /**
         * Whether the we're dealing with an RTL context
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._overlayRef.getDirection() === 'rtl';
        }
        /**
         * Determines whether the overlay uses exact or flexible positioning.
         * @private
         * @return {?}
         */

      }, {
        key: "_hasExactPosition",
        value: function _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        /**
         * Retrieves the offset of a position along the x or y axis.
         * @private
         * @param {?} position
         * @param {?} axis
         * @return {?}
         */

      }, {
        key: "_getOffset",
        value: function _getOffset(position, axis) {
          if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
          }

          return position.offsetY == null ? this._offsetY : position.offsetY;
        }
        /**
         * Validates that the current position match the expected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_validatePositions",
        value: function _validatePositions() {
          if (!this._preferredPositions.length) {
            throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
          } // TODO(crisbeto): remove these once Angular's template type
          // checking is advanced enough to catch these cases.


          this._preferredPositions.forEach(
          /**
          * @param {?} pair
          * @return {?}
          */
          function (pair) {
            validateHorizontalPosition('originX', pair.originX);
            validateVerticalPosition('originY', pair.originY);
            validateHorizontalPosition('overlayX', pair.overlayX);
            validateVerticalPosition('overlayY', pair.overlayY);
          });
        }
        /**
         * Adds a single CSS class or an array of classes on the overlay panel.
         * @private
         * @param {?} cssClasses
         * @return {?}
         */

      }, {
        key: "_addPanelClasses",
        value: function _addPanelClasses(cssClasses) {
          var _this39 = this;

          if (this._pane) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              if (cssClass !== '' && _this39._appliedPanelClasses.indexOf(cssClass) === -1) {
                _this39._appliedPanelClasses.push(cssClass);

                _this39._pane.classList.add(cssClass);
              }
            });
          }
        }
        /**
         * Clears the classes that the position strategy has applied from the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_clearPanelClasses",
        value: function _clearPanelClasses() {
          var _this40 = this;

          if (this._pane) {
            this._appliedPanelClasses.forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              _this40._pane.classList.remove(cssClass);
            });

            this._appliedPanelClasses = [];
          }
        }
        /**
         * Returns the ClientRect of the current origin.
         * @private
         * @return {?}
         */

      }, {
        key: "_getOriginRect",
        value: function _getOriginRect() {
          /** @type {?} */
          var origin = this._origin;

          if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]) {
            return origin.nativeElement.getBoundingClientRect();
          }

          if (origin instanceof HTMLElement) {
            return origin.getBoundingClientRect();
          }
          /** @type {?} */


          var width = origin.width || 0;
          /** @type {?} */

          var height = origin.height || 0; // If the origin is a point, return a client rect as if it was a 0x0 element at the point.

          return {
            top: origin.y,
            bottom: origin.y + height,
            left: origin.x,
            right: origin.x + width,
            height: height,
            width: width
          };
        }
      }, {
        key: "positions",
        get: function get() {
          return this._preferredPositions;
        }
      }]);

      return FlexibleConnectedPositionStrategy;
    }();
    /**
     * Shallow-extends a stylesheet object with another stylesheet object.
     * @param {?} dest
     * @param {?} source
     * @return {?}
     */


    function extendStyles(dest, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] = source[key];
        }
      }

      return dest;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative to some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
     * \@breaking-change 8.0.0
     */


    var ConnectedPositionStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} originPos
       * @param {?} overlayPos
       * @param {?} connectedTo
       * @param {?} viewportRuler
       * @param {?} document
       * @param {?} platform
       * @param {?} overlayContainer
       */
      function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        _classCallCheck(this, ConnectedPositionStrategy);

        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = []; // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.

        this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(false).withPush(false).withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
      }
      /**
       * Whether the we're dealing with an RTL context
       * @return {?}
       */


      _createClass(ConnectedPositionStrategy, [{
        key: "attach",

        /**
         * Attach this position strategy to an overlay.
         * @param {?} overlayRef
         * @return {?}
         */
        value: function attach(overlayRef) {
          this._overlayRef = overlayRef;

          this._positionStrategy.attach(overlayRef);

          if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
          }
        }
        /**
         * Disposes all resources used by the position strategy.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          this._positionStrategy.dispose();
        }
        /**
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._positionStrategy.detach();
        }
        /**
         * Updates the position of the overlay element, using whichever preferred position relative
         * to the origin fits on-screen.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "apply",
        value: function apply() {
          this._positionStrategy.apply();
        }
        /**
         * Re-positions the overlay element with the trigger in its last calculated position,
         * even if a position higher in the "preferred positions" list would now fit. This
         * allows one to re-align the panel without changing the orientation of the panel.
         * @return {?}
         */

      }, {
        key: "recalculateLastPosition",
        value: function recalculateLastPosition() {
          this._positionStrategy.reapplyLastPosition();
        }
        /**
         * Sets the list of Scrollable containers that host the origin element so that
         * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
         * Scrollable must be an ancestor element of the strategy's origin element.
         * @param {?} scrollables
         * @return {?}
         */

      }, {
        key: "withScrollableContainers",
        value: function withScrollableContainers(scrollables) {
          this._positionStrategy.withScrollableContainers(scrollables);
        }
        /**
         * Adds a new preferred fallback position.
         * @template THIS
         * @this {THIS}
         * @param {?} originPos
         * @param {?} overlayPos
         * @param {?=} offsetX
         * @param {?=} offsetY
         * @return {THIS}
         */

      }, {
        key: "withFallbackPosition",
        value: function withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
          /** @type {?} */
          var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);

          /** @type {?} */
          this._preferredPositions.push(position);

          /** @type {?} */
          this._positionStrategy.withPositions(
          /** @type {?} */
          this._preferredPositions);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the layout direction so the overlay's position can be adjusted to match.
         * @template THIS
         * @this {THIS}
         * @param {?} dir New layout direction.
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(dir) {
          // Since the direction might be declared before the strategy is attached,
          // we save the value in a temporary property and we'll transfer it to the
          // overlay ref on attachment.
          if (
          /** @type {?} */
          this._overlayRef) {
            /** @type {?} */
            this._overlayRef.setDirection(dir);
          } else {
            /** @type {?} */
            this._direction = dir;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets an offset for the overlay's connection point on the x-axis
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the X axis.
         * @return {THIS}
         */

      }, {
        key: "withOffsetX",
        value: function withOffsetX(offset) {
          /** @type {?} */
          this._positionStrategy.withDefaultOffsetX(offset);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets an offset for the overlay's connection point on the y-axis
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the Y axis.
         * @return {THIS}
         */

      }, {
        key: "withOffsetY",
        value: function withOffsetY(offset) {
          /** @type {?} */
          this._positionStrategy.withDefaultOffsetY(offset);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay's position should be locked in after it is positioned
         * initially. When an overlay is locked in, it won't attempt to reposition itself
         * when the position is re-applied (e.g. when the user scrolls away).
         * @template THIS
         * @this {THIS}
         * @param {?} isLocked Whether the overlay should locked in.
         * @return {THIS}
         */

      }, {
        key: "withLockedPosition",
        value: function withLockedPosition(isLocked) {
          /** @type {?} */
          this._positionStrategy.withLockedPosition(isLocked);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Overwrites the current set of positions with an array of new ones.
         * @template THIS
         * @this {THIS}
         * @param {?} positions Position pairs to be set on the strategy.
         * @return {THIS}
         */

      }, {
        key: "withPositions",
        value: function withPositions(positions) {
          /** @type {?} */
          this._preferredPositions = positions.slice();

          /** @type {?} */
          this._positionStrategy.withPositions(
          /** @type {?} */
          this._preferredPositions);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the origin element, relative to which to position the overlay.
         * @template THIS
         * @this {THIS}
         * @param {?} origin Reference to the new origin element.
         * @return {THIS}
         */

      }, {
        key: "setOrigin",
        value: function setOrigin(origin) {
          /** @type {?} */
          this._positionStrategy.setOrigin(origin);

          return (
            /** @type {?} */
            this
          );
        }
      }, {
        key: "_isRtl",
        get: function get() {
          return this._overlayRef.getDirection() === 'rtl';
        }
        /**
         * Emits an event when the connection point changes.
         * @return {?}
         */

      }, {
        key: "onPositionChange",
        get: function get() {
          return this._positionStrategy.positionChanges;
        }
        /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */

      }, {
        key: "positions",
        get: function get() {
          return this._preferredPositions;
        }
      }]);

      return ConnectedPositionStrategy;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to be added to the overlay pane wrapper.
     * @type {?}
     */


    var wrapperClass = 'cdk-global-overlay-wrapper';
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * explicit position relative to the browser's viewport. We use flexbox, instead of
     * transforms, in order to avoid issues with subpixel rendering which can cause the
     * element to become blurry.
     */

    var GlobalPositionStrategy = /*#__PURE__*/function () {
      function GlobalPositionStrategy() {
        _classCallCheck(this, GlobalPositionStrategy);

        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
      }
      /**
       * @param {?} overlayRef
       * @return {?}
       */


      _createClass(GlobalPositionStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          /** @type {?} */
          var config = overlayRef.getConfig();
          this._overlayRef = overlayRef;

          if (this._width && !config.width) {
            overlayRef.updateSize({
              width: this._width
            });
          }

          if (this._height && !config.height) {
            overlayRef.updateSize({
              height: this._height
            });
          }

          overlayRef.hostElement.classList.add(wrapperClass);
          this._isDisposed = false;
        }
        /**
         * Sets the top position of the overlay. Clears any previously set vertical position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New top offset.
         * @return {THIS}
         */

      }, {
        key: "top",
        value: function top() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._bottomOffset = '';

          /** @type {?} */
          this._topOffset = value;

          /** @type {?} */
          this._alignItems = 'flex-start';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the left position of the overlay. Clears any previously set horizontal position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New left offset.
         * @return {THIS}
         */

      }, {
        key: "left",
        value: function left() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._rightOffset = '';

          /** @type {?} */
          this._leftOffset = value;

          /** @type {?} */
          this._justifyContent = 'flex-start';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the bottom position of the overlay. Clears any previously set vertical position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New bottom offset.
         * @return {THIS}
         */

      }, {
        key: "bottom",
        value: function bottom() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._topOffset = '';

          /** @type {?} */
          this._bottomOffset = value;

          /** @type {?} */
          this._alignItems = 'flex-end';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the right position of the overlay. Clears any previously set horizontal position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New right offset.
         * @return {THIS}
         */

      }, {
        key: "right",
        value: function right() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._leftOffset = '';

          /** @type {?} */
          this._rightOffset = value;

          /** @type {?} */
          this._justifyContent = 'flex-end';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the overlay width and clears any previously set width.
         * @deprecated Pass the `width` through the `OverlayConfig`.
         * \@breaking-change 8.0.0
         * @template THIS
         * @this {THIS}
         * @param {?=} value New width for the overlay
         * @return {THIS}
         */

      }, {
        key: "width",
        value: function width() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (
          /** @type {?} */
          this._overlayRef) {
            /** @type {?} */
            this._overlayRef.updateSize({
              width: value
            });
          } else {
            /** @type {?} */
            this._width = value;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the overlay height and clears any previously set height.
         * @deprecated Pass the `height` through the `OverlayConfig`.
         * \@breaking-change 8.0.0
         * @template THIS
         * @this {THIS}
         * @param {?=} value New height for the overlay
         * @return {THIS}
         */

      }, {
        key: "height",
        value: function height() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (
          /** @type {?} */
          this._overlayRef) {
            /** @type {?} */
            this._overlayRef.updateSize({
              height: value
            });
          } else {
            /** @type {?} */
            this._height = value;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Centers the overlay horizontally with an optional offset.
         * Clears any previously set horizontal position.
         *
         * @template THIS
         * @this {THIS}
         * @param {?=} offset Overlay offset from the horizontal center.
         * @return {THIS}
         */

      }, {
        key: "centerHorizontally",
        value: function centerHorizontally() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this.left(offset);

          /** @type {?} */
          this._justifyContent = 'center';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Centers the overlay vertically with an optional offset.
         * Clears any previously set vertical position.
         *
         * @template THIS
         * @this {THIS}
         * @param {?=} offset Overlay offset from the vertical center.
         * @return {THIS}
         */

      }, {
        key: "centerVertically",
        value: function centerVertically() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this.top(offset);

          /** @type {?} */
          this._alignItems = 'center';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Apply the position to the element.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "apply",
        value: function apply() {
          // Since the overlay ref applies the strategy asynchronously, it could
          // have been disposed before it ends up being applied. If that is the
          // case, we shouldn't do anything.
          if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
          }
          /** @type {?} */


          var styles = this._overlayRef.overlayElement.style;
          /** @type {?} */

          var parentStyles = this._overlayRef.hostElement.style;
          /** @type {?} */

          var config = this._overlayRef.getConfig();

          styles.position = this._cssPosition;
          styles.marginLeft = config.width === '100%' ? '0' : this._leftOffset;
          styles.marginTop = config.height === '100%' ? '0' : this._topOffset;
          styles.marginBottom = this._bottomOffset;
          styles.marginRight = this._rightOffset;

          if (config.width === '100%') {
            parentStyles.justifyContent = 'flex-start';
          } else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
          } else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
              parentStyles.justifyContent = 'flex-end';
            } else if (this._justifyContent === 'flex-end') {
              parentStyles.justifyContent = 'flex-start';
            }
          } else {
            parentStyles.justifyContent = this._justifyContent;
          }

          parentStyles.alignItems = config.height === '100%' ? 'flex-start' : this._alignItems;
        }
        /**
         * Cleans up the DOM changes from the position strategy.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this._isDisposed || !this._overlayRef) {
            return;
          }
          /** @type {?} */


          var styles = this._overlayRef.overlayElement.style;
          /** @type {?} */

          var parent = this._overlayRef.hostElement;
          /** @type {?} */

          var parentStyles = parent.style;
          parent.classList.remove(wrapperClass);
          parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
          this._overlayRef =
          /** @type {?} */
          null;
          this._isDisposed = true;
        }
      }]);

      return GlobalPositionStrategy;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Builder for overlay position strategy.
     */


    var OverlayPositionBuilder = /*#__PURE__*/function () {
      /**
       * @param {?} _viewportRuler
       * @param {?} _document
       * @param {?} _platform
       * @param {?} _overlayContainer
       */
      function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
        _classCallCheck(this, OverlayPositionBuilder);

        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
      }
      /**
       * Creates a global position strategy.
       * @return {?}
       */


      _createClass(OverlayPositionBuilder, [{
        key: "global",
        value: function global() {
          return new GlobalPositionStrategy();
        }
        /**
         * Creates a relative position strategy.
         * @deprecated Use `flexibleConnectedTo` instead.
         * \@breaking-change 8.0.0
         * @param {?} elementRef
         * @param {?} originPos
         * @param {?} overlayPos
         * @return {?}
         */

      }, {
        key: "connectedTo",
        value: function connectedTo(elementRef, originPos, overlayPos) {
          return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
        /**
         * Creates a flexible position strategy.
         * @param {?} origin Origin relative to which to position the overlay.
         * @return {?}
         */

      }, {
        key: "flexibleConnectedTo",
        value: function flexibleConnectedTo(origin) {
          return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
      }]);

      return OverlayPositionBuilder;
    }();

    OverlayPositionBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    OverlayPositionBuilder.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: OverlayContainer
      }];
    };
    /** @nocollapse */


    OverlayPositionBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
      factory: function OverlayPositionBuilder_Factory() {
        return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(OverlayContainer));
      },
      token: OverlayPositionBuilder,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Next overlay unique ID.
     * @type {?}
     */

    var nextUniqueId = 0; // Note that Overlay is *not* scoped to the app root because the ComponentFactoryResolver
    // it needs is different based on where OverlayModule is imported.

    /**
     * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
     * used as a low-level building block for other components. Dialogs, tooltips, menus,
     * selects, etc. can all be built using overlays. The service should primarily be used by authors
     * of re-usable components rather than developers building end-user applications.
     *
     * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
     */

    var Overlay = /*#__PURE__*/function () {
      /**
       * @param {?} scrollStrategies
       * @param {?} _overlayContainer
       * @param {?} _componentFactoryResolver
       * @param {?} _positionBuilder
       * @param {?} _keyboardDispatcher
       * @param {?} _injector
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?} _directionality
       * @param {?=} _location
       */
      function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location) {
        _classCallCheck(this, Overlay);

        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
        this._location = _location;
      }
      /**
       * Creates an overlay.
       * @param {?=} config Configuration applied to the overlay.
       * @return {?} Reference to the created overlay.
       */


      _createClass(Overlay, [{
        key: "create",
        value: function create(config) {
          /** @type {?} */
          var host = this._createHostElement();
          /** @type {?} */


          var pane = this._createPaneElement(host);
          /** @type {?} */


          var portalOutlet = this._createPortalOutlet(pane);
          /** @type {?} */


          var overlayConfig = new OverlayConfig(config);
          overlayConfig.direction = overlayConfig.direction || this._directionality.value;
          return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
        }
        /**
         * Gets a position builder that can be used, via fluent API,
         * to construct and configure a position strategy.
         * @return {?} An overlay position builder.
         */

      }, {
        key: "position",
        value: function position() {
          return this._positionBuilder;
        }
        /**
         * Creates the DOM element for an overlay and appends it to the overlay container.
         * @private
         * @param {?} host
         * @return {?} Newly-created pane element
         */

      }, {
        key: "_createPaneElement",
        value: function _createPaneElement(host) {
          /** @type {?} */
          var pane = this._document.createElement('div');

          pane.id = "cdk-overlay-".concat(nextUniqueId++);
          pane.classList.add('cdk-overlay-pane');
          host.appendChild(pane);
          return pane;
        }
        /**
         * Creates the host element that wraps around an overlay
         * and can be used for advanced positioning.
         * @private
         * @return {?} Newly-create host element.
         */

      }, {
        key: "_createHostElement",
        value: function _createHostElement() {
          /** @type {?} */
          var host = this._document.createElement('div');

          this._overlayContainer.getContainerElement().appendChild(host);

          return host;
        }
        /**
         * Create a DomPortalOutlet into which the overlay content can be loaded.
         * @private
         * @param {?} pane The DOM element to turn into a portal outlet.
         * @return {?} A portal outlet for the given DOM element.
         */

      }, {
        key: "_createPortalOutlet",
        value: function _createPortalOutlet(pane) {
          // We have to resolve the ApplicationRef later in order to allow people
          // to use overlay-based providers during app initialization.
          if (!this._appRef) {
            this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]);
          }

          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector);
        }
      }]);

      return Overlay;
    }();

    Overlay.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }];
    /** @nocollapse */

    Overlay.ctorParameters = function () {
      return [{
        type: ScrollStrategyOptions
      }, {
        type: OverlayContainer
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
      }, {
        type: OverlayPositionBuilder
      }, {
        type: OverlayKeyboardDispatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default set of positions for the overlay. Follows the behavior of a dropdown.
     * @type {?}
     */


    var defaultPositionList = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    }];
    /**
     * Injection token that determines the scroll handling while the connected overlay is open.
     * @type {?}
     */

    var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
    /**
     * Directive applied to an element to make it usable as an origin for an Overlay using a
     * ConnectedPositionStrategy.
     */

    var CdkOverlayOrigin =
    /**
     * @param {?} elementRef
     */
    function CdkOverlayOrigin(elementRef) {
      _classCallCheck(this, CdkOverlayOrigin);

      this.elementRef = elementRef;
    };

    CdkOverlayOrigin.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
        exportAs: 'cdkOverlayOrigin'
      }]
    }];
    /** @nocollapse */

    CdkOverlayOrigin.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /**
     * Directive to facilitate declarative creation of an
     * Overlay using a FlexibleConnectedPositionStrategy.
     */


    var CdkConnectedOverlay = /*#__PURE__*/function () {
      // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.

      /**
       * @param {?} _overlay
       * @param {?} templateRef
       * @param {?} viewContainerRef
       * @param {?} scrollStrategyFactory
       * @param {?} _dir
       */
      function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
        _classCallCheck(this, CdkConnectedOverlay);

        this._overlay = _overlay;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Margin between the overlay and the viewport edges.
         */

        this.viewportMargin = 0;
        /**
         * Whether the overlay is open.
         */

        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */

        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the position has changed.
         */

        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been attached.
         */

        this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been detached.
         */

        this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when there are keyboard events that are targeted at the overlay.
         */

        this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["TemplatePortal"](templateRef, viewContainerRef);
        this._scrollStrategyFactory = scrollStrategyFactory;
        this.scrollStrategy = this._scrollStrategyFactory();
      }
      /**
       * The offset in pixels for the overlay connection point on the x-axis
       * @return {?}
       */


      _createClass(CdkConnectedOverlay, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          if (this._overlayRef) {
            this._overlayRef.dispose();
          }

          this._backdropSubscription.unsubscribe();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this._position) {
            this._updatePositionStrategy(this._position);

            this._overlayRef.updateSize({
              width: this.width,
              minWidth: this.minWidth,
              height: this.height,
              minHeight: this.minHeight
            });

            if (changes['origin'] && this.open) {
              this._position.apply();
            }
          }

          if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
          }
        }
        /**
         * Creates an overlay
         * @private
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          var _this41 = this;

          if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
          }

          this._overlayRef = this._overlay.create(this._buildConfig());

          this._overlayRef.keydownEvents().subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this41.overlayKeydown.next(event);

            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
              event.preventDefault();

              _this41._detachOverlay();
            }
          });
        }
        /**
         * Builds the overlay config based on the directive's inputs
         * @private
         * @return {?}
         */

      }, {
        key: "_buildConfig",
        value: function _buildConfig() {
          /** @type {?} */
          var positionStrategy = this._position = this._createPositionStrategy();
          /** @type {?} */


          var overlayConfig = new OverlayConfig({
            direction: this._dir,
            positionStrategy: positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
          });

          if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
          }

          if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
          }

          if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
          }

          if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
          }

          if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
          }

          if (this.panelClass) {
            overlayConfig.panelClass = this.panelClass;
          }

          return overlayConfig;
        }
        /**
         * Updates the state of a position strategy, based on the values of the directive inputs.
         * @private
         * @param {?} positionStrategy
         * @return {?}
         */

      }, {
        key: "_updatePositionStrategy",
        value: function _updatePositionStrategy(positionStrategy) {
          var _this42 = this;

          /** @type {?} */
          var positions = this.positions.map(
          /**
          * @param {?} currentPosition
          * @return {?}
          */
          function (currentPosition) {
            return {
              originX: currentPosition.originX,
              originY: currentPosition.originY,
              overlayX: currentPosition.overlayX,
              overlayY: currentPosition.overlayY,
              offsetX: currentPosition.offsetX || _this42.offsetX,
              offsetY: currentPosition.offsetY || _this42.offsetY,
              panelClass: currentPosition.panelClass || undefined
            };
          });
          return positionStrategy.setOrigin(this.origin.elementRef).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition);
        }
        /**
         * Returns the position strategy of the overlay to be set on the overlay config
         * @private
         * @return {?}
         */

      }, {
        key: "_createPositionStrategy",
        value: function _createPositionStrategy() {
          var _this43 = this;

          /** @type {?} */
          var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);

          this._updatePositionStrategy(strategy);

          strategy.positionChanges.subscribe(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            return _this43.positionChange.emit(p);
          });
          return strategy;
        }
        /**
         * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
         * @private
         * @return {?}
         */

      }, {
        key: "_attachOverlay",
        value: function _attachOverlay() {
          var _this44 = this;

          if (!this._overlayRef) {
            this._createOverlay();
          } else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
          }

          if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);

            this.attach.emit();
          }

          if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              _this44.backdropClick.emit(event);
            });
          } else {
            this._backdropSubscription.unsubscribe();
          }
        }
        /**
         * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
         * @private
         * @return {?}
         */

      }, {
        key: "_detachOverlay",
        value: function _detachOverlay() {
          if (this._overlayRef) {
            this._overlayRef.detach();

            this.detach.emit();
          }

          this._backdropSubscription.unsubscribe();
        }
      }, {
        key: "offsetX",
        get: function get() {
          return this._offsetX;
        }
        /**
         * @param {?} offsetX
         * @return {?}
         */
        ,
        set: function set(offsetX) {
          this._offsetX = offsetX;

          if (this._position) {
            this._updatePositionStrategy(this._position);
          }
        }
        /**
         * The offset in pixels for the overlay connection point on the y-axis
         * @return {?}
         */

      }, {
        key: "offsetY",
        get: function get() {
          return this._offsetY;
        }
        /**
         * @param {?} offsetY
         * @return {?}
         */
        ,
        set: function set(offsetY) {
          this._offsetY = offsetY;

          if (this._position) {
            this._updatePositionStrategy(this._position);
          }
        }
        /**
         * Whether or not the overlay should attach a backdrop.
         * @return {?}
         */

      }, {
        key: "hasBackdrop",
        get: function get() {
          return this._hasBackdrop;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether or not the overlay should be locked when scrolling.
         * @return {?}
         */

      }, {
        key: "lockPosition",
        get: function get() {
          return this._lockPosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         * @return {?}
         */

      }, {
        key: "flexibleDimensions",
        get: function get() {
          return this._flexibleDimensions;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the overlay can grow after the initial open when flexible positioning is turned on.
         * @return {?}
         */

      }, {
        key: "growAfterOpen",
        get: function get() {
          return this._growAfterOpen;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the overlay can be pushed on-screen if none of the provided positions fit.
         * @return {?}
         */

      }, {
        key: "push",
        get: function get() {
          return this._push;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        }
        /**
         * The associated overlay reference.
         * @return {?}
         */

      }, {
        key: "overlayRef",
        get: function get() {
          return this._overlayRef;
        }
        /**
         * The element's layout direction.
         * @return {?}
         */

      }, {
        key: "dir",
        get: function get() {
          return this._dir ? this._dir.value : 'ltr';
        }
      }]);

      return CdkConnectedOverlay;
    }();

    CdkConnectedOverlay.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
        exportAs: 'cdkConnectedOverlay'
      }]
    }];
    /** @nocollapse */

    CdkConnectedOverlay.ctorParameters = function () {
      return [{
        type: Overlay
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    CdkConnectedOverlay.propDecorators = {
      origin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayOrigin']
      }],
      positions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayPositions']
      }],
      offsetX: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayOffsetX']
      }],
      offsetY: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayOffsetY']
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayWidth']
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayHeight']
      }],
      minWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayMinWidth']
      }],
      minHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayMinHeight']
      }],
      backdropClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayBackdropClass']
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayPanelClass']
      }],
      viewportMargin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayViewportMargin']
      }],
      scrollStrategy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayScrollStrategy']
      }],
      open: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayOpen']
      }],
      hasBackdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayHasBackdrop']
      }],
      lockPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayLockPosition']
      }],
      flexibleDimensions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayFlexibleDimensions']
      }],
      growAfterOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayGrowAfterOpen']
      }],
      push: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayPush']
      }],
      backdropClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      positionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      attach: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      detach: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      overlayKeydown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
      provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
      deps: [Overlay],
      useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var OverlayModule = function OverlayModule() {
      _classCallCheck(this, OverlayModule);
    };

    OverlayModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
        exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
        declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
        providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
      }]
    }];
    /**
     * @deprecated Use `OverlayModule` instead.
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */

    var OVERLAY_PROVIDERS = [Overlay, OverlayPositionBuilder, OVERLAY_KEYBOARD_DISPATCHER_PROVIDER, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"], OVERLAY_CONTAINER_PROVIDER, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Alternative to OverlayContainer that supports correct displaying of overlay elements in
     * Fullscreen mode
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
     *
     * Should be provided in the root component.
     */

    var FullscreenOverlayContainer = /*#__PURE__*/function (_OverlayContainer) {
      _inherits(FullscreenOverlayContainer, _OverlayContainer);

      var _super5 = _createSuper(FullscreenOverlayContainer);

      /**
       * @param {?} _document
       */
      function FullscreenOverlayContainer(_document) {
        _classCallCheck(this, FullscreenOverlayContainer);

        return _super5.call(this, _document);
      }
      /**
       * @return {?}
       */


      _createClass(FullscreenOverlayContainer, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "ngOnDestroy", this).call(this);

          if (this._fullScreenEventName && this._fullScreenListener) {
            this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_createContainer",
        value: function _createContainer() {
          var _this45 = this;

          _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "_createContainer", this).call(this);

          this._adjustParentForFullscreenChange();

          this._addFullscreenChangeListener(
          /**
          * @return {?}
          */
          function () {
            return _this45._adjustParentForFullscreenChange();
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_adjustParentForFullscreenChange",
        value: function _adjustParentForFullscreenChange() {
          if (!this._containerElement) {
            return;
          }
          /** @type {?} */


          var fullscreenElement = this.getFullscreenElement();
          /** @type {?} */

          var parent = fullscreenElement || this._document.body;
          parent.appendChild(this._containerElement);
        }
        /**
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_addFullscreenChangeListener",
        value: function _addFullscreenChangeListener(fn) {
          /** @type {?} */
          var eventName = this._getEventName();

          if (eventName) {
            if (this._fullScreenListener) {
              this._document.removeEventListener(eventName, this._fullScreenListener);
            }

            this._document.addEventListener(eventName, fn);

            this._fullScreenListener = fn;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getEventName",
        value: function _getEventName() {
          if (!this._fullScreenEventName) {
            /** @type {?} */
            var _document =
            /** @type {?} */
            this._document;

            if (_document.fullscreenEnabled) {
              this._fullScreenEventName = 'fullscreenchange';
            } else if (_document.webkitFullscreenEnabled) {
              this._fullScreenEventName = 'webkitfullscreenchange';
            } else if (_document.mozFullScreenEnabled) {
              this._fullScreenEventName = 'mozfullscreenchange';
            } else if (_document.msFullscreenEnabled) {
              this._fullScreenEventName = 'MSFullscreenChange';
            }
          }

          return this._fullScreenEventName;
        }
        /**
         * When the page is put into fullscreen mode, a specific element is specified.
         * Only that element and its children are visible when in fullscreen mode.
         * @return {?}
         */

      }, {
        key: "getFullscreenElement",
        value: function getFullscreenElement() {
          /** @type {?} */
          var _document =
          /** @type {?} */
          this._document;
          return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
        }
      }]);

      return FullscreenOverlayContainer;
    }(OverlayContainer);

    FullscreenOverlayContainer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FullscreenOverlayContainer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    FullscreenOverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
      factory: function FullscreenOverlayContainer_Factory() {
        return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      },
      token: FullscreenOverlayContainer,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=overlay.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/portal.js":
  /*!*****************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/portal.js ***!
    \*****************************************************/

  /*! exports provided: Portal, ComponentPortal, TemplatePortal, BasePortalOutlet, BasePortalHost, DomPortalOutlet, DomPortalHost, CdkPortal, TemplatePortalDirective, CdkPortalOutlet, PortalHostDirective, PortalModule, PortalInjector */

  /***/
  function node_modulesAngularCdkEsm2015PortalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Portal", function () {
      return Portal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
      return ComponentPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortal", function () {
      return TemplatePortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function () {
      return BasePortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
      return BasePortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () {
      return DomPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalHost", function () {
      return DomPortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortal", function () {
      return CdkPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function () {
      return TemplatePortalDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function () {
      return CdkPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function () {
      return PortalHostDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
      return PortalModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalInjector", function () {
      return PortalInjector;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Throws an exception when attempting to attach a null portal to a host.
     * \@docs-private
     * @return {?}
     */


    function throwNullPortalError() {
      throw Error('Must provide a portal to attach');
    }
    /**
     * Throws an exception when attempting to attach a portal to a host that is already attached.
     * \@docs-private
     * @return {?}
     */


    function throwPortalAlreadyAttachedError() {
      throw Error('Host already has a portal attached');
    }
    /**
     * Throws an exception when attempting to attach a portal to an already-disposed host.
     * \@docs-private
     * @return {?}
     */


    function throwPortalOutletAlreadyDisposedError() {
      throw Error('This PortalOutlet has already been disposed');
    }
    /**
     * Throws an exception when attempting to attach an unknown portal type.
     * \@docs-private
     * @return {?}
     */


    function throwUnknownPortalTypeError() {
      throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
    }
    /**
     * Throws an exception when attempting to attach a portal to a null host.
     * \@docs-private
     * @return {?}
     */


    function throwNullPortalOutletError() {
      throw Error('Attempting to attach a portal to a null PortalOutlet');
    }
    /**
     * Throws an exception when attempting to detach a portal that is not attached.
     * \@docs-private
     * @return {?}
     */


    function throwNoPortalAttachedError() {
      throw Error('Attempting to detach a portal that is not attached to a host');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A `Portal` is something that you want to render somewhere else.
     * It can be attach to / detached from a `PortalOutlet`.
     * @abstract
     * @template T
     */


    var Portal = /*#__PURE__*/function () {
      function Portal() {
        _classCallCheck(this, Portal);
      }

      _createClass(Portal, [{
        key: "attach",

        /**
         * Attach this portal to a host.
         * @param {?} host
         * @return {?}
         */
        value: function attach(host) {
          if (host == null) {
            throwNullPortalOutletError();
          }

          if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }

          this._attachedHost = host;
          return (
            /** @type {?} */
            host.attach(this)
          );
        }
        /**
         * Detach this portal from its host
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          /** @type {?} */
          var host = this._attachedHost;

          if (host == null) {
            throwNoPortalAttachedError();
          } else {
            this._attachedHost = null;
            host.detach();
          }
        }
        /**
         * Whether this portal is attached to a host.
         * @return {?}
         */

      }, {
        key: "setAttachedHost",

        /**
         * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
         * the PortalOutlet when it is performing an `attach()` or `detach()`.
         * @param {?} host
         * @return {?}
         */
        value: function setAttachedHost(host) {
          this._attachedHost = host;
        }
      }, {
        key: "isAttached",
        get: function get() {
          return this._attachedHost != null;
        }
      }]);

      return Portal;
    }();
    /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     * @template T
     */


    var ComponentPortal = /*#__PURE__*/function (_Portal) {
      _inherits(ComponentPortal, _Portal);

      var _super6 = _createSuper(ComponentPortal);

      /**
       * @param {?} component
       * @param {?=} viewContainerRef
       * @param {?=} injector
       * @param {?=} componentFactoryResolver
       */
      function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
        var _this46;

        _classCallCheck(this, ComponentPortal);

        _this46 = _super6.call(this);
        _this46.component = component;
        _this46.viewContainerRef = viewContainerRef;
        _this46.injector = injector;
        _this46.componentFactoryResolver = componentFactoryResolver;
        return _this46;
      }

      return ComponentPortal;
    }(Portal);
    /**
     * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
     * @template C
     */


    var TemplatePortal = /*#__PURE__*/function (_Portal2) {
      _inherits(TemplatePortal, _Portal2);

      var _super7 = _createSuper(TemplatePortal);

      /**
       * @param {?} template
       * @param {?} viewContainerRef
       * @param {?=} context
       */
      function TemplatePortal(template, viewContainerRef, context) {
        var _this47;

        _classCallCheck(this, TemplatePortal);

        _this47 = _super7.call(this);
        _this47.templateRef = template;
        _this47.viewContainerRef = viewContainerRef;
        _this47.context = context;
        return _this47;
      }
      /**
       * @return {?}
       */


      _createClass(TemplatePortal, [{
        key: "attach",

        /**
         * Attach the portal to the provided `PortalOutlet`.
         * When a context is provided it will override the `context` property of the `TemplatePortal`
         * instance.
         * @param {?} host
         * @param {?=} context
         * @return {?}
         */
        value: function attach(host) {
          var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
          this.context = context;
          return _get(_getPrototypeOf(TemplatePortal.prototype), "attach", this).call(this, host);
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this.context = undefined;
          return _get(_getPrototypeOf(TemplatePortal.prototype), "detach", this).call(this);
        }
      }, {
        key: "origin",
        get: function get() {
          return this.templateRef.elementRef;
        }
      }]);

      return TemplatePortal;
    }(Portal);
    /**
     * Partial implementation of PortalOutlet that handles attaching
     * ComponentPortal and TemplatePortal.
     * @abstract
     */


    var BasePortalOutlet = /*#__PURE__*/function () {
      function BasePortalOutlet() {
        _classCallCheck(this, BasePortalOutlet);

        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false;
      }
      /**
       * Whether this host has an attached portal.
       * @return {?}
       */


      _createClass(BasePortalOutlet, [{
        key: "hasAttached",
        value: function hasAttached() {
          return !!this._attachedPortal;
        }
        /**
         * Attaches a portal.
         * @param {?} portal
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach(portal) {
          if (!portal) {
            throwNullPortalError();
          }

          if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }

          if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
          }

          if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
          } else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
          }

          throwUnknownPortalTypeError();
        }
        /**
         * Detaches a previously attached portal.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);

            this._attachedPortal = null;
          }

          this._invokeDisposeFn();
        }
        /**
         * Permanently dispose of this portal host.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this.hasAttached()) {
            this.detach();
          }

          this._invokeDisposeFn();

          this._isDisposed = true;
        }
        /**
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "setDisposeFn",
        value: function setDisposeFn(fn) {
          this._disposeFn = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_invokeDisposeFn",
        value: function _invokeDisposeFn() {
          if (this._disposeFn) {
            this._disposeFn();

            this._disposeFn = null;
          }
        }
      }]);

      return BasePortalOutlet;
    }();
    /**
     * @deprecated Use `BasePortalOutlet` instead.
     * \@breaking-change 9.0.0
     * @abstract
     */


    var BasePortalHost = /*#__PURE__*/function (_BasePortalOutlet) {
      _inherits(BasePortalHost, _BasePortalOutlet);

      var _super8 = _createSuper(BasePortalHost);

      function BasePortalHost() {
        _classCallCheck(this, BasePortalHost);

        return _super8.apply(this, arguments);
      }

      return BasePortalHost;
    }(BasePortalOutlet);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
     * application context.
     */


    var DomPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet2) {
      _inherits(DomPortalOutlet, _BasePortalOutlet2);

      var _super9 = _createSuper(DomPortalOutlet);

      /**
       * @param {?} outletElement
       * @param {?} _componentFactoryResolver
       * @param {?} _appRef
       * @param {?} _defaultInjector
       */
      function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        var _this48;

        _classCallCheck(this, DomPortalOutlet);

        _this48 = _super9.call(this);
        _this48.outletElement = outletElement;
        _this48._componentFactoryResolver = _componentFactoryResolver;
        _this48._appRef = _appRef;
        _this48._defaultInjector = _defaultInjector;
        return _this48;
      }
      /**
       * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
       * @template T
       * @param {?} portal Portal to be attached
       * @return {?} Reference to the created component.
       */


      _createClass(DomPortalOutlet, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          var _this49 = this;

          /** @type {?} */
          var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
          /** @type {?} */

          var componentFactory = resolver.resolveComponentFactory(portal.component);
          /** @type {?} */

          var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
          // for the component (in terms of Angular's component tree, not rendering).
          // When the ViewContainerRef is missing, we use the factory to create the component directly
          // and then manually attach the view to the application.

          if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
            this.setDisposeFn(
            /**
            * @return {?}
            */
            function () {
              return componentRef.destroy();
            });
          } else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);

            this._appRef.attachView(componentRef.hostView);

            this.setDisposeFn(
            /**
            * @return {?}
            */
            function () {
              _this49._appRef.detachView(componentRef.hostView);

              componentRef.destroy();
            });
          } // At this point the component has been instantiated, so we move it to the location in the DOM
          // where we want it to be rendered.


          this.outletElement.appendChild(this._getComponentRootNode(componentRef));
          return componentRef;
        }
        /**
         * Attaches a template portal to the DOM as an embedded view.
         * @template C
         * @param {?} portal Portal to be attached.
         * @return {?} Reference to the created embedded view.
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          var _this50 = this;

          /** @type {?} */
          var viewContainer = portal.viewContainerRef;
          /** @type {?} */

          var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
          viewRef.detectChanges(); // The method `createEmbeddedView` will add the view as a child of the viewContainer.
          // But for the DomPortalOutlet the view can be added everywhere in the DOM
          // (e.g Overlay Container) To move the view to the specified host element. We just
          // re-append the existing root nodes.

          viewRef.rootNodes.forEach(
          /**
          * @param {?} rootNode
          * @return {?}
          */
          function (rootNode) {
            return _this50.outletElement.appendChild(rootNode);
          });
          this.setDisposeFn(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var index = viewContainer.indexOf(viewRef);

            if (index !== -1) {
              viewContainer.remove(index);
            }
          }); // TODO(jelbourn): Return locals from view.

          return viewRef;
        }
        /**
         * Clears out a portal from the DOM.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          _get(_getPrototypeOf(DomPortalOutlet.prototype), "dispose", this).call(this);

          if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
          }
        }
        /**
         * Gets the root HTMLElement for an instantiated component.
         * @private
         * @param {?} componentRef
         * @return {?}
         */

      }, {
        key: "_getComponentRootNode",
        value: function _getComponentRootNode(componentRef) {
          return (
            /** @type {?} */

            /** @type {?} */
            componentRef.hostView.rootNodes[0]
          );
        }
      }]);

      return DomPortalOutlet;
    }(BasePortalOutlet);
    /**
     * @deprecated Use `DomPortalOutlet` instead.
     * \@breaking-change 9.0.0
     */


    var DomPortalHost = /*#__PURE__*/function (_DomPortalOutlet) {
      _inherits(DomPortalHost, _DomPortalOutlet);

      var _super10 = _createSuper(DomPortalHost);

      function DomPortalHost() {
        _classCallCheck(this, DomPortalHost);

        return _super10.apply(this, arguments);
      }

      return DomPortalHost;
    }(DomPortalOutlet);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
     * the directive instance itself can be attached to a host, enabling declarative use of portals.
     */


    var CdkPortal = /*#__PURE__*/function (_TemplatePortal) {
      _inherits(CdkPortal, _TemplatePortal);

      var _super11 = _createSuper(CdkPortal);

      /**
       * @param {?} templateRef
       * @param {?} viewContainerRef
       */
      function CdkPortal(templateRef, viewContainerRef) {
        _classCallCheck(this, CdkPortal);

        return _super11.call(this, templateRef, viewContainerRef);
      }

      return CdkPortal;
    }(TemplatePortal);

    CdkPortal.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkPortal]',
        exportAs: 'cdkPortal'
      }]
    }];
    /** @nocollapse */

    CdkPortal.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }];
    };
    /**
     * @deprecated Use `CdkPortal` instead.
     * \@breaking-change 9.0.0
     */


    var TemplatePortalDirective = /*#__PURE__*/function (_CdkPortal) {
      _inherits(TemplatePortalDirective, _CdkPortal);

      var _super12 = _createSuper(TemplatePortalDirective);

      function TemplatePortalDirective() {
        _classCallCheck(this, TemplatePortalDirective);

        return _super12.apply(this, arguments);
      }

      return TemplatePortalDirective;
    }(CdkPortal);

    TemplatePortalDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdk-portal], [portal]',
        exportAs: 'cdkPortal',
        providers: [{
          provide: CdkPortal,
          useExisting: TemplatePortalDirective
        }]
      }]
    }];
    /**
     * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
     * directly attached to it, enabling declarative use.
     *
     * Usage:
     * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
     */

    var CdkPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet3) {
      _inherits(CdkPortalOutlet, _BasePortalOutlet3);

      var _super13 = _createSuper(CdkPortalOutlet);

      /**
       * @param {?} _componentFactoryResolver
       * @param {?} _viewContainerRef
       */
      function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef) {
        var _this51;

        _classCallCheck(this, CdkPortalOutlet);

        _this51 = _super13.call(this);
        _this51._componentFactoryResolver = _componentFactoryResolver;
        _this51._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */

        _this51._isInitialized = false;
        /**
         * Emits when a portal is attached to the outlet.
         */

        _this51.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this51;
      }
      /**
       * Portal associated with the Portal outlet.
       * @return {?}
       */


      _createClass(CdkPortalOutlet, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._isInitialized = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "dispose", this).call(this);

          this._attachedPortal = null;
          this._attachedRef = null;
        }
        /**
         * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
         *
         * @template T
         * @param {?} portal Portal to be attached to the portal outlet.
         * @return {?} Reference to the created component.
         */

      }, {
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          portal.setAttachedHost(this); // If the portal specifies an origin, use that as the logical location of the component
          // in the application tree. Otherwise use the location of this PortalOutlet.

          /** @type {?} */

          var viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
          /** @type {?} */

          var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
          /** @type {?} */

          var componentFactory = resolver.resolveComponentFactory(portal.component);
          /** @type {?} */

          var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector);

          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this,
          /**
          * @return {?}
          */
          function () {
            return ref.destroy();
          });

          this._attachedPortal = portal;
          this._attachedRef = ref;
          this.attached.emit(ref);
          return ref;
        }
        /**
         * Attach the given TemplatePortal to this PortlHost as an embedded View.
         * @template C
         * @param {?} portal Portal to be attached.
         * @return {?} Reference to the created embedded view.
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          var _this52 = this;

          portal.setAttachedHost(this);
          /** @type {?} */

          var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);

          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this,
          /**
          * @return {?}
          */
          function () {
            return _this52._viewContainerRef.clear();
          });

          this._attachedPortal = portal;
          this._attachedRef = viewRef;
          this.attached.emit(viewRef);
          return viewRef;
        }
      }, {
        key: "portal",
        get: function get() {
          return this._attachedPortal;
        }
        /**
         * @param {?} portal
         * @return {?}
         */
        ,
        set: function set(portal) {
          // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
          // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
          // and attach a portal programmatically in the parent component. When Angular does the first CD
          // round, it will fire the setter with empty string, causing the user's content to be cleared.
          if (this.hasAttached() && !portal && !this._isInitialized) {
            return;
          }

          if (this.hasAttached()) {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "detach", this).call(this);
          }

          if (portal) {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "attach", this).call(this, portal);
          }

          this._attachedPortal = portal;
        }
        /**
         * Component or view reference that is attached to the portal.
         * @return {?}
         */

      }, {
        key: "attachedRef",
        get: function get() {
          return this._attachedRef;
        }
      }]);

      return CdkPortalOutlet;
    }(BasePortalOutlet);

    CdkPortalOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkPortalOutlet]',
        exportAs: 'cdkPortalOutlet',
        inputs: ['portal: cdkPortalOutlet']
      }]
    }];
    /** @nocollapse */

    CdkPortalOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }];
    };

    CdkPortalOutlet.propDecorators = {
      attached: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @deprecated Use `CdkPortalOutlet` instead.
     * \@breaking-change 9.0.0
     */

    var PortalHostDirective = /*#__PURE__*/function (_CdkPortalOutlet) {
      _inherits(PortalHostDirective, _CdkPortalOutlet);

      var _super14 = _createSuper(PortalHostDirective);

      function PortalHostDirective() {
        _classCallCheck(this, PortalHostDirective);

        return _super14.apply(this, arguments);
      }

      return PortalHostDirective;
    }(CdkPortalOutlet);

    PortalHostDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkPortalHost], [portalHost]',
        exportAs: 'cdkPortalHost',
        inputs: ['portal: cdkPortalHost'],
        providers: [{
          provide: CdkPortalOutlet,
          useExisting: PortalHostDirective
        }]
      }]
    }];

    var PortalModule = function PortalModule() {
      _classCallCheck(this, PortalModule);
    };

    PortalModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
        declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Custom injector to be used when providing custom
     * injection tokens to components inside a portal.
     * \@docs-private
     */

    var PortalInjector = /*#__PURE__*/function () {
      /**
       * @param {?} _parentInjector
       * @param {?} _customTokens
       */
      function PortalInjector(_parentInjector, _customTokens) {
        _classCallCheck(this, PortalInjector);

        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
      }
      /**
       * @param {?} token
       * @param {?=} notFoundValue
       * @return {?}
       */


      _createClass(PortalInjector, [{
        key: "get",
        value: function get(token, notFoundValue) {
          /** @type {?} */
          var value = this._customTokens.get(token);

          if (typeof value !== 'undefined') {
            return value;
          }

          return this._parentInjector.get(token, notFoundValue);
        }
      }]);

      return PortalInjector;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=portal.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/esm2015/scrolling.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/scrolling.js ***!
    \********************************************************/

  /*! exports provided: _fixedSizeVirtualScrollStrategyFactory, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, SCROLL_DISPATCHER_PROVIDER_FACTORY, DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, ScrollingModule, ScrollDispatchModule, VIEWPORT_RULER_PROVIDER_FACTORY, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkVirtualForOf, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport */

  /***/
  function node_modulesAngularCdkEsm2015ScrollingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
      return _fixedSizeVirtualScrollStrategyFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
      return FixedSizeVirtualScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
      return CdkFixedSizeVirtualScroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function () {
      return SCROLL_DISPATCHER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
      return DEFAULT_SCROLL_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return ScrollDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function () {
      return SCROLL_DISPATCHER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return CdkScrollable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
      return ScrollingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function () {
      return ScrollDispatchModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function () {
      return VIEWPORT_RULER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
      return DEFAULT_RESIZE_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return ViewportRuler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function () {
      return VIEWPORT_RULER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
      return CdkVirtualForOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
      return VIRTUAL_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
      return CdkVirtualScrollViewport;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The injection token used to specify the virtual scrolling strategy.
     * @type {?}
     */


    var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Virtual scrolling strategy for lists with items of known fixed size.
     */

    var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} itemSize The size of the items in the virtually scrolling list.
       * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        _classCallCheck(this, FixedSizeVirtualScrollStrategy);

        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */

        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */

        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param {?} viewport The viewport to attach this strategy to.
       * @return {?}
       */


      _createClass(FixedSizeVirtualScrollStrategy, [{
        key: "attach",
        value: function attach(viewport) {
          this._viewport = viewport;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * Detaches this scroll strategy from the currently attached viewport.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._scrolledIndexChange.complete();

          this._viewport = null;
        }
        /**
         * Update the item size and buffer size.
         * @param {?} itemSize The size of the items in the virtually scrolling list.
         * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         * @return {?}
         */

      }, {
        key: "updateItemAndBufferSize",
        value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
          if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
          }

          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onContentScrolled",
        value: function onContentScrolled() {
          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onDataLengthChanged",
        value: function onDataLengthChanged() {
          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onContentRendered",
        value: function onContentRendered() {}
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onRenderedOffsetChanged",
        value: function onRenderedOffsetChanged() {}
        /**
         * Scroll to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?} behavior The ScrollBehavior to use when scrolling.
         * @return {?}
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index, behavior) {
          if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
          }
        }
        /**
         * Update the viewport's total content size.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTotalContentSize",
        value: function _updateTotalContentSize() {
          if (!this._viewport) {
            return;
          }

          this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
        }
        /**
         * Update the viewport's rendered range.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRenderedRange",
        value: function _updateRenderedRange() {
          if (!this._viewport) {
            return;
          }
          /** @type {?} */


          var scrollOffset = this._viewport.measureScrollOffset();
          /** @type {?} */


          var firstVisibleIndex = scrollOffset / this._itemSize;
          /** @type {?} */

          var renderedRange = this._viewport.getRenderedRange();
          /** @type {?} */


          var newRange = {
            start: renderedRange.start,
            end: renderedRange.end
          };
          /** @type {?} */

          var viewportSize = this._viewport.getViewportSize();
          /** @type {?} */


          var dataLength = this._viewport.getDataLength();
          /** @type {?} */


          var startBuffer = scrollOffset - newRange.start * this._itemSize;

          if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
          } else {
            /** @type {?} */
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
              /** @type {?} */
              var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

              if (expandEnd > 0) {
                newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
              }
            }
          }

          this._viewport.setRenderedRange(newRange);

          this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

          this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
        }
      }]);

      return FixedSizeVirtualScrollStrategy;
    }();
    /**
     * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
     * `FixedSizeVirtualScrollStrategy` from the given directive.
     * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
     *     `FixedSizeVirtualScrollStrategy` from.
     * @return {?}
     */


    function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
      return fixedSizeDir._scrollStrategy;
    }
    /**
     * A virtual scroll strategy that supports fixed-size items.
     */


    var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
      function CdkFixedSizeVirtualScroll() {
        _classCallCheck(this, CdkFixedSizeVirtualScroll);

        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */

        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
      /**
       * The size of the items in the list (in pixels).
       * @return {?}
       */


      _createClass(CdkFixedSizeVirtualScroll, [{
        key: "ngOnChanges",

        /**
         * @return {?}
         */
        value: function ngOnChanges() {
          this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
      }, {
        key: "itemSize",
        get: function get() {
          return this._itemSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
        }
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         * @return {?}
         */

      }, {
        key: "minBufferPx",
        get: function get() {
          return this._minBufferPx;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
        }
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         * @return {?}
         */

      }, {
        key: "maxBufferPx",
        get: function get() {
          return this._maxBufferPx;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
        }
      }]);

      return CdkFixedSizeVirtualScroll;
    }();

    CdkFixedSizeVirtualScroll.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'cdk-virtual-scroll-viewport[itemSize]',
        providers: [{
          provide: VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory,
          deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return CdkFixedSizeVirtualScroll;
          })]
        }]
      }]
    }];
    CdkFixedSizeVirtualScroll.propDecorators = {
      itemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the scrolling events by default.
     * @type {?}
     */

    var DEFAULT_SCROLL_TIME = 20;
    /**
     * Service contained all registered Scrollable references and emits an event when any one of the
     * Scrollable references emit a scrolled event.
     */

    var ScrollDispatcher = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _platform
       */
      function ScrollDispatcher(_ngZone, _platform) {
        _classCallCheck(this, ScrollDispatcher);

        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */

        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */

        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */

        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */

        this.scrollContainers = new Map();
      }
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param {?} scrollable Scrollable instance to be registered.
       * @return {?}
       */


      _createClass(ScrollDispatcher, [{
        key: "register",
        value: function register(scrollable) {
          var _this53 = this;

          if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this53._scrolled.next(scrollable);
            }));
          }
        }
        /**
         * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
         * @param {?} scrollable Scrollable instance to be deregistered.
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(scrollable) {
          /** @type {?} */
          var scrollableReference = this.scrollContainers.get(scrollable);

          if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers["delete"](scrollable);
          }
        }
        /**
         * Returns an observable that emits an event whenever any of the registered Scrollable
         * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
         * to override the default "throttle" time.
         *
         * **Note:** in order to avoid hitting change detection for every scroll event,
         * all of the events emitted from this stream will be run outside the Angular zone.
         * If you need to update any data bindings as a result of a scroll event, you have
         * to run the callback using `NgZone.run`.
         * @param {?=} auditTimeInMs
         * @return {?}
         */

      }, {
        key: "scrolled",
        value: function scrolled() {
          var _this54 = this;

          var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

          if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            if (!_this54._globalSubscription) {
              _this54._addGlobalListener();
            } // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.

            /** @type {?} */


            var subscription = auditTimeInMs > 0 ? _this54._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this54._scrolled.subscribe(observer);
            _this54._scrolledCount++;
            return (
              /**
              * @return {?}
              */
              function () {
                subscription.unsubscribe();
                _this54._scrolledCount--;

                if (!_this54._scrolledCount) {
                  _this54._removeGlobalListener();
                }
              }
            );
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this55 = this;

          this._removeGlobalListener();

          this.scrollContainers.forEach(
          /**
          * @param {?} _
          * @param {?} container
          * @return {?}
          */
          function (_, container) {
            return _this55.deregister(container);
          });

          this._scrolled.complete();
        }
        /**
         * Returns an observable that emits whenever any of the
         * scrollable ancestors of an element are scrolled.
         * @param {?} elementRef Element whose ancestors to listen for.
         * @param {?=} auditTimeInMs Time to throttle the scroll events.
         * @return {?}
         */

      }, {
        key: "ancestorScrolled",
        value: function ancestorScrolled(elementRef, auditTimeInMs) {
          /** @type {?} */
          var ancestors = this.getAncestorScrollContainers(elementRef);
          return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} target
          * @return {?}
          */
          function (target) {
            return !target || ancestors.indexOf(target) > -1;
          }));
        }
        /**
         * Returns all registered Scrollables that contain the provided element.
         * @param {?} elementRef
         * @return {?}
         */

      }, {
        key: "getAncestorScrollContainers",
        value: function getAncestorScrollContainers(elementRef) {
          var _this56 = this;

          /** @type {?} */
          var scrollingContainers = [];
          this.scrollContainers.forEach(
          /**
          * @param {?} _subscription
          * @param {?} scrollable
          * @return {?}
          */
          function (_subscription, scrollable) {
            if (_this56._scrollableContainsElement(scrollable, elementRef)) {
              scrollingContainers.push(scrollable);
            }
          });
          return scrollingContainers;
        }
        /**
         * Returns true if the element is contained within the provided Scrollable.
         * @private
         * @param {?} scrollable
         * @param {?} elementRef
         * @return {?}
         */

      }, {
        key: "_scrollableContainsElement",
        value: function _scrollableContainsElement(scrollable, elementRef) {
          /** @type {?} */
          var element = elementRef.nativeElement;
          /** @type {?} */

          var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
          // are the scrollable's element.

          do {
            if (element == scrollableElement) {
              return true;
            }
          } while (element =
          /** @type {?} */
          element.parentElement);

          return false;
        }
        /**
         * Sets up the global scroll listeners.
         * @private
         * @return {?}
         */

      }, {
        key: "_addGlobalListener",
        value: function _addGlobalListener() {
          var _this57 = this;

          this._globalSubscription = this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this57._scrolled.next();
            });
          });
        }
        /**
         * Cleans up the global scroll listener.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeGlobalListener",
        value: function _removeGlobalListener() {
          if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();

            this._globalSubscription = null;
          }
        }
      }]);

      return ScrollDispatcher;
    }();

    ScrollDispatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ScrollDispatcher.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };
    /** @nocollapse */


    ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ScrollDispatcher_Factory() {
        return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
      },
      token: ScrollDispatcher,
      providedIn: "root"
    });
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentDispatcher
     * @param {?} ngZone
     * @param {?} platform
     * @return {?}
     */

    function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
      return parentDispatcher || new ScrollDispatcher(ngZone, platform);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var SCROLL_DISPATCHER_PROVIDER = {
      // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
      provide: ScrollDispatcher,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]],
      useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Sends an event when the directive's element is scrolled. Registers itself with the
     * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
     * can be listened to through the service.
     */

    var CdkScrollable = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} scrollDispatcher
       * @param {?} ngZone
       * @param {?=} dir
       */
      function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this58 = this;

        _classCallCheck(this, CdkScrollable);

        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          return _this58.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this58.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this58._destroyed)).subscribe(observer);
          });
        });
      }
      /**
       * @return {?}
       */


      _createClass(CdkScrollable, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.scrollDispatcher.register(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.scrollDispatcher.deregister(this);

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Returns observable that emits when a scroll event is fired on the host element.
         * @return {?}
         */

      }, {
        key: "elementScrolled",
        value: function elementScrolled() {
          return this._elementScrolled;
        }
        /**
         * Gets the ElementRef for the viewport.
         * @return {?}
         */

      }, {
        key: "getElementRef",
        value: function getElementRef() {
          return this.elementRef;
        }
        /**
         * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
         * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} options specified the offsets to scroll to.
         * @return {?}
         */

      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          /** @type {?} */
          var el = this.elementRef.nativeElement;
          /** @type {?} */

          var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

          options.left = options.left == null ? isRtl ? options.end : options.start : options.left;
          options.right = options.right == null ? isRtl ? options.start : options.end : options.right; // Rewrite the bottom offset as a top offset.

          if (options.bottom != null) {
            /** @type {?} */
            options.top = el.scrollHeight - el.clientHeight - options.bottom;
          } // Rewrite the right offset as a left offset.


          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NORMAL) {
            if (options.left != null) {
              /** @type {?} */
              options.right = el.scrollWidth - el.clientWidth - options.left;
            }

            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
              options.left = options.right;
            } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
              options.left = options.right ? -options.right : options.right;
            }
          } else {
            if (options.right != null) {
              /** @type {?} */
              options.left = el.scrollWidth - el.clientWidth - options.right;
            }
          }

          this._applyScrollToOptions(options);
        }
        /**
         * @private
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_applyScrollToOptions",
        value: function _applyScrollToOptions(options) {
          /** @type {?} */
          var el = this.elementRef.nativeElement;

          if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
          } else {
            if (options.top != null) {
              el.scrollTop = options.top;
            }

            if (options.left != null) {
              el.scrollLeft = options.left;
            }
          }
        }
        /**
         * Measures the scroll offset relative to the specified edge of the viewport. This method can be
         * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
         * about what scrollLeft means in RTL. The values returned by this method are normalized such that
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} from The edge to measure from.
         * @return {?}
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          /** @type {?} */
          var LEFT = 'left';
          /** @type {?} */

          var RIGHT = 'right';
          /** @type {?} */

          var el = this.elementRef.nativeElement;

          if (from == 'top') {
            return el.scrollTop;
          }

          if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
          } // Rewrite start & end as left or right offsets.

          /** @type {?} */


          var isRtl = this.dir && this.dir.value == 'rtl';

          if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
          } else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
          }

          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
            // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
              return el.scrollWidth - el.clientWidth - el.scrollLeft;
            } else {
              return el.scrollLeft;
            }
          } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
            // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
              return el.scrollLeft + el.scrollWidth - el.clientWidth;
            } else {
              return -el.scrollLeft;
            }
          } else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
              return el.scrollLeft;
            } else {
              return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
          }
        }
      }]);

      return CdkScrollable;
    }();

    CdkScrollable.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdk-scrollable], [cdkScrollable]'
      }]
    }];
    /** @nocollapse */

    CdkScrollable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: ScrollDispatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Checks if the given ranges are equal.
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */


    function rangesEqual(r1, r2) {
      return r1.start == r2.start && r1.end == r2.end;
    }
    /**
     * Scheduler to be used for scroll events. Needs to fall back to
     * something that doesn't rely on requestAnimationFrame on environments
     * that don't support it (e.g. server-side rendering).
     * @type {?}
     */


    var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
    /**
     * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
     */

    var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
      _inherits(CdkVirtualScrollViewport, _CdkScrollable);

      var _super15 = _createSuper(CdkVirtualScrollViewport);

      /**
       * @param {?} elementRef
       * @param {?} _changeDetectorRef
       * @param {?} ngZone
       * @param {?} _scrollStrategy
       * @param {?} dir
       * @param {?} scrollDispatcher
       */
      function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
        var _this59;

        _classCallCheck(this, CdkVirtualScrollViewport);

        _this59 = _super15.call(this, elementRef, scrollDispatcher, ngZone, dir);
        _this59.elementRef = elementRef;
        _this59._changeDetectorRef = _changeDetectorRef;
        _this59._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */

        _this59._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */

        _this59._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this59._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.

        /**
         * Emits when the index of the first element visible in the viewport changes.
         */

        _this59.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          return _this59._scrollStrategy.scrolledIndexChange.subscribe(
          /**
          * @param {?} index
          * @return {?}
          */
          function (index) {
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              return _this59.ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return observer.next(index);
              });
            });
          });
        });
        /**
         * A stream that emits whenever the rendered range changes.
         */

        _this59.renderedRangeStream = _this59._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */

        _this59._totalContentSize = 0;
        /**
         * A string representing the `style.width` property value to be used for the spacer element.
         */

        _this59._totalContentWidth = '';
        /**
         * A string representing the `style.height` property value to be used for the spacer element.
         */

        _this59._totalContentHeight = '';
        /**
         * The currently rendered range of indices.
         */

        _this59._renderedRange = {
          start: 0,
          end: 0
        };
        /**
         * The length of the data bound to this viewport (in number of items).
         */

        _this59._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */

        _this59._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */

        _this59._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */

        _this59._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */

        _this59._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */

        _this59._runAfterChangeDetection = [];

        if (!_scrollStrategy) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }

        return _this59;
      }
      /**
       * The direction the viewport scrolls.
       * @return {?}
       */


      _createClass(CdkVirtualScrollViewport, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this60 = this;

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
          // the Viewport to be rendered with the correct size before we measure. We run this outside the
          // zone to avoid causing more change detection cycles. We handle the change detection loop
          // ourselves instead.


          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this60._measureViewportSize();

              _this60._scrollStrategy.attach(_this60);

              _this60.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
              /** @type {?} */
              null), // Collect multiple events into one until the next animation frame. This way if
              // there are multiple scroll events in the same frame we only need to recheck
              // our layout once.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this60._scrollStrategy.onContentScrolled();
              });

              _this60._markChangeDetectionNeeded();
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.detach();

          this._scrollStrategy.detach(); // Complete all subjects


          this._renderedRangeSubject.complete();

          this._detachedSubject.complete();

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
        }
        /**
         * Attaches a `CdkVirtualForOf` to this viewport.
         * @param {?} forOf
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach(forOf) {
          var _this61 = this;

          if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
          } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
          // changes. Run outside the zone to avoid triggering change detection, since we're managing the
          // change detection loop ourselves.


          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this61._forOf = forOf;

            _this61._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this61._detachedSubject)).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              /** @type {?} */
              var newLength = data.length;

              if (newLength !== _this61._dataLength) {
                _this61._dataLength = newLength;

                _this61._scrollStrategy.onDataLengthChanged();
              }

              _this61._doChangeDetection();
            });
          });
        }
        /**
         * Detaches the current `CdkVirtualForOf`.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._forOf = null;

          this._detachedSubject.next();
        }
        /**
         * Gets the length of the data bound to this viewport (in number of items).
         * @return {?}
         */

      }, {
        key: "getDataLength",
        value: function getDataLength() {
          return this._dataLength;
        }
        /**
         * Gets the size of the viewport (in pixels).
         * @return {?}
         */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          return this._viewportSize;
        } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
        // cycle happens. I'm being careful to only call it after the render cycle is complete and before
        // setting it to something else, but its error prone and should probably be split into
        // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

        /**
         * Get the current rendered range of items.
         * @return {?}
         */

      }, {
        key: "getRenderedRange",
        value: function getRenderedRange() {
          return this._renderedRange;
        }
        /**
         * Sets the total size of all content (in pixels), including content that is not currently
         * rendered.
         * @param {?} size
         * @return {?}
         */

      }, {
        key: "setTotalContentSize",
        value: function setTotalContentSize(size) {
          if (this._totalContentSize !== size) {
            this._totalContentSize = size;

            this._calculateSpacerSize();

            this._markChangeDetectionNeeded();
          }
        }
        /**
         * Sets the currently rendered range of indices.
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "setRenderedRange",
        value: function setRenderedRange(range) {
          var _this62 = this;

          if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);

            this._markChangeDetectionNeeded(
            /**
            * @return {?}
            */
            function () {
              return _this62._scrollStrategy.onContentRendered();
            });
          }
        }
        /**
         * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
         * @return {?}
         */

      }, {
        key: "getOffsetToRenderedContentStart",
        value: function getOffsetToRenderedContentStart() {
          return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
        }
        /**
         * Sets the offset from the start of the viewport to either the start or end of the rendered data
         * (in pixels).
         * @param {?} offset
         * @param {?=} to
         * @return {?}
         */

      }, {
        key: "setRenderedContentOffset",
        value: function setRenderedContentOffset(offset) {
          var _this63 = this;

          var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
          // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
          // in the negative direction.

          /** @type {?} */
          var isRtl = this.dir && this.dir.value == 'rtl';
          /** @type {?} */

          var isHorizontal = this.orientation == 'horizontal';
          /** @type {?} */

          var axis = isHorizontal ? 'X' : 'Y';
          /** @type {?} */

          var axisDirection = isHorizontal && isRtl ? -1 : 1;
          /** @type {?} */

          var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
          this._renderedContentOffset = offset;

          if (to === 'to-end') {
            transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).

            this._renderedContentOffsetNeedsRewrite = true;
          }

          if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;

            this._markChangeDetectionNeeded(
            /**
            * @return {?}
            */
            function () {
              if (_this63._renderedContentOffsetNeedsRewrite) {
                _this63._renderedContentOffset -= _this63.measureRenderedContentSize();
                _this63._renderedContentOffsetNeedsRewrite = false;

                _this63.setRenderedContentOffset(_this63._renderedContentOffset);
              } else {
                _this63._scrollStrategy.onRenderedOffsetChanged();
              }
            });
          }
        }
        /**
         * Scrolls to the given offset from the start of the viewport. Please note that this is not always
         * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
         * direction, this would be the equivalent of setting a fictional `scrollRight` property.
         * @param {?} offset The offset to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */

      }, {
        key: "scrollToOffset",
        value: function scrollToOffset(offset) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          /** @type {?} */
          var options = {
            behavior: behavior
          };

          if (this.orientation === 'horizontal') {
            options.start = offset;
          } else {
            options.top = offset;
          }

          this.scrollTo(options);
        }
        /**
         * Scrolls to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          this._scrollStrategy.scrollToIndex(index, behavior);
        }
        /**
         * Gets the current scroll offset from the start of the viewport (in pixels).
         * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
         *     in horizontal mode.
         * @return {?}
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          return _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
        }
        /**
         * Measure the combined size of all of the rendered items.
         * @return {?}
         */

      }, {
        key: "measureRenderedContentSize",
        value: function measureRenderedContentSize() {
          /** @type {?} */
          var contentEl = this._contentWrapper.nativeElement;
          return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
        }
        /**
         * Measure the total combined size of the given range. Throws if the range includes items that are
         * not rendered.
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "measureRangeSize",
        value: function measureRangeSize(range) {
          if (!this._forOf) {
            return 0;
          }

          return this._forOf.measureRangeSize(range, this.orientation);
        }
        /**
         * Update the viewport dimensions and re-render.
         * @return {?}
         */

      }, {
        key: "checkViewportSize",
        value: function checkViewportSize() {
          // TODO: Cleanup later when add logic for handling content resize
          this._measureViewportSize();

          this._scrollStrategy.onDataLengthChanged();
        }
        /**
         * Measure the viewport size.
         * @private
         * @return {?}
         */

      }, {
        key: "_measureViewportSize",
        value: function _measureViewportSize() {
          /** @type {?} */
          var viewportEl = this.elementRef.nativeElement;
          this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
        }
        /**
         * Queue up change detection to run.
         * @private
         * @param {?=} runAfter
         * @return {?}
         */

      }, {
        key: "_markChangeDetectionNeeded",
        value: function _markChangeDetectionNeeded(runAfter) {
          var _this64 = this;

          if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
          } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
          // properties sequentially we only have to run `_doChangeDetection` once at the end.


          if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this64._doChangeDetection();
              });
            });
          }
        }
        /**
         * Run change detection.
         * @private
         * @return {?}
         */

      }, {
        key: "_doChangeDetection",
        value: function _doChangeDetection() {
          var _this65 = this;

          this._isChangeDetectionPending = false; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
          // from the root, since the repeated items are content projected in. Calling `detectChanges`
          // instead does not properly check the projected content.

          this.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this65._changeDetectorRef.markForCheck();
          }); // Apply the content transform. The transform can't be set via an Angular binding because
          // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
          // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
          // the `Number` function first to coerce it to a numeric value.

          this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
          /** @type {?} */

          var runAfterChangeDetection = this._runAfterChangeDetection;
          this._runAfterChangeDetection = [];

          var _iterator4 = _createForOfIteratorHelper(runAfterChangeDetection),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var fn = _step4.value;
              fn();
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
        /**
         * Calculates the `style.width` and `style.height` for the spacer element.
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateSpacerSize",
        value: function _calculateSpacerSize() {
          this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
          this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
        }
      }, {
        key: "orientation",
        get: function get() {
          return this._orientation;
        }
        /**
         * @param {?} orientation
         * @return {?}
         */
        ,
        set: function set(orientation) {
          if (this._orientation !== orientation) {
            this._orientation = orientation;

            this._calculateSpacerSize();
          }
        }
      }]);

      return CdkVirtualScrollViewport;
    }(CdkScrollable);

    CdkVirtualScrollViewport.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'cdk-virtual-scroll-viewport',
        template: "<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\"><ng-content></ng-content></div><div class=\"cdk-virtual-scroll-spacer\" [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>",
        styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
        host: {
          'class': 'cdk-virtual-scroll-viewport',
          '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
          '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        providers: [{
          provide: CdkScrollable,
          useExisting: CdkVirtualScrollViewport
        }]
      }]
    }];
    /** @nocollapse */

    CdkVirtualScrollViewport.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [VIRTUAL_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: ScrollDispatcher
      }];
    };

    CdkVirtualScrollViewport.propDecorators = {
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scrolledIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      _contentWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['contentWrapper', {
          "static": true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper to extract size from a DOM Node.
     * @param {?} orientation
     * @param {?} node
     * @return {?}
     */

    function getSize(orientation, node) {
      /** @type {?} */
      var el =
      /** @type {?} */
      node;

      if (!el.getBoundingClientRect) {
        return 0;
      }
      /** @type {?} */


      var rect = el.getBoundingClientRect();
      return orientation == 'horizontal' ? rect.width : rect.height;
    }
    /**
     * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
     * container.
     * @template T
     */


    var CdkVirtualForOf = /*#__PURE__*/function () {
      /**
       * @param {?} _viewContainerRef
       * @param {?} _template
       * @param {?} _differs
       * @param {?} _viewport
       * @param {?} ngZone
       */
      function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        var _this66 = this;

        _classCallCheck(this, CdkVirtualForOf);

        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject that emits when a new DataSource instance is given.
         */

        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */

        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */

        this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
        /** @type {?} */
        null), // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prev = _ref2[0],
              cur = _ref2[1];

          return _this66._changeDataSource(prev, cur);
        }), // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /**
         * The differ used to calculate changes to the data.
         */

        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */

        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */

        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe(
        /**
        * @param {?} data
        * @return {?}
        */
        function (data) {
          _this66._data = data;

          _this66._onRenderedDataChange();
        });

        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @param {?} range
        * @return {?}
        */
        function (range) {
          _this66._renderedRange = range;
          ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this66.viewChange.next(_this66._renderedRange);
          });

          _this66._onRenderedDataChange();
        });

        this._viewport.attach(this);
      }
      /**
       * The DataSource to display.
       * @return {?}
       */


      _createClass(CdkVirtualForOf, [{
        key: "measureRangeSize",

        /**
         * Measures the combined size (width for horizontal orientation, height for vertical) of all items
         * in the specified range. Throws an error if the range includes items that are not currently
         * rendered.
         * @param {?} range
         * @param {?} orientation
         * @return {?}
         */
        value: function measureRangeSize(range, orientation) {
          if (range.start >= range.end) {
            return 0;
          }

          if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
          } // The index into the list of rendered views for the first item in the range.

          /** @type {?} */


          var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

          /** @type {?} */

          var rangeLen = range.end - range.start; // Loop over all root nodes for all items in the range and sum up their size.

          /** @type {?} */

          var totalSize = 0;
          /** @type {?} */

          var i = rangeLen;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i + renderedStartIndex);
            /** @type {?} */


            var j = view ? view.rootNodes.length : 0;

            while (j--) {
              totalSize += getSize(orientation,
              /** @type {?} */
              view.rootNodes[j]);
            }
          }

          return totalSize;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).

            /** @type {?} */
            var changes = this._differ.diff(this._renderedItems);

            if (!changes) {
              this._updateContext();
            } else {
              this._applyChanges(changes);
            }

            this._needsUpdate = false;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._viewport.detach();

          this._dataSourceChanges.next();

          this._dataSourceChanges.complete();

          this.viewChange.complete();

          this._destroyed.next();

          this._destroyed.complete();

          var _iterator5 = _createForOfIteratorHelper(this._templateCache),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var view = _step5.value;
              view.destroy();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        /**
         * React to scroll state changes in the viewport.
         * @private
         * @return {?}
         */

      }, {
        key: "_onRenderedDataChange",
        value: function _onRenderedDataChange() {
          if (!this._renderedRange) {
            return;
          }

          this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

          if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
          }

          this._needsUpdate = true;
        }
        /**
         * Swap out one `DataSource` for another.
         * @private
         * @param {?} oldDs
         * @param {?} newDs
         * @return {?}
         */

      }, {
        key: "_changeDataSource",
        value: function _changeDataSource(oldDs, newDs) {
          if (oldDs) {
            oldDs.disconnect(this);
          }

          this._needsUpdate = true;
          return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        /**
         * Update the `CdkVirtualForOfContext` for all views.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateContext",
        value: function _updateContext() {
          /** @type {?} */
          var count = this._data.length;
          /** @type {?} */

          var i = this._viewContainerRef.length;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);

            view.detectChanges();
          }
        }
        /**
         * Apply changes to the DOM.
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "_applyChanges",
        value: function _applyChanges(changes) {
          var _this67 = this;

          // Rearrange the views to put them in the right location.
          changes.forEachOperation(
          /**
          * @param {?} record
          * @param {?} adjustedPreviousIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (record, adjustedPreviousIndex, currentIndex) {
            if (record.previousIndex == null) {
              // Item added.
              // Item added.

              /** @type {?} */
              var view = _this67._insertViewForNewItem(
              /** @type {?} */
              currentIndex);

              view.context.$implicit = record.item;
            } else if (currentIndex == null) {
              // Item removed.
              _this67._cacheView(_this67._detachView(
              /** @type {?} */
              adjustedPreviousIndex));
            } else {
              // Item moved.
              // Item moved.

              /** @type {?} */
              var _view =
              /** @type {?} */
              _this67._viewContainerRef.get(
              /** @type {?} */
              adjustedPreviousIndex);

              _this67._viewContainerRef.move(_view, currentIndex);

              _view.context.$implicit = record.item;
            }
          }); // Update $implicit for any items that had an identity change.

          changes.forEachIdentityChange(
          /**
          * @param {?} record
          * @return {?}
          */
          function (record) {
            /** @type {?} */
            var view =
            /** @type {?} */
            _this67._viewContainerRef.get(
            /** @type {?} */
            record.currentIndex);

            view.context.$implicit = record.item;
          }); // Update the context variables on all items.

          /** @type {?} */

          var count = this._data.length;
          /** @type {?} */

          var i = this._viewContainerRef.length;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);
          }
        }
        /**
         * Cache the given detached view.
         * @private
         * @param {?} view
         * @return {?}
         */

      }, {
        key: "_cacheView",
        value: function _cacheView(view) {
          if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
          } else {
            /** @type {?} */
            var index = this._viewContainerRef.indexOf(view); // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.


            if (index === -1) {
              view.destroy();
            } else {
              this._viewContainerRef.remove(index);
            }
          }
        }
        /**
         * Inserts a view for a new item, either from the cache or by creating a new one.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_insertViewForNewItem",
        value: function _insertViewForNewItem(index) {
          return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
        }
        /**
         * Update the computed properties on the `CdkVirtualForOfContext`.
         * @private
         * @param {?} context
         * @return {?}
         */

      }, {
        key: "_updateComputedContextProperties",
        value: function _updateComputedContextProperties(context) {
          context.first = context.index === 0;
          context.last = context.index === context.count - 1;
          context.even = context.index % 2 === 0;
          context.odd = !context.even;
        }
        /**
         * Creates a new embedded view and moves it to the given index
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_createEmbeddedViewAt",
        value: function _createEmbeddedViewAt(index) {
          // Note that it's important that we insert the item directly at the proper index,
          // rather than inserting it and the moving it in place, because if there's a directive
          // on the same node that injects the `ViewContainerRef`, Angular will insert another
          // comment node which can throw off the move when it's being repeated for all items.
          return this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit:
            /** @type {?} */
            null,
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
          }, index);
        }
        /**
         * Inserts a recycled view from the cache at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_insertViewFromCache",
        value: function _insertViewFromCache(index) {
          /** @type {?} */
          var cachedView = this._templateCache.pop();

          if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
          }

          return cachedView || null;
        }
        /**
         * Detaches the embedded view at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_detachView",
        value: function _detachView(index) {
          return (
            /** @type {?} */
            this._viewContainerRef.detach(index)
          );
        }
      }, {
        key: "cdkVirtualForOf",
        get: function get() {
          return this._cdkVirtualForOf;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cdkVirtualForOf = value;
          /** @type {?} */

          var ds = Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["isDataSource"])(value) ? value : // Slice the value if its an NgIterable to ensure we're working with an array.
          new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["ArrayDataSource"](value instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"] ? value : Array.prototype.slice.call(value || []));

          this._dataSourceChanges.next(ds);
        }
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         * @return {?}
         */

      }, {
        key: "cdkVirtualForTrackBy",
        get: function get() {
          return this._cdkVirtualForTrackBy;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          var _this68 = this;

          this._needsUpdate = true;
          this._cdkVirtualForTrackBy = fn ?
          /**
          * @param {?} index
          * @param {?} item
          * @return {?}
          */
          function (index, item) {
            return fn(index + (_this68._renderedRange ? _this68._renderedRange.start : 0), item);
          } : undefined;
        }
        /**
         * The template used to stamp out new elements.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "cdkVirtualForTemplate",
        set: function set(value) {
          if (value) {
            this._needsUpdate = true;
            this._template = value;
          }
        }
      }]);

      return CdkVirtualForOf;
    }();

    CdkVirtualForOf.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkVirtualFor][cdkVirtualForOf]'
      }]
    }];
    /** @nocollapse */

    CdkVirtualForOf.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
      }, {
        type: CdkVirtualScrollViewport,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    CdkVirtualForOf.propDecorators = {
      cdkVirtualForOf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cdkVirtualForTrackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cdkVirtualForTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cdkVirtualForTemplateCacheSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ScrollingModule = function ScrollingModule() {
      _classCallCheck(this, ScrollingModule);
    };

    ScrollingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
        exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport],
        declarations: [CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport]
      }]
    }];
    /**
     * @deprecated ScrollDispatchModule has been renamed to ScrollingModule.
     * \@breaking-change 8.0.0 delete this alias
     */

    var ScrollDispatchModule = function ScrollDispatchModule() {
      _classCallCheck(this, ScrollDispatchModule);
    };

    ScrollDispatchModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [ScrollingModule],
        exports: [ScrollingModule]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the resize events by default.
     * @type {?}
     */

    var DEFAULT_RESIZE_TIME = 20;
    /**
     * Simple utility for getting the bounds of the browser viewport.
     * \@docs-private
     */

    var ViewportRuler = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       * @param {?} ngZone
       */
      function ViewportRuler(_platform, ngZone) {
        var _this69 = this;

        _classCallCheck(this, ViewportRuler);

        this._platform = _platform;
        ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          _this69._change = _platform.isBrowser ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(); // Note that we need to do the subscription inside `runOutsideAngular`
          // since subscribing is what causes the event listener to be added.

          _this69._invalidateCache = _this69.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this69._updateViewportSize();
          });
        });
      }
      /**
       * @return {?}
       */


      _createClass(ViewportRuler, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._invalidateCache.unsubscribe();
        }
        /**
         * Returns the viewport's width and height.
         * @return {?}
         */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          if (!this._viewportSize) {
            this._updateViewportSize();
          }
          /** @type {?} */


          var output = {
            width: this._viewportSize.width,
            height: this._viewportSize.height
          }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

          if (!this._platform.isBrowser) {
            this._viewportSize =
            /** @type {?} */
            null;
          }

          return output;
        }
        /**
         * Gets a ClientRect for the viewport's bounds.
         * @return {?}
         */

      }, {
        key: "getViewportRect",
        value: function getViewportRect() {
          // Use the document element's bounding rect rather than the window scroll properties
          // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
          // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
          // conceptual viewports. Under most circumstances these viewports are equivalent, but they
          // can disagree when the page is pinch-zoomed (on devices that support touch).
          // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
          // We use the documentElement instead of the body because, by default (without a css reset)
          // browsers typically give the document body an 8px margin, which is not included in
          // getBoundingClientRect().

          /** @type {?} */
          var scrollPosition = this.getViewportScrollPosition();

          var _this$getViewportSize = this.getViewportSize(),
              width = _this$getViewportSize.width,
              height = _this$getViewportSize.height;

          return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width
          };
        }
        /**
         * Gets the (top, left) scroll position of the viewport.
         * @return {?}
         */

      }, {
        key: "getViewportScrollPosition",
        value: function getViewportScrollPosition() {
          // While we can get a reference to the fake document
          // during SSR, it doesn't have getBoundingClientRect.
          if (!this._platform.isBrowser) {
            return {
              top: 0,
              left: 0
            };
          } // The top-left-corner of the viewport is determined by the scroll position of the document
          // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
          // whether `document.body` or `document.documentElement` is the scrolled element, so reading
          // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
          // `document.documentElement` works consistently, where the `top` and `left` values will
          // equal negative the scroll position.

          /** @type {?} */


          var documentElement =
          /** @type {?} */
          document.documentElement;
          /** @type {?} */

          var documentRect = documentElement.getBoundingClientRect();
          /** @type {?} */

          var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
          /** @type {?} */

          var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
          return {
            top: top,
            left: left
          };
        }
        /**
         * Returns a stream that emits whenever the size of the viewport changes.
         * @param {?=} throttleTime Time in milliseconds to throttle the stream.
         * @return {?}
         */

      }, {
        key: "change",
        value: function change() {
          var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
          return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
        }
        /**
         * Updates the cached viewport size.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateViewportSize",
        value: function _updateViewportSize() {
          this._viewportSize = this._platform.isBrowser ? {
            width: window.innerWidth,
            height: window.innerHeight
          } : {
            width: 0,
            height: 0
          };
        }
      }]);

      return ViewportRuler;
    }();

    ViewportRuler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ViewportRuler.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    /** @nocollapse */


    ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ViewportRuler_Factory() {
        return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      },
      token: ViewportRuler,
      providedIn: "root"
    });
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentRuler
     * @param {?} platform
     * @param {?} ngZone
     * @return {?}
     */

    function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
      return parentRuler || new ViewportRuler(platform, ngZone);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var VIEWPORT_RULER_PROVIDER = {
      // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
      provide: ViewportRuler,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]],
      useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=scrolling.js.map

    /***/
  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js ***!
    \************************************************************************************/

  /*! exports provided: OWL_DATE_TIME_LOCALE, OWL_DATE_TIME_LOCALE_FACTORY, OWL_DATE_TIME_LOCALE_PROVIDER, DateTimeAdapter */

  /***/
  function node_modulesNgPickDatetimeDateTimeAdapterDateTimeAdapterClassJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE", function () {
      return OWL_DATE_TIME_LOCALE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE_FACTORY", function () {
      return OWL_DATE_TIME_LOCALE_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE_PROVIDER", function () {
      return OWL_DATE_TIME_LOCALE_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateTimeAdapter", function () {
      return DateTimeAdapter;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OWL_DATE_TIME_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('OWL_DATE_TIME_LOCALE', {
      providedIn: 'root',
      factory: OWL_DATE_TIME_LOCALE_FACTORY
    });

    function OWL_DATE_TIME_LOCALE_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]);
    }

    var OWL_DATE_TIME_LOCALE_PROVIDER = {
      provide: OWL_DATE_TIME_LOCALE,
      useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]
    };

    var DateTimeAdapter = function () {
      function DateTimeAdapter() {
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.millisecondsInDay = 86400000;
        this.milliseondsInMinute = 60000;
      }

      Object.defineProperty(DateTimeAdapter.prototype, "localeChanges", {
        get: function get() {
          return this._localeChanges;
        },
        enumerable: true,
        configurable: true
      });

      DateTimeAdapter.prototype.compare = function (first, second) {
        if (!this.isValid(first) || !this.isValid(second)) {
          throw Error('JSNativeDate: Cannot compare invalid dates.');
        }

        var dateFirst = this.clone(first);
        var dateSecond = this.clone(second);
        var diff = this.getTime(dateFirst) - this.getTime(dateSecond);

        if (diff < 0) {
          return -1;
        } else if (diff > 0) {
          return 1;
        } else {
          return diff;
        }
      };

      DateTimeAdapter.prototype.compareYear = function (first, second) {
        if (!this.isValid(first) || !this.isValid(second)) {
          throw Error('JSNativeDate: Cannot compare invalid dates.');
        }

        var yearLeft = this.getYear(first);
        var yearRight = this.getYear(second);
        var diff = yearLeft - yearRight;

        if (diff < 0) {
          return -1;
        } else if (diff > 0) {
          return 1;
        } else {
          return 0;
        }
      };

      DateTimeAdapter.prototype.deserialize = function (value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
          return value;
        }

        return this.invalid();
      };

      DateTimeAdapter.prototype.setLocale = function (locale) {
        this.locale = locale;

        this._localeChanges.next();
      };

      DateTimeAdapter.prototype.clampDate = function (date, min, max) {
        if (min && this.compare(date, min) < 0) {
          return min;
        }

        if (max && this.compare(date, max) > 0) {
          return max;
        }

        return date;
      };

      return DateTimeAdapter;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js ***!
    \***********************************************************************************/

  /*! exports provided: OWL_DATE_TIME_FORMATS */

  /***/
  function node_modulesNgPickDatetimeDateTimeAdapterDateTimeFormatClassJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_FORMATS", function () {
      return OWL_DATE_TIME_FORMATS;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OWL_DATE_TIME_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('OWL_DATE_TIME_FORMATS');
    /***/
  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-adapter.class.js":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-adapter.class.js ***!
    \*******************************************************************************************/

  /*! exports provided: NativeDateTimeAdapter, ɵ0 */

  /***/
  function node_modulesNgPickDatetimeDateTimeAdapterNativeDateTimeAdapterClassJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateTimeAdapter", function () {
      return NativeDateTimeAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");

    var __extends = undefined && undefined.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __assign = undefined && undefined.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var DEFAULT_MONTH_NAMES = {
      'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
    };
    var DEFAULT_DAY_OF_WEEK_NAMES = {
      'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };

    var ɵ0 = function ɵ0(i) {
      return String(i + 1);
    };

    var DEFAULT_DATE_NAMES = range(31, ɵ0);
    var SUPPORTS_INTL_API = typeof Intl !== 'undefined';
    var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;

    function range(length, valueFunction) {
      var valuesArray = Array(length);

      for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
      }

      return valuesArray;
    }

    var NativeDateTimeAdapter = function (_super) {
      __extends(NativeDateTimeAdapter, _super);

      function NativeDateTimeAdapter(owlDateTimeLocale, platform) {
        var _this = _super.call(this) || this;

        _this.owlDateTimeLocale = owlDateTimeLocale;

        _super.prototype.setLocale.call(_this, owlDateTimeLocale);

        _this.useUtcForDisplay = !platform.TRIDENT;
        _this._clampDate = platform.TRIDENT || platform.EDGE;
        return _this;
      }

      NativeDateTimeAdapter.prototype.getYear = function (date) {
        return date.getFullYear();
      };

      NativeDateTimeAdapter.prototype.getMonth = function (date) {
        return date.getMonth();
      };

      NativeDateTimeAdapter.prototype.getDay = function (date) {
        return date.getDay();
      };

      NativeDateTimeAdapter.prototype.getDate = function (date) {
        return date.getDate();
      };

      NativeDateTimeAdapter.prototype.getHours = function (date) {
        return date.getHours();
      };

      NativeDateTimeAdapter.prototype.getMinutes = function (date) {
        return date.getMinutes();
      };

      NativeDateTimeAdapter.prototype.getSeconds = function (date) {
        return date.getSeconds();
      };

      NativeDateTimeAdapter.prototype.getTime = function (date) {
        return date.getTime();
      };

      NativeDateTimeAdapter.prototype.getNumDaysInMonth = function (date) {
        var lastDateOfMonth = this.createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0);
        return this.getDate(lastDateOfMonth);
      };

      NativeDateTimeAdapter.prototype.differenceInCalendarDays = function (dateLeft, dateRight) {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
          var dateLeftStartOfDay = this.createDate(this.getYear(dateLeft), this.getMonth(dateLeft), this.getDate(dateLeft));
          var dateRightStartOfDay = this.createDate(this.getYear(dateRight), this.getMonth(dateRight), this.getDate(dateRight));
          var timeStampLeft = this.getTime(dateLeftStartOfDay) - dateLeftStartOfDay.getTimezoneOffset() * this.milliseondsInMinute;
          var timeStampRight = this.getTime(dateRightStartOfDay) - dateRightStartOfDay.getTimezoneOffset() * this.milliseondsInMinute;
          return Math.round((timeStampLeft - timeStampRight) / this.millisecondsInDay);
        } else {
          return null;
        }
      };

      NativeDateTimeAdapter.prototype.getYearName = function (date) {
        if (SUPPORTS_INTL_API) {
          var dtf = new Intl.DateTimeFormat(this.locale, {
            year: 'numeric',
            timeZone: 'utc'
          });
          return this.stripDirectionalityCharacters(this._format(dtf, date));
        }

        return String(this.getYear(date));
      };

      NativeDateTimeAdapter.prototype.getMonthNames = function (style) {
        var _this = this;

        if (SUPPORTS_INTL_API) {
          var dtf_1 = new Intl.DateTimeFormat(this.locale, {
            month: style,
            timeZone: 'utc'
          });
          return range(12, function (i) {
            return _this.stripDirectionalityCharacters(_this._format(dtf_1, new Date(2017, i, 1)));
          });
        }

        return DEFAULT_MONTH_NAMES[style];
      };

      NativeDateTimeAdapter.prototype.getDayOfWeekNames = function (style) {
        var _this = this;

        if (SUPPORTS_INTL_API) {
          var dtf_2 = new Intl.DateTimeFormat(this.locale, {
            weekday: style,
            timeZone: 'utc'
          });
          return range(7, function (i) {
            return _this.stripDirectionalityCharacters(_this._format(dtf_2, new Date(2017, 0, i + 1)));
          });
        }

        return DEFAULT_DAY_OF_WEEK_NAMES[style];
      };

      NativeDateTimeAdapter.prototype.getDateNames = function () {
        var _this = this;

        if (SUPPORTS_INTL_API) {
          var dtf_3 = new Intl.DateTimeFormat(this.locale, {
            day: 'numeric',
            timeZone: 'utc'
          });
          return range(31, function (i) {
            return _this.stripDirectionalityCharacters(_this._format(dtf_3, new Date(2017, 0, i + 1)));
          });
        }

        return DEFAULT_DATE_NAMES;
      };

      NativeDateTimeAdapter.prototype.toIso8601 = function (date) {
        return date.toISOString();
      };

      NativeDateTimeAdapter.prototype.isEqual = function (dateLeft, dateRight) {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
          return dateLeft.getTime() === dateRight.getTime();
        } else {
          return false;
        }
      };

      NativeDateTimeAdapter.prototype.isSameDay = function (dateLeft, dateRight) {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
          var dateLeftStartOfDay = this.clone(dateLeft);
          var dateRightStartOfDay = this.clone(dateRight);
          dateLeftStartOfDay.setHours(0, 0, 0, 0);
          dateRightStartOfDay.setHours(0, 0, 0, 0);
          return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
        } else {
          return false;
        }
      };

      NativeDateTimeAdapter.prototype.isValid = function (date) {
        return date && !isNaN(date.getTime());
      };

      NativeDateTimeAdapter.prototype.invalid = function () {
        return new Date(NaN);
      };

      NativeDateTimeAdapter.prototype.isDateInstance = function (obj) {
        return obj instanceof Date;
      };

      NativeDateTimeAdapter.prototype.addCalendarYears = function (date, amount) {
        return this.addCalendarMonths(date, amount * 12);
      };

      NativeDateTimeAdapter.prototype.addCalendarMonths = function (date, amount) {
        var result = this.clone(date);
        amount = Number(amount);
        var desiredMonth = result.getMonth() + amount;
        var dateWithDesiredMonth = new Date(0);
        dateWithDesiredMonth.setFullYear(result.getFullYear(), desiredMonth, 1);
        dateWithDesiredMonth.setHours(0, 0, 0, 0);
        var daysInMonth = this.getNumDaysInMonth(dateWithDesiredMonth);
        result.setMonth(desiredMonth, Math.min(daysInMonth, result.getDate()));
        return result;
      };

      NativeDateTimeAdapter.prototype.addCalendarDays = function (date, amount) {
        var result = this.clone(date);
        amount = Number(amount);
        result.setDate(result.getDate() + amount);
        return result;
      };

      NativeDateTimeAdapter.prototype.setHours = function (date, amount) {
        var result = this.clone(date);
        result.setHours(amount);
        return result;
      };

      NativeDateTimeAdapter.prototype.setMinutes = function (date, amount) {
        var result = this.clone(date);
        result.setMinutes(amount);
        return result;
      };

      NativeDateTimeAdapter.prototype.setSeconds = function (date, amount) {
        var result = this.clone(date);
        result.setSeconds(amount);
        return result;
      };

      NativeDateTimeAdapter.prototype.createDate = function (year, month, date, hours, minutes, seconds) {
        if (hours === void 0) {
          hours = 0;
        }

        if (minutes === void 0) {
          minutes = 0;
        }

        if (seconds === void 0) {
          seconds = 0;
        }

        if (month < 0 || month > 11) {
          throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }

        if (date < 1) {
          throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }

        if (hours < 0 || hours > 23) {
          throw Error("Invalid hours \"" + hours + "\". Hours has to be between 0 and 23.");
        }

        if (minutes < 0 || minutes > 59) {
          throw Error("Invalid minutes \"" + minutes + "\". Minutes has to between 0 and 59.");
        }

        if (seconds < 0 || seconds > 59) {
          throw Error("Invalid seconds \"" + seconds + "\". Seconds has to be between 0 and 59.");
        }

        var result = this.createDateWithOverflow(year, month, date, hours, minutes, seconds);

        if (result.getMonth() !== month) {
          throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }

        return result;
      };

      NativeDateTimeAdapter.prototype.clone = function (date) {
        return this.createDate(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHours(date), this.getMinutes(date), this.getSeconds(date));
      };

      NativeDateTimeAdapter.prototype.now = function () {
        return new Date();
      };

      NativeDateTimeAdapter.prototype.format = function (date, displayFormat) {
        if (!this.isValid(date)) {
          throw Error('JSNativeDate: Cannot format invalid date.');
        }

        if (SUPPORTS_INTL_API) {
          if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
            date = this.clone(date);
            date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
          }

          displayFormat = __assign({}, displayFormat, {
            timeZone: 'utc'
          });
          var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
          return this.stripDirectionalityCharacters(this._format(dtf, date));
        }

        return this.stripDirectionalityCharacters(date.toDateString());
      };

      NativeDateTimeAdapter.prototype.parse = function (value, parseFormat) {
        if (typeof value === 'number') {
          return new Date(value);
        }

        return value ? new Date(Date.parse(value)) : null;
      };

      NativeDateTimeAdapter.prototype.deserialize = function (value) {
        if (typeof value === 'string') {
          if (!value) {
            return null;
          }

          if (ISO_8601_REGEX.test(value)) {
            var date = new Date(value);

            if (this.isValid(date)) {
              return date;
            }
          }
        }

        return _super.prototype.deserialize.call(this, value);
      };

      NativeDateTimeAdapter.prototype.createDateWithOverflow = function (year, month, date, hours, minutes, seconds) {
        if (hours === void 0) {
          hours = 0;
        }

        if (minutes === void 0) {
          minutes = 0;
        }

        if (seconds === void 0) {
          seconds = 0;
        }

        var result = new Date(year, month, date, hours, minutes, seconds);

        if (year >= 0 && year < 100) {
          result.setFullYear(this.getYear(result) - 1900);
        }

        return result;
      };

      NativeDateTimeAdapter.prototype.stripDirectionalityCharacters = function (str) {
        return str.replace(/[\u200e\u200f]/g, '');
      };

      NativeDateTimeAdapter.prototype._format = function (dtf, date) {
        var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        return dtf.format(d);
      };

      NativeDateTimeAdapter = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["OWL_DATE_TIME_LOCALE"])), __metadata("design:paramtypes", [String, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]])], NativeDateTimeAdapter);
      return NativeDateTimeAdapter;
    }(_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"]);
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-format.class.js":
  /*!******************************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-format.class.js ***!
    \******************************************************************************************/

  /*! exports provided: OWL_NATIVE_DATE_TIME_FORMATS */

  /***/
  function node_modulesNgPickDatetimeDateTimeAdapterNativeDateTimeFormatClassJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_NATIVE_DATE_TIME_FORMATS", function () {
      return OWL_NATIVE_DATE_TIME_FORMATS;
    });

    var OWL_NATIVE_DATE_TIME_FORMATS = {
      parseInput: null,
      fullPickerInput: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      },
      datePickerInput: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      timePickerInput: {
        hour: 'numeric',
        minute: 'numeric'
      },
      monthYearLabel: {
        year: 'numeric',
        month: 'short'
      },
      dateA11yLabel: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      monthYearA11yLabel: {
        year: 'numeric',
        month: 'long'
      }
    };
    /***/
  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time.module.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/adapter/native-date-time.module.js ***!
    \************************************************************************************/

  /*! exports provided: NativeDateTimeModule, OwlNativeDateTimeModule, ɵ0 */

  /***/
  function node_modulesNgPickDatetimeDateTimeAdapterNativeDateTimeModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateTimeModule", function () {
      return NativeDateTimeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlNativeDateTimeModule", function () {
      return OwlNativeDateTimeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
    /* harmony import */


    var _native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./native-date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-adapter.class.js");
    /* harmony import */


    var _date_time_format_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./date-time-format.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
    /* harmony import */


    var _native_date_time_format_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./native-date-time-format.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-format.class.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var NativeDateTimeModule = function () {
      function NativeDateTimeModule() {}

      NativeDateTimeModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]],
        providers: [{
          provide: _date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"],
          useClass: _native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__["NativeDateTimeAdapter"]
        }]
      })], NativeDateTimeModule);
      return NativeDateTimeModule;
    }();

    var ɵ0 = _native_date_time_format_class__WEBPACK_IMPORTED_MODULE_5__["OWL_NATIVE_DATE_TIME_FORMATS"];

    var OwlNativeDateTimeModule = function () {
      function OwlNativeDateTimeModule() {}

      OwlNativeDateTimeModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [NativeDateTimeModule],
        providers: [{
          provide: _date_time_format_class__WEBPACK_IMPORTED_MODULE_4__["OWL_DATE_TIME_FORMATS"],
          useValue: ɵ0
        }]
      })], OwlNativeDateTimeModule);
      return OwlNativeDateTimeModule;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/calendar-body.component.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/calendar-body.component.js ***!
    \****************************************************************************/

  /*! exports provided: CalendarCell, OwlCalendarBodyComponent */

  /***/
  function node_modulesNgPickDatetimeDateTimeCalendarBodyComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarCell", function () {
      return CalendarCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlCalendarBodyComponent", function () {
      return OwlCalendarBodyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var CalendarCell = function () {
      function CalendarCell(value, displayValue, ariaLabel, enabled, out, cellClass) {
        if (out === void 0) {
          out = false;
        }

        if (cellClass === void 0) {
          cellClass = '';
        }

        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.out = out;
        this.cellClass = cellClass;
      }

      return CalendarCell;
    }();

    var OwlCalendarBodyComponent = function () {
      function OwlCalendarBodyComponent(elmRef, ngZone) {
        this.elmRef = elmRef;
        this.ngZone = ngZone;
        this.activeCell = 0;
        this.numCols = 7;
        this.cellRatio = 1;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      Object.defineProperty(OwlCalendarBodyComponent.prototype, "owlDTCalendarBodyClass", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarBodyComponent.prototype, "isInSingleMode", {
        get: function get() {
          return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarBodyComponent.prototype, "isInRangeMode", {
        get: function get() {
          return this.selectMode === 'range' || this.selectMode === 'rangeFrom' || this.selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
      });

      OwlCalendarBodyComponent.prototype.ngOnInit = function () {};

      OwlCalendarBodyComponent.prototype.selectCell = function (cell) {
        this.select.emit(cell);
      };

      OwlCalendarBodyComponent.prototype.isActiveCell = function (rowIndex, colIndex) {
        var cellNumber = rowIndex * this.numCols + colIndex;
        return cellNumber === this.activeCell;
      };

      OwlCalendarBodyComponent.prototype.isSelected = function (value) {
        if (!this.selectedValues || this.selectedValues.length === 0) {
          return false;
        }

        if (this.isInSingleMode) {
          return value === this.selectedValues[0];
        }

        if (this.isInRangeMode) {
          var fromValue = this.selectedValues[0];
          var toValue = this.selectedValues[1];
          return value === fromValue || value === toValue;
        }
      };

      OwlCalendarBodyComponent.prototype.isInRange = function (value) {
        if (this.isInRangeMode) {
          var fromValue = this.selectedValues[0];
          var toValue = this.selectedValues[1];

          if (fromValue !== null && toValue !== null) {
            return value >= fromValue && value <= toValue;
          } else {
            return value === fromValue || value === toValue;
          }
        }
      };

      OwlCalendarBodyComponent.prototype.isRangeFrom = function (value) {
        if (this.isInRangeMode) {
          var fromValue = this.selectedValues[0];
          return fromValue !== null && value === fromValue;
        }
      };

      OwlCalendarBodyComponent.prototype.isRangeTo = function (value) {
        if (this.isInRangeMode) {
          var toValue = this.selectedValues[1];
          return toValue !== null && value === toValue;
        }
      };

      OwlCalendarBodyComponent.prototype.focusActiveCell = function () {
        var _this = this;

        this.ngZone.runOutsideAngular(function () {
          _this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function () {
            _this.elmRef.nativeElement.querySelector('.owl-dt-calendar-cell-active').focus();
          });
        });
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlCalendarBodyComponent.prototype, "activeCell", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Array)], OwlCalendarBodyComponent.prototype, "rows", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlCalendarBodyComponent.prototype, "numCols", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlCalendarBodyComponent.prototype, "cellRatio", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], OwlCalendarBodyComponent.prototype, "todayValue", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Array)], OwlCalendarBodyComponent.prototype, "selectedValues", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], OwlCalendarBodyComponent.prototype, "selectMode", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlCalendarBodyComponent.prototype, "select", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-calendar-body'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlCalendarBodyComponent.prototype, "owlDTCalendarBodyClass", null);

      OwlCalendarBodyComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: '[owl-date-time-calendar-body]',
        exportAs: 'owlDateTimeCalendarBody',
        template: "<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\"><td *ngFor=\"let item of row; let colIndex = index\" class=\"owl-dt-calendar-cell {{item.cellClass}}\" [tabindex]=\"isActiveCell(rowIndex, colIndex) ? 0 : -1\" [class.owl-dt-calendar-cell-active]=\"isActiveCell(rowIndex, colIndex)\" [class.owl-dt-calendar-cell-disabled]=\"!item.enabled\" [class.owl-dt-calendar-cell-in-range]=\"isInRange(item.value)\" [class.owl-dt-calendar-cell-range-from]=\"isRangeFrom(item.value)\" [class.owl-dt-calendar-cell-range-to]=\"isRangeTo(item.value)\" [attr.aria-label]=\"item.ariaLabel\" [attr.aria-disabled]=\"!item.enabled || null\" [style.width.%]=\"100 / numCols\" [style.paddingTop.%]=\"50 * cellRatio / numCols\" [style.paddingBottom.%]=\"50 * cellRatio / numCols\" (click)=\"selectCell(item)\"><span class=\"owl-dt-calendar-cell-content\" [ngClass]=\"{\n                'owl-dt-calendar-cell-out': item.out,\n                'owl-dt-calendar-cell-today': item.value === todayValue,\n                'owl-dt-calendar-cell-selected': isSelected(item.value)\n              }\">{{item.displayValue}}</span></td></tr>",
        styles: [""],
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])], OwlCalendarBodyComponent);
      return OwlCalendarBodyComponent;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/calendar-month-view.component.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/calendar-month-view.component.js ***!
    \**********************************************************************************/

  /*! exports provided: OwlMonthViewComponent */

  /***/
  function node_modulesNgPickDatetimeDateTimeCalendarMonthViewComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlMonthViewComponent", function () {
      return OwlMonthViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _calendar_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./calendar-body.component */
    "./node_modules/ng-pick-datetime/date-time/calendar-body.component.js");
    /* harmony import */


    var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./adapter/date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
    /* harmony import */


    var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adapter/date-time-format.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var DAYS_PER_WEEK = 7;
    var WEEKS_PER_VIEW = 6;

    var OwlMonthViewComponent = function () {
      function OwlMonthViewComponent(cdRef, dateTimeAdapter, dateTimeFormats) {
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        this.hideOtherMonths = false;
        this._firstDayOfWeek = 0;
        this._selectMode = 'single';
        this._selecteds = [];
        this.localeSub = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this.initiated = false;
        this.selectedDates = [];
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pickerMomentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      Object.defineProperty(OwlMonthViewComponent.prototype, "firstDayOfWeek", {
        get: function get() {
          return this._firstDayOfWeek;
        },
        set: function set(val) {
          val = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceNumberProperty"])(val);

          if (val >= 0 && val <= 6 && val !== this._firstDayOfWeek) {
            this._firstDayOfWeek = val;

            if (this.initiated) {
              this.generateWeekDays();
              this.generateCalendar();
              this.cdRef.markForCheck();
            }
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "selectMode", {
        get: function get() {
          return this._selectMode;
        },
        set: function set(val) {
          this._selectMode = val;

          if (this.initiated) {
            this.generateCalendar();
            this.cdRef.markForCheck();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "selected", {
        get: function get() {
          return this._selected;
        },
        set: function set(value) {
          var oldSelected = this._selected;
          value = this.dateTimeAdapter.deserialize(value);
          this._selected = this.getValidDate(value);

          if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
            this.setSelectedDates();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "selecteds", {
        get: function get() {
          return this._selecteds;
        },
        set: function set(values) {
          var _this = this;

          this._selecteds = values.map(function (v) {
            v = _this.dateTimeAdapter.deserialize(v);
            return _this.getValidDate(v);
          });
          this.setSelectedDates();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "pickerMoment", {
        get: function get() {
          return this._pickerMoment;
        },
        set: function set(value) {
          var oldMoment = this._pickerMoment;
          value = this.dateTimeAdapter.deserialize(value);
          this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
          this.firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this._pickerMoment), this.dateTimeAdapter.getMonth(this._pickerMoment), 1);

          if (!this.isSameMonth(oldMoment, this._pickerMoment) && this.initiated) {
            this.generateCalendar();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "dateFilter", {
        get: function get() {
          return this._dateFilter;
        },
        set: function set(filter) {
          this._dateFilter = filter;

          if (this.initiated) {
            this.generateCalendar();
            this.cdRef.markForCheck();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "minDate", {
        get: function get() {
          return this._minDate;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this._minDate = this.getValidDate(value);

          if (this.initiated) {
            this.generateCalendar();
            this.cdRef.markForCheck();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "maxDate", {
        get: function get() {
          return this._maxDate;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this._maxDate = this.getValidDate(value);

          if (this.initiated) {
            this.generateCalendar();
            this.cdRef.markForCheck();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "weekdays", {
        get: function get() {
          return this._weekdays;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "days", {
        get: function get() {
          return this._days;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "activeCell", {
        get: function get() {
          if (this.pickerMoment) {
            return this.dateTimeAdapter.getDate(this.pickerMoment) + this.firstRowOffset - 1;
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "isInSingleMode", {
        get: function get() {
          return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "isInRangeMode", {
        get: function get() {
          return this.selectMode === 'range' || this.selectMode === 'rangeFrom' || this.selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMonthViewComponent.prototype, "owlDTCalendarView", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });

      OwlMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;

        this.generateWeekDays();
        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(function () {
          _this.generateWeekDays();

          _this.generateCalendar();

          _this.cdRef.markForCheck();
        });
      };

      OwlMonthViewComponent.prototype.ngAfterContentInit = function () {
        this.generateCalendar();
        this.initiated = true;
      };

      OwlMonthViewComponent.prototype.ngOnDestroy = function () {
        this.localeSub.unsubscribe();
      };

      OwlMonthViewComponent.prototype.selectCalendarCell = function (cell) {
        if (!cell.enabled || this.hideOtherMonths && cell.out) {
          return;
        }

        this.selectDate(cell.value);
      };

      OwlMonthViewComponent.prototype.selectDate = function (date) {
        var daysDiff = date - 1;
        var selected = this.dateTimeAdapter.addCalendarDays(this.firstDateOfMonth, daysDiff);
        this.selectedChange.emit(selected);
        this.userSelection.emit();
      };

      OwlMonthViewComponent.prototype.handleCalendarKeydown = function (event) {
        var moment;

        switch (event.keyCode) {
          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["LEFT_ARROW"]:
            moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, -1);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["RIGHT_ARROW"]:
            moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 1);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"]:
            moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, -7);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"]:
            moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 7);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"]:
            moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 1 - this.dateTimeAdapter.getDate(this.pickerMoment));
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]:
            moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment) - this.dateTimeAdapter.getDate(this.pickerMoment));
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["PAGE_UP"]:
            moment = event.altKey ? this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1) : this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["PAGE_DOWN"]:
            moment = event.altKey ? this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1) : this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"]:
            if (!this.dateFilter || this.dateFilter(this.pickerMoment)) {
              this.selectDate(this.dateTimeAdapter.getDate(this.pickerMoment));
            }

            break;

          default:
            return;
        }

        this.focusActiveCell();
        event.preventDefault();
      };

      OwlMonthViewComponent.prototype.generateWeekDays = function () {
        var longWeekdays = this.dateTimeAdapter.getDayOfWeekNames('long');
        var shortWeekdays = this.dateTimeAdapter.getDayOfWeekNames('short');
        var narrowWeekdays = this.dateTimeAdapter.getDayOfWeekNames('narrow');
        var firstDayOfWeek = this.firstDayOfWeek;
        var weekdays = longWeekdays.map(function (_long, i) {
          return {
            "long": _long,
            "short": shortWeekdays[i],
            narrow: narrowWeekdays[i]
          };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        this.dateNames = this.dateTimeAdapter.getDateNames();
        return;
      };

      OwlMonthViewComponent.prototype.generateCalendar = function () {
        if (!this.pickerMoment) {
          return;
        }

        this.todayDate = null;
        var startWeekdayOfMonth = this.dateTimeAdapter.getDay(this.firstDateOfMonth);
        var firstDayOfWeek = this.firstDayOfWeek;
        var daysDiff = 0 - (startWeekdayOfMonth + (DAYS_PER_WEEK - firstDayOfWeek)) % DAYS_PER_WEEK;
        this.firstRowOffset = Math.abs(daysDiff);
        this._days = [];

        for (var i = 0; i < WEEKS_PER_VIEW; i++) {
          var week = [];

          for (var j = 0; j < DAYS_PER_WEEK; j++) {
            var date = this.dateTimeAdapter.addCalendarDays(this.firstDateOfMonth, daysDiff);
            var dateCell = this.createDateCell(date, daysDiff);

            if (this.dateTimeAdapter.isSameDay(this.dateTimeAdapter.now(), date)) {
              this.todayDate = daysDiff + 1;
            }

            week.push(dateCell);
            daysDiff += 1;
          }

          this._days.push(week);
        }

        this.setSelectedDates();
      };

      OwlMonthViewComponent.prototype.createDateCell = function (date, daysDiff) {
        var daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment);
        var dateNum = this.dateTimeAdapter.getDate(date);
        var dateName = dateNum.toString();
        var ariaLabel = this.dateTimeAdapter.format(date, this.dateTimeFormats.dateA11yLabel);
        var enabled = this.isDateEnabled(date);
        var dayValue = daysDiff + 1;
        var out = dayValue < 1 || dayValue > daysInMonth;
        var cellClass = 'owl-dt-day-' + this.dateTimeAdapter.getDay(date);
        return new _calendar_body_component__WEBPACK_IMPORTED_MODULE_1__["CalendarCell"](dayValue, dateName, ariaLabel, enabled, out, cellClass);
      };

      OwlMonthViewComponent.prototype.isDateEnabled = function (date) {
        return !!date && (!this.dateFilter || this.dateFilter(date)) && (!this.minDate || this.dateTimeAdapter.compare(date, this.minDate) >= 0) && (!this.maxDate || this.dateTimeAdapter.compare(date, this.maxDate) <= 0);
      };

      OwlMonthViewComponent.prototype.getValidDate = function (obj) {
        return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
      };

      OwlMonthViewComponent.prototype.isSameMonth = function (dateLeft, dateRight) {
        return !!(dateLeft && dateRight && this.dateTimeAdapter.isValid(dateLeft) && this.dateTimeAdapter.isValid(dateRight) && this.dateTimeAdapter.getYear(dateLeft) === this.dateTimeAdapter.getYear(dateRight) && this.dateTimeAdapter.getMonth(dateLeft) === this.dateTimeAdapter.getMonth(dateRight));
      };

      OwlMonthViewComponent.prototype.setSelectedDates = function () {
        var _this = this;

        this.selectedDates = [];

        if (!this.firstDateOfMonth) {
          return;
        }

        if (this.isInSingleMode && this.selected) {
          var dayDiff = this.dateTimeAdapter.differenceInCalendarDays(this.selected, this.firstDateOfMonth);
          this.selectedDates[0] = dayDiff + 1;
          return;
        }

        if (this.isInRangeMode && this.selecteds) {
          this.selectedDates = this.selecteds.map(function (selected) {
            if (_this.dateTimeAdapter.isValid(selected)) {
              var dayDiff = _this.dateTimeAdapter.differenceInCalendarDays(selected, _this.firstDateOfMonth);

              return dayDiff + 1;
            } else {
              return null;
            }
          });
        }
      };

      OwlMonthViewComponent.prototype.focusActiveCell = function () {
        this.calendarBodyElm.focusActiveCell();
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], OwlMonthViewComponent.prototype, "hideOtherMonths", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], OwlMonthViewComponent.prototype, "firstDayOfWeek", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], OwlMonthViewComponent.prototype, "selectMode", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlMonthViewComponent.prototype, "selected", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], OwlMonthViewComponent.prototype, "selecteds", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlMonthViewComponent.prototype, "pickerMoment", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Function), __metadata("design:paramtypes", [Function])], OwlMonthViewComponent.prototype, "dateFilter", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlMonthViewComponent.prototype, "minDate", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlMonthViewComponent.prototype, "maxDate", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlMonthViewComponent.prototype, "selectedChange", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlMonthViewComponent.prototype, "userSelection", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], OwlMonthViewComponent.prototype, "pickerMomentChange", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_calendar_body_component__WEBPACK_IMPORTED_MODULE_1__["OwlCalendarBodyComponent"]), __metadata("design:type", _calendar_body_component__WEBPACK_IMPORTED_MODULE_1__["OwlCalendarBodyComponent"])], OwlMonthViewComponent.prototype, "calendarBodyElm", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-calendar-view'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlMonthViewComponent.prototype, "owlDTCalendarView", null);

      OwlMonthViewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'owl-date-time-month-view',
        exportAs: 'owlYearView',
        template: "<table class=\"owl-dt-calendar-table owl-dt-calendar-month-table\" [class.owl-dt-calendar-only-current-month]=\"hideOtherMonths\"><thead class=\"owl-dt-calendar-header\"><tr class=\"owl-dt-weekdays\"><th *ngFor=\"let weekday of weekdays\" [attr.aria-label]=\"weekday.long\" class=\"owl-dt-weekday\" scope=\"col\"><span>{{weekday.short}}</span></th></tr><tr><th class=\"owl-dt-calendar-table-divider\" aria-hidden=\"true\" colspan=\"7\"></th></tr></thead><tbody owl-date-time-calendar-body role=\"grid\" [rows]=\"days\" [todayValue]=\"todayDate\" [selectedValues]=\"selectedDates\" [selectMode]=\"selectMode\" [activeCell]=\"activeCell\" (keydown)=\"handleCalendarKeydown($event)\" (select)=\"selectCalendarCell($event)\"></tbody></table>",
        styles: [""],
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_FORMATS"])), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"], Object])], OwlMonthViewComponent);
      return OwlMonthViewComponent;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/calendar-multi-year-view.component.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/calendar-multi-year-view.component.js ***!
    \***************************************************************************************/

  /*! exports provided: YEARS_PER_ROW, YEAR_ROWS, OwlMultiYearViewComponent */

  /***/
  function node_modulesNgPickDatetimeDateTimeCalendarMultiYearViewComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YEARS_PER_ROW", function () {
      return YEARS_PER_ROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YEAR_ROWS", function () {
      return YEAR_ROWS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlMultiYearViewComponent", function () {
      return OwlMultiYearViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./adapter/date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
    /* harmony import */


    var _calendar_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./calendar-body.component */
    "./node_modules/ng-pick-datetime/date-time/calendar-body.component.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./date-time-picker-intl.service */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var YEARS_PER_ROW = 3;
    var YEAR_ROWS = 7;

    var OwlMultiYearViewComponent = function () {
      function OwlMultiYearViewComponent(cdRef, pickerIntl, dateTimeAdapter) {
        this.cdRef = cdRef;
        this.pickerIntl = pickerIntl;
        this.dateTimeAdapter = dateTimeAdapter;
        this._selectMode = 'single';
        this._selecteds = [];
        this.initiated = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pickerMomentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyboardEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      Object.defineProperty(OwlMultiYearViewComponent.prototype, "selectMode", {
        get: function get() {
          return this._selectMode;
        },
        set: function set(val) {
          this._selectMode = val;

          if (this.initiated) {
            this.setSelectedYears();
            this.cdRef.markForCheck();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "selected", {
        get: function get() {
          return this._selected;
        },
        set: function set(value) {
          var oldSelected = this._selected;
          value = this.dateTimeAdapter.deserialize(value);
          this._selected = this.getValidDate(value);

          if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
            this.setSelectedYears();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "selecteds", {
        get: function get() {
          return this._selecteds;
        },
        set: function set(values) {
          var _this = this;

          this._selecteds = values.map(function (v) {
            v = _this.dateTimeAdapter.deserialize(v);
            return _this.getValidDate(v);
          });
          this.setSelectedYears();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "pickerMoment", {
        get: function get() {
          return this._pickerMoment;
        },
        set: function set(value) {
          var oldMoment = this._pickerMoment;
          value = this.dateTimeAdapter.deserialize(value);
          this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();

          if (oldMoment && this._pickerMoment && !this.isSameYearList(oldMoment, this._pickerMoment)) {
            this.generateYearList();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "dateFilter", {
        get: function get() {
          return this._dateFilter;
        },
        set: function set(filter) {
          this._dateFilter = filter;

          if (this.initiated) {
            this.generateYearList();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "minDate", {
        get: function get() {
          return this._minDate;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this._minDate = this.getValidDate(value);

          if (this.initiated) {
            this.generateYearList();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "maxDate", {
        get: function get() {
          return this._maxDate;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this._maxDate = this.getValidDate(value);

          if (this.initiated) {
            this.generateYearList();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "todayYear", {
        get: function get() {
          return this._todayYear;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "years", {
        get: function get() {
          return this._years;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "selectedYears", {
        get: function get() {
          return this._selectedYears;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "isInSingleMode", {
        get: function get() {
          return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "isInRangeMode", {
        get: function get() {
          return this.selectMode === 'range' || this.selectMode === 'rangeFrom' || this.selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "activeCell", {
        get: function get() {
          if (this._pickerMoment) {
            return this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS);
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "tableHeader", {
        get: function get() {
          if (this._years && this._years.length > 0) {
            return this._years[0][0].displayValue + " ~ " + this._years[YEAR_ROWS - 1][YEARS_PER_ROW - 1].displayValue;
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "prevButtonLabel", {
        get: function get() {
          return this.pickerIntl.prevMultiYearLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "nextButtonLabel", {
        get: function get() {
          return this.pickerIntl.nextMultiYearLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "owlDTCalendarView", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlMultiYearViewComponent.prototype, "owlDTCalendarMultiYearView", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });

      OwlMultiYearViewComponent.prototype.ngOnInit = function () {};

      OwlMultiYearViewComponent.prototype.ngAfterContentInit = function () {
        this._todayYear = this.dateTimeAdapter.getYear(this.dateTimeAdapter.now());
        this.generateYearList();
        this.initiated = true;
      };

      OwlMultiYearViewComponent.prototype.selectCalendarCell = function (cell) {
        this.selectYear(cell.value);
      };

      OwlMultiYearViewComponent.prototype.selectYear = function (year) {
        this.yearSelected.emit(this.dateTimeAdapter.createDate(year, 0, 1));
        var firstDateOfMonth = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.getMonth(this.pickerMoment), 1);
        var daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth);
        var selected = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.getMonth(this.pickerMoment), Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
        this.change.emit(selected);
      };

      OwlMultiYearViewComponent.prototype.prevYearList = function (event) {
        this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1 * YEAR_ROWS * YEARS_PER_ROW);
        this.generateYearList();
        event.preventDefault();
      };

      OwlMultiYearViewComponent.prototype.nextYearList = function (event) {
        this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, YEAR_ROWS * YEARS_PER_ROW);
        this.generateYearList();
        event.preventDefault();
      };

      OwlMultiYearViewComponent.prototype.generateYearList = function () {
        this._years = [];
        var pickerMomentYear = this.dateTimeAdapter.getYear(this._pickerMoment);
        var offset = pickerMomentYear % (YEARS_PER_ROW * YEAR_ROWS);

        for (var i = 0; i < YEAR_ROWS; i++) {
          var row = [];

          for (var j = 0; j < YEARS_PER_ROW; j++) {
            var year = pickerMomentYear - offset + (j + i * YEARS_PER_ROW);
            var yearCell = this.createYearCell(year);
            row.push(yearCell);
          }

          this._years.push(row);
        }

        return;
      };

      OwlMultiYearViewComponent.prototype.previousEnabled = function () {
        if (!this.minDate) {
          return true;
        }

        return !this.minDate || !this.isSameYearList(this._pickerMoment, this.minDate);
      };

      OwlMultiYearViewComponent.prototype.nextEnabled = function () {
        return !this.maxDate || !this.isSameYearList(this._pickerMoment, this.maxDate);
      };

      OwlMultiYearViewComponent.prototype.handleCalendarKeydown = function (event) {
        var moment;

        switch (event.keyCode) {
          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
            moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
            moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, 1);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
            moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1 * YEARS_PER_ROW);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
            moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, YEARS_PER_ROW);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
            moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS));
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
            moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, YEARS_PER_ROW * YEAR_ROWS - this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS) - 1);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
            moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? -10 * (YEARS_PER_ROW * YEAR_ROWS) : -1 * (YEARS_PER_ROW * YEAR_ROWS));
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
            moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? 10 * (YEARS_PER_ROW * YEAR_ROWS) : YEARS_PER_ROW * YEAR_ROWS);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]:
            this.selectYear(this.dateTimeAdapter.getYear(this._pickerMoment));
            this.keyboardEnter.emit();
            break;

          default:
            return;
        }

        this.focusActiveCell();
        event.preventDefault();
      };

      OwlMultiYearViewComponent.prototype.createYearCell = function (year) {
        var startDateOfYear = this.dateTimeAdapter.createDate(year, 0, 1);
        var ariaLabel = this.dateTimeAdapter.getYearName(startDateOfYear);
        var cellClass = 'owl-dt-year-' + year;
        return new _calendar_body_component__WEBPACK_IMPORTED_MODULE_2__["CalendarCell"](year, year.toString(), ariaLabel, this.isYearEnabled(year), false, cellClass);
      };

      OwlMultiYearViewComponent.prototype.setSelectedYears = function () {
        var _this = this;

        this._selectedYears = [];

        if (this.isInSingleMode && this.selected) {
          this._selectedYears[0] = this.dateTimeAdapter.getYear(this.selected);
        }

        if (this.isInRangeMode && this.selecteds) {
          this._selectedYears = this.selecteds.map(function (selected) {
            if (_this.dateTimeAdapter.isValid(selected)) {
              return _this.dateTimeAdapter.getYear(selected);
            } else {
              return null;
            }
          });
        }
      };

      OwlMultiYearViewComponent.prototype.isYearEnabled = function (year) {
        if (year === undefined || year === null || this.maxDate && year > this.dateTimeAdapter.getYear(this.maxDate) || this.minDate && year < this.dateTimeAdapter.getYear(this.minDate)) {
          return false;
        }

        if (!this.dateFilter) {
          return true;
        }

        var firstOfYear = this.dateTimeAdapter.createDate(year, 0, 1);

        for (var date = firstOfYear; this.dateTimeAdapter.getYear(date) == year; date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
          if (this.dateFilter(date)) {
            return true;
          }
        }

        return false;
      };

      OwlMultiYearViewComponent.prototype.isSameYearList = function (date1, date2) {
        return Math.floor(this.dateTimeAdapter.getYear(date1) / (YEARS_PER_ROW * YEAR_ROWS)) === Math.floor(this.dateTimeAdapter.getYear(date2) / (YEARS_PER_ROW * YEAR_ROWS));
      };

      OwlMultiYearViewComponent.prototype.getValidDate = function (obj) {
        return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
      };

      OwlMultiYearViewComponent.prototype.focusActiveCell = function () {
        this.calendarBodyElm.focusActiveCell();
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], OwlMultiYearViewComponent.prototype, "selectMode", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlMultiYearViewComponent.prototype, "selected", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], OwlMultiYearViewComponent.prototype, "selecteds", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlMultiYearViewComponent.prototype, "pickerMoment", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Function), __metadata("design:paramtypes", [Function])], OwlMultiYearViewComponent.prototype, "dateFilter", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlMultiYearViewComponent.prototype, "minDate", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlMultiYearViewComponent.prototype, "maxDate", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlMultiYearViewComponent.prototype, "change", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlMultiYearViewComponent.prototype, "yearSelected", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], OwlMultiYearViewComponent.prototype, "pickerMomentChange", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], OwlMultiYearViewComponent.prototype, "keyboardEnter", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_calendar_body_component__WEBPACK_IMPORTED_MODULE_2__["OwlCalendarBodyComponent"]), __metadata("design:type", _calendar_body_component__WEBPACK_IMPORTED_MODULE_2__["OwlCalendarBodyComponent"])], OwlMultiYearViewComponent.prototype, "calendarBodyElm", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-calendar-view'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlMultiYearViewComponent.prototype, "owlDTCalendarView", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-calendar-multi-year-view'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlMultiYearViewComponent.prototype, "owlDTCalendarMultiYearView", null);

      OwlMultiYearViewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'owl-date-time-multi-year-view',
        template: "<button class=\"owl-dt-control-button owl-dt-control-arrow-button\" [disabled]=\"!previousEnabled()\" [attr.aria-label]=\"prevButtonLabel\" type=\"button\" tabindex=\"0\" (click)=\"prevYearList($event)\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\"><!-- <editor-fold desc=\"SVG Arrow Left\"> --> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250.738 250.738\" style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\" width=\"100%\" height=\"100%\"><path style=\"fill-rule: evenodd; clip-rule: evenodd;\" d=\"M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z\"/></svg><!-- </editor-fold> --></span></button><table class=\"owl-dt-calendar-table owl-dt-calendar-multi-year-table\"><thead class=\"owl-dt-calendar-header\"><tr><th colspan=\"3\">{{tableHeader}}</th></tr></thead><tbody owl-date-time-calendar-body role=\"grid\" [rows]=\"years\" [numCols]=\"3\" [cellRatio]=\"3 / 7\" [activeCell]=\"activeCell\" [todayValue]=\"todayYear\" [selectedValues]=\"selectedYears\" [selectMode]=\"selectMode\" (keydown)=\"handleCalendarKeydown($event)\" (select)=\"selectCalendarCell($event)\"></tbody></table><button class=\"owl-dt-control-button owl-dt-control-arrow-button\" [disabled]=\"!nextEnabled()\" [attr.aria-label]=\"nextButtonLabel\" type=\"button\" tabindex=\"0\" (click)=\"nextYearList($event)\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\"><!-- <editor-fold desc=\"SVG Arrow Right\"> --> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250.738 250.738\" style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\"><path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                C197.237,120.447,195.534,115.448,191.75,111.689z\"/></svg><!-- </editor-fold> --></span></button>",
        styles: [""],
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_4__["OwlDateTimeIntl"], _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeAdapter"]])], OwlMultiYearViewComponent);
      return OwlMultiYearViewComponent;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/calendar-year-view.component.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/calendar-year-view.component.js ***!
    \*********************************************************************************/

  /*! exports provided: OwlYearViewComponent */

  /***/
  function node_modulesNgPickDatetimeDateTimeCalendarYearViewComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlYearViewComponent", function () {
      return OwlYearViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _calendar_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./calendar-body.component */
    "./node_modules/ng-pick-datetime/date-time/calendar-body.component.js");
    /* harmony import */


    var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./adapter/date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
    /* harmony import */


    var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adapter/date-time-format.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var MONTHS_PER_YEAR = 12;
    var MONTHS_PER_ROW = 3;

    var OwlYearViewComponent = function () {
      function OwlYearViewComponent(cdRef, dateTimeAdapter, dateTimeFormats) {
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        this._selectMode = 'single';
        this._selecteds = [];
        this.localeSub = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this.initiated = false;
        this.selectedMonths = [];
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pickerMomentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyboardEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.monthNames = this.dateTimeAdapter.getMonthNames('short');
      }

      Object.defineProperty(OwlYearViewComponent.prototype, "selectMode", {
        get: function get() {
          return this._selectMode;
        },
        set: function set(val) {
          this._selectMode = val;

          if (this.initiated) {
            this.generateMonthList();
            this.cdRef.markForCheck();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlYearViewComponent.prototype, "selected", {
        get: function get() {
          return this._selected;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this._selected = this.getValidDate(value);
          this.setSelectedMonths();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlYearViewComponent.prototype, "selecteds", {
        get: function get() {
          return this._selecteds;
        },
        set: function set(values) {
          this._selecteds = [];

          for (var i = 0; i < values.length; i++) {
            var value = this.dateTimeAdapter.deserialize(values[i]);

            this._selecteds.push(this.getValidDate(value));
          }

          this.setSelectedMonths();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlYearViewComponent.prototype, "pickerMoment", {
        get: function get() {
          return this._pickerMoment;
        },
        set: function set(value) {
          var oldMoment = this._pickerMoment;
          value = this.dateTimeAdapter.deserialize(value);
          this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();

          if (!this.hasSameYear(oldMoment, this._pickerMoment) && this.initiated) {
            this.generateMonthList();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlYearViewComponent.prototype, "dateFilter", {
        get: function get() {
          return this._dateFilter;
        },
        set: function set(filter) {
          this._dateFilter = filter;

          if (this.initiated) {
            this.generateMonthList();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlYearViewComponent.prototype, "minDate", {
        get: function get() {
          return this._minDate;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this._minDate = this.getValidDate(value);

          if (this.initiated) {
            this.generateMonthList();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlYearViewComponent.prototype, "maxDate", {
        get: function get() {
          return this._maxDate;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this._maxDate = this.getValidDate(value);

          if (this.initiated) {
            this.generateMonthList();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlYearViewComponent.prototype, "months", {
        get: function get() {
          return this._months;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlYearViewComponent.prototype, "activeCell", {
        get: function get() {
          if (this._pickerMoment) {
            return this.dateTimeAdapter.getMonth(this._pickerMoment);
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlYearViewComponent.prototype, "isInSingleMode", {
        get: function get() {
          return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlYearViewComponent.prototype, "isInRangeMode", {
        get: function get() {
          return this.selectMode === 'range' || this.selectMode === 'rangeFrom' || this.selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlYearViewComponent.prototype, "owlDTCalendarView", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });

      OwlYearViewComponent.prototype.ngOnInit = function () {
        var _this = this;

        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(function () {
          _this.generateMonthList();

          _this.cdRef.markForCheck();
        });
      };

      OwlYearViewComponent.prototype.ngAfterContentInit = function () {
        this.generateMonthList();
        this.initiated = true;
      };

      OwlYearViewComponent.prototype.ngOnDestroy = function () {
        this.localeSub.unsubscribe();
      };

      OwlYearViewComponent.prototype.selectCalendarCell = function (cell) {
        this.selectMonth(cell.value);
      };

      OwlYearViewComponent.prototype.selectMonth = function (month) {
        var firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
        this.monthSelected.emit(firstDateOfMonth);
        var daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth);
        var result = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
        this.change.emit(result);
      };

      OwlYearViewComponent.prototype.handleCalendarKeydown = function (event) {
        var moment;

        switch (event.keyCode) {
          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["LEFT_ARROW"]:
            moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["RIGHT_ARROW"]:
            moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"]:
            moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -3);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"]:
            moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 3);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"]:
            moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -this.dateTimeAdapter.getMonth(this.pickerMoment));
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]:
            moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 11 - this.dateTimeAdapter.getMonth(this.pickerMoment));
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["PAGE_UP"]:
            moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? -10 : -1);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["PAGE_DOWN"]:
            moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? 10 : 1);
            this.pickerMomentChange.emit(moment);
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"]:
            this.selectMonth(this.dateTimeAdapter.getMonth(this.pickerMoment));
            this.keyboardEnter.emit();
            break;

          default:
            return;
        }

        this.focusActiveCell();
        event.preventDefault();
      };

      OwlYearViewComponent.prototype.generateMonthList = function () {
        if (!this.pickerMoment) {
          return;
        }

        this.setSelectedMonths();
        this.todayMonth = this.getMonthInCurrentYear(this.dateTimeAdapter.now());
        this._months = [];

        for (var i = 0; i < MONTHS_PER_YEAR / MONTHS_PER_ROW; i++) {
          var row = [];

          for (var j = 0; j < MONTHS_PER_ROW; j++) {
            var month = j + i * MONTHS_PER_ROW;
            var monthCell = this.createMonthCell(month);
            row.push(monthCell);
          }

          this._months.push(row);
        }

        return;
      };

      OwlYearViewComponent.prototype.createMonthCell = function (month) {
        var startDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
        var ariaLabel = this.dateTimeAdapter.format(startDateOfMonth, this.dateTimeFormats.monthYearA11yLabel);
        var cellClass = 'owl-dt-month-' + month;
        return new _calendar_body_component__WEBPACK_IMPORTED_MODULE_1__["CalendarCell"](month, this.monthNames[month], ariaLabel, this.isMonthEnabled(month), false, cellClass);
      };

      OwlYearViewComponent.prototype.isMonthEnabled = function (month) {
        var firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);

        for (var date = firstDateOfMonth; this.dateTimeAdapter.getMonth(date) === month; date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
          if (!!date && (!this.dateFilter || this.dateFilter(date)) && (!this.minDate || this.dateTimeAdapter.compare(date, this.minDate) >= 0) && (!this.maxDate || this.dateTimeAdapter.compare(date, this.maxDate) <= 0)) {
            return true;
          }
        }

        return false;
      };

      OwlYearViewComponent.prototype.getMonthInCurrentYear = function (date) {
        if (this.getValidDate(date) && this.getValidDate(this._pickerMoment)) {
          var result = this.dateTimeAdapter.compareYear(date, this._pickerMoment);

          if (result < 0) {
            return -1;
          } else if (result > 0) {
            return 12;
          } else {
            return this.dateTimeAdapter.getMonth(date);
          }
        } else {
          return null;
        }
      };

      OwlYearViewComponent.prototype.setSelectedMonths = function () {
        this.selectedMonths = [];

        if (this.isInSingleMode && this.selected) {
          this.selectedMonths[0] = this.getMonthInCurrentYear(this.selected);
        }

        if (this.isInRangeMode && this.selecteds) {
          this.selectedMonths[0] = this.getMonthInCurrentYear(this.selecteds[0]);
          this.selectedMonths[1] = this.getMonthInCurrentYear(this.selecteds[1]);
        }
      };

      OwlYearViewComponent.prototype.hasSameYear = function (dateLeft, dateRight) {
        return !!(dateLeft && dateRight && this.dateTimeAdapter.getYear(dateLeft) === this.dateTimeAdapter.getYear(dateRight));
      };

      OwlYearViewComponent.prototype.getValidDate = function (obj) {
        return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
      };

      OwlYearViewComponent.prototype.focusActiveCell = function () {
        this.calendarBodyElm.focusActiveCell();
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], OwlYearViewComponent.prototype, "selectMode", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlYearViewComponent.prototype, "selected", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], OwlYearViewComponent.prototype, "selecteds", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlYearViewComponent.prototype, "pickerMoment", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Function), __metadata("design:paramtypes", [Function])], OwlYearViewComponent.prototype, "dateFilter", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlYearViewComponent.prototype, "minDate", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlYearViewComponent.prototype, "maxDate", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlYearViewComponent.prototype, "change", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlYearViewComponent.prototype, "monthSelected", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], OwlYearViewComponent.prototype, "pickerMomentChange", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], OwlYearViewComponent.prototype, "keyboardEnter", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_calendar_body_component__WEBPACK_IMPORTED_MODULE_1__["OwlCalendarBodyComponent"]), __metadata("design:type", _calendar_body_component__WEBPACK_IMPORTED_MODULE_1__["OwlCalendarBodyComponent"])], OwlYearViewComponent.prototype, "calendarBodyElm", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-calendar-view'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlYearViewComponent.prototype, "owlDTCalendarView", null);

      OwlYearViewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'owl-date-time-year-view',
        exportAs: 'owlMonthView',
        template: "<table class=\"owl-dt-calendar-table owl-dt-calendar-year-table\"><thead class=\"owl-dt-calendar-header\"><tr><th class=\"owl-dt-calendar-table-divider\" aria-hidden=\"true\" colspan=\"3\"></th></tr></thead><tbody owl-date-time-calendar-body role=\"grid\" [rows]=\"months\" [numCols]=\"3\" [cellRatio]=\"3 / 7\" [activeCell]=\"activeCell\" [todayValue]=\"todayMonth\" [selectedValues]=\"selectedMonths\" [selectMode]=\"selectMode\" (keydown)=\"handleCalendarKeydown($event)\" (select)=\"selectCalendarCell($event)\"></tbody></table>",
        styles: [""],
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_FORMATS"])), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"], Object])], OwlYearViewComponent);
      return OwlYearViewComponent;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/calendar.component.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/calendar.component.js ***!
    \***********************************************************************/

  /*! exports provided: OwlCalendarComponent */

  /***/
  function node_modulesNgPickDatetimeDateTimeCalendarComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlCalendarComponent", function () {
      return OwlCalendarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./date-time-picker-intl.service */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js");
    /* harmony import */


    var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./adapter/date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
    /* harmony import */


    var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adapter/date-time-format.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var OwlCalendarComponent = function () {
      function OwlCalendarComponent(elmRef, pickerIntl, ngZone, cdRef, dateTimeAdapter, dateTimeFormats) {
        var _this = this;

        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.ngZone = ngZone;
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        this.firstDayOfWeek = 0;
        this._selecteds = [];
        this.startView = 'month';
        this.pickerMomentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.dateFilterForViews = function (date) {
          return !!date && (!_this.dateFilter || _this.dateFilter(date)) && (!_this.minDate || _this.dateTimeAdapter.compare(date, _this.minDate) >= 0) && (!_this.maxDate || _this.dateTimeAdapter.compare(date, _this.maxDate) <= 0);
        };

        this.intlChangesSub = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this.moveFocusOnNextTick = false;
        this.intlChangesSub = this.pickerIntl.changes.subscribe(function () {
          _this.cdRef.markForCheck();
        });
      }

      Object.defineProperty(OwlCalendarComponent.prototype, "minDate", {
        get: function get() {
          return this._minDate;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          value = this.getValidDate(value);
          this._minDate = value ? this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value)) : null;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "maxDate", {
        get: function get() {
          return this._maxDate;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          value = this.getValidDate(value);
          this._maxDate = value ? this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value)) : null;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "pickerMoment", {
        get: function get() {
          return this._pickerMoment;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "selected", {
        get: function get() {
          return this._selected;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this._selected = this.getValidDate(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "selecteds", {
        get: function get() {
          return this._selecteds;
        },
        set: function set(values) {
          var _this = this;

          this._selecteds = values.map(function (v) {
            v = _this.dateTimeAdapter.deserialize(v);
            return _this.getValidDate(v);
          });
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "periodButtonText", {
        get: function get() {
          return this.isMonthView ? this.dateTimeAdapter.format(this.pickerMoment, this.dateTimeFormats.monthYearLabel) : this.dateTimeAdapter.getYearName(this.pickerMoment);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "periodButtonLabel", {
        get: function get() {
          return this.isMonthView ? this.pickerIntl.switchToMultiYearViewLabel : this.pickerIntl.switchToMonthViewLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "prevButtonLabel", {
        get: function get() {
          if (this._currentView === 'month') {
            return this.pickerIntl.prevMonthLabel;
          } else if (this._currentView === 'year') {
            return this.pickerIntl.prevYearLabel;
          } else {
            return null;
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "nextButtonLabel", {
        get: function get() {
          if (this._currentView === 'month') {
            return this.pickerIntl.nextMonthLabel;
          } else if (this._currentView === 'year') {
            return this.pickerIntl.nextYearLabel;
          } else {
            return null;
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "currentView", {
        get: function get() {
          return this._currentView;
        },
        set: function set(view) {
          this._currentView = view;
          this.moveFocusOnNextTick = true;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "isInSingleMode", {
        get: function get() {
          return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "isInRangeMode", {
        get: function get() {
          return this.selectMode === 'range' || this.selectMode === 'rangeFrom' || this.selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "showControlArrows", {
        get: function get() {
          return this._currentView !== 'multi-years';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "isMonthView", {
        get: function get() {
          return this._currentView === 'month';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlCalendarComponent.prototype, "owlDTCalendarClass", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });

      OwlCalendarComponent.prototype.ngOnInit = function () {};

      OwlCalendarComponent.prototype.ngAfterContentInit = function () {
        this._currentView = this.startView;
      };

      OwlCalendarComponent.prototype.ngAfterViewChecked = function () {
        if (this.moveFocusOnNextTick) {
          this.moveFocusOnNextTick = false;
          this.focusActiveCell();
        }
      };

      OwlCalendarComponent.prototype.ngOnDestroy = function () {
        this.intlChangesSub.unsubscribe();
      };

      OwlCalendarComponent.prototype.toggleViews = function () {
        this.currentView = this._currentView == 'month' ? 'multi-years' : 'month';
      };

      OwlCalendarComponent.prototype.previousClicked = function () {
        this.pickerMoment = this.isMonthView ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1) : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1);
        this.pickerMomentChange.emit(this.pickerMoment);
      };

      OwlCalendarComponent.prototype.nextClicked = function () {
        this.pickerMoment = this.isMonthView ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1) : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1);
        this.pickerMomentChange.emit(this.pickerMoment);
      };

      OwlCalendarComponent.prototype.dateSelected = function (date) {
        if (!this.dateFilterForViews(date)) {
          return;
        }

        this.selectedChange.emit(date);
      };

      OwlCalendarComponent.prototype.goToDateInView = function (date, view) {
        this.handlePickerMomentChange(date);
        this.currentView = view;
        return;
      };

      OwlCalendarComponent.prototype.handlePickerMomentChange = function (date) {
        this.pickerMoment = this.dateTimeAdapter.clampDate(date, this.minDate, this.maxDate);
        this.pickerMomentChange.emit(this.pickerMoment);
        return;
      };

      OwlCalendarComponent.prototype.userSelected = function () {
        this.userSelection.emit();
      };

      OwlCalendarComponent.prototype.prevButtonEnabled = function () {
        return !this.minDate || !this.isSameView(this.pickerMoment, this.minDate);
      };

      OwlCalendarComponent.prototype.nextButtonEnabled = function () {
        return !this.maxDate || !this.isSameView(this.pickerMoment, this.maxDate);
      };

      OwlCalendarComponent.prototype.focusActiveCell = function () {
        var _this = this;

        this.ngZone.runOutsideAngular(function () {
          _this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function () {
            _this.elmRef.nativeElement.querySelector('.owl-dt-calendar-cell-active').focus();
          });
        });
      };

      OwlCalendarComponent.prototype.selectYearInMultiYearView = function (normalizedYear) {
        this.yearSelected.emit(normalizedYear);
      };

      OwlCalendarComponent.prototype.selectMonthInYearView = function (normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
      };

      OwlCalendarComponent.prototype.isSameView = function (date1, date2) {
        if (this._currentView === 'month') {
          return !!(date1 && date2 && this.dateTimeAdapter.getYear(date1) === this.dateTimeAdapter.getYear(date2) && this.dateTimeAdapter.getMonth(date1) === this.dateTimeAdapter.getMonth(date2));
        } else if (this._currentView === 'year') {
          return !!(date1 && date2 && this.dateTimeAdapter.getYear(date1) === this.dateTimeAdapter.getYear(date2));
        } else {
          return false;
        }
      };

      OwlCalendarComponent.prototype.getValidDate = function (obj) {
        return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Function)], OwlCalendarComponent.prototype, "dateFilter", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlCalendarComponent.prototype, "firstDayOfWeek", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlCalendarComponent.prototype, "minDate", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlCalendarComponent.prototype, "maxDate", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlCalendarComponent.prototype, "pickerMoment", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], OwlCalendarComponent.prototype, "selectMode", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlCalendarComponent.prototype, "selected", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], OwlCalendarComponent.prototype, "selecteds", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], OwlCalendarComponent.prototype, "startView", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], OwlCalendarComponent.prototype, "hideOtherMonths", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlCalendarComponent.prototype, "pickerMomentChange", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlCalendarComponent.prototype, "selectedChange", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlCalendarComponent.prototype, "userSelection", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlCalendarComponent.prototype, "yearSelected", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlCalendarComponent.prototype, "monthSelected", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-calendar'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlCalendarComponent.prototype, "owlDTCalendarClass", null);

      OwlCalendarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'owl-date-time-calendar',
        exportAs: 'owlDateTimeCalendar',
        template: "<div class=\"owl-dt-calendar-control\"><!-- focus when keyboard tab (http://kizu.ru/en/blog/keyboard-only-focus/#x) --> <button class=\"owl-dt-control owl-dt-control-button owl-dt-control-arrow-button\" type=\"button\" tabindex=\"0\" [style.visibility]=\"showControlArrows? 'visible': 'hidden'\" [disabled]=\"!prevButtonEnabled()\" [attr.aria-label]=\"prevButtonLabel\" (click)=\"previousClicked()\"><span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\"><!-- <editor-fold desc=\"SVG Arrow Left\"> --> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250.738 250.738\" style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\" width=\"100%\" height=\"100%\"><path style=\"fill-rule: evenodd; clip-rule: evenodd;\" d=\"M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z\"/></svg><!-- </editor-fold> --></span></button><div class=\"owl-dt-calendar-control-content\"><button class=\"owl-dt-control owl-dt-control-button owl-dt-control-period-button\" type=\"button\" tabindex=\"0\" [attr.aria-label]=\"periodButtonLabel\" (click)=\"toggleViews()\"><span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">{{periodButtonText}} <span class=\"owl-dt-control-button-arrow\" [style.transform]=\"'rotate(' + (isMonthView? 0 : 180) +'deg)'\"><!-- <editor-fold desc=\"SVG Arrow\"> --> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"50%\" height=\"50%\" viewBox=\"0 0 292.362 292.362\" style=\"enable-background:new 0 0 292.362 292.362;\" xml:space=\"preserve\"><g><path d=\"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424\n                                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428\n                                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z\"/></g></svg><!-- </editor-fold> --></span></span></button></div><button class=\"owl-dt-control owl-dt-control-button owl-dt-control-arrow-button\" type=\"button\" tabindex=\"0\" [style.visibility]=\"showControlArrows? 'visible': 'hidden'\" [disabled]=\"!nextButtonEnabled()\" [attr.aria-label]=\"nextButtonLabel\" (click)=\"nextClicked()\"><span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\"><!-- <editor-fold desc=\"SVG Arrow Right\"> --> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250.738 250.738\" style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\"><path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                    c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                    c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                    C197.237,120.447,195.534,115.448,191.75,111.689z\"/></svg><!-- </editor-fold> --></span></button></div><div class=\"owl-dt-calendar-main\" cdkMonitorSubtreeFocus [ngSwitch]=\"currentView\" tabindex=\"-1\"><owl-date-time-month-view *ngSwitchCase=\"'month'\" [pickerMoment]=\"pickerMoment\" [firstDayOfWeek]=\"firstDayOfWeek\" [selected]=\"selected\" [selecteds]=\"selecteds\" [selectMode]=\"selectMode\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [dateFilter]=\"dateFilter\" [hideOtherMonths]=\"hideOtherMonths\" (pickerMomentChange)=\"handlePickerMomentChange($event)\" (selectedChange)=\"dateSelected($event)\" (userSelection)=\"userSelected()\"></owl-date-time-month-view><owl-date-time-year-view *ngSwitchCase=\"'year'\" [pickerMoment]=\"pickerMoment\" [selected]=\"selected\" [selecteds]=\"selecteds\" [selectMode]=\"selectMode\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [dateFilter]=\"dateFilter\" (keyboardEnter)=\"focusActiveCell()\" (pickerMomentChange)=\"handlePickerMomentChange($event)\" (monthSelected)=\"selectMonthInYearView($event)\" (change)=\"goToDateInView($event, 'month')\"></owl-date-time-year-view><owl-date-time-multi-year-view *ngSwitchCase=\"'multi-years'\" [pickerMoment]=\"pickerMoment\" [selected]=\"selected\" [selecteds]=\"selecteds\" [selectMode]=\"selectMode\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [dateFilter]=\"dateFilter\" (keyboardEnter)=\"focusActiveCell()\" (pickerMomentChange)=\"handlePickerMomentChange($event)\" (yearSelected)=\"selectYearInMultiYearView($event)\" (change)=\"goToDateInView($event, 'year')\"></owl-date-time-multi-year-view></div>",
        styles: [""],
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_FORMATS"])), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__["OwlDateTimeIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"], Object])], OwlCalendarComponent);
      return OwlCalendarComponent;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/date-time-inline.component.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/date-time-inline.component.js ***!
    \*******************************************************************************/

  /*! exports provided: OWL_DATETIME_VALUE_ACCESSOR, OwlDateTimeInlineComponent */

  /***/
  function node_modulesNgPickDatetimeDateTimeDateTimeInlineComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATETIME_VALUE_ACCESSOR", function () {
      return OWL_DATETIME_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeInlineComponent", function () {
      return OwlDateTimeInlineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _date_time_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./date-time.class */
    "./node_modules/ng-pick-datetime/date-time/date-time.class.js");
    /* harmony import */


    var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./adapter/date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
    /* harmony import */


    var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./adapter/date-time-format.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
    /* harmony import */


    var _date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./date-time-picker-container.component */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.js");

    var __extends = undefined && undefined.__extends || function () {
      var _extendStatics2 = function extendStatics(d, b) {
        _extendStatics2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics2(d, b);
      };

      return function (d, b) {
        _extendStatics2(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var OWL_DATETIME_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return OwlDateTimeInlineComponent;
      }),
      multi: true
    };

    var OwlDateTimeInlineComponent = function (_super) {
      __extends(OwlDateTimeInlineComponent, _super);

      function OwlDateTimeInlineComponent(changeDetector, dateTimeAdapter, dateTimeFormats) {
        var _this = _super.call(this, dateTimeAdapter, dateTimeFormats) || this;

        _this.changeDetector = changeDetector;
        _this.dateTimeAdapter = dateTimeAdapter;
        _this.dateTimeFormats = dateTimeFormats;
        _this._pickerType = 'both';
        _this._disabled = false;
        _this._selectMode = 'single';
        _this._values = [];
        _this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this._selecteds = [];

        _this.onModelChange = function () {};

        _this.onModelTouched = function () {};

        return _this;
      }

      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "pickerType", {
        get: function get() {
          return this._pickerType;
        },
        set: function set(val) {
          if (val !== this._pickerType) {
            this._pickerType = val;
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "disabled", {
        get: function get() {
          return !!this._disabled;
        },
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "selectMode", {
        get: function get() {
          return this._selectMode;
        },
        set: function set(mode) {
          if (mode !== 'single' && mode !== 'range' && mode !== 'rangeFrom' && mode !== 'rangeTo') {
            throw Error('OwlDateTime Error: invalid selectMode value!');
          }

          this._selectMode = mode;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "startAt", {
        get: function get() {
          if (this._startAt) {
            return this._startAt;
          }

          if (this.selectMode === 'single') {
            return this.value || null;
          } else if (this.selectMode === 'range' || this.selectMode === 'rangeFrom') {
            return this.values[0] || null;
          } else if (this.selectMode === 'rangeTo') {
            return this.values[1] || null;
          } else {
            return null;
          }
        },
        set: function set(date) {
          this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "dateTimeFilter", {
        get: function get() {
          return this._dateTimeFilter;
        },
        set: function set(filter) {
          this._dateTimeFilter = filter;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "minDateTime", {
        get: function get() {
          return this._min || null;
        },
        set: function set(value) {
          this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value));
          this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "maxDateTime", {
        get: function get() {
          return this._max || null;
        },
        set: function set(value) {
          this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value));
          this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "value", {
        get: function get() {
          return this._value;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          value = this.getValidDate(value);
          this._value = value;
          this.selected = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "values", {
        get: function get() {
          return this._values;
        },
        set: function set(values) {
          var _this = this;

          if (values && values.length > 0) {
            values = values.map(function (v) {
              v = _this.dateTimeAdapter.deserialize(v);
              v = _this.getValidDate(v);
              return v ? _this.dateTimeAdapter.clone(v) : null;
            });
            this._values = values.slice();
            this.selecteds = values.slice();
          } else {
            this._values = [];
            this.selecteds = [];
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "selected", {
        get: function get() {
          return this._selected;
        },
        set: function set(value) {
          this._selected = value;
          this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "selecteds", {
        get: function get() {
          return this._selecteds;
        },
        set: function set(values) {
          this._selecteds = values;
          this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "opened", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "pickerMode", {
        get: function get() {
          return 'inline';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "isInSingleMode", {
        get: function get() {
          return this._selectMode === 'single';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "isInRangeMode", {
        get: function get() {
          return this._selectMode === 'range' || this._selectMode === 'rangeFrom' || this._selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInlineComponent.prototype, "owlDTInlineClass", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });

      OwlDateTimeInlineComponent.prototype.ngOnInit = function () {
        this.container.picker = this;
      };

      OwlDateTimeInlineComponent.prototype.writeValue = function (value) {
        if (this.isInSingleMode) {
          this.value = value;
          this.container.pickerMoment = value;
        } else {
          this.values = value;
          this.container.pickerMoment = this._values[this.container.activeSelectedIndex];
        }
      };

      OwlDateTimeInlineComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
      };

      OwlDateTimeInlineComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
      };

      OwlDateTimeInlineComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
      };

      OwlDateTimeInlineComponent.prototype.select = function (date) {
        if (this.disabled) {
          return;
        }

        if (Array.isArray(date)) {
          this.values = date.slice();
        } else {
          this.value = date;
        }

        this.onModelChange(date);
        this.onModelTouched();
      };

      OwlDateTimeInlineComponent.prototype.selectYear = function (normalizedYear) {
        this.yearSelected.emit(normalizedYear);
      };

      OwlDateTimeInlineComponent.prototype.selectMonth = function (normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeContainerComponent"]), __metadata("design:type", _date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeContainerComponent"])], OwlDateTimeInlineComponent.prototype, "container", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], OwlDateTimeInlineComponent.prototype, "pickerType", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], OwlDateTimeInlineComponent.prototype, "disabled", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], OwlDateTimeInlineComponent.prototype, "selectMode", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlDateTimeInlineComponent.prototype, "startAt", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('owlDateTimeFilter'), __metadata("design:type", Function), __metadata("design:paramtypes", [Function])], OwlDateTimeInlineComponent.prototype, "dateTimeFilter", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('min'), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlDateTimeInlineComponent.prototype, "minDateTime", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('max'), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlDateTimeInlineComponent.prototype, "maxDateTime", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlDateTimeInlineComponent.prototype, "value", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], OwlDateTimeInlineComponent.prototype, "values", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlDateTimeInlineComponent.prototype, "yearSelected", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlDateTimeInlineComponent.prototype, "monthSelected", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-inline'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlDateTimeInlineComponent.prototype, "owlDTInlineClass", null);

      OwlDateTimeInlineComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'owl-date-time-inline',
        template: "<owl-date-time-container></owl-date-time-container>",
        styles: [""],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        providers: [OWL_DATETIME_VALUE_ACCESSOR]
      }), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_5__["OWL_DATE_TIME_FORMATS"])), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_4__["DateTimeAdapter"], Object])], OwlDateTimeInlineComponent);
      return OwlDateTimeInlineComponent;
    }(_date_time_class__WEBPACK_IMPORTED_MODULE_3__["OwlDateTime"]);
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.js ***!
    \*****************************************************************************************/

  /*! exports provided: OwlDateTimeContainerComponent */

  /***/
  function node_modulesNgPickDatetimeDateTimeDateTimePickerContainerComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeContainerComponent", function () {
      return OwlDateTimeContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./date-time-picker-intl.service */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js");
    /* harmony import */


    var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./calendar.component */
    "./node_modules/ng-pick-datetime/date-time/calendar.component.js");
    /* harmony import */


    var _timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./timer.component */
    "./node_modules/ng-pick-datetime/date-time/timer.component.js");
    /* harmony import */


    var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./adapter/date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _date_time_picker_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./date-time-picker.animations */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker.animations.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var OwlDateTimeContainerComponent = function () {
      function OwlDateTimeContainerComponent(cdRef, elmRef, pickerIntl, dateTimeAdapter) {
        this.cdRef = cdRef;
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.dateTimeAdapter = dateTimeAdapter;
        this.activeSelectedIndex = 0;
        this.hidePicker$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.confirmSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.pickerOpened$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }

      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "hidePickerStream", {
        get: function get() {
          return this.hidePicker$.asObservable();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "confirmSelectedStream", {
        get: function get() {
          return this.confirmSelected$.asObservable();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "pickerOpenedStream", {
        get: function get() {
          return this.pickerOpened$.asObservable();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "pickerMoment", {
        get: function get() {
          return this._clamPickerMoment;
        },
        set: function set(value) {
          if (value) {
            this._clamPickerMoment = this.dateTimeAdapter.clampDate(value, this.picker.minDateTime, this.picker.maxDateTime);
          }

          this.cdRef.markForCheck();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "pickerType", {
        get: function get() {
          return this.picker.pickerType;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "cancelLabel", {
        get: function get() {
          return this.pickerIntl.cancelBtnLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "setLabel", {
        get: function get() {
          return this.pickerIntl.setBtnLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "fromLabel", {
        get: function get() {
          return this.pickerIntl.rangeFromLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "toLabel", {
        get: function get() {
          return this.pickerIntl.rangeToLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "fromFormattedValue", {
        get: function get() {
          var value = this.picker.selecteds[0];
          return value ? this.dateTimeAdapter.format(value, this.picker.formatString) : '';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "toFormattedValue", {
        get: function get() {
          var value = this.picker.selecteds[1];
          return value ? this.dateTimeAdapter.format(value, this.picker.formatString) : '';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "showControlButtons", {
        get: function get() {
          return this.picker.pickerMode === 'dialog' || this.picker.pickerType !== 'calendar' && this.picker.pickerMode !== 'inline';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "containerElm", {
        get: function get() {
          return this.elmRef.nativeElement;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTContainerClass", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTPopupContainerClass", {
        get: function get() {
          return this.picker.pickerMode === 'popup';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTDialogContainerClass", {
        get: function get() {
          return this.picker.pickerMode === 'dialog';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTInlineContainerClass", {
        get: function get() {
          return this.picker.pickerMode === 'inline';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTContainerDisabledClass", {
        get: function get() {
          return this.picker.disabled;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTContainerId", {
        get: function get() {
          return this.picker.id;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTContainerAnimation", {
        get: function get() {
          return this.picker.pickerMode === 'inline' ? '' : 'enter';
        },
        enumerable: true,
        configurable: true
      });

      OwlDateTimeContainerComponent.prototype.ngOnInit = function () {};

      OwlDateTimeContainerComponent.prototype.ngAfterContentInit = function () {
        this.initPicker();
      };

      OwlDateTimeContainerComponent.prototype.ngAfterViewInit = function () {
        this.focusPicker();
      };

      OwlDateTimeContainerComponent.prototype.handleContainerAnimationDone = function (event) {
        var toState = event.toState;

        if (toState === 'enter') {
          this.pickerOpened$.next();
        }
      };

      OwlDateTimeContainerComponent.prototype.dateSelected = function (date) {
        var result;

        if (this.picker.isInSingleMode) {
          result = this.dateSelectedInSingleMode(date);

          if (result) {
            this.pickerMoment = result;
            this.picker.select(result);
          } else {
            if (this.pickerType === 'calendar') {
              this.hidePicker$.next(null);
            }
          }

          return;
        }

        if (this.picker.isInRangeMode) {
          result = this.dateSelectedInRangeMode(date);

          if (result) {
            this.pickerMoment = result[this.activeSelectedIndex];
            this.picker.select(result);
          }
        }
      };

      OwlDateTimeContainerComponent.prototype.timeSelected = function (time) {
        this.pickerMoment = this.dateTimeAdapter.clone(time);

        if (!this.picker.dateTimeChecker(this.pickerMoment)) {
          return;
        }

        if (this.picker.isInSingleMode) {
          this.picker.select(this.pickerMoment);
          return;
        }

        if (this.picker.isInRangeMode) {
          var selecteds = this.picker.selecteds.slice();

          if (this.activeSelectedIndex === 0 && selecteds[1] && this.dateTimeAdapter.compare(this.pickerMoment, selecteds[1]) === 1 || this.activeSelectedIndex === 1 && selecteds[0] && this.dateTimeAdapter.compare(this.pickerMoment, selecteds[0]) === -1) {
            selecteds[0] = this.pickerMoment;
            selecteds[1] = this.pickerMoment;
          } else {
            selecteds[this.activeSelectedIndex] = this.pickerMoment;
          }

          this.picker.select(selecteds);
        }
      };

      OwlDateTimeContainerComponent.prototype.onCancelClicked = function (event) {
        this.hidePicker$.next(null);
        event.preventDefault();
        return;
      };

      OwlDateTimeContainerComponent.prototype.onSetClicked = function (event) {
        if (!this.picker.dateTimeChecker(this.pickerMoment)) {
          this.hidePicker$.next(null);
          event.preventDefault();
          return;
        }

        this.confirmSelected$.next(event);
        event.preventDefault();
        return;
      };

      OwlDateTimeContainerComponent.prototype.handleClickOnInfoGroup = function (event, index) {
        this.setActiveSelectedIndex(index);
        event.preventDefault();
        event.stopPropagation();
      };

      OwlDateTimeContainerComponent.prototype.handleKeydownOnInfoGroup = function (event, next, index) {
        switch (event.keyCode) {
          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]:
          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["RIGHT_ARROW"]:
          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"]:
          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["LEFT_ARROW"]:
            next.focus();
            this.setActiveSelectedIndex(index === 0 ? 1 : 0);
            event.preventDefault();
            event.stopPropagation();
            break;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["SPACE"]:
            this.setActiveSelectedIndex(index);
            event.preventDefault();
            event.stopPropagation();
            break;

          default:
            return;
        }
      };

      OwlDateTimeContainerComponent.prototype.setActiveSelectedIndex = function (index) {
        if (this.picker.selectMode === 'range' && this.activeSelectedIndex !== index) {
          this.activeSelectedIndex = index;
          var selected = this.picker.selecteds[this.activeSelectedIndex];

          if (this.picker.selecteds && selected) {
            this.pickerMoment = this.dateTimeAdapter.clone(selected);
          }
        }

        return;
      };

      OwlDateTimeContainerComponent.prototype.initPicker = function () {
        this.pickerMoment = this.picker.startAt || this.dateTimeAdapter.now();
        this.activeSelectedIndex = this.picker.selectMode === 'rangeTo' ? 1 : 0;
      };

      OwlDateTimeContainerComponent.prototype.dateSelectedInSingleMode = function (date) {
        if (this.dateTimeAdapter.isSameDay(date, this.picker.selected)) {
          return null;
        }

        return this.updateAndCheckCalendarDate(date);
      };

      OwlDateTimeContainerComponent.prototype.dateSelectedInRangeMode = function (date) {
        var from = this.picker.selecteds[0];
        var to = this.picker.selecteds[1];
        var result = this.updateAndCheckCalendarDate(date);

        if (!result) {
          return null;
        }

        if (this.picker.selectMode === 'range') {
          if (this.picker.selecteds && this.picker.selecteds.length && !to && from && this.dateTimeAdapter.differenceInCalendarDays(result, from) >= 0) {
            to = result;
            this.activeSelectedIndex = 1;
          } else {
            from = result;
            to = null;
            this.activeSelectedIndex = 0;
          }
        } else if (this.picker.selectMode === 'rangeFrom') {
          from = result;

          if (to && this.dateTimeAdapter.compare(from, to) > 0) {
            to = null;
          }
        } else if (this.picker.selectMode === 'rangeTo') {
          to = result;

          if (from && this.dateTimeAdapter.compare(from, to) > 0) {
            from = null;
          }
        }

        return [from, to];
      };

      OwlDateTimeContainerComponent.prototype.updateAndCheckCalendarDate = function (date) {
        var result;

        if (this.picker.pickerType === 'both') {
          result = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(date), this.dateTimeAdapter.getMonth(date), this.dateTimeAdapter.getDate(date), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
          result = this.dateTimeAdapter.clampDate(result, this.picker.minDateTime, this.picker.maxDateTime);
        } else {
          result = this.dateTimeAdapter.clone(date);
        }

        return this.picker.dateTimeChecker(result) ? result : null;
      };

      OwlDateTimeContainerComponent.prototype.focusPicker = function () {
        if (this.picker.pickerMode === 'inline') {
          return;
        }

        if (this.calendar) {
          this.calendar.focusActiveCell();
        } else if (this.timer) {
          this.timer.focus();
        }
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_calendar_component__WEBPACK_IMPORTED_MODULE_2__["OwlCalendarComponent"]), __metadata("design:type", _calendar_component__WEBPACK_IMPORTED_MODULE_2__["OwlCalendarComponent"])], OwlDateTimeContainerComponent.prototype, "calendar", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_timer_component__WEBPACK_IMPORTED_MODULE_3__["OwlTimerComponent"]), __metadata("design:type", _timer_component__WEBPACK_IMPORTED_MODULE_3__["OwlTimerComponent"])], OwlDateTimeContainerComponent.prototype, "timer", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-container'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlDateTimeContainerComponent.prototype, "owlDTContainerClass", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-popup-container'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlDateTimeContainerComponent.prototype, "owlDTPopupContainerClass", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-dialog-container'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlDateTimeContainerComponent.prototype, "owlDTDialogContainerClass", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-inline-container'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlDateTimeContainerComponent.prototype, "owlDTInlineContainerClass", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-container-disabled'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlDateTimeContainerComponent.prototype, "owlDTContainerDisabledClass", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.id'), __metadata("design:type", String), __metadata("design:paramtypes", [])], OwlDateTimeContainerComponent.prototype, "owlDTContainerId", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@transformPicker'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], OwlDateTimeContainerComponent.prototype, "owlDTContainerAnimation", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('@transformPicker.done', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], OwlDateTimeContainerComponent.prototype, "handleContainerAnimationDone", null);

      OwlDateTimeContainerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        exportAs: 'owlDateTimeContainer',
        selector: 'owl-date-time-container',
        template: "<div [cdkTrapFocus]=\"picker.pickerMode !== 'inline'\" [@fadeInPicker]=\"picker.pickerMode === 'inline'? '' : 'enter'\" class=\"owl-dt-container-inner\"><owl-date-time-calendar *ngIf=\"pickerType === 'both' || pickerType === 'calendar'\" class=\"owl-dt-container-row\" [firstDayOfWeek]=\"picker.firstDayOfWeek\" [(pickerMoment)]=\"pickerMoment\" [selected]=\"picker.selected\" [selecteds]=\"picker.selecteds\" [selectMode]=\"picker.selectMode\" [minDate]=\"picker.minDateTime\" [maxDate]=\"picker.maxDateTime\" [dateFilter]=\"picker.dateTimeFilter\" [startView]=\"picker.startView\" [hideOtherMonths]=\"picker.hideOtherMonths\" (yearSelected)=\"picker.selectYear($event)\" (monthSelected)=\"picker.selectMonth($event)\" (selectedChange)=\"dateSelected($event)\"></owl-date-time-calendar><owl-date-time-timer *ngIf=\"pickerType === 'both' || pickerType === 'timer'\" class=\"owl-dt-container-row\" [pickerMoment]=\"pickerMoment\" [minDateTime]=\"picker.minDateTime\" [maxDateTime]=\"picker.maxDateTime\" [showSecondsTimer]=\"picker.showSecondsTimer\" [hour12Timer]=\"picker.hour12Timer\" [stepHour]=\"picker.stepHour\" [stepMinute]=\"picker.stepMinute\" [stepSecond]=\"picker.stepSecond\" (selectedChange)=\"timeSelected($event)\"></owl-date-time-timer><div *ngIf=\"picker.isInRangeMode\" role=\"radiogroup\" class=\"owl-dt-container-info owl-dt-container-row\"><div role=\"radio\" [tabindex]=\"activeSelectedIndex === 0 ? 0 : -1\" [attr.aria-checked]=\"activeSelectedIndex === 0\" class=\"owl-dt-control owl-dt-container-range owl-dt-container-from\" [ngClass]=\"{'owl-dt-container-info-active': activeSelectedIndex === 0}\" (click)=\"handleClickOnInfoGroup($event, 0)\" (keydown)=\"handleKeydownOnInfoGroup($event, to, 0)\" #from><span class=\"owl-dt-control-content owl-dt-container-range-content\" tabindex=\"-1\"><span class=\"owl-dt-container-info-label\">{{fromLabel}}:</span> <span class=\"owl-dt-container-info-value\">{{fromFormattedValue}}</span></span></div><div role=\"radio\" [tabindex]=\"activeSelectedIndex === 1 ? 0 : -1\" [attr.aria-checked]=\"activeSelectedIndex === 1\" class=\"owl-dt-control owl-dt-container-range owl-dt-container-to\" [ngClass]=\"{'owl-dt-container-info-active': activeSelectedIndex === 1}\" (click)=\"handleClickOnInfoGroup($event, 1)\" (keydown)=\"handleKeydownOnInfoGroup($event, from, 1)\" #to><span class=\"owl-dt-control-content owl-dt-container-range-content\" tabindex=\"-1\"><span class=\"owl-dt-container-info-label\">{{toLabel}}:</span> <span class=\"owl-dt-container-info-value\">{{toFormattedValue}}</span></span></div></div><div *ngIf=\"showControlButtons\" class=\"owl-dt-container-buttons owl-dt-container-row\"><button class=\"owl-dt-control owl-dt-control-button owl-dt-container-control-button\" type=\"button\" tabindex=\"0\" (click)=\"onCancelClicked($event)\"><span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">{{cancelLabel}}</span></button> <button class=\"owl-dt-control owl-dt-control-button owl-dt-container-control-button\" type=\"button\" tabindex=\"0\" (click)=\"onSetClicked($event)\"><span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">{{setLabel}}</span></button></div></div>",
        styles: [""],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        animations: [_date_time_picker_animations__WEBPACK_IMPORTED_MODULE_6__["owlDateTimePickerAnimations"].transformPicker, _date_time_picker_animations__WEBPACK_IMPORTED_MODULE_6__["owlDateTimePickerAnimations"].fadeInPicker]
      }), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__["OwlDateTimeIntl"], _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_4__["DateTimeAdapter"]])], OwlDateTimeContainerComponent);
      return OwlDateTimeContainerComponent;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/date-time-picker-input.directive.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/date-time-picker-input.directive.js ***!
    \*************************************************************************************/

  /*! exports provided: OWL_DATETIME_VALUE_ACCESSOR, OWL_DATETIME_VALIDATORS, OwlDateTimeInputDirective */

  /***/
  function node_modulesNgPickDatetimeDateTimeDateTimePickerInputDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATETIME_VALUE_ACCESSOR", function () {
      return OWL_DATETIME_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATETIME_VALIDATORS", function () {
      return OWL_DATETIME_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeInputDirective", function () {
      return OwlDateTimeInputDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _date_time_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./date-time-picker.component */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker.component.js");
    /* harmony import */


    var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./adapter/date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
    /* harmony import */


    var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./adapter/date-time-format.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var OWL_DATETIME_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return OwlDateTimeInputDirective;
      }),
      multi: true
    };
    var OWL_DATETIME_VALIDATORS = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return OwlDateTimeInputDirective;
      }),
      multi: true
    };

    var OwlDateTimeInputDirective = function () {
      function OwlDateTimeInputDirective(elmRef, renderer, dateTimeAdapter, dateTimeFormats) {
        var _this = this;

        this.elmRef = elmRef;
        this.renderer = renderer;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        this._selectMode = 'single';
        this.rangeSeparator = '~';
        this._values = [];
        this.dateTimeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dateTimeInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dtPickerSub = rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"].EMPTY;
        this.localeSub = rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"].EMPTY;
        this.lastValueValid = true;

        this.onModelChange = function () {};

        this.onModelTouched = function () {};

        this.validatorOnChange = function () {};

        this.parseValidator = function () {
          return _this.lastValueValid ? null : {
            'owlDateTimeParse': {
              'text': _this.elmRef.nativeElement.value
            }
          };
        };

        this.minValidator = function (control) {
          if (_this.isInSingleMode) {
            var controlValue = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value));

            return !_this.min || !controlValue || _this.dateTimeAdapter.compare(_this.min, controlValue) <= 0 ? null : {
              'owlDateTimeMin': {
                'min': _this.min,
                'actual': controlValue
              }
            };
          } else if (_this.isInRangeMode && control.value) {
            var controlValueFrom = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[0]));

            var controlValueTo = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[1]));

            return !_this.min || !controlValueFrom || !controlValueTo || _this.dateTimeAdapter.compare(_this.min, controlValueFrom) <= 0 ? null : {
              'owlDateTimeMin': {
                'min': _this.min,
                'actual': [controlValueFrom, controlValueTo]
              }
            };
          }
        };

        this.maxValidator = function (control) {
          if (_this.isInSingleMode) {
            var controlValue = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value));

            return !_this.max || !controlValue || _this.dateTimeAdapter.compare(_this.max, controlValue) >= 0 ? null : {
              'owlDateTimeMax': {
                'max': _this.max,
                'actual': controlValue
              }
            };
          } else if (_this.isInRangeMode && control.value) {
            var controlValueFrom = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[0]));

            var controlValueTo = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[1]));

            return !_this.max || !controlValueFrom || !controlValueTo || _this.dateTimeAdapter.compare(_this.max, controlValueTo) >= 0 ? null : {
              'owlDateTimeMax': {
                'max': _this.max,
                'actual': [controlValueFrom, controlValueTo]
              }
            };
          }
        };

        this.filterValidator = function (control) {
          var controlValue = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value));

          return !_this._dateTimeFilter || !controlValue || _this._dateTimeFilter(controlValue) ? null : {
            'owlDateTimeFilter': true
          };
        };

        this.rangeValidator = function (control) {
          if (_this.isInSingleMode || !control.value) {
            return null;
          }

          var controlValueFrom = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[0]));

          var controlValueTo = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[1]));

          return !controlValueFrom || !controlValueTo || _this.dateTimeAdapter.compare(controlValueFrom, controlValueTo) <= 0 ? null : {
            'owlDateTimeRange': true
          };
        };

        this.validator = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([this.parseValidator, this.minValidator, this.maxValidator, this.filterValidator, this.rangeValidator]);
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        if (!this.dateTimeAdapter) {
          throw Error("OwlDateTimePicker: No provider found for DateTimePicker. You must import one of the following " + "modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a " + "custom implementation.");
        }

        if (!this.dateTimeFormats) {
          throw Error("OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following " + "modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a " + "custom implementation.");
        }

        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(function () {
          _this.value = _this.value;
        });
      }

      Object.defineProperty(OwlDateTimeInputDirective.prototype, "owlDateTime", {
        set: function set(value) {
          this.registerDateTimePicker(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "owlDateTimeFilter", {
        set: function set(filter) {
          this._dateTimeFilter = filter;
          this.validatorOnChange();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "dateTimeFilter", {
        get: function get() {
          return this._dateTimeFilter;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "disabled", {
        get: function get() {
          return !!this._disabled;
        },
        set: function set(value) {
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
          var element = this.elmRef.nativeElement;

          if (this._disabled !== newValue) {
            this._disabled = newValue;
            this.disabledChange.emit(newValue);
          }

          if (newValue && element.blur) {
            element.blur();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "min", {
        get: function get() {
          return this._min;
        },
        set: function set(value) {
          this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value));
          this.validatorOnChange();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "max", {
        get: function get() {
          return this._max;
        },
        set: function set(value) {
          this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value));
          this.validatorOnChange();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "selectMode", {
        get: function get() {
          return this._selectMode;
        },
        set: function set(mode) {
          if (mode !== 'single' && mode !== 'range' && mode !== 'rangeFrom' && mode !== 'rangeTo') {
            throw Error('OwlDateTime Error: invalid selectMode value!');
          }

          this._selectMode = mode;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "value", {
        get: function get() {
          return this._value;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this.lastValueValid = !value || this.dateTimeAdapter.isValid(value);
          value = this.getValidDate(value);
          var oldDate = this._value;
          this._value = value;
          this.formatNativeInputValue();

          if (!this.dateTimeAdapter.isEqual(oldDate, value)) {
            this.valueChange.emit(value);
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "values", {
        get: function get() {
          return this._values;
        },
        set: function set(values) {
          var _this = this;

          if (values && values.length > 0) {
            this._values = values.map(function (v) {
              v = _this.dateTimeAdapter.deserialize(v);
              return _this.getValidDate(v);
            });
            this.lastValueValid = (!this._values[0] || this.dateTimeAdapter.isValid(this._values[0])) && (!this._values[1] || this.dateTimeAdapter.isValid(this._values[1]));
          } else {
            this._values = [];
            this.lastValueValid = true;
          }

          this.formatNativeInputValue();
          this.valueChange.emit(this._values);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "elementRef", {
        get: function get() {
          return this.elmRef;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "isInSingleMode", {
        get: function get() {
          return this._selectMode === 'single';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "isInRangeMode", {
        get: function get() {
          return this._selectMode === 'range' || this._selectMode === 'rangeFrom' || this._selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "owlDateTimeInputAriaHaspopup", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "owlDateTimeInputAriaOwns", {
        get: function get() {
          return this.dtPicker.opened && this.dtPicker.id || null;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "minIso8601", {
        get: function get() {
          return this.min ? this.dateTimeAdapter.toIso8601(this.min) : null;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "maxIso8601", {
        get: function get() {
          return this.max ? this.dateTimeAdapter.toIso8601(this.max) : null;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeInputDirective.prototype, "owlDateTimeInputDisabled", {
        get: function get() {
          return this.disabled;
        },
        enumerable: true,
        configurable: true
      });

      OwlDateTimeInputDirective.prototype.ngOnInit = function () {
        if (!this.dtPicker) {
          throw Error("OwlDateTimePicker: the picker input doesn't have any associated owl-date-time component");
        }
      };

      OwlDateTimeInputDirective.prototype.ngAfterContentInit = function () {
        var _this = this;

        this.dtPickerSub = this.dtPicker.confirmSelectedChange.subscribe(function (selecteds) {
          if (Array.isArray(selecteds)) {
            _this.values = selecteds;
          } else {
            _this.value = selecteds;
          }

          _this.onModelChange(selecteds);

          _this.onModelTouched();

          _this.dateTimeChange.emit({
            source: _this,
            value: selecteds,
            input: _this.elmRef.nativeElement
          });

          _this.dateTimeInput.emit({
            source: _this,
            value: selecteds,
            input: _this.elmRef.nativeElement
          });
        });
      };

      OwlDateTimeInputDirective.prototype.ngOnDestroy = function () {
        this.dtPickerSub.unsubscribe();
        this.localeSub.unsubscribe();
        this.valueChange.complete();
        this.disabledChange.complete();
      };

      OwlDateTimeInputDirective.prototype.writeValue = function (value) {
        if (this.isInSingleMode) {
          this.value = value;
        } else {
          this.values = value;
        }
      };

      OwlDateTimeInputDirective.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
      };

      OwlDateTimeInputDirective.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
      };

      OwlDateTimeInputDirective.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
      };

      OwlDateTimeInputDirective.prototype.validate = function (c) {
        return this.validator ? this.validator(c) : null;
      };

      OwlDateTimeInputDirective.prototype.registerOnValidatorChange = function (fn) {
        this.validatorOnChange = fn;
      };

      OwlDateTimeInputDirective.prototype.handleKeydownOnHost = function (event) {
        if (event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DOWN_ARROW"]) {
          this.dtPicker.open();
          event.preventDefault();
        }
      };

      OwlDateTimeInputDirective.prototype.handleBlurOnHost = function (event) {
        this.onModelTouched();
      };

      OwlDateTimeInputDirective.prototype.handleInputOnHost = function (event) {
        var value = event.target.value;

        if (this._selectMode === 'single') {
          this.changeInputInSingleMode(value);
        } else if (this._selectMode === 'range') {
          this.changeInputInRangeMode(value);
        } else {
          this.changeInputInRangeFromToMode(value);
        }
      };

      OwlDateTimeInputDirective.prototype.handleChangeOnHost = function (event) {
        var v;

        if (this.isInSingleMode) {
          v = this.value;
        } else if (this.isInRangeMode) {
          v = this.values;
        }

        this.dateTimeChange.emit({
          source: this,
          value: v,
          input: this.elmRef.nativeElement
        });
      };

      OwlDateTimeInputDirective.prototype.formatNativeInputValue = function () {
        if (this.isInSingleMode) {
          this.renderer.setProperty(this.elmRef.nativeElement, 'value', this._value ? this.dateTimeAdapter.format(this._value, this.dtPicker.formatString) : '');
        } else if (this.isInRangeMode) {
          if (this._values && this.values.length > 0) {
            var from = this._values[0];
            var to = this._values[1];
            var fromFormatted = from ? this.dateTimeAdapter.format(from, this.dtPicker.formatString) : '';
            var toFormatted = to ? this.dateTimeAdapter.format(to, this.dtPicker.formatString) : '';

            if (!fromFormatted && !toFormatted) {
              this.renderer.setProperty(this.elmRef.nativeElement, 'value', null);
            } else {
              if (this._selectMode === 'range') {
                this.renderer.setProperty(this.elmRef.nativeElement, 'value', fromFormatted + ' ' + this.rangeSeparator + ' ' + toFormatted);
              } else if (this._selectMode === 'rangeFrom') {
                this.renderer.setProperty(this.elmRef.nativeElement, 'value', fromFormatted);
              } else if (this._selectMode === 'rangeTo') {
                this.renderer.setProperty(this.elmRef.nativeElement, 'value', toFormatted);
              }
            }
          } else {
            this.renderer.setProperty(this.elmRef.nativeElement, 'value', '');
          }
        }

        return;
      };

      OwlDateTimeInputDirective.prototype.registerDateTimePicker = function (picker) {
        if (picker) {
          this.dtPicker = picker;
          this.dtPicker.registerInput(this);
        }
      };

      OwlDateTimeInputDirective.prototype.getValidDate = function (obj) {
        return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
      };

      OwlDateTimeInputDirective.prototype.convertTimeStringToDateTimeString = function (timeString, dateTime) {
        if (timeString) {
          var v = dateTime || this.dateTimeAdapter.now();
          var dateString = this.dateTimeAdapter.format(v, this.dateTimeFormats.datePickerInput);
          return dateString + ' ' + timeString;
        } else {
          return null;
        }
      };

      OwlDateTimeInputDirective.prototype.changeInputInSingleMode = function (inputValue) {
        var value = inputValue;

        if (this.dtPicker.pickerType === 'timer') {
          value = this.convertTimeStringToDateTimeString(value, this.value);
        }

        var result = this.dateTimeAdapter.parse(value, this.dateTimeFormats.parseInput);
        this.lastValueValid = !result || this.dateTimeAdapter.isValid(result);
        result = this.getValidDate(result);

        if (!this.isSameValue(result, this._value) || result === null) {
          this._value = result;
          this.valueChange.emit(result);
          this.onModelChange(result);
          this.dateTimeInput.emit({
            source: this,
            value: result,
            input: this.elmRef.nativeElement
          });
        }
      };

      OwlDateTimeInputDirective.prototype.changeInputInRangeFromToMode = function (inputValue) {
        var originalValue = this._selectMode === 'rangeFrom' ? this._values[0] : this._values[1];

        if (this.dtPicker.pickerType === 'timer') {
          inputValue = this.convertTimeStringToDateTimeString(inputValue, originalValue);
        }

        var result = this.dateTimeAdapter.parse(inputValue, this.dateTimeFormats.parseInput);
        this.lastValueValid = !result || this.dateTimeAdapter.isValid(result);
        result = this.getValidDate(result);

        if (this._selectMode === 'rangeFrom' && this.isSameValue(result, this._values[0]) && result || this._selectMode === 'rangeTo' && this.isSameValue(result, this._values[1]) && result) {
          return;
        }

        this._values = this._selectMode === 'rangeFrom' ? [result, this._values[1]] : [this._values[0], result];
        this.valueChange.emit(this._values);
        this.onModelChange(this._values);
        this.dateTimeInput.emit({
          source: this,
          value: this._values,
          input: this.elmRef.nativeElement
        });
      };

      OwlDateTimeInputDirective.prototype.changeInputInRangeMode = function (inputValue) {
        var selecteds = inputValue.split(this.rangeSeparator);
        var fromString = selecteds[0];
        var toString = selecteds[1];

        if (this.dtPicker.pickerType === 'timer') {
          fromString = this.convertTimeStringToDateTimeString(fromString, this.values[0]);
          toString = this.convertTimeStringToDateTimeString(toString, this.values[1]);
        }

        var from = this.dateTimeAdapter.parse(fromString, this.dateTimeFormats.parseInput);
        var to = this.dateTimeAdapter.parse(toString, this.dateTimeFormats.parseInput);
        this.lastValueValid = (!from || this.dateTimeAdapter.isValid(from)) && (!to || this.dateTimeAdapter.isValid(to));
        from = this.getValidDate(from);
        to = this.getValidDate(to);

        if (!this.isSameValue(from, this._values[0]) || !this.isSameValue(to, this._values[1]) || from === null && to === null) {
          this._values = [from, to];
          this.valueChange.emit(this._values);
          this.onModelChange(this._values);
          this.dateTimeInput.emit({
            source: this,
            value: this._values,
            input: this.elmRef.nativeElement
          });
        }
      };

      OwlDateTimeInputDirective.prototype.isSameValue = function (first, second) {
        if (first && second) {
          return this.dateTimeAdapter.compare(first, second) === 0;
        }

        return first == second;
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", _date_time_picker_component__WEBPACK_IMPORTED_MODULE_3__["OwlDateTimeComponent"]), __metadata("design:paramtypes", [_date_time_picker_component__WEBPACK_IMPORTED_MODULE_3__["OwlDateTimeComponent"]])], OwlDateTimeInputDirective.prototype, "owlDateTime", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Function), __metadata("design:paramtypes", [Function])], OwlDateTimeInputDirective.prototype, "owlDateTimeFilter", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], OwlDateTimeInputDirective.prototype, "_disabled", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlDateTimeInputDirective.prototype, "min", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlDateTimeInputDirective.prototype, "max", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], OwlDateTimeInputDirective.prototype, "selectMode", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlDateTimeInputDirective.prototype, "rangeSeparator", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlDateTimeInputDirective.prototype, "value", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], OwlDateTimeInputDirective.prototype, "values", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlDateTimeInputDirective.prototype, "dateTimeChange", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlDateTimeInputDirective.prototype, "dateTimeInput", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.aria-haspopup'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlDateTimeInputDirective.prototype, "owlDateTimeInputAriaHaspopup", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.aria-owns'), __metadata("design:type", String), __metadata("design:paramtypes", [])], OwlDateTimeInputDirective.prototype, "owlDateTimeInputAriaOwns", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.min'), __metadata("design:type", String), __metadata("design:paramtypes", [])], OwlDateTimeInputDirective.prototype, "minIso8601", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.max'), __metadata("design:type", String), __metadata("design:paramtypes", [])], OwlDateTimeInputDirective.prototype, "maxIso8601", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('disabled'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlDateTimeInputDirective.prototype, "owlDateTimeInputDisabled", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [KeyboardEvent]), __metadata("design:returntype", void 0)], OwlDateTimeInputDirective.prototype, "handleKeydownOnHost", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Event]), __metadata("design:returntype", void 0)], OwlDateTimeInputDirective.prototype, "handleBlurOnHost", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], OwlDateTimeInputDirective.prototype, "handleInputOnHost", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('change', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], OwlDateTimeInputDirective.prototype, "handleChangeOnHost", null);

      OwlDateTimeInputDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: 'input[owlDateTime]',
        exportAs: 'owlDateTimeInput',
        providers: [OWL_DATETIME_VALUE_ACCESSOR, OWL_DATETIME_VALIDATORS]
      }), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_5__["OWL_DATE_TIME_FORMATS"])), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_4__["DateTimeAdapter"], Object])], OwlDateTimeInputDirective);
      return OwlDateTimeInputDirective;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js ***!
    \**********************************************************************************/

  /*! exports provided: OwlDateTimeIntl */

  /***/
  function node_modulesNgPickDatetimeDateTimeDateTimePickerIntlServiceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeIntl", function () {
      return OwlDateTimeIntl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var OwlDateTimeIntl = function () {
      function OwlDateTimeIntl() {
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.upSecondLabel = 'Add a second';
        this.downSecondLabel = 'Minus a second';
        this.upMinuteLabel = 'Add a minute';
        this.downMinuteLabel = 'Minus a minute';
        this.upHourLabel = 'Add a hour';
        this.downHourLabel = 'Minus a hour';
        this.prevMonthLabel = 'Previous month';
        this.nextMonthLabel = 'Next month';
        this.prevYearLabel = 'Previous year';
        this.nextYearLabel = 'Next year';
        this.prevMultiYearLabel = 'Previous 21 years';
        this.nextMultiYearLabel = 'Next 21 years';
        this.switchToMonthViewLabel = 'Change to month view';
        this.switchToMultiYearViewLabel = 'Choose month and year';
        this.cancelBtnLabel = 'Cancel';
        this.setBtnLabel = 'Set';
        this.rangeFromLabel = 'From';
        this.rangeToLabel = 'To';
        this.hour12AMLabel = 'AM';
        this.hour12PMLabel = 'PM';
      }

      OwlDateTimeIntl.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]({
        factory: function OwlDateTimeIntl_Factory() {
          return new OwlDateTimeIntl();
        },
        token: OwlDateTimeIntl,
        providedIn: "root"
      });
      OwlDateTimeIntl = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })], OwlDateTimeIntl);
      return OwlDateTimeIntl;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/date-time-picker-trigger.directive.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/date-time-picker-trigger.directive.js ***!
    \***************************************************************************************/

  /*! exports provided: OwlDateTimeTriggerDirective */

  /***/
  function node_modulesNgPickDatetimeDateTimeDateTimePickerTriggerDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeTriggerDirective", function () {
      return OwlDateTimeTriggerDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _date_time_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./date-time-picker.component */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker.component.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var OwlDateTimeTriggerDirective = function () {
      function OwlDateTimeTriggerDirective(changeDetector) {
        this.changeDetector = changeDetector;
        this.stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
      }

      Object.defineProperty(OwlDateTimeTriggerDirective.prototype, "disabled", {
        get: function get() {
          return this._disabled === undefined ? this.dtPicker.disabled : !!this._disabled;
        },
        set: function set(value) {
          this._disabled = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeTriggerDirective.prototype, "owlDTTriggerDisabledClass", {
        get: function get() {
          return this.disabled;
        },
        enumerable: true,
        configurable: true
      });

      OwlDateTimeTriggerDirective.prototype.ngOnInit = function () {};

      OwlDateTimeTriggerDirective.prototype.ngOnChanges = function (changes) {
        if (changes.datepicker) {
          this.watchStateChanges();
        }
      };

      OwlDateTimeTriggerDirective.prototype.ngAfterContentInit = function () {
        this.watchStateChanges();
      };

      OwlDateTimeTriggerDirective.prototype.ngOnDestroy = function () {
        this.stateChanges.unsubscribe();
      };

      OwlDateTimeTriggerDirective.prototype.handleClickOnHost = function (event) {
        if (this.dtPicker) {
          this.dtPicker.open();
          event.stopPropagation();
        }
      };

      OwlDateTimeTriggerDirective.prototype.watchStateChanges = function () {
        var _this = this;

        this.stateChanges.unsubscribe();
        var inputDisabled = this.dtPicker && this.dtPicker.dtInput ? this.dtPicker.dtInput.disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        var pickerDisabled = this.dtPicker ? this.dtPicker.disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        this.stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(pickerDisabled, inputDisabled).subscribe(function () {
          _this.changeDetector.markForCheck();
        });
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('owlDateTimeTrigger'), __metadata("design:type", _date_time_picker_component__WEBPACK_IMPORTED_MODULE_1__["OwlDateTimeComponent"])], OwlDateTimeTriggerDirective.prototype, "dtPicker", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], OwlDateTimeTriggerDirective.prototype, "disabled", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-trigger-disabled'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlDateTimeTriggerDirective.prototype, "owlDTTriggerDisabledClass", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Event]), __metadata("design:returntype", void 0)], OwlDateTimeTriggerDirective.prototype, "handleClickOnHost", null);

      OwlDateTimeTriggerDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[owlDateTimeTrigger]'
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], OwlDateTimeTriggerDirective);
      return OwlDateTimeTriggerDirective;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/date-time-picker.animations.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/date-time-picker.animations.js ***!
    \********************************************************************************/

  /*! exports provided: owlDateTimePickerAnimations */

  /***/
  function node_modulesNgPickDatetimeDateTimeDateTimePickerAnimationsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "owlDateTimePickerAnimations", function () {
      return owlDateTimePickerAnimations;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var owlDateTimePickerAnimations = {
      transformPicker: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPicker', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scale(1, 0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scale(1, 1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@fadeInPicker', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('enter => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      })))]),
      fadeInPicker: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInPicker', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
    };
    /***/
  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/date-time-picker.component.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/date-time-picker.component.js ***!
    \*******************************************************************************/

  /*! exports provided: OWL_DTPICKER_SCROLL_STRATEGY, OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY, OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER, OwlDateTimeComponent */

  /***/
  function node_modulesNgPickDatetimeDateTimeDateTimePickerComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DTPICKER_SCROLL_STRATEGY", function () {
      return OWL_DTPICKER_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER", function () {
      return OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeComponent", function () {
      return OwlDateTimeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./date-time-picker-container.component */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.js");
    /* harmony import */


    var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./adapter/date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
    /* harmony import */


    var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./adapter/date-time-format.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
    /* harmony import */


    var _date_time_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./date-time.class */
    "./node_modules/ng-pick-datetime/date-time/date-time.class.js");
    /* harmony import */


    var _dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../dialog */
    "./node_modules/ng-pick-datetime/dialog/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __extends = undefined && undefined.__extends || function () {
      var _extendStatics3 = function extendStatics(d, b) {
        _extendStatics3 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics3(d, b);
      };

      return function (d, b) {
        _extendStatics3(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var OWL_DTPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('owl-dtpicker-scroll-strategy');

    function OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return function () {
        return overlay.scrollStrategies.block();
      };
    }

    var OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER = {
      provide: OWL_DTPICKER_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]],
      useFactory: OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY
    };

    var OwlDateTimeComponent = function (_super) {
      __extends(OwlDateTimeComponent, _super);

      function OwlDateTimeComponent(overlay, viewContainerRef, dialogService, ngZone, changeDetector, dateTimeAdapter, defaultScrollStrategy, dateTimeFormats, document) {
        var _this = _super.call(this, dateTimeAdapter, dateTimeFormats) || this;

        _this.overlay = overlay;
        _this.viewContainerRef = viewContainerRef;
        _this.dialogService = dialogService;
        _this.ngZone = ngZone;
        _this.changeDetector = changeDetector;
        _this.dateTimeAdapter = dateTimeAdapter;
        _this.defaultScrollStrategy = defaultScrollStrategy;
        _this.dateTimeFormats = dateTimeFormats;
        _this.document = document;
        _this.backdropClass = [];
        _this.panelClass = [];
        _this._pickerType = 'both';
        _this._pickerMode = 'popup';
        _this._opened = false;
        _this.afterPickerClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.afterPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.confirmSelectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.dtInputSub = rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"].EMPTY;
        _this.hidePickerStreamSub = rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"].EMPTY;
        _this.confirmSelectedStreamSub = rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"].EMPTY;
        _this.pickerOpenedStreamSub = rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"].EMPTY;
        _this.focusedElementBeforeOpen = null;
        _this._selecteds = [];
        return _this;
      }

      Object.defineProperty(OwlDateTimeComponent.prototype, "startAt", {
        get: function get() {
          if (this._startAt) {
            return this._startAt;
          }

          if (this._dtInput) {
            if (this._dtInput.selectMode === 'single') {
              return this._dtInput.value || null;
            } else if (this._dtInput.selectMode === 'range' || this._dtInput.selectMode === 'rangeFrom') {
              return this._dtInput.values[0] || null;
            } else if (this._dtInput.selectMode === 'rangeTo') {
              return this._dtInput.values[1] || null;
            }
          } else {
            return null;
          }
        },
        set: function set(date) {
          this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "pickerType", {
        get: function get() {
          return this._pickerType;
        },
        set: function set(val) {
          if (val !== this._pickerType) {
            this._pickerType = val;

            if (this._dtInput) {
              this._dtInput.formatNativeInputValue();
            }
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "pickerMode", {
        get: function get() {
          return this._pickerMode;
        },
        set: function set(mode) {
          if (mode === 'popup') {
            this._pickerMode = mode;
          } else {
            this._pickerMode = 'dialog';
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "disabled", {
        get: function get() {
          return this._disabled === undefined && this._dtInput ? this._dtInput.disabled : !!this._disabled;
        },
        set: function set(value) {
          value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);

          if (value !== this._disabled) {
            this._disabled = value;
            this.disabledChange.next(value);
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "opened", {
        get: function get() {
          return this._opened;
        },
        set: function set(val) {
          val ? this.open() : this.close();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "dtInput", {
        get: function get() {
          return this._dtInput;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "selected", {
        get: function get() {
          return this._selected;
        },
        set: function set(value) {
          this._selected = value;
          this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "selecteds", {
        get: function get() {
          return this._selecteds;
        },
        set: function set(values) {
          this._selecteds = values;
          this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "minDateTime", {
        get: function get() {
          return this._dtInput && this._dtInput.min;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "maxDateTime", {
        get: function get() {
          return this._dtInput && this._dtInput.max;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "dateTimeFilter", {
        get: function get() {
          return this._dtInput && this._dtInput.dateTimeFilter;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "selectMode", {
        get: function get() {
          return this._dtInput.selectMode;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "isInSingleMode", {
        get: function get() {
          return this._dtInput.isInSingleMode;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTimeComponent.prototype, "isInRangeMode", {
        get: function get() {
          return this._dtInput.isInRangeMode;
        },
        enumerable: true,
        configurable: true
      });

      OwlDateTimeComponent.prototype.ngOnInit = function () {};

      OwlDateTimeComponent.prototype.ngOnDestroy = function () {
        this.close();
        this.dtInputSub.unsubscribe();
        this.disabledChange.complete();

        if (this.popupRef) {
          this.popupRef.dispose();
        }
      };

      OwlDateTimeComponent.prototype.registerInput = function (input) {
        var _this = this;

        if (this._dtInput) {
          throw Error('A Owl DateTimePicker can only be associated with a single input.');
        }

        this._dtInput = input;
        this.dtInputSub = this._dtInput.valueChange.subscribe(function (value) {
          if (Array.isArray(value)) {
            _this.selecteds = value;
          } else {
            _this.selected = value;
          }
        });
      };

      OwlDateTimeComponent.prototype.open = function () {
        var _this = this;

        if (this._opened || this.disabled) {
          return;
        }

        if (!this._dtInput) {
          throw Error('Attempted to open an DateTimePicker with no associated input.');
        }

        if (this.document) {
          this.focusedElementBeforeOpen = this.document.activeElement;
        }

        if (this.isInSingleMode) {
          this.selected = this._dtInput.value;
        } else if (this.isInRangeMode) {
          this.selecteds = this._dtInput.values;
        }

        if (this.selected && this.pickerType !== 'calendar' && this._startAt) {
          this.selected = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.selected), this.dateTimeAdapter.getMonth(this.selected), this.dateTimeAdapter.getDate(this.selected), this.dateTimeAdapter.getHours(this._startAt), this.dateTimeAdapter.getMinutes(this._startAt), this.dateTimeAdapter.getSeconds(this._startAt));
        }

        this.pickerMode === 'dialog' ? this.openAsDialog() : this.openAsPopup();
        this.pickerContainer.picker = this;
        this.hidePickerStreamSub = this.pickerContainer.hidePickerStream.subscribe(function () {
          _this.close();
        });
        this.confirmSelectedStreamSub = this.pickerContainer.confirmSelectedStream.subscribe(function (event) {
          _this.confirmSelect(event);
        });
      };

      OwlDateTimeComponent.prototype.select = function (date) {
        if (Array.isArray(date)) {
          this.selecteds = date.slice();
        } else {
          this.selected = date;
        }

        if (this.pickerMode !== 'dialog' && this.pickerType === 'calendar' && (this.selectMode === 'single' && this.selected || this.selectMode === 'rangeFrom' && this.selecteds[0] || this.selectMode === 'rangeTo' && this.selecteds[1] || this.selectMode === 'range' && this.selecteds[0] && this.selecteds[1])) {
          this.confirmSelect();
        }
      };

      OwlDateTimeComponent.prototype.selectYear = function (normalizedYear) {
        this.yearSelected.emit(normalizedYear);
      };

      OwlDateTimeComponent.prototype.selectMonth = function (normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
      };

      OwlDateTimeComponent.prototype.close = function () {
        var _this = this;

        if (!this._opened) {
          return;
        }

        if (this.popupRef && this.popupRef.hasAttached()) {
          this.popupRef.detach();
        }

        if (this.pickerContainerPortal && this.pickerContainerPortal.isAttached) {
          this.pickerContainerPortal.detach();
        }

        if (this.hidePickerStreamSub) {
          this.hidePickerStreamSub.unsubscribe();
          this.hidePickerStreamSub = null;
        }

        if (this.confirmSelectedStreamSub) {
          this.confirmSelectedStreamSub.unsubscribe();
          this.confirmSelectedStreamSub = null;
        }

        if (this.pickerOpenedStreamSub) {
          this.pickerOpenedStreamSub.unsubscribe();
          this.pickerOpenedStreamSub = null;
        }

        if (this.dialogRef) {
          this.dialogRef.close();
          this.dialogRef = null;
        }

        var completeClose = function completeClose() {
          if (_this._opened) {
            _this._opened = false;

            _this.afterPickerClosed.emit(null);

            _this.focusedElementBeforeOpen = null;
          }
        };

        if (this.focusedElementBeforeOpen && typeof this.focusedElementBeforeOpen.focus === 'function') {
          this.focusedElementBeforeOpen.focus();
          setTimeout(completeClose);
        } else {
          completeClose();
        }
      };

      OwlDateTimeComponent.prototype.confirmSelect = function (event) {
        if (this.isInSingleMode) {
          var selected = this.selected || this.startAt || this.dateTimeAdapter.now();
          this.confirmSelectedChange.emit(selected);
        } else if (this.isInRangeMode) {
          this.confirmSelectedChange.emit(this.selecteds);
        }

        this.close();
        return;
      };

      OwlDateTimeComponent.prototype.openAsDialog = function () {
        var _this = this;

        this.dialogRef = this.dialogService.open(_date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeContainerComponent"], {
          autoFocus: false,
          backdropClass: ['cdk-overlay-dark-backdrop'].concat(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(this.backdropClass)),
          paneClass: ['owl-dt-dialog'].concat(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(this.panelClass)),
          viewContainerRef: this.viewContainerRef,
          scrollStrategy: this.scrollStrategy || this.defaultScrollStrategy()
        });
        this.pickerContainer = this.dialogRef.componentInstance;
        this.dialogRef.afterOpen().subscribe(function () {
          _this.afterPickerOpen.emit(null);

          _this._opened = true;
        });
        this.dialogRef.afterClosed().subscribe(function () {
          return _this.close();
        });
      };

      OwlDateTimeComponent.prototype.openAsPopup = function () {
        var _this = this;

        if (!this.pickerContainerPortal) {
          this.pickerContainerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeContainerComponent"], this.viewContainerRef);
        }

        if (!this.popupRef) {
          this.createPopup();
        }

        if (!this.popupRef.hasAttached()) {
          var componentRef = this.popupRef.attach(this.pickerContainerPortal);
          this.pickerContainer = componentRef.instance;
          this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
            _this.popupRef.updatePosition();
          });
          this.pickerOpenedStreamSub = this.pickerContainer.pickerOpenedStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
            _this.afterPickerOpen.emit(null);

            _this._opened = true;
          });
        }
      };

      OwlDateTimeComponent.prototype.createPopup = function () {
        var _this = this;

        var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayConfig"]({
          positionStrategy: this.createPopupPositionStrategy(),
          hasBackdrop: true,
          backdropClass: ['cdk-overlay-transparent-backdrop'].concat(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(this.backdropClass)),
          scrollStrategy: this.scrollStrategy || this.defaultScrollStrategy(),
          panelClass: ['owl-dt-popup'].concat(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(this.panelClass))
        });
        this.popupRef = this.overlay.create(overlayConfig);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(this.popupRef.backdropClick(), this.popupRef.detachments(), this.popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(function (event) {
          return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ESCAPE"] || _this._dtInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["UP_ARROW"];
        }))).subscribe(function () {
          return _this.close();
        });
      };

      OwlDateTimeComponent.prototype.createPopupPositionStrategy = function () {
        return this.overlay.position().flexibleConnectedTo(this._dtInput.elementRef).withTransformOriginOn('.owl-dt-container').withFlexibleDimensions(false).withPush(false).withPositions([{
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        }, {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom'
        }, {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top'
        }, {
          originX: 'end',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'bottom'
        }, {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: -176
        }, {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: -352
        }]);
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlDateTimeComponent.prototype, "backdropClass", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlDateTimeComponent.prototype, "panelClass", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlDateTimeComponent.prototype, "startAt", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], OwlDateTimeComponent.prototype, "pickerType", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], OwlDateTimeComponent.prototype, "pickerMode", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], OwlDateTimeComponent.prototype, "disabled", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], OwlDateTimeComponent.prototype, "opened", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlDateTimeComponent.prototype, "scrollStrategy", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlDateTimeComponent.prototype, "afterPickerClosed", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlDateTimeComponent.prototype, "afterPickerOpen", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlDateTimeComponent.prototype, "yearSelected", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlDateTimeComponent.prototype, "monthSelected", void 0);

      OwlDateTimeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'owl-date-time',
        exportAs: 'owlDateTime',
        template: "",
        styles: [""],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false
      }), __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(OWL_DTPICKER_SCROLL_STRATEGY)), __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_8__["OWL_DATE_TIME_FORMATS"])), __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])), __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _dialog__WEBPACK_IMPORTED_MODULE_10__["OwlDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_7__["DateTimeAdapter"], Function, Object, Object])], OwlDateTimeComponent);
      return OwlDateTimeComponent;
    }(_date_time_class__WEBPACK_IMPORTED_MODULE_9__["OwlDateTime"]);
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/date-time.class.js":
  /*!********************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/date-time.class.js ***!
    \********************************************************************/

  /*! exports provided: OwlDateTime */

  /***/
  function node_modulesNgPickDatetimeDateTimeDateTimeClassJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTime", function () {
      return OwlDateTime;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./adapter/date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
    /* harmony import */


    var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adapter/date-time-format.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var nextUniqueId = 0;

    var OwlDateTime = function () {
      function OwlDateTime(dateTimeAdapter, dateTimeFormats) {
        var _this = this;

        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        this._showSecondsTimer = false;
        this._hour12Timer = false;
        this.startView = 'month';
        this._stepHour = 1;
        this._stepMinute = 1;
        this._stepSecond = 1;
        this._firstDayOfWeek = 0;
        this._hideOtherMonths = false;

        this.dateTimeChecker = function (dateTime) {
          return !!dateTime && (!_this.dateTimeFilter || _this.dateTimeFilter(dateTime)) && (!_this.minDateTime || _this.dateTimeAdapter.compare(dateTime, _this.minDateTime) >= 0) && (!_this.maxDateTime || _this.dateTimeAdapter.compare(dateTime, _this.maxDateTime) <= 0);
        };

        if (!this.dateTimeAdapter) {
          throw Error("OwlDateTimePicker: No provider found for DateTimeAdapter. You must import one of the following " + "modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a " + "custom implementation.");
        }

        if (!this.dateTimeFormats) {
          throw Error("OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following " + "modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a " + "custom implementation.");
        }

        this._id = "owl-dt-picker-" + nextUniqueId++;
      }

      Object.defineProperty(OwlDateTime.prototype, "showSecondsTimer", {
        get: function get() {
          return this._showSecondsTimer;
        },
        set: function set(val) {
          this._showSecondsTimer = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTime.prototype, "hour12Timer", {
        get: function get() {
          return this._hour12Timer;
        },
        set: function set(val) {
          this._hour12Timer = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTime.prototype, "stepHour", {
        get: function get() {
          return this._stepHour;
        },
        set: function set(val) {
          this._stepHour = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(val, 1);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTime.prototype, "stepMinute", {
        get: function get() {
          return this._stepMinute;
        },
        set: function set(val) {
          this._stepMinute = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(val, 1);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTime.prototype, "stepSecond", {
        get: function get() {
          return this._stepSecond;
        },
        set: function set(val) {
          this._stepSecond = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(val, 1);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTime.prototype, "firstDayOfWeek", {
        get: function get() {
          return this._firstDayOfWeek;
        },
        set: function set(value) {
          value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value, 0);

          if (value > 6 || value < 0) {
            this._firstDayOfWeek = 0;
          } else {
            this._firstDayOfWeek = value;
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTime.prototype, "hideOtherMonths", {
        get: function get() {
          return this._hideOtherMonths;
        },
        set: function set(val) {
          this._hideOtherMonths = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTime.prototype, "id", {
        get: function get() {
          return this._id;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTime.prototype, "formatString", {
        get: function get() {
          return this.pickerType === 'both' ? this.dateTimeFormats.fullPickerInput : this.pickerType === 'calendar' ? this.dateTimeFormats.datePickerInput : this.dateTimeFormats.timePickerInput;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDateTime.prototype, "disabled", {
        get: function get() {
          return false;
        },
        enumerable: true,
        configurable: true
      });

      OwlDateTime.prototype.getValidDate = function (obj) {
        return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], OwlDateTime.prototype, "showSecondsTimer", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], OwlDateTime.prototype, "hour12Timer", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], OwlDateTime.prototype, "startView", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], OwlDateTime.prototype, "stepHour", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], OwlDateTime.prototype, "stepMinute", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], OwlDateTime.prototype, "stepSecond", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], OwlDateTime.prototype, "firstDayOfWeek", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], OwlDateTime.prototype, "hideOtherMonths", null);

      OwlDateTime = __decorate([__param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_FORMATS"])), __metadata("design:paramtypes", [_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"], Object])], OwlDateTime);
      return OwlDateTime;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/date-time.module.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/date-time.module.js ***!
    \*********************************************************************/

  /*! exports provided: OwlDateTimeModule */

  /***/
  function node_modulesNgPickDatetimeDateTimeDateTimeModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeModule", function () {
      return OwlDateTimeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _date_time_picker_trigger_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./date-time-picker-trigger.directive */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker-trigger.directive.js");
    /* harmony import */


    var _date_time_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./date-time-picker.component */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker.component.js");
    /* harmony import */


    var _date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./date-time-picker-container.component */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.js");
    /* harmony import */


    var _date_time_picker_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./date-time-picker-input.directive */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker-input.directive.js");
    /* harmony import */


    var _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./date-time-picker-intl.service */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js");
    /* harmony import */


    var _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./calendar-month-view.component */
    "./node_modules/ng-pick-datetime/date-time/calendar-month-view.component.js");
    /* harmony import */


    var _calendar_body_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./calendar-body.component */
    "./node_modules/ng-pick-datetime/date-time/calendar-body.component.js");
    /* harmony import */


    var _calendar_year_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./calendar-year-view.component */
    "./node_modules/ng-pick-datetime/date-time/calendar-year-view.component.js");
    /* harmony import */


    var _calendar_multi_year_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./calendar-multi-year-view.component */
    "./node_modules/ng-pick-datetime/date-time/calendar-multi-year-view.component.js");
    /* harmony import */


    var _timer_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./timer-box.component */
    "./node_modules/ng-pick-datetime/date-time/timer-box.component.js");
    /* harmony import */


    var _timer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./timer.component */
    "./node_modules/ng-pick-datetime/date-time/timer.component.js");
    /* harmony import */


    var _numberedFixLen_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./numberedFixLen.pipe */
    "./node_modules/ng-pick-datetime/date-time/numberedFixLen.pipe.js");
    /* harmony import */


    var _calendar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./calendar.component */
    "./node_modules/ng-pick-datetime/date-time/calendar.component.js");
    /* harmony import */


    var _date_time_inline_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./date-time-inline.component */
    "./node_modules/ng-pick-datetime/date-time/date-time-inline.component.js");
    /* harmony import */


    var _dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../dialog */
    "./node_modules/ng-pick-datetime/dialog/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var OwlDateTimeModule = function () {
      function OwlDateTimeModule() {}

      OwlDateTimeModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _dialog__WEBPACK_IMPORTED_MODULE_18__["OwlDialogModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"]],
        exports: [_calendar_component__WEBPACK_IMPORTED_MODULE_16__["OwlCalendarComponent"], _timer_component__WEBPACK_IMPORTED_MODULE_14__["OwlTimerComponent"], _date_time_picker_trigger_directive__WEBPACK_IMPORTED_MODULE_4__["OwlDateTimeTriggerDirective"], _date_time_picker_input_directive__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeInputDirective"], _date_time_picker_component__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeComponent"], _date_time_inline_component__WEBPACK_IMPORTED_MODULE_17__["OwlDateTimeInlineComponent"], _calendar_multi_year_view_component__WEBPACK_IMPORTED_MODULE_12__["OwlMultiYearViewComponent"], _calendar_year_view_component__WEBPACK_IMPORTED_MODULE_11__["OwlYearViewComponent"], _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_9__["OwlMonthViewComponent"]],
        declarations: [_date_time_picker_trigger_directive__WEBPACK_IMPORTED_MODULE_4__["OwlDateTimeTriggerDirective"], _date_time_picker_input_directive__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeInputDirective"], _date_time_picker_component__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeComponent"], _date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeContainerComponent"], _calendar_multi_year_view_component__WEBPACK_IMPORTED_MODULE_12__["OwlMultiYearViewComponent"], _calendar_year_view_component__WEBPACK_IMPORTED_MODULE_11__["OwlYearViewComponent"], _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_9__["OwlMonthViewComponent"], _timer_component__WEBPACK_IMPORTED_MODULE_14__["OwlTimerComponent"], _timer_box_component__WEBPACK_IMPORTED_MODULE_13__["OwlTimerBoxComponent"], _calendar_component__WEBPACK_IMPORTED_MODULE_16__["OwlCalendarComponent"], _calendar_body_component__WEBPACK_IMPORTED_MODULE_10__["OwlCalendarBodyComponent"], _numberedFixLen_pipe__WEBPACK_IMPORTED_MODULE_15__["NumberFixedLenPipe"], _date_time_inline_component__WEBPACK_IMPORTED_MODULE_17__["OwlDateTimeInlineComponent"]],
        providers: [_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeIntl"], _date_time_picker_component__WEBPACK_IMPORTED_MODULE_5__["OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER"]],
        entryComponents: [_date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeContainerComponent"]]
      })], OwlDateTimeModule);
      return OwlDateTimeModule;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/index.js ***!
    \**********************************************************/

  /*! exports provided: OwlDateTimeModule, OwlDateTimeIntl, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE_PROVIDER, OWL_DATE_TIME_LOCALE, DateTimeAdapter, OWL_DATE_TIME_FORMATS, OwlDateTimeInlineComponent, OwlDateTimeComponent */

  /***/
  function node_modulesNgPickDatetimeDateTimeIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _date_time_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./date-time.module */
    "./node_modules/ng-pick-datetime/date-time/date-time.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeModule", function () {
      return _date_time_module__WEBPACK_IMPORTED_MODULE_0__["OwlDateTimeModule"];
    });
    /* harmony import */


    var _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./date-time-picker-intl.service */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeIntl", function () {
      return _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__["OwlDateTimeIntl"];
    });
    /* harmony import */


    var _adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./adapter/native-date-time.module */
    "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlNativeDateTimeModule", function () {
      return _adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_2__["OwlNativeDateTimeModule"];
    });
    /* harmony import */


    var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adapter/date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE_PROVIDER", function () {
      return _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_LOCALE_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE", function () {
      return _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_LOCALE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DateTimeAdapter", function () {
      return _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__["DateTimeAdapter"];
    });
    /* harmony import */


    var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./adapter/date-time-format.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_FORMATS", function () {
      return _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_4__["OWL_DATE_TIME_FORMATS"];
    });
    /* harmony import */


    var _date_time_inline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./date-time-inline.component */
    "./node_modules/ng-pick-datetime/date-time/date-time-inline.component.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeInlineComponent", function () {
      return _date_time_inline_component__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeInlineComponent"];
    });
    /* harmony import */


    var _date_time_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./date-time-picker.component */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker.component.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeComponent", function () {
      return _date_time_picker_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeComponent"];
    });
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/numberedFixLen.pipe.js":
  /*!************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/numberedFixLen.pipe.js ***!
    \************************************************************************/

  /*! exports provided: NumberFixedLenPipe */

  /***/
  function node_modulesNgPickDatetimeDateTimeNumberedFixLenPipeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberFixedLenPipe", function () {
      return NumberFixedLenPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var NumberFixedLenPipe = function () {
      function NumberFixedLenPipe() {}

      NumberFixedLenPipe.prototype.transform = function (num, len) {
        var number = Math.floor(num);
        var length = Math.floor(len);

        if (num === null || isNaN(number) || isNaN(length)) {
          return num;
        }

        var numString = number.toString();

        while (numString.length < length) {
          numString = '0' + numString;
        }

        return numString;
      };

      NumberFixedLenPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'numberFixedLen'
      })], NumberFixedLenPipe);
      return NumberFixedLenPipe;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/timer-box.component.js":
  /*!************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/timer-box.component.js ***!
    \************************************************************************/

  /*! exports provided: OwlTimerBoxComponent */

  /***/
  function node_modulesNgPickDatetimeDateTimeTimerBoxComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlTimerBoxComponent", function () {
      return OwlTimerBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var OwlTimerBoxComponent = function () {
      function OwlTimerBoxComponent() {
        this.showDivider = false;
        this.step = 1;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.inputStreamSub = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
      }

      Object.defineProperty(OwlTimerBoxComponent.prototype, "displayValue", {
        get: function get() {
          return this.boxValue || this.value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerBoxComponent.prototype, "owlDTTimerBoxClass", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });

      OwlTimerBoxComponent.prototype.ngOnInit = function () {
        var _this = this;

        this.inputStreamSub = this.inputStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (val) {
          if (val) {
            var inputValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(val, 0);

            _this.updateValueViaInput(inputValue);
          }
        });
      };

      OwlTimerBoxComponent.prototype.ngOnDestroy = function () {
        this.inputStreamSub.unsubscribe();
      };

      OwlTimerBoxComponent.prototype.upBtnClicked = function () {
        this.updateValue(this.value + this.step);
      };

      OwlTimerBoxComponent.prototype.downBtnClicked = function () {
        this.updateValue(this.value - this.step);
      };

      OwlTimerBoxComponent.prototype.handleInputChange = function (val) {
        this.inputStream.next(val);
      };

      OwlTimerBoxComponent.prototype.updateValue = function (value) {
        this.valueChange.emit(value);
      };

      OwlTimerBoxComponent.prototype.updateValueViaInput = function (value) {
        if (value > this.max || value < this.min) {
          return;
        }

        this.inputChange.emit(value);
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlTimerBoxComponent.prototype, "showDivider", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], OwlTimerBoxComponent.prototype, "upBtnAriaLabel", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], OwlTimerBoxComponent.prototype, "upBtnDisabled", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], OwlTimerBoxComponent.prototype, "downBtnAriaLabel", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], OwlTimerBoxComponent.prototype, "downBtnDisabled", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], OwlTimerBoxComponent.prototype, "boxValue", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], OwlTimerBoxComponent.prototype, "value", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], OwlTimerBoxComponent.prototype, "min", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], OwlTimerBoxComponent.prototype, "max", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlTimerBoxComponent.prototype, "step", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], OwlTimerBoxComponent.prototype, "inputLabel", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlTimerBoxComponent.prototype, "valueChange", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlTimerBoxComponent.prototype, "inputChange", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-timer-box'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlTimerBoxComponent.prototype, "owlDTTimerBoxClass", null);

      OwlTimerBoxComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        exportAs: 'owlDateTimeTimerBox',
        selector: 'owl-date-time-timer-box',
        template: "<div *ngIf=\"showDivider\" class=\"owl-dt-timer-divider\" aria-hidden=\"true\"></div><button class=\"owl-dt-control-button owl-dt-control-arrow-button\" type=\"button\" tabindex=\"-1\" [disabled]=\"upBtnDisabled\" [attr.aria-label]=\"upBtnAriaLabel\" (click)=\"upBtnClicked()\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\"><!-- <editor-fold desc=\"SVG Arrow Up\"> --> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451.847 451.846\" style=\"enable-background:new 0 0 451.847 451.846;\" xml:space=\"preserve\" width=\"100%\" height=\"100%\"><path d=\"M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z\"/></svg><!-- </editor-fold> --></span></button><label class=\"owl-dt-timer-content\"><input class=\"owl-dt-timer-input\" maxlength=\"2\" [value]=\"displayValue | numberFixedLen : 2\" (input)=\"handleInputChange(valueInput.value)\" #valueInput> <span class=\"owl-hidden-accessible\">{{inputLabel}}</span></label><button class=\"owl-dt-control-button owl-dt-control-arrow-button\" type=\"button\" tabindex=\"-1\" [disabled]=\"downBtnDisabled\" [attr.aria-label]=\"downBtnAriaLabel\" (click)=\"downBtnClicked()\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\"><!-- <editor-fold desc=\"SVG Arrow Down\"> --> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451.847 451.846\" style=\"enable-background:new 0 0 451.847 451.846;\" xml:space=\"preserve\" width=\"100%\" height=\"100%\"><path d=\"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z\"/></svg><!-- </editor-fold> --></span></button>",
        styles: [""],
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }), __metadata("design:paramtypes", [])], OwlTimerBoxComponent);
      return OwlTimerBoxComponent;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/date-time/timer.component.js":
  /*!********************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/date-time/timer.component.js ***!
    \********************************************************************/

  /*! exports provided: OwlTimerComponent */

  /***/
  function node_modulesNgPickDatetimeDateTimeTimerComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlTimerComponent", function () {
      return OwlTimerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./date-time-picker-intl.service */
    "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js");
    /* harmony import */


    var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./adapter/date-time-adapter.class */
    "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var OwlTimerComponent = function () {
      function OwlTimerComponent(ngZone, elmRef, pickerIntl, cdRef, dateTimeAdapter) {
        this.ngZone = ngZone;
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.isPM = false;
        this.stepHour = 1;
        this.stepMinute = 1;
        this.stepSecond = 1;
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      Object.defineProperty(OwlTimerComponent.prototype, "pickerMoment", {
        get: function get() {
          return this._pickerMoment;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "minDateTime", {
        get: function get() {
          return this._minDateTime;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this._minDateTime = this.getValidDate(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "maxDateTime", {
        get: function get() {
          return this._maxDateTime;
        },
        set: function set(value) {
          value = this.dateTimeAdapter.deserialize(value);
          this._maxDateTime = this.getValidDate(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "hourValue", {
        get: function get() {
          return this.dateTimeAdapter.getHours(this.pickerMoment);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "hourBoxValue", {
        get: function get() {
          var hours = this.hourValue;

          if (!this.hour12Timer) {
            return hours;
          } else {
            if (hours === 0) {
              hours = 12;
              this.isPM = false;
            } else if (hours > 0 && hours < 12) {
              this.isPM = false;
            } else if (hours === 12) {
              this.isPM = true;
            } else if (hours > 12 && hours < 24) {
              hours = hours - 12;
              this.isPM = true;
            }

            return hours;
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "minuteValue", {
        get: function get() {
          return this.dateTimeAdapter.getMinutes(this.pickerMoment);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "secondValue", {
        get: function get() {
          return this.dateTimeAdapter.getSeconds(this.pickerMoment);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "upHourButtonLabel", {
        get: function get() {
          return this.pickerIntl.upHourLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "downHourButtonLabel", {
        get: function get() {
          return this.pickerIntl.downHourLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "upMinuteButtonLabel", {
        get: function get() {
          return this.pickerIntl.upMinuteLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "downMinuteButtonLabel", {
        get: function get() {
          return this.pickerIntl.downMinuteLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "upSecondButtonLabel", {
        get: function get() {
          return this.pickerIntl.upSecondLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "downSecondButtonLabel", {
        get: function get() {
          return this.pickerIntl.downSecondLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "hour12ButtonLabel", {
        get: function get() {
          return this.isPM ? this.pickerIntl.hour12PMLabel : this.pickerIntl.hour12AMLabel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "owlDTTimerClass", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlTimerComponent.prototype, "owlDTTimeTabIndex", {
        get: function get() {
          return -1;
        },
        enumerable: true,
        configurable: true
      });

      OwlTimerComponent.prototype.ngOnInit = function () {};

      OwlTimerComponent.prototype.focus = function () {
        var _this = this;

        this.ngZone.runOutsideAngular(function () {
          _this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
            _this.elmRef.nativeElement.focus();
          });
        });
      };

      OwlTimerComponent.prototype.setHourValueViaInput = function (hours) {
        if (this.hour12Timer && this.isPM && hours >= 1 && hours <= 11) {
          hours = hours + 12;
        } else if (this.hour12Timer && !this.isPM && hours === 12) {
          hours = 0;
        }

        this.setHourValue(hours);
      };

      OwlTimerComponent.prototype.setHourValue = function (hours) {
        var m = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
      };

      OwlTimerComponent.prototype.setMinuteValue = function (minutes) {
        var m = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
      };

      OwlTimerComponent.prototype.setSecondValue = function (seconds) {
        var m = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
      };

      OwlTimerComponent.prototype.setMeridiem = function (event) {
        this.isPM = !this.isPM;
        var hours = this.hourValue;

        if (this.isPM) {
          hours = hours + 12;
        } else {
          hours = hours - 12;
        }

        if (hours >= 0 && hours <= 23) {
          this.setHourValue(hours);
        }

        this.cdRef.markForCheck();
        event.preventDefault();
      };

      OwlTimerComponent.prototype.upHourEnabled = function () {
        return !this.maxDateTime || this.compareHours(this.stepHour, this.maxDateTime) < 1;
      };

      OwlTimerComponent.prototype.downHourEnabled = function () {
        return !this.minDateTime || this.compareHours(-this.stepHour, this.minDateTime) > -1;
      };

      OwlTimerComponent.prototype.upMinuteEnabled = function () {
        return !this.maxDateTime || this.compareMinutes(this.stepMinute, this.maxDateTime) < 1;
      };

      OwlTimerComponent.prototype.downMinuteEnabled = function () {
        return !this.minDateTime || this.compareMinutes(-this.stepMinute, this.minDateTime) > -1;
      };

      OwlTimerComponent.prototype.upSecondEnabled = function () {
        return !this.maxDateTime || this.compareSeconds(this.stepSecond, this.maxDateTime) < 1;
      };

      OwlTimerComponent.prototype.downSecondEnabled = function () {
        return !this.minDateTime || this.compareSeconds(-this.stepSecond, this.minDateTime) > -1;
      };

      OwlTimerComponent.prototype.compareHours = function (amount, comparedDate) {
        var hours = this.dateTimeAdapter.getHours(this.pickerMoment) + amount;
        var result = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
        return this.dateTimeAdapter.compare(result, comparedDate);
      };

      OwlTimerComponent.prototype.compareMinutes = function (amount, comparedDate) {
        var minutes = this.dateTimeAdapter.getMinutes(this.pickerMoment) + amount;
        var result = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
        return this.dateTimeAdapter.compare(result, comparedDate);
      };

      OwlTimerComponent.prototype.compareSeconds = function (amount, comparedDate) {
        var seconds = this.dateTimeAdapter.getSeconds(this.pickerMoment) + amount;
        var result = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
        return this.dateTimeAdapter.compare(result, comparedDate);
      };

      OwlTimerComponent.prototype.getValidDate = function (obj) {
        return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlTimerComponent.prototype, "pickerMoment", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlTimerComponent.prototype, "minDateTime", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlTimerComponent.prototype, "maxDateTime", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], OwlTimerComponent.prototype, "showSecondsTimer", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], OwlTimerComponent.prototype, "hour12Timer", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlTimerComponent.prototype, "stepHour", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlTimerComponent.prototype, "stepMinute", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OwlTimerComponent.prototype, "stepSecond", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], OwlTimerComponent.prototype, "selectedChange", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dt-timer'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlTimerComponent.prototype, "owlDTTimerClass", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.tabindex'), __metadata("design:type", Number), __metadata("design:paramtypes", [])], OwlTimerComponent.prototype, "owlDTTimeTabIndex", null);

      OwlTimerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        exportAs: 'owlDateTimeTimer',
        selector: 'owl-date-time-timer',
        template: "<owl-date-time-timer-box [upBtnAriaLabel]=\"upHourButtonLabel\" [downBtnAriaLabel]=\"downHourButtonLabel\" [upBtnDisabled]=\"!upHourEnabled()\" [downBtnDisabled]=\"!downHourEnabled()\" [boxValue]=\"hourBoxValue\" [value]=\"hourValue\" [min]=\"0\" [max]=\"23\" [step]=\"stepHour\" [inputLabel]=\"'Hour'\" (inputChange)=\"setHourValueViaInput($event)\" (valueChange)=\"setHourValue($event)\"></owl-date-time-timer-box><owl-date-time-timer-box [showDivider]=\"true\" [upBtnAriaLabel]=\"upMinuteButtonLabel\" [downBtnAriaLabel]=\"downMinuteButtonLabel\" [upBtnDisabled]=\"!upMinuteEnabled()\" [downBtnDisabled]=\"!downMinuteEnabled()\" [value]=\"minuteValue\" [min]=\"0\" [max]=\"59\" [step]=\"stepMinute\" [inputLabel]=\"'Minute'\" (inputChange)=\"setMinuteValue($event)\" (valueChange)=\"setMinuteValue($event)\"></owl-date-time-timer-box><owl-date-time-timer-box *ngIf=\"showSecondsTimer\" [showDivider]=\"true\" [upBtnAriaLabel]=\"upSecondButtonLabel\" [downBtnAriaLabel]=\"downSecondButtonLabel\" [upBtnDisabled]=\"!upSecondEnabled()\" [downBtnDisabled]=\"!downSecondEnabled()\" [value]=\"secondValue\" [min]=\"0\" [max]=\"59\" [step]=\"stepSecond\" [inputLabel]=\"'Second'\" (inputChange)=\"setSecondValue($event)\" (valueChange)=\"setSecondValue($event)\"></owl-date-time-timer-box><div *ngIf=\"hour12Timer\" class=\"owl-dt-timer-hour12\"><button class=\"owl-dt-control-button owl-dt-timer-hour12-box\" type=\"button\" tabindex=\"0\" (click)=\"setMeridiem($event)\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\">{{hour12ButtonLabel}}</span></button></div>",
        styles: [""],
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__["OwlDateTimeIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"]])], OwlTimerComponent);
      return OwlTimerComponent;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/dialog/dialog-config.class.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/dialog/dialog-config.class.js ***!
    \*********************************************************************/

  /*! exports provided: OwlDialogConfig */

  /***/
  function node_modulesNgPickDatetimeDialogDialogConfigClassJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDialogConfig", function () {
      return OwlDialogConfig;
    });
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");

    var uniqueId = 0;

    var OwlDialogConfig = function () {
      function OwlDialogConfig() {
        this.ariaDescribedBy = null;
        this.autoFocus = true;
        this.hasBackdrop = true;
        this.data = null;
        this.disableClose = false;
        this.role = 'dialog';
        this.paneClass = '';
        this.event = null;
        this.backdropClass = '';
        this.closeOnNavigation = true;
        this.width = '';
        this.height = '';
        this.maxWidth = '85vw';
        this.scrollStrategy = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["NoopScrollStrategy"]();
        this.id = "owl-dialog-" + uniqueId++;
      }

      return OwlDialogConfig;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/dialog/dialog-container.component.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/dialog/dialog-container.component.js ***!
    \****************************************************************************/

  /*! exports provided: OwlDialogContainerComponent */

  /***/
  function node_modulesNgPickDatetimeDialogDialogContainerComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDialogContainerComponent", function () {
      return OwlDialogContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");

    var __extends = undefined && undefined.__extends || function () {
      var _extendStatics4 = function extendStatics(d, b) {
        _extendStatics4 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics4(d, b);
      };

      return function (d, b) {
        _extendStatics4(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var zoomFadeIn = {
      opacity: 0,
      transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})'
    };
    var zoomFadeInFrom = {
      opacity: 0,
      transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})',
      transformOrigin: '{{ ox }} {{ oy }}'
    };

    var OwlDialogContainerComponent = function (_super) {
      __extends(OwlDialogContainerComponent, _super);

      function OwlDialogContainerComponent(changeDetector, elementRef, focusTrapFactory, document) {
        var _this = _super.call(this) || this;

        _this.changeDetector = changeDetector;
        _this.elementRef = elementRef;
        _this.focusTrapFactory = focusTrapFactory;
        _this.document = document;
        _this.ariaLabelledBy = null;
        _this.animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.isAnimating = false;
        _this.state = 'enter';
        _this.params = {
          x: '0px',
          y: '0px',
          ox: '50%',
          oy: '50%',
          scale: 0
        };
        _this.elementFocusedBeforeDialogWasOpened = null;
        return _this;
      }

      Object.defineProperty(OwlDialogContainerComponent.prototype, "config", {
        get: function get() {
          return this._config;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerClass", {
        get: function get() {
          return true;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerTabIndex", {
        get: function get() {
          return -1;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerId", {
        get: function get() {
          return this._config.id;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerRole", {
        get: function get() {
          return this._config.role || null;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerAriaLabelledby", {
        get: function get() {
          return this.ariaLabelledBy;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerAriaDescribedby", {
        get: function get() {
          return this._config.ariaDescribedBy || null;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerAnimation", {
        get: function get() {
          return {
            value: this.state,
            params: this.params
          };
        },
        enumerable: true,
        configurable: true
      });

      OwlDialogContainerComponent.prototype.ngOnInit = function () {};

      OwlDialogContainerComponent.prototype.attachComponentPortal = function (portal) {
        if (this.portalOutlet.hasAttached()) {
          throw Error('Attempting to attach dialog content after content is already attached');
        }

        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachComponentPortal(portal);
      };

      OwlDialogContainerComponent.prototype.attachTemplatePortal = function (portal) {
        throw new Error('Method not implemented.');
      };

      OwlDialogContainerComponent.prototype.setConfig = function (config) {
        this._config = config;

        if (config.event) {
          this.calculateZoomOrigin(event);
        }
      };

      OwlDialogContainerComponent.prototype.onAnimationStart = function (event) {
        this.isAnimating = true;
        this.animationStateChanged.emit(event);
      };

      OwlDialogContainerComponent.prototype.onAnimationDone = function (event) {
        if (event.toState === 'enter') {
          this.trapFocus();
        } else if (event.toState === 'exit') {
          this.restoreFocus();
        }

        this.animationStateChanged.emit(event);
        this.isAnimating = false;
      };

      OwlDialogContainerComponent.prototype.startExitAnimation = function () {
        this.state = 'exit';
        this.changeDetector.markForCheck();
      };

      OwlDialogContainerComponent.prototype.calculateZoomOrigin = function (event) {
        if (!event) {
          return;
        }

        var clientX = event.clientX;
        var clientY = event.clientY;
        var wh = window.innerWidth / 2;
        var hh = window.innerHeight / 2;
        var x = clientX - wh;
        var y = clientY - hh;
        var ox = clientX / window.innerWidth;
        var oy = clientY / window.innerHeight;
        this.params.x = x + "px";
        this.params.y = y + "px";
        this.params.ox = ox * 100 + "%";
        this.params.oy = oy * 100 + "%";
        this.params.scale = 0;
        return;
      };

      OwlDialogContainerComponent.prototype.savePreviouslyFocusedElement = function () {
        var _this = this;

        if (this.document) {
          this.elementFocusedBeforeDialogWasOpened = this.document.activeElement;
          Promise.resolve().then(function () {
            return _this.elementRef.nativeElement.focus();
          });
        }
      };

      OwlDialogContainerComponent.prototype.trapFocus = function () {
        if (!this.focusTrap) {
          this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }

        if (this._config.autoFocus) {
          this.focusTrap.focusInitialElementWhenReady();
        }
      };

      OwlDialogContainerComponent.prototype.restoreFocus = function () {
        var toFocus = this.elementFocusedBeforeDialogWasOpened;

        if (toFocus && typeof toFocus.focus === 'function') {
          toFocus.focus();
        }

        if (this.focusTrap) {
          this.focusTrap.destroy();
        }
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"]), __metadata("design:type", _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"])], OwlDialogContainerComponent.prototype, "portalOutlet", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.owl-dialog-container'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlDialogContainerComponent.prototype, "owlDialogContainerClass", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.tabindex'), __metadata("design:type", Number), __metadata("design:paramtypes", [])], OwlDialogContainerComponent.prototype, "owlDialogContainerTabIndex", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.id'), __metadata("design:type", String), __metadata("design:paramtypes", [])], OwlDialogContainerComponent.prototype, "owlDialogContainerId", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.role'), __metadata("design:type", String), __metadata("design:paramtypes", [])], OwlDialogContainerComponent.prototype, "owlDialogContainerRole", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.aria-labelledby'), __metadata("design:type", String), __metadata("design:paramtypes", [])], OwlDialogContainerComponent.prototype, "owlDialogContainerAriaLabelledby", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.aria-describedby'), __metadata("design:type", String), __metadata("design:paramtypes", [])], OwlDialogContainerComponent.prototype, "owlDialogContainerAriaDescribedby", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@slideModal'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], OwlDialogContainerComponent.prototype, "owlDialogContainerAnimation", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('@slideModal.start', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], OwlDialogContainerComponent.prototype, "onAnimationStart", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('@slideModal.done', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], OwlDialogContainerComponent.prototype, "onAnimationDone", null);

      OwlDialogContainerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'owl-dialog-container',
        template: "<ng-template cdkPortalOutlet></ng-template>",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideModal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(zoomFadeInFrom), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])('*')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1)',
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1.05)',
          offset: 0.3
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(.95)',
          offset: 0.8
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1)',
          offset: 1.0
        })])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()], {
          params: {
            x: '0px',
            y: '0px',
            ox: '50%',
            oy: '50%',
            scale: 1
          }
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('enter => exit', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(zoomFadeIn))], {
          params: {
            x: '0px',
            y: '0px',
            ox: '50%',
            oy: '50%'
          }
        })])]
      }), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"], Object])], OwlDialogContainerComponent);
      return OwlDialogContainerComponent;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["BasePortalOutlet"]);
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/dialog/dialog-ref.class.js":
  /*!******************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/dialog/dialog-ref.class.js ***!
    \******************************************************************/

  /*! exports provided: OwlDialogRef */

  /***/
  function node_modulesNgPickDatetimeDialogDialogRefClassJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDialogRef", function () {
      return OwlDialogRef;
    });
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var OwlDialogRef = function () {
      function OwlDialogRef(overlayRef, container, id, location) {
        var _this = this;

        this.overlayRef = overlayRef;
        this.container = container;
        this.id = id;
        this._beforeClose$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._afterOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._afterClosed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.locationChanged = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this.disableClose = this.container.config.disableClose;
        this.container.animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return event.phaseName === 'done' && event.toState === 'enter';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
          _this._afterOpen$.next();

          _this._afterOpen$.complete();
        });
        this.container.animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return event.phaseName === 'done' && event.toState === 'exit';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
          _this.overlayRef.dispose();

          _this.locationChanged.unsubscribe();

          _this._afterClosed$.next(_this.result);

          _this._afterClosed$.complete();

          _this.componentInstance = null;
        });
        this.overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ESCAPE"] && !_this.disableClose;
        })).subscribe(function () {
          return _this.close();
        });

        if (location) {
          this.locationChanged = location.subscribe(function () {
            if (_this.container.config.closeOnNavigation) {
              _this.close();
            }
          });
        }
      }

      OwlDialogRef.prototype.close = function (dialogResult) {
        var _this = this;

        this.result = dialogResult;
        this.container.animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return event.phaseName === 'start';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
          _this._beforeClose$.next(dialogResult);

          _this._beforeClose$.complete();

          _this.overlayRef.detachBackdrop();
        });
        this.container.startExitAnimation();
      };

      OwlDialogRef.prototype.backdropClick = function () {
        return this.overlayRef.backdropClick();
      };

      OwlDialogRef.prototype.keydownEvents = function () {
        return this.overlayRef.keydownEvents();
      };

      OwlDialogRef.prototype.updatePosition = function (position) {
        var strategy = this.getPositionStrategy();

        if (position && (position.left || position.right)) {
          position.left ? strategy.left(position.left) : strategy.right(position.right);
        } else {
          strategy.centerHorizontally();
        }

        if (position && (position.top || position.bottom)) {
          position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        } else {
          strategy.centerVertically();
        }

        this.overlayRef.updatePosition();
        return this;
      };

      OwlDialogRef.prototype.updateSize = function (width, height) {
        if (width === void 0) {
          width = 'auto';
        }

        if (height === void 0) {
          height = 'auto';
        }

        this.getPositionStrategy().width(width).height(height);
        this.overlayRef.updatePosition();
        return this;
      };

      OwlDialogRef.prototype.isAnimating = function () {
        return this.container.isAnimating;
      };

      OwlDialogRef.prototype.afterOpen = function () {
        return this._afterOpen$.asObservable();
      };

      OwlDialogRef.prototype.beforeClose = function () {
        return this._beforeClose$.asObservable();
      };

      OwlDialogRef.prototype.afterClosed = function () {
        return this._afterClosed$.asObservable();
      };

      OwlDialogRef.prototype.getPositionStrategy = function () {
        return this.overlayRef.getConfig().positionStrategy;
      };

      return OwlDialogRef;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/dialog/dialog.module.js":
  /*!***************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/dialog/dialog.module.js ***!
    \***************************************************************/

  /*! exports provided: OwlDialogModule */

  /***/
  function node_modulesNgPickDatetimeDialogDialogModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDialogModule", function () {
      return OwlDialogModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dialog.service */
    "./node_modules/ng-pick-datetime/dialog/dialog.service.js");
    /* harmony import */


    var _dialog_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dialog-container.component */
    "./node_modules/ng-pick-datetime/dialog/dialog-container.component.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var OwlDialogModule = function () {
      function OwlDialogModule() {}

      OwlDialogModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"]],
        exports: [],
        declarations: [_dialog_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDialogContainerComponent"]],
        providers: [_dialog_service__WEBPACK_IMPORTED_MODULE_5__["OWL_DIALOG_SCROLL_STRATEGY_PROVIDER"], _dialog_service__WEBPACK_IMPORTED_MODULE_5__["OwlDialogService"]],
        entryComponents: [_dialog_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDialogContainerComponent"]]
      })], OwlDialogModule);
      return OwlDialogModule;
    }();
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/dialog/dialog.service.js":
  /*!****************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/dialog/dialog.service.js ***!
    \****************************************************************/

  /*! exports provided: OWL_DIALOG_DATA, OWL_DIALOG_SCROLL_STRATEGY, OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, OWL_DIALOG_SCROLL_STRATEGY_PROVIDER, OWL_DIALOG_DEFAULT_OPTIONS, OwlDialogService */

  /***/
  function node_modulesNgPickDatetimeDialogDialogServiceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DIALOG_DATA", function () {
      return OWL_DIALOG_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DIALOG_SCROLL_STRATEGY", function () {
      return OWL_DIALOG_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DIALOG_SCROLL_STRATEGY_PROVIDER", function () {
      return OWL_DIALOG_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OWL_DIALOG_DEFAULT_OPTIONS", function () {
      return OWL_DIALOG_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlDialogService", function () {
      return OwlDialogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dialog_config_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dialog-config.class */
    "./node_modules/ng-pick-datetime/dialog/dialog-config.class.js");
    /* harmony import */


    var _dialog_ref_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dialog-ref.class */
    "./node_modules/ng-pick-datetime/dialog/dialog-ref.class.js");
    /* harmony import */


    var _dialog_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dialog-container.component */
    "./node_modules/ng-pick-datetime/dialog/dialog-container.component.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../utils */
    "./node_modules/ng-pick-datetime/utils/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var OWL_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('OwlDialogData');
    var OWL_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('owl-dialog-scroll-strategy');

    function OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return function () {
        return overlay.scrollStrategies.block();
      };
    }

    var OWL_DIALOG_SCROLL_STRATEGY_PROVIDER = {
      provide: OWL_DIALOG_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"]],
      useFactory: OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    var OWL_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('owl-dialog-default-options');

    var OwlDialogService = function () {
      function OwlDialogService(overlay, injector, location, scrollStrategy, defaultOptions, parentDialog, overlayContainer) {
        var _this = this;

        this.overlay = overlay;
        this.injector = injector;
        this.location = location;
        this.scrollStrategy = scrollStrategy;
        this.defaultOptions = defaultOptions;
        this.parentDialog = parentDialog;
        this.overlayContainer = overlayContainer;
        this.ariaHiddenElements = new Map();
        this._openDialogsAtThisLevel = [];
        this._afterOpenAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.afterAllClosed = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(function () {
          return _this._openDialogsAtThisLevel.length ? _this._afterAllClosed : _this._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined));
        });

        if (!parentDialog && location) {
          location.subscribe(function () {
            return _this.closeAll();
          });
        }
      }

      Object.defineProperty(OwlDialogService.prototype, "openDialogs", {
        get: function get() {
          return this.parentDialog ? this.parentDialog.openDialogs : this._openDialogsAtThisLevel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDialogService.prototype, "afterOpen", {
        get: function get() {
          return this.parentDialog ? this.parentDialog.afterOpen : this._afterOpenAtThisLevel;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(OwlDialogService.prototype, "_afterAllClosed", {
        get: function get() {
          var parent = this.parentDialog;
          return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
        },
        enumerable: true,
        configurable: true
      });

      OwlDialogService.prototype.open = function (componentOrTemplateRef, config) {
        var _this = this;

        config = applyConfigDefaults(config, this.defaultOptions);

        if (config.id && this.getDialogById(config.id)) {
          throw Error("Dialog with id \"" + config.id + "\" exists already. The dialog id must be unique.");
        }

        var overlayRef = this.createOverlay(config);
        var dialogContainer = this.attachDialogContainer(overlayRef, config);
        var dialogRef = this.attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);

        if (!this.openDialogs.length) {
          this.hideNonDialogContentFromAssistiveTechnology();
        }

        this.openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(function () {
          return _this.removeOpenDialog(dialogRef);
        });
        this.afterOpen.next(dialogRef);
        return dialogRef;
      };

      OwlDialogService.prototype.closeAll = function () {
        var i = this.openDialogs.length;

        while (i--) {
          this.openDialogs[i].close();
        }
      };

      OwlDialogService.prototype.getDialogById = function (id) {
        return this.openDialogs.find(function (dialog) {
          return dialog.id === id;
        });
      };

      OwlDialogService.prototype.attachDialogContent = function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
        var dialogRef = new _dialog_ref_class__WEBPACK_IMPORTED_MODULE_3__["OwlDialogRef"](overlayRef, dialogContainer, config.id, this.location);

        if (config.hasBackdrop) {
          overlayRef.backdropClick().subscribe(function () {
            if (!dialogRef.disableClose) {
              dialogRef.close();
            }
          });
        }

        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {} else {
          var injector = this.createInjector(config, dialogRef, dialogContainer);
          var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["ComponentPortal"](componentOrTemplateRef, undefined, injector));
          dialogRef.componentInstance = contentRef.instance;
        }

        dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
        return dialogRef;
      };

      OwlDialogService.prototype.createInjector = function (config, dialogRef, dialogContainer) {
        var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        var injectionTokens = new WeakMap();
        injectionTokens.set(_dialog_ref_class__WEBPACK_IMPORTED_MODULE_3__["OwlDialogRef"], dialogRef);
        injectionTokens.set(_dialog_container_component__WEBPACK_IMPORTED_MODULE_4__["OwlDialogContainerComponent"], dialogContainer);
        injectionTokens.set(OWL_DIALOG_DATA, config.data);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalInjector"](userInjector || this.injector, injectionTokens);
      };

      OwlDialogService.prototype.createOverlay = function (config) {
        var overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
      };

      OwlDialogService.prototype.attachDialogContainer = function (overlayRef, config) {
        var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["ComponentPortal"](_dialog_container_component__WEBPACK_IMPORTED_MODULE_4__["OwlDialogContainerComponent"], config.viewContainerRef);
        var containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.setConfig(config);
        return containerRef.instance;
      };

      OwlDialogService.prototype.getOverlayConfig = function (dialogConfig) {
        var state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayConfig"]({
          positionStrategy: this.overlay.position().global(),
          scrollStrategy: dialogConfig.scrollStrategy || this.scrollStrategy(),
          panelClass: dialogConfig.paneClass,
          hasBackdrop: dialogConfig.hasBackdrop,
          minWidth: dialogConfig.minWidth,
          minHeight: dialogConfig.minHeight,
          maxWidth: dialogConfig.maxWidth,
          maxHeight: dialogConfig.maxHeight
        });

        if (dialogConfig.backdropClass) {
          state.backdropClass = dialogConfig.backdropClass;
        }

        return state;
      };

      OwlDialogService.prototype.removeOpenDialog = function (dialogRef) {
        var index = this._openDialogsAtThisLevel.indexOf(dialogRef);

        if (index > -1) {
          this.openDialogs.splice(index, 1);

          if (!this.openDialogs.length) {
            this.ariaHiddenElements.forEach(function (previousValue, element) {
              if (previousValue) {
                element.setAttribute('aria-hidden', previousValue);
              } else {
                element.removeAttribute('aria-hidden');
              }
            });
            this.ariaHiddenElements.clear();

            this._afterAllClosed.next();
          }
        }
      };

      OwlDialogService.prototype.hideNonDialogContentFromAssistiveTechnology = function () {
        var overlayContainer = this.overlayContainer.getContainerElement();

        if (overlayContainer.parentElement) {
          var siblings = overlayContainer.parentElement.children;

          for (var i = siblings.length - 1; i > -1; i--) {
            var sibling = siblings[i];

            if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
              this.ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
              sibling.setAttribute('aria-hidden', 'true');
            }
          }
        }
      };

      OwlDialogService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(OWL_DIALOG_SCROLL_STRATEGY)), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(OWL_DIALOG_DEFAULT_OPTIONS)), __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()), __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], Function, _dialog_config_class__WEBPACK_IMPORTED_MODULE_2__["OwlDialogConfig"], OwlDialogService, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayContainer"]])], OwlDialogService);
      return OwlDialogService;
    }();

    function applyConfigDefaults(config, defaultOptions) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["extendObject"])(new _dialog_config_class__WEBPACK_IMPORTED_MODULE_2__["OwlDialogConfig"](), config, defaultOptions);
    }
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/dialog/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/ng-pick-datetime/dialog/index.js ***!
    \*******************************************************/

  /*! exports provided: OwlDialogModule, OwlDialogService, OwlDialogRef */

  /***/
  function node_modulesNgPickDatetimeDialogIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _dialog_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dialog.module */
    "./node_modules/ng-pick-datetime/dialog/dialog.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlDialogModule", function () {
      return _dialog_module__WEBPACK_IMPORTED_MODULE_0__["OwlDialogModule"];
    });
    /* harmony import */


    var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dialog.service */
    "./node_modules/ng-pick-datetime/dialog/dialog.service.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlDialogService", function () {
      return _dialog_service__WEBPACK_IMPORTED_MODULE_1__["OwlDialogService"];
    });
    /* harmony import */


    var _dialog_ref_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dialog-ref.class */
    "./node_modules/ng-pick-datetime/dialog/dialog-ref.class.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlDialogRef", function () {
      return _dialog_ref_class__WEBPACK_IMPORTED_MODULE_2__["OwlDialogRef"];
    });
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/picker.js":
  /*!*************************************************!*\
    !*** ./node_modules/ng-pick-datetime/picker.js ***!
    \*************************************************/

  /*! exports provided: OwlDateTimeModule, OwlDateTimeIntl, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE_PROVIDER, OWL_DATE_TIME_LOCALE, DateTimeAdapter, OWL_DATE_TIME_FORMATS, OwlDateTimeInlineComponent, OwlDateTimeComponent */

  /***/
  function node_modulesNgPickDatetimePickerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _date_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./date-time */
    "./node_modules/ng-pick-datetime/date-time/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeModule", function () {
      return _date_time__WEBPACK_IMPORTED_MODULE_0__["OwlDateTimeModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeIntl", function () {
      return _date_time__WEBPACK_IMPORTED_MODULE_0__["OwlDateTimeIntl"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlNativeDateTimeModule", function () {
      return _date_time__WEBPACK_IMPORTED_MODULE_0__["OwlNativeDateTimeModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE_PROVIDER", function () {
      return _date_time__WEBPACK_IMPORTED_MODULE_0__["OWL_DATE_TIME_LOCALE_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE", function () {
      return _date_time__WEBPACK_IMPORTED_MODULE_0__["OWL_DATE_TIME_LOCALE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DateTimeAdapter", function () {
      return _date_time__WEBPACK_IMPORTED_MODULE_0__["DateTimeAdapter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_FORMATS", function () {
      return _date_time__WEBPACK_IMPORTED_MODULE_0__["OWL_DATE_TIME_FORMATS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeInlineComponent", function () {
      return _date_time__WEBPACK_IMPORTED_MODULE_0__["OwlDateTimeInlineComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OwlDateTimeComponent", function () {
      return _date_time__WEBPACK_IMPORTED_MODULE_0__["OwlDateTimeComponent"];
    });
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/utils/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/ng-pick-datetime/utils/index.js ***!
    \******************************************************/

  /*! exports provided: extendObject */

  /***/
  function node_modulesNgPickDatetimeUtilsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _object_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./object.utils */
    "./node_modules/ng-pick-datetime/utils/object.utils.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "extendObject", function () {
      return _object_utils__WEBPACK_IMPORTED_MODULE_0__["extendObject"];
    });
    /***/

  },

  /***/
  "./node_modules/ng-pick-datetime/utils/object.utils.js":
  /*!*************************************************************!*\
    !*** ./node_modules/ng-pick-datetime/utils/object.utils.js ***!
    \*************************************************************/

  /*! exports provided: extendObject */

  /***/
  function node_modulesNgPickDatetimeUtilsObjectUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "extendObject", function () {
      return extendObject;
    });

    function extendObject(dest) {
      var sources = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
      }

      if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
      }

      for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];

        if (source != null) {
          for (var key in source) {
            if (source.hasOwnProperty(key)) {
              dest[key] = source[key];
            }
          }
        }
      }

      return dest;
    }
    /***/

  }
}]);
//# sourceMappingURL=default~pickers-pickers-module~task-manager-task-manager-module-es5.js.map