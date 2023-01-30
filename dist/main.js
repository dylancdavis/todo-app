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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Righteous';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\n}\n\n@font-face {\n    font-family: 'ABZ';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    --primary-color: #ffffff;\n    --secondary-color: #000000;\n\n    --accent1: #ffffff;\n    --accent2: #ffffff;\n    --accent3: #ffffff;\n    --accent4: #ffffff;\n\n    --accent1-light: #ffffff;\n    --accent2-light: #ffffff;\n    --accent3-light: #ffffff;\n    --accent4-light: #ffffff;\n}\n\n/* Remove Defaults */\n\nbutton {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\nli {\n    list-style: none;\n}\n\nbody {\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--primary-color);\n}\n\n.plus-button .clickable {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0px;\n    transition: all 0.05s;\n    cursor: pointer;\n}\n\n.banner {\n    font-size: 96px;\n    font-family: 'Righteous';\n    padding-left: 64px;\n    border-bottom: 4px solid var(--secondary-color);  \n    background-color: var(--primary-color);\n}\n\n.banner-text {\n    color: var(--secondary-color);\n    transition: all 0.5s;\n    cursor: default;\n    text-shadow: -1px 1px var(--accent1), -2px 2px var(--accent2), -3px 3px var(--accent3), -4px 4px var(--accent4)\n}\n\n.banner-text:hover {\n    text-shadow: -2px 2px var(--accent1), -4px 4px var(--accent2), -6px 6px var(--accent3), -8px 8px var(--accent4);\n}\n\n#main-content {\n    display: flex;\n    flex: 1;\n}\n\n#sidebar {\n    width: 320px;\n    text-align: center;\n    border-right: 4px solid var(--secondary-color);\n    height: 100%;\n    padding: 32px;\n    background-color: var(--accent1-light);\n}\n\n#sidebar-title {\n    text-transform: capitalize;\n    font-size: 36px;\n    font-family: 'ABZ';\n    padding: 8px 32px;\n    border: 4px solid var(--secondary-color);\n    font-weight: bolder;\n    background-color: var(--primary-color);\n    box-shadow: -3px 3px var(--accent3), 3px -3px var(--accent4)\n}\n\n#project-container {\n    padding: 32px 64px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n}\n\n.plus-button {\n    display: flex;\n    align-items: center;\n    font-family: 'ABZ';\n    color: var(--primary-color);\n    font-weight: bolder;\n}\n\n/* New Project Button */\n\n.plus-button.new-project {\n    background-color: var(--accent1);\n    font-size: 32px;\n    border: 2px solid var(--secondary-color);\n    align-self: flex-start;\n}\n\n.new-project .display-text {\n    padding: 0px 32px;\n    text-shadow: 2px 2px var(--secondary-color);\n}\n\n.new-project .clickable {\n    width: 56px;\n}\n\n.new-project .clickable:hover {\n    background-color: var(--secondary-color);\n}\n\n.new-project img {\n    transition: all 0.05s;\n    padding: 8px;\n    filter: invert(1) drop-shadow(2px 2px var(--secondary-color));\n    height: 56px;\n}\n\n/* New Project (Disabled) */\n\n.plus-button.disabled {\n    background-color: var(--primary-color);\n}\n\n.plus-button.disabled .display-text {\n    padding: 0px 32px;\n    color: var(--secondary-color);\n    filter: contrast(0.2);\n    text-shadow: none;\n}\n\n.plus-button.disabled img {\n    filter: invert(0) contrast(0.2);\n}\n\n.plus-button.disabled .clickable:hover {\n    background-color: var(--primary-color);\n    cursor: default;\n}\n\n/**/\n\n#project-container {\n    flex: 1;\n}\n\n.project-item {\n    width: 80%;\n    font-family: 'ABZ';\n    font-size: 24px;\n    border: 4px solid var(--secondary-color);\n    transition: all 0.3s;\n}\n\n.project-item:hover {\n    box-shadow: -5px 5px var(--accent1), 5px -5px var(--accent2);\n}\n\n.project-item:nth-child(2n):hover {\n    box-shadow: -5px 5px var(--accent3), 5px -5px var(--accent4);\n}\n\n.project-item.unsaved {\n    position: relative;\n    box-shadow: none;\n}\n\n.project-item .save, .project-item .discard {\n    position: absolute;\n    left: 100%;\n    height: 64px;\n    border: 4px solid var(--secondary-color);\n    padding: 8px;\n    top: -4px;\n    background-color: lightgreen;\n    cursor: pointer;\n}\n\n.project-item .discard {\n    top: 56px;\n    background-color: lightcoral;\n}\n\n.project-item > .header {\n    border-bottom: 4px solid var(--secondary-color);\n    display: flex;\n    padding: 8px;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--secondary-color);\n    transition: all 0.5s;\n}\n\n.project-item.unsaved > .header {\n    background-color: var(--primary-color);\n}\n\n.project-item .header-left {\n    display: flex;\n    gap: 32px;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-item .project-title {\n    padding: 4px 4px 4px 16px;\n    font-size: 32px;\n    font-weight: 900;\n    color: var(--primary-color);\n}\n\n.project-item.unsaved .project-title {\n    color: var(--secondary-color);\n}\n\n.project-item .header-left input {\n    border: 2px solid var(--secondary-color);\n    color: var(--secondary-color)\n}\n\n.project-item .header-left input:focus {\n    outline: 4px solid var(--accent3)\n}\n\n.project-item .plus-button {\n    background-color: var(--secondary-color);\n    border: 2px solid var(--secondary-color);\n}\n\n.add-tags img {\n    height: 48px;\n    filter: invert(1);\n    padding: 8px;\n}\n\n.add-tags .clickable:hover {\n    background-color: var(--accent3);\n}\n\n.add-tags .display-text {\n    padding: 0px 8px;\n}\n\n.project-item > .body {\n    padding: 16px;\n    background-color: var(--accent1-light);\n    transition: background-color 0.3s;\n    overflow: hidden;\n}\n\n.project-item:nth-child(4n-2) > .body {\n    background-color: var(--accent3-light);\n}\n\n.project-item:nth-child(4n-1) > .body {\n    background-color: var(--accent2-light);\n}\n\n.project-item:nth-child(4n) > .body {\n    background-color: var(--accent4-light);\n}\n\n.project-item > .body.collapsed {\n    transition: all 0s;\n    padding: 0px 16px;\n    height: 0px;\n}\n\n.project-item.unsaved > .body {\n    background-color: var(--primary-color);\n    height: auto;\n}\n\n.task-list > .header {\n    border-bottom: 3px double var(--secondary-color);\n    margin-bottom: 8px;\n}\n\n.project-item ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 8px;\n}\n\n/* New Task Button Styling */\n\n.new-task {\n    display: flex;\n    gap: 4px;\n}\n\n.new-task input {\n    border: 0px;\n    border-bottom: 1px solid var(--secondary-color);\n    font-size: 20px;\n    background-color: inherit;\n}\n\n.new-task input::placeholder {\n    font-style: italic;\n}\n\n.new-task input:focus {\n    outline: 0px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Righteous';\n    src: url('Righteous-Regular.ttf')\n}\n\n@font-face {\n    font-family: 'ABZ';\n    src: url('ABeeZee-Regular.ttf');\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    --primary-color: #ffffff;\n    --secondary-color: #000000;\n\n    --accent1: #ffffff;\n    --accent2: #ffffff;\n    --accent3: #ffffff;\n    --accent4: #ffffff;\n\n    --accent1-light: #ffffff;\n    --accent2-light: #ffffff;\n    --accent3-light: #ffffff;\n    --accent4-light: #ffffff;\n}\n\n/* Remove Defaults */\n\nbutton {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\nli {\n    list-style: none;\n}\n\nbody {\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--primary-color);\n}\n\n.plus-button .clickable {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0px;\n    transition: all 0.05s;\n    cursor: pointer;\n}\n\n.banner {\n    font-size: 96px;\n    font-family: 'Righteous';\n    padding-left: 64px;\n    border-bottom: 4px solid var(--secondary-color);  \n    background-color: var(--primary-color);\n}\n\n.banner-text {\n    color: var(--secondary-color);\n    transition: all 0.5s;\n    cursor: default;\n    text-shadow: -1px 1px var(--accent1), -2px 2px var(--accent2), -3px 3px var(--accent3), -4px 4px var(--accent4)\n}\n\n.banner-text:hover {\n    text-shadow: -2px 2px var(--accent1), -4px 4px var(--accent2), -6px 6px var(--accent3), -8px 8px var(--accent4);\n}\n\n#main-content {\n    display: flex;\n    flex: 1;\n}\n\n#sidebar {\n    width: 320px;\n    text-align: center;\n    border-right: 4px solid var(--secondary-color);\n    height: 100%;\n    padding: 32px;\n    background-color: var(--accent1-light);\n}\n\n#sidebar-title {\n    text-transform: capitalize;\n    font-size: 36px;\n    font-family: 'ABZ';\n    padding: 8px 32px;\n    border: 4px solid var(--secondary-color);\n    font-weight: bolder;\n    background-color: var(--primary-color);\n    box-shadow: -3px 3px var(--accent3), 3px -3px var(--accent4)\n}\n\n#project-container {\n    padding: 32px 64px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n}\n\n.plus-button {\n    display: flex;\n    align-items: center;\n    font-family: 'ABZ';\n    color: var(--primary-color);\n    font-weight: bolder;\n}\n\n/* New Project Button */\n\n.plus-button.new-project {\n    background-color: var(--accent1);\n    font-size: 32px;\n    border: 2px solid var(--secondary-color);\n    align-self: flex-start;\n}\n\n.new-project .display-text {\n    padding: 0px 32px;\n    text-shadow: 2px 2px var(--secondary-color);\n}\n\n.new-project .clickable {\n    width: 56px;\n}\n\n.new-project .clickable:hover {\n    background-color: var(--secondary-color);\n}\n\n.new-project img {\n    transition: all 0.05s;\n    padding: 8px;\n    filter: invert(1) drop-shadow(2px 2px var(--secondary-color));\n    height: 56px;\n}\n\n/* New Project (Disabled) */\n\n.plus-button.disabled {\n    background-color: var(--primary-color);\n}\n\n.plus-button.disabled .display-text {\n    padding: 0px 32px;\n    color: var(--secondary-color);\n    filter: contrast(0.2);\n    text-shadow: none;\n}\n\n.plus-button.disabled img {\n    filter: invert(0) contrast(0.2);\n}\n\n.plus-button.disabled .clickable:hover {\n    background-color: var(--primary-color);\n    cursor: default;\n}\n\n/**/\n\n#project-container {\n    flex: 1;\n}\n\n.project-item {\n    width: 80%;\n    font-family: 'ABZ';\n    font-size: 24px;\n    border: 4px solid var(--secondary-color);\n    transition: all 0.3s;\n}\n\n.project-item:hover {\n    box-shadow: -5px 5px var(--accent1), 5px -5px var(--accent2);\n}\n\n.project-item:nth-child(2n):hover {\n    box-shadow: -5px 5px var(--accent3), 5px -5px var(--accent4);\n}\n\n.project-item.unsaved {\n    position: relative;\n    box-shadow: none;\n}\n\n.project-item .save, .project-item .discard {\n    position: absolute;\n    left: 100%;\n    height: 64px;\n    border: 4px solid var(--secondary-color);\n    padding: 8px;\n    top: -4px;\n    background-color: lightgreen;\n    cursor: pointer;\n}\n\n.project-item .discard {\n    top: 56px;\n    background-color: lightcoral;\n}\n\n.project-item > .header {\n    border-bottom: 4px solid var(--secondary-color);\n    display: flex;\n    padding: 8px;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--secondary-color);\n    transition: all 0.5s;\n}\n\n.project-item.unsaved > .header {\n    background-color: var(--primary-color);\n}\n\n.project-item .header-left {\n    display: flex;\n    gap: 32px;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-item .project-title {\n    padding: 4px 4px 4px 16px;\n    font-size: 32px;\n    font-weight: 900;\n    color: var(--primary-color);\n}\n\n.project-item.unsaved .project-title {\n    color: var(--secondary-color);\n}\n\n.project-item .header-left input {\n    border: 2px solid var(--secondary-color);\n    color: var(--secondary-color)\n}\n\n.project-item .header-left input:focus {\n    outline: 4px solid var(--accent3)\n}\n\n.project-item .plus-button {\n    background-color: var(--secondary-color);\n    border: 2px solid var(--secondary-color);\n}\n\n.add-tags img {\n    height: 48px;\n    filter: invert(1);\n    padding: 8px;\n}\n\n.add-tags .clickable:hover {\n    background-color: var(--accent3);\n}\n\n.add-tags .display-text {\n    padding: 0px 8px;\n}\n\n.project-item > .body {\n    padding: 16px;\n    background-color: var(--accent1-light);\n    transition: background-color 0.3s;\n    overflow: hidden;\n}\n\n.project-item:nth-child(4n-2) > .body {\n    background-color: var(--accent3-light);\n}\n\n.project-item:nth-child(4n-1) > .body {\n    background-color: var(--accent2-light);\n}\n\n.project-item:nth-child(4n) > .body {\n    background-color: var(--accent4-light);\n}\n\n.project-item > .body.collapsed {\n    transition: all 0s;\n    padding: 0px 16px;\n    height: 0px;\n}\n\n.project-item.unsaved > .body {\n    background-color: var(--primary-color);\n    height: auto;\n}\n\n.task-list > .header {\n    border-bottom: 3px double var(--secondary-color);\n    margin-bottom: 8px;\n}\n\n.project-item ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 8px;\n}\n\n/* New Task Button Styling */\n\n.new-task {\n    display: flex;\n    gap: 4px;\n}\n\n.new-task input {\n    border: 0px;\n    border-bottom: 1px solid var(--secondary-color);\n    font-size: 20px;\n    background-color: inherit;\n}\n\n.new-task input::placeholder {\n    font-style: italic;\n}\n\n.new-task input:focus {\n    outline: 0px;\n}"],"sourceRoot":""}]);
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

const sideBar = _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
    id: 'sidebar',
    children: [
        _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].span({
            id: 'sidebar-title',
            text: 'sidebar'
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZ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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QjtBQUNBLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUI7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUNuRyxtR0FBbUc7QUFDbkcsbUdBQW1HO0FBQ25HLG1HQUFtRztBQUNuRyxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUNBQXlDO0FBQ3pDLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QsaUJBQWlCO0FBQ3JFOztBQUVBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsMERBQTBEO0FBQzFELFVBQVU7QUFDVjtBQUNBLDBEQUEwRDtBQUMx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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEM7QUFDeEI7QUFDYztBQUNXOztBQUU3QztBQUNBLDREQUFZOztBQUVaO0FBQ0EsMEJBQTBCLDhEQUFhLEVBQUUseUJBQXlCLGlEQUFRLEVBQUU7O0FBRTVFO0FBQ0EsQ0FBOEM7O0FBRTlDO0FBQ0E7QUFDQSwwQ0FBMEMsbUVBQTBCOztBQUVwRTtBQUNBLG1FQUEwQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY29vbG9ycy1pby9saWIvZ2VuLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nvb2xvcnMtaW8vbGliL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nvb2xvcnMtaW8vbGliL3BhcnNlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9iYXNlQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb2xvckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc2tlbGV0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVkQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvY2hyb21hLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaXNWYWxpZCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAvLyBUT0RPOiDwn5SnICBjaGVjayB0aGF0IGl0IGlzIGEgdmFsaWQgY29vbG9ycyBzdHJpbmcgZS5nIDYgb3IgMyBjaGFyc1xuICAgIC8vIFRPRE86IPCflKcgVmFsaWRhdGUgdGhhdCBlYWNoIGNoYXIgaXMgYSB2YWxpZCBoZXggY2hhciAoMC02LCBhLWYpXG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDYpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG52YXIgZ2VuID0gZnVuY3Rpb24gKGFycikge1xuICAgIC8vIFRPRE86IPCflKcgRW5zdXJlIGFyciBpc24ndCBsb25nZXIgdGhhbiAxMFxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIsIGkpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IPCflKcgaGFuZGxlIHN0cmluZ3MgdGhhdCBzdGFydCB3aXRoICNcbiAgICAgICAgICAgIC8vIGlmIGN1cnIgY29udGFpbnMgIyBpdCB3aWxsIGJlIHJldHVybmVkIHdpdGhvdXQgIywgb3RoZXJ3aXNlIGN1cnIgaXMgc2ltcGx5IHJldHVybmVkXG4gICAgICAgICAgICB2YXIgc3RyID0gY3Vyci5zcGxpdCgnIycpLnBvcCgpO1xuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHN0cikpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0ciArIFwiIGlzIG5vdCBhIHZhbGlkIGhleCB2YWx1ZVwiKTtcbiAgICAgICAgICAgIGlmIChpIDwgYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIGFjYyArIHN0ciArIFwiLVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBhY2MgKyBzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICdodHRwczovL2Nvb2xvcnMuY28vJyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBnZW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnZW5fMSA9IHJlcXVpcmUoXCIuL2dlblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdlblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2VuXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBwYXJzZV8xID0gcmVxdWlyZShcIi4vcGFyc2VcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGFyc2VfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGFyc2UgPSBmdW5jdGlvbiAodXJsLCBoZXgpIHtcbiAgICBpZiAoaGV4ID09PSB2b2lkIDApIHsgaGV4ID0gdHJ1ZTsgfVxuICAgIC8vIFRPRE86IPCflKcgIENoZWNrIHRoYXQgaXQgaXMgYWN0dWFsbHkgYSBjb29sb3JzIHVybFxuICAgIHZhciB1cmxBcnIgPSB1cmwuc3BsaXQoJy8nKTtcbiAgICB2YXIgaGV4QXJyID0gdXJsQXJyW3VybEFyci5sZW5ndGggLSAxXS5zcGxpdCgnLScpO1xuICAgIGlmIChoZXgpIHtcbiAgICAgICAgcmV0dXJuIGhleEFyci5tYXAoZnVuY3Rpb24gKG51bSkgeyByZXR1cm4gXCIjXCIgKyBudW07IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGhleEFycjtcbiAgICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gcGFyc2U7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiUmlnaHRlb3VzLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiQUJlZVplZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIilcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzAwMDAwMDtcXG5cXG4gICAgLS1hY2NlbnQxOiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudDI6ICNmZmZmZmY7XFxuICAgIC0tYWNjZW50MzogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQ0OiAjZmZmZmZmO1xcblxcbiAgICAtLWFjY2VudDEtbGlnaHQ6ICNmZmZmZmY7XFxuICAgIC0tYWNjZW50Mi1saWdodDogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQzLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudDQtbGlnaHQ6ICNmZmZmZmY7XFxufVxcblxcbi8qIFJlbW92ZSBEZWZhdWx0cyAqL1xcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wbHVzLWJ1dHRvbiAuY2xpY2thYmxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5iYW5uZXIge1xcbiAgICBmb250LXNpemU6IDk2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJztcXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4O1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmJhbm5lci10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDFweCB2YXIoLS1hY2NlbnQxKSwgLTJweCAycHggdmFyKC0tYWNjZW50MiksIC0zcHggM3B4IHZhcigtLWFjY2VudDMpLCAtNHB4IDRweCB2YXIoLS1hY2NlbnQ0KVxcbn1cXG5cXG4uYmFubmVyLXRleHQ6aG92ZXIge1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAycHggdmFyKC0tYWNjZW50MSksIC00cHggNHB4IHZhcigtLWFjY2VudDIpLCAtNnB4IDZweCB2YXIoLS1hY2NlbnQzKSwgLThweCA4cHggdmFyKC0tYWNjZW50NCk7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDEtbGlnaHQpO1xcbn1cXG5cXG4jc2lkZWJhci10aXRsZSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgcGFkZGluZzogOHB4IDMycHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDNweCB2YXIoLS1hY2NlbnQzKSwgM3B4IC0zcHggdmFyKC0tYWNjZW50NClcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMzJweCA2NHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbi5wbHVzLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBOZXcgUHJvamVjdCBCdXR0b24gKi9cXG5cXG4ucGx1cy1idXR0b24ubmV3LXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQxKTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubmV3LXByb2plY3QgLmRpc3BsYXktdGV4dCB7XFxuICAgIHBhZGRpbmc6IDBweCAzMnB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QgLmNsaWNrYWJsZSB7XFxuICAgIHdpZHRoOiA1NnB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QgLmNsaWNrYWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5uZXctcHJvamVjdCBpbWcge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4wNXM7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSkgZHJvcC1zaGFkb3coMnB4IDJweCB2YXIoLS1zZWNvbmRhcnktY29sb3IpKTtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbn1cXG5cXG4vKiBOZXcgUHJvamVjdCAoRGlzYWJsZWQpICovXFxuXFxuLnBsdXMtYnV0dG9uLmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wbHVzLWJ1dHRvbi5kaXNhYmxlZCAuZGlzcGxheS10ZXh0IHtcXG4gICAgcGFkZGluZzogMHB4IDMycHg7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBmaWx0ZXI6IGNvbnRyYXN0KDAuMik7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ucGx1cy1idXR0b24uZGlzYWJsZWQgaW1nIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMCkgY29udHJhc3QoMC4yKTtcXG59XFxuXFxuLnBsdXMtYnV0dG9uLmRpc2FibGVkIC5jbGlja2FibGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKiovXFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IHZhcigtLWFjY2VudDEpLCA1cHggLTVweCB2YXIoLS1hY2NlbnQyKTtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpudGgtY2hpbGQoMm4pOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggdmFyKC0tYWNjZW50MyksIDVweCAtNXB4IHZhcigtLWFjY2VudDQpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLnNhdmUsIC5wcm9qZWN0LWl0ZW0gLmRpc2NhcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB0b3A6IC00cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuZGlzY2FyZCB7XFxuICAgIHRvcDogNTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IC5oZWFkZXIge1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQgPiAuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmhlYWRlci1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAucHJvamVjdC10aXRsZSB7XFxuICAgIHBhZGRpbmc6IDRweCA0cHggNHB4IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQgLnByb2plY3QtdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuaGVhZGVyLWxlZnQgaW5wdXQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKVxcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5oZWFkZXItbGVmdCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDRweCBzb2xpZCB2YXIoLS1hY2NlbnQzKVxcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5wbHVzLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5hZGQtdGFncyBpbWcge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5hZGQtdGFncyAuY2xpY2thYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Myk7XFxufVxcblxcbi5hZGQtdGFncyAuZGlzcGxheS10ZXh0IHtcXG4gICAgcGFkZGluZzogMHB4IDhweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IC5ib2R5IHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50MS1saWdodCk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpudGgtY2hpbGQoNG4tMikgPiAuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDMtbGlnaHQpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOm50aC1jaGlsZCg0bi0xKSA+IC5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Mi1saWdodCk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06bnRoLWNoaWxkKDRuKSA+IC5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50NC1saWdodCk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gPiAuYm9keS5jb2xsYXBzZWQge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xcbiAgICBoZWlnaHQ6IDBweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkID4gLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udGFzay1saXN0ID4gLmhlYWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBkb3VibGUgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLyogTmV3IFRhc2sgQnV0dG9uIFN0eWxpbmcgKi9cXG5cXG4ubmV3LXRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLm5ldy10YXNrIGlucHV0IHtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRDQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCOztJQUUxQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0lBRWxCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtBQUM1Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FB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LGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCOztBQUVBLDRCQUE0Qjs7QUFFNUI7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLCtDQUErQztJQUMvQyxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnO1xcbiAgICBzcmM6IHVybCgnUmlnaHRlb3VzLVJlZ3VsYXIudHRmJylcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgc3JjOiB1cmwoJ0FCZWVaZWUtUmVndWxhci50dGYnKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDAwMDA7XFxuXFxuICAgIC0tYWNjZW50MTogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQyOiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudDM6ICNmZmZmZmY7XFxuICAgIC0tYWNjZW50NDogI2ZmZmZmZjtcXG5cXG4gICAgLS1hY2NlbnQxLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudDItbGlnaHQ6ICNmZmZmZmY7XFxuICAgIC0tYWNjZW50My1saWdodDogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQ0LWxpZ2h0OiAjZmZmZmZmO1xcbn1cXG5cXG4vKiBSZW1vdmUgRGVmYXVsdHMgKi9cXG5cXG5idXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucGx1cy1idXR0b24gLmNsaWNrYWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjA1cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYmFubmVyIHtcXG4gICAgZm9udC1zaXplOiA5NnB4O1xcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cyc7XFxuICAgIHBhZGRpbmctbGVmdDogNjRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5iYW5uZXItdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAxcHggdmFyKC0tYWNjZW50MSksIC0ycHggMnB4IHZhcigtLWFjY2VudDIpLCAtM3B4IDNweCB2YXIoLS1hY2NlbnQzKSwgLTRweCA0cHggdmFyKC0tYWNjZW50NClcXG59XFxuXFxuLmJhbm5lci10ZXh0OmhvdmVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IHZhcigtLWFjY2VudDEpLCAtNHB4IDRweCB2YXIoLS1hY2NlbnQyKSwgLTZweCA2cHggdmFyKC0tYWNjZW50MyksIC04cHggOHB4IHZhcigtLWFjY2VudDQpO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQxLWxpZ2h0KTtcXG59XFxuXFxuI3NpZGViYXItdGl0bGUge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIHBhZGRpbmc6IDhweCAzMnB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogLTNweCAzcHggdmFyKC0tYWNjZW50MyksIDNweCAtM3B4IHZhcigtLWFjY2VudDQpXFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDMycHggNjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4ucGx1cy1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogTmV3IFByb2plY3QgQnV0dG9uICovXFxuXFxuLnBsdXMtYnV0dG9uLm5ldy1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50MSk7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IC5kaXNwbGF5LXRleHQge1xcbiAgICBwYWRkaW5nOiAwcHggMzJweDtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IC5jbGlja2FibGUge1xcbiAgICB3aWR0aDogNTZweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IC5jbGlja2FibGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QgaW1nIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDVzO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpIGRyb3Atc2hhZG93KDJweCAycHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSk7XFxuICAgIGhlaWdodDogNTZweDtcXG59XFxuXFxuLyogTmV3IFByb2plY3QgKERpc2FibGVkKSAqL1xcblxcbi5wbHVzLWJ1dHRvbi5kaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucGx1cy1idXR0b24uZGlzYWJsZWQgLmRpc3BsYXktdGV4dCB7XFxuICAgIHBhZGRpbmc6IDBweCAzMnB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZmlsdGVyOiBjb250cmFzdCgwLjIpO1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnBsdXMtYnV0dG9uLmRpc2FibGVkIGltZyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDApIGNvbnRyYXN0KDAuMik7XFxufVxcblxcbi5wbHVzLWJ1dHRvbi5kaXNhYmxlZCAuY2xpY2thYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqL1xcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCB2YXIoLS1hY2NlbnQxKSwgNXB4IC01cHggdmFyKC0tYWNjZW50Mik7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06bnRoLWNoaWxkKDJuKTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IHZhcigtLWFjY2VudDMpLCA1cHggLTVweCB2YXIoLS1hY2NlbnQ0KTtcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5zYXZlLCAucHJvamVjdC1pdGVtIC5kaXNjYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgdG9wOiAtNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmRpc2NhcmQge1xcbiAgICB0b3A6IDU2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gPiAuaGVhZGVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkID4gLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5oZWFkZXItbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzJweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLnByb2plY3QtdGl0bGUge1xcbiAgICBwYWRkaW5nOiA0cHggNHB4IDRweCAxNnB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmhlYWRlci1sZWZ0IGlucHV0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcilcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuaGVhZGVyLWxlZnQgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tYWNjZW50MylcXG59XFxuXFxuLnByb2plY3QtaXRlbSAucGx1cy1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uYWRkLXRhZ3MgaW1nIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uYWRkLXRhZ3MgLmNsaWNrYWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDMpO1xcbn1cXG5cXG4uYWRkLXRhZ3MgLmRpc3BsYXktdGV4dCB7XFxuICAgIHBhZGRpbmc6IDBweCA4cHg7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gPiAuYm9keSB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDEtbGlnaHQpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06bnRoLWNoaWxkKDRuLTIpID4gLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQzLWxpZ2h0KTtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpudGgtY2hpbGQoNG4tMSkgPiAuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDItbGlnaHQpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOm50aC1jaGlsZCg0bikgPiAuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDQtbGlnaHQpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtID4gLmJvZHkuY29sbGFwc2VkIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDBzO1xcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcXG4gICAgaGVpZ2h0OiAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0udW5zYXZlZCA+IC5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnRhc2stbGlzdCA+IC5oZWFkZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggZG91YmxlIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi8qIE5ldyBUYXNrIEJ1dHRvbiBTdHlsaW5nICovXFxuXFxuLm5ldy10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dCB7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ubmV3LXRhc2sgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubmV3LXRhc2sgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGl2OiBvID0+IG5ld0VsZW1lbnQoJ2RpdicsbyksXG4gICAgc3BhbjogbyA9PiBuZXdFbGVtZW50KCdzcGFuJyxvKSxcbiAgICBidXR0b246IG8gPT4gbmV3RWxlbWVudCgnYnV0dG9uJyxvKSxcbiAgICBpbWc6IG8gPT4gbmV3SW1nKG8pLFxuICAgIHVsOiBvID0+IG5ld0VsZW1lbnQoJ3VsJyxvKSxcbiAgICBsaTogbyA9PiBuZXdFbGVtZW50KCdsaScsbylcbn1cblxuLy8gQ2VudHJhbCBmdW5jdGlvbiB0aGF0IGJ1aWxkcyBIVE1MIGVsZW1lbnRzIGZyb20gcHJvdmlkZWQgb2JqZWN0c1xuZnVuY3Rpb24gbmV3RWxlbWVudCh0eXBlLG9iaikge1xuICAgIGxldCByZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmICgndGV4dCcgaW4gb2JqKSByZXQudGV4dENvbnRlbnQgPSBvYmoudGV4dFxuICAgIGlmICgnaWQnIGluIG9iaikgcmV0LmlkID0gb2JqLmlkXG4gICAgaWYgKCdjbGFzcycgaW4gb2JqKSB7XG4gICAgICAgIGZvciAobGV0IGMgaW4gb2JqLmNsYXNzKSB7XG4gICAgICAgICAgICByZXQuY2xhc3NMaXN0LmFkZChvYmouY2xhc3NbY10pXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCdjaGlsZHJlbicgaW4gb2JqKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgb2JqLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXQuYXBwZW5kQ2hpbGQob2JqLmNoaWxkcmVuW2ldKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbmV3SW1nKG9iaikge1xuICAgIGxldCByZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpZiAoJ3NyYycgaW4gb2JqKSByZXQuc2V0QXR0cmlidXRlKCdzcmMnLG9iai5zcmMpXG4gICAgaWYgKCdhbHQnIGluIG9iaikgcmV0LnNldEF0dHJpYnV0ZSgnYWx0JyxvYmouYWx0KVxuICAgIGlmICgnY2xhc3MnIGluIG9iaikge1xuICAgICAgICBmb3IgKGxldCBjIGluIG9iai5jbGFzcykge1xuICAgICAgICAgICAgcmV0LmNsYXNzTGlzdC5hZGQob2JqLmNsYXNzW2NdKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXRcbn0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2Nvb2xvcnMtaW8nXG5pbXBvcnQgY2hyb21hIGZyb20gJ2Nocm9tYS1qcydcblxuY29uc3QgcGFsZXR0ZSA9ICdodHRwczovL2Nvb2xvcnMuY28vZjlmYWZiLTA2MGEwZi02NTkzYzItNmViNGE4LWYwOTc0ZS1lODc2NWEnXG4vLyBjb25zdCBwYWxldHRlID0gJ2h0dHBzOi8vY29vbG9ycy5jby9lYmYyZmEtMDYwYTBlLTA2NDc4OS00MjdhYTEtNjc5NDM2LWE1YmUwMCdcbi8vIGNvbnN0IHBhbGV0dGUgPSAnaHR0cHM6Ly9jb29sb3JzLmNvLzBmMDgwNi1mNmY1ZjMtNDI4MWE0LTQ4YTlhNi1kNGI0ODMtYzE2NjZiJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgbGV0IGNvbG9ycyA9IHBhcnNlKHBhbGV0dGUpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LWNvbG9yJywgY29sb3JzWzBdKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCctLXNlY29uZGFyeS1jb2xvcicsIGNvbG9yc1sxXSlcblxuICAgIGZvciAobGV0IGk9MjtpPGNvbG9ycy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoYC0tYWNjZW50JHtpLTF9YCwgY29sb3JzW2ldKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShgLS1hY2NlbnQke2ktMX0tbGlnaHRgLCBjaHJvbWEoY29sb3JzW2ldKS5zZXQoJ2hzbC5sJywwLjkpKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KGAtLWFjY2VudCR7aS0xfS1kYXJrYCwgY2hyb21hKGNvbG9yc1tpXSkuc2V0KCdoc2wubCcsMC4xKSlcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IHsgcHJvamVjdFRlbXBsYXRlIH0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50c1wiO1xuaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9iYXNlQ29tcG9uZW50cy5qc1wiO1xuXG5sZXQgaW5kZXggPSAwO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYWRkVGVtcGxhdGU6IChlKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpXG4gICAgICAgIC8vIFRlbXBsYXRlIGFscmVhZHkgZXhpc3RzIC0gcmV0dXJuXG4gICAgICAgIGlmIChwcm9qZWN0QXJlYS5xdWVyeVNlbGVjdG9yKCcudW5zYXZlZCcpKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJlYS5xdWVyeVNlbGVjdG9yKCcudW5zYXZlZCcpLnN0eWxlLm91dGxpbmUgPSBcIjRweCBzb2xpZCB2YXIoLS1jb2xvcjIpXCJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3Byb2plY3RBcmVhLnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkJykuc3R5bGUub3V0bGluZSA9IFwiXCJ9LDMwMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IHRlbXBsYXRlIGFuZCBpbnNlcnRcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gcHJvamVjdFRlbXBsYXRlKCk7XG4gICAgICAgIHRlbXBsYXRlLmRhdGFzZXQuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wbGF0ZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgcHJvamVjdEFyZWEuaW5zZXJ0QmVmb3JlKHRlbXBsYXRlLCBwcm9qZWN0QXJlYS5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKSlcblxuICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRlbXBsYXRlXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkIC5uZXctdGFzayBidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkSXRlbSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkIC5uZXctdGFzayBpbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLGFkZElmRW50ZXIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5zYXZlZCAuZGlzY2FyZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZW1vdmVUZW1wbGF0ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkIC5zYXZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHNhdmVUZW1wbGF0ZSk7XG5cbiAgICAgICAgLy8gRGlzYWJsZSBidXR0b25cbiAgICAgICAgdG9nZ2xlQWRkaW5nKCk7XG4gICAgfSwgICAgXG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW0oZSkge1xuICAgIGxldCB0ID0gZS50YXJnZXQ7XG4gICAgY29uc29sZS5sb2codCk7XG4gICAgbGV0IGxpc3QgPSB0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIGxldCBpbnB1dCA9IHQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykgbGlzdC5hcHBlbmRDaGlsZChjb21wb25lbnQubGkoe3RleHQ6IGlucHV0LnZhbHVlfSkpXG4gICAgaW5wdXQudmFsdWUgPSAnJ1xufVxuXG5mdW5jdGlvbiBhZGRJZkVudGVyKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgYWRkSXRlbShlKVxufVxuXG5mdW5jdGlvbiBzYXZlVGVtcGxhdGUoZSkge1xuICAgIC8vIENoZWNrIHRpdGxlIGFuZCByZW1vdmVcbiAgICBsZXQgaXRlbSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IGhsID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWxlZnQnKTtcbiAgICBsZXQgaW5wdXQgPSBobC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpXG5cbiAgICAvLyBkbyBub3RoaW5nIGlmIHRpdGxlIGVtcHR5XG4gICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICBpbnB1dC5zdHlsZS5vdXRsaW5lID0gJzRweCBzb2xpZCByZWQnXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge2lucHV0LnN0eWxlLm91dGxpbmUgPSAnJ30sNTAwKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2coJ3NhdmluZyBwcm9qZWN0IGl0ZW0nKTtcblxuICAgIC8vIFJlbW92ZSBTYXZlL0Rpc2NhcmQgYnV0dG9uc1xuICAgIGl0ZW0ucmVtb3ZlQ2hpbGQoZS50YXJnZXQpXG4gICAgaXRlbS5yZW1vdmVDaGlsZChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kaXNjYXJkJykpXG5cbiAgICAvLyBSZXBsYWNlIGlucHV0IHdpdGggYWN0dWFsIHByb2plY3QgdGl0bGVcbiAgICBobC5pbnNlcnRCZWZvcmUoY29tcG9uZW50LmRpdih7Y2xhc3M6IFsncHJvamVjdC10aXRsZSddLCB0ZXh0OiBpbnB1dC52YWx1ZX0pLGhsLmZpcnN0Q2hpbGQpXG4gICAgaGwucmVtb3ZlQ2hpbGQoaW5wdXQpXG5cbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Vuc2F2ZWQnKVxuXG4gICAgLy8gQWxsb3cgYnV0dG9uIHRvIGFkZCBwcm9qZWN0cyBhZ2FpblxuICAgIHRvZ2dsZUFkZGluZygpO1xuXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRlbXBsYXRlKGUpIHtcbiAgICB0b2dnbGVBZGRpbmcoKTtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVBZGRpbmcoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LnBsdXMtYnV0dG9uJykuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzYWJsZWQnKVxufVxuXG4iLCJpbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2Jhc2VDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IHBsdXNCdXR0b24gfSBmcm9tIFwiLi9zdHlsZWRDb21wb25lbnRzXCJcblxuY29uc3QgYmFubmVyID0gY29tcG9uZW50LmRpdih7XG4gICAgY2xhc3M6IFsnYmFubmVyJ10sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgY29tcG9uZW50LnNwYW4oe1xuICAgICAgICAgICAgY2xhc3M6IFsnYmFubmVyLXRleHQnXSxcbiAgICAgICAgICAgIHRleHQ6ICdUby1EbyBMaXN0J1xuICAgICAgICB9KVxuICAgIF1cbn0pXG5cbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBwbHVzQnV0dG9uKCduZXctcHJvamVjdCcsJ2FkZCBuZXcgcHJvamVjdCcpXG5cbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBjb21wb25lbnQuZGl2KHtcbiAgICBpZDogWydwcm9qZWN0LWNvbnRhaW5lciddLFxuICAgIGNoaWxkcmVuOiBbIG5ld1Byb2plY3RCdXR0b24gXVxufSlcblxuY29uc3Qgc2lkZUJhciA9IGNvbXBvbmVudC5kaXYoe1xuICAgIGlkOiAnc2lkZWJhcicsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgY29tcG9uZW50LnNwYW4oe1xuICAgICAgICAgICAgaWQ6ICdzaWRlYmFyLXRpdGxlJyxcbiAgICAgICAgICAgIHRleHQ6ICdzaWRlYmFyJ1xuICAgICAgICB9KVxuICAgIF1cbn0pXG5cbmNvbnN0IG1haW5Db250ZW50ID0gY29tcG9uZW50LmRpdih7XG4gICAgaWQ6ICdtYWluLWNvbnRlbnQnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHNpZGVCYXIsXG4gICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICBdXG59KVxuXG5leHBvcnQgZGVmYXVsdCBbYmFubmVyLCBtYWluQ29udGVudF0iLCJpbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2Jhc2VDb21wb25lbnRzLmpzXCJcbmltcG9ydCBwbHVzSW1hZ2UgZnJvbSBcIi4vcGx1cy1zeW1ib2wtYnV0dG9uLnBuZ1wiXG5pbXBvcnQgY2hlY2sgZnJvbSAnLi9jaGVjay5wbmcnXG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9jbG9zZS5wbmcnXG5cbmZ1bmN0aW9uIHBsdXNCdXR0b25CYXNlKCkge1xuICAgIHJldHVybiBjb21wb25lbnQuYnV0dG9uKHtcbiAgICAgICAgY2xhc3M6IFsnY2xpY2thYmxlJ10sXG4gICAgICAgIGNoaWxkcmVuOiBbIGNvbXBvbmVudC5pbWcoe3NyYzogcGx1c0ltYWdlfSkgXVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbHVzQnV0dG9uIChhQ2xhc3MsdGV4dCkgeyByZXR1cm4gY29tcG9uZW50LmRpdih7XG4gICAgY2xhc3M6IFthQ2xhc3MsICdwbHVzLWJ1dHRvbiddLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHBsdXNCdXR0b25CYXNlKCksXG4gICAgICAgIGNvbXBvbmVudC5zcGFuKHtcbiAgICAgICAgICAgIGNsYXNzOiBbJ2Rpc3BsYXktdGV4dCddLFxuICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICB9KVxuICAgIF1cbn0pfVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFRlbXBsYXRlICgpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmRpdih7XG4gICAgICAgIGNsYXNzOiBbJ3Byb2plY3QtaXRlbScsJ3Vuc2F2ZWQnXSxcbiAgICAgICAgY2hpbGRyZW46IFtwcm9qZWN0SXRlbUhlYWRlcigpLCBwcm9qZWN0SXRlbUJvZHkoKSwgcHJvamVjdFNhdmUoKSwgcHJvamVjdERpc2NhcmQoKV1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0U2F2ZSgpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmltZyh7XG4gICAgICAgIHNyYzogY2hlY2ssXG4gICAgICAgIGNsYXNzOiBbJ3NhdmUnXVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3REaXNjYXJkKCkge1xuICAgIHJldHVybiBjb21wb25lbnQuaW1nKHtcbiAgICAgICAgc3JjOiBjbG9zZSxcbiAgICAgICAgY2xhc3M6IFsnZGlzY2FyZCddXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcHJvamVjdEl0ZW1IZWFkZXIoKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5kaXYoe1xuICAgICAgICBjbGFzczogWydoZWFkZXInXSxcbiAgICAgICAgY2hpbGRyZW46IFsgcHJvamVjdEhlYWRlckxlZnQoKSwgcHJvamVjdEhlYWRlclJpZ2h0KCldXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcHJvamVjdEhlYWRlckxlZnQoKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5kaXYoe1xuICAgICAgICBjbGFzczogWydoZWFkZXItbGVmdCddLFxuICAgICAgICBjaGlsZHJlbjogWyBwcm9qZWN0VGl0bGUoKSwgYWRkVGFnc0J1dHRvbigpLCBdXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcHJvamVjdFRpdGxlKCkge1xuICAgIGxldCByZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgIHJldC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnUHJvamVjdCBOYW1lJylcbiAgICByZXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpXG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gYWRkVGFnc0J1dHRvbigpIHtcbiAgICByZXR1cm4gcGx1c0J1dHRvbignYWRkLXRhZ3MnLCdhZGQgdGFncycpXG59XG5cbmZ1bmN0aW9uIHByb2plY3RIZWFkZXJSaWdodCgpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmRpdih7XG4gICAgICAgIGNsYXNzOiBbJ2hlYWRlci1yaWdodCddLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgY29tcG9uZW50LmRpdih7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFsnZHVlLWRhdGUnXSxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnRHVlIERhdGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcHJvamVjdEl0ZW1Cb2R5KCkgeyByZXR1cm4gY29tcG9uZW50LmRpdih7XG4gICAgICAgIGNsYXNzOiBbJ2JvZHknXSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGNvbXBvbmVudC5kaXYoe1xuICAgICAgICAgICAgICAgIGNsYXNzOiBbJ3Rhc2stbGlzdCddLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kaXYoe2NsYXNzOiBbJ2hlYWRlciddLCB0ZXh0OiAnVGFzayBMaXN0J30pLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQudWwoe2NsYXNzOiBbJ2xpc3QnXX0pLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbJ25ldy10YXNrJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5idXR0b24oe3RleHQ6ICcrJ30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdhZGQgYSB0YXNrLi4uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1NhdmVkKHByb2plY3QpIHtcbiAgICBjb25zb2xlLmxvZygnY29udmVydGluZyB0byBzYXZlZCcpO1xufSIsIi8qKlxuICogY2hyb21hLmpzIC0gSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBjb2xvciBjb252ZXJzaW9uc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMS0yMDE5LCBHcmVnb3IgQWlzY2hcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICpcbiAqIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbiAqIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIDMuIFRoZSBuYW1lIEdyZWdvciBBaXNjaCBtYXkgbm90IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzXG4gKiBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuICogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXG4gKiBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBHUkVHT1IgQUlTQ0ggT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLFxuICogQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUllcbiAqIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gKiBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsXG4gKiBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBjaHJvbWEuanMgaW5jbHVkZXMgY29sb3JzIGZyb20gY29sb3JicmV3ZXIyLm9yZywgd2hpY2ggYXJlIHJlbGVhc2VkIHVuZGVyXG4gKiB0aGUgZm9sbG93aW5nIGxpY2Vuc2U6XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDAyIEN5bnRoaWEgQnJld2VyLCBNYXJrIEhhcnJvd2VyLFxuICogYW5kIFRoZSBQZW5uc3lsdmFuaWEgU3RhdGUgVW5pdmVyc2l0eS5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiAqIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljXG4gKiBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIE5hbWVkIGNvbG9ycyBhcmUgdGFrZW4gZnJvbSBYMTEgQ29sb3IgTmFtZXMuXG4gKiBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbiAqXG4gKiBAcHJlc2VydmVcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5jaHJvbWEgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGxpbWl0JDIgPSBmdW5jdGlvbiAoeCwgbWluLCBtYXgpIHtcbiAgICAgICAgaWYgKCBtaW4gPT09IHZvaWQgMCApIG1pbj0wO1xuICAgICAgICBpZiAoIG1heCA9PT0gdm9pZCAwICkgbWF4PTE7XG5cbiAgICAgICAgcmV0dXJuIHggPCBtaW4gPyBtaW4gOiB4ID4gbWF4ID8gbWF4IDogeDtcbiAgICB9O1xuXG4gICAgdmFyIGxpbWl0JDEgPSBsaW1pdCQyO1xuXG4gICAgdmFyIGNsaXBfcmdiJDMgPSBmdW5jdGlvbiAocmdiKSB7XG4gICAgICAgIHJnYi5fY2xpcHBlZCA9IGZhbHNlO1xuICAgICAgICByZ2IuX3VuY2xpcHBlZCA9IHJnYi5zbGljZSgwKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPD0zOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgMykge1xuICAgICAgICAgICAgICAgIGlmIChyZ2JbaV0gPCAwIHx8IHJnYltpXSA+IDI1NSkgeyByZ2IuX2NsaXBwZWQgPSB0cnVlOyB9XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gbGltaXQkMShyZ2JbaV0sIDAsIDI1NSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZ2JbaV0gPSBsaW1pdCQxKHJnYltpXSwgMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9O1xuXG4gICAgLy8gcG9ydGVkIGZyb20galF1ZXJ5J3MgJC50eXBlXG4gICAgdmFyIGNsYXNzVG9UeXBlID0ge307XG4gICAgZm9yICh2YXIgaSQxID0gMCwgbGlzdCQxID0gWydCb29sZWFuJywgJ051bWJlcicsICdTdHJpbmcnLCAnRnVuY3Rpb24nLCAnQXJyYXknLCAnRGF0ZScsICdSZWdFeHAnLCAnVW5kZWZpbmVkJywgJ051bGwnXTsgaSQxIDwgbGlzdCQxLmxlbmd0aDsgaSQxICs9IDEpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBsaXN0JDFbaSQxXTtcblxuICAgICAgICBjbGFzc1RvVHlwZVsoXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiKV0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHZhciB0eXBlJHAgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIGNsYXNzVG9UeXBlW09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopXSB8fCBcIm9iamVjdFwiO1xuICAgIH07XG5cbiAgICB2YXIgdHlwZSRvID0gdHlwZSRwO1xuXG4gICAgdmFyIHVucGFjayRCID0gZnVuY3Rpb24gKGFyZ3MsIGtleU9yZGVyKSB7XG4gICAgICAgIGlmICgga2V5T3JkZXIgPT09IHZvaWQgMCApIGtleU9yZGVyPW51bGw7XG5cbiAgICBcdC8vIGlmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiAzIGFyZ3VtZW50cywgd2UgcmV0dXJuIHRoZSBhcmd1bWVudHNcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID49IDMpIHsgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpOyB9XG4gICAgICAgIC8vIHdpdGggbGVzcyB0aGFuIDMgYXJncyB3ZSBjaGVjayBpZiBmaXJzdCBhcmcgaXMgb2JqZWN0XG4gICAgICAgIC8vIGFuZCB1c2UgdGhlIGtleU9yZGVyIHN0cmluZyB0byBleHRyYWN0IGFuZCBzb3J0IHByb3BlcnRpZXNcbiAgICBcdGlmICh0eXBlJG8oYXJnc1swXSkgPT0gJ29iamVjdCcgJiYga2V5T3JkZXIpIHtcbiAgICBcdFx0cmV0dXJuIGtleU9yZGVyLnNwbGl0KCcnKVxuICAgIFx0XHRcdC5maWx0ZXIoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGFyZ3NbMF1ba10gIT09IHVuZGVmaW5lZDsgfSlcbiAgICBcdFx0XHQubWFwKGZ1bmN0aW9uIChrKSB7IHJldHVybiBhcmdzWzBdW2tdOyB9KTtcbiAgICBcdH1cbiAgICBcdC8vIG90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiB0aGUgZmlyc3QgYXJndW1lbnRcbiAgICBcdC8vICh3aGljaCB3ZSBzdXBwb3NlIGlzIGFuIGFycmF5IG9mIGFyZ3MpXG4gICAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgIH07XG5cbiAgICB2YXIgdHlwZSRuID0gdHlwZSRwO1xuXG4gICAgdmFyIGxhc3QkNCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IDIpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgdmFyIGwgPSBhcmdzLmxlbmd0aC0xO1xuICAgICAgICBpZiAodHlwZSRuKGFyZ3NbbF0pID09ICdzdHJpbmcnKSB7IHJldHVybiBhcmdzW2xdLnRvTG93ZXJDYXNlKCk7IH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZhciBQSSQyID0gTWF0aC5QSTtcblxuICAgIHZhciB1dGlscyA9IHtcbiAgICBcdGNsaXBfcmdiOiBjbGlwX3JnYiQzLFxuICAgIFx0bGltaXQ6IGxpbWl0JDIsXG4gICAgXHR0eXBlOiB0eXBlJHAsXG4gICAgXHR1bnBhY2s6IHVucGFjayRCLFxuICAgIFx0bGFzdDogbGFzdCQ0LFxuICAgIFx0UEk6IFBJJDIsXG4gICAgXHRUV09QSTogUEkkMioyLFxuICAgIFx0UElUSElSRDogUEkkMi8zLFxuICAgIFx0REVHMlJBRDogUEkkMiAvIDE4MCxcbiAgICBcdFJBRDJERUc6IDE4MCAvIFBJJDJcbiAgICB9O1xuXG4gICAgdmFyIGlucHV0JGggPSB7XG4gICAgXHRmb3JtYXQ6IHt9LFxuICAgIFx0YXV0b2RldGVjdDogW11cbiAgICB9O1xuXG4gICAgdmFyIGxhc3QkMyA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIGNsaXBfcmdiJDIgPSB1dGlscy5jbGlwX3JnYjtcbiAgICB2YXIgdHlwZSRtID0gdXRpbHMudHlwZTtcbiAgICB2YXIgX2lucHV0ID0gaW5wdXQkaDtcblxuICAgIHZhciBDb2xvciREID0gZnVuY3Rpb24gQ29sb3IoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGUkbShhcmdzWzBdKSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0uY29uc3RydWN0b3IgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0uY29uc3RydWN0b3IgPT09IHRoaXMuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIC8vIHRoZSBhcmd1bWVudCBpcyBhbHJlYWR5IGEgQ29sb3IgaW5zdGFuY2VcbiAgICAgICAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGFzdCBhcmd1bWVudCBjb3VsZCBiZSB0aGUgbW9kZVxuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMyhhcmdzKTtcbiAgICAgICAgdmFyIGF1dG9kZXRlY3QgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIW1vZGUpIHtcbiAgICAgICAgICAgIGF1dG9kZXRlY3QgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFfaW5wdXQuc29ydGVkKSB7XG4gICAgICAgICAgICAgICAgX2lucHV0LmF1dG9kZXRlY3QgPSBfaW5wdXQuYXV0b2RldGVjdC5zb3J0KGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGIucCAtIGEucDsgfSk7XG4gICAgICAgICAgICAgICAgX2lucHV0LnNvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhdXRvLWRldGVjdCBmb3JtYXRcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gX2lucHV0LmF1dG9kZXRlY3Q7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoayA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgICAgICBtb2RlID0gY2hrLnRlc3QuYXBwbHkoY2hrLCBhcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSkgeyBicmVhazsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9pbnB1dC5mb3JtYXRbbW9kZV0pIHtcbiAgICAgICAgICAgIHZhciByZ2IgPSBfaW5wdXQuZm9ybWF0W21vZGVdLmFwcGx5KG51bGwsIGF1dG9kZXRlY3QgPyBhcmdzIDogYXJncy5zbGljZSgwLC0xKSk7XG4gICAgICAgICAgICBtZS5fcmdiID0gY2xpcF9yZ2IkMihyZ2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGZvcm1hdDogJythcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBhbHBoYSBjaGFubmVsXG4gICAgICAgIGlmIChtZS5fcmdiLmxlbmd0aCA9PT0gMykgeyBtZS5fcmdiLnB1c2goMSk7IH1cbiAgICB9O1xuXG4gICAgQ29sb3IkRC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgICAgIGlmICh0eXBlJG0odGhpcy5oZXgpID09ICdmdW5jdGlvbicpIHsgcmV0dXJuIHRoaXMuaGV4KCk7IH1cbiAgICAgICAgcmV0dXJuIChcIltcIiArICh0aGlzLl9yZ2Iuam9pbignLCcpKSArIFwiXVwiKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yXzEgPSBDb2xvciREO1xuXG4gICAgdmFyIGNocm9tYSRrID0gZnVuY3Rpb24gKCkge1xuICAgIFx0dmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBcdHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICBcdHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBjaHJvbWEkay5Db2xvciwgWyBudWxsIF0uY29uY2F0KCBhcmdzKSApKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGsuQ29sb3IgPSBDb2xvcl8xO1xuICAgIGNocm9tYSRrLnZlcnNpb24gPSAnMi40LjInO1xuXG4gICAgdmFyIGNocm9tYV8xID0gY2hyb21hJGs7XG5cbiAgICB2YXIgdW5wYWNrJEEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIG1heCQyID0gTWF0aC5tYXg7XG5cbiAgICB2YXIgcmdiMmNteWskMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJEEoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByID0gciAvIDI1NTtcbiAgICAgICAgZyA9IGcgLyAyNTU7XG4gICAgICAgIGIgPSBiIC8gMjU1O1xuICAgICAgICB2YXIgayA9IDEgLSBtYXgkMihyLG1heCQyKGcsYikpO1xuICAgICAgICB2YXIgZiA9IGsgPCAxID8gMSAvICgxLWspIDogMDtcbiAgICAgICAgdmFyIGMgPSAoMS1yLWspICogZjtcbiAgICAgICAgdmFyIG0gPSAoMS1nLWspICogZjtcbiAgICAgICAgdmFyIHkgPSAoMS1iLWspICogZjtcbiAgICAgICAgcmV0dXJuIFtjLG0seSxrXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJjbXlrXzEgPSByZ2IyY215ayQxO1xuXG4gICAgdmFyIHVucGFjayR6ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgdmFyIGNteWsycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skeihhcmdzLCAnY215aycpO1xuICAgICAgICB2YXIgYyA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBtID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIHkgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgayA9IGFyZ3NbM107XG4gICAgICAgIHZhciBhbHBoYSA9IGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiAxO1xuICAgICAgICBpZiAoayA9PT0gMSkgeyByZXR1cm4gWzAsMCwwLGFscGhhXTsgfVxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgYyA+PSAxID8gMCA6IDI1NSAqICgxLWMpICogKDEtayksIC8vIHJcbiAgICAgICAgICAgIG0gPj0gMSA/IDAgOiAyNTUgKiAoMS1tKSAqICgxLWspLCAvLyBnXG4gICAgICAgICAgICB5ID49IDEgPyAwIDogMjU1ICogKDEteSkgKiAoMS1rKSwgLy8gYlxuICAgICAgICAgICAgYWxwaGFcbiAgICAgICAgXTtcbiAgICB9O1xuXG4gICAgdmFyIGNteWsycmdiXzEgPSBjbXlrMnJnYjtcblxuICAgIHZhciBjaHJvbWEkaiA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRDID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkZyA9IGlucHV0JGg7XG4gICAgdmFyIHVucGFjayR5ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGwgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHJnYjJjbXlrID0gcmdiMmNteWtfMTtcblxuICAgIENvbG9yJEMucHJvdG90eXBlLmNteWsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJjbXlrKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRqLmNteWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJEMsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydjbXlrJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCRnLmZvcm1hdC5jbXlrID0gY215azJyZ2JfMTtcblxuICAgIGlucHV0JGcuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skeShhcmdzLCAnY215aycpO1xuICAgICAgICAgICAgaWYgKHR5cGUkbChhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnY215ayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skeCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGFzdCQyID0gdXRpbHMubGFzdDtcbiAgICB2YXIgcm5kID0gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIE1hdGgucm91bmQoYSoxMDApLzEwMDsgfTtcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIGhzbDJjc3MoaCxzLGwpXG4gICAgICogLSBoc2wyY3NzKGgscyxsLGEpXG4gICAgICogLSBoc2wyY3NzKFtoLHMsbF0sIG1vZGUpXG4gICAgICogLSBoc2wyY3NzKFtoLHMsbCxhXSwgbW9kZSlcbiAgICAgKiAtIGhzbDJjc3Moe2gscyxsLGF9LCBtb2RlKVxuICAgICAqL1xuICAgIHZhciBoc2wyY3NzJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIGhzbGEgPSB1bnBhY2skeChhcmdzLCAnaHNsYScpO1xuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMihhcmdzKSB8fCAnbHNhJztcbiAgICAgICAgaHNsYVswXSA9IHJuZChoc2xhWzBdIHx8IDApO1xuICAgICAgICBoc2xhWzFdID0gcm5kKGhzbGFbMV0qMTAwKSArICclJztcbiAgICAgICAgaHNsYVsyXSA9IHJuZChoc2xhWzJdKjEwMCkgKyAnJSc7XG4gICAgICAgIGlmIChtb2RlID09PSAnaHNsYScgfHwgKGhzbGEubGVuZ3RoID4gMyAmJiBoc2xhWzNdPDEpKSB7XG4gICAgICAgICAgICBoc2xhWzNdID0gaHNsYS5sZW5ndGggPiAzID8gaHNsYVszXSA6IDE7XG4gICAgICAgICAgICBtb2RlID0gJ2hzbGEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHNsYS5sZW5ndGggPSAzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobW9kZSArIFwiKFwiICsgKGhzbGEuam9pbignLCcpKSArIFwiKVwiKTtcbiAgICB9O1xuXG4gICAgdmFyIGhzbDJjc3NfMSA9IGhzbDJjc3MkMTtcblxuICAgIHZhciB1bnBhY2skdyA9IHV0aWxzLnVucGFjaztcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJoc2wocixnLGIpXG4gICAgICogLSByZ2IyaHNsKHIsZyxiLGEpXG4gICAgICogLSByZ2IyaHNsKFtyLGcsYl0pXG4gICAgICogLSByZ2IyaHNsKFtyLGcsYixhXSlcbiAgICAgKiAtIHJnYjJoc2woe3IsZyxiLGF9KVxuICAgICAqL1xuICAgIHZhciByZ2IyaHNsJDMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayR3KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHZhciByID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGcgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG5cbiAgICAgICAgciAvPSAyNTU7XG4gICAgICAgIGcgLz0gMjU1O1xuICAgICAgICBiIC89IDI1NTtcblxuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblxuICAgICAgICB2YXIgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgICAgICAgdmFyIHMsIGg7XG5cbiAgICAgICAgaWYgKG1heCA9PT0gbWluKXtcbiAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gbCA8IDAuNSA/IChtYXggLSBtaW4pIC8gKG1heCArIG1pbikgOiAobWF4IC0gbWluKSAvICgyIC0gbWF4IC0gbWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyID09IG1heCkgeyBoID0gKGcgLSBiKSAvIChtYXggLSBtaW4pOyB9XG4gICAgICAgIGVsc2UgaWYgKGcgPT0gbWF4KSB7IGggPSAyICsgKGIgLSByKSAvIChtYXggLSBtaW4pOyB9XG4gICAgICAgIGVsc2UgaWYgKGIgPT0gbWF4KSB7IGggPSA0ICsgKHIgLSBnKSAvIChtYXggLSBtaW4pOyB9XG5cbiAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aD4zICYmIGFyZ3NbM10hPT11bmRlZmluZWQpIHsgcmV0dXJuIFtoLHMsbCxhcmdzWzNdXTsgfVxuICAgICAgICByZXR1cm4gW2gscyxsXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoc2xfMSA9IHJnYjJoc2wkMztcblxuICAgIHZhciB1bnBhY2skdiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGFzdCQxID0gdXRpbHMubGFzdDtcbiAgICB2YXIgaHNsMmNzcyA9IGhzbDJjc3NfMTtcbiAgICB2YXIgcmdiMmhzbCQyID0gcmdiMmhzbF8xO1xuICAgIHZhciByb3VuZCQ2ID0gTWF0aC5yb3VuZDtcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJjc3MocixnLGIpXG4gICAgICogLSByZ2IyY3NzKHIsZyxiLGEpXG4gICAgICogLSByZ2IyY3NzKFtyLGcsYl0sIG1vZGUpXG4gICAgICogLSByZ2IyY3NzKFtyLGcsYixhXSwgbW9kZSlcbiAgICAgKiAtIHJnYjJjc3Moe3IsZyxiLGF9LCBtb2RlKVxuICAgICAqL1xuICAgIHZhciByZ2IyY3NzJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYmEgPSB1bnBhY2skdihhcmdzLCAncmdiYScpO1xuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMShhcmdzKSB8fCAncmdiJztcbiAgICAgICAgaWYgKG1vZGUuc3Vic3RyKDAsMykgPT0gJ2hzbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBoc2wyY3NzKHJnYjJoc2wkMihyZ2JhKSwgbW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmdiYVswXSA9IHJvdW5kJDYocmdiYVswXSk7XG4gICAgICAgIHJnYmFbMV0gPSByb3VuZCQ2KHJnYmFbMV0pO1xuICAgICAgICByZ2JhWzJdID0gcm91bmQkNihyZ2JhWzJdKTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdyZ2JhJyB8fCAocmdiYS5sZW5ndGggPiAzICYmIHJnYmFbM108MSkpIHtcbiAgICAgICAgICAgIHJnYmFbM10gPSByZ2JhLmxlbmd0aCA+IDMgPyByZ2JhWzNdIDogMTtcbiAgICAgICAgICAgIG1vZGUgPSAncmdiYSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChtb2RlICsgXCIoXCIgKyAocmdiYS5zbGljZSgwLG1vZGU9PT0ncmdiJz8zOjQpLmpvaW4oJywnKSkgKyBcIilcIik7XG4gICAgfTtcblxuICAgIHZhciByZ2IyY3NzXzEgPSByZ2IyY3NzJDE7XG5cbiAgICB2YXIgdW5wYWNrJHUgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJvdW5kJDUgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIGhzbDJyZ2IkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFzc2lnbjtcblxuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuICAgICAgICBhcmdzID0gdW5wYWNrJHUoYXJncywgJ2hzbCcpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBzID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGwgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgICAgICByID0gZyA9IGIgPSBsKjI1NTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0MyA9IFswLDAsMF07XG4gICAgICAgICAgICB2YXIgYyA9IFswLDAsMF07XG4gICAgICAgICAgICB2YXIgdDIgPSBsIDwgMC41ID8gbCAqICgxK3MpIDogbCtzLWwqcztcbiAgICAgICAgICAgIHZhciB0MSA9IDIgKiBsIC0gdDI7XG4gICAgICAgICAgICB2YXIgaF8gPSBoIC8gMzYwO1xuICAgICAgICAgICAgdDNbMF0gPSBoXyArIDEvMztcbiAgICAgICAgICAgIHQzWzFdID0gaF87XG4gICAgICAgICAgICB0M1syXSA9IGhfIC0gMS8zO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPDM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0M1tpXSA8IDApIHsgdDNbaV0gKz0gMTsgfVxuICAgICAgICAgICAgICAgIGlmICh0M1tpXSA+IDEpIHsgdDNbaV0gLT0gMTsgfVxuICAgICAgICAgICAgICAgIGlmICg2ICogdDNbaV0gPCAxKVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0M1tpXTsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKDIgKiB0M1tpXSA8IDEpXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQyOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoMyAqIHQzW2ldIDwgMilcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDEgKyAodDIgLSB0MSkgKiAoKDIgLyAzKSAtIHQzW2ldKSAqIDY7IH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQxOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoYXNzaWduID0gW3JvdW5kJDUoY1swXSoyNTUpLHJvdW5kJDUoY1sxXSoyNTUpLHJvdW5kJDUoY1syXSoyNTUpXSwgciA9IGFzc2lnblswXSwgZyA9IGFzc2lnblsxXSwgYiA9IGFzc2lnblsyXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgLy8ga2VlcCBhbHBoYSBjaGFubmVsXG4gICAgICAgICAgICByZXR1cm4gW3IsZyxiLGFyZ3NbM11dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgfTtcblxuICAgIHZhciBoc2wycmdiXzEgPSBoc2wycmdiJDE7XG5cbiAgICB2YXIgaHNsMnJnYiA9IGhzbDJyZ2JfMTtcbiAgICB2YXIgaW5wdXQkZiA9IGlucHV0JGg7XG5cbiAgICB2YXIgUkVfUkdCID0gL15yZ2JcXChcXHMqKC0/XFxkKyksXFxzKigtP1xcZCspXFxzKixcXHMqKC0/XFxkKylcXHMqXFwpJC87XG4gICAgdmFyIFJFX1JHQkEgPSAvXnJnYmFcXChcXHMqKC0/XFxkKyksXFxzKigtP1xcZCspXFxzKixcXHMqKC0/XFxkKylcXHMqLFxccyooWzAxXXxbMDFdP1xcLlxcZCspXFwpJC87XG4gICAgdmFyIFJFX1JHQl9QQ1QgPSAvXnJnYlxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSUsXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccypcXCkkLztcbiAgICB2YXIgUkVfUkdCQV9QQ1QgPSAvXnJnYmFcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooWzAxXXxbMDFdP1xcLlxcZCspXFwpJC87XG4gICAgdmFyIFJFX0hTTCA9IC9eaHNsXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqXFwpJC87XG4gICAgdmFyIFJFX0hTTEEgPSAvXmhzbGFcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyksXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcblxuICAgIHZhciByb3VuZCQ0ID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciBjc3MycmdiJDEgPSBmdW5jdGlvbiAoY3NzKSB7XG4gICAgICAgIGNzcyA9IGNzcy50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgICAgdmFyIG07XG5cbiAgICAgICAgaWYgKGlucHV0JGYuZm9ybWF0Lm5hbWVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dCRmLmZvcm1hdC5uYW1lZChjc3MpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiKDI1MCwyMCwwKVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8MzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gK3JnYltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJnYlszXSA9IDE7ICAvLyBkZWZhdWx0IGFscGhhXG4gICAgICAgICAgICByZXR1cm4gcmdiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiYSgyNTAsMjAsMCwwLjQpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0JBKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IkMSA9IG0uc2xpY2UoMSw1KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMT0wOyBpJDE8NDsgaSQxKyspIHtcbiAgICAgICAgICAgICAgICByZ2IkMVtpJDFdID0gK3JnYiQxW2kkMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmdiJDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2IoMTAwJSwwJSwwJSlcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQl9QQ1QpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiQyID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQyPTA7IGkkMjwzOyBpJDIrKykge1xuICAgICAgICAgICAgICAgIHJnYiQyW2kkMl0gPSByb3VuZCQ0KHJnYiQyW2kkMl0gKiAyLjU1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJnYiQyWzNdID0gMTsgIC8vIGRlZmF1bHQgYWxwaGFcbiAgICAgICAgICAgIHJldHVybiByZ2IkMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJnYmEoMTAwJSwwJSwwJSwwLjQpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0JBX1BDVCkpKSB7XG4gICAgICAgICAgICB2YXIgcmdiJDMgPSBtLnNsaWNlKDEsNSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDM9MDsgaSQzPDM7IGkkMysrKSB7XG4gICAgICAgICAgICAgICAgcmdiJDNbaSQzXSA9IHJvdW5kJDQocmdiJDNbaSQzXSAqIDIuNTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmdiJDNbM10gPSArcmdiJDNbM107XG4gICAgICAgICAgICByZXR1cm4gcmdiJDM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoc2woMCwxMDAlLDUwJSlcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX0hTTCkpKSB7XG4gICAgICAgICAgICB2YXIgaHNsID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgaHNsWzFdICo9IDAuMDE7XG4gICAgICAgICAgICBoc2xbMl0gKj0gMC4wMTtcbiAgICAgICAgICAgIHZhciByZ2IkNCA9IGhzbDJyZ2IoaHNsKTtcbiAgICAgICAgICAgIHJnYiQ0WzNdID0gMTtcbiAgICAgICAgICAgIHJldHVybiByZ2IkNDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhzbGEoMCwxMDAlLDUwJSwwLjUpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9IU0xBKSkpIHtcbiAgICAgICAgICAgIHZhciBoc2wkMSA9IG0uc2xpY2UoMSw0KTtcbiAgICAgICAgICAgIGhzbCQxWzFdICo9IDAuMDE7XG4gICAgICAgICAgICBoc2wkMVsyXSAqPSAwLjAxO1xuICAgICAgICAgICAgdmFyIHJnYiQ1ID0gaHNsMnJnYihoc2wkMSk7XG4gICAgICAgICAgICByZ2IkNVszXSA9ICttWzRdOyAgLy8gZGVmYXVsdCBhbHBoYSA9IDFcbiAgICAgICAgICAgIHJldHVybiByZ2IkNTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjc3MycmdiJDEudGVzdCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBSRV9SR0IudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfUkdCQS50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9SR0JfUENULnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX1JHQkFfUENULnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX0hTTC50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9IU0xBLnRlc3Qocyk7XG4gICAgfTtcblxuICAgIHZhciBjc3MycmdiXzEgPSBjc3MycmdiJDE7XG5cbiAgICB2YXIgY2hyb21hJGkgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkQiA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JGUgPSBpbnB1dCRoO1xuICAgIHZhciB0eXBlJGsgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHJnYjJjc3MgPSByZ2IyY3NzXzE7XG4gICAgdmFyIGNzczJyZ2IgPSBjc3MycmdiXzE7XG5cbiAgICBDb2xvciRCLnByb3RvdHlwZS5jc3MgPSBmdW5jdGlvbihtb2RlKSB7XG4gICAgICAgIHJldHVybiByZ2IyY3NzKHRoaXMuX3JnYiwgbW9kZSk7XG4gICAgfTtcblxuICAgIGNocm9tYSRpLmNzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkQiwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2NzcyddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkZS5mb3JtYXQuY3NzID0gY3NzMnJnYjtcblxuICAgIGlucHV0JGUuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUkayhoKSA9PT0gJ3N0cmluZycgJiYgY3NzMnJnYi50ZXN0KGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjc3MnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgQ29sb3IkQSA9IENvbG9yXzE7XG4gICAgdmFyIGNocm9tYSRoID0gY2hyb21hXzE7XG4gICAgdmFyIGlucHV0JGQgPSBpbnB1dCRoO1xuICAgIHZhciB1bnBhY2skdCA9IHV0aWxzLnVucGFjaztcblxuICAgIGlucHV0JGQuZm9ybWF0LmdsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2IgPSB1bnBhY2skdChhcmdzLCAncmdiYScpO1xuICAgICAgICByZ2JbMF0gKj0gMjU1O1xuICAgICAgICByZ2JbMV0gKj0gMjU1O1xuICAgICAgICByZ2JbMl0gKj0gMjU1O1xuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH07XG5cbiAgICBjaHJvbWEkaC5nbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkQSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2dsJ10pICkpO1xuICAgIH07XG5cbiAgICBDb2xvciRBLnByb3RvdHlwZS5nbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmdiID0gdGhpcy5fcmdiO1xuICAgICAgICByZXR1cm4gW3JnYlswXS8yNTUsIHJnYlsxXS8yNTUsIHJnYlsyXS8yNTUsIHJnYlszXV07XG4gICAgfTtcblxuICAgIHZhciB1bnBhY2skcyA9IHV0aWxzLnVucGFjaztcblxuICAgIHZhciByZ2IyaGNnJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRzKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgIHZhciBkZWx0YSA9IG1heCAtIG1pbjtcbiAgICAgICAgdmFyIGMgPSBkZWx0YSAqIDEwMCAvIDI1NTtcbiAgICAgICAgdmFyIF9nID0gbWluIC8gKDI1NSAtIGRlbHRhKSAqIDEwMDtcbiAgICAgICAgdmFyIGg7XG4gICAgICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAociA9PT0gbWF4KSB7IGggPSAoZyAtIGIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChnID09PSBtYXgpIHsgaCA9IDIrKGIgLSByKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoYiA9PT0gbWF4KSB7IGggPSA0KyhyIC0gZykgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbaCwgYywgX2ddO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmhjZ18xID0gcmdiMmhjZyQxO1xuXG4gICAgdmFyIHVucGFjayRyID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBmbG9vciQzID0gTWF0aC5mbG9vcjtcblxuICAgIC8qXG4gICAgICogdGhpcyBpcyBiYXNpY2FsbHkganVzdCBIU1Ygd2l0aCBzb21lIG1pbm9yIHR3ZWFrc1xuICAgICAqXG4gICAgICogaHVlLi4gWzAuLjM2MF1cbiAgICAgKiBjaHJvbWEgLi4gWzAuLjFdXG4gICAgICogZ3JheW5lc3MgLi4gWzAuLjFdXG4gICAgICovXG5cbiAgICB2YXIgaGNnMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDEsIGFzc2lnbiQyLCBhc3NpZ24kMywgYXNzaWduJDQsIGFzc2lnbiQ1O1xuXG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG4gICAgICAgIGFyZ3MgPSB1bnBhY2skcihhcmdzLCAnaGNnJyk7XG4gICAgICAgIHZhciBoID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgX2cgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIF9nID0gX2cgKiAyNTU7XG4gICAgICAgIHZhciBfYyA9IGMgKiAyNTU7XG4gICAgICAgIGlmIChjID09PSAwKSB7XG4gICAgICAgICAgICByID0gZyA9IGIgPSBfZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoID09PSAzNjApIHsgaCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChoID4gMzYwKSB7IGggLT0gMzYwOyB9XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgICAgIGggLz0gNjA7XG4gICAgICAgICAgICB2YXIgaSA9IGZsb29yJDMoaCk7XG4gICAgICAgICAgICB2YXIgZiA9IGggLSBpO1xuICAgICAgICAgICAgdmFyIHAgPSBfZyAqICgxIC0gYyk7XG4gICAgICAgICAgICB2YXIgcSA9IHAgKyBfYyAqICgxIC0gZik7XG4gICAgICAgICAgICB2YXIgdCA9IHAgKyBfYyAqIGY7XG4gICAgICAgICAgICB2YXIgdiA9IHAgKyBfYztcbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogKGFzc2lnbiA9IFt2LCB0LCBwXSwgciA9IGFzc2lnblswXSwgZyA9IGFzc2lnblsxXSwgYiA9IGFzc2lnblsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAxOiAoYXNzaWduJDEgPSBbcSwgdiwgcF0sIHIgPSBhc3NpZ24kMVswXSwgZyA9IGFzc2lnbiQxWzFdLCBiID0gYXNzaWduJDFbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMjogKGFzc2lnbiQyID0gW3AsIHYsIHRdLCByID0gYXNzaWduJDJbMF0sIGcgPSBhc3NpZ24kMlsxXSwgYiA9IGFzc2lnbiQyWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IChhc3NpZ24kMyA9IFtwLCBxLCB2XSwgciA9IGFzc2lnbiQzWzBdLCBnID0gYXNzaWduJDNbMV0sIGIgPSBhc3NpZ24kM1syXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0OiAoYXNzaWduJDQgPSBbdCwgcCwgdl0sIHIgPSBhc3NpZ24kNFswXSwgZyA9IGFzc2lnbiQ0WzFdLCBiID0gYXNzaWduJDRbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNTogKGFzc2lnbiQ1ID0gW3YsIHAsIHFdLCByID0gYXNzaWduJDVbMF0sIGcgPSBhc3NpZ24kNVsxXSwgYiA9IGFzc2lnbiQ1WzJdKTsgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhjZzJyZ2JfMSA9IGhjZzJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJHEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkaiA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRnID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHogPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCRjID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IyaGNnID0gcmdiMmhjZ18xO1xuXG4gICAgQ29sb3Ikei5wcm90b3R5cGUuaGNnID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaGNnKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRnLmhjZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkeiwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hjZyddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkYy5mb3JtYXQuaGNnID0gaGNnMnJnYl8xO1xuXG4gICAgaW5wdXQkYy5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAxLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRxKGFyZ3MsICdoY2cnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGooYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hjZyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skcCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGFzdCA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIHJvdW5kJDMgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIHJnYjJoZXgkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJHAoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIGEgPSByZWZbM107XG4gICAgICAgIHZhciBtb2RlID0gbGFzdChhcmdzKSB8fCAnYXV0byc7XG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHsgYSA9IDE7IH1cbiAgICAgICAgaWYgKG1vZGUgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgbW9kZSA9IGEgPCAxID8gJ3JnYmEnIDogJ3JnYic7XG4gICAgICAgIH1cbiAgICAgICAgciA9IHJvdW5kJDMocik7XG4gICAgICAgIGcgPSByb3VuZCQzKGcpO1xuICAgICAgICBiID0gcm91bmQkMyhiKTtcbiAgICAgICAgdmFyIHUgPSByIDw8IDE2IHwgZyA8PCA4IHwgYjtcbiAgICAgICAgdmFyIHN0ciA9IFwiMDAwMDAwXCIgKyB1LnRvU3RyaW5nKDE2KTsgLy8jLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIDYpO1xuICAgICAgICB2YXIgaHhhID0gJzAnICsgcm91bmQkMyhhICogMjU1KS50b1N0cmluZygxNik7XG4gICAgICAgIGh4YSA9IGh4YS5zdWJzdHIoaHhhLmxlbmd0aCAtIDIpO1xuICAgICAgICBzd2l0Y2ggKG1vZGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAncmdiYSc6IHJldHVybiAoXCIjXCIgKyBzdHIgKyBoeGEpO1xuICAgICAgICAgICAgY2FzZSAnYXJnYic6IHJldHVybiAoXCIjXCIgKyBoeGEgKyBzdHIpO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIChcIiNcIiArIHN0cik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoZXhfMSA9IHJnYjJoZXgkMjtcblxuICAgIHZhciBSRV9IRVggPSAvXiM/KFtBLUZhLWYwLTldezZ9fFtBLUZhLWYwLTldezN9KSQvO1xuICAgIHZhciBSRV9IRVhBID0gL14jPyhbQS1GYS1mMC05XXs4fXxbQS1GYS1mMC05XXs0fSkkLztcblxuICAgIHZhciBoZXgycmdiJDEgPSBmdW5jdGlvbiAoaGV4KSB7XG4gICAgICAgIGlmIChoZXgubWF0Y2goUkVfSEVYKSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIG9wdGlvbmFsIGxlYWRpbmcgI1xuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDQgfHwgaGV4Lmxlbmd0aCA9PT0gNykge1xuICAgICAgICAgICAgICAgIGhleCA9IGhleC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBleHBhbmQgc2hvcnQtbm90YXRpb24gdG8gZnVsbCBzaXgtZGlnaXRcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXhbMF0raGV4WzBdK2hleFsxXStoZXhbMV0raGV4WzJdK2hleFsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICAgICAgICB2YXIgciA9IHUgPj4gMTY7XG4gICAgICAgICAgICB2YXIgZyA9IHUgPj4gOCAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYiA9IHUgJiAweEZGO1xuICAgICAgICAgICAgcmV0dXJuIFtyLGcsYiwxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hdGNoIHJnYmEgaGV4IGZvcm1hdCwgZWcgI0ZGMDAwMDc3XG4gICAgICAgIGlmIChoZXgubWF0Y2goUkVfSEVYQSkpIHtcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA1IHx8IGhleC5sZW5ndGggPT09IDkpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgb3B0aW9uYWwgbGVhZGluZyAjXG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGV4cGFuZCBzaG9ydC1ub3RhdGlvbiB0byBmdWxsIGVpZ2h0LWRpZ2l0XG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGhleCA9IGhleC5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4WzBdK2hleFswXStoZXhbMV0raGV4WzFdK2hleFsyXStoZXhbMl0raGV4WzNdK2hleFszXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1JDEgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgICAgICAgIHZhciByJDEgPSB1JDEgPj4gMjQgJiAweEZGO1xuICAgICAgICAgICAgdmFyIGckMSA9IHUkMSA+PiAxNiAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYiQxID0gdSQxID4+IDggJiAweEZGO1xuICAgICAgICAgICAgdmFyIGEgPSBNYXRoLnJvdW5kKCh1JDEgJiAweEZGKSAvIDB4RkYgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgcmV0dXJuIFtyJDEsZyQxLGIkMSxhXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdlIHVzZWQgdG8gY2hlY2sgZm9yIGNzcyBjb2xvcnMgaGVyZVxuICAgICAgICAvLyBpZiBfaW5wdXQuY3NzPyBhbmQgcmdiID0gX2lucHV0LmNzcyBoZXhcbiAgICAgICAgLy8gICAgIHJldHVybiByZ2JcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwidW5rbm93biBoZXggY29sb3I6IFwiICsgaGV4KSk7XG4gICAgfTtcblxuICAgIHZhciBoZXgycmdiXzEgPSBoZXgycmdiJDE7XG5cbiAgICB2YXIgY2hyb21hJGYgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkeSA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkaSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGlucHV0JGIgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoZXgkMSA9IHJnYjJoZXhfMTtcblxuICAgIENvbG9yJHkucHJvdG90eXBlLmhleCA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoZXgkMSh0aGlzLl9yZ2IsIG1vZGUpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkZi5oZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHksIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoZXgnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JGIuZm9ybWF0LmhleCA9IGhleDJyZ2JfMTtcbiAgICBpbnB1dCRiLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDQsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN0Lmxlbmd0aCAmJiB0eXBlJGkoaCkgPT09ICdzdHJpbmcnICYmIFszLDQsNSw2LDcsOCw5XS5pbmRleE9mKGgubGVuZ3RoKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoZXgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJG8gPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIFRXT1BJJDIgPSB1dGlscy5UV09QSTtcbiAgICB2YXIgbWluJDIgPSBNYXRoLm1pbjtcbiAgICB2YXIgc3FydCQ0ID0gTWF0aC5zcXJ0O1xuICAgIHZhciBhY29zID0gTWF0aC5hY29zO1xuXG4gICAgdmFyIHJnYjJoc2kkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvKlxuICAgICAgICBib3Jyb3dlZCBmcm9tIGhlcmU6XG4gICAgICAgIGh0dHA6Ly9odW1tZXIuc3RhbmZvcmQuZWR1L211c2VpbmZvL2RvYy9leGFtcGxlcy9odW1kcnVtL2tleXNjYXBlMi9yZ2IyaHNpLmNwcFxuICAgICAgICAqL1xuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJG8oYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByIC89IDI1NTtcbiAgICAgICAgZyAvPSAyNTU7XG4gICAgICAgIGIgLz0gMjU1O1xuICAgICAgICB2YXIgaDtcbiAgICAgICAgdmFyIG1pbl8gPSBtaW4kMihyLGcsYik7XG4gICAgICAgIHZhciBpID0gKHIrZytiKSAvIDM7XG4gICAgICAgIHZhciBzID0gaSA+IDAgPyAxIC0gbWluXy9pIDogMDtcbiAgICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgICAgIGggPSBOYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoID0gKChyLWcpKyhyLWIpKSAvIDI7XG4gICAgICAgICAgICBoIC89IHNxcnQkNCgoci1nKSooci1nKSArIChyLWIpKihnLWIpKTtcbiAgICAgICAgICAgIGggPSBhY29zKGgpO1xuICAgICAgICAgICAgaWYgKGIgPiBnKSB7XG4gICAgICAgICAgICAgICAgaCA9IFRXT1BJJDIgLSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaCAvPSBUV09QSSQyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbaCozNjAscyxpXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoc2lfMSA9IHJnYjJoc2kkMTtcblxuICAgIHZhciB1bnBhY2skbiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGltaXQgPSB1dGlscy5saW1pdDtcbiAgICB2YXIgVFdPUEkkMSA9IHV0aWxzLlRXT1BJO1xuICAgIHZhciBQSVRISVJEID0gdXRpbHMuUElUSElSRDtcbiAgICB2YXIgY29zJDQgPSBNYXRoLmNvcztcblxuICAgIC8qXG4gICAgICogaHVlIFswLi4zNjBdXG4gICAgICogc2F0dXJhdGlvbiBbMC4uMV1cbiAgICAgKiBpbnRlbnNpdHkgWzAuLjFdXG4gICAgICovXG4gICAgdmFyIGhzaTJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLypcbiAgICAgICAgYm9ycm93ZWQgZnJvbSBoZXJlOlxuICAgICAgICBodHRwOi8vaHVtbWVyLnN0YW5mb3JkLmVkdS9tdXNlaW5mby9kb2MvZXhhbXBsZXMvaHVtZHJ1bS9rZXlzY2FwZTIvaHNpMnJnYi5jcHBcbiAgICAgICAgKi9cbiAgICAgICAgYXJncyA9IHVucGFjayRuKGFyZ3MsICdoc2knKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBpID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuXG4gICAgICAgIGlmIChpc05hTihoKSkgeyBoID0gMDsgfVxuICAgICAgICBpZiAoaXNOYU4ocykpIHsgcyA9IDA7IH1cbiAgICAgICAgLy8gbm9ybWFsaXplIGh1ZVxuICAgICAgICBpZiAoaCA+IDM2MCkgeyBoIC09IDM2MDsgfVxuICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgaCAvPSAzNjA7XG4gICAgICAgIGlmIChoIDwgMS8zKSB7XG4gICAgICAgICAgICBiID0gKDEtcykvMztcbiAgICAgICAgICAgIHIgPSAoMStzKmNvcyQ0KFRXT1BJJDEqaCkvY29zJDQoUElUSElSRC1UV09QSSQxKmgpKS8zO1xuICAgICAgICAgICAgZyA9IDEgLSAoYityKTtcbiAgICAgICAgfSBlbHNlIGlmIChoIDwgMi8zKSB7XG4gICAgICAgICAgICBoIC09IDEvMztcbiAgICAgICAgICAgIHIgPSAoMS1zKS8zO1xuICAgICAgICAgICAgZyA9ICgxK3MqY29zJDQoVFdPUEkkMSpoKS9jb3MkNChQSVRISVJELVRXT1BJJDEqaCkpLzM7XG4gICAgICAgICAgICBiID0gMSAtIChyK2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaCAtPSAyLzM7XG4gICAgICAgICAgICBnID0gKDEtcykvMztcbiAgICAgICAgICAgIGIgPSAoMStzKmNvcyQ0KFRXT1BJJDEqaCkvY29zJDQoUElUSElSRC1UV09QSSQxKmgpKS8zO1xuICAgICAgICAgICAgciA9IDEgLSAoZytiKTtcbiAgICAgICAgfVxuICAgICAgICByID0gbGltaXQoaSpyKjMpO1xuICAgICAgICBnID0gbGltaXQoaSpnKjMpO1xuICAgICAgICBiID0gbGltaXQoaSpiKjMpO1xuICAgICAgICByZXR1cm4gW3IqMjU1LCBnKjI1NSwgYioyNTUsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhzaTJyZ2JfMSA9IGhzaTJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJG0gPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkaCA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRlID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHggPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCRhID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IyaHNpID0gcmdiMmhzaV8xO1xuXG4gICAgQ29sb3IkeC5wcm90b3R5cGUuaHNpID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaHNpKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRlLmhzaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkeCwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hzaSddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkYS5mb3JtYXQuaHNpID0gaHNpMnJnYl8xO1xuXG4gICAgaW5wdXQkYS5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRtKGFyZ3MsICdoc2knKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGgoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzaSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skbCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRnID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGQgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkdyA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDkgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoc2wkMSA9IHJnYjJoc2xfMTtcblxuICAgIENvbG9yJHcucHJvdG90eXBlLmhzbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmhzbCQxKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRkLmhzbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdywgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hzbCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkOS5mb3JtYXQuaHNsID0gaHNsMnJnYl8xO1xuXG4gICAgaW5wdXQkOS5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRsKGFyZ3MsICdoc2wnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGcoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skayA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbWluJDEgPSBNYXRoLm1pbjtcbiAgICB2YXIgbWF4JDEgPSBNYXRoLm1heDtcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJoc3YocixnLGIpXG4gICAgICogLSByZ2IyaHN2KFtyLGcsYl0pXG4gICAgICogLSByZ2IyaHN2KHtyLGcsYn0pXG4gICAgICovXG4gICAgdmFyIHJnYjJoc2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayRrKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgZyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBiID0gYXJnc1syXTtcbiAgICAgICAgdmFyIG1pbl8gPSBtaW4kMShyLCBnLCBiKTtcbiAgICAgICAgdmFyIG1heF8gPSBtYXgkMShyLCBnLCBiKTtcbiAgICAgICAgdmFyIGRlbHRhID0gbWF4XyAtIG1pbl87XG4gICAgICAgIHZhciBoLHMsdjtcbiAgICAgICAgdiA9IG1heF8gLyAyNTUuMDtcbiAgICAgICAgaWYgKG1heF8gPT09IDApIHtcbiAgICAgICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gZGVsdGEgLyBtYXhfO1xuICAgICAgICAgICAgaWYgKHIgPT09IG1heF8pIHsgaCA9IChnIC0gYikgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaWYgKGcgPT09IG1heF8pIHsgaCA9IDIrKGIgLSByKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoYiA9PT0gbWF4XykgeyBoID0gNCsociAtIGcpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGggKj0gNjA7XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2gsIHMsIHZdXG4gICAgfTtcblxuICAgIHZhciByZ2IyaHN2JDEgPSByZ2IyaHNsO1xuXG4gICAgdmFyIHVucGFjayRqID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBmbG9vciQyID0gTWF0aC5mbG9vcjtcblxuICAgIHZhciBoc3YycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMSwgYXNzaWduJDIsIGFzc2lnbiQzLCBhc3NpZ24kNCwgYXNzaWduJDU7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgICAgYXJncyA9IHVucGFjayRqKGFyZ3MsICdoc3YnKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciB2ID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICB2ICo9IDI1NTtcbiAgICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IHY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaCA9PT0gMzYwKSB7IGggPSAwOyB9XG4gICAgICAgICAgICBpZiAoaCA+IDM2MCkgeyBoIC09IDM2MDsgfVxuICAgICAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgICAgICBoIC89IDYwO1xuXG4gICAgICAgICAgICB2YXIgaSA9IGZsb29yJDIoaCk7XG4gICAgICAgICAgICB2YXIgZiA9IGggLSBpO1xuICAgICAgICAgICAgdmFyIHAgPSB2ICogKDEgLSBzKTtcbiAgICAgICAgICAgIHZhciBxID0gdiAqICgxIC0gcyAqIGYpO1xuICAgICAgICAgICAgdmFyIHQgPSB2ICogKDEgLSBzICogKDEgLSBmKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogKGFzc2lnbiA9IFt2LCB0LCBwXSwgciA9IGFzc2lnblswXSwgZyA9IGFzc2lnblsxXSwgYiA9IGFzc2lnblsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAxOiAoYXNzaWduJDEgPSBbcSwgdiwgcF0sIHIgPSBhc3NpZ24kMVswXSwgZyA9IGFzc2lnbiQxWzFdLCBiID0gYXNzaWduJDFbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMjogKGFzc2lnbiQyID0gW3AsIHYsIHRdLCByID0gYXNzaWduJDJbMF0sIGcgPSBhc3NpZ24kMlsxXSwgYiA9IGFzc2lnbiQyWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IChhc3NpZ24kMyA9IFtwLCBxLCB2XSwgciA9IGFzc2lnbiQzWzBdLCBnID0gYXNzaWduJDNbMV0sIGIgPSBhc3NpZ24kM1syXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0OiAoYXNzaWduJDQgPSBbdCwgcCwgdl0sIHIgPSBhc3NpZ24kNFswXSwgZyA9IGFzc2lnbiQ0WzFdLCBiID0gYXNzaWduJDRbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNTogKGFzc2lnbiQ1ID0gW3YsIHAsIHFdLCByID0gYXNzaWduJDVbMF0sIGcgPSBhc3NpZ24kNVsxXSwgYiA9IGFzc2lnbiQ1WzJdKTsgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsZyxiLGFyZ3MubGVuZ3RoID4gMz9hcmdzWzNdOjFdO1xuICAgIH07XG5cbiAgICB2YXIgaHN2MnJnYl8xID0gaHN2MnJnYjtcblxuICAgIHZhciB1bnBhY2skaSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRmID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGMgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkdiA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDggPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoc3YgPSByZ2IyaHN2JDE7XG5cbiAgICBDb2xvciR2LnByb3RvdHlwZS5oc3YgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoc3YodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGMuaHN2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR2LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaHN2J10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ4LmZvcm1hdC5oc3YgPSBoc3YycmdiXzE7XG5cbiAgICBpbnB1dCQ4LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJGkoYXJncywgJ2hzdicpO1xuICAgICAgICAgICAgaWYgKHR5cGUkZihhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaHN2JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGxhYkNvbnN0YW50cyA9IHtcbiAgICAgICAgLy8gQ29ycmVzcG9uZHMgcm91Z2hseSB0byBSR0IgYnJpZ2h0ZXIvZGFya2VyXG4gICAgICAgIEtuOiAxOCxcblxuICAgICAgICAvLyBENjUgc3RhbmRhcmQgcmVmZXJlbnRcbiAgICAgICAgWG46IDAuOTUwNDcwLFxuICAgICAgICBZbjogMSxcbiAgICAgICAgWm46IDEuMDg4ODMwLFxuXG4gICAgICAgIHQwOiAwLjEzNzkzMTAzNCwgIC8vIDQgLyAyOVxuICAgICAgICB0MTogMC4yMDY4OTY1NTIsICAvLyA2IC8gMjlcbiAgICAgICAgdDI6IDAuMTI4NDE4NTUsICAgLy8gMyAqIHQxICogdDFcbiAgICAgICAgdDM6IDAuMDA4ODU2NDUyLCAgLy8gdDEgKiB0MSAqIHQxXG4gICAgfTtcblxuICAgIHZhciBMQUJfQ09OU1RBTlRTJDMgPSBsYWJDb25zdGFudHM7XG4gICAgdmFyIHVucGFjayRoID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBwb3ckYSA9IE1hdGgucG93O1xuXG4gICAgdmFyIHJnYjJsYWIkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJGgoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSByZ2IyeHl6KHIsZyxiKTtcbiAgICAgICAgdmFyIHggPSByZWYkMVswXTtcbiAgICAgICAgdmFyIHkgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIHogPSByZWYkMVsyXTtcbiAgICAgICAgdmFyIGwgPSAxMTYgKiB5IC0gMTY7XG4gICAgICAgIHJldHVybiBbbCA8IDAgPyAwIDogbCwgNTAwICogKHggLSB5KSwgMjAwICogKHkgLSB6KV07XG4gICAgfTtcblxuICAgIHZhciByZ2JfeHl6ID0gZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgaWYgKChyIC89IDI1NSkgPD0gMC4wNDA0NSkgeyByZXR1cm4gciAvIDEyLjkyOyB9XG4gICAgICAgIHJldHVybiBwb3ckYSgociArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgIH07XG5cbiAgICB2YXIgeHl6X2xhYiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0ID4gTEFCX0NPTlNUQU5UUyQzLnQzKSB7IHJldHVybiBwb3ckYSh0LCAxIC8gMyk7IH1cbiAgICAgICAgcmV0dXJuIHQgLyBMQUJfQ09OU1RBTlRTJDMudDIgKyBMQUJfQ09OU1RBTlRTJDMudDA7XG4gICAgfTtcblxuICAgIHZhciByZ2IyeHl6ID0gZnVuY3Rpb24gKHIsZyxiKSB7XG4gICAgICAgIHIgPSByZ2JfeHl6KHIpO1xuICAgICAgICBnID0gcmdiX3h5eihnKTtcbiAgICAgICAgYiA9IHJnYl94eXooYik7XG4gICAgICAgIHZhciB4ID0geHl6X2xhYigoMC40MTI0NTY0ICogciArIDAuMzU3NTc2MSAqIGcgKyAwLjE4MDQzNzUgKiBiKSAvIExBQl9DT05TVEFOVFMkMy5Ybik7XG4gICAgICAgIHZhciB5ID0geHl6X2xhYigoMC4yMTI2NzI5ICogciArIDAuNzE1MTUyMiAqIGcgKyAwLjA3MjE3NTAgKiBiKSAvIExBQl9DT05TVEFOVFMkMy5Zbik7XG4gICAgICAgIHZhciB6ID0geHl6X2xhYigoMC4wMTkzMzM5ICogciArIDAuMTE5MTkyMCAqIGcgKyAwLjk1MDMwNDEgKiBiKSAvIExBQl9DT05TVEFOVFMkMy5abik7XG4gICAgICAgIHJldHVybiBbeCx5LHpdO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmxhYl8xID0gcmdiMmxhYiQyO1xuXG4gICAgdmFyIExBQl9DT05TVEFOVFMkMiA9IGxhYkNvbnN0YW50cztcbiAgICB2YXIgdW5wYWNrJGcgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHBvdyQ5ID0gTWF0aC5wb3c7XG5cbiAgICAvKlxuICAgICAqIEwqIFswLi4xMDBdXG4gICAgICogYSBbLTEwMC4uMTAwXVxuICAgICAqIGIgWy0xMDAuLjEwMF1cbiAgICAgKi9cbiAgICB2YXIgbGFiMnJnYiQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skZyhhcmdzLCAnbGFiJyk7XG4gICAgICAgIHZhciBsID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGEgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG4gICAgICAgIHZhciB4LHkseiwgcixnLGJfO1xuXG4gICAgICAgIHkgPSAobCArIDE2KSAvIDExNjtcbiAgICAgICAgeCA9IGlzTmFOKGEpID8geSA6IHkgKyBhIC8gNTAwO1xuICAgICAgICB6ID0gaXNOYU4oYikgPyB5IDogeSAtIGIgLyAyMDA7XG5cbiAgICAgICAgeSA9IExBQl9DT05TVEFOVFMkMi5ZbiAqIGxhYl94eXooeSk7XG4gICAgICAgIHggPSBMQUJfQ09OU1RBTlRTJDIuWG4gKiBsYWJfeHl6KHgpO1xuICAgICAgICB6ID0gTEFCX0NPTlNUQU5UUyQyLlpuICogbGFiX3h5eih6KTtcblxuICAgICAgICByID0geHl6X3JnYigzLjI0MDQ1NDIgKiB4IC0gMS41MzcxMzg1ICogeSAtIDAuNDk4NTMxNCAqIHopOyAgLy8gRDY1IC0+IHNSR0JcbiAgICAgICAgZyA9IHh5el9yZ2IoLTAuOTY5MjY2MCAqIHggKyAxLjg3NjAxMDggKiB5ICsgMC4wNDE1NTYwICogeik7XG4gICAgICAgIGJfID0geHl6X3JnYigwLjA1NTY0MzQgKiB4IC0gMC4yMDQwMjU5ICogeSArIDEuMDU3MjI1MiAqIHopO1xuXG4gICAgICAgIHJldHVybiBbcixnLGJfLGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIHh5el9yZ2IgPSBmdW5jdGlvbiAocikge1xuICAgICAgICByZXR1cm4gMjU1ICogKHIgPD0gMC4wMDMwNCA/IDEyLjkyICogciA6IDEuMDU1ICogcG93JDkociwgMSAvIDIuNCkgLSAwLjA1NSlcbiAgICB9O1xuXG4gICAgdmFyIGxhYl94eXogPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCA+IExBQl9DT05TVEFOVFMkMi50MSA/IHQgKiB0ICogdCA6IExBQl9DT05TVEFOVFMkMi50MiAqICh0IC0gTEFCX0NPTlNUQU5UUyQyLnQwKVxuICAgIH07XG5cbiAgICB2YXIgbGFiMnJnYl8xID0gbGFiMnJnYiQxO1xuXG4gICAgdmFyIHVucGFjayRmID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGUgPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkYiA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR1ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkNyA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmxhYiQxID0gcmdiMmxhYl8xO1xuXG4gICAgQ29sb3IkdS5wcm90b3R5cGUubGFiID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IybGFiJDEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGIubGFiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR1LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnbGFiJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ3LmZvcm1hdC5sYWIgPSBsYWIycmdiXzE7XG5cbiAgICBpbnB1dCQ3LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJGYoYXJncywgJ2xhYicpO1xuICAgICAgICAgICAgaWYgKHR5cGUkZShhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbGFiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayRlID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBSQUQyREVHID0gdXRpbHMuUkFEMkRFRztcbiAgICB2YXIgc3FydCQzID0gTWF0aC5zcXJ0O1xuICAgIHZhciBhdGFuMiQyID0gTWF0aC5hdGFuMjtcbiAgICB2YXIgcm91bmQkMiA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgbGFiMmxjaCQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skZShhcmdzLCAnbGFiJyk7XG4gICAgICAgIHZhciBsID0gcmVmWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciBjID0gc3FydCQzKGEgKiBhICsgYiAqIGIpO1xuICAgICAgICB2YXIgaCA9IChhdGFuMiQyKGIsIGEpICogUkFEMkRFRyArIDM2MCkgJSAzNjA7XG4gICAgICAgIGlmIChyb3VuZCQyKGMqMTAwMDApID09PSAwKSB7IGggPSBOdW1iZXIuTmFOOyB9XG4gICAgICAgIHJldHVybiBbbCwgYywgaF07XG4gICAgfTtcblxuICAgIHZhciBsYWIybGNoXzEgPSBsYWIybGNoJDI7XG5cbiAgICB2YXIgdW5wYWNrJGQgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJnYjJsYWIgPSByZ2IybGFiXzE7XG4gICAgdmFyIGxhYjJsY2gkMSA9IGxhYjJsY2hfMTtcblxuICAgIHZhciByZ2IybGNoJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRkKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gcmdiMmxhYihyLGcsYik7XG4gICAgICAgIHZhciBsID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBhID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiXyA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gbGFiMmxjaCQxKGwsYSxiXyk7XG4gICAgfTtcblxuICAgIHZhciByZ2IybGNoXzEgPSByZ2IybGNoJDE7XG5cbiAgICB2YXIgdW5wYWNrJGMgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIERFRzJSQUQgPSB1dGlscy5ERUcyUkFEO1xuICAgIHZhciBzaW4kMyA9IE1hdGguc2luO1xuICAgIHZhciBjb3MkMyA9IE1hdGguY29zO1xuXG4gICAgdmFyIGxjaDJsYWIkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvKlxuICAgICAgICBDb252ZXJ0IGZyb20gYSBxdWFsaXRhdGl2ZSBwYXJhbWV0ZXIgaCBhbmQgYSBxdWFudGl0YXRpdmUgcGFyYW1ldGVyIGwgdG8gYSAyNC1iaXQgcGl4ZWwuXG4gICAgICAgIFRoZXNlIGZvcm11bGFzIHdlcmUgaW52ZW50ZWQgYnkgRGF2aWQgRGFscnltcGxlIHRvIG9idGFpbiBtYXhpbXVtIGNvbnRyYXN0IHdpdGhvdXQgZ29pbmdcbiAgICAgICAgb3V0IG9mIGdhbXV0IGlmIHRoZSBwYXJhbWV0ZXJzIGFyZSBpbiB0aGUgcmFuZ2UgMC0xLlxuXG4gICAgICAgIEEgc2F0dXJhdGlvbiBtdWx0aXBsaWVyIHdhcyBhZGRlZCBieSBHcmVnb3IgQWlzY2hcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRjKGFyZ3MsICdsY2gnKTtcbiAgICAgICAgdmFyIGwgPSByZWZbMF07XG4gICAgICAgIHZhciBjID0gcmVmWzFdO1xuICAgICAgICB2YXIgaCA9IHJlZlsyXTtcbiAgICAgICAgaWYgKGlzTmFOKGgpKSB7IGggPSAwOyB9XG4gICAgICAgIGggPSBoICogREVHMlJBRDtcbiAgICAgICAgcmV0dXJuIFtsLCBjb3MkMyhoKSAqIGMsIHNpbiQzKGgpICogY11cbiAgICB9O1xuXG4gICAgdmFyIGxjaDJsYWJfMSA9IGxjaDJsYWIkMjtcblxuICAgIHZhciB1bnBhY2skYiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGNoMmxhYiQxID0gbGNoMmxhYl8xO1xuICAgIHZhciBsYWIycmdiID0gbGFiMnJnYl8xO1xuXG4gICAgdmFyIGxjaDJyZ2IkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJGIoYXJncywgJ2xjaCcpO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBjID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcmVmID0gbGNoMmxhYiQxIChsLGMsaCk7XG4gICAgICAgIHZhciBMID0gcmVmWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGJfID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBsYWIycmdiIChMLGEsYl8pO1xuICAgICAgICB2YXIgciA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGxjaDJyZ2JfMSA9IGxjaDJyZ2IkMTtcblxuICAgIHZhciB1bnBhY2skYSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGNoMnJnYiA9IGxjaDJyZ2JfMTtcblxuICAgIHZhciBoY2wycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciBoY2wgPSB1bnBhY2skYShhcmdzLCAnaGNsJykucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gbGNoMnJnYi5hcHBseSh2b2lkIDAsIGhjbCk7XG4gICAgfTtcblxuICAgIHZhciBoY2wycmdiXzEgPSBoY2wycmdiO1xuXG4gICAgdmFyIHVucGFjayQ5ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGQgPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkYSA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR0ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkNiA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmxjaCA9IHJnYjJsY2hfMTtcblxuICAgIENvbG9yJHQucHJvdG90eXBlLmxjaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcmdiMmxjaCh0aGlzLl9yZ2IpOyB9O1xuICAgIENvbG9yJHQucHJvdG90eXBlLmhjbCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcmdiMmxjaCh0aGlzLl9yZ2IpLnJldmVyc2UoKTsgfTtcblxuICAgIGNocm9tYSRhLmxjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdCwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2xjaCddKSApKTtcbiAgICB9O1xuICAgIGNocm9tYSRhLmhjbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdCwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hjbCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkNi5mb3JtYXQubGNoID0gbGNoMnJnYl8xO1xuICAgIGlucHV0JDYuZm9ybWF0LmhjbCA9IGhjbDJyZ2JfMTtcblxuICAgIFsnbGNoJywnaGNsJ10uZm9yRWFjaChmdW5jdGlvbiAobSkgeyByZXR1cm4gaW5wdXQkNi5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayQ5KGFyZ3MsIG0pO1xuICAgICAgICAgICAgaWYgKHR5cGUkZChhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7IH0pO1xuXG4gICAgLyoqXG4gICAgXHRYMTEgY29sb3IgbmFtZXNcblxuICAgIFx0aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8jc3ZnLWNvbG9yXG4gICAgKi9cblxuICAgIHZhciB3M2N4MTEkMSA9IHtcbiAgICAgICAgYWxpY2VibHVlOiAnI2YwZjhmZicsXG4gICAgICAgIGFudGlxdWV3aGl0ZTogJyNmYWViZDcnLFxuICAgICAgICBhcXVhOiAnIzAwZmZmZicsXG4gICAgICAgIGFxdWFtYXJpbmU6ICcjN2ZmZmQ0JyxcbiAgICAgICAgYXp1cmU6ICcjZjBmZmZmJyxcbiAgICAgICAgYmVpZ2U6ICcjZjVmNWRjJyxcbiAgICAgICAgYmlzcXVlOiAnI2ZmZTRjNCcsXG4gICAgICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gICAgICAgIGJsYW5jaGVkYWxtb25kOiAnI2ZmZWJjZCcsXG4gICAgICAgIGJsdWU6ICcjMDAwMGZmJyxcbiAgICAgICAgYmx1ZXZpb2xldDogJyM4YTJiZTInLFxuICAgICAgICBicm93bjogJyNhNTJhMmEnLFxuICAgICAgICBidXJseXdvb2Q6ICcjZGViODg3JyxcbiAgICAgICAgY2FkZXRibHVlOiAnIzVmOWVhMCcsXG4gICAgICAgIGNoYXJ0cmV1c2U6ICcjN2ZmZjAwJyxcbiAgICAgICAgY2hvY29sYXRlOiAnI2QyNjkxZScsXG4gICAgICAgIGNvcmFsOiAnI2ZmN2Y1MCcsXG4gICAgICAgIGNvcm5mbG93ZXI6ICcjNjQ5NWVkJyxcbiAgICAgICAgY29ybmZsb3dlcmJsdWU6ICcjNjQ5NWVkJyxcbiAgICAgICAgY29ybnNpbGs6ICcjZmZmOGRjJyxcbiAgICAgICAgY3JpbXNvbjogJyNkYzE0M2MnLFxuICAgICAgICBjeWFuOiAnIzAwZmZmZicsXG4gICAgICAgIGRhcmtibHVlOiAnIzAwMDA4YicsXG4gICAgICAgIGRhcmtjeWFuOiAnIzAwOGI4YicsXG4gICAgICAgIGRhcmtnb2xkZW5yb2Q6ICcjYjg4NjBiJyxcbiAgICAgICAgZGFya2dyYXk6ICcjYTlhOWE5JyxcbiAgICAgICAgZGFya2dyZWVuOiAnIzAwNjQwMCcsXG4gICAgICAgIGRhcmtncmV5OiAnI2E5YTlhOScsXG4gICAgICAgIGRhcmtraGFraTogJyNiZGI3NmInLFxuICAgICAgICBkYXJrbWFnZW50YTogJyM4YjAwOGInLFxuICAgICAgICBkYXJrb2xpdmVncmVlbjogJyM1NTZiMmYnLFxuICAgICAgICBkYXJrb3JhbmdlOiAnI2ZmOGMwMCcsXG4gICAgICAgIGRhcmtvcmNoaWQ6ICcjOTkzMmNjJyxcbiAgICAgICAgZGFya3JlZDogJyM4YjAwMDAnLFxuICAgICAgICBkYXJrc2FsbW9uOiAnI2U5OTY3YScsXG4gICAgICAgIGRhcmtzZWFncmVlbjogJyM4ZmJjOGYnLFxuICAgICAgICBkYXJrc2xhdGVibHVlOiAnIzQ4M2Q4YicsXG4gICAgICAgIGRhcmtzbGF0ZWdyYXk6ICcjMmY0ZjRmJyxcbiAgICAgICAgZGFya3NsYXRlZ3JleTogJyMyZjRmNGYnLFxuICAgICAgICBkYXJrdHVycXVvaXNlOiAnIzAwY2VkMScsXG4gICAgICAgIGRhcmt2aW9sZXQ6ICcjOTQwMGQzJyxcbiAgICAgICAgZGVlcHBpbms6ICcjZmYxNDkzJyxcbiAgICAgICAgZGVlcHNreWJsdWU6ICcjMDBiZmZmJyxcbiAgICAgICAgZGltZ3JheTogJyM2OTY5NjknLFxuICAgICAgICBkaW1ncmV5OiAnIzY5Njk2OScsXG4gICAgICAgIGRvZGdlcmJsdWU6ICcjMWU5MGZmJyxcbiAgICAgICAgZmlyZWJyaWNrOiAnI2IyMjIyMicsXG4gICAgICAgIGZsb3JhbHdoaXRlOiAnI2ZmZmFmMCcsXG4gICAgICAgIGZvcmVzdGdyZWVuOiAnIzIyOGIyMicsXG4gICAgICAgIGZ1Y2hzaWE6ICcjZmYwMGZmJyxcbiAgICAgICAgZ2FpbnNib3JvOiAnI2RjZGNkYycsXG4gICAgICAgIGdob3N0d2hpdGU6ICcjZjhmOGZmJyxcbiAgICAgICAgZ29sZDogJyNmZmQ3MDAnLFxuICAgICAgICBnb2xkZW5yb2Q6ICcjZGFhNTIwJyxcbiAgICAgICAgZ3JheTogJyM4MDgwODAnLFxuICAgICAgICBncmVlbjogJyMwMDgwMDAnLFxuICAgICAgICBncmVlbnllbGxvdzogJyNhZGZmMmYnLFxuICAgICAgICBncmV5OiAnIzgwODA4MCcsXG4gICAgICAgIGhvbmV5ZGV3OiAnI2YwZmZmMCcsXG4gICAgICAgIGhvdHBpbms6ICcjZmY2OWI0JyxcbiAgICAgICAgaW5kaWFucmVkOiAnI2NkNWM1YycsXG4gICAgICAgIGluZGlnbzogJyM0YjAwODInLFxuICAgICAgICBpdm9yeTogJyNmZmZmZjAnLFxuICAgICAgICBraGFraTogJyNmMGU2OGMnLFxuICAgICAgICBsYXNlcmxlbW9uOiAnI2ZmZmY1NCcsXG4gICAgICAgIGxhdmVuZGVyOiAnI2U2ZTZmYScsXG4gICAgICAgIGxhdmVuZGVyYmx1c2g6ICcjZmZmMGY1JyxcbiAgICAgICAgbGF3bmdyZWVuOiAnIzdjZmMwMCcsXG4gICAgICAgIGxlbW9uY2hpZmZvbjogJyNmZmZhY2QnLFxuICAgICAgICBsaWdodGJsdWU6ICcjYWRkOGU2JyxcbiAgICAgICAgbGlnaHRjb3JhbDogJyNmMDgwODAnLFxuICAgICAgICBsaWdodGN5YW46ICcjZTBmZmZmJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2Q6ICcjZmFmYWQyJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICcjZmFmYWQyJyxcbiAgICAgICAgbGlnaHRncmF5OiAnI2QzZDNkMycsXG4gICAgICAgIGxpZ2h0Z3JlZW46ICcjOTBlZTkwJyxcbiAgICAgICAgbGlnaHRncmV5OiAnI2QzZDNkMycsXG4gICAgICAgIGxpZ2h0cGluazogJyNmZmI2YzEnLFxuICAgICAgICBsaWdodHNhbG1vbjogJyNmZmEwN2EnLFxuICAgICAgICBsaWdodHNlYWdyZWVuOiAnIzIwYjJhYScsXG4gICAgICAgIGxpZ2h0c2t5Ymx1ZTogJyM4N2NlZmEnLFxuICAgICAgICBsaWdodHNsYXRlZ3JheTogJyM3Nzg4OTknLFxuICAgICAgICBsaWdodHNsYXRlZ3JleTogJyM3Nzg4OTknLFxuICAgICAgICBsaWdodHN0ZWVsYmx1ZTogJyNiMGM0ZGUnLFxuICAgICAgICBsaWdodHllbGxvdzogJyNmZmZmZTAnLFxuICAgICAgICBsaW1lOiAnIzAwZmYwMCcsXG4gICAgICAgIGxpbWVncmVlbjogJyMzMmNkMzInLFxuICAgICAgICBsaW5lbjogJyNmYWYwZTYnLFxuICAgICAgICBtYWdlbnRhOiAnI2ZmMDBmZicsXG4gICAgICAgIG1hcm9vbjogJyM4MDAwMDAnLFxuICAgICAgICBtYXJvb24yOiAnIzdmMDAwMCcsXG4gICAgICAgIG1hcm9vbjM6ICcjYjAzMDYwJyxcbiAgICAgICAgbWVkaXVtYXF1YW1hcmluZTogJyM2NmNkYWEnLFxuICAgICAgICBtZWRpdW1ibHVlOiAnIzAwMDBjZCcsXG4gICAgICAgIG1lZGl1bW9yY2hpZDogJyNiYTU1ZDMnLFxuICAgICAgICBtZWRpdW1wdXJwbGU6ICcjOTM3MGRiJyxcbiAgICAgICAgbWVkaXVtc2VhZ3JlZW46ICcjM2NiMzcxJyxcbiAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAnIzdiNjhlZScsXG4gICAgICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAnIzAwZmE5YScsXG4gICAgICAgIG1lZGl1bXR1cnF1b2lzZTogJyM0OGQxY2MnLFxuICAgICAgICBtZWRpdW12aW9sZXRyZWQ6ICcjYzcxNTg1JyxcbiAgICAgICAgbWlkbmlnaHRibHVlOiAnIzE5MTk3MCcsXG4gICAgICAgIG1pbnRjcmVhbTogJyNmNWZmZmEnLFxuICAgICAgICBtaXN0eXJvc2U6ICcjZmZlNGUxJyxcbiAgICAgICAgbW9jY2FzaW46ICcjZmZlNGI1JyxcbiAgICAgICAgbmF2YWpvd2hpdGU6ICcjZmZkZWFkJyxcbiAgICAgICAgbmF2eTogJyMwMDAwODAnLFxuICAgICAgICBvbGRsYWNlOiAnI2ZkZjVlNicsXG4gICAgICAgIG9saXZlOiAnIzgwODAwMCcsXG4gICAgICAgIG9saXZlZHJhYjogJyM2YjhlMjMnLFxuICAgICAgICBvcmFuZ2U6ICcjZmZhNTAwJyxcbiAgICAgICAgb3JhbmdlcmVkOiAnI2ZmNDUwMCcsXG4gICAgICAgIG9yY2hpZDogJyNkYTcwZDYnLFxuICAgICAgICBwYWxlZ29sZGVucm9kOiAnI2VlZThhYScsXG4gICAgICAgIHBhbGVncmVlbjogJyM5OGZiOTgnLFxuICAgICAgICBwYWxldHVycXVvaXNlOiAnI2FmZWVlZScsXG4gICAgICAgIHBhbGV2aW9sZXRyZWQ6ICcjZGI3MDkzJyxcbiAgICAgICAgcGFwYXlhd2hpcDogJyNmZmVmZDUnLFxuICAgICAgICBwZWFjaHB1ZmY6ICcjZmZkYWI5JyxcbiAgICAgICAgcGVydTogJyNjZDg1M2YnLFxuICAgICAgICBwaW5rOiAnI2ZmYzBjYicsXG4gICAgICAgIHBsdW06ICcjZGRhMGRkJyxcbiAgICAgICAgcG93ZGVyYmx1ZTogJyNiMGUwZTYnLFxuICAgICAgICBwdXJwbGU6ICcjODAwMDgwJyxcbiAgICAgICAgcHVycGxlMjogJyM3ZjAwN2YnLFxuICAgICAgICBwdXJwbGUzOiAnI2EwMjBmMCcsXG4gICAgICAgIHJlYmVjY2FwdXJwbGU6ICcjNjYzMzk5JyxcbiAgICAgICAgcmVkOiAnI2ZmMDAwMCcsXG4gICAgICAgIHJvc3licm93bjogJyNiYzhmOGYnLFxuICAgICAgICByb3lhbGJsdWU6ICcjNDE2OWUxJyxcbiAgICAgICAgc2FkZGxlYnJvd246ICcjOGI0NTEzJyxcbiAgICAgICAgc2FsbW9uOiAnI2ZhODA3MicsXG4gICAgICAgIHNhbmR5YnJvd246ICcjZjRhNDYwJyxcbiAgICAgICAgc2VhZ3JlZW46ICcjMmU4YjU3JyxcbiAgICAgICAgc2Vhc2hlbGw6ICcjZmZmNWVlJyxcbiAgICAgICAgc2llbm5hOiAnI2EwNTIyZCcsXG4gICAgICAgIHNpbHZlcjogJyNjMGMwYzAnLFxuICAgICAgICBza3libHVlOiAnIzg3Y2VlYicsXG4gICAgICAgIHNsYXRlYmx1ZTogJyM2YTVhY2QnLFxuICAgICAgICBzbGF0ZWdyYXk6ICcjNzA4MDkwJyxcbiAgICAgICAgc2xhdGVncmV5OiAnIzcwODA5MCcsXG4gICAgICAgIHNub3c6ICcjZmZmYWZhJyxcbiAgICAgICAgc3ByaW5nZ3JlZW46ICcjMDBmZjdmJyxcbiAgICAgICAgc3RlZWxibHVlOiAnIzQ2ODJiNCcsXG4gICAgICAgIHRhbjogJyNkMmI0OGMnLFxuICAgICAgICB0ZWFsOiAnIzAwODA4MCcsXG4gICAgICAgIHRoaXN0bGU6ICcjZDhiZmQ4JyxcbiAgICAgICAgdG9tYXRvOiAnI2ZmNjM0NycsXG4gICAgICAgIHR1cnF1b2lzZTogJyM0MGUwZDAnLFxuICAgICAgICB2aW9sZXQ6ICcjZWU4MmVlJyxcbiAgICAgICAgd2hlYXQ6ICcjZjVkZWIzJyxcbiAgICAgICAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgICAgICAgd2hpdGVzbW9rZTogJyNmNWY1ZjUnLFxuICAgICAgICB5ZWxsb3c6ICcjZmZmZjAwJyxcbiAgICAgICAgeWVsbG93Z3JlZW46ICcjOWFjZDMyJ1xuICAgIH07XG5cbiAgICB2YXIgdzNjeDExXzEgPSB3M2N4MTEkMTtcblxuICAgIHZhciBDb2xvciRzID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkNSA9IGlucHV0JGg7XG4gICAgdmFyIHR5cGUkYyA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgdzNjeDExID0gdzNjeDExXzE7XG4gICAgdmFyIGhleDJyZ2IgPSBoZXgycmdiXzE7XG4gICAgdmFyIHJnYjJoZXggPSByZ2IyaGV4XzE7XG5cbiAgICBDb2xvciRzLnByb3RvdHlwZS5uYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoZXggPSByZ2IyaGV4KHRoaXMuX3JnYiwgJ3JnYicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IE9iamVjdC5rZXlzKHczY3gxMSk7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgbiA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgIGlmICh3M2N4MTFbbl0gPT09IGhleCkgeyByZXR1cm4gbi50b0xvd2VyQ2FzZSgpOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhleDtcbiAgICB9O1xuXG4gICAgaW5wdXQkNS5mb3JtYXQubmFtZWQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodzNjeDExW25hbWVdKSB7IHJldHVybiBoZXgycmdiKHczY3gxMVtuYW1lXSk7IH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGNvbG9yIG5hbWU6ICcrbmFtZSk7XG4gICAgfTtcblxuICAgIGlucHV0JDUuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUkYyhoKSA9PT0gJ3N0cmluZycgJiYgdzNjeDExW2gudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25hbWVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayQ4ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgdmFyIHJnYjJudW0kMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJDgoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByZXR1cm4gKHIgPDwgMTYpICsgKGcgPDwgOCkgKyBiO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMm51bV8xID0gcmdiMm51bSQxO1xuXG4gICAgdmFyIHR5cGUkYiA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgbnVtMnJnYiA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgaWYgKHR5cGUkYihudW0pID09IFwibnVtYmVyXCIgJiYgbnVtID49IDAgJiYgbnVtIDw9IDB4RkZGRkZGKSB7XG4gICAgICAgICAgICB2YXIgciA9IG51bSA+PiAxNjtcbiAgICAgICAgICAgIHZhciBnID0gKG51bSA+PiA4KSAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYiA9IG51bSAmIDB4RkY7XG4gICAgICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gbnVtIGNvbG9yOiBcIitudW0pO1xuICAgIH07XG5cbiAgICB2YXIgbnVtMnJnYl8xID0gbnVtMnJnYjtcblxuICAgIHZhciBjaHJvbWEkOSA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRyID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkNCA9IGlucHV0JGg7XG4gICAgdmFyIHR5cGUkYSA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgcmdiMm51bSA9IHJnYjJudW1fMTtcblxuICAgIENvbG9yJHIucHJvdG90eXBlLm51bSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMm51bSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkOS5udW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHIsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydudW0nXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDQuZm9ybWF0Lm51bSA9IG51bTJyZ2JfMTtcblxuICAgIGlucHV0JDQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlJGEoYXJnc1swXSkgPT09ICdudW1iZXInICYmIGFyZ3NbMF0gPj0gMCAmJiBhcmdzWzBdIDw9IDB4RkZGRkZGKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdudW0nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgY2hyb21hJDggPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkcSA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDMgPSBpbnB1dCRoO1xuICAgIHZhciB1bnBhY2skNyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ5ID0gdXRpbHMudHlwZTtcbiAgICB2YXIgcm91bmQkMSA9IE1hdGgucm91bmQ7XG5cbiAgICBDb2xvciRxLnByb3RvdHlwZS5yZ2IgPSBmdW5jdGlvbihybmQpIHtcbiAgICAgICAgaWYgKCBybmQgPT09IHZvaWQgMCApIHJuZD10cnVlO1xuXG4gICAgICAgIGlmIChybmQgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzLl9yZ2Iuc2xpY2UoMCwzKTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsMykubWFwKHJvdW5kJDEpO1xuICAgIH07XG5cbiAgICBDb2xvciRxLnByb3RvdHlwZS5yZ2JhID0gZnVuY3Rpb24ocm5kKSB7XG4gICAgICAgIGlmICggcm5kID09PSB2b2lkIDAgKSBybmQ9dHJ1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsNCkubWFwKGZ1bmN0aW9uICh2LGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpPDMgPyAocm5kID09PSBmYWxzZSA/IHYgOiByb3VuZCQxKHYpKSA6IHY7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjaHJvbWEkOC5yZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydyZ2InXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDMuZm9ybWF0LnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmdiYSA9IHVucGFjayQ3KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIGlmIChyZ2JhWzNdID09PSB1bmRlZmluZWQpIHsgcmdiYVszXSA9IDE7IH1cbiAgICAgICAgcmV0dXJuIHJnYmE7XG4gICAgfTtcblxuICAgIGlucHV0JDMuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMyxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skNyhhcmdzLCAncmdiYScpO1xuICAgICAgICAgICAgaWYgKHR5cGUkOShhcmdzKSA9PT0gJ2FycmF5JyAmJiAoYXJncy5sZW5ndGggPT09IDMgfHxcbiAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA9PT0gNCAmJiB0eXBlJDkoYXJnc1szXSkgPT0gJ251bWJlcicgJiYgYXJnc1szXSA+PSAwICYmIGFyZ3NbM10gPD0gMSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3JnYic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qXG4gICAgICogQmFzZWQgb24gaW1wbGVtZW50YXRpb24gYnkgTmVpbCBCYXJ0bGV0dFxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWlsYmFydGxldHQvY29sb3ItdGVtcGVyYXR1cmVcbiAgICAgKi9cblxuICAgIHZhciBsb2ckMSA9IE1hdGgubG9nO1xuXG4gICAgdmFyIHRlbXBlcmF0dXJlMnJnYiQxID0gZnVuY3Rpb24gKGtlbHZpbikge1xuICAgICAgICB2YXIgdGVtcCA9IGtlbHZpbiAvIDEwMDtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICBpZiAodGVtcCA8IDY2KSB7XG4gICAgICAgICAgICByID0gMjU1O1xuICAgICAgICAgICAgZyA9IHRlbXAgPCA2ID8gMCA6IC0xNTUuMjU0ODU1NjI3MDkxNzkgLSAwLjQ0NTk2OTUwNDY5NTc5MTMzICogKGcgPSB0ZW1wLTIpICsgMTA0LjQ5MjE2MTk5MzkzODg4ICogbG9nJDEoZyk7XG4gICAgICAgICAgICBiID0gdGVtcCA8IDIwID8gMCA6IC0yNTQuNzY5MzUxODQxMjA5MDIgKyAwLjgyNzQwOTYwNjQwMDczOTUgKiAoYiA9IHRlbXAtMTApICsgMTE1LjY3OTk0NDAxMDY2MTQ3ICogbG9nJDEoYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gMzUxLjk3NjkwNTY2ODA1NjkzICsgMC4xMTQyMDY0NTM3ODQxNjUgKiAociA9IHRlbXAtNTUpIC0gNDAuMjUzNjYzMDkzMzIxMjcgKiBsb2ckMShyKTtcbiAgICAgICAgICAgIGcgPSAzMjUuNDQ5NDEyNTcxMTk3NCArIDAuMDc5NDM0NTY1MzY2NjIzNDIgKiAoZyA9IHRlbXAtNTApIC0gMjguMDg1Mjk2MzUwNzk1NyAqIGxvZyQxKGcpO1xuICAgICAgICAgICAgYiA9IDI1NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgIH07XG5cbiAgICB2YXIgdGVtcGVyYXR1cmUycmdiXzEgPSB0ZW1wZXJhdHVyZTJyZ2IkMTtcblxuICAgIC8qXG4gICAgICogQmFzZWQgb24gaW1wbGVtZW50YXRpb24gYnkgTmVpbCBCYXJ0bGV0dFxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWlsYmFydGxldHQvY29sb3ItdGVtcGVyYXR1cmVcbiAgICAgKiovXG5cbiAgICB2YXIgdGVtcGVyYXR1cmUycmdiID0gdGVtcGVyYXR1cmUycmdiXzE7XG4gICAgdmFyIHVucGFjayQ2ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciByb3VuZCA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgcmdiMnRlbXBlcmF0dXJlJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYiA9IHVucGFjayQ2KGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZ2JbMF0sIGIgPSByZ2JbMl07XG4gICAgICAgIHZhciBtaW5UZW1wID0gMTAwMDtcbiAgICAgICAgdmFyIG1heFRlbXAgPSA0MDAwMDtcbiAgICAgICAgdmFyIGVwcyA9IDAuNDtcbiAgICAgICAgdmFyIHRlbXA7XG4gICAgICAgIHdoaWxlIChtYXhUZW1wIC0gbWluVGVtcCA+IGVwcykge1xuICAgICAgICAgICAgdGVtcCA9IChtYXhUZW1wICsgbWluVGVtcCkgKiAwLjU7XG4gICAgICAgICAgICB2YXIgcmdiJDEgPSB0ZW1wZXJhdHVyZTJyZ2IodGVtcCk7XG4gICAgICAgICAgICBpZiAoKHJnYiQxWzJdIC8gcmdiJDFbMF0pID49IChiIC8gcikpIHtcbiAgICAgICAgICAgICAgICBtYXhUZW1wID0gdGVtcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWluVGVtcCA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdW5kKHRlbXApO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMnRlbXBlcmF0dXJlXzEgPSByZ2IydGVtcGVyYXR1cmUkMTtcblxuICAgIHZhciBjaHJvbWEkNyA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRwID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkMiA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMnRlbXBlcmF0dXJlID0gcmdiMnRlbXBlcmF0dXJlXzE7XG5cbiAgICBDb2xvciRwLnByb3RvdHlwZS50ZW1wID1cbiAgICBDb2xvciRwLnByb3RvdHlwZS5rZWx2aW4gPVxuICAgIENvbG9yJHAucHJvdG90eXBlLnRlbXBlcmF0dXJlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IydGVtcGVyYXR1cmUodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJDcudGVtcCA9XG4gICAgY2hyb21hJDcua2VsdmluID1cbiAgICBjaHJvbWEkNy50ZW1wZXJhdHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkcCwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ3RlbXAnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDIuZm9ybWF0LnRlbXAgPVxuICAgIGlucHV0JDIuZm9ybWF0LmtlbHZpbiA9XG4gICAgaW5wdXQkMi5mb3JtYXQudGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTJyZ2JfMTtcblxuICAgIHZhciB1bnBhY2skNSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgY2JydCA9IE1hdGguY2JydDtcbiAgICB2YXIgcG93JDggPSBNYXRoLnBvdztcbiAgICB2YXIgc2lnbiQxID0gTWF0aC5zaWduO1xuXG4gICAgdmFyIHJnYjJva2xhYiQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIC8vIE9LTGFiIGNvbG9yIHNwYWNlIGltcGxlbWVudGF0aW9uIHRha2VuIGZyb21cbiAgICAgICAgLy8gaHR0cHM6Ly9ib3R0b3Nzb24uZ2l0aHViLmlvL3Bvc3RzL29rbGFiL1xuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJDUoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBbcmdiMmxyZ2IociAvIDI1NSksIHJnYjJscmdiKGcgLyAyNTUpLCByZ2IybHJnYihiIC8gMjU1KV07XG4gICAgICAgIHZhciBsciA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgbGcgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGxiID0gcmVmJDFbMl07XG4gICAgICAgIHZhciBsID0gY2JydCgwLjQxMjIyMTQ3MDggKiBsciArIDAuNTM2MzMyNTM2MyAqIGxnICsgMC4wNTE0NDU5OTI5ICogbGIpO1xuICAgICAgICB2YXIgbSA9IGNicnQoMC4yMTE5MDM0OTgyICogbHIgKyAwLjY4MDY5OTU0NTEgKiBsZyArIDAuMTA3Mzk2OTU2NiAqIGxiKTtcbiAgICAgICAgdmFyIHMgPSBjYnJ0KDAuMDg4MzAyNDYxOSAqIGxyICsgMC4yODE3MTg4Mzc2ICogbGcgKyAwLjYyOTk3ODcwMDUgKiBsYik7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIDAuMjEwNDU0MjU1MyAqIGwgKyAwLjc5MzYxNzc4NSAqIG0gLSAwLjAwNDA3MjA0NjggKiBzLFxuICAgICAgICAgICAgMS45Nzc5OTg0OTUxICogbCAtIDIuNDI4NTkyMjA1ICogbSArIDAuNDUwNTkzNzA5OSAqIHMsXG4gICAgICAgICAgICAwLjAyNTkwNDAzNzEgKiBsICsgMC43ODI3NzE3NjYyICogbSAtIDAuODA4Njc1NzY2ICogc1xuICAgICAgICBdO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMm9rbGFiXzEgPSByZ2Iyb2tsYWIkMjtcblxuICAgIGZ1bmN0aW9uIHJnYjJscmdiKGMpIHtcbiAgICAgICAgdmFyIGFicyA9IE1hdGguYWJzKGMpO1xuICAgICAgICBpZiAoYWJzIDwgMC4wNDA0NSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgLyAxMi45MjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHNpZ24kMShjKSB8fCAxKSAqIHBvdyQ4KChhYnMgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICB9XG5cbiAgICB2YXIgdW5wYWNrJDQgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHBvdyQ3ID0gTWF0aC5wb3c7XG4gICAgdmFyIHNpZ24gPSBNYXRoLnNpZ247XG5cbiAgICAvKlxuICAgICAqIEwqIFswLi4xMDBdXG4gICAgICogYSBbLTEwMC4uMTAwXVxuICAgICAqIGIgWy0xMDAuLjEwMF1cbiAgICAgKi9cbiAgICB2YXIgb2tsYWIycmdiJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayQ0KGFyZ3MsICdsYWInKTtcbiAgICAgICAgdmFyIEwgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYSA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBiID0gYXJnc1syXTtcblxuICAgICAgICB2YXIgbCA9IHBvdyQ3KEwgKyAwLjM5NjMzNzc3NzQgKiBhICsgMC4yMTU4MDM3NTczICogYiwgMyk7XG4gICAgICAgIHZhciBtID0gcG93JDcoTCAtIDAuMTA1NTYxMzQ1OCAqIGEgLSAwLjA2Mzg1NDE3MjggKiBiLCAzKTtcbiAgICAgICAgdmFyIHMgPSBwb3ckNyhMIC0gMC4wODk0ODQxNzc1ICogYSAtIDEuMjkxNDg1NTQ4ICogYiwgMyk7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIDI1NSAqIGxyZ2IycmdiKCs0LjA3Njc0MTY2MjEgKiBsIC0gMy4zMDc3MTE1OTEzICogbSArIDAuMjMwOTY5OTI5MiAqIHMpLFxuICAgICAgICAgICAgMjU1ICogbHJnYjJyZ2IoLTEuMjY4NDM4MDA0NiAqIGwgKyAyLjYwOTc1NzQwMTEgKiBtIC0gMC4zNDEzMTkzOTY1ICogcyksXG4gICAgICAgICAgICAyNTUgKiBscmdiMnJnYigtMC4wMDQxOTYwODYzICogbCAtIDAuNzAzNDE4NjE0NyAqIG0gKyAxLjcwNzYxNDcwMSAqIHMpLFxuICAgICAgICAgICAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFcbiAgICAgICAgXTtcbiAgICB9O1xuXG4gICAgdmFyIG9rbGFiMnJnYl8xID0gb2tsYWIycmdiJDE7XG5cbiAgICBmdW5jdGlvbiBscmdiMnJnYihjKSB7XG4gICAgICAgIHZhciBhYnMgPSBNYXRoLmFicyhjKTtcbiAgICAgICAgaWYgKGFicyA+IDAuMDAzMTMwOCkge1xuICAgICAgICAgICAgcmV0dXJuIChzaWduKGMpIHx8IDEpICogKDEuMDU1ICogcG93JDcoYWJzLCAxIC8gMi40KSAtIDAuMDU1KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYyAqIDEyLjkyO1xuICAgIH1cblxuICAgIHZhciB1bnBhY2skMyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ4ID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJDYgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkbyA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDEgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJva2xhYiQxID0gcmdiMm9rbGFiXzE7XG5cbiAgICBDb2xvciRvLnByb3RvdHlwZS5va2xhYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJva2xhYiQxKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSQ2Lm9rbGFiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRvLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnb2tsYWInXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDEuZm9ybWF0Lm9rbGFiID0gb2tsYWIycmdiXzE7XG5cbiAgICBpbnB1dCQxLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDMsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJDMoYXJncywgJ29rbGFiJyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ4KGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdva2xhYic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skMiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcmdiMm9rbGFiID0gcmdiMm9rbGFiXzE7XG4gICAgdmFyIGxhYjJsY2ggPSBsYWIybGNoXzE7XG5cbiAgICB2YXIgcmdiMm9rbGNoJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayQyKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gcmdiMm9rbGFiKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbCA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYl8gPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIGxhYjJsY2gobCwgYSwgYl8pO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMm9rbGNoXzEgPSByZ2Iyb2tsY2gkMTtcblxuICAgIHZhciB1bnBhY2skMSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGNoMmxhYiA9IGxjaDJsYWJfMTtcbiAgICB2YXIgb2tsYWIycmdiID0gb2tsYWIycmdiXzE7XG5cbiAgICB2YXIgb2tsY2gycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skMShhcmdzLCAnbGNoJyk7XG4gICAgICAgIHZhciBsID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByZWYgPSBsY2gybGFiKGwsIGMsIGgpO1xuICAgICAgICB2YXIgTCA9IHJlZlswXTtcbiAgICAgICAgdmFyIGEgPSByZWZbMV07XG4gICAgICAgIHZhciBiXyA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gb2tsYWIycmdiKEwsIGEsIGJfKTtcbiAgICAgICAgdmFyIHIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGcgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGIgPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciBva2xjaDJyZ2JfMSA9IG9rbGNoMnJnYjtcblxuICAgIHZhciB1bnBhY2sgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkNyA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSQ1ID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJG4gPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMm9rbGNoID0gcmdiMm9rbGNoXzE7XG5cbiAgICBDb2xvciRuLnByb3RvdHlwZS5va2xjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJva2xjaCh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkNS5va2xjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkbiwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ29rbGNoJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQub2tsY2ggPSBva2xjaDJyZ2JfMTtcblxuICAgIGlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDMsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdva2xjaCcpO1xuICAgICAgICAgICAgaWYgKHR5cGUkNyhhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnb2tsY2gnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgQ29sb3IkbSA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkNiA9IHV0aWxzLnR5cGU7XG5cbiAgICBDb2xvciRtLnByb3RvdHlwZS5hbHBoYSA9IGZ1bmN0aW9uKGEsIG11dGF0ZSkge1xuICAgICAgICBpZiAoIG11dGF0ZSA9PT0gdm9pZCAwICkgbXV0YXRlPWZhbHNlO1xuXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQgJiYgdHlwZSQ2KGEpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKG11dGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JnYlszXSA9IGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJG0oW3RoaXMuX3JnYlswXSwgdGhpcy5fcmdiWzFdLCB0aGlzLl9yZ2JbMl0sIGFdLCAncmdiJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JnYlszXTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGwgPSBDb2xvcl8xO1xuXG4gICAgQ29sb3IkbC5wcm90b3R5cGUuY2xpcHBlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLl9jbGlwcGVkIHx8IGZhbHNlO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkayA9IENvbG9yXzE7XG4gICAgdmFyIExBQl9DT05TVEFOVFMkMSA9IGxhYkNvbnN0YW50cztcblxuICAgIENvbG9yJGsucHJvdG90eXBlLmRhcmtlbiA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHR2YXIgbWUgPSB0aGlzO1xuICAgIFx0dmFyIGxhYiA9IG1lLmxhYigpO1xuICAgIFx0bGFiWzBdIC09IExBQl9DT05TVEFOVFMkMS5LbiAqIGFtb3VudDtcbiAgICBcdHJldHVybiBuZXcgQ29sb3IkayhsYWIsICdsYWInKS5hbHBoYShtZS5hbHBoYSgpLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgQ29sb3Ikay5wcm90b3R5cGUuYnJpZ2h0ZW4gPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0cmV0dXJuIHRoaXMuZGFya2VuKC1hbW91bnQpO1xuICAgIH07XG5cbiAgICBDb2xvciRrLnByb3RvdHlwZS5kYXJrZXIgPSBDb2xvciRrLnByb3RvdHlwZS5kYXJrZW47XG4gICAgQ29sb3Ikay5wcm90b3R5cGUuYnJpZ2h0ZXIgPSBDb2xvciRrLnByb3RvdHlwZS5icmlnaHRlbjtcblxuICAgIHZhciBDb2xvciRqID0gQ29sb3JfMTtcblxuICAgIENvbG9yJGoucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChtYykge1xuICAgICAgICB2YXIgcmVmID0gbWMuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG1vZGUgPSByZWZbMF07XG4gICAgICAgIHZhciBjaGFubmVsID0gcmVmWzFdO1xuICAgICAgICB2YXIgc3JjID0gdGhpc1ttb2RlXSgpO1xuICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgdmFyIGkgPSBtb2RlLmluZGV4T2YoY2hhbm5lbCkgLSAobW9kZS5zdWJzdHIoMCwgMikgPT09ICdvaycgPyAyIDogMCk7XG4gICAgICAgICAgICBpZiAoaSA+IC0xKSB7IHJldHVybiBzcmNbaV07IH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJ1bmtub3duIGNoYW5uZWwgXCIgKyBjaGFubmVsICsgXCIgaW4gbW9kZSBcIiArIG1vZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGkgPSBDb2xvcl8xO1xuICAgIHZhciB0eXBlJDUgPSB1dGlscy50eXBlO1xuICAgIHZhciBwb3ckNiA9IE1hdGgucG93O1xuXG4gICAgdmFyIEVQUyA9IDFlLTc7XG4gICAgdmFyIE1BWF9JVEVSID0gMjA7XG5cbiAgICBDb2xvciRpLnByb3RvdHlwZS5sdW1pbmFuY2UgPSBmdW5jdGlvbihsdW0pIHtcbiAgICAgICAgaWYgKGx1bSAhPT0gdW5kZWZpbmVkICYmIHR5cGUkNShsdW0pID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGx1bSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBwdXJlIGJsYWNrXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRpKFswLDAsMCx0aGlzLl9yZ2JbM11dLCAncmdiJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobHVtID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHB1cmUgd2hpdGVcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJGkoWzI1NSwyNTUsMjU1LHRoaXMuX3JnYlszXV0sICdyZ2InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbXB1dGUgbmV3IGNvbG9yIHVzaW5nLi4uXG4gICAgICAgICAgICB2YXIgY3VyX2x1bSA9IHRoaXMubHVtaW5hbmNlKCk7XG4gICAgICAgICAgICB2YXIgbW9kZSA9ICdyZ2InO1xuICAgICAgICAgICAgdmFyIG1heF9pdGVyID0gTUFYX0lURVI7XG5cbiAgICAgICAgICAgIHZhciB0ZXN0ID0gZnVuY3Rpb24gKGxvdywgaGlnaCkge1xuICAgICAgICAgICAgICAgIHZhciBtaWQgPSBsb3cuaW50ZXJwb2xhdGUoaGlnaCwgMC41LCBtb2RlKTtcbiAgICAgICAgICAgICAgICB2YXIgbG0gPSBtaWQubHVtaW5hbmNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGx1bSAtIGxtKSA8IEVQUyB8fCAhbWF4X2l0ZXItLSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbG9zZSBlbm91Z2hcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxtID4gbHVtID8gdGVzdChsb3csIG1pZCkgOiB0ZXN0KG1pZCwgaGlnaCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgcmdiID0gKGN1cl9sdW0gPiBsdW0gPyB0ZXN0KG5ldyBDb2xvciRpKFswLDAsMF0pLCB0aGlzKSA6IHRlc3QodGhpcywgbmV3IENvbG9yJGkoWzI1NSwyNTUsMjU1XSkpKS5yZ2IoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkaShyZ2IuY29uY2F0KCBbdGhpcy5fcmdiWzNdXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZ2IybHVtaW5hbmNlLmFwcGx5KHZvaWQgMCwgKHRoaXMuX3JnYikuc2xpY2UoMCwzKSk7XG4gICAgfTtcblxuXG4gICAgdmFyIHJnYjJsdW1pbmFuY2UgPSBmdW5jdGlvbiAocixnLGIpIHtcbiAgICAgICAgLy8gcmVsYXRpdmUgbHVtaW5hbmNlXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG4gICAgICAgIHIgPSBsdW1pbmFuY2VfeChyKTtcbiAgICAgICAgZyA9IGx1bWluYW5jZV94KGcpO1xuICAgICAgICBiID0gbHVtaW5hbmNlX3goYik7XG4gICAgICAgIHJldHVybiAwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGI7XG4gICAgfTtcblxuICAgIHZhciBsdW1pbmFuY2VfeCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHggLz0gMjU1O1xuICAgICAgICByZXR1cm4geCA8PSAwLjAzOTI4ID8geC8xMi45MiA6IHBvdyQ2KCh4KzAuMDU1KS8xLjA1NSwgMi40KTtcbiAgICB9O1xuXG4gICAgdmFyIGludGVycG9sYXRvciQxID0ge307XG5cbiAgICB2YXIgQ29sb3IkaCA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkNCA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGludGVycG9sYXRvciA9IGludGVycG9sYXRvciQxO1xuXG4gICAgdmFyIG1peCQxID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgaWYgKCBmID09PSB2b2lkIDAgKSBmPTAuNTtcbiAgICAgICAgdmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDM7XG4gICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDMgXTtcblxuICAgICAgICB2YXIgbW9kZSA9IHJlc3RbMF0gfHwgJ2xyZ2InO1xuICAgICAgICBpZiAoIWludGVycG9sYXRvclttb2RlXSAmJiAhcmVzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGZhbGwgYmFjayB0byB0aGUgZmlyc3Qgc3VwcG9ydGVkIG1vZGVcbiAgICAgICAgICAgIG1vZGUgPSBPYmplY3Qua2V5cyhpbnRlcnBvbGF0b3IpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW50ZXJwb2xhdG9yW21vZGVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwiaW50ZXJwb2xhdGlvbiBtb2RlIFwiICsgbW9kZSArIFwiIGlzIG5vdCBkZWZpbmVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSQ0KGNvbDEpICE9PSAnb2JqZWN0JykgeyBjb2wxID0gbmV3IENvbG9yJGgoY29sMSk7IH1cbiAgICAgICAgaWYgKHR5cGUkNChjb2wyKSAhPT0gJ29iamVjdCcpIHsgY29sMiA9IG5ldyBDb2xvciRoKGNvbDIpOyB9XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0b3JbbW9kZV0oY29sMSwgY29sMiwgZilcbiAgICAgICAgICAgIC5hbHBoYShjb2wxLmFscGhhKCkgKyBmICogKGNvbDIuYWxwaGEoKSAtIGNvbDEuYWxwaGEoKSkpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkZyA9IENvbG9yXzE7XG4gICAgdmFyIG1peCA9IG1peCQxO1xuXG4gICAgQ29sb3IkZy5wcm90b3R5cGUubWl4ID1cbiAgICBDb2xvciRnLnByb3RvdHlwZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKGNvbDIsIGYpIHtcbiAgICBcdGlmICggZiA9PT0gdm9pZCAwICkgZj0wLjU7XG4gICAgXHR2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgICBcdHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDIgXTtcblxuICAgIFx0cmV0dXJuIG1peC5hcHBseSh2b2lkIDAsIFsgdGhpcywgY29sMiwgZiBdLmNvbmNhdCggcmVzdCApKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGYgPSBDb2xvcl8xO1xuXG4gICAgQ29sb3IkZi5wcm90b3R5cGUucHJlbXVsdGlwbHkgPSBmdW5jdGlvbihtdXRhdGUpIHtcbiAgICBcdGlmICggbXV0YXRlID09PSB2b2lkIDAgKSBtdXRhdGU9ZmFsc2U7XG5cbiAgICBcdHZhciByZ2IgPSB0aGlzLl9yZ2I7XG4gICAgXHR2YXIgYSA9IHJnYlszXTtcbiAgICBcdGlmIChtdXRhdGUpIHtcbiAgICBcdFx0dGhpcy5fcmdiID0gW3JnYlswXSphLCByZ2JbMV0qYSwgcmdiWzJdKmEsIGFdO1xuICAgIFx0XHRyZXR1cm4gdGhpcztcbiAgICBcdH0gZWxzZSB7XG4gICAgXHRcdHJldHVybiBuZXcgQ29sb3IkZihbcmdiWzBdKmEsIHJnYlsxXSphLCByZ2JbMl0qYSwgYV0sICdyZ2InKTtcbiAgICBcdH1cbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGUgPSBDb2xvcl8xO1xuICAgIHZhciBMQUJfQ09OU1RBTlRTID0gbGFiQ29uc3RhbnRzO1xuXG4gICAgQ29sb3IkZS5wcm90b3R5cGUuc2F0dXJhdGUgPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0dmFyIG1lID0gdGhpcztcbiAgICBcdHZhciBsY2ggPSBtZS5sY2goKTtcbiAgICBcdGxjaFsxXSArPSBMQUJfQ09OU1RBTlRTLktuICogYW1vdW50O1xuICAgIFx0aWYgKGxjaFsxXSA8IDApIHsgbGNoWzFdID0gMDsgfVxuICAgIFx0cmV0dXJuIG5ldyBDb2xvciRlKGxjaCwgJ2xjaCcpLmFscGhhKG1lLmFscGhhKCksIHRydWUpO1xuICAgIH07XG5cbiAgICBDb2xvciRlLnByb3RvdHlwZS5kZXNhdHVyYXRlID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgXHRpZiAoIGFtb3VudCA9PT0gdm9pZCAwICkgYW1vdW50PTE7XG5cbiAgICBcdHJldHVybiB0aGlzLnNhdHVyYXRlKC1hbW91bnQpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkZCA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkMyA9IHV0aWxzLnR5cGU7XG5cbiAgICBDb2xvciRkLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobWMsIHZhbHVlLCBtdXRhdGUpIHtcbiAgICAgICAgaWYgKCBtdXRhdGUgPT09IHZvaWQgMCApIG11dGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIHZhciByZWYgPSBtYy5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbW9kZSA9IHJlZlswXTtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSByZWZbMV07XG4gICAgICAgIHZhciBzcmMgPSB0aGlzW21vZGVdKCk7XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG1vZGUuaW5kZXhPZihjaGFubmVsKSAtIChtb2RlLnN1YnN0cigwLCAyKSA9PT0gJ29rJyA/IDIgOiAwKTtcbiAgICAgICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSQzKHZhbHVlKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldICs9ICt2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSArPSArdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gKj0gK3ZhbHVlLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSAvPSArdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gPSArdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUkMyh2YWx1ZSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHNyY1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuc3VwcG9ydGVkIHZhbHVlIGZvciBDb2xvci5zZXRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBvdXQgPSBuZXcgQ29sb3IkZChzcmMsIG1vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmdiID0gb3V0Ll9yZ2I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcInVua25vd24gY2hhbm5lbCBcIiArIGNoYW5uZWwgKyBcIiBpbiBtb2RlIFwiICsgbW9kZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkYyA9IENvbG9yXzE7XG5cbiAgICB2YXIgcmdiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHh5ejAgPSBjb2wxLl9yZ2I7XG4gICAgICAgIHZhciB4eXoxID0gY29sMi5fcmdiO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yJGMoXG4gICAgICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdLXh5ejBbMF0pLFxuICAgICAgICAgICAgeHl6MFsxXSArIGYgKiAoeHl6MVsxXS14eXowWzFdKSxcbiAgICAgICAgICAgIHh5ejBbMl0gKyBmICogKHh5ejFbMl0teHl6MFsyXSksXG4gICAgICAgICAgICAncmdiJ1xuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLnJnYiA9IHJnYjtcblxuICAgIHZhciBDb2xvciRiID0gQ29sb3JfMTtcbiAgICB2YXIgc3FydCQyID0gTWF0aC5zcXJ0O1xuICAgIHZhciBwb3ckNSA9IE1hdGgucG93O1xuXG4gICAgdmFyIGxyZ2IgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgcmVmID0gY29sMS5fcmdiO1xuICAgICAgICB2YXIgeDEgPSByZWZbMF07XG4gICAgICAgIHZhciB5MSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIHoxID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBjb2wyLl9yZ2I7XG4gICAgICAgIHZhciB4MiA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgeTIgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIHoyID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkYihcbiAgICAgICAgICAgIHNxcnQkMihwb3ckNSh4MSwyKSAqICgxLWYpICsgcG93JDUoeDIsMikgKiBmKSxcbiAgICAgICAgICAgIHNxcnQkMihwb3ckNSh5MSwyKSAqICgxLWYpICsgcG93JDUoeTIsMikgKiBmKSxcbiAgICAgICAgICAgIHNxcnQkMihwb3ckNSh6MSwyKSAqICgxLWYpICsgcG93JDUoejIsMikgKiBmKSxcbiAgICAgICAgICAgICdyZ2InXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEubHJnYiA9IGxyZ2I7XG5cbiAgICB2YXIgQ29sb3IkYSA9IENvbG9yXzE7XG5cbiAgICB2YXIgbGFiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHh5ejAgPSBjb2wxLmxhYigpO1xuICAgICAgICB2YXIgeHl6MSA9IGNvbDIubGFiKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkYShcbiAgICAgICAgICAgIHh5ejBbMF0gKyBmICogKHh5ejFbMF0teHl6MFswXSksXG4gICAgICAgICAgICB4eXowWzFdICsgZiAqICh4eXoxWzFdLXh5ejBbMV0pLFxuICAgICAgICAgICAgeHl6MFsyXSArIGYgKiAoeHl6MVsyXS14eXowWzJdKSxcbiAgICAgICAgICAgICdsYWInXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEubGFiID0gbGFiO1xuXG4gICAgdmFyIENvbG9yJDkgPSBDb2xvcl8xO1xuXG4gICAgdmFyIF9oc3ggPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZiwgbSkge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMTtcblxuICAgICAgICB2YXIgeHl6MCwgeHl6MTtcbiAgICAgICAgaWYgKG0gPT09ICdoc2wnKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oc2woKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhzbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdoc3YnKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oc3YoKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhzdigpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdoY2cnKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oY2coKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhjZygpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdoc2knKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oc2koKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhzaSgpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdsY2gnIHx8IG0gPT09ICdoY2wnKSB7XG4gICAgICAgICAgICBtID0gJ2hjbCc7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oY2woKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhjbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdva2xjaCcpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLm9rbGNoKCkucmV2ZXJzZSgpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIub2tsY2goKS5yZXZlcnNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaHVlMCwgaHVlMSwgc2F0MCwgc2F0MSwgbGJ2MCwgbGJ2MTtcbiAgICAgICAgaWYgKG0uc3Vic3RyKDAsIDEpID09PSAnaCcgfHwgbSA9PT0gJ29rbGNoJykge1xuICAgICAgICAgICAgKGFzc2lnbiA9IHh5ejAsIGh1ZTAgPSBhc3NpZ25bMF0sIHNhdDAgPSBhc3NpZ25bMV0sIGxidjAgPSBhc3NpZ25bMl0pO1xuICAgICAgICAgICAgKGFzc2lnbiQxID0geHl6MSwgaHVlMSA9IGFzc2lnbiQxWzBdLCBzYXQxID0gYXNzaWduJDFbMV0sIGxidjEgPSBhc3NpZ24kMVsyXSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2F0LCBodWUsIGxidiwgZGg7XG5cbiAgICAgICAgaWYgKCFpc05hTihodWUwKSAmJiAhaXNOYU4oaHVlMSkpIHtcbiAgICAgICAgICAgIC8vIGJvdGggY29sb3JzIGhhdmUgaHVlXG4gICAgICAgICAgICBpZiAoaHVlMSA+IGh1ZTAgJiYgaHVlMSAtIGh1ZTAgPiAxODApIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZTEgLSAoaHVlMCArIDM2MCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGh1ZTEgPCBodWUwICYmIGh1ZTAgLSBodWUxID4gMTgwKSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWUxICsgMzYwIC0gaHVlMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWUxIC0gaHVlMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh1ZSA9IGh1ZTAgKyBmICogZGg7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKGh1ZTApKSB7XG4gICAgICAgICAgICBodWUgPSBodWUwO1xuICAgICAgICAgICAgaWYgKChsYnYxID09IDEgfHwgbGJ2MSA9PSAwKSAmJiBtICE9ICdoc3YnKSB7IHNhdCA9IHNhdDA7IH1cbiAgICAgICAgfSBlbHNlIGlmICghaXNOYU4oaHVlMSkpIHtcbiAgICAgICAgICAgIGh1ZSA9IGh1ZTE7XG4gICAgICAgICAgICBpZiAoKGxidjAgPT0gMSB8fCBsYnYwID09IDApICYmIG0gIT0gJ2hzdicpIHsgc2F0ID0gc2F0MTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHVlID0gTnVtYmVyLk5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYXQgPT09IHVuZGVmaW5lZCkgeyBzYXQgPSBzYXQwICsgZiAqIChzYXQxIC0gc2F0MCk7IH1cbiAgICAgICAgbGJ2ID0gbGJ2MCArIGYgKiAobGJ2MSAtIGxidjApO1xuICAgICAgICByZXR1cm4gbSA9PT0gJ29rbGNoJyA/IG5ldyBDb2xvciQ5KFtsYnYsIHNhdCwgaHVlXSwgbSkgOiBuZXcgQ29sb3IkOShbaHVlLCBzYXQsIGxidl0sIG0pO1xuICAgIH07XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4JDUgPSBfaHN4O1xuXG4gICAgdmFyIGxjaCA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gaW50ZXJwb2xhdGVfaHN4JDUoY29sMSwgY29sMiwgZiwgJ2xjaCcpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5sY2ggPSBsY2g7XG4gICAgaW50ZXJwb2xhdG9yJDEuaGNsID0gbGNoO1xuXG4gICAgdmFyIENvbG9yJDggPSBDb2xvcl8xO1xuXG4gICAgdmFyIG51bSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciBjMSA9IGNvbDEubnVtKCk7XG4gICAgICAgIHZhciBjMiA9IGNvbDIubnVtKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkOChjMSArIGYgKiAoYzItYzEpLCAnbnVtJylcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEubnVtID0gbnVtO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQ0ID0gX2hzeDtcblxuICAgIHZhciBoY2cgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQ0KGNvbDEsIGNvbDIsIGYsICdoY2cnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEuaGNnID0gaGNnO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQzID0gX2hzeDtcblxuICAgIHZhciBoc2kgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQzKGNvbDEsIGNvbDIsIGYsICdoc2knKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEuaHNpID0gaHNpO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQyID0gX2hzeDtcblxuICAgIHZhciBoc2wgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQyKGNvbDEsIGNvbDIsIGYsICdoc2wnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEuaHNsID0gaHNsO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQxID0gX2hzeDtcblxuICAgIHZhciBoc3YgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQxKGNvbDEsIGNvbDIsIGYsICdoc3YnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEuaHN2ID0gaHN2O1xuXG4gICAgdmFyIENvbG9yJDcgPSBDb2xvcl8xO1xuXG4gICAgdmFyIG9rbGFiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHh5ejAgPSBjb2wxLm9rbGFiKCk7XG4gICAgICAgIHZhciB4eXoxID0gY29sMi5va2xhYigpO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yJDcoXG4gICAgICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdIC0geHl6MFswXSksXG4gICAgICAgICAgICB4eXowWzFdICsgZiAqICh4eXoxWzFdIC0geHl6MFsxXSksXG4gICAgICAgICAgICB4eXowWzJdICsgZiAqICh4eXoxWzJdIC0geHl6MFsyXSksXG4gICAgICAgICAgICAnb2tsYWInXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLm9rbGFiID0gb2tsYWI7XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4ID0gX2hzeDtcblxuICAgIHZhciBva2xjaCA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZV9oc3goY29sMSwgY29sMiwgZiwgJ29rbGNoJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLm9rbGNoID0gb2tsY2g7XG5cbiAgICB2YXIgQ29sb3IkNiA9IENvbG9yXzE7XG4gICAgdmFyIGNsaXBfcmdiJDEgPSB1dGlscy5jbGlwX3JnYjtcbiAgICB2YXIgcG93JDQgPSBNYXRoLnBvdztcbiAgICB2YXIgc3FydCQxID0gTWF0aC5zcXJ0O1xuICAgIHZhciBQSSQxID0gTWF0aC5QSTtcbiAgICB2YXIgY29zJDIgPSBNYXRoLmNvcztcbiAgICB2YXIgc2luJDIgPSBNYXRoLnNpbjtcbiAgICB2YXIgYXRhbjIkMSA9IE1hdGguYXRhbjI7XG5cbiAgICB2YXIgYXZlcmFnZSA9IGZ1bmN0aW9uIChjb2xvcnMsIG1vZGUsIHdlaWdodHMpIHtcbiAgICAgICAgaWYgKCBtb2RlID09PSB2b2lkIDAgKSBtb2RlPSdscmdiJztcbiAgICAgICAgaWYgKCB3ZWlnaHRzID09PSB2b2lkIDAgKSB3ZWlnaHRzPW51bGw7XG5cbiAgICAgICAgdmFyIGwgPSBjb2xvcnMubGVuZ3RoO1xuICAgICAgICBpZiAoIXdlaWdodHMpIHsgd2VpZ2h0cyA9IEFycmF5LmZyb20obmV3IEFycmF5KGwpKS5tYXAoZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSk7IH1cbiAgICAgICAgLy8gbm9ybWFsaXplIHdlaWdodHNcbiAgICAgICAgdmFyIGsgPSBsIC8gd2VpZ2h0cy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSArIGI7IH0pO1xuICAgICAgICB3ZWlnaHRzLmZvckVhY2goZnVuY3Rpb24gKHcsaSkgeyB3ZWlnaHRzW2ldICo9IGs7IH0pO1xuICAgICAgICAvLyBjb252ZXJ0IGNvbG9ycyB0byBDb2xvciBvYmplY3RzXG4gICAgICAgIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG5ldyBDb2xvciQ2KGMpOyB9KTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdscmdiJykge1xuICAgICAgICAgICAgcmV0dXJuIF9hdmVyYWdlX2xyZ2IoY29sb3JzLCB3ZWlnaHRzKVxuICAgICAgICB9XG4gICAgICAgIHZhciBmaXJzdCA9IGNvbG9ycy5zaGlmdCgpO1xuICAgICAgICB2YXIgeHl6ID0gZmlyc3QuZ2V0KG1vZGUpO1xuICAgICAgICB2YXIgY250ID0gW107XG4gICAgICAgIHZhciBkeCA9IDA7XG4gICAgICAgIHZhciBkeSA9IDA7XG4gICAgICAgIC8vIGluaXRpYWwgY29sb3JcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHh5ei5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgeHl6W2ldID0gKHh5eltpXSB8fCAwKSAqIHdlaWdodHNbMF07XG4gICAgICAgICAgICBjbnQucHVzaChpc05hTih4eXpbaV0pID8gMCA6IHdlaWdodHNbMF0pO1xuICAgICAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkpID09PSAnaCcgJiYgIWlzTmFOKHh5eltpXSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgQSA9IHh5eltpXSAvIDE4MCAqIFBJJDE7XG4gICAgICAgICAgICAgICAgZHggKz0gY29zJDIoQSkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICAgICAgICAgIGR5ICs9IHNpbiQyKEEpICogd2VpZ2h0c1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhbHBoYSA9IGZpcnN0LmFscGhhKCkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICBjb2xvcnMuZm9yRWFjaChmdW5jdGlvbiAoYyxjaSkge1xuICAgICAgICAgICAgdmFyIHh5ejIgPSBjLmdldChtb2RlKTtcbiAgICAgICAgICAgIGFscGhhICs9IGMuYWxwaGEoKSAqIHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8eHl6Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih4eXoyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBjbnRbaV0gKz0gd2VpZ2h0c1tjaSsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkpID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0geHl6MltpXSAvIDE4MCAqIFBJJDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkeCArPSBjb3MkMihBKSAqIHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkeSArPSBzaW4kMihBKSAqIHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4eXpbaV0gKz0geHl6MltpXSAqIHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkkMT0wOyBpJDE8eHl6Lmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgICAgIGlmIChtb2RlLmNoYXJBdChpJDEpID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgQSQxID0gYXRhbjIkMShkeSAvIGNudFtpJDFdLCBkeCAvIGNudFtpJDFdKSAvIFBJJDEgKiAxODA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKEEkMSA8IDApIHsgQSQxICs9IDM2MDsgfVxuICAgICAgICAgICAgICAgIHdoaWxlIChBJDEgPj0gMzYwKSB7IEEkMSAtPSAzNjA7IH1cbiAgICAgICAgICAgICAgICB4eXpbaSQxXSA9IEEkMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeHl6W2kkMV0gPSB4eXpbaSQxXS9jbnRbaSQxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhbHBoYSAvPSBsO1xuICAgICAgICByZXR1cm4gKG5ldyBDb2xvciQ2KHh5eiwgbW9kZSkpLmFscGhhKGFscGhhID4gMC45OTk5OSA/IDEgOiBhbHBoYSwgdHJ1ZSk7XG4gICAgfTtcblxuXG4gICAgdmFyIF9hdmVyYWdlX2xyZ2IgPSBmdW5jdGlvbiAoY29sb3JzLCB3ZWlnaHRzKSB7XG4gICAgICAgIHZhciBsID0gY29sb3JzLmxlbmd0aDtcbiAgICAgICAgdmFyIHh5eiA9IFswLDAsMCwwXTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29sID0gY29sb3JzW2ldO1xuICAgICAgICAgICAgdmFyIGYgPSB3ZWlnaHRzW2ldIC8gbDtcbiAgICAgICAgICAgIHZhciByZ2IgPSBjb2wuX3JnYjtcbiAgICAgICAgICAgIHh5elswXSArPSBwb3ckNChyZ2JbMF0sMikgKiBmO1xuICAgICAgICAgICAgeHl6WzFdICs9IHBvdyQ0KHJnYlsxXSwyKSAqIGY7XG4gICAgICAgICAgICB4eXpbMl0gKz0gcG93JDQocmdiWzJdLDIpICogZjtcbiAgICAgICAgICAgIHh5elszXSArPSByZ2JbM10gKiBmO1xuICAgICAgICB9XG4gICAgICAgIHh5elswXSA9IHNxcnQkMSh4eXpbMF0pO1xuICAgICAgICB4eXpbMV0gPSBzcXJ0JDEoeHl6WzFdKTtcbiAgICAgICAgeHl6WzJdID0gc3FydCQxKHh5elsyXSk7XG4gICAgICAgIGlmICh4eXpbM10gPiAwLjk5OTk5OTkpIHsgeHl6WzNdID0gMTsgfVxuICAgICAgICByZXR1cm4gbmV3IENvbG9yJDYoY2xpcF9yZ2IkMSh4eXopKTtcbiAgICB9O1xuXG4gICAgLy8gbWluaW1hbCBtdWx0aS1wdXJwb3NlIGludGVyZmFjZVxuXG4gICAgLy8gQHJlcXVpcmVzIHV0aWxzIGNvbG9yIGFuYWx5emVcblxuICAgIHZhciBjaHJvbWEkNCA9IGNocm9tYV8xO1xuICAgIHZhciB0eXBlJDIgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHBvdyQzID0gTWF0aC5wb3c7XG5cbiAgICB2YXIgc2NhbGUkMiA9IGZ1bmN0aW9uKGNvbG9ycykge1xuXG4gICAgICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgIHZhciBfbW9kZSA9ICdyZ2InO1xuICAgICAgICB2YXIgX25hY29sID0gY2hyb21hJDQoJyNjY2MnKTtcbiAgICAgICAgdmFyIF9zcHJlYWQgPSAwO1xuICAgICAgICAvLyBjb25zdCBfZml4ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9kb21haW4gPSBbMCwgMV07XG4gICAgICAgIHZhciBfcG9zID0gW107XG4gICAgICAgIHZhciBfcGFkZGluZyA9IFswLDBdO1xuICAgICAgICB2YXIgX2NsYXNzZXMgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9jb2xvcnMgPSBbXTtcbiAgICAgICAgdmFyIF9vdXQgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9taW4gPSAwO1xuICAgICAgICB2YXIgX21heCA9IDE7XG4gICAgICAgIHZhciBfY29ycmVjdExpZ2h0bmVzcyA9IGZhbHNlO1xuICAgICAgICB2YXIgX2NvbG9yQ2FjaGUgPSB7fTtcbiAgICAgICAgdmFyIF91c2VDYWNoZSA9IHRydWU7XG4gICAgICAgIHZhciBfZ2FtbWEgPSAxO1xuXG4gICAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuXG4gICAgICAgIHZhciBzZXRDb2xvcnMgPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICAgICAgICAgIGNvbG9ycyA9IGNvbG9ycyB8fCBbJyNmZmYnLCAnIzAwMCddO1xuICAgICAgICAgICAgaWYgKGNvbG9ycyAmJiB0eXBlJDIoY29sb3JzKSA9PT0gJ3N0cmluZycgJiYgY2hyb21hJDQuYnJld2VyICYmXG4gICAgICAgICAgICAgICAgY2hyb21hJDQuYnJld2VyW2NvbG9ycy50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICAgICAgICAgIGNvbG9ycyA9IGNocm9tYSQ0LmJyZXdlcltjb2xvcnMudG9Mb3dlckNhc2UoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSQyKGNvbG9ycykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgc2luZ2xlIGNvbG9yXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzID0gW2NvbG9yc1swXSwgY29sb3JzWzBdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbWFrZSBhIGNvcHkgb2YgdGhlIGNvbG9yc1xuICAgICAgICAgICAgICAgIGNvbG9ycyA9IGNvbG9ycy5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHRvIGNocm9tYSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPGNvbG9ycy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnNbY10gPSBjaHJvbWEkNChjb2xvcnNbY10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhdXRvLWZpbGwgY29sb3IgcG9zaXRpb25cbiAgICAgICAgICAgICAgICBfcG9zLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyQxPTA7IGMkMTxjb2xvcnMubGVuZ3RoOyBjJDErKykge1xuICAgICAgICAgICAgICAgICAgICBfcG9zLnB1c2goYyQxLyhjb2xvcnMubGVuZ3RoLTEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbG9ycyA9IGNvbG9ycztcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZ2V0Q2xhc3MgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKF9jbGFzc2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IF9jbGFzc2VzLmxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IG4gJiYgdmFsdWUgPj0gX2NsYXNzZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaS0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHRNYXBMaWdodG5lc3MgPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTtcbiAgICAgICAgdmFyIHRNYXBEb21haW4gPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTtcblxuICAgICAgICAvLyBjb25zdCBjbGFzc2lmeVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gICAgIGxldCB2YWwgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIGlmIChfY2xhc3Nlcy5sZW5ndGggPiAyKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbiA9IF9jbGFzc2VzLmxlbmd0aC0xO1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGkgPSBnZXRDbGFzcyh2YWx1ZSk7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbWluYyA9IF9jbGFzc2VzWzBdICsgKChfY2xhc3Nlc1sxXS1fY2xhc3Nlc1swXSkgKiAoMCArIChfc3ByZWFkICogMC41KSkpOyAgLy8gY2VudGVyIG9mIDFzdCBjbGFzc1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1heGMgPSBfY2xhc3Nlc1tuLTFdICsgKChfY2xhc3Nlc1tuXS1fY2xhc3Nlc1tuLTFdKSAqICgxIC0gKF9zcHJlYWQgKiAwLjUpKSk7ICAvLyBjZW50ZXIgb2YgbGFzdCBjbGFzc1xuICAgICAgICAvLyAgICAgICAgIHZhbCA9IF9taW4gKyAoKCgoX2NsYXNzZXNbaV0gKyAoKF9jbGFzc2VzW2krMV0gLSBfY2xhc3Nlc1tpXSkgKiAwLjUpKSAtIG1pbmMpIC8gKG1heGMtbWluYykpICogKF9tYXggLSBfbWluKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZXR1cm4gdmFsO1xuICAgICAgICAvLyB9O1xuXG4gICAgICAgIHZhciBnZXRDb2xvciA9IGZ1bmN0aW9uKHZhbCwgYnlwYXNzTWFwKSB7XG4gICAgICAgICAgICB2YXIgY29sLCB0O1xuICAgICAgICAgICAgaWYgKGJ5cGFzc01hcCA9PSBudWxsKSB7IGJ5cGFzc01hcCA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAoaXNOYU4odmFsKSB8fCAodmFsID09PSBudWxsKSkgeyByZXR1cm4gX25hY29sOyB9XG4gICAgICAgICAgICBpZiAoIWJ5cGFzc01hcCkge1xuICAgICAgICAgICAgICAgIGlmIChfY2xhc3NlcyAmJiAoX2NsYXNzZXMubGVuZ3RoID4gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBnZXRDbGFzcyh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB0ID0gYyAvIChfY2xhc3Nlcy5sZW5ndGgtMik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfbWF4ICE9PSBfbWluKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGp1c3QgaW50ZXJwb2xhdGUgYmV0d2VlbiBtaW4vbWF4XG4gICAgICAgICAgICAgICAgICAgIHQgPSAodmFsIC0gX21pbikgLyAoX21heCAtIF9taW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdCA9IHZhbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZG9tYWluIG1hcFxuICAgICAgICAgICAgdCA9IHRNYXBEb21haW4odCk7XG5cbiAgICAgICAgICAgIGlmICghYnlwYXNzTWFwKSB7XG4gICAgICAgICAgICAgICAgdCA9IHRNYXBMaWdodG5lc3ModCk7ICAvLyBsaWdodG5lc3MgY29ycmVjdGlvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX2dhbW1hICE9PSAxKSB7IHQgPSBwb3ckMyh0LCBfZ2FtbWEpOyB9XG5cbiAgICAgICAgICAgIHQgPSBfcGFkZGluZ1swXSArICh0ICogKDEgLSBfcGFkZGluZ1swXSAtIF9wYWRkaW5nWzFdKSk7XG5cbiAgICAgICAgICAgIHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCB0KSk7XG5cbiAgICAgICAgICAgIHZhciBrID0gTWF0aC5mbG9vcih0ICogMTAwMDApO1xuXG4gICAgICAgICAgICBpZiAoX3VzZUNhY2hlICYmIF9jb2xvckNhY2hlW2tdKSB7XG4gICAgICAgICAgICAgICAgY29sID0gX2NvbG9yQ2FjaGVba107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJDIoX2NvbG9ycykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9mb3IgaSBpbiBbMC4uX3Bvcy5sZW5ndGgtMV1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPF9wb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gX3Bvc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0IDw9IHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0ID49IHApICYmIChpID09PSAoX3Bvcy5sZW5ndGgtMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID4gcCAmJiB0IDwgX3Bvc1tpKzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9ICh0LXApLyhfcG9zW2krMV0tcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gY2hyb21hJDQuaW50ZXJwb2xhdGUoX2NvbG9yc1tpXSwgX2NvbG9yc1tpKzFdLCB0LCBfbW9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUkMihfY29sb3JzKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JzKHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX3VzZUNhY2hlKSB7IF9jb2xvckNhY2hlW2tdID0gY29sOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZXNldENhY2hlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX2NvbG9yQ2FjaGUgPSB7fTsgfTtcblxuICAgICAgICBzZXRDb2xvcnMoY29sb3JzKTtcblxuICAgICAgICAvLyBwdWJsaWMgaW50ZXJmYWNlXG5cbiAgICAgICAgdmFyIGYgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICB2YXIgYyA9IGNocm9tYSQ0KGdldENvbG9yKHYpKTtcbiAgICAgICAgICAgIGlmIChfb3V0ICYmIGNbX291dF0pIHsgcmV0dXJuIGNbX291dF0oKTsgfSBlbHNlIHsgcmV0dXJuIGM7IH1cbiAgICAgICAgfTtcblxuICAgICAgICBmLmNsYXNzZXMgPSBmdW5jdGlvbihjbGFzc2VzKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUkMihjbGFzc2VzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICBfY2xhc3NlcyA9IGNsYXNzZXM7XG4gICAgICAgICAgICAgICAgICAgIF9kb21haW4gPSBbY2xhc3Nlc1swXSwgY2xhc3Nlc1tjbGFzc2VzLmxlbmd0aC0xXV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBjaHJvbWEkNC5hbmFseXplKF9kb21haW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NlcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NsYXNzZXMgPSBbZC5taW4sIGQubWF4XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gY2hyb21hJDQubGltaXRzKGQsICdlJywgY2xhc3Nlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX2NsYXNzZXM7XG4gICAgICAgIH07XG5cblxuICAgICAgICBmLmRvbWFpbiA9IGZ1bmN0aW9uKGRvbWFpbikge1xuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9kb21haW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbWluID0gZG9tYWluWzBdO1xuICAgICAgICAgICAgX21heCA9IGRvbWFpbltkb21haW4ubGVuZ3RoLTFdO1xuICAgICAgICAgICAgX3BvcyA9IFtdO1xuICAgICAgICAgICAgdmFyIGsgPSBfY29sb3JzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICgoZG9tYWluLmxlbmd0aCA9PT0gaykgJiYgKF9taW4gIT09IF9tYXgpKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gQXJyYXkuZnJvbShkb21haW4pOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgICAgICAgIF9wb3MucHVzaCgoZC1fbWluKSAvIChfbWF4LV9taW4pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzxrOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX3Bvcy5wdXNoKGMvKGstMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9tYWluLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGRvbWFpbiBtYXBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRPdXQgPSBkb21haW4ubWFwKGZ1bmN0aW9uIChkLGkpIHsgcmV0dXJuIGkvKGRvbWFpbi5sZW5ndGgtMSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdEJyZWFrcyA9IGRvbWFpbi5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChkIC0gX21pbikgLyAoX21heCAtIF9taW4pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0QnJlYWtzLmV2ZXJ5KGZ1bmN0aW9uICh2YWwsIGkpIHsgcmV0dXJuIHRPdXRbaV0gPT09IHZhbDsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRNYXBEb21haW4gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0IDw9IDAgfHwgdCA+PSAxKSB7IHJldHVybiB0OyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0ID49IHRCcmVha3NbaSsxXSkgeyBpKys7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9ICh0IC0gdEJyZWFrc1tpXSkgLyAodEJyZWFrc1tpKzFdIC0gdEJyZWFrc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG91dCA9IHRPdXRbaV0gKyBmICogKHRPdXRbaSsxXSAtIHRPdXRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZG9tYWluID0gW19taW4sIF9tYXhdO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5tb2RlID0gZnVuY3Rpb24oX20pIHtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbW9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9tb2RlID0gX207XG4gICAgICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnJhbmdlID0gZnVuY3Rpb24oY29sb3JzLCBfcG9zKSB7XG4gICAgICAgICAgICBzZXRDb2xvcnMoY29sb3JzKTtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYub3V0ID0gZnVuY3Rpb24oX28pIHtcbiAgICAgICAgICAgIF9vdXQgPSBfbztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuc3ByZWFkID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3NwcmVhZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9zcHJlYWQgPSB2YWw7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmNvcnJlY3RMaWdodG5lc3MgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICBpZiAodiA9PSBudWxsKSB7IHYgPSB0cnVlOyB9XG4gICAgICAgICAgICBfY29ycmVjdExpZ2h0bmVzcyA9IHY7XG4gICAgICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgICAgICBpZiAoX2NvcnJlY3RMaWdodG5lc3MpIHtcbiAgICAgICAgICAgICAgICB0TWFwTGlnaHRuZXNzID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgTDAgPSBnZXRDb2xvcigwLCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEwxID0gZ2V0Q29sb3IoMSwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb2wgPSBMMCA+IEwxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgTF9hY3R1YWwgPSBnZXRDb2xvcih0LCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIExfaWRlYWwgPSBMMCArICgoTDEgLSBMMCkgKiB0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIExfZGlmZiA9IExfYWN0dWFsIC0gTF9pZGVhbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQwID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQxID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heF9pdGVyID0gMjA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoTWF0aC5hYnMoTF9kaWZmKSA+IDFlLTIpICYmIChtYXhfaXRlci0tID4gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9sKSB7IExfZGlmZiAqPSAtMTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChMX2RpZmYgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCArPSAodDEgLSB0KSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gKHQwIC0gdCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExfYWN0dWFsID0gZ2V0Q29sb3IodCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExfZGlmZiA9IExfYWN0dWFsIC0gTF9pZGVhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdE1hcExpZ2h0bmVzcyA9IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5wYWRkaW5nID0gZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJDIocCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBbcCxwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3BhZGRpbmcgPSBwO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3BhZGRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jb2xvcnMgPSBmdW5jdGlvbihudW1Db2xvcnMsIG91dCkge1xuICAgICAgICAgICAgLy8gSWYgbm8gYXJndW1lbnRzIGFyZSBnaXZlbiwgcmV0dXJuIHRoZSBvcmlnaW5hbCBjb2xvcnMgdGhhdCB3ZXJlIHByb3ZpZGVkXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHsgb3V0ID0gJ2hleCc7IH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfY29sb3JzLnNsaWNlKDApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bUNvbG9ycyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtmKDAuNSldO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bUNvbG9ycyA+IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZG0gPSBfZG9tYWluWzBdO1xuICAgICAgICAgICAgICAgIHZhciBkZCA9IF9kb21haW5bMV0gLSBkbTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfX3JhbmdlX18oMCwgbnVtQ29sb3JzLCBmYWxzZSkubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBmKCBkbSArICgoaS8obnVtQ29sb3JzLTEpKSAqIGRkKSApOyB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gcmV0dXJucyBhbGwgY29sb3JzIGJhc2VkIG9uIHRoZSBkZWZpbmVkIGNsYXNzZXNcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgc2FtcGxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChfY2xhc3NlcyAmJiAoX2NsYXNzZXMubGVuZ3RoID4gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDEsIGVuZCA9IF9jbGFzc2VzLmxlbmd0aCwgYXNjID0gMSA8PSBlbmQ7IGFzYyA/IGkgPCBlbmQgOiBpID4gZW5kOyBhc2MgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZXMucHVzaCgoX2NsYXNzZXNbaS0xXStfY2xhc3Nlc1tpXSkqMC41KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXMgPSBfZG9tYWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBzYW1wbGVzLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZih2KTsgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaHJvbWEkNFtvdXRdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gY1tvdXRdKCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmNhY2hlID0gZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgaWYgKGMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF91c2VDYWNoZSA9IGM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdXNlQ2FjaGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5nYW1tYSA9IGZ1bmN0aW9uKGcpIHtcbiAgICAgICAgICAgIGlmIChnICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfZ2FtbWEgPSBnO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2dhbW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYubm9kYXRhID0gZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgaWYgKGQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF9uYWNvbCA9IGNocm9tYSQ0KGQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX25hY29sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfX3JhbmdlX18obGVmdCwgcmlnaHQsIGluY2x1c2l2ZSkge1xuICAgICAgdmFyIHJhbmdlID0gW107XG4gICAgICB2YXIgYXNjZW5kaW5nID0gbGVmdCA8IHJpZ2h0O1xuICAgICAgdmFyIGVuZCA9ICFpbmNsdXNpdmUgPyByaWdodCA6IGFzY2VuZGluZyA/IHJpZ2h0ICsgMSA6IHJpZ2h0IC0gMTtcbiAgICAgIGZvciAodmFyIGkgPSBsZWZ0OyBhc2NlbmRpbmcgPyBpIDwgZW5kIDogaSA+IGVuZDsgYXNjZW5kaW5nID8gaSsrIDogaS0tKSB7XG4gICAgICAgIHJhbmdlLnB1c2goaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBpbnRlcnBvbGF0ZXMgYmV0d2VlbiBhIHNldCBvZiBjb2xvcnMgdXppbmcgYSBiZXppZXIgc3BsaW5lXG4gICAgLy9cblxuICAgIC8vIEByZXF1aXJlcyB1dGlscyBsYWJcbiAgICB2YXIgQ29sb3IkNSA9IENvbG9yXzE7XG5cbiAgICB2YXIgc2NhbGUkMSA9IHNjYWxlJDI7XG5cbiAgICAvLyBudGggcm93IG9mIHRoZSBwYXNjYWwgdHJpYW5nbGVcbiAgICB2YXIgYmlub21fcm93ID0gZnVuY3Rpb24obikge1xuICAgICAgICB2YXIgcm93ID0gWzEsIDFdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgdmFyIG5ld3JvdyA9IFsxXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDw9IHJvdy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG5ld3Jvd1tqXSA9IChyb3dbal0gfHwgMCkgKyByb3dbaiAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93ID0gbmV3cm93O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3c7XG4gICAgfTtcblxuICAgIHZhciBiZXppZXIgPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDEsIGFzc2lnbiQyO1xuXG4gICAgICAgIHZhciBJLCBsYWIwLCBsYWIxLCBsYWIyO1xuICAgICAgICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBuZXcgQ29sb3IkNShjKTsgfSk7XG4gICAgICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgKGFzc2lnbiA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubGFiKCk7IH0pLCBsYWIwID0gYXNzaWduWzBdLCBsYWIxID0gYXNzaWduWzFdKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYiA9IChbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBsYWIwW2ldICsgKHQgKiAobGFiMVtpXSAtIGxhYjBbaV0pKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkNShsYWIsICdsYWInKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgLy8gcXVhZHJhdGljIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICAoYXNzaWduJDEgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KSwgbGFiMCA9IGFzc2lnbiQxWzBdLCBsYWIxID0gYXNzaWduJDFbMV0sIGxhYjIgPSBhc3NpZ24kMVsyXSk7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gKCgxLXQpKigxLXQpICogbGFiMFtpXSkgKyAoMiAqICgxLXQpICogdCAqIGxhYjFbaV0pICsgKHQgKiB0ICogbGFiMltpXSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJDUobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIC8vIGN1YmljIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICB2YXIgbGFiMztcbiAgICAgICAgICAgIChhc3NpZ24kMiA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubGFiKCk7IH0pLCBsYWIwID0gYXNzaWduJDJbMF0sIGxhYjEgPSBhc3NpZ24kMlsxXSwgbGFiMiA9IGFzc2lnbiQyWzJdLCBsYWIzID0gYXNzaWduJDJbM10pO1xuICAgICAgICAgICAgSSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiID0gKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuICgoMS10KSooMS10KSooMS10KSAqIGxhYjBbaV0pICsgKDMgKiAoMS10KSAqICgxLXQpICogdCAqIGxhYjFbaV0pICsgKDMgKiAoMS10KSAqIHQgKiB0ICogbGFiMltpXSkgKyAodCp0KnQgKiBsYWIzW2ldKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkNShsYWIsICdsYWInKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgICAgICAvLyBnZW5lcmFsIGNhc2UgKGRlZ3JlZSBuIGJlemllcilcbiAgICAgICAgICAgIHZhciBsYWJzLCByb3csIG47XG4gICAgICAgICAgICBsYWJzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5sYWIoKTsgfSk7XG4gICAgICAgICAgICBuID0gY29sb3JzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICByb3cgPSBiaW5vbV9yb3cobik7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdSA9IDEgLSB0O1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gbGFicy5yZWR1Y2UoZnVuY3Rpb24gKHN1bSwgZWwsIGopIHsgcmV0dXJuIChzdW0gKyByb3dbal0gKiBNYXRoLnBvdyggdSwgKG4gLSBqKSApICogTWF0aC5wb3coIHQsIGogKSAqIGVsW2ldKTsgfSwgMCk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJDUobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJObyBwb2ludCBpbiBydW5uaW5nIGJlemllciB3aXRoIG9ubHkgb25lIGNvbG9yLlwiKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBJO1xuICAgIH07XG5cbiAgICB2YXIgYmV6aWVyXzEgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gICAgICAgIHZhciBmID0gYmV6aWVyKGNvbG9ycyk7XG4gICAgICAgIGYuc2NhbGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzY2FsZSQxKGYpOyB9O1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBpbnRlcnBvbGF0ZXMgYmV0d2VlbiBhIHNldCBvZiBjb2xvcnMgdXppbmcgYSBiZXppZXIgc3BsaW5lXG4gICAgICogYmxlbmQgbW9kZSBmb3JtdWxhcyB0YWtlbiBmcm9tIGh0dHA6Ly93d3cudmVudHVyZS13YXJlLmNvbS9rZXZpbi9jb2RpbmcvbGV0cy1sZWFybi1tYXRoLXBob3Rvc2hvcC1ibGVuZC1tb2Rlcy9cbiAgICAgKi9cblxuICAgIHZhciBjaHJvbWEkMyA9IGNocm9tYV8xO1xuXG4gICAgdmFyIGJsZW5kID0gZnVuY3Rpb24gKGJvdHRvbSwgdG9wLCBtb2RlKSB7XG4gICAgICAgIGlmICghYmxlbmRbbW9kZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBibGVuZCBtb2RlICcgKyBtb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxlbmRbbW9kZV0oYm90dG9tLCB0b3ApO1xuICAgIH07XG5cbiAgICB2YXIgYmxlbmRfZiA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmdW5jdGlvbiAoYm90dG9tLHRvcCkge1xuICAgICAgICAgICAgdmFyIGMwID0gY2hyb21hJDModG9wKS5yZ2IoKTtcbiAgICAgICAgICAgIHZhciBjMSA9IGNocm9tYSQzKGJvdHRvbSkucmdiKCk7XG4gICAgICAgICAgICByZXR1cm4gY2hyb21hJDMucmdiKGYoYzAsIGMxKSk7XG4gICAgICAgIH07IH07XG5cbiAgICB2YXIgZWFjaCA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmdW5jdGlvbiAoYzAsIGMxKSB7XG4gICAgICAgICAgICB2YXIgb3V0ID0gW107XG4gICAgICAgICAgICBvdXRbMF0gPSBmKGMwWzBdLCBjMVswXSk7XG4gICAgICAgICAgICBvdXRbMV0gPSBmKGMwWzFdLCBjMVsxXSk7XG4gICAgICAgICAgICBvdXRbMl0gPSBmKGMwWzJdLCBjMVsyXSk7XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9OyB9O1xuXG4gICAgdmFyIG5vcm1hbCA9IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhOyB9O1xuICAgIHZhciBtdWx0aXBseSA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEgKiBiIC8gMjU1OyB9O1xuICAgIHZhciBkYXJrZW4gPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhID4gYiA/IGIgOiBhOyB9O1xuICAgIHZhciBsaWdodGVuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYSA+IGIgPyBhIDogYjsgfTtcbiAgICB2YXIgc2NyZWVuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gMjU1ICogKDEgLSAoMS1hLzI1NSkgKiAoMS1iLzI1NSkpOyB9O1xuICAgIHZhciBvdmVybGF5ID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYiA8IDEyOCA/IDIgKiBhICogYiAvIDI1NSA6IDI1NSAqICgxIC0gMiAqICgxIC0gYSAvIDI1NSApICogKCAxIC0gYiAvIDI1NSApKTsgfTtcbiAgICB2YXIgYnVybiA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIDI1NSAqICgxIC0gKDEgLSBiIC8gMjU1KSAvIChhLzI1NSkpOyB9O1xuICAgIHZhciBkb2RnZSA9IGZ1bmN0aW9uIChhLGIpIHtcbiAgICAgICAgaWYgKGEgPT09IDI1NSkgeyByZXR1cm4gMjU1OyB9XG4gICAgICAgIGEgPSAyNTUgKiAoYiAvIDI1NSkgLyAoMSAtIGEgLyAyNTUpO1xuICAgICAgICByZXR1cm4gYSA+IDI1NSA/IDI1NSA6IGFcbiAgICB9O1xuXG4gICAgLy8gIyBhZGQgPSAoYSxiKSAtPlxuICAgIC8vICMgICAgIGlmIChhICsgYiA+IDI1NSkgdGhlbiAyNTUgZWxzZSBhICsgYlxuXG4gICAgYmxlbmQubm9ybWFsID0gYmxlbmRfZihlYWNoKG5vcm1hbCkpO1xuICAgIGJsZW5kLm11bHRpcGx5ID0gYmxlbmRfZihlYWNoKG11bHRpcGx5KSk7XG4gICAgYmxlbmQuc2NyZWVuID0gYmxlbmRfZihlYWNoKHNjcmVlbikpO1xuICAgIGJsZW5kLm92ZXJsYXkgPSBibGVuZF9mKGVhY2gob3ZlcmxheSkpO1xuICAgIGJsZW5kLmRhcmtlbiA9IGJsZW5kX2YoZWFjaChkYXJrZW4pKTtcbiAgICBibGVuZC5saWdodGVuID0gYmxlbmRfZihlYWNoKGxpZ2h0ZW4pKTtcbiAgICBibGVuZC5kb2RnZSA9IGJsZW5kX2YoZWFjaChkb2RnZSkpO1xuICAgIGJsZW5kLmJ1cm4gPSBibGVuZF9mKGVhY2goYnVybikpO1xuICAgIC8vIGJsZW5kLmFkZCA9IGJsZW5kX2YoZWFjaChhZGQpKTtcblxuICAgIHZhciBibGVuZF8xID0gYmxlbmQ7XG5cbiAgICAvLyBjdWJlaGVsaXggaW50ZXJwb2xhdGlvblxuICAgIC8vIGJhc2VkIG9uIEQuQS4gR3JlZW4gXCJBIGNvbG91ciBzY2hlbWUgZm9yIHRoZSBkaXNwbGF5IG9mIGFzdHJvbm9taWNhbCBpbnRlbnNpdHkgaW1hZ2VzXCJcbiAgICAvLyBodHRwOi8vYXN0cm9uLXNvYy5pbi9idWxsZXRpbi8xMUp1bmUvMjg5MzkyMDExLnBkZlxuXG4gICAgdmFyIHR5cGUkMSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNsaXBfcmdiID0gdXRpbHMuY2xpcF9yZ2I7XG4gICAgdmFyIFRXT1BJID0gdXRpbHMuVFdPUEk7XG4gICAgdmFyIHBvdyQyID0gTWF0aC5wb3c7XG4gICAgdmFyIHNpbiQxID0gTWF0aC5zaW47XG4gICAgdmFyIGNvcyQxID0gTWF0aC5jb3M7XG4gICAgdmFyIGNocm9tYSQyID0gY2hyb21hXzE7XG5cbiAgICB2YXIgY3ViZWhlbGl4ID0gZnVuY3Rpb24oc3RhcnQsIHJvdGF0aW9ucywgaHVlLCBnYW1tYSwgbGlnaHRuZXNzKSB7XG4gICAgICAgIGlmICggc3RhcnQgPT09IHZvaWQgMCApIHN0YXJ0PTMwMDtcbiAgICAgICAgaWYgKCByb3RhdGlvbnMgPT09IHZvaWQgMCApIHJvdGF0aW9ucz0tMS41O1xuICAgICAgICBpZiAoIGh1ZSA9PT0gdm9pZCAwICkgaHVlPTE7XG4gICAgICAgIGlmICggZ2FtbWEgPT09IHZvaWQgMCApIGdhbW1hPTE7XG4gICAgICAgIGlmICggbGlnaHRuZXNzID09PSB2b2lkIDAgKSBsaWdodG5lc3M9WzAsMV07XG5cbiAgICAgICAgdmFyIGRoID0gMCwgZGw7XG4gICAgICAgIGlmICh0eXBlJDEobGlnaHRuZXNzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgZGwgPSBsaWdodG5lc3NbMV0gLSBsaWdodG5lc3NbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkbCA9IDA7XG4gICAgICAgICAgICBsaWdodG5lc3MgPSBbbGlnaHRuZXNzLCBsaWdodG5lc3NdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGYgPSBmdW5jdGlvbihmcmFjdCkge1xuICAgICAgICAgICAgdmFyIGEgPSBUV09QSSAqICgoKHN0YXJ0KzEyMCkvMzYwKSArIChyb3RhdGlvbnMgKiBmcmFjdCkpO1xuICAgICAgICAgICAgdmFyIGwgPSBwb3ckMihsaWdodG5lc3NbMF0gKyAoZGwgKiBmcmFjdCksIGdhbW1hKTtcbiAgICAgICAgICAgIHZhciBoID0gZGggIT09IDAgPyBodWVbMF0gKyAoZnJhY3QgKiBkaCkgOiBodWU7XG4gICAgICAgICAgICB2YXIgYW1wID0gKGggKiBsICogKDEtbCkpIC8gMjtcbiAgICAgICAgICAgIHZhciBjb3NfYSA9IGNvcyQxKGEpO1xuICAgICAgICAgICAgdmFyIHNpbl9hID0gc2luJDEoYSk7XG4gICAgICAgICAgICB2YXIgciA9IGwgKyAoYW1wICogKCgtMC4xNDg2MSAqIGNvc19hKSArICgxLjc4Mjc3KiBzaW5fYSkpKTtcbiAgICAgICAgICAgIHZhciBnID0gbCArIChhbXAgKiAoKC0wLjI5MjI3ICogY29zX2EpIC0gKDAuOTA2NDkqIHNpbl9hKSkpO1xuICAgICAgICAgICAgdmFyIGIgPSBsICsgKGFtcCAqICgrMS45NzI5NCAqIGNvc19hKSk7XG4gICAgICAgICAgICByZXR1cm4gY2hyb21hJDIoY2xpcF9yZ2IoW3IqMjU1LGcqMjU1LGIqMjU1LDFdKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5zdGFydCA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIGlmICgocyA9PSBudWxsKSkgeyByZXR1cm4gc3RhcnQ7IH1cbiAgICAgICAgICAgIHN0YXJ0ID0gcztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYucm90YXRpb25zID0gZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgaWYgKChyID09IG51bGwpKSB7IHJldHVybiByb3RhdGlvbnM7IH1cbiAgICAgICAgICAgIHJvdGF0aW9ucyA9IHI7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmdhbW1hID0gZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgaWYgKChnID09IG51bGwpKSB7IHJldHVybiBnYW1tYTsgfVxuICAgICAgICAgICAgZ2FtbWEgPSBnO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5odWUgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICBpZiAoKGggPT0gbnVsbCkpIHsgcmV0dXJuIGh1ZTsgfVxuICAgICAgICAgICAgaHVlID0gaDtcbiAgICAgICAgICAgIGlmICh0eXBlJDEoaHVlKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGRoID0gaHVlWzFdIC0gaHVlWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkaCA9PT0gMCkgeyBodWUgPSBodWVbMV07IH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5saWdodG5lc3MgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICBpZiAoKGggPT0gbnVsbCkpIHsgcmV0dXJuIGxpZ2h0bmVzczsgfVxuICAgICAgICAgICAgaWYgKHR5cGUkMShoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGxpZ2h0bmVzcyA9IGg7XG4gICAgICAgICAgICAgICAgZGwgPSBoWzFdIC0gaFswXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlnaHRuZXNzID0gW2gsaF07XG4gICAgICAgICAgICAgICAgZGwgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5zY2FsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNocm9tYSQyLnNjYWxlKGYpOyB9O1xuXG4gICAgICAgIGYuaHVlKGh1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciQ0ID0gQ29sb3JfMTtcbiAgICB2YXIgZGlnaXRzID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gICAgdmFyIGZsb29yJDEgPSBNYXRoLmZsb29yO1xuICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbTtcblxuICAgIHZhciByYW5kb21fMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvZGUgPSAnIyc7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTw2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgKz0gZGlnaXRzLmNoYXJBdChmbG9vciQxKHJhbmRvbSgpICogMTYpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENvbG9yJDQoY29kZSwgJ2hleCcpO1xuICAgIH07XG5cbiAgICB2YXIgdHlwZSA9IHR5cGUkcDtcbiAgICB2YXIgbG9nID0gTWF0aC5sb2c7XG4gICAgdmFyIHBvdyQxID0gTWF0aC5wb3c7XG4gICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgYWJzJDEgPSBNYXRoLmFicztcblxuXG4gICAgdmFyIGFuYWx5emUgPSBmdW5jdGlvbiAoZGF0YSwga2V5KSB7XG4gICAgICAgIGlmICgga2V5ID09PSB2b2lkIDAgKSBrZXk9bnVsbDtcblxuICAgICAgICB2YXIgciA9IHtcbiAgICAgICAgICAgIG1pbjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9WQUxVRSotMSxcbiAgICAgICAgICAgIHN1bTogMCxcbiAgICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgICAgICBjb3VudDogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZShkYXRhKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGRhdGEgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICYmIHR5cGUodmFsKSA9PT0gJ29iamVjdCcpIHsgdmFsID0gdmFsW2tleV07IH1cbiAgICAgICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgIWlzTmFOKHZhbCkpIHtcbiAgICAgICAgICAgICAgICByLnZhbHVlcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgci5zdW0gKz0gdmFsO1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPCByLm1pbikgeyByLm1pbiA9IHZhbDsgfVxuICAgICAgICAgICAgICAgIGlmICh2YWwgPiByLm1heCkgeyByLm1heCA9IHZhbDsgfVxuICAgICAgICAgICAgICAgIHIuY291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgci5kb21haW4gPSBbci5taW4sIHIubWF4XTtcblxuICAgICAgICByLmxpbWl0cyA9IGZ1bmN0aW9uIChtb2RlLCBudW0pIHsgcmV0dXJuIGxpbWl0cyhyLCBtb2RlLCBudW0pOyB9O1xuXG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG5cblxuICAgIHZhciBsaW1pdHMgPSBmdW5jdGlvbiAoZGF0YSwgbW9kZSwgbnVtKSB7XG4gICAgICAgIGlmICggbW9kZSA9PT0gdm9pZCAwICkgbW9kZT0nZXF1YWwnO1xuICAgICAgICBpZiAoIG51bSA9PT0gdm9pZCAwICkgbnVtPTc7XG5cbiAgICAgICAgaWYgKHR5cGUoZGF0YSkgPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgZGF0YSA9IGFuYWx5emUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pbiA9IGRhdGEubWluO1xuICAgICAgICB2YXIgbWF4ID0gZGF0YS5tYXg7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBkYXRhLnZhbHVlcy5zb3J0KGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEtYjsgfSk7XG5cbiAgICAgICAgaWYgKG51bSA9PT0gMSkgeyByZXR1cm4gW21pbixtYXhdOyB9XG5cbiAgICAgICAgdmFyIGxpbWl0cyA9IFtdO1xuXG4gICAgICAgIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnYycpIHsgLy8gY29udGludW91c1xuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ2UnKSB7IC8vIGVxdWFsIGludGVydmFsXG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0xOyBpPG51bTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKygoaS9udW0pKihtYXgtbWluKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdsJykgeyAvLyBsb2cgc2NhbGVcbiAgICAgICAgICAgIGlmIChtaW4gPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTG9nYXJpdGhtaWMgc2NhbGVzIGFyZSBvbmx5IHBvc3NpYmxlIGZvciB2YWx1ZXMgPiAwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWluX2xvZyA9IE1hdGguTE9HMTBFICogbG9nKG1pbik7XG4gICAgICAgICAgICB2YXIgbWF4X2xvZyA9IE1hdGguTE9HMTBFICogbG9nKG1heCk7XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQxPTE7IGkkMTxudW07IGkkMSsrKSB7XG4gICAgICAgICAgICAgICAgbGltaXRzLnB1c2gocG93JDEoMTAsIG1pbl9sb2cgKyAoKGkkMS9udW0pICogKG1heF9sb2cgLSBtaW5fbG9nKSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAncScpIHsgLy8gcXVhbnRpbGUgc2NhbGVcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDI9MTsgaSQyPG51bTsgaSQyKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9ICgodmFsdWVzLmxlbmd0aC0xKSAqIGkkMikvbnVtO1xuICAgICAgICAgICAgICAgIHZhciBwYiA9IGZsb29yKHApO1xuICAgICAgICAgICAgICAgIGlmIChwYiA9PT0gcCkge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCh2YWx1ZXNbcGJdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBwID4gcGJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByID0gcCAtIHBiO1xuICAgICAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCgodmFsdWVzW3BiXSooMS1wcikpICsgKHZhbHVlc1twYisxXSpwcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdrJykgeyAvLyBrLW1lYW5zIGNsdXN0ZXJpbmdcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBpbXBsZW1lbnRhdGlvbiBiYXNlZCBvblxuICAgICAgICAgICAgaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2ZpZ3VlL3NvdXJjZS9icm93c2UvdHJ1bmsvZmlndWUuanMjMzM2XG4gICAgICAgICAgICBzaW1wbGlmaWVkIGZvciAxLWQgaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIGNsdXN0ZXI7XG4gICAgICAgICAgICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgYXNzaWdubWVudHMgPSBuZXcgQXJyYXkobik7XG4gICAgICAgICAgICB2YXIgY2x1c3RlclNpemVzID0gbmV3IEFycmF5KG51bSk7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBuYl9pdGVycyA9IDA7XG4gICAgICAgICAgICB2YXIgY2VudHJvaWRzID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gZ2V0IHNlZWQgdmFsdWVzXG4gICAgICAgICAgICBjZW50cm9pZHMgPSBbXTtcbiAgICAgICAgICAgIGNlbnRyb2lkcy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDM9MTsgaSQzPG51bTsgaSQzKyspIHtcbiAgICAgICAgICAgICAgICBjZW50cm9pZHMucHVzaChtaW4gKyAoKGkkMy9udW0pICogKG1heC1taW4pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZW50cm9pZHMucHVzaChtYXgpO1xuXG4gICAgICAgICAgICB3aGlsZSAocmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudCBzdGVwXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPG51bTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXJTaXplc1tqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkkND0wOyBpJDQ8bjsgaSQ0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2kkNF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW5kaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJlc3QgPSAodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiQxPTA7IGokMTxudW07IGokMSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdCA9IGFicyQxKGNlbnRyb2lkc1tqJDFdLXZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgbWluZGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmRpc3QgPSBkaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3QgPSBqJDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHVzdGVyU2l6ZXNbYmVzdF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzW2kkNF0gPSBiZXN0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGNlbnRyb2lkcyBzdGVwXG4gICAgICAgICAgICAgICAgdmFyIG5ld0NlbnRyb2lkcyA9IG5ldyBBcnJheShudW0pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGokMj0wOyBqJDI8bnVtOyBqJDIrKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbaiQyXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkkNT0wOyBpJDU8bjsgaSQ1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlciA9IGFzc2lnbm1lbnRzW2kkNV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdDZW50cm9pZHNbY2x1c3Rlcl0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tjbHVzdGVyXSA9IHZhbHVlc1tpJDVdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2NsdXN0ZXJdICs9IHZhbHVlc1tpJDVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGokMz0wOyBqJDM8bnVtOyBqJDMrKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbaiQzXSAqPSAxL2NsdXN0ZXJTaXplc1tqJDNdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGNvbnZlcmdlbmNlXG4gICAgICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiQ0PTA7IGokNDxudW07IGokNCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdDZW50cm9pZHNbaiQ0XSAhPT0gY2VudHJvaWRzW2okNF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbnRyb2lkcyA9IG5ld0NlbnRyb2lkcztcbiAgICAgICAgICAgICAgICBuYl9pdGVycysrO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5iX2l0ZXJzID4gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZmluaXNoZWQgay1tZWFucyBjbHVzdGVyaW5nXG4gICAgICAgICAgICAvLyB0aGUgbmV4dCBwYXJ0IGlzIGJvcnJvd2VkIGZyb20gZ2FicmllbGZsb3IuaXRcbiAgICAgICAgICAgIHZhciBrQ2x1c3RlcnMgPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGokNT0wOyBqJDU8bnVtOyBqJDUrKykge1xuICAgICAgICAgICAgICAgIGtDbHVzdGVyc1tqJDVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpJDY9MDsgaSQ2PG47IGkkNisrKSB7XG4gICAgICAgICAgICAgICAgY2x1c3RlciA9IGFzc2lnbm1lbnRzW2kkNl07XG4gICAgICAgICAgICAgICAga0NsdXN0ZXJzW2NsdXN0ZXJdLnB1c2godmFsdWVzW2kkNl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRtcEtNZWFuc0JyZWFrcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiQ2PTA7IGokNjxudW07IGokNisrKSB7XG4gICAgICAgICAgICAgICAgdG1wS01lYW5zQnJlYWtzLnB1c2goa0NsdXN0ZXJzW2okNl1bMF0pO1xuICAgICAgICAgICAgICAgIHRtcEtNZWFuc0JyZWFrcy5wdXNoKGtDbHVzdGVyc1tqJDZdW2tDbHVzdGVyc1tqJDZdLmxlbmd0aC0xXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0bXBLTWVhbnNCcmVha3MgPSB0bXBLTWVhbnNCcmVha3Muc29ydChmdW5jdGlvbiAoYSxiKXsgcmV0dXJuIGEtYjsgfSk7XG4gICAgICAgICAgICBsaW1pdHMucHVzaCh0bXBLTWVhbnNCcmVha3NbMF0pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQ3PTE7IGkkNyA8IHRtcEtNZWFuc0JyZWFrcy5sZW5ndGg7IGkkNys9IDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRtcEtNZWFuc0JyZWFrc1tpJDddO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odikgJiYgKGxpbWl0cy5pbmRleE9mKHYpID09PSAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzLnB1c2godik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW1pdHM7XG4gICAgfTtcblxuICAgIHZhciBhbmFseXplXzEgPSB7YW5hbHl6ZTogYW5hbHl6ZSwgbGltaXRzOiBsaW1pdHN9O1xuXG4gICAgdmFyIENvbG9yJDMgPSBDb2xvcl8xO1xuXG5cbiAgICB2YXIgY29udHJhc3QgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAvLyBXQ0FHIGNvbnRyYXN0IHJhdGlvXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI2NvbnRyYXN0LXJhdGlvZGVmXG4gICAgICAgIGEgPSBuZXcgQ29sb3IkMyhhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvciQzKGIpO1xuICAgICAgICB2YXIgbDEgPSBhLmx1bWluYW5jZSgpO1xuICAgICAgICB2YXIgbDIgPSBiLmx1bWluYW5jZSgpO1xuICAgICAgICByZXR1cm4gbDEgPiBsMiA/IChsMSArIDAuMDUpIC8gKGwyICsgMC4wNSkgOiAobDIgKyAwLjA1KSAvIChsMSArIDAuMDUpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkMiA9IENvbG9yXzE7XG4gICAgdmFyIHNxcnQgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIHBvdyA9IE1hdGgucG93O1xuICAgIHZhciBtaW4gPSBNYXRoLm1pbjtcbiAgICB2YXIgbWF4ID0gTWF0aC5tYXg7XG4gICAgdmFyIGF0YW4yID0gTWF0aC5hdGFuMjtcbiAgICB2YXIgYWJzID0gTWF0aC5hYnM7XG4gICAgdmFyIGNvcyA9IE1hdGguY29zO1xuICAgIHZhciBzaW4gPSBNYXRoLnNpbjtcbiAgICB2YXIgZXhwID0gTWF0aC5leHA7XG4gICAgdmFyIFBJID0gTWF0aC5QSTtcblxuICAgIHZhciBkZWx0YUUgPSBmdW5jdGlvbihhLCBiLCBLbCwgS2MsIEtoKSB7XG4gICAgICAgIGlmICggS2wgPT09IHZvaWQgMCApIEtsPTE7XG4gICAgICAgIGlmICggS2MgPT09IHZvaWQgMCApIEtjPTE7XG4gICAgICAgIGlmICggS2ggPT09IHZvaWQgMCApIEtoPTE7XG5cbiAgICAgICAgLy8gRGVsdGEgRSAoQ0lFIDIwMDApXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LmJydWNlbGluZGJsb29tLmNvbS9pbmRleC5odG1sP0Vxbl9EZWx0YUVfQ0lFMjAwMC5odG1sXG4gICAgICAgIHZhciByYWQyZGVnID0gZnVuY3Rpb24ocmFkKSB7XG4gICAgICAgICAgICByZXR1cm4gMzYwICogcmFkIC8gKDIgKiBQSSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBkZWcycmFkID0gZnVuY3Rpb24oZGVnKSB7XG4gICAgICAgICAgICByZXR1cm4gKDIgKiBQSSAqIGRlZykgLyAzNjA7XG4gICAgICAgIH07XG4gICAgICAgIGEgPSBuZXcgQ29sb3IkMihhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvciQyKGIpO1xuICAgICAgICB2YXIgcmVmID0gQXJyYXkuZnJvbShhLmxhYigpKTtcbiAgICAgICAgdmFyIEwxID0gcmVmWzBdO1xuICAgICAgICB2YXIgYTEgPSByZWZbMV07XG4gICAgICAgIHZhciBiMSA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gQXJyYXkuZnJvbShiLmxhYigpKTtcbiAgICAgICAgdmFyIEwyID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBhMiA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYjIgPSByZWYkMVsyXTtcbiAgICAgICAgdmFyIGF2Z0wgPSAoTDEgKyBMMikvMjtcbiAgICAgICAgdmFyIEMxID0gc3FydChwb3coYTEsIDIpICsgcG93KGIxLCAyKSk7XG4gICAgICAgIHZhciBDMiA9IHNxcnQocG93KGEyLCAyKSArIHBvdyhiMiwgMikpO1xuICAgICAgICB2YXIgYXZnQyA9IChDMSArIEMyKS8yO1xuICAgICAgICB2YXIgRyA9IDAuNSooMS1zcXJ0KHBvdyhhdmdDLCA3KS8ocG93KGF2Z0MsIDcpICsgcG93KDI1LCA3KSkpKTtcbiAgICAgICAgdmFyIGExcCA9IGExKigxK0cpO1xuICAgICAgICB2YXIgYTJwID0gYTIqKDErRyk7XG4gICAgICAgIHZhciBDMXAgPSBzcXJ0KHBvdyhhMXAsIDIpICsgcG93KGIxLCAyKSk7XG4gICAgICAgIHZhciBDMnAgPSBzcXJ0KHBvdyhhMnAsIDIpICsgcG93KGIyLCAyKSk7XG4gICAgICAgIHZhciBhdmdDcCA9IChDMXAgKyBDMnApLzI7XG4gICAgICAgIHZhciBhcmN0YW4xID0gcmFkMmRlZyhhdGFuMihiMSwgYTFwKSk7XG4gICAgICAgIHZhciBhcmN0YW4yID0gcmFkMmRlZyhhdGFuMihiMiwgYTJwKSk7XG4gICAgICAgIHZhciBoMXAgPSBhcmN0YW4xID49IDAgPyBhcmN0YW4xIDogYXJjdGFuMSArIDM2MDtcbiAgICAgICAgdmFyIGgycCA9IGFyY3RhbjIgPj0gMCA/IGFyY3RhbjIgOiBhcmN0YW4yICsgMzYwO1xuICAgICAgICB2YXIgYXZnSHAgPSBhYnMoaDFwIC0gaDJwKSA+IDE4MCA/IChoMXAgKyBoMnAgKyAzNjApLzIgOiAoaDFwICsgaDJwKS8yO1xuICAgICAgICB2YXIgVCA9IDEgLSAwLjE3KmNvcyhkZWcycmFkKGF2Z0hwIC0gMzApKSArIDAuMjQqY29zKGRlZzJyYWQoMiphdmdIcCkpICsgMC4zMipjb3MoZGVnMnJhZCgzKmF2Z0hwICsgNikpIC0gMC4yKmNvcyhkZWcycmFkKDQqYXZnSHAgLSA2MykpO1xuICAgICAgICB2YXIgZGVsdGFIcCA9IGgycCAtIGgxcDtcbiAgICAgICAgZGVsdGFIcCA9IGFicyhkZWx0YUhwKSA8PSAxODAgPyBkZWx0YUhwIDogaDJwIDw9IGgxcCA/IGRlbHRhSHAgKyAzNjAgOiBkZWx0YUhwIC0gMzYwO1xuICAgICAgICBkZWx0YUhwID0gMipzcXJ0KEMxcCpDMnApKnNpbihkZWcycmFkKGRlbHRhSHApLzIpO1xuICAgICAgICB2YXIgZGVsdGFMID0gTDIgLSBMMTtcbiAgICAgICAgdmFyIGRlbHRhQ3AgPSBDMnAgLSBDMXA7ICAgIFxuICAgICAgICB2YXIgc2wgPSAxICsgKDAuMDE1KnBvdyhhdmdMIC0gNTAsIDIpKS9zcXJ0KDIwICsgcG93KGF2Z0wgLSA1MCwgMikpO1xuICAgICAgICB2YXIgc2MgPSAxICsgMC4wNDUqYXZnQ3A7XG4gICAgICAgIHZhciBzaCA9IDEgKyAwLjAxNSphdmdDcCpUO1xuICAgICAgICB2YXIgZGVsdGFUaGV0YSA9IDMwKmV4cCgtcG93KChhdmdIcCAtIDI3NSkvMjUsIDIpKTtcbiAgICAgICAgdmFyIFJjID0gMipzcXJ0KHBvdyhhdmdDcCwgNykvKHBvdyhhdmdDcCwgNykgKyBwb3coMjUsIDcpKSk7XG4gICAgICAgIHZhciBSdCA9IC1SYypzaW4oMipkZWcycmFkKGRlbHRhVGhldGEpKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHNxcnQocG93KGRlbHRhTC8oS2wqc2wpLCAyKSArIHBvdyhkZWx0YUNwLyhLYypzYyksIDIpICsgcG93KGRlbHRhSHAvKEtoKnNoKSwgMikgKyBSdCooZGVsdGFDcC8oS2Mqc2MpKSooZGVsdGFIcC8oS2gqc2gpKSk7XG4gICAgICAgIHJldHVybiBtYXgoMCwgbWluKDEwMCwgcmVzdWx0KSk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciQxID0gQ29sb3JfMTtcblxuICAgIC8vIHNpbXBsZSBFdWNsaWRlYW4gZGlzdGFuY2VcbiAgICB2YXIgZGlzdGFuY2UgPSBmdW5jdGlvbihhLCBiLCBtb2RlKSB7XG4gICAgICAgIGlmICggbW9kZSA9PT0gdm9pZCAwICkgbW9kZT0nbGFiJztcblxuICAgICAgICAvLyBEZWx0YSBFIChDSUUgMTk3NilcbiAgICAgICAgLy8gc2VlIGh0dHA6Ly93d3cuYnJ1Y2VsaW5kYmxvb20uY29tL2luZGV4Lmh0bWw/RXF1YXRpb25zLmh0bWxcbiAgICAgICAgYSA9IG5ldyBDb2xvciQxKGEpO1xuICAgICAgICBiID0gbmV3IENvbG9yJDEoYik7XG4gICAgICAgIHZhciBsMSA9IGEuZ2V0KG1vZGUpO1xuICAgICAgICB2YXIgbDIgPSBiLmdldChtb2RlKTtcbiAgICAgICAgdmFyIHN1bV9zcSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgaW4gbDEpIHtcbiAgICAgICAgICAgIHZhciBkID0gKGwxW2ldIHx8IDApIC0gKGwyW2ldIHx8IDApO1xuICAgICAgICAgICAgc3VtX3NxICs9IGQqZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bV9zcSk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciA9IENvbG9yXzE7XG5cbiAgICB2YXIgdmFsaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MpICkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBzb21lIHByZS1kZWZpbmVkIGNvbG9yIHNjYWxlczpcbiAgICB2YXIgY2hyb21hJDEgPSBjaHJvbWFfMTtcblxuICAgIHZhciBzY2FsZSA9IHNjYWxlJDI7XG5cbiAgICB2YXIgc2NhbGVzID0ge1xuICAgIFx0Y29vbDogZnVuY3Rpb24gY29vbCgpIHsgcmV0dXJuIHNjYWxlKFtjaHJvbWEkMS5oc2woMTgwLDEsLjkpLCBjaHJvbWEkMS5oc2woMjUwLC43LC40KV0pIH0sXG4gICAgXHRob3Q6IGZ1bmN0aW9uIGhvdCgpIHsgcmV0dXJuIHNjYWxlKFsnIzAwMCcsJyNmMDAnLCcjZmYwJywnI2ZmZiddKS5tb2RlKCdyZ2InKSB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAgICBDb2xvckJyZXdlciBjb2xvcnMgZm9yIGNocm9tYS5qc1xuXG4gICAgICAgIENvcHlyaWdodCAoYykgMjAwMiBDeW50aGlhIEJyZXdlciwgTWFyayBIYXJyb3dlciwgYW5kIFRoZVxuICAgICAgICBQZW5uc3lsdmFuaWEgU3RhdGUgVW5pdmVyc2l0eS5cblxuICAgICAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICAgICAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgICAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkXG4gICAgICAgIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SXG4gICAgICAgIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gICAgICAgIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gICAgKi9cblxuICAgIHZhciBjb2xvcmJyZXdlciA9IHtcbiAgICAgICAgLy8gc2VxdWVudGlhbFxuICAgICAgICBPclJkOiBbJyNmZmY3ZWMnLCAnI2ZlZThjOCcsICcjZmRkNDllJywgJyNmZGJiODQnLCAnI2ZjOGQ1OScsICcjZWY2NTQ4JywgJyNkNzMwMWYnLCAnI2IzMDAwMCcsICcjN2YwMDAwJ10sXG4gICAgICAgIFB1QnU6IFsnI2ZmZjdmYicsICcjZWNlN2YyJywgJyNkMGQxZTYnLCAnI2E2YmRkYicsICcjNzRhOWNmJywgJyMzNjkwYzAnLCAnIzA1NzBiMCcsICcjMDQ1YThkJywgJyMwMjM4NTgnXSxcbiAgICAgICAgQnVQdTogWycjZjdmY2ZkJywgJyNlMGVjZjQnLCAnI2JmZDNlNicsICcjOWViY2RhJywgJyM4Yzk2YzYnLCAnIzhjNmJiMScsICcjODg0MTlkJywgJyM4MTBmN2MnLCAnIzRkMDA0YiddLFxuICAgICAgICBPcmFuZ2VzOiBbJyNmZmY1ZWInLCAnI2ZlZTZjZScsICcjZmRkMGEyJywgJyNmZGFlNmInLCAnI2ZkOGQzYycsICcjZjE2OTEzJywgJyNkOTQ4MDEnLCAnI2E2MzYwMycsICcjN2YyNzA0J10sXG4gICAgICAgIEJ1R246IFsnI2Y3ZmNmZCcsICcjZTVmNWY5JywgJyNjY2VjZTYnLCAnIzk5ZDhjOScsICcjNjZjMmE0JywgJyM0MWFlNzYnLCAnIzIzOGI0NScsICcjMDA2ZDJjJywgJyMwMDQ0MWInXSxcbiAgICAgICAgWWxPckJyOiBbJyNmZmZmZTUnLCAnI2ZmZjdiYycsICcjZmVlMzkxJywgJyNmZWM0NGYnLCAnI2ZlOTkyOScsICcjZWM3MDE0JywgJyNjYzRjMDInLCAnIzk5MzQwNCcsICcjNjYyNTA2J10sXG4gICAgICAgIFlsR246IFsnI2ZmZmZlNScsICcjZjdmY2I5JywgJyNkOWYwYTMnLCAnI2FkZGQ4ZScsICcjNzhjNjc5JywgJyM0MWFiNWQnLCAnIzIzODQ0MycsICcjMDA2ODM3JywgJyMwMDQ1MjknXSxcbiAgICAgICAgUmVkczogWycjZmZmNWYwJywgJyNmZWUwZDInLCAnI2ZjYmJhMScsICcjZmM5MjcyJywgJyNmYjZhNGEnLCAnI2VmM2IyYycsICcjY2IxODFkJywgJyNhNTBmMTUnLCAnIzY3MDAwZCddLFxuICAgICAgICBSZFB1OiBbJyNmZmY3ZjMnLCAnI2ZkZTBkZCcsICcjZmNjNWMwJywgJyNmYTlmYjUnLCAnI2Y3NjhhMScsICcjZGQzNDk3JywgJyNhZTAxN2UnLCAnIzdhMDE3NycsICcjNDkwMDZhJ10sXG4gICAgICAgIEdyZWVuczogWycjZjdmY2Y1JywgJyNlNWY1ZTAnLCAnI2M3ZTljMCcsICcjYTFkOTliJywgJyM3NGM0NzYnLCAnIzQxYWI1ZCcsICcjMjM4YjQ1JywgJyMwMDZkMmMnLCAnIzAwNDQxYiddLFxuICAgICAgICBZbEduQnU6IFsnI2ZmZmZkOScsICcjZWRmOGIxJywgJyNjN2U5YjQnLCAnIzdmY2RiYicsICcjNDFiNmM0JywgJyMxZDkxYzAnLCAnIzIyNWVhOCcsICcjMjUzNDk0JywgJyMwODFkNTgnXSxcbiAgICAgICAgUHVycGxlczogWycjZmNmYmZkJywgJyNlZmVkZjUnLCAnI2RhZGFlYicsICcjYmNiZGRjJywgJyM5ZTlhYzgnLCAnIzgwN2RiYScsICcjNmE1MWEzJywgJyM1NDI3OGYnLCAnIzNmMDA3ZCddLFxuICAgICAgICBHbkJ1OiBbJyNmN2ZjZjAnLCAnI2UwZjNkYicsICcjY2NlYmM1JywgJyNhOGRkYjUnLCAnIzdiY2NjNCcsICcjNGViM2QzJywgJyMyYjhjYmUnLCAnIzA4NjhhYycsICcjMDg0MDgxJ10sXG4gICAgICAgIEdyZXlzOiBbJyNmZmZmZmYnLCAnI2YwZjBmMCcsICcjZDlkOWQ5JywgJyNiZGJkYmQnLCAnIzk2OTY5NicsICcjNzM3MzczJywgJyM1MjUyNTInLCAnIzI1MjUyNScsICcjMDAwMDAwJ10sXG4gICAgICAgIFlsT3JSZDogWycjZmZmZmNjJywgJyNmZmVkYTAnLCAnI2ZlZDk3NicsICcjZmViMjRjJywgJyNmZDhkM2MnLCAnI2ZjNGUyYScsICcjZTMxYTFjJywgJyNiZDAwMjYnLCAnIzgwMDAyNiddLFxuICAgICAgICBQdVJkOiBbJyNmN2Y0ZjknLCAnI2U3ZTFlZicsICcjZDRiOWRhJywgJyNjOTk0YzcnLCAnI2RmNjViMCcsICcjZTcyOThhJywgJyNjZTEyNTYnLCAnIzk4MDA0MycsICcjNjcwMDFmJ10sXG4gICAgICAgIEJsdWVzOiBbJyNmN2ZiZmYnLCAnI2RlZWJmNycsICcjYzZkYmVmJywgJyM5ZWNhZTEnLCAnIzZiYWVkNicsICcjNDI5MmM2JywgJyMyMTcxYjUnLCAnIzA4NTE5YycsICcjMDgzMDZiJ10sXG4gICAgICAgIFB1QnVHbjogWycjZmZmN2ZiJywgJyNlY2UyZjAnLCAnI2QwZDFlNicsICcjYTZiZGRiJywgJyM2N2E5Y2YnLCAnIzM2OTBjMCcsICcjMDI4MThhJywgJyMwMTZjNTknLCAnIzAxNDYzNiddLFxuICAgICAgICBWaXJpZGlzOiBbJyM0NDAxNTQnLCAnIzQ4Mjc3NycsICcjM2Y0YThhJywgJyMzMTY3OGUnLCAnIzI2ODM4ZicsICcjMWY5ZDhhJywgJyM2Y2NlNWEnLCAnI2I2ZGUyYicsICcjZmVlODI1J10sXG5cbiAgICAgICAgLy8gZGl2ZXJnaW5nXG5cbiAgICAgICAgU3BlY3RyYWw6IFsnIzllMDE0MicsICcjZDUzZTRmJywgJyNmNDZkNDMnLCAnI2ZkYWU2MScsICcjZmVlMDhiJywgJyNmZmZmYmYnLCAnI2U2ZjU5OCcsICcjYWJkZGE0JywgJyM2NmMyYTUnLCAnIzMyODhiZCcsICcjNWU0ZmEyJ10sXG4gICAgICAgIFJkWWxHbjogWycjYTUwMDI2JywgJyNkNzMwMjcnLCAnI2Y0NmQ0MycsICcjZmRhZTYxJywgJyNmZWUwOGInLCAnI2ZmZmZiZicsICcjZDllZjhiJywgJyNhNmQ5NmEnLCAnIzY2YmQ2MycsICcjMWE5ODUwJywgJyMwMDY4MzcnXSxcbiAgICAgICAgUmRCdTogWycjNjcwMDFmJywgJyNiMjE4MmInLCAnI2Q2NjA0ZCcsICcjZjRhNTgyJywgJyNmZGRiYzcnLCAnI2Y3ZjdmNycsICcjZDFlNWYwJywgJyM5MmM1ZGUnLCAnIzQzOTNjMycsICcjMjE2NmFjJywgJyMwNTMwNjEnXSxcbiAgICAgICAgUGlZRzogWycjOGUwMTUyJywgJyNjNTFiN2QnLCAnI2RlNzdhZScsICcjZjFiNmRhJywgJyNmZGUwZWYnLCAnI2Y3ZjdmNycsICcjZTZmNWQwJywgJyNiOGUxODYnLCAnIzdmYmM0MScsICcjNGQ5MjIxJywgJyMyNzY0MTknXSxcbiAgICAgICAgUFJHbjogWycjNDAwMDRiJywgJyM3NjJhODMnLCAnIzk5NzBhYicsICcjYzJhNWNmJywgJyNlN2Q0ZTgnLCAnI2Y3ZjdmNycsICcjZDlmMGQzJywgJyNhNmRiYTAnLCAnIzVhYWU2MScsICcjMWI3ODM3JywgJyMwMDQ0MWInXSxcbiAgICAgICAgUmRZbEJ1OiBbJyNhNTAwMjYnLCAnI2Q3MzAyNycsICcjZjQ2ZDQzJywgJyNmZGFlNjEnLCAnI2ZlZTA5MCcsICcjZmZmZmJmJywgJyNlMGYzZjgnLCAnI2FiZDllOScsICcjNzRhZGQxJywgJyM0NTc1YjQnLCAnIzMxMzY5NSddLFxuICAgICAgICBCckJHOiBbJyM1NDMwMDUnLCAnIzhjNTEwYScsICcjYmY4MTJkJywgJyNkZmMyN2QnLCAnI2Y2ZThjMycsICcjZjVmNWY1JywgJyNjN2VhZTUnLCAnIzgwY2RjMScsICcjMzU5NzhmJywgJyMwMTY2NWUnLCAnIzAwM2MzMCddLFxuICAgICAgICBSZEd5OiBbJyM2NzAwMWYnLCAnI2IyMTgyYicsICcjZDY2MDRkJywgJyNmNGE1ODInLCAnI2ZkZGJjNycsICcjZmZmZmZmJywgJyNlMGUwZTAnLCAnI2JhYmFiYScsICcjODc4Nzg3JywgJyM0ZDRkNGQnLCAnIzFhMWExYSddLFxuICAgICAgICBQdU9yOiBbJyM3ZjNiMDgnLCAnI2IzNTgwNicsICcjZTA4MjE0JywgJyNmZGI4NjMnLCAnI2ZlZTBiNicsICcjZjdmN2Y3JywgJyNkOGRhZWInLCAnI2IyYWJkMicsICcjODA3M2FjJywgJyM1NDI3ODgnLCAnIzJkMDA0YiddLFxuXG4gICAgICAgIC8vIHF1YWxpdGF0aXZlXG5cbiAgICAgICAgU2V0MjogWycjNjZjMmE1JywgJyNmYzhkNjInLCAnIzhkYTBjYicsICcjZTc4YWMzJywgJyNhNmQ4NTQnLCAnI2ZmZDkyZicsICcjZTVjNDk0JywgJyNiM2IzYjMnXSxcbiAgICAgICAgQWNjZW50OiBbJyM3ZmM5N2YnLCAnI2JlYWVkNCcsICcjZmRjMDg2JywgJyNmZmZmOTknLCAnIzM4NmNiMCcsICcjZjAwMjdmJywgJyNiZjViMTcnLCAnIzY2NjY2NiddLFxuICAgICAgICBTZXQxOiBbJyNlNDFhMWMnLCAnIzM3N2ViOCcsICcjNGRhZjRhJywgJyM5ODRlYTMnLCAnI2ZmN2YwMCcsICcjZmZmZjMzJywgJyNhNjU2MjgnLCAnI2Y3ODFiZicsICcjOTk5OTk5J10sXG4gICAgICAgIFNldDM6IFsnIzhkZDNjNycsICcjZmZmZmIzJywgJyNiZWJhZGEnLCAnI2ZiODA3MicsICcjODBiMWQzJywgJyNmZGI0NjInLCAnI2IzZGU2OScsICcjZmNjZGU1JywgJyNkOWQ5ZDknLCAnI2JjODBiZCcsICcjY2NlYmM1JywgJyNmZmVkNmYnXSxcbiAgICAgICAgRGFyazI6IFsnIzFiOWU3NycsICcjZDk1ZjAyJywgJyM3NTcwYjMnLCAnI2U3Mjk4YScsICcjNjZhNjFlJywgJyNlNmFiMDInLCAnI2E2NzYxZCcsICcjNjY2NjY2J10sXG4gICAgICAgIFBhaXJlZDogWycjYTZjZWUzJywgJyMxZjc4YjQnLCAnI2IyZGY4YScsICcjMzNhMDJjJywgJyNmYjlhOTknLCAnI2UzMWExYycsICcjZmRiZjZmJywgJyNmZjdmMDAnLCAnI2NhYjJkNicsICcjNmEzZDlhJywgJyNmZmZmOTknLCAnI2IxNTkyOCddLFxuICAgICAgICBQYXN0ZWwyOiBbJyNiM2UyY2QnLCAnI2ZkY2RhYycsICcjY2JkNWU4JywgJyNmNGNhZTQnLCAnI2U2ZjVjOScsICcjZmZmMmFlJywgJyNmMWUyY2MnLCAnI2NjY2NjYyddLFxuICAgICAgICBQYXN0ZWwxOiBbJyNmYmI0YWUnLCAnI2IzY2RlMycsICcjY2NlYmM1JywgJyNkZWNiZTQnLCAnI2ZlZDlhNicsICcjZmZmZmNjJywgJyNlNWQ4YmQnLCAnI2ZkZGFlYycsICcjZjJmMmYyJ10sXG4gICAgfTtcblxuICAgIC8vIGFkZCBsb3dlcmNhc2UgYWxpYXNlcyBmb3IgY2FzZS1pbnNlbnNpdGl2ZSBtYXRjaGVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBPYmplY3Qua2V5cyhjb2xvcmJyZXdlcik7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBrZXkgPSBsaXN0W2ldO1xuXG4gICAgICAgIGNvbG9yYnJld2VyW2tleS50b0xvd2VyQ2FzZSgpXSA9IGNvbG9yYnJld2VyW2tleV07XG4gICAgfVxuXG4gICAgdmFyIGNvbG9yYnJld2VyXzEgPSBjb2xvcmJyZXdlcjtcblxuICAgIHZhciBjaHJvbWEgPSBjaHJvbWFfMTtcblxuICAgIC8vIGZlZWwgZnJlZSB0byBjb21tZW50IG91dCBhbnl0aGluZyB0byByb2xsdXBcbiAgICAvLyBhIHNtYWxsZXIgY2hyb21hLmpzIGJ1aWx0XG5cbiAgICAvLyBpbyAtLT4gY29udmVydCBjb2xvcnNcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLy8gb3BlcmF0b3JzIC0tPiBtb2RpZnkgZXhpc3RpbmcgQ29sb3JzXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBpbnRlcnBvbGF0b3JzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLy8gZ2VuZXJhdG9ycyAtLSA+IGNyZWF0ZSBuZXcgY29sb3JzXG4gICAgY2hyb21hLmF2ZXJhZ2UgPSBhdmVyYWdlO1xuICAgIGNocm9tYS5iZXppZXIgPSBiZXppZXJfMTtcbiAgICBjaHJvbWEuYmxlbmQgPSBibGVuZF8xO1xuICAgIGNocm9tYS5jdWJlaGVsaXggPSBjdWJlaGVsaXg7XG4gICAgY2hyb21hLm1peCA9IGNocm9tYS5pbnRlcnBvbGF0ZSA9IG1peCQxO1xuICAgIGNocm9tYS5yYW5kb20gPSByYW5kb21fMTtcbiAgICBjaHJvbWEuc2NhbGUgPSBzY2FsZSQyO1xuXG4gICAgLy8gb3RoZXIgdXRpbGl0eSBtZXRob2RzXG4gICAgY2hyb21hLmFuYWx5emUgPSBhbmFseXplXzEuYW5hbHl6ZTtcbiAgICBjaHJvbWEuY29udHJhc3QgPSBjb250cmFzdDtcbiAgICBjaHJvbWEuZGVsdGFFID0gZGVsdGFFO1xuICAgIGNocm9tYS5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGNocm9tYS5saW1pdHMgPSBhbmFseXplXzEubGltaXRzO1xuICAgIGNocm9tYS52YWxpZCA9IHZhbGlkO1xuXG4gICAgLy8gc2NhbGVcbiAgICBjaHJvbWEuc2NhbGVzID0gc2NhbGVzO1xuXG4gICAgLy8gY29sb3JzXG4gICAgY2hyb21hLmNvbG9ycyA9IHczY3gxMV8xO1xuICAgIGNocm9tYS5icmV3ZXIgPSBjb2xvcmJyZXdlcl8xO1xuXG4gICAgdmFyIGNocm9tYV9qcyA9IGNocm9tYTtcblxuICAgIHJldHVybiBjaHJvbWFfanM7XG5cbn0pKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2Jhc2VDb21wb25lbnRzLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHNrZWxldG9uIGZyb20gXCIuL3NrZWxldG9uXCI7XG5pbXBvcnQgY29sb3JIYW5kbGVyIGZyb20gXCIuL2NvbG9ySGFuZGxlci5qc1wiO1xuXG4vLyBJbml0aWFsaXplIENvbG9yc1xuY29sb3JIYW5kbGVyKCk7XG5cbi8vIEJ1aWxkIFdlYnNpdGUgU2tlbGV0b25cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50LmRpdih7aWQ6ICdjb250ZW50JywgY2hpbGRyZW46IHNrZWxldG9uIH0pKVxuXG4vLyBBZGQgTmV3IHByb2plY3QgZnVuY3Rpb25hbGl0eVxuaW1wb3J0IHByb2plY3RIYW5kbGVyIGZyb20gXCIuL3Byb2plY3RIYW5kbGVyXCI7XG5cbi8vIEFkZCBmdW5jdGlvbmFsaXR5IHRvIG5ld1Byb2plY3RCdXR0b25cbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKS5xdWVyeVNlbGVjdG9yKCcuY2xpY2thYmxlJyk7XG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxwcm9qZWN0SGFuZGxlci5hZGRUZW1wbGF0ZSk7XG5cbi8vIFN0YXJ0IHdpdGggYSB0ZW1wbGF0ZSBvbiB0aGUgcGFnZVxucHJvamVjdEhhbmRsZXIuYWRkVGVtcGxhdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=