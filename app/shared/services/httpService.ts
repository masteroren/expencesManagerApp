import {Injectable} from "@angular/core";
import {IInvoice} from "../interfaces/IInvoice";
let http = require('http');

const BASE_URL = 'http://192.168.1.2:8080/';
// const BASE_URL = 'http://192.168.20.36/ExpensesRest/';
// const BASE_URL = 'http://expensesrest.orenwebtest.com/';


@Injectable()
export class HttpService {

    constructor() {
    }

    users(){
        return http.getJSON(`${BASE_URL}users`);
    }

    upload(invoiceData: IInvoice) {
        return http.request({
            url: `${BASE_URL}upload`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify(invoiceData)
        });
    }
}