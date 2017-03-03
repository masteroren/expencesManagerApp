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
// const BASE_URL = 'http://192.168.1.5/ExpensesRest/';
var BASE_URL = 'http://expensesrest.orenwebtest.com/';
var HttpService = (function () {
    function HttpService() {
    }
    HttpService.prototype.users = function () {
        return http.getJSON(BASE_URL + "users");
        // return this.http.get(`${BASE_URL}users`)
        //     .map(res => res.json());
    };
    // login(phone, password) {
    //     console.log('login=>', `${BASE_URL}/login/phone/${phone}/password/${password}`);
    //     return this.http.get(`${BASE_URL}/login/phone/${phone}/password/${password}`).map(res => res.json());
    // }
    //
    // auth(token) {
    //     console.log('auth=>', `${BASE_URL}/auth/${token}`);
    //     return this.http.get(`${BASE_URL}/auth/${token}`).map(res => res.json());
    // }
    HttpService.prototype.upload = function (invoiceData) {
        return http.request({
            url: BASE_URL + "/upload",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify(invoiceData)
        });
        // return this.http.post(`${BASE_URL}/upload`, invoiceData)
        //     .map(res => res.json());
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLCtDQUErQztBQUUvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLHdDQUF3QztBQUV4Qyw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLGdFQUFnRTtBQUdoRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFHM0IsdURBQXVEO0FBQ3ZELElBQU0sUUFBUSxHQUFHLHNDQUFzQyxDQUFDO0FBR3hEO0lBRUk7SUFDQSxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFJLFFBQVEsVUFBTyxDQUFDLENBQUM7UUFDeEMsMkNBQTJDO1FBQzNDLCtCQUErQjtJQUNuQyxDQUFDO0lBRUQsMkJBQTJCO0lBQzNCLHVGQUF1RjtJQUN2Riw0R0FBNEc7SUFDNUcsSUFBSTtJQUNKLEVBQUU7SUFDRixnQkFBZ0I7SUFDaEIsMERBQTBEO0lBQzFELGdGQUFnRjtJQUNoRixJQUFJO0lBRUosNEJBQU0sR0FBTixVQUFPLFdBQVc7UUFFZCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNoQixHQUFHLEVBQUssUUFBUSxZQUFTO1lBQ3pCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQy9DLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztTQUN2QyxDQUFDLENBQUM7UUFHSCwyREFBMkQ7UUFDM0QsK0JBQStCO0lBQ25DLENBQUM7SUFsQ0w7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWlEYixrQkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUFoRFksbUJBQVcsY0FnRHZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vIGltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbi8vIGltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG4vLyBpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG4vLyBpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIjtcclxuXHJcbi8vIGltcG9ydCBlbnVtc01vZHVsZSAgPSByZXF1aXJlKCd1aS9lbnVtcycpXHJcbi8vIGltcG9ydCBmc01vZHVsZSA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcclxuLy8gaW1wb3J0IGJnSHR0cE1vZHVsZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHAnKVxyXG5cclxuXHJcbmxldCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xyXG5cclxuXHJcbi8vIGNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNS9FeHBlbnNlc1Jlc3QvJztcclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2V4cGVuc2VzcmVzdC5vcmVud2VidGVzdC5jb20vJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICB1c2Vycygpe1xyXG4gICAgICAgIHJldHVybiBodHRwLmdldEpTT04oYCR7QkFTRV9VUkx9dXNlcnNgKTtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtCQVNFX1VSTH11c2Vyc2ApXHJcbiAgICAgICAgLy8gICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxvZ2luKHBob25lLCBwYXNzd29yZCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdsb2dpbj0+JywgYCR7QkFTRV9VUkx9L2xvZ2luL3Bob25lLyR7cGhvbmV9L3Bhc3N3b3JkLyR7cGFzc3dvcmR9YCk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QkFTRV9VUkx9L2xvZ2luL3Bob25lLyR7cGhvbmV9L3Bhc3N3b3JkLyR7cGFzc3dvcmR9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhdXRoKHRva2VuKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2F1dGg9PicsIGAke0JBU0VfVVJMfS9hdXRoLyR7dG9rZW59YCk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QkFTRV9VUkx9L2F1dGgvJHt0b2tlbn1gKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHVwbG9hZChpbnZvaWNlRGF0YSkge1xyXG5cclxuICAgICAgICByZXR1cm4gaHR0cC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBgJHtCQVNFX1VSTH0vdXBsb2FkYCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShpbnZvaWNlRGF0YSlcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtCQVNFX1VSTH0vdXBsb2FkYCwgaW52b2ljZURhdGEpXHJcbiAgICAgICAgLy8gICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG11bHRpcGFydChwYXlsb2FkOiBhbnkgPSB7fSwgZmlsZTogYW55KTogYW55IHtcclxuICAgIC8vICAgICBsZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAvLyAgICAgZm9yIChsZXQga2V5IGluIHBheWxvYWQpIHtcclxuICAgIC8vICAgICAgICAgcGFyYW1zLmFwcGVuZChrZXksIHBheWxvYWRba2V5XSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHBhcmFtcy5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0JBU0VfVVJMfS91cGxvYWRgLCBwYXJhbXMsIGhlYWRlcnMpO1xyXG4gICAgLy8gfVxyXG59Il19