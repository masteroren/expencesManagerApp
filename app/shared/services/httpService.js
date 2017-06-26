"use strict";
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
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQywrQ0FBK0M7QUFDL0MsSUFBTSxRQUFRLEdBQUcsOEJBQThCLENBQUM7QUFHaEQ7SUFFSSxxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVELDBCQUFJLEdBQUo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxTQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUksUUFBUSxVQUFPLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxVQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLFdBQXFCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUksUUFBUSxXQUFRLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksUUFBUSxXQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxhQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBdkJMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUF3QmIsa0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLG1CQUFXLGNBdUJ2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0lJbnZvaWNlfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JSW52b2ljZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG4vLyBjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMTAuNTUuNC4yMjc6MzAwMC8nO1xyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMjEyLjE0My4xMjguMjE3OjkyMDAvJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0JBU0VfVVJMfXRlc3RgKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VycygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtCQVNFX1VSTH11c2Vyc2ApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0JBU0VfVVJMfXVzZXJzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkKGludm9pY2VEYXRhOiBJSW52b2ljZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke0JBU0VfVVJMfXVwbG9hZGApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGludm9pY2VEYXRhKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0JBU0VfVVJMfXVwbG9hZGAsIGludm9pY2VEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBlbnNlc1R5cGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0JBU0VfVVJMfWV4cFR5cGVzYCk7XHJcbiAgICB9XHJcbn0iXX0=