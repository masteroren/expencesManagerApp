"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var BASE_URL = 'http://expensesrest.orenwebtest.com';
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.login = function (phone, password) {
        console.log('login=>', BASE_URL + "/login/phone/" + phone + "/password/" + password);
        return this.http.get(BASE_URL + "/login/phone/" + phone + "/password/" + password).map(function (res) { return res.json(); });
    };
    HttpService.prototype.auth = function (token) {
        console.log('auth=>', BASE_URL + "/auth/" + token);
        return this.http.get(BASE_URL + "/auth/" + token).map(function (res) { return res.json(); });
    };
    HttpService.prototype.upload = function (invoiceData) {
        console.log('upload=>', BASE_URL + "/upload", JSON.stringify(invoiceData));
        return this.http.post(BASE_URL + "/upload", invoiceData).map(function (res) { return res.json(); });
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=httpService.js.map