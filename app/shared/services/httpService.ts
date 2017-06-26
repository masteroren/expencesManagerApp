import {Injectable} from "@angular/core";
import {IInvoice} from "../interfaces/IInvoice";
import {Http} from "@angular/http";

// const BASE_URL = 'http://10.55.4.227:3000/';
const BASE_URL = 'http://212.143.128.217:9200/';

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    test() {
        return this.http.get(`${BASE_URL}test`);
    }

    users() {
        console.log(`${BASE_URL}users`);
        return this.http.get(`${BASE_URL}users`);
    }

    upload(invoiceData: IInvoice) {
        console.log(`${BASE_URL}upload`);
        console.log(JSON.stringify(invoiceData));
        return this.http.post(`${BASE_URL}upload`, invoiceData);
    }

    expensesTypes() {
        return this.http.get(`${BASE_URL}expTypes`);
    }
}