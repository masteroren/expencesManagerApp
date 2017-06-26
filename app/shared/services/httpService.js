"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// const BASE_URL = 'http://10.55.4.227:3000/';
var BASE_URL = 'http://212.143.128.217:9200/';
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.test = function () {
        return this.http.get(BASE_URL + "test");
    };
    HttpService.prototype.users = function () {
        console.log(BASE_URL + "users");
        return this.http.get(BASE_URL + "users");
    };
    HttpService.prototype.upload = function (invoiceData) {
        console.log(BASE_URL + "upload");
        console.log(JSON.stringify(invoiceData));
        return this.http.post(BASE_URL + "upload", invoiceData);
    };
    HttpService.prototype.expensesTypes = function () {
        return this.http.get(BASE_URL + "expTypes");
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzQ0FBbUM7QUFFbkMsK0NBQStDO0FBQy9DLElBQU0sUUFBUSxHQUFHLDhCQUE4QixDQUFDO0FBR2hELElBQWEsV0FBVztJQUVwQixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVELDBCQUFJLEdBQUo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxTQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUksUUFBUSxVQUFPLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxVQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLFdBQXFCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUksUUFBUSxXQUFRLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksUUFBUSxXQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxhQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FHaUIsV0FBSTtHQUZyQixXQUFXLENBdUJ2QjtBQXZCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtJSW52b2ljZX0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUludm9pY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuLy8gY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzEwLjU1LjQuMjI3OjMwMDAvJztcclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzIxMi4xNDMuMTI4LjIxNzo5MjAwLyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtCQVNFX1VSTH10ZXN0YCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlcnMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7QkFTRV9VUkx9dXNlcnNgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtCQVNFX1VSTH11c2Vyc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZChpbnZvaWNlRGF0YTogSUludm9pY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtCQVNFX1VSTH11cGxvYWRgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpbnZvaWNlRGF0YSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtCQVNFX1VSTH11cGxvYWRgLCBpbnZvaWNlRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwZW5zZXNUeXBlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtCQVNFX1VSTH1leHBUeXBlc2ApO1xyXG4gICAgfVxyXG59Il19