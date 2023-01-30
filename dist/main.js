/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/coolors-io/lib/gen.js":
/*!********************************************!*\
  !*** ./node_modules/coolors-io/lib/gen.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Righteous';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\n}\n\n@font-face {\n    font-family: 'ABZ';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    --color1: #ffffff;\n    --color2: #ffffff;\n    --color3: #ffffff;\n    --color4: #ffffff;\n    --color5: #ffffff;\n}\n\n/* Remove Defaults */\n\nbutton {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\nli {\n    list-style: none;\n}\n\nbody {\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--color1);\n}\n\n.banner {\n    font-size: 96px;\n    font-family: 'Righteous';\n    padding-left: 64px;\n    border-bottom: 4px solid black;\n    background-color: var(--color1);\n}\n\n.banner-text {\n    color: black;\n    transition: all 0.5s;\n    cursor: default;\n    text-shadow: -1px 1px var(--color2), -2px 2px var(--color3), -3px 3px var(--color4), -4px 4px var(--color5)\n}\n\n.banner-text:hover {\n    text-shadow: -2px 2px var(--color2), -4px 4px var(--color3), -6px 6px var(--color4), -8px 8px var(--color5);\n}\n\n#main-content {\n    display: flex;\n    flex: 1;\n}\n\n#sidebar {\n    width: 320px;\n    text-align: center;\n    border-right: 4px solid black;\n    height: 100%;\n    padding: 32px;\n    background-color: rgb(225, 235, 235);\n}\n\n#sidebar-title {\n    text-transform: capitalize;\n    font-size: 36px;\n    font-family: 'ABZ';\n    padding: 8px 32px;\n    border: 4px solid black;\n    font-weight: bolder;\n    background-color: var(--color1);\n    box-shadow: -3px 3px var(--color4), 3px -3px var(--color5)\n}\n\n#project-container {\n    padding: 32px 64px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n}\n\n.plus-button {\n    display: flex;\n    align-items: center;\n    font-family: 'ABZ';\n    color: white;\n    font-weight: bolder;\n}\n\n.plus-button.new-project {\n    background-color: var(--color2);\n    font-size: 32px;\n    border: 2px solid black;\n    align-self: flex-start;\n}\n\n.new-project .display-text {\n    padding: 0px 32px;\n    text-shadow: 2px 2px black;\n}\n\n.plus-button .clickable {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0px;\n    transition: all 0.05s;\n    cursor: pointer;\n}\n\n.new-project .clickable {\n    width: 56px;\n}\n\n.new-project .clickable:hover {\n    background-color: black;\n}\n\n.new-project img {\n    transition: all 0.05s;\n    padding: 8px;\n    filter: invert(1) drop-shadow(2px 2px black);\n    height: 56px;\n}\n\n#project-container {\n    flex: 1;\n}\n\n.project-item {\n    width: 80%;\n    font-family: 'ABZ';\n    font-size: 24px;\n    border: 4px solid black;\n    transition: all 0.3s;\n}\n\n.project-item:hover {\n    box-shadow: -5px 5px var(--color4), 5px -5px var(--color5);\n}\n\n.project-item.unsaved {\n    position: relative;\n    box-shadow: none;\n}\n\n.project-item .save, .project-item .discard {\n    position: absolute;\n    left: 100%;\n    height: 64px;\n    border: 4px solid black;\n    padding: 8px;\n    top: -4px;\n    background-color: lightgreen;\n    cursor: pointer;\n}\n\n.project-item .discard {\n    top: 56px;\n    background-color: lightcoral;\n}\n\n.project-item > .header {\n    border-bottom: 4px solid black;\n    display: flex;\n    padding: 8px;\n    justify-content: space-between;\n    align-items: center;\n    background-color: black;\n    transition: all 0.5s;\n}\n\n.project-item.unsaved > .header {\n    background-color: white;\n}\n\n.project-item .header-left {\n    display: flex;\n    gap: 32px;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-item .project-title {\n    padding: 4px 4px 4px 16px;\n    font-size: 32px;\n    font-weight: 900;\n    color: white;\n}\n\n.project-item.unsaved .project-title {\n    color: black;\n}\n\n.project-item .header-left input {\n    border: 2px solid black;\n    color: black\n}\n\n.project-item .header-left input:focus {\n    outline: 4px solid var(--color4)\n}\n\n.project-item .plus-button {\n    background-color: black;\n    border: 2px solid black;\n}\n\n.add-tags img {\n    height: 48px;\n    filter: invert(1);\n    padding: 8px;\n}\n\n.add-tags .clickable:hover {\n    background-color: var(--color4);\n}\n\n.add-tags .display-text {\n    padding: 0px 8px;\n}\n\n.project-item > .body {\n    padding: 16px;\n    background-color: rgb(223, 235, 223);\n    transition: background-color 0.3s;\n    overflow: hidden;\n}\n\n.project-item:nth-child(3n-1) > .body {\n    background-color: rgb(223, 232, 235);\n}\n\n.project-item:nth-child(3n) > .body {\n    background-color: rgb(235, 229, 223);\n}\n\n.project-item > .body.collapsed {\n    transition: all 0s;\n    padding: 0px 16px;\n    height: 0px;\n}\n\n.project-item.unsaved > .body {\n    background-color: white;\n    height: auto;\n}\n\n.task-list > .header {\n    border-bottom: 3px double black;\n    margin-bottom: 8px;\n}\n\n.project-item ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 8px;\n}\n\n/* New Task Button Styling */\n\n.new-task {\n    display: flex;\n    gap: 4px;\n}\n\n.new-task input {\n    border: 0px;\n    border-bottom: 1px solid black;\n    font-size: 20px;\n    background-color: inherit;\n}\n\n.new-task input::placeholder {\n    font-style: italic;\n}\n\n.new-task input:focus {\n    outline: 0px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Righteous';\n    src: url('Righteous-Regular.ttf')\n}\n\n@font-face {\n    font-family: 'ABZ';\n    src: url('ABeeZee-Regular.ttf');\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    --color1: #ffffff;\n    --color2: #ffffff;\n    --color3: #ffffff;\n    --color4: #ffffff;\n    --color5: #ffffff;\n}\n\n/* Remove Defaults */\n\nbutton {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\nli {\n    list-style: none;\n}\n\nbody {\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--color1);\n}\n\n.banner {\n    font-size: 96px;\n    font-family: 'Righteous';\n    padding-left: 64px;\n    border-bottom: 4px solid black;\n    background-color: var(--color1);\n}\n\n.banner-text {\n    color: black;\n    transition: all 0.5s;\n    cursor: default;\n    text-shadow: -1px 1px var(--color2), -2px 2px var(--color3), -3px 3px var(--color4), -4px 4px var(--color5)\n}\n\n.banner-text:hover {\n    text-shadow: -2px 2px var(--color2), -4px 4px var(--color3), -6px 6px var(--color4), -8px 8px var(--color5);\n}\n\n#main-content {\n    display: flex;\n    flex: 1;\n}\n\n#sidebar {\n    width: 320px;\n    text-align: center;\n    border-right: 4px solid black;\n    height: 100%;\n    padding: 32px;\n    background-color: rgb(225, 235, 235);\n}\n\n#sidebar-title {\n    text-transform: capitalize;\n    font-size: 36px;\n    font-family: 'ABZ';\n    padding: 8px 32px;\n    border: 4px solid black;\n    font-weight: bolder;\n    background-color: var(--color1);\n    box-shadow: -3px 3px var(--color4), 3px -3px var(--color5)\n}\n\n#project-container {\n    padding: 32px 64px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n}\n\n.plus-button {\n    display: flex;\n    align-items: center;\n    font-family: 'ABZ';\n    color: white;\n    font-weight: bolder;\n}\n\n.plus-button.new-project {\n    background-color: var(--color2);\n    font-size: 32px;\n    border: 2px solid black;\n    align-self: flex-start;\n}\n\n.new-project .display-text {\n    padding: 0px 32px;\n    text-shadow: 2px 2px black;\n}\n\n.plus-button .clickable {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0px;\n    transition: all 0.05s;\n    cursor: pointer;\n}\n\n.new-project .clickable {\n    width: 56px;\n}\n\n.new-project .clickable:hover {\n    background-color: black;\n}\n\n.new-project img {\n    transition: all 0.05s;\n    padding: 8px;\n    filter: invert(1) drop-shadow(2px 2px black);\n    height: 56px;\n}\n\n#project-container {\n    flex: 1;\n}\n\n.project-item {\n    width: 80%;\n    font-family: 'ABZ';\n    font-size: 24px;\n    border: 4px solid black;\n    transition: all 0.3s;\n}\n\n.project-item:hover {\n    box-shadow: -5px 5px var(--color4), 5px -5px var(--color5);\n}\n\n.project-item.unsaved {\n    position: relative;\n    box-shadow: none;\n}\n\n.project-item .save, .project-item .discard {\n    position: absolute;\n    left: 100%;\n    height: 64px;\n    border: 4px solid black;\n    padding: 8px;\n    top: -4px;\n    background-color: lightgreen;\n    cursor: pointer;\n}\n\n.project-item .discard {\n    top: 56px;\n    background-color: lightcoral;\n}\n\n.project-item > .header {\n    border-bottom: 4px solid black;\n    display: flex;\n    padding: 8px;\n    justify-content: space-between;\n    align-items: center;\n    background-color: black;\n    transition: all 0.5s;\n}\n\n.project-item.unsaved > .header {\n    background-color: white;\n}\n\n.project-item .header-left {\n    display: flex;\n    gap: 32px;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-item .project-title {\n    padding: 4px 4px 4px 16px;\n    font-size: 32px;\n    font-weight: 900;\n    color: white;\n}\n\n.project-item.unsaved .project-title {\n    color: black;\n}\n\n.project-item .header-left input {\n    border: 2px solid black;\n    color: black\n}\n\n.project-item .header-left input:focus {\n    outline: 4px solid var(--color4)\n}\n\n.project-item .plus-button {\n    background-color: black;\n    border: 2px solid black;\n}\n\n.add-tags img {\n    height: 48px;\n    filter: invert(1);\n    padding: 8px;\n}\n\n.add-tags .clickable:hover {\n    background-color: var(--color4);\n}\n\n.add-tags .display-text {\n    padding: 0px 8px;\n}\n\n.project-item > .body {\n    padding: 16px;\n    background-color: rgb(223, 235, 223);\n    transition: background-color 0.3s;\n    overflow: hidden;\n}\n\n.project-item:nth-child(3n-1) > .body {\n    background-color: rgb(223, 232, 235);\n}\n\n.project-item:nth-child(3n) > .body {\n    background-color: rgb(235, 229, 223);\n}\n\n.project-item > .body.collapsed {\n    transition: all 0s;\n    padding: 0px 16px;\n    height: 0px;\n}\n\n.project-item.unsaved > .body {\n    background-color: white;\n    height: auto;\n}\n\n.task-list > .header {\n    border-bottom: 3px double black;\n    margin-bottom: 8px;\n}\n\n.project-item ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 8px;\n}\n\n/* New Task Button Styling */\n\n.new-task {\n    display: flex;\n    gap: 4px;\n}\n\n.new-task input {\n    border: 0px;\n    border-bottom: 1px solid black;\n    font-size: 20px;\n    background-color: inherit;\n}\n\n.new-task input::placeholder {\n    font-style: italic;\n}\n\n.new-task input:focus {\n    outline: 0px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

module.exports = __webpack_require__.p + "567c41f153027117352b.ttf";

/***/ }),

/***/ "./src/Righteous-Regular.ttf":
/*!***********************************!*\
  !*** ./src/Righteous-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd0110471f2228c1808a.ttf";

/***/ }),

/***/ "./src/check.png":
/*!***********************!*\
  !*** ./src/check.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2481df3ded6043213454.png";

/***/ }),

/***/ "./src/close.png":
/*!***********************!*\
  !*** ./src/close.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9591849fb98a83df16de.png";

/***/ }),

/***/ "./src/plus-symbol-button.png":
/*!************************************!*\
  !*** ./src/plus-symbol-button.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f136c77917ffb51d58c.png";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponents.js */ "./src/baseComponents.js");
/* harmony import */ var coolors_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! coolors-io */ "./node_modules/coolors-io/lib/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skeleton */ "./src/skeleton.js");
/* harmony import */ var _projectHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectHandler */ "./src/projectHandler.js");





// const palette = 'https://coolors.co/b8d8d8-7a9e9f-4f6367-eef5db-fe5f55'
const palette = 'https://coolors.co/f9fafb-6593c2-6eb4a8-f0974e-e8765a'

let colors = (0,coolors_io__WEBPACK_IMPORTED_MODULE_1__.parse)(palette);
for (let i=0;i<colors.length;i++) {
    document.body.style.setProperty(`--color${i+1}`, colors[i]);
}

// Build Website Skeleton
document.body.appendChild(_baseComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({
    id: 'content',
    children: _skeleton__WEBPACK_IMPORTED_MODULE_3__["default"]
}))

// Add New project functionality
;

const newProjectButton = document.querySelector('.new-project').querySelector('.clickable');

newProjectButton.addEventListener('click',_projectHandler__WEBPACK_IMPORTED_MODULE_4__["default"].addTemplate);

// start with default template
_projectHandler__WEBPACK_IMPORTED_MODULE_4__["default"].addTemplate();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsc0NBQXNDLCtCQUErQiwwQ0FBMEMsZ0JBQWdCLHlCQUF5QixzQ0FB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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTRDO0FBQ1Y7QUFDZDtBQUNjOztBQUVsQztBQUNBOztBQUVBLGFBQWEsaURBQUs7QUFDbEIsYUFBYSxnQkFBZ0I7QUFDN0IsOENBQThDLElBQUk7QUFDbEQ7O0FBRUE7QUFDQSwwQkFBMEIsOERBQWE7QUFDdkM7QUFDQSxjQUFjLGlEQUFRO0FBQ3RCLENBQUM7O0FBRUQ7QUFDQSxDQUE4Qzs7QUFFOUM7O0FBRUEsMENBQTBDLG1FQUEwQjs7QUFFcEU7QUFDQSxtRUFBMEIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nvb2xvcnMtaW8vbGliL2dlbi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jb29sb3JzLWlvL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jb29sb3JzLWlvL2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYmFzZUNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc2tlbGV0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVkQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzVmFsaWQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgLy8gVE9ETzog8J+UpyAgY2hlY2sgdGhhdCBpdCBpcyBhIHZhbGlkIGNvb2xvcnMgc3RyaW5nIGUuZyA2IG9yIDMgY2hhcnNcbiAgICAvLyBUT0RPOiDwn5SnIFZhbGlkYXRlIHRoYXQgZWFjaCBjaGFyIGlzIGEgdmFsaWQgaGV4IGNoYXIgKDAtNiwgYS1mKVxuICAgIGlmIChzdHIubGVuZ3RoID09PSA2KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xudmFyIGdlbiA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAvLyBUT0RPOiDwn5SnIEVuc3VyZSBhcnIgaXNuJ3QgbG9uZ2VyIHRoYW4gMTBcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyLCBpKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiDwn5SnIGhhbmRsZSBzdHJpbmdzIHRoYXQgc3RhcnQgd2l0aCAjXG4gICAgICAgICAgICAvLyBpZiBjdXJyIGNvbnRhaW5zICMgaXQgd2lsbCBiZSByZXR1cm5lZCB3aXRob3V0ICMsIG90aGVyd2lzZSBjdXJyIGlzIHNpbXBseSByZXR1cm5lZFxuICAgICAgICAgICAgdmFyIHN0ciA9IGN1cnIuc3BsaXQoJyMnKS5wb3AoKTtcbiAgICAgICAgICAgIGlmICghaXNWYWxpZChzdHIpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIgKyBcIiBpcyBub3QgYSB2YWxpZCBoZXggdmFsdWVcIik7XG4gICAgICAgICAgICBpZiAoaSA8IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBhY2MgKyBzdHIgKyBcIi1cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgYWNjICsgc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAnaHR0cHM6Ly9jb29sb3JzLmNvLycpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2VuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2VuXzEgPSByZXF1aXJlKFwiLi9nZW5cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdlbl8xLmRlZmF1bHQ7IH0gfSk7XG52YXIgcGFyc2VfMSA9IHJlcXVpcmUoXCIuL3BhcnNlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGFyc2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBhcnNlXzEuZGVmYXVsdDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKHVybCwgaGV4KSB7XG4gICAgaWYgKGhleCA9PT0gdm9pZCAwKSB7IGhleCA9IHRydWU7IH1cbiAgICAvLyBUT0RPOiDwn5SnICBDaGVjayB0aGF0IGl0IGlzIGFjdHVhbGx5IGEgY29vbG9ycyB1cmxcbiAgICB2YXIgdXJsQXJyID0gdXJsLnNwbGl0KCcvJyk7XG4gICAgdmFyIGhleEFyciA9IHVybEFyclt1cmxBcnIubGVuZ3RoIC0gMV0uc3BsaXQoJy0nKTtcbiAgICBpZiAoaGV4KSB7XG4gICAgICAgIHJldHVybiBoZXhBcnIubWFwKGZ1bmN0aW9uIChudW0pIHsgcmV0dXJuIFwiI1wiICsgbnVtOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBoZXhBcnI7XG4gICAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIlJpZ2h0ZW91cy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIkFCZWVaZWUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tY29sb3IxOiAjZmZmZmZmO1xcbiAgICAtLWNvbG9yMjogI2ZmZmZmZjtcXG4gICAgLS1jb2xvcjM6ICNmZmZmZmY7XFxuICAgIC0tY29sb3I0OiAjZmZmZmZmO1xcbiAgICAtLWNvbG9yNTogI2ZmZmZmZjtcXG59XFxuXFxuLyogUmVtb3ZlIERlZmF1bHRzICovXFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbn1cXG5cXG4uYmFubmVyIHtcXG4gICAgZm9udC1zaXplOiA5NnB4O1xcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cyc7XFxuICAgIHBhZGRpbmctbGVmdDogNjRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbn1cXG5cXG4uYmFubmVyLXRleHQge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDFweCB2YXIoLS1jb2xvcjIpLCAtMnB4IDJweCB2YXIoLS1jb2xvcjMpLCAtM3B4IDNweCB2YXIoLS1jb2xvcjQpLCAtNHB4IDRweCB2YXIoLS1jb2xvcjUpXFxufVxcblxcbi5iYW5uZXItdGV4dDpob3ZlciB7XFxuICAgIHRleHQtc2hhZG93OiAtMnB4IDJweCB2YXIoLS1jb2xvcjIpLCAtNHB4IDRweCB2YXIoLS1jb2xvcjMpLCAtNnB4IDZweCB2YXIoLS1jb2xvcjQpLCAtOHB4IDhweCB2YXIoLS1jb2xvcjUpO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjM1LCAyMzUpO1xcbn1cXG5cXG4jc2lkZWJhci10aXRsZSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgcGFkZGluZzogOHB4IDMycHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDNweCB2YXIoLS1jb2xvcjQpLCAzcHggLTNweCB2YXIoLS1jb2xvcjUpXFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDMycHggNjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4ucGx1cy1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnBsdXMtYnV0dG9uLm5ldy1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IC5kaXNwbGF5LXRleHQge1xcbiAgICBwYWRkaW5nOiAwcHggMzJweDtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxufVxcblxcbi5wbHVzLWJ1dHRvbiAuY2xpY2thYmxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctcHJvamVjdCAuY2xpY2thYmxlIHtcXG4gICAgd2lkdGg6IDU2cHg7XFxufVxcblxcbi5uZXctcHJvamVjdCAuY2xpY2thYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5uZXctcHJvamVjdCBpbWcge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4wNXM7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSkgZHJvcC1zaGFkb3coMnB4IDJweCBibGFjayk7XFxuICAgIGhlaWdodDogNTZweDtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCB2YXIoLS1jb2xvcjQpLCA1cHggLTVweCB2YXIoLS1jb2xvcjUpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLnNhdmUsIC5wcm9qZWN0LWl0ZW0gLmRpc2NhcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgdG9wOiAtNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmRpc2NhcmQge1xcbiAgICB0b3A6IDU2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gPiAuaGVhZGVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQgPiAuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmhlYWRlci1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAucHJvamVjdC10aXRsZSB7XFxuICAgIHBhZGRpbmc6IDRweCA0cHggNHB4IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQgLnByb2plY3QtdGl0bGUge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmhlYWRlci1sZWZ0IGlucHV0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFja1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5oZWFkZXItbGVmdCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDRweCBzb2xpZCB2YXIoLS1jb2xvcjQpXFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLnBsdXMtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYWRkLXRhZ3MgaW1nIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uYWRkLXRhZ3MgLmNsaWNrYWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yNCk7XFxufVxcblxcbi5hZGQtdGFncyAuZGlzcGxheS10ZXh0IHtcXG4gICAgcGFkZGluZzogMHB4IDhweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IC5ib2R5IHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjM1LCAyMjMpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06bnRoLWNoaWxkKDNuLTEpID4gLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMzIsIDIzNSk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06bnRoLWNoaWxkKDNuKSA+IC5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjI5LCAyMjMpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtID4gLmJvZHkuY29sbGFwc2VkIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDBzO1xcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcXG4gICAgaGVpZ2h0OiAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0udW5zYXZlZCA+IC5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnRhc2stbGlzdCA+IC5oZWFkZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggZG91YmxlIGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4vKiBOZXcgVGFzayBCdXR0b24gU3R5bGluZyAqL1xcblxcbi5uZXctdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubmV3LXRhc2sgaW5wdXQge1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2Vz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O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7O0FBRUEsNEJBQTRCOztBQUU1QjtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cyc7XFxuICAgIHNyYzogdXJsKCdSaWdodGVvdXMtUmVndWxhci50dGYnKVxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBQlonO1xcbiAgICBzcmM6IHVybCgnQUJlZVplZS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1jb2xvcjE6ICNmZmZmZmY7XFxuICAgIC0tY29sb3IyOiAjZmZmZmZmO1xcbiAgICAtLWNvbG9yMzogI2ZmZmZmZjtcXG4gICAgLS1jb2xvcjQ6ICNmZmZmZmY7XFxuICAgIC0tY29sb3I1OiAjZmZmZmZmO1xcbn1cXG5cXG4vKiBSZW1vdmUgRGVmYXVsdHMgKi9cXG5cXG5idXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxufVxcblxcbi5iYW5uZXIge1xcbiAgICBmb250LXNpemU6IDk2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJztcXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4O1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxufVxcblxcbi5iYW5uZXItdGV4dCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMXB4IHZhcigtLWNvbG9yMiksIC0ycHggMnB4IHZhcigtLWNvbG9yMyksIC0zcHggM3B4IHZhcigtLWNvbG9yNCksIC00cHggNHB4IHZhcigtLWNvbG9yNSlcXG59XFxuXFxuLmJhbm5lci10ZXh0OmhvdmVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IHZhcigtLWNvbG9yMiksIC00cHggNHB4IHZhcigtLWNvbG9yMyksIC02cHggNnB4IHZhcigtLWNvbG9yNCksIC04cHggOHB4IHZhcigtLWNvbG9yNSk7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMzUsIDIzNSk7XFxufVxcblxcbiNzaWRlYmFyLXRpdGxlIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC1mYW1pbHk6ICdBQlonO1xcbiAgICBwYWRkaW5nOiA4cHggMzJweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggM3B4IHZhcigtLWNvbG9yNCksIDNweCAtM3B4IHZhcigtLWNvbG9yNSlcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMzJweCA2NHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbi5wbHVzLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ucGx1cy1idXR0b24ubmV3LXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubmV3LXByb2plY3QgLmRpc3BsYXktdGV4dCB7XFxuICAgIHBhZGRpbmc6IDBweCAzMnB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjaztcXG59XFxuXFxuLnBsdXMtYnV0dG9uIC5jbGlja2FibGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4wNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IC5jbGlja2FibGUge1xcbiAgICB3aWR0aDogNTZweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IC5jbGlja2FibGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLm5ldy1wcm9qZWN0IGltZyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjA1cztcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKSBkcm9wLXNoYWRvdygycHggMnB4IGJsYWNrKTtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdBQlonO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IHZhcigtLWNvbG9yNCksIDVweCAtNXB4IHZhcigtLWNvbG9yNSk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0udW5zYXZlZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuc2F2ZSwgLnByb2plY3QtaXRlbSAuZGlzY2FyZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB0b3A6IC00cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuZGlzY2FyZCB7XFxuICAgIHRvcDogNTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IC5oZWFkZXIge1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0udW5zYXZlZCA+IC5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuaGVhZGVyLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDMycHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgcGFkZGluZzogNHB4IDRweCA0cHggMTZweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0udW5zYXZlZCAucHJvamVjdC10aXRsZSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuaGVhZGVyLWxlZnQgaW5wdXQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrXFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmhlYWRlci1sZWZ0IGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogNHB4IHNvbGlkIHZhcigtLWNvbG9yNClcXG59XFxuXFxuLnByb2plY3QtaXRlbSAucGx1cy1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5hZGQtdGFncyBpbWcge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5hZGQtdGFncyAuY2xpY2thYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I0KTtcXG59XFxuXFxuLmFkZC10YWdzIC5kaXNwbGF5LXRleHQge1xcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtID4gLmJvZHkge1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMzUsIDIyMyk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpudGgtY2hpbGQoM24tMSkgPiAuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIzMiwgMjM1KTtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpudGgtY2hpbGQoM24pID4gLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMjksIDIyMyk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gPiAuYm9keS5jb2xsYXBzZWQge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xcbiAgICBoZWlnaHQ6IDBweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkID4gLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udGFzay1saXN0ID4gLmhlYWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBkb3VibGUgYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi8qIE5ldyBUYXNrIEJ1dHRvbiBTdHlsaW5nICovXFxuXFxuLm5ldy10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dCB7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLm5ldy10YXNrIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm5ldy10YXNrIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRpdjogbyA9PiBuZXdFbGVtZW50KCdkaXYnLG8pLFxuICAgIHNwYW46IG8gPT4gbmV3RWxlbWVudCgnc3BhbicsbyksXG4gICAgYnV0dG9uOiBvID0+IG5ld0VsZW1lbnQoJ2J1dHRvbicsbyksXG4gICAgaW1nOiBvID0+IG5ld0ltZyhvKSxcbiAgICB1bDogbyA9PiBuZXdFbGVtZW50KCd1bCcsbyksXG4gICAgbGk6IG8gPT4gbmV3RWxlbWVudCgnbGknLG8pXG59XG5cbi8vIENlbnRyYWwgZnVuY3Rpb24gdGhhdCBidWlsZHMgSFRNTCBlbGVtZW50cyBmcm9tIHByb3ZpZGVkIG9iamVjdHNcbmZ1bmN0aW9uIG5ld0VsZW1lbnQodHlwZSxvYmopIHtcbiAgICBsZXQgcmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZiAoJ3RleHQnIGluIG9iaikgcmV0LnRleHRDb250ZW50ID0gb2JqLnRleHRcbiAgICBpZiAoJ2lkJyBpbiBvYmopIHJldC5pZCA9IG9iai5pZFxuICAgIGlmICgnY2xhc3MnIGluIG9iaikge1xuICAgICAgICBmb3IgKGxldCBjIGluIG9iai5jbGFzcykge1xuICAgICAgICAgICAgcmV0LmNsYXNzTGlzdC5hZGQob2JqLmNsYXNzW2NdKVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICgnY2hpbGRyZW4nIGluIG9iaikge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IG9iai5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmV0LmFwcGVuZENoaWxkKG9iai5jaGlsZHJlbltpXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIG5ld0ltZyhvYmopIHtcbiAgICBsZXQgcmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWYgKCdzcmMnIGluIG9iaikgcmV0LnNldEF0dHJpYnV0ZSgnc3JjJyxvYmouc3JjKVxuICAgIGlmICgnYWx0JyBpbiBvYmopIHJldC5zZXRBdHRyaWJ1dGUoJ2FsdCcsb2JqLmFsdClcbiAgICBpZiAoJ2NsYXNzJyBpbiBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgYyBpbiBvYmouY2xhc3MpIHtcbiAgICAgICAgICAgIHJldC5jbGFzc0xpc3QuYWRkKG9iai5jbGFzc1tjXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG59IiwiaW1wb3J0IHsgcHJvamVjdFRlbXBsYXRlIH0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50c1wiO1xuaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9iYXNlQ29tcG9uZW50cy5qc1wiO1xuXG5sZXQgaW5kZXggPSAwO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYWRkVGVtcGxhdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29udGFpbmVyJylcbiAgICAgICAgaWYgKHByb2plY3RBcmVhLnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkJykpIHtcbiAgICAgICAgICAgIHByb2plY3RBcmVhLnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkJykuc3R5bGUub3V0bGluZSA9IFwiNHB4IHNvbGlkIHZhcigtLWNvbG9yMilcIlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7cHJvamVjdEFyZWEucXVlcnlTZWxlY3RvcignLnVuc2F2ZWQnKS5zdHlsZS5vdXRsaW5lID0gXCJcIn0sMzAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRlbXBsYXRlIGFuZCBpbnNlcnRcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gcHJvamVjdFRlbXBsYXRlKCk7XG4gICAgICAgIHRlbXBsYXRlLmRhdGFzZXQuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wbGF0ZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgcHJvamVjdEFyZWEuaW5zZXJ0QmVmb3JlKHRlbXBsYXRlLCBwcm9qZWN0QXJlYS5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5zYXZlZCAubmV3LXRhc2sgYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZEl0ZW0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5zYXZlZCAubmV3LXRhc2sgaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJyxhZGRJZkVudGVyKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuc2F2ZWQgLmRpc2NhcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVtb3ZlVGVtcGxhdGUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5zYXZlZCAuc2F2ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzYXZlVGVtcGxhdGUpO1xuXG4gICAgfSwgICAgXG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW0oZSkge1xuICAgIGxldCB0ID0gZS50YXJnZXQ7XG4gICAgY29uc29sZS5sb2codCk7XG4gICAgbGV0IGxpc3QgPSB0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIGxldCBpbnB1dCA9IHQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykgbGlzdC5hcHBlbmRDaGlsZChjb21wb25lbnQubGkoe3RleHQ6IGlucHV0LnZhbHVlfSkpXG4gICAgaW5wdXQudmFsdWUgPSAnJ1xufVxuXG5mdW5jdGlvbiBhZGRJZkVudGVyKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgYWRkSXRlbShlKVxufVxuXG5mdW5jdGlvbiBzYXZlVGVtcGxhdGUoZSkge1xuICAgIC8vIENoZWNrIHRpdGxlIGFuZCByZW1vdmVcbiAgICBsZXQgaXRlbSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IGhsID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWxlZnQnKTtcbiAgICBsZXQgaW5wdXQgPSBobC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpXG5cbiAgICAvLyBkbyBub3RoaW5nIGlmIHRpdGxlIGVtcHR5XG4gICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICBpbnB1dC5zdHlsZS5vdXRsaW5lID0gJzRweCBzb2xpZCByZWQnXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge2lucHV0LnN0eWxlLm91dGxpbmUgPSAnJ30sNTAwKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2coJ3NhdmluZyBwcm9qZWN0IGl0ZW0nKTtcblxuICAgIC8vIFJlbW92ZSBTYXZlL0Rpc2NhcmQgYnV0dG9uc1xuICAgIGl0ZW0ucmVtb3ZlQ2hpbGQoZS50YXJnZXQpXG4gICAgaXRlbS5yZW1vdmVDaGlsZChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kaXNjYXJkJykpXG5cbiAgICAvLyBSZXBsYWNlIGlucHV0IHdpdGggYWN0dWFsIHByb2plY3QgdGl0bGVcbiAgICBobC5pbnNlcnRCZWZvcmUoY29tcG9uZW50LmRpdih7Y2xhc3M6IFsncHJvamVjdC10aXRsZSddLCB0ZXh0OiBpbnB1dC52YWx1ZX0pLGhsLmZpcnN0Q2hpbGQpXG4gICAgaGwucmVtb3ZlQ2hpbGQoaW5wdXQpXG5cbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Vuc2F2ZWQnKVxuXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRlbXBsYXRlKGUpIHtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xufVxuXG5cbiIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vYmFzZUNvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgcGx1c0J1dHRvbiB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIlxuXG5jb25zdCBiYW5uZXIgPSBjb21wb25lbnQuZGl2KHtcbiAgICBjbGFzczogWydiYW5uZXInXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICBjb21wb25lbnQuc3Bhbih7XG4gICAgICAgICAgICBjbGFzczogWydiYW5uZXItdGV4dCddLFxuICAgICAgICAgICAgdGV4dDogJ1RvLURvIExpc3QnXG4gICAgICAgIH0pXG4gICAgXVxufSlcblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IHBsdXNCdXR0b24oJ25ldy1wcm9qZWN0JywnYWRkIG5ldyBwcm9qZWN0JylcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoe1xuICAgIGlkOiBbJ3Byb2plY3QtY29udGFpbmVyJ10sXG4gICAgY2hpbGRyZW46IFsgbmV3UHJvamVjdEJ1dHRvbiBdXG59KVxuXG5jb25zdCBzaWRlQmFyID0gY29tcG9uZW50LmRpdih7XG4gICAgaWQ6ICdzaWRlYmFyJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICBjb21wb25lbnQuc3Bhbih7XG4gICAgICAgICAgICBpZDogJ3NpZGViYXItdGl0bGUnLFxuICAgICAgICAgICAgdGV4dDogJ3NpZGViYXInXG4gICAgICAgIH0pXG4gICAgXVxufSlcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBjb21wb25lbnQuZGl2KHtcbiAgICBpZDogJ21haW4tY29udGVudCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgc2lkZUJhcixcbiAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgIF1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFtiYW5uZXIsIG1haW5Db250ZW50XSIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vYmFzZUNvbXBvbmVudHMuanNcIlxuaW1wb3J0IHBsdXNJbWFnZSBmcm9tIFwiLi9wbHVzLXN5bWJvbC1idXR0b24ucG5nXCJcbmltcG9ydCBjaGVjayBmcm9tICcuL2NoZWNrLnBuZydcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Nsb3NlLnBuZydcblxuZnVuY3Rpb24gcGx1c0J1dHRvbkJhc2UoKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5idXR0b24oe1xuICAgICAgICBjbGFzczogWydjbGlja2FibGUnXSxcbiAgICAgICAgY2hpbGRyZW46IFsgY29tcG9uZW50LmltZyh7c3JjOiBwbHVzSW1hZ2V9KSBdXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsdXNCdXR0b24gKGFDbGFzcyx0ZXh0KSB7IHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICBjbGFzczogW2FDbGFzcywgJ3BsdXMtYnV0dG9uJ10sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgcGx1c0J1dHRvbkJhc2UoKSxcbiAgICAgICAgY29tcG9uZW50LnNwYW4oe1xuICAgICAgICAgICAgY2xhc3M6IFsnZGlzcGxheS10ZXh0J10sXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgXVxufSl9XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VGVtcGxhdGUgKCkge1xuICAgIHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgY2xhc3M6IFsncHJvamVjdC1pdGVtJywndW5zYXZlZCddLFxuICAgICAgICBjaGlsZHJlbjogW3Byb2plY3RJdGVtSGVhZGVyKCksIHByb2plY3RJdGVtQm9keSgpLCBwcm9qZWN0U2F2ZSgpLCBwcm9qZWN0RGlzY2FyZCgpXVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RTYXZlKCkge1xuICAgIHJldHVybiBjb21wb25lbnQuaW1nKHtcbiAgICAgICAgc3JjOiBjaGVjayxcbiAgICAgICAgY2xhc3M6IFsnc2F2ZSddXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcHJvamVjdERpc2NhcmQoKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5pbWcoe1xuICAgICAgICBzcmM6IGNsb3NlLFxuICAgICAgICBjbGFzczogWydkaXNjYXJkJ11cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0SXRlbUhlYWRlcigpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmRpdih7XG4gICAgICAgIGNsYXNzOiBbJ2hlYWRlciddLFxuICAgICAgICBjaGlsZHJlbjogWyBwcm9qZWN0SGVhZGVyTGVmdCgpLCBwcm9qZWN0SGVhZGVyUmlnaHQoKV1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0SGVhZGVyTGVmdCgpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmRpdih7XG4gICAgICAgIGNsYXNzOiBbJ2hlYWRlci1sZWZ0J10sXG4gICAgICAgIGNoaWxkcmVuOiBbIHByb2plY3RUaXRsZSgpLCBhZGRUYWdzQnV0dG9uKCksIF1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0VGl0bGUoKSB7XG4gICAgbGV0IHJldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByZXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgcmV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdQcm9qZWN0IE5hbWUnKVxuICAgIHJldC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJylcbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhZGRUYWdzQnV0dG9uKCkge1xuICAgIHJldHVybiBwbHVzQnV0dG9uKCdhZGQtdGFncycsJ2FkZCB0YWdzJylcbn1cblxuZnVuY3Rpb24gcHJvamVjdEhlYWRlclJpZ2h0KCkge1xuICAgIHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgY2xhc3M6IFsnaGVhZGVyLXJpZ2h0J10sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgICAgICAgICBjbGFzczogWydkdWUtZGF0ZSddLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdEdWUgRGF0ZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0SXRlbUJvZHkoKSB7IHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgY2xhc3M6IFsnYm9keSddLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgY29tcG9uZW50LmRpdih7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFsndGFzay1saXN0J10sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmRpdih7Y2xhc3M6IFsnaGVhZGVyJ10sIHRleHQ6ICdUYXNrIExpc3QnfSksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC51bCh7Y2xhc3M6IFsnbGlzdCddfSksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kaXYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFsnbmV3LXRhc2snXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmJ1dHRvbih7dGV4dDogJysnfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ2FkZCBhIHRhc2suLi4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY29udmVydFRvU2F2ZWQocHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKCdjb252ZXJ0aW5nIHRvIHNhdmVkJyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vYmFzZUNvbXBvbmVudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnY29vbG9ycy1pbydcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgc2tlbGV0b24gZnJvbSBcIi4vc2tlbGV0b25cIjtcblxuLy8gY29uc3QgcGFsZXR0ZSA9ICdodHRwczovL2Nvb2xvcnMuY28vYjhkOGQ4LTdhOWU5Zi00ZjYzNjctZWVmNWRiLWZlNWY1NSdcbmNvbnN0IHBhbGV0dGUgPSAnaHR0cHM6Ly9jb29sb3JzLmNvL2Y5ZmFmYi02NTkzYzItNmViNGE4LWYwOTc0ZS1lODc2NWEnXG5cbmxldCBjb2xvcnMgPSBwYXJzZShwYWxldHRlKTtcbmZvciAobGV0IGk9MDtpPGNvbG9ycy5sZW5ndGg7aSsrKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShgLS1jb2xvciR7aSsxfWAsIGNvbG9yc1tpXSk7XG59XG5cbi8vIEJ1aWxkIFdlYnNpdGUgU2tlbGV0b25cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50LmRpdih7XG4gICAgaWQ6ICdjb250ZW50JyxcbiAgICBjaGlsZHJlbjogc2tlbGV0b25cbn0pKVxuXG4vLyBBZGQgTmV3IHByb2plY3QgZnVuY3Rpb25hbGl0eVxuaW1wb3J0IHByb2plY3RIYW5kbGVyIGZyb20gXCIuL3Byb2plY3RIYW5kbGVyXCI7XG5cbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKS5xdWVyeVNlbGVjdG9yKCcuY2xpY2thYmxlJyk7XG5cbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHByb2plY3RIYW5kbGVyLmFkZFRlbXBsYXRlKTtcblxuLy8gc3RhcnQgd2l0aCBkZWZhdWx0IHRlbXBsYXRlXG5wcm9qZWN0SGFuZGxlci5hZGRUZW1wbGF0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==