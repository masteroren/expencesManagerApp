"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs');
// const BASE_URL = 'http://192.168.10.155:8080/';
var BASE_URL = 'http://212.143.128.217:9200/';
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.users = function () {
        return this.http.get(BASE_URL + "users");
        // .map(res => res.json());
    };
    HttpService.prototype.upload = function (invoiceData) {
        return this.http.post(BASE_URL + "upload", invoiceData);
    };
    HttpService.prototype.expensesTypes = function () {
        return this.http.get(BASE_URL + "expTypes");
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyxRQUFPLE1BR1AsQ0FBQyxDQUhZO0FBRWIsa0RBQWtEO0FBQ2xELElBQU0sUUFBUSxHQUFHLDhCQUE4QixDQUFDO0FBR2hEO0lBRUkscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLFFBQVEsVUFBTyxDQUFDLENBQUM7UUFDckMsMkJBQTJCO0lBQ25DLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sV0FBcUI7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLFFBQVEsV0FBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxtQ0FBYSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLFFBQVEsYUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWpCTDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBa0JiLGtCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxtQkFBVyxjQWlCdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtJSW52b2ljZX0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUludm9pY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuaW1wb3J0ICdyeGpzJ1xyXG5cclxuLy8gY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzE5Mi4xNjguMTAuMTU1OjgwODAvJztcclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzIxMi4xNDMuMTI4LjIxNzo5MjAwLyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QkFTRV9VUkx9dXNlcnNgKTtcclxuICAgICAgICAgICAgLy8gLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkKGludm9pY2VEYXRhOiBJSW52b2ljZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtCQVNFX1VSTH11cGxvYWRgLCBpbnZvaWNlRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwZW5zZXNUeXBlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtCQVNFX1VSTH1leHBUeXBlc2ApO1xyXG4gICAgfVxyXG59Il19