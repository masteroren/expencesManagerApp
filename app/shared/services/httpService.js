"use strict";
var core_1 = require("@angular/core");
// import {Http, Headers} from "@angular/http";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/toPromise";
// import enumsModule  = require('ui/enums')
// import fsModule = require("file-system");
// import bgHttpModule = require('nativescript-background-http')
var http = require('http');
// const BASE_URL = 'http://192.168.20.36/ExpensesRest/';
var BASE_URL = 'http://expensesrest.orenwebtest.com/';
var HttpService = (function () {
    function HttpService() {
    }
    HttpService.prototype.users = function () {
        console.log(BASE_URL + "users");
        return http.getJSON(BASE_URL + "users");
    };
    HttpService.prototype.upload = function (invoiceData) {
        return http.request({
            url: BASE_URL + "/upload",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLCtDQUErQztBQUUvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLHdDQUF3QztBQUV4Qyw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLGdFQUFnRTtBQUdoRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFM0IseURBQXlEO0FBQ3pELElBQU0sUUFBUSxHQUFHLHNDQUFzQyxDQUFDO0FBSXhEO0lBRUk7SUFDQSxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUksUUFBUSxVQUFPLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBSSxRQUFRLFVBQU8sQ0FBQyxDQUFDO0lBRTVDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sV0FBVztRQUVkLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2hCLEdBQUcsRUFBSyxRQUFRLFlBQVM7WUFDekIsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7WUFDL0MsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1NBQ3ZDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwQkw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQXFCYixrQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksbUJBQVcsY0FvQnZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vIGltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbi8vIGltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG4vLyBpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG4vLyBpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIjtcclxuXHJcbi8vIGltcG9ydCBlbnVtc01vZHVsZSAgPSByZXF1aXJlKCd1aS9lbnVtcycpXHJcbi8vIGltcG9ydCBmc01vZHVsZSA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcclxuLy8gaW1wb3J0IGJnSHR0cE1vZHVsZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHAnKVxyXG5cclxuXHJcbmxldCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xyXG5cclxuLy8gY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzE5Mi4xNjguMjAuMzYvRXhwZW5zZXNSZXN0Lyc7XHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly9leHBlbnNlc3Jlc3Qub3JlbndlYnRlc3QuY29tLyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXJzKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7QkFTRV9VUkx9dXNlcnNgKTtcclxuICAgICAgICByZXR1cm4gaHR0cC5nZXRKU09OKGAke0JBU0VfVVJMfXVzZXJzYCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZChpbnZvaWNlRGF0YSkge1xyXG5cclxuICAgICAgICByZXR1cm4gaHR0cC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBgJHtCQVNFX1VSTH0vdXBsb2FkYCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShpbnZvaWNlRGF0YSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==