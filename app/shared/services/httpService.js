"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
// const BASE_URL = 'http://192.168.10.70/ExpensesRest/';
var BASE_URL = 'http://expensesrest.orenwebtest.com/';
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.users = function () {
        return this.http.get(BASE_URL + "users")
            .map(function (res) { return res.json(); });
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
        return this.http.post(BASE_URL + "/upload", invoiceData)
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.multipart = function (payload, file) {
        if (payload === void 0) { payload = {}; }
        var params = new FormData();
        for (var key in payload) {
            params.append(key, payload[key]);
        }
        params.append("file", file);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'multipart/form-data');
        console.log(params);
        return this.http.post(BASE_URL + "/upload", params, headers);
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQU1yQyx5REFBeUQ7QUFDekQsSUFBTSxRQUFRLEdBQUcsc0NBQXNDLENBQUM7QUFHeEQ7SUFDSSxxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxVQUFPLENBQUM7YUFDbkMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQkFBMkI7SUFDM0IsdUZBQXVGO0lBQ3ZGLDRHQUE0RztJQUM1RyxJQUFJO0lBQ0osRUFBRTtJQUNGLGdCQUFnQjtJQUNoQiwwREFBMEQ7SUFDMUQsZ0ZBQWdGO0lBQ2hGLElBQUk7SUFFSiw0QkFBTSxHQUFOLFVBQU8sV0FBVztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxRQUFRLFlBQVMsRUFBRSxXQUFXLENBQUM7YUFDbkQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsT0FBaUIsRUFBRSxJQUFTO1FBQTVCLHVCQUFpQixHQUFqQixZQUFpQjtRQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTVCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFFNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxRQUFRLFlBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQXJDTDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBc0NiLGtCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQXJDWSxtQkFBVyxjQXFDdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCI7XHJcblxyXG5pbXBvcnQgZW51bXNNb2R1bGUgID0gcmVxdWlyZSgndWkvZW51bXMnKVxyXG5pbXBvcnQgZnNNb2R1bGUgPSByZXF1aXJlKFwiZmlsZS1zeXN0ZW1cIik7XHJcbmltcG9ydCBiZ0h0dHBNb2R1bGUgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwJylcclxuXHJcbi8vIGNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjEwLjcwL0V4cGVuc2VzUmVzdC8nO1xyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vZXhwZW5zZXNyZXN0Lm9yZW53ZWJ0ZXN0LmNvbS8nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlcnMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtCQVNFX1VSTH11c2Vyc2ApXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxvZ2luKHBob25lLCBwYXNzd29yZCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdsb2dpbj0+JywgYCR7QkFTRV9VUkx9L2xvZ2luL3Bob25lLyR7cGhvbmV9L3Bhc3N3b3JkLyR7cGFzc3dvcmR9YCk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QkFTRV9VUkx9L2xvZ2luL3Bob25lLyR7cGhvbmV9L3Bhc3N3b3JkLyR7cGFzc3dvcmR9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhdXRoKHRva2VuKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2F1dGg9PicsIGAke0JBU0VfVVJMfS9hdXRoLyR7dG9rZW59YCk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QkFTRV9VUkx9L2F1dGgvJHt0b2tlbn1gKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHVwbG9hZChpbnZvaWNlRGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtCQVNFX1VSTH0vdXBsb2FkYCwgaW52b2ljZURhdGEpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG11bHRpcGFydChwYXlsb2FkOiBhbnkgPSB7fSwgZmlsZTogYW55KTogYW55IHtcclxuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBheWxvYWQpIHtcclxuICAgICAgICAgICAgcGFyYW1zLmFwcGVuZChrZXksIHBheWxvYWRba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtcy5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0JBU0VfVVJMfS91cGxvYWRgLCBwYXJhbXMsIGhlYWRlcnMpO1xyXG4gICAgfVxyXG59Il19