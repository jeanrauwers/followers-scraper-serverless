module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: getLikes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLikes", function() { return getLikes; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_scraper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/scraper */ "./src/lib/scraper.js");


const getLikes = async () => {
  const twitterTotalLikes = await Object(_lib_scraper__WEBPACK_IMPORTED_MODULE_1__["getTwitterCount"])();
  const instagramTotalLikes = await Object(_lib_scraper__WEBPACK_IMPORTED_MODULE_1__["getInstagramCount"])();
  return await {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      twitter: twitterTotalLikes,
      instagram: instagramTotalLikes
    }, null, 2)
  };
};

/***/ }),

/***/ "./src/lib/account-configurations.js":
/*!*******************************************!*\
  !*** ./src/lib/account-configurations.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const accountConfig = {
  twitterUrl: 'https://twitter.com/jeanrauwers',
  instagramUlr: 'https://instagram.com/jeanrauwers'
};
/* harmony default export */ __webpack_exports__["default"] = (accountConfig);

/***/ }),

/***/ "./src/lib/scraper.js":
/*!****************************!*\
  !*** ./src/lib/scraper.js ***!
  \****************************/
/*! exports provided: getHTML, getTwitterFollowers, getInstagramFollowers, getInstagramCount, getTwitterCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHTML", function() { return getHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTwitterFollowers", function() { return getTwitterFollowers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstagramFollowers", function() { return getInstagramFollowers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstagramCount", function() { return getInstagramCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTwitterCount", function() { return getTwitterCount; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cheerio */ "cheerio");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _account_configurations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-configurations */ "./src/lib/account-configurations.js");



 // import db from './db';

async function getHTML(url) {
  try {
    const {
      data: html
    } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url);
    return html;
  } catch (err) {
    console.log(err);
  }
}
async function getTwitterFollowers(html) {
  try {
    const $ = cheerio__WEBPACK_IMPORTED_MODULE_2___default.a.load(html);
    const span = $('[data-nav="followers"] .ProfileNav-value');
    return span.data('count');
  } catch (err) {
    console.log(err);
  }
}
async function getInstagramFollowers(html) {
  try {
    const $ = cheerio__WEBPACK_IMPORTED_MODULE_2___default.a.load(html);
    const dataInString = $('script[type="application/ld+json"]').html();
    const pageObject = JSON.parse(dataInString);
    return parseInt(pageObject.mainEntityofPage.interactionStatistic.userInteractionCount);
  } catch (err) {
    console.log(err);
  }
}
async function getInstagramCount() {
  try {
    const html = await getHTML('https://instagram.com/jeanrauwers');
    const instagramCount = await getInstagramFollowers(html);
    return instagramCount;
  } catch (err) {
    console.log(err);
  }
}
async function getTwitterCount() {
  try {
    const html = await getHTML('https://twitter.com/jeanrauwers');
    const twitterCount = await getTwitterFollowers(html);
    return twitterCount;
  } catch (err) {
    console.log(err);
  }
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map