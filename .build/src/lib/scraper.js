"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = require("cheerio");
var account_configurations_1 = require("./account-configurations");
var aws_sdk_1 = require("aws-sdk");
var utils_1 = require("./utils");
var dynamoDb = new aws_sdk_1.DynamoDB.DocumentClient();
function getYoutubeFollowers(html) {
    return __awaiter(this, void 0, void 0, function () {
        var $, subsBtn;
        return __generator(this, function (_a) {
            try {
                $ = cheerio_1.load(html);
                subsBtn = $('.yt-subscription-button-subscriber-count-branded-horizontal');
                return [2 /*return*/, parseInt(subsBtn[0].attribs['title'])];
            }
            catch (err) {
                console.log(err);
            }
            return [2 /*return*/];
        });
    });
}
exports.getYoutubeFollowers = getYoutubeFollowers;
function getTwitterFollowers(html) {
    return __awaiter(this, void 0, void 0, function () {
        var $, span;
        return __generator(this, function (_a) {
            try {
                $ = cheerio_1.load(html);
                span = $('[data-nav="followers"] .ProfileNav-value');
                return [2 /*return*/, span.data('count')];
            }
            catch (err) {
                console.log(err);
            }
            return [2 /*return*/];
        });
    });
}
exports.getTwitterFollowers = getTwitterFollowers;
function getInstagramFollowers(html) {
    return __awaiter(this, void 0, void 0, function () {
        var $, dataInString, pageObject, pageObjToInt, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, cheerio_1.load(html)];
                case 1:
                    $ = _a.sent();
                    return [4 /*yield*/, $('script[type="application/ld+json"]').html()];
                case 2:
                    dataInString = _a.sent();
                    return [4 /*yield*/, JSON.parse(dataInString)];
                case 3:
                    pageObject = _a.sent();
                    return [4 /*yield*/, parseInt(pageObject.mainEntityofPage.interactionStatistic
                            .userInteractionCount)];
                case 4:
                    pageObjToInt = _a.sent();
                    return [2 /*return*/, pageObjToInt];
                case 5:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.getInstagramFollowers = getInstagramFollowers;
function getYoutubeCount() {
    return __awaiter(this, void 0, void 0, function () {
        var html, youtubeCount, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, utils_1.getHTML(account_configurations_1.default.youtubeUrl)];
                case 1:
                    html = _a.sent();
                    return [4 /*yield*/, getYoutubeFollowers(html)];
                case 2:
                    youtubeCount = _a.sent();
                    return [2 /*return*/, youtubeCount];
                case 3:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getYoutubeCount = getYoutubeCount;
function getInstagramCount() {
    return __awaiter(this, void 0, void 0, function () {
        var html, instagramCount, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, utils_1.getHTML(account_configurations_1.default.instagramUlr)];
                case 1:
                    html = _a.sent();
                    return [4 /*yield*/, getInstagramFollowers(html)];
                case 2:
                    instagramCount = _a.sent();
                    return [2 /*return*/, instagramCount];
                case 3:
                    err_3 = _a.sent();
                    console.log(err_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getInstagramCount = getInstagramCount;
function getTwitterCount() {
    return __awaiter(this, void 0, void 0, function () {
        var html, twitterCount, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, utils_1.getHTML(account_configurations_1.default.twitterUrl)];
                case 1:
                    html = _a.sent();
                    return [4 /*yield*/, getTwitterFollowers(html)];
                case 2:
                    twitterCount = _a.sent();
                    return [2 /*return*/, twitterCount];
                case 3:
                    err_4 = _a.sent();
                    console.log(err_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getTwitterCount = getTwitterCount;
function taskRunner() {
    return __awaiter(this, void 0, void 0, function () {
        var iCount, tCount, yCount, today, currentTime, params;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getInstagramCount()];
                case 1:
                    iCount = _a.sent();
                    return [4 /*yield*/, getTwitterCount()];
                case 2:
                    tCount = _a.sent();
                    return [4 /*yield*/, getYoutubeCount()];
                case 3:
                    yCount = _a.sent();
                    today = utils_1.isSameDay();
                    currentTime = utils_1.isSameDay(true);
                    params = {
                        TableName: 'SocialMediaApi',
                        Item: {
                            id: "" + today + currentTime,
                            twitter: tCount,
                            instagram: iCount,
                            youtube: yCount,
                            date: today,
                            updatedAt: currentTime,
                        },
                    };
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            try {
                                dynamoDb.put(params, function (err, data) {
                                    if (err) {
                                        console.log("createChatMessage ERROR=" + err.stack);
                                        resolve({
                                            statusCode: 400,
                                            error: "Could not create message: " + err.stack,
                                        });
                                    }
                                    else {
                                        resolve({
                                            statusCode: 200,
                                            body: JSON.stringify(params.Item),
                                        });
                                    }
                                });
                            }
                            catch (_a) {
                                (function (err) { return console.log("createChatMessage ERROR=" + err.stack); });
                            }
                        })];
                case 4: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.taskRunner = taskRunner;
//# sourceMappingURL=scraper.js.map