"use strict";
var core_1 = require("@angular/core");
var http = require('http');
var BASE_URL = 'http://192.168.10.155:8080/';
// const BASE_URL = 'http://192.168.1.2:8080/';
// const BASE_URL = 'http://192.168.20.36/ExpensesRest/';
// const BASE_URL = 'http://expensesrest.orenwebtest.com/';
var HttpService = (function () {
    function HttpService() {
    }
    HttpService.prototype.users = function () {
        console.log('Call url =>', BASE_URL + "users");
        return http.getJSON(BASE_URL + "users");
    };
    HttpService.prototype.upload = function (invoiceData) {
        console.log('Call url =>', BASE_URL + "upload");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUzQixJQUFNLFFBQVEsR0FBRyw2QkFBNkIsQ0FBQztBQUMvQywrQ0FBK0M7QUFDL0MseURBQXlEO0FBQ3pELDJEQUEyRDtBQUkzRDtJQUVJO0lBQ0EsQ0FBQztJQUdELDJCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBSyxRQUFRLFVBQU8sQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFJLFFBQVEsVUFBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxXQUFxQjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBSyxRQUFRLFdBQVEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2hCLEdBQUcsRUFBSyxRQUFRLFdBQVE7WUFDeEIsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7WUFDL0MsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1NBQ3ZDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwQkw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQXFCYixrQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksbUJBQVcsY0FvQnZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SUludm9pY2V9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lJbnZvaWNlXCI7XHJcbmxldCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xyXG5cclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzE5Mi4xNjguMTAuMTU1OjgwODAvJztcclxuLy8gY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzE5Mi4xNjguMS4yOjgwODAvJztcclxuLy8gY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzE5Mi4xNjguMjAuMzYvRXhwZW5zZXNSZXN0Lyc7XHJcbi8vIGNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly9leHBlbnNlc3Jlc3Qub3JlbndlYnRlc3QuY29tLyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2Vycygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDYWxsIHVybCA9PicsIGAke0JBU0VfVVJMfXVzZXJzYCk7XHJcbiAgICAgICAgcmV0dXJuIGh0dHAuZ2V0SlNPTihgJHtCQVNFX1VSTH11c2Vyc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZChpbnZvaWNlRGF0YTogSUludm9pY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2FsbCB1cmwgPT4nLCBgJHtCQVNFX1VSTH11cGxvYWRgKTtcclxuICAgICAgICByZXR1cm4gaHR0cC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBgJHtCQVNFX1VSTH11cGxvYWRgLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KGludm9pY2VEYXRhKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19