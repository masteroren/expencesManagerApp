"use strict";
var core_1 = require("@angular/core");
var http = require('http');
var BASE_URL = 'http://192.168.1.2:8080/';
// const BASE_URL = 'http://192.168.20.36/ExpensesRest/';
// const BASE_URL = 'http://expensesrest.orenwebtest.com/';
var HttpService = (function () {
    function HttpService() {
    }
    HttpService.prototype.users = function () {
        return http.getJSON(BASE_URL + "users");
    };
    HttpService.prototype.upload = function (invoiceData) {
        return http.request({
            url: BASE_URL + "upload",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify(invoiceData)
        });
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUzQixJQUFNLFFBQVEsR0FBRywwQkFBMEIsQ0FBQztBQUM1Qyx5REFBeUQ7QUFDekQsMkRBQTJEO0FBSTNEO0lBRUk7SUFDQSxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFJLFFBQVEsVUFBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxXQUFxQjtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNoQixHQUFHLEVBQUssUUFBUSxXQUFRO1lBQ3hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQy9DLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztTQUN2QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBakJMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFrQmIsa0JBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLG1CQUFXLGNBaUJ2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0lJbnZvaWNlfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JSW52b2ljZVwiO1xyXG5sZXQgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMjo4MDgwLyc7XHJcbi8vIGNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjIwLjM2L0V4cGVuc2VzUmVzdC8nO1xyXG4vLyBjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vZXhwZW5zZXNyZXN0Lm9yZW53ZWJ0ZXN0LmNvbS8nO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICB1c2Vycygpe1xyXG4gICAgICAgIHJldHVybiBodHRwLmdldEpTT04oYCR7QkFTRV9VUkx9dXNlcnNgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWQoaW52b2ljZURhdGE6IElJbnZvaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0dHAucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYCR7QkFTRV9VUkx9dXBsb2FkYCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShpbnZvaWNlRGF0YSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==