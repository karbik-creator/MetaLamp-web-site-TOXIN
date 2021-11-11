/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./elements/logo/logo.js":
/*!*******************************!*\
  !*** ./elements/logo/logo.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.svg */ \"./elements/logo/img/logo.svg\");\n/* harmony import */ var _img_logo_UIkit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo_UIkit.svg */ \"./elements/logo/img/logo_UIkit.svg\");\n\n\n\n//# sourceURL=webpack:///./elements/logo/logo.js?");

/***/ }),

/***/ "./elements/select/select.js":
/*!***********************************!*\
  !*** ./elements/select/select.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTemplateSelect\": function() { return /* binding */ getTemplateSelect; },\n/* harmony export */   \"Select\": function() { return /* binding */ Select; }\n/* harmony export */ });\n/* harmony import */ var _select_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.scss */ \"./elements/select/select.scss\");\n/* harmony import */ var _img_expand_more_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/expand_more.svg */ \"./img/expand_more.svg\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar getTemplateSelect = function getTemplateSelect() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var placeholder = arguments.length > 1 ? arguments[1] : undefined;\n  var text = placeholder !== null && placeholder !== void 0 ? placeholder : \"Выберите значение\";\n  var items = data.map(function (item) {\n    return \"\\n      <div class=\\\"select__drop__down__item\\\" data-id = \".concat(item.id, \">\\n      <div class=\\\"select__item__text\\\">\").concat(item.value, \"</div>\\n      <div class=\\\"select__item__content__right\\\">\\n        <button class=\\\"select__item__btn\\\" type=\\\"button\\\" data-type=\\\"btnMinus\\\">-</button>\\n        <div class=\\\"select__item__number\\\" data-type=\\\"count\\\">\").concat(item.count, \"</div>\\n        <button class=\\\"select__item__btn active\\\" type=\\\"button\\\" data-type=\\\"btnPlus\\\">+</button>\\n      </div>\\n      </div>\\n      \");\n  });\n  return \"<div class=\\\"select__backdrop\\\" data-type=\\\"backdrop\\\"></div>\\n              <div class=\\\"select__input\\\" data-type=\\\"input\\\">\\n              <div class=\\\"select__input__placeholder\\\" data-type=\\\"input\\\">\".concat(text, \"</div>\\n              <div class=\\\"select__input__btn\\\" data-type=\\\"input\\\"></div>\\n              </div>\\n              <div class=\\\"select__drop__down\\\">\\n                \").concat(items[0], \"\\n                \").concat(items[1], \"\\n                \").concat(items[2], \"\\n                <div class=\\\"select__drop__down__btn\\\">\\n                  <button type=\\\"button\\\" data-type=\\\"cleandrop\\\">\\u043E\\u0447\\u0438\\u0441\\u0442\\u0438\\u0442\\u044C</button>\\n                  <button class=\\\"active\\\" type=\\\"button\\\" data-type=\\\"backdrop\\\">\\u043F\\u0440\\u0438\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C</button>\\n                </div>\\n              </div>\");\n};\nvar Select = /*#__PURE__*/function () {\n  function Select(selector, options) {\n    _classCallCheck(this, Select);\n\n    this.element = document.querySelector(selector);\n    this.options = options;\n    this.selectId = null;\n    this.render();\n    this.setup();\n  }\n\n  _createClass(Select, [{\n    key: \"render\",\n    value: function render() {\n      var _this$options = this.options,\n          data = _this$options.data,\n          placeholder = _this$options.placeholder,\n          heading = _this$options.heading;\n      this.element.insertAdjacentHTML(\"beforebegin\", \"<h3>\".concat(heading, \"</h3>\"));\n      this.element.innerHTML = '';\n      this.element.insertAdjacentHTML(\"afterbegin\", getTemplateSelect(data, placeholder));\n    }\n  }, {\n    key: \"setup\",\n    value: function setup() {\n      this.clickHandler = this.clickHandler.bind(this);\n      this.element.addEventListener(\"click\", this.clickHandler);\n      this.value = this.element.querySelector('.select__input__placeholder[data-type=\"input\"]');\n      this.count = this.element.querySelectorAll('[data-type=\"count\"]');\n      this.btnClean = this.element.querySelector('[data-type=\"cleandrop\"]');\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler(event) {\n      var type = event.target.dataset.type;\n\n      if (type === \"input\") {\n        this.toogle();\n      }\n\n      if (type === \"btnPlus\" || type === \"btnMinus\") {\n        var id = event.target.parentElement.parentElement.dataset.id;\n        this.select(id, type);\n      }\n\n      if (type === \"backdrop\") {\n        this.toogle();\n      }\n\n      if (type === \"cleandrop\") {\n        this.cleanCount();\n      }\n    }\n  }, {\n    key: \"toogle\",\n    value: function toogle() {\n      this.element.classList.toggle(\"open\");\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.element.removeEventListener(\"click\", this.clickHandler);\n    }\n  }, {\n    key: \"select\",\n    value: function select(id, type) {\n      this.selectId = id;\n      this.count[this.selectId - 1].textContent = type === \"btnPlus\" ? this.plus() : this.minus();\n      this.currentStyleBtn(id);\n      this.currentInput();\n    }\n  }, {\n    key: \"plus\",\n    value: function plus() {\n      return ++this.current().count;\n    }\n  }, {\n    key: \"minus\",\n    value: function minus() {\n      return this.current().count <= 0 ? 0 : --this.current().count;\n    }\n  }, {\n    key: \"current\",\n    value: function current() {\n      var _this = this;\n\n      return this.options.data.find(function (item) {\n        return item.id == _this.selectId;\n      });\n    }\n  }, {\n    key: \"currentInput\",\n    value: function currentInput() {\n      var countPeople = 0;\n      var countChildren = 0;\n      var textForCountPeople = \"\";\n      var textForCountChildren = \"\";\n      this.options.data.map(function (item) {\n        item.value === \"Младенцы\" ? countChildren += item.count : countPeople += item.count;\n      });\n      textForCountPeople = this.declOfNum(countPeople, [\"гость\", \"гостя\", \"гостей\"]);\n      textForCountChildren = this.declOfNum(countChildren, [\"младенец\", \"младенца\", \"младенцев\"]);\n\n      if (countPeople === 0 && countChildren === 0) {\n        var _this$options$placeho;\n\n        textForCountPeople = (_this$options$placeho = this.options.placeholder) !== null && _this$options$placeho !== void 0 ? _this$options$placeho : \"Выберите значение\";\n      }\n\n      if (countPeople !== 0 && countChildren !== 0) {\n        this.value.textContent = textForCountPeople + \", \" + textForCountChildren;\n      } else {\n        this.value.textContent = textForCountPeople + textForCountChildren;\n      }\n\n      if (countChildren + countPeople > 0) {\n        if (!this.isActiveBtnClean()) {\n          this.btnClean.classList.add(\"active\");\n        }\n      } else {\n        if (this.isActiveBtnClean()) {\n          this.btnClean.classList.remove(\"active\");\n        }\n      }\n    }\n  }, {\n    key: \"declOfNum\",\n    value: function declOfNum(n, text_forms) {\n      if (n == 0) {\n        return \"\";\n      }\n\n      n = Math.abs(n) % 1000;\n      var n1 = n % 10;\n\n      if (n > 10 && n < 20) {\n        return n + \" \" + text_forms[2];\n      }\n\n      if (n1 > 1 && n1 < 5) {\n        return n + \" \" + text_forms[1];\n      }\n\n      if (n1 == 1) {\n        return n + \" \" + text_forms[0];\n      }\n\n      return n + \" \" + text_forms[2];\n    }\n  }, {\n    key: \"currentStyleBtn\",\n    value: function currentStyleBtn(id) {\n      var _this2 = this;\n\n      var arrayId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.data;\n\n      if (typeof id === \"undefined\") {\n        arrayId.map(function (item) {\n          var btnMinus = _this2.element.querySelector(\"[data-id=\\\"\".concat(item.id, \"\\\"] > div > button[data-type=\\\"btnMinus\\\"]\"));\n\n          var btnPlus = _this2.element.querySelector(\"[data-id=\\\"\".concat(item.id, \"\\\"] > div > button[data-type=\\\"btnPlus\\\"]\"));\n\n          _this2.current().count > 0 ? btnMinus.classList.add(\"active\") : btnMinus.classList.remove(\"active\");\n          _this2.current().count === 100 ? btnPlus.classList.remove(\"active\") : btnPlus.classList.add(\"active\");\n        });\n      } else {\n        var btnMinus = this.element.querySelector(\"[data-id=\\\"\".concat(id, \"\\\"] > div > button[data-type=\\\"btnMinus\\\"]\"));\n        var btnPlus = this.element.querySelector(\"[data-id=\\\"\".concat(id, \"\\\"] > div > button[data-type=\\\"btnPlus\\\"]\"));\n        this.current().count > 0 ? btnMinus.classList.add(\"active\") : btnMinus.classList.remove(\"active\");\n        /* if (this.current().count === 10) {\r\n          btnPlus.classList.remove(\"active\");\r\n        } else {\r\n          btnPlus.classList.add(\"active\");\r\n        }*/\n      }\n    }\n  }, {\n    key: \"isActiveBtnClean\",\n    value: function isActiveBtnClean() {\n      return this.btnClean.classList.contains(\"active\");\n    }\n  }, {\n    key: \"cleanCount\",\n    value: function cleanCount() {\n      this.options.data.map(function (item) {\n        return item.count = 0;\n      });\n\n      var _iterator = _createForOfIteratorHelper(this.count),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var number = _step.value;\n          number.textContent = 0;\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      this.currentStyleBtn();\n      this.currentInput();\n    }\n  }]);\n\n  return Select;\n}();\n\n//# sourceURL=webpack:///./elements/select/select.js?");

