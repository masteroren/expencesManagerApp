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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyxJQUFNLFFBQVEsR0FBRyw2QkFBNkIsQ0FBQztBQUMvQyxtREFBbUQ7QUFHbkQ7SUFFSSxxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxVQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLFdBQXFCO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxRQUFRLFdBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxRQUFRLGFBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFoQkw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWlCYixrQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksbUJBQVcsY0FnQnZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SUludm9pY2V9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lJbnZvaWNlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjEwLjE1NTo4MDgwLyc7XHJcbi8vIGNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8yMTIuMTQzLjEyOC4yMTc6OTIwMC8nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0JBU0VfVVJMfXVzZXJzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkKGludm9pY2VEYXRhOiBJSW52b2ljZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtCQVNFX1VSTH11cGxvYWRgLCBpbnZvaWNlRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwZW5zZXNUeXBlcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0JBU0VfVVJMfWV4cFR5cGVzYCk7XHJcbiAgICB9XHJcbn0iXX0=