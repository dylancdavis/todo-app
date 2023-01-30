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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Righteous';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\n}\n\n@font-face {\n    font-family: 'ABZ';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    --primary-color: #ffffff;\n    --secondary-color: #000000;\n\n    --accent1: #ffffff;\n    --accent2: #ffffff;\n    --accent3: #ffffff;\n    --accent4: #ffffff;\n\n    --accent1-light: #ffffff;\n    --accent2-light: #ffffff;\n    --accent3-light: #ffffff;\n    --accent4-light: #ffffff;\n}\n\n/* Remove Defaults */\n\nbutton {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\nli {\n    list-style: none;\n}\n\nbody {\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--primary-color);\n}\n\n.banner {\n    font-size: 96px;\n    font-family: 'Righteous';\n    padding-left: 64px;\n    border-bottom: 4px solid var(--secondary-color);  \n    background-color: var(--primary-color);\n}\n\n.banner-text {\n    color: var(--secondary-color);\n    transition: all 0.5s;\n    cursor: default;\n    text-shadow: -1px 1px var(--accent1), -2px 2px var(--accent2), -3px 3px var(--accent3), -4px 4px var(--accent4)\n}\n\n.banner-text:hover {\n    text-shadow: -2px 2px var(--accent1), -4px 4px var(--accent2), -6px 6px var(--accent3), -8px 8px var(--accent4);\n}\n\n#main-content {\n    display: flex;\n    flex: 1;\n}\n\n#sidebar {\n    width: 320px;\n    text-align: center;\n    border-right: 4px solid var(--secondary-color);\n    height: 100%;\n    padding: 32px;\n    background-color: var(--accent1-light);\n}\n\n#sidebar-title {\n    text-transform: capitalize;\n    font-size: 36px;\n    font-family: 'ABZ';\n    padding: 8px 32px;\n    border: 4px solid var(--secondary-color);\n    font-weight: bolder;\n    background-color: var(--primary-color);\n    box-shadow: -3px 3px var(--accent3), 3px -3px var(--accent4)\n}\n\n#project-container {\n    padding: 32px 64px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n}\n\n.plus-button {\n    display: flex;\n    align-items: center;\n    font-family: 'ABZ';\n    color: var(--primary-color);\n    font-weight: bolder;\n}\n\n.plus-button.new-project {\n    background-color: var(--accent1);\n    font-size: 32px;\n    border: 2px solid var(--secondary-color);\n    align-self: flex-start;\n}\n\n.new-project .display-text {\n    padding: 0px 32px;\n    text-shadow: 2px 2px var(--secondary-color);\n}\n\n.plus-button .clickable {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0px;\n    transition: all 0.05s;\n    cursor: pointer;\n}\n\n.new-project .clickable {\n    width: 56px;\n}\n\n.new-project .clickable:hover {\n    background-color: var(--secondary-color);\n}\n\n.new-project img {\n    transition: all 0.05s;\n    padding: 8px;\n    filter: invert(1) drop-shadow(2px 2px var(--secondary-color));\n    height: 56px;\n}\n\n#project-container {\n    flex: 1;\n}\n\n.project-item {\n    width: 80%;\n    font-family: 'ABZ';\n    font-size: 24px;\n    border: 4px solid var(--secondary-color);\n    transition: all 0.3s;\n}\n\n.project-item:hover {\n    box-shadow: -5px 5px var(--accent1), 5px -5px var(--accent2);\n}\n\n.project-item:nth-child(2n):hover {\n    box-shadow: -5px 5px var(--accent3), 5px -5px var(--accent4);\n}\n\n.project-item.unsaved {\n    position: relative;\n    box-shadow: none;\n}\n\n.project-item .save, .project-item .discard {\n    position: absolute;\n    left: 100%;\n    height: 64px;\n    border: 4px solid var(--secondary-color);\n    padding: 8px;\n    top: -4px;\n    background-color: lightgreen;\n    cursor: pointer;\n}\n\n.project-item .discard {\n    top: 56px;\n    background-color: lightcoral;\n}\n\n.project-item > .header {\n    border-bottom: 4px solid var(--secondary-color);\n    display: flex;\n    padding: 8px;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--secondary-color);\n    transition: all 0.5s;\n}\n\n.project-item.unsaved > .header {\n    background-color: var(--primary-color);\n}\n\n.project-item .header-left {\n    display: flex;\n    gap: 32px;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-item .project-title {\n    padding: 4px 4px 4px 16px;\n    font-size: 32px;\n    font-weight: 900;\n    color: var(--primary-color);\n}\n\n.project-item.unsaved .project-title {\n    color: var(--secondary-color);\n}\n\n.project-item .header-left input {\n    border: 2px solid var(--secondary-color);\n    color: var(--secondary-color)\n}\n\n.project-item .header-left input:focus {\n    outline: 4px solid var(--accent3)\n}\n\n.project-item .plus-button {\n    background-color: var(--secondary-color);\n    border: 2px solid var(--secondary-color);\n}\n\n.add-tags img {\n    height: 48px;\n    filter: invert(1);\n    padding: 8px;\n}\n\n.add-tags .clickable:hover {\n    background-color: var(--accent3);\n}\n\n.add-tags .display-text {\n    padding: 0px 8px;\n}\n\n.project-item > .body {\n    padding: 16px;\n    background-color: var(--accent1-light);\n    transition: background-color 0.3s;\n    overflow: hidden;\n}\n\n.project-item:nth-child(4n-2) > .body {\n    background-color: var(--accent3-light);\n}\n\n.project-item:nth-child(4n-1) > .body {\n    background-color: var(--accent2-light);\n}\n\n.project-item:nth-child(4n) > .body {\n    background-color: var(--accent4-light);\n}\n\n.project-item > .body.collapsed {\n    transition: all 0s;\n    padding: 0px 16px;\n    height: 0px;\n}\n\n.project-item.unsaved > .body {\n    background-color: var(--primary-color);\n    height: auto;\n}\n\n.task-list > .header {\n    border-bottom: 3px double var(--secondary-color);\n    margin-bottom: 8px;\n}\n\n.project-item ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 8px;\n}\n\n/* New Task Button Styling */\n\n.new-task {\n    display: flex;\n    gap: 4px;\n}\n\n.new-task input {\n    border: 0px;\n    border-bottom: 1px solid var(--secondary-color);\n    font-size: 20px;\n    background-color: inherit;\n}\n\n.new-task input::placeholder {\n    font-style: italic;\n}\n\n.new-task input:focus {\n    outline: 0px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Righteous';\n    src: url('Righteous-Regular.ttf')\n}\n\n@font-face {\n    font-family: 'ABZ';\n    src: url('ABeeZee-Regular.ttf');\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    --primary-color: #ffffff;\n    --secondary-color: #000000;\n\n    --accent1: #ffffff;\n    --accent2: #ffffff;\n    --accent3: #ffffff;\n    --accent4: #ffffff;\n\n    --accent1-light: #ffffff;\n    --accent2-light: #ffffff;\n    --accent3-light: #ffffff;\n    --accent4-light: #ffffff;\n}\n\n/* Remove Defaults */\n\nbutton {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\nli {\n    list-style: none;\n}\n\nbody {\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--primary-color);\n}\n\n.banner {\n    font-size: 96px;\n    font-family: 'Righteous';\n    padding-left: 64px;\n    border-bottom: 4px solid var(--secondary-color);  \n    background-color: var(--primary-color);\n}\n\n.banner-text {\n    color: var(--secondary-color);\n    transition: all 0.5s;\n    cursor: default;\n    text-shadow: -1px 1px var(--accent1), -2px 2px var(--accent2), -3px 3px var(--accent3), -4px 4px var(--accent4)\n}\n\n.banner-text:hover {\n    text-shadow: -2px 2px var(--accent1), -4px 4px var(--accent2), -6px 6px var(--accent3), -8px 8px var(--accent4);\n}\n\n#main-content {\n    display: flex;\n    flex: 1;\n}\n\n#sidebar {\n    width: 320px;\n    text-align: center;\n    border-right: 4px solid var(--secondary-color);\n    height: 100%;\n    padding: 32px;\n    background-color: var(--accent1-light);\n}\n\n#sidebar-title {\n    text-transform: capitalize;\n    font-size: 36px;\n    font-family: 'ABZ';\n    padding: 8px 32px;\n    border: 4px solid var(--secondary-color);\n    font-weight: bolder;\n    background-color: var(--primary-color);\n    box-shadow: -3px 3px var(--accent3), 3px -3px var(--accent4)\n}\n\n#project-container {\n    padding: 32px 64px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n}\n\n.plus-button {\n    display: flex;\n    align-items: center;\n    font-family: 'ABZ';\n    color: var(--primary-color);\n    font-weight: bolder;\n}\n\n.plus-button.new-project {\n    background-color: var(--accent1);\n    font-size: 32px;\n    border: 2px solid var(--secondary-color);\n    align-self: flex-start;\n}\n\n.new-project .display-text {\n    padding: 0px 32px;\n    text-shadow: 2px 2px var(--secondary-color);\n}\n\n.plus-button .clickable {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0px;\n    transition: all 0.05s;\n    cursor: pointer;\n}\n\n.new-project .clickable {\n    width: 56px;\n}\n\n.new-project .clickable:hover {\n    background-color: var(--secondary-color);\n}\n\n.new-project img {\n    transition: all 0.05s;\n    padding: 8px;\n    filter: invert(1) drop-shadow(2px 2px var(--secondary-color));\n    height: 56px;\n}\n\n#project-container {\n    flex: 1;\n}\n\n.project-item {\n    width: 80%;\n    font-family: 'ABZ';\n    font-size: 24px;\n    border: 4px solid var(--secondary-color);\n    transition: all 0.3s;\n}\n\n.project-item:hover {\n    box-shadow: -5px 5px var(--accent1), 5px -5px var(--accent2);\n}\n\n.project-item:nth-child(2n):hover {\n    box-shadow: -5px 5px var(--accent3), 5px -5px var(--accent4);\n}\n\n.project-item.unsaved {\n    position: relative;\n    box-shadow: none;\n}\n\n.project-item .save, .project-item .discard {\n    position: absolute;\n    left: 100%;\n    height: 64px;\n    border: 4px solid var(--secondary-color);\n    padding: 8px;\n    top: -4px;\n    background-color: lightgreen;\n    cursor: pointer;\n}\n\n.project-item .discard {\n    top: 56px;\n    background-color: lightcoral;\n}\n\n.project-item > .header {\n    border-bottom: 4px solid var(--secondary-color);\n    display: flex;\n    padding: 8px;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--secondary-color);\n    transition: all 0.5s;\n}\n\n.project-item.unsaved > .header {\n    background-color: var(--primary-color);\n}\n\n.project-item .header-left {\n    display: flex;\n    gap: 32px;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-item .project-title {\n    padding: 4px 4px 4px 16px;\n    font-size: 32px;\n    font-weight: 900;\n    color: var(--primary-color);\n}\n\n.project-item.unsaved .project-title {\n    color: var(--secondary-color);\n}\n\n.project-item .header-left input {\n    border: 2px solid var(--secondary-color);\n    color: var(--secondary-color)\n}\n\n.project-item .header-left input:focus {\n    outline: 4px solid var(--accent3)\n}\n\n.project-item .plus-button {\n    background-color: var(--secondary-color);\n    border: 2px solid var(--secondary-color);\n}\n\n.add-tags img {\n    height: 48px;\n    filter: invert(1);\n    padding: 8px;\n}\n\n.add-tags .clickable:hover {\n    background-color: var(--accent3);\n}\n\n.add-tags .display-text {\n    padding: 0px 8px;\n}\n\n.project-item > .body {\n    padding: 16px;\n    background-color: var(--accent1-light);\n    transition: background-color 0.3s;\n    overflow: hidden;\n}\n\n.project-item:nth-child(4n-2) > .body {\n    background-color: var(--accent3-light);\n}\n\n.project-item:nth-child(4n-1) > .body {\n    background-color: var(--accent2-light);\n}\n\n.project-item:nth-child(4n) > .body {\n    background-color: var(--accent4-light);\n}\n\n.project-item > .body.collapsed {\n    transition: all 0s;\n    padding: 0px 16px;\n    height: 0px;\n}\n\n.project-item.unsaved > .body {\n    background-color: var(--primary-color);\n    height: auto;\n}\n\n.task-list > .header {\n    border-bottom: 3px double var(--secondary-color);\n    margin-bottom: 8px;\n}\n\n.project-item ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 8px;\n}\n\n/* New Task Button Styling */\n\n.new-task {\n    display: flex;\n    gap: 4px;\n}\n\n.new-task input {\n    border: 0px;\n    border-bottom: 1px solid var(--secondary-color);\n    font-size: 20px;\n    background-color: inherit;\n}\n\n.new-task input::placeholder {\n    font-style: italic;\n}\n\n.new-task input:focus {\n    outline: 0px;\n}"],"sourceRoot":""}]);
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
    addTemplate: () => {
        let projectArea = document.getElementById('project-container')
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

        document.querySelector('.unsaved .new-task button').addEventListener('click',addItem);
        document.querySelector('.unsaved .new-task input').addEventListener('keydown',addIfEnter);
        document.querySelector('.unsaved .discard').addEventListener('click',removeTemplate);
        document.querySelector('.unsaved .save').addEventListener('click',saveTemplate);

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

}

function removeTemplate(e) {
    e.target.parentElement.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FB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Q0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlDQUF5QztBQUN6Qyx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9ELGlCQUFpQjtBQUNyRTs7QUFFQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLDBEQUEwRDtBQUMxRCxVQUFVO0FBQ1Y7QUFDQSwwREFBMEQ7QUFDMUQsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNkJBQTZCLGlFQUFpRTtBQUM5RiwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsaUJBQWlCO0FBQ3RFOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7O1VDOS9HRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRDO0FBQ3hCO0FBQ2M7QUFDVzs7QUFFN0M7QUFDQSw0REFBWTs7QUFFWjtBQUNBLDBCQUEwQiw4REFBYSxFQUFFLHlCQUF5QixpREFBUSxFQUFFOztBQUU1RTtBQUNBLENBQThDOztBQUU5QztBQUNBO0FBQ0EsMENBQTBDLG1FQUEwQjs7QUFFcEU7QUFDQSxtRUFBMEIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nvb2xvcnMtaW8vbGliL2dlbi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jb29sb3JzLWlvL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jb29sb3JzLWlvL2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYmFzZUNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29sb3JIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3RIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3NrZWxldG9uLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlZENvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL2Nocm9tYS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzVmFsaWQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgLy8gVE9ETzog8J+UpyAgY2hlY2sgdGhhdCBpdCBpcyBhIHZhbGlkIGNvb2xvcnMgc3RyaW5nIGUuZyA2IG9yIDMgY2hhcnNcbiAgICAvLyBUT0RPOiDwn5SnIFZhbGlkYXRlIHRoYXQgZWFjaCBjaGFyIGlzIGEgdmFsaWQgaGV4IGNoYXIgKDAtNiwgYS1mKVxuICAgIGlmIChzdHIubGVuZ3RoID09PSA2KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xudmFyIGdlbiA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAvLyBUT0RPOiDwn5SnIEVuc3VyZSBhcnIgaXNuJ3QgbG9uZ2VyIHRoYW4gMTBcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyLCBpKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiDwn5SnIGhhbmRsZSBzdHJpbmdzIHRoYXQgc3RhcnQgd2l0aCAjXG4gICAgICAgICAgICAvLyBpZiBjdXJyIGNvbnRhaW5zICMgaXQgd2lsbCBiZSByZXR1cm5lZCB3aXRob3V0ICMsIG90aGVyd2lzZSBjdXJyIGlzIHNpbXBseSByZXR1cm5lZFxuICAgICAgICAgICAgdmFyIHN0ciA9IGN1cnIuc3BsaXQoJyMnKS5wb3AoKTtcbiAgICAgICAgICAgIGlmICghaXNWYWxpZChzdHIpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIgKyBcIiBpcyBub3QgYSB2YWxpZCBoZXggdmFsdWVcIik7XG4gICAgICAgICAgICBpZiAoaSA8IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBhY2MgKyBzdHIgKyBcIi1cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgYWNjICsgc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAnaHR0cHM6Ly9jb29sb3JzLmNvLycpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2VuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2VuXzEgPSByZXF1aXJlKFwiLi9nZW5cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdlbl8xLmRlZmF1bHQ7IH0gfSk7XG52YXIgcGFyc2VfMSA9IHJlcXVpcmUoXCIuL3BhcnNlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGFyc2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBhcnNlXzEuZGVmYXVsdDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKHVybCwgaGV4KSB7XG4gICAgaWYgKGhleCA9PT0gdm9pZCAwKSB7IGhleCA9IHRydWU7IH1cbiAgICAvLyBUT0RPOiDwn5SnICBDaGVjayB0aGF0IGl0IGlzIGFjdHVhbGx5IGEgY29vbG9ycyB1cmxcbiAgICB2YXIgdXJsQXJyID0gdXJsLnNwbGl0KCcvJyk7XG4gICAgdmFyIGhleEFyciA9IHVybEFyclt1cmxBcnIubGVuZ3RoIC0gMV0uc3BsaXQoJy0nKTtcbiAgICBpZiAoaGV4KSB7XG4gICAgICAgIHJldHVybiBoZXhBcnIubWFwKGZ1bmN0aW9uIChudW0pIHsgcmV0dXJuIFwiI1wiICsgbnVtOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBoZXhBcnI7XG4gICAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIlJpZ2h0ZW91cy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIkFCZWVaZWUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDAwMDA7XFxuXFxuICAgIC0tYWNjZW50MTogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQyOiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudDM6ICNmZmZmZmY7XFxuICAgIC0tYWNjZW50NDogI2ZmZmZmZjtcXG5cXG4gICAgLS1hY2NlbnQxLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudDItbGlnaHQ6ICNmZmZmZmY7XFxuICAgIC0tYWNjZW50My1saWdodDogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQ0LWxpZ2h0OiAjZmZmZmZmO1xcbn1cXG5cXG4vKiBSZW1vdmUgRGVmYXVsdHMgKi9cXG5cXG5idXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uYmFubmVyIHtcXG4gICAgZm9udC1zaXplOiA5NnB4O1xcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cyc7XFxuICAgIHBhZGRpbmctbGVmdDogNjRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5iYW5uZXItdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAxcHggdmFyKC0tYWNjZW50MSksIC0ycHggMnB4IHZhcigtLWFjY2VudDIpLCAtM3B4IDNweCB2YXIoLS1hY2NlbnQzKSwgLTRweCA0cHggdmFyKC0tYWNjZW50NClcXG59XFxuXFxuLmJhbm5lci10ZXh0OmhvdmVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IHZhcigtLWFjY2VudDEpLCAtNHB4IDRweCB2YXIoLS1hY2NlbnQyKSwgLTZweCA2cHggdmFyKC0tYWNjZW50MyksIC04cHggOHB4IHZhcigtLWFjY2VudDQpO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQxLWxpZ2h0KTtcXG59XFxuXFxuI3NpZGViYXItdGl0bGUge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIHBhZGRpbmc6IDhweCAzMnB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogLTNweCAzcHggdmFyKC0tYWNjZW50MyksIDNweCAtM3B4IHZhcigtLWFjY2VudDQpXFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDMycHggNjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4ucGx1cy1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnBsdXMtYnV0dG9uLm5ldy1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50MSk7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IC5kaXNwbGF5LXRleHQge1xcbiAgICBwYWRkaW5nOiAwcHggMzJweDtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnBsdXMtYnV0dG9uIC5jbGlja2FibGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4wNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IC5jbGlja2FibGUge1xcbiAgICB3aWR0aDogNTZweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IC5jbGlja2FibGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QgaW1nIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDVzO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpIGRyb3Atc2hhZG93KDJweCAycHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSk7XFxuICAgIGhlaWdodDogNTZweDtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IHZhcigtLWFjY2VudDEpLCA1cHggLTVweCB2YXIoLS1hY2NlbnQyKTtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpudGgtY2hpbGQoMm4pOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggdmFyKC0tYWNjZW50MyksIDVweCAtNXB4IHZhcigtLWFjY2VudDQpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLnNhdmUsIC5wcm9qZWN0LWl0ZW0gLmRpc2NhcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB0b3A6IC00cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuZGlzY2FyZCB7XFxuICAgIHRvcDogNTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IC5oZWFkZXIge1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQgPiAuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmhlYWRlci1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAucHJvamVjdC10aXRsZSB7XFxuICAgIHBhZGRpbmc6IDRweCA0cHggNHB4IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQgLnByb2plY3QtdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuaGVhZGVyLWxlZnQgaW5wdXQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKVxcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5oZWFkZXItbGVmdCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDRweCBzb2xpZCB2YXIoLS1hY2NlbnQzKVxcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5wbHVzLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5hZGQtdGFncyBpbWcge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5hZGQtdGFncyAuY2xpY2thYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Myk7XFxufVxcblxcbi5hZGQtdGFncyAuZGlzcGxheS10ZXh0IHtcXG4gICAgcGFkZGluZzogMHB4IDhweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IC5ib2R5IHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50MS1saWdodCk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpudGgtY2hpbGQoNG4tMikgPiAuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDMtbGlnaHQpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOm50aC1jaGlsZCg0bi0xKSA+IC5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Mi1saWdodCk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06bnRoLWNoaWxkKDRuKSA+IC5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50NC1saWdodCk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gPiAuYm9keS5jb2xsYXBzZWQge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xcbiAgICBoZWlnaHQ6IDBweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkID4gLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udGFzay1saXN0ID4gLmhlYWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBkb3VibGUgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLyogTmV3IFRhc2sgQnV0dG9uIFN0eWxpbmcgKi9cXG5cXG4ubmV3LXRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLm5ldy10YXNrIGlucHV0IHtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRDQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCOztJQUUxQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0lBRWxCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtBQUM1Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixlQUFlO0NBQ2Ys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O0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGtCQUFrQjtBQUN0Qjs7QUFFQSw0QkFBNEI7O0FBRTVCO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwrQ0FBK0M7SUFDL0MsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJztcXG4gICAgc3JjOiB1cmwoJ1JpZ2h0ZW91cy1SZWd1bGFyLnR0ZicpXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIHNyYzogdXJsKCdBQmVlWmVlLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDAwMDAwO1xcblxcbiAgICAtLWFjY2VudDE6ICNmZmZmZmY7XFxuICAgIC0tYWNjZW50MjogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQzOiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudDQ6ICNmZmZmZmY7XFxuXFxuICAgIC0tYWNjZW50MS1saWdodDogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQyLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudDMtbGlnaHQ6ICNmZmZmZmY7XFxuICAgIC0tYWNjZW50NC1saWdodDogI2ZmZmZmZjtcXG59XFxuXFxuLyogUmVtb3ZlIERlZmF1bHRzICovXFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmJhbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogOTZweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uYmFubmVyLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMXB4IHZhcigtLWFjY2VudDEpLCAtMnB4IDJweCB2YXIoLS1hY2NlbnQyKSwgLTNweCAzcHggdmFyKC0tYWNjZW50MyksIC00cHggNHB4IHZhcigtLWFjY2VudDQpXFxufVxcblxcbi5iYW5uZXItdGV4dDpob3ZlciB7XFxuICAgIHRleHQtc2hhZG93OiAtMnB4IDJweCB2YXIoLS1hY2NlbnQxKSwgLTRweCA0cHggdmFyKC0tYWNjZW50MiksIC02cHggNnB4IHZhcigtLWFjY2VudDMpLCAtOHB4IDhweCB2YXIoLS1hY2NlbnQ0KTtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50MS1saWdodCk7XFxufVxcblxcbiNzaWRlYmFyLXRpdGxlIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC1mYW1pbHk6ICdBQlonO1xcbiAgICBwYWRkaW5nOiA4cHggMzJweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggM3B4IHZhcigtLWFjY2VudDMpLCAzcHggLTNweCB2YXIoLS1hY2NlbnQ0KVxcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAzMnB4IDY0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzJweDtcXG59XFxuXFxuLnBsdXMtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdBQlonO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5wbHVzLWJ1dHRvbi5uZXctcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDEpO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uZXctcHJvamVjdCAuZGlzcGxheS10ZXh0IHtcXG4gICAgcGFkZGluZzogMHB4IDMycHg7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5wbHVzLWJ1dHRvbiAuY2xpY2thYmxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctcHJvamVjdCAuY2xpY2thYmxlIHtcXG4gICAgd2lkdGg6IDU2cHg7XFxufVxcblxcbi5uZXctcHJvamVjdCAuY2xpY2thYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IGltZyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjA1cztcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKSBkcm9wLXNoYWRvdygycHggMnB4IHZhcigtLXNlY29uZGFyeS1jb2xvcikpO1xcbiAgICBoZWlnaHQ6IDU2cHg7XFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCB2YXIoLS1hY2NlbnQxKSwgNXB4IC01cHggdmFyKC0tYWNjZW50Mik7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06bnRoLWNoaWxkKDJuKTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IHZhcigtLWFjY2VudDMpLCA1cHggLTVweCB2YXIoLS1hY2NlbnQ0KTtcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5zYXZlLCAucHJvamVjdC1pdGVtIC5kaXNjYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgdG9wOiAtNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmRpc2NhcmQge1xcbiAgICB0b3A6IDU2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gPiAuaGVhZGVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkID4gLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5oZWFkZXItbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzJweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLnByb2plY3QtdGl0bGUge1xcbiAgICBwYWRkaW5nOiA0cHggNHB4IDRweCAxNnB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmhlYWRlci1sZWZ0IGlucHV0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcilcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuaGVhZGVyLWxlZnQgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tYWNjZW50MylcXG59XFxuXFxuLnByb2plY3QtaXRlbSAucGx1cy1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uYWRkLXRhZ3MgaW1nIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uYWRkLXRhZ3MgLmNsaWNrYWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDMpO1xcbn1cXG5cXG4uYWRkLXRhZ3MgLmRpc3BsYXktdGV4dCB7XFxuICAgIHBhZGRpbmc6IDBweCA4cHg7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gPiAuYm9keSB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDEtbGlnaHQpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06bnRoLWNoaWxkKDRuLTIpID4gLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQzLWxpZ2h0KTtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpudGgtY2hpbGQoNG4tMSkgPiAuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDItbGlnaHQpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOm50aC1jaGlsZCg0bikgPiAuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDQtbGlnaHQpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtID4gLmJvZHkuY29sbGFwc2VkIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDBzO1xcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcXG4gICAgaGVpZ2h0OiAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0udW5zYXZlZCA+IC5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnRhc2stbGlzdCA+IC5oZWFkZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggZG91YmxlIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi8qIE5ldyBUYXNrIEJ1dHRvbiBTdHlsaW5nICovXFxuXFxuLm5ldy10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dCB7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ubmV3LXRhc2sgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubmV3LXRhc2sgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGl2OiBvID0+IG5ld0VsZW1lbnQoJ2RpdicsbyksXG4gICAgc3BhbjogbyA9PiBuZXdFbGVtZW50KCdzcGFuJyxvKSxcbiAgICBidXR0b246IG8gPT4gbmV3RWxlbWVudCgnYnV0dG9uJyxvKSxcbiAgICBpbWc6IG8gPT4gbmV3SW1nKG8pLFxuICAgIHVsOiBvID0+IG5ld0VsZW1lbnQoJ3VsJyxvKSxcbiAgICBsaTogbyA9PiBuZXdFbGVtZW50KCdsaScsbylcbn1cblxuLy8gQ2VudHJhbCBmdW5jdGlvbiB0aGF0IGJ1aWxkcyBIVE1MIGVsZW1lbnRzIGZyb20gcHJvdmlkZWQgb2JqZWN0c1xuZnVuY3Rpb24gbmV3RWxlbWVudCh0eXBlLG9iaikge1xuICAgIGxldCByZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmICgndGV4dCcgaW4gb2JqKSByZXQudGV4dENvbnRlbnQgPSBvYmoudGV4dFxuICAgIGlmICgnaWQnIGluIG9iaikgcmV0LmlkID0gb2JqLmlkXG4gICAgaWYgKCdjbGFzcycgaW4gb2JqKSB7XG4gICAgICAgIGZvciAobGV0IGMgaW4gb2JqLmNsYXNzKSB7XG4gICAgICAgICAgICByZXQuY2xhc3NMaXN0LmFkZChvYmouY2xhc3NbY10pXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCdjaGlsZHJlbicgaW4gb2JqKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgb2JqLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXQuYXBwZW5kQ2hpbGQob2JqLmNoaWxkcmVuW2ldKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbmV3SW1nKG9iaikge1xuICAgIGxldCByZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpZiAoJ3NyYycgaW4gb2JqKSByZXQuc2V0QXR0cmlidXRlKCdzcmMnLG9iai5zcmMpXG4gICAgaWYgKCdhbHQnIGluIG9iaikgcmV0LnNldEF0dHJpYnV0ZSgnYWx0JyxvYmouYWx0KVxuICAgIGlmICgnY2xhc3MnIGluIG9iaikge1xuICAgICAgICBmb3IgKGxldCBjIGluIG9iai5jbGFzcykge1xuICAgICAgICAgICAgcmV0LmNsYXNzTGlzdC5hZGQob2JqLmNsYXNzW2NdKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXRcbn0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2Nvb2xvcnMtaW8nXG5pbXBvcnQgY2hyb21hIGZyb20gJ2Nocm9tYS1qcydcblxuY29uc3QgcGFsZXR0ZSA9ICdodHRwczovL2Nvb2xvcnMuY28vZjlmYWZiLTA2MGEwZi02NTkzYzItNmViNGE4LWYwOTc0ZS1lODc2NWEnXG4vLyBjb25zdCBwYWxldHRlID0gJ2h0dHBzOi8vY29vbG9ycy5jby9lYmYyZmEtMDYwYTBlLTA2NDc4OS00MjdhYTEtNjc5NDM2LWE1YmUwMCdcbi8vIGNvbnN0IHBhbGV0dGUgPSAnaHR0cHM6Ly9jb29sb3JzLmNvLzBmMDgwNi1mNmY1ZjMtNDI4MWE0LTQ4YTlhNi1kNGI0ODMtYzE2NjZiJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgbGV0IGNvbG9ycyA9IHBhcnNlKHBhbGV0dGUpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LWNvbG9yJywgY29sb3JzWzBdKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCctLXNlY29uZGFyeS1jb2xvcicsIGNvbG9yc1sxXSlcblxuICAgIGZvciAobGV0IGk9MjtpPGNvbG9ycy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoYC0tYWNjZW50JHtpLTF9YCwgY29sb3JzW2ldKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShgLS1hY2NlbnQke2ktMX0tbGlnaHRgLCBjaHJvbWEoY29sb3JzW2ldKS5zZXQoJ2hzbC5sJywwLjkpKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KGAtLWFjY2VudCR7aS0xfS1kYXJrYCwgY2hyb21hKGNvbG9yc1tpXSkuc2V0KCdoc2wubCcsMC4xKSlcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IHsgcHJvamVjdFRlbXBsYXRlIH0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50c1wiO1xuaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9iYXNlQ29tcG9uZW50cy5qc1wiO1xuXG5sZXQgaW5kZXggPSAwO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYWRkVGVtcGxhdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29udGFpbmVyJylcbiAgICAgICAgaWYgKHByb2plY3RBcmVhLnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkJykpIHtcbiAgICAgICAgICAgIHByb2plY3RBcmVhLnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkJykuc3R5bGUub3V0bGluZSA9IFwiNHB4IHNvbGlkIHZhcigtLWNvbG9yMilcIlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7cHJvamVjdEFyZWEucXVlcnlTZWxlY3RvcignLnVuc2F2ZWQnKS5zdHlsZS5vdXRsaW5lID0gXCJcIn0sMzAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRlbXBsYXRlIGFuZCBpbnNlcnRcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gcHJvamVjdFRlbXBsYXRlKCk7XG4gICAgICAgIHRlbXBsYXRlLmRhdGFzZXQuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wbGF0ZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgcHJvamVjdEFyZWEuaW5zZXJ0QmVmb3JlKHRlbXBsYXRlLCBwcm9qZWN0QXJlYS5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5zYXZlZCAubmV3LXRhc2sgYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZEl0ZW0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5zYXZlZCAubmV3LXRhc2sgaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJyxhZGRJZkVudGVyKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuc2F2ZWQgLmRpc2NhcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVtb3ZlVGVtcGxhdGUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5zYXZlZCAuc2F2ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzYXZlVGVtcGxhdGUpO1xuXG4gICAgfSwgICAgXG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW0oZSkge1xuICAgIGxldCB0ID0gZS50YXJnZXQ7XG4gICAgY29uc29sZS5sb2codCk7XG4gICAgbGV0IGxpc3QgPSB0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIGxldCBpbnB1dCA9IHQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykgbGlzdC5hcHBlbmRDaGlsZChjb21wb25lbnQubGkoe3RleHQ6IGlucHV0LnZhbHVlfSkpXG4gICAgaW5wdXQudmFsdWUgPSAnJ1xufVxuXG5mdW5jdGlvbiBhZGRJZkVudGVyKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgYWRkSXRlbShlKVxufVxuXG5mdW5jdGlvbiBzYXZlVGVtcGxhdGUoZSkge1xuICAgIC8vIENoZWNrIHRpdGxlIGFuZCByZW1vdmVcbiAgICBsZXQgaXRlbSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IGhsID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWxlZnQnKTtcbiAgICBsZXQgaW5wdXQgPSBobC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpXG5cbiAgICAvLyBkbyBub3RoaW5nIGlmIHRpdGxlIGVtcHR5XG4gICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICBpbnB1dC5zdHlsZS5vdXRsaW5lID0gJzRweCBzb2xpZCByZWQnXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge2lucHV0LnN0eWxlLm91dGxpbmUgPSAnJ30sNTAwKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2coJ3NhdmluZyBwcm9qZWN0IGl0ZW0nKTtcblxuICAgIC8vIFJlbW92ZSBTYXZlL0Rpc2NhcmQgYnV0dG9uc1xuICAgIGl0ZW0ucmVtb3ZlQ2hpbGQoZS50YXJnZXQpXG4gICAgaXRlbS5yZW1vdmVDaGlsZChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kaXNjYXJkJykpXG5cbiAgICAvLyBSZXBsYWNlIGlucHV0IHdpdGggYWN0dWFsIHByb2plY3QgdGl0bGVcbiAgICBobC5pbnNlcnRCZWZvcmUoY29tcG9uZW50LmRpdih7Y2xhc3M6IFsncHJvamVjdC10aXRsZSddLCB0ZXh0OiBpbnB1dC52YWx1ZX0pLGhsLmZpcnN0Q2hpbGQpXG4gICAgaGwucmVtb3ZlQ2hpbGQoaW5wdXQpXG5cbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Vuc2F2ZWQnKVxuXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRlbXBsYXRlKGUpIHtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xufVxuXG5cbiIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vYmFzZUNvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgcGx1c0J1dHRvbiB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIlxuXG5jb25zdCBiYW5uZXIgPSBjb21wb25lbnQuZGl2KHtcbiAgICBjbGFzczogWydiYW5uZXInXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICBjb21wb25lbnQuc3Bhbih7XG4gICAgICAgICAgICBjbGFzczogWydiYW5uZXItdGV4dCddLFxuICAgICAgICAgICAgdGV4dDogJ1RvLURvIExpc3QnXG4gICAgICAgIH0pXG4gICAgXVxufSlcblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IHBsdXNCdXR0b24oJ25ldy1wcm9qZWN0JywnYWRkIG5ldyBwcm9qZWN0JylcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoe1xuICAgIGlkOiBbJ3Byb2plY3QtY29udGFpbmVyJ10sXG4gICAgY2hpbGRyZW46IFsgbmV3UHJvamVjdEJ1dHRvbiBdXG59KVxuXG5jb25zdCBzaWRlQmFyID0gY29tcG9uZW50LmRpdih7XG4gICAgaWQ6ICdzaWRlYmFyJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICBjb21wb25lbnQuc3Bhbih7XG4gICAgICAgICAgICBpZDogJ3NpZGViYXItdGl0bGUnLFxuICAgICAgICAgICAgdGV4dDogJ3NpZGViYXInXG4gICAgICAgIH0pXG4gICAgXVxufSlcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBjb21wb25lbnQuZGl2KHtcbiAgICBpZDogJ21haW4tY29udGVudCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgc2lkZUJhcixcbiAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgIF1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFtiYW5uZXIsIG1haW5Db250ZW50XSIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vYmFzZUNvbXBvbmVudHMuanNcIlxuaW1wb3J0IHBsdXNJbWFnZSBmcm9tIFwiLi9wbHVzLXN5bWJvbC1idXR0b24ucG5nXCJcbmltcG9ydCBjaGVjayBmcm9tICcuL2NoZWNrLnBuZydcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Nsb3NlLnBuZydcblxuZnVuY3Rpb24gcGx1c0J1dHRvbkJhc2UoKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5idXR0b24oe1xuICAgICAgICBjbGFzczogWydjbGlja2FibGUnXSxcbiAgICAgICAgY2hpbGRyZW46IFsgY29tcG9uZW50LmltZyh7c3JjOiBwbHVzSW1hZ2V9KSBdXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsdXNCdXR0b24gKGFDbGFzcyx0ZXh0KSB7IHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICBjbGFzczogW2FDbGFzcywgJ3BsdXMtYnV0dG9uJ10sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgcGx1c0J1dHRvbkJhc2UoKSxcbiAgICAgICAgY29tcG9uZW50LnNwYW4oe1xuICAgICAgICAgICAgY2xhc3M6IFsnZGlzcGxheS10ZXh0J10sXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgXVxufSl9XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VGVtcGxhdGUgKCkge1xuICAgIHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgY2xhc3M6IFsncHJvamVjdC1pdGVtJywndW5zYXZlZCddLFxuICAgICAgICBjaGlsZHJlbjogW3Byb2plY3RJdGVtSGVhZGVyKCksIHByb2plY3RJdGVtQm9keSgpLCBwcm9qZWN0U2F2ZSgpLCBwcm9qZWN0RGlzY2FyZCgpXVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RTYXZlKCkge1xuICAgIHJldHVybiBjb21wb25lbnQuaW1nKHtcbiAgICAgICAgc3JjOiBjaGVjayxcbiAgICAgICAgY2xhc3M6IFsnc2F2ZSddXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcHJvamVjdERpc2NhcmQoKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5pbWcoe1xuICAgICAgICBzcmM6IGNsb3NlLFxuICAgICAgICBjbGFzczogWydkaXNjYXJkJ11cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0SXRlbUhlYWRlcigpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmRpdih7XG4gICAgICAgIGNsYXNzOiBbJ2hlYWRlciddLFxuICAgICAgICBjaGlsZHJlbjogWyBwcm9qZWN0SGVhZGVyTGVmdCgpLCBwcm9qZWN0SGVhZGVyUmlnaHQoKV1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0SGVhZGVyTGVmdCgpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmRpdih7XG4gICAgICAgIGNsYXNzOiBbJ2hlYWRlci1sZWZ0J10sXG4gICAgICAgIGNoaWxkcmVuOiBbIHByb2plY3RUaXRsZSgpLCBhZGRUYWdzQnV0dG9uKCksIF1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0VGl0bGUoKSB7XG4gICAgbGV0IHJldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByZXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgcmV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdQcm9qZWN0IE5hbWUnKVxuICAgIHJldC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJylcbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhZGRUYWdzQnV0dG9uKCkge1xuICAgIHJldHVybiBwbHVzQnV0dG9uKCdhZGQtdGFncycsJ2FkZCB0YWdzJylcbn1cblxuZnVuY3Rpb24gcHJvamVjdEhlYWRlclJpZ2h0KCkge1xuICAgIHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgY2xhc3M6IFsnaGVhZGVyLXJpZ2h0J10sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgICAgICAgICBjbGFzczogWydkdWUtZGF0ZSddLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdEdWUgRGF0ZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0SXRlbUJvZHkoKSB7IHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgY2xhc3M6IFsnYm9keSddLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgY29tcG9uZW50LmRpdih7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFsndGFzay1saXN0J10sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmRpdih7Y2xhc3M6IFsnaGVhZGVyJ10sIHRleHQ6ICdUYXNrIExpc3QnfSksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC51bCh7Y2xhc3M6IFsnbGlzdCddfSksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kaXYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFsnbmV3LXRhc2snXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmJ1dHRvbih7dGV4dDogJysnfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ2FkZCBhIHRhc2suLi4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY29udmVydFRvU2F2ZWQocHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKCdjb252ZXJ0aW5nIHRvIHNhdmVkJyk7XG59IiwiLyoqXG4gKiBjaHJvbWEuanMgLSBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGNvbG9yIGNvbnZlcnNpb25zXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDExLTIwMTksIEdyZWdvciBBaXNjaFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqIDEuIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKlxuICogMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuICogYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKlxuICogMy4gVGhlIG5hbWUgR3JlZ29yIEFpc2NoIG1heSBub3QgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHNcbiAqIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4gKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkVcbiAqIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIEdSRUdPUiBBSVNDSCBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsXG4gKiBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWVxuICogT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkdcbiAqIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSxcbiAqIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIGNocm9tYS5qcyBpbmNsdWRlcyBjb2xvcnMgZnJvbSBjb2xvcmJyZXdlcjIub3JnLCB3aGljaCBhcmUgcmVsZWFzZWQgdW5kZXJcbiAqIHRoZSBmb2xsb3dpbmcgbGljZW5zZTpcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMDIgQ3ludGhpYSBCcmV3ZXIsIE1hcmsgSGFycm93ZXIsXG4gKiBhbmQgVGhlIFBlbm5zeWx2YW5pYSBTdGF0ZSBVbml2ZXJzaXR5LlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuICogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWNcbiAqIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogTmFtZWQgY29sb3JzIGFyZSB0YWtlbiBmcm9tIFgxMSBDb2xvciBOYW1lcy5cbiAqIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvI3N2Zy1jb2xvclxuICpcbiAqIEBwcmVzZXJ2ZVxuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLmNocm9tYSA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbGltaXQkMiA9IGZ1bmN0aW9uICh4LCBtaW4sIG1heCkge1xuICAgICAgICBpZiAoIG1pbiA9PT0gdm9pZCAwICkgbWluPTA7XG4gICAgICAgIGlmICggbWF4ID09PSB2b2lkIDAgKSBtYXg9MTtcblxuICAgICAgICByZXR1cm4geCA8IG1pbiA/IG1pbiA6IHggPiBtYXggPyBtYXggOiB4O1xuICAgIH07XG5cbiAgICB2YXIgbGltaXQkMSA9IGxpbWl0JDI7XG5cbiAgICB2YXIgY2xpcF9yZ2IkMyA9IGZ1bmN0aW9uIChyZ2IpIHtcbiAgICAgICAgcmdiLl9jbGlwcGVkID0gZmFsc2U7XG4gICAgICAgIHJnYi5fdW5jbGlwcGVkID0gcmdiLnNsaWNlKDApO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8PTM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJnYltpXSA8IDAgfHwgcmdiW2ldID4gMjU1KSB7IHJnYi5fY2xpcHBlZCA9IHRydWU7IH1cbiAgICAgICAgICAgICAgICByZ2JbaV0gPSBsaW1pdCQxKHJnYltpXSwgMCwgMjU1KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJnYltpXSA9IGxpbWl0JDEocmdiW2ldLCAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH07XG5cbiAgICAvLyBwb3J0ZWQgZnJvbSBqUXVlcnkncyAkLnR5cGVcbiAgICB2YXIgY2xhc3NUb1R5cGUgPSB7fTtcbiAgICBmb3IgKHZhciBpJDEgPSAwLCBsaXN0JDEgPSBbJ0Jvb2xlYW4nLCAnTnVtYmVyJywgJ1N0cmluZycsICdGdW5jdGlvbicsICdBcnJheScsICdEYXRlJywgJ1JlZ0V4cCcsICdVbmRlZmluZWQnLCAnTnVsbCddOyBpJDEgPCBsaXN0JDEubGVuZ3RoOyBpJDEgKz0gMSkge1xuICAgICAgICB2YXIgbmFtZSA9IGxpc3QkMVtpJDFdO1xuXG4gICAgICAgIGNsYXNzVG9UeXBlWyhcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCIpXSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgdmFyIHR5cGUkcCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gY2xhc3NUb1R5cGVbT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaildIHx8IFwib2JqZWN0XCI7XG4gICAgfTtcblxuICAgIHZhciB0eXBlJG8gPSB0eXBlJHA7XG5cbiAgICB2YXIgdW5wYWNrJEIgPSBmdW5jdGlvbiAoYXJncywga2V5T3JkZXIpIHtcbiAgICAgICAgaWYgKCBrZXlPcmRlciA9PT0gdm9pZCAwICkga2V5T3JkZXI9bnVsbDtcblxuICAgIFx0Ly8gaWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIDMgYXJndW1lbnRzLCB3ZSByZXR1cm4gdGhlIGFyZ3VtZW50c1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPj0gMykgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7IH1cbiAgICAgICAgLy8gd2l0aCBsZXNzIHRoYW4gMyBhcmdzIHdlIGNoZWNrIGlmIGZpcnN0IGFyZyBpcyBvYmplY3RcbiAgICAgICAgLy8gYW5kIHVzZSB0aGUga2V5T3JkZXIgc3RyaW5nIHRvIGV4dHJhY3QgYW5kIHNvcnQgcHJvcGVydGllc1xuICAgIFx0aWYgKHR5cGUkbyhhcmdzWzBdKSA9PSAnb2JqZWN0JyAmJiBrZXlPcmRlcikge1xuICAgIFx0XHRyZXR1cm4ga2V5T3JkZXIuc3BsaXQoJycpXG4gICAgXHRcdFx0LmZpbHRlcihmdW5jdGlvbiAoaykgeyByZXR1cm4gYXJnc1swXVtrXSAhPT0gdW5kZWZpbmVkOyB9KVxuICAgIFx0XHRcdC5tYXAoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGFyZ3NbMF1ba107IH0pO1xuICAgIFx0fVxuICAgIFx0Ly8gb3RoZXJ3aXNlIHdlIGp1c3QgcmV0dXJuIHRoZSBmaXJzdCBhcmd1bWVudFxuICAgIFx0Ly8gKHdoaWNoIHdlIHN1cHBvc2UgaXMgYW4gYXJyYXkgb2YgYXJncylcbiAgICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfTtcblxuICAgIHZhciB0eXBlJG4gPSB0eXBlJHA7XG5cbiAgICB2YXIgbGFzdCQ0ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgMikgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICB2YXIgbCA9IGFyZ3MubGVuZ3RoLTE7XG4gICAgICAgIGlmICh0eXBlJG4oYXJnc1tsXSkgPT0gJ3N0cmluZycpIHsgcmV0dXJuIGFyZ3NbbF0udG9Mb3dlckNhc2UoKTsgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIFBJJDIgPSBNYXRoLlBJO1xuXG4gICAgdmFyIHV0aWxzID0ge1xuICAgIFx0Y2xpcF9yZ2I6IGNsaXBfcmdiJDMsXG4gICAgXHRsaW1pdDogbGltaXQkMixcbiAgICBcdHR5cGU6IHR5cGUkcCxcbiAgICBcdHVucGFjazogdW5wYWNrJEIsXG4gICAgXHRsYXN0OiBsYXN0JDQsXG4gICAgXHRQSTogUEkkMixcbiAgICBcdFRXT1BJOiBQSSQyKjIsXG4gICAgXHRQSVRISVJEOiBQSSQyLzMsXG4gICAgXHRERUcyUkFEOiBQSSQyIC8gMTgwLFxuICAgIFx0UkFEMkRFRzogMTgwIC8gUEkkMlxuICAgIH07XG5cbiAgICB2YXIgaW5wdXQkaCA9IHtcbiAgICBcdGZvcm1hdDoge30sXG4gICAgXHRhdXRvZGV0ZWN0OiBbXVxuICAgIH07XG5cbiAgICB2YXIgbGFzdCQzID0gdXRpbHMubGFzdDtcbiAgICB2YXIgY2xpcF9yZ2IkMiA9IHV0aWxzLmNsaXBfcmdiO1xuICAgIHZhciB0eXBlJG0gPSB1dGlscy50eXBlO1xuICAgIHZhciBfaW5wdXQgPSBpbnB1dCRoO1xuXG4gICAgdmFyIENvbG9yJEQgPSBmdW5jdGlvbiBDb2xvcigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZSRtKGFyZ3NbMF0pID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgYXJnc1swXS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgYXJnc1swXS5jb25zdHJ1Y3RvciA9PT0gdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgLy8gdGhlIGFyZ3VtZW50IGlzIGFscmVhZHkgYSBDb2xvciBpbnN0YW5jZVxuICAgICAgICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsYXN0IGFyZ3VtZW50IGNvdWxkIGJlIHRoZSBtb2RlXG4gICAgICAgIHZhciBtb2RlID0gbGFzdCQzKGFyZ3MpO1xuICAgICAgICB2YXIgYXV0b2RldGVjdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghbW9kZSkge1xuICAgICAgICAgICAgYXV0b2RldGVjdCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIV9pbnB1dC5zb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICBfaW5wdXQuYXV0b2RldGVjdCA9IF9pbnB1dC5hdXRvZGV0ZWN0LnNvcnQoZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYi5wIC0gYS5wOyB9KTtcbiAgICAgICAgICAgICAgICBfaW5wdXQuc29ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGF1dG8tZGV0ZWN0IGZvcm1hdFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBfaW5wdXQuYXV0b2RldGVjdDsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hrID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgICAgIG1vZGUgPSBjaGsudGVzdC5hcHBseShjaGssIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2lucHV0LmZvcm1hdFttb2RlXSkge1xuICAgICAgICAgICAgdmFyIHJnYiA9IF9pbnB1dC5mb3JtYXRbbW9kZV0uYXBwbHkobnVsbCwgYXV0b2RldGVjdCA/IGFyZ3MgOiBhcmdzLnNsaWNlKDAsLTEpKTtcbiAgICAgICAgICAgIG1lLl9yZ2IgPSBjbGlwX3JnYiQyKHJnYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gZm9ybWF0OiAnK2FyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGFscGhhIGNoYW5uZWxcbiAgICAgICAgaWYgKG1lLl9yZ2IubGVuZ3RoID09PSAzKSB7IG1lLl9yZ2IucHVzaCgxKTsgfVxuICAgIH07XG5cbiAgICBDb2xvciRELnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICAgICAgaWYgKHR5cGUkbSh0aGlzLmhleCkgPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gdGhpcy5oZXgoKTsgfVxuICAgICAgICByZXR1cm4gKFwiW1wiICsgKHRoaXMuX3JnYi5qb2luKCcsJykpICsgXCJdXCIpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3JfMSA9IENvbG9yJEQ7XG5cbiAgICB2YXIgY2hyb21hJGsgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHR2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIFx0d2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIFx0cmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIGNocm9tYSRrLkNvbG9yLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MpICkpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkay5Db2xvciA9IENvbG9yXzE7XG4gICAgY2hyb21hJGsudmVyc2lvbiA9ICcyLjQuMic7XG5cbiAgICB2YXIgY2hyb21hXzEgPSBjaHJvbWEkaztcblxuICAgIHZhciB1bnBhY2skQSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbWF4JDIgPSBNYXRoLm1heDtcblxuICAgIHZhciByZ2IyY215ayQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skQShhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHIgPSByIC8gMjU1O1xuICAgICAgICBnID0gZyAvIDI1NTtcbiAgICAgICAgYiA9IGIgLyAyNTU7XG4gICAgICAgIHZhciBrID0gMSAtIG1heCQyKHIsbWF4JDIoZyxiKSk7XG4gICAgICAgIHZhciBmID0gayA8IDEgPyAxIC8gKDEtaykgOiAwO1xuICAgICAgICB2YXIgYyA9ICgxLXItaykgKiBmO1xuICAgICAgICB2YXIgbSA9ICgxLWctaykgKiBmO1xuICAgICAgICB2YXIgeSA9ICgxLWItaykgKiBmO1xuICAgICAgICByZXR1cm4gW2MsbSx5LGtdO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmNteWtfMSA9IHJnYjJjbXlrJDE7XG5cbiAgICB2YXIgdW5wYWNrJHogPSB1dGlscy51bnBhY2s7XG5cbiAgICB2YXIgY215azJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayR6KGFyZ3MsICdjbXlrJyk7XG4gICAgICAgIHZhciBjID0gYXJnc1swXTtcbiAgICAgICAgdmFyIG0gPSBhcmdzWzFdO1xuICAgICAgICB2YXIgeSA9IGFyZ3NbMl07XG4gICAgICAgIHZhciBrID0gYXJnc1szXTtcbiAgICAgICAgdmFyIGFscGhhID0gYXJncy5sZW5ndGggPiA0ID8gYXJnc1s0XSA6IDE7XG4gICAgICAgIGlmIChrID09PSAxKSB7IHJldHVybiBbMCwwLDAsYWxwaGFdOyB9XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBjID49IDEgPyAwIDogMjU1ICogKDEtYykgKiAoMS1rKSwgLy8gclxuICAgICAgICAgICAgbSA+PSAxID8gMCA6IDI1NSAqICgxLW0pICogKDEtayksIC8vIGdcbiAgICAgICAgICAgIHkgPj0gMSA/IDAgOiAyNTUgKiAoMS15KSAqICgxLWspLCAvLyBiXG4gICAgICAgICAgICBhbHBoYVxuICAgICAgICBdO1xuICAgIH07XG5cbiAgICB2YXIgY215azJyZ2JfMSA9IGNteWsycmdiO1xuXG4gICAgdmFyIGNocm9tYSRqID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJEMgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCRnID0gaW5wdXQkaDtcbiAgICB2YXIgdW5wYWNrJHkgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkbCA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgcmdiMmNteWsgPSByZ2IyY215a18xO1xuXG4gICAgQ29sb3IkQy5wcm90b3R5cGUuY215ayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmNteWsodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGouY215ayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkQywgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2NteWsnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JGcuZm9ybWF0LmNteWsgPSBjbXlrMnJnYl8xO1xuXG4gICAgaW5wdXQkZy5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayR5KGFyZ3MsICdjbXlrJyk7XG4gICAgICAgICAgICBpZiAodHlwZSRsKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjbXlrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayR4ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsYXN0JDIgPSB1dGlscy5sYXN0O1xuICAgIHZhciBybmQgPSBmdW5jdGlvbiAoYSkgeyByZXR1cm4gTWF0aC5yb3VuZChhKjEwMCkvMTAwOyB9O1xuXG4gICAgLypcbiAgICAgKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICAgICAqIC0gaHNsMmNzcyhoLHMsbClcbiAgICAgKiAtIGhzbDJjc3MoaCxzLGwsYSlcbiAgICAgKiAtIGhzbDJjc3MoW2gscyxsXSwgbW9kZSlcbiAgICAgKiAtIGhzbDJjc3MoW2gscyxsLGFdLCBtb2RlKVxuICAgICAqIC0gaHNsMmNzcyh7aCxzLGwsYX0sIG1vZGUpXG4gICAgICovXG4gICAgdmFyIGhzbDJjc3MkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgaHNsYSA9IHVucGFjayR4KGFyZ3MsICdoc2xhJyk7XG4gICAgICAgIHZhciBtb2RlID0gbGFzdCQyKGFyZ3MpIHx8ICdsc2EnO1xuICAgICAgICBoc2xhWzBdID0gcm5kKGhzbGFbMF0gfHwgMCk7XG4gICAgICAgIGhzbGFbMV0gPSBybmQoaHNsYVsxXSoxMDApICsgJyUnO1xuICAgICAgICBoc2xhWzJdID0gcm5kKGhzbGFbMl0qMTAwKSArICclJztcbiAgICAgICAgaWYgKG1vZGUgPT09ICdoc2xhJyB8fCAoaHNsYS5sZW5ndGggPiAzICYmIGhzbGFbM108MSkpIHtcbiAgICAgICAgICAgIGhzbGFbM10gPSBoc2xhLmxlbmd0aCA+IDMgPyBoc2xhWzNdIDogMTtcbiAgICAgICAgICAgIG1vZGUgPSAnaHNsYSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoc2xhLmxlbmd0aCA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChtb2RlICsgXCIoXCIgKyAoaHNsYS5qb2luKCcsJykpICsgXCIpXCIpO1xuICAgIH07XG5cbiAgICB2YXIgaHNsMmNzc18xID0gaHNsMmNzcyQxO1xuXG4gICAgdmFyIHVucGFjayR3ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgLypcbiAgICAgKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICAgICAqIC0gcmdiMmhzbChyLGcsYilcbiAgICAgKiAtIHJnYjJoc2wocixnLGIsYSlcbiAgICAgKiAtIHJnYjJoc2woW3IsZyxiXSlcbiAgICAgKiAtIHJnYjJoc2woW3IsZyxiLGFdKVxuICAgICAqIC0gcmdiMmhzbCh7cixnLGIsYX0pXG4gICAgICovXG4gICAgdmFyIHJnYjJoc2wkMyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJHcoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgdmFyIHIgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgZyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBiID0gYXJnc1syXTtcblxuICAgICAgICByIC89IDI1NTtcbiAgICAgICAgZyAvPSAyNTU7XG4gICAgICAgIGIgLz0gMjU1O1xuXG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXG4gICAgICAgIHZhciBsID0gKG1heCArIG1pbikgLyAyO1xuICAgICAgICB2YXIgcywgaDtcblxuICAgICAgICBpZiAobWF4ID09PSBtaW4pe1xuICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICBoID0gTnVtYmVyLk5hTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMgPSBsIDwgMC41ID8gKG1heCAtIG1pbikgLyAobWF4ICsgbWluKSA6IChtYXggLSBtaW4pIC8gKDIgLSBtYXggLSBtaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHIgPT0gbWF4KSB7IGggPSAoZyAtIGIpIC8gKG1heCAtIG1pbik7IH1cbiAgICAgICAgZWxzZSBpZiAoZyA9PSBtYXgpIHsgaCA9IDIgKyAoYiAtIHIpIC8gKG1heCAtIG1pbik7IH1cbiAgICAgICAgZWxzZSBpZiAoYiA9PSBtYXgpIHsgaCA9IDQgKyAociAtIGcpIC8gKG1heCAtIG1pbik7IH1cblxuICAgICAgICBoICo9IDYwO1xuICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoPjMgJiYgYXJnc1szXSE9PXVuZGVmaW5lZCkgeyByZXR1cm4gW2gscyxsLGFyZ3NbM11dOyB9XG4gICAgICAgIHJldHVybiBbaCxzLGxdO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmhzbF8xID0gcmdiMmhzbCQzO1xuXG4gICAgdmFyIHVucGFjayR2ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsYXN0JDEgPSB1dGlscy5sYXN0O1xuICAgIHZhciBoc2wyY3NzID0gaHNsMmNzc18xO1xuICAgIHZhciByZ2IyaHNsJDIgPSByZ2IyaHNsXzE7XG4gICAgdmFyIHJvdW5kJDYgPSBNYXRoLnJvdW5kO1xuXG4gICAgLypcbiAgICAgKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICAgICAqIC0gcmdiMmNzcyhyLGcsYilcbiAgICAgKiAtIHJnYjJjc3MocixnLGIsYSlcbiAgICAgKiAtIHJnYjJjc3MoW3IsZyxiXSwgbW9kZSlcbiAgICAgKiAtIHJnYjJjc3MoW3IsZyxiLGFdLCBtb2RlKVxuICAgICAqIC0gcmdiMmNzcyh7cixnLGIsYX0sIG1vZGUpXG4gICAgICovXG4gICAgdmFyIHJnYjJjc3MkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmdiYSA9IHVucGFjayR2KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHZhciBtb2RlID0gbGFzdCQxKGFyZ3MpIHx8ICdyZ2InO1xuICAgICAgICBpZiAobW9kZS5zdWJzdHIoMCwzKSA9PSAnaHNsJykge1xuICAgICAgICAgICAgcmV0dXJuIGhzbDJjc3MocmdiMmhzbCQyKHJnYmEpLCBtb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZ2JhWzBdID0gcm91bmQkNihyZ2JhWzBdKTtcbiAgICAgICAgcmdiYVsxXSA9IHJvdW5kJDYocmdiYVsxXSk7XG4gICAgICAgIHJnYmFbMl0gPSByb3VuZCQ2KHJnYmFbMl0pO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ3JnYmEnIHx8IChyZ2JhLmxlbmd0aCA+IDMgJiYgcmdiYVszXTwxKSkge1xuICAgICAgICAgICAgcmdiYVszXSA9IHJnYmEubGVuZ3RoID4gMyA/IHJnYmFbM10gOiAxO1xuICAgICAgICAgICAgbW9kZSA9ICdyZ2JhJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG1vZGUgKyBcIihcIiArIChyZ2JhLnNsaWNlKDAsbW9kZT09PSdyZ2InPzM6NCkuam9pbignLCcpKSArIFwiKVwiKTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJjc3NfMSA9IHJnYjJjc3MkMTtcblxuICAgIHZhciB1bnBhY2skdSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcm91bmQkNSA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgaHNsMnJnYiQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXNzaWduO1xuXG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG4gICAgICAgIGFyZ3MgPSB1bnBhY2skdShhcmdzLCAnaHNsJyk7XG4gICAgICAgIHZhciBoID0gYXJnc1swXTtcbiAgICAgICAgdmFyIHMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IGwqMjU1O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHQzID0gWzAsMCwwXTtcbiAgICAgICAgICAgIHZhciBjID0gWzAsMCwwXTtcbiAgICAgICAgICAgIHZhciB0MiA9IGwgPCAwLjUgPyBsICogKDErcykgOiBsK3MtbCpzO1xuICAgICAgICAgICAgdmFyIHQxID0gMiAqIGwgLSB0MjtcbiAgICAgICAgICAgIHZhciBoXyA9IGggLyAzNjA7XG4gICAgICAgICAgICB0M1swXSA9IGhfICsgMS8zO1xuICAgICAgICAgICAgdDNbMV0gPSBoXztcbiAgICAgICAgICAgIHQzWzJdID0gaF8gLSAxLzM7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8MzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQzW2ldIDwgMCkgeyB0M1tpXSArPSAxOyB9XG4gICAgICAgICAgICAgICAgaWYgKHQzW2ldID4gMSkgeyB0M1tpXSAtPSAxOyB9XG4gICAgICAgICAgICAgICAgaWYgKDYgKiB0M1tpXSA8IDEpXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzW2ldOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoMiAqIHQzW2ldIDwgMSlcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDI7IH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgzICogdDNbaV0gPCAyKVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MSArICh0MiAtIHQxKSAqICgoMiAvIDMpIC0gdDNbaV0pICogNjsgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDE7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChhc3NpZ24gPSBbcm91bmQkNShjWzBdKjI1NSkscm91bmQkNShjWzFdKjI1NSkscm91bmQkNShjWzJdKjI1NSldLCByID0gYXNzaWduWzBdLCBnID0gYXNzaWduWzFdLCBiID0gYXNzaWduWzJdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAvLyBrZWVwIGFscGhhIGNoYW5uZWxcbiAgICAgICAgICAgIHJldHVybiBbcixnLGIsYXJnc1szXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyLGcsYiwxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhzbDJyZ2JfMSA9IGhzbDJyZ2IkMTtcblxuICAgIHZhciBoc2wycmdiID0gaHNsMnJnYl8xO1xuICAgIHZhciBpbnB1dCRmID0gaW5wdXQkaDtcblxuICAgIHZhciBSRV9SR0IgPSAvXnJnYlxcKFxccyooLT9cXGQrKSxcXHMqKC0/XFxkKylcXHMqLFxccyooLT9cXGQrKVxccypcXCkkLztcbiAgICB2YXIgUkVfUkdCQSA9IC9ecmdiYVxcKFxccyooLT9cXGQrKSxcXHMqKC0/XFxkKylcXHMqLFxccyooLT9cXGQrKVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcbiAgICB2YXIgUkVfUkdCX1BDVCA9IC9ecmdiXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJSxcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKlxcKSQvO1xuICAgIHZhciBSRV9SR0JBX1BDVCA9IC9ecmdiYVxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSUsXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcbiAgICB2YXIgUkVfSFNMID0gL15oc2xcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyksXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccypcXCkkLztcbiAgICB2YXIgUkVfSFNMQSA9IC9eaHNsYVxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSxcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKFswMV18WzAxXT9cXC5cXGQrKVxcKSQvO1xuXG4gICAgdmFyIHJvdW5kJDQgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIGNzczJyZ2IkMSA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgICAgICAgY3NzID0gY3NzLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgICAgICB2YXIgbTtcblxuICAgICAgICBpZiAoaW5wdXQkZi5mb3JtYXQubmFtZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0JGYuZm9ybWF0Lm5hbWVkKGNzcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2IoMjUwLDIwLDApXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0IpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiA9IG0uc2xpY2UoMSw0KTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZ2JbaV0gPSArcmdiW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmdiWzNdID0gMTsgIC8vIGRlZmF1bHQgYWxwaGFcbiAgICAgICAgICAgIHJldHVybiByZ2I7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2JhKDI1MCwyMCwwLDAuNClcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQkEpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiQxID0gbS5zbGljZSgxLDUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQxPTA7IGkkMTw0OyBpJDErKykge1xuICAgICAgICAgICAgICAgIHJnYiQxW2kkMV0gPSArcmdiJDFbaSQxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZ2IkMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJnYigxMDAlLDAlLDAlKVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCX1BDVCkpKSB7XG4gICAgICAgICAgICB2YXIgcmdiJDIgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDI9MDsgaSQyPDM7IGkkMisrKSB7XG4gICAgICAgICAgICAgICAgcmdiJDJbaSQyXSA9IHJvdW5kJDQocmdiJDJbaSQyXSAqIDIuNTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmdiJDJbM10gPSAxOyAgLy8gZGVmYXVsdCBhbHBoYVxuICAgICAgICAgICAgcmV0dXJuIHJnYiQyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiYSgxMDAlLDAlLDAlLDAuNClcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQkFfUENUKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IkMyA9IG0uc2xpY2UoMSw1KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMz0wOyBpJDM8MzsgaSQzKyspIHtcbiAgICAgICAgICAgICAgICByZ2IkM1tpJDNdID0gcm91bmQkNChyZ2IkM1tpJDNdICogMi41NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZ2IkM1szXSA9ICtyZ2IkM1szXTtcbiAgICAgICAgICAgIHJldHVybiByZ2IkMztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhzbCgwLDEwMCUsNTAlKVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfSFNMKSkpIHtcbiAgICAgICAgICAgIHZhciBoc2wgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBoc2xbMV0gKj0gMC4wMTtcbiAgICAgICAgICAgIGhzbFsyXSAqPSAwLjAxO1xuICAgICAgICAgICAgdmFyIHJnYiQ0ID0gaHNsMnJnYihoc2wpO1xuICAgICAgICAgICAgcmdiJDRbM10gPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHJnYiQ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHNsYSgwLDEwMCUsNTAlLDAuNSlcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX0hTTEEpKSkge1xuICAgICAgICAgICAgdmFyIGhzbCQxID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgaHNsJDFbMV0gKj0gMC4wMTtcbiAgICAgICAgICAgIGhzbCQxWzJdICo9IDAuMDE7XG4gICAgICAgICAgICB2YXIgcmdiJDUgPSBoc2wycmdiKGhzbCQxKTtcbiAgICAgICAgICAgIHJnYiQ1WzNdID0gK21bNF07ICAvLyBkZWZhdWx0IGFscGhhID0gMVxuICAgICAgICAgICAgcmV0dXJuIHJnYiQ1O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNzczJyZ2IkMS50ZXN0ID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIFJFX1JHQi50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9SR0JBLnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX1JHQl9QQ1QudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfUkdCQV9QQ1QudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfSFNMLnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX0hTTEEudGVzdChzKTtcbiAgICB9O1xuXG4gICAgdmFyIGNzczJyZ2JfMSA9IGNzczJyZ2IkMTtcblxuICAgIHZhciBjaHJvbWEkaSA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRCID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkZSA9IGlucHV0JGg7XG4gICAgdmFyIHR5cGUkayA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgcmdiMmNzcyA9IHJnYjJjc3NfMTtcbiAgICB2YXIgY3NzMnJnYiA9IGNzczJyZ2JfMTtcblxuICAgIENvbG9yJEIucHJvdG90eXBlLmNzcyA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJjc3ModGhpcy5fcmdiLCBtb2RlKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGkuY3NzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRCLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnY3NzJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCRlLmZvcm1hdC5jc3MgPSBjc3MycmdiO1xuXG4gICAgaW5wdXQkZS5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiA1LFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoaCkge1xuICAgICAgICAgICAgdmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tID4gMCApIHJlc3RbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgICAgICAgICAgIGlmICghcmVzdC5sZW5ndGggJiYgdHlwZSRrKGgpID09PSAnc3RyaW5nJyAmJiBjc3MycmdiLnRlc3QoaCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nzcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBDb2xvciRBID0gQ29sb3JfMTtcbiAgICB2YXIgY2hyb21hJGggPSBjaHJvbWFfMTtcbiAgICB2YXIgaW5wdXQkZCA9IGlucHV0JGg7XG4gICAgdmFyIHVucGFjayR0ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgaW5wdXQkZC5mb3JtYXQuZ2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYiA9IHVucGFjayR0KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHJnYlswXSAqPSAyNTU7XG4gICAgICAgIHJnYlsxXSAqPSAyNTU7XG4gICAgICAgIHJnYlsyXSAqPSAyNTU7XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfTtcblxuICAgIGNocm9tYSRoLmdsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRBLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnZ2wnXSkgKSk7XG4gICAgfTtcblxuICAgIENvbG9yJEEucHJvdG90eXBlLmdsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZ2IgPSB0aGlzLl9yZ2I7XG4gICAgICAgIHJldHVybiBbcmdiWzBdLzI1NSwgcmdiWzFdLzI1NSwgcmdiWzJdLzI1NSwgcmdiWzNdXTtcbiAgICB9O1xuXG4gICAgdmFyIHVucGFjayRzID0gdXRpbHMudW5wYWNrO1xuXG4gICAgdmFyIHJnYjJoY2ckMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJHMoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICAgICAgdmFyIGRlbHRhID0gbWF4IC0gbWluO1xuICAgICAgICB2YXIgYyA9IGRlbHRhICogMTAwIC8gMjU1O1xuICAgICAgICB2YXIgX2cgPSBtaW4gLyAoMjU1IC0gZGVsdGEpICogMTAwO1xuICAgICAgICB2YXIgaDtcbiAgICAgICAgaWYgKGRlbHRhID09PSAwKSB7XG4gICAgICAgICAgICBoID0gTnVtYmVyLk5hTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyID09PSBtYXgpIHsgaCA9IChnIC0gYikgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaWYgKGcgPT09IG1heCkgeyBoID0gMisoYiAtIHIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChiID09PSBtYXgpIHsgaCA9IDQrKHIgLSBnKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBoICo9IDYwO1xuICAgICAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtoLCBjLCBfZ107XG4gICAgfTtcblxuICAgIHZhciByZ2IyaGNnXzEgPSByZ2IyaGNnJDE7XG5cbiAgICB2YXIgdW5wYWNrJHIgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGZsb29yJDMgPSBNYXRoLmZsb29yO1xuXG4gICAgLypcbiAgICAgKiB0aGlzIGlzIGJhc2ljYWxseSBqdXN0IEhTViB3aXRoIHNvbWUgbWlub3IgdHdlYWtzXG4gICAgICpcbiAgICAgKiBodWUuLiBbMC4uMzYwXVxuICAgICAqIGNocm9tYSAuLiBbMC4uMV1cbiAgICAgKiBncmF5bmVzcyAuLiBbMC4uMV1cbiAgICAgKi9cblxuICAgIHZhciBoY2cycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMSwgYXNzaWduJDIsIGFzc2lnbiQzLCBhc3NpZ24kNCwgYXNzaWduJDU7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgICAgYXJncyA9IHVucGFjayRyKGFyZ3MsICdoY2cnKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBfZyA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgX2cgPSBfZyAqIDI1NTtcbiAgICAgICAgdmFyIF9jID0gYyAqIDI1NTtcbiAgICAgICAgaWYgKGMgPT09IDApIHtcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IF9nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGggPT09IDM2MCkgeyBoID0gMDsgfVxuICAgICAgICAgICAgaWYgKGggPiAzNjApIHsgaCAtPSAzNjA7IH1cbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICAgICAgaCAvPSA2MDtcbiAgICAgICAgICAgIHZhciBpID0gZmxvb3IkMyhoKTtcbiAgICAgICAgICAgIHZhciBmID0gaCAtIGk7XG4gICAgICAgICAgICB2YXIgcCA9IF9nICogKDEgLSBjKTtcbiAgICAgICAgICAgIHZhciBxID0gcCArIF9jICogKDEgLSBmKTtcbiAgICAgICAgICAgIHZhciB0ID0gcCArIF9jICogZjtcbiAgICAgICAgICAgIHZhciB2ID0gcCArIF9jO1xuICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiAoYXNzaWduID0gW3YsIHQsIHBdLCByID0gYXNzaWduWzBdLCBnID0gYXNzaWduWzFdLCBiID0gYXNzaWduWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IChhc3NpZ24kMSA9IFtxLCB2LCBwXSwgciA9IGFzc2lnbiQxWzBdLCBnID0gYXNzaWduJDFbMV0sIGIgPSBhc3NpZ24kMVsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAyOiAoYXNzaWduJDIgPSBbcCwgdiwgdF0sIHIgPSBhc3NpZ24kMlswXSwgZyA9IGFzc2lnbiQyWzFdLCBiID0gYXNzaWduJDJbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzogKGFzc2lnbiQzID0gW3AsIHEsIHZdLCByID0gYXNzaWduJDNbMF0sIGcgPSBhc3NpZ24kM1sxXSwgYiA9IGFzc2lnbiQzWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IChhc3NpZ24kNCA9IFt0LCBwLCB2XSwgciA9IGFzc2lnbiQ0WzBdLCBnID0gYXNzaWduJDRbMV0sIGIgPSBhc3NpZ24kNFsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA1OiAoYXNzaWduJDUgPSBbdiwgcCwgcV0sIHIgPSBhc3NpZ24kNVswXSwgZyA9IGFzc2lnbiQ1WzFdLCBiID0gYXNzaWduJDVbMl0pOyBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgaGNnMnJnYl8xID0gaGNnMnJnYjtcblxuICAgIHZhciB1bnBhY2skcSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRqID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGcgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkeiA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JGMgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoY2cgPSByZ2IyaGNnXzE7XG5cbiAgICBDb2xvciR6LnByb3RvdHlwZS5oY2cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoY2codGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGcuaGNnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR6LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaGNnJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCRjLmZvcm1hdC5oY2cgPSBoY2cycmdiXzE7XG5cbiAgICBpbnB1dCRjLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDEsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJHEoYXJncywgJ2hjZycpO1xuICAgICAgICAgICAgaWYgKHR5cGUkaihhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaGNnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayRwID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsYXN0ID0gdXRpbHMubGFzdDtcbiAgICB2YXIgcm91bmQkMyA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgcmdiMmhleCQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skcChhcmdzLCAncmdiYScpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgYSA9IHJlZlszXTtcbiAgICAgICAgdmFyIG1vZGUgPSBsYXN0KGFyZ3MpIHx8ICdhdXRvJztcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgeyBhID0gMTsgfVxuICAgICAgICBpZiAobW9kZSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICBtb2RlID0gYSA8IDEgPyAncmdiYScgOiAncmdiJztcbiAgICAgICAgfVxuICAgICAgICByID0gcm91bmQkMyhyKTtcbiAgICAgICAgZyA9IHJvdW5kJDMoZyk7XG4gICAgICAgIGIgPSByb3VuZCQzKGIpO1xuICAgICAgICB2YXIgdSA9IHIgPDwgMTYgfCBnIDw8IDggfCBiO1xuICAgICAgICB2YXIgc3RyID0gXCIwMDAwMDBcIiArIHUudG9TdHJpbmcoMTYpOyAvLyMudG9VcHBlckNhc2UoKTtcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cihzdHIubGVuZ3RoIC0gNik7XG4gICAgICAgIHZhciBoeGEgPSAnMCcgKyByb3VuZCQzKGEgKiAyNTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaHhhID0gaHhhLnN1YnN0cihoeGEubGVuZ3RoIC0gMik7XG4gICAgICAgIHN3aXRjaCAobW9kZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlICdyZ2JhJzogcmV0dXJuIChcIiNcIiArIHN0ciArIGh4YSk7XG4gICAgICAgICAgICBjYXNlICdhcmdiJzogcmV0dXJuIChcIiNcIiArIGh4YSArIHN0cik7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gKFwiI1wiICsgc3RyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmdiMmhleF8xID0gcmdiMmhleCQyO1xuXG4gICAgdmFyIFJFX0hFWCA9IC9eIz8oW0EtRmEtZjAtOV17Nn18W0EtRmEtZjAtOV17M30pJC87XG4gICAgdmFyIFJFX0hFWEEgPSAvXiM/KFtBLUZhLWYwLTldezh9fFtBLUZhLWYwLTldezR9KSQvO1xuXG4gICAgdmFyIGhleDJyZ2IkMSA9IGZ1bmN0aW9uIChoZXgpIHtcbiAgICAgICAgaWYgKGhleC5tYXRjaChSRV9IRVgpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb3B0aW9uYWwgbGVhZGluZyAjXG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCB8fCBoZXgubGVuZ3RoID09PSA3KSB7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGV4cGFuZCBzaG9ydC1ub3RhdGlvbiB0byBmdWxsIHNpeC1kaWdpdFxuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgIGhleCA9IGhleFswXStoZXhbMF0raGV4WzFdK2hleFsxXStoZXhbMl0raGV4WzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHUgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgICAgICAgIHZhciByID0gdSA+PiAxNjtcbiAgICAgICAgICAgIHZhciBnID0gdSA+PiA4ICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBiID0gdSAmIDB4RkY7XG4gICAgICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWF0Y2ggcmdiYSBoZXggZm9ybWF0LCBlZyAjRkYwMDAwNzdcbiAgICAgICAgaWYgKGhleC5tYXRjaChSRV9IRVhBKSkge1xuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDUgfHwgaGV4Lmxlbmd0aCA9PT0gOSkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBvcHRpb25hbCBsZWFkaW5nICNcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXhwYW5kIHNob3J0LW5vdGF0aW9uIHRvIGZ1bGwgZWlnaHQtZGlnaXRcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXhbMF0raGV4WzBdK2hleFsxXStoZXhbMV0raGV4WzJdK2hleFsyXStoZXhbM10raGV4WzNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHUkMSA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgICAgICAgdmFyIHIkMSA9IHUkMSA+PiAyNCAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgZyQxID0gdSQxID4+IDE2ICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBiJDEgPSB1JDEgPj4gOCAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYSA9IE1hdGgucm91bmQoKHUkMSAmIDB4RkYpIC8gMHhGRiAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgICByZXR1cm4gW3IkMSxnJDEsYiQxLGFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2UgdXNlZCB0byBjaGVjayBmb3IgY3NzIGNvbG9ycyBoZXJlXG4gICAgICAgIC8vIGlmIF9pbnB1dC5jc3M/IGFuZCByZ2IgPSBfaW5wdXQuY3NzIGhleFxuICAgICAgICAvLyAgICAgcmV0dXJuIHJnYlxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJ1bmtub3duIGhleCBjb2xvcjogXCIgKyBoZXgpKTtcbiAgICB9O1xuXG4gICAgdmFyIGhleDJyZ2JfMSA9IGhleDJyZ2IkMTtcblxuICAgIHZhciBjaHJvbWEkZiA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR5ID0gQ29sb3JfMTtcbiAgICB2YXIgdHlwZSRpID0gdXRpbHMudHlwZTtcbiAgICB2YXIgaW5wdXQkYiA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmhleCQxID0gcmdiMmhleF8xO1xuXG4gICAgQ29sb3IkeS5wcm90b3R5cGUuaGV4ID0gZnVuY3Rpb24obW9kZSkge1xuICAgICAgICByZXR1cm4gcmdiMmhleCQxKHRoaXMuX3JnYiwgbW9kZSk7XG4gICAgfTtcblxuICAgIGNocm9tYSRmLmhleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkeSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hleCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkYi5mb3JtYXQuaGV4ID0gaGV4MnJnYl8xO1xuICAgIGlucHV0JGIuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNCxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUkaShoKSA9PT0gJ3N0cmluZycgJiYgWzMsNCw1LDYsNyw4LDldLmluZGV4T2YoaC5sZW5ndGgpID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skbyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgVFdPUEkkMiA9IHV0aWxzLlRXT1BJO1xuICAgIHZhciBtaW4kMiA9IE1hdGgubWluO1xuICAgIHZhciBzcXJ0JDQgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIGFjb3MgPSBNYXRoLmFjb3M7XG5cbiAgICB2YXIgcmdiMmhzaSQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIC8qXG4gICAgICAgIGJvcnJvd2VkIGZyb20gaGVyZTpcbiAgICAgICAgaHR0cDovL2h1bW1lci5zdGFuZm9yZC5lZHUvbXVzZWluZm8vZG9jL2V4YW1wbGVzL2h1bWRydW0va2V5c2NhcGUyL3JnYjJoc2kuY3BwXG4gICAgICAgICovXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skbyhhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHIgLz0gMjU1O1xuICAgICAgICBnIC89IDI1NTtcbiAgICAgICAgYiAvPSAyNTU7XG4gICAgICAgIHZhciBoO1xuICAgICAgICB2YXIgbWluXyA9IG1pbiQyKHIsZyxiKTtcbiAgICAgICAgdmFyIGkgPSAocitnK2IpIC8gMztcbiAgICAgICAgdmFyIHMgPSBpID4gMCA/IDEgLSBtaW5fL2kgOiAwO1xuICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgaCA9IE5hTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGggPSAoKHItZykrKHItYikpIC8gMjtcbiAgICAgICAgICAgIGggLz0gc3FydCQ0KChyLWcpKihyLWcpICsgKHItYikqKGctYikpO1xuICAgICAgICAgICAgaCA9IGFjb3MoaCk7XG4gICAgICAgICAgICBpZiAoYiA+IGcpIHtcbiAgICAgICAgICAgICAgICBoID0gVFdPUEkkMiAtIGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoIC89IFRXT1BJJDI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtoKjM2MCxzLGldO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmhzaV8xID0gcmdiMmhzaSQxO1xuXG4gICAgdmFyIHVucGFjayRuID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsaW1pdCA9IHV0aWxzLmxpbWl0O1xuICAgIHZhciBUV09QSSQxID0gdXRpbHMuVFdPUEk7XG4gICAgdmFyIFBJVEhJUkQgPSB1dGlscy5QSVRISVJEO1xuICAgIHZhciBjb3MkNCA9IE1hdGguY29zO1xuXG4gICAgLypcbiAgICAgKiBodWUgWzAuLjM2MF1cbiAgICAgKiBzYXR1cmF0aW9uIFswLi4xXVxuICAgICAqIGludGVuc2l0eSBbMC4uMV1cbiAgICAgKi9cbiAgICB2YXIgaHNpMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvKlxuICAgICAgICBib3Jyb3dlZCBmcm9tIGhlcmU6XG4gICAgICAgIGh0dHA6Ly9odW1tZXIuc3RhbmZvcmQuZWR1L211c2VpbmZvL2RvYy9leGFtcGxlcy9odW1kcnVtL2tleXNjYXBlMi9oc2kycmdiLmNwcFxuICAgICAgICAqL1xuICAgICAgICBhcmdzID0gdW5wYWNrJG4oYXJncywgJ2hzaScpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBzID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGkgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG5cbiAgICAgICAgaWYgKGlzTmFOKGgpKSB7IGggPSAwOyB9XG4gICAgICAgIGlmIChpc05hTihzKSkgeyBzID0gMDsgfVxuICAgICAgICAvLyBub3JtYWxpemUgaHVlXG4gICAgICAgIGlmIChoID4gMzYwKSB7IGggLT0gMzYwOyB9XG4gICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICBoIC89IDM2MDtcbiAgICAgICAgaWYgKGggPCAxLzMpIHtcbiAgICAgICAgICAgIGIgPSAoMS1zKS8zO1xuICAgICAgICAgICAgciA9ICgxK3MqY29zJDQoVFdPUEkkMSpoKS9jb3MkNChQSVRISVJELVRXT1BJJDEqaCkpLzM7XG4gICAgICAgICAgICBnID0gMSAtIChiK3IpO1xuICAgICAgICB9IGVsc2UgaWYgKGggPCAyLzMpIHtcbiAgICAgICAgICAgIGggLT0gMS8zO1xuICAgICAgICAgICAgciA9ICgxLXMpLzM7XG4gICAgICAgICAgICBnID0gKDErcypjb3MkNChUV09QSSQxKmgpL2NvcyQ0KFBJVEhJUkQtVFdPUEkkMSpoKSkvMztcbiAgICAgICAgICAgIGIgPSAxIC0gKHIrZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoIC09IDIvMztcbiAgICAgICAgICAgIGcgPSAoMS1zKS8zO1xuICAgICAgICAgICAgYiA9ICgxK3MqY29zJDQoVFdPUEkkMSpoKS9jb3MkNChQSVRISVJELVRXT1BJJDEqaCkpLzM7XG4gICAgICAgICAgICByID0gMSAtIChnK2IpO1xuICAgICAgICB9XG4gICAgICAgIHIgPSBsaW1pdChpKnIqMyk7XG4gICAgICAgIGcgPSBsaW1pdChpKmcqMyk7XG4gICAgICAgIGIgPSBsaW1pdChpKmIqMyk7XG4gICAgICAgIHJldHVybiBbcioyNTUsIGcqMjU1LCBiKjI1NSwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgaHNpMnJnYl8xID0gaHNpMnJnYjtcblxuICAgIHZhciB1bnBhY2skbSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRoID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGUgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkeCA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JGEgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoc2kgPSByZ2IyaHNpXzE7XG5cbiAgICBDb2xvciR4LnByb3RvdHlwZS5oc2kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoc2kodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGUuaHNpID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR4LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaHNpJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCRhLmZvcm1hdC5oc2kgPSBoc2kycmdiXzE7XG5cbiAgICBpbnB1dCRhLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJG0oYXJncywgJ2hzaScpO1xuICAgICAgICAgICAgaWYgKHR5cGUkaChhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaHNpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayRsID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGcgPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkZCA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR3ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkOSA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmhzbCQxID0gcmdiMmhzbF8xO1xuXG4gICAgQ29sb3Ikdy5wcm90b3R5cGUuaHNsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaHNsJDEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGQuaHNsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR3LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaHNsJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ5LmZvcm1hdC5oc2wgPSBoc2wycmdiXzE7XG5cbiAgICBpbnB1dCQ5LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJGwoYXJncywgJ2hzbCcpO1xuICAgICAgICAgICAgaWYgKHR5cGUkZyhhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaHNsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayRrID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBtaW4kMSA9IE1hdGgubWluO1xuICAgIHZhciBtYXgkMSA9IE1hdGgubWF4O1xuXG4gICAgLypcbiAgICAgKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICAgICAqIC0gcmdiMmhzdihyLGcsYilcbiAgICAgKiAtIHJnYjJoc3YoW3IsZyxiXSlcbiAgICAgKiAtIHJnYjJoc3Yoe3IsZyxifSlcbiAgICAgKi9cbiAgICB2YXIgcmdiMmhzbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJGsoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBnID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgbWluXyA9IG1pbiQxKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4XyA9IG1heCQxKHIsIGcsIGIpO1xuICAgICAgICB2YXIgZGVsdGEgPSBtYXhfIC0gbWluXztcbiAgICAgICAgdmFyIGgscyx2O1xuICAgICAgICB2ID0gbWF4XyAvIDI1NS4wO1xuICAgICAgICBpZiAobWF4XyA9PT0gMCkge1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgICAgICBzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMgPSBkZWx0YSAvIG1heF87XG4gICAgICAgICAgICBpZiAociA9PT0gbWF4XykgeyBoID0gKGcgLSBiKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoZyA9PT0gbWF4XykgeyBoID0gMisoYiAtIHIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChiID09PSBtYXhfKSB7IGggPSA0KyhyIC0gZykgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbaCwgcywgdl1cbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoc3YkMSA9IHJnYjJoc2w7XG5cbiAgICB2YXIgdW5wYWNrJGogPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGZsb29yJDIgPSBNYXRoLmZsb29yO1xuXG4gICAgdmFyIGhzdjJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxLCBhc3NpZ24kMiwgYXNzaWduJDMsIGFzc2lnbiQ0LCBhc3NpZ24kNTtcblxuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuICAgICAgICBhcmdzID0gdW5wYWNrJGooYXJncywgJ2hzdicpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBzID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIHYgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIHYgKj0gMjU1O1xuICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgciA9IGcgPSBiID0gdjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoID09PSAzNjApIHsgaCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChoID4gMzYwKSB7IGggLT0gMzYwOyB9XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgICAgIGggLz0gNjA7XG5cbiAgICAgICAgICAgIHZhciBpID0gZmxvb3IkMihoKTtcbiAgICAgICAgICAgIHZhciBmID0gaCAtIGk7XG4gICAgICAgICAgICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xuICAgICAgICAgICAgdmFyIHEgPSB2ICogKDEgLSBzICogZik7XG4gICAgICAgICAgICB2YXIgdCA9IHYgKiAoMSAtIHMgKiAoMSAtIGYpKTtcblxuICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiAoYXNzaWduID0gW3YsIHQsIHBdLCByID0gYXNzaWduWzBdLCBnID0gYXNzaWduWzFdLCBiID0gYXNzaWduWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IChhc3NpZ24kMSA9IFtxLCB2LCBwXSwgciA9IGFzc2lnbiQxWzBdLCBnID0gYXNzaWduJDFbMV0sIGIgPSBhc3NpZ24kMVsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAyOiAoYXNzaWduJDIgPSBbcCwgdiwgdF0sIHIgPSBhc3NpZ24kMlswXSwgZyA9IGFzc2lnbiQyWzFdLCBiID0gYXNzaWduJDJbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzogKGFzc2lnbiQzID0gW3AsIHEsIHZdLCByID0gYXNzaWduJDNbMF0sIGcgPSBhc3NpZ24kM1sxXSwgYiA9IGFzc2lnbiQzWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IChhc3NpZ24kNCA9IFt0LCBwLCB2XSwgciA9IGFzc2lnbiQ0WzBdLCBnID0gYXNzaWduJDRbMV0sIGIgPSBhc3NpZ24kNFsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA1OiAoYXNzaWduJDUgPSBbdiwgcCwgcV0sIHIgPSBhc3NpZ24kNVswXSwgZyA9IGFzc2lnbiQ1WzFdLCBiID0gYXNzaWduJDVbMl0pOyBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcixnLGIsYXJncy5sZW5ndGggPiAzP2FyZ3NbM106MV07XG4gICAgfTtcblxuICAgIHZhciBoc3YycmdiXzEgPSBoc3YycmdiO1xuXG4gICAgdmFyIHVucGFjayRpID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGYgPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkYyA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR2ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkOCA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmhzdiA9IHJnYjJoc3YkMTtcblxuICAgIENvbG9yJHYucHJvdG90eXBlLmhzdiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmhzdih0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkYy5oc3YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHYsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoc3YnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDguZm9ybWF0LmhzdiA9IGhzdjJyZ2JfMTtcblxuICAgIGlucHV0JDguYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skaShhcmdzLCAnaHN2Jyk7XG4gICAgICAgICAgICBpZiAodHlwZSRmKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoc3YnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgbGFiQ29uc3RhbnRzID0ge1xuICAgICAgICAvLyBDb3JyZXNwb25kcyByb3VnaGx5IHRvIFJHQiBicmlnaHRlci9kYXJrZXJcbiAgICAgICAgS246IDE4LFxuXG4gICAgICAgIC8vIEQ2NSBzdGFuZGFyZCByZWZlcmVudFxuICAgICAgICBYbjogMC45NTA0NzAsXG4gICAgICAgIFluOiAxLFxuICAgICAgICBabjogMS4wODg4MzAsXG5cbiAgICAgICAgdDA6IDAuMTM3OTMxMDM0LCAgLy8gNCAvIDI5XG4gICAgICAgIHQxOiAwLjIwNjg5NjU1MiwgIC8vIDYgLyAyOVxuICAgICAgICB0MjogMC4xMjg0MTg1NSwgICAvLyAzICogdDEgKiB0MVxuICAgICAgICB0MzogMC4wMDg4NTY0NTIsICAvLyB0MSAqIHQxICogdDFcbiAgICB9O1xuXG4gICAgdmFyIExBQl9DT05TVEFOVFMkMyA9IGxhYkNvbnN0YW50cztcbiAgICB2YXIgdW5wYWNrJGggPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHBvdyRhID0gTWF0aC5wb3c7XG5cbiAgICB2YXIgcmdiMmxhYiQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skaChhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IHJnYjJ4eXoocixnLGIpO1xuICAgICAgICB2YXIgeCA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgeSA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgeiA9IHJlZiQxWzJdO1xuICAgICAgICB2YXIgbCA9IDExNiAqIHkgLSAxNjtcbiAgICAgICAgcmV0dXJuIFtsIDwgMCA/IDAgOiBsLCA1MDAgKiAoeCAtIHkpLCAyMDAgKiAoeSAtIHopXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYl94eXogPSBmdW5jdGlvbiAocikge1xuICAgICAgICBpZiAoKHIgLz0gMjU1KSA8PSAwLjA0MDQ1KSB7IHJldHVybiByIC8gMTIuOTI7IH1cbiAgICAgICAgcmV0dXJuIHBvdyRhKChyICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgfTtcblxuICAgIHZhciB4eXpfbGFiID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQgPiBMQUJfQ09OU1RBTlRTJDMudDMpIHsgcmV0dXJuIHBvdyRhKHQsIDEgLyAzKTsgfVxuICAgICAgICByZXR1cm4gdCAvIExBQl9DT05TVEFOVFMkMy50MiArIExBQl9DT05TVEFOVFMkMy50MDtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJ4eXogPSBmdW5jdGlvbiAocixnLGIpIHtcbiAgICAgICAgciA9IHJnYl94eXoocik7XG4gICAgICAgIGcgPSByZ2JfeHl6KGcpO1xuICAgICAgICBiID0gcmdiX3h5eihiKTtcbiAgICAgICAgdmFyIHggPSB4eXpfbGFiKCgwLjQxMjQ1NjQgKiByICsgMC4zNTc1NzYxICogZyArIDAuMTgwNDM3NSAqIGIpIC8gTEFCX0NPTlNUQU5UUyQzLlhuKTtcbiAgICAgICAgdmFyIHkgPSB4eXpfbGFiKCgwLjIxMjY3MjkgKiByICsgMC43MTUxNTIyICogZyArIDAuMDcyMTc1MCAqIGIpIC8gTEFCX0NPTlNUQU5UUyQzLlluKTtcbiAgICAgICAgdmFyIHogPSB4eXpfbGFiKCgwLjAxOTMzMzkgKiByICsgMC4xMTkxOTIwICogZyArIDAuOTUwMzA0MSAqIGIpIC8gTEFCX0NPTlNUQU5UUyQzLlpuKTtcbiAgICAgICAgcmV0dXJuIFt4LHksel07XG4gICAgfTtcblxuICAgIHZhciByZ2IybGFiXzEgPSByZ2IybGFiJDI7XG5cbiAgICB2YXIgTEFCX0NPTlNUQU5UUyQyID0gbGFiQ29uc3RhbnRzO1xuICAgIHZhciB1bnBhY2skZyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcG93JDkgPSBNYXRoLnBvdztcblxuICAgIC8qXG4gICAgICogTCogWzAuLjEwMF1cbiAgICAgKiBhIFstMTAwLi4xMDBdXG4gICAgICogYiBbLTEwMC4uMTAwXVxuICAgICAqL1xuICAgIHZhciBsYWIycmdiJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayRnKGFyZ3MsICdsYWInKTtcbiAgICAgICAgdmFyIGwgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYSA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBiID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHgseSx6LCByLGcsYl87XG5cbiAgICAgICAgeSA9IChsICsgMTYpIC8gMTE2O1xuICAgICAgICB4ID0gaXNOYU4oYSkgPyB5IDogeSArIGEgLyA1MDA7XG4gICAgICAgIHogPSBpc05hTihiKSA/IHkgOiB5IC0gYiAvIDIwMDtcblxuICAgICAgICB5ID0gTEFCX0NPTlNUQU5UUyQyLlluICogbGFiX3h5eih5KTtcbiAgICAgICAgeCA9IExBQl9DT05TVEFOVFMkMi5YbiAqIGxhYl94eXooeCk7XG4gICAgICAgIHogPSBMQUJfQ09OU1RBTlRTJDIuWm4gKiBsYWJfeHl6KHopO1xuXG4gICAgICAgIHIgPSB4eXpfcmdiKDMuMjQwNDU0MiAqIHggLSAxLjUzNzEzODUgKiB5IC0gMC40OTg1MzE0ICogeik7ICAvLyBENjUgLT4gc1JHQlxuICAgICAgICBnID0geHl6X3JnYigtMC45NjkyNjYwICogeCArIDEuODc2MDEwOCAqIHkgKyAwLjA0MTU1NjAgKiB6KTtcbiAgICAgICAgYl8gPSB4eXpfcmdiKDAuMDU1NjQzNCAqIHggLSAwLjIwNDAyNTkgKiB5ICsgMS4wNTcyMjUyICogeik7XG5cbiAgICAgICAgcmV0dXJuIFtyLGcsYl8sYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgeHl6X3JnYiA9IGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHJldHVybiAyNTUgKiAociA8PSAwLjAwMzA0ID8gMTIuOTIgKiByIDogMS4wNTUgKiBwb3ckOShyLCAxIC8gMi40KSAtIDAuMDU1KVxuICAgIH07XG5cbiAgICB2YXIgbGFiX3h5eiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0ID4gTEFCX0NPTlNUQU5UUyQyLnQxID8gdCAqIHQgKiB0IDogTEFCX0NPTlNUQU5UUyQyLnQyICogKHQgLSBMQUJfQ09OU1RBTlRTJDIudDApXG4gICAgfTtcblxuICAgIHZhciBsYWIycmdiXzEgPSBsYWIycmdiJDE7XG5cbiAgICB2YXIgdW5wYWNrJGYgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkZSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRiID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHUgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQ3ID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IybGFiJDEgPSByZ2IybGFiXzE7XG5cbiAgICBDb2xvciR1LnByb3RvdHlwZS5sYWIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJsYWIkMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkYi5sYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHUsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydsYWInXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDcuZm9ybWF0LmxhYiA9IGxhYjJyZ2JfMTtcblxuICAgIGlucHV0JDcuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skZihhcmdzLCAnbGFiJyk7XG4gICAgICAgICAgICBpZiAodHlwZSRlKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdsYWInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJGUgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIFJBRDJERUcgPSB1dGlscy5SQUQyREVHO1xuICAgIHZhciBzcXJ0JDMgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIGF0YW4yJDIgPSBNYXRoLmF0YW4yO1xuICAgIHZhciByb3VuZCQyID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciBsYWIybGNoJDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRlKGFyZ3MsICdsYWInKTtcbiAgICAgICAgdmFyIGwgPSByZWZbMF07XG4gICAgICAgIHZhciBhID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIGMgPSBzcXJ0JDMoYSAqIGEgKyBiICogYik7XG4gICAgICAgIHZhciBoID0gKGF0YW4yJDIoYiwgYSkgKiBSQUQyREVHICsgMzYwKSAlIDM2MDtcbiAgICAgICAgaWYgKHJvdW5kJDIoYyoxMDAwMCkgPT09IDApIHsgaCA9IE51bWJlci5OYU47IH1cbiAgICAgICAgcmV0dXJuIFtsLCBjLCBoXTtcbiAgICB9O1xuXG4gICAgdmFyIGxhYjJsY2hfMSA9IGxhYjJsY2gkMjtcblxuICAgIHZhciB1bnBhY2skZCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcmdiMmxhYiA9IHJnYjJsYWJfMTtcbiAgICB2YXIgbGFiMmxjaCQxID0gbGFiMmxjaF8xO1xuXG4gICAgdmFyIHJnYjJsY2gkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJGQoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSByZ2IybGFiKHIsZyxiKTtcbiAgICAgICAgdmFyIGwgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGEgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGJfID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBsYWIybGNoJDEobCxhLGJfKTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJsY2hfMSA9IHJnYjJsY2gkMTtcblxuICAgIHZhciB1bnBhY2skYyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgREVHMlJBRCA9IHV0aWxzLkRFRzJSQUQ7XG4gICAgdmFyIHNpbiQzID0gTWF0aC5zaW47XG4gICAgdmFyIGNvcyQzID0gTWF0aC5jb3M7XG5cbiAgICB2YXIgbGNoMmxhYiQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIC8qXG4gICAgICAgIENvbnZlcnQgZnJvbSBhIHF1YWxpdGF0aXZlIHBhcmFtZXRlciBoIGFuZCBhIHF1YW50aXRhdGl2ZSBwYXJhbWV0ZXIgbCB0byBhIDI0LWJpdCBwaXhlbC5cbiAgICAgICAgVGhlc2UgZm9ybXVsYXMgd2VyZSBpbnZlbnRlZCBieSBEYXZpZCBEYWxyeW1wbGUgdG8gb2J0YWluIG1heGltdW0gY29udHJhc3Qgd2l0aG91dCBnb2luZ1xuICAgICAgICBvdXQgb2YgZ2FtdXQgaWYgdGhlIHBhcmFtZXRlcnMgYXJlIGluIHRoZSByYW5nZSAwLTEuXG5cbiAgICAgICAgQSBzYXR1cmF0aW9uIG11bHRpcGxpZXIgd2FzIGFkZGVkIGJ5IEdyZWdvciBBaXNjaFxuICAgICAgICAqL1xuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJGMoYXJncywgJ2xjaCcpO1xuICAgICAgICB2YXIgbCA9IHJlZlswXTtcbiAgICAgICAgdmFyIGMgPSByZWZbMV07XG4gICAgICAgIHZhciBoID0gcmVmWzJdO1xuICAgICAgICBpZiAoaXNOYU4oaCkpIHsgaCA9IDA7IH1cbiAgICAgICAgaCA9IGggKiBERUcyUkFEO1xuICAgICAgICByZXR1cm4gW2wsIGNvcyQzKGgpICogYywgc2luJDMoaCkgKiBjXVxuICAgIH07XG5cbiAgICB2YXIgbGNoMmxhYl8xID0gbGNoMmxhYiQyO1xuXG4gICAgdmFyIHVucGFjayRiID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsY2gybGFiJDEgPSBsY2gybGFiXzE7XG4gICAgdmFyIGxhYjJyZ2IgPSBsYWIycmdiXzE7XG5cbiAgICB2YXIgbGNoMnJnYiQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skYihhcmdzLCAnbGNoJyk7XG4gICAgICAgIHZhciBsID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByZWYgPSBsY2gybGFiJDEgKGwsYyxoKTtcbiAgICAgICAgdmFyIEwgPSByZWZbMF07XG4gICAgICAgIHZhciBhID0gcmVmWzFdO1xuICAgICAgICB2YXIgYl8gPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IGxhYjJyZ2IgKEwsYSxiXyk7XG4gICAgICAgIHZhciByID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBnID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgbGNoMnJnYl8xID0gbGNoMnJnYiQxO1xuXG4gICAgdmFyIHVucGFjayRhID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsY2gycmdiID0gbGNoMnJnYl8xO1xuXG4gICAgdmFyIGhjbDJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIGhjbCA9IHVucGFjayRhKGFyZ3MsICdoY2wnKS5yZXZlcnNlKCk7XG4gICAgICAgIHJldHVybiBsY2gycmdiLmFwcGx5KHZvaWQgMCwgaGNsKTtcbiAgICB9O1xuXG4gICAgdmFyIGhjbDJyZ2JfMSA9IGhjbDJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJDkgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkZCA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRhID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHQgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQ2ID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IybGNoID0gcmdiMmxjaF8xO1xuXG4gICAgQ29sb3IkdC5wcm90b3R5cGUubGNoID0gZnVuY3Rpb24oKSB7IHJldHVybiByZ2IybGNoKHRoaXMuX3JnYik7IH07XG4gICAgQ29sb3IkdC5wcm90b3R5cGUuaGNsID0gZnVuY3Rpb24oKSB7IHJldHVybiByZ2IybGNoKHRoaXMuX3JnYikucmV2ZXJzZSgpOyB9O1xuXG4gICAgY2hyb21hJGEubGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR0LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnbGNoJ10pICkpO1xuICAgIH07XG4gICAgY2hyb21hJGEuaGNsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR0LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaGNsJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ2LmZvcm1hdC5sY2ggPSBsY2gycmdiXzE7XG4gICAgaW5wdXQkNi5mb3JtYXQuaGNsID0gaGNsMnJnYl8xO1xuXG4gICAgWydsY2gnLCdoY2wnXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7IHJldHVybiBpbnB1dCQ2LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJDkoYXJncywgbSk7XG4gICAgICAgICAgICBpZiAodHlwZSRkKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTsgfSk7XG5cbiAgICAvKipcbiAgICBcdFgxMSBjb2xvciBuYW1lc1xuXG4gICAgXHRodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbiAgICAqL1xuXG4gICAgdmFyIHczY3gxMSQxID0ge1xuICAgICAgICBhbGljZWJsdWU6ICcjZjBmOGZmJyxcbiAgICAgICAgYW50aXF1ZXdoaXRlOiAnI2ZhZWJkNycsXG4gICAgICAgIGFxdWE6ICcjMDBmZmZmJyxcbiAgICAgICAgYXF1YW1hcmluZTogJyM3ZmZmZDQnLFxuICAgICAgICBhenVyZTogJyNmMGZmZmYnLFxuICAgICAgICBiZWlnZTogJyNmNWY1ZGMnLFxuICAgICAgICBiaXNxdWU6ICcjZmZlNGM0JyxcbiAgICAgICAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgICAgICAgYmxhbmNoZWRhbG1vbmQ6ICcjZmZlYmNkJyxcbiAgICAgICAgYmx1ZTogJyMwMDAwZmYnLFxuICAgICAgICBibHVldmlvbGV0OiAnIzhhMmJlMicsXG4gICAgICAgIGJyb3duOiAnI2E1MmEyYScsXG4gICAgICAgIGJ1cmx5d29vZDogJyNkZWI4ODcnLFxuICAgICAgICBjYWRldGJsdWU6ICcjNWY5ZWEwJyxcbiAgICAgICAgY2hhcnRyZXVzZTogJyM3ZmZmMDAnLFxuICAgICAgICBjaG9jb2xhdGU6ICcjZDI2OTFlJyxcbiAgICAgICAgY29yYWw6ICcjZmY3ZjUwJyxcbiAgICAgICAgY29ybmZsb3dlcjogJyM2NDk1ZWQnLFxuICAgICAgICBjb3JuZmxvd2VyYmx1ZTogJyM2NDk1ZWQnLFxuICAgICAgICBjb3Juc2lsazogJyNmZmY4ZGMnLFxuICAgICAgICBjcmltc29uOiAnI2RjMTQzYycsXG4gICAgICAgIGN5YW46ICcjMDBmZmZmJyxcbiAgICAgICAgZGFya2JsdWU6ICcjMDAwMDhiJyxcbiAgICAgICAgZGFya2N5YW46ICcjMDA4YjhiJyxcbiAgICAgICAgZGFya2dvbGRlbnJvZDogJyNiODg2MGInLFxuICAgICAgICBkYXJrZ3JheTogJyNhOWE5YTknLFxuICAgICAgICBkYXJrZ3JlZW46ICcjMDA2NDAwJyxcbiAgICAgICAgZGFya2dyZXk6ICcjYTlhOWE5JyxcbiAgICAgICAgZGFya2toYWtpOiAnI2JkYjc2YicsXG4gICAgICAgIGRhcmttYWdlbnRhOiAnIzhiMDA4YicsXG4gICAgICAgIGRhcmtvbGl2ZWdyZWVuOiAnIzU1NmIyZicsXG4gICAgICAgIGRhcmtvcmFuZ2U6ICcjZmY4YzAwJyxcbiAgICAgICAgZGFya29yY2hpZDogJyM5OTMyY2MnLFxuICAgICAgICBkYXJrcmVkOiAnIzhiMDAwMCcsXG4gICAgICAgIGRhcmtzYWxtb246ICcjZTk5NjdhJyxcbiAgICAgICAgZGFya3NlYWdyZWVuOiAnIzhmYmM4ZicsXG4gICAgICAgIGRhcmtzbGF0ZWJsdWU6ICcjNDgzZDhiJyxcbiAgICAgICAgZGFya3NsYXRlZ3JheTogJyMyZjRmNGYnLFxuICAgICAgICBkYXJrc2xhdGVncmV5OiAnIzJmNGY0ZicsXG4gICAgICAgIGRhcmt0dXJxdW9pc2U6ICcjMDBjZWQxJyxcbiAgICAgICAgZGFya3Zpb2xldDogJyM5NDAwZDMnLFxuICAgICAgICBkZWVwcGluazogJyNmZjE0OTMnLFxuICAgICAgICBkZWVwc2t5Ymx1ZTogJyMwMGJmZmYnLFxuICAgICAgICBkaW1ncmF5OiAnIzY5Njk2OScsXG4gICAgICAgIGRpbWdyZXk6ICcjNjk2OTY5JyxcbiAgICAgICAgZG9kZ2VyYmx1ZTogJyMxZTkwZmYnLFxuICAgICAgICBmaXJlYnJpY2s6ICcjYjIyMjIyJyxcbiAgICAgICAgZmxvcmFsd2hpdGU6ICcjZmZmYWYwJyxcbiAgICAgICAgZm9yZXN0Z3JlZW46ICcjMjI4YjIyJyxcbiAgICAgICAgZnVjaHNpYTogJyNmZjAwZmYnLFxuICAgICAgICBnYWluc2Jvcm86ICcjZGNkY2RjJyxcbiAgICAgICAgZ2hvc3R3aGl0ZTogJyNmOGY4ZmYnLFxuICAgICAgICBnb2xkOiAnI2ZmZDcwMCcsXG4gICAgICAgIGdvbGRlbnJvZDogJyNkYWE1MjAnLFxuICAgICAgICBncmF5OiAnIzgwODA4MCcsXG4gICAgICAgIGdyZWVuOiAnIzAwODAwMCcsXG4gICAgICAgIGdyZWVueWVsbG93OiAnI2FkZmYyZicsXG4gICAgICAgIGdyZXk6ICcjODA4MDgwJyxcbiAgICAgICAgaG9uZXlkZXc6ICcjZjBmZmYwJyxcbiAgICAgICAgaG90cGluazogJyNmZjY5YjQnLFxuICAgICAgICBpbmRpYW5yZWQ6ICcjY2Q1YzVjJyxcbiAgICAgICAgaW5kaWdvOiAnIzRiMDA4MicsXG4gICAgICAgIGl2b3J5OiAnI2ZmZmZmMCcsXG4gICAgICAgIGtoYWtpOiAnI2YwZTY4YycsXG4gICAgICAgIGxhc2VybGVtb246ICcjZmZmZjU0JyxcbiAgICAgICAgbGF2ZW5kZXI6ICcjZTZlNmZhJyxcbiAgICAgICAgbGF2ZW5kZXJibHVzaDogJyNmZmYwZjUnLFxuICAgICAgICBsYXduZ3JlZW46ICcjN2NmYzAwJyxcbiAgICAgICAgbGVtb25jaGlmZm9uOiAnI2ZmZmFjZCcsXG4gICAgICAgIGxpZ2h0Ymx1ZTogJyNhZGQ4ZTYnLFxuICAgICAgICBsaWdodGNvcmFsOiAnI2YwODA4MCcsXG4gICAgICAgIGxpZ2h0Y3lhbjogJyNlMGZmZmYnLFxuICAgICAgICBsaWdodGdvbGRlbnJvZDogJyNmYWZhZDInLFxuICAgICAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogJyNmYWZhZDInLFxuICAgICAgICBsaWdodGdyYXk6ICcjZDNkM2QzJyxcbiAgICAgICAgbGlnaHRncmVlbjogJyM5MGVlOTAnLFxuICAgICAgICBsaWdodGdyZXk6ICcjZDNkM2QzJyxcbiAgICAgICAgbGlnaHRwaW5rOiAnI2ZmYjZjMScsXG4gICAgICAgIGxpZ2h0c2FsbW9uOiAnI2ZmYTA3YScsXG4gICAgICAgIGxpZ2h0c2VhZ3JlZW46ICcjMjBiMmFhJyxcbiAgICAgICAgbGlnaHRza3libHVlOiAnIzg3Y2VmYScsXG4gICAgICAgIGxpZ2h0c2xhdGVncmF5OiAnIzc3ODg5OScsXG4gICAgICAgIGxpZ2h0c2xhdGVncmV5OiAnIzc3ODg5OScsXG4gICAgICAgIGxpZ2h0c3RlZWxibHVlOiAnI2IwYzRkZScsXG4gICAgICAgIGxpZ2h0eWVsbG93OiAnI2ZmZmZlMCcsXG4gICAgICAgIGxpbWU6ICcjMDBmZjAwJyxcbiAgICAgICAgbGltZWdyZWVuOiAnIzMyY2QzMicsXG4gICAgICAgIGxpbmVuOiAnI2ZhZjBlNicsXG4gICAgICAgIG1hZ2VudGE6ICcjZmYwMGZmJyxcbiAgICAgICAgbWFyb29uOiAnIzgwMDAwMCcsXG4gICAgICAgIG1hcm9vbjI6ICcjN2YwMDAwJyxcbiAgICAgICAgbWFyb29uMzogJyNiMDMwNjAnLFxuICAgICAgICBtZWRpdW1hcXVhbWFyaW5lOiAnIzY2Y2RhYScsXG4gICAgICAgIG1lZGl1bWJsdWU6ICcjMDAwMGNkJyxcbiAgICAgICAgbWVkaXVtb3JjaGlkOiAnI2JhNTVkMycsXG4gICAgICAgIG1lZGl1bXB1cnBsZTogJyM5MzcwZGInLFxuICAgICAgICBtZWRpdW1zZWFncmVlbjogJyMzY2IzNzEnLFxuICAgICAgICBtZWRpdW1zbGF0ZWJsdWU6ICcjN2I2OGVlJyxcbiAgICAgICAgbWVkaXVtc3ByaW5nZ3JlZW46ICcjMDBmYTlhJyxcbiAgICAgICAgbWVkaXVtdHVycXVvaXNlOiAnIzQ4ZDFjYycsXG4gICAgICAgIG1lZGl1bXZpb2xldHJlZDogJyNjNzE1ODUnLFxuICAgICAgICBtaWRuaWdodGJsdWU6ICcjMTkxOTcwJyxcbiAgICAgICAgbWludGNyZWFtOiAnI2Y1ZmZmYScsXG4gICAgICAgIG1pc3R5cm9zZTogJyNmZmU0ZTEnLFxuICAgICAgICBtb2NjYXNpbjogJyNmZmU0YjUnLFxuICAgICAgICBuYXZham93aGl0ZTogJyNmZmRlYWQnLFxuICAgICAgICBuYXZ5OiAnIzAwMDA4MCcsXG4gICAgICAgIG9sZGxhY2U6ICcjZmRmNWU2JyxcbiAgICAgICAgb2xpdmU6ICcjODA4MDAwJyxcbiAgICAgICAgb2xpdmVkcmFiOiAnIzZiOGUyMycsXG4gICAgICAgIG9yYW5nZTogJyNmZmE1MDAnLFxuICAgICAgICBvcmFuZ2VyZWQ6ICcjZmY0NTAwJyxcbiAgICAgICAgb3JjaGlkOiAnI2RhNzBkNicsXG4gICAgICAgIHBhbGVnb2xkZW5yb2Q6ICcjZWVlOGFhJyxcbiAgICAgICAgcGFsZWdyZWVuOiAnIzk4ZmI5OCcsXG4gICAgICAgIHBhbGV0dXJxdW9pc2U6ICcjYWZlZWVlJyxcbiAgICAgICAgcGFsZXZpb2xldHJlZDogJyNkYjcwOTMnLFxuICAgICAgICBwYXBheWF3aGlwOiAnI2ZmZWZkNScsXG4gICAgICAgIHBlYWNocHVmZjogJyNmZmRhYjknLFxuICAgICAgICBwZXJ1OiAnI2NkODUzZicsXG4gICAgICAgIHBpbms6ICcjZmZjMGNiJyxcbiAgICAgICAgcGx1bTogJyNkZGEwZGQnLFxuICAgICAgICBwb3dkZXJibHVlOiAnI2IwZTBlNicsXG4gICAgICAgIHB1cnBsZTogJyM4MDAwODAnLFxuICAgICAgICBwdXJwbGUyOiAnIzdmMDA3ZicsXG4gICAgICAgIHB1cnBsZTM6ICcjYTAyMGYwJyxcbiAgICAgICAgcmViZWNjYXB1cnBsZTogJyM2NjMzOTknLFxuICAgICAgICByZWQ6ICcjZmYwMDAwJyxcbiAgICAgICAgcm9zeWJyb3duOiAnI2JjOGY4ZicsXG4gICAgICAgIHJveWFsYmx1ZTogJyM0MTY5ZTEnLFxuICAgICAgICBzYWRkbGVicm93bjogJyM4YjQ1MTMnLFxuICAgICAgICBzYWxtb246ICcjZmE4MDcyJyxcbiAgICAgICAgc2FuZHlicm93bjogJyNmNGE0NjAnLFxuICAgICAgICBzZWFncmVlbjogJyMyZThiNTcnLFxuICAgICAgICBzZWFzaGVsbDogJyNmZmY1ZWUnLFxuICAgICAgICBzaWVubmE6ICcjYTA1MjJkJyxcbiAgICAgICAgc2lsdmVyOiAnI2MwYzBjMCcsXG4gICAgICAgIHNreWJsdWU6ICcjODdjZWViJyxcbiAgICAgICAgc2xhdGVibHVlOiAnIzZhNWFjZCcsXG4gICAgICAgIHNsYXRlZ3JheTogJyM3MDgwOTAnLFxuICAgICAgICBzbGF0ZWdyZXk6ICcjNzA4MDkwJyxcbiAgICAgICAgc25vdzogJyNmZmZhZmEnLFxuICAgICAgICBzcHJpbmdncmVlbjogJyMwMGZmN2YnLFxuICAgICAgICBzdGVlbGJsdWU6ICcjNDY4MmI0JyxcbiAgICAgICAgdGFuOiAnI2QyYjQ4YycsXG4gICAgICAgIHRlYWw6ICcjMDA4MDgwJyxcbiAgICAgICAgdGhpc3RsZTogJyNkOGJmZDgnLFxuICAgICAgICB0b21hdG86ICcjZmY2MzQ3JyxcbiAgICAgICAgdHVycXVvaXNlOiAnIzQwZTBkMCcsXG4gICAgICAgIHZpb2xldDogJyNlZTgyZWUnLFxuICAgICAgICB3aGVhdDogJyNmNWRlYjMnLFxuICAgICAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgICAgICB3aGl0ZXNtb2tlOiAnI2Y1ZjVmNScsXG4gICAgICAgIHllbGxvdzogJyNmZmZmMDAnLFxuICAgICAgICB5ZWxsb3dncmVlbjogJyM5YWNkMzInXG4gICAgfTtcblxuICAgIHZhciB3M2N4MTFfMSA9IHczY3gxMSQxO1xuXG4gICAgdmFyIENvbG9yJHMgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQ1ID0gaW5wdXQkaDtcbiAgICB2YXIgdHlwZSRjID0gdXRpbHMudHlwZTtcblxuICAgIHZhciB3M2N4MTEgPSB3M2N4MTFfMTtcbiAgICB2YXIgaGV4MnJnYiA9IGhleDJyZ2JfMTtcbiAgICB2YXIgcmdiMmhleCA9IHJnYjJoZXhfMTtcblxuICAgIENvbG9yJHMucHJvdG90eXBlLm5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhleCA9IHJnYjJoZXgodGhpcy5fcmdiLCAncmdiJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gT2JqZWN0LmtleXModzNjeDExKTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBuID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgaWYgKHczY3gxMVtuXSA9PT0gaGV4KSB7IHJldHVybiBuLnRvTG93ZXJDYXNlKCk7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGV4O1xuICAgIH07XG5cbiAgICBpbnB1dCQ1LmZvcm1hdC5uYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh3M2N4MTFbbmFtZV0pIHsgcmV0dXJuIGhleDJyZ2IodzNjeDExW25hbWVdKTsgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gY29sb3IgbmFtZTogJytuYW1lKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkNS5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiA1LFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoaCkge1xuICAgICAgICAgICAgdmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tID4gMCApIHJlc3RbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgICAgICAgICAgIGlmICghcmVzdC5sZW5ndGggJiYgdHlwZSRjKGgpID09PSAnc3RyaW5nJyAmJiB3M2N4MTFbaC50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbmFtZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJDggPSB1dGlscy51bnBhY2s7XG5cbiAgICB2YXIgcmdiMm51bSQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skOChhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHJldHVybiAociA8PCAxNikgKyAoZyA8PCA4KSArIGI7XG4gICAgfTtcblxuICAgIHZhciByZ2IybnVtXzEgPSByZ2IybnVtJDE7XG5cbiAgICB2YXIgdHlwZSRiID0gdXRpbHMudHlwZTtcblxuICAgIHZhciBudW0ycmdiID0gZnVuY3Rpb24gKG51bSkge1xuICAgICAgICBpZiAodHlwZSRiKG51bSkgPT0gXCJudW1iZXJcIiAmJiBudW0gPj0gMCAmJiBudW0gPD0gMHhGRkZGRkYpIHtcbiAgICAgICAgICAgIHZhciByID0gbnVtID4+IDE2O1xuICAgICAgICAgICAgdmFyIGcgPSAobnVtID4+IDgpICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBiID0gbnVtICYgMHhGRjtcbiAgICAgICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBudW0gY29sb3I6IFwiK251bSk7XG4gICAgfTtcblxuICAgIHZhciBudW0ycmdiXzEgPSBudW0ycmdiO1xuXG4gICAgdmFyIGNocm9tYSQ5ID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHIgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQ0ID0gaW5wdXQkaDtcbiAgICB2YXIgdHlwZSRhID0gdXRpbHMudHlwZTtcblxuICAgIHZhciByZ2IybnVtID0gcmdiMm51bV8xO1xuXG4gICAgQ29sb3Ikci5wcm90b3R5cGUubnVtID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IybnVtKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSQ5Lm51bSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkciwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ251bSddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkNC5mb3JtYXQubnVtID0gbnVtMnJnYl8xO1xuXG4gICAgaW5wdXQkNC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiA1LFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGUkYShhcmdzWzBdKSA9PT0gJ251bWJlcicgJiYgYXJnc1swXSA+PSAwICYmIGFyZ3NbMF0gPD0gMHhGRkZGRkYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBjaHJvbWEkOCA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRxID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkMyA9IGlucHV0JGg7XG4gICAgdmFyIHVucGFjayQ3ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJDkgPSB1dGlscy50eXBlO1xuICAgIHZhciByb3VuZCQxID0gTWF0aC5yb3VuZDtcblxuICAgIENvbG9yJHEucHJvdG90eXBlLnJnYiA9IGZ1bmN0aW9uKHJuZCkge1xuICAgICAgICBpZiAoIHJuZCA9PT0gdm9pZCAwICkgcm5kPXRydWU7XG5cbiAgICAgICAgaWYgKHJuZCA9PT0gZmFsc2UpIHsgcmV0dXJuIHRoaXMuX3JnYi5zbGljZSgwLDMpOyB9XG4gICAgICAgIHJldHVybiB0aGlzLl9yZ2Iuc2xpY2UoMCwzKS5tYXAocm91bmQkMSk7XG4gICAgfTtcblxuICAgIENvbG9yJHEucHJvdG90eXBlLnJnYmEgPSBmdW5jdGlvbihybmQpIHtcbiAgICAgICAgaWYgKCBybmQgPT09IHZvaWQgMCApIHJuZD10cnVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9yZ2Iuc2xpY2UoMCw0KS5tYXAoZnVuY3Rpb24gKHYsaSkge1xuICAgICAgICAgICAgcmV0dXJuIGk8MyA/IChybmQgPT09IGZhbHNlID8gdiA6IHJvdW5kJDEodikpIDogdjtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNocm9tYSQ4LnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkcSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ3JnYiddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkMy5mb3JtYXQucmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2JhID0gdW5wYWNrJDcoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgaWYgKHJnYmFbM10gPT09IHVuZGVmaW5lZCkgeyByZ2JhWzNdID0gMTsgfVxuICAgICAgICByZXR1cm4gcmdiYTtcbiAgICB9O1xuXG4gICAgaW5wdXQkMy5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAzLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayQ3KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ5KGFyZ3MpID09PSAnYXJyYXknICYmIChhcmdzLmxlbmd0aCA9PT0gMyB8fFxuICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID09PSA0ICYmIHR5cGUkOShhcmdzWzNdKSA9PSAnbnVtYmVyJyAmJiBhcmdzWzNdID49IDAgJiYgYXJnc1szXSA8PSAxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAncmdiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLypcbiAgICAgKiBCYXNlZCBvbiBpbXBsZW1lbnRhdGlvbiBieSBOZWlsIEJhcnRsZXR0XG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL25laWxiYXJ0bGV0dC9jb2xvci10ZW1wZXJhdHVyZVxuICAgICAqL1xuXG4gICAgdmFyIGxvZyQxID0gTWF0aC5sb2c7XG5cbiAgICB2YXIgdGVtcGVyYXR1cmUycmdiJDEgPSBmdW5jdGlvbiAoa2VsdmluKSB7XG4gICAgICAgIHZhciB0ZW1wID0ga2VsdmluIC8gMTAwO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIGlmICh0ZW1wIDwgNjYpIHtcbiAgICAgICAgICAgIHIgPSAyNTU7XG4gICAgICAgICAgICBnID0gdGVtcCA8IDYgPyAwIDogLTE1NS4yNTQ4NTU2MjcwOTE3OSAtIDAuNDQ1OTY5NTA0Njk1NzkxMzMgKiAoZyA9IHRlbXAtMikgKyAxMDQuNDkyMTYxOTkzOTM4ODggKiBsb2ckMShnKTtcbiAgICAgICAgICAgIGIgPSB0ZW1wIDwgMjAgPyAwIDogLTI1NC43NjkzNTE4NDEyMDkwMiArIDAuODI3NDA5NjA2NDAwNzM5NSAqIChiID0gdGVtcC0xMCkgKyAxMTUuNjc5OTQ0MDEwNjYxNDcgKiBsb2ckMShiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSAzNTEuOTc2OTA1NjY4MDU2OTMgKyAwLjExNDIwNjQ1Mzc4NDE2NSAqIChyID0gdGVtcC01NSkgLSA0MC4yNTM2NjMwOTMzMjEyNyAqIGxvZyQxKHIpO1xuICAgICAgICAgICAgZyA9IDMyNS40NDk0MTI1NzExOTc0ICsgMC4wNzk0MzQ1NjUzNjY2MjM0MiAqIChnID0gdGVtcC01MCkgLSAyOC4wODUyOTYzNTA3OTU3ICogbG9nJDEoZyk7XG4gICAgICAgICAgICBiID0gMjU1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgfTtcblxuICAgIHZhciB0ZW1wZXJhdHVyZTJyZ2JfMSA9IHRlbXBlcmF0dXJlMnJnYiQxO1xuXG4gICAgLypcbiAgICAgKiBCYXNlZCBvbiBpbXBsZW1lbnRhdGlvbiBieSBOZWlsIEJhcnRsZXR0XG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL25laWxiYXJ0bGV0dC9jb2xvci10ZW1wZXJhdHVyZVxuICAgICAqKi9cblxuICAgIHZhciB0ZW1wZXJhdHVyZTJyZ2IgPSB0ZW1wZXJhdHVyZTJyZ2JfMTtcbiAgICB2YXIgdW5wYWNrJDYgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciByZ2IydGVtcGVyYXR1cmUkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmdiID0gdW5wYWNrJDYoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJnYlswXSwgYiA9IHJnYlsyXTtcbiAgICAgICAgdmFyIG1pblRlbXAgPSAxMDAwO1xuICAgICAgICB2YXIgbWF4VGVtcCA9IDQwMDAwO1xuICAgICAgICB2YXIgZXBzID0gMC40O1xuICAgICAgICB2YXIgdGVtcDtcbiAgICAgICAgd2hpbGUgKG1heFRlbXAgLSBtaW5UZW1wID4gZXBzKSB7XG4gICAgICAgICAgICB0ZW1wID0gKG1heFRlbXAgKyBtaW5UZW1wKSAqIDAuNTtcbiAgICAgICAgICAgIHZhciByZ2IkMSA9IHRlbXBlcmF0dXJlMnJnYih0ZW1wKTtcbiAgICAgICAgICAgIGlmICgocmdiJDFbMl0gLyByZ2IkMVswXSkgPj0gKGIgLyByKSkge1xuICAgICAgICAgICAgICAgIG1heFRlbXAgPSB0ZW1wO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtaW5UZW1wID0gdGVtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm91bmQodGVtcCk7XG4gICAgfTtcblxuICAgIHZhciByZ2IydGVtcGVyYXR1cmVfMSA9IHJnYjJ0ZW1wZXJhdHVyZSQxO1xuXG4gICAgdmFyIGNocm9tYSQ3ID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHAgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQyID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IydGVtcGVyYXR1cmUgPSByZ2IydGVtcGVyYXR1cmVfMTtcblxuICAgIENvbG9yJHAucHJvdG90eXBlLnRlbXAgPVxuICAgIENvbG9yJHAucHJvdG90eXBlLmtlbHZpbiA9XG4gICAgQ29sb3IkcC5wcm90b3R5cGUudGVtcGVyYXR1cmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJ0ZW1wZXJhdHVyZSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkNy50ZW1wID1cbiAgICBjaHJvbWEkNy5rZWx2aW4gPVxuICAgIGNocm9tYSQ3LnRlbXBlcmF0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRwLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsndGVtcCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkMi5mb3JtYXQudGVtcCA9XG4gICAgaW5wdXQkMi5mb3JtYXQua2VsdmluID1cbiAgICBpbnB1dCQyLmZvcm1hdC50ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlMnJnYl8xO1xuXG4gICAgdmFyIHVucGFjayQ1ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBjYnJ0ID0gTWF0aC5jYnJ0O1xuICAgIHZhciBwb3ckOCA9IE1hdGgucG93O1xuICAgIHZhciBzaWduJDEgPSBNYXRoLnNpZ247XG5cbiAgICB2YXIgcmdiMm9rbGFiJDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLy8gT0tMYWIgY29sb3Igc3BhY2UgaW1wbGVtZW50YXRpb24gdGFrZW4gZnJvbVxuICAgICAgICAvLyBodHRwczovL2JvdHRvc3Nvbi5naXRodWIuaW8vcG9zdHMvb2tsYWIvXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skNShhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IFtyZ2IybHJnYihyIC8gMjU1KSwgcmdiMmxyZ2IoZyAvIDI1NSksIHJnYjJscmdiKGIgLyAyNTUpXTtcbiAgICAgICAgdmFyIGxyID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBsZyA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgbGIgPSByZWYkMVsyXTtcbiAgICAgICAgdmFyIGwgPSBjYnJ0KDAuNDEyMjIxNDcwOCAqIGxyICsgMC41MzYzMzI1MzYzICogbGcgKyAwLjA1MTQ0NTk5MjkgKiBsYik7XG4gICAgICAgIHZhciBtID0gY2JydCgwLjIxMTkwMzQ5ODIgKiBsciArIDAuNjgwNjk5NTQ1MSAqIGxnICsgMC4xMDczOTY5NTY2ICogbGIpO1xuICAgICAgICB2YXIgcyA9IGNicnQoMC4wODgzMDI0NjE5ICogbHIgKyAwLjI4MTcxODgzNzYgKiBsZyArIDAuNjI5OTc4NzAwNSAqIGxiKTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgMC4yMTA0NTQyNTUzICogbCArIDAuNzkzNjE3Nzg1ICogbSAtIDAuMDA0MDcyMDQ2OCAqIHMsXG4gICAgICAgICAgICAxLjk3Nzk5ODQ5NTEgKiBsIC0gMi40Mjg1OTIyMDUgKiBtICsgMC40NTA1OTM3MDk5ICogcyxcbiAgICAgICAgICAgIDAuMDI1OTA0MDM3MSAqIGwgKyAwLjc4Mjc3MTc2NjIgKiBtIC0gMC44MDg2NzU3NjYgKiBzXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIHZhciByZ2Iyb2tsYWJfMSA9IHJnYjJva2xhYiQyO1xuXG4gICAgZnVuY3Rpb24gcmdiMmxyZ2IoYykge1xuICAgICAgICB2YXIgYWJzID0gTWF0aC5hYnMoYyk7XG4gICAgICAgIGlmIChhYnMgPCAwLjA0MDQ1KSB7XG4gICAgICAgICAgICByZXR1cm4gYyAvIDEyLjkyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoc2lnbiQxKGMpIHx8IDEpICogcG93JDgoKGFicyArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgIH1cblxuICAgIHZhciB1bnBhY2skNCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcG93JDcgPSBNYXRoLnBvdztcbiAgICB2YXIgc2lnbiA9IE1hdGguc2lnbjtcblxuICAgIC8qXG4gICAgICogTCogWzAuLjEwMF1cbiAgICAgKiBhIFstMTAwLi4xMDBdXG4gICAgICogYiBbLTEwMC4uMTAwXVxuICAgICAqL1xuICAgIHZhciBva2xhYjJyZ2IkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJDQoYXJncywgJ2xhYicpO1xuICAgICAgICB2YXIgTCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBhID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuXG4gICAgICAgIHZhciBsID0gcG93JDcoTCArIDAuMzk2MzM3Nzc3NCAqIGEgKyAwLjIxNTgwMzc1NzMgKiBiLCAzKTtcbiAgICAgICAgdmFyIG0gPSBwb3ckNyhMIC0gMC4xMDU1NjEzNDU4ICogYSAtIDAuMDYzODU0MTcyOCAqIGIsIDMpO1xuICAgICAgICB2YXIgcyA9IHBvdyQ3KEwgLSAwLjA4OTQ4NDE3NzUgKiBhIC0gMS4yOTE0ODU1NDggKiBiLCAzKTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgMjU1ICogbHJnYjJyZ2IoKzQuMDc2NzQxNjYyMSAqIGwgLSAzLjMwNzcxMTU5MTMgKiBtICsgMC4yMzA5Njk5MjkyICogcyksXG4gICAgICAgICAgICAyNTUgKiBscmdiMnJnYigtMS4yNjg0MzgwMDQ2ICogbCArIDIuNjA5NzU3NDAxMSAqIG0gLSAwLjM0MTMxOTM5NjUgKiBzKSxcbiAgICAgICAgICAgIDI1NSAqIGxyZ2IycmdiKC0wLjAwNDE5NjA4NjMgKiBsIC0gMC43MDM0MTg2MTQ3ICogbSArIDEuNzA3NjE0NzAxICogcyksXG4gICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMVxuICAgICAgICBdO1xuICAgIH07XG5cbiAgICB2YXIgb2tsYWIycmdiXzEgPSBva2xhYjJyZ2IkMTtcblxuICAgIGZ1bmN0aW9uIGxyZ2IycmdiKGMpIHtcbiAgICAgICAgdmFyIGFicyA9IE1hdGguYWJzKGMpO1xuICAgICAgICBpZiAoYWJzID4gMC4wMDMxMzA4KSB7XG4gICAgICAgICAgICByZXR1cm4gKHNpZ24oYykgfHwgMSkgKiAoMS4wNTUgKiBwb3ckNyhhYnMsIDEgLyAyLjQpIC0gMC4wNTUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjICogMTIuOTI7XG4gICAgfVxuXG4gICAgdmFyIHVucGFjayQzID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJDggPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkNiA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRvID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkMSA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMm9rbGFiJDEgPSByZ2Iyb2tsYWJfMTtcblxuICAgIENvbG9yJG8ucHJvdG90eXBlLm9rbGFiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmdiMm9rbGFiJDEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJDYub2tsYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJG8sIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydva2xhYiddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkMS5mb3JtYXQub2tsYWIgPSBva2xhYjJyZ2JfMTtcblxuICAgIGlucHV0JDEuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMyxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skMyhhcmdzLCAnb2tsYWInKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDgoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29rbGFiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayQyID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciByZ2Iyb2tsYWIgPSByZ2Iyb2tsYWJfMTtcbiAgICB2YXIgbGFiMmxjaCA9IGxhYjJsY2hfMTtcblxuICAgIHZhciByZ2Iyb2tsY2gkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJDIoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSByZ2Iyb2tsYWIociwgZywgYik7XG4gICAgICAgIHZhciBsID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBhID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiXyA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gbGFiMmxjaChsLCBhLCBiXyk7XG4gICAgfTtcblxuICAgIHZhciByZ2Iyb2tsY2hfMSA9IHJnYjJva2xjaCQxO1xuXG4gICAgdmFyIHVucGFjayQxID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsY2gybGFiID0gbGNoMmxhYl8xO1xuICAgIHZhciBva2xhYjJyZ2IgPSBva2xhYjJyZ2JfMTtcblxuICAgIHZhciBva2xjaDJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayQxKGFyZ3MsICdsY2gnKTtcbiAgICAgICAgdmFyIGwgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBoID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHJlZiA9IGxjaDJsYWIobCwgYywgaCk7XG4gICAgICAgIHZhciBMID0gcmVmWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGJfID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBva2xhYjJyZ2IoTCwgYSwgYl8pO1xuICAgICAgICB2YXIgciA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIG9rbGNoMnJnYl8xID0gb2tsY2gycmdiO1xuXG4gICAgdmFyIHVucGFjayA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ3ID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJDUgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkbiA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0ID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2Iyb2tsY2ggPSByZ2Iyb2tsY2hfMTtcblxuICAgIENvbG9yJG4ucHJvdG90eXBlLm9rbGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmdiMm9rbGNoKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSQ1Lm9rbGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRuLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnb2tsY2gnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5va2xjaCA9IG9rbGNoMnJnYl8xO1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMyxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ29rbGNoJyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ3KGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdva2xjaCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBDb2xvciRtID0gQ29sb3JfMTtcbiAgICB2YXIgdHlwZSQ2ID0gdXRpbHMudHlwZTtcblxuICAgIENvbG9yJG0ucHJvdG90eXBlLmFscGhhID0gZnVuY3Rpb24oYSwgbXV0YXRlKSB7XG4gICAgICAgIGlmICggbXV0YXRlID09PSB2b2lkIDAgKSBtdXRhdGU9ZmFsc2U7XG5cbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCAmJiB0eXBlJDYoYSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAobXV0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmdiWzNdID0gYTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkbShbdGhpcy5fcmdiWzBdLCB0aGlzLl9yZ2JbMV0sIHRoaXMuX3JnYlsyXSwgYV0sICdyZ2InKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiWzNdO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkbCA9IENvbG9yXzE7XG5cbiAgICBDb2xvciRsLnByb3RvdHlwZS5jbGlwcGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZ2IuX2NsaXBwZWQgfHwgZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRrID0gQ29sb3JfMTtcbiAgICB2YXIgTEFCX0NPTlNUQU5UUyQxID0gbGFiQ29uc3RhbnRzO1xuXG4gICAgQ29sb3Ikay5wcm90b3R5cGUuZGFya2VuID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgXHRpZiAoIGFtb3VudCA9PT0gdm9pZCAwICkgYW1vdW50PTE7XG5cbiAgICBcdHZhciBtZSA9IHRoaXM7XG4gICAgXHR2YXIgbGFiID0gbWUubGFiKCk7XG4gICAgXHRsYWJbMF0gLT0gTEFCX0NPTlNUQU5UUyQxLktuICogYW1vdW50O1xuICAgIFx0cmV0dXJuIG5ldyBDb2xvciRrKGxhYiwgJ2xhYicpLmFscGhhKG1lLmFscGhhKCksIHRydWUpO1xuICAgIH07XG5cbiAgICBDb2xvciRrLnByb3RvdHlwZS5icmlnaHRlbiA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHRyZXR1cm4gdGhpcy5kYXJrZW4oLWFtb3VudCk7XG4gICAgfTtcblxuICAgIENvbG9yJGsucHJvdG90eXBlLmRhcmtlciA9IENvbG9yJGsucHJvdG90eXBlLmRhcmtlbjtcbiAgICBDb2xvciRrLnByb3RvdHlwZS5icmlnaHRlciA9IENvbG9yJGsucHJvdG90eXBlLmJyaWdodGVuO1xuXG4gICAgdmFyIENvbG9yJGogPSBDb2xvcl8xO1xuXG4gICAgQ29sb3Ikai5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG1jKSB7XG4gICAgICAgIHZhciByZWYgPSBtYy5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbW9kZSA9IHJlZlswXTtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSByZWZbMV07XG4gICAgICAgIHZhciBzcmMgPSB0aGlzW21vZGVdKCk7XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG1vZGUuaW5kZXhPZihjaGFubmVsKSAtIChtb2RlLnN1YnN0cigwLCAyKSA9PT0gJ29rJyA/IDIgOiAwKTtcbiAgICAgICAgICAgIGlmIChpID4gLTEpIHsgcmV0dXJuIHNyY1tpXTsgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcInVua25vd24gY2hhbm5lbCBcIiArIGNoYW5uZWwgKyBcIiBpbiBtb2RlIFwiICsgbW9kZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkaSA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkNSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIHBvdyQ2ID0gTWF0aC5wb3c7XG5cbiAgICB2YXIgRVBTID0gMWUtNztcbiAgICB2YXIgTUFYX0lURVIgPSAyMDtcblxuICAgIENvbG9yJGkucHJvdG90eXBlLmx1bWluYW5jZSA9IGZ1bmN0aW9uKGx1bSkge1xuICAgICAgICBpZiAobHVtICE9PSB1bmRlZmluZWQgJiYgdHlwZSQ1KGx1bSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAobHVtID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHB1cmUgYmxhY2tcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJGkoWzAsMCwwLHRoaXMuX3JnYlszXV0sICdyZ2InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsdW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcHVyZSB3aGl0ZVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkaShbMjU1LDI1NSwyNTUsdGhpcy5fcmdiWzNdXSwgJ3JnYicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29tcHV0ZSBuZXcgY29sb3IgdXNpbmcuLi5cbiAgICAgICAgICAgIHZhciBjdXJfbHVtID0gdGhpcy5sdW1pbmFuY2UoKTtcbiAgICAgICAgICAgIHZhciBtb2RlID0gJ3JnYic7XG4gICAgICAgICAgICB2YXIgbWF4X2l0ZXIgPSBNQVhfSVRFUjtcblxuICAgICAgICAgICAgdmFyIHRlc3QgPSBmdW5jdGlvbiAobG93LCBoaWdoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pZCA9IGxvdy5pbnRlcnBvbGF0ZShoaWdoLCAwLjUsIG1vZGUpO1xuICAgICAgICAgICAgICAgIHZhciBsbSA9IG1pZC5sdW1pbmFuY2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMobHVtIC0gbG0pIDwgRVBTIHx8ICFtYXhfaXRlci0tKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb3NlIGVub3VnaFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbG0gPiBsdW0gPyB0ZXN0KGxvdywgbWlkKSA6IHRlc3QobWlkLCBoaWdoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciByZ2IgPSAoY3VyX2x1bSA+IGx1bSA/IHRlc3QobmV3IENvbG9yJGkoWzAsMCwwXSksIHRoaXMpIDogdGVzdCh0aGlzLCBuZXcgQ29sb3IkaShbMjU1LDI1NSwyNTVdKSkpLnJnYigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRpKHJnYi5jb25jYXQoIFt0aGlzLl9yZ2JbM11dKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJnYjJsdW1pbmFuY2UuYXBwbHkodm9pZCAwLCAodGhpcy5fcmdiKS5zbGljZSgwLDMpKTtcbiAgICB9O1xuXG5cbiAgICB2YXIgcmdiMmx1bWluYW5jZSA9IGZ1bmN0aW9uIChyLGcsYikge1xuICAgICAgICAvLyByZWxhdGl2ZSBsdW1pbmFuY2VcbiAgICAgICAgLy8gc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcbiAgICAgICAgciA9IGx1bWluYW5jZV94KHIpO1xuICAgICAgICBnID0gbHVtaW5hbmNlX3goZyk7XG4gICAgICAgIGIgPSBsdW1pbmFuY2VfeChiKTtcbiAgICAgICAgcmV0dXJuIDAuMjEyNiAqIHIgKyAwLjcxNTIgKiBnICsgMC4wNzIyICogYjtcbiAgICB9O1xuXG4gICAgdmFyIGx1bWluYW5jZV94ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgeCAvPSAyNTU7XG4gICAgICAgIHJldHVybiB4IDw9IDAuMDM5MjggPyB4LzEyLjkyIDogcG93JDYoKHgrMC4wNTUpLzEuMDU1LCAyLjQpO1xuICAgIH07XG5cbiAgICB2YXIgaW50ZXJwb2xhdG9yJDEgPSB7fTtcblxuICAgIHZhciBDb2xvciRoID0gQ29sb3JfMTtcbiAgICB2YXIgdHlwZSQ0ID0gdXRpbHMudHlwZTtcbiAgICB2YXIgaW50ZXJwb2xhdG9yID0gaW50ZXJwb2xhdG9yJDE7XG5cbiAgICB2YXIgbWl4JDEgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICBpZiAoIGYgPT09IHZvaWQgMCApIGY9MC41O1xuICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMztcbiAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMyBdO1xuXG4gICAgICAgIHZhciBtb2RlID0gcmVzdFswXSB8fCAnbHJnYic7XG4gICAgICAgIGlmICghaW50ZXJwb2xhdG9yW21vZGVdICYmICFyZXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gZmFsbCBiYWNrIHRvIHRoZSBmaXJzdCBzdXBwb3J0ZWQgbW9kZVxuICAgICAgICAgICAgbW9kZSA9IE9iamVjdC5rZXlzKGludGVycG9sYXRvcilbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpbnRlcnBvbGF0b3JbbW9kZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJpbnRlcnBvbGF0aW9uIG1vZGUgXCIgKyBtb2RlICsgXCIgaXMgbm90IGRlZmluZWRcIikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlJDQoY29sMSkgIT09ICdvYmplY3QnKSB7IGNvbDEgPSBuZXcgQ29sb3IkaChjb2wxKTsgfVxuICAgICAgICBpZiAodHlwZSQ0KGNvbDIpICE9PSAnb2JqZWN0JykgeyBjb2wyID0gbmV3IENvbG9yJGgoY29sMik7IH1cbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRvclttb2RlXShjb2wxLCBjb2wyLCBmKVxuICAgICAgICAgICAgLmFscGhhKGNvbDEuYWxwaGEoKSArIGYgKiAoY29sMi5hbHBoYSgpIC0gY29sMS5hbHBoYSgpKSk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRnID0gQ29sb3JfMTtcbiAgICB2YXIgbWl4ID0gbWl4JDE7XG5cbiAgICBDb2xvciRnLnByb3RvdHlwZS5taXggPVxuICAgIENvbG9yJGcucHJvdG90eXBlLmludGVycG9sYXRlID0gZnVuY3Rpb24oY29sMiwgZikge1xuICAgIFx0aWYgKCBmID09PSB2b2lkIDAgKSBmPTAuNTtcbiAgICBcdHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgIFx0d2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMiBdO1xuXG4gICAgXHRyZXR1cm4gbWl4LmFwcGx5KHZvaWQgMCwgWyB0aGlzLCBjb2wyLCBmIF0uY29uY2F0KCByZXN0ICkpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkZiA9IENvbG9yXzE7XG5cbiAgICBDb2xvciRmLnByb3RvdHlwZS5wcmVtdWx0aXBseSA9IGZ1bmN0aW9uKG11dGF0ZSkge1xuICAgIFx0aWYgKCBtdXRhdGUgPT09IHZvaWQgMCApIG11dGF0ZT1mYWxzZTtcblxuICAgIFx0dmFyIHJnYiA9IHRoaXMuX3JnYjtcbiAgICBcdHZhciBhID0gcmdiWzNdO1xuICAgIFx0aWYgKG11dGF0ZSkge1xuICAgIFx0XHR0aGlzLl9yZ2IgPSBbcmdiWzBdKmEsIHJnYlsxXSphLCByZ2JbMl0qYSwgYV07XG4gICAgXHRcdHJldHVybiB0aGlzO1xuICAgIFx0fSBlbHNlIHtcbiAgICBcdFx0cmV0dXJuIG5ldyBDb2xvciRmKFtyZ2JbMF0qYSwgcmdiWzFdKmEsIHJnYlsyXSphLCBhXSwgJ3JnYicpO1xuICAgIFx0fVxuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkZSA9IENvbG9yXzE7XG4gICAgdmFyIExBQl9DT05TVEFOVFMgPSBsYWJDb25zdGFudHM7XG5cbiAgICBDb2xvciRlLnByb3RvdHlwZS5zYXR1cmF0ZSA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHR2YXIgbWUgPSB0aGlzO1xuICAgIFx0dmFyIGxjaCA9IG1lLmxjaCgpO1xuICAgIFx0bGNoWzFdICs9IExBQl9DT05TVEFOVFMuS24gKiBhbW91bnQ7XG4gICAgXHRpZiAobGNoWzFdIDwgMCkgeyBsY2hbMV0gPSAwOyB9XG4gICAgXHRyZXR1cm4gbmV3IENvbG9yJGUobGNoLCAnbGNoJykuYWxwaGEobWUuYWxwaGEoKSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIENvbG9yJGUucHJvdG90eXBlLmRlc2F0dXJhdGUgPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0cmV0dXJuIHRoaXMuc2F0dXJhdGUoLWFtb3VudCk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRkID0gQ29sb3JfMTtcbiAgICB2YXIgdHlwZSQzID0gdXRpbHMudHlwZTtcblxuICAgIENvbG9yJGQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChtYywgdmFsdWUsIG11dGF0ZSkge1xuICAgICAgICBpZiAoIG11dGF0ZSA9PT0gdm9pZCAwICkgbXV0YXRlID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHJlZiA9IG1jLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBtb2RlID0gcmVmWzBdO1xuICAgICAgICB2YXIgY2hhbm5lbCA9IHJlZlsxXTtcbiAgICAgICAgdmFyIHNyYyA9IHRoaXNbbW9kZV0oKTtcbiAgICAgICAgaWYgKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHZhciBpID0gbW9kZS5pbmRleE9mKGNoYW5uZWwpIC0gKG1vZGUuc3Vic3RyKDAsIDIpID09PSAnb2snID8gMiA6IDApO1xuICAgICAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJDModmFsdWUpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gKz0gK3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldICs9ICt2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSAqPSArdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldIC89ICt2YWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSA9ICt2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSQzKHZhbHVlKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjW2ldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5zdXBwb3J0ZWQgdmFsdWUgZm9yIENvbG9yLnNldFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG91dCA9IG5ldyBDb2xvciRkKHNyYywgbW9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKG11dGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZ2IgPSBvdXQuX3JnYjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwidW5rbm93biBjaGFubmVsIFwiICsgY2hhbm5lbCArIFwiIGluIG1vZGUgXCIgKyBtb2RlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRjID0gQ29sb3JfMTtcblxuICAgIHZhciByZ2IgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgeHl6MCA9IGNvbDEuX3JnYjtcbiAgICAgICAgdmFyIHh5ejEgPSBjb2wyLl9yZ2I7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkYyhcbiAgICAgICAgICAgIHh5ejBbMF0gKyBmICogKHh5ejFbMF0teHl6MFswXSksXG4gICAgICAgICAgICB4eXowWzFdICsgZiAqICh4eXoxWzFdLXh5ejBbMV0pLFxuICAgICAgICAgICAgeHl6MFsyXSArIGYgKiAoeHl6MVsyXS14eXowWzJdKSxcbiAgICAgICAgICAgICdyZ2InXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEucmdiID0gcmdiO1xuXG4gICAgdmFyIENvbG9yJGIgPSBDb2xvcl8xO1xuICAgIHZhciBzcXJ0JDIgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIHBvdyQ1ID0gTWF0aC5wb3c7XG5cbiAgICB2YXIgbHJnYiA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciByZWYgPSBjb2wxLl9yZ2I7XG4gICAgICAgIHZhciB4MSA9IHJlZlswXTtcbiAgICAgICAgdmFyIHkxID0gcmVmWzFdO1xuICAgICAgICB2YXIgejEgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IGNvbDIuX3JnYjtcbiAgICAgICAgdmFyIHgyID0gcmVmJDFbMF07XG4gICAgICAgIHZhciB5MiA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgejIgPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRiKFxuICAgICAgICAgICAgc3FydCQyKHBvdyQ1KHgxLDIpICogKDEtZikgKyBwb3ckNSh4MiwyKSAqIGYpLFxuICAgICAgICAgICAgc3FydCQyKHBvdyQ1KHkxLDIpICogKDEtZikgKyBwb3ckNSh5MiwyKSAqIGYpLFxuICAgICAgICAgICAgc3FydCQyKHBvdyQ1KHoxLDIpICogKDEtZikgKyBwb3ckNSh6MiwyKSAqIGYpLFxuICAgICAgICAgICAgJ3JnYidcbiAgICAgICAgKVxuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5scmdiID0gbHJnYjtcblxuICAgIHZhciBDb2xvciRhID0gQ29sb3JfMTtcblxuICAgIHZhciBsYWIgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgeHl6MCA9IGNvbDEubGFiKCk7XG4gICAgICAgIHZhciB4eXoxID0gY29sMi5sYWIoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRhKFxuICAgICAgICAgICAgeHl6MFswXSArIGYgKiAoeHl6MVswXS14eXowWzBdKSxcbiAgICAgICAgICAgIHh5ejBbMV0gKyBmICogKHh5ejFbMV0teHl6MFsxXSksXG4gICAgICAgICAgICB4eXowWzJdICsgZiAqICh4eXoxWzJdLXh5ejBbMl0pLFxuICAgICAgICAgICAgJ2xhYidcbiAgICAgICAgKVxuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5sYWIgPSBsYWI7XG5cbiAgICB2YXIgQ29sb3IkOSA9IENvbG9yXzE7XG5cbiAgICB2YXIgX2hzeCA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmLCBtKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxO1xuXG4gICAgICAgIHZhciB4eXowLCB4eXoxO1xuICAgICAgICBpZiAobSA9PT0gJ2hzbCcpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhzbCgpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaHNsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ2hzdicpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhzdigpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaHN2KCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ2hjZycpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhjZygpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaGNnKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ2hzaScpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhzaSgpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaHNpKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ2xjaCcgfHwgbSA9PT0gJ2hjbCcpIHtcbiAgICAgICAgICAgIG0gPSAnaGNsJztcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhjbCgpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaGNsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ29rbGNoJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEub2tsY2goKS5yZXZlcnNlKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5va2xjaCgpLnJldmVyc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBodWUwLCBodWUxLCBzYXQwLCBzYXQxLCBsYnYwLCBsYnYxO1xuICAgICAgICBpZiAobS5zdWJzdHIoMCwgMSkgPT09ICdoJyB8fCBtID09PSAnb2tsY2gnKSB7XG4gICAgICAgICAgICAoYXNzaWduID0geHl6MCwgaHVlMCA9IGFzc2lnblswXSwgc2F0MCA9IGFzc2lnblsxXSwgbGJ2MCA9IGFzc2lnblsyXSk7XG4gICAgICAgICAgICAoYXNzaWduJDEgPSB4eXoxLCBodWUxID0gYXNzaWduJDFbMF0sIHNhdDEgPSBhc3NpZ24kMVsxXSwgbGJ2MSA9IGFzc2lnbiQxWzJdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzYXQsIGh1ZSwgbGJ2LCBkaDtcblxuICAgICAgICBpZiAoIWlzTmFOKGh1ZTApICYmICFpc05hTihodWUxKSkge1xuICAgICAgICAgICAgLy8gYm90aCBjb2xvcnMgaGF2ZSBodWVcbiAgICAgICAgICAgIGlmIChodWUxID4gaHVlMCAmJiBodWUxIC0gaHVlMCA+IDE4MCkge1xuICAgICAgICAgICAgICAgIGRoID0gaHVlMSAtIChodWUwICsgMzYwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaHVlMSA8IGh1ZTAgJiYgaHVlMCAtIGh1ZTEgPiAxODApIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZTEgKyAzNjAgLSBodWUwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZTEgLSBodWUwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHVlID0gaHVlMCArIGYgKiBkaDtcbiAgICAgICAgfSBlbHNlIGlmICghaXNOYU4oaHVlMCkpIHtcbiAgICAgICAgICAgIGh1ZSA9IGh1ZTA7XG4gICAgICAgICAgICBpZiAoKGxidjEgPT0gMSB8fCBsYnYxID09IDApICYmIG0gIT0gJ2hzdicpIHsgc2F0ID0gc2F0MDsgfVxuICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihodWUxKSkge1xuICAgICAgICAgICAgaHVlID0gaHVlMTtcbiAgICAgICAgICAgIGlmICgobGJ2MCA9PSAxIHx8IGxidjAgPT0gMCkgJiYgbSAhPSAnaHN2JykgeyBzYXQgPSBzYXQxOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodWUgPSBOdW1iZXIuTmFOO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNhdCA9PT0gdW5kZWZpbmVkKSB7IHNhdCA9IHNhdDAgKyBmICogKHNhdDEgLSBzYXQwKTsgfVxuICAgICAgICBsYnYgPSBsYnYwICsgZiAqIChsYnYxIC0gbGJ2MCk7XG4gICAgICAgIHJldHVybiBtID09PSAnb2tsY2gnID8gbmV3IENvbG9yJDkoW2xidiwgc2F0LCBodWVdLCBtKSA6IG5ldyBDb2xvciQ5KFtodWUsIHNhdCwgbGJ2XSwgbSk7XG4gICAgfTtcblxuICAgIHZhciBpbnRlcnBvbGF0ZV9oc3gkNSA9IF9oc3g7XG5cbiAgICB2YXIgbGNoID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICBcdHJldHVybiBpbnRlcnBvbGF0ZV9oc3gkNShjb2wxLCBjb2wyLCBmLCAnbGNoJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmxjaCA9IGxjaDtcbiAgICBpbnRlcnBvbGF0b3IkMS5oY2wgPSBsY2g7XG5cbiAgICB2YXIgQ29sb3IkOCA9IENvbG9yXzE7XG5cbiAgICB2YXIgbnVtID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIGMxID0gY29sMS5udW0oKTtcbiAgICAgICAgdmFyIGMyID0gY29sMi5udW0oKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ4KGMxICsgZiAqIChjMi1jMSksICdudW0nKVxuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5udW0gPSBudW07XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4JDQgPSBfaHN4O1xuXG4gICAgdmFyIGhjZyA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gaW50ZXJwb2xhdGVfaHN4JDQoY29sMSwgY29sMiwgZiwgJ2hjZycpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5oY2cgPSBoY2c7XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4JDMgPSBfaHN4O1xuXG4gICAgdmFyIGhzaSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gaW50ZXJwb2xhdGVfaHN4JDMoY29sMSwgY29sMiwgZiwgJ2hzaScpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5oc2kgPSBoc2k7XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4JDIgPSBfaHN4O1xuXG4gICAgdmFyIGhzbCA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gaW50ZXJwb2xhdGVfaHN4JDIoY29sMSwgY29sMiwgZiwgJ2hzbCcpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5oc2wgPSBoc2w7XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4JDEgPSBfaHN4O1xuXG4gICAgdmFyIGhzdiA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gaW50ZXJwb2xhdGVfaHN4JDEoY29sMSwgY29sMiwgZiwgJ2hzdicpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5oc3YgPSBoc3Y7XG5cbiAgICB2YXIgQ29sb3IkNyA9IENvbG9yXzE7XG5cbiAgICB2YXIgb2tsYWIgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgeHl6MCA9IGNvbDEub2tsYWIoKTtcbiAgICAgICAgdmFyIHh5ejEgPSBjb2wyLm9rbGFiKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkNyhcbiAgICAgICAgICAgIHh5ejBbMF0gKyBmICogKHh5ejFbMF0gLSB4eXowWzBdKSxcbiAgICAgICAgICAgIHh5ejBbMV0gKyBmICogKHh5ejFbMV0gLSB4eXowWzFdKSxcbiAgICAgICAgICAgIHh5ejBbMl0gKyBmICogKHh5ejFbMl0gLSB4eXowWzJdKSxcbiAgICAgICAgICAgICdva2xhYidcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEub2tsYWIgPSBva2xhYjtcblxuICAgIHZhciBpbnRlcnBvbGF0ZV9oc3ggPSBfaHN4O1xuXG4gICAgdmFyIG9rbGNoID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlX2hzeChjb2wxLCBjb2wyLCBmLCAnb2tsY2gnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEub2tsY2ggPSBva2xjaDtcblxuICAgIHZhciBDb2xvciQ2ID0gQ29sb3JfMTtcbiAgICB2YXIgY2xpcF9yZ2IkMSA9IHV0aWxzLmNsaXBfcmdiO1xuICAgIHZhciBwb3ckNCA9IE1hdGgucG93O1xuICAgIHZhciBzcXJ0JDEgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIFBJJDEgPSBNYXRoLlBJO1xuICAgIHZhciBjb3MkMiA9IE1hdGguY29zO1xuICAgIHZhciBzaW4kMiA9IE1hdGguc2luO1xuICAgIHZhciBhdGFuMiQxID0gTWF0aC5hdGFuMjtcblxuICAgIHZhciBhdmVyYWdlID0gZnVuY3Rpb24gKGNvbG9ycywgbW9kZSwgd2VpZ2h0cykge1xuICAgICAgICBpZiAoIG1vZGUgPT09IHZvaWQgMCApIG1vZGU9J2xyZ2InO1xuICAgICAgICBpZiAoIHdlaWdodHMgPT09IHZvaWQgMCApIHdlaWdodHM9bnVsbDtcblxuICAgICAgICB2YXIgbCA9IGNvbG9ycy5sZW5ndGg7XG4gICAgICAgIGlmICghd2VpZ2h0cykgeyB3ZWlnaHRzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkobCkpLm1hcChmdW5jdGlvbiAoKSB7IHJldHVybiAxOyB9KTsgfVxuICAgICAgICAvLyBub3JtYWxpemUgd2VpZ2h0c1xuICAgICAgICB2YXIgayA9IGwgLyB3ZWlnaHRzLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhICsgYjsgfSk7XG4gICAgICAgIHdlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAodyxpKSB7IHdlaWdodHNbaV0gKj0gazsgfSk7XG4gICAgICAgIC8vIGNvbnZlcnQgY29sb3JzIHRvIENvbG9yIG9iamVjdHNcbiAgICAgICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gbmV3IENvbG9yJDYoYyk7IH0pO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ2xyZ2InKSB7XG4gICAgICAgICAgICByZXR1cm4gX2F2ZXJhZ2VfbHJnYihjb2xvcnMsIHdlaWdodHMpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpcnN0ID0gY29sb3JzLnNoaWZ0KCk7XG4gICAgICAgIHZhciB4eXogPSBmaXJzdC5nZXQobW9kZSk7XG4gICAgICAgIHZhciBjbnQgPSBbXTtcbiAgICAgICAgdmFyIGR4ID0gMDtcbiAgICAgICAgdmFyIGR5ID0gMDtcbiAgICAgICAgLy8gaW5pdGlhbCBjb2xvclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8eHl6Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB4eXpbaV0gPSAoeHl6W2ldIHx8IDApICogd2VpZ2h0c1swXTtcbiAgICAgICAgICAgIGNudC5wdXNoKGlzTmFOKHh5eltpXSkgPyAwIDogd2VpZ2h0c1swXSk7XG4gICAgICAgICAgICBpZiAobW9kZS5jaGFyQXQoaSkgPT09ICdoJyAmJiAhaXNOYU4oeHl6W2ldKSkge1xuICAgICAgICAgICAgICAgIHZhciBBID0geHl6W2ldIC8gMTgwICogUEkkMTtcbiAgICAgICAgICAgICAgICBkeCArPSBjb3MkMihBKSAqIHdlaWdodHNbMF07XG4gICAgICAgICAgICAgICAgZHkgKz0gc2luJDIoQSkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFscGhhID0gZmlyc3QuYWxwaGEoKSAqIHdlaWdodHNbMF07XG4gICAgICAgIGNvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChjLGNpKSB7XG4gICAgICAgICAgICB2YXIgeHl6MiA9IGMuZ2V0KG1vZGUpO1xuICAgICAgICAgICAgYWxwaGEgKz0gYy5hbHBoYSgpICogd2VpZ2h0c1tjaSsxXTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTx4eXoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHh5ejJbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNudFtpXSArPSB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZS5jaGFyQXQoaSkgPT09ICdoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEEgPSB4eXoyW2ldIC8gMTgwICogUEkkMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR4ICs9IGNvcyQyKEEpICogd2VpZ2h0c1tjaSsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5ICs9IHNpbiQyKEEpICogd2VpZ2h0c1tjaSsxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHh5eltpXSArPSB4eXoyW2ldICogd2VpZ2h0c1tjaSsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSQxPTA7IGkkMTx4eXoubGVuZ3RoOyBpJDErKykge1xuICAgICAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkkMSkgPT09ICdoJykge1xuICAgICAgICAgICAgICAgIHZhciBBJDEgPSBhdGFuMiQxKGR5IC8gY250W2kkMV0sIGR4IC8gY250W2kkMV0pIC8gUEkkMSAqIDE4MDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoQSQxIDwgMCkgeyBBJDEgKz0gMzYwOyB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKEEkMSA+PSAzNjApIHsgQSQxIC09IDM2MDsgfVxuICAgICAgICAgICAgICAgIHh5eltpJDFdID0gQSQxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4eXpbaSQxXSA9IHh5eltpJDFdL2NudFtpJDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFscGhhIC89IGw7XG4gICAgICAgIHJldHVybiAobmV3IENvbG9yJDYoeHl6LCBtb2RlKSkuYWxwaGEoYWxwaGEgPiAwLjk5OTk5ID8gMSA6IGFscGhhLCB0cnVlKTtcbiAgICB9O1xuXG5cbiAgICB2YXIgX2F2ZXJhZ2VfbHJnYiA9IGZ1bmN0aW9uIChjb2xvcnMsIHdlaWdodHMpIHtcbiAgICAgICAgdmFyIGwgPSBjb2xvcnMubGVuZ3RoO1xuICAgICAgICB2YXIgeHl6ID0gWzAsMCwwLDBdO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb2wgPSBjb2xvcnNbaV07XG4gICAgICAgICAgICB2YXIgZiA9IHdlaWdodHNbaV0gLyBsO1xuICAgICAgICAgICAgdmFyIHJnYiA9IGNvbC5fcmdiO1xuICAgICAgICAgICAgeHl6WzBdICs9IHBvdyQ0KHJnYlswXSwyKSAqIGY7XG4gICAgICAgICAgICB4eXpbMV0gKz0gcG93JDQocmdiWzFdLDIpICogZjtcbiAgICAgICAgICAgIHh5elsyXSArPSBwb3ckNChyZ2JbMl0sMikgKiBmO1xuICAgICAgICAgICAgeHl6WzNdICs9IHJnYlszXSAqIGY7XG4gICAgICAgIH1cbiAgICAgICAgeHl6WzBdID0gc3FydCQxKHh5elswXSk7XG4gICAgICAgIHh5elsxXSA9IHNxcnQkMSh4eXpbMV0pO1xuICAgICAgICB4eXpbMl0gPSBzcXJ0JDEoeHl6WzJdKTtcbiAgICAgICAgaWYgKHh5elszXSA+IDAuOTk5OTk5OSkgeyB4eXpbM10gPSAxOyB9XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkNihjbGlwX3JnYiQxKHh5eikpO1xuICAgIH07XG5cbiAgICAvLyBtaW5pbWFsIG11bHRpLXB1cnBvc2UgaW50ZXJmYWNlXG5cbiAgICAvLyBAcmVxdWlyZXMgdXRpbHMgY29sb3IgYW5hbHl6ZVxuXG4gICAgdmFyIGNocm9tYSQ0ID0gY2hyb21hXzE7XG4gICAgdmFyIHR5cGUkMiA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgcG93JDMgPSBNYXRoLnBvdztcblxuICAgIHZhciBzY2FsZSQyID0gZnVuY3Rpb24oY29sb3JzKSB7XG5cbiAgICAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgdmFyIF9tb2RlID0gJ3JnYic7XG4gICAgICAgIHZhciBfbmFjb2wgPSBjaHJvbWEkNCgnI2NjYycpO1xuICAgICAgICB2YXIgX3NwcmVhZCA9IDA7XG4gICAgICAgIC8vIGNvbnN0IF9maXhlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgX2RvbWFpbiA9IFswLCAxXTtcbiAgICAgICAgdmFyIF9wb3MgPSBbXTtcbiAgICAgICAgdmFyIF9wYWRkaW5nID0gWzAsMF07XG4gICAgICAgIHZhciBfY2xhc3NlcyA9IGZhbHNlO1xuICAgICAgICB2YXIgX2NvbG9ycyA9IFtdO1xuICAgICAgICB2YXIgX291dCA9IGZhbHNlO1xuICAgICAgICB2YXIgX21pbiA9IDA7XG4gICAgICAgIHZhciBfbWF4ID0gMTtcbiAgICAgICAgdmFyIF9jb3JyZWN0TGlnaHRuZXNzID0gZmFsc2U7XG4gICAgICAgIHZhciBfY29sb3JDYWNoZSA9IHt9O1xuICAgICAgICB2YXIgX3VzZUNhY2hlID0gdHJ1ZTtcbiAgICAgICAgdmFyIF9nYW1tYSA9IDE7XG5cbiAgICAgICAgLy8gcHJpdmF0ZSBtZXRob2RzXG5cbiAgICAgICAgdmFyIHNldENvbG9ycyA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICAgICAgICAgICAgY29sb3JzID0gY29sb3JzIHx8IFsnI2ZmZicsICcjMDAwJ107XG4gICAgICAgICAgICBpZiAoY29sb3JzICYmIHR5cGUkMihjb2xvcnMpID09PSAnc3RyaW5nJyAmJiBjaHJvbWEkNC5icmV3ZXIgJiZcbiAgICAgICAgICAgICAgICBjaHJvbWEkNC5icmV3ZXJbY29sb3JzLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgICAgICAgICAgY29sb3JzID0gY2hyb21hJDQuYnJld2VyW2NvbG9ycy50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlJDIoY29sb3JzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBzaW5nbGUgY29sb3JcbiAgICAgICAgICAgICAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSBbY29sb3JzWzBdLCBjb2xvcnNbMF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBtYWtlIGEgY29weSBvZiB0aGUgY29sb3JzXG4gICAgICAgICAgICAgICAgY29sb3JzID0gY29sb3JzLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgdG8gY2hyb21hIGNsYXNzZXNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8Y29sb3JzLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yc1tjXSA9IGNocm9tYSQ0KGNvbG9yc1tjXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGF1dG8tZmlsbCBjb2xvciBwb3NpdGlvblxuICAgICAgICAgICAgICAgIF9wb3MubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjJDE9MDsgYyQxPGNvbG9ycy5sZW5ndGg7IGMkMSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wb3MucHVzaChjJDEvKGNvbG9ycy5sZW5ndGgtMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc2V0Q2FjaGUoKTtcbiAgICAgICAgICAgIHJldHVybiBfY29sb3JzID0gY29sb3JzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBnZXRDbGFzcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoX2NsYXNzZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gX2NsYXNzZXMubGVuZ3RoLTE7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgbiAmJiB2YWx1ZSA+PSBfY2xhc3Nlc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdE1hcExpZ2h0bmVzcyA9IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9O1xuICAgICAgICB2YXIgdE1hcERvbWFpbiA9IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9O1xuXG4gICAgICAgIC8vIGNvbnN0IGNsYXNzaWZ5VmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyAgICAgbGV0IHZhbCA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgaWYgKF9jbGFzc2VzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBuID0gX2NsYXNzZXMubGVuZ3RoLTE7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgaSA9IGdldENsYXNzKHZhbHVlKTtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBtaW5jID0gX2NsYXNzZXNbMF0gKyAoKF9jbGFzc2VzWzFdLV9jbGFzc2VzWzBdKSAqICgwICsgKF9zcHJlYWQgKiAwLjUpKSk7ICAvLyBjZW50ZXIgb2YgMXN0IGNsYXNzXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbWF4YyA9IF9jbGFzc2VzW24tMV0gKyAoKF9jbGFzc2VzW25dLV9jbGFzc2VzW24tMV0pICogKDEgLSAoX3NwcmVhZCAqIDAuNSkpKTsgIC8vIGNlbnRlciBvZiBsYXN0IGNsYXNzXG4gICAgICAgIC8vICAgICAgICAgdmFsID0gX21pbiArICgoKChfY2xhc3Nlc1tpXSArICgoX2NsYXNzZXNbaSsxXSAtIF9jbGFzc2VzW2ldKSAqIDAuNSkpIC0gbWluYykgLyAobWF4Yy1taW5jKSkgKiAoX21heCAtIF9taW4pKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHJldHVybiB2YWw7XG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgdmFyIGdldENvbG9yID0gZnVuY3Rpb24odmFsLCBieXBhc3NNYXApIHtcbiAgICAgICAgICAgIHZhciBjb2wsIHQ7XG4gICAgICAgICAgICBpZiAoYnlwYXNzTWFwID09IG51bGwpIHsgYnlwYXNzTWFwID0gZmFsc2U7IH1cbiAgICAgICAgICAgIGlmIChpc05hTih2YWwpIHx8ICh2YWwgPT09IG51bGwpKSB7IHJldHVybiBfbmFjb2w7IH1cbiAgICAgICAgICAgIGlmICghYnlwYXNzTWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jbGFzc2VzICYmIChfY2xhc3Nlcy5sZW5ndGggPiAyKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBjbGFzc1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGdldENsYXNzKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBjIC8gKF9jbGFzc2VzLmxlbmd0aC0yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9tYXggIT09IF9taW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8ganVzdCBpbnRlcnBvbGF0ZSBiZXR3ZWVuIG1pbi9tYXhcbiAgICAgICAgICAgICAgICAgICAgdCA9ICh2YWwgLSBfbWluKSAvIChfbWF4IC0gX21pbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ID0gdmFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkb21haW4gbWFwXG4gICAgICAgICAgICB0ID0gdE1hcERvbWFpbih0KTtcblxuICAgICAgICAgICAgaWYgKCFieXBhc3NNYXApIHtcbiAgICAgICAgICAgICAgICB0ID0gdE1hcExpZ2h0bmVzcyh0KTsgIC8vIGxpZ2h0bmVzcyBjb3JyZWN0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfZ2FtbWEgIT09IDEpIHsgdCA9IHBvdyQzKHQsIF9nYW1tYSk7IH1cblxuICAgICAgICAgICAgdCA9IF9wYWRkaW5nWzBdICsgKHQgKiAoMSAtIF9wYWRkaW5nWzBdIC0gX3BhZGRpbmdbMV0pKTtcblxuICAgICAgICAgICAgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIHQpKTtcblxuICAgICAgICAgICAgdmFyIGsgPSBNYXRoLmZsb29yKHQgKiAxMDAwMCk7XG5cbiAgICAgICAgICAgIGlmIChfdXNlQ2FjaGUgJiYgX2NvbG9yQ2FjaGVba10pIHtcbiAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JDYWNoZVtrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUkMihfY29sb3JzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICAvL2ZvciBpIGluIFswLi5fcG9zLmxlbmd0aC0xXVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8X3Bvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBfcG9zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPD0gcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHQgPj0gcCkgJiYgKGkgPT09IChfcG9zLmxlbmd0aC0xKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPiBwICYmIHQgPCBfcG9zW2krMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKHQtcCkvKF9wb3NbaSsxXS1wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSBjaHJvbWEkNC5pbnRlcnBvbGF0ZShfY29sb3JzW2ldLCBfY29sb3JzW2krMV0sIHQsIF9tb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSQyKF9jb2xvcnMpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvcnModCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfdXNlQ2FjaGUpIHsgX2NvbG9yQ2FjaGVba10gPSBjb2w7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb2w7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlc2V0Q2FjaGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfY29sb3JDYWNoZSA9IHt9OyB9O1xuXG4gICAgICAgIHNldENvbG9ycyhjb2xvcnMpO1xuXG4gICAgICAgIC8vIHB1YmxpYyBpbnRlcmZhY2VcblxuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHZhciBjID0gY2hyb21hJDQoZ2V0Q29sb3IodikpO1xuICAgICAgICAgICAgaWYgKF9vdXQgJiYgY1tfb3V0XSkgeyByZXR1cm4gY1tfb3V0XSgpOyB9IGVsc2UgeyByZXR1cm4gYzsgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYuY2xhc3NlcyA9IGZ1bmN0aW9uKGNsYXNzZXMpIHtcbiAgICAgICAgICAgIGlmIChjbGFzc2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSQyKGNsYXNzZXMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gY2xhc3NlcztcbiAgICAgICAgICAgICAgICAgICAgX2RvbWFpbiA9IFtjbGFzc2VzWzBdLCBjbGFzc2VzW2NsYXNzZXMubGVuZ3RoLTFdXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGNocm9tYSQ0LmFuYWx5emUoX2RvbWFpbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGFzc2VzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2xhc3NlcyA9IFtkLm1pbiwgZC5tYXhdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NsYXNzZXMgPSBjaHJvbWEkNC5saW1pdHMoZCwgJ2UnLCBjbGFzc2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfY2xhc3NlcztcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGYuZG9tYWluID0gZnVuY3Rpb24oZG9tYWluKSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2RvbWFpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9taW4gPSBkb21haW5bMF07XG4gICAgICAgICAgICBfbWF4ID0gZG9tYWluW2RvbWFpbi5sZW5ndGgtMV07XG4gICAgICAgICAgICBfcG9zID0gW107XG4gICAgICAgICAgICB2YXIgayA9IF9jb2xvcnMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKChkb21haW4ubGVuZ3RoID09PSBrKSAmJiAoX21pbiAhPT0gX21heCkpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgcG9zaXRpb25zXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBBcnJheS5mcm9tKGRvbWFpbik7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgICAgICAgX3Bvcy5wdXNoKChkLV9taW4pIC8gKF9tYXgtX21pbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPGs7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBfcG9zLnB1c2goYy8oay0xKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkb21haW4ubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgZG9tYWluIG1hcFxuICAgICAgICAgICAgICAgICAgICB2YXIgdE91dCA9IGRvbWFpbi5tYXAoZnVuY3Rpb24gKGQsaSkgeyByZXR1cm4gaS8oZG9tYWluLmxlbmd0aC0xKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0QnJlYWtzID0gZG9tYWluLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gKGQgLSBfbWluKSAvIChfbWF4IC0gX21pbik7IH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRCcmVha3MuZXZlcnkoZnVuY3Rpb24gKHZhbCwgaSkgeyByZXR1cm4gdE91dFtpXSA9PT0gdmFsOyB9KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdE1hcERvbWFpbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPD0gMCB8fCB0ID49IDEpIHsgcmV0dXJuIHQ7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHQgPj0gdEJyZWFrc1tpKzFdKSB7IGkrKzsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gKHQgLSB0QnJlYWtzW2ldKSAvICh0QnJlYWtzW2krMV0gLSB0QnJlYWtzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3V0ID0gdE91dFtpXSArIGYgKiAodE91dFtpKzFdIC0gdE91dFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9kb21haW4gPSBbX21pbiwgX21heF07XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLm1vZGUgPSBmdW5jdGlvbihfbSkge1xuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9tb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX21vZGUgPSBfbTtcbiAgICAgICAgICAgIHJlc2V0Q2FjaGUoKTtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYucmFuZ2UgPSBmdW5jdGlvbihjb2xvcnMsIF9wb3MpIHtcbiAgICAgICAgICAgIHNldENvbG9ycyhjb2xvcnMpO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5vdXQgPSBmdW5jdGlvbihfbykge1xuICAgICAgICAgICAgX291dCA9IF9vO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5zcHJlYWQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfc3ByZWFkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3NwcmVhZCA9IHZhbDtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuY29ycmVjdExpZ2h0bmVzcyA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIGlmICh2ID09IG51bGwpIHsgdiA9IHRydWU7IH1cbiAgICAgICAgICAgIF9jb3JyZWN0TGlnaHRuZXNzID0gdjtcbiAgICAgICAgICAgIHJlc2V0Q2FjaGUoKTtcbiAgICAgICAgICAgIGlmIChfY29ycmVjdExpZ2h0bmVzcykge1xuICAgICAgICAgICAgICAgIHRNYXBMaWdodG5lc3MgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBMMCA9IGdldENvbG9yKDAsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgTDEgPSBnZXRDb2xvcigxLCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvbCA9IEwwID4gTDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBMX2FjdHVhbCA9IGdldENvbG9yKHQsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgTF9pZGVhbCA9IEwwICsgKChMMSAtIEwwKSAqIHQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgTF9kaWZmID0gTF9hY3R1YWwgLSBMX2lkZWFsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdDAgPSAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdDEgPSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4X2l0ZXIgPSAyMDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChNYXRoLmFicyhMX2RpZmYpID4gMWUtMikgJiYgKG1heF9pdGVyLS0gPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2wpIHsgTF9kaWZmICo9IC0xOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKExfZGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9ICh0MSAtIHQpICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCArPSAodDAgLSB0KSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTF9hY3R1YWwgPSBnZXRDb2xvcih0LCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTF9kaWZmID0gTF9hY3R1YWwgLSBMX2lkZWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0TWFwTGlnaHRuZXNzID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnBhZGRpbmcgPSBmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICBpZiAocCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUkMihwKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgcCA9IFtwLHBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfcGFkZGluZyA9IHA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcGFkZGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmLmNvbG9ycyA9IGZ1bmN0aW9uKG51bUNvbG9ycywgb3V0KSB7XG4gICAgICAgICAgICAvLyBJZiBubyBhcmd1bWVudHMgYXJlIGdpdmVuLCByZXR1cm4gdGhlIG9yaWdpbmFsIGNvbG9ycyB0aGF0IHdlcmUgcHJvdmlkZWRcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgeyBvdXQgPSAnaGV4JzsgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9jb2xvcnMuc2xpY2UoMCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtQ29sb3JzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gW2YoMC41KV07XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtQ29sb3JzID4gMSkge1xuICAgICAgICAgICAgICAgIHZhciBkbSA9IF9kb21haW5bMF07XG4gICAgICAgICAgICAgICAgdmFyIGRkID0gX2RvbWFpblsxXSAtIGRtO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9fcmFuZ2VfXygwLCBudW1Db2xvcnMsIGZhbHNlKS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGYoIGRtICsgKChpLyhudW1Db2xvcnMtMSkpICogZGQpICk7IH0pO1xuXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyByZXR1cm5zIGFsbCBjb2xvcnMgYmFzZWQgb24gdGhlIGRlZmluZWQgY2xhc3Nlc1xuICAgICAgICAgICAgICAgIGNvbG9ycyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBzYW1wbGVzID0gW107XG4gICAgICAgICAgICAgICAgaWYgKF9jbGFzc2VzICYmIChfY2xhc3Nlcy5sZW5ndGggPiAyKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMSwgZW5kID0gX2NsYXNzZXMubGVuZ3RoLCBhc2MgPSAxIDw9IGVuZDsgYXNjID8gaSA8IGVuZCA6IGkgPiBlbmQ7IGFzYyA/IGkrKyA6IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlcy5wdXNoKChfY2xhc3Nlc1tpLTFdK19jbGFzc2VzW2ldKSowLjUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlcyA9IF9kb21haW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNhbXBsZXMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBmKHYpOyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNocm9tYSQ0W291dF0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjW291dF0oKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuY2FjaGUgPSBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICBpZiAoYyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX3VzZUNhY2hlID0gYztcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF91c2VDYWNoZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmLmdhbW1hID0gZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgaWYgKGcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF9nYW1tYSA9IGc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfZ2FtbWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5ub2RhdGEgPSBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICBpZiAoZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX25hY29sID0gY2hyb21hJDQoZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbmFjb2w7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9fcmFuZ2VfXyhsZWZ0LCByaWdodCwgaW5jbHVzaXZlKSB7XG4gICAgICB2YXIgcmFuZ2UgPSBbXTtcbiAgICAgIHZhciBhc2NlbmRpbmcgPSBsZWZ0IDwgcmlnaHQ7XG4gICAgICB2YXIgZW5kID0gIWluY2x1c2l2ZSA/IHJpZ2h0IDogYXNjZW5kaW5nID8gcmlnaHQgKyAxIDogcmlnaHQgLSAxO1xuICAgICAgZm9yICh2YXIgaSA9IGxlZnQ7IGFzY2VuZGluZyA/IGkgPCBlbmQgOiBpID4gZW5kOyBhc2NlbmRpbmcgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgcmFuZ2UucHVzaChpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByYW5nZTtcbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIGludGVycG9sYXRlcyBiZXR3ZWVuIGEgc2V0IG9mIGNvbG9ycyB1emluZyBhIGJlemllciBzcGxpbmVcbiAgICAvL1xuXG4gICAgLy8gQHJlcXVpcmVzIHV0aWxzIGxhYlxuICAgIHZhciBDb2xvciQ1ID0gQ29sb3JfMTtcblxuICAgIHZhciBzY2FsZSQxID0gc2NhbGUkMjtcblxuICAgIC8vIG50aCByb3cgb2YgdGhlIHBhc2NhbCB0cmlhbmdsZVxuICAgIHZhciBiaW5vbV9yb3cgPSBmdW5jdGlvbihuKSB7XG4gICAgICAgIHZhciByb3cgPSBbMSwgMV07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV3cm93ID0gWzFdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPD0gcm93Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbmV3cm93W2pdID0gKHJvd1tqXSB8fCAwKSArIHJvd1tqIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3cgPSBuZXdyb3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdztcbiAgICB9O1xuXG4gICAgdmFyIGJlemllciA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMSwgYXNzaWduJDI7XG5cbiAgICAgICAgdmFyIEksIGxhYjAsIGxhYjEsIGxhYjI7XG4gICAgICAgIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG5ldyBDb2xvciQ1KGMpOyB9KTtcbiAgICAgICAgaWYgKGNvbG9ycy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICAoYXNzaWduID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5sYWIoKTsgfSksIGxhYjAgPSBhc3NpZ25bMF0sIGxhYjEgPSBhc3NpZ25bMV0pO1xuICAgICAgICAgICAgSSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiID0gKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGxhYjBbaV0gKyAodCAqIChsYWIxW2ldIC0gbGFiMFtpXSkpOyB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ1KGxhYiwgJ2xhYicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAvLyBxdWFkcmF0aWMgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICAgICAgICAgIChhc3NpZ24kMSA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubGFiKCk7IH0pLCBsYWIwID0gYXNzaWduJDFbMF0sIGxhYjEgPSBhc3NpZ24kMVsxXSwgbGFiMiA9IGFzc2lnbiQxWzJdKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYiA9IChbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiAoKDEtdCkqKDEtdCkgKiBsYWIwW2ldKSArICgyICogKDEtdCkgKiB0ICogbGFiMVtpXSkgKyAodCAqIHQgKiBsYWIyW2ldKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkNShsYWIsICdsYWInKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgLy8gY3ViaWMgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICAgICAgICAgIHZhciBsYWIzO1xuICAgICAgICAgICAgKGFzc2lnbiQyID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5sYWIoKTsgfSksIGxhYjAgPSBhc3NpZ24kMlswXSwgbGFiMSA9IGFzc2lnbiQyWzFdLCBsYWIyID0gYXNzaWduJDJbMl0sIGxhYjMgPSBhc3NpZ24kMlszXSk7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gKCgxLXQpKigxLXQpKigxLXQpICogbGFiMFtpXSkgKyAoMyAqICgxLXQpICogKDEtdCkgKiB0ICogbGFiMVtpXSkgKyAoMyAqICgxLXQpICogdCAqIHQgKiBsYWIyW2ldKSArICh0KnQqdCAqIGxhYjNbaV0pOyB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ1KGxhYiwgJ2xhYicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYWwgY2FzZSAoZGVncmVlIG4gYmV6aWVyKVxuICAgICAgICAgICAgdmFyIGxhYnMsIHJvdywgbjtcbiAgICAgICAgICAgIGxhYnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KTtcbiAgICAgICAgICAgIG4gPSBjb2xvcnMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJvdyA9IGJpbm9tX3JvdyhuKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHZhciB1ID0gMSAtIHQ7XG4gICAgICAgICAgICAgICAgdmFyIGxhYiA9IChbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBsYWJzLnJlZHVjZShmdW5jdGlvbiAoc3VtLCBlbCwgaikgeyByZXR1cm4gKHN1bSArIHJvd1tqXSAqIE1hdGgucG93KCB1LCAobiAtIGopICkgKiBNYXRoLnBvdyggdCwgaiApICogZWxbaV0pOyB9LCAwKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkNShsYWIsICdsYWInKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIk5vIHBvaW50IGluIHJ1bm5pbmcgYmV6aWVyIHdpdGggb25seSBvbmUgY29sb3IuXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEk7XG4gICAgfTtcblxuICAgIHZhciBiZXppZXJfMSA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgICAgICAgdmFyIGYgPSBiZXppZXIoY29sb3JzKTtcbiAgICAgICAgZi5zY2FsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjYWxlJDEoZik7IH07XG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAqIGludGVycG9sYXRlcyBiZXR3ZWVuIGEgc2V0IG9mIGNvbG9ycyB1emluZyBhIGJlemllciBzcGxpbmVcbiAgICAgKiBibGVuZCBtb2RlIGZvcm11bGFzIHRha2VuIGZyb20gaHR0cDovL3d3dy52ZW50dXJlLXdhcmUuY29tL2tldmluL2NvZGluZy9sZXRzLWxlYXJuLW1hdGgtcGhvdG9zaG9wLWJsZW5kLW1vZGVzL1xuICAgICAqL1xuXG4gICAgdmFyIGNocm9tYSQzID0gY2hyb21hXzE7XG5cbiAgICB2YXIgYmxlbmQgPSBmdW5jdGlvbiAoYm90dG9tLCB0b3AsIG1vZGUpIHtcbiAgICAgICAgaWYgKCFibGVuZFttb2RlXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGJsZW5kIG1vZGUgJyArIG1vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibGVuZFttb2RlXShib3R0b20sIHRvcCk7XG4gICAgfTtcblxuICAgIHZhciBibGVuZF9mID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGZ1bmN0aW9uIChib3R0b20sdG9wKSB7XG4gICAgICAgICAgICB2YXIgYzAgPSBjaHJvbWEkMyh0b3ApLnJnYigpO1xuICAgICAgICAgICAgdmFyIGMxID0gY2hyb21hJDMoYm90dG9tKS5yZ2IoKTtcbiAgICAgICAgICAgIHJldHVybiBjaHJvbWEkMy5yZ2IoZihjMCwgYzEpKTtcbiAgICAgICAgfTsgfTtcblxuICAgIHZhciBlYWNoID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGZ1bmN0aW9uIChjMCwgYzEpIHtcbiAgICAgICAgICAgIHZhciBvdXQgPSBbXTtcbiAgICAgICAgICAgIG91dFswXSA9IGYoYzBbMF0sIGMxWzBdKTtcbiAgICAgICAgICAgIG91dFsxXSA9IGYoYzBbMV0sIGMxWzFdKTtcbiAgICAgICAgICAgIG91dFsyXSA9IGYoYzBbMl0sIGMxWzJdKTtcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH07IH07XG5cbiAgICB2YXIgbm9ybWFsID0gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGE7IH07XG4gICAgdmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYSAqIGIgLyAyNTU7IH07XG4gICAgdmFyIGRhcmtlbiA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEgPiBiID8gYiA6IGE7IH07XG4gICAgdmFyIGxpZ2h0ZW4gPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhID4gYiA/IGEgOiBiOyB9O1xuICAgIHZhciBzY3JlZW4gPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiAyNTUgKiAoMSAtICgxLWEvMjU1KSAqICgxLWIvMjU1KSk7IH07XG4gICAgdmFyIG92ZXJsYXkgPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBiIDwgMTI4ID8gMiAqIGEgKiBiIC8gMjU1IDogMjU1ICogKDEgLSAyICogKDEgLSBhIC8gMjU1ICkgKiAoIDEgLSBiIC8gMjU1ICkpOyB9O1xuICAgIHZhciBidXJuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gMjU1ICogKDEgLSAoMSAtIGIgLyAyNTUpIC8gKGEvMjU1KSk7IH07XG4gICAgdmFyIGRvZGdlID0gZnVuY3Rpb24gKGEsYikge1xuICAgICAgICBpZiAoYSA9PT0gMjU1KSB7IHJldHVybiAyNTU7IH1cbiAgICAgICAgYSA9IDI1NSAqIChiIC8gMjU1KSAvICgxIC0gYSAvIDI1NSk7XG4gICAgICAgIHJldHVybiBhID4gMjU1ID8gMjU1IDogYVxuICAgIH07XG5cbiAgICAvLyAjIGFkZCA9IChhLGIpIC0+XG4gICAgLy8gIyAgICAgaWYgKGEgKyBiID4gMjU1KSB0aGVuIDI1NSBlbHNlIGEgKyBiXG5cbiAgICBibGVuZC5ub3JtYWwgPSBibGVuZF9mKGVhY2gobm9ybWFsKSk7XG4gICAgYmxlbmQubXVsdGlwbHkgPSBibGVuZF9mKGVhY2gobXVsdGlwbHkpKTtcbiAgICBibGVuZC5zY3JlZW4gPSBibGVuZF9mKGVhY2goc2NyZWVuKSk7XG4gICAgYmxlbmQub3ZlcmxheSA9IGJsZW5kX2YoZWFjaChvdmVybGF5KSk7XG4gICAgYmxlbmQuZGFya2VuID0gYmxlbmRfZihlYWNoKGRhcmtlbikpO1xuICAgIGJsZW5kLmxpZ2h0ZW4gPSBibGVuZF9mKGVhY2gobGlnaHRlbikpO1xuICAgIGJsZW5kLmRvZGdlID0gYmxlbmRfZihlYWNoKGRvZGdlKSk7XG4gICAgYmxlbmQuYnVybiA9IGJsZW5kX2YoZWFjaChidXJuKSk7XG4gICAgLy8gYmxlbmQuYWRkID0gYmxlbmRfZihlYWNoKGFkZCkpO1xuXG4gICAgdmFyIGJsZW5kXzEgPSBibGVuZDtcblxuICAgIC8vIGN1YmVoZWxpeCBpbnRlcnBvbGF0aW9uXG4gICAgLy8gYmFzZWQgb24gRC5BLiBHcmVlbiBcIkEgY29sb3VyIHNjaGVtZSBmb3IgdGhlIGRpc3BsYXkgb2YgYXN0cm9ub21pY2FsIGludGVuc2l0eSBpbWFnZXNcIlxuICAgIC8vIGh0dHA6Ly9hc3Ryb24tc29jLmluL2J1bGxldGluLzExSnVuZS8yODkzOTIwMTEucGRmXG5cbiAgICB2YXIgdHlwZSQxID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2xpcF9yZ2IgPSB1dGlscy5jbGlwX3JnYjtcbiAgICB2YXIgVFdPUEkgPSB1dGlscy5UV09QSTtcbiAgICB2YXIgcG93JDIgPSBNYXRoLnBvdztcbiAgICB2YXIgc2luJDEgPSBNYXRoLnNpbjtcbiAgICB2YXIgY29zJDEgPSBNYXRoLmNvcztcbiAgICB2YXIgY2hyb21hJDIgPSBjaHJvbWFfMTtcblxuICAgIHZhciBjdWJlaGVsaXggPSBmdW5jdGlvbihzdGFydCwgcm90YXRpb25zLCBodWUsIGdhbW1hLCBsaWdodG5lc3MpIHtcbiAgICAgICAgaWYgKCBzdGFydCA9PT0gdm9pZCAwICkgc3RhcnQ9MzAwO1xuICAgICAgICBpZiAoIHJvdGF0aW9ucyA9PT0gdm9pZCAwICkgcm90YXRpb25zPS0xLjU7XG4gICAgICAgIGlmICggaHVlID09PSB2b2lkIDAgKSBodWU9MTtcbiAgICAgICAgaWYgKCBnYW1tYSA9PT0gdm9pZCAwICkgZ2FtbWE9MTtcbiAgICAgICAgaWYgKCBsaWdodG5lc3MgPT09IHZvaWQgMCApIGxpZ2h0bmVzcz1bMCwxXTtcblxuICAgICAgICB2YXIgZGggPSAwLCBkbDtcbiAgICAgICAgaWYgKHR5cGUkMShsaWdodG5lc3MpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICBkbCA9IGxpZ2h0bmVzc1sxXSAtIGxpZ2h0bmVzc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRsID0gMDtcbiAgICAgICAgICAgIGxpZ2h0bmVzcyA9IFtsaWdodG5lc3MsIGxpZ2h0bmVzc107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uKGZyYWN0KSB7XG4gICAgICAgICAgICB2YXIgYSA9IFRXT1BJICogKCgoc3RhcnQrMTIwKS8zNjApICsgKHJvdGF0aW9ucyAqIGZyYWN0KSk7XG4gICAgICAgICAgICB2YXIgbCA9IHBvdyQyKGxpZ2h0bmVzc1swXSArIChkbCAqIGZyYWN0KSwgZ2FtbWEpO1xuICAgICAgICAgICAgdmFyIGggPSBkaCAhPT0gMCA/IGh1ZVswXSArIChmcmFjdCAqIGRoKSA6IGh1ZTtcbiAgICAgICAgICAgIHZhciBhbXAgPSAoaCAqIGwgKiAoMS1sKSkgLyAyO1xuICAgICAgICAgICAgdmFyIGNvc19hID0gY29zJDEoYSk7XG4gICAgICAgICAgICB2YXIgc2luX2EgPSBzaW4kMShhKTtcbiAgICAgICAgICAgIHZhciByID0gbCArIChhbXAgKiAoKC0wLjE0ODYxICogY29zX2EpICsgKDEuNzgyNzcqIHNpbl9hKSkpO1xuICAgICAgICAgICAgdmFyIGcgPSBsICsgKGFtcCAqICgoLTAuMjkyMjcgKiBjb3NfYSkgLSAoMC45MDY0OSogc2luX2EpKSk7XG4gICAgICAgICAgICB2YXIgYiA9IGwgKyAoYW1wICogKCsxLjk3Mjk0ICogY29zX2EpKTtcbiAgICAgICAgICAgIHJldHVybiBjaHJvbWEkMihjbGlwX3JnYihbcioyNTUsZyoyNTUsYioyNTUsMV0pKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnN0YXJ0ID0gZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgaWYgKChzID09IG51bGwpKSB7IHJldHVybiBzdGFydDsgfVxuICAgICAgICAgICAgc3RhcnQgPSBzO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5yb3RhdGlvbnMgPSBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICBpZiAoKHIgPT0gbnVsbCkpIHsgcmV0dXJuIHJvdGF0aW9uczsgfVxuICAgICAgICAgICAgcm90YXRpb25zID0gcjtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuZ2FtbWEgPSBmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICBpZiAoKGcgPT0gbnVsbCkpIHsgcmV0dXJuIGdhbW1hOyB9XG4gICAgICAgICAgICBnYW1tYSA9IGc7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmh1ZSA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgIGlmICgoaCA9PSBudWxsKSkgeyByZXR1cm4gaHVlOyB9XG4gICAgICAgICAgICBodWUgPSBoO1xuICAgICAgICAgICAgaWYgKHR5cGUkMShodWUpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWVbMV0gLSBodWVbMF07XG4gICAgICAgICAgICAgICAgaWYgKGRoID09PSAwKSB7IGh1ZSA9IGh1ZVsxXTsgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmxpZ2h0bmVzcyA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgIGlmICgoaCA9PSBudWxsKSkgeyByZXR1cm4gbGlnaHRuZXNzOyB9XG4gICAgICAgICAgICBpZiAodHlwZSQxKGgpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgbGlnaHRuZXNzID0gaDtcbiAgICAgICAgICAgICAgICBkbCA9IGhbMV0gLSBoWzBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaWdodG5lc3MgPSBbaCxoXTtcbiAgICAgICAgICAgICAgICBkbCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnNjYWxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hyb21hJDIuc2NhbGUoZik7IH07XG5cbiAgICAgICAgZi5odWUoaHVlKTtcblxuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJDQgPSBDb2xvcl8xO1xuICAgIHZhciBkaWdpdHMgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgICB2YXIgZmxvb3IkMSA9IE1hdGguZmxvb3I7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tO1xuXG4gICAgdmFyIHJhbmRvbV8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29kZSA9ICcjJztcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPDY7IGkrKykge1xuICAgICAgICAgICAgY29kZSArPSBkaWdpdHMuY2hhckF0KGZsb29yJDEocmFuZG9tKCkgKiAxNikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkNChjb2RlLCAnaGV4Jyk7XG4gICAgfTtcblxuICAgIHZhciB0eXBlID0gdHlwZSRwO1xuICAgIHZhciBsb2cgPSBNYXRoLmxvZztcbiAgICB2YXIgcG93JDEgPSBNYXRoLnBvdztcbiAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICAgIHZhciBhYnMkMSA9IE1hdGguYWJzO1xuXG5cbiAgICB2YXIgYW5hbHl6ZSA9IGZ1bmN0aW9uIChkYXRhLCBrZXkpIHtcbiAgICAgICAgaWYgKCBrZXkgPT09IHZvaWQgMCApIGtleT1udWxsO1xuXG4gICAgICAgIHZhciByID0ge1xuICAgICAgICAgICAgbWluOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFKi0xLFxuICAgICAgICAgICAgc3VtOiAwLFxuICAgICAgICAgICAgdmFsdWVzOiBbXSxcbiAgICAgICAgICAgIGNvdW50OiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlKGRhdGEpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZGF0YSA9IE9iamVjdC52YWx1ZXMoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIGlmIChrZXkgJiYgdHlwZSh2YWwpID09PSAnb2JqZWN0JykgeyB2YWwgPSB2YWxba2V5XTsgfVxuICAgICAgICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCAmJiAhaXNOYU4odmFsKSkge1xuICAgICAgICAgICAgICAgIHIudmFsdWVzLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICByLnN1bSArPSB2YWw7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA8IHIubWluKSB7IHIubWluID0gdmFsOyB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA+IHIubWF4KSB7IHIubWF4ID0gdmFsOyB9XG4gICAgICAgICAgICAgICAgci5jb3VudCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByLmRvbWFpbiA9IFtyLm1pbiwgci5tYXhdO1xuXG4gICAgICAgIHIubGltaXRzID0gZnVuY3Rpb24gKG1vZGUsIG51bSkgeyByZXR1cm4gbGltaXRzKHIsIG1vZGUsIG51bSk7IH07XG5cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcblxuXG4gICAgdmFyIGxpbWl0cyA9IGZ1bmN0aW9uIChkYXRhLCBtb2RlLCBudW0pIHtcbiAgICAgICAgaWYgKCBtb2RlID09PSB2b2lkIDAgKSBtb2RlPSdlcXVhbCc7XG4gICAgICAgIGlmICggbnVtID09PSB2b2lkIDAgKSBudW09NztcblxuICAgICAgICBpZiAodHlwZShkYXRhKSA9PSAnYXJyYXknKSB7XG4gICAgICAgICAgICBkYXRhID0gYW5hbHl6ZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWluID0gZGF0YS5taW47XG4gICAgICAgIHZhciBtYXggPSBkYXRhLm1heDtcbiAgICAgICAgdmFyIHZhbHVlcyA9IGRhdGEudmFsdWVzLnNvcnQoZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYS1iOyB9KTtcblxuICAgICAgICBpZiAobnVtID09PSAxKSB7IHJldHVybiBbbWluLG1heF07IH1cblxuICAgICAgICB2YXIgbGltaXRzID0gW107XG5cbiAgICAgICAgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdjJykgeyAvLyBjb250aW51b3VzXG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnZScpIHsgLy8gZXF1YWwgaW50ZXJ2YWxcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTE7IGk8bnVtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaW1pdHMucHVzaChtaW4rKChpL251bSkqKG1heC1taW4pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ2wnKSB7IC8vIGxvZyBzY2FsZVxuICAgICAgICAgICAgaWYgKG1pbiA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb2dhcml0aG1pYyBzY2FsZXMgYXJlIG9ubHkgcG9zc2libGUgZm9yIHZhbHVlcyA+IDAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtaW5fbG9nID0gTWF0aC5MT0cxMEUgKiBsb2cobWluKTtcbiAgICAgICAgICAgIHZhciBtYXhfbG9nID0gTWF0aC5MT0cxMEUgKiBsb2cobWF4KTtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDE9MTsgaSQxPG51bTsgaSQxKyspIHtcbiAgICAgICAgICAgICAgICBsaW1pdHMucHVzaChwb3ckMSgxMCwgbWluX2xvZyArICgoaSQxL251bSkgKiAobWF4X2xvZyAtIG1pbl9sb2cpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdxJykgeyAvLyBxdWFudGlsZSBzY2FsZVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMj0xOyBpJDI8bnVtOyBpJDIrKykge1xuICAgICAgICAgICAgICAgIHZhciBwID0gKCh2YWx1ZXMubGVuZ3RoLTEpICogaSQyKS9udW07XG4gICAgICAgICAgICAgICAgdmFyIHBiID0gZmxvb3IocCk7XG4gICAgICAgICAgICAgICAgaWYgKHBiID09PSBwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKHZhbHVlc1twYl0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIHAgPiBwYlxuICAgICAgICAgICAgICAgICAgICB2YXIgcHIgPSBwIC0gcGI7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKCh2YWx1ZXNbcGJdKigxLXByKSkgKyAodmFsdWVzW3BiKzFdKnByKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ2snKSB7IC8vIGstbWVhbnMgY2x1c3RlcmluZ1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGltcGxlbWVudGF0aW9uIGJhc2VkIG9uXG4gICAgICAgICAgICBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvZmlndWUvc291cmNlL2Jyb3dzZS90cnVuay9maWd1ZS5qcyMzMzZcbiAgICAgICAgICAgIHNpbXBsaWZpZWQgZm9yIDEtZCBpbnB1dCB2YWx1ZXNcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgY2x1c3RlcjtcbiAgICAgICAgICAgIHZhciBuID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBhc3NpZ25tZW50cyA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgICAgIHZhciBjbHVzdGVyU2l6ZXMgPSBuZXcgQXJyYXkobnVtKTtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG5iX2l0ZXJzID0gMDtcbiAgICAgICAgICAgIHZhciBjZW50cm9pZHMgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBnZXQgc2VlZCB2YWx1ZXNcbiAgICAgICAgICAgIGNlbnRyb2lkcyA9IFtdO1xuICAgICAgICAgICAgY2VudHJvaWRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMz0xOyBpJDM8bnVtOyBpJDMrKykge1xuICAgICAgICAgICAgICAgIGNlbnRyb2lkcy5wdXNoKG1pbiArICgoaSQzL251bSkgKiAobWF4LW1pbikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbnRyb2lkcy5wdXNoKG1heCk7XG5cbiAgICAgICAgICAgIHdoaWxlIChyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50IHN0ZXBcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8bnVtOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlclNpemVzW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSQ0PTA7IGkkNDxuOyBpJDQrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNbaSQ0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbmRpc3QgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmVzdCA9ICh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqJDE9MDsgaiQxPG51bTsgaiQxKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXN0ID0gYWJzJDEoY2VudHJvaWRzW2okMV0tdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBtaW5kaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluZGlzdCA9IGRpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdCA9IGokMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsdXN0ZXJTaXplc1tiZXN0XSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHNbaSQ0XSA9IGJlc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY2VudHJvaWRzIHN0ZXBcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2VudHJvaWRzID0gbmV3IEFycmF5KG51bSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiQyPTA7IGokMjxudW07IGokMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tqJDJdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSQ1PTA7IGkkNTxuOyBpJDUrKykge1xuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyID0gYXNzaWdubWVudHNbaSQ1XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0NlbnRyb2lkc1tjbHVzdGVyXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2NsdXN0ZXJdID0gdmFsdWVzW2kkNV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbY2x1c3Rlcl0gKz0gdmFsdWVzW2kkNV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiQzPTA7IGokMzxudW07IGokMysrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tqJDNdICo9IDEvY2x1c3RlclNpemVzW2okM107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgY29udmVyZ2VuY2VcbiAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqJDQ9MDsgaiQ0PG51bTsgaiQ0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0NlbnRyb2lkc1tqJDRdICE9PSBjZW50cm9pZHNbaiQ0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VudHJvaWRzID0gbmV3Q2VudHJvaWRzO1xuICAgICAgICAgICAgICAgIG5iX2l0ZXJzKys7XG5cbiAgICAgICAgICAgICAgICBpZiAobmJfaXRlcnMgPiAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmaW5pc2hlZCBrLW1lYW5zIGNsdXN0ZXJpbmdcbiAgICAgICAgICAgIC8vIHRoZSBuZXh0IHBhcnQgaXMgYm9ycm93ZWQgZnJvbSBnYWJyaWVsZmxvci5pdFxuICAgICAgICAgICAgdmFyIGtDbHVzdGVycyA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaiQ1PTA7IGokNTxudW07IGokNSsrKSB7XG4gICAgICAgICAgICAgICAga0NsdXN0ZXJzW2okNV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkkNj0wOyBpJDY8bjsgaSQ2KyspIHtcbiAgICAgICAgICAgICAgICBjbHVzdGVyID0gYXNzaWdubWVudHNbaSQ2XTtcbiAgICAgICAgICAgICAgICBrQ2x1c3RlcnNbY2x1c3Rlcl0ucHVzaCh2YWx1ZXNbaSQ2XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdG1wS01lYW5zQnJlYWtzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBqJDY9MDsgaiQ2PG51bTsgaiQ2KyspIHtcbiAgICAgICAgICAgICAgICB0bXBLTWVhbnNCcmVha3MucHVzaChrQ2x1c3RlcnNbaiQ2XVswXSk7XG4gICAgICAgICAgICAgICAgdG1wS01lYW5zQnJlYWtzLnB1c2goa0NsdXN0ZXJzW2okNl1ba0NsdXN0ZXJzW2okNl0ubGVuZ3RoLTFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRtcEtNZWFuc0JyZWFrcyA9IHRtcEtNZWFuc0JyZWFrcy5zb3J0KGZ1bmN0aW9uIChhLGIpeyByZXR1cm4gYS1iOyB9KTtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKHRtcEtNZWFuc0JyZWFrc1swXSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDc9MTsgaSQ3IDwgdG1wS01lYW5zQnJlYWtzLmxlbmd0aDsgaSQ3Kz0gMikge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdG1wS01lYW5zQnJlYWtzW2kkN107XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2KSAmJiAobGltaXRzLmluZGV4T2YodikgPT09IC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbWl0cztcbiAgICB9O1xuXG4gICAgdmFyIGFuYWx5emVfMSA9IHthbmFseXplOiBhbmFseXplLCBsaW1pdHM6IGxpbWl0c307XG5cbiAgICB2YXIgQ29sb3IkMyA9IENvbG9yXzE7XG5cblxuICAgIHZhciBjb250cmFzdCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIC8vIFdDQUcgY29udHJhc3QgcmF0aW9cbiAgICAgICAgLy8gc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jY29udHJhc3QtcmF0aW9kZWZcbiAgICAgICAgYSA9IG5ldyBDb2xvciQzKGEpO1xuICAgICAgICBiID0gbmV3IENvbG9yJDMoYik7XG4gICAgICAgIHZhciBsMSA9IGEubHVtaW5hbmNlKCk7XG4gICAgICAgIHZhciBsMiA9IGIubHVtaW5hbmNlKCk7XG4gICAgICAgIHJldHVybiBsMSA+IGwyID8gKGwxICsgMC4wNSkgLyAobDIgKyAwLjA1KSA6IChsMiArIDAuMDUpIC8gKGwxICsgMC4wNSk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciQyID0gQ29sb3JfMTtcbiAgICB2YXIgc3FydCA9IE1hdGguc3FydDtcbiAgICB2YXIgcG93ID0gTWF0aC5wb3c7XG4gICAgdmFyIG1pbiA9IE1hdGgubWluO1xuICAgIHZhciBtYXggPSBNYXRoLm1heDtcbiAgICB2YXIgYXRhbjIgPSBNYXRoLmF0YW4yO1xuICAgIHZhciBhYnMgPSBNYXRoLmFicztcbiAgICB2YXIgY29zID0gTWF0aC5jb3M7XG4gICAgdmFyIHNpbiA9IE1hdGguc2luO1xuICAgIHZhciBleHAgPSBNYXRoLmV4cDtcbiAgICB2YXIgUEkgPSBNYXRoLlBJO1xuXG4gICAgdmFyIGRlbHRhRSA9IGZ1bmN0aW9uKGEsIGIsIEtsLCBLYywgS2gpIHtcbiAgICAgICAgaWYgKCBLbCA9PT0gdm9pZCAwICkgS2w9MTtcbiAgICAgICAgaWYgKCBLYyA9PT0gdm9pZCAwICkgS2M9MTtcbiAgICAgICAgaWYgKCBLaCA9PT0gdm9pZCAwICkgS2g9MTtcblxuICAgICAgICAvLyBEZWx0YSBFIChDSUUgMjAwMClcbiAgICAgICAgLy8gc2VlIGh0dHA6Ly93d3cuYnJ1Y2VsaW5kYmxvb20uY29tL2luZGV4Lmh0bWw/RXFuX0RlbHRhRV9DSUUyMDAwLmh0bWxcbiAgICAgICAgdmFyIHJhZDJkZWcgPSBmdW5jdGlvbihyYWQpIHtcbiAgICAgICAgICAgIHJldHVybiAzNjAgKiByYWQgLyAoMiAqIFBJKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGRlZzJyYWQgPSBmdW5jdGlvbihkZWcpIHtcbiAgICAgICAgICAgIHJldHVybiAoMiAqIFBJICogZGVnKSAvIDM2MDtcbiAgICAgICAgfTtcbiAgICAgICAgYSA9IG5ldyBDb2xvciQyKGEpO1xuICAgICAgICBiID0gbmV3IENvbG9yJDIoYik7XG4gICAgICAgIHZhciByZWYgPSBBcnJheS5mcm9tKGEubGFiKCkpO1xuICAgICAgICB2YXIgTDEgPSByZWZbMF07XG4gICAgICAgIHZhciBhMSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIxID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBBcnJheS5mcm9tKGIubGFiKCkpO1xuICAgICAgICB2YXIgTDIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGEyID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiMiA9IHJlZiQxWzJdO1xuICAgICAgICB2YXIgYXZnTCA9IChMMSArIEwyKS8yO1xuICAgICAgICB2YXIgQzEgPSBzcXJ0KHBvdyhhMSwgMikgKyBwb3coYjEsIDIpKTtcbiAgICAgICAgdmFyIEMyID0gc3FydChwb3coYTIsIDIpICsgcG93KGIyLCAyKSk7XG4gICAgICAgIHZhciBhdmdDID0gKEMxICsgQzIpLzI7XG4gICAgICAgIHZhciBHID0gMC41KigxLXNxcnQocG93KGF2Z0MsIDcpLyhwb3coYXZnQywgNykgKyBwb3coMjUsIDcpKSkpO1xuICAgICAgICB2YXIgYTFwID0gYTEqKDErRyk7XG4gICAgICAgIHZhciBhMnAgPSBhMiooMStHKTtcbiAgICAgICAgdmFyIEMxcCA9IHNxcnQocG93KGExcCwgMikgKyBwb3coYjEsIDIpKTtcbiAgICAgICAgdmFyIEMycCA9IHNxcnQocG93KGEycCwgMikgKyBwb3coYjIsIDIpKTtcbiAgICAgICAgdmFyIGF2Z0NwID0gKEMxcCArIEMycCkvMjtcbiAgICAgICAgdmFyIGFyY3RhbjEgPSByYWQyZGVnKGF0YW4yKGIxLCBhMXApKTtcbiAgICAgICAgdmFyIGFyY3RhbjIgPSByYWQyZGVnKGF0YW4yKGIyLCBhMnApKTtcbiAgICAgICAgdmFyIGgxcCA9IGFyY3RhbjEgPj0gMCA/IGFyY3RhbjEgOiBhcmN0YW4xICsgMzYwO1xuICAgICAgICB2YXIgaDJwID0gYXJjdGFuMiA+PSAwID8gYXJjdGFuMiA6IGFyY3RhbjIgKyAzNjA7XG4gICAgICAgIHZhciBhdmdIcCA9IGFicyhoMXAgLSBoMnApID4gMTgwID8gKGgxcCArIGgycCArIDM2MCkvMiA6IChoMXAgKyBoMnApLzI7XG4gICAgICAgIHZhciBUID0gMSAtIDAuMTcqY29zKGRlZzJyYWQoYXZnSHAgLSAzMCkpICsgMC4yNCpjb3MoZGVnMnJhZCgyKmF2Z0hwKSkgKyAwLjMyKmNvcyhkZWcycmFkKDMqYXZnSHAgKyA2KSkgLSAwLjIqY29zKGRlZzJyYWQoNCphdmdIcCAtIDYzKSk7XG4gICAgICAgIHZhciBkZWx0YUhwID0gaDJwIC0gaDFwO1xuICAgICAgICBkZWx0YUhwID0gYWJzKGRlbHRhSHApIDw9IDE4MCA/IGRlbHRhSHAgOiBoMnAgPD0gaDFwID8gZGVsdGFIcCArIDM2MCA6IGRlbHRhSHAgLSAzNjA7XG4gICAgICAgIGRlbHRhSHAgPSAyKnNxcnQoQzFwKkMycCkqc2luKGRlZzJyYWQoZGVsdGFIcCkvMik7XG4gICAgICAgIHZhciBkZWx0YUwgPSBMMiAtIEwxO1xuICAgICAgICB2YXIgZGVsdGFDcCA9IEMycCAtIEMxcDsgICAgXG4gICAgICAgIHZhciBzbCA9IDEgKyAoMC4wMTUqcG93KGF2Z0wgLSA1MCwgMikpL3NxcnQoMjAgKyBwb3coYXZnTCAtIDUwLCAyKSk7XG4gICAgICAgIHZhciBzYyA9IDEgKyAwLjA0NSphdmdDcDtcbiAgICAgICAgdmFyIHNoID0gMSArIDAuMDE1KmF2Z0NwKlQ7XG4gICAgICAgIHZhciBkZWx0YVRoZXRhID0gMzAqZXhwKC1wb3coKGF2Z0hwIC0gMjc1KS8yNSwgMikpO1xuICAgICAgICB2YXIgUmMgPSAyKnNxcnQocG93KGF2Z0NwLCA3KS8ocG93KGF2Z0NwLCA3KSArIHBvdygyNSwgNykpKTtcbiAgICAgICAgdmFyIFJ0ID0gLVJjKnNpbigyKmRlZzJyYWQoZGVsdGFUaGV0YSkpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3FydChwb3coZGVsdGFMLyhLbCpzbCksIDIpICsgcG93KGRlbHRhQ3AvKEtjKnNjKSwgMikgKyBwb3coZGVsdGFIcC8oS2gqc2gpLCAyKSArIFJ0KihkZWx0YUNwLyhLYypzYykpKihkZWx0YUhwLyhLaCpzaCkpKTtcbiAgICAgICAgcmV0dXJuIG1heCgwLCBtaW4oMTAwLCByZXN1bHQpKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJDEgPSBDb2xvcl8xO1xuXG4gICAgLy8gc2ltcGxlIEV1Y2xpZGVhbiBkaXN0YW5jZVxuICAgIHZhciBkaXN0YW5jZSA9IGZ1bmN0aW9uKGEsIGIsIG1vZGUpIHtcbiAgICAgICAgaWYgKCBtb2RlID09PSB2b2lkIDAgKSBtb2RlPSdsYWInO1xuXG4gICAgICAgIC8vIERlbHRhIEUgKENJRSAxOTc2KVxuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy5icnVjZWxpbmRibG9vbS5jb20vaW5kZXguaHRtbD9FcXVhdGlvbnMuaHRtbFxuICAgICAgICBhID0gbmV3IENvbG9yJDEoYSk7XG4gICAgICAgIGIgPSBuZXcgQ29sb3IkMShiKTtcbiAgICAgICAgdmFyIGwxID0gYS5nZXQobW9kZSk7XG4gICAgICAgIHZhciBsMiA9IGIuZ2V0KG1vZGUpO1xuICAgICAgICB2YXIgc3VtX3NxID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBsMSkge1xuICAgICAgICAgICAgdmFyIGQgPSAobDFbaV0gfHwgMCkgLSAobDJbaV0gfHwgMCk7XG4gICAgICAgICAgICBzdW1fc3EgKz0gZCpkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtX3NxKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yID0gQ29sb3JfMTtcblxuICAgIHZhciB2YWxpZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IsIFsgbnVsbCBdLmNvbmNhdCggYXJncykgKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHNvbWUgcHJlLWRlZmluZWQgY29sb3Igc2NhbGVzOlxuICAgIHZhciBjaHJvbWEkMSA9IGNocm9tYV8xO1xuXG4gICAgdmFyIHNjYWxlID0gc2NhbGUkMjtcblxuICAgIHZhciBzY2FsZXMgPSB7XG4gICAgXHRjb29sOiBmdW5jdGlvbiBjb29sKCkgeyByZXR1cm4gc2NhbGUoW2Nocm9tYSQxLmhzbCgxODAsMSwuOSksIGNocm9tYSQxLmhzbCgyNTAsLjcsLjQpXSkgfSxcbiAgICBcdGhvdDogZnVuY3Rpb24gaG90KCkgeyByZXR1cm4gc2NhbGUoWycjMDAwJywnI2YwMCcsJyNmZjAnLCcjZmZmJ10pLm1vZGUoJ3JnYicpIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICAgIENvbG9yQnJld2VyIGNvbG9ycyBmb3IgY2hyb21hLmpzXG5cbiAgICAgICAgQ29weXJpZ2h0IChjKSAyMDAyIEN5bnRoaWEgQnJld2VyLCBNYXJrIEhhcnJvd2VyLCBhbmQgVGhlXG4gICAgICAgIFBlbm5zeWx2YW5pYSBTdGF0ZSBVbml2ZXJzaXR5LlxuXG4gICAgICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICAgICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICAgICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWRcbiAgICAgICAgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1JcbiAgICAgICAgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAgICAgICAgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAgICAqL1xuXG4gICAgdmFyIGNvbG9yYnJld2VyID0ge1xuICAgICAgICAvLyBzZXF1ZW50aWFsXG4gICAgICAgIE9yUmQ6IFsnI2ZmZjdlYycsICcjZmVlOGM4JywgJyNmZGQ0OWUnLCAnI2ZkYmI4NCcsICcjZmM4ZDU5JywgJyNlZjY1NDgnLCAnI2Q3MzAxZicsICcjYjMwMDAwJywgJyM3ZjAwMDAnXSxcbiAgICAgICAgUHVCdTogWycjZmZmN2ZiJywgJyNlY2U3ZjInLCAnI2QwZDFlNicsICcjYTZiZGRiJywgJyM3NGE5Y2YnLCAnIzM2OTBjMCcsICcjMDU3MGIwJywgJyMwNDVhOGQnLCAnIzAyMzg1OCddLFxuICAgICAgICBCdVB1OiBbJyNmN2ZjZmQnLCAnI2UwZWNmNCcsICcjYmZkM2U2JywgJyM5ZWJjZGEnLCAnIzhjOTZjNicsICcjOGM2YmIxJywgJyM4ODQxOWQnLCAnIzgxMGY3YycsICcjNGQwMDRiJ10sXG4gICAgICAgIE9yYW5nZXM6IFsnI2ZmZjVlYicsICcjZmVlNmNlJywgJyNmZGQwYTInLCAnI2ZkYWU2YicsICcjZmQ4ZDNjJywgJyNmMTY5MTMnLCAnI2Q5NDgwMScsICcjYTYzNjAzJywgJyM3ZjI3MDQnXSxcbiAgICAgICAgQnVHbjogWycjZjdmY2ZkJywgJyNlNWY1ZjknLCAnI2NjZWNlNicsICcjOTlkOGM5JywgJyM2NmMyYTQnLCAnIzQxYWU3NicsICcjMjM4YjQ1JywgJyMwMDZkMmMnLCAnIzAwNDQxYiddLFxuICAgICAgICBZbE9yQnI6IFsnI2ZmZmZlNScsICcjZmZmN2JjJywgJyNmZWUzOTEnLCAnI2ZlYzQ0ZicsICcjZmU5OTI5JywgJyNlYzcwMTQnLCAnI2NjNGMwMicsICcjOTkzNDA0JywgJyM2NjI1MDYnXSxcbiAgICAgICAgWWxHbjogWycjZmZmZmU1JywgJyNmN2ZjYjknLCAnI2Q5ZjBhMycsICcjYWRkZDhlJywgJyM3OGM2NzknLCAnIzQxYWI1ZCcsICcjMjM4NDQzJywgJyMwMDY4MzcnLCAnIzAwNDUyOSddLFxuICAgICAgICBSZWRzOiBbJyNmZmY1ZjAnLCAnI2ZlZTBkMicsICcjZmNiYmExJywgJyNmYzkyNzInLCAnI2ZiNmE0YScsICcjZWYzYjJjJywgJyNjYjE4MWQnLCAnI2E1MGYxNScsICcjNjcwMDBkJ10sXG4gICAgICAgIFJkUHU6IFsnI2ZmZjdmMycsICcjZmRlMGRkJywgJyNmY2M1YzAnLCAnI2ZhOWZiNScsICcjZjc2OGExJywgJyNkZDM0OTcnLCAnI2FlMDE3ZScsICcjN2EwMTc3JywgJyM0OTAwNmEnXSxcbiAgICAgICAgR3JlZW5zOiBbJyNmN2ZjZjUnLCAnI2U1ZjVlMCcsICcjYzdlOWMwJywgJyNhMWQ5OWInLCAnIzc0YzQ3NicsICcjNDFhYjVkJywgJyMyMzhiNDUnLCAnIzAwNmQyYycsICcjMDA0NDFiJ10sXG4gICAgICAgIFlsR25CdTogWycjZmZmZmQ5JywgJyNlZGY4YjEnLCAnI2M3ZTliNCcsICcjN2ZjZGJiJywgJyM0MWI2YzQnLCAnIzFkOTFjMCcsICcjMjI1ZWE4JywgJyMyNTM0OTQnLCAnIzA4MWQ1OCddLFxuICAgICAgICBQdXJwbGVzOiBbJyNmY2ZiZmQnLCAnI2VmZWRmNScsICcjZGFkYWViJywgJyNiY2JkZGMnLCAnIzllOWFjOCcsICcjODA3ZGJhJywgJyM2YTUxYTMnLCAnIzU0Mjc4ZicsICcjM2YwMDdkJ10sXG4gICAgICAgIEduQnU6IFsnI2Y3ZmNmMCcsICcjZTBmM2RiJywgJyNjY2ViYzUnLCAnI2E4ZGRiNScsICcjN2JjY2M0JywgJyM0ZWIzZDMnLCAnIzJiOGNiZScsICcjMDg2OGFjJywgJyMwODQwODEnXSxcbiAgICAgICAgR3JleXM6IFsnI2ZmZmZmZicsICcjZjBmMGYwJywgJyNkOWQ5ZDknLCAnI2JkYmRiZCcsICcjOTY5Njk2JywgJyM3MzczNzMnLCAnIzUyNTI1MicsICcjMjUyNTI1JywgJyMwMDAwMDAnXSxcbiAgICAgICAgWWxPclJkOiBbJyNmZmZmY2MnLCAnI2ZmZWRhMCcsICcjZmVkOTc2JywgJyNmZWIyNGMnLCAnI2ZkOGQzYycsICcjZmM0ZTJhJywgJyNlMzFhMWMnLCAnI2JkMDAyNicsICcjODAwMDI2J10sXG4gICAgICAgIFB1UmQ6IFsnI2Y3ZjRmOScsICcjZTdlMWVmJywgJyNkNGI5ZGEnLCAnI2M5OTRjNycsICcjZGY2NWIwJywgJyNlNzI5OGEnLCAnI2NlMTI1NicsICcjOTgwMDQzJywgJyM2NzAwMWYnXSxcbiAgICAgICAgQmx1ZXM6IFsnI2Y3ZmJmZicsICcjZGVlYmY3JywgJyNjNmRiZWYnLCAnIzllY2FlMScsICcjNmJhZWQ2JywgJyM0MjkyYzYnLCAnIzIxNzFiNScsICcjMDg1MTljJywgJyMwODMwNmInXSxcbiAgICAgICAgUHVCdUduOiBbJyNmZmY3ZmInLCAnI2VjZTJmMCcsICcjZDBkMWU2JywgJyNhNmJkZGInLCAnIzY3YTljZicsICcjMzY5MGMwJywgJyMwMjgxOGEnLCAnIzAxNmM1OScsICcjMDE0NjM2J10sXG4gICAgICAgIFZpcmlkaXM6IFsnIzQ0MDE1NCcsICcjNDgyNzc3JywgJyMzZjRhOGEnLCAnIzMxNjc4ZScsICcjMjY4MzhmJywgJyMxZjlkOGEnLCAnIzZjY2U1YScsICcjYjZkZTJiJywgJyNmZWU4MjUnXSxcblxuICAgICAgICAvLyBkaXZlcmdpbmdcblxuICAgICAgICBTcGVjdHJhbDogWycjOWUwMTQyJywgJyNkNTNlNGYnLCAnI2Y0NmQ0MycsICcjZmRhZTYxJywgJyNmZWUwOGInLCAnI2ZmZmZiZicsICcjZTZmNTk4JywgJyNhYmRkYTQnLCAnIzY2YzJhNScsICcjMzI4OGJkJywgJyM1ZTRmYTInXSxcbiAgICAgICAgUmRZbEduOiBbJyNhNTAwMjYnLCAnI2Q3MzAyNycsICcjZjQ2ZDQzJywgJyNmZGFlNjEnLCAnI2ZlZTA4YicsICcjZmZmZmJmJywgJyNkOWVmOGInLCAnI2E2ZDk2YScsICcjNjZiZDYzJywgJyMxYTk4NTAnLCAnIzAwNjgzNyddLFxuICAgICAgICBSZEJ1OiBbJyM2NzAwMWYnLCAnI2IyMTgyYicsICcjZDY2MDRkJywgJyNmNGE1ODInLCAnI2ZkZGJjNycsICcjZjdmN2Y3JywgJyNkMWU1ZjAnLCAnIzkyYzVkZScsICcjNDM5M2MzJywgJyMyMTY2YWMnLCAnIzA1MzA2MSddLFxuICAgICAgICBQaVlHOiBbJyM4ZTAxNTInLCAnI2M1MWI3ZCcsICcjZGU3N2FlJywgJyNmMWI2ZGEnLCAnI2ZkZTBlZicsICcjZjdmN2Y3JywgJyNlNmY1ZDAnLCAnI2I4ZTE4NicsICcjN2ZiYzQxJywgJyM0ZDkyMjEnLCAnIzI3NjQxOSddLFxuICAgICAgICBQUkduOiBbJyM0MDAwNGInLCAnIzc2MmE4MycsICcjOTk3MGFiJywgJyNjMmE1Y2YnLCAnI2U3ZDRlOCcsICcjZjdmN2Y3JywgJyNkOWYwZDMnLCAnI2E2ZGJhMCcsICcjNWFhZTYxJywgJyMxYjc4MzcnLCAnIzAwNDQxYiddLFxuICAgICAgICBSZFlsQnU6IFsnI2E1MDAyNicsICcjZDczMDI3JywgJyNmNDZkNDMnLCAnI2ZkYWU2MScsICcjZmVlMDkwJywgJyNmZmZmYmYnLCAnI2UwZjNmOCcsICcjYWJkOWU5JywgJyM3NGFkZDEnLCAnIzQ1NzViNCcsICcjMzEzNjk1J10sXG4gICAgICAgIEJyQkc6IFsnIzU0MzAwNScsICcjOGM1MTBhJywgJyNiZjgxMmQnLCAnI2RmYzI3ZCcsICcjZjZlOGMzJywgJyNmNWY1ZjUnLCAnI2M3ZWFlNScsICcjODBjZGMxJywgJyMzNTk3OGYnLCAnIzAxNjY1ZScsICcjMDAzYzMwJ10sXG4gICAgICAgIFJkR3k6IFsnIzY3MDAxZicsICcjYjIxODJiJywgJyNkNjYwNGQnLCAnI2Y0YTU4MicsICcjZmRkYmM3JywgJyNmZmZmZmYnLCAnI2UwZTBlMCcsICcjYmFiYWJhJywgJyM4Nzg3ODcnLCAnIzRkNGQ0ZCcsICcjMWExYTFhJ10sXG4gICAgICAgIFB1T3I6IFsnIzdmM2IwOCcsICcjYjM1ODA2JywgJyNlMDgyMTQnLCAnI2ZkYjg2MycsICcjZmVlMGI2JywgJyNmN2Y3ZjcnLCAnI2Q4ZGFlYicsICcjYjJhYmQyJywgJyM4MDczYWMnLCAnIzU0Mjc4OCcsICcjMmQwMDRiJ10sXG5cbiAgICAgICAgLy8gcXVhbGl0YXRpdmVcblxuICAgICAgICBTZXQyOiBbJyM2NmMyYTUnLCAnI2ZjOGQ2MicsICcjOGRhMGNiJywgJyNlNzhhYzMnLCAnI2E2ZDg1NCcsICcjZmZkOTJmJywgJyNlNWM0OTQnLCAnI2IzYjNiMyddLFxuICAgICAgICBBY2NlbnQ6IFsnIzdmYzk3ZicsICcjYmVhZWQ0JywgJyNmZGMwODYnLCAnI2ZmZmY5OScsICcjMzg2Y2IwJywgJyNmMDAyN2YnLCAnI2JmNWIxNycsICcjNjY2NjY2J10sXG4gICAgICAgIFNldDE6IFsnI2U0MWExYycsICcjMzc3ZWI4JywgJyM0ZGFmNGEnLCAnIzk4NGVhMycsICcjZmY3ZjAwJywgJyNmZmZmMzMnLCAnI2E2NTYyOCcsICcjZjc4MWJmJywgJyM5OTk5OTknXSxcbiAgICAgICAgU2V0MzogWycjOGRkM2M3JywgJyNmZmZmYjMnLCAnI2JlYmFkYScsICcjZmI4MDcyJywgJyM4MGIxZDMnLCAnI2ZkYjQ2MicsICcjYjNkZTY5JywgJyNmY2NkZTUnLCAnI2Q5ZDlkOScsICcjYmM4MGJkJywgJyNjY2ViYzUnLCAnI2ZmZWQ2ZiddLFxuICAgICAgICBEYXJrMjogWycjMWI5ZTc3JywgJyNkOTVmMDInLCAnIzc1NzBiMycsICcjZTcyOThhJywgJyM2NmE2MWUnLCAnI2U2YWIwMicsICcjYTY3NjFkJywgJyM2NjY2NjYnXSxcbiAgICAgICAgUGFpcmVkOiBbJyNhNmNlZTMnLCAnIzFmNzhiNCcsICcjYjJkZjhhJywgJyMzM2EwMmMnLCAnI2ZiOWE5OScsICcjZTMxYTFjJywgJyNmZGJmNmYnLCAnI2ZmN2YwMCcsICcjY2FiMmQ2JywgJyM2YTNkOWEnLCAnI2ZmZmY5OScsICcjYjE1OTI4J10sXG4gICAgICAgIFBhc3RlbDI6IFsnI2IzZTJjZCcsICcjZmRjZGFjJywgJyNjYmQ1ZTgnLCAnI2Y0Y2FlNCcsICcjZTZmNWM5JywgJyNmZmYyYWUnLCAnI2YxZTJjYycsICcjY2NjY2NjJ10sXG4gICAgICAgIFBhc3RlbDE6IFsnI2ZiYjRhZScsICcjYjNjZGUzJywgJyNjY2ViYzUnLCAnI2RlY2JlNCcsICcjZmVkOWE2JywgJyNmZmZmY2MnLCAnI2U1ZDhiZCcsICcjZmRkYWVjJywgJyNmMmYyZjInXSxcbiAgICB9O1xuXG4gICAgLy8gYWRkIGxvd2VyY2FzZSBhbGlhc2VzIGZvciBjYXNlLWluc2Vuc2l0aXZlIG1hdGNoZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IE9iamVjdC5rZXlzKGNvbG9yYnJld2VyKTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGtleSA9IGxpc3RbaV07XG5cbiAgICAgICAgY29sb3JicmV3ZXJba2V5LnRvTG93ZXJDYXNlKCldID0gY29sb3JicmV3ZXJba2V5XTtcbiAgICB9XG5cbiAgICB2YXIgY29sb3JicmV3ZXJfMSA9IGNvbG9yYnJld2VyO1xuXG4gICAgdmFyIGNocm9tYSA9IGNocm9tYV8xO1xuXG4gICAgLy8gZmVlbCBmcmVlIHRvIGNvbW1lbnQgb3V0IGFueXRoaW5nIHRvIHJvbGx1cFxuICAgIC8vIGEgc21hbGxlciBjaHJvbWEuanMgYnVpbHRcblxuICAgIC8vIGlvIC0tPiBjb252ZXJ0IGNvbG9yc1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBvcGVyYXRvcnMgLS0+IG1vZGlmeSBleGlzdGluZyBDb2xvcnNcblxuXG5cblxuXG5cblxuXG5cblxuICAgIC8vIGludGVycG9sYXRvcnNcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBnZW5lcmF0b3JzIC0tID4gY3JlYXRlIG5ldyBjb2xvcnNcbiAgICBjaHJvbWEuYXZlcmFnZSA9IGF2ZXJhZ2U7XG4gICAgY2hyb21hLmJlemllciA9IGJlemllcl8xO1xuICAgIGNocm9tYS5ibGVuZCA9IGJsZW5kXzE7XG4gICAgY2hyb21hLmN1YmVoZWxpeCA9IGN1YmVoZWxpeDtcbiAgICBjaHJvbWEubWl4ID0gY2hyb21hLmludGVycG9sYXRlID0gbWl4JDE7XG4gICAgY2hyb21hLnJhbmRvbSA9IHJhbmRvbV8xO1xuICAgIGNocm9tYS5zY2FsZSA9IHNjYWxlJDI7XG5cbiAgICAvLyBvdGhlciB1dGlsaXR5IG1ldGhvZHNcbiAgICBjaHJvbWEuYW5hbHl6ZSA9IGFuYWx5emVfMS5hbmFseXplO1xuICAgIGNocm9tYS5jb250cmFzdCA9IGNvbnRyYXN0O1xuICAgIGNocm9tYS5kZWx0YUUgPSBkZWx0YUU7XG4gICAgY2hyb21hLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgY2hyb21hLmxpbWl0cyA9IGFuYWx5emVfMS5saW1pdHM7XG4gICAgY2hyb21hLnZhbGlkID0gdmFsaWQ7XG5cbiAgICAvLyBzY2FsZVxuICAgIGNocm9tYS5zY2FsZXMgPSBzY2FsZXM7XG5cbiAgICAvLyBjb2xvcnNcbiAgICBjaHJvbWEuY29sb3JzID0gdzNjeDExXzE7XG4gICAgY2hyb21hLmJyZXdlciA9IGNvbG9yYnJld2VyXzE7XG5cbiAgICB2YXIgY2hyb21hX2pzID0gY2hyb21hO1xuXG4gICAgcmV0dXJuIGNocm9tYV9qcztcblxufSkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vYmFzZUNvbXBvbmVudHMuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgc2tlbGV0b24gZnJvbSBcIi4vc2tlbGV0b25cIjtcbmltcG9ydCBjb2xvckhhbmRsZXIgZnJvbSBcIi4vY29sb3JIYW5kbGVyLmpzXCI7XG5cbi8vIEluaXRpYWxpemUgQ29sb3JzXG5jb2xvckhhbmRsZXIoKTtcblxuLy8gQnVpbGQgV2Vic2l0ZSBTa2VsZXRvblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQuZGl2KHtpZDogJ2NvbnRlbnQnLCBjaGlsZHJlbjogc2tlbGV0b24gfSkpXG5cbi8vIEFkZCBOZXcgcHJvamVjdCBmdW5jdGlvbmFsaXR5XG5pbXBvcnQgcHJvamVjdEhhbmRsZXIgZnJvbSBcIi4vcHJvamVjdEhhbmRsZXJcIjtcblxuLy8gQWRkIGZ1bmN0aW9uYWxpdHkgdG8gbmV3UHJvamVjdEJ1dHRvblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5jbGlja2FibGUnKTtcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHByb2plY3RIYW5kbGVyLmFkZFRlbXBsYXRlKTtcblxuLy8gU3RhcnQgd2l0aCBhIHRlbXBsYXRlIG9uIHRoZSBwYWdlXG5wcm9qZWN0SGFuZGxlci5hZGRUZW1wbGF0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==