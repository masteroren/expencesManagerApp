"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var BASE_URL = 'http://192.168.1.4:3030';
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.get = function (method, payload) {
        if (payload === void 0) { payload = {}; }
        var params = new http_1.URLSearchParams();
        for (var key in payload) {
            params.set(key, payload[key]);
        }
        return this.http.get(BASE_URL + "/" + method, {
            search: params
        })
            .map(function (res) { return res.json(); });
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=httpService.js.map