/***/ }),

/***/ "./elements/subscriptionTextField/subscriptionTextField.js":
/*!*****************************************************************!*\
  !*** ./elements/subscriptionTextField/subscriptionTextField.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _subscriptionTextField_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscriptionTextField.scss */ \"./elements/subscriptionTextField/subscriptionTextField.scss\");\n/* harmony import */ var _img_arrow_forward_purple_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/arrow_forward_purple.svg */ \"./elements/subscriptionTextField/img/arrow_forward_purple.svg\");\n\n\n\n//# sourceURL=webpack:///./elements/subscriptionTextField/subscriptionTextField.js?");

/***/ }),

/***/ "./elements/textField/textField.js":
/*!*****************************************!*\
  !*** ./elements/textField/textField.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _textField_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textField.scss */ \"./elements/textField/textField.scss\");\n/* harmony import */ var _scss_vars_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/vars.scss */ \"./scss/vars.scss\");\n\n\n\n//# sourceURL=webpack:///./elements/textField/textField.js?");

/***/ }),

/***/ "./template/formElements/formElements.js":
/*!***********************************************!*\
  !*** ./template/formElements/formElements.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formElements_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formElements.scss */ \"./template/formElements/formElements.scss\");\n/* harmony import */ var _elements_logo_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/logo/logo */ \"./elements/logo/logo.js\");\n/* harmony import */ var _elements_textField_textField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/textField/textField */ \"./elements/textField/textField.js\");\n/* harmony import */ var _elements_subscriptionTextField_subscriptionTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/subscriptionTextField/subscriptionTextField */ \"./elements/subscriptionTextField/subscriptionTextField.js\");\n/* harmony import */ var _elements_select_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/select/select */ \"./elements/select/select.js\");\n\n\n\n\n\n\n//# sourceURL=webpack:///./template/formElements/formElements.js?");

/***/ }),

/***/ "./elements/select/select.scss":
/*!*************************************!*\
  !*** ./elements/select/select.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./elements/select/select.scss?");

/***/ }),

/***/ "./elements/subscriptionTextField/subscriptionTextField.scss":
/*!*******************************************************************!*\
  !*** ./elements/subscriptionTextField/subscriptionTextField.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./elements/subscriptionTextField/subscriptionTextField.scss?");

/***/ }),

/***/ "./elements/textField/textField.scss":
/*!*******************************************!*\
  !*** ./elements/textField/textField.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./elements/textField/textField.scss?");

/***/ }),

/***/ "./scss/vars.scss":
/*!************************!*\
  !*** ./scss/vars.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/vars.scss?");

/***/ }),

/***/ "./template/formElements/formElements.scss":
/*!*************************************************!*\
  !*** ./template/formElements/formElements.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./template/formElements/formElements.scss?");

/***/ }),

/***/ "./elements/logo/img/logo.svg":
/*!************************************!*\
  !*** ./elements/logo/img/logo.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.svg\";\n\n//# sourceURL=webpack:///./elements/logo/img/logo.svg?");

/***/ }),

/***/ "./elements/logo/img/logo_UIkit.svg":
/*!******************************************!*\
  !*** ./elements/logo/img/logo_UIkit.svg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo_UIkit.svg\";\n\n//# sourceURL=webpack:///./elements/logo/img/logo_UIkit.svg?");

/***/ }),

/***/ "./elements/subscriptionTextField/img/arrow_forward_purple.svg":
/*!*********************************************************************!*\
  !*** ./elements/subscriptionTextField/img/arrow_forward_purple.svg ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/arrow_forward_purple.svg\";\n\n//# sourceURL=webpack:///./elements/subscriptionTextField/img/arrow_forward_purple.svg?");

/***/ }),

/***/ "./img/expand_more.svg":
/*!*****************************!*\
  !*** ./img/expand_more.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/expand_more.svg\";\n\n//# sourceURL=webpack:///./img/expand_more.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../../";
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./template/formElements/formElements.js");
/******/ 	
/******/ })()
;