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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Righteous';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\n}\n\n@font-face {\n    font-family: 'ABZ';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    --color1: #ffffff;\n    --color2: #ffffff;\n    --color3: #ffffff;\n    --color4: #ffffff;\n    --color5: #ffffff;\n}\n\n/* Remove Defaults */\n\nbutton {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\nli {\n    list-style: none;\n}\n\nbody {\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--color1);\n}\n\n.banner {\n    font-size: 96px;\n    font-family: 'Righteous';\n    padding-left: 64px;\n    border-bottom: 4px solid black;\n    background-color: var(--color1);\n}\n\n.banner-text {\n    color: black;\n    transition: all 0.5s;\n    cursor: default;\n    text-shadow: -1px 1px var(--color2), -2px 2px var(--color3), -3px 3px var(--color4), -4px 4px var(--color5)\n}\n\n.banner-text:hover {\n    text-shadow: -2px 2px var(--color2), -4px 4px var(--color3), -6px 6px var(--color4), -8px 8px var(--color5);\n}\n\n#main-content {\n    display: flex;\n    flex: 1;\n}\n\n#sidebar {\n    width: 320px;\n    text-align: center;\n    border-right: 4px solid black;\n    height: 100%;\n    padding: 32px;\n    background-color: rgb(225, 235, 235);\n}\n\n#sidebar-title {\n    text-transform: capitalize;\n    font-size: 36px;\n    font-family: 'ABZ';\n    padding: 8px 32px;\n    border: 4px solid black;\n    font-weight: bolder;\n    background-color: var(--color1);\n    box-shadow: -3px 3px var(--color4), 3px -3px var(--color5)\n}\n\n#project-container {\n    padding: 32px 64px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n}\n\n.plus-button {\n    display: flex;\n    align-items: center;\n    font-family: 'ABZ';\n    color: white;\n    font-weight: bolder;\n}\n\n.plus-button.new-project {\n    background-color: var(--color2);\n    font-size: 32px;\n    border: 2px solid black;\n    align-self: flex-start;\n}\n\n.new-project .display-text {\n    padding: 0px 32px;\n    text-shadow: 2px 2px black;\n}\n\n.plus-button .clickable {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0px;\n    transition: all 0.05s;\n    cursor: pointer;\n}\n\n.new-project .clickable {\n    width: 56px;\n}\n\n.new-project .clickable:hover {\n    background-color: black;\n}\n\n.new-project img {\n    transition: all 0.05s;\n    padding: 8px;\n    filter: invert(1) drop-shadow(2px 2px black);\n    height: 56px;\n}\n\n#project-container {\n    flex: 1;\n}\n\n.project-item {\n    width: 80%;\n    font-family: 'ABZ';\n    font-size: 24px;\n    border: 4px solid black;\n    transition: all 0.3s;\n}\n\n.project-item:hover {\n    box-shadow: -5px 5px var(--color4), 5px -5px var(--color5);\n}\n\n.project-item.unsaved {\n    position: relative;\n    box-shadow: none;\n}\n\n.project-item .save, .project-item .discard {\n    position: absolute;\n    left: 100%;\n    height: 64px;\n    border: 4px solid black;\n    padding: 8px;\n    top: -4px;\n    background-color: lightgreen;\n    cursor: pointer;\n}\n\n.project-item .discard {\n    top: 56px;\n    background-color: lightcoral;\n}\n\n.project-item > .header {\n    border-bottom: 4px solid black;\n    display: flex;\n    padding: 8px;\n    justify-content: space-between;\n    align-items: center;\n    background-color: black;\n    transition: all 0.5s;\n}\n\n.project-item.unsaved > .header {\n    background-color: white;\n}\n\n.project-item .header-left {\n    display: flex;\n    gap: 32px;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-item .project-title {\n    padding: 4px 4px 4px 16px;\n    font-size: 32px;\n    font-weight: 900;\n    color: white;\n}\n\n.project-item.unsaved .project-title {\n    color: black;\n}\n\n.project-item .header-left input {\n    border: 2px solid black;\n    color: black\n}\n\n.project-item .header-left input:focus {\n    outline: 4px solid var(--color4)\n}\n\n.project-item .plus-button {\n    background-color: black;\n    border: 2px solid black;\n}\n\n.add-tags img {\n    height: 48px;\n    filter: invert(1);\n    padding: 8px;\n}\n\n.add-tags .clickable:hover {\n    background-color: var(--color4);\n}\n\n.add-tags .display-text {\n    padding: 0px 8px;\n}\n\n.project-item > .body {\n    padding: 16px;\n}\n\n.task-list > .header {\n    border-bottom: 3px double black;\n    margin-bottom: 8px;\n}\n\n.project-item ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 8px;\n}\n\n/* New Task Button Styling */\n\n.new-task {\n    display: flex;\n    gap: 4px;\n}\n\n.new-task input {\n    border: 0px;\n    border-bottom: 1px solid black;\n    font-size: 20px;\n}\n\n.new-task input::placeholder {\n    font-style: italic;\n}\n\n.new-task input:focus {\n    outline: 0px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Righteous';\n    src: url('Righteous-Regular.ttf')\n}\n\n@font-face {\n    font-family: 'ABZ';\n    src: url('ABeeZee-Regular.ttf');\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root {\n    --color1: #ffffff;\n    --color2: #ffffff;\n    --color3: #ffffff;\n    --color4: #ffffff;\n    --color5: #ffffff;\n}\n\n/* Remove Defaults */\n\nbutton {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\nli {\n    list-style: none;\n}\n\nbody {\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--color1);\n}\n\n.banner {\n    font-size: 96px;\n    font-family: 'Righteous';\n    padding-left: 64px;\n    border-bottom: 4px solid black;\n    background-color: var(--color1);\n}\n\n.banner-text {\n    color: black;\n    transition: all 0.5s;\n    cursor: default;\n    text-shadow: -1px 1px var(--color2), -2px 2px var(--color3), -3px 3px var(--color4), -4px 4px var(--color5)\n}\n\n.banner-text:hover {\n    text-shadow: -2px 2px var(--color2), -4px 4px var(--color3), -6px 6px var(--color4), -8px 8px var(--color5);\n}\n\n#main-content {\n    display: flex;\n    flex: 1;\n}\n\n#sidebar {\n    width: 320px;\n    text-align: center;\n    border-right: 4px solid black;\n    height: 100%;\n    padding: 32px;\n    background-color: rgb(225, 235, 235);\n}\n\n#sidebar-title {\n    text-transform: capitalize;\n    font-size: 36px;\n    font-family: 'ABZ';\n    padding: 8px 32px;\n    border: 4px solid black;\n    font-weight: bolder;\n    background-color: var(--color1);\n    box-shadow: -3px 3px var(--color4), 3px -3px var(--color5)\n}\n\n#project-container {\n    padding: 32px 64px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n}\n\n.plus-button {\n    display: flex;\n    align-items: center;\n    font-family: 'ABZ';\n    color: white;\n    font-weight: bolder;\n}\n\n.plus-button.new-project {\n    background-color: var(--color2);\n    font-size: 32px;\n    border: 2px solid black;\n    align-self: flex-start;\n}\n\n.new-project .display-text {\n    padding: 0px 32px;\n    text-shadow: 2px 2px black;\n}\n\n.plus-button .clickable {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0px;\n    transition: all 0.05s;\n    cursor: pointer;\n}\n\n.new-project .clickable {\n    width: 56px;\n}\n\n.new-project .clickable:hover {\n    background-color: black;\n}\n\n.new-project img {\n    transition: all 0.05s;\n    padding: 8px;\n    filter: invert(1) drop-shadow(2px 2px black);\n    height: 56px;\n}\n\n#project-container {\n    flex: 1;\n}\n\n.project-item {\n    width: 80%;\n    font-family: 'ABZ';\n    font-size: 24px;\n    border: 4px solid black;\n    transition: all 0.3s;\n}\n\n.project-item:hover {\n    box-shadow: -5px 5px var(--color4), 5px -5px var(--color5);\n}\n\n.project-item.unsaved {\n    position: relative;\n    box-shadow: none;\n}\n\n.project-item .save, .project-item .discard {\n    position: absolute;\n    left: 100%;\n    height: 64px;\n    border: 4px solid black;\n    padding: 8px;\n    top: -4px;\n    background-color: lightgreen;\n    cursor: pointer;\n}\n\n.project-item .discard {\n    top: 56px;\n    background-color: lightcoral;\n}\n\n.project-item > .header {\n    border-bottom: 4px solid black;\n    display: flex;\n    padding: 8px;\n    justify-content: space-between;\n    align-items: center;\n    background-color: black;\n    transition: all 0.5s;\n}\n\n.project-item.unsaved > .header {\n    background-color: white;\n}\n\n.project-item .header-left {\n    display: flex;\n    gap: 32px;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-item .project-title {\n    padding: 4px 4px 4px 16px;\n    font-size: 32px;\n    font-weight: 900;\n    color: white;\n}\n\n.project-item.unsaved .project-title {\n    color: black;\n}\n\n.project-item .header-left input {\n    border: 2px solid black;\n    color: black\n}\n\n.project-item .header-left input:focus {\n    outline: 4px solid var(--color4)\n}\n\n.project-item .plus-button {\n    background-color: black;\n    border: 2px solid black;\n}\n\n.add-tags img {\n    height: 48px;\n    filter: invert(1);\n    padding: 8px;\n}\n\n.add-tags .clickable:hover {\n    background-color: var(--color4);\n}\n\n.add-tags .display-text {\n    padding: 0px 8px;\n}\n\n.project-item > .body {\n    padding: 16px;\n}\n\n.task-list > .header {\n    border-bottom: 3px double black;\n    margin-bottom: 8px;\n}\n\n.project-item ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 8px;\n}\n\n/* New Task Button Styling */\n\n.new-task {\n    display: flex;\n    gap: 4px;\n}\n\n.new-task input {\n    border: 0px;\n    border-bottom: 1px solid black;\n    font-size: 20px;\n}\n\n.new-task input::placeholder {\n    font-style: italic;\n}\n\n.new-task input:focus {\n    outline: 0px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBDQUEwQyxtRUFBMEI7O0FBRXBFO0FBQ0EsbUVBQTBCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jb29sb3JzLWlvL2xpYi9nZW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY29vbG9ycy1pby9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY29vbG9ycy1pby9saWIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2Jhc2VDb21wb25lbnRzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3RIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3NrZWxldG9uLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlZENvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpc1ZhbGlkID0gZnVuY3Rpb24gKHN0cikge1xuICAgIC8vIFRPRE86IPCflKcgIGNoZWNrIHRoYXQgaXQgaXMgYSB2YWxpZCBjb29sb3JzIHN0cmluZyBlLmcgNiBvciAzIGNoYXJzXG4gICAgLy8gVE9ETzog8J+UpyBWYWxpZGF0ZSB0aGF0IGVhY2ggY2hhciBpcyBhIHZhbGlkIGhleCBjaGFyICgwLTYsIGEtZilcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gNikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbnZhciBnZW4gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgLy8gVE9ETzog8J+UpyBFbnN1cmUgYXJyIGlzbid0IGxvbmdlciB0aGFuIDEwXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyciwgaSkge1xuICAgICAgICAgICAgLy8gVE9ETzog8J+UpyBoYW5kbGUgc3RyaW5ncyB0aGF0IHN0YXJ0IHdpdGggI1xuICAgICAgICAgICAgLy8gaWYgY3VyciBjb250YWlucyAjIGl0IHdpbGwgYmUgcmV0dXJuZWQgd2l0aG91dCAjLCBvdGhlcndpc2UgY3VyciBpcyBzaW1wbHkgcmV0dXJuZWRcbiAgICAgICAgICAgIHZhciBzdHIgPSBjdXJyLnNwbGl0KCcjJykucG9wKCk7XG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQoc3RyKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyICsgXCIgaXMgbm90IGEgdmFsaWQgaGV4IHZhbHVlXCIpO1xuICAgICAgICAgICAgaWYgKGkgPCBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgYWNjICsgc3RyICsgXCItXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIGFjYyArIHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgJ2h0dHBzOi8vY29vbG9ycy5jby8nKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdlbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdlbl8xID0gcmVxdWlyZShcIi4vZ2VuXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2VuXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZW5fMS5kZWZhdWx0OyB9IH0pO1xudmFyIHBhcnNlXzEgPSByZXF1aXJlKFwiLi9wYXJzZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwYXJzZV8xLmRlZmF1bHQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwYXJzZSA9IGZ1bmN0aW9uICh1cmwsIGhleCkge1xuICAgIGlmIChoZXggPT09IHZvaWQgMCkgeyBoZXggPSB0cnVlOyB9XG4gICAgLy8gVE9ETzog8J+UpyAgQ2hlY2sgdGhhdCBpdCBpcyBhY3R1YWxseSBhIGNvb2xvcnMgdXJsXG4gICAgdmFyIHVybEFyciA9IHVybC5zcGxpdCgnLycpO1xuICAgIHZhciBoZXhBcnIgPSB1cmxBcnJbdXJsQXJyLmxlbmd0aCAtIDFdLnNwbGl0KCctJyk7XG4gICAgaWYgKGhleCkge1xuICAgICAgICByZXR1cm4gaGV4QXJyLm1hcChmdW5jdGlvbiAobnVtKSB7IHJldHVybiBcIiNcIiArIG51bTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gaGV4QXJyO1xuICAgIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBwYXJzZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJSaWdodGVvdXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJBQmVlWmVlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKVxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBQlonO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWNvbG9yMTogI2ZmZmZmZjtcXG4gICAgLS1jb2xvcjI6ICNmZmZmZmY7XFxuICAgIC0tY29sb3IzOiAjZmZmZmZmO1xcbiAgICAtLWNvbG9yNDogI2ZmZmZmZjtcXG4gICAgLS1jb2xvcjU6ICNmZmZmZmY7XFxufVxcblxcbi8qIFJlbW92ZSBEZWZhdWx0cyAqL1xcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG59XFxuXFxuLmJhbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogOTZweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG59XFxuXFxuLmJhbm5lci10ZXh0IHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAxcHggdmFyKC0tY29sb3IyKSwgLTJweCAycHggdmFyKC0tY29sb3IzKSwgLTNweCAzcHggdmFyKC0tY29sb3I0KSwgLTRweCA0cHggdmFyKC0tY29sb3I1KVxcbn1cXG5cXG4uYmFubmVyLXRleHQ6aG92ZXIge1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAycHggdmFyKC0tY29sb3IyKSwgLTRweCA0cHggdmFyKC0tY29sb3IzKSwgLTZweCA2cHggdmFyKC0tY29sb3I0KSwgLThweCA4cHggdmFyKC0tY29sb3I1KTtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDIzNSwgMjM1KTtcXG59XFxuXFxuI3NpZGViYXItdGl0bGUge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIHBhZGRpbmc6IDhweCAzMnB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gICAgYm94LXNoYWRvdzogLTNweCAzcHggdmFyKC0tY29sb3I0KSwgM3B4IC0zcHggdmFyKC0tY29sb3I1KVxcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAzMnB4IDY0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzJweDtcXG59XFxuXFxuLnBsdXMtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdBQlonO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5wbHVzLWJ1dHRvbi5uZXctcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uZXctcHJvamVjdCAuZGlzcGxheS10ZXh0IHtcXG4gICAgcGFkZGluZzogMHB4IDMycHg7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IGJsYWNrO1xcbn1cXG5cXG4ucGx1cy1idXR0b24gLmNsaWNrYWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjA1cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3LXByb2plY3QgLmNsaWNrYWJsZSB7XFxuICAgIHdpZHRoOiA1NnB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QgLmNsaWNrYWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubmV3LXByb2plY3QgaW1nIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDVzO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpIGRyb3Atc2hhZG93KDJweCAycHggYmxhY2spO1xcbiAgICBoZWlnaHQ6IDU2cHg7XFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggdmFyKC0tY29sb3I0KSwgNXB4IC01cHggdmFyKC0tY29sb3I1KTtcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5zYXZlLCAucHJvamVjdC1pdGVtIC5kaXNjYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHRvcDogLTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5kaXNjYXJkIHtcXG4gICAgdG9wOiA1NnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtID4gLmhlYWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkID4gLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5oZWFkZXItbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzJweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLnByb2plY3QtdGl0bGUge1xcbiAgICBwYWRkaW5nOiA0cHggNHB4IDRweCAxNnB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QtaXRlbS51bnNhdmVkIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5oZWFkZXItbGVmdCBpbnB1dCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2tcXG59XFxuXFxuLnByb2plY3QtaXRlbSAuaGVhZGVyLWxlZnQgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tY29sb3I0KVxcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5wbHVzLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmFkZC10YWdzIGltZyB7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmFkZC10YWdzIC5jbGlja2FibGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjQpO1xcbn1cXG5cXG4uYWRkLXRhZ3MgLmRpc3BsYXktdGV4dCB7XFxuICAgIHBhZGRpbmc6IDBweCA4cHg7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gPiAuYm9keSB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi50YXNrLWxpc3QgPiAuaGVhZGVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IGRvdWJsZSBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLyogTmV3IFRhc2sgQnV0dG9uIFN0eWxpbmcgKi9cXG5cXG4ubmV3LXRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLm5ldy10YXNrIGlucHV0IHtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubmV3LXRhc2sgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubmV3LXRhc2sgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0Q0FBK0I7QUFDbkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksMkdBQTJHO0FBQy9HOztBQUVBO0lBQ0ksYUFBYTtJQUNiLE9BQU87QUFDWDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osNENBQTRDO0lBQzVDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osU0FBUztJQUNULDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCOztBQUVBLDRCQUE0Qjs7QUFFNUI7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnO1xcbiAgICBzcmM6IHVybCgnUmlnaHRlb3VzLVJlZ3VsYXIudHRmJylcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgc3JjOiB1cmwoJ0FCZWVaZWUtUmVndWxhci50dGYnKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tY29sb3IxOiAjZmZmZmZmO1xcbiAgICAtLWNvbG9yMjogI2ZmZmZmZjtcXG4gICAgLS1jb2xvcjM6ICNmZmZmZmY7XFxuICAgIC0tY29sb3I0OiAjZmZmZmZmO1xcbiAgICAtLWNvbG9yNTogI2ZmZmZmZjtcXG59XFxuXFxuLyogUmVtb3ZlIERlZmF1bHRzICovXFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbn1cXG5cXG4uYmFubmVyIHtcXG4gICAgZm9udC1zaXplOiA5NnB4O1xcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cyc7XFxuICAgIHBhZGRpbmctbGVmdDogNjRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbn1cXG5cXG4uYmFubmVyLXRleHQge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDFweCB2YXIoLS1jb2xvcjIpLCAtMnB4IDJweCB2YXIoLS1jb2xvcjMpLCAtM3B4IDNweCB2YXIoLS1jb2xvcjQpLCAtNHB4IDRweCB2YXIoLS1jb2xvcjUpXFxufVxcblxcbi5iYW5uZXItdGV4dDpob3ZlciB7XFxuICAgIHRleHQtc2hhZG93OiAtMnB4IDJweCB2YXIoLS1jb2xvcjIpLCAtNHB4IDRweCB2YXIoLS1jb2xvcjMpLCAtNnB4IDZweCB2YXIoLS1jb2xvcjQpLCAtOHB4IDhweCB2YXIoLS1jb2xvcjUpO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjM1LCAyMzUpO1xcbn1cXG5cXG4jc2lkZWJhci10aXRsZSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgcGFkZGluZzogOHB4IDMycHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDNweCB2YXIoLS1jb2xvcjQpLCAzcHggLTNweCB2YXIoLS1jb2xvcjUpXFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDMycHggNjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4ucGx1cy1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0FCWic7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnBsdXMtYnV0dG9uLm5ldy1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IC5kaXNwbGF5LXRleHQge1xcbiAgICBwYWRkaW5nOiAwcHggMzJweDtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxufVxcblxcbi5wbHVzLWJ1dHRvbiAuY2xpY2thYmxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctcHJvamVjdCAuY2xpY2thYmxlIHtcXG4gICAgd2lkdGg6IDU2cHg7XFxufVxcblxcbi5uZXctcHJvamVjdCAuY2xpY2thYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5uZXctcHJvamVjdCBpbWcge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4wNXM7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSkgZHJvcC1zaGFkb3coMnB4IDJweCBibGFjayk7XFxuICAgIGhlaWdodDogNTZweDtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQUJaJztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCB2YXIoLS1jb2xvcjQpLCA1cHggLTVweCB2YXIoLS1jb2xvcjUpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLnNhdmUsIC5wcm9qZWN0LWl0ZW0gLmRpc2NhcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgdG9wOiAtNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmRpc2NhcmQge1xcbiAgICB0b3A6IDU2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gPiAuaGVhZGVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQgPiAuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmhlYWRlci1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbSAucHJvamVjdC10aXRsZSB7XFxuICAgIHBhZGRpbmc6IDRweCA0cHggNHB4IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLnVuc2F2ZWQgLnByb2plY3QtdGl0bGUge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLmhlYWRlci1sZWZ0IGlucHV0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFja1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIC5oZWFkZXItbGVmdCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDRweCBzb2xpZCB2YXIoLS1jb2xvcjQpXFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gLnBsdXMtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYWRkLXRhZ3MgaW1nIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uYWRkLXRhZ3MgLmNsaWNrYWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yNCk7XFxufVxcblxcbi5hZGQtdGFncyAuZGlzcGxheS10ZXh0IHtcXG4gICAgcGFkZGluZzogMHB4IDhweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IC5ib2R5IHtcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnRhc2stbGlzdCA+IC5oZWFkZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggZG91YmxlIGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4vKiBOZXcgVGFzayBCdXR0b24gU3R5bGluZyAqL1xcblxcbi5uZXctdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubmV3LXRhc2sgaW5wdXQge1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5uZXctdGFzayBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkaXY6IG8gPT4gbmV3RWxlbWVudCgnZGl2JyxvKSxcbiAgICBzcGFuOiBvID0+IG5ld0VsZW1lbnQoJ3NwYW4nLG8pLFxuICAgIGJ1dHRvbjogbyA9PiBuZXdFbGVtZW50KCdidXR0b24nLG8pLFxuICAgIGltZzogbyA9PiBuZXdJbWcobyksXG4gICAgdWw6IG8gPT4gbmV3RWxlbWVudCgndWwnLG8pLFxuICAgIGxpOiBvID0+IG5ld0VsZW1lbnQoJ2xpJyxvKVxufVxuXG4vLyBDZW50cmFsIGZ1bmN0aW9uIHRoYXQgYnVpbGRzIEhUTUwgZWxlbWVudHMgZnJvbSBwcm92aWRlZCBvYmplY3RzXG5mdW5jdGlvbiBuZXdFbGVtZW50KHR5cGUsb2JqKSB7XG4gICAgbGV0IHJldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKCd0ZXh0JyBpbiBvYmopIHJldC50ZXh0Q29udGVudCA9IG9iai50ZXh0XG4gICAgaWYgKCdpZCcgaW4gb2JqKSByZXQuaWQgPSBvYmouaWRcbiAgICBpZiAoJ2NsYXNzJyBpbiBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgYyBpbiBvYmouY2xhc3MpIHtcbiAgICAgICAgICAgIHJldC5jbGFzc0xpc3QuYWRkKG9iai5jbGFzc1tjXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoJ2NoaWxkcmVuJyBpbiBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBvYmouY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJldC5hcHBlbmRDaGlsZChvYmouY2hpbGRyZW5baV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBuZXdJbWcob2JqKSB7XG4gICAgbGV0IHJldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGlmICgnc3JjJyBpbiBvYmopIHJldC5zZXRBdHRyaWJ1dGUoJ3NyYycsb2JqLnNyYylcbiAgICBpZiAoJ2FsdCcgaW4gb2JqKSByZXQuc2V0QXR0cmlidXRlKCdhbHQnLG9iai5hbHQpXG4gICAgaWYgKCdjbGFzcycgaW4gb2JqKSB7XG4gICAgICAgIGZvciAobGV0IGMgaW4gb2JqLmNsYXNzKSB7XG4gICAgICAgICAgICByZXQuY2xhc3NMaXN0LmFkZChvYmouY2xhc3NbY10pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldFxufSIsImltcG9ydCB7IHByb2plY3RUZW1wbGF0ZSB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcbmltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vYmFzZUNvbXBvbmVudHMuanNcIjtcblxubGV0IGluZGV4ID0gMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFkZFRlbXBsYXRlOiAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpXG4gICAgICAgIGlmIChwcm9qZWN0QXJlYS5xdWVyeVNlbGVjdG9yKCcudW5zYXZlZCcpKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJlYS5xdWVyeVNlbGVjdG9yKCcudW5zYXZlZCcpLnN0eWxlLm91dGxpbmUgPSBcIjRweCBzb2xpZCB2YXIoLS1jb2xvcjIpXCJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3Byb2plY3RBcmVhLnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkJykuc3R5bGUub3V0bGluZSA9IFwiXCJ9LDMwMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0ZW1wbGF0ZSBhbmQgaW5zZXJ0XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHByb2plY3RUZW1wbGF0ZSgpO1xuICAgICAgICB0ZW1wbGF0ZS5kYXRhc2V0LmluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgY29uc29sZS5sb2codGVtcGxhdGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIHByb2plY3RBcmVhLmluc2VydEJlZm9yZSh0ZW1wbGF0ZSwgcHJvamVjdEFyZWEucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0JykpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuc2F2ZWQgLm5ldy10YXNrIGJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRJdGVtKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuc2F2ZWQgLm5ldy10YXNrIGlucHV0JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsYWRkSWZFbnRlcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bnNhdmVkIC5kaXNjYXJkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbW92ZVRlbXBsYXRlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuc2F2ZWQgLnNhdmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsc2F2ZVRlbXBsYXRlKTtcblxuICAgIH0sICAgIFxufVxuXG5mdW5jdGlvbiBhZGRJdGVtKGUpIHtcbiAgICBsZXQgdCA9IGUudGFyZ2V0O1xuICAgIGNvbnNvbGUubG9nKHQpO1xuICAgIGxldCBsaXN0ID0gdC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgICBsZXQgaW5wdXQgPSB0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gJycpIGxpc3QuYXBwZW5kQ2hpbGQoY29tcG9uZW50LmxpKHt0ZXh0OiBpbnB1dC52YWx1ZX0pKVxuICAgIGlucHV0LnZhbHVlID0gJydcbn1cblxuZnVuY3Rpb24gYWRkSWZFbnRlcihlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIGFkZEl0ZW0oZSlcbn1cblxuZnVuY3Rpb24gc2F2ZVRlbXBsYXRlKGUpIHtcbiAgICAvLyBDaGVjayB0aXRsZSBhbmQgcmVtb3ZlXG4gICAgbGV0IGl0ZW0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCBobCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmhlYWRlci1sZWZ0Jyk7XG4gICAgbGV0IGlucHV0ID0gaGwucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKVxuXG4gICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICBpbnB1dC5zdHlsZS5vdXRsaW5lID0gJzRweCBzb2xpZCByZWQnXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge2lucHV0LnN0eWxlLm91dGxpbmUgPSAnJ30sNTAwKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2coJ3NhdmluZyBwcm9qZWN0IGl0ZW0nKTtcblxuICAgIC8vIFJlbW92ZSBTYXZlL0Rpc2NhcmQgYnV0dG9uc1xuICAgIGl0ZW0ucmVtb3ZlQ2hpbGQoZS50YXJnZXQpXG4gICAgaXRlbS5yZW1vdmVDaGlsZChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kaXNjYXJkJykpXG5cbiAgICAvLyBSZXBsYWNlIGlucHV0IHdpdGggYWN0dWFsIHByb2plY3QgdGl0bGVcbiAgICBobC5pbnNlcnRCZWZvcmUoY29tcG9uZW50LmRpdih7Y2xhc3M6IFsncHJvamVjdC10aXRsZSddLCB0ZXh0OiBpbnB1dC52YWx1ZX0pLGhsLmZpcnN0Q2hpbGQpXG4gICAgaGwucmVtb3ZlQ2hpbGQoaW5wdXQpXG5cbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Vuc2F2ZWQnKVxuXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRlbXBsYXRlKGUpIHtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xufVxuXG5cbiIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vYmFzZUNvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgcGx1c0J1dHRvbiB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIlxuXG5jb25zdCBiYW5uZXIgPSBjb21wb25lbnQuZGl2KHtcbiAgICBjbGFzczogWydiYW5uZXInXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICBjb21wb25lbnQuc3Bhbih7XG4gICAgICAgICAgICBjbGFzczogWydiYW5uZXItdGV4dCddLFxuICAgICAgICAgICAgdGV4dDogJ1RvLURvIExpc3QnXG4gICAgICAgIH0pXG4gICAgXVxufSlcblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IHBsdXNCdXR0b24oJ25ldy1wcm9qZWN0JywnYWRkIG5ldyBwcm9qZWN0JylcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoe1xuICAgIGlkOiBbJ3Byb2plY3QtY29udGFpbmVyJ10sXG4gICAgY2hpbGRyZW46IFsgbmV3UHJvamVjdEJ1dHRvbiBdXG59KVxuXG5jb25zdCBzaWRlQmFyID0gY29tcG9uZW50LmRpdih7XG4gICAgaWQ6ICdzaWRlYmFyJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICBjb21wb25lbnQuc3Bhbih7XG4gICAgICAgICAgICBpZDogJ3NpZGViYXItdGl0bGUnLFxuICAgICAgICAgICAgdGV4dDogJ3NpZGViYXInXG4gICAgICAgIH0pXG4gICAgXVxufSlcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBjb21wb25lbnQuZGl2KHtcbiAgICBpZDogJ21haW4tY29udGVudCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgc2lkZUJhcixcbiAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgIF1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFtiYW5uZXIsIG1haW5Db250ZW50XSIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vYmFzZUNvbXBvbmVudHMuanNcIlxuaW1wb3J0IHBsdXNJbWFnZSBmcm9tIFwiLi9wbHVzLXN5bWJvbC1idXR0b24ucG5nXCJcbmltcG9ydCBjaGVjayBmcm9tICcuL2NoZWNrLnBuZydcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Nsb3NlLnBuZydcblxuZnVuY3Rpb24gcGx1c0J1dHRvbkJhc2UoKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5idXR0b24oe1xuICAgICAgICBjbGFzczogWydjbGlja2FibGUnXSxcbiAgICAgICAgY2hpbGRyZW46IFsgY29tcG9uZW50LmltZyh7c3JjOiBwbHVzSW1hZ2V9KSBdXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsdXNCdXR0b24gKGFDbGFzcyx0ZXh0KSB7IHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICBjbGFzczogW2FDbGFzcywgJ3BsdXMtYnV0dG9uJ10sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgcGx1c0J1dHRvbkJhc2UoKSxcbiAgICAgICAgY29tcG9uZW50LnNwYW4oe1xuICAgICAgICAgICAgY2xhc3M6IFsnZGlzcGxheS10ZXh0J10sXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgXVxufSl9XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VGVtcGxhdGUgKCkge1xuICAgIHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgY2xhc3M6IFsncHJvamVjdC1pdGVtJywndW5zYXZlZCddLFxuICAgICAgICBjaGlsZHJlbjogW3Byb2plY3RJdGVtSGVhZGVyKCksIHByb2plY3RJdGVtQm9keSgpLCBwcm9qZWN0U2F2ZSgpLCBwcm9qZWN0RGlzY2FyZCgpXVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RTYXZlKCkge1xuICAgIHJldHVybiBjb21wb25lbnQuaW1nKHtcbiAgICAgICAgc3JjOiBjaGVjayxcbiAgICAgICAgY2xhc3M6IFsnc2F2ZSddXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcHJvamVjdERpc2NhcmQoKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5pbWcoe1xuICAgICAgICBzcmM6IGNsb3NlLFxuICAgICAgICBjbGFzczogWydkaXNjYXJkJ11cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0SXRlbUhlYWRlcigpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmRpdih7XG4gICAgICAgIGNsYXNzOiBbJ2hlYWRlciddLFxuICAgICAgICBjaGlsZHJlbjogWyBwcm9qZWN0SGVhZGVyTGVmdCgpLCBwcm9qZWN0SGVhZGVyUmlnaHQoKV1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0SGVhZGVyTGVmdCgpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmRpdih7XG4gICAgICAgIGNsYXNzOiBbJ2hlYWRlci1sZWZ0J10sXG4gICAgICAgIGNoaWxkcmVuOiBbIHByb2plY3RUaXRsZSgpLCBhZGRUYWdzQnV0dG9uKCksIF1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0VGl0bGUoKSB7XG4gICAgbGV0IHJldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByZXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgcmV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdQcm9qZWN0IE5hbWUnKVxuICAgIHJldC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJylcbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhZGRUYWdzQnV0dG9uKCkge1xuICAgIHJldHVybiBwbHVzQnV0dG9uKCdhZGQtdGFncycsJ2FkZCB0YWdzJylcbn1cblxuZnVuY3Rpb24gcHJvamVjdEhlYWRlclJpZ2h0KCkge1xuICAgIHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgY2xhc3M6IFsnaGVhZGVyLXJpZ2h0J10sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgICAgICAgICBjbGFzczogWydkdWUtZGF0ZSddLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdEdWUgRGF0ZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0SXRlbUJvZHkoKSB7IHJldHVybiBjb21wb25lbnQuZGl2KHtcbiAgICAgICAgY2xhc3M6IFsnYm9keSddLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgY29tcG9uZW50LmRpdih7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFsndGFzay1saXN0J10sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmRpdih7Y2xhc3M6IFsnaGVhZGVyJ10sIHRleHQ6ICdUYXNrIExpc3QnfSksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC51bCh7Y2xhc3M6IFsnbGlzdCddfSksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kaXYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFsnbmV3LXRhc2snXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmJ1dHRvbih7dGV4dDogJysnfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ2FkZCBhIHRhc2suLi4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY29udmVydFRvU2F2ZWQocHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKCdjb252ZXJ0aW5nIHRvIHNhdmVkJyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vYmFzZUNvbXBvbmVudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnY29vbG9ycy1pbydcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgc2tlbGV0b24gZnJvbSBcIi4vc2tlbGV0b25cIjtcblxuLy8gY29uc3QgcGFsZXR0ZSA9ICdodHRwczovL2Nvb2xvcnMuY28vYjhkOGQ4LTdhOWU5Zi00ZjYzNjctZWVmNWRiLWZlNWY1NSdcbmNvbnN0IHBhbGV0dGUgPSAnaHR0cHM6Ly9jb29sb3JzLmNvL2Y5ZmFmYi02NTkzYzItNmViNGE4LWYwOTc0ZS1lODc2NWEnXG5cbmxldCBjb2xvcnMgPSBwYXJzZShwYWxldHRlKTtcbmZvciAobGV0IGk9MDtpPGNvbG9ycy5sZW5ndGg7aSsrKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShgLS1jb2xvciR7aSsxfWAsIGNvbG9yc1tpXSk7XG59XG5cbi8vIEJ1aWxkIFdlYnNpdGUgU2tlbGV0b25cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50LmRpdih7XG4gICAgaWQ6ICdjb250ZW50JyxcbiAgICBjaGlsZHJlbjogc2tlbGV0b25cbn0pKVxuXG4vLyBBZGQgTmV3IHByb2plY3QgZnVuY3Rpb25hbGl0eVxuaW1wb3J0IHByb2plY3RIYW5kbGVyIGZyb20gXCIuL3Byb2plY3RIYW5kbGVyXCI7XG5cbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKS5xdWVyeVNlbGVjdG9yKCcuY2xpY2thYmxlJyk7XG5cbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHByb2plY3RIYW5kbGVyLmFkZFRlbXBsYXRlKTtcblxuLy8gc3RhcnQgd2l0aCBkZWZhdWx0IHRlbXBsYXRlXG5wcm9qZWN0SGFuZGxlci5hZGRUZW1wbGF0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==