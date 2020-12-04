/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!****************************!*\
  !*** ./src/js/on_click.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("$(document).ready(function () {\n  var palette_btn;\n\n  if ($('#emojidex-emoji-palette').length === 0) {\n    palette_btn = $('<span class=\"emojidex-palette-button\">');\n    $('body').append(palette_btn);\n    return palette_btn.emojidexPalette({\n      onComplete: function (_this) {\n        return function (e) {\n          palette_btn.click();\n          return palette_btn.hide();\n        };\n      }(this)\n    });\n  } else {\n    return $($('.emojidex-palette-button')[0]).click();\n  }\n});\n\n//# sourceURL=webpack://emojidex-chrome_extension/./src/js/on_click.js?");
/******/ })()
;