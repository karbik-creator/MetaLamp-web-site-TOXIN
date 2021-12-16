"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["elements_btn_btn_js-elements_datepicker_datepicker_js-elements_logo_logo_js-elements_select_s-5b86ab"],{

/***/ "./elements/btn/btn.js":
/*!*****************************!*\
  !*** ./elements/btn/btn.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _btn_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btn.scss */ \"./elements/btn/btn.scss\");\n\n\n//# sourceURL=webpack:///./elements/btn/btn.js?");

/***/ }),

/***/ "./elements/datepicker/datepicker.js":
/*!*******************************************!*\
  !*** ./elements/datepicker/datepicker.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTemplateDatepicker\": function() { return /* binding */ getTemplateDatepicker; },\n/* harmony export */   \"Datepicker\": function() { return /* binding */ Datepicker; }\n/* harmony export */ });\n/* harmony import */ var _datepicker_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datepicker.scss */ \"./elements/datepicker/datepicker.scss\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\nvar getTemplateDatepicker = function getTemplateDatepicker(placeholder, countInput, name, month, year, daysOfWeek) {\n  var days = daysOfWeek.map(function (item) {\n    return \"<div class=\\\"day-of-week\\\">\".concat(item, \"</div>\");\n  });\n\n  var inputs = function inputs(countInput) {\n    return countInput === 1 ? \"\\n  <div class=\\\"datepicker__item\\\">\\n  <h3>\".concat(name[0], \"</h3>\\n  <div class=\\\"datepicker__item__wrapper\\\" tabindex='0'>\\n    <div class=\\\"datepicker__item__input\\\" data-type=\\\"input-start-date\\\">\\n    <div class=\\\"datepicker__item__placeholder\\\">\").concat(_typeof(placeholder) === 'object' ? placeholder[0] + '-' + placeholder[1] : placeholder, \"</div>\\n    <span class=\\\"material-icons\\\">expand_more</span>\\n    </div>\\n  </div>\\n</div>\") : \"<div class=\\\"datepicker__item\\\">\\n      <h3>\".concat(name[0], \"</h3>\\n<div class=\\\"datepicker__item__wrapper\\\" tabindex='0'>\\n  <div class=\\\"datepicker__item__input\\\" data-type=\\\"input-start-date\\\">\\n  <div class=\\\"datepicker__item__placeholder\\\">\").concat(_typeof(placeholder) === 'object' ? placeholder[0] : placeholder, \"</div>\\n  <span class=\\\"material-icons\\\">expand_more</span>\\n  </div>\\n</div>\\n</div>\\n<div class=\\\"datepicker__item\\\">\\n<h3>\").concat(name[1], \"</h3>\\n<div class=\\\"datepicker__item__wrapper\\\" tabindex='0' data-type='input'>\\n  <div class=\\\"datepicker__item__input\\\" data-type=\\\"input-end-date\\\">\\n  <div class=\\\"datepicker__item__placeholder\\\">\").concat(_typeof(placeholder) === 'object' ? placeholder[1] : placeholder, \"</div>\\n  <span class=\\\"material-icons\\\">expand_more</span>\\n  </div>\\n</div>\\n</div>\");\n  };\n\n  return \"<div class=\\\"datepicker__backdrop\\\" data-type=\\\"backdrop\\\"></div>\\n    \".concat(inputs(countInput), \"\\n  <div class=\\\"datepicker__item__dropdown\\\">\\n    <div class=\\\"datepicker__item__dropdown__inner\\\">\\n      <div class=\\\"content__top\\\">\\n        <button class=\\\"arrow prev-month\\\"  type=\\\"button\\\">\\n          <span class=\\\"material-icons\\\" id=\\\"arrow-prev-month\\\" data-type=\\\"btn-prev-month\\\"> arrow_forward </span>\\n        </button>\\n        <div class=\\\"month-and-year\\\">\").concat(month + \" \" + year, \"</div>\\n        <button class=\\\"arrow next-month\\\"  type=\\\"button\\\">\\n        <span class=\\\"material-icons\\\" id=\\\"arrow-next-month\\\" data-type=\\\"btn-next-month\\\"> arrow_forward </span>\\n        </button>\\n      </div>\\n      <div class=\\\"content__center\\\">\\n        <div class=\\\"days-of-week\\\">\\n          \").concat(days.join(\"\"), \"\\n        </div>\\n        <div class=\\\"days\\\">\\n        <div class=\\\"days__wrapper\\\">\\n        </div>\\n        </div>\\n      </div>\\n      <div class=\\\"content__footer\\\">\\n        <div class=\\\"drop__down__btn\\\">\\n          <button type=\\\"button\\\" data-type=\\\"cleandrop\\\">\\u043E\\u0447\\u0438\\u0441\\u0442\\u0438\\u0442\\u044C</button>\\n          <button class=\\\"active\\\" type=\\\"button\\\" data-type=\\\"backdrop\\\">\\n            \\u043F\\u0440\\u0438\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C\\n          </button>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\");\n};\nvar Datepicker = /*#__PURE__*/function () {\n  function Datepicker() {\n    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.datepicker';\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n      format: 'ДД.МММ',\n      placeholder: \"ДД.МММ - ДД.МММ\",\n      countInput: 1,\n      name: ['Дата']\n    };\n\n    _classCallCheck(this, Datepicker);\n\n    this.element = document.querySelector(selector);\n    this.options = options;\n    this.placeholder = this.options.placeholder;\n    this.format = options.format;\n    this.date = new Date();\n    this.month = this.date.getMonth();\n    this.year = this.date.getFullYear();\n    this.dayOfWeek = this.date.getDay();\n    this.months = [\"Январь\", \"Февраль\", \"Март\", \"Апрель\", \"Май\", \"Июнь\", \"Июль\", \"Август\", \"Сентябрь\", \"Октябрь\", \"Ноябрь\", \"Декабрь\"];\n    this.daysOfWeek = [\"пн\", \"вт\", \"ср\", \"чт\", \"пт\", \"сб\", \"вс\"];\n    this.timeStampDay = 86400000;\n    this.number = 0;\n    this.renderFormatter();\n    this.render();\n    this.setup();\n  }\n\n  _createClass(Datepicker, [{\n    key: \"localStorageDate\",\n    value: function localStorageDate() {\n      var _this = this;\n\n      var datePeriod = localStorage.getItem('date');\n\n      if (datePeriod !== null) {\n        var newArrayFormatDatePeriod = JSON.parse(datePeriod).map(function (item) {\n          return _this.formatter.format(new Date(item));\n        });\n        return newArrayFormatDatePeriod;\n      }\n\n      return this.placeholder;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$options = this.options,\n          countInput = _this$options.countInput,\n          name = _this$options.name;\n      this.element.innerHTML = \"\";\n      this.element.insertAdjacentHTML(\"afterbegin\", getTemplateDatepicker(this.localStorageDate(), countInput, name, this.months[this.month], this.year, this.daysOfWeek));\n      this.renderDays();\n    }\n  }, {\n    key: \"renderDays\",\n    value: function renderDays() {\n      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"next\";\n      var dateString = new Date(this.year, this.month).toLocaleDateString(\"ru\", {\n        weekday: \"short\"\n      });\n      var paddingDays = this.daysOfWeek.indexOf(dateString.split(\", \")[0]);\n      var daysContainer = this.element.querySelector(\".days__wrapper\");\n      var days = document.createElement(\"div\");\n      days.classList.add(\"days__list\");\n      days.setAttribute(\"data-index\", this.number);\n      flag === \"next\" ? daysContainer.append(days) : daysContainer.prepend(days);\n      var countDaysInMonth = new Date(this.year, this.month + 1, 0).getDate();\n      var countDaysOfLastMonth = new Date(this.year, this.month, 0).getDate();\n      var countDaysInDatepicker = 35;\n\n      for (var i = 1; i <= countDaysInDatepicker; i++) {\n        if (i <= paddingDays) {\n          for (var j = countDaysOfLastMonth; j > countDaysOfLastMonth - paddingDays; j--) {\n            days.insertAdjacentHTML(\"afterbegin\", \"<div class=\\\"day prev-next-day\\\" data-type=\\\"day\\\" data-value=\\\"\".concat(new Date(this.year, this.month - 1, j).getTime(), \"\\\">\\n            \").concat(j, \"\\n            <span></span></div>\"));\n            i++;\n          }\n        }\n\n        if (i <= countDaysInMonth + paddingDays && i > paddingDays) {\n          days.insertAdjacentHTML(\"beforeend\", \"<div class=\\\"day\\\" data-type=\\\"day\\\" data-value=\\\"\".concat(new Date(this.year, this.month, i - paddingDays).getTime(), \"\\\">\\n          \").concat(i - paddingDays, \"\\n          <span></span></div>\"));\n        }\n\n        if (i >= countDaysInMonth + paddingDays) {\n          for (var k = 1; k <= countDaysInDatepicker - countDaysInMonth - paddingDays; k++) {\n            days.insertAdjacentHTML(\"beforeend\", \"<div class=\\\"day prev-next-day\\\" data-type=\\\"day\\\" data-value=\\\"\".concat(new Date(this.year, this.month + 1, k).getTime(), \"\\\">\\n            \").concat(k, \"\\n            <span></span></div>\"));\n            i++;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"setup\",\n    value: function setup() {\n      this.clickHandler = this.clickHandler.bind(this);\n      this.element.addEventListener(\"click\", this.clickHandler);\n      this.element.addEventListener(\"keyup\", this.clickHandler);\n      this.monthAndYear = this.element.querySelector(\".month-and-year\");\n      this.daysContainer = this.element.querySelector(\".days>.days__wrapper\");\n      this.btnClean = this.element.querySelector('[data-type=\"cleandrop\"]');\n      this.inputStartDate = this.element.querySelector('[data-type=\"input-start-date\"]>.datepicker__item__placeholder');\n      this.inputEndDate = this.element.querySelector('[data-type=\"input-end-date\"]>.datepicker__item__placeholder');\n      this.startPeriodTimeStamp, this.endPeriodTimeStamp;\n      this.translateX = 0;\n    }\n  }, {\n    key: \"renderFormatter\",\n    value: function renderFormatter() {\n      if (this.format === 'ДД.МММ') {\n        this.formatter = new Intl.DateTimeFormat(\"ru\", {\n          day: '2-digit',\n          month: 'short'\n        });\n      }\n\n      if (this.format === 'ДД.ММ.ГГГГ') {\n        this.formatter = new Intl.DateTimeFormat(\"ru\", {\n          day: '2-digit',\n          month: '2-digit',\n          year: 'numeric'\n        });\n      }\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler(event) {\n      var type = event.target.dataset.type;\n      var path = event.path || event.composedPath && event.composedPath();\n      var typeParent = path[1].dataset.type;\n\n      if (event.code === 'Tab' || event.type === 'click' && typeParent === \"input-start-date\" || typeParent === \"input-end-date\" || type === \"input-start-date\" || type === \"input-end-date\" || type === \"input\") {\n        this.toggleDropdown();\n      }\n\n      if (type === \"btn-next-month\") {\n        this.number++;\n        this.nextMonth();\n      }\n\n      if (type === \"btn-prev-month\") {\n        this.number--;\n        this.prevMonth();\n      }\n\n      if (type === \"day\") {\n        this.activeDay(event.target);\n      }\n\n      if (type === \"backdrop\") {\n        this.toggleDropdown();\n        this.fillInput(this.arrayActiveDays());\n      }\n\n      if (type === \"cleandrop\") {\n        this.cleanDrop();\n      }\n    }\n  }, {\n    key: \"toggleDropdown\",\n    value: function toggleDropdown() {\n      this.element.classList.toggle(\"open\");\n    }\n  }, {\n    key: \"nextMonth\",\n    value: function nextMonth() {\n      this.month < 11 ? this.month++ : (this.month = 0, this.year++);\n      this.monthAndYear.textContent = this.months[this.month] + \" \" + this.year;\n      var listMonth = this.element.querySelector(\"[data-index=\\\"\".concat(this.number, \"\\\"]\"));\n\n      if (listMonth === null) {\n        this.renderDays(\"next\");\n        this.colorPeriod();\n      }\n\n      this.translateX = this.translateX - 280;\n      this.daysContainer.style.transform = \"translateX(\".concat(this.translateX + \"px\", \")\");\n    }\n  }, {\n    key: \"prevMonth\",\n    value: function prevMonth() {\n      this.month > 0 ? this.month-- : (this.month = 11, this.year--);\n      this.monthAndYear.textContent = this.months[this.month] + \" \" + this.year;\n      var listMonth = this.daysContainer.querySelector(\"[data-index=\\\"\".concat(this.number, \"\\\"]\"));\n\n      if (listMonth === null) {\n        this.renderDays(\"prev\");\n        this.colorPeriod();\n      } else {\n        this.translateX = this.translateX + 280;\n        this.daysContainer.style.transform = \"translateX(\".concat(this.translateX + \"px\", \")\");\n      }\n    }\n  }, {\n    key: \"activeDay\",\n    value: function activeDay(day) {\n      this.reviewCountActiveDays();\n      day.classList.add(\"active\");\n      this.btnClean.classList.add(\"active\");\n      this.colorPeriod();\n    }\n  }, {\n    key: \"reviewCountActiveDays\",\n    value: function reviewCountActiveDays() {\n      var activeDays = this.arrayActiveDays();\n\n      if (activeDays.length > 1) {\n        activeDays.forEach(function (item) {\n          return item.classList.remove(\"active\", \"start\", \"end\");\n        });\n        this.element.querySelectorAll(\".streak\").forEach(function (item) {\n          return item.classList.remove(\"streak\");\n        });\n      }\n    }\n  }, {\n    key: \"colorPeriod\",\n    value: function colorPeriod() {\n      var activeDays = this.arrayActiveDays();\n\n      if (activeDays.length == 2) {\n        this.startPeriodTimeStamp = parseInt(activeDays[0].dataset.value);\n        this.endPeriodTimeStamp = parseInt(activeDays[1].dataset.value);\n        this.element.querySelectorAll(\"[data-value=\\\"\".concat(this.startPeriodTimeStamp, \"\\\"]\")).forEach(function (element) {\n          element.classList.add(\"start\", \"active\");\n        });\n        this.element.querySelectorAll(\"[data-value=\\\"\".concat(this.endPeriodTimeStamp, \"\\\"]\")).forEach(function (element) {\n          element.classList.add(\"end\", \"active\");\n        });\n\n        for (var i = this.startPeriodTimeStamp + this.timeStampDay; i < this.endPeriodTimeStamp; i += this.timeStampDay) {\n          this.element.querySelectorAll(\"[data-value=\\\"\".concat(i, \"\\\"]\")).forEach(function (element) {\n            element.classList.add(\"streak\");\n          });\n        }\n      }\n\n      if (activeDays.length == 1) {\n        this.startPeriodTimeStamp = parseInt(activeDays[0].dataset.value);\n        this.endPeriodTimeStamp = this.startPeriodTimeStamp;\n      }\n    }\n  }, {\n    key: \"fillInput\",\n    value: function fillInput(arrayActiveDays) {\n      if (arrayActiveDays.length === 0) {\n        if (this.options.countInput === 1) {\n          this.inputStartDate.textContent = this.options.placeholder;\n        } else {\n          this.inputStartDate.textContent = this.options.placeholder;\n          this.inputEndDate.textContent = this.options.placeholder;\n        }\n\n        return;\n      }\n\n      localStorage.setItem('date', JSON.stringify([this.startPeriodTimeStamp, this.endPeriodTimeStamp]));\n      var startDate = this.formatter.format(this.startPeriodTimeStamp);\n      var endDate = this.formatter.format(this.endPeriodTimeStamp);\n\n      if (arrayActiveDays.length >= 1) {\n        if (this.options.countInput === 1) {\n          this.inputStartDate.textContent = \"\".concat(startDate, \" - \").concat(endDate);\n        } else {\n          this.inputStartDate.textContent = startDate;\n          this.inputEndDate.textContent = endDate;\n        }\n      }\n    }\n  }, {\n    key: \"arrayActiveDays\",\n    value: function arrayActiveDays() {\n      return Array.from(this.element.querySelectorAll(\".day.active\"));\n    }\n  }, {\n    key: \"cleanDrop\",\n    value: function cleanDrop() {\n      var _iterator = _createForOfIteratorHelper(this.element.querySelectorAll(\".day\")),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var day = _step.value;\n          day.classList.remove(\"active\", \"start\", \"end\", \"streak\");\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      this.btnClean.classList.remove(\"active\");\n    }\n  }]);\n\n  return Datepicker;\n}();\n\n//# sourceURL=webpack:///./elements/datepicker/datepicker.js?");

/***/ }),

/***/ "./elements/logo/logo.js":
/*!*******************************!*\
  !*** ./elements/logo/logo.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.svg */ \"./elements/logo/img/logo.svg\");\n/* harmony import */ var _img_logo_UIkit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo_UIkit.svg */ \"./elements/logo/img/logo_UIkit.svg\");\n/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.scss */ \"./elements/logo/logo.scss\");\n\n\n\n\n//# sourceURL=webpack:///./elements/logo/logo.js?");

/***/ }),

/***/ "./elements/select/select.js":
/*!***********************************!*\
  !*** ./elements/select/select.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTemplateSelect\": function() { return /* binding */ getTemplateSelect; },\n/* harmony export */   \"Select\": function() { return /* binding */ Select; }\n/* harmony export */ });\n/* harmony import */ var _select_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.scss */ \"./elements/select/select.scss\");\n/* harmony import */ var _img_expand_more_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/expand_more.svg */ \"./img/expand_more.svg\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar getTemplateSelect = function getTemplateSelect() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var placeholder = arguments.length > 1 ? arguments[1] : undefined;\n  var header = arguments.length > 2 ? arguments[2] : undefined;\n  var text = placeholder !== null && placeholder !== void 0 ? placeholder : \"Выберите значение\";\n  var items = data.map(function (item, index) {\n    return \"\\n      <div class=\\\"select__drop__down__item\\\" data-index = \".concat(index, \">\\n      <div class=\\\"select__item__text\\\">\").concat(item.nameConter, \"</div>\\n      <div class=\\\"select__item__content__right\\\">\\n        <button class=\\\"select__item__btn \").concat(item.count > 0 ? 'active' : '', \"\\\" type=\\\"button\\\" data-type=\\\"btnMinus\\\">-</button>\\n        <div class=\\\"select__item__number\\\" data-type=\\\"count\\\">\").concat(item.count, \"</div>\\n        <button class=\\\"select__item__btn active\\\" type=\\\"button\\\" data-type=\\\"btnPlus\\\">+</button>\\n      </div>\\n      </div>\\n      \");\n  });\n  return \"<h3>\".concat(header, \"</h3>\\n              <div class=\\\"select__backdrop\\\" data-type=\\\"backdrop\\\"></div>\\n              <div class=\\\"select__input\\\" data-type=\\\"input\\\" tabindex='0'>\\n              <div class=\\\"select__input__placeholder\\\" data-type=\\\"input\\\">\").concat(text, \"</div>\\n              <span class=\\\"material-icons select__input__btn\\\" data-type=\\\"input\\\">expand_more</span>\\n              </div>\\n              <div class=\\\"select__drop__down\\\">\\n                \").concat(items.join(''), \"\\n                <div class=\\\"select__drop__down__btn\\\">\\n                  <button \").concat(data.map(function (item) {\n    return item.count > 0 ? 'class=\"active\"' : '';\n  }), \" type=\\\"button\\\" data-type=\\\"cleandrop\\\">\\u043E\\u0447\\u0438\\u0441\\u0442\\u0438\\u0442\\u044C</button>\\n                  <button class=\\\"active\\\" type=\\\"button\\\" data-type=\\\"backdrop\\\">\\u043F\\u0440\\u0438\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C</button>\\n                </div>\\n              </div>\");\n};\nvar Select = /*#__PURE__*/function () {\n  function Select(selector, options) {\n    _classCallCheck(this, Select);\n\n    this.element = document.querySelector(selector);\n    this.options = options;\n    this.selectId = null;\n    this.render();\n    this.setup();\n  }\n\n  _createClass(Select, [{\n    key: \"render\",\n    value: function render() {\n      var _this$options = this.options,\n          data = _this$options.data,\n          placeholder = _this$options.placeholder,\n          header = _this$options.header;\n      this.element.innerHTML = '';\n      this.element.insertAdjacentHTML(\"afterbegin\", getTemplateSelect(data, placeholder, header));\n    }\n  }, {\n    key: \"setup\",\n    value: function setup() {\n      this.clickHandler = this.clickHandler.bind(this);\n      this.element.addEventListener(\"click\", this.clickHandler);\n      this.value = this.element.querySelector('.select__input__placeholder[data-type=\"input\"]');\n      this.count = this.element.querySelectorAll('[data-type=\"count\"]');\n      this.btnClean = this.element.querySelector('[data-type=\"cleandrop\"]');\n      this.currentInput();\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler(event) {\n      var type = event.target.dataset.type;\n\n      if (type === \"input\") {\n        this.toogle();\n      }\n\n      if (type === \"btnPlus\" || type === \"btnMinus\") {\n        this.counter(event.target.parentElement, type);\n        this.currentStyleBtn(event.target.parentElement);\n        this.activeBtnClean();\n      }\n\n      if (type === \"backdrop\") {\n        this.toogle();\n      }\n\n      if (type === \"cleandrop\") {\n        this.cleanCount();\n      }\n    }\n  }, {\n    key: \"toogle\",\n    value: function toogle() {\n      this.element.classList.toggle(\"open\");\n    }\n  }, {\n    key: \"counter\",\n    value: function counter(container, type) {\n      var countElement = container.querySelector('[data-type=\"count\"]');\n      var count = countElement.textContent;\n      countElement.textContent = type === \"btnPlus\" ? this.plus(count) : this.minus(count);\n      this.currentInput();\n    }\n  }, {\n    key: \"plus\",\n    value: function plus(count) {\n      return ++count;\n    }\n  }, {\n    key: \"minus\",\n    value: function minus(count) {\n      return count <= 0 ? 0 : --count;\n    }\n  }, {\n    key: \"currentInput\",\n    value: function currentInput() {\n      var _this = this;\n\n      var countList = this.element.querySelectorAll('[data-type=\"count\"]');\n      var arrayTextForInput = [];\n      var sum = 0;\n      var indexSelect;\n      countList.forEach(function (item, index) {\n        if (parseInt(item.textContent) > 0) {\n          if (_this.options.data[index].select) {\n            indexSelect = index;\n            sum += parseInt(item.textContent);\n          } else {\n            var textForInput = _this.declOfNum(item.textContent, _this.options.data[index].value);\n\n            arrayTextForInput.push(textForInput);\n          }\n        }\n      });\n\n      if (sum > 0) {\n        var textForInput = this.declOfNum(sum, this.options.data[indexSelect].value);\n        arrayTextForInput.unshift(textForInput);\n      }\n\n      this.value.textContent = arrayTextForInput.length === 0 ? this.options.placeholder : arrayTextForInput.join(', ');\n    }\n  }, {\n    key: \"declOfNum\",\n    value: function declOfNum(n, text_forms) {\n      if (n == 0) {\n        return '';\n      }\n\n      n = Math.abs(n) % 1000;\n      var n1 = n % 10;\n\n      if (n > 10 && n < 20) {\n        return n + \" \" + text_forms[2];\n      }\n\n      if (n1 > 1 && n1 < 5) {\n        return n + \" \" + text_forms[1];\n      }\n\n      if (n1 == 1) {\n        return n + \" \" + text_forms[0];\n      }\n\n      return n + \" \" + text_forms[2];\n    }\n  }, {\n    key: \"currentStyleBtn\",\n    value: function currentStyleBtn() {\n      var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;\n      var btnMinus = container.querySelectorAll('[data-type=\"btnMinus\"]');\n      var count = container.querySelectorAll('[data-type=\"count\"]');\n      count.forEach(function (item, index) {\n        if (item.textContent > 0) {\n          btnMinus[index].classList.add(\"active\");\n        } else {\n          btnMinus[index].classList.remove(\"active\");\n        }\n      });\n    }\n  }, {\n    key: \"activeBtnClean\",\n    value: function activeBtnClean() {\n      var countList = this.element.querySelectorAll('[data-type=\"count\"]');\n      var count = 0;\n      countList.forEach(function (item) {\n        item.textContent > 0 ? count++ : '';\n      });\n      count > 0 ? this.btnClean.classList.add(\"active\") : this.btnClean.classList.remove(\"active\");\n    }\n  }, {\n    key: \"cleanCount\",\n    value: function cleanCount() {\n      this.options.data.map(function (item) {\n        return item.count = 0;\n      });\n\n      var _iterator = _createForOfIteratorHelper(this.count),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var number = _step.value;\n          number.textContent = 0;\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      this.currentStyleBtn();\n      this.currentInput();\n      this.btnClean.classList.remove(\"active\");\n    }\n  }]);\n\n  return Select;\n}();\n\n//# sourceURL=webpack:///./elements/select/select.js?");

/***/ }),

/***/ "./elements/subscriptionTextField/subscriptionTextField.js":
/*!*****************************************************************!*\
  !*** ./elements/subscriptionTextField/subscriptionTextField.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _subscriptionTextField_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscriptionTextField.scss */ \"./elements/subscriptionTextField/subscriptionTextField.scss\");\n\n\n//# sourceURL=webpack:///./elements/subscriptionTextField/subscriptionTextField.js?");

/***/ }),

/***/ "./elements/btn/btn.scss":
/*!*******************************!*\
  !*** ./elements/btn/btn.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./elements/btn/btn.scss?");

/***/ }),

/***/ "./elements/datepicker/datepicker.scss":
/*!*********************************************!*\
  !*** ./elements/datepicker/datepicker.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./elements/datepicker/datepicker.scss?");

/***/ }),

/***/ "./elements/logo/logo.scss":
/*!*********************************!*\
  !*** ./elements/logo/logo.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./elements/logo/logo.scss?");

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

/***/ "./img/expand_more.svg":
/*!*****************************!*\
  !*** ./img/expand_more.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/expand_more.svg\";\n\n//# sourceURL=webpack:///./img/expand_more.svg?");

/***/ })

}]);