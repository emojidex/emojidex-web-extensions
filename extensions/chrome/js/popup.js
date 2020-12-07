/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports */
/*! CommonJS bailout: this is used directly at 1:13-17 */
/***/ (function() {

eval("var _this2 = this;\n\n$(function () {\n  return $(\"#palette-btn\").emojidexPallet({\n    onComplete: function (_this) {\n      return function (e) {\n        $('.loading_info').remove();\n        $('.ui-dialog .ui-dialog-titlebar button.btn-xs[aria-label=\"Close\"]').remove();\n        $('#palette-btn').click();\n        return $('.ui-dialog').css('top', '0px');\n      };\n    }(_this2)\n  });\n});\n\n//# sourceURL=webpack://emojidex-chrome_extension/./src/js/popup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_modules__["./src/js/popup.js"]();
/******/ })()
;