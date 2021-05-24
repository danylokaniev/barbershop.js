(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/component/calendar/Calendar.jsx":
/*!*********************************************!*\
  !*** ./src/component/calendar/Calendar.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _Calendar_m_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Calendar.m.css */ \"./src/component/calendar/Calendar.m.css\");\n/* harmony import */ var _Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Calendar = () => {\n  var [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    currentMonth: new Date(),\n    selectedDate: new Date()\n  });\n\n  var renderHeader = () => {\n    var dateFormat = 'MMMM yyyy';\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"\".concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.header, \" \").concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.row, \" \").concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.flexMiddle)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"\".concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.col, \" \").concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.colStart)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: _Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,\n      onClick: prevMonth\n    }, \"chevron_left\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"\".concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.col, \" \").concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.colCenter)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"format\"])(state.currentMonth, dateFormat))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"\".concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.col, \" \").concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.colEnd),\n      onClick: nextMonth\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: _Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon\n    }, \"chevron_right\")));\n  };\n\n  var renderDays = () => {\n    var dateFormat = 'eeee';\n    var days = [];\n    var startDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"startOfWeek\"])(state.currentMonth);\n\n    for (var i = 0; i < 7; i++) {\n      days.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        className: \"\".concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.col, \" \").concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.colCenter),\n        key: i\n      }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"addDays\"])(startDate, i), dateFormat)));\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"\".concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.days, \" \").concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.row)\n    }, \" \", days);\n  };\n\n  var renderCells = () => {\n    var {\n      currentMonth,\n      selectedDate\n    } = state;\n    var monthStart = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"startOfMonth\"])(currentMonth);\n    var monthEnd = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"endOfMonth\"])(monthStart);\n    var startDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"startOfWeek\"])(monthStart);\n    var endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"endOfWeek\"])(monthEnd);\n    var dateFormat = 'd';\n    var rows = [];\n    var days = [];\n    var day = startDate;\n    var formattedDate = '';\n\n    while (day <= endDate) {\n      var _loop = function _loop(i) {\n        formattedDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"format\"])(day, dateFormat);\n        var cloneDay = day;\n        days.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n          className: \"\".concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.col, \" \").concat(_Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.cell, \" \").concat(!Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"isSameMonth\"])(day, monthStart) ? _Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.disabled : Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"isSameDay\"])(day, selectedDate) ? _Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.selected : ''),\n          key: day,\n          onClick: () => onDateClick(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"parse\"])(cloneDay))\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n          className: _Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.number\n        }, formattedDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n          className: _Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg\n        }, formattedDate)));\n        day = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"addDays\"])(day, 1);\n      };\n\n      for (var i = 0; i < 7; i++) {\n        _loop(i);\n      }\n\n      rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        className: _Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.row,\n        key: day\n      }, days));\n      days = [];\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: _Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.body\n    }, rows);\n  };\n\n  var onDateClick = day => {\n    setState(_objectSpread(_objectSpread({}, state), {}, {\n      selectedDate: day\n    }));\n  };\n\n  var nextMonth = () => {\n    setState(_objectSpread(_objectSpread({}, state), {}, {\n      currentMonth: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"addMonths\"])(state.currentMonth, 1)\n    }));\n  };\n\n  var prevMonth = () => {\n    setState(_objectSpread(_objectSpread({}, state), {}, {\n      currentMonth: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"subMonths\"])(state.currentMonth, 1)\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: _Calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default.a.calendar\n  }, renderHeader(), renderDays(), renderCells());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\n\n//# sourceURL=webpack:///./src/component/calendar/Calendar.jsx?");

/***/ }),

/***/ "./src/component/calendar/Calendar.m.css":
/*!***********************************************!*\
  !*** ./src/component/calendar/Calendar.m.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"icon\":\"src-component-calendar-Calendar-m__icon\",\"row\":\"src-component-calendar-Calendar-m__row\",\"rowMiddle\":\"src-component-calendar-Calendar-m__rowMiddle\",\"col\":\"src-component-calendar-Calendar-m__col\",\"colStart\":\"src-component-calendar-Calendar-m__colStart\",\"colCenter\":\"src-component-calendar-Calendar-m__colCenter\",\"colEnd\":\"src-component-calendar-Calendar-m__colEnd\",\"calendar\":\"src-component-calendar-Calendar-m__calendar\",\"header\":\"src-component-calendar-Calendar-m__header\",\"days\":\"src-component-calendar-Calendar-m__days\",\"body\":\"src-component-calendar-Calendar-m__body\",\"cell\":\"src-component-calendar-Calendar-m__cell\",\"selected\":\"src-component-calendar-Calendar-m__selected\",\"number\":\"src-component-calendar-Calendar-m__number\",\"disabled\":\"src-component-calendar-Calendar-m__disabled\",\"bg\":\"src-component-calendar-Calendar-m__bg\"};\n\n//# sourceURL=webpack:///./src/component/calendar/Calendar.m.css?");

/***/ }),

/***/ "./src/component/slider/Slider.jsx":
/*!*****************************************!*\
  !*** ./src/component/slider/Slider.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ \"./src/component/slider/images.js\");\n/* harmony import */ var _Slider_m_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.m.css */ \"./src/component/slider/Slider.m.css\");\n/* harmony import */ var _Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_m_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar ImageSlider = props => {\n  var [current, setCurrent] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  var {\n    length\n  } = _images__WEBPACK_IMPORTED_MODULE_1__[\"images\"];\n\n  var nextSlide = () => {\n    setCurrent(current === length - 1 ? 0 : current + 1);\n  };\n\n  var prevSlide = () => {\n    setCurrent(current === 0 ? length - 1 : current - 1);\n  };\n\n  var dotClick = index => {\n    setCurrent(index);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: _Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.slider\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(_Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.arrow, \" \").concat(_Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.leftArrow),\n    onClick: prevSlide\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(_Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.arrow, \" \").concat(_Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.rightArrow),\n    onClick: nextSlide\n  }), _images__WEBPACK_IMPORTED_MODULE_1__[\"images\"].map((image, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(index === current ? \"\".concat(_Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.slide, \" \").concat(_Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.active) : _Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.slide),\n    key: image\n  }, index === current && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: image,\n    className: _Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.image\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.dots\n  }, _images__WEBPACK_IMPORTED_MODULE_1__[\"images\"].map((image, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(index === current ? \"\".concat(_Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot, \" \").concat(_Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.activeDot) : _Slider_m_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot),\n    key: image,\n    onClick: () => dotClick(index)\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\n\n//# sourceURL=webpack:///./src/component/slider/Slider.jsx?");

/***/ }),

/***/ "./src/component/slider/Slider.m.css":
/*!*******************************************!*\
  !*** ./src/component/slider/Slider.m.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"slider\":\"src-component-slider-Slider-m__slider\",\"image\":\"src-component-slider-Slider-m__image\",\"arrow\":\"src-component-slider-Slider-m__arrow\",\"rightArrow\":\"src-component-slider-Slider-m__rightArrow\",\"leftArrow\":\"src-component-slider-Slider-m__leftArrow\",\"slide\":\"src-component-slider-Slider-m__slide\",\"active\":\"src-component-slider-Slider-m__active\",\"dot\":\"src-component-slider-Slider-m__dot\",\"activeDot\":\"src-component-slider-Slider-m__activeDot\",\"dots\":\"src-component-slider-Slider-m__dots\"};\n\n//# sourceURL=webpack:///./src/component/slider/Slider.m.css?");

/***/ }),

/***/ "./src/component/slider/images.js":
/*!****************************************!*\
  !*** ./src/component/slider/images.js ***!
  \****************************************/
/*! exports provided: images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"images\", function() { return images; });\nvar images = ['https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80', 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80']; //todo: change images\n\n//# sourceURL=webpack:///./src/component/slider/images.js?");

/***/ }),

/***/ "./src/pages/App.jsx":
/*!***************************!*\
  !*** ./src/pages/App.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_slider_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/slider/Slider */ \"./src/component/slider/Slider.jsx\");\n/* harmony import */ var _component_calendar_Calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/calendar/Calendar */ \"./src/component/calendar/Calendar.jsx\");\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_calendar_Calendar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\n\n//# sourceURL=webpack:///./src/pages/App.jsx?");

/***/ })

}]);