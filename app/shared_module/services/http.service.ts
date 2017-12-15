import { Api } from './../../config/api';
import { Injectable } from "@angular/core";
import { IInvoice } from "./../../interfaces/IInvoice";
import { Http } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    get(url: string) {
        return this.http.get(url).map(r => r.json());
    }

    post(url: string, payload?: any) {
        return this.http.post(Api.ADD_INVOICE, payload).map(r => r.json());
    }
}