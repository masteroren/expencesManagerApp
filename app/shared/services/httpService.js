"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// const BASE_URL = 'http://192.168.1.16:8080/';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzQ0FBbUM7QUFFbkMsZ0RBQWdEO0FBQ2hELElBQU0sUUFBUSxHQUFHLDhCQUE4QixDQUFDO0FBR2hELElBQWEsV0FBVztJQUVwQixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVELDBCQUFJLEdBQUo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxTQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUksUUFBUSxVQUFPLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxVQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLFdBQXFCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUksUUFBUSxXQUFRLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksUUFBUSxXQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxhQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FHaUIsV0FBSTtHQUZyQixXQUFXLENBdUJ2QjtBQXZCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtJSW52b2ljZX0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUludm9pY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuLy8gY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzE5Mi4xNjguMS4xNjo4MDgwLyc7XHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8yMTIuMTQzLjEyOC4yMTc6OTIwMC8nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIHRlc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QkFTRV9VUkx9dGVzdGApO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXJzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke0JBU0VfVVJMfXVzZXJzYCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QkFTRV9VUkx9dXNlcnNgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWQoaW52b2ljZURhdGE6IElJbnZvaWNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7QkFTRV9VUkx9dXBsb2FkYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoaW52b2ljZURhdGEpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7QkFTRV9VUkx9dXBsb2FkYCwgaW52b2ljZURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGVuc2VzVHlwZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QkFTRV9VUkx9ZXhwVHlwZXNgKTtcclxuICAgIH1cclxufSJdfQ==