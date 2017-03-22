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
    HttpService.prototype.test = function () {
        return this.http.get(BASE_URL + "test");
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyxRQUFPLE1BR1AsQ0FBQyxDQUhZO0FBRWIsa0RBQWtEO0FBQ2xELElBQU0sUUFBUSxHQUFHLDhCQUE4QixDQUFDO0FBR2hEO0lBRUkscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCwwQkFBSSxHQUFKO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLFFBQVEsU0FBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxVQUFPLENBQUMsQ0FBQztRQUN6QywyQkFBMkI7SUFDL0IsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxXQUFxQjtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksUUFBUSxXQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxhQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBckJMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFzQmIsa0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLG1CQUFXLGNBcUJ2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0lJbnZvaWNlfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JSW52b2ljZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG5pbXBvcnQgJ3J4anMnXHJcblxyXG4vLyBjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMTkyLjE2OC4xMC4xNTU6ODA4MC8nO1xyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMjEyLjE0My4xMjguMjE3OjkyMDAvJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0JBU0VfVVJMfXRlc3RgKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtCQVNFX1VSTH11c2Vyc2ApO1xyXG4gICAgICAgIC8vIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZChpbnZvaWNlRGF0YTogSUludm9pY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7QkFTRV9VUkx9dXBsb2FkYCwgaW52b2ljZURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGVuc2VzVHlwZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QkFTRV9VUkx9ZXhwVHlwZXNgKTtcclxuICAgIH1cclxufSJdfQ==