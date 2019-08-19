(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/scraper.js");
/******/ })
/************************************************************************/
/******/ ({

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
  instagramUlr: 'https://instagram.com/dev.jeanrauwers',
  youtubeUrl: 'https://www.youtube.com/user/jeanrauwers'
};
/* harmony default export */ __webpack_exports__["default"] = (accountConfig);

/***/ }),

/***/ "./src/lib/scraper.js":
/*!****************************!*\
  !*** ./src/lib/scraper.js ***!
  \****************************/
/*! exports provided: getHTML, getYoutubeFollowers, getTwitterFollowers, getInstagramFollowers, getYoutubeCount, getInstagramCount, getTwitterCount, taskRunner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHTML", function() { return getHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYoutubeFollowers", function() { return getYoutubeFollowers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTwitterFollowers", function() { return getTwitterFollowers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstagramFollowers", function() { return getInstagramFollowers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYoutubeCount", function() { return getYoutubeCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstagramCount", function() { return getInstagramCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTwitterCount", function() { return getTwitterCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskRunner", function() { return taskRunner; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cheerio */ "cheerio");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _account_configurations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-configurations */ "./src/lib/account-configurations.js");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_4__);





const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_4___default.a.DynamoDB.DocumentClient();
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
async function getYoutubeFollowers(html) {
  try {
    const $ = cheerio__WEBPACK_IMPORTED_MODULE_2___default.a.load(html);
    const subsBtn = $('.yt-subscription-button-subscriber-count-branded-horizontal');
    return parseInt(subsBtn[0].attribs['title']);
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
async function getYoutubeCount() {
  try {
    const html = await getHTML(_account_configurations__WEBPACK_IMPORTED_MODULE_3__["default"].youtubeUrl);
    const youtubeCount = await getYoutubeFollowers(html);
    return youtubeCount;
  } catch (err) {
    console.log(err);
  }
}
async function getInstagramCount() {
  try {
    const html = await getHTML(_account_configurations__WEBPACK_IMPORTED_MODULE_3__["default"].instagramUlr);
    const instagramCount = await getInstagramFollowers(html);
    return instagramCount;
  } catch (err) {
    console.log(err);
  }
}
async function getTwitterCount() {
  try {
    const html = await getHTML(_account_configurations__WEBPACK_IMPORTED_MODULE_3__["default"].twitterUrl);
    const twitterCount = await getTwitterFollowers(html);
    return twitterCount;
  } catch (err) {
    console.log(err);
  }
}
async function taskRunner() {
  const iCount = await getInstagramCount();
  const tCount = await getTwitterCount();
  const yCount = await getYoutubeCount(); //TODO: Create function to do Date

  const date = new Date();
  date.toLocaleString('en-GB', {
    hour: '2-digit',
    hour12: false,
    timeZone: 'Europe/London'
  });
  const currentDay = ('0' + date.getDate()).slice(-2);
  const currentMonth = ('0' + (date.getMonth() + 1)).slice(-2);
  const today = `${currentDay}${currentMonth}${date.getFullYear()}`;
  const currentTime = `${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
  date.toLocaleString('en-GB', {
    hour12: false,
    timeZone: 'Europe/London'
  });
  const params = {
    TableName: 'apiSocialMedia',
    Item: {
      id: `${today}${currentTime}`,
      twitter: tCount,
      instagram: iCount,
      youtube: yCount,
      date: today,
      updatedAt: currentTime
    }
  };
  return await new Promise((resolve, reject) => {
    try {
      dynamoDb.put(params, (error, data) => {
        if (error) {
          console.log(`createChatMessage ERROR=${error.stack}`);
          reject({
            statusCode: 400,
            error: `Could not create message: ${error.stack}`
          });
        } else {
          resolve({
            statusCode: 200,
            body: JSON.stringify(params.Item)
          });
        }
      });
    } catch (_unused) {
      err => console.log;
    }
  });
}

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

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

/******/ })));
//# sourceMappingURL=scraper.js.map