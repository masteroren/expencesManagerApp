"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var BASE_URL = 'http://192.168.10.155:8080/';
// const BASE_URL = 'http://212.143.128.217:9200/';
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.users = function () {
        return this.http.get(BASE_URL + "users");
    };
    HttpService.prototype.upload = function (invoiceData) {
        return this.http.post(BASE_URL + "upload", invoiceData);
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyxJQUFNLFFBQVEsR0FBRyw2QkFBNkIsQ0FBQztBQUMvQyxtREFBbUQ7QUFHbkQ7SUFFSSxxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxVQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLFdBQXFCO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxRQUFRLFdBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBWkw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWFiLGtCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxtQkFBVyxjQVl2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0lJbnZvaWNlfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JSW52b2ljZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMTkyLjE2OC4xMC4xNTU6ODA4MC8nO1xyXG4vLyBjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMjEyLjE0My4xMjguMjE3OjkyMDAvJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICB1c2VycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtCQVNFX1VSTH11c2Vyc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZChpbnZvaWNlRGF0YTogSUludm9pY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7QkFTRV9VUkx9dXBsb2FkYCwgaW52b2ljZURhdGEpO1xyXG4gICAgfVxyXG59Il19