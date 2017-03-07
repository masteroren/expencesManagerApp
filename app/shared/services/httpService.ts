import {Injectable} from "@angular/core";
// import {Http, Headers} from "@angular/http";

// import "rxjs/add/operator/map";
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/toPromise";

// import enumsModule  = require('ui/enums')
// import fsModule = require("file-system");
// import bgHttpModule = require('nativescript-background-http')


let http = require('http');

// const BASE_URL = 'http://192.168.20.36/ExpensesRest/';
const BASE_URL = 'http://expensesrest.orenwebtest.com/';


@Injectable()
export class HttpService {

    constructor() {
    }

    users(){
        console.log(`${BASE_URL}users`);
        return http.getJSON(`${BASE_URL}users`);

    }

    upload(invoiceData) {

        return http.request({
            url: `${BASE_URL}/upload`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify(invoiceData)
        });
    }
}