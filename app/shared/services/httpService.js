"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyxJQUFNLFFBQVEsR0FBRyw4QkFBOEIsQ0FBQztBQUdoRDtJQUVJLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUM5QixDQUFDO0lBRUQsMEJBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxRQUFRLFNBQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBSSxRQUFRLFVBQU8sQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxRQUFRLFVBQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sV0FBcUI7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBSSxRQUFRLFdBQVEsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxRQUFRLFdBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxRQUFRLGFBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUF2Qkw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQXdCYixrQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksbUJBQVcsY0F1QnZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SUludm9pY2V9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lJbnZvaWNlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8yMTIuMTQzLjEyOC4yMTc6OTIwMC8nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIHRlc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QkFTRV9VUkx9dGVzdGApO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXJzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke0JBU0VfVVJMfXVzZXJzYCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QkFTRV9VUkx9dXNlcnNgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWQoaW52b2ljZURhdGE6IElJbnZvaWNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7QkFTRV9VUkx9dXBsb2FkYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoaW52b2ljZURhdGEpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7QkFTRV9VUkx9dXBsb2FkYCwgaW52b2ljZURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGVuc2VzVHlwZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QkFTRV9VUkx9ZXhwVHlwZXNgKTtcclxuICAgIH1cclxufSJdfQ==