import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";

const BASE_URL = 'http://expensesrest.orenwebtest.com';

@Injectable()
export class HttpService {
    constructor(private http: Http) {
    }

    login(phone, password) {
        console.log('login=>', `${BASE_URL}/login/phone/${phone}/password/${password}`);
        return this.http.get(`${BASE_URL}/login/phone/${phone}/password/${password}`).map(res => res.json());
    }

    auth(token) {
        console.log('auth=>', `${BASE_URL}/auth/${token}`);
        return this.http.get(`${BASE_URL}/auth/${token}`).map(res => res.json());
    }

    upload(invoiceData) {
        console.log('upload=>', `${BASE_URL}/upload`, JSON.stringify(invoiceData));
        return this.http.post(`${BASE_URL}/upload`, invoiceData).map(res => res.json());
    }

    // multipart(method: string, payload: any = {}, file: any): any {
    //     let params = new FormData();
    //     params.append("file", file);
    //     for (let key in payload) {
    //         params.append(key, payload[key]);
    //     }
    //     let headers = new Headers();
    //
    //     headers.append('Content-Type', 'multipart/form-data');
    //     return this.http.post(`${BASE_URL}/${method}`, params, headers);
    // }
}