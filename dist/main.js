/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/coolors-io/lib/gen.js":
/*!********************************************!*\
  !*** ./node_modules/coolors-io/lib/gen.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var isValid = function (str) {
    // TODO: 🔧  check that it is a valid coolors string e.g 6 or 3 chars
    // TODO: 🔧 Validate that each char is a valid hex char (0-6, a-f)
    if (str.length === 6) {
        return true;
    }
    return false;
};
var gen = function (arr) {
    // TODO: 🔧 Ensure arr isn't longer than 10
    try {
        return arr.reduce(function (acc, curr, i) {
            // TODO: 🔧 handle strings that start with #
            // if curr contains # it will be returned without #, otherwise curr is simply returned
            var str = curr.split('#').pop();
            if (!isValid(str))
                throw new Error(str + " is not a valid hex value");
            if (i < arr.length - 1) {
                return "" + acc + str + "-";
            }
            else {
                return "" + acc + str;
            }
        }, 'https://coolors.co/');
    }
    catch (e) {
        return e;
    }
};
exports["default"] = gen;


/***/ }),

/***/ "./node_modules/coolors-io/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/coolors-io/lib/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var gen_1 = __webpack_require__(/*! ./gen */ "./node_modules/coolors-io/lib/gen.js");
Object.defineProperty(exports, "gen", ({ enumerable: true, get: function () { return gen_1.default; } }));
var parse_1 = __webpack_require__(/*! ./parse */ "./node_modules/coolors-io/lib/parse.js");
Object.defineProperty(exports, "parse", ({ enumerable: true, get: function () { return parse_1.default; } }));


/***/ }),

/***/ "./node_modules/coolors-io/lib/parse.js":
/*!**********************************************!*\
  !*** ./node_modules/coolors-io/lib/parse.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var parse = function (url, hex) {
    if (hex === void 0) { hex = true; }
    // TODO: 🔧  Check that it is actually a coolors url
    var urlArr = url.split('/');
    var hexArr = urlArr[urlArr.length - 1].split('-');
    if (hex) {
        return hexArr.map(function (num) { return "#" + num; });
    }
    else {
        return hexArr;
    }
};
exports["default"] = parse;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Righteous-Regular.ttf */ "./src/Righteous-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ABeeZee-Regular.ttf */ "./src/ABeeZee-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Righteous';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\n}\n\n@font-face {\n    font-family: 'ABZ';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    --primary-color: #ffffff;\n    --secondary-color: #000000;\n\n    --accent1: #ffffff;\n    --accent2: #ffffff;\n    --accent3: #ffffff;\n    --accent4: #ffffff;\n\n    --primary-color-light: #ffffff;\n\n    --accent1-light: #ffffff;\n    --accent2-light: #ffffff;\n    --accent3-light: #ffffff;\n    --accent4-light: #ffffff;\n}\n\n/* Remove Defaults */\n\nbutton {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\nli {\n    list-style: none;\n}\n\nbody {\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--primary-color);\n}\n\n.plus-button .clickable {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0px;\n    transition: all 0.05s;\n    cursor: pointer;\n}\n\n.banner {\n    font-size: 96px;\n    font-family: 'Righteous';\n    padding-left: 64px;\n    border-bottom: 4px solid var(--secondary-color);  \n    background-color: var(--primary-color);\n}\n\n.banner-text {\n    color: var(--secondary-color);\n    transition: all 0.5s;\n    cursor: default;\n    text-shadow: -1px 1px var(--accent1), -2px 2px var(--accent2), -3px 3px var(--accent3), -4px 4px var(--accent4)\n}\n\n.banner-text:hover {\n    text-shadow: -2px 2px var(--accent1), -4px 4px var(--accent2), -6px 6px var(--accent3), -8px 8px var(--accent4);\n}\n\n#main-content {\n    display: flex;\n    flex: 1;\n}\n\n#sidebar {\n    width: 320px;\n    text-align: center;\n    border-right: 4px solid var(--secondary-color);\n    height: 100%;\n    padding: 32px;\n    background-color: var(--accent1);\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n#sidebar-title {\n    text-transform: capitalize;\n    font-size: 36px;\n    font-family: 'ABZ';\n    padding: 8px 32px;\n    border: 4px solid var(--secondary-color);\n    font-weight: bolder;\n    background-color: var(--primary-color);\n    box-shadow: -3px 3px var(--accent3), 3px -3px var(--accent4)\n}\n\n#sidebar-items {\n    display: flex;\n    flex-direction: column;\n    gap: 16px\n}\n\n.sidebar-item {\n    font-family: 'ABZ';\n    background-color: white;\n    font-size: 30px;\n    padding: 8px;\n    background-color: var(--accent3-light);\n    box-shadow: -2px 2px var(--accent3), 2px -2px var(--accent4)\n}\n\n.sidebar-item:nth-child(2n) {\n    background-color: var(--accent4-light);\n}\n\n.sidebar-item:nth-child(1) {\n    background-color: var(--secondary-color);\n    color: var(--primary-color);\n    box-shadow: none;\n}\n\n#project-container {\n    padding: 32px 64px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n    background-image: repeating-linear-gradient(45deg, var(--primary-color) 0, var(--primary-color) 5.5px, transparent 0, transparent 50%);\n    background-size: 13px 13px;\n    background-color: var(--primary-color-light);\n\n}\n\n.plus-button {\n    display: flex;\n    align-items: center;\n    font-family: 'ABZ';\n    color: var(--primary-color);\n    font-weight: bolder;\n}\n\n/* New Project Button */\n\n.plus-button.new-project {\n    background-color: var(--accent1);\n    font-size: 32px;\n    border: 2px solid var(--secondary-color);\n    align-self: flex-start;\n}\n\n.new-project .display-text {\n    padding: 0px 32px;\n    text-shadow: 2px 2px var(--secondary-color);\n}\n\n.new-project .clickable {\n    width: 56px;\n}\n\n.new-project .clickable:hover {\n    background-color: var(--secondary-color);\n}\n\n.new-project img {\n    transition: all 0.05s;\n    padding: 8px;\n    filter: invert(1) drop-shadow(2px 2px var(--secondary-color));\n    height: 56px;\n}\n\n/* New Project (Disabled) */\n\n.plus-button.disabled {\n    background-color: var(--primary-color);\n}\n\n.plus-button.disabled .display-text {\n    padding: 0px 32px;\n    color: var(--secondary-color);\n    filter: contrast(0.2);\n    text-shadow: none;\n}\n\n.plus-button.disabled img {\n    filter: invert(0) contrast(0.2);\n}\n\n.plus-button.disabled .clickable:hover {\n    background-color: var(--primary-color);\n    cursor: default;\n}\n\n/**/\n\n#project-container {\n    flex: 1;\n}\n\n.project-item {\n    width: 80%;\n    font-family: 'ABZ';\n    font-size: 24px;\n    border: 4px solid var(--secondary-color);\n    transition: all 0.3s;\n}\n\n.project-item:hover {\n    box-shadow: -5px 5px var(--accent1), 5px -5px var(--accent2);\n}\n\n.project-item:nth-child(2n):hover {\n    box-shadow: -5px 5px var(--accent3), 5px -5px var(--accent4);\n}\n\n.project-item.unsaved {\n    position: relative;\n}\n\n.project-item .save, .project-item .discard {\n    position: absolute;\n    left: 100%;\n    height: 64px;\n    border: 4px solid var(--secondary-color);\n    padding: 8px;\n    top: -4px;\n    background-color: var(--primary-color);\n    cursor: pointer;\n}\n\n.project-item .discard {\n    top: 56px;\n}\n\n.project-item .save:hover {\n    background-color: lightgreen;\n}\n\n.project-item .discard:hover {\n    background-color: lightcoral;\n}\n\n.project-item > .header {\n    border-bottom: 4px solid var(--secondary-color);\n    display: flex;\n    padding: 8px;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--secondary-color);\n    transition: all 0.5s;\n}\n\n.project-item.unsaved > .header {\n    background-color: var(--primary-color);\n}\n\n.project-item .header-left {\n    display: flex;\n    gap: 32px;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-item .project-title {\n    padding: 4px 4px 4px 16px;\n    font-size: 32px;\n    font-weight: 900;\n    color: var(--primary-color);\n}\n\n.project-item.unsaved .project-title {\n    color: var(--secondary-color);\n}\n\n.project-item .header-left input {\n    border: 2px solid var(--secondary-color);\n    color: var(--secondary-color)\n}\n\n.project-item .header-left input:focus {\n    outline: 4px solid var(--accent3)\n}\n\n.project-item .plus-button {\n    background-color: var(--secondary-color);\n    border: 2px solid var(--secondary-color);\n}\n\n.add-tags img {\n    height: 48px;\n    filter: invert(1);\n    padding: 8px;\n}\n\n.add-tags .clickable:hover {\n    background-color: var(--accent3);\n}\n\n.add-tags .display-text {\n    padding: 0px 8px;\n}\n\n.project-item > .body {\n    padding: 16px;\n    background-color: var(--accent1-light);\n    transition: background-color 0.3s;\n    overflow: hidden;\n}\n\n.project-item:nth-child(4n-2) > .body {\n    background-color: var(--accent3-light);\n}\n\n.project-item:nth-child(4n-1) > .body {\n    background-color: var(--accent2-light);\n}\n\n.project-item:nth-child(4n) > .body {\n    background-color: var(--accent4-light);\n}\n\n.project-item > .body.collapsed {\n    transition: all 0s;\n    padding: 0px 16px;\n    height: 0px;\n}\n\n.project-item.unsaved > .body {\n    background-color: var(--primary-color);\n    height: auto;\n}\n\n.task-list > .header {\n    border-bottom: 3px double var(--secondary-color);\n    margin-bottom: 8px;\n}\n\n.project-item ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 8px;\n}\n\n/* New Task Button Styling */\n\n.new-task {\n    display: flex;\n    gap: 4px;\n}\n\n.new-task input {\n    border: 0px;\n    border-bottom: 1px solid var(--secondary-color);\n    font-size: 20px;\n    background-color: inherit;\n}\n\n.new-task input::placeholder {\n    font-style: italic;\n}\n\n.new-task input:focus {\n    outline: 0px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Righteous';\n    src: url('Righteous-Regular.ttf')\n}\n\n@font-face {\n    font-family: 'ABZ';\n    src: url('ABeeZee-Regular.ttf');\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    --primary-color: #ffffff;\n    --secondary-color: #000000;\n\n    --accent1: #ffffff;\n    --accent2: #ffffff;\n    --accent3: #ffffff;\n    --accent4: #ffffff;\n\n    --primary-color-light: #ffffff;\n\n    --accent1-light: #ffffff;\n    --accent2-light: #ffffff;\n    --accent3-light: #ffffff;\n    --accent4-light: #ffffff;\n}\n\n/* Remove Defaults */\n\nbutton {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\nli {\n    list-style: none;\n}\n\nbody {\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--primary-color);\n}\n\n.plus-button .clickable {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0px;\n    transition: all 0.05s;\n    cursor: pointer;\n}\n\n.banner {\n    font-size: 96px;\n    font-family: 'Righteous';\n    padding-left: 64px;\n    border-bottom: 4px solid var(--secondary-color);  \n    background-color: var(--primary-color);\n}\n\n.banner-text {\n    color: var(--secondary-color);\n    transition: all 0.5s;\n    cursor: default;\n    text-shadow: -1px 1px var(--accent1), -2px 2px var(--accent2), -3px 3px var(--accent3), -4px 4px var(--accent4)\n}\n\n.banner-text:hover {\n    text-shadow: -2px 2px var(--accent1), -4px 4px var(--accent2), -6px 6px var(--accent3), -8px 8px var(--accent4);\n}\n\n#main-content {\n    display: flex;\n    flex: 1;\n}\n\n#sidebar {\n    width: 320px;\n    text-align: center;\n    border-right: 4px solid var(--secondary-color);\n    height: 100%;\n    padding: 32px;\n    background-color: var(--accent1);\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n#sidebar-title {\n    text-transform: capitalize;\n    font-size: 36px;\n    font-family: 'ABZ';\n    padding: 8px 32px;\n    border: 4px solid var(--secondary-color);\n    font-weight: bolder;\n    background-color: var(--primary-color);\n    box-shadow: -3px 3px var(--accent3), 3px -3px var(--accent4)\n}\n\n#sidebar-items {\n    display: flex;\n    flex-direction: column;\n    gap: 16px\n}\n\n.sidebar-item {\n    font-family: 'ABZ';\n    background-color: white;\n    font-size: 30px;\n    padding: 8px;\n    background-color: var(--accent3-light);\n    box-shadow: -2px 2px var(--accent3), 2px -2px var(--accent4)\n}\n\n.sidebar-item:nth-child(2n) {\n    background-color: var(--accent4-light);\n}\n\n.sidebar-item:nth-child(1) {\n    background-color: var(--secondary-color);\n    color: var(--primary-color);\n    box-shadow: none;\n}\n\n#project-container {\n    padding: 32px 64px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n    background-image: repeating-linear-gradient(45deg, var(--primary-color) 0, var(--primary-color) 5.5px, transparent 0, transparent 50%);\n    background-size: 13px 13px;\n    background-color: var(--primary-color-light);\n\n}\n\n.plus-button {\n    display: flex;\n    align-items: center;\n    font-family: 'ABZ';\n    color: var(--primary-color);\n    font-weight: bolder;\n}\n\n/* New Project Button */\n\n.plus-button.new-project {\n    background-color: var(--accent1);\n    font-size: 32px;\n    border: 2px solid var(--secondary-color);\n    align-self: flex-start;\n}\n\n.new-project .display-text {\n    padding: 0px 32px;\n    text-shadow: 2px 2px var(--secondary-color);\n}\n\n.new-project .clickable {\n    width: 56px;\n}\n\n.new-project .clickable:hover {\n    background-color: var(--secondary-color);\n}\n\n.new-project img {\n    transition: all 0.05s;\n    padding: 8px;\n    filter: invert(1) drop-shadow(2px 2px var(--secondary-color));\n    height: 56px;\n}\n\n/* New Project (Disabled) */\n\n.plus-button.disabled {\n    background-color: var(--primary-color);\n}\n\n.plus-button.disabled .display-text {\n    padding: 0px 32px;\n    color: var(--secondary-color);\n    filter: contrast(0.2);\n    text-shadow: none;\n}\n\n.plus-button.disabled img {\n    filter: invert(0) contrast(0.2);\n}\n\n.plus-button.disabled .clickable:hover {\n    background-color: var(--primary-color);\n    cursor: default;\n}\n\n/**/\n\n#project-container {\n    flex: 1;\n}\n\n.project-item {\n    width: 80%;\n    font-family: 'ABZ';\n    font-size: 24px;\n    border: 4px solid var(--secondary-color);\n    transition: all 0.3s;\n}\n\n.project-item:hover {\n    box-shadow: -5px 5px var(--accent1), 5px -5px var(--accent2);\n}\n\n.project-item:nth-child(2n):hover {\n    box-shadow: -5px 5px var(--accent3), 5px -5px var(--accent4);\n}\n\n.project-item.unsaved {\n    position: relative;\n}\n\n.project-item .save, .project-item .discard {\n    position: absolute;\n    left: 100%;\n    height: 64px;\n    border: 4px solid var(--secondary-color);\n    padding: 8px;\n    top: -4px;\n    background-color: var(--primary-color);\n    cursor: pointer;\n}\n\n.project-item .discard {\n    top: 56px;\n}\n\n.project-item .save:hover {\n    background-color: lightgreen;\n}\n\n.project-item .discard:hover {\n    background-color: lightcoral;\n}\n\n.project-item > .header {\n    border-bottom: 4px solid var(--secondary-color);\n    display: flex;\n    padding: 8px;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--secondary-color);\n    transition: all 0.5s;\n}\n\n.project-item.unsaved > .header {\n    background-color: var(--primary-color);\n}\n\n.project-item .header-left {\n    display: flex;\n    gap: 32px;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-item .project-title {\n    padding: 4px 4px 4px 16px;\n    font-size: 32px;\n    font-weight: 900;\n    color: var(--primary-color);\n}\n\n.project-item.unsaved .project-title {\n    color: var(--secondary-color);\n}\n\n.project-item .header-left input {\n    border: 2px solid var(--secondary-color);\n    color: var(--secondary-color)\n}\n\n.project-item .header-left input:focus {\n    outline: 4px solid var(--accent3)\n}\n\n.project-item .plus-button {\n    background-color: var(--secondary-color);\n    border: 2px solid var(--secondary-color);\n}\n\n.add-tags img {\n    height: 48px;\n    filter: invert(1);\n    padding: 8px;\n}\n\n.add-tags .clickable:hover {\n    background-color: var(--accent3);\n}\n\n.add-tags .display-text {\n    padding: 0px 8px;\n}\n\n.project-item > .body {\n    padding: 16px;\n    background-color: var(--accent1-light);\n    transition: background-color 0.3s;\n    overflow: hidden;\n}\n\n.project-item:nth-child(4n-2) > .body {\n    background-color: var(--accent3-light);\n}\n\n.project-item:nth-child(4n-1) > .body {\n    background-color: var(--accent2-light);\n}\n\n.project-item:nth-child(4n) > .body {\n    background-color: var(--accent4-light);\n}\n\n.project-item > .body.collapsed {\n    transition: all 0s;\n    padding: 0px 16px;\n    height: 0px;\n}\n\n.project-item.unsaved > .body {\n    background-color: var(--primary-color);\n    height: auto;\n}\n\n.task-list > .header {\n    border-bottom: 3px double var(--secondary-color);\n    margin-bottom: 8px;\n}\n\n.project-item ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 8px;\n}\n\n/* New Task Button Styling */\n\n.new-task {\n    display: flex;\n    gap: 4px;\n}\n\n.new-task input {\n    border: 0px;\n    border-bottom: 1px solid var(--secondary-color);\n    font-size: 20px;\n    background-color: inherit;\n}\n\n.new-task input::placeholder {\n    font-style: italic;\n}\n\n.new-task input:focus {\n    outline: 0px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/baseComponents.js":
/*!*******************************!*\
  !*** ./src/baseComponents.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    div: o => newElement('div',o),
    span: o => newElement('span',o),
    button: o => newElement('button',o),
    img: o => newImg(o),
    ul: o => newElement('ul',o),
    li: o => newElement('li',o)
});

// Central function that builds HTML elements from provided objects
function newElement(type,obj) {
    let ret = document.createElement(type);
    if ('text' in obj) ret.textContent = obj.text
    if ('id' in obj) ret.id = obj.id
    if ('class' in obj) {
        for (let c in obj.class) {
            ret.classList.add(obj.class[c])
        }
    }
    if ('children' in obj) {
        for (let i=0; i< obj.children.length; i++) {
            ret.appendChild(obj.children[i])
        }
    }
    return ret
}

function newImg(obj) {
    let ret = document.createElement('img');
    if ('src' in obj) ret.setAttribute('src',obj.src)
    if ('alt' in obj) ret.setAttribute('alt',obj.alt)
    if ('class' in obj) {
        for (let c in obj.class) {
            ret.classList.add(obj.class[c])
        }
    }
    return ret
}

/***/ }),

/***/ "./src/colorHandler.js":
/*!*****************************!*\
  !*** ./src/colorHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var coolors_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coolors-io */ "./node_modules/coolors-io/lib/index.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_1__);



const palette = 'https://coolors.co/f9fafb-060a0f-6593c2-6eb4a8-f0974e-e8765a'
// const palette = 'https://coolors.co/ebf2fa-060a0e-064789-427aa1-679436-a5be00'
// const palette = 'https://coolors.co/0f0806-f6f5f3-4281a4-48a9a6-d4b483-c1666b'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    let colors = (0,coolors_io__WEBPACK_IMPORTED_MODULE_0__.parse)(palette);

    document.body.style.setProperty('--primary-color', colors[0]);
    document.body.style.setProperty('--secondary-color', colors[1])
    document.body.style.setProperty('--primary-color-light', chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colors[1]).set('hsl.l',(0.9)))

    for (let i=2;i<colors.length;i++) {
        document.body.style.setProperty(`--accent${i-1}`, colors[i]);
        document.body.style.setProperty(`--accent${i-1}-light`, chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colors[i]).set('hsl.l',0.9))
        document.body.style.setProperty(`--accent${i-1}-dark`, chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colors[i]).set('hsl.l',0.1))
    }
});




/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styledComponents */ "./src/styledComponents.js");
/* harmony import */ var _baseComponents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseComponents.js */ "./src/baseComponents.js");



let index = 0;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    addTemplate: (e) => {
        let projectArea = document.getElementById('project-container')
        // Template already exists - return
        if (projectArea.querySelector('.unsaved')) {
            projectArea.querySelector('.unsaved').style.outline = "4px solid var(--color2)"
            setTimeout(() => {projectArea.querySelector('.unsaved').style.outline = ""},300)
            return
        }

        // Get template and insert
        let template = (0,_styledComponents__WEBPACK_IMPORTED_MODULE_0__.projectTemplate)();
        template.dataset.index = index++;
        console.log(template.dataset.index);
        projectArea.insertBefore(template, projectArea.querySelector('.new-project'))

        // Add event listeners to template
        document.querySelector('.unsaved .new-task button').addEventListener('click',addItem);
        document.querySelector('.unsaved .new-task input').addEventListener('keydown',addIfEnter);
        document.querySelector('.unsaved .discard').addEventListener('click',removeTemplate);
        document.querySelector('.unsaved .save').addEventListener('click',saveTemplate);

        // Disable button
        toggleAdding();
    },    
});

function addItem(e) {
    let t = e.target;
    console.log(t);
    let list = t.parentElement.parentElement.querySelector('ul');
    let input = t.parentElement.querySelector('input')
    if (input.value !== '') list.appendChild(_baseComponents_js__WEBPACK_IMPORTED_MODULE_1__["default"].li({text: input.value}))
    input.value = ''
}

function addIfEnter(e) {
    console.log(e);
    if (e.keyCode === 13) addItem(e)
}

function saveTemplate(e) {
    // Check title and remove
    let item = e.target.parentElement;
    let hl = item.querySelector('.header-left');
    let input = hl.querySelector('.project-title')

    // do nothing if title empty
    if (input.value === '') {
        input.style.outline = '4px solid red'
        setTimeout(() => {input.style.outline = ''},500)
        return
    }
    
    console.log('saving project item');

    // Remove Save/Discard buttons
    item.removeChild(e.target)
    item.removeChild(item.querySelector('.discard'))

    // Replace input with actual project title
    hl.insertBefore(_baseComponents_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({class: ['project-title'], text: input.value}),hl.firstChild)
    hl.removeChild(input)

    item.classList.remove('unsaved')

    // Allow button to add projects again
    toggleAdding();

}

function removeTemplate(e) {
    toggleAdding();
    e.target.parentElement.remove();
}

function toggleAdding() {
    document.querySelector('.new-project.plus-button').classList.toggle('disabled')
}



/***/ }),

/***/ "./src/skeleton.js":
/*!*************************!*\
  !*** ./src/skeleton.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponents.js */ "./src/baseComponents.js");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./src/styledComponents.js");



const banner = _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
    class: ['banner'],
    children: [
        _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].span({
            class: ['banner-text'],
            text: 'To-Do List'
        })
    ]
})

const newProjectButton = (0,_styledComponents__WEBPACK_IMPORTED_MODULE_1__.plusButton)('new-project','add new project')

const projectContainer = _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
    id: ['project-container'],
    children: [ newProjectButton ]
})

const sideBarItems = _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
    id: 'sidebar-items',
    children: [
        _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].button({class: ['sidebar-item'], text: 'projects'}),
        _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].button({class: ['sidebar-item'], text: 'tags'}),
        _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].button({class: ['sidebar-item'], text: 'settings'})
    ]
})

const sideBar = _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
    id: 'sidebar',
    children: [
        _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].span({
            id: 'sidebar-title',
            text: 'sidebar'
        }),
        sideBarItems
    ]
})



const mainContent = _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
    id: 'main-content',
    children: [
        sideBar,
        projectContainer
    ]
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([banner, mainContent]);

/***/ }),

/***/ "./src/styledComponents.js":
/*!*********************************!*\
  !*** ./src/styledComponents.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plusButton": () => (/* binding */ plusButton),
/* harmony export */   "projectTemplate": () => (/* binding */ projectTemplate)
/* harmony export */ });
/* harmony import */ var _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponents.js */ "./src/baseComponents.js");
/* harmony import */ var _plus_symbol_button_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus-symbol-button.png */ "./src/plus-symbol-button.png");
/* harmony import */ var _check_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check.png */ "./src/check.png");
/* harmony import */ var _close_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./close.png */ "./src/close.png");





function plusButtonBase() {
    return _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].button({
        class: ['clickable'],
        children: [ _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].img({src: _plus_symbol_button_png__WEBPACK_IMPORTED_MODULE_1__}) ]
    })
}

function plusButton (aClass,text) { return _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
    class: [aClass, 'plus-button'],
    children: [
        plusButtonBase(),
        _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].span({
            class: ['display-text'],
            text: text
        })
    ]
})}

function projectTemplate () {
    return _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
        class: ['project-item','unsaved'],
        children: [projectItemHeader(), projectItemBody(), projectSave(), projectDiscard()]
    })
}

function projectSave() {
    return _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].img({
        src: _check_png__WEBPACK_IMPORTED_MODULE_2__,
        class: ['save']
    })
}

function projectDiscard() {
    return _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].img({
        src: _close_png__WEBPACK_IMPORTED_MODULE_3__,
        class: ['discard']
    })
}

function projectItemHeader() {
    return _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
        class: ['header'],
        children: [ projectHeaderLeft(), projectHeaderRight()]
    })
}

function projectHeaderLeft() {
    return _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
        class: ['header-left'],
        children: [ projectTitle(), addTagsButton(), ]
    })
}

function projectTitle() {
    let ret = document.createElement('input')
    ret.setAttribute('type','text')
    ret.setAttribute('placeholder','Project Name')
    ret.classList.add('project-title')
    return ret;
}

function addTagsButton() {
    return plusButton('add-tags','add tags')
}

function projectHeaderRight() {
    return _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
        class: ['header-right'],
        children: [
            _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
                class: ['due-date'],
                text: 'Due Date'
            })
        ]
    })
}

function projectItemBody() { return _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
        class: ['body'],
        children: [
            _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
                class: ['task-list'],
                children: [
                    _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({class: ['header'], text: 'Task List'}),
                    _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].ul({class: ['list']}),
                    _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
                        class: ['new-task'],
                        children: [
                            _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].button({text: '+'}),
                            (() => {
                                let ret = document.createElement('input')
                                ret.setAttribute('type','text')
                                ret.setAttribute('placeholder','add a task...')
                                return ret
                            })()
                        ]
                    })


                ]
            })
        ]
    })
}

function convertToSaved(project) {
    console.log('converting to saved');
}

/***/ }),

/***/ "./src/ABeeZee-Regular.ttf":
/*!*********************************!*\
  !*** ./src/ABeeZee-Regular.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "567c41f153027117352b.ttf";

/***/ }),

/***/ "./src/Righteous-Regular.ttf":
/*!***********************************!*\
  !*** ./src/Righteous-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fd0110471f2228c1808a.ttf";

/***/ }),

/***/ "./src/check.png":
/*!***********************!*\
  !*** ./src/check.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2481df3ded6043213454.png";

/***/ }),

/***/ "./src/close.png":
/*!***********************!*\
  !*** ./src/close.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9591849fb98a83df16de.png";

/***/ }),

/***/ "./src/plus-symbol-button.png":
/*!************************************!*\
  !*** ./src/plus-symbol-button.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4f136c77917ffb51d58c.png";

/***/ }),

/***/ "./node_modules/chroma-js/chroma.js":
/*!******************************************!*\
  !*** ./node_modules/chroma-js/chroma.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */

(function (global, factory) {
     true ? module.exports = factory() :
    0;
})(this, (function () { 'use strict';

    var limit$2 = function (x, min, max) {
        if ( min === void 0 ) min=0;
        if ( max === void 0 ) max=1;

        return x < min ? min : x > max ? max : x;
    };

    var limit$1 = limit$2;

    var clip_rgb$3 = function (rgb) {
        rgb._clipped = false;
        rgb._unclipped = rgb.slice(0);
        for (var i=0; i<=3; i++) {
            if (i < 3) {
                if (rgb[i] < 0 || rgb[i] > 255) { rgb._clipped = true; }
                rgb[i] = limit$1(rgb[i], 0, 255);
            } else if (i === 3) {
                rgb[i] = limit$1(rgb[i], 0, 1);
            }
        }
        return rgb;
    };

    // ported from jQuery's $.type
    var classToType = {};
    for (var i$1 = 0, list$1 = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null']; i$1 < list$1.length; i$1 += 1) {
        var name = list$1[i$1];

        classToType[("[object " + name + "]")] = name.toLowerCase();
    }
    var type$p = function(obj) {
        return classToType[Object.prototype.toString.call(obj)] || "object";
    };

    var type$o = type$p;

    var unpack$B = function (args, keyOrder) {
        if ( keyOrder === void 0 ) keyOrder=null;

    	// if called with more than 3 arguments, we return the arguments
        if (args.length >= 3) { return Array.prototype.slice.call(args); }
        // with less than 3 args we check if first arg is object
        // and use the keyOrder string to extract and sort properties
    	if (type$o(args[0]) == 'object' && keyOrder) {
    		return keyOrder.split('')
    			.filter(function (k) { return args[0][k] !== undefined; })
    			.map(function (k) { return args[0][k]; });
    	}
    	// otherwise we just return the first argument
    	// (which we suppose is an array of args)
        return args[0];
    };

    var type$n = type$p;

    var last$4 = function (args) {
        if (args.length < 2) { return null; }
        var l = args.length-1;
        if (type$n(args[l]) == 'string') { return args[l].toLowerCase(); }
        return null;
    };

    var PI$2 = Math.PI;

    var utils = {
    	clip_rgb: clip_rgb$3,
    	limit: limit$2,
    	type: type$p,
    	unpack: unpack$B,
    	last: last$4,
    	PI: PI$2,
    	TWOPI: PI$2*2,
    	PITHIRD: PI$2/3,
    	DEG2RAD: PI$2 / 180,
    	RAD2DEG: 180 / PI$2
    };

    var input$h = {
    	format: {},
    	autodetect: []
    };

    var last$3 = utils.last;
    var clip_rgb$2 = utils.clip_rgb;
    var type$m = utils.type;
    var _input = input$h;

    var Color$D = function Color() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var me = this;
        if (type$m(args[0]) === 'object' &&
            args[0].constructor &&
            args[0].constructor === this.constructor) {
            // the argument is already a Color instance
            return args[0];
        }

        // last argument could be the mode
        var mode = last$3(args);
        var autodetect = false;

        if (!mode) {
            autodetect = true;
            if (!_input.sorted) {
                _input.autodetect = _input.autodetect.sort(function (a,b) { return b.p - a.p; });
                _input.sorted = true;
            }
            // auto-detect format
            for (var i = 0, list = _input.autodetect; i < list.length; i += 1) {
                var chk = list[i];

                mode = chk.test.apply(chk, args);
                if (mode) { break; }
            }
        }

        if (_input.format[mode]) {
            var rgb = _input.format[mode].apply(null, autodetect ? args : args.slice(0,-1));
            me._rgb = clip_rgb$2(rgb);
        } else {
            throw new Error('unknown format: '+args);
        }

        // add alpha channel
        if (me._rgb.length === 3) { me._rgb.push(1); }
    };

    Color$D.prototype.toString = function toString () {
        if (type$m(this.hex) == 'function') { return this.hex(); }
        return ("[" + (this._rgb.join(',')) + "]");
    };

    var Color_1 = Color$D;

    var chroma$k = function () {
    	var args = [], len = arguments.length;
    	while ( len-- ) args[ len ] = arguments[ len ];

    	return new (Function.prototype.bind.apply( chroma$k.Color, [ null ].concat( args) ));
    };

    chroma$k.Color = Color_1;
    chroma$k.version = '2.4.2';

    var chroma_1 = chroma$k;

    var unpack$A = utils.unpack;
    var max$2 = Math.max;

    var rgb2cmyk$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$A(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var k = 1 - max$2(r,max$2(g,b));
        var f = k < 1 ? 1 / (1-k) : 0;
        var c = (1-r-k) * f;
        var m = (1-g-k) * f;
        var y = (1-b-k) * f;
        return [c,m,y,k];
    };

    var rgb2cmyk_1 = rgb2cmyk$1;

    var unpack$z = utils.unpack;

    var cmyk2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$z(args, 'cmyk');
        var c = args[0];
        var m = args[1];
        var y = args[2];
        var k = args[3];
        var alpha = args.length > 4 ? args[4] : 1;
        if (k === 1) { return [0,0,0,alpha]; }
        return [
            c >= 1 ? 0 : 255 * (1-c) * (1-k), // r
            m >= 1 ? 0 : 255 * (1-m) * (1-k), // g
            y >= 1 ? 0 : 255 * (1-y) * (1-k), // b
            alpha
        ];
    };

    var cmyk2rgb_1 = cmyk2rgb;

    var chroma$j = chroma_1;
    var Color$C = Color_1;
    var input$g = input$h;
    var unpack$y = utils.unpack;
    var type$l = utils.type;

    var rgb2cmyk = rgb2cmyk_1;

    Color$C.prototype.cmyk = function() {
        return rgb2cmyk(this._rgb);
    };

    chroma$j.cmyk = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$C, [ null ].concat( args, ['cmyk']) ));
    };

    input$g.format.cmyk = cmyk2rgb_1;

    input$g.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$y(args, 'cmyk');
            if (type$l(args) === 'array' && args.length === 4) {
                return 'cmyk';
            }
        }
    });

    var unpack$x = utils.unpack;
    var last$2 = utils.last;
    var rnd = function (a) { return Math.round(a*100)/100; };

    /*
     * supported arguments:
     * - hsl2css(h,s,l)
     * - hsl2css(h,s,l,a)
     * - hsl2css([h,s,l], mode)
     * - hsl2css([h,s,l,a], mode)
     * - hsl2css({h,s,l,a}, mode)
     */
    var hsl2css$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hsla = unpack$x(args, 'hsla');
        var mode = last$2(args) || 'lsa';
        hsla[0] = rnd(hsla[0] || 0);
        hsla[1] = rnd(hsla[1]*100) + '%';
        hsla[2] = rnd(hsla[2]*100) + '%';
        if (mode === 'hsla' || (hsla.length > 3 && hsla[3]<1)) {
            hsla[3] = hsla.length > 3 ? hsla[3] : 1;
            mode = 'hsla';
        } else {
            hsla.length = 3;
        }
        return (mode + "(" + (hsla.join(',')) + ")");
    };

    var hsl2css_1 = hsl2css$1;

    var unpack$w = utils.unpack;

    /*
     * supported arguments:
     * - rgb2hsl(r,g,b)
     * - rgb2hsl(r,g,b,a)
     * - rgb2hsl([r,g,b])
     * - rgb2hsl([r,g,b,a])
     * - rgb2hsl({r,g,b,a})
     */
    var rgb2hsl$3 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$w(args, 'rgba');
        var r = args[0];
        var g = args[1];
        var b = args[2];

        r /= 255;
        g /= 255;
        b /= 255;

        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);

        var l = (max + min) / 2;
        var s, h;

        if (max === min){
            s = 0;
            h = Number.NaN;
        } else {
            s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
        }

        if (r == max) { h = (g - b) / (max - min); }
        else if (g == max) { h = 2 + (b - r) / (max - min); }
        else if (b == max) { h = 4 + (r - g) / (max - min); }

        h *= 60;
        if (h < 0) { h += 360; }
        if (args.length>3 && args[3]!==undefined) { return [h,s,l,args[3]]; }
        return [h,s,l];
    };

    var rgb2hsl_1 = rgb2hsl$3;

    var unpack$v = utils.unpack;
    var last$1 = utils.last;
    var hsl2css = hsl2css_1;
    var rgb2hsl$2 = rgb2hsl_1;
    var round$6 = Math.round;

    /*
     * supported arguments:
     * - rgb2css(r,g,b)
     * - rgb2css(r,g,b,a)
     * - rgb2css([r,g,b], mode)
     * - rgb2css([r,g,b,a], mode)
     * - rgb2css({r,g,b,a}, mode)
     */
    var rgb2css$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$v(args, 'rgba');
        var mode = last$1(args) || 'rgb';
        if (mode.substr(0,3) == 'hsl') {
            return hsl2css(rgb2hsl$2(rgba), mode);
        }
        rgba[0] = round$6(rgba[0]);
        rgba[1] = round$6(rgba[1]);
        rgba[2] = round$6(rgba[2]);
        if (mode === 'rgba' || (rgba.length > 3 && rgba[3]<1)) {
            rgba[3] = rgba.length > 3 ? rgba[3] : 1;
            mode = 'rgba';
        }
        return (mode + "(" + (rgba.slice(0,mode==='rgb'?3:4).join(',')) + ")");
    };

    var rgb2css_1 = rgb2css$1;

    var unpack$u = utils.unpack;
    var round$5 = Math.round;

    var hsl2rgb$1 = function () {
        var assign;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$u(args, 'hsl');
        var h = args[0];
        var s = args[1];
        var l = args[2];
        var r,g,b;
        if (s === 0) {
            r = g = b = l*255;
        } else {
            var t3 = [0,0,0];
            var c = [0,0,0];
            var t2 = l < 0.5 ? l * (1+s) : l+s-l*s;
            var t1 = 2 * l - t2;
            var h_ = h / 360;
            t3[0] = h_ + 1/3;
            t3[1] = h_;
            t3[2] = h_ - 1/3;
            for (var i=0; i<3; i++) {
                if (t3[i] < 0) { t3[i] += 1; }
                if (t3[i] > 1) { t3[i] -= 1; }
                if (6 * t3[i] < 1)
                    { c[i] = t1 + (t2 - t1) * 6 * t3[i]; }
                else if (2 * t3[i] < 1)
                    { c[i] = t2; }
                else if (3 * t3[i] < 2)
                    { c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6; }
                else
                    { c[i] = t1; }
            }
            (assign = [round$5(c[0]*255),round$5(c[1]*255),round$5(c[2]*255)], r = assign[0], g = assign[1], b = assign[2]);
        }
        if (args.length > 3) {
            // keep alpha channel
            return [r,g,b,args[3]];
        }
        return [r,g,b,1];
    };

    var hsl2rgb_1 = hsl2rgb$1;

    var hsl2rgb = hsl2rgb_1;
    var input$f = input$h;

    var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
    var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;

    var round$4 = Math.round;

    var css2rgb$1 = function (css) {
        css = css.toLowerCase().trim();
        var m;

        if (input$f.format.named) {
            try {
                return input$f.format.named(css);
            } catch (e) {
                // eslint-disable-next-line
            }
        }

        // rgb(250,20,0)
        if ((m = css.match(RE_RGB))) {
            var rgb = m.slice(1,4);
            for (var i=0; i<3; i++) {
                rgb[i] = +rgb[i];
            }
            rgb[3] = 1;  // default alpha
            return rgb;
        }

        // rgba(250,20,0,0.4)
        if ((m = css.match(RE_RGBA))) {
            var rgb$1 = m.slice(1,5);
            for (var i$1=0; i$1<4; i$1++) {
                rgb$1[i$1] = +rgb$1[i$1];
            }
            return rgb$1;
        }

        // rgb(100%,0%,0%)
        if ((m = css.match(RE_RGB_PCT))) {
            var rgb$2 = m.slice(1,4);
            for (var i$2=0; i$2<3; i$2++) {
                rgb$2[i$2] = round$4(rgb$2[i$2] * 2.55);
            }
            rgb$2[3] = 1;  // default alpha
            return rgb$2;
        }

        // rgba(100%,0%,0%,0.4)
        if ((m = css.match(RE_RGBA_PCT))) {
            var rgb$3 = m.slice(1,5);
            for (var i$3=0; i$3<3; i$3++) {
                rgb$3[i$3] = round$4(rgb$3[i$3] * 2.55);
            }
            rgb$3[3] = +rgb$3[3];
            return rgb$3;
        }

        // hsl(0,100%,50%)
        if ((m = css.match(RE_HSL))) {
            var hsl = m.slice(1,4);
            hsl[1] *= 0.01;
            hsl[2] *= 0.01;
            var rgb$4 = hsl2rgb(hsl);
            rgb$4[3] = 1;
            return rgb$4;
        }

        // hsla(0,100%,50%,0.5)
        if ((m = css.match(RE_HSLA))) {
            var hsl$1 = m.slice(1,4);
            hsl$1[1] *= 0.01;
            hsl$1[2] *= 0.01;
            var rgb$5 = hsl2rgb(hsl$1);
            rgb$5[3] = +m[4];  // default alpha = 1
            return rgb$5;
        }
    };

    css2rgb$1.test = function (s) {
        return RE_RGB.test(s) ||
            RE_RGBA.test(s) ||
            RE_RGB_PCT.test(s) ||
            RE_RGBA_PCT.test(s) ||
            RE_HSL.test(s) ||
            RE_HSLA.test(s);
    };

    var css2rgb_1 = css2rgb$1;

    var chroma$i = chroma_1;
    var Color$B = Color_1;
    var input$e = input$h;
    var type$k = utils.type;

    var rgb2css = rgb2css_1;
    var css2rgb = css2rgb_1;

    Color$B.prototype.css = function(mode) {
        return rgb2css(this._rgb, mode);
    };

    chroma$i.css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$B, [ null ].concat( args, ['css']) ));
    };

    input$e.format.css = css2rgb;

    input$e.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$k(h) === 'string' && css2rgb.test(h)) {
                return 'css';
            }
        }
    });

    var Color$A = Color_1;
    var chroma$h = chroma_1;
    var input$d = input$h;
    var unpack$t = utils.unpack;

    input$d.format.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$t(args, 'rgba');
        rgb[0] *= 255;
        rgb[1] *= 255;
        rgb[2] *= 255;
        return rgb;
    };

    chroma$h.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$A, [ null ].concat( args, ['gl']) ));
    };

    Color$A.prototype.gl = function() {
        var rgb = this._rgb;
        return [rgb[0]/255, rgb[1]/255, rgb[2]/255, rgb[3]];
    };

    var unpack$s = utils.unpack;

    var rgb2hcg$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$s(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var c = delta * 100 / 255;
        var _g = min / (255 - delta) * 100;
        var h;
        if (delta === 0) {
            h = Number.NaN;
        } else {
            if (r === max) { h = (g - b) / delta; }
            if (g === max) { h = 2+(b - r) / delta; }
            if (b === max) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, c, _g];
    };

    var rgb2hcg_1 = rgb2hcg$1;

    var unpack$r = utils.unpack;
    var floor$3 = Math.floor;

    /*
     * this is basically just HSV with some minor tweaks
     *
     * hue.. [0..360]
     * chroma .. [0..1]
     * grayness .. [0..1]
     */

    var hcg2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$r(args, 'hcg');
        var h = args[0];
        var c = args[1];
        var _g = args[2];
        var r,g,b;
        _g = _g * 255;
        var _c = c * 255;
        if (c === 0) {
            r = g = b = _g;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;
            var i = floor$3(h);
            var f = h - i;
            var p = _g * (1 - c);
            var q = p + _c * (1 - f);
            var t = p + _c * f;
            var v = p + _c;
            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var hcg2rgb_1 = hcg2rgb;

    var unpack$q = utils.unpack;
    var type$j = utils.type;
    var chroma$g = chroma_1;
    var Color$z = Color_1;
    var input$c = input$h;

    var rgb2hcg = rgb2hcg_1;

    Color$z.prototype.hcg = function() {
        return rgb2hcg(this._rgb);
    };

    chroma$g.hcg = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$z, [ null ].concat( args, ['hcg']) ));
    };

    input$c.format.hcg = hcg2rgb_1;

    input$c.autodetect.push({
        p: 1,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$q(args, 'hcg');
            if (type$j(args) === 'array' && args.length === 3) {
                return 'hcg';
            }
        }
    });

    var unpack$p = utils.unpack;
    var last = utils.last;
    var round$3 = Math.round;

    var rgb2hex$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$p(args, 'rgba');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var a = ref[3];
        var mode = last(args) || 'auto';
        if (a === undefined) { a = 1; }
        if (mode === 'auto') {
            mode = a < 1 ? 'rgba' : 'rgb';
        }
        r = round$3(r);
        g = round$3(g);
        b = round$3(b);
        var u = r << 16 | g << 8 | b;
        var str = "000000" + u.toString(16); //#.toUpperCase();
        str = str.substr(str.length - 6);
        var hxa = '0' + round$3(a * 255).toString(16);
        hxa = hxa.substr(hxa.length - 2);
        switch (mode.toLowerCase()) {
            case 'rgba': return ("#" + str + hxa);
            case 'argb': return ("#" + hxa + str);
            default: return ("#" + str);
        }
    };

    var rgb2hex_1 = rgb2hex$2;

    var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;

    var hex2rgb$1 = function (hex) {
        if (hex.match(RE_HEX)) {
            // remove optional leading #
            if (hex.length === 4 || hex.length === 7) {
                hex = hex.substr(1);
            }
            // expand short-notation to full six-digit
            if (hex.length === 3) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
            }
            var u = parseInt(hex, 16);
            var r = u >> 16;
            var g = u >> 8 & 0xFF;
            var b = u & 0xFF;
            return [r,g,b,1];
        }

        // match rgba hex format, eg #FF000077
        if (hex.match(RE_HEXA)) {
            if (hex.length === 5 || hex.length === 9) {
                // remove optional leading #
                hex = hex.substr(1);
            }
            // expand short-notation to full eight-digit
            if (hex.length === 4) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3];
            }
            var u$1 = parseInt(hex, 16);
            var r$1 = u$1 >> 24 & 0xFF;
            var g$1 = u$1 >> 16 & 0xFF;
            var b$1 = u$1 >> 8 & 0xFF;
            var a = Math.round((u$1 & 0xFF) / 0xFF * 100) / 100;
            return [r$1,g$1,b$1,a];
        }

        // we used to check for css colors here
        // if _input.css? and rgb = _input.css hex
        //     return rgb

        throw new Error(("unknown hex color: " + hex));
    };

    var hex2rgb_1 = hex2rgb$1;

    var chroma$f = chroma_1;
    var Color$y = Color_1;
    var type$i = utils.type;
    var input$b = input$h;

    var rgb2hex$1 = rgb2hex_1;

    Color$y.prototype.hex = function(mode) {
        return rgb2hex$1(this._rgb, mode);
    };

    chroma$f.hex = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$y, [ null ].concat( args, ['hex']) ));
    };

    input$b.format.hex = hex2rgb_1;
    input$b.autodetect.push({
        p: 4,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$i(h) === 'string' && [3,4,5,6,7,8,9].indexOf(h.length) >= 0) {
                return 'hex';
            }
        }
    });

    var unpack$o = utils.unpack;
    var TWOPI$2 = utils.TWOPI;
    var min$2 = Math.min;
    var sqrt$4 = Math.sqrt;
    var acos = Math.acos;

    var rgb2hsi$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
        */
        var ref = unpack$o(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var h;
        var min_ = min$2(r,g,b);
        var i = (r+g+b) / 3;
        var s = i > 0 ? 1 - min_/i : 0;
        if (s === 0) {
            h = NaN;
        } else {
            h = ((r-g)+(r-b)) / 2;
            h /= sqrt$4((r-g)*(r-g) + (r-b)*(g-b));
            h = acos(h);
            if (b > g) {
                h = TWOPI$2 - h;
            }
            h /= TWOPI$2;
        }
        return [h*360,s,i];
    };

    var rgb2hsi_1 = rgb2hsi$1;

    var unpack$n = utils.unpack;
    var limit = utils.limit;
    var TWOPI$1 = utils.TWOPI;
    var PITHIRD = utils.PITHIRD;
    var cos$4 = Math.cos;

    /*
     * hue [0..360]
     * saturation [0..1]
     * intensity [0..1]
     */
    var hsi2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
        */
        args = unpack$n(args, 'hsi');
        var h = args[0];
        var s = args[1];
        var i = args[2];
        var r,g,b;

        if (isNaN(h)) { h = 0; }
        if (isNaN(s)) { s = 0; }
        // normalize hue
        if (h > 360) { h -= 360; }
        if (h < 0) { h += 360; }
        h /= 360;
        if (h < 1/3) {
            b = (1-s)/3;
            r = (1+s*cos$4(TWOPI$1*h)/cos$4(PITHIRD-TWOPI$1*h))/3;
            g = 1 - (b+r);
        } else if (h < 2/3) {
            h -= 1/3;
            r = (1-s)/3;
            g = (1+s*cos$4(TWOPI$1*h)/cos$4(PITHIRD-TWOPI$1*h))/3;
            b = 1 - (r+g);
        } else {
            h -= 2/3;
            g = (1-s)/3;
            b = (1+s*cos$4(TWOPI$1*h)/cos$4(PITHIRD-TWOPI$1*h))/3;
            r = 1 - (g+b);
        }
        r = limit(i*r*3);
        g = limit(i*g*3);
        b = limit(i*b*3);
        return [r*255, g*255, b*255, args.length > 3 ? args[3] : 1];
    };

    var hsi2rgb_1 = hsi2rgb;

    var unpack$m = utils.unpack;
    var type$h = utils.type;
    var chroma$e = chroma_1;
    var Color$x = Color_1;
    var input$a = input$h;

    var rgb2hsi = rgb2hsi_1;

    Color$x.prototype.hsi = function() {
        return rgb2hsi(this._rgb);
    };

    chroma$e.hsi = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$x, [ null ].concat( args, ['hsi']) ));
    };

    input$a.format.hsi = hsi2rgb_1;

    input$a.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$m(args, 'hsi');
            if (type$h(args) === 'array' && args.length === 3) {
                return 'hsi';
            }
        }
    });

    var unpack$l = utils.unpack;
    var type$g = utils.type;
    var chroma$d = chroma_1;
    var Color$w = Color_1;
    var input$9 = input$h;

    var rgb2hsl$1 = rgb2hsl_1;

    Color$w.prototype.hsl = function() {
        return rgb2hsl$1(this._rgb);
    };

    chroma$d.hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$w, [ null ].concat( args, ['hsl']) ));
    };

    input$9.format.hsl = hsl2rgb_1;

    input$9.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$l(args, 'hsl');
            if (type$g(args) === 'array' && args.length === 3) {
                return 'hsl';
            }
        }
    });

    var unpack$k = utils.unpack;
    var min$1 = Math.min;
    var max$1 = Math.max;

    /*
     * supported arguments:
     * - rgb2hsv(r,g,b)
     * - rgb2hsv([r,g,b])
     * - rgb2hsv({r,g,b})
     */
    var rgb2hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$k(args, 'rgb');
        var r = args[0];
        var g = args[1];
        var b = args[2];
        var min_ = min$1(r, g, b);
        var max_ = max$1(r, g, b);
        var delta = max_ - min_;
        var h,s,v;
        v = max_ / 255.0;
        if (max_ === 0) {
            h = Number.NaN;
            s = 0;
        } else {
            s = delta / max_;
            if (r === max_) { h = (g - b) / delta; }
            if (g === max_) { h = 2+(b - r) / delta; }
            if (b === max_) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, s, v]
    };

    var rgb2hsv$1 = rgb2hsl;

    var unpack$j = utils.unpack;
    var floor$2 = Math.floor;

    var hsv2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$j(args, 'hsv');
        var h = args[0];
        var s = args[1];
        var v = args[2];
        var r,g,b;
        v *= 255;
        if (s === 0) {
            r = g = b = v;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;

            var i = floor$2(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));

            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r,g,b,args.length > 3?args[3]:1];
    };

    var hsv2rgb_1 = hsv2rgb;

    var unpack$i = utils.unpack;
    var type$f = utils.type;
    var chroma$c = chroma_1;
    var Color$v = Color_1;
    var input$8 = input$h;

    var rgb2hsv = rgb2hsv$1;

    Color$v.prototype.hsv = function() {
        return rgb2hsv(this._rgb);
    };

    chroma$c.hsv = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$v, [ null ].concat( args, ['hsv']) ));
    };

    input$8.format.hsv = hsv2rgb_1;

    input$8.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$i(args, 'hsv');
            if (type$f(args) === 'array' && args.length === 3) {
                return 'hsv';
            }
        }
    });

    var labConstants = {
        // Corresponds roughly to RGB brighter/darker
        Kn: 18,

        // D65 standard referent
        Xn: 0.950470,
        Yn: 1,
        Zn: 1.088830,

        t0: 0.137931034,  // 4 / 29
        t1: 0.206896552,  // 6 / 29
        t2: 0.12841855,   // 3 * t1 * t1
        t3: 0.008856452,  // t1 * t1 * t1
    };

    var LAB_CONSTANTS$3 = labConstants;
    var unpack$h = utils.unpack;
    var pow$a = Math.pow;

    var rgb2lab$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$h(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2xyz(r,g,b);
        var x = ref$1[0];
        var y = ref$1[1];
        var z = ref$1[2];
        var l = 116 * y - 16;
        return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
    };

    var rgb_xyz = function (r) {
        if ((r /= 255) <= 0.04045) { return r / 12.92; }
        return pow$a((r + 0.055) / 1.055, 2.4);
    };

    var xyz_lab = function (t) {
        if (t > LAB_CONSTANTS$3.t3) { return pow$a(t, 1 / 3); }
        return t / LAB_CONSTANTS$3.t2 + LAB_CONSTANTS$3.t0;
    };

    var rgb2xyz = function (r,g,b) {
        r = rgb_xyz(r);
        g = rgb_xyz(g);
        b = rgb_xyz(b);
        var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS$3.Xn);
        var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS$3.Yn);
        var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS$3.Zn);
        return [x,y,z];
    };

    var rgb2lab_1 = rgb2lab$2;

    var LAB_CONSTANTS$2 = labConstants;
    var unpack$g = utils.unpack;
    var pow$9 = Math.pow;

    /*
     * L* [0..100]
     * a [-100..100]
     * b [-100..100]
     */
    var lab2rgb$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$g(args, 'lab');
        var l = args[0];
        var a = args[1];
        var b = args[2];
        var x,y,z, r,g,b_;

        y = (l + 16) / 116;
        x = isNaN(a) ? y : y + a / 500;
        z = isNaN(b) ? y : y - b / 200;

        y = LAB_CONSTANTS$2.Yn * lab_xyz(y);
        x = LAB_CONSTANTS$2.Xn * lab_xyz(x);
        z = LAB_CONSTANTS$2.Zn * lab_xyz(z);

        r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);  // D65 -> sRGB
        g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
        b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

        return [r,g,b_,args.length > 3 ? args[3] : 1];
    };

    var xyz_rgb = function (r) {
        return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow$9(r, 1 / 2.4) - 0.055)
    };

    var lab_xyz = function (t) {
        return t > LAB_CONSTANTS$2.t1 ? t * t * t : LAB_CONSTANTS$2.t2 * (t - LAB_CONSTANTS$2.t0)
    };

    var lab2rgb_1 = lab2rgb$1;

    var unpack$f = utils.unpack;
    var type$e = utils.type;
    var chroma$b = chroma_1;
    var Color$u = Color_1;
    var input$7 = input$h;

    var rgb2lab$1 = rgb2lab_1;

    Color$u.prototype.lab = function() {
        return rgb2lab$1(this._rgb);
    };

    chroma$b.lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$u, [ null ].concat( args, ['lab']) ));
    };

    input$7.format.lab = lab2rgb_1;

    input$7.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$f(args, 'lab');
            if (type$e(args) === 'array' && args.length === 3) {
                return 'lab';
            }
        }
    });

    var unpack$e = utils.unpack;
    var RAD2DEG = utils.RAD2DEG;
    var sqrt$3 = Math.sqrt;
    var atan2$2 = Math.atan2;
    var round$2 = Math.round;

    var lab2lch$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$e(args, 'lab');
        var l = ref[0];
        var a = ref[1];
        var b = ref[2];
        var c = sqrt$3(a * a + b * b);
        var h = (atan2$2(b, a) * RAD2DEG + 360) % 360;
        if (round$2(c*10000) === 0) { h = Number.NaN; }
        return [l, c, h];
    };

    var lab2lch_1 = lab2lch$2;

    var unpack$d = utils.unpack;
    var rgb2lab = rgb2lab_1;
    var lab2lch$1 = lab2lch_1;

    var rgb2lch$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$d(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2lab(r,g,b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch$1(l,a,b_);
    };

    var rgb2lch_1 = rgb2lch$1;

    var unpack$c = utils.unpack;
    var DEG2RAD = utils.DEG2RAD;
    var sin$3 = Math.sin;
    var cos$3 = Math.cos;

    var lch2lab$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
        These formulas were invented by David Dalrymple to obtain maximum contrast without going
        out of gamut if the parameters are in the range 0-1.

        A saturation multiplier was added by Gregor Aisch
        */
        var ref = unpack$c(args, 'lch');
        var l = ref[0];
        var c = ref[1];
        var h = ref[2];
        if (isNaN(h)) { h = 0; }
        h = h * DEG2RAD;
        return [l, cos$3(h) * c, sin$3(h) * c]
    };

    var lch2lab_1 = lch2lab$2;

    var unpack$b = utils.unpack;
    var lch2lab$1 = lch2lab_1;
    var lab2rgb = lab2rgb_1;

    var lch2rgb$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$b(args, 'lch');
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab$1 (l,c,h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = lab2rgb (L,a,b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var lch2rgb_1 = lch2rgb$1;

    var unpack$a = utils.unpack;
    var lch2rgb = lch2rgb_1;

    var hcl2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hcl = unpack$a(args, 'hcl').reverse();
        return lch2rgb.apply(void 0, hcl);
    };

    var hcl2rgb_1 = hcl2rgb;

    var unpack$9 = utils.unpack;
    var type$d = utils.type;
    var chroma$a = chroma_1;
    var Color$t = Color_1;
    var input$6 = input$h;

    var rgb2lch = rgb2lch_1;

    Color$t.prototype.lch = function() { return rgb2lch(this._rgb); };
    Color$t.prototype.hcl = function() { return rgb2lch(this._rgb).reverse(); };

    chroma$a.lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$t, [ null ].concat( args, ['lch']) ));
    };
    chroma$a.hcl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$t, [ null ].concat( args, ['hcl']) ));
    };

    input$6.format.lch = lch2rgb_1;
    input$6.format.hcl = hcl2rgb_1;

    ['lch','hcl'].forEach(function (m) { return input$6.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$9(args, m);
            if (type$d(args) === 'array' && args.length === 3) {
                return m;
            }
        }
    }); });

    /**
    	X11 color names

    	http://www.w3.org/TR/css3-color/#svg-color
    */

    var w3cx11$1 = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflower: '#6495ed',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        laserlemon: '#ffff54',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrod: '#fafad2',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        maroon2: '#7f0000',
        maroon3: '#b03060',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        purple2: '#7f007f',
        purple3: '#a020f0',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32'
    };

    var w3cx11_1 = w3cx11$1;

    var Color$s = Color_1;
    var input$5 = input$h;
    var type$c = utils.type;

    var w3cx11 = w3cx11_1;
    var hex2rgb = hex2rgb_1;
    var rgb2hex = rgb2hex_1;

    Color$s.prototype.name = function() {
        var hex = rgb2hex(this._rgb, 'rgb');
        for (var i = 0, list = Object.keys(w3cx11); i < list.length; i += 1) {
            var n = list[i];

            if (w3cx11[n] === hex) { return n.toLowerCase(); }
        }
        return hex;
    };

    input$5.format.named = function (name) {
        name = name.toLowerCase();
        if (w3cx11[name]) { return hex2rgb(w3cx11[name]); }
        throw new Error('unknown color name: '+name);
    };

    input$5.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$c(h) === 'string' && w3cx11[h.toLowerCase()]) {
                return 'named';
            }
        }
    });

    var unpack$8 = utils.unpack;

    var rgb2num$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$8(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        return (r << 16) + (g << 8) + b;
    };

    var rgb2num_1 = rgb2num$1;

    var type$b = utils.type;

    var num2rgb = function (num) {
        if (type$b(num) == "number" && num >= 0 && num <= 0xFFFFFF) {
            var r = num >> 16;
            var g = (num >> 8) & 0xFF;
            var b = num & 0xFF;
            return [r,g,b,1];
        }
        throw new Error("unknown num color: "+num);
    };

    var num2rgb_1 = num2rgb;

    var chroma$9 = chroma_1;
    var Color$r = Color_1;
    var input$4 = input$h;
    var type$a = utils.type;

    var rgb2num = rgb2num_1;

    Color$r.prototype.num = function() {
        return rgb2num(this._rgb);
    };

    chroma$9.num = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$r, [ null ].concat( args, ['num']) ));
    };

    input$4.format.num = num2rgb_1;

    input$4.autodetect.push({
        p: 5,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            if (args.length === 1 && type$a(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xFFFFFF) {
                return 'num';
            }
        }
    });

    var chroma$8 = chroma_1;
    var Color$q = Color_1;
    var input$3 = input$h;
    var unpack$7 = utils.unpack;
    var type$9 = utils.type;
    var round$1 = Math.round;

    Color$q.prototype.rgb = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        if (rnd === false) { return this._rgb.slice(0,3); }
        return this._rgb.slice(0,3).map(round$1);
    };

    Color$q.prototype.rgba = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        return this._rgb.slice(0,4).map(function (v,i) {
            return i<3 ? (rnd === false ? v : round$1(v)) : v;
        });
    };

    chroma$8.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$q, [ null ].concat( args, ['rgb']) ));
    };

    input$3.format.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$7(args, 'rgba');
        if (rgba[3] === undefined) { rgba[3] = 1; }
        return rgba;
    };

    input$3.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$7(args, 'rgba');
            if (type$9(args) === 'array' && (args.length === 3 ||
                args.length === 4 && type$9(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) {
                return 'rgb';
            }
        }
    });

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     */

    var log$1 = Math.log;

    var temperature2rgb$1 = function (kelvin) {
        var temp = kelvin / 100;
        var r,g,b;
        if (temp < 66) {
            r = 255;
            g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp-2) + 104.49216199393888 * log$1(g);
            b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp-10) + 115.67994401066147 * log$1(b);
        } else {
            r = 351.97690566805693 + 0.114206453784165 * (r = temp-55) - 40.25366309332127 * log$1(r);
            g = 325.4494125711974 + 0.07943456536662342 * (g = temp-50) - 28.0852963507957 * log$1(g);
            b = 255;
        }
        return [r,g,b,1];
    };

    var temperature2rgb_1 = temperature2rgb$1;

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     **/

    var temperature2rgb = temperature2rgb_1;
    var unpack$6 = utils.unpack;
    var round = Math.round;

    var rgb2temperature$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$6(args, 'rgb');
        var r = rgb[0], b = rgb[2];
        var minTemp = 1000;
        var maxTemp = 40000;
        var eps = 0.4;
        var temp;
        while (maxTemp - minTemp > eps) {
            temp = (maxTemp + minTemp) * 0.5;
            var rgb$1 = temperature2rgb(temp);
            if ((rgb$1[2] / rgb$1[0]) >= (b / r)) {
                maxTemp = temp;
            } else {
                minTemp = temp;
            }
        }
        return round(temp);
    };

    var rgb2temperature_1 = rgb2temperature$1;

    var chroma$7 = chroma_1;
    var Color$p = Color_1;
    var input$2 = input$h;

    var rgb2temperature = rgb2temperature_1;

    Color$p.prototype.temp =
    Color$p.prototype.kelvin =
    Color$p.prototype.temperature = function() {
        return rgb2temperature(this._rgb);
    };

    chroma$7.temp =
    chroma$7.kelvin =
    chroma$7.temperature = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$p, [ null ].concat( args, ['temp']) ));
    };

    input$2.format.temp =
    input$2.format.kelvin =
    input$2.format.temperature = temperature2rgb_1;

    var unpack$5 = utils.unpack;
    var cbrt = Math.cbrt;
    var pow$8 = Math.pow;
    var sign$1 = Math.sign;

    var rgb2oklab$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        // OKLab color space implementation taken from
        // https://bottosson.github.io/posts/oklab/
        var ref = unpack$5(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = [rgb2lrgb(r / 255), rgb2lrgb(g / 255), rgb2lrgb(b / 255)];
        var lr = ref$1[0];
        var lg = ref$1[1];
        var lb = ref$1[2];
        var l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
        var m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
        var s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);

        return [
            0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
            1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
            0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
        ];
    };

    var rgb2oklab_1 = rgb2oklab$2;

    function rgb2lrgb(c) {
        var abs = Math.abs(c);
        if (abs < 0.04045) {
            return c / 12.92;
        }
        return (sign$1(c) || 1) * pow$8((abs + 0.055) / 1.055, 2.4);
    }

    var unpack$4 = utils.unpack;
    var pow$7 = Math.pow;
    var sign = Math.sign;

    /*
     * L* [0..100]
     * a [-100..100]
     * b [-100..100]
     */
    var oklab2rgb$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$4(args, 'lab');
        var L = args[0];
        var a = args[1];
        var b = args[2];

        var l = pow$7(L + 0.3963377774 * a + 0.2158037573 * b, 3);
        var m = pow$7(L - 0.1055613458 * a - 0.0638541728 * b, 3);
        var s = pow$7(L - 0.0894841775 * a - 1.291485548 * b, 3);

        return [
            255 * lrgb2rgb(+4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
            255 * lrgb2rgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
            255 * lrgb2rgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
            args.length > 3 ? args[3] : 1
        ];
    };

    var oklab2rgb_1 = oklab2rgb$1;

    function lrgb2rgb(c) {
        var abs = Math.abs(c);
        if (abs > 0.0031308) {
            return (sign(c) || 1) * (1.055 * pow$7(abs, 1 / 2.4) - 0.055);
        }
        return c * 12.92;
    }

    var unpack$3 = utils.unpack;
    var type$8 = utils.type;
    var chroma$6 = chroma_1;
    var Color$o = Color_1;
    var input$1 = input$h;

    var rgb2oklab$1 = rgb2oklab_1;

    Color$o.prototype.oklab = function () {
        return rgb2oklab$1(this._rgb);
    };

    chroma$6.oklab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$o, [ null ].concat( args, ['oklab']) ));
    };

    input$1.format.oklab = oklab2rgb_1;

    input$1.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$3(args, 'oklab');
            if (type$8(args) === 'array' && args.length === 3) {
                return 'oklab';
            }
        }
    });

    var unpack$2 = utils.unpack;
    var rgb2oklab = rgb2oklab_1;
    var lab2lch = lab2lch_1;

    var rgb2oklch$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$2(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2oklab(r, g, b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch(l, a, b_);
    };

    var rgb2oklch_1 = rgb2oklch$1;

    var unpack$1 = utils.unpack;
    var lch2lab = lch2lab_1;
    var oklab2rgb = oklab2rgb_1;

    var oklch2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$1(args, 'lch');
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab(l, c, h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = oklab2rgb(L, a, b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var oklch2rgb_1 = oklch2rgb;

    var unpack = utils.unpack;
    var type$7 = utils.type;
    var chroma$5 = chroma_1;
    var Color$n = Color_1;
    var input = input$h;

    var rgb2oklch = rgb2oklch_1;

    Color$n.prototype.oklch = function () {
        return rgb2oklch(this._rgb);
    };

    chroma$5.oklch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$n, [ null ].concat( args, ['oklch']) ));
    };

    input.format.oklch = oklch2rgb_1;

    input.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack(args, 'oklch');
            if (type$7(args) === 'array' && args.length === 3) {
                return 'oklch';
            }
        }
    });

    var Color$m = Color_1;
    var type$6 = utils.type;

    Color$m.prototype.alpha = function(a, mutate) {
        if ( mutate === void 0 ) mutate=false;

        if (a !== undefined && type$6(a) === 'number') {
            if (mutate) {
                this._rgb[3] = a;
                return this;
            }
            return new Color$m([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
        }
        return this._rgb[3];
    };

    var Color$l = Color_1;

    Color$l.prototype.clipped = function() {
        return this._rgb._clipped || false;
    };

    var Color$k = Color_1;
    var LAB_CONSTANTS$1 = labConstants;

    Color$k.prototype.darken = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lab = me.lab();
    	lab[0] -= LAB_CONSTANTS$1.Kn * amount;
    	return new Color$k(lab, 'lab').alpha(me.alpha(), true);
    };

    Color$k.prototype.brighten = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.darken(-amount);
    };

    Color$k.prototype.darker = Color$k.prototype.darken;
    Color$k.prototype.brighter = Color$k.prototype.brighten;

    var Color$j = Color_1;

    Color$j.prototype.get = function (mc) {
        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel) - (mode.substr(0, 2) === 'ok' ? 2 : 0);
            if (i > -1) { return src[i]; }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var Color$i = Color_1;
    var type$5 = utils.type;
    var pow$6 = Math.pow;

    var EPS = 1e-7;
    var MAX_ITER = 20;

    Color$i.prototype.luminance = function(lum) {
        if (lum !== undefined && type$5(lum) === 'number') {
            if (lum === 0) {
                // return pure black
                return new Color$i([0,0,0,this._rgb[3]], 'rgb');
            }
            if (lum === 1) {
                // return pure white
                return new Color$i([255,255,255,this._rgb[3]], 'rgb');
            }
            // compute new color using...
            var cur_lum = this.luminance();
            var mode = 'rgb';
            var max_iter = MAX_ITER;

            var test = function (low, high) {
                var mid = low.interpolate(high, 0.5, mode);
                var lm = mid.luminance();
                if (Math.abs(lum - lm) < EPS || !max_iter--) {
                    // close enough
                    return mid;
                }
                return lm > lum ? test(low, mid) : test(mid, high);
            };

            var rgb = (cur_lum > lum ? test(new Color$i([0,0,0]), this) : test(this, new Color$i([255,255,255]))).rgb();
            return new Color$i(rgb.concat( [this._rgb[3]]));
        }
        return rgb2luminance.apply(void 0, (this._rgb).slice(0,3));
    };


    var rgb2luminance = function (r,g,b) {
        // relative luminance
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        r = luminance_x(r);
        g = luminance_x(g);
        b = luminance_x(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    var luminance_x = function (x) {
        x /= 255;
        return x <= 0.03928 ? x/12.92 : pow$6((x+0.055)/1.055, 2.4);
    };

    var interpolator$1 = {};

    var Color$h = Color_1;
    var type$4 = utils.type;
    var interpolator = interpolator$1;

    var mix$1 = function (col1, col2, f) {
        if ( f === void 0 ) f=0.5;
        var rest = [], len = arguments.length - 3;
        while ( len-- > 0 ) rest[ len ] = arguments[ len + 3 ];

        var mode = rest[0] || 'lrgb';
        if (!interpolator[mode] && !rest.length) {
            // fall back to the first supported mode
            mode = Object.keys(interpolator)[0];
        }
        if (!interpolator[mode]) {
            throw new Error(("interpolation mode " + mode + " is not defined"));
        }
        if (type$4(col1) !== 'object') { col1 = new Color$h(col1); }
        if (type$4(col2) !== 'object') { col2 = new Color$h(col2); }
        return interpolator[mode](col1, col2, f)
            .alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
    };

    var Color$g = Color_1;
    var mix = mix$1;

    Color$g.prototype.mix =
    Color$g.prototype.interpolate = function(col2, f) {
    	if ( f === void 0 ) f=0.5;
    	var rest = [], len = arguments.length - 2;
    	while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

    	return mix.apply(void 0, [ this, col2, f ].concat( rest ));
    };

    var Color$f = Color_1;

    Color$f.prototype.premultiply = function(mutate) {
    	if ( mutate === void 0 ) mutate=false;

    	var rgb = this._rgb;
    	var a = rgb[3];
    	if (mutate) {
    		this._rgb = [rgb[0]*a, rgb[1]*a, rgb[2]*a, a];
    		return this;
    	} else {
    		return new Color$f([rgb[0]*a, rgb[1]*a, rgb[2]*a, a], 'rgb');
    	}
    };

    var Color$e = Color_1;
    var LAB_CONSTANTS = labConstants;

    Color$e.prototype.saturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lch = me.lch();
    	lch[1] += LAB_CONSTANTS.Kn * amount;
    	if (lch[1] < 0) { lch[1] = 0; }
    	return new Color$e(lch, 'lch').alpha(me.alpha(), true);
    };

    Color$e.prototype.desaturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.saturate(-amount);
    };

    var Color$d = Color_1;
    var type$3 = utils.type;

    Color$d.prototype.set = function (mc, value, mutate) {
        if ( mutate === void 0 ) mutate = false;

        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel) - (mode.substr(0, 2) === 'ok' ? 2 : 0);
            if (i > -1) {
                if (type$3(value) == 'string') {
                    switch (value.charAt(0)) {
                        case '+':
                            src[i] += +value;
                            break;
                        case '-':
                            src[i] += +value;
                            break;
                        case '*':
                            src[i] *= +value.substr(1);
                            break;
                        case '/':
                            src[i] /= +value.substr(1);
                            break;
                        default:
                            src[i] = +value;
                    }
                } else if (type$3(value) === 'number') {
                    src[i] = value;
                } else {
                    throw new Error("unsupported value for Color.set");
                }
                var out = new Color$d(src, mode);
                if (mutate) {
                    this._rgb = out._rgb;
                    return this;
                }
                return out;
            }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var Color$c = Color_1;

    var rgb = function (col1, col2, f) {
        var xyz0 = col1._rgb;
        var xyz1 = col2._rgb;
        return new Color$c(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'rgb'
        )
    };

    // register interpolator
    interpolator$1.rgb = rgb;

    var Color$b = Color_1;
    var sqrt$2 = Math.sqrt;
    var pow$5 = Math.pow;

    var lrgb = function (col1, col2, f) {
        var ref = col1._rgb;
        var x1 = ref[0];
        var y1 = ref[1];
        var z1 = ref[2];
        var ref$1 = col2._rgb;
        var x2 = ref$1[0];
        var y2 = ref$1[1];
        var z2 = ref$1[2];
        return new Color$b(
            sqrt$2(pow$5(x1,2) * (1-f) + pow$5(x2,2) * f),
            sqrt$2(pow$5(y1,2) * (1-f) + pow$5(y2,2) * f),
            sqrt$2(pow$5(z1,2) * (1-f) + pow$5(z2,2) * f),
            'rgb'
        )
    };

    // register interpolator
    interpolator$1.lrgb = lrgb;

    var Color$a = Color_1;

    var lab = function (col1, col2, f) {
        var xyz0 = col1.lab();
        var xyz1 = col2.lab();
        return new Color$a(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'lab'
        )
    };

    // register interpolator
    interpolator$1.lab = lab;

    var Color$9 = Color_1;

    var _hsx = function (col1, col2, f, m) {
        var assign, assign$1;

        var xyz0, xyz1;
        if (m === 'hsl') {
            xyz0 = col1.hsl();
            xyz1 = col2.hsl();
        } else if (m === 'hsv') {
            xyz0 = col1.hsv();
            xyz1 = col2.hsv();
        } else if (m === 'hcg') {
            xyz0 = col1.hcg();
            xyz1 = col2.hcg();
        } else if (m === 'hsi') {
            xyz0 = col1.hsi();
            xyz1 = col2.hsi();
        } else if (m === 'lch' || m === 'hcl') {
            m = 'hcl';
            xyz0 = col1.hcl();
            xyz1 = col2.hcl();
        } else if (m === 'oklch') {
            xyz0 = col1.oklch().reverse();
            xyz1 = col2.oklch().reverse();
        }

        var hue0, hue1, sat0, sat1, lbv0, lbv1;
        if (m.substr(0, 1) === 'h' || m === 'oklch') {
            (assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2]);
            (assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2]);
        }

        var sat, hue, lbv, dh;

        if (!isNaN(hue0) && !isNaN(hue1)) {
            // both colors have hue
            if (hue1 > hue0 && hue1 - hue0 > 180) {
                dh = hue1 - (hue0 + 360);
            } else if (hue1 < hue0 && hue0 - hue1 > 180) {
                dh = hue1 + 360 - hue0;
            } else {
                dh = hue1 - hue0;
            }
            hue = hue0 + f * dh;
        } else if (!isNaN(hue0)) {
            hue = hue0;
            if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') { sat = sat0; }
        } else if (!isNaN(hue1)) {
            hue = hue1;
            if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') { sat = sat1; }
        } else {
            hue = Number.NaN;
        }

        if (sat === undefined) { sat = sat0 + f * (sat1 - sat0); }
        lbv = lbv0 + f * (lbv1 - lbv0);
        return m === 'oklch' ? new Color$9([lbv, sat, hue], m) : new Color$9([hue, sat, lbv], m);
    };

    var interpolate_hsx$5 = _hsx;

    var lch = function (col1, col2, f) {
    	return interpolate_hsx$5(col1, col2, f, 'lch');
    };

    // register interpolator
    interpolator$1.lch = lch;
    interpolator$1.hcl = lch;

    var Color$8 = Color_1;

    var num = function (col1, col2, f) {
        var c1 = col1.num();
        var c2 = col2.num();
        return new Color$8(c1 + f * (c2-c1), 'num')
    };

    // register interpolator
    interpolator$1.num = num;

    var interpolate_hsx$4 = _hsx;

    var hcg = function (col1, col2, f) {
    	return interpolate_hsx$4(col1, col2, f, 'hcg');
    };

    // register interpolator
    interpolator$1.hcg = hcg;

    var interpolate_hsx$3 = _hsx;

    var hsi = function (col1, col2, f) {
    	return interpolate_hsx$3(col1, col2, f, 'hsi');
    };

    // register interpolator
    interpolator$1.hsi = hsi;

    var interpolate_hsx$2 = _hsx;

    var hsl = function (col1, col2, f) {
    	return interpolate_hsx$2(col1, col2, f, 'hsl');
    };

    // register interpolator
    interpolator$1.hsl = hsl;

    var interpolate_hsx$1 = _hsx;

    var hsv = function (col1, col2, f) {
    	return interpolate_hsx$1(col1, col2, f, 'hsv');
    };

    // register interpolator
    interpolator$1.hsv = hsv;

    var Color$7 = Color_1;

    var oklab = function (col1, col2, f) {
        var xyz0 = col1.oklab();
        var xyz1 = col2.oklab();
        return new Color$7(
            xyz0[0] + f * (xyz1[0] - xyz0[0]),
            xyz0[1] + f * (xyz1[1] - xyz0[1]),
            xyz0[2] + f * (xyz1[2] - xyz0[2]),
            'oklab'
        );
    };

    // register interpolator
    interpolator$1.oklab = oklab;

    var interpolate_hsx = _hsx;

    var oklch = function (col1, col2, f) {
        return interpolate_hsx(col1, col2, f, 'oklch');
    };

    // register interpolator
    interpolator$1.oklch = oklch;

    var Color$6 = Color_1;
    var clip_rgb$1 = utils.clip_rgb;
    var pow$4 = Math.pow;
    var sqrt$1 = Math.sqrt;
    var PI$1 = Math.PI;
    var cos$2 = Math.cos;
    var sin$2 = Math.sin;
    var atan2$1 = Math.atan2;

    var average = function (colors, mode, weights) {
        if ( mode === void 0 ) mode='lrgb';
        if ( weights === void 0 ) weights=null;

        var l = colors.length;
        if (!weights) { weights = Array.from(new Array(l)).map(function () { return 1; }); }
        // normalize weights
        var k = l / weights.reduce(function(a, b) { return a + b; });
        weights.forEach(function (w,i) { weights[i] *= k; });
        // convert colors to Color objects
        colors = colors.map(function (c) { return new Color$6(c); });
        if (mode === 'lrgb') {
            return _average_lrgb(colors, weights)
        }
        var first = colors.shift();
        var xyz = first.get(mode);
        var cnt = [];
        var dx = 0;
        var dy = 0;
        // initial color
        for (var i=0; i<xyz.length; i++) {
            xyz[i] = (xyz[i] || 0) * weights[0];
            cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
            if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
                var A = xyz[i] / 180 * PI$1;
                dx += cos$2(A) * weights[0];
                dy += sin$2(A) * weights[0];
            }
        }

        var alpha = first.alpha() * weights[0];
        colors.forEach(function (c,ci) {
            var xyz2 = c.get(mode);
            alpha += c.alpha() * weights[ci+1];
            for (var i=0; i<xyz.length; i++) {
                if (!isNaN(xyz2[i])) {
                    cnt[i] += weights[ci+1];
                    if (mode.charAt(i) === 'h') {
                        var A = xyz2[i] / 180 * PI$1;
                        dx += cos$2(A) * weights[ci+1];
                        dy += sin$2(A) * weights[ci+1];
                    } else {
                        xyz[i] += xyz2[i] * weights[ci+1];
                    }
                }
            }
        });

        for (var i$1=0; i$1<xyz.length; i$1++) {
            if (mode.charAt(i$1) === 'h') {
                var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;
                while (A$1 < 0) { A$1 += 360; }
                while (A$1 >= 360) { A$1 -= 360; }
                xyz[i$1] = A$1;
            } else {
                xyz[i$1] = xyz[i$1]/cnt[i$1];
            }
        }
        alpha /= l;
        return (new Color$6(xyz, mode)).alpha(alpha > 0.99999 ? 1 : alpha, true);
    };


    var _average_lrgb = function (colors, weights) {
        var l = colors.length;
        var xyz = [0,0,0,0];
        for (var i=0; i < colors.length; i++) {
            var col = colors[i];
            var f = weights[i] / l;
            var rgb = col._rgb;
            xyz[0] += pow$4(rgb[0],2) * f;
            xyz[1] += pow$4(rgb[1],2) * f;
            xyz[2] += pow$4(rgb[2],2) * f;
            xyz[3] += rgb[3] * f;
        }
        xyz[0] = sqrt$1(xyz[0]);
        xyz[1] = sqrt$1(xyz[1]);
        xyz[2] = sqrt$1(xyz[2]);
        if (xyz[3] > 0.9999999) { xyz[3] = 1; }
        return new Color$6(clip_rgb$1(xyz));
    };

    // minimal multi-purpose interface

    // @requires utils color analyze

    var chroma$4 = chroma_1;
    var type$2 = utils.type;

    var pow$3 = Math.pow;

    var scale$2 = function(colors) {

        // constructor
        var _mode = 'rgb';
        var _nacol = chroma$4('#ccc');
        var _spread = 0;
        // const _fixed = false;
        var _domain = [0, 1];
        var _pos = [];
        var _padding = [0,0];
        var _classes = false;
        var _colors = [];
        var _out = false;
        var _min = 0;
        var _max = 1;
        var _correctLightness = false;
        var _colorCache = {};
        var _useCache = true;
        var _gamma = 1;

        // private methods

        var setColors = function(colors) {
            colors = colors || ['#fff', '#000'];
            if (colors && type$2(colors) === 'string' && chroma$4.brewer &&
                chroma$4.brewer[colors.toLowerCase()]) {
                colors = chroma$4.brewer[colors.toLowerCase()];
            }
            if (type$2(colors) === 'array') {
                // handle single color
                if (colors.length === 1) {
                    colors = [colors[0], colors[0]];
                }
                // make a copy of the colors
                colors = colors.slice(0);
                // convert to chroma classes
                for (var c=0; c<colors.length; c++) {
                    colors[c] = chroma$4(colors[c]);
                }
                // auto-fill color position
                _pos.length = 0;
                for (var c$1=0; c$1<colors.length; c$1++) {
                    _pos.push(c$1/(colors.length-1));
                }
            }
            resetCache();
            return _colors = colors;
        };

        var getClass = function(value) {
            if (_classes != null) {
                var n = _classes.length-1;
                var i = 0;
                while (i < n && value >= _classes[i]) {
                    i++;
                }
                return i-1;
            }
            return 0;
        };

        var tMapLightness = function (t) { return t; };
        var tMapDomain = function (t) { return t; };

        // const classifyValue = function(value) {
        //     let val = value;
        //     if (_classes.length > 2) {
        //         const n = _classes.length-1;
        //         const i = getClass(value);
        //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
        //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
        //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
        //     }
        //     return val;
        // };

        var getColor = function(val, bypassMap) {
            var col, t;
            if (bypassMap == null) { bypassMap = false; }
            if (isNaN(val) || (val === null)) { return _nacol; }
            if (!bypassMap) {
                if (_classes && (_classes.length > 2)) {
                    // find the class
                    var c = getClass(val);
                    t = c / (_classes.length-2);
                } else if (_max !== _min) {
                    // just interpolate between min/max
                    t = (val - _min) / (_max - _min);
                } else {
                    t = 1;
                }
            } else {
                t = val;
            }

            // domain map
            t = tMapDomain(t);

            if (!bypassMap) {
                t = tMapLightness(t);  // lightness correction
            }

            if (_gamma !== 1) { t = pow$3(t, _gamma); }

            t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));

            t = Math.min(1, Math.max(0, t));

            var k = Math.floor(t * 10000);

            if (_useCache && _colorCache[k]) {
                col = _colorCache[k];
            } else {
                if (type$2(_colors) === 'array') {
                    //for i in [0.._pos.length-1]
                    for (var i=0; i<_pos.length; i++) {
                        var p = _pos[i];
                        if (t <= p) {
                            col = _colors[i];
                            break;
                        }
                        if ((t >= p) && (i === (_pos.length-1))) {
                            col = _colors[i];
                            break;
                        }
                        if (t > p && t < _pos[i+1]) {
                            t = (t-p)/(_pos[i+1]-p);
                            col = chroma$4.interpolate(_colors[i], _colors[i+1], t, _mode);
                            break;
                        }
                    }
                } else if (type$2(_colors) === 'function') {
                    col = _colors(t);
                }
                if (_useCache) { _colorCache[k] = col; }
            }
            return col;
        };

        var resetCache = function () { return _colorCache = {}; };

        setColors(colors);

        // public interface

        var f = function(v) {
            var c = chroma$4(getColor(v));
            if (_out && c[_out]) { return c[_out](); } else { return c; }
        };

        f.classes = function(classes) {
            if (classes != null) {
                if (type$2(classes) === 'array') {
                    _classes = classes;
                    _domain = [classes[0], classes[classes.length-1]];
                } else {
                    var d = chroma$4.analyze(_domain);
                    if (classes === 0) {
                        _classes = [d.min, d.max];
                    } else {
                        _classes = chroma$4.limits(d, 'e', classes);
                    }
                }
                return f;
            }
            return _classes;
        };


        f.domain = function(domain) {
            if (!arguments.length) {
                return _domain;
            }
            _min = domain[0];
            _max = domain[domain.length-1];
            _pos = [];
            var k = _colors.length;
            if ((domain.length === k) && (_min !== _max)) {
                // update positions
                for (var i = 0, list = Array.from(domain); i < list.length; i += 1) {
                    var d = list[i];

                  _pos.push((d-_min) / (_max-_min));
                }
            } else {
                for (var c=0; c<k; c++) {
                    _pos.push(c/(k-1));
                }
                if (domain.length > 2) {
                    // set domain map
                    var tOut = domain.map(function (d,i) { return i/(domain.length-1); });
                    var tBreaks = domain.map(function (d) { return (d - _min) / (_max - _min); });
                    if (!tBreaks.every(function (val, i) { return tOut[i] === val; })) {
                        tMapDomain = function (t) {
                            if (t <= 0 || t >= 1) { return t; }
                            var i = 0;
                            while (t >= tBreaks[i+1]) { i++; }
                            var f = (t - tBreaks[i]) / (tBreaks[i+1] - tBreaks[i]);
                            var out = tOut[i] + f * (tOut[i+1] - tOut[i]);
                            return out;
                        };
                    }

                }
            }
            _domain = [_min, _max];
            return f;
        };

        f.mode = function(_m) {
            if (!arguments.length) {
                return _mode;
            }
            _mode = _m;
            resetCache();
            return f;
        };

        f.range = function(colors, _pos) {
            setColors(colors);
            return f;
        };

        f.out = function(_o) {
            _out = _o;
            return f;
        };

        f.spread = function(val) {
            if (!arguments.length) {
                return _spread;
            }
            _spread = val;
            return f;
        };

        f.correctLightness = function(v) {
            if (v == null) { v = true; }
            _correctLightness = v;
            resetCache();
            if (_correctLightness) {
                tMapLightness = function(t) {
                    var L0 = getColor(0, true).lab()[0];
                    var L1 = getColor(1, true).lab()[0];
                    var pol = L0 > L1;
                    var L_actual = getColor(t, true).lab()[0];
                    var L_ideal = L0 + ((L1 - L0) * t);
                    var L_diff = L_actual - L_ideal;
                    var t0 = 0;
                    var t1 = 1;
                    var max_iter = 20;
                    while ((Math.abs(L_diff) > 1e-2) && (max_iter-- > 0)) {
                        (function() {
                            if (pol) { L_diff *= -1; }
                            if (L_diff < 0) {
                                t0 = t;
                                t += (t1 - t) * 0.5;
                            } else {
                                t1 = t;
                                t += (t0 - t) * 0.5;
                            }
                            L_actual = getColor(t, true).lab()[0];
                            return L_diff = L_actual - L_ideal;
                        })();
                    }
                    return t;
                };
            } else {
                tMapLightness = function (t) { return t; };
            }
            return f;
        };

        f.padding = function(p) {
            if (p != null) {
                if (type$2(p) === 'number') {
                    p = [p,p];
                }
                _padding = p;
                return f;
            } else {
                return _padding;
            }
        };

        f.colors = function(numColors, out) {
            // If no arguments are given, return the original colors that were provided
            if (arguments.length < 2) { out = 'hex'; }
            var result = [];

            if (arguments.length === 0) {
                result = _colors.slice(0);

            } else if (numColors === 1) {
                result = [f(0.5)];

            } else if (numColors > 1) {
                var dm = _domain[0];
                var dd = _domain[1] - dm;
                result = __range__(0, numColors, false).map(function (i) { return f( dm + ((i/(numColors-1)) * dd) ); });

            } else { // returns all colors based on the defined classes
                colors = [];
                var samples = [];
                if (_classes && (_classes.length > 2)) {
                    for (var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                        samples.push((_classes[i-1]+_classes[i])*0.5);
                    }
                } else {
                    samples = _domain;
                }
                result = samples.map(function (v) { return f(v); });
            }

            if (chroma$4[out]) {
                result = result.map(function (c) { return c[out](); });
            }
            return result;
        };

        f.cache = function(c) {
            if (c != null) {
                _useCache = c;
                return f;
            } else {
                return _useCache;
            }
        };

        f.gamma = function(g) {
            if (g != null) {
                _gamma = g;
                return f;
            } else {
                return _gamma;
            }
        };

        f.nodata = function(d) {
            if (d != null) {
                _nacol = chroma$4(d);
                return f;
            } else {
                return _nacol;
            }
        };

        return f;
    };

    function __range__(left, right, inclusive) {
      var range = [];
      var ascending = left < right;
      var end = !inclusive ? right : ascending ? right + 1 : right - 1;
      for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
        range.push(i);
      }
      return range;
    }

    //
    // interpolates between a set of colors uzing a bezier spline
    //

    // @requires utils lab
    var Color$5 = Color_1;

    var scale$1 = scale$2;

    // nth row of the pascal triangle
    var binom_row = function(n) {
        var row = [1, 1];
        for (var i = 1; i < n; i++) {
            var newrow = [1];
            for (var j = 1; j <= row.length; j++) {
                newrow[j] = (row[j] || 0) + row[j - 1];
            }
            row = newrow;
        }
        return row;
    };

    var bezier = function(colors) {
        var assign, assign$1, assign$2;

        var I, lab0, lab1, lab2;
        colors = colors.map(function (c) { return new Color$5(c); });
        if (colors.length === 2) {
            // linear interpolation
            (assign = colors.map(function (c) { return c.lab(); }), lab0 = assign[0], lab1 = assign[1]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return lab0[i] + (t * (lab1[i] - lab0[i])); }));
                return new Color$5(lab, 'lab');
            };
        } else if (colors.length === 3) {
            // quadratic bezier interpolation
            (assign$1 = colors.map(function (c) { return c.lab(); }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t) * lab0[i]) + (2 * (1-t) * t * lab1[i]) + (t * t * lab2[i]); }));
                return new Color$5(lab, 'lab');
            };
        } else if (colors.length === 4) {
            // cubic bezier interpolation
            var lab3;
            (assign$2 = colors.map(function (c) { return c.lab(); }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t)*(1-t) * lab0[i]) + (3 * (1-t) * (1-t) * t * lab1[i]) + (3 * (1-t) * t * t * lab2[i]) + (t*t*t * lab3[i]); }));
                return new Color$5(lab, 'lab');
            };
        } else if (colors.length >= 5) {
            // general case (degree n bezier)
            var labs, row, n;
            labs = colors.map(function (c) { return c.lab(); });
            n = colors.length - 1;
            row = binom_row(n);
            I = function (t) {
                var u = 1 - t;
                var lab = ([0, 1, 2].map(function (i) { return labs.reduce(function (sum, el, j) { return (sum + row[j] * Math.pow( u, (n - j) ) * Math.pow( t, j ) * el[i]); }, 0); }));
                return new Color$5(lab, 'lab');
            };
        } else {
            throw new RangeError("No point in running bezier with only one color.")
        }
        return I;
    };

    var bezier_1 = function (colors) {
        var f = bezier(colors);
        f.scale = function () { return scale$1(f); };
        return f;
    };

    /*
     * interpolates between a set of colors uzing a bezier spline
     * blend mode formulas taken from http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
     */

    var chroma$3 = chroma_1;

    var blend = function (bottom, top, mode) {
        if (!blend[mode]) {
            throw new Error('unknown blend mode ' + mode);
        }
        return blend[mode](bottom, top);
    };

    var blend_f = function (f) { return function (bottom,top) {
            var c0 = chroma$3(top).rgb();
            var c1 = chroma$3(bottom).rgb();
            return chroma$3.rgb(f(c0, c1));
        }; };

    var each = function (f) { return function (c0, c1) {
            var out = [];
            out[0] = f(c0[0], c1[0]);
            out[1] = f(c0[1], c1[1]);
            out[2] = f(c0[2], c1[2]);
            return out;
        }; };

    var normal = function (a) { return a; };
    var multiply = function (a,b) { return a * b / 255; };
    var darken = function (a,b) { return a > b ? b : a; };
    var lighten = function (a,b) { return a > b ? a : b; };
    var screen = function (a,b) { return 255 * (1 - (1-a/255) * (1-b/255)); };
    var overlay = function (a,b) { return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255 ) * ( 1 - b / 255 )); };
    var burn = function (a,b) { return 255 * (1 - (1 - b / 255) / (a/255)); };
    var dodge = function (a,b) {
        if (a === 255) { return 255; }
        a = 255 * (b / 255) / (1 - a / 255);
        return a > 255 ? 255 : a
    };

    // # add = (a,b) ->
    // #     if (a + b > 255) then 255 else a + b

    blend.normal = blend_f(each(normal));
    blend.multiply = blend_f(each(multiply));
    blend.screen = blend_f(each(screen));
    blend.overlay = blend_f(each(overlay));
    blend.darken = blend_f(each(darken));
    blend.lighten = blend_f(each(lighten));
    blend.dodge = blend_f(each(dodge));
    blend.burn = blend_f(each(burn));
    // blend.add = blend_f(each(add));

    var blend_1 = blend;

    // cubehelix interpolation
    // based on D.A. Green "A colour scheme for the display of astronomical intensity images"
    // http://astron-soc.in/bulletin/11June/289392011.pdf

    var type$1 = utils.type;
    var clip_rgb = utils.clip_rgb;
    var TWOPI = utils.TWOPI;
    var pow$2 = Math.pow;
    var sin$1 = Math.sin;
    var cos$1 = Math.cos;
    var chroma$2 = chroma_1;

    var cubehelix = function(start, rotations, hue, gamma, lightness) {
        if ( start === void 0 ) start=300;
        if ( rotations === void 0 ) rotations=-1.5;
        if ( hue === void 0 ) hue=1;
        if ( gamma === void 0 ) gamma=1;
        if ( lightness === void 0 ) lightness=[0,1];

        var dh = 0, dl;
        if (type$1(lightness) === 'array') {
            dl = lightness[1] - lightness[0];
        } else {
            dl = 0;
            lightness = [lightness, lightness];
        }

        var f = function(fract) {
            var a = TWOPI * (((start+120)/360) + (rotations * fract));
            var l = pow$2(lightness[0] + (dl * fract), gamma);
            var h = dh !== 0 ? hue[0] + (fract * dh) : hue;
            var amp = (h * l * (1-l)) / 2;
            var cos_a = cos$1(a);
            var sin_a = sin$1(a);
            var r = l + (amp * ((-0.14861 * cos_a) + (1.78277* sin_a)));
            var g = l + (amp * ((-0.29227 * cos_a) - (0.90649* sin_a)));
            var b = l + (amp * (+1.97294 * cos_a));
            return chroma$2(clip_rgb([r*255,g*255,b*255,1]));
        };

        f.start = function(s) {
            if ((s == null)) { return start; }
            start = s;
            return f;
        };

        f.rotations = function(r) {
            if ((r == null)) { return rotations; }
            rotations = r;
            return f;
        };

        f.gamma = function(g) {
            if ((g == null)) { return gamma; }
            gamma = g;
            return f;
        };

        f.hue = function(h) {
            if ((h == null)) { return hue; }
            hue = h;
            if (type$1(hue) === 'array') {
                dh = hue[1] - hue[0];
                if (dh === 0) { hue = hue[1]; }
            } else {
                dh = 0;
            }
            return f;
        };

        f.lightness = function(h) {
            if ((h == null)) { return lightness; }
            if (type$1(h) === 'array') {
                lightness = h;
                dl = h[1] - h[0];
            } else {
                lightness = [h,h];
                dl = 0;
            }
            return f;
        };

        f.scale = function () { return chroma$2.scale(f); };

        f.hue(hue);

        return f;
    };

    var Color$4 = Color_1;
    var digits = '0123456789abcdef';

    var floor$1 = Math.floor;
    var random = Math.random;

    var random_1 = function () {
        var code = '#';
        for (var i=0; i<6; i++) {
            code += digits.charAt(floor$1(random() * 16));
        }
        return new Color$4(code, 'hex');
    };

    var type = type$p;
    var log = Math.log;
    var pow$1 = Math.pow;
    var floor = Math.floor;
    var abs$1 = Math.abs;


    var analyze = function (data, key) {
        if ( key === void 0 ) key=null;

        var r = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE*-1,
            sum: 0,
            values: [],
            count: 0
        };
        if (type(data) === 'object') {
            data = Object.values(data);
        }
        data.forEach(function (val) {
            if (key && type(val) === 'object') { val = val[key]; }
            if (val !== undefined && val !== null && !isNaN(val)) {
                r.values.push(val);
                r.sum += val;
                if (val < r.min) { r.min = val; }
                if (val > r.max) { r.max = val; }
                r.count += 1;
            }
        });

        r.domain = [r.min, r.max];

        r.limits = function (mode, num) { return limits(r, mode, num); };

        return r;
    };


    var limits = function (data, mode, num) {
        if ( mode === void 0 ) mode='equal';
        if ( num === void 0 ) num=7;

        if (type(data) == 'array') {
            data = analyze(data);
        }
        var min = data.min;
        var max = data.max;
        var values = data.values.sort(function (a,b) { return a-b; });

        if (num === 1) { return [min,max]; }

        var limits = [];

        if (mode.substr(0,1) === 'c') { // continuous
            limits.push(min);
            limits.push(max);
        }

        if (mode.substr(0,1) === 'e') { // equal interval
            limits.push(min);
            for (var i=1; i<num; i++) {
                limits.push(min+((i/num)*(max-min)));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'l') { // log scale
            if (min <= 0) {
                throw new Error('Logarithmic scales are only possible for values > 0');
            }
            var min_log = Math.LOG10E * log(min);
            var max_log = Math.LOG10E * log(max);
            limits.push(min);
            for (var i$1=1; i$1<num; i$1++) {
                limits.push(pow$1(10, min_log + ((i$1/num) * (max_log - min_log))));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'q') { // quantile scale
            limits.push(min);
            for (var i$2=1; i$2<num; i$2++) {
                var p = ((values.length-1) * i$2)/num;
                var pb = floor(p);
                if (pb === p) {
                    limits.push(values[pb]);
                } else { // p > pb
                    var pr = p - pb;
                    limits.push((values[pb]*(1-pr)) + (values[pb+1]*pr));
                }
            }
            limits.push(max);

        }

        else if (mode.substr(0,1) === 'k') { // k-means clustering
            /*
            implementation based on
            http://code.google.com/p/figue/source/browse/trunk/figue.js#336
            simplified for 1-d input values
            */
            var cluster;
            var n = values.length;
            var assignments = new Array(n);
            var clusterSizes = new Array(num);
            var repeat = true;
            var nb_iters = 0;
            var centroids = null;

            // get seed values
            centroids = [];
            centroids.push(min);
            for (var i$3=1; i$3<num; i$3++) {
                centroids.push(min + ((i$3/num) * (max-min)));
            }
            centroids.push(max);

            while (repeat) {
                // assignment step
                for (var j=0; j<num; j++) {
                    clusterSizes[j] = 0;
                }
                for (var i$4=0; i$4<n; i$4++) {
                    var value = values[i$4];
                    var mindist = Number.MAX_VALUE;
                    var best = (void 0);
                    for (var j$1=0; j$1<num; j$1++) {
                        var dist = abs$1(centroids[j$1]-value);
                        if (dist < mindist) {
                            mindist = dist;
                            best = j$1;
                        }
                        clusterSizes[best]++;
                        assignments[i$4] = best;
                    }
                }

                // update centroids step
                var newCentroids = new Array(num);
                for (var j$2=0; j$2<num; j$2++) {
                    newCentroids[j$2] = null;
                }
                for (var i$5=0; i$5<n; i$5++) {
                    cluster = assignments[i$5];
                    if (newCentroids[cluster] === null) {
                        newCentroids[cluster] = values[i$5];
                    } else {
                        newCentroids[cluster] += values[i$5];
                    }
                }
                for (var j$3=0; j$3<num; j$3++) {
                    newCentroids[j$3] *= 1/clusterSizes[j$3];
                }

                // check convergence
                repeat = false;
                for (var j$4=0; j$4<num; j$4++) {
                    if (newCentroids[j$4] !== centroids[j$4]) {
                        repeat = true;
                        break;
                    }
                }

                centroids = newCentroids;
                nb_iters++;

                if (nb_iters > 200) {
                    repeat = false;
                }
            }

            // finished k-means clustering
            // the next part is borrowed from gabrielflor.it
            var kClusters = {};
            for (var j$5=0; j$5<num; j$5++) {
                kClusters[j$5] = [];
            }
            for (var i$6=0; i$6<n; i$6++) {
                cluster = assignments[i$6];
                kClusters[cluster].push(values[i$6]);
            }
            var tmpKMeansBreaks = [];
            for (var j$6=0; j$6<num; j$6++) {
                tmpKMeansBreaks.push(kClusters[j$6][0]);
                tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length-1]);
            }
            tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a,b){ return a-b; });
            limits.push(tmpKMeansBreaks[0]);
            for (var i$7=1; i$7 < tmpKMeansBreaks.length; i$7+= 2) {
                var v = tmpKMeansBreaks[i$7];
                if (!isNaN(v) && (limits.indexOf(v) === -1)) {
                    limits.push(v);
                }
            }
        }
        return limits;
    };

    var analyze_1 = {analyze: analyze, limits: limits};

    var Color$3 = Color_1;


    var contrast = function (a, b) {
        // WCAG contrast ratio
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
        a = new Color$3(a);
        b = new Color$3(b);
        var l1 = a.luminance();
        var l2 = b.luminance();
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    };

    var Color$2 = Color_1;
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    var min = Math.min;
    var max = Math.max;
    var atan2 = Math.atan2;
    var abs = Math.abs;
    var cos = Math.cos;
    var sin = Math.sin;
    var exp = Math.exp;
    var PI = Math.PI;

    var deltaE = function(a, b, Kl, Kc, Kh) {
        if ( Kl === void 0 ) Kl=1;
        if ( Kc === void 0 ) Kc=1;
        if ( Kh === void 0 ) Kh=1;

        // Delta E (CIE 2000)
        // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html
        var rad2deg = function(rad) {
            return 360 * rad / (2 * PI);
        };
        var deg2rad = function(deg) {
            return (2 * PI * deg) / 360;
        };
        a = new Color$2(a);
        b = new Color$2(b);
        var ref = Array.from(a.lab());
        var L1 = ref[0];
        var a1 = ref[1];
        var b1 = ref[2];
        var ref$1 = Array.from(b.lab());
        var L2 = ref$1[0];
        var a2 = ref$1[1];
        var b2 = ref$1[2];
        var avgL = (L1 + L2)/2;
        var C1 = sqrt(pow(a1, 2) + pow(b1, 2));
        var C2 = sqrt(pow(a2, 2) + pow(b2, 2));
        var avgC = (C1 + C2)/2;
        var G = 0.5*(1-sqrt(pow(avgC, 7)/(pow(avgC, 7) + pow(25, 7))));
        var a1p = a1*(1+G);
        var a2p = a2*(1+G);
        var C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
        var C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
        var avgCp = (C1p + C2p)/2;
        var arctan1 = rad2deg(atan2(b1, a1p));
        var arctan2 = rad2deg(atan2(b2, a2p));
        var h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
        var h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
        var avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360)/2 : (h1p + h2p)/2;
        var T = 1 - 0.17*cos(deg2rad(avgHp - 30)) + 0.24*cos(deg2rad(2*avgHp)) + 0.32*cos(deg2rad(3*avgHp + 6)) - 0.2*cos(deg2rad(4*avgHp - 63));
        var deltaHp = h2p - h1p;
        deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
        deltaHp = 2*sqrt(C1p*C2p)*sin(deg2rad(deltaHp)/2);
        var deltaL = L2 - L1;
        var deltaCp = C2p - C1p;    
        var sl = 1 + (0.015*pow(avgL - 50, 2))/sqrt(20 + pow(avgL - 50, 2));
        var sc = 1 + 0.045*avgCp;
        var sh = 1 + 0.015*avgCp*T;
        var deltaTheta = 30*exp(-pow((avgHp - 275)/25, 2));
        var Rc = 2*sqrt(pow(avgCp, 7)/(pow(avgCp, 7) + pow(25, 7)));
        var Rt = -Rc*sin(2*deg2rad(deltaTheta));
        var result = sqrt(pow(deltaL/(Kl*sl), 2) + pow(deltaCp/(Kc*sc), 2) + pow(deltaHp/(Kh*sh), 2) + Rt*(deltaCp/(Kc*sc))*(deltaHp/(Kh*sh)));
        return max(0, min(100, result));
    };

    var Color$1 = Color_1;

    // simple Euclidean distance
    var distance = function(a, b, mode) {
        if ( mode === void 0 ) mode='lab';

        // Delta E (CIE 1976)
        // see http://www.brucelindbloom.com/index.html?Equations.html
        a = new Color$1(a);
        b = new Color$1(b);
        var l1 = a.get(mode);
        var l2 = b.get(mode);
        var sum_sq = 0;
        for (var i in l1) {
            var d = (l1[i] || 0) - (l2[i] || 0);
            sum_sq += d*d;
        }
        return Math.sqrt(sum_sq);
    };

    var Color = Color_1;

    var valid = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        try {
            new (Function.prototype.bind.apply( Color, [ null ].concat( args) ));
            return true;
        } catch (e) {
            return false;
        }
    };

    // some pre-defined color scales:
    var chroma$1 = chroma_1;

    var scale = scale$2;

    var scales = {
    	cool: function cool() { return scale([chroma$1.hsl(180,1,.9), chroma$1.hsl(250,.7,.4)]) },
    	hot: function hot() { return scale(['#000','#f00','#ff0','#fff']).mode('rgb') }
    };

    /**
        ColorBrewer colors for chroma.js

        Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
        Pennsylvania State University.

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0

        Unless required by applicable law or agreed to in writing, software distributed
        under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
        CONDITIONS OF ANY KIND, either express or implied. See the License for the
        specific language governing permissions and limitations under the License.
    */

    var colorbrewer = {
        // sequential
        OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
        PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
        BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
        Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
        BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
        YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
        YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
        Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
        RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
        Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
        YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
        Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
        GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
        Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
        YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
        PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
        Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
        PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
        Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],

        // diverging

        Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
        RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
        RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
        PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
        PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
        RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
        BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
        RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
        PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],

        // qualitative

        Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
        Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
        Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
        Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
        Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
        Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
        Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
        Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'],
    };

    // add lowercase aliases for case-insensitive matches
    for (var i = 0, list = Object.keys(colorbrewer); i < list.length; i += 1) {
        var key = list[i];

        colorbrewer[key.toLowerCase()] = colorbrewer[key];
    }

    var colorbrewer_1 = colorbrewer;

    var chroma = chroma_1;

    // feel free to comment out anything to rollup
    // a smaller chroma.js built

    // io --> convert colors

















    // operators --> modify existing Colors










    // interpolators












    // generators -- > create new colors
    chroma.average = average;
    chroma.bezier = bezier_1;
    chroma.blend = blend_1;
    chroma.cubehelix = cubehelix;
    chroma.mix = chroma.interpolate = mix$1;
    chroma.random = random_1;
    chroma.scale = scale$2;

    // other utility methods
    chroma.analyze = analyze_1.analyze;
    chroma.contrast = contrast;
    chroma.deltaE = deltaE;
    chroma.distance = distance;
    chroma.limits = analyze_1.limits;
    chroma.valid = valid;

    // scale
    chroma.scales = scales;

    // colors
    chroma.colors = w3cx11_1;
    chroma.brewer = colorbrewer_1;

    var chroma_js = chroma;

    return chroma_js;

}));


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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
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
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponents.js */ "./src/baseComponents.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skeleton */ "./src/skeleton.js");
/* harmony import */ var _colorHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorHandler.js */ "./src/colorHandler.js");
/* harmony import */ var _projectHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectHandler */ "./src/projectHandler.js");





// Initialize Colors
(0,_colorHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

// Build Website Skeleton
document.body.appendChild(_baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({id: 'content', children: _skeleton__WEBPACK_IMPORTED_MODULE_2__["default"] }))

// Add New project functionality
;

// Add functionality to newProjectButton
const newProjectButton = document.querySelector('.new-project').querySelector('.clickable');
newProjectButton.addEventListener('click',_projectHandler__WEBPACK_IMPORTED_MODULE_4__["default"].addTemplate);

// Start with a template on the page
_projectHandler__WEBPACK_IMPORTED_MODULE_4__["default"].addTemplate();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0YsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxzQ0FBc0MsK0JBQStCLDBDQUEwQyxnQkFBZ0IseUJBQXlCLHNDQUFzQyxHQUFHLE9BQU8sa0JBQWtCLDZCQUE2QixHQUFHLFdBQVcsK0JBQStCLGlDQUFpQywyQkFBMkIseUJBQXlCLHlCQUF5Qix5QkFBeUIsdUNBQXVDLGlDQUFpQywrQkFBK0IsK0JBQStCLCtCQUErQixHQUFHLHFDQUFxQyxxQkFBcUIsbUJBQW1CLGlCQUFpQixlQUFlLGtCQUFrQixvQkFBb0IscUJBQXFCLEdBQUcsUUFBUSx1QkFBdUIsR0FBRyxVQUFVLG9CQUFvQixHQUFHLGNBQWMsbUJBQW1CLG9CQUFvQiw2QkFBNkIsNkNBQTZDLEdBQUcsNkJBQTZCLG9CQUFvQiwwQkFBMEIsOEJBQThCLG1CQUFtQiw0QkFBNEIsc0JBQXNCLEdBQUcsYUFBYSxzQkFBc0IsK0JBQStCLHlCQUF5Qix3REFBd0QsNkNBQTZDLEdBQUcsa0JBQWtCLG9DQUFvQywyQkFBMkIsc0JBQXNCLHdIQUF3SCx3QkFBd0Isc0hBQXNILEdBQUcsbUJBQW1CLG9CQUFvQixjQUFjLEdBQUcsY0FBYyxtQkFBbUIseUJBQXlCLHFEQUFxRCxtQkFBbUIsb0JBQW9CLHVDQUF1QyxvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLG9CQUFvQixpQ0FBaUMsc0JBQXNCLHlCQUF5Qix3QkFBd0IsK0NBQStDLDBCQUEwQiw2Q0FBNkMscUVBQXFFLG9CQUFvQixvQkFBb0IsNkJBQTZCLGtCQUFrQixtQkFBbUIseUJBQXlCLDhCQUE4QixzQkFBc0IsbUJBQW1CLDZDQUE2QyxxRUFBcUUsaUNBQWlDLDZDQUE2QyxHQUFHLGdDQUFnQywrQ0FBK0Msa0NBQWtDLHVCQUF1QixHQUFHLHdCQUF3Qix5QkFBeUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsNklBQTZJLGlDQUFpQyxtREFBbUQsS0FBSyxrQkFBa0Isb0JBQW9CLDBCQUEwQix5QkFBeUIsa0NBQWtDLDBCQUEwQixHQUFHLDBEQUEwRCx1Q0FBdUMsc0JBQXNCLCtDQUErQyw2QkFBNkIsR0FBRyxnQ0FBZ0Msd0JBQXdCLGtEQUFrRCxHQUFHLDZCQUE2QixrQkFBa0IsR0FBRyxtQ0FBbUMsK0NBQStDLEdBQUcsc0JBQXNCLDRCQUE0QixtQkFBbUIsb0VBQW9FLG1CQUFtQixHQUFHLDJEQUEyRCw2Q0FBNkMsR0FBRyx5Q0FBeUMsd0JBQXdCLG9DQUFvQyw0QkFBNEIsd0JBQXdCLEdBQUcsK0JBQStCLHNDQUFzQyxHQUFHLDRDQUE0Qyw2Q0FBNkMsc0JBQXNCLEdBQUcsZ0NBQWdDLGNBQWMsR0FBRyxtQkFBbUIsaUJBQWlCLHlCQUF5QixzQkFBc0IsK0NBQStDLDJCQUEyQixHQUFHLHlCQUF5QixtRUFBbUUsR0FBRyx1Q0FBdUMsbUVBQW1FLEdBQUcsMkJBQTJCLHlCQUF5QixHQUFHLGlEQUFpRCx5QkFBeUIsaUJBQWlCLG1CQUFtQiwrQ0FBK0MsbUJBQW1CLGdCQUFnQiw2Q0FBNkMsc0JBQXNCLEdBQUcsNEJBQTRCLGdCQUFnQixHQUFHLCtCQUErQixtQ0FBbUMsR0FBRyxrQ0FBa0MsbUNBQW1DLEdBQUcsNkJBQTZCLHNEQUFzRCxvQkFBb0IsbUJBQW1CLHFDQUFxQywwQkFBMEIsK0NBQStDLDJCQUEyQixHQUFHLHFDQUFxQyw2Q0FBNkMsR0FBRyxnQ0FBZ0Msb0JBQW9CLGdCQUFnQiwwQkFBMEIsOEJBQThCLEdBQUcsa0NBQWtDLGdDQUFnQyxzQkFBc0IsdUJBQXVCLGtDQUFrQyxHQUFHLDBDQUEwQyxvQ0FBb0MsR0FBRyxzQ0FBc0MsK0NBQStDLHNDQUFzQyw0Q0FBNEMsMENBQTBDLGdDQUFnQywrQ0FBK0MsK0NBQStDLEdBQUcsbUJBQW1CLG1CQUFtQix3QkFBd0IsbUJBQW1CLEdBQUcsZ0NBQWdDLHVDQUF1QyxHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRywyQkFBMkIsb0JBQW9CLDZDQUE2Qyx3Q0FBd0MsdUJBQXVCLEdBQUcsMkNBQTJDLDZDQUE2QyxHQUFHLDJDQUEyQyw2Q0FBNkMsR0FBRyx5Q0FBeUMsNkNBQTZDLEdBQUcscUNBQXFDLHlCQUF5Qix3QkFBd0Isa0JBQWtCLEdBQUcsbUNBQW1DLDZDQUE2QyxtQkFBbUIsR0FBRywwQkFBMEIsdURBQXVELHlCQUF5QixHQUFHLHNCQUFzQixvQkFBb0IsNkJBQTZCLGVBQWUseUJBQXlCLEdBQUcsZ0RBQWdELG9CQUFvQixlQUFlLEdBQUcscUJBQXFCLGtCQUFrQixzREFBc0Qsc0JBQXNCLGdDQUFnQyxHQUFHLGtDQUFrQyx5QkFBeUIsR0FBRywyQkFBMkIsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQzNza0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2tDO0FBQ0o7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTtBQUNmLGlCQUFpQixpREFBSzs7QUFFdEI7QUFDQTtBQUNBLDZEQUE2RCxnREFBTTs7QUFFbkUsaUJBQWlCLGdCQUFnQjtBQUNqQyxtREFBbUQsSUFBSTtBQUN2RCxtREFBbUQsSUFBSSxTQUFTLGdEQUFNO0FBQ3RFLG1EQUFtRCxJQUFJLFFBQVEsZ0RBQU07QUFDckU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cb0Q7QUFDVDs7QUFFNUM7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHlEQUF5RDtBQUN2RjtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGtFQUFlO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDZEQUFZLEVBQUUsa0JBQWtCO0FBQzdFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUJBQXlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw4REFBYSxFQUFFLDRDQUE0QztBQUMvRTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GMkM7QUFDSTs7QUFFL0MsZUFBZSw4REFBYTtBQUM1QjtBQUNBO0FBQ0EsUUFBUSwrREFBYztBQUN0QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7QUFFRCx5QkFBeUIsNkRBQVU7O0FBRW5DLHlCQUF5Qiw4REFBYTtBQUN0QztBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxQkFBcUIsOERBQWE7QUFDbEM7QUFDQTtBQUNBLFFBQVEsaUVBQWdCLEVBQUUsMENBQTBDO0FBQ3BFLFFBQVEsaUVBQWdCLEVBQUUsc0NBQXNDO0FBQ2hFLFFBQVEsaUVBQWdCLEVBQUUsMENBQTBDO0FBQ3BFO0FBQ0EsQ0FBQzs7QUFFRCxnQkFBZ0IsOERBQWE7QUFDN0I7QUFDQTtBQUNBLFFBQVEsK0RBQWM7QUFDdEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlELG9CQUFvQiw4REFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRDRCO0FBQ0s7QUFDakI7QUFDQTs7QUFFL0I7QUFDQSxXQUFXLGlFQUFnQjtBQUMzQjtBQUNBLG9CQUFvQiw4REFBYSxFQUFFLEtBQUssb0RBQVMsQ0FBQztBQUNsRCxLQUFLO0FBQ0w7O0FBRU8sb0NBQW9DLE9BQU8sOERBQWE7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBYztBQUN0QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQLFdBQVcsOERBQWE7QUFDeEI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLFdBQVcsOERBQWE7QUFDeEIsYUFBYSx1Q0FBSztBQUNsQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLFdBQVcsOERBQWE7QUFDeEIsYUFBYSx1Q0FBSztBQUNsQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLFdBQVcsOERBQWE7QUFDeEI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLFdBQVcsOERBQWE7QUFDeEI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDhEQUFhO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLDhEQUFhO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsNkJBQTZCLE9BQU8sOERBQWE7QUFDakQ7QUFDQTtBQUNBLFlBQVksOERBQWE7QUFDekI7QUFDQTtBQUNBLG9CQUFvQiw4REFBYSxFQUFFLHFDQUFxQztBQUN4RSxvQkFBb0IsNkRBQVksRUFBRSxnQkFBZ0I7QUFDbEQsb0JBQW9CLDhEQUFhO0FBQ2pDO0FBQ0E7QUFDQSw0QkFBNEIsaUVBQWdCLEVBQUUsVUFBVTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EscUJBQXFCOzs7QUFHckI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBNEQ7QUFDaEUsSUFBSSxDQUNxRztBQUN6RyxDQUFDLHVCQUF1Qjs7QUFFeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUI7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEhBQTRILHFCQUFxQjtBQUNqSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLDJDQUEyQztBQUMzQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLG1CQUFtQjtBQUMvRjtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsaUJBQWlCO0FBQ3ZFOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEIsNkJBQTZCO0FBQzdCLDZCQUE2Qjs7QUFFN0I7QUFDQSxxQkFBcUI7QUFDckIsb0RBQW9EO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFLO0FBQy9CLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakM7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRjtBQUMzRixtR0FBbUc7QUFDbkcsbUdBQW1HO0FBQ25HLG1HQUFtRztBQUNuRyxtR0FBbUc7QUFDbkcsbUdBQW1HO0FBQ25HO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtDQUFrQyxFQUFFLGFBQWEsRUFBRTtBQUNuRCxtQ0FBbUMsRUFBRSxhQUFhLEVBQUU7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCO0FBQ0EsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLG1HQUFtRztBQUNuRyxtR0FBbUc7QUFDbkcsbUdBQW1HO0FBQ25HLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUU7QUFDckU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5Q0FBeUM7QUFDekMseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxpQkFBaUI7QUFDckU7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSwwREFBMEQ7QUFDMUQsVUFBVTtBQUNWO0FBQ0EsMERBQTBEO0FBQzFELFVBQVU7QUFDVjtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFD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QTtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjs7QUFFckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZCQUE2QixpRUFBaUU7QUFDOUYsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELGlCQUFpQjtBQUN0RTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7OztVQzkvR0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QztBQUN4QjtBQUNjO0FBQ1c7O0FBRTdDO0FBQ0EsNERBQVk7O0FBRVo7QUFDQSwwQkFBMEIsOERBQWEsRUFBRSx5QkFBeUIsaURBQVEsRUFBRTs7QUFFNUU7QUFDQSxDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBLDBDQUEwQyxtRUFBMEI7O0FBRXBFO0FBQ0EsbUVBQTBCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jb29sb3JzLWlvL2xpYi9nZW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY29vbG9ycy1pby9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY29vbG9ycy1pby9saWIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2Jhc2VDb21wb25lbnRzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbG9ySGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9za2VsZXRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZWRDb21wb25lbnRzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9jaHJvbWEuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpc1ZhbGlkID0gZnVuY3Rpb24gKHN0cikge1xuICAgIC8vIFRPRE86IPCflKcgIGNoZWNrIHRoYXQgaXQgaXMgYSB2YWxpZCBjb29sb3JzIHN0cmluZyBlLmcgNiBvciAzIGNoYXJzXG4gICAgLy8gVE9ETzog8J+UpyBWYWxpZGF0ZSB0aGF0IGVhY2ggY2hhciBpcyBhIHZhbGlkIGhleCBjaGFyICgwLTYsIGEtZilcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gNikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbnZhciBnZW4gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgLy8gVE9ETzog8J+UpyBFbnN1cmUgYXJyIGlzbid0IGxvbmdlciB0aGFuIDEwXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyciwgaSkge1xuICAgICAgICAgICAgLy8gVE9ETzog8J+UpyBoYW5kbGUgc3RyaW5ncyB0aGF0IHN0YXJ0IHdpdGggI1xuICAgICAgICAgICAgLy8gaWYgY3VyciBjb250YWlucyAjIGl0IHdpbGwgYmUgcmV0dXJuZWQgd2l0aG91dCAjLCBvdGhlcndpc2UgY3VyciBpcyBzaW1wbHkgcmV0dXJuZWRcbiAgICAgICAgICAgIHZhciBzdHIgPSBjdXJyLnNwbGl0KCcjJykucG9wKCk7XG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQoc3RyKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyICsgXCIgaXMgbm90IGEgdmFsaWQgaGV4IHZhbHVlXCIpO1xuICAgICAgICAgICAgaWYgKGkgPCBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgYWNjICsgc3RyICsgXCItXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIGFjYyArIHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgJ2h0dHBzOi8vY29vbG9ycy5jby8nKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdlbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdlbl8xID0gcmVxdWlyZShcIi4vZ2VuXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2VuXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZW5fMS5kZWZhdWx0OyB9IH0pO1xudmFyIHBhcnNlXzEgPSByZXF1aXJlKFwiLi9wYXJzZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwYXJzZV8xLmRlZmF1bHQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwYXJzZSA9IGZ1bmN0aW9uICh1cmwsIGhleCkge1xuICAgIGlmIChoZXggPT09IHZvaWQgMCkgeyBoZXggPSB0cnVlOyB9XG4gICAgLy8gVE9ETzog8J+UpyAgQ2hlY2sgdGhhdCBpdCBpcyBhY3R1YWxseSBhIGNvb2xvcnMgdXJsXG4gICAgdmFyIHVybEFyciA9IHVybC5zcGxpdCgnLycpO1xuICAgIHZhciBoZXhBcnIgPSB1cmxBcnJbdXJsQXJyLmxlbmd0aCAtIDFdLnNwbGl0KCctJyk7XG4gICAgaWYgKGhleCkge1xuICAgICAgICByZXR1cm4gaGV4QXJyLm1hcChmdW5jdGlvbiAobnVtKSB7IHJldHVybiBcIiNcIiArIG51bTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gaGV4QXJyO1xuICAgIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBwYXJzZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJSaWdodGVvdXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJBQmVlWmVlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKVxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBQlonO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDAwMDAwO1xcblxcbiAgICAtLWFjY2VudDE6ICNmZmZmZmY7XFxuICAgIC0tYWNjZW50MjogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQzOiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudDQ6ICNmZmZmZmY7XFxuXFxuICAgIC0tcHJpbWFyeS1jb2xvci1saWdodDogI2ZmZmZmZjtcXG5cXG4gICAgLS1hY2NlbnQxLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudDItbGlnaHQ6ICNmZmZmZmY7XFxuICAgIC0tYWNjZW50My1saWdodDogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQ0LWxpZ2h0OiAjZmZmZmZmO1xcbn1cXG5cXG4vKiBSZW1vdmUgRGVmYXVsdHMgKi9cXG5cXG5idXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucGx1cy1idXR0b24gLmNsaWNrYWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjA1cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYmFubmVyIHtcXG4gICAgZm9udC1zaXplOiA5NnB4O1xcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cyc7XFxuICAgIHBhZGRpbmctbGVmdDogNjRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5iYW5uZXItdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAxcHggdmFyKC0tYWNjZW50MSksIC0ycHggMnB4IHZhcigtLWFjY2VudDIpLCAtM3B4IDNweCB2YXIoLS1hY2NlbnQzKSwgLTRweCA0cHggdmFyKC0tYWNjZW50NClcXG59XFxuXFxuLmJhbm5lci10ZXh0OmhvdmVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IHZhcigtLWFjY2VudDEpLCAtNHB4IDRweCB2YXIoLS1hY2NlbnQyKSwgLTZweCA2cHggdmFyKC0tYWNjZW50MyksIC04cHggOHB4IHZhcigtLWFjY2VudDQpO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQxKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jc2lkZWJhci10aXRsZSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgcGFkZGluZzogOHB4IDMycHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDNweCB2YXIoLS1hY2NlbnQzKSwgM3B4IC0zcHggdmFyKC0tYWNjZW50NClcXG59XFxuXFxuI3NpZGViYXItaXRlbXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHhcXG59XFxuXFxuLnNpZGViYXItaXRlbSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQzLWxpZ2h0KTtcXG4gICAgYm94LXNoYWRvdzogLTJweCAycHggdmFyKC0tYWNjZW50MyksIDJweCAtMnB4IHZhcigtLWFjY2VudDQpXFxufVxcblxcbi5zaWRlYmFyLWl0ZW06bnRoLWNoaWxkKDJuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDQtbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtOm50aC1jaGlsZCgxKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMzJweCA2NHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMycHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpIDAsIHZhcigtLXByaW1hcnktY29sb3IpIDUuNXB4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCA1MCUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEzcHggMTNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxuXFxufVxcblxcbi5wbHVzLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBOZXcgUHJvamVjdCBCdXR0b24gKi9cXG5cXG4ucGx1cy1idXR0b24ubmV3LXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQxKTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubmV3LXByb2plY3QgLmRpc3BsYXktdGV4dCB7XFxuICAgIHBhZGRpbmc6IDBweCAzMnB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QgLmNsaWNrYWJsZSB7XFxuICAgIHdpZHRoOiA1NnB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QgLmNsaWNrYWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5uZXctcHJvamVjdCBpbWcge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4wNXM7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSkgZHJvcC1zaGFkb3coMnB4IDJweCB2YXIoLS1zZWNvbmRhcnktY29sb3IpKTtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbn1cXG5cXG4vKiBOZXcgUHJvamVjdCAoRGlzYWJsZWQpICovXFxuXFxuLnBsdXMtYnV0dG9uLmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wbHVzLWJ1dHRvbi5kaXNhYmxlZCAuZGlzcGxheS10ZXh0IHtcXG4gICAgcGFkZGluZzogMHB4IDMycHg7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBmaWx0ZXI6IGNvbnRyYXN0KDAuMik7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ucGx1cy1idXR0b24uZGlzYWJsZWQgaW1nIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMCkgY29udHJhc3QoMC4yKTtcXG59XFxuXFxuLnBsdXMtYnV0dG9uLmRpc2FibGVkIC5jbGlja2FibGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKiovXFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IHZhcigtLWFjY2VudDEpLCA1cHggLTVweCB2YXIoLS1hY2NlbnQyKTtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpudGgtY2hpbGQoMm4pOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggdmFyKC0tYWNjZW50MyksIDVweCAtNXB4IHZhcigtLWFjY2VudDQpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLnNhdmUsIC5wcm9qZWN0LWl0ZW0gLmRpc2NhcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB0b3A6IC00cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmRpc2NhcmQge1xcbiAgICB0b3A6IDU2cHg7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLnNhdmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5kaXNjYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IC5oZWFkZXIge1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQgPiAuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmhlYWRlci1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAucHJvamVjdC10aXRsZSB7XFxuICAgIHBhZGRpbmc6IDRweCA0cHggNHB4IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQgLnByb2plY3QtdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuaGVhZGVyLWxlZnQgaW5wdXQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKVxcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5oZWFkZXItbGVmdCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDRweCBzb2xpZCB2YXIoLS1hY2NlbnQzKVxcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5wbHVzLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5hZGQtdGFncyBpbWcge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5hZGQtdGFncyAuY2xpY2thYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Myk7XFxufVxcblxcbi5hZGQtdGFncyAuZGlzcGxheS10ZXh0IHtcXG4gICAgcGFkZGluZzogMHB4IDhweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IC5ib2R5IHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50MS1saWdodCk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpudGgtY2hpbGQoNG4tMikgPiAuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDMtbGlnaHQpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOm50aC1jaGlsZCg0bi0xKSA+IC5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Mi1saWdodCk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06bnRoLWNoaWxkKDRuKSA+IC5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50NC1saWdodCk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gPiAuYm9keS5jb2xsYXBzZWQge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xcbiAgICBoZWlnaHQ6IDBweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkID4gLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udGFzay1saXN0ID4gLmhlYWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBkb3VibGUgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLyogTmV3IFRhc2sgQnV0dG9uIFN0eWxpbmcgKi9cXG5cXG4ubmV3LXRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLm5ldy10YXNrIGlucHV0IHtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRDQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCOztJQUUxQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0lBRWxCLDhCQUE4Qjs7SUFFOUIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0FBQzVCOztBQUVBLG9CQUFvQjs7QUFFcEI7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLFlBQVk7Q0FDWixVQUFVO0NBQ1YsYUFBYTtDQUNiLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFD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O0FBQy9COztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCOztBQUVBLDRCQUE0Qjs7QUFFNUI7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLCtDQUErQztJQUMvQyxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnO1xcbiAgICBzcmM6IHVybCgnUmlnaHRlb3VzLVJlZ3VsYXIudHRmJylcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgc3JjOiB1cmwoJ0FCZWVaZWUtUmVndWxhci50dGYnKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDAwMDA7XFxuXFxuICAgIC0tYWNjZW50MTogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQyOiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudDM6ICNmZmZmZmY7XFxuICAgIC0tYWNjZW50NDogI2ZmZmZmZjtcXG5cXG4gICAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xcblxcbiAgICAtLWFjY2VudDEtbGlnaHQ6ICNmZmZmZmY7XFxuICAgIC0tYWNjZW50Mi1saWdodDogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQzLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudDQtbGlnaHQ6ICNmZmZmZmY7XFxufVxcblxcbi8qIFJlbW92ZSBEZWZhdWx0cyAqL1xcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wbHVzLWJ1dHRvbiAuY2xpY2thYmxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5iYW5uZXIge1xcbiAgICBmb250LXNpemU6IDk2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJztcXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4O1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmJhbm5lci10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDFweCB2YXIoLS1hY2NlbnQxKSwgLTJweCAycHggdmFyKC0tYWNjZW50MiksIC0zcHggM3B4IHZhcigtLWFjY2VudDMpLCAtNHB4IDRweCB2YXIoLS1hY2NlbnQ0KVxcbn1cXG5cXG4uYmFubmVyLXRleHQ6aG92ZXIge1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAycHggdmFyKC0tYWNjZW50MSksIC00cHggNHB4IHZhcigtLWFjY2VudDIpLCAtNnB4IDZweCB2YXIoLS1hY2NlbnQzKSwgLThweCA4cHggdmFyKC0tYWNjZW50NCk7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDEpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbiNzaWRlYmFyLXRpdGxlIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC1mYW1pbHk6ICdBQlonO1xcbiAgICBwYWRkaW5nOiA4cHggMzJweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggM3B4IHZhcigtLWFjY2VudDMpLCAzcHggLTNweCB2YXIoLS1hY2NlbnQ0KVxcbn1cXG5cXG4jc2lkZWJhci1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweFxcbn1cXG5cXG4uc2lkZWJhci1pdGVtIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBQlonO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDMtbGlnaHQpO1xcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCB2YXIoLS1hY2NlbnQzKSwgMnB4IC0ycHggdmFyKC0tYWNjZW50NClcXG59XFxuXFxuLnNpZGViYXItaXRlbTpudGgtY2hpbGQoMm4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50NC1saWdodCk7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW06bnRoLWNoaWxkKDEpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAzMnB4IDY0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzJweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvcikgMCwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNS41cHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50IDUwJSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTNweCAxM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXG5cXG59XFxuXFxuLnBsdXMtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdBQlonO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIE5ldyBQcm9qZWN0IEJ1dHRvbiAqL1xcblxcbi5wbHVzLWJ1dHRvbi5uZXctcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDEpO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uZXctcHJvamVjdCAuZGlzcGxheS10ZXh0IHtcXG4gICAgcGFkZGluZzogMHB4IDMycHg7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5uZXctcHJvamVjdCAuY2xpY2thYmxlIHtcXG4gICAgd2lkdGg6IDU2cHg7XFxufVxcblxcbi5uZXctcHJvamVjdCAuY2xpY2thYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IGltZyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjA1cztcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKSBkcm9wLXNoYWRvdygycHggMnB4IHZhcigtLXNlY29uZGFyeS1jb2xvcikpO1xcbiAgICBoZWlnaHQ6IDU2cHg7XFxufVxcblxcbi8qIE5ldyBQcm9qZWN0IChEaXNhYmxlZCkgKi9cXG5cXG4ucGx1cy1idXR0b24uZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnBsdXMtYnV0dG9uLmRpc2FibGVkIC5kaXNwbGF5LXRleHQge1xcbiAgICBwYWRkaW5nOiAwcHggMzJweDtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGZpbHRlcjogY29udHJhc3QoMC4yKTtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5wbHVzLWJ1dHRvbi5kaXNhYmxlZCBpbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCgwKSBjb250cmFzdCgwLjIpO1xcbn1cXG5cXG4ucGx1cy1idXR0b24uZGlzYWJsZWQgLmNsaWNrYWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qKi9cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdBQlonO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggdmFyKC0tYWNjZW50MSksIDVweCAtNXB4IHZhcigtLWFjY2VudDIpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOm50aC1jaGlsZCgybik6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCB2YXIoLS1hY2NlbnQzKSwgNXB4IC01cHggdmFyKC0tYWNjZW50NCk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0udW5zYXZlZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuc2F2ZSwgLnByb2plY3QtaXRlbSAuZGlzY2FyZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHRvcDogLTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuZGlzY2FyZCB7XFxuICAgIHRvcDogNTZweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuc2F2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmRpc2NhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtID4gLmhlYWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0udW5zYXZlZCA+IC5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuaGVhZGVyLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDMycHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgcGFkZGluZzogNHB4IDRweCA0cHggMTZweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0udW5zYXZlZCAucHJvamVjdC10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5oZWFkZXItbGVmdCBpbnB1dCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpXFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmhlYWRlci1sZWZ0IGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogNHB4IHNvbGlkIHZhcigtLWFjY2VudDMpXFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLnBsdXMtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmFkZC10YWdzIGltZyB7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmFkZC10YWdzIC5jbGlja2FibGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQzKTtcXG59XFxuXFxuLmFkZC10YWdzIC5kaXNwbGF5LXRleHQge1xcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtID4gLmJvZHkge1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQxLWxpZ2h0KTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOm50aC1jaGlsZCg0bi0yKSA+IC5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50My1saWdodCk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06bnRoLWNoaWxkKDRuLTEpID4gLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQyLWxpZ2h0KTtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpudGgtY2hpbGQoNG4pID4gLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQ0LWxpZ2h0KTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IC5ib2R5LmNvbGxhcHNlZCB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwcztcXG4gICAgcGFkZGluZzogMHB4IDE2cHg7XFxuICAgIGhlaWdodDogMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQgPiAuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi50YXNrLWxpc3QgPiAuaGVhZGVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IGRvdWJsZSB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4vKiBOZXcgVGFzayBCdXR0b24gU3R5bGluZyAqL1xcblxcbi5uZXctdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubmV3LXRhc2sgaW5wdXQge1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLm5ldy10YXNrIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm5ldy10YXNrIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRpdjogbyA9PiBuZXdFbGVtZW50KCdkaXYnLG8pLFxuICAgIHNwYW46IG8gPT4gbmV3RWxlbWVudCgnc3BhbicsbyksXG4gICAgYnV0dG9uOiBvID0+IG5ld0VsZW1lbnQoJ2J1dHRvbicsbyksXG4gICAgaW1nOiBvID0+IG5ld0ltZyhvKSxcbiAgICB1bDogbyA9PiBuZXdFbGVtZW50KCd1bCcsbyksXG4gICAgbGk6IG8gPT4gbmV3RWxlbWVudCgnbGknLG8pXG59XG5cbi8vIENlbnRyYWwgZnVuY3Rpb24gdGhhdCBidWlsZHMgSFRNTCBlbGVtZW50cyBmcm9tIHByb3ZpZGVkIG9iamVjdHNcbmZ1bmN0aW9uIG5ld0VsZW1lbnQodHlwZSxvYmopIHtcbiAgICBsZXQgcmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZiAoJ3RleHQnIGluIG9iaikgcmV0LnRleHRDb250ZW50ID0gb2JqLnRleHRcbiAgICBpZiAoJ2lkJyBpbiBvYmopIHJldC5pZCA9IG9iai5pZFxuICAgIGlmICgnY2xhc3MnIGluIG9iaikge1xuICAgICAgICBmb3IgKGxldCBjIGluIG9iai5jbGFzcykge1xuICAgICAgICAgICAgcmV0LmNsYXNzTGlzdC5hZGQob2JqLmNsYXNzW2NdKVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICgnY2hpbGRyZW4nIGluIG9iaikge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IG9iai5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmV0LmFwcGVuZENoaWxkKG9iai5jaGlsZHJlbltpXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIG5ld0ltZyhvYmopIHtcbiAgICBsZXQgcmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWYgKCdzcmMnIGluIG9iaikgcmV0LnNldEF0dHJpYnV0ZSgnc3JjJyxvYmouc3JjKVxuICAgIGlmICgnYWx0JyBpbiBvYmopIHJldC5zZXRBdHRyaWJ1dGUoJ2FsdCcsb2JqLmFsdClcbiAgICBpZiAoJ2NsYXNzJyBpbiBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgYyBpbiBvYmouY2xhc3MpIHtcbiAgICAgICAgICAgIHJldC5jbGFzc0xpc3QuYWRkKG9iai5jbGFzc1tjXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG59IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdjb29sb3JzLWlvJ1xuaW1wb3J0IGNocm9tYSBmcm9tICdjaHJvbWEtanMnXG5cbmNvbnN0IHBhbGV0dGUgPSAnaHR0cHM6Ly9jb29sb3JzLmNvL2Y5ZmFmYi0wNjBhMGYtNjU5M2MyLTZlYjRhOC1mMDk3NGUtZTg3NjVhJ1xuLy8gY29uc3QgcGFsZXR0ZSA9ICdodHRwczovL2Nvb2xvcnMuY28vZWJmMmZhLTA2MGEwZS0wNjQ3ODktNDI3YWExLTY3OTQzNi1hNWJlMDAnXG4vLyBjb25zdCBwYWxldHRlID0gJ2h0dHBzOi8vY29vbG9ycy5jby8wZjA4MDYtZjZmNWYzLTQyODFhNC00OGE5YTYtZDRiNDgzLWMxNjY2YidcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGxldCBjb2xvcnMgPSBwYXJzZShwYWxldHRlKTtcblxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeS1jb2xvcicsIGNvbG9yc1swXSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zZWNvbmRhcnktY29sb3InLCBjb2xvcnNbMV0pXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LWNvbG9yLWxpZ2h0JywgY2hyb21hKGNvbG9yc1sxXSkuc2V0KCdoc2wubCcsKDAuOSkpKVxuXG4gICAgZm9yIChsZXQgaT0yO2k8Y29sb3JzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShgLS1hY2NlbnQke2ktMX1gLCBjb2xvcnNbaV0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KGAtLWFjY2VudCR7aS0xfS1saWdodGAsIGNocm9tYShjb2xvcnNbaV0pLnNldCgnaHNsLmwnLDAuOSkpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoYC0tYWNjZW50JHtpLTF9LWRhcmtgLCBjaHJvbWEoY29sb3JzW2ldKS5zZXQoJ2hzbC5sJywwLjEpKVxuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgeyBwcm9qZWN0VGVtcGxhdGUgfSBmcm9tIFwiLi9zdHlsZWRDb21wb25lbnRzXCI7XG5pbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2Jhc2VDb21wb25lbnRzLmpzXCI7XG5cbmxldCBpbmRleCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhZGRUZW1wbGF0ZTogKGUpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29udGFpbmVyJylcbiAgICAgICAgLy8gVGVtcGxhdGUgYWxyZWFkeSBleGlzdHMgLSByZXR1cm5cbiAgICAgICAgaWYgKHByb2plY3RBcmVhLnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkJykpIHtcbiAgICAgICAgICAgIHByb2plY3RBcmVhLnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkJykuc3R5bGUub3V0bGluZSA9IFwiNHB4IHNvbGlkIHZhcigtLWNvbG9yMilcIlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7cHJvamVjdEFyZWEucXVlcnlTZWxlY3RvcignLnVuc2F2ZWQnKS5zdHlsZS5vdXRsaW5lID0gXCJcIn0sMzAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgdGVtcGxhdGUgYW5kIGluc2VydFxuICAgICAgICBsZXQgdGVtcGxhdGUgPSBwcm9qZWN0VGVtcGxhdGUoKTtcbiAgICAgICAgdGVtcGxhdGUuZGF0YXNldC5pbmRleCA9IGluZGV4Kys7XG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBsYXRlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICBwcm9qZWN0QXJlYS5pbnNlcnRCZWZvcmUodGVtcGxhdGUsIHByb2plY3RBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpKVxuXG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdGVtcGxhdGVcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuc2F2ZWQgLm5ldy10YXNrIGJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRJdGVtKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuc2F2ZWQgLm5ldy10YXNrIGlucHV0JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsYWRkSWZFbnRlcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkIC5kaXNjYXJkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbW92ZVRlbXBsYXRlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuc2F2ZWQgLnNhdmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsc2F2ZVRlbXBsYXRlKTtcblxuICAgICAgICAvLyBEaXNhYmxlIGJ1dHRvblxuICAgICAgICB0b2dnbGVBZGRpbmcoKTtcbiAgICB9LCAgICBcbn1cblxuZnVuY3Rpb24gYWRkSXRlbShlKSB7XG4gICAgbGV0IHQgPSBlLnRhcmdldDtcbiAgICBjb25zb2xlLmxvZyh0KTtcbiAgICBsZXQgbGlzdCA9IHQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgbGV0IGlucHV0ID0gdC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09ICcnKSBsaXN0LmFwcGVuZENoaWxkKGNvbXBvbmVudC5saSh7dGV4dDogaW5wdXQudmFsdWV9KSlcbiAgICBpbnB1dC52YWx1ZSA9ICcnXG59XG5cbmZ1bmN0aW9uIGFkZElmRW50ZXIoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSBhZGRJdGVtKGUpXG59XG5cbmZ1bmN0aW9uIHNhdmVUZW1wbGF0ZShlKSB7XG4gICAgLy8gQ2hlY2sgdGl0bGUgYW5kIHJlbW92ZVxuICAgIGxldCBpdGVtID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgaGwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbGVmdCcpO1xuICAgIGxldCBpbnB1dCA9IGhsLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJylcblxuICAgIC8vIGRvIG5vdGhpbmcgaWYgdGl0bGUgZW1wdHlcbiAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGlucHV0LnN0eWxlLm91dGxpbmUgPSAnNHB4IHNvbGlkIHJlZCdcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7aW5wdXQuc3R5bGUub3V0bGluZSA9ICcnfSw1MDApXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZygnc2F2aW5nIHByb2plY3QgaXRlbScpO1xuXG4gICAgLy8gUmVtb3ZlIFNhdmUvRGlzY2FyZCBidXR0b25zXG4gICAgaXRlbS5yZW1vdmVDaGlsZChlLnRhcmdldClcbiAgICBpdGVtLnJlbW92ZUNoaWxkKGl0ZW0ucXVlcnlTZWxlY3RvcignLmRpc2NhcmQnKSlcblxuICAgIC8vIFJlcGxhY2UgaW5wdXQgd2l0aCBhY3R1YWwgcHJvamVjdCB0aXRsZVxuICAgIGhsLmluc2VydEJlZm9yZShjb21wb25lbnQuZGl2KHtjbGFzczogWydwcm9qZWN0LXRpdGxlJ10sIHRleHQ6IGlucHV0LnZhbHVlfSksaGwuZmlyc3RDaGlsZClcbiAgICBobC5yZW1vdmVDaGlsZChpbnB1dClcblxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndW5zYXZlZCcpXG5cbiAgICAvLyBBbGxvdyBidXR0b24gdG8gYWRkIHByb2plY3RzIGFnYWluXG4gICAgdG9nZ2xlQWRkaW5nKCk7XG5cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGVtcGxhdGUoZSkge1xuICAgIHRvZ2dsZUFkZGluZygpO1xuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUFkZGluZygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QucGx1cy1idXR0b24nKS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZCcpXG59XG5cbiIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vYmFzZUNvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgcGx1c0J1dHRvbiB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIlxuXG5jb25zdCBiYW5uZXIgPSBjb21wb25lbnQuZGl2KHtcbiAgICBjbGFzczogWydiYW5uZXInXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICBjb21wb25lbnQuc3Bhbih7XG4gICAgICAgICAgICBjbGFzczogWydiYW5uZXItdGV4dCddLFxuICAgICAgICAgICAgdGV4dDogJ1RvLURvIExpc3QnXG4gICAgICAgIH0pXG4gICAgXVxufSlcblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IHBsdXNCdXR0b24oJ25ldy1wcm9qZWN0JywnYWRkIG5ldyBwcm9qZWN0JylcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoe1xuICAgIGlkOiBbJ3Byb2plY3QtY29udGFpbmVyJ10sXG4gICAgY2hpbGRyZW46IFsgbmV3UHJvamVjdEJ1dHRvbiBdXG59KVxuXG5jb25zdCBzaWRlQmFySXRlbXMgPSBjb21wb25lbnQuZGl2KHtcbiAgICBpZDogJ3NpZGViYXItaXRlbXMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIGNvbXBvbmVudC5idXR0b24oe2NsYXNzOiBbJ3NpZGViYXItaXRlbSddLCB0ZXh0OiAncHJvamVjdHMnfSksXG4gICAgICAgIGNvbXBvbmVudC5idXR0b24oe2NsYXNzOiBbJ3NpZGViYXItaXRlbSddLCB0ZXh0OiAndGFncyd9KSxcbiAgICAgICAgY29tcG9uZW50LmJ1dHRvbih7Y2xhc3M6IFsnc2lkZWJhci1pdGVtJ10sIHRleHQ6ICdzZXR0aW5ncyd9KVxuICAgIF1cbn0pXG5cbmNvbnN0IHNpZGVCYXIgPSBjb21wb25lbnQuZGl2KHtcbiAgICBpZDogJ3NpZGViYXInLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIGNvbXBvbmVudC5zcGFuKHtcbiAgICAgICAgICAgIGlkOiAnc2lkZWJhci10aXRsZScsXG4gICAgICAgICAgICB0ZXh0OiAnc2lkZWJhcidcbiAgICAgICAgfSksXG4gICAgICAgIHNpZGVCYXJJdGVtc1xuICAgIF1cbn0pXG5cblxuXG5jb25zdCBtYWluQ29udGVudCA9IGNvbXBvbmVudC5kaXYoe1xuICAgIGlkOiAnbWFpbi1jb250ZW50JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICBzaWRlQmFyLFxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyXG4gICAgXVxufSlcblxuZXhwb3J0IGRlZmF1bHQgW2Jhbm5lciwgbWFpbkNvbnRlbnRdIiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9iYXNlQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgcGx1c0ltYWdlIGZyb20gXCIuL3BsdXMtc3ltYm9sLWJ1dHRvbi5wbmdcIlxuaW1wb3J0IGNoZWNrIGZyb20gJy4vY2hlY2sucG5nJ1xuaW1wb3J0IGNsb3NlIGZyb20gJy4vY2xvc2UucG5nJ1xuXG5mdW5jdGlvbiBwbHVzQnV0dG9uQmFzZSgpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmJ1dHRvbih7XG4gICAgICAgIGNsYXNzOiBbJ2NsaWNrYWJsZSddLFxuICAgICAgICBjaGlsZHJlbjogWyBjb21wb25lbnQuaW1nKHtzcmM6IHBsdXNJbWFnZX0pIF1cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGx1c0J1dHRvbiAoYUNsYXNzLHRleHQpIHsgcmV0dXJuIGNvbXBvbmVudC5kaXYoe1xuICAgIGNsYXNzOiBbYUNsYXNzLCAncGx1cy1idXR0b24nXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICBwbHVzQnV0dG9uQmFzZSgpLFxuICAgICAgICBjb21wb25lbnQuc3Bhbih7XG4gICAgICAgICAgICBjbGFzczogWydkaXNwbGF5LXRleHQnXSxcbiAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgfSlcbiAgICBdXG59KX1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUZW1wbGF0ZSAoKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5kaXYoe1xuICAgICAgICBjbGFzczogWydwcm9qZWN0LWl0ZW0nLCd1bnNhdmVkJ10sXG4gICAgICAgIGNoaWxkcmVuOiBbcHJvamVjdEl0ZW1IZWFkZXIoKSwgcHJvamVjdEl0ZW1Cb2R5KCksIHByb2plY3RTYXZlKCksIHByb2plY3REaXNjYXJkKCldXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcHJvamVjdFNhdmUoKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5pbWcoe1xuICAgICAgICBzcmM6IGNoZWNrLFxuICAgICAgICBjbGFzczogWydzYXZlJ11cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0RGlzY2FyZCgpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmltZyh7XG4gICAgICAgIHNyYzogY2xvc2UsXG4gICAgICAgIGNsYXNzOiBbJ2Rpc2NhcmQnXVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RJdGVtSGVhZGVyKCkge1xuICAgIHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgY2xhc3M6IFsnaGVhZGVyJ10sXG4gICAgICAgIGNoaWxkcmVuOiBbIHByb2plY3RIZWFkZXJMZWZ0KCksIHByb2plY3RIZWFkZXJSaWdodCgpXVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RIZWFkZXJMZWZ0KCkge1xuICAgIHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgY2xhc3M6IFsnaGVhZGVyLWxlZnQnXSxcbiAgICAgICAgY2hpbGRyZW46IFsgcHJvamVjdFRpdGxlKCksIGFkZFRhZ3NCdXR0b24oKSwgXVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RUaXRsZSgpIHtcbiAgICBsZXQgcmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJldC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICByZXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1Byb2plY3QgTmFtZScpXG4gICAgcmV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKVxuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGFkZFRhZ3NCdXR0b24oKSB7XG4gICAgcmV0dXJuIHBsdXNCdXR0b24oJ2FkZC10YWdzJywnYWRkIHRhZ3MnKVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0SGVhZGVyUmlnaHQoKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5kaXYoe1xuICAgICAgICBjbGFzczogWydoZWFkZXItcmlnaHQnXSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGNvbXBvbmVudC5kaXYoe1xuICAgICAgICAgICAgICAgIGNsYXNzOiBbJ2R1ZS1kYXRlJ10sXG4gICAgICAgICAgICAgICAgdGV4dDogJ0R1ZSBEYXRlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RJdGVtQm9keSgpIHsgcmV0dXJuIGNvbXBvbmVudC5kaXYoe1xuICAgICAgICBjbGFzczogWydib2R5J10sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgICAgICAgICBjbGFzczogWyd0YXNrLWxpc3QnXSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZGl2KHtjbGFzczogWydoZWFkZXInXSwgdGV4dDogJ1Rhc2sgTGlzdCd9KSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnVsKHtjbGFzczogWydsaXN0J119KSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmRpdih7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogWyduZXctdGFzayddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuYnV0dG9uKHt0ZXh0OiAnKyd9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnYWRkIGEgdGFzay4uLicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9TYXZlZChwcm9qZWN0KSB7XG4gICAgY29uc29sZS5sb2coJ2NvbnZlcnRpbmcgdG8gc2F2ZWQnKTtcbn0iLCIvKipcbiAqIGNocm9tYS5qcyAtIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgY29sb3IgY29udmVyc2lvbnNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxOSwgR3JlZ29yIEFpc2NoXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqXG4gKiAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG4gKiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiAzLiBUaGUgbmFtZSBHcmVnb3IgQWlzY2ggbWF5IG5vdCBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0c1xuICogZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiAqIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiAqIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRVxuICogRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgR1JFR09SIEFJU0NIIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORyxcbiAqIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZXG4gKiBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuICogTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLFxuICogRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogY2hyb21hLmpzIGluY2x1ZGVzIGNvbG9ycyBmcm9tIGNvbG9yYnJld2VyMi5vcmcsIHdoaWNoIGFyZSByZWxlYXNlZCB1bmRlclxuICogdGhlIGZvbGxvd2luZyBsaWNlbnNlOlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAwMiBDeW50aGlhIEJyZXdlciwgTWFyayBIYXJyb3dlcixcbiAqIGFuZCBUaGUgUGVubnN5bHZhbmlhIFN0YXRlIFVuaXZlcnNpdHkuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4gKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpY1xuICogbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBOYW1lZCBjb2xvcnMgYXJlIHRha2VuIGZyb20gWDExIENvbG9yIE5hbWVzLlxuICogaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8jc3ZnLWNvbG9yXG4gKlxuICogQHByZXNlcnZlXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuY2hyb21hID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBsaW1pdCQyID0gZnVuY3Rpb24gKHgsIG1pbiwgbWF4KSB7XG4gICAgICAgIGlmICggbWluID09PSB2b2lkIDAgKSBtaW49MDtcbiAgICAgICAgaWYgKCBtYXggPT09IHZvaWQgMCApIG1heD0xO1xuXG4gICAgICAgIHJldHVybiB4IDwgbWluID8gbWluIDogeCA+IG1heCA/IG1heCA6IHg7XG4gICAgfTtcblxuICAgIHZhciBsaW1pdCQxID0gbGltaXQkMjtcblxuICAgIHZhciBjbGlwX3JnYiQzID0gZnVuY3Rpb24gKHJnYikge1xuICAgICAgICByZ2IuX2NsaXBwZWQgPSBmYWxzZTtcbiAgICAgICAgcmdiLl91bmNsaXBwZWQgPSByZ2Iuc2xpY2UoMCk7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTw9MzsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA8IDMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmdiW2ldIDwgMCB8fCByZ2JbaV0gPiAyNTUpIHsgcmdiLl9jbGlwcGVkID0gdHJ1ZTsgfVxuICAgICAgICAgICAgICAgIHJnYltpXSA9IGxpbWl0JDEocmdiW2ldLCAwLCAyNTUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gbGltaXQkMShyZ2JbaV0sIDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfTtcblxuICAgIC8vIHBvcnRlZCBmcm9tIGpRdWVyeSdzICQudHlwZVxuICAgIHZhciBjbGFzc1RvVHlwZSA9IHt9O1xuICAgIGZvciAodmFyIGkkMSA9IDAsIGxpc3QkMSA9IFsnQm9vbGVhbicsICdOdW1iZXInLCAnU3RyaW5nJywgJ0Z1bmN0aW9uJywgJ0FycmF5JywgJ0RhdGUnLCAnUmVnRXhwJywgJ1VuZGVmaW5lZCcsICdOdWxsJ107IGkkMSA8IGxpc3QkMS5sZW5ndGg7IGkkMSArPSAxKSB7XG4gICAgICAgIHZhciBuYW1lID0gbGlzdCQxW2kkMV07XG5cbiAgICAgICAgY2xhc3NUb1R5cGVbKFwiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIildID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICB2YXIgdHlwZSRwID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBjbGFzc1RvVHlwZVtPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIjtcbiAgICB9O1xuXG4gICAgdmFyIHR5cGUkbyA9IHR5cGUkcDtcblxuICAgIHZhciB1bnBhY2skQiA9IGZ1bmN0aW9uIChhcmdzLCBrZXlPcmRlcikge1xuICAgICAgICBpZiAoIGtleU9yZGVyID09PSB2b2lkIDAgKSBrZXlPcmRlcj1udWxsO1xuXG4gICAgXHQvLyBpZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gMyBhcmd1bWVudHMsIHdlIHJldHVybiB0aGUgYXJndW1lbnRzXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+PSAzKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTsgfVxuICAgICAgICAvLyB3aXRoIGxlc3MgdGhhbiAzIGFyZ3Mgd2UgY2hlY2sgaWYgZmlyc3QgYXJnIGlzIG9iamVjdFxuICAgICAgICAvLyBhbmQgdXNlIHRoZSBrZXlPcmRlciBzdHJpbmcgdG8gZXh0cmFjdCBhbmQgc29ydCBwcm9wZXJ0aWVzXG4gICAgXHRpZiAodHlwZSRvKGFyZ3NbMF0pID09ICdvYmplY3QnICYmIGtleU9yZGVyKSB7XG4gICAgXHRcdHJldHVybiBrZXlPcmRlci5zcGxpdCgnJylcbiAgICBcdFx0XHQuZmlsdGVyKGZ1bmN0aW9uIChrKSB7IHJldHVybiBhcmdzWzBdW2tdICE9PSB1bmRlZmluZWQ7IH0pXG4gICAgXHRcdFx0Lm1hcChmdW5jdGlvbiAoaykgeyByZXR1cm4gYXJnc1swXVtrXTsgfSk7XG4gICAgXHR9XG4gICAgXHQvLyBvdGhlcndpc2Ugd2UganVzdCByZXR1cm4gdGhlIGZpcnN0IGFyZ3VtZW50XG4gICAgXHQvLyAod2hpY2ggd2Ugc3VwcG9zZSBpcyBhbiBhcnJheSBvZiBhcmdzKVxuICAgICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9O1xuXG4gICAgdmFyIHR5cGUkbiA9IHR5cGUkcDtcblxuICAgIHZhciBsYXN0JDQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAyKSB7IHJldHVybiBudWxsOyB9XG4gICAgICAgIHZhciBsID0gYXJncy5sZW5ndGgtMTtcbiAgICAgICAgaWYgKHR5cGUkbihhcmdzW2xdKSA9PSAnc3RyaW5nJykgeyByZXR1cm4gYXJnc1tsXS50b0xvd2VyQ2FzZSgpOyB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgUEkkMiA9IE1hdGguUEk7XG5cbiAgICB2YXIgdXRpbHMgPSB7XG4gICAgXHRjbGlwX3JnYjogY2xpcF9yZ2IkMyxcbiAgICBcdGxpbWl0OiBsaW1pdCQyLFxuICAgIFx0dHlwZTogdHlwZSRwLFxuICAgIFx0dW5wYWNrOiB1bnBhY2skQixcbiAgICBcdGxhc3Q6IGxhc3QkNCxcbiAgICBcdFBJOiBQSSQyLFxuICAgIFx0VFdPUEk6IFBJJDIqMixcbiAgICBcdFBJVEhJUkQ6IFBJJDIvMyxcbiAgICBcdERFRzJSQUQ6IFBJJDIgLyAxODAsXG4gICAgXHRSQUQyREVHOiAxODAgLyBQSSQyXG4gICAgfTtcblxuICAgIHZhciBpbnB1dCRoID0ge1xuICAgIFx0Zm9ybWF0OiB7fSxcbiAgICBcdGF1dG9kZXRlY3Q6IFtdXG4gICAgfTtcblxuICAgIHZhciBsYXN0JDMgPSB1dGlscy5sYXN0O1xuICAgIHZhciBjbGlwX3JnYiQyID0gdXRpbHMuY2xpcF9yZ2I7XG4gICAgdmFyIHR5cGUkbSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIF9pbnB1dCA9IGlucHV0JGg7XG5cbiAgICB2YXIgQ29sb3IkRCA9IGZ1bmN0aW9uIENvbG9yKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGlmICh0eXBlJG0oYXJnc1swXSkgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICBhcmdzWzBdLmNvbnN0cnVjdG9yICYmXG4gICAgICAgICAgICBhcmdzWzBdLmNvbnN0cnVjdG9yID09PSB0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAvLyB0aGUgYXJndW1lbnQgaXMgYWxyZWFkeSBhIENvbG9yIGluc3RhbmNlXG4gICAgICAgICAgICByZXR1cm4gYXJnc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxhc3QgYXJndW1lbnQgY291bGQgYmUgdGhlIG1vZGVcbiAgICAgICAgdmFyIG1vZGUgPSBsYXN0JDMoYXJncyk7XG4gICAgICAgIHZhciBhdXRvZGV0ZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFtb2RlKSB7XG4gICAgICAgICAgICBhdXRvZGV0ZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghX2lucHV0LnNvcnRlZCkge1xuICAgICAgICAgICAgICAgIF9pbnB1dC5hdXRvZGV0ZWN0ID0gX2lucHV0LmF1dG9kZXRlY3Quc29ydChmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBiLnAgLSBhLnA7IH0pO1xuICAgICAgICAgICAgICAgIF9pbnB1dC5zb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXV0by1kZXRlY3QgZm9ybWF0XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IF9pbnB1dC5hdXRvZGV0ZWN0OyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGsgPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgbW9kZSA9IGNoay50ZXN0LmFwcGx5KGNoaywgYXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUpIHsgYnJlYWs7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfaW5wdXQuZm9ybWF0W21vZGVdKSB7XG4gICAgICAgICAgICB2YXIgcmdiID0gX2lucHV0LmZvcm1hdFttb2RlXS5hcHBseShudWxsLCBhdXRvZGV0ZWN0ID8gYXJncyA6IGFyZ3Muc2xpY2UoMCwtMSkpO1xuICAgICAgICAgICAgbWUuX3JnYiA9IGNsaXBfcmdiJDIocmdiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBmb3JtYXQ6ICcrYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgYWxwaGEgY2hhbm5lbFxuICAgICAgICBpZiAobWUuX3JnYi5sZW5ndGggPT09IDMpIHsgbWUuX3JnYi5wdXNoKDEpOyB9XG4gICAgfTtcblxuICAgIENvbG9yJEQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICAgICAgICBpZiAodHlwZSRtKHRoaXMuaGV4KSA9PSAnZnVuY3Rpb24nKSB7IHJldHVybiB0aGlzLmhleCgpOyB9XG4gICAgICAgIHJldHVybiAoXCJbXCIgKyAodGhpcy5fcmdiLmpvaW4oJywnKSkgKyBcIl1cIik7XG4gICAgfTtcblxuICAgIHZhciBDb2xvcl8xID0gQ29sb3IkRDtcblxuICAgIHZhciBjaHJvbWEkayA9IGZ1bmN0aW9uICgpIHtcbiAgICBcdHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgXHR3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgXHRyZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggY2hyb21hJGsuQ29sb3IsIFsgbnVsbCBdLmNvbmNhdCggYXJncykgKSk7XG4gICAgfTtcblxuICAgIGNocm9tYSRrLkNvbG9yID0gQ29sb3JfMTtcbiAgICBjaHJvbWEkay52ZXJzaW9uID0gJzIuNC4yJztcblxuICAgIHZhciBjaHJvbWFfMSA9IGNocm9tYSRrO1xuXG4gICAgdmFyIHVucGFjayRBID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBtYXgkMiA9IE1hdGgubWF4O1xuXG4gICAgdmFyIHJnYjJjbXlrJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRBKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgciA9IHIgLyAyNTU7XG4gICAgICAgIGcgPSBnIC8gMjU1O1xuICAgICAgICBiID0gYiAvIDI1NTtcbiAgICAgICAgdmFyIGsgPSAxIC0gbWF4JDIocixtYXgkMihnLGIpKTtcbiAgICAgICAgdmFyIGYgPSBrIDwgMSA/IDEgLyAoMS1rKSA6IDA7XG4gICAgICAgIHZhciBjID0gKDEtci1rKSAqIGY7XG4gICAgICAgIHZhciBtID0gKDEtZy1rKSAqIGY7XG4gICAgICAgIHZhciB5ID0gKDEtYi1rKSAqIGY7XG4gICAgICAgIHJldHVybiBbYyxtLHksa107XG4gICAgfTtcblxuICAgIHZhciByZ2IyY215a18xID0gcmdiMmNteWskMTtcblxuICAgIHZhciB1bnBhY2skeiA9IHV0aWxzLnVucGFjaztcblxuICAgIHZhciBjbXlrMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJHooYXJncywgJ2NteWsnKTtcbiAgICAgICAgdmFyIGMgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgbSA9IGFyZ3NbMV07XG4gICAgICAgIHZhciB5ID0gYXJnc1syXTtcbiAgICAgICAgdmFyIGsgPSBhcmdzWzNdO1xuICAgICAgICB2YXIgYWxwaGEgPSBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogMTtcbiAgICAgICAgaWYgKGsgPT09IDEpIHsgcmV0dXJuIFswLDAsMCxhbHBoYV07IH1cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGMgPj0gMSA/IDAgOiAyNTUgKiAoMS1jKSAqICgxLWspLCAvLyByXG4gICAgICAgICAgICBtID49IDEgPyAwIDogMjU1ICogKDEtbSkgKiAoMS1rKSwgLy8gZ1xuICAgICAgICAgICAgeSA+PSAxID8gMCA6IDI1NSAqICgxLXkpICogKDEtayksIC8vIGJcbiAgICAgICAgICAgIGFscGhhXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIHZhciBjbXlrMnJnYl8xID0gY215azJyZ2I7XG5cbiAgICB2YXIgY2hyb21hJGogPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkQyA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JGcgPSBpbnB1dCRoO1xuICAgIHZhciB1bnBhY2skeSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRsID0gdXRpbHMudHlwZTtcblxuICAgIHZhciByZ2IyY215ayA9IHJnYjJjbXlrXzE7XG5cbiAgICBDb2xvciRDLnByb3RvdHlwZS5jbXlrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyY215ayh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkai5jbXlrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRDLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnY215ayddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkZy5mb3JtYXQuY215ayA9IGNteWsycmdiXzE7XG5cbiAgICBpbnB1dCRnLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJHkoYXJncywgJ2NteWsnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGwoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NteWsnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJHggPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxhc3QkMiA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIHJuZCA9IGZ1bmN0aW9uIChhKSB7IHJldHVybiBNYXRoLnJvdW5kKGEqMTAwKS8xMDA7IH07XG5cbiAgICAvKlxuICAgICAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gICAgICogLSBoc2wyY3NzKGgscyxsKVxuICAgICAqIC0gaHNsMmNzcyhoLHMsbCxhKVxuICAgICAqIC0gaHNsMmNzcyhbaCxzLGxdLCBtb2RlKVxuICAgICAqIC0gaHNsMmNzcyhbaCxzLGwsYV0sIG1vZGUpXG4gICAgICogLSBoc2wyY3NzKHtoLHMsbCxhfSwgbW9kZSlcbiAgICAgKi9cbiAgICB2YXIgaHNsMmNzcyQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciBoc2xhID0gdW5wYWNrJHgoYXJncywgJ2hzbGEnKTtcbiAgICAgICAgdmFyIG1vZGUgPSBsYXN0JDIoYXJncykgfHwgJ2xzYSc7XG4gICAgICAgIGhzbGFbMF0gPSBybmQoaHNsYVswXSB8fCAwKTtcbiAgICAgICAgaHNsYVsxXSA9IHJuZChoc2xhWzFdKjEwMCkgKyAnJSc7XG4gICAgICAgIGhzbGFbMl0gPSBybmQoaHNsYVsyXSoxMDApICsgJyUnO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ2hzbGEnIHx8IChoc2xhLmxlbmd0aCA+IDMgJiYgaHNsYVszXTwxKSkge1xuICAgICAgICAgICAgaHNsYVszXSA9IGhzbGEubGVuZ3RoID4gMyA/IGhzbGFbM10gOiAxO1xuICAgICAgICAgICAgbW9kZSA9ICdoc2xhJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhzbGEubGVuZ3RoID0gMztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG1vZGUgKyBcIihcIiArIChoc2xhLmpvaW4oJywnKSkgKyBcIilcIik7XG4gICAgfTtcblxuICAgIHZhciBoc2wyY3NzXzEgPSBoc2wyY3NzJDE7XG5cbiAgICB2YXIgdW5wYWNrJHcgPSB1dGlscy51bnBhY2s7XG5cbiAgICAvKlxuICAgICAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gICAgICogLSByZ2IyaHNsKHIsZyxiKVxuICAgICAqIC0gcmdiMmhzbChyLGcsYixhKVxuICAgICAqIC0gcmdiMmhzbChbcixnLGJdKVxuICAgICAqIC0gcmdiMmhzbChbcixnLGIsYV0pXG4gICAgICogLSByZ2IyaHNsKHtyLGcsYixhfSlcbiAgICAgKi9cbiAgICB2YXIgcmdiMmhzbCQzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skdyhhcmdzLCAncmdiYScpO1xuICAgICAgICB2YXIgciA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBnID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuXG4gICAgICAgIHIgLz0gMjU1O1xuICAgICAgICBnIC89IDI1NTtcbiAgICAgICAgYiAvPSAyNTU7XG5cbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cbiAgICAgICAgdmFyIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gICAgICAgIHZhciBzLCBoO1xuXG4gICAgICAgIGlmIChtYXggPT09IG1pbil7XG4gICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcyA9IGwgPCAwLjUgPyAobWF4IC0gbWluKSAvIChtYXggKyBtaW4pIDogKG1heCAtIG1pbikgLyAoMiAtIG1heCAtIG1pbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAociA9PSBtYXgpIHsgaCA9IChnIC0gYikgLyAobWF4IC0gbWluKTsgfVxuICAgICAgICBlbHNlIGlmIChnID09IG1heCkgeyBoID0gMiArIChiIC0gcikgLyAobWF4IC0gbWluKTsgfVxuICAgICAgICBlbHNlIGlmIChiID09IG1heCkgeyBoID0gNCArIChyIC0gZykgLyAobWF4IC0gbWluKTsgfVxuXG4gICAgICAgIGggKj0gNjA7XG4gICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICBpZiAoYXJncy5sZW5ndGg+MyAmJiBhcmdzWzNdIT09dW5kZWZpbmVkKSB7IHJldHVybiBbaCxzLGwsYXJnc1szXV07IH1cbiAgICAgICAgcmV0dXJuIFtoLHMsbF07XG4gICAgfTtcblxuICAgIHZhciByZ2IyaHNsXzEgPSByZ2IyaHNsJDM7XG5cbiAgICB2YXIgdW5wYWNrJHYgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxhc3QkMSA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIGhzbDJjc3MgPSBoc2wyY3NzXzE7XG4gICAgdmFyIHJnYjJoc2wkMiA9IHJnYjJoc2xfMTtcbiAgICB2YXIgcm91bmQkNiA9IE1hdGgucm91bmQ7XG5cbiAgICAvKlxuICAgICAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gICAgICogLSByZ2IyY3NzKHIsZyxiKVxuICAgICAqIC0gcmdiMmNzcyhyLGcsYixhKVxuICAgICAqIC0gcmdiMmNzcyhbcixnLGJdLCBtb2RlKVxuICAgICAqIC0gcmdiMmNzcyhbcixnLGIsYV0sIG1vZGUpXG4gICAgICogLSByZ2IyY3NzKHtyLGcsYixhfSwgbW9kZSlcbiAgICAgKi9cbiAgICB2YXIgcmdiMmNzcyQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2JhID0gdW5wYWNrJHYoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgdmFyIG1vZGUgPSBsYXN0JDEoYXJncykgfHwgJ3JnYic7XG4gICAgICAgIGlmIChtb2RlLnN1YnN0cigwLDMpID09ICdoc2wnKSB7XG4gICAgICAgICAgICByZXR1cm4gaHNsMmNzcyhyZ2IyaHNsJDIocmdiYSksIG1vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJnYmFbMF0gPSByb3VuZCQ2KHJnYmFbMF0pO1xuICAgICAgICByZ2JhWzFdID0gcm91bmQkNihyZ2JhWzFdKTtcbiAgICAgICAgcmdiYVsyXSA9IHJvdW5kJDYocmdiYVsyXSk7XG4gICAgICAgIGlmIChtb2RlID09PSAncmdiYScgfHwgKHJnYmEubGVuZ3RoID4gMyAmJiByZ2JhWzNdPDEpKSB7XG4gICAgICAgICAgICByZ2JhWzNdID0gcmdiYS5sZW5ndGggPiAzID8gcmdiYVszXSA6IDE7XG4gICAgICAgICAgICBtb2RlID0gJ3JnYmEnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobW9kZSArIFwiKFwiICsgKHJnYmEuc2xpY2UoMCxtb2RlPT09J3JnYic/Mzo0KS5qb2luKCcsJykpICsgXCIpXCIpO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmNzc18xID0gcmdiMmNzcyQxO1xuXG4gICAgdmFyIHVucGFjayR1ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciByb3VuZCQ1ID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciBoc2wycmdiJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhc3NpZ247XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgICAgYXJncyA9IHVucGFjayR1KGFyZ3MsICdoc2wnKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBsID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgciA9IGcgPSBiID0gbCoyNTU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdDMgPSBbMCwwLDBdO1xuICAgICAgICAgICAgdmFyIGMgPSBbMCwwLDBdO1xuICAgICAgICAgICAgdmFyIHQyID0gbCA8IDAuNSA/IGwgKiAoMStzKSA6IGwrcy1sKnM7XG4gICAgICAgICAgICB2YXIgdDEgPSAyICogbCAtIHQyO1xuICAgICAgICAgICAgdmFyIGhfID0gaCAvIDM2MDtcbiAgICAgICAgICAgIHQzWzBdID0gaF8gKyAxLzM7XG4gICAgICAgICAgICB0M1sxXSA9IGhfO1xuICAgICAgICAgICAgdDNbMl0gPSBoXyAtIDEvMztcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodDNbaV0gPCAwKSB7IHQzW2ldICs9IDE7IH1cbiAgICAgICAgICAgICAgICBpZiAodDNbaV0gPiAxKSB7IHQzW2ldIC09IDE7IH1cbiAgICAgICAgICAgICAgICBpZiAoNiAqIHQzW2ldIDwgMSlcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDNbaV07IH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgyICogdDNbaV0gPCAxKVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MjsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKDMgKiB0M1tpXSA8IDIpXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQxICsgKHQyIC0gdDEpICogKCgyIC8gMykgLSB0M1tpXSkgKiA2OyB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGFzc2lnbiA9IFtyb3VuZCQ1KGNbMF0qMjU1KSxyb3VuZCQ1KGNbMV0qMjU1KSxyb3VuZCQ1KGNbMl0qMjU1KV0sIHIgPSBhc3NpZ25bMF0sIGcgPSBhc3NpZ25bMV0sIGIgPSBhc3NpZ25bMl0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgYWxwaGEgY2hhbm5lbFxuICAgICAgICAgICAgcmV0dXJuIFtyLGcsYixhcmdzWzNdXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgIH07XG5cbiAgICB2YXIgaHNsMnJnYl8xID0gaHNsMnJnYiQxO1xuXG4gICAgdmFyIGhzbDJyZ2IgPSBoc2wycmdiXzE7XG4gICAgdmFyIGlucHV0JGYgPSBpbnB1dCRoO1xuXG4gICAgdmFyIFJFX1JHQiA9IC9ecmdiXFwoXFxzKigtP1xcZCspLFxccyooLT9cXGQrKVxccyosXFxzKigtP1xcZCspXFxzKlxcKSQvO1xuICAgIHZhciBSRV9SR0JBID0gL15yZ2JhXFwoXFxzKigtP1xcZCspLFxccyooLT9cXGQrKVxccyosXFxzKigtP1xcZCspXFxzKixcXHMqKFswMV18WzAxXT9cXC5cXGQrKVxcKSQvO1xuICAgIHZhciBSRV9SR0JfUENUID0gL15yZ2JcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqXFwpJC87XG4gICAgdmFyIFJFX1JHQkFfUENUID0gL15yZ2JhXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJSxcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKFswMV18WzAxXT9cXC5cXGQrKVxcKSQvO1xuICAgIHZhciBSRV9IU0wgPSAvXmhzbFxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSxcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKlxcKSQvO1xuICAgIHZhciBSRV9IU0xBID0gL15oc2xhXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooWzAxXXxbMDFdP1xcLlxcZCspXFwpJC87XG5cbiAgICB2YXIgcm91bmQkNCA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgY3NzMnJnYiQxID0gZnVuY3Rpb24gKGNzcykge1xuICAgICAgICBjc3MgPSBjc3MudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgICAgIHZhciBtO1xuXG4gICAgICAgIGlmIChpbnB1dCRmLmZvcm1hdC5uYW1lZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQkZi5mb3JtYXQubmFtZWQoY3NzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJnYigyNTAsMjAsMClcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQikpKSB7XG4gICAgICAgICAgICB2YXIgcmdiID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPDM7IGkrKykge1xuICAgICAgICAgICAgICAgIHJnYltpXSA9ICtyZ2JbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZ2JbM10gPSAxOyAgLy8gZGVmYXVsdCBhbHBoYVxuICAgICAgICAgICAgcmV0dXJuIHJnYjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJnYmEoMjUwLDIwLDAsMC40KVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCQSkpKSB7XG4gICAgICAgICAgICB2YXIgcmdiJDEgPSBtLnNsaWNlKDEsNSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDE9MDsgaSQxPDQ7IGkkMSsrKSB7XG4gICAgICAgICAgICAgICAgcmdiJDFbaSQxXSA9ICtyZ2IkMVtpJDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJnYiQxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiKDEwMCUsMCUsMCUpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0JfUENUKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IkMiA9IG0uc2xpY2UoMSw0KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMj0wOyBpJDI8MzsgaSQyKyspIHtcbiAgICAgICAgICAgICAgICByZ2IkMltpJDJdID0gcm91bmQkNChyZ2IkMltpJDJdICogMi41NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZ2IkMlszXSA9IDE7ICAvLyBkZWZhdWx0IGFscGhhXG4gICAgICAgICAgICByZXR1cm4gcmdiJDI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2JhKDEwMCUsMCUsMCUsMC40KVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCQV9QQ1QpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiQzID0gbS5zbGljZSgxLDUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQzPTA7IGkkMzwzOyBpJDMrKykge1xuICAgICAgICAgICAgICAgIHJnYiQzW2kkM10gPSByb3VuZCQ0KHJnYiQzW2kkM10gKiAyLjU1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJnYiQzWzNdID0gK3JnYiQzWzNdO1xuICAgICAgICAgICAgcmV0dXJuIHJnYiQzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHNsKDAsMTAwJSw1MCUpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9IU0wpKSkge1xuICAgICAgICAgICAgdmFyIGhzbCA9IG0uc2xpY2UoMSw0KTtcbiAgICAgICAgICAgIGhzbFsxXSAqPSAwLjAxO1xuICAgICAgICAgICAgaHNsWzJdICo9IDAuMDE7XG4gICAgICAgICAgICB2YXIgcmdiJDQgPSBoc2wycmdiKGhzbCk7XG4gICAgICAgICAgICByZ2IkNFszXSA9IDE7XG4gICAgICAgICAgICByZXR1cm4gcmdiJDQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoc2xhKDAsMTAwJSw1MCUsMC41KVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfSFNMQSkpKSB7XG4gICAgICAgICAgICB2YXIgaHNsJDEgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBoc2wkMVsxXSAqPSAwLjAxO1xuICAgICAgICAgICAgaHNsJDFbMl0gKj0gMC4wMTtcbiAgICAgICAgICAgIHZhciByZ2IkNSA9IGhzbDJyZ2IoaHNsJDEpO1xuICAgICAgICAgICAgcmdiJDVbM10gPSArbVs0XTsgIC8vIGRlZmF1bHQgYWxwaGEgPSAxXG4gICAgICAgICAgICByZXR1cm4gcmdiJDU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY3NzMnJnYiQxLnRlc3QgPSBmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gUkVfUkdCLnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX1JHQkEudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfUkdCX1BDVC50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9SR0JBX1BDVC50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9IU0wudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfSFNMQS50ZXN0KHMpO1xuICAgIH07XG5cbiAgICB2YXIgY3NzMnJnYl8xID0gY3NzMnJnYiQxO1xuXG4gICAgdmFyIGNocm9tYSRpID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJEIgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCRlID0gaW5wdXQkaDtcbiAgICB2YXIgdHlwZSRrID0gdXRpbHMudHlwZTtcblxuICAgIHZhciByZ2IyY3NzID0gcmdiMmNzc18xO1xuICAgIHZhciBjc3MycmdiID0gY3NzMnJnYl8xO1xuXG4gICAgQ29sb3IkQi5wcm90b3R5cGUuY3NzID0gZnVuY3Rpb24obW9kZSkge1xuICAgICAgICByZXR1cm4gcmdiMmNzcyh0aGlzLl9yZ2IsIG1vZGUpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkaS5jc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJEIsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydjc3MnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JGUuZm9ybWF0LmNzcyA9IGNzczJyZ2I7XG5cbiAgICBpbnB1dCRlLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDUsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN0Lmxlbmd0aCAmJiB0eXBlJGsoaCkgPT09ICdzdHJpbmcnICYmIGNzczJyZ2IudGVzdChoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnY3NzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIENvbG9yJEEgPSBDb2xvcl8xO1xuICAgIHZhciBjaHJvbWEkaCA9IGNocm9tYV8xO1xuICAgIHZhciBpbnB1dCRkID0gaW5wdXQkaDtcbiAgICB2YXIgdW5wYWNrJHQgPSB1dGlscy51bnBhY2s7XG5cbiAgICBpbnB1dCRkLmZvcm1hdC5nbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmdiID0gdW5wYWNrJHQoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgcmdiWzBdICo9IDI1NTtcbiAgICAgICAgcmdiWzFdICo9IDI1NTtcbiAgICAgICAgcmdiWzJdICo9IDI1NTtcbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9O1xuXG4gICAgY2hyb21hJGguZ2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJEEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydnbCddKSApKTtcbiAgICB9O1xuXG4gICAgQ29sb3IkQS5wcm90b3R5cGUuZ2wgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJnYiA9IHRoaXMuX3JnYjtcbiAgICAgICAgcmV0dXJuIFtyZ2JbMF0vMjU1LCByZ2JbMV0vMjU1LCByZ2JbMl0vMjU1LCByZ2JbM11dO1xuICAgIH07XG5cbiAgICB2YXIgdW5wYWNrJHMgPSB1dGlscy51bnBhY2s7XG5cbiAgICB2YXIgcmdiMmhjZyQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skcyhhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgICAgICB2YXIgZGVsdGEgPSBtYXggLSBtaW47XG4gICAgICAgIHZhciBjID0gZGVsdGEgKiAxMDAgLyAyNTU7XG4gICAgICAgIHZhciBfZyA9IG1pbiAvICgyNTUgLSBkZWx0YSkgKiAxMDA7XG4gICAgICAgIHZhciBoO1xuICAgICAgICBpZiAoZGVsdGEgPT09IDApIHtcbiAgICAgICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHIgPT09IG1heCkgeyBoID0gKGcgLSBiKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoZyA9PT0gbWF4KSB7IGggPSAyKyhiIC0gcikgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaWYgKGIgPT09IG1heCkgeyBoID0gNCsociAtIGcpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGggKj0gNjA7XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2gsIGMsIF9nXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoY2dfMSA9IHJnYjJoY2ckMTtcblxuICAgIHZhciB1bnBhY2skciA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgZmxvb3IkMyA9IE1hdGguZmxvb3I7XG5cbiAgICAvKlxuICAgICAqIHRoaXMgaXMgYmFzaWNhbGx5IGp1c3QgSFNWIHdpdGggc29tZSBtaW5vciB0d2Vha3NcbiAgICAgKlxuICAgICAqIGh1ZS4uIFswLi4zNjBdXG4gICAgICogY2hyb21hIC4uIFswLi4xXVxuICAgICAqIGdyYXluZXNzIC4uIFswLi4xXVxuICAgICAqL1xuXG4gICAgdmFyIGhjZzJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxLCBhc3NpZ24kMiwgYXNzaWduJDMsIGFzc2lnbiQ0LCBhc3NpZ24kNTtcblxuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuICAgICAgICBhcmdzID0gdW5wYWNrJHIoYXJncywgJ2hjZycpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBjID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIF9nID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICBfZyA9IF9nICogMjU1O1xuICAgICAgICB2YXIgX2MgPSBjICogMjU1O1xuICAgICAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgICAgICAgciA9IGcgPSBiID0gX2c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaCA9PT0gMzYwKSB7IGggPSAwOyB9XG4gICAgICAgICAgICBpZiAoaCA+IDM2MCkgeyBoIC09IDM2MDsgfVxuICAgICAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgICAgICBoIC89IDYwO1xuICAgICAgICAgICAgdmFyIGkgPSBmbG9vciQzKGgpO1xuICAgICAgICAgICAgdmFyIGYgPSBoIC0gaTtcbiAgICAgICAgICAgIHZhciBwID0gX2cgKiAoMSAtIGMpO1xuICAgICAgICAgICAgdmFyIHEgPSBwICsgX2MgKiAoMSAtIGYpO1xuICAgICAgICAgICAgdmFyIHQgPSBwICsgX2MgKiBmO1xuICAgICAgICAgICAgdmFyIHYgPSBwICsgX2M7XG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IChhc3NpZ24gPSBbdiwgdCwgcF0sIHIgPSBhc3NpZ25bMF0sIGcgPSBhc3NpZ25bMV0sIGIgPSBhc3NpZ25bMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMTogKGFzc2lnbiQxID0gW3EsIHYsIHBdLCByID0gYXNzaWduJDFbMF0sIGcgPSBhc3NpZ24kMVsxXSwgYiA9IGFzc2lnbiQxWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDI6IChhc3NpZ24kMiA9IFtwLCB2LCB0XSwgciA9IGFzc2lnbiQyWzBdLCBnID0gYXNzaWduJDJbMV0sIGIgPSBhc3NpZ24kMlsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzOiAoYXNzaWduJDMgPSBbcCwgcSwgdl0sIHIgPSBhc3NpZ24kM1swXSwgZyA9IGFzc2lnbiQzWzFdLCBiID0gYXNzaWduJDNbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNDogKGFzc2lnbiQ0ID0gW3QsIHAsIHZdLCByID0gYXNzaWduJDRbMF0sIGcgPSBhc3NpZ24kNFsxXSwgYiA9IGFzc2lnbiQ0WzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IChhc3NpZ24kNSA9IFt2LCBwLCBxXSwgciA9IGFzc2lnbiQ1WzBdLCBnID0gYXNzaWduJDVbMV0sIGIgPSBhc3NpZ24kNVsyXSk7IGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciBoY2cycmdiXzEgPSBoY2cycmdiO1xuXG4gICAgdmFyIHVucGFjayRxID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGogPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkZyA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR6ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkYyA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmhjZyA9IHJnYjJoY2dfMTtcblxuICAgIENvbG9yJHoucHJvdG90eXBlLmhjZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmhjZyh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkZy5oY2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHosIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoY2cnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JGMuZm9ybWF0LmhjZyA9IGhjZzJyZ2JfMTtcblxuICAgIGlucHV0JGMuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skcShhcmdzLCAnaGNnJyk7XG4gICAgICAgICAgICBpZiAodHlwZSRqKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoY2cnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJHAgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxhc3QgPSB1dGlscy5sYXN0O1xuICAgIHZhciByb3VuZCQzID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciByZ2IyaGV4JDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRwKGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciBhID0gcmVmWzNdO1xuICAgICAgICB2YXIgbW9kZSA9IGxhc3QoYXJncykgfHwgJ2F1dG8nO1xuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7IGEgPSAxOyB9XG4gICAgICAgIGlmIChtb2RlID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgIG1vZGUgPSBhIDwgMSA/ICdyZ2JhJyA6ICdyZ2InO1xuICAgICAgICB9XG4gICAgICAgIHIgPSByb3VuZCQzKHIpO1xuICAgICAgICBnID0gcm91bmQkMyhnKTtcbiAgICAgICAgYiA9IHJvdW5kJDMoYik7XG4gICAgICAgIHZhciB1ID0gciA8PCAxNiB8IGcgPDwgOCB8IGI7XG4gICAgICAgIHZhciBzdHIgPSBcIjAwMDAwMFwiICsgdS50b1N0cmluZygxNik7IC8vIy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSA2KTtcbiAgICAgICAgdmFyIGh4YSA9ICcwJyArIHJvdW5kJDMoYSAqIDI1NSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBoeGEgPSBoeGEuc3Vic3RyKGh4YS5sZW5ndGggLSAyKTtcbiAgICAgICAgc3dpdGNoIChtb2RlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JnYmEnOiByZXR1cm4gKFwiI1wiICsgc3RyICsgaHhhKTtcbiAgICAgICAgICAgIGNhc2UgJ2FyZ2InOiByZXR1cm4gKFwiI1wiICsgaHhhICsgc3RyKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAoXCIjXCIgKyBzdHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZ2IyaGV4XzEgPSByZ2IyaGV4JDI7XG5cbiAgICB2YXIgUkVfSEVYID0gL14jPyhbQS1GYS1mMC05XXs2fXxbQS1GYS1mMC05XXszfSkkLztcbiAgICB2YXIgUkVfSEVYQSA9IC9eIz8oW0EtRmEtZjAtOV17OH18W0EtRmEtZjAtOV17NH0pJC87XG5cbiAgICB2YXIgaGV4MnJnYiQxID0gZnVuY3Rpb24gKGhleCkge1xuICAgICAgICBpZiAoaGV4Lm1hdGNoKFJFX0hFWCkpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvcHRpb25hbCBsZWFkaW5nICNcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA0IHx8IGhleC5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXhwYW5kIHNob3J0LW5vdGF0aW9uIHRvIGZ1bGwgc2l4LWRpZ2l0XG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGhleCA9IGhleC5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4WzBdK2hleFswXStoZXhbMV0raGV4WzFdK2hleFsyXStoZXhbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdSA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgICAgICAgdmFyIHIgPSB1ID4+IDE2O1xuICAgICAgICAgICAgdmFyIGcgPSB1ID4+IDggJiAweEZGO1xuICAgICAgICAgICAgdmFyIGIgPSB1ICYgMHhGRjtcbiAgICAgICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXRjaCByZ2JhIGhleCBmb3JtYXQsIGVnICNGRjAwMDA3N1xuICAgICAgICBpZiAoaGV4Lm1hdGNoKFJFX0hFWEEpKSB7XG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNSB8fCBoZXgubGVuZ3RoID09PSA5KSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG9wdGlvbmFsIGxlYWRpbmcgI1xuICAgICAgICAgICAgICAgIGhleCA9IGhleC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBleHBhbmQgc2hvcnQtbm90YXRpb24gdG8gZnVsbCBlaWdodC1kaWdpdFxuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgIGhleCA9IGhleFswXStoZXhbMF0raGV4WzFdK2hleFsxXStoZXhbMl0raGV4WzJdK2hleFszXStoZXhbM107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdSQxID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICAgICAgICB2YXIgciQxID0gdSQxID4+IDI0ICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBnJDEgPSB1JDEgPj4gMTYgJiAweEZGO1xuICAgICAgICAgICAgdmFyIGIkMSA9IHUkMSA+PiA4ICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBhID0gTWF0aC5yb3VuZCgodSQxICYgMHhGRikgLyAweEZGICogMTAwKSAvIDEwMDtcbiAgICAgICAgICAgIHJldHVybiBbciQxLGckMSxiJDEsYV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSB1c2VkIHRvIGNoZWNrIGZvciBjc3MgY29sb3JzIGhlcmVcbiAgICAgICAgLy8gaWYgX2lucHV0LmNzcz8gYW5kIHJnYiA9IF9pbnB1dC5jc3MgaGV4XG4gICAgICAgIC8vICAgICByZXR1cm4gcmdiXG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcInVua25vd24gaGV4IGNvbG9yOiBcIiArIGhleCkpO1xuICAgIH07XG5cbiAgICB2YXIgaGV4MnJnYl8xID0gaGV4MnJnYiQxO1xuXG4gICAgdmFyIGNocm9tYSRmID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHkgPSBDb2xvcl8xO1xuICAgIHZhciB0eXBlJGkgPSB1dGlscy50eXBlO1xuICAgIHZhciBpbnB1dCRiID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IyaGV4JDEgPSByZ2IyaGV4XzE7XG5cbiAgICBDb2xvciR5LnByb3RvdHlwZS5oZXggPSBmdW5jdGlvbihtb2RlKSB7XG4gICAgICAgIHJldHVybiByZ2IyaGV4JDEodGhpcy5fcmdiLCBtb2RlKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGYuaGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR5LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaGV4J10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCRiLmZvcm1hdC5oZXggPSBoZXgycmdiXzE7XG4gICAgaW5wdXQkYi5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiA0LFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoaCkge1xuICAgICAgICAgICAgdmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tID4gMCApIHJlc3RbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgICAgICAgICAgIGlmICghcmVzdC5sZW5ndGggJiYgdHlwZSRpKGgpID09PSAnc3RyaW5nJyAmJiBbMyw0LDUsNiw3LDgsOV0uaW5kZXhPZihoLmxlbmd0aCkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaGV4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayRvID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBUV09QSSQyID0gdXRpbHMuVFdPUEk7XG4gICAgdmFyIG1pbiQyID0gTWF0aC5taW47XG4gICAgdmFyIHNxcnQkNCA9IE1hdGguc3FydDtcbiAgICB2YXIgYWNvcyA9IE1hdGguYWNvcztcblxuICAgIHZhciByZ2IyaHNpJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLypcbiAgICAgICAgYm9ycm93ZWQgZnJvbSBoZXJlOlxuICAgICAgICBodHRwOi8vaHVtbWVyLnN0YW5mb3JkLmVkdS9tdXNlaW5mby9kb2MvZXhhbXBsZXMvaHVtZHJ1bS9rZXlzY2FwZTIvcmdiMmhzaS5jcHBcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRvKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgciAvPSAyNTU7XG4gICAgICAgIGcgLz0gMjU1O1xuICAgICAgICBiIC89IDI1NTtcbiAgICAgICAgdmFyIGg7XG4gICAgICAgIHZhciBtaW5fID0gbWluJDIocixnLGIpO1xuICAgICAgICB2YXIgaSA9IChyK2crYikgLyAzO1xuICAgICAgICB2YXIgcyA9IGkgPiAwID8gMSAtIG1pbl8vaSA6IDA7XG4gICAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgICAgICBoID0gTmFOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaCA9ICgoci1nKSsoci1iKSkgLyAyO1xuICAgICAgICAgICAgaCAvPSBzcXJ0JDQoKHItZykqKHItZykgKyAoci1iKSooZy1iKSk7XG4gICAgICAgICAgICBoID0gYWNvcyhoKTtcbiAgICAgICAgICAgIGlmIChiID4gZykge1xuICAgICAgICAgICAgICAgIGggPSBUV09QSSQyIC0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGggLz0gVFdPUEkkMjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2gqMzYwLHMsaV07XG4gICAgfTtcblxuICAgIHZhciByZ2IyaHNpXzEgPSByZ2IyaHNpJDE7XG5cbiAgICB2YXIgdW5wYWNrJG4gPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxpbWl0ID0gdXRpbHMubGltaXQ7XG4gICAgdmFyIFRXT1BJJDEgPSB1dGlscy5UV09QSTtcbiAgICB2YXIgUElUSElSRCA9IHV0aWxzLlBJVEhJUkQ7XG4gICAgdmFyIGNvcyQ0ID0gTWF0aC5jb3M7XG5cbiAgICAvKlxuICAgICAqIGh1ZSBbMC4uMzYwXVxuICAgICAqIHNhdHVyYXRpb24gWzAuLjFdXG4gICAgICogaW50ZW5zaXR5IFswLi4xXVxuICAgICAqL1xuICAgIHZhciBoc2kycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIC8qXG4gICAgICAgIGJvcnJvd2VkIGZyb20gaGVyZTpcbiAgICAgICAgaHR0cDovL2h1bW1lci5zdGFuZm9yZC5lZHUvbXVzZWluZm8vZG9jL2V4YW1wbGVzL2h1bWRydW0va2V5c2NhcGUyL2hzaTJyZ2IuY3BwXG4gICAgICAgICovXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skbihhcmdzLCAnaHNpJyk7XG4gICAgICAgIHZhciBoID0gYXJnc1swXTtcbiAgICAgICAgdmFyIHMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgaSA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByLGcsYjtcblxuICAgICAgICBpZiAoaXNOYU4oaCkpIHsgaCA9IDA7IH1cbiAgICAgICAgaWYgKGlzTmFOKHMpKSB7IHMgPSAwOyB9XG4gICAgICAgIC8vIG5vcm1hbGl6ZSBodWVcbiAgICAgICAgaWYgKGggPiAzNjApIHsgaCAtPSAzNjA7IH1cbiAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgIGggLz0gMzYwO1xuICAgICAgICBpZiAoaCA8IDEvMykge1xuICAgICAgICAgICAgYiA9ICgxLXMpLzM7XG4gICAgICAgICAgICByID0gKDErcypjb3MkNChUV09QSSQxKmgpL2NvcyQ0KFBJVEhJUkQtVFdPUEkkMSpoKSkvMztcbiAgICAgICAgICAgIGcgPSAxIC0gKGIrcik7XG4gICAgICAgIH0gZWxzZSBpZiAoaCA8IDIvMykge1xuICAgICAgICAgICAgaCAtPSAxLzM7XG4gICAgICAgICAgICByID0gKDEtcykvMztcbiAgICAgICAgICAgIGcgPSAoMStzKmNvcyQ0KFRXT1BJJDEqaCkvY29zJDQoUElUSElSRC1UV09QSSQxKmgpKS8zO1xuICAgICAgICAgICAgYiA9IDEgLSAocitnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGggLT0gMi8zO1xuICAgICAgICAgICAgZyA9ICgxLXMpLzM7XG4gICAgICAgICAgICBiID0gKDErcypjb3MkNChUV09QSSQxKmgpL2NvcyQ0KFBJVEhJUkQtVFdPUEkkMSpoKSkvMztcbiAgICAgICAgICAgIHIgPSAxIC0gKGcrYik7XG4gICAgICAgIH1cbiAgICAgICAgciA9IGxpbWl0KGkqciozKTtcbiAgICAgICAgZyA9IGxpbWl0KGkqZyozKTtcbiAgICAgICAgYiA9IGxpbWl0KGkqYiozKTtcbiAgICAgICAgcmV0dXJuIFtyKjI1NSwgZyoyNTUsIGIqMjU1LCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciBoc2kycmdiXzEgPSBoc2kycmdiO1xuXG4gICAgdmFyIHVucGFjayRtID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGggPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkZSA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR4ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkYSA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmhzaSA9IHJnYjJoc2lfMTtcblxuICAgIENvbG9yJHgucHJvdG90eXBlLmhzaSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmhzaSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkZS5oc2kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHgsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoc2knXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JGEuZm9ybWF0LmhzaSA9IGhzaTJyZ2JfMTtcblxuICAgIGlucHV0JGEuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skbShhcmdzLCAnaHNpJyk7XG4gICAgICAgICAgICBpZiAodHlwZSRoKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoc2knO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJGwgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkZyA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRkID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHcgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQ5ID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IyaHNsJDEgPSByZ2IyaHNsXzE7XG5cbiAgICBDb2xvciR3LnByb3RvdHlwZS5oc2wgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoc2wkMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkZC5oc2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHcsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoc2wnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDkuZm9ybWF0LmhzbCA9IGhzbDJyZ2JfMTtcblxuICAgIGlucHV0JDkuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skbChhcmdzLCAnaHNsJyk7XG4gICAgICAgICAgICBpZiAodHlwZSRnKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoc2wnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJGsgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIG1pbiQxID0gTWF0aC5taW47XG4gICAgdmFyIG1heCQxID0gTWF0aC5tYXg7XG5cbiAgICAvKlxuICAgICAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gICAgICogLSByZ2IyaHN2KHIsZyxiKVxuICAgICAqIC0gcmdiMmhzdihbcixnLGJdKVxuICAgICAqIC0gcmdiMmhzdih7cixnLGJ9KVxuICAgICAqL1xuICAgIHZhciByZ2IyaHNsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skayhhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGcgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG4gICAgICAgIHZhciBtaW5fID0gbWluJDEociwgZywgYik7XG4gICAgICAgIHZhciBtYXhfID0gbWF4JDEociwgZywgYik7XG4gICAgICAgIHZhciBkZWx0YSA9IG1heF8gLSBtaW5fO1xuICAgICAgICB2YXIgaCxzLHY7XG4gICAgICAgIHYgPSBtYXhfIC8gMjU1LjA7XG4gICAgICAgIGlmIChtYXhfID09PSAwKSB7XG4gICAgICAgICAgICBoID0gTnVtYmVyLk5hTjtcbiAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcyA9IGRlbHRhIC8gbWF4XztcbiAgICAgICAgICAgIGlmIChyID09PSBtYXhfKSB7IGggPSAoZyAtIGIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChnID09PSBtYXhfKSB7IGggPSAyKyhiIC0gcikgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaWYgKGIgPT09IG1heF8pIHsgaCA9IDQrKHIgLSBnKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBoICo9IDYwO1xuICAgICAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtoLCBzLCB2XVxuICAgIH07XG5cbiAgICB2YXIgcmdiMmhzdiQxID0gcmdiMmhzbDtcblxuICAgIHZhciB1bnBhY2skaiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgZmxvb3IkMiA9IE1hdGguZmxvb3I7XG5cbiAgICB2YXIgaHN2MnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDEsIGFzc2lnbiQyLCBhc3NpZ24kMywgYXNzaWduJDQsIGFzc2lnbiQ1O1xuXG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG4gICAgICAgIGFyZ3MgPSB1bnBhY2skaihhcmdzLCAnaHN2Jyk7XG4gICAgICAgIHZhciBoID0gYXJnc1swXTtcbiAgICAgICAgdmFyIHMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgdiA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgdiAqPSAyNTU7XG4gICAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgICAgICByID0gZyA9IGIgPSB2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGggPT09IDM2MCkgeyBoID0gMDsgfVxuICAgICAgICAgICAgaWYgKGggPiAzNjApIHsgaCAtPSAzNjA7IH1cbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICAgICAgaCAvPSA2MDtcblxuICAgICAgICAgICAgdmFyIGkgPSBmbG9vciQyKGgpO1xuICAgICAgICAgICAgdmFyIGYgPSBoIC0gaTtcbiAgICAgICAgICAgIHZhciBwID0gdiAqICgxIC0gcyk7XG4gICAgICAgICAgICB2YXIgcSA9IHYgKiAoMSAtIHMgKiBmKTtcbiAgICAgICAgICAgIHZhciB0ID0gdiAqICgxIC0gcyAqICgxIC0gZikpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IChhc3NpZ24gPSBbdiwgdCwgcF0sIHIgPSBhc3NpZ25bMF0sIGcgPSBhc3NpZ25bMV0sIGIgPSBhc3NpZ25bMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMTogKGFzc2lnbiQxID0gW3EsIHYsIHBdLCByID0gYXNzaWduJDFbMF0sIGcgPSBhc3NpZ24kMVsxXSwgYiA9IGFzc2lnbiQxWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDI6IChhc3NpZ24kMiA9IFtwLCB2LCB0XSwgciA9IGFzc2lnbiQyWzBdLCBnID0gYXNzaWduJDJbMV0sIGIgPSBhc3NpZ24kMlsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzOiAoYXNzaWduJDMgPSBbcCwgcSwgdl0sIHIgPSBhc3NpZ24kM1swXSwgZyA9IGFzc2lnbiQzWzFdLCBiID0gYXNzaWduJDNbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNDogKGFzc2lnbiQ0ID0gW3QsIHAsIHZdLCByID0gYXNzaWduJDRbMF0sIGcgPSBhc3NpZ24kNFsxXSwgYiA9IGFzc2lnbiQ0WzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IChhc3NpZ24kNSA9IFt2LCBwLCBxXSwgciA9IGFzc2lnbiQ1WzBdLCBnID0gYXNzaWduJDVbMV0sIGIgPSBhc3NpZ24kNVsyXSk7IGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyLGcsYixhcmdzLmxlbmd0aCA+IDM/YXJnc1szXToxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhzdjJyZ2JfMSA9IGhzdjJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJGkgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkZiA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRjID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHYgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQ4ID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IyaHN2ID0gcmdiMmhzdiQxO1xuXG4gICAgQ29sb3Ikdi5wcm90b3R5cGUuaHN2ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaHN2KHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRjLmhzdiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdiwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hzdiddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkOC5mb3JtYXQuaHN2ID0gaHN2MnJnYl8xO1xuXG4gICAgaW5wdXQkOC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRpKGFyZ3MsICdoc3YnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGYoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzdic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBsYWJDb25zdGFudHMgPSB7XG4gICAgICAgIC8vIENvcnJlc3BvbmRzIHJvdWdobHkgdG8gUkdCIGJyaWdodGVyL2RhcmtlclxuICAgICAgICBLbjogMTgsXG5cbiAgICAgICAgLy8gRDY1IHN0YW5kYXJkIHJlZmVyZW50XG4gICAgICAgIFhuOiAwLjk1MDQ3MCxcbiAgICAgICAgWW46IDEsXG4gICAgICAgIFpuOiAxLjA4ODgzMCxcblxuICAgICAgICB0MDogMC4xMzc5MzEwMzQsICAvLyA0IC8gMjlcbiAgICAgICAgdDE6IDAuMjA2ODk2NTUyLCAgLy8gNiAvIDI5XG4gICAgICAgIHQyOiAwLjEyODQxODU1LCAgIC8vIDMgKiB0MSAqIHQxXG4gICAgICAgIHQzOiAwLjAwODg1NjQ1MiwgIC8vIHQxICogdDEgKiB0MVxuICAgIH07XG5cbiAgICB2YXIgTEFCX0NPTlNUQU5UUyQzID0gbGFiQ29uc3RhbnRzO1xuICAgIHZhciB1bnBhY2skaCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcG93JGEgPSBNYXRoLnBvdztcblxuICAgIHZhciByZ2IybGFiJDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRoKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gcmdiMnh5eihyLGcsYik7XG4gICAgICAgIHZhciB4ID0gcmVmJDFbMF07XG4gICAgICAgIHZhciB5ID0gcmVmJDFbMV07XG4gICAgICAgIHZhciB6ID0gcmVmJDFbMl07XG4gICAgICAgIHZhciBsID0gMTE2ICogeSAtIDE2O1xuICAgICAgICByZXR1cm4gW2wgPCAwID8gMCA6IGwsIDUwMCAqICh4IC0geSksIDIwMCAqICh5IC0geildO1xuICAgIH07XG5cbiAgICB2YXIgcmdiX3h5eiA9IGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIGlmICgociAvPSAyNTUpIDw9IDAuMDQwNDUpIHsgcmV0dXJuIHIgLyAxMi45MjsgfVxuICAgICAgICByZXR1cm4gcG93JGEoKHIgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICB9O1xuXG4gICAgdmFyIHh5el9sYWIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodCA+IExBQl9DT05TVEFOVFMkMy50MykgeyByZXR1cm4gcG93JGEodCwgMSAvIDMpOyB9XG4gICAgICAgIHJldHVybiB0IC8gTEFCX0NPTlNUQU5UUyQzLnQyICsgTEFCX0NPTlNUQU5UUyQzLnQwO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMnh5eiA9IGZ1bmN0aW9uIChyLGcsYikge1xuICAgICAgICByID0gcmdiX3h5eihyKTtcbiAgICAgICAgZyA9IHJnYl94eXooZyk7XG4gICAgICAgIGIgPSByZ2JfeHl6KGIpO1xuICAgICAgICB2YXIgeCA9IHh5el9sYWIoKDAuNDEyNDU2NCAqIHIgKyAwLjM1NzU3NjEgKiBnICsgMC4xODA0Mzc1ICogYikgLyBMQUJfQ09OU1RBTlRTJDMuWG4pO1xuICAgICAgICB2YXIgeSA9IHh5el9sYWIoKDAuMjEyNjcyOSAqIHIgKyAwLjcxNTE1MjIgKiBnICsgMC4wNzIxNzUwICogYikgLyBMQUJfQ09OU1RBTlRTJDMuWW4pO1xuICAgICAgICB2YXIgeiA9IHh5el9sYWIoKDAuMDE5MzMzOSAqIHIgKyAwLjExOTE5MjAgKiBnICsgMC45NTAzMDQxICogYikgLyBMQUJfQ09OU1RBTlRTJDMuWm4pO1xuICAgICAgICByZXR1cm4gW3gseSx6XTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJsYWJfMSA9IHJnYjJsYWIkMjtcblxuICAgIHZhciBMQUJfQ09OU1RBTlRTJDIgPSBsYWJDb25zdGFudHM7XG4gICAgdmFyIHVucGFjayRnID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBwb3ckOSA9IE1hdGgucG93O1xuXG4gICAgLypcbiAgICAgKiBMKiBbMC4uMTAwXVxuICAgICAqIGEgWy0xMDAuLjEwMF1cbiAgICAgKiBiIFstMTAwLi4xMDBdXG4gICAgICovXG4gICAgdmFyIGxhYjJyZ2IkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJGcoYXJncywgJ2xhYicpO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBhID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgeCx5LHosIHIsZyxiXztcblxuICAgICAgICB5ID0gKGwgKyAxNikgLyAxMTY7XG4gICAgICAgIHggPSBpc05hTihhKSA/IHkgOiB5ICsgYSAvIDUwMDtcbiAgICAgICAgeiA9IGlzTmFOKGIpID8geSA6IHkgLSBiIC8gMjAwO1xuXG4gICAgICAgIHkgPSBMQUJfQ09OU1RBTlRTJDIuWW4gKiBsYWJfeHl6KHkpO1xuICAgICAgICB4ID0gTEFCX0NPTlNUQU5UUyQyLlhuICogbGFiX3h5eih4KTtcbiAgICAgICAgeiA9IExBQl9DT05TVEFOVFMkMi5abiAqIGxhYl94eXooeik7XG5cbiAgICAgICAgciA9IHh5el9yZ2IoMy4yNDA0NTQyICogeCAtIDEuNTM3MTM4NSAqIHkgLSAwLjQ5ODUzMTQgKiB6KTsgIC8vIEQ2NSAtPiBzUkdCXG4gICAgICAgIGcgPSB4eXpfcmdiKC0wLjk2OTI2NjAgKiB4ICsgMS44NzYwMTA4ICogeSArIDAuMDQxNTU2MCAqIHopO1xuICAgICAgICBiXyA9IHh5el9yZ2IoMC4wNTU2NDM0ICogeCAtIDAuMjA0MDI1OSAqIHkgKyAxLjA1NzIyNTIgKiB6KTtcblxuICAgICAgICByZXR1cm4gW3IsZyxiXyxhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciB4eXpfcmdiID0gZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgcmV0dXJuIDI1NSAqIChyIDw9IDAuMDAzMDQgPyAxMi45MiAqIHIgOiAxLjA1NSAqIHBvdyQ5KHIsIDEgLyAyLjQpIC0gMC4wNTUpXG4gICAgfTtcblxuICAgIHZhciBsYWJfeHl6ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgPiBMQUJfQ09OU1RBTlRTJDIudDEgPyB0ICogdCAqIHQgOiBMQUJfQ09OU1RBTlRTJDIudDIgKiAodCAtIExBQl9DT05TVEFOVFMkMi50MClcbiAgICB9O1xuXG4gICAgdmFyIGxhYjJyZ2JfMSA9IGxhYjJyZ2IkMTtcblxuICAgIHZhciB1bnBhY2skZiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRlID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGIgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkdSA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDcgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJsYWIkMSA9IHJnYjJsYWJfMTtcblxuICAgIENvbG9yJHUucHJvdG90eXBlLmxhYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmxhYiQxKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRiLmxhYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2xhYiddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkNy5mb3JtYXQubGFiID0gbGFiMnJnYl8xO1xuXG4gICAgaW5wdXQkNy5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRmKGFyZ3MsICdsYWInKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGUoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xhYic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skZSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgUkFEMkRFRyA9IHV0aWxzLlJBRDJERUc7XG4gICAgdmFyIHNxcnQkMyA9IE1hdGguc3FydDtcbiAgICB2YXIgYXRhbjIkMiA9IE1hdGguYXRhbjI7XG4gICAgdmFyIHJvdW5kJDIgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIGxhYjJsY2gkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJGUoYXJncywgJ2xhYicpO1xuICAgICAgICB2YXIgbCA9IHJlZlswXTtcbiAgICAgICAgdmFyIGEgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgYyA9IHNxcnQkMyhhICogYSArIGIgKiBiKTtcbiAgICAgICAgdmFyIGggPSAoYXRhbjIkMihiLCBhKSAqIFJBRDJERUcgKyAzNjApICUgMzYwO1xuICAgICAgICBpZiAocm91bmQkMihjKjEwMDAwKSA9PT0gMCkgeyBoID0gTnVtYmVyLk5hTjsgfVxuICAgICAgICByZXR1cm4gW2wsIGMsIGhdO1xuICAgIH07XG5cbiAgICB2YXIgbGFiMmxjaF8xID0gbGFiMmxjaCQyO1xuXG4gICAgdmFyIHVucGFjayRkID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciByZ2IybGFiID0gcmdiMmxhYl8xO1xuICAgIHZhciBsYWIybGNoJDEgPSBsYWIybGNoXzE7XG5cbiAgICB2YXIgcmdiMmxjaCQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skZChhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IHJnYjJsYWIocixnLGIpO1xuICAgICAgICB2YXIgbCA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYl8gPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIGxhYjJsY2gkMShsLGEsYl8pO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmxjaF8xID0gcmdiMmxjaCQxO1xuXG4gICAgdmFyIHVucGFjayRjID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBERUcyUkFEID0gdXRpbHMuREVHMlJBRDtcbiAgICB2YXIgc2luJDMgPSBNYXRoLnNpbjtcbiAgICB2YXIgY29zJDMgPSBNYXRoLmNvcztcblxuICAgIHZhciBsY2gybGFiJDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLypcbiAgICAgICAgQ29udmVydCBmcm9tIGEgcXVhbGl0YXRpdmUgcGFyYW1ldGVyIGggYW5kIGEgcXVhbnRpdGF0aXZlIHBhcmFtZXRlciBsIHRvIGEgMjQtYml0IHBpeGVsLlxuICAgICAgICBUaGVzZSBmb3JtdWxhcyB3ZXJlIGludmVudGVkIGJ5IERhdmlkIERhbHJ5bXBsZSB0byBvYnRhaW4gbWF4aW11bSBjb250cmFzdCB3aXRob3V0IGdvaW5nXG4gICAgICAgIG91dCBvZiBnYW11dCBpZiB0aGUgcGFyYW1ldGVycyBhcmUgaW4gdGhlIHJhbmdlIDAtMS5cblxuICAgICAgICBBIHNhdHVyYXRpb24gbXVsdGlwbGllciB3YXMgYWRkZWQgYnkgR3JlZ29yIEFpc2NoXG4gICAgICAgICovXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skYyhhcmdzLCAnbGNoJyk7XG4gICAgICAgIHZhciBsID0gcmVmWzBdO1xuICAgICAgICB2YXIgYyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGggPSByZWZbMl07XG4gICAgICAgIGlmIChpc05hTihoKSkgeyBoID0gMDsgfVxuICAgICAgICBoID0gaCAqIERFRzJSQUQ7XG4gICAgICAgIHJldHVybiBbbCwgY29zJDMoaCkgKiBjLCBzaW4kMyhoKSAqIGNdXG4gICAgfTtcblxuICAgIHZhciBsY2gybGFiXzEgPSBsY2gybGFiJDI7XG5cbiAgICB2YXIgdW5wYWNrJGIgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxjaDJsYWIkMSA9IGxjaDJsYWJfMTtcbiAgICB2YXIgbGFiMnJnYiA9IGxhYjJyZ2JfMTtcblxuICAgIHZhciBsY2gycmdiJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayRiKGFyZ3MsICdsY2gnKTtcbiAgICAgICAgdmFyIGwgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBoID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHJlZiA9IGxjaDJsYWIkMSAobCxjLGgpO1xuICAgICAgICB2YXIgTCA9IHJlZlswXTtcbiAgICAgICAgdmFyIGEgPSByZWZbMV07XG4gICAgICAgIHZhciBiXyA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gbGFiMnJnYiAoTCxhLGJfKTtcbiAgICAgICAgdmFyIHIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGcgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGIgPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciBsY2gycmdiXzEgPSBsY2gycmdiJDE7XG5cbiAgICB2YXIgdW5wYWNrJGEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxjaDJyZ2IgPSBsY2gycmdiXzE7XG5cbiAgICB2YXIgaGNsMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgaGNsID0gdW5wYWNrJGEoYXJncywgJ2hjbCcpLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIGxjaDJyZ2IuYXBwbHkodm9pZCAwLCBoY2wpO1xuICAgIH07XG5cbiAgICB2YXIgaGNsMnJnYl8xID0gaGNsMnJnYjtcblxuICAgIHZhciB1bnBhY2skOSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRkID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGEgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkdCA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDYgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJsY2ggPSByZ2IybGNoXzE7XG5cbiAgICBDb2xvciR0LnByb3RvdHlwZS5sY2ggPSBmdW5jdGlvbigpIHsgcmV0dXJuIHJnYjJsY2godGhpcy5fcmdiKTsgfTtcbiAgICBDb2xvciR0LnByb3RvdHlwZS5oY2wgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHJnYjJsY2godGhpcy5fcmdiKS5yZXZlcnNlKCk7IH07XG5cbiAgICBjaHJvbWEkYS5sY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHQsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydsY2gnXSkgKSk7XG4gICAgfTtcbiAgICBjaHJvbWEkYS5oY2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHQsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoY2wnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDYuZm9ybWF0LmxjaCA9IGxjaDJyZ2JfMTtcbiAgICBpbnB1dCQ2LmZvcm1hdC5oY2wgPSBoY2wycmdiXzE7XG5cbiAgICBbJ2xjaCcsJ2hjbCddLmZvckVhY2goZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGlucHV0JDYuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skOShhcmdzLCBtKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGQoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pOyB9KTtcblxuICAgIC8qKlxuICAgIFx0WDExIGNvbG9yIG5hbWVzXG5cbiAgICBcdGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvI3N2Zy1jb2xvclxuICAgICovXG5cbiAgICB2YXIgdzNjeDExJDEgPSB7XG4gICAgICAgIGFsaWNlYmx1ZTogJyNmMGY4ZmYnLFxuICAgICAgICBhbnRpcXVld2hpdGU6ICcjZmFlYmQ3JyxcbiAgICAgICAgYXF1YTogJyMwMGZmZmYnLFxuICAgICAgICBhcXVhbWFyaW5lOiAnIzdmZmZkNCcsXG4gICAgICAgIGF6dXJlOiAnI2YwZmZmZicsXG4gICAgICAgIGJlaWdlOiAnI2Y1ZjVkYycsXG4gICAgICAgIGJpc3F1ZTogJyNmZmU0YzQnLFxuICAgICAgICBibGFjazogJyMwMDAwMDAnLFxuICAgICAgICBibGFuY2hlZGFsbW9uZDogJyNmZmViY2QnLFxuICAgICAgICBibHVlOiAnIzAwMDBmZicsXG4gICAgICAgIGJsdWV2aW9sZXQ6ICcjOGEyYmUyJyxcbiAgICAgICAgYnJvd246ICcjYTUyYTJhJyxcbiAgICAgICAgYnVybHl3b29kOiAnI2RlYjg4NycsXG4gICAgICAgIGNhZGV0Ymx1ZTogJyM1ZjllYTAnLFxuICAgICAgICBjaGFydHJldXNlOiAnIzdmZmYwMCcsXG4gICAgICAgIGNob2NvbGF0ZTogJyNkMjY5MWUnLFxuICAgICAgICBjb3JhbDogJyNmZjdmNTAnLFxuICAgICAgICBjb3JuZmxvd2VyOiAnIzY0OTVlZCcsXG4gICAgICAgIGNvcm5mbG93ZXJibHVlOiAnIzY0OTVlZCcsXG4gICAgICAgIGNvcm5zaWxrOiAnI2ZmZjhkYycsXG4gICAgICAgIGNyaW1zb246ICcjZGMxNDNjJyxcbiAgICAgICAgY3lhbjogJyMwMGZmZmYnLFxuICAgICAgICBkYXJrYmx1ZTogJyMwMDAwOGInLFxuICAgICAgICBkYXJrY3lhbjogJyMwMDhiOGInLFxuICAgICAgICBkYXJrZ29sZGVucm9kOiAnI2I4ODYwYicsXG4gICAgICAgIGRhcmtncmF5OiAnI2E5YTlhOScsXG4gICAgICAgIGRhcmtncmVlbjogJyMwMDY0MDAnLFxuICAgICAgICBkYXJrZ3JleTogJyNhOWE5YTknLFxuICAgICAgICBkYXJra2hha2k6ICcjYmRiNzZiJyxcbiAgICAgICAgZGFya21hZ2VudGE6ICcjOGIwMDhiJyxcbiAgICAgICAgZGFya29saXZlZ3JlZW46ICcjNTU2YjJmJyxcbiAgICAgICAgZGFya29yYW5nZTogJyNmZjhjMDAnLFxuICAgICAgICBkYXJrb3JjaGlkOiAnIzk5MzJjYycsXG4gICAgICAgIGRhcmtyZWQ6ICcjOGIwMDAwJyxcbiAgICAgICAgZGFya3NhbG1vbjogJyNlOTk2N2EnLFxuICAgICAgICBkYXJrc2VhZ3JlZW46ICcjOGZiYzhmJyxcbiAgICAgICAgZGFya3NsYXRlYmx1ZTogJyM0ODNkOGInLFxuICAgICAgICBkYXJrc2xhdGVncmF5OiAnIzJmNGY0ZicsXG4gICAgICAgIGRhcmtzbGF0ZWdyZXk6ICcjMmY0ZjRmJyxcbiAgICAgICAgZGFya3R1cnF1b2lzZTogJyMwMGNlZDEnLFxuICAgICAgICBkYXJrdmlvbGV0OiAnIzk0MDBkMycsXG4gICAgICAgIGRlZXBwaW5rOiAnI2ZmMTQ5MycsXG4gICAgICAgIGRlZXBza3libHVlOiAnIzAwYmZmZicsXG4gICAgICAgIGRpbWdyYXk6ICcjNjk2OTY5JyxcbiAgICAgICAgZGltZ3JleTogJyM2OTY5NjknLFxuICAgICAgICBkb2RnZXJibHVlOiAnIzFlOTBmZicsXG4gICAgICAgIGZpcmVicmljazogJyNiMjIyMjInLFxuICAgICAgICBmbG9yYWx3aGl0ZTogJyNmZmZhZjAnLFxuICAgICAgICBmb3Jlc3RncmVlbjogJyMyMjhiMjInLFxuICAgICAgICBmdWNoc2lhOiAnI2ZmMDBmZicsXG4gICAgICAgIGdhaW5zYm9ybzogJyNkY2RjZGMnLFxuICAgICAgICBnaG9zdHdoaXRlOiAnI2Y4ZjhmZicsXG4gICAgICAgIGdvbGQ6ICcjZmZkNzAwJyxcbiAgICAgICAgZ29sZGVucm9kOiAnI2RhYTUyMCcsXG4gICAgICAgIGdyYXk6ICcjODA4MDgwJyxcbiAgICAgICAgZ3JlZW46ICcjMDA4MDAwJyxcbiAgICAgICAgZ3JlZW55ZWxsb3c6ICcjYWRmZjJmJyxcbiAgICAgICAgZ3JleTogJyM4MDgwODAnLFxuICAgICAgICBob25leWRldzogJyNmMGZmZjAnLFxuICAgICAgICBob3RwaW5rOiAnI2ZmNjliNCcsXG4gICAgICAgIGluZGlhbnJlZDogJyNjZDVjNWMnLFxuICAgICAgICBpbmRpZ286ICcjNGIwMDgyJyxcbiAgICAgICAgaXZvcnk6ICcjZmZmZmYwJyxcbiAgICAgICAga2hha2k6ICcjZjBlNjhjJyxcbiAgICAgICAgbGFzZXJsZW1vbjogJyNmZmZmNTQnLFxuICAgICAgICBsYXZlbmRlcjogJyNlNmU2ZmEnLFxuICAgICAgICBsYXZlbmRlcmJsdXNoOiAnI2ZmZjBmNScsXG4gICAgICAgIGxhd25ncmVlbjogJyM3Y2ZjMDAnLFxuICAgICAgICBsZW1vbmNoaWZmb246ICcjZmZmYWNkJyxcbiAgICAgICAgbGlnaHRibHVlOiAnI2FkZDhlNicsXG4gICAgICAgIGxpZ2h0Y29yYWw6ICcjZjA4MDgwJyxcbiAgICAgICAgbGlnaHRjeWFuOiAnI2UwZmZmZicsXG4gICAgICAgIGxpZ2h0Z29sZGVucm9kOiAnI2ZhZmFkMicsXG4gICAgICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAnI2ZhZmFkMicsXG4gICAgICAgIGxpZ2h0Z3JheTogJyNkM2QzZDMnLFxuICAgICAgICBsaWdodGdyZWVuOiAnIzkwZWU5MCcsXG4gICAgICAgIGxpZ2h0Z3JleTogJyNkM2QzZDMnLFxuICAgICAgICBsaWdodHBpbms6ICcjZmZiNmMxJyxcbiAgICAgICAgbGlnaHRzYWxtb246ICcjZmZhMDdhJyxcbiAgICAgICAgbGlnaHRzZWFncmVlbjogJyMyMGIyYWEnLFxuICAgICAgICBsaWdodHNreWJsdWU6ICcjODdjZWZhJyxcbiAgICAgICAgbGlnaHRzbGF0ZWdyYXk6ICcjNzc4ODk5JyxcbiAgICAgICAgbGlnaHRzbGF0ZWdyZXk6ICcjNzc4ODk5JyxcbiAgICAgICAgbGlnaHRzdGVlbGJsdWU6ICcjYjBjNGRlJyxcbiAgICAgICAgbGlnaHR5ZWxsb3c6ICcjZmZmZmUwJyxcbiAgICAgICAgbGltZTogJyMwMGZmMDAnLFxuICAgICAgICBsaW1lZ3JlZW46ICcjMzJjZDMyJyxcbiAgICAgICAgbGluZW46ICcjZmFmMGU2JyxcbiAgICAgICAgbWFnZW50YTogJyNmZjAwZmYnLFxuICAgICAgICBtYXJvb246ICcjODAwMDAwJyxcbiAgICAgICAgbWFyb29uMjogJyM3ZjAwMDAnLFxuICAgICAgICBtYXJvb24zOiAnI2IwMzA2MCcsXG4gICAgICAgIG1lZGl1bWFxdWFtYXJpbmU6ICcjNjZjZGFhJyxcbiAgICAgICAgbWVkaXVtYmx1ZTogJyMwMDAwY2QnLFxuICAgICAgICBtZWRpdW1vcmNoaWQ6ICcjYmE1NWQzJyxcbiAgICAgICAgbWVkaXVtcHVycGxlOiAnIzkzNzBkYicsXG4gICAgICAgIG1lZGl1bXNlYWdyZWVuOiAnIzNjYjM3MScsXG4gICAgICAgIG1lZGl1bXNsYXRlYmx1ZTogJyM3YjY4ZWUnLFxuICAgICAgICBtZWRpdW1zcHJpbmdncmVlbjogJyMwMGZhOWEnLFxuICAgICAgICBtZWRpdW10dXJxdW9pc2U6ICcjNDhkMWNjJyxcbiAgICAgICAgbWVkaXVtdmlvbGV0cmVkOiAnI2M3MTU4NScsXG4gICAgICAgIG1pZG5pZ2h0Ymx1ZTogJyMxOTE5NzAnLFxuICAgICAgICBtaW50Y3JlYW06ICcjZjVmZmZhJyxcbiAgICAgICAgbWlzdHlyb3NlOiAnI2ZmZTRlMScsXG4gICAgICAgIG1vY2Nhc2luOiAnI2ZmZTRiNScsXG4gICAgICAgIG5hdmFqb3doaXRlOiAnI2ZmZGVhZCcsXG4gICAgICAgIG5hdnk6ICcjMDAwMDgwJyxcbiAgICAgICAgb2xkbGFjZTogJyNmZGY1ZTYnLFxuICAgICAgICBvbGl2ZTogJyM4MDgwMDAnLFxuICAgICAgICBvbGl2ZWRyYWI6ICcjNmI4ZTIzJyxcbiAgICAgICAgb3JhbmdlOiAnI2ZmYTUwMCcsXG4gICAgICAgIG9yYW5nZXJlZDogJyNmZjQ1MDAnLFxuICAgICAgICBvcmNoaWQ6ICcjZGE3MGQ2JyxcbiAgICAgICAgcGFsZWdvbGRlbnJvZDogJyNlZWU4YWEnLFxuICAgICAgICBwYWxlZ3JlZW46ICcjOThmYjk4JyxcbiAgICAgICAgcGFsZXR1cnF1b2lzZTogJyNhZmVlZWUnLFxuICAgICAgICBwYWxldmlvbGV0cmVkOiAnI2RiNzA5MycsXG4gICAgICAgIHBhcGF5YXdoaXA6ICcjZmZlZmQ1JyxcbiAgICAgICAgcGVhY2hwdWZmOiAnI2ZmZGFiOScsXG4gICAgICAgIHBlcnU6ICcjY2Q4NTNmJyxcbiAgICAgICAgcGluazogJyNmZmMwY2InLFxuICAgICAgICBwbHVtOiAnI2RkYTBkZCcsXG4gICAgICAgIHBvd2RlcmJsdWU6ICcjYjBlMGU2JyxcbiAgICAgICAgcHVycGxlOiAnIzgwMDA4MCcsXG4gICAgICAgIHB1cnBsZTI6ICcjN2YwMDdmJyxcbiAgICAgICAgcHVycGxlMzogJyNhMDIwZjAnLFxuICAgICAgICByZWJlY2NhcHVycGxlOiAnIzY2MzM5OScsXG4gICAgICAgIHJlZDogJyNmZjAwMDAnLFxuICAgICAgICByb3N5YnJvd246ICcjYmM4ZjhmJyxcbiAgICAgICAgcm95YWxibHVlOiAnIzQxNjllMScsXG4gICAgICAgIHNhZGRsZWJyb3duOiAnIzhiNDUxMycsXG4gICAgICAgIHNhbG1vbjogJyNmYTgwNzInLFxuICAgICAgICBzYW5keWJyb3duOiAnI2Y0YTQ2MCcsXG4gICAgICAgIHNlYWdyZWVuOiAnIzJlOGI1NycsXG4gICAgICAgIHNlYXNoZWxsOiAnI2ZmZjVlZScsXG4gICAgICAgIHNpZW5uYTogJyNhMDUyMmQnLFxuICAgICAgICBzaWx2ZXI6ICcjYzBjMGMwJyxcbiAgICAgICAgc2t5Ymx1ZTogJyM4N2NlZWInLFxuICAgICAgICBzbGF0ZWJsdWU6ICcjNmE1YWNkJyxcbiAgICAgICAgc2xhdGVncmF5OiAnIzcwODA5MCcsXG4gICAgICAgIHNsYXRlZ3JleTogJyM3MDgwOTAnLFxuICAgICAgICBzbm93OiAnI2ZmZmFmYScsXG4gICAgICAgIHNwcmluZ2dyZWVuOiAnIzAwZmY3ZicsXG4gICAgICAgIHN0ZWVsYmx1ZTogJyM0NjgyYjQnLFxuICAgICAgICB0YW46ICcjZDJiNDhjJyxcbiAgICAgICAgdGVhbDogJyMwMDgwODAnLFxuICAgICAgICB0aGlzdGxlOiAnI2Q4YmZkOCcsXG4gICAgICAgIHRvbWF0bzogJyNmZjYzNDcnLFxuICAgICAgICB0dXJxdW9pc2U6ICcjNDBlMGQwJyxcbiAgICAgICAgdmlvbGV0OiAnI2VlODJlZScsXG4gICAgICAgIHdoZWF0OiAnI2Y1ZGViMycsXG4gICAgICAgIHdoaXRlOiAnI2ZmZmZmZicsXG4gICAgICAgIHdoaXRlc21va2U6ICcjZjVmNWY1JyxcbiAgICAgICAgeWVsbG93OiAnI2ZmZmYwMCcsXG4gICAgICAgIHllbGxvd2dyZWVuOiAnIzlhY2QzMidcbiAgICB9O1xuXG4gICAgdmFyIHczY3gxMV8xID0gdzNjeDExJDE7XG5cbiAgICB2YXIgQ29sb3IkcyA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDUgPSBpbnB1dCRoO1xuICAgIHZhciB0eXBlJGMgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHczY3gxMSA9IHczY3gxMV8xO1xuICAgIHZhciBoZXgycmdiID0gaGV4MnJnYl8xO1xuICAgIHZhciByZ2IyaGV4ID0gcmdiMmhleF8xO1xuXG4gICAgQ29sb3Ikcy5wcm90b3R5cGUubmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGV4ID0gcmdiMmhleCh0aGlzLl9yZ2IsICdyZ2InKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBPYmplY3Qua2V5cyh3M2N4MTEpOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIG4gPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICBpZiAodzNjeDExW25dID09PSBoZXgpIHsgcmV0dXJuIG4udG9Mb3dlckNhc2UoKTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZXg7XG4gICAgfTtcblxuICAgIGlucHV0JDUuZm9ybWF0Lm5hbWVkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHczY3gxMVtuYW1lXSkgeyByZXR1cm4gaGV4MnJnYih3M2N4MTFbbmFtZV0pOyB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBjb2xvciBuYW1lOiAnK25hbWUpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ1LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDUsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN0Lmxlbmd0aCAmJiB0eXBlJGMoaCkgPT09ICdzdHJpbmcnICYmIHczY3gxMVtoLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICduYW1lZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skOCA9IHV0aWxzLnVucGFjaztcblxuICAgIHZhciByZ2IybnVtJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayQ4KGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgcmV0dXJuIChyIDw8IDE2KSArIChnIDw8IDgpICsgYjtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJudW1fMSA9IHJnYjJudW0kMTtcblxuICAgIHZhciB0eXBlJGIgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIG51bTJyZ2IgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIGlmICh0eXBlJGIobnVtKSA9PSBcIm51bWJlclwiICYmIG51bSA+PSAwICYmIG51bSA8PSAweEZGRkZGRikge1xuICAgICAgICAgICAgdmFyIHIgPSBudW0gPj4gMTY7XG4gICAgICAgICAgICB2YXIgZyA9IChudW0gPj4gOCkgJiAweEZGO1xuICAgICAgICAgICAgdmFyIGIgPSBudW0gJiAweEZGO1xuICAgICAgICAgICAgcmV0dXJuIFtyLGcsYiwxXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIG51bSBjb2xvcjogXCIrbnVtKTtcbiAgICB9O1xuXG4gICAgdmFyIG51bTJyZ2JfMSA9IG51bTJyZ2I7XG5cbiAgICB2YXIgY2hyb21hJDkgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkciA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDQgPSBpbnB1dCRoO1xuICAgIHZhciB0eXBlJGEgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHJnYjJudW0gPSByZ2IybnVtXzE7XG5cbiAgICBDb2xvciRyLnByb3RvdHlwZS5udW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJudW0odGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJDkubnVtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRyLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnbnVtJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ0LmZvcm1hdC5udW0gPSBudW0ycmdiXzE7XG5cbiAgICBpbnB1dCQ0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDUsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZSRhKGFyZ3NbMF0pID09PSAnbnVtYmVyJyAmJiBhcmdzWzBdID49IDAgJiYgYXJnc1swXSA8PSAweEZGRkZGRikge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVtJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGNocm9tYSQ4ID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHEgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQzID0gaW5wdXQkaDtcbiAgICB2YXIgdW5wYWNrJDcgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkOSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIHJvdW5kJDEgPSBNYXRoLnJvdW5kO1xuXG4gICAgQ29sb3IkcS5wcm90b3R5cGUucmdiID0gZnVuY3Rpb24ocm5kKSB7XG4gICAgICAgIGlmICggcm5kID09PSB2b2lkIDAgKSBybmQ9dHJ1ZTtcblxuICAgICAgICBpZiAocm5kID09PSBmYWxzZSkgeyByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsMyk7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JnYi5zbGljZSgwLDMpLm1hcChyb3VuZCQxKTtcbiAgICB9O1xuXG4gICAgQ29sb3IkcS5wcm90b3R5cGUucmdiYSA9IGZ1bmN0aW9uKHJuZCkge1xuICAgICAgICBpZiAoIHJuZCA9PT0gdm9pZCAwICkgcm5kPXRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JnYi5zbGljZSgwLDQpLm1hcChmdW5jdGlvbiAodixpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTwzID8gKHJuZCA9PT0gZmFsc2UgPyB2IDogcm91bmQkMSh2KSkgOiB2O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY2hyb21hJDgucmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRxLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsncmdiJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQzLmZvcm1hdC5yZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYmEgPSB1bnBhY2skNyhhcmdzLCAncmdiYScpO1xuICAgICAgICBpZiAocmdiYVszXSA9PT0gdW5kZWZpbmVkKSB7IHJnYmFbM10gPSAxOyB9XG4gICAgICAgIHJldHVybiByZ2JhO1xuICAgIH07XG5cbiAgICBpbnB1dCQzLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDMsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJDcoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDkoYXJncykgPT09ICdhcnJheScgJiYgKGFyZ3MubGVuZ3RoID09PSAzIHx8XG4gICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPT09IDQgJiYgdHlwZSQ5KGFyZ3NbM10pID09ICdudW1iZXInICYmIGFyZ3NbM10gPj0gMCAmJiBhcmdzWzNdIDw9IDEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdyZ2InO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKlxuICAgICAqIEJhc2VkIG9uIGltcGxlbWVudGF0aW9uIGJ5IE5laWwgQmFydGxldHRcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vbmVpbGJhcnRsZXR0L2NvbG9yLXRlbXBlcmF0dXJlXG4gICAgICovXG5cbiAgICB2YXIgbG9nJDEgPSBNYXRoLmxvZztcblxuICAgIHZhciB0ZW1wZXJhdHVyZTJyZ2IkMSA9IGZ1bmN0aW9uIChrZWx2aW4pIHtcbiAgICAgICAgdmFyIHRlbXAgPSBrZWx2aW4gLyAxMDA7XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgaWYgKHRlbXAgPCA2Nikge1xuICAgICAgICAgICAgciA9IDI1NTtcbiAgICAgICAgICAgIGcgPSB0ZW1wIDwgNiA/IDAgOiAtMTU1LjI1NDg1NTYyNzA5MTc5IC0gMC40NDU5Njk1MDQ2OTU3OTEzMyAqIChnID0gdGVtcC0yKSArIDEwNC40OTIxNjE5OTM5Mzg4OCAqIGxvZyQxKGcpO1xuICAgICAgICAgICAgYiA9IHRlbXAgPCAyMCA/IDAgOiAtMjU0Ljc2OTM1MTg0MTIwOTAyICsgMC44Mjc0MDk2MDY0MDA3Mzk1ICogKGIgPSB0ZW1wLTEwKSArIDExNS42Nzk5NDQwMTA2NjE0NyAqIGxvZyQxKGIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IDM1MS45NzY5MDU2NjgwNTY5MyArIDAuMTE0MjA2NDUzNzg0MTY1ICogKHIgPSB0ZW1wLTU1KSAtIDQwLjI1MzY2MzA5MzMyMTI3ICogbG9nJDEocik7XG4gICAgICAgICAgICBnID0gMzI1LjQ0OTQxMjU3MTE5NzQgKyAwLjA3OTQzNDU2NTM2NjYyMzQyICogKGcgPSB0ZW1wLTUwKSAtIDI4LjA4NTI5NjM1MDc5NTcgKiBsb2ckMShnKTtcbiAgICAgICAgICAgIGIgPSAyNTU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyLGcsYiwxXTtcbiAgICB9O1xuXG4gICAgdmFyIHRlbXBlcmF0dXJlMnJnYl8xID0gdGVtcGVyYXR1cmUycmdiJDE7XG5cbiAgICAvKlxuICAgICAqIEJhc2VkIG9uIGltcGxlbWVudGF0aW9uIGJ5IE5laWwgQmFydGxldHRcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vbmVpbGJhcnRsZXR0L2NvbG9yLXRlbXBlcmF0dXJlXG4gICAgICoqL1xuXG4gICAgdmFyIHRlbXBlcmF0dXJlMnJnYiA9IHRlbXBlcmF0dXJlMnJnYl8xO1xuICAgIHZhciB1bnBhY2skNiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIHJnYjJ0ZW1wZXJhdHVyZSQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2IgPSB1bnBhY2skNihhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmdiWzBdLCBiID0gcmdiWzJdO1xuICAgICAgICB2YXIgbWluVGVtcCA9IDEwMDA7XG4gICAgICAgIHZhciBtYXhUZW1wID0gNDAwMDA7XG4gICAgICAgIHZhciBlcHMgPSAwLjQ7XG4gICAgICAgIHZhciB0ZW1wO1xuICAgICAgICB3aGlsZSAobWF4VGVtcCAtIG1pblRlbXAgPiBlcHMpIHtcbiAgICAgICAgICAgIHRlbXAgPSAobWF4VGVtcCArIG1pblRlbXApICogMC41O1xuICAgICAgICAgICAgdmFyIHJnYiQxID0gdGVtcGVyYXR1cmUycmdiKHRlbXApO1xuICAgICAgICAgICAgaWYgKChyZ2IkMVsyXSAvIHJnYiQxWzBdKSA+PSAoYiAvIHIpKSB7XG4gICAgICAgICAgICAgICAgbWF4VGVtcCA9IHRlbXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1pblRlbXAgPSB0ZW1wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3VuZCh0ZW1wKTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJ0ZW1wZXJhdHVyZV8xID0gcmdiMnRlbXBlcmF0dXJlJDE7XG5cbiAgICB2YXIgY2hyb21hJDcgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkcCA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDIgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJ0ZW1wZXJhdHVyZSA9IHJnYjJ0ZW1wZXJhdHVyZV8xO1xuXG4gICAgQ29sb3IkcC5wcm90b3R5cGUudGVtcCA9XG4gICAgQ29sb3IkcC5wcm90b3R5cGUua2VsdmluID1cbiAgICBDb2xvciRwLnByb3RvdHlwZS50ZW1wZXJhdHVyZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMnRlbXBlcmF0dXJlKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSQ3LnRlbXAgPVxuICAgIGNocm9tYSQ3LmtlbHZpbiA9XG4gICAgY2hyb21hJDcudGVtcGVyYXR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHAsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWyd0ZW1wJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQyLmZvcm1hdC50ZW1wID1cbiAgICBpbnB1dCQyLmZvcm1hdC5rZWx2aW4gPVxuICAgIGlucHV0JDIuZm9ybWF0LnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmUycmdiXzE7XG5cbiAgICB2YXIgdW5wYWNrJDUgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGNicnQgPSBNYXRoLmNicnQ7XG4gICAgdmFyIHBvdyQ4ID0gTWF0aC5wb3c7XG4gICAgdmFyIHNpZ24kMSA9IE1hdGguc2lnbjtcblxuICAgIHZhciByZ2Iyb2tsYWIkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvLyBPS0xhYiBjb2xvciBzcGFjZSBpbXBsZW1lbnRhdGlvbiB0YWtlbiBmcm9tXG4gICAgICAgIC8vIGh0dHBzOi8vYm90dG9zc29uLmdpdGh1Yi5pby9wb3N0cy9va2xhYi9cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayQ1KGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gW3JnYjJscmdiKHIgLyAyNTUpLCByZ2IybHJnYihnIC8gMjU1KSwgcmdiMmxyZ2IoYiAvIDI1NSldO1xuICAgICAgICB2YXIgbHIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGxnID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBsYiA9IHJlZiQxWzJdO1xuICAgICAgICB2YXIgbCA9IGNicnQoMC40MTIyMjE0NzA4ICogbHIgKyAwLjUzNjMzMjUzNjMgKiBsZyArIDAuMDUxNDQ1OTkyOSAqIGxiKTtcbiAgICAgICAgdmFyIG0gPSBjYnJ0KDAuMjExOTAzNDk4MiAqIGxyICsgMC42ODA2OTk1NDUxICogbGcgKyAwLjEwNzM5Njk1NjYgKiBsYik7XG4gICAgICAgIHZhciBzID0gY2JydCgwLjA4ODMwMjQ2MTkgKiBsciArIDAuMjgxNzE4ODM3NiAqIGxnICsgMC42Mjk5Nzg3MDA1ICogbGIpO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAwLjIxMDQ1NDI1NTMgKiBsICsgMC43OTM2MTc3ODUgKiBtIC0gMC4wMDQwNzIwNDY4ICogcyxcbiAgICAgICAgICAgIDEuOTc3OTk4NDk1MSAqIGwgLSAyLjQyODU5MjIwNSAqIG0gKyAwLjQ1MDU5MzcwOTkgKiBzLFxuICAgICAgICAgICAgMC4wMjU5MDQwMzcxICogbCArIDAuNzgyNzcxNzY2MiAqIG0gLSAwLjgwODY3NTc2NiAqIHNcbiAgICAgICAgXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJva2xhYl8xID0gcmdiMm9rbGFiJDI7XG5cbiAgICBmdW5jdGlvbiByZ2IybHJnYihjKSB7XG4gICAgICAgIHZhciBhYnMgPSBNYXRoLmFicyhjKTtcbiAgICAgICAgaWYgKGFicyA8IDAuMDQwNDUpIHtcbiAgICAgICAgICAgIHJldHVybiBjIC8gMTIuOTI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChzaWduJDEoYykgfHwgMSkgKiBwb3ckOCgoYWJzICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgfVxuXG4gICAgdmFyIHVucGFjayQ0ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBwb3ckNyA9IE1hdGgucG93O1xuICAgIHZhciBzaWduID0gTWF0aC5zaWduO1xuXG4gICAgLypcbiAgICAgKiBMKiBbMC4uMTAwXVxuICAgICAqIGEgWy0xMDAuLjEwMF1cbiAgICAgKiBiIFstMTAwLi4xMDBdXG4gICAgICovXG4gICAgdmFyIG9rbGFiMnJnYiQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skNChhcmdzLCAnbGFiJyk7XG4gICAgICAgIHZhciBMID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGEgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG5cbiAgICAgICAgdmFyIGwgPSBwb3ckNyhMICsgMC4zOTYzMzc3Nzc0ICogYSArIDAuMjE1ODAzNzU3MyAqIGIsIDMpO1xuICAgICAgICB2YXIgbSA9IHBvdyQ3KEwgLSAwLjEwNTU2MTM0NTggKiBhIC0gMC4wNjM4NTQxNzI4ICogYiwgMyk7XG4gICAgICAgIHZhciBzID0gcG93JDcoTCAtIDAuMDg5NDg0MTc3NSAqIGEgLSAxLjI5MTQ4NTU0OCAqIGIsIDMpO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAyNTUgKiBscmdiMnJnYigrNC4wNzY3NDE2NjIxICogbCAtIDMuMzA3NzExNTkxMyAqIG0gKyAwLjIzMDk2OTkyOTIgKiBzKSxcbiAgICAgICAgICAgIDI1NSAqIGxyZ2IycmdiKC0xLjI2ODQzODAwNDYgKiBsICsgMi42MDk3NTc0MDExICogbSAtIDAuMzQxMzE5Mzk2NSAqIHMpLFxuICAgICAgICAgICAgMjU1ICogbHJnYjJyZ2IoLTAuMDA0MTk2MDg2MyAqIGwgLSAwLjcwMzQxODYxNDcgKiBtICsgMS43MDc2MTQ3MDEgKiBzKSxcbiAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIHZhciBva2xhYjJyZ2JfMSA9IG9rbGFiMnJnYiQxO1xuXG4gICAgZnVuY3Rpb24gbHJnYjJyZ2IoYykge1xuICAgICAgICB2YXIgYWJzID0gTWF0aC5hYnMoYyk7XG4gICAgICAgIGlmIChhYnMgPiAwLjAwMzEzMDgpIHtcbiAgICAgICAgICAgIHJldHVybiAoc2lnbihjKSB8fCAxKSAqICgxLjA1NSAqIHBvdyQ3KGFicywgMSAvIDIuNCkgLSAwLjA1NSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGMgKiAxMi45MjtcbiAgICB9XG5cbiAgICB2YXIgdW5wYWNrJDMgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkOCA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSQ2ID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJG8gPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQxID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2Iyb2tsYWIkMSA9IHJnYjJva2xhYl8xO1xuXG4gICAgQ29sb3Ikby5wcm90b3R5cGUub2tsYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZ2Iyb2tsYWIkMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkNi5va2xhYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkbywgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ29rbGFiJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQxLmZvcm1hdC5va2xhYiA9IG9rbGFiMnJnYl8xO1xuXG4gICAgaW5wdXQkMS5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAzLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayQzKGFyZ3MsICdva2xhYicpO1xuICAgICAgICAgICAgaWYgKHR5cGUkOChhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnb2tsYWInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJDIgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJnYjJva2xhYiA9IHJnYjJva2xhYl8xO1xuICAgIHZhciBsYWIybGNoID0gbGFiMmxjaF8xO1xuXG4gICAgdmFyIHJnYjJva2xjaCQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skMihhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IHJnYjJva2xhYihyLCBnLCBiKTtcbiAgICAgICAgdmFyIGwgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGEgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGJfID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBsYWIybGNoKGwsIGEsIGJfKTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJva2xjaF8xID0gcmdiMm9rbGNoJDE7XG5cbiAgICB2YXIgdW5wYWNrJDEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxjaDJsYWIgPSBsY2gybGFiXzE7XG4gICAgdmFyIG9rbGFiMnJnYiA9IG9rbGFiMnJnYl8xO1xuXG4gICAgdmFyIG9rbGNoMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJDEoYXJncywgJ2xjaCcpO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBjID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcmVmID0gbGNoMmxhYihsLCBjLCBoKTtcbiAgICAgICAgdmFyIEwgPSByZWZbMF07XG4gICAgICAgIHZhciBhID0gcmVmWzFdO1xuICAgICAgICB2YXIgYl8gPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IG9rbGFiMnJnYihMLCBhLCBiXyk7XG4gICAgICAgIHZhciByID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBnID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgb2tsY2gycmdiXzEgPSBva2xjaDJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJDcgPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkNSA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRuID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJva2xjaCA9IHJnYjJva2xjaF8xO1xuXG4gICAgQ29sb3Ikbi5wcm90b3R5cGUub2tsY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZ2Iyb2tsY2godGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJDUub2tsY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJG4sIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydva2xjaCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuZm9ybWF0Lm9rbGNoID0gb2tsY2gycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAzLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayhhcmdzLCAnb2tsY2gnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDcoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29rbGNoJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIENvbG9yJG0gPSBDb2xvcl8xO1xuICAgIHZhciB0eXBlJDYgPSB1dGlscy50eXBlO1xuXG4gICAgQ29sb3IkbS5wcm90b3R5cGUuYWxwaGEgPSBmdW5jdGlvbihhLCBtdXRhdGUpIHtcbiAgICAgICAgaWYgKCBtdXRhdGUgPT09IHZvaWQgMCApIG11dGF0ZT1mYWxzZTtcblxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkICYmIHR5cGUkNihhKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChtdXRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZ2JbM10gPSBhO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRtKFt0aGlzLl9yZ2JbMF0sIHRoaXMuX3JnYlsxXSwgdGhpcy5fcmdiWzJdLCBhXSwgJ3JnYicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9yZ2JbM107XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRsID0gQ29sb3JfMTtcblxuICAgIENvbG9yJGwucHJvdG90eXBlLmNsaXBwZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JnYi5fY2xpcHBlZCB8fCBmYWxzZTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGsgPSBDb2xvcl8xO1xuICAgIHZhciBMQUJfQ09OU1RBTlRTJDEgPSBsYWJDb25zdGFudHM7XG5cbiAgICBDb2xvciRrLnByb3RvdHlwZS5kYXJrZW4gPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0dmFyIG1lID0gdGhpcztcbiAgICBcdHZhciBsYWIgPSBtZS5sYWIoKTtcbiAgICBcdGxhYlswXSAtPSBMQUJfQ09OU1RBTlRTJDEuS24gKiBhbW91bnQ7XG4gICAgXHRyZXR1cm4gbmV3IENvbG9yJGsobGFiLCAnbGFiJykuYWxwaGEobWUuYWxwaGEoKSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIENvbG9yJGsucHJvdG90eXBlLmJyaWdodGVuID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgXHRpZiAoIGFtb3VudCA9PT0gdm9pZCAwICkgYW1vdW50PTE7XG5cbiAgICBcdHJldHVybiB0aGlzLmRhcmtlbigtYW1vdW50KTtcbiAgICB9O1xuXG4gICAgQ29sb3Ikay5wcm90b3R5cGUuZGFya2VyID0gQ29sb3Ikay5wcm90b3R5cGUuZGFya2VuO1xuICAgIENvbG9yJGsucHJvdG90eXBlLmJyaWdodGVyID0gQ29sb3Ikay5wcm90b3R5cGUuYnJpZ2h0ZW47XG5cbiAgICB2YXIgQ29sb3IkaiA9IENvbG9yXzE7XG5cbiAgICBDb2xvciRqLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobWMpIHtcbiAgICAgICAgdmFyIHJlZiA9IG1jLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBtb2RlID0gcmVmWzBdO1xuICAgICAgICB2YXIgY2hhbm5lbCA9IHJlZlsxXTtcbiAgICAgICAgdmFyIHNyYyA9IHRoaXNbbW9kZV0oKTtcbiAgICAgICAgaWYgKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHZhciBpID0gbW9kZS5pbmRleE9mKGNoYW5uZWwpIC0gKG1vZGUuc3Vic3RyKDAsIDIpID09PSAnb2snID8gMiA6IDApO1xuICAgICAgICAgICAgaWYgKGkgPiAtMSkgeyByZXR1cm4gc3JjW2ldOyB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwidW5rbm93biBjaGFubmVsIFwiICsgY2hhbm5lbCArIFwiIGluIG1vZGUgXCIgKyBtb2RlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRpID0gQ29sb3JfMTtcbiAgICB2YXIgdHlwZSQ1ID0gdXRpbHMudHlwZTtcbiAgICB2YXIgcG93JDYgPSBNYXRoLnBvdztcblxuICAgIHZhciBFUFMgPSAxZS03O1xuICAgIHZhciBNQVhfSVRFUiA9IDIwO1xuXG4gICAgQ29sb3IkaS5wcm90b3R5cGUubHVtaW5hbmNlID0gZnVuY3Rpb24obHVtKSB7XG4gICAgICAgIGlmIChsdW0gIT09IHVuZGVmaW5lZCAmJiB0eXBlJDUobHVtKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChsdW0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcHVyZSBibGFja1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkaShbMCwwLDAsdGhpcy5fcmdiWzNdXSwgJ3JnYicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGx1bSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBwdXJlIHdoaXRlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRpKFsyNTUsMjU1LDI1NSx0aGlzLl9yZ2JbM11dLCAncmdiJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb21wdXRlIG5ldyBjb2xvciB1c2luZy4uLlxuICAgICAgICAgICAgdmFyIGN1cl9sdW0gPSB0aGlzLmx1bWluYW5jZSgpO1xuICAgICAgICAgICAgdmFyIG1vZGUgPSAncmdiJztcbiAgICAgICAgICAgIHZhciBtYXhfaXRlciA9IE1BWF9JVEVSO1xuXG4gICAgICAgICAgICB2YXIgdGVzdCA9IGZ1bmN0aW9uIChsb3csIGhpZ2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWlkID0gbG93LmludGVycG9sYXRlKGhpZ2gsIDAuNSwgbW9kZSk7XG4gICAgICAgICAgICAgICAgdmFyIGxtID0gbWlkLmx1bWluYW5jZSgpO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhsdW0gLSBsbSkgPCBFUFMgfHwgIW1heF9pdGVyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xvc2UgZW5vdWdoXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBsbSA+IGx1bSA/IHRlc3QobG93LCBtaWQpIDogdGVzdChtaWQsIGhpZ2gpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHJnYiA9IChjdXJfbHVtID4gbHVtID8gdGVzdChuZXcgQ29sb3IkaShbMCwwLDBdKSwgdGhpcykgOiB0ZXN0KHRoaXMsIG5ldyBDb2xvciRpKFsyNTUsMjU1LDI1NV0pKSkucmdiKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJGkocmdiLmNvbmNhdCggW3RoaXMuX3JnYlszXV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmdiMmx1bWluYW5jZS5hcHBseSh2b2lkIDAsICh0aGlzLl9yZ2IpLnNsaWNlKDAsMykpO1xuICAgIH07XG5cblxuICAgIHZhciByZ2IybHVtaW5hbmNlID0gZnVuY3Rpb24gKHIsZyxiKSB7XG4gICAgICAgIC8vIHJlbGF0aXZlIGx1bWluYW5jZVxuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuICAgICAgICByID0gbHVtaW5hbmNlX3gocik7XG4gICAgICAgIGcgPSBsdW1pbmFuY2VfeChnKTtcbiAgICAgICAgYiA9IGx1bWluYW5jZV94KGIpO1xuICAgICAgICByZXR1cm4gMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiO1xuICAgIH07XG5cbiAgICB2YXIgbHVtaW5hbmNlX3ggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICB4IC89IDI1NTtcbiAgICAgICAgcmV0dXJuIHggPD0gMC4wMzkyOCA/IHgvMTIuOTIgOiBwb3ckNigoeCswLjA1NSkvMS4wNTUsIDIuNCk7XG4gICAgfTtcblxuICAgIHZhciBpbnRlcnBvbGF0b3IkMSA9IHt9O1xuXG4gICAgdmFyIENvbG9yJGggPSBDb2xvcl8xO1xuICAgIHZhciB0eXBlJDQgPSB1dGlscy50eXBlO1xuICAgIHZhciBpbnRlcnBvbGF0b3IgPSBpbnRlcnBvbGF0b3IkMTtcblxuICAgIHZhciBtaXgkMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIGlmICggZiA9PT0gdm9pZCAwICkgZj0wLjU7XG4gICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAzO1xuICAgICAgICB3aGlsZSAoIGxlbi0tID4gMCApIHJlc3RbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAzIF07XG5cbiAgICAgICAgdmFyIG1vZGUgPSByZXN0WzBdIHx8ICdscmdiJztcbiAgICAgICAgaWYgKCFpbnRlcnBvbGF0b3JbbW9kZV0gJiYgIXJlc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBmYWxsIGJhY2sgdG8gdGhlIGZpcnN0IHN1cHBvcnRlZCBtb2RlXG4gICAgICAgICAgICBtb2RlID0gT2JqZWN0LmtleXMoaW50ZXJwb2xhdG9yKVswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWludGVycG9sYXRvclttb2RlXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcImludGVycG9sYXRpb24gbW9kZSBcIiArIG1vZGUgKyBcIiBpcyBub3QgZGVmaW5lZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUkNChjb2wxKSAhPT0gJ29iamVjdCcpIHsgY29sMSA9IG5ldyBDb2xvciRoKGNvbDEpOyB9XG4gICAgICAgIGlmICh0eXBlJDQoY29sMikgIT09ICdvYmplY3QnKSB7IGNvbDIgPSBuZXcgQ29sb3IkaChjb2wyKTsgfVxuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdG9yW21vZGVdKGNvbDEsIGNvbDIsIGYpXG4gICAgICAgICAgICAuYWxwaGEoY29sMS5hbHBoYSgpICsgZiAqIChjb2wyLmFscGhhKCkgLSBjb2wxLmFscGhhKCkpKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGcgPSBDb2xvcl8xO1xuICAgIHZhciBtaXggPSBtaXgkMTtcblxuICAgIENvbG9yJGcucHJvdG90eXBlLm1peCA9XG4gICAgQ29sb3IkZy5wcm90b3R5cGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbihjb2wyLCBmKSB7XG4gICAgXHRpZiAoIGYgPT09IHZvaWQgMCApIGY9MC41O1xuICAgIFx0dmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgXHR3aGlsZSAoIGxlbi0tID4gMCApIHJlc3RbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAyIF07XG5cbiAgICBcdHJldHVybiBtaXguYXBwbHkodm9pZCAwLCBbIHRoaXMsIGNvbDIsIGYgXS5jb25jYXQoIHJlc3QgKSk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRmID0gQ29sb3JfMTtcblxuICAgIENvbG9yJGYucHJvdG90eXBlLnByZW11bHRpcGx5ID0gZnVuY3Rpb24obXV0YXRlKSB7XG4gICAgXHRpZiAoIG11dGF0ZSA9PT0gdm9pZCAwICkgbXV0YXRlPWZhbHNlO1xuXG4gICAgXHR2YXIgcmdiID0gdGhpcy5fcmdiO1xuICAgIFx0dmFyIGEgPSByZ2JbM107XG4gICAgXHRpZiAobXV0YXRlKSB7XG4gICAgXHRcdHRoaXMuX3JnYiA9IFtyZ2JbMF0qYSwgcmdiWzFdKmEsIHJnYlsyXSphLCBhXTtcbiAgICBcdFx0cmV0dXJuIHRoaXM7XG4gICAgXHR9IGVsc2Uge1xuICAgIFx0XHRyZXR1cm4gbmV3IENvbG9yJGYoW3JnYlswXSphLCByZ2JbMV0qYSwgcmdiWzJdKmEsIGFdLCAncmdiJyk7XG4gICAgXHR9XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRlID0gQ29sb3JfMTtcbiAgICB2YXIgTEFCX0NPTlNUQU5UUyA9IGxhYkNvbnN0YW50cztcblxuICAgIENvbG9yJGUucHJvdG90eXBlLnNhdHVyYXRlID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgXHRpZiAoIGFtb3VudCA9PT0gdm9pZCAwICkgYW1vdW50PTE7XG5cbiAgICBcdHZhciBtZSA9IHRoaXM7XG4gICAgXHR2YXIgbGNoID0gbWUubGNoKCk7XG4gICAgXHRsY2hbMV0gKz0gTEFCX0NPTlNUQU5UUy5LbiAqIGFtb3VudDtcbiAgICBcdGlmIChsY2hbMV0gPCAwKSB7IGxjaFsxXSA9IDA7IH1cbiAgICBcdHJldHVybiBuZXcgQ29sb3IkZShsY2gsICdsY2gnKS5hbHBoYShtZS5hbHBoYSgpLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgQ29sb3IkZS5wcm90b3R5cGUuZGVzYXR1cmF0ZSA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHRyZXR1cm4gdGhpcy5zYXR1cmF0ZSgtYW1vdW50KTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGQgPSBDb2xvcl8xO1xuICAgIHZhciB0eXBlJDMgPSB1dGlscy50eXBlO1xuXG4gICAgQ29sb3IkZC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKG1jLCB2YWx1ZSwgbXV0YXRlKSB7XG4gICAgICAgIGlmICggbXV0YXRlID09PSB2b2lkIDAgKSBtdXRhdGUgPSBmYWxzZTtcblxuICAgICAgICB2YXIgcmVmID0gbWMuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG1vZGUgPSByZWZbMF07XG4gICAgICAgIHZhciBjaGFubmVsID0gcmVmWzFdO1xuICAgICAgICB2YXIgc3JjID0gdGhpc1ttb2RlXSgpO1xuICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgdmFyIGkgPSBtb2RlLmluZGV4T2YoY2hhbm5lbCkgLSAobW9kZS5zdWJzdHIoMCwgMikgPT09ICdvaycgPyAyIDogMCk7XG4gICAgICAgICAgICBpZiAoaSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUkMyh2YWx1ZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSArPSArdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gKz0gK3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldICo9ICt2YWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gLz0gK3ZhbHVlLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldID0gK3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlJDModmFsdWUpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBzcmNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnN1cHBvcnRlZCB2YWx1ZSBmb3IgQ29sb3Iuc2V0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgb3V0ID0gbmV3IENvbG9yJGQoc3JjLCBtb2RlKTtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JnYiA9IG91dC5fcmdiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJ1bmtub3duIGNoYW5uZWwgXCIgKyBjaGFubmVsICsgXCIgaW4gbW9kZSBcIiArIG1vZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGMgPSBDb2xvcl8xO1xuXG4gICAgdmFyIHJnYiA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciB4eXowID0gY29sMS5fcmdiO1xuICAgICAgICB2YXIgeHl6MSA9IGNvbDIuX3JnYjtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRjKFxuICAgICAgICAgICAgeHl6MFswXSArIGYgKiAoeHl6MVswXS14eXowWzBdKSxcbiAgICAgICAgICAgIHh5ejBbMV0gKyBmICogKHh5ejFbMV0teHl6MFsxXSksXG4gICAgICAgICAgICB4eXowWzJdICsgZiAqICh4eXoxWzJdLXh5ejBbMl0pLFxuICAgICAgICAgICAgJ3JnYidcbiAgICAgICAgKVxuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5yZ2IgPSByZ2I7XG5cbiAgICB2YXIgQ29sb3IkYiA9IENvbG9yXzE7XG4gICAgdmFyIHNxcnQkMiA9IE1hdGguc3FydDtcbiAgICB2YXIgcG93JDUgPSBNYXRoLnBvdztcblxuICAgIHZhciBscmdiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHJlZiA9IGNvbDEuX3JnYjtcbiAgICAgICAgdmFyIHgxID0gcmVmWzBdO1xuICAgICAgICB2YXIgeTEgPSByZWZbMV07XG4gICAgICAgIHZhciB6MSA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gY29sMi5fcmdiO1xuICAgICAgICB2YXIgeDIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIHkyID0gcmVmJDFbMV07XG4gICAgICAgIHZhciB6MiA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yJGIoXG4gICAgICAgICAgICBzcXJ0JDIocG93JDUoeDEsMikgKiAoMS1mKSArIHBvdyQ1KHgyLDIpICogZiksXG4gICAgICAgICAgICBzcXJ0JDIocG93JDUoeTEsMikgKiAoMS1mKSArIHBvdyQ1KHkyLDIpICogZiksXG4gICAgICAgICAgICBzcXJ0JDIocG93JDUoejEsMikgKiAoMS1mKSArIHBvdyQ1KHoyLDIpICogZiksXG4gICAgICAgICAgICAncmdiJ1xuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmxyZ2IgPSBscmdiO1xuXG4gICAgdmFyIENvbG9yJGEgPSBDb2xvcl8xO1xuXG4gICAgdmFyIGxhYiA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciB4eXowID0gY29sMS5sYWIoKTtcbiAgICAgICAgdmFyIHh5ejEgPSBjb2wyLmxhYigpO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yJGEoXG4gICAgICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdLXh5ejBbMF0pLFxuICAgICAgICAgICAgeHl6MFsxXSArIGYgKiAoeHl6MVsxXS14eXowWzFdKSxcbiAgICAgICAgICAgIHh5ejBbMl0gKyBmICogKHh5ejFbMl0teHl6MFsyXSksXG4gICAgICAgICAgICAnbGFiJ1xuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmxhYiA9IGxhYjtcblxuICAgIHZhciBDb2xvciQ5ID0gQ29sb3JfMTtcblxuICAgIHZhciBfaHN4ID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYsIG0pIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDE7XG5cbiAgICAgICAgdmFyIHh5ejAsIHh5ejE7XG4gICAgICAgIGlmIChtID09PSAnaHNsJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaHNsKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oc2woKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnaHN2Jykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaHN2KCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oc3YoKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnaGNnJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaGNnKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oY2coKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnaHNpJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaHNpKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oc2koKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnbGNoJyB8fCBtID09PSAnaGNsJykge1xuICAgICAgICAgICAgbSA9ICdoY2wnO1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaGNsKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oY2woKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnb2tsY2gnKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5va2xjaCgpLnJldmVyc2UoKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLm9rbGNoKCkucmV2ZXJzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGh1ZTAsIGh1ZTEsIHNhdDAsIHNhdDEsIGxidjAsIGxidjE7XG4gICAgICAgIGlmIChtLnN1YnN0cigwLCAxKSA9PT0gJ2gnIHx8IG0gPT09ICdva2xjaCcpIHtcbiAgICAgICAgICAgIChhc3NpZ24gPSB4eXowLCBodWUwID0gYXNzaWduWzBdLCBzYXQwID0gYXNzaWduWzFdLCBsYnYwID0gYXNzaWduWzJdKTtcbiAgICAgICAgICAgIChhc3NpZ24kMSA9IHh5ejEsIGh1ZTEgPSBhc3NpZ24kMVswXSwgc2F0MSA9IGFzc2lnbiQxWzFdLCBsYnYxID0gYXNzaWduJDFbMl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNhdCwgaHVlLCBsYnYsIGRoO1xuXG4gICAgICAgIGlmICghaXNOYU4oaHVlMCkgJiYgIWlzTmFOKGh1ZTEpKSB7XG4gICAgICAgICAgICAvLyBib3RoIGNvbG9ycyBoYXZlIGh1ZVxuICAgICAgICAgICAgaWYgKGh1ZTEgPiBodWUwICYmIGh1ZTEgLSBodWUwID4gMTgwKSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWUxIC0gKGh1ZTAgKyAzNjApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChodWUxIDwgaHVlMCAmJiBodWUwIC0gaHVlMSA+IDE4MCkge1xuICAgICAgICAgICAgICAgIGRoID0gaHVlMSArIDM2MCAtIGh1ZTA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRoID0gaHVlMSAtIGh1ZTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodWUgPSBodWUwICsgZiAqIGRoO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihodWUwKSkge1xuICAgICAgICAgICAgaHVlID0gaHVlMDtcbiAgICAgICAgICAgIGlmICgobGJ2MSA9PSAxIHx8IGxidjEgPT0gMCkgJiYgbSAhPSAnaHN2JykgeyBzYXQgPSBzYXQwOyB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKGh1ZTEpKSB7XG4gICAgICAgICAgICBodWUgPSBodWUxO1xuICAgICAgICAgICAgaWYgKChsYnYwID09IDEgfHwgbGJ2MCA9PSAwKSAmJiBtICE9ICdoc3YnKSB7IHNhdCA9IHNhdDE7IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh1ZSA9IE51bWJlci5OYU47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2F0ID09PSB1bmRlZmluZWQpIHsgc2F0ID0gc2F0MCArIGYgKiAoc2F0MSAtIHNhdDApOyB9XG4gICAgICAgIGxidiA9IGxidjAgKyBmICogKGxidjEgLSBsYnYwKTtcbiAgICAgICAgcmV0dXJuIG0gPT09ICdva2xjaCcgPyBuZXcgQ29sb3IkOShbbGJ2LCBzYXQsIGh1ZV0sIG0pIDogbmV3IENvbG9yJDkoW2h1ZSwgc2F0LCBsYnZdLCBtKTtcbiAgICB9O1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQ1ID0gX2hzeDtcblxuICAgIHZhciBsY2ggPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQ1KGNvbDEsIGNvbDIsIGYsICdsY2gnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEubGNoID0gbGNoO1xuICAgIGludGVycG9sYXRvciQxLmhjbCA9IGxjaDtcblxuICAgIHZhciBDb2xvciQ4ID0gQ29sb3JfMTtcblxuICAgIHZhciBudW0gPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgYzEgPSBjb2wxLm51bSgpO1xuICAgICAgICB2YXIgYzIgPSBjb2wyLm51bSgpO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yJDgoYzEgKyBmICogKGMyLWMxKSwgJ251bScpXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLm51bSA9IG51bTtcblxuICAgIHZhciBpbnRlcnBvbGF0ZV9oc3gkNCA9IF9oc3g7XG5cbiAgICB2YXIgaGNnID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICBcdHJldHVybiBpbnRlcnBvbGF0ZV9oc3gkNChjb2wxLCBjb2wyLCBmLCAnaGNnJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmhjZyA9IGhjZztcblxuICAgIHZhciBpbnRlcnBvbGF0ZV9oc3gkMyA9IF9oc3g7XG5cbiAgICB2YXIgaHNpID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICBcdHJldHVybiBpbnRlcnBvbGF0ZV9oc3gkMyhjb2wxLCBjb2wyLCBmLCAnaHNpJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmhzaSA9IGhzaTtcblxuICAgIHZhciBpbnRlcnBvbGF0ZV9oc3gkMiA9IF9oc3g7XG5cbiAgICB2YXIgaHNsID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICBcdHJldHVybiBpbnRlcnBvbGF0ZV9oc3gkMihjb2wxLCBjb2wyLCBmLCAnaHNsJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmhzbCA9IGhzbDtcblxuICAgIHZhciBpbnRlcnBvbGF0ZV9oc3gkMSA9IF9oc3g7XG5cbiAgICB2YXIgaHN2ID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICBcdHJldHVybiBpbnRlcnBvbGF0ZV9oc3gkMShjb2wxLCBjb2wyLCBmLCAnaHN2Jyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmhzdiA9IGhzdjtcblxuICAgIHZhciBDb2xvciQ3ID0gQ29sb3JfMTtcblxuICAgIHZhciBva2xhYiA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciB4eXowID0gY29sMS5va2xhYigpO1xuICAgICAgICB2YXIgeHl6MSA9IGNvbDIub2tsYWIoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ3KFxuICAgICAgICAgICAgeHl6MFswXSArIGYgKiAoeHl6MVswXSAtIHh5ejBbMF0pLFxuICAgICAgICAgICAgeHl6MFsxXSArIGYgKiAoeHl6MVsxXSAtIHh5ejBbMV0pLFxuICAgICAgICAgICAgeHl6MFsyXSArIGYgKiAoeHl6MVsyXSAtIHh5ejBbMl0pLFxuICAgICAgICAgICAgJ29rbGFiJ1xuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5va2xhYiA9IG9rbGFiO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCA9IF9oc3g7XG5cbiAgICB2YXIgb2tsY2ggPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGVfaHN4KGNvbDEsIGNvbDIsIGYsICdva2xjaCcpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5va2xjaCA9IG9rbGNoO1xuXG4gICAgdmFyIENvbG9yJDYgPSBDb2xvcl8xO1xuICAgIHZhciBjbGlwX3JnYiQxID0gdXRpbHMuY2xpcF9yZ2I7XG4gICAgdmFyIHBvdyQ0ID0gTWF0aC5wb3c7XG4gICAgdmFyIHNxcnQkMSA9IE1hdGguc3FydDtcbiAgICB2YXIgUEkkMSA9IE1hdGguUEk7XG4gICAgdmFyIGNvcyQyID0gTWF0aC5jb3M7XG4gICAgdmFyIHNpbiQyID0gTWF0aC5zaW47XG4gICAgdmFyIGF0YW4yJDEgPSBNYXRoLmF0YW4yO1xuXG4gICAgdmFyIGF2ZXJhZ2UgPSBmdW5jdGlvbiAoY29sb3JzLCBtb2RlLCB3ZWlnaHRzKSB7XG4gICAgICAgIGlmICggbW9kZSA9PT0gdm9pZCAwICkgbW9kZT0nbHJnYic7XG4gICAgICAgIGlmICggd2VpZ2h0cyA9PT0gdm9pZCAwICkgd2VpZ2h0cz1udWxsO1xuXG4gICAgICAgIHZhciBsID0gY29sb3JzLmxlbmd0aDtcbiAgICAgICAgaWYgKCF3ZWlnaHRzKSB7IHdlaWdodHMgPSBBcnJheS5mcm9tKG5ldyBBcnJheShsKSkubWFwKGZ1bmN0aW9uICgpIHsgcmV0dXJuIDE7IH0pOyB9XG4gICAgICAgIC8vIG5vcm1hbGl6ZSB3ZWlnaHRzXG4gICAgICAgIHZhciBrID0gbCAvIHdlaWdodHMucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgKyBiOyB9KTtcbiAgICAgICAgd2VpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uICh3LGkpIHsgd2VpZ2h0c1tpXSAqPSBrOyB9KTtcbiAgICAgICAgLy8gY29udmVydCBjb2xvcnMgdG8gQ29sb3Igb2JqZWN0c1xuICAgICAgICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBuZXcgQ29sb3IkNihjKTsgfSk7XG4gICAgICAgIGlmIChtb2RlID09PSAnbHJnYicpIHtcbiAgICAgICAgICAgIHJldHVybiBfYXZlcmFnZV9scmdiKGNvbG9ycywgd2VpZ2h0cylcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlyc3QgPSBjb2xvcnMuc2hpZnQoKTtcbiAgICAgICAgdmFyIHh5eiA9IGZpcnN0LmdldChtb2RlKTtcbiAgICAgICAgdmFyIGNudCA9IFtdO1xuICAgICAgICB2YXIgZHggPSAwO1xuICAgICAgICB2YXIgZHkgPSAwO1xuICAgICAgICAvLyBpbml0aWFsIGNvbG9yXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTx4eXoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHh5eltpXSA9ICh4eXpbaV0gfHwgMCkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICAgICAgY250LnB1c2goaXNOYU4oeHl6W2ldKSA/IDAgOiB3ZWlnaHRzWzBdKTtcbiAgICAgICAgICAgIGlmIChtb2RlLmNoYXJBdChpKSA9PT0gJ2gnICYmICFpc05hTih4eXpbaV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIEEgPSB4eXpbaV0gLyAxODAgKiBQSSQxO1xuICAgICAgICAgICAgICAgIGR4ICs9IGNvcyQyKEEpICogd2VpZ2h0c1swXTtcbiAgICAgICAgICAgICAgICBkeSArPSBzaW4kMihBKSAqIHdlaWdodHNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWxwaGEgPSBmaXJzdC5hbHBoYSgpICogd2VpZ2h0c1swXTtcbiAgICAgICAgY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGMsY2kpIHtcbiAgICAgICAgICAgIHZhciB4eXoyID0gYy5nZXQobW9kZSk7XG4gICAgICAgICAgICBhbHBoYSArPSBjLmFscGhhKCkgKiB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHh5ei5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oeHl6MltpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY250W2ldICs9IHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlLmNoYXJBdChpKSA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgQSA9IHh5ejJbaV0gLyAxODAgKiBQSSQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHggKz0gY29zJDIoQSkgKiB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHkgKz0gc2luJDIoQSkgKiB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgeHl6W2ldICs9IHh5ejJbaV0gKiB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpJDE9MDsgaSQxPHh5ei5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgICAgICBpZiAobW9kZS5jaGFyQXQoaSQxKSA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgdmFyIEEkMSA9IGF0YW4yJDEoZHkgLyBjbnRbaSQxXSwgZHggLyBjbnRbaSQxXSkgLyBQSSQxICogMTgwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChBJDEgPCAwKSB7IEEkMSArPSAzNjA7IH1cbiAgICAgICAgICAgICAgICB3aGlsZSAoQSQxID49IDM2MCkgeyBBJDEgLT0gMzYwOyB9XG4gICAgICAgICAgICAgICAgeHl6W2kkMV0gPSBBJDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHh5eltpJDFdID0geHl6W2kkMV0vY250W2kkMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWxwaGEgLz0gbDtcbiAgICAgICAgcmV0dXJuIChuZXcgQ29sb3IkNih4eXosIG1vZGUpKS5hbHBoYShhbHBoYSA+IDAuOTk5OTkgPyAxIDogYWxwaGEsIHRydWUpO1xuICAgIH07XG5cblxuICAgIHZhciBfYXZlcmFnZV9scmdiID0gZnVuY3Rpb24gKGNvbG9ycywgd2VpZ2h0cykge1xuICAgICAgICB2YXIgbCA9IGNvbG9ycy5sZW5ndGg7XG4gICAgICAgIHZhciB4eXogPSBbMCwwLDAsMF07XG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbCA9IGNvbG9yc1tpXTtcbiAgICAgICAgICAgIHZhciBmID0gd2VpZ2h0c1tpXSAvIGw7XG4gICAgICAgICAgICB2YXIgcmdiID0gY29sLl9yZ2I7XG4gICAgICAgICAgICB4eXpbMF0gKz0gcG93JDQocmdiWzBdLDIpICogZjtcbiAgICAgICAgICAgIHh5elsxXSArPSBwb3ckNChyZ2JbMV0sMikgKiBmO1xuICAgICAgICAgICAgeHl6WzJdICs9IHBvdyQ0KHJnYlsyXSwyKSAqIGY7XG4gICAgICAgICAgICB4eXpbM10gKz0gcmdiWzNdICogZjtcbiAgICAgICAgfVxuICAgICAgICB4eXpbMF0gPSBzcXJ0JDEoeHl6WzBdKTtcbiAgICAgICAgeHl6WzFdID0gc3FydCQxKHh5elsxXSk7XG4gICAgICAgIHh5elsyXSA9IHNxcnQkMSh4eXpbMl0pO1xuICAgICAgICBpZiAoeHl6WzNdID4gMC45OTk5OTk5KSB7IHh5elszXSA9IDE7IH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ2KGNsaXBfcmdiJDEoeHl6KSk7XG4gICAgfTtcblxuICAgIC8vIG1pbmltYWwgbXVsdGktcHVycG9zZSBpbnRlcmZhY2VcblxuICAgIC8vIEByZXF1aXJlcyB1dGlscyBjb2xvciBhbmFseXplXG5cbiAgICB2YXIgY2hyb21hJDQgPSBjaHJvbWFfMTtcbiAgICB2YXIgdHlwZSQyID0gdXRpbHMudHlwZTtcblxuICAgIHZhciBwb3ckMyA9IE1hdGgucG93O1xuXG4gICAgdmFyIHNjYWxlJDIgPSBmdW5jdGlvbihjb2xvcnMpIHtcblxuICAgICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICB2YXIgX21vZGUgPSAncmdiJztcbiAgICAgICAgdmFyIF9uYWNvbCA9IGNocm9tYSQ0KCcjY2NjJyk7XG4gICAgICAgIHZhciBfc3ByZWFkID0gMDtcbiAgICAgICAgLy8gY29uc3QgX2ZpeGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBfZG9tYWluID0gWzAsIDFdO1xuICAgICAgICB2YXIgX3BvcyA9IFtdO1xuICAgICAgICB2YXIgX3BhZGRpbmcgPSBbMCwwXTtcbiAgICAgICAgdmFyIF9jbGFzc2VzID0gZmFsc2U7XG4gICAgICAgIHZhciBfY29sb3JzID0gW107XG4gICAgICAgIHZhciBfb3V0ID0gZmFsc2U7XG4gICAgICAgIHZhciBfbWluID0gMDtcbiAgICAgICAgdmFyIF9tYXggPSAxO1xuICAgICAgICB2YXIgX2NvcnJlY3RMaWdodG5lc3MgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9jb2xvckNhY2hlID0ge307XG4gICAgICAgIHZhciBfdXNlQ2FjaGUgPSB0cnVlO1xuICAgICAgICB2YXIgX2dhbW1hID0gMTtcblxuICAgICAgICAvLyBwcml2YXRlIG1ldGhvZHNcblxuICAgICAgICB2YXIgc2V0Q29sb3JzID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgICAgICAgICBjb2xvcnMgPSBjb2xvcnMgfHwgWycjZmZmJywgJyMwMDAnXTtcbiAgICAgICAgICAgIGlmIChjb2xvcnMgJiYgdHlwZSQyKGNvbG9ycykgPT09ICdzdHJpbmcnICYmIGNocm9tYSQ0LmJyZXdlciAmJlxuICAgICAgICAgICAgICAgIGNocm9tYSQ0LmJyZXdlcltjb2xvcnMudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBjaHJvbWEkNC5icmV3ZXJbY29sb3JzLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUkMihjb2xvcnMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHNpbmdsZSBjb2xvclxuICAgICAgICAgICAgICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycyA9IFtjb2xvcnNbMF0sIGNvbG9yc1swXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIG1ha2UgYSBjb3B5IG9mIHRoZSBjb2xvcnNcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBjb2xvcnMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgLy8gY29udmVydCB0byBjaHJvbWEgY2xhc3Nlc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzxjb2xvcnMubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzW2NdID0gY2hyb21hJDQoY29sb3JzW2NdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYXV0by1maWxsIGNvbG9yIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgX3Bvcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGMkMT0wOyBjJDE8Y29sb3JzLmxlbmd0aDsgYyQxKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX3Bvcy5wdXNoKGMkMS8oY29sb3JzLmxlbmd0aC0xKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb2xvcnMgPSBjb2xvcnM7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGdldENsYXNzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChfY2xhc3NlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBfY2xhc3Nlcy5sZW5ndGgtMTtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBuICYmIHZhbHVlID49IF9jbGFzc2VzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGktMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0TWFwTGlnaHRuZXNzID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH07XG4gICAgICAgIHZhciB0TWFwRG9tYWluID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH07XG5cbiAgICAgICAgLy8gY29uc3QgY2xhc3NpZnlWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICBsZXQgdmFsID0gdmFsdWU7XG4gICAgICAgIC8vICAgICBpZiAoX2NsYXNzZXMubGVuZ3RoID4gMikge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG4gPSBfY2xhc3Nlcy5sZW5ndGgtMTtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBpID0gZ2V0Q2xhc3ModmFsdWUpO1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1pbmMgPSBfY2xhc3Nlc1swXSArICgoX2NsYXNzZXNbMV0tX2NsYXNzZXNbMF0pICogKDAgKyAoX3NwcmVhZCAqIDAuNSkpKTsgIC8vIGNlbnRlciBvZiAxc3QgY2xhc3NcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBtYXhjID0gX2NsYXNzZXNbbi0xXSArICgoX2NsYXNzZXNbbl0tX2NsYXNzZXNbbi0xXSkgKiAoMSAtIChfc3ByZWFkICogMC41KSkpOyAgLy8gY2VudGVyIG9mIGxhc3QgY2xhc3NcbiAgICAgICAgLy8gICAgICAgICB2YWwgPSBfbWluICsgKCgoKF9jbGFzc2VzW2ldICsgKChfY2xhc3Nlc1tpKzFdIC0gX2NsYXNzZXNbaV0pICogMC41KSkgLSBtaW5jKSAvIChtYXhjLW1pbmMpKSAqIChfbWF4IC0gX21pbikpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgLy8gfTtcblxuICAgICAgICB2YXIgZ2V0Q29sb3IgPSBmdW5jdGlvbih2YWwsIGJ5cGFzc01hcCkge1xuICAgICAgICAgICAgdmFyIGNvbCwgdDtcbiAgICAgICAgICAgIGlmIChieXBhc3NNYXAgPT0gbnVsbCkgeyBieXBhc3NNYXAgPSBmYWxzZTsgfVxuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbCkgfHwgKHZhbCA9PT0gbnVsbCkpIHsgcmV0dXJuIF9uYWNvbDsgfVxuICAgICAgICAgICAgaWYgKCFieXBhc3NNYXApIHtcbiAgICAgICAgICAgICAgICBpZiAoX2NsYXNzZXMgJiYgKF9jbGFzc2VzLmxlbmd0aCA+IDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gZ2V0Q2xhc3ModmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdCA9IGMgLyAoX2NsYXNzZXMubGVuZ3RoLTIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX21heCAhPT0gX21pbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IGludGVycG9sYXRlIGJldHdlZW4gbWluL21heFxuICAgICAgICAgICAgICAgICAgICB0ID0gKHZhbCAtIF9taW4pIC8gKF9tYXggLSBfbWluKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHQgPSB2YWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRvbWFpbiBtYXBcbiAgICAgICAgICAgIHQgPSB0TWFwRG9tYWluKHQpO1xuXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc01hcCkge1xuICAgICAgICAgICAgICAgIHQgPSB0TWFwTGlnaHRuZXNzKHQpOyAgLy8gbGlnaHRuZXNzIGNvcnJlY3Rpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF9nYW1tYSAhPT0gMSkgeyB0ID0gcG93JDModCwgX2dhbW1hKTsgfVxuXG4gICAgICAgICAgICB0ID0gX3BhZGRpbmdbMF0gKyAodCAqICgxIC0gX3BhZGRpbmdbMF0gLSBfcGFkZGluZ1sxXSkpO1xuXG4gICAgICAgICAgICB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgdCkpO1xuXG4gICAgICAgICAgICB2YXIgayA9IE1hdGguZmxvb3IodCAqIDEwMDAwKTtcblxuICAgICAgICAgICAgaWYgKF91c2VDYWNoZSAmJiBfY29sb3JDYWNoZVtrXSkge1xuICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvckNhY2hlW2tdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSQyKF9jb2xvcnMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vZm9yIGkgaW4gWzAuLl9wb3MubGVuZ3RoLTFdXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxfcG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IF9wb3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA8PSBwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodCA+PSBwKSAmJiAoaSA9PT0gKF9wb3MubGVuZ3RoLTEpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA+IHAgJiYgdCA8IF9wb3NbaSsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAodC1wKS8oX3Bvc1tpKzFdLXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IGNocm9tYSQ0LmludGVycG9sYXRlKF9jb2xvcnNbaV0sIF9jb2xvcnNbaSsxXSwgdCwgX21vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlJDIoX2NvbG9ycykgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9ycyh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF91c2VDYWNoZSkgeyBfY29sb3JDYWNoZVtrXSA9IGNvbDsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbDtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVzZXRDYWNoZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9jb2xvckNhY2hlID0ge307IH07XG5cbiAgICAgICAgc2V0Q29sb3JzKGNvbG9ycyk7XG5cbiAgICAgICAgLy8gcHVibGljIGludGVyZmFjZVxuXG4gICAgICAgIHZhciBmID0gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgdmFyIGMgPSBjaHJvbWEkNChnZXRDb2xvcih2KSk7XG4gICAgICAgICAgICBpZiAoX291dCAmJiBjW19vdXRdKSB7IHJldHVybiBjW19vdXRdKCk7IH0gZWxzZSB7IHJldHVybiBjOyB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jbGFzc2VzID0gZnVuY3Rpb24oY2xhc3Nlcykge1xuICAgICAgICAgICAgaWYgKGNsYXNzZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJDIoY2xhc3NlcykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgX2NsYXNzZXMgPSBjbGFzc2VzO1xuICAgICAgICAgICAgICAgICAgICBfZG9tYWluID0gW2NsYXNzZXNbMF0sIGNsYXNzZXNbY2xhc3Nlcy5sZW5ndGgtMV1dO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gY2hyb21hJDQuYW5hbHl6ZShfZG9tYWluKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gW2QubWluLCBkLm1heF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2xhc3NlcyA9IGNocm9tYSQ0LmxpbWl0cyhkLCAnZScsIGNsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9jbGFzc2VzO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgZi5kb21haW4gPSBmdW5jdGlvbihkb21haW4pIHtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfZG9tYWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX21pbiA9IGRvbWFpblswXTtcbiAgICAgICAgICAgIF9tYXggPSBkb21haW5bZG9tYWluLmxlbmd0aC0xXTtcbiAgICAgICAgICAgIF9wb3MgPSBbXTtcbiAgICAgICAgICAgIHZhciBrID0gX2NvbG9ycy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoKGRvbWFpbi5sZW5ndGggPT09IGspICYmIChfbWluICE9PSBfbWF4KSkge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBwb3NpdGlvbnNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IEFycmF5LmZyb20oZG9tYWluKTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgICBfcG9zLnB1c2goKGQtX21pbikgLyAoX21heC1fbWluKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8azsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wb3MucHVzaChjLyhrLTEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRvbWFpbi5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBkb21haW4gbWFwXG4gICAgICAgICAgICAgICAgICAgIHZhciB0T3V0ID0gZG9tYWluLm1hcChmdW5jdGlvbiAoZCxpKSB7IHJldHVybiBpLyhkb21haW4ubGVuZ3RoLTEpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRCcmVha3MgPSBkb21haW4ubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiAoZCAtIF9taW4pIC8gKF9tYXggLSBfbWluKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdEJyZWFrcy5ldmVyeShmdW5jdGlvbiAodmFsLCBpKSB7IHJldHVybiB0T3V0W2ldID09PSB2YWw7IH0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0TWFwRG9tYWluID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA8PSAwIHx8IHQgPj0gMSkgeyByZXR1cm4gdDsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodCA+PSB0QnJlYWtzW2krMV0pIHsgaSsrOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSAodCAtIHRCcmVha3NbaV0pIC8gKHRCcmVha3NbaSsxXSAtIHRCcmVha3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvdXQgPSB0T3V0W2ldICsgZiAqICh0T3V0W2krMV0gLSB0T3V0W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2RvbWFpbiA9IFtfbWluLCBfbWF4XTtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYubW9kZSA9IGZ1bmN0aW9uKF9tKSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX21vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbW9kZSA9IF9tO1xuICAgICAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5yYW5nZSA9IGZ1bmN0aW9uKGNvbG9ycywgX3Bvcykge1xuICAgICAgICAgICAgc2V0Q29sb3JzKGNvbG9ycyk7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLm91dCA9IGZ1bmN0aW9uKF9vKSB7XG4gICAgICAgICAgICBfb3V0ID0gX287XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnNwcmVhZCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zcHJlYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc3ByZWFkID0gdmFsO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jb3JyZWN0TGlnaHRuZXNzID0gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCkgeyB2ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgX2NvcnJlY3RMaWdodG5lc3MgPSB2O1xuICAgICAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICAgICAgaWYgKF9jb3JyZWN0TGlnaHRuZXNzKSB7XG4gICAgICAgICAgICAgICAgdE1hcExpZ2h0bmVzcyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEwwID0gZ2V0Q29sb3IoMCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBMMSA9IGdldENvbG9yKDEsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9sID0gTDAgPiBMMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIExfYWN0dWFsID0gZ2V0Q29sb3IodCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBMX2lkZWFsID0gTDAgKyAoKEwxIC0gTDApICogdCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBMX2RpZmYgPSBMX2FjdHVhbCAtIExfaWRlYWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0MCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0MSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXhfaXRlciA9IDIwO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKE1hdGguYWJzKExfZGlmZikgPiAxZS0yKSAmJiAobWF4X2l0ZXItLSA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvbCkgeyBMX2RpZmYgKj0gLTE7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTF9kaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MCA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gKHQxIC0gdCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9ICh0MCAtIHQpICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMX2FjdHVhbCA9IGdldENvbG9yKHQsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBMX2RpZmYgPSBMX2FjdHVhbCAtIExfaWRlYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRNYXBMaWdodG5lc3MgPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYucGFkZGluZyA9IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgIGlmIChwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSQyKHApID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBwID0gW3AscF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9wYWRkaW5nID0gcDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYuY29sb3JzID0gZnVuY3Rpb24obnVtQ29sb3JzLCBvdXQpIHtcbiAgICAgICAgICAgIC8vIElmIG5vIGFyZ3VtZW50cyBhcmUgZ2l2ZW4sIHJldHVybiB0aGUgb3JpZ2luYWwgY29sb3JzIHRoYXQgd2VyZSBwcm92aWRlZFxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7IG91dCA9ICdoZXgnOyB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2NvbG9ycy5zbGljZSgwKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1Db2xvcnMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbZigwLjUpXTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1Db2xvcnMgPiAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRtID0gX2RvbWFpblswXTtcbiAgICAgICAgICAgICAgICB2YXIgZGQgPSBfZG9tYWluWzFdIC0gZG07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX19yYW5nZV9fKDAsIG51bUNvbG9ycywgZmFsc2UpLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gZiggZG0gKyAoKGkvKG51bUNvbG9ycy0xKSkgKiBkZCkgKTsgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIHJldHVybnMgYWxsIGNvbG9ycyBiYXNlZCBvbiB0aGUgZGVmaW5lZCBjbGFzc2VzXG4gICAgICAgICAgICAgICAgY29sb3JzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHNhbXBsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoX2NsYXNzZXMgJiYgKF9jbGFzc2VzLmxlbmd0aCA+IDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxLCBlbmQgPSBfY2xhc3Nlcy5sZW5ndGgsIGFzYyA9IDEgPD0gZW5kOyBhc2MgPyBpIDwgZW5kIDogaSA+IGVuZDsgYXNjID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVzLnB1c2goKF9jbGFzc2VzW2ktMV0rX2NsYXNzZXNbaV0pKjAuNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVzID0gX2RvbWFpbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc2FtcGxlcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGYodik7IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hyb21hJDRbb3V0XSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGNbb3V0XSgpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jYWNoZSA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIGlmIChjICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfdXNlQ2FjaGUgPSBjO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3VzZUNhY2hlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYuZ2FtbWEgPSBmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICBpZiAoZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX2dhbW1hID0gZztcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9nYW1tYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmLm5vZGF0YSA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIGlmIChkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfbmFjb2wgPSBjaHJvbWEkNChkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9uYWNvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX19yYW5nZV9fKGxlZnQsIHJpZ2h0LCBpbmNsdXNpdmUpIHtcbiAgICAgIHZhciByYW5nZSA9IFtdO1xuICAgICAgdmFyIGFzY2VuZGluZyA9IGxlZnQgPCByaWdodDtcbiAgICAgIHZhciBlbmQgPSAhaW5jbHVzaXZlID8gcmlnaHQgOiBhc2NlbmRpbmcgPyByaWdodCArIDEgOiByaWdodCAtIDE7XG4gICAgICBmb3IgKHZhciBpID0gbGVmdDsgYXNjZW5kaW5nID8gaSA8IGVuZCA6IGkgPiBlbmQ7IGFzY2VuZGluZyA/IGkrKyA6IGktLSkge1xuICAgICAgICByYW5nZS5wdXNoKGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gaW50ZXJwb2xhdGVzIGJldHdlZW4gYSBzZXQgb2YgY29sb3JzIHV6aW5nIGEgYmV6aWVyIHNwbGluZVxuICAgIC8vXG5cbiAgICAvLyBAcmVxdWlyZXMgdXRpbHMgbGFiXG4gICAgdmFyIENvbG9yJDUgPSBDb2xvcl8xO1xuXG4gICAgdmFyIHNjYWxlJDEgPSBzY2FsZSQyO1xuXG4gICAgLy8gbnRoIHJvdyBvZiB0aGUgcGFzY2FsIHRyaWFuZ2xlXG4gICAgdmFyIGJpbm9tX3JvdyA9IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgdmFyIHJvdyA9IFsxLCAxXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuZXdyb3cgPSBbMV07XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8PSByb3cubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBuZXdyb3dbal0gPSAocm93W2pdIHx8IDApICsgcm93W2ogLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvdyA9IG5ld3JvdztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93O1xuICAgIH07XG5cbiAgICB2YXIgYmV6aWVyID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxLCBhc3NpZ24kMjtcblxuICAgICAgICB2YXIgSSwgbGFiMCwgbGFiMSwgbGFiMjtcbiAgICAgICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gbmV3IENvbG9yJDUoYyk7IH0pO1xuICAgICAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgLy8gbGluZWFyIGludGVycG9sYXRpb25cbiAgICAgICAgICAgIChhc3NpZ24gPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KSwgbGFiMCA9IGFzc2lnblswXSwgbGFiMSA9IGFzc2lnblsxXSk7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gbGFiMFtpXSArICh0ICogKGxhYjFbaV0gLSBsYWIwW2ldKSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJDUobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIC8vIHF1YWRyYXRpYyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgKGFzc2lnbiQxID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5sYWIoKTsgfSksIGxhYjAgPSBhc3NpZ24kMVswXSwgbGFiMSA9IGFzc2lnbiQxWzFdLCBsYWIyID0gYXNzaWduJDFbMl0pO1xuICAgICAgICAgICAgSSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiID0gKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuICgoMS10KSooMS10KSAqIGxhYjBbaV0pICsgKDIgKiAoMS10KSAqIHQgKiBsYWIxW2ldKSArICh0ICogdCAqIGxhYjJbaV0pOyB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ1KGxhYiwgJ2xhYicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAvLyBjdWJpYyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgdmFyIGxhYjM7XG4gICAgICAgICAgICAoYXNzaWduJDIgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KSwgbGFiMCA9IGFzc2lnbiQyWzBdLCBsYWIxID0gYXNzaWduJDJbMV0sIGxhYjIgPSBhc3NpZ24kMlsyXSwgbGFiMyA9IGFzc2lnbiQyWzNdKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYiA9IChbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiAoKDEtdCkqKDEtdCkqKDEtdCkgKiBsYWIwW2ldKSArICgzICogKDEtdCkgKiAoMS10KSAqIHQgKiBsYWIxW2ldKSArICgzICogKDEtdCkgKiB0ICogdCAqIGxhYjJbaV0pICsgKHQqdCp0ICogbGFiM1tpXSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJDUobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPj0gNSkge1xuICAgICAgICAgICAgLy8gZ2VuZXJhbCBjYXNlIChkZWdyZWUgbiBiZXppZXIpXG4gICAgICAgICAgICB2YXIgbGFicywgcm93LCBuO1xuICAgICAgICAgICAgbGFicyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubGFiKCk7IH0pO1xuICAgICAgICAgICAgbiA9IGNvbG9ycy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgcm93ID0gYmlub21fcm93KG4pO1xuICAgICAgICAgICAgSSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHUgPSAxIC0gdDtcbiAgICAgICAgICAgICAgICB2YXIgbGFiID0gKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGxhYnMucmVkdWNlKGZ1bmN0aW9uIChzdW0sIGVsLCBqKSB7IHJldHVybiAoc3VtICsgcm93W2pdICogTWF0aC5wb3coIHUsIChuIC0gaikgKSAqIE1hdGgucG93KCB0LCBqICkgKiBlbFtpXSk7IH0sIDApOyB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ1KGxhYiwgJ2xhYicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTm8gcG9pbnQgaW4gcnVubmluZyBiZXppZXIgd2l0aCBvbmx5IG9uZSBjb2xvci5cIilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSTtcbiAgICB9O1xuXG4gICAgdmFyIGJlemllcl8xID0gZnVuY3Rpb24gKGNvbG9ycykge1xuICAgICAgICB2YXIgZiA9IGJlemllcihjb2xvcnMpO1xuICAgICAgICBmLnNjYWxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2NhbGUkMShmKTsgfTtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICogaW50ZXJwb2xhdGVzIGJldHdlZW4gYSBzZXQgb2YgY29sb3JzIHV6aW5nIGEgYmV6aWVyIHNwbGluZVxuICAgICAqIGJsZW5kIG1vZGUgZm9ybXVsYXMgdGFrZW4gZnJvbSBodHRwOi8vd3d3LnZlbnR1cmUtd2FyZS5jb20va2V2aW4vY29kaW5nL2xldHMtbGVhcm4tbWF0aC1waG90b3Nob3AtYmxlbmQtbW9kZXMvXG4gICAgICovXG5cbiAgICB2YXIgY2hyb21hJDMgPSBjaHJvbWFfMTtcblxuICAgIHZhciBibGVuZCA9IGZ1bmN0aW9uIChib3R0b20sIHRvcCwgbW9kZSkge1xuICAgICAgICBpZiAoIWJsZW5kW21vZGVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gYmxlbmQgbW9kZSAnICsgbW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJsZW5kW21vZGVdKGJvdHRvbSwgdG9wKTtcbiAgICB9O1xuXG4gICAgdmFyIGJsZW5kX2YgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZnVuY3Rpb24gKGJvdHRvbSx0b3ApIHtcbiAgICAgICAgICAgIHZhciBjMCA9IGNocm9tYSQzKHRvcCkucmdiKCk7XG4gICAgICAgICAgICB2YXIgYzEgPSBjaHJvbWEkMyhib3R0b20pLnJnYigpO1xuICAgICAgICAgICAgcmV0dXJuIGNocm9tYSQzLnJnYihmKGMwLCBjMSkpO1xuICAgICAgICB9OyB9O1xuXG4gICAgdmFyIGVhY2ggPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZnVuY3Rpb24gKGMwLCBjMSkge1xuICAgICAgICAgICAgdmFyIG91dCA9IFtdO1xuICAgICAgICAgICAgb3V0WzBdID0gZihjMFswXSwgYzFbMF0pO1xuICAgICAgICAgICAgb3V0WzFdID0gZihjMFsxXSwgYzFbMV0pO1xuICAgICAgICAgICAgb3V0WzJdID0gZihjMFsyXSwgYzFbMl0pO1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfTsgfTtcblxuICAgIHZhciBub3JtYWwgPSBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYTsgfTtcbiAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhICogYiAvIDI1NTsgfTtcbiAgICB2YXIgZGFya2VuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYSA+IGIgPyBiIDogYTsgfTtcbiAgICB2YXIgbGlnaHRlbiA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEgPiBiID8gYSA6IGI7IH07XG4gICAgdmFyIHNjcmVlbiA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIDI1NSAqICgxIC0gKDEtYS8yNTUpICogKDEtYi8yNTUpKTsgfTtcbiAgICB2YXIgb3ZlcmxheSA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGIgPCAxMjggPyAyICogYSAqIGIgLyAyNTUgOiAyNTUgKiAoMSAtIDIgKiAoMSAtIGEgLyAyNTUgKSAqICggMSAtIGIgLyAyNTUgKSk7IH07XG4gICAgdmFyIGJ1cm4gPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiAyNTUgKiAoMSAtICgxIC0gYiAvIDI1NSkgLyAoYS8yNTUpKTsgfTtcbiAgICB2YXIgZG9kZ2UgPSBmdW5jdGlvbiAoYSxiKSB7XG4gICAgICAgIGlmIChhID09PSAyNTUpIHsgcmV0dXJuIDI1NTsgfVxuICAgICAgICBhID0gMjU1ICogKGIgLyAyNTUpIC8gKDEgLSBhIC8gMjU1KTtcbiAgICAgICAgcmV0dXJuIGEgPiAyNTUgPyAyNTUgOiBhXG4gICAgfTtcblxuICAgIC8vICMgYWRkID0gKGEsYikgLT5cbiAgICAvLyAjICAgICBpZiAoYSArIGIgPiAyNTUpIHRoZW4gMjU1IGVsc2UgYSArIGJcblxuICAgIGJsZW5kLm5vcm1hbCA9IGJsZW5kX2YoZWFjaChub3JtYWwpKTtcbiAgICBibGVuZC5tdWx0aXBseSA9IGJsZW5kX2YoZWFjaChtdWx0aXBseSkpO1xuICAgIGJsZW5kLnNjcmVlbiA9IGJsZW5kX2YoZWFjaChzY3JlZW4pKTtcbiAgICBibGVuZC5vdmVybGF5ID0gYmxlbmRfZihlYWNoKG92ZXJsYXkpKTtcbiAgICBibGVuZC5kYXJrZW4gPSBibGVuZF9mKGVhY2goZGFya2VuKSk7XG4gICAgYmxlbmQubGlnaHRlbiA9IGJsZW5kX2YoZWFjaChsaWdodGVuKSk7XG4gICAgYmxlbmQuZG9kZ2UgPSBibGVuZF9mKGVhY2goZG9kZ2UpKTtcbiAgICBibGVuZC5idXJuID0gYmxlbmRfZihlYWNoKGJ1cm4pKTtcbiAgICAvLyBibGVuZC5hZGQgPSBibGVuZF9mKGVhY2goYWRkKSk7XG5cbiAgICB2YXIgYmxlbmRfMSA9IGJsZW5kO1xuXG4gICAgLy8gY3ViZWhlbGl4IGludGVycG9sYXRpb25cbiAgICAvLyBiYXNlZCBvbiBELkEuIEdyZWVuIFwiQSBjb2xvdXIgc2NoZW1lIGZvciB0aGUgZGlzcGxheSBvZiBhc3Ryb25vbWljYWwgaW50ZW5zaXR5IGltYWdlc1wiXG4gICAgLy8gaHR0cDovL2FzdHJvbi1zb2MuaW4vYnVsbGV0aW4vMTFKdW5lLzI4OTM5MjAxMS5wZGZcblxuICAgIHZhciB0eXBlJDEgPSB1dGlscy50eXBlO1xuICAgIHZhciBjbGlwX3JnYiA9IHV0aWxzLmNsaXBfcmdiO1xuICAgIHZhciBUV09QSSA9IHV0aWxzLlRXT1BJO1xuICAgIHZhciBwb3ckMiA9IE1hdGgucG93O1xuICAgIHZhciBzaW4kMSA9IE1hdGguc2luO1xuICAgIHZhciBjb3MkMSA9IE1hdGguY29zO1xuICAgIHZhciBjaHJvbWEkMiA9IGNocm9tYV8xO1xuXG4gICAgdmFyIGN1YmVoZWxpeCA9IGZ1bmN0aW9uKHN0YXJ0LCByb3RhdGlvbnMsIGh1ZSwgZ2FtbWEsIGxpZ2h0bmVzcykge1xuICAgICAgICBpZiAoIHN0YXJ0ID09PSB2b2lkIDAgKSBzdGFydD0zMDA7XG4gICAgICAgIGlmICggcm90YXRpb25zID09PSB2b2lkIDAgKSByb3RhdGlvbnM9LTEuNTtcbiAgICAgICAgaWYgKCBodWUgPT09IHZvaWQgMCApIGh1ZT0xO1xuICAgICAgICBpZiAoIGdhbW1hID09PSB2b2lkIDAgKSBnYW1tYT0xO1xuICAgICAgICBpZiAoIGxpZ2h0bmVzcyA9PT0gdm9pZCAwICkgbGlnaHRuZXNzPVswLDFdO1xuXG4gICAgICAgIHZhciBkaCA9IDAsIGRsO1xuICAgICAgICBpZiAodHlwZSQxKGxpZ2h0bmVzcykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGRsID0gbGlnaHRuZXNzWzFdIC0gbGlnaHRuZXNzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGwgPSAwO1xuICAgICAgICAgICAgbGlnaHRuZXNzID0gW2xpZ2h0bmVzcywgbGlnaHRuZXNzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmID0gZnVuY3Rpb24oZnJhY3QpIHtcbiAgICAgICAgICAgIHZhciBhID0gVFdPUEkgKiAoKChzdGFydCsxMjApLzM2MCkgKyAocm90YXRpb25zICogZnJhY3QpKTtcbiAgICAgICAgICAgIHZhciBsID0gcG93JDIobGlnaHRuZXNzWzBdICsgKGRsICogZnJhY3QpLCBnYW1tYSk7XG4gICAgICAgICAgICB2YXIgaCA9IGRoICE9PSAwID8gaHVlWzBdICsgKGZyYWN0ICogZGgpIDogaHVlO1xuICAgICAgICAgICAgdmFyIGFtcCA9IChoICogbCAqICgxLWwpKSAvIDI7XG4gICAgICAgICAgICB2YXIgY29zX2EgPSBjb3MkMShhKTtcbiAgICAgICAgICAgIHZhciBzaW5fYSA9IHNpbiQxKGEpO1xuICAgICAgICAgICAgdmFyIHIgPSBsICsgKGFtcCAqICgoLTAuMTQ4NjEgKiBjb3NfYSkgKyAoMS43ODI3Nyogc2luX2EpKSk7XG4gICAgICAgICAgICB2YXIgZyA9IGwgKyAoYW1wICogKCgtMC4yOTIyNyAqIGNvc19hKSAtICgwLjkwNjQ5KiBzaW5fYSkpKTtcbiAgICAgICAgICAgIHZhciBiID0gbCArIChhbXAgKiAoKzEuOTcyOTQgKiBjb3NfYSkpO1xuICAgICAgICAgICAgcmV0dXJuIGNocm9tYSQyKGNsaXBfcmdiKFtyKjI1NSxnKjI1NSxiKjI1NSwxXSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuc3RhcnQgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICBpZiAoKHMgPT0gbnVsbCkpIHsgcmV0dXJuIHN0YXJ0OyB9XG4gICAgICAgICAgICBzdGFydCA9IHM7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnJvdGF0aW9ucyA9IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgIGlmICgociA9PSBudWxsKSkgeyByZXR1cm4gcm90YXRpb25zOyB9XG4gICAgICAgICAgICByb3RhdGlvbnMgPSByO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5nYW1tYSA9IGZ1bmN0aW9uKGcpIHtcbiAgICAgICAgICAgIGlmICgoZyA9PSBudWxsKSkgeyByZXR1cm4gZ2FtbWE7IH1cbiAgICAgICAgICAgIGdhbW1hID0gZztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuaHVlID0gZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgaWYgKChoID09IG51bGwpKSB7IHJldHVybiBodWU7IH1cbiAgICAgICAgICAgIGh1ZSA9IGg7XG4gICAgICAgICAgICBpZiAodHlwZSQxKGh1ZSkgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZVsxXSAtIGh1ZVswXTtcbiAgICAgICAgICAgICAgICBpZiAoZGggPT09IDApIHsgaHVlID0gaHVlWzFdOyB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYubGlnaHRuZXNzID0gZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgaWYgKChoID09IG51bGwpKSB7IHJldHVybiBsaWdodG5lc3M7IH1cbiAgICAgICAgICAgIGlmICh0eXBlJDEoaCkgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICBsaWdodG5lc3MgPSBoO1xuICAgICAgICAgICAgICAgIGRsID0gaFsxXSAtIGhbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpZ2h0bmVzcyA9IFtoLGhdO1xuICAgICAgICAgICAgICAgIGRsID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuc2NhbGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjaHJvbWEkMi5zY2FsZShmKTsgfTtcblxuICAgICAgICBmLmh1ZShodWUpO1xuXG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkNCA9IENvbG9yXzE7XG4gICAgdmFyIGRpZ2l0cyA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICAgIHZhciBmbG9vciQxID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb207XG5cbiAgICB2YXIgcmFuZG9tXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb2RlID0gJyMnO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8NjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlICs9IGRpZ2l0cy5jaGFyQXQoZmxvb3IkMShyYW5kb20oKSAqIDE2KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ0KGNvZGUsICdoZXgnKTtcbiAgICB9O1xuXG4gICAgdmFyIHR5cGUgPSB0eXBlJHA7XG4gICAgdmFyIGxvZyA9IE1hdGgubG9nO1xuICAgIHZhciBwb3ckMSA9IE1hdGgucG93O1xuICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgdmFyIGFicyQxID0gTWF0aC5hYnM7XG5cblxuICAgIHZhciBhbmFseXplID0gZnVuY3Rpb24gKGRhdGEsIGtleSkge1xuICAgICAgICBpZiAoIGtleSA9PT0gdm9pZCAwICkga2V5PW51bGw7XG5cbiAgICAgICAgdmFyIHIgPSB7XG4gICAgICAgICAgICBtaW46IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtYXg6IE51bWJlci5NQVhfVkFMVUUqLTEsXG4gICAgICAgICAgICBzdW06IDAsXG4gICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICAgICAgY291bnQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHR5cGUoZGF0YSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBkYXRhID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgaWYgKGtleSAmJiB0eXBlKHZhbCkgPT09ICdvYmplY3QnKSB7IHZhbCA9IHZhbFtrZXldOyB9XG4gICAgICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsICYmICFpc05hTih2YWwpKSB7XG4gICAgICAgICAgICAgICAgci52YWx1ZXMucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgIHIuc3VtICs9IHZhbDtcbiAgICAgICAgICAgICAgICBpZiAodmFsIDwgci5taW4pIHsgci5taW4gPSB2YWw7IH1cbiAgICAgICAgICAgICAgICBpZiAodmFsID4gci5tYXgpIHsgci5tYXggPSB2YWw7IH1cbiAgICAgICAgICAgICAgICByLmNvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHIuZG9tYWluID0gW3IubWluLCByLm1heF07XG5cbiAgICAgICAgci5saW1pdHMgPSBmdW5jdGlvbiAobW9kZSwgbnVtKSB7IHJldHVybiBsaW1pdHMociwgbW9kZSwgbnVtKTsgfTtcblxuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuXG5cbiAgICB2YXIgbGltaXRzID0gZnVuY3Rpb24gKGRhdGEsIG1vZGUsIG51bSkge1xuICAgICAgICBpZiAoIG1vZGUgPT09IHZvaWQgMCApIG1vZGU9J2VxdWFsJztcbiAgICAgICAgaWYgKCBudW0gPT09IHZvaWQgMCApIG51bT03O1xuXG4gICAgICAgIGlmICh0eXBlKGRhdGEpID09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGRhdGEgPSBhbmFseXplKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtaW4gPSBkYXRhLm1pbjtcbiAgICAgICAgdmFyIG1heCA9IGRhdGEubWF4O1xuICAgICAgICB2YXIgdmFsdWVzID0gZGF0YS52YWx1ZXMuc29ydChmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhLWI7IH0pO1xuXG4gICAgICAgIGlmIChudW0gPT09IDEpIHsgcmV0dXJuIFttaW4sbWF4XTsgfVxuXG4gICAgICAgIHZhciBsaW1pdHMgPSBbXTtcblxuICAgICAgICBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ2MnKSB7IC8vIGNvbnRpbnVvdXNcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdlJykgeyAvLyBlcXVhbCBpbnRlcnZhbFxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MTsgaTxudW07IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbisoKGkvbnVtKSoobWF4LW1pbikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnbCcpIHsgLy8gbG9nIHNjYWxlXG4gICAgICAgICAgICBpZiAobWluIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2FyaXRobWljIHNjYWxlcyBhcmUgb25seSBwb3NzaWJsZSBmb3IgdmFsdWVzID4gMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1pbl9sb2cgPSBNYXRoLkxPRzEwRSAqIGxvZyhtaW4pO1xuICAgICAgICAgICAgdmFyIG1heF9sb2cgPSBNYXRoLkxPRzEwRSAqIGxvZyhtYXgpO1xuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMT0xOyBpJDE8bnVtOyBpJDErKykge1xuICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKHBvdyQxKDEwLCBtaW5fbG9nICsgKChpJDEvbnVtKSAqIChtYXhfbG9nIC0gbWluX2xvZykpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ3EnKSB7IC8vIHF1YW50aWxlIHNjYWxlXG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQyPTE7IGkkMjxudW07IGkkMisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSAoKHZhbHVlcy5sZW5ndGgtMSkgKiBpJDIpL251bTtcbiAgICAgICAgICAgICAgICB2YXIgcGIgPSBmbG9vcihwKTtcbiAgICAgICAgICAgICAgICBpZiAocGIgPT09IHApIHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzLnB1c2godmFsdWVzW3BiXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gcCA+IHBiXG4gICAgICAgICAgICAgICAgICAgIHZhciBwciA9IHAgLSBwYjtcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzLnB1c2goKHZhbHVlc1twYl0qKDEtcHIpKSArICh2YWx1ZXNbcGIrMV0qcHIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnaycpIHsgLy8gay1tZWFucyBjbHVzdGVyaW5nXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgaW1wbGVtZW50YXRpb24gYmFzZWQgb25cbiAgICAgICAgICAgIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9maWd1ZS9zb3VyY2UvYnJvd3NlL3RydW5rL2ZpZ3VlLmpzIzMzNlxuICAgICAgICAgICAgc2ltcGxpZmllZCBmb3IgMS1kIGlucHV0IHZhbHVlc1xuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBjbHVzdGVyO1xuICAgICAgICAgICAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGFzc2lnbm1lbnRzID0gbmV3IEFycmF5KG4pO1xuICAgICAgICAgICAgdmFyIGNsdXN0ZXJTaXplcyA9IG5ldyBBcnJheShudW0pO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgbmJfaXRlcnMgPSAwO1xuICAgICAgICAgICAgdmFyIGNlbnRyb2lkcyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIGdldCBzZWVkIHZhbHVlc1xuICAgICAgICAgICAgY2VudHJvaWRzID0gW107XG4gICAgICAgICAgICBjZW50cm9pZHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQzPTE7IGkkMzxudW07IGkkMysrKSB7XG4gICAgICAgICAgICAgICAgY2VudHJvaWRzLnB1c2gobWluICsgKChpJDMvbnVtKSAqIChtYXgtbWluKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VudHJvaWRzLnB1c2gobWF4KTtcblxuICAgICAgICAgICAgd2hpbGUgKHJlcGVhdCkge1xuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnQgc3RlcFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajxudW07IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyU2l6ZXNbal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpJDQ9MDsgaSQ0PG47IGkkNCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1tpJDRdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluZGlzdCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiZXN0ID0gKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGokMT0wOyBqJDE8bnVtOyBqJDErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3QgPSBhYnMkMShjZW50cm9pZHNbaiQxXS12YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IG1pbmRpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5kaXN0ID0gZGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0ID0gaiQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2x1c3RlclNpemVzW2Jlc3RdKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50c1tpJDRdID0gYmVzdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjZW50cm9pZHMgc3RlcFxuICAgICAgICAgICAgICAgIHZhciBuZXdDZW50cm9pZHMgPSBuZXcgQXJyYXkobnVtKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqJDI9MDsgaiQyPG51bTsgaiQyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2okMl0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpJDU9MDsgaSQ1PG47IGkkNSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXIgPSBhc3NpZ25tZW50c1tpJDVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Q2VudHJvaWRzW2NsdXN0ZXJdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbY2x1c3Rlcl0gPSB2YWx1ZXNbaSQ1XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tjbHVzdGVyXSArPSB2YWx1ZXNbaSQ1XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqJDM9MDsgaiQzPG51bTsgaiQzKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2okM10gKj0gMS9jbHVzdGVyU2l6ZXNbaiQzXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBjb252ZXJnZW5jZVxuICAgICAgICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGokND0wOyBqJDQ8bnVtOyBqJDQrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Q2VudHJvaWRzW2okNF0gIT09IGNlbnRyb2lkc1tqJDRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZW50cm9pZHMgPSBuZXdDZW50cm9pZHM7XG4gICAgICAgICAgICAgICAgbmJfaXRlcnMrKztcblxuICAgICAgICAgICAgICAgIGlmIChuYl9pdGVycyA+IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZpbmlzaGVkIGstbWVhbnMgY2x1c3RlcmluZ1xuICAgICAgICAgICAgLy8gdGhlIG5leHQgcGFydCBpcyBib3Jyb3dlZCBmcm9tIGdhYnJpZWxmbG9yLml0XG4gICAgICAgICAgICB2YXIga0NsdXN0ZXJzID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBqJDU9MDsgaiQ1PG51bTsgaiQ1KyspIHtcbiAgICAgICAgICAgICAgICBrQ2x1c3RlcnNbaiQ1XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSQ2PTA7IGkkNjxuOyBpJDYrKykge1xuICAgICAgICAgICAgICAgIGNsdXN0ZXIgPSBhc3NpZ25tZW50c1tpJDZdO1xuICAgICAgICAgICAgICAgIGtDbHVzdGVyc1tjbHVzdGVyXS5wdXNoKHZhbHVlc1tpJDZdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0bXBLTWVhbnNCcmVha3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGokNj0wOyBqJDY8bnVtOyBqJDYrKykge1xuICAgICAgICAgICAgICAgIHRtcEtNZWFuc0JyZWFrcy5wdXNoKGtDbHVzdGVyc1tqJDZdWzBdKTtcbiAgICAgICAgICAgICAgICB0bXBLTWVhbnNCcmVha3MucHVzaChrQ2x1c3RlcnNbaiQ2XVtrQ2x1c3RlcnNbaiQ2XS5sZW5ndGgtMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG1wS01lYW5zQnJlYWtzID0gdG1wS01lYW5zQnJlYWtzLnNvcnQoZnVuY3Rpb24gKGEsYil7IHJldHVybiBhLWI7IH0pO1xuICAgICAgICAgICAgbGltaXRzLnB1c2godG1wS01lYW5zQnJlYWtzWzBdKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkNz0xOyBpJDcgPCB0bXBLTWVhbnNCcmVha3MubGVuZ3RoOyBpJDcrPSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0bXBLTWVhbnNCcmVha3NbaSQ3XTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHYpICYmIChsaW1pdHMuaW5kZXhPZih2KSA9PT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGltaXRzO1xuICAgIH07XG5cbiAgICB2YXIgYW5hbHl6ZV8xID0ge2FuYWx5emU6IGFuYWx5emUsIGxpbWl0czogbGltaXRzfTtcblxuICAgIHZhciBDb2xvciQzID0gQ29sb3JfMTtcblxuXG4gICAgdmFyIGNvbnRyYXN0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgLy8gV0NBRyBjb250cmFzdCByYXRpb1xuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNjb250cmFzdC1yYXRpb2RlZlxuICAgICAgICBhID0gbmV3IENvbG9yJDMoYSk7XG4gICAgICAgIGIgPSBuZXcgQ29sb3IkMyhiKTtcbiAgICAgICAgdmFyIGwxID0gYS5sdW1pbmFuY2UoKTtcbiAgICAgICAgdmFyIGwyID0gYi5sdW1pbmFuY2UoKTtcbiAgICAgICAgcmV0dXJuIGwxID4gbDIgPyAobDEgKyAwLjA1KSAvIChsMiArIDAuMDUpIDogKGwyICsgMC4wNSkgLyAobDEgKyAwLjA1KTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJDIgPSBDb2xvcl8xO1xuICAgIHZhciBzcXJ0ID0gTWF0aC5zcXJ0O1xuICAgIHZhciBwb3cgPSBNYXRoLnBvdztcbiAgICB2YXIgbWluID0gTWF0aC5taW47XG4gICAgdmFyIG1heCA9IE1hdGgubWF4O1xuICAgIHZhciBhdGFuMiA9IE1hdGguYXRhbjI7XG4gICAgdmFyIGFicyA9IE1hdGguYWJzO1xuICAgIHZhciBjb3MgPSBNYXRoLmNvcztcbiAgICB2YXIgc2luID0gTWF0aC5zaW47XG4gICAgdmFyIGV4cCA9IE1hdGguZXhwO1xuICAgIHZhciBQSSA9IE1hdGguUEk7XG5cbiAgICB2YXIgZGVsdGFFID0gZnVuY3Rpb24oYSwgYiwgS2wsIEtjLCBLaCkge1xuICAgICAgICBpZiAoIEtsID09PSB2b2lkIDAgKSBLbD0xO1xuICAgICAgICBpZiAoIEtjID09PSB2b2lkIDAgKSBLYz0xO1xuICAgICAgICBpZiAoIEtoID09PSB2b2lkIDAgKSBLaD0xO1xuXG4gICAgICAgIC8vIERlbHRhIEUgKENJRSAyMDAwKVxuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy5icnVjZWxpbmRibG9vbS5jb20vaW5kZXguaHRtbD9FcW5fRGVsdGFFX0NJRTIwMDAuaHRtbFxuICAgICAgICB2YXIgcmFkMmRlZyA9IGZ1bmN0aW9uKHJhZCkge1xuICAgICAgICAgICAgcmV0dXJuIDM2MCAqIHJhZCAvICgyICogUEkpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVnMnJhZCA9IGZ1bmN0aW9uKGRlZykge1xuICAgICAgICAgICAgcmV0dXJuICgyICogUEkgKiBkZWcpIC8gMzYwO1xuICAgICAgICB9O1xuICAgICAgICBhID0gbmV3IENvbG9yJDIoYSk7XG4gICAgICAgIGIgPSBuZXcgQ29sb3IkMihiKTtcbiAgICAgICAgdmFyIHJlZiA9IEFycmF5LmZyb20oYS5sYWIoKSk7XG4gICAgICAgIHZhciBMMSA9IHJlZlswXTtcbiAgICAgICAgdmFyIGExID0gcmVmWzFdO1xuICAgICAgICB2YXIgYjEgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IEFycmF5LmZyb20oYi5sYWIoKSk7XG4gICAgICAgIHZhciBMMiA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgYTIgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGIyID0gcmVmJDFbMl07XG4gICAgICAgIHZhciBhdmdMID0gKEwxICsgTDIpLzI7XG4gICAgICAgIHZhciBDMSA9IHNxcnQocG93KGExLCAyKSArIHBvdyhiMSwgMikpO1xuICAgICAgICB2YXIgQzIgPSBzcXJ0KHBvdyhhMiwgMikgKyBwb3coYjIsIDIpKTtcbiAgICAgICAgdmFyIGF2Z0MgPSAoQzEgKyBDMikvMjtcbiAgICAgICAgdmFyIEcgPSAwLjUqKDEtc3FydChwb3coYXZnQywgNykvKHBvdyhhdmdDLCA3KSArIHBvdygyNSwgNykpKSk7XG4gICAgICAgIHZhciBhMXAgPSBhMSooMStHKTtcbiAgICAgICAgdmFyIGEycCA9IGEyKigxK0cpO1xuICAgICAgICB2YXIgQzFwID0gc3FydChwb3coYTFwLCAyKSArIHBvdyhiMSwgMikpO1xuICAgICAgICB2YXIgQzJwID0gc3FydChwb3coYTJwLCAyKSArIHBvdyhiMiwgMikpO1xuICAgICAgICB2YXIgYXZnQ3AgPSAoQzFwICsgQzJwKS8yO1xuICAgICAgICB2YXIgYXJjdGFuMSA9IHJhZDJkZWcoYXRhbjIoYjEsIGExcCkpO1xuICAgICAgICB2YXIgYXJjdGFuMiA9IHJhZDJkZWcoYXRhbjIoYjIsIGEycCkpO1xuICAgICAgICB2YXIgaDFwID0gYXJjdGFuMSA+PSAwID8gYXJjdGFuMSA6IGFyY3RhbjEgKyAzNjA7XG4gICAgICAgIHZhciBoMnAgPSBhcmN0YW4yID49IDAgPyBhcmN0YW4yIDogYXJjdGFuMiArIDM2MDtcbiAgICAgICAgdmFyIGF2Z0hwID0gYWJzKGgxcCAtIGgycCkgPiAxODAgPyAoaDFwICsgaDJwICsgMzYwKS8yIDogKGgxcCArIGgycCkvMjtcbiAgICAgICAgdmFyIFQgPSAxIC0gMC4xNypjb3MoZGVnMnJhZChhdmdIcCAtIDMwKSkgKyAwLjI0KmNvcyhkZWcycmFkKDIqYXZnSHApKSArIDAuMzIqY29zKGRlZzJyYWQoMyphdmdIcCArIDYpKSAtIDAuMipjb3MoZGVnMnJhZCg0KmF2Z0hwIC0gNjMpKTtcbiAgICAgICAgdmFyIGRlbHRhSHAgPSBoMnAgLSBoMXA7XG4gICAgICAgIGRlbHRhSHAgPSBhYnMoZGVsdGFIcCkgPD0gMTgwID8gZGVsdGFIcCA6IGgycCA8PSBoMXAgPyBkZWx0YUhwICsgMzYwIDogZGVsdGFIcCAtIDM2MDtcbiAgICAgICAgZGVsdGFIcCA9IDIqc3FydChDMXAqQzJwKSpzaW4oZGVnMnJhZChkZWx0YUhwKS8yKTtcbiAgICAgICAgdmFyIGRlbHRhTCA9IEwyIC0gTDE7XG4gICAgICAgIHZhciBkZWx0YUNwID0gQzJwIC0gQzFwOyAgICBcbiAgICAgICAgdmFyIHNsID0gMSArICgwLjAxNSpwb3coYXZnTCAtIDUwLCAyKSkvc3FydCgyMCArIHBvdyhhdmdMIC0gNTAsIDIpKTtcbiAgICAgICAgdmFyIHNjID0gMSArIDAuMDQ1KmF2Z0NwO1xuICAgICAgICB2YXIgc2ggPSAxICsgMC4wMTUqYXZnQ3AqVDtcbiAgICAgICAgdmFyIGRlbHRhVGhldGEgPSAzMCpleHAoLXBvdygoYXZnSHAgLSAyNzUpLzI1LCAyKSk7XG4gICAgICAgIHZhciBSYyA9IDIqc3FydChwb3coYXZnQ3AsIDcpLyhwb3coYXZnQ3AsIDcpICsgcG93KDI1LCA3KSkpO1xuICAgICAgICB2YXIgUnQgPSAtUmMqc2luKDIqZGVnMnJhZChkZWx0YVRoZXRhKSk7XG4gICAgICAgIHZhciByZXN1bHQgPSBzcXJ0KHBvdyhkZWx0YUwvKEtsKnNsKSwgMikgKyBwb3coZGVsdGFDcC8oS2Mqc2MpLCAyKSArIHBvdyhkZWx0YUhwLyhLaCpzaCksIDIpICsgUnQqKGRlbHRhQ3AvKEtjKnNjKSkqKGRlbHRhSHAvKEtoKnNoKSkpO1xuICAgICAgICByZXR1cm4gbWF4KDAsIG1pbigxMDAsIHJlc3VsdCkpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkMSA9IENvbG9yXzE7XG5cbiAgICAvLyBzaW1wbGUgRXVjbGlkZWFuIGRpc3RhbmNlXG4gICAgdmFyIGRpc3RhbmNlID0gZnVuY3Rpb24oYSwgYiwgbW9kZSkge1xuICAgICAgICBpZiAoIG1vZGUgPT09IHZvaWQgMCApIG1vZGU9J2xhYic7XG5cbiAgICAgICAgLy8gRGVsdGEgRSAoQ0lFIDE5NzYpXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LmJydWNlbGluZGJsb29tLmNvbS9pbmRleC5odG1sP0VxdWF0aW9ucy5odG1sXG4gICAgICAgIGEgPSBuZXcgQ29sb3IkMShhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvciQxKGIpO1xuICAgICAgICB2YXIgbDEgPSBhLmdldChtb2RlKTtcbiAgICAgICAgdmFyIGwyID0gYi5nZXQobW9kZSk7XG4gICAgICAgIHZhciBzdW1fc3EgPSAwO1xuICAgICAgICBmb3IgKHZhciBpIGluIGwxKSB7XG4gICAgICAgICAgICB2YXIgZCA9IChsMVtpXSB8fCAwKSAtIChsMltpXSB8fCAwKTtcbiAgICAgICAgICAgIHN1bV9zcSArPSBkKmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChzdW1fc3EpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IgPSBDb2xvcl8xO1xuXG4gICAgdmFyIHZhbGlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciwgWyBudWxsIF0uY29uY2F0KCBhcmdzKSApKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gc29tZSBwcmUtZGVmaW5lZCBjb2xvciBzY2FsZXM6XG4gICAgdmFyIGNocm9tYSQxID0gY2hyb21hXzE7XG5cbiAgICB2YXIgc2NhbGUgPSBzY2FsZSQyO1xuXG4gICAgdmFyIHNjYWxlcyA9IHtcbiAgICBcdGNvb2w6IGZ1bmN0aW9uIGNvb2woKSB7IHJldHVybiBzY2FsZShbY2hyb21hJDEuaHNsKDE4MCwxLC45KSwgY2hyb21hJDEuaHNsKDI1MCwuNywuNCldKSB9LFxuICAgIFx0aG90OiBmdW5jdGlvbiBob3QoKSB7IHJldHVybiBzY2FsZShbJyMwMDAnLCcjZjAwJywnI2ZmMCcsJyNmZmYnXSkubW9kZSgncmdiJykgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgICAgQ29sb3JCcmV3ZXIgY29sb3JzIGZvciBjaHJvbWEuanNcblxuICAgICAgICBDb3B5cmlnaHQgKGMpIDIwMDIgQ3ludGhpYSBCcmV3ZXIsIE1hcmsgSGFycm93ZXIsIGFuZCBUaGVcbiAgICAgICAgUGVubnN5bHZhbmlhIFN0YXRlIFVuaXZlcnNpdHkuXG5cbiAgICAgICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgICAgICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgICAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICAgICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZFxuICAgICAgICB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUlxuICAgICAgICBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICAgICAgICBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICAgICovXG5cbiAgICB2YXIgY29sb3JicmV3ZXIgPSB7XG4gICAgICAgIC8vIHNlcXVlbnRpYWxcbiAgICAgICAgT3JSZDogWycjZmZmN2VjJywgJyNmZWU4YzgnLCAnI2ZkZDQ5ZScsICcjZmRiYjg0JywgJyNmYzhkNTknLCAnI2VmNjU0OCcsICcjZDczMDFmJywgJyNiMzAwMDAnLCAnIzdmMDAwMCddLFxuICAgICAgICBQdUJ1OiBbJyNmZmY3ZmInLCAnI2VjZTdmMicsICcjZDBkMWU2JywgJyNhNmJkZGInLCAnIzc0YTljZicsICcjMzY5MGMwJywgJyMwNTcwYjAnLCAnIzA0NWE4ZCcsICcjMDIzODU4J10sXG4gICAgICAgIEJ1UHU6IFsnI2Y3ZmNmZCcsICcjZTBlY2Y0JywgJyNiZmQzZTYnLCAnIzllYmNkYScsICcjOGM5NmM2JywgJyM4YzZiYjEnLCAnIzg4NDE5ZCcsICcjODEwZjdjJywgJyM0ZDAwNGInXSxcbiAgICAgICAgT3JhbmdlczogWycjZmZmNWViJywgJyNmZWU2Y2UnLCAnI2ZkZDBhMicsICcjZmRhZTZiJywgJyNmZDhkM2MnLCAnI2YxNjkxMycsICcjZDk0ODAxJywgJyNhNjM2MDMnLCAnIzdmMjcwNCddLFxuICAgICAgICBCdUduOiBbJyNmN2ZjZmQnLCAnI2U1ZjVmOScsICcjY2NlY2U2JywgJyM5OWQ4YzknLCAnIzY2YzJhNCcsICcjNDFhZTc2JywgJyMyMzhiNDUnLCAnIzAwNmQyYycsICcjMDA0NDFiJ10sXG4gICAgICAgIFlsT3JCcjogWycjZmZmZmU1JywgJyNmZmY3YmMnLCAnI2ZlZTM5MScsICcjZmVjNDRmJywgJyNmZTk5MjknLCAnI2VjNzAxNCcsICcjY2M0YzAyJywgJyM5OTM0MDQnLCAnIzY2MjUwNiddLFxuICAgICAgICBZbEduOiBbJyNmZmZmZTUnLCAnI2Y3ZmNiOScsICcjZDlmMGEzJywgJyNhZGRkOGUnLCAnIzc4YzY3OScsICcjNDFhYjVkJywgJyMyMzg0NDMnLCAnIzAwNjgzNycsICcjMDA0NTI5J10sXG4gICAgICAgIFJlZHM6IFsnI2ZmZjVmMCcsICcjZmVlMGQyJywgJyNmY2JiYTEnLCAnI2ZjOTI3MicsICcjZmI2YTRhJywgJyNlZjNiMmMnLCAnI2NiMTgxZCcsICcjYTUwZjE1JywgJyM2NzAwMGQnXSxcbiAgICAgICAgUmRQdTogWycjZmZmN2YzJywgJyNmZGUwZGQnLCAnI2ZjYzVjMCcsICcjZmE5ZmI1JywgJyNmNzY4YTEnLCAnI2RkMzQ5NycsICcjYWUwMTdlJywgJyM3YTAxNzcnLCAnIzQ5MDA2YSddLFxuICAgICAgICBHcmVlbnM6IFsnI2Y3ZmNmNScsICcjZTVmNWUwJywgJyNjN2U5YzAnLCAnI2ExZDk5YicsICcjNzRjNDc2JywgJyM0MWFiNWQnLCAnIzIzOGI0NScsICcjMDA2ZDJjJywgJyMwMDQ0MWInXSxcbiAgICAgICAgWWxHbkJ1OiBbJyNmZmZmZDknLCAnI2VkZjhiMScsICcjYzdlOWI0JywgJyM3ZmNkYmInLCAnIzQxYjZjNCcsICcjMWQ5MWMwJywgJyMyMjVlYTgnLCAnIzI1MzQ5NCcsICcjMDgxZDU4J10sXG4gICAgICAgIFB1cnBsZXM6IFsnI2ZjZmJmZCcsICcjZWZlZGY1JywgJyNkYWRhZWInLCAnI2JjYmRkYycsICcjOWU5YWM4JywgJyM4MDdkYmEnLCAnIzZhNTFhMycsICcjNTQyNzhmJywgJyMzZjAwN2QnXSxcbiAgICAgICAgR25CdTogWycjZjdmY2YwJywgJyNlMGYzZGInLCAnI2NjZWJjNScsICcjYThkZGI1JywgJyM3YmNjYzQnLCAnIzRlYjNkMycsICcjMmI4Y2JlJywgJyMwODY4YWMnLCAnIzA4NDA4MSddLFxuICAgICAgICBHcmV5czogWycjZmZmZmZmJywgJyNmMGYwZjAnLCAnI2Q5ZDlkOScsICcjYmRiZGJkJywgJyM5Njk2OTYnLCAnIzczNzM3MycsICcjNTI1MjUyJywgJyMyNTI1MjUnLCAnIzAwMDAwMCddLFxuICAgICAgICBZbE9yUmQ6IFsnI2ZmZmZjYycsICcjZmZlZGEwJywgJyNmZWQ5NzYnLCAnI2ZlYjI0YycsICcjZmQ4ZDNjJywgJyNmYzRlMmEnLCAnI2UzMWExYycsICcjYmQwMDI2JywgJyM4MDAwMjYnXSxcbiAgICAgICAgUHVSZDogWycjZjdmNGY5JywgJyNlN2UxZWYnLCAnI2Q0YjlkYScsICcjYzk5NGM3JywgJyNkZjY1YjAnLCAnI2U3Mjk4YScsICcjY2UxMjU2JywgJyM5ODAwNDMnLCAnIzY3MDAxZiddLFxuICAgICAgICBCbHVlczogWycjZjdmYmZmJywgJyNkZWViZjcnLCAnI2M2ZGJlZicsICcjOWVjYWUxJywgJyM2YmFlZDYnLCAnIzQyOTJjNicsICcjMjE3MWI1JywgJyMwODUxOWMnLCAnIzA4MzA2YiddLFxuICAgICAgICBQdUJ1R246IFsnI2ZmZjdmYicsICcjZWNlMmYwJywgJyNkMGQxZTYnLCAnI2E2YmRkYicsICcjNjdhOWNmJywgJyMzNjkwYzAnLCAnIzAyODE4YScsICcjMDE2YzU5JywgJyMwMTQ2MzYnXSxcbiAgICAgICAgVmlyaWRpczogWycjNDQwMTU0JywgJyM0ODI3NzcnLCAnIzNmNGE4YScsICcjMzE2NzhlJywgJyMyNjgzOGYnLCAnIzFmOWQ4YScsICcjNmNjZTVhJywgJyNiNmRlMmInLCAnI2ZlZTgyNSddLFxuXG4gICAgICAgIC8vIGRpdmVyZ2luZ1xuXG4gICAgICAgIFNwZWN0cmFsOiBbJyM5ZTAxNDInLCAnI2Q1M2U0ZicsICcjZjQ2ZDQzJywgJyNmZGFlNjEnLCAnI2ZlZTA4YicsICcjZmZmZmJmJywgJyNlNmY1OTgnLCAnI2FiZGRhNCcsICcjNjZjMmE1JywgJyMzMjg4YmQnLCAnIzVlNGZhMiddLFxuICAgICAgICBSZFlsR246IFsnI2E1MDAyNicsICcjZDczMDI3JywgJyNmNDZkNDMnLCAnI2ZkYWU2MScsICcjZmVlMDhiJywgJyNmZmZmYmYnLCAnI2Q5ZWY4YicsICcjYTZkOTZhJywgJyM2NmJkNjMnLCAnIzFhOTg1MCcsICcjMDA2ODM3J10sXG4gICAgICAgIFJkQnU6IFsnIzY3MDAxZicsICcjYjIxODJiJywgJyNkNjYwNGQnLCAnI2Y0YTU4MicsICcjZmRkYmM3JywgJyNmN2Y3ZjcnLCAnI2QxZTVmMCcsICcjOTJjNWRlJywgJyM0MzkzYzMnLCAnIzIxNjZhYycsICcjMDUzMDYxJ10sXG4gICAgICAgIFBpWUc6IFsnIzhlMDE1MicsICcjYzUxYjdkJywgJyNkZTc3YWUnLCAnI2YxYjZkYScsICcjZmRlMGVmJywgJyNmN2Y3ZjcnLCAnI2U2ZjVkMCcsICcjYjhlMTg2JywgJyM3ZmJjNDEnLCAnIzRkOTIyMScsICcjMjc2NDE5J10sXG4gICAgICAgIFBSR246IFsnIzQwMDA0YicsICcjNzYyYTgzJywgJyM5OTcwYWInLCAnI2MyYTVjZicsICcjZTdkNGU4JywgJyNmN2Y3ZjcnLCAnI2Q5ZjBkMycsICcjYTZkYmEwJywgJyM1YWFlNjEnLCAnIzFiNzgzNycsICcjMDA0NDFiJ10sXG4gICAgICAgIFJkWWxCdTogWycjYTUwMDI2JywgJyNkNzMwMjcnLCAnI2Y0NmQ0MycsICcjZmRhZTYxJywgJyNmZWUwOTAnLCAnI2ZmZmZiZicsICcjZTBmM2Y4JywgJyNhYmQ5ZTknLCAnIzc0YWRkMScsICcjNDU3NWI0JywgJyMzMTM2OTUnXSxcbiAgICAgICAgQnJCRzogWycjNTQzMDA1JywgJyM4YzUxMGEnLCAnI2JmODEyZCcsICcjZGZjMjdkJywgJyNmNmU4YzMnLCAnI2Y1ZjVmNScsICcjYzdlYWU1JywgJyM4MGNkYzEnLCAnIzM1OTc4ZicsICcjMDE2NjVlJywgJyMwMDNjMzAnXSxcbiAgICAgICAgUmRHeTogWycjNjcwMDFmJywgJyNiMjE4MmInLCAnI2Q2NjA0ZCcsICcjZjRhNTgyJywgJyNmZGRiYzcnLCAnI2ZmZmZmZicsICcjZTBlMGUwJywgJyNiYWJhYmEnLCAnIzg3ODc4NycsICcjNGQ0ZDRkJywgJyMxYTFhMWEnXSxcbiAgICAgICAgUHVPcjogWycjN2YzYjA4JywgJyNiMzU4MDYnLCAnI2UwODIxNCcsICcjZmRiODYzJywgJyNmZWUwYjYnLCAnI2Y3ZjdmNycsICcjZDhkYWViJywgJyNiMmFiZDInLCAnIzgwNzNhYycsICcjNTQyNzg4JywgJyMyZDAwNGInXSxcblxuICAgICAgICAvLyBxdWFsaXRhdGl2ZVxuXG4gICAgICAgIFNldDI6IFsnIzY2YzJhNScsICcjZmM4ZDYyJywgJyM4ZGEwY2InLCAnI2U3OGFjMycsICcjYTZkODU0JywgJyNmZmQ5MmYnLCAnI2U1YzQ5NCcsICcjYjNiM2IzJ10sXG4gICAgICAgIEFjY2VudDogWycjN2ZjOTdmJywgJyNiZWFlZDQnLCAnI2ZkYzA4NicsICcjZmZmZjk5JywgJyMzODZjYjAnLCAnI2YwMDI3ZicsICcjYmY1YjE3JywgJyM2NjY2NjYnXSxcbiAgICAgICAgU2V0MTogWycjZTQxYTFjJywgJyMzNzdlYjgnLCAnIzRkYWY0YScsICcjOTg0ZWEzJywgJyNmZjdmMDAnLCAnI2ZmZmYzMycsICcjYTY1NjI4JywgJyNmNzgxYmYnLCAnIzk5OTk5OSddLFxuICAgICAgICBTZXQzOiBbJyM4ZGQzYzcnLCAnI2ZmZmZiMycsICcjYmViYWRhJywgJyNmYjgwNzInLCAnIzgwYjFkMycsICcjZmRiNDYyJywgJyNiM2RlNjknLCAnI2ZjY2RlNScsICcjZDlkOWQ5JywgJyNiYzgwYmQnLCAnI2NjZWJjNScsICcjZmZlZDZmJ10sXG4gICAgICAgIERhcmsyOiBbJyMxYjllNzcnLCAnI2Q5NWYwMicsICcjNzU3MGIzJywgJyNlNzI5OGEnLCAnIzY2YTYxZScsICcjZTZhYjAyJywgJyNhNjc2MWQnLCAnIzY2NjY2NiddLFxuICAgICAgICBQYWlyZWQ6IFsnI2E2Y2VlMycsICcjMWY3OGI0JywgJyNiMmRmOGEnLCAnIzMzYTAyYycsICcjZmI5YTk5JywgJyNlMzFhMWMnLCAnI2ZkYmY2ZicsICcjZmY3ZjAwJywgJyNjYWIyZDYnLCAnIzZhM2Q5YScsICcjZmZmZjk5JywgJyNiMTU5MjgnXSxcbiAgICAgICAgUGFzdGVsMjogWycjYjNlMmNkJywgJyNmZGNkYWMnLCAnI2NiZDVlOCcsICcjZjRjYWU0JywgJyNlNmY1YzknLCAnI2ZmZjJhZScsICcjZjFlMmNjJywgJyNjY2NjY2MnXSxcbiAgICAgICAgUGFzdGVsMTogWycjZmJiNGFlJywgJyNiM2NkZTMnLCAnI2NjZWJjNScsICcjZGVjYmU0JywgJyNmZWQ5YTYnLCAnI2ZmZmZjYycsICcjZTVkOGJkJywgJyNmZGRhZWMnLCAnI2YyZjJmMiddLFxuICAgIH07XG5cbiAgICAvLyBhZGQgbG93ZXJjYXNlIGFsaWFzZXMgZm9yIGNhc2UtaW5zZW5zaXRpdmUgbWF0Y2hlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gT2JqZWN0LmtleXMoY29sb3JicmV3ZXIpOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIga2V5ID0gbGlzdFtpXTtcblxuICAgICAgICBjb2xvcmJyZXdlcltrZXkudG9Mb3dlckNhc2UoKV0gPSBjb2xvcmJyZXdlcltrZXldO1xuICAgIH1cblxuICAgIHZhciBjb2xvcmJyZXdlcl8xID0gY29sb3JicmV3ZXI7XG5cbiAgICB2YXIgY2hyb21hID0gY2hyb21hXzE7XG5cbiAgICAvLyBmZWVsIGZyZWUgdG8gY29tbWVudCBvdXQgYW55dGhpbmcgdG8gcm9sbHVwXG4gICAgLy8gYSBzbWFsbGVyIGNocm9tYS5qcyBidWlsdFxuXG4gICAgLy8gaW8gLS0+IGNvbnZlcnQgY29sb3JzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIC8vIG9wZXJhdG9ycyAtLT4gbW9kaWZ5IGV4aXN0aW5nIENvbG9yc1xuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLy8gaW50ZXJwb2xhdG9yc1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIC8vIGdlbmVyYXRvcnMgLS0gPiBjcmVhdGUgbmV3IGNvbG9yc1xuICAgIGNocm9tYS5hdmVyYWdlID0gYXZlcmFnZTtcbiAgICBjaHJvbWEuYmV6aWVyID0gYmV6aWVyXzE7XG4gICAgY2hyb21hLmJsZW5kID0gYmxlbmRfMTtcbiAgICBjaHJvbWEuY3ViZWhlbGl4ID0gY3ViZWhlbGl4O1xuICAgIGNocm9tYS5taXggPSBjaHJvbWEuaW50ZXJwb2xhdGUgPSBtaXgkMTtcbiAgICBjaHJvbWEucmFuZG9tID0gcmFuZG9tXzE7XG4gICAgY2hyb21hLnNjYWxlID0gc2NhbGUkMjtcblxuICAgIC8vIG90aGVyIHV0aWxpdHkgbWV0aG9kc1xuICAgIGNocm9tYS5hbmFseXplID0gYW5hbHl6ZV8xLmFuYWx5emU7XG4gICAgY2hyb21hLmNvbnRyYXN0ID0gY29udHJhc3Q7XG4gICAgY2hyb21hLmRlbHRhRSA9IGRlbHRhRTtcbiAgICBjaHJvbWEuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICBjaHJvbWEubGltaXRzID0gYW5hbHl6ZV8xLmxpbWl0cztcbiAgICBjaHJvbWEudmFsaWQgPSB2YWxpZDtcblxuICAgIC8vIHNjYWxlXG4gICAgY2hyb21hLnNjYWxlcyA9IHNjYWxlcztcblxuICAgIC8vIGNvbG9yc1xuICAgIGNocm9tYS5jb2xvcnMgPSB3M2N4MTFfMTtcbiAgICBjaHJvbWEuYnJld2VyID0gY29sb3JicmV3ZXJfMTtcblxuICAgIHZhciBjaHJvbWFfanMgPSBjaHJvbWE7XG5cbiAgICByZXR1cm4gY2hyb21hX2pzO1xuXG59KSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9iYXNlQ29tcG9uZW50cy5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBza2VsZXRvbiBmcm9tIFwiLi9za2VsZXRvblwiO1xuaW1wb3J0IGNvbG9ySGFuZGxlciBmcm9tIFwiLi9jb2xvckhhbmRsZXIuanNcIjtcblxuLy8gSW5pdGlhbGl6ZSBDb2xvcnNcbmNvbG9ySGFuZGxlcigpO1xuXG4vLyBCdWlsZCBXZWJzaXRlIFNrZWxldG9uXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudC5kaXYoe2lkOiAnY29udGVudCcsIGNoaWxkcmVuOiBza2VsZXRvbiB9KSlcblxuLy8gQWRkIE5ldyBwcm9qZWN0IGZ1bmN0aW9uYWxpdHlcbmltcG9ydCBwcm9qZWN0SGFuZGxlciBmcm9tIFwiLi9wcm9qZWN0SGFuZGxlclwiO1xuXG4vLyBBZGQgZnVuY3Rpb25hbGl0eSB0byBuZXdQcm9qZWN0QnV0dG9uXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0JykucXVlcnlTZWxlY3RvcignLmNsaWNrYWJsZScpO1xubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscHJvamVjdEhhbmRsZXIuYWRkVGVtcGxhdGUpO1xuXG4vLyBTdGFydCB3aXRoIGEgdGVtcGxhdGUgb24gdGhlIHBhZ2VcbnByb2plY3RIYW5kbGVyLmFkZFRlbXBsYXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9