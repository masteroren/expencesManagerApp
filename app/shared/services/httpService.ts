import {Injectable} from "@angular/core";
import {IInvoice} from "../interfaces/IInvoice";
import {Http} from "@angular/http";

import 'rxjs'

// const BASE_URL = 'http://192.168.10.155:8080/';
const BASE_URL = 'http://212.143.128.217:9200/';

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    users() {
        return this.http.get(`${BASE_URL}users`);
            // .map(res => res.json());
    }

    upload(invoiceData: IInvoice) {
        return this.http.post(`${BASE_URL}upload`, invoiceData);
    }

    expensesTypes() {
        return this.http.get(`${BASE_URL}expTypes`);
    }
}