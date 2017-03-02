import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";

import enumsModule  = require('ui/enums')
import fsModule = require("file-system");
import bgHttpModule = require('nativescript-background-http')

// const BASE_URL = 'http://192.168.10.70/ExpensesRest/';
const BASE_URL = 'http://expensesrest.orenwebtest.com/';

@Injectable()
export class HttpService {
    constructor(private http: Http) {
    }

    users(){
        return this.http.get(`${BASE_URL}users`)
            .map(res => res.json());
    }

    // login(phone, password) {
    //     console.log('login=>', `${BASE_URL}/login/phone/${phone}/password/${password}`);
    //     return this.http.get(`${BASE_URL}/login/phone/${phone}/password/${password}`).map(res => res.json());
    // }
    //
    // auth(token) {
    //     console.log('auth=>', `${BASE_URL}/auth/${token}`);
    //     return this.http.get(`${BASE_URL}/auth/${token}`).map(res => res.json());
    // }

    upload(invoiceData) {
        return this.http.post(`${BASE_URL}/upload`, invoiceData)
            .map(res => res.json());
    }

    multipart(payload: any = {}, file: any): any {
        let params = new FormData();
        for (let key in payload) {
            params.append(key, payload[key]);
        }
        params.append("file", file);

        let headers = new Headers();

        headers.append('Content-Type', 'multipart/form-data');
        console.log(params);
        return this.http.post(`${BASE_URL}/upload`, params, headers);
    }
}