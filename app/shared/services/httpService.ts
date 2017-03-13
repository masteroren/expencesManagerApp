import {Injectable} from "@angular/core";
import {IInvoice} from "../interfaces/IInvoice";
let http = require('http');

const BASE_URL = 'http://192.168.10.155:8080/';

@Injectable()
export class HttpService {

    constructor() {
    }


    users(){
        console.log('Call url =>', `${BASE_URL}users`);
        return http.getJSON(`${BASE_URL}users`);
    }

    upload(invoiceData: IInvoice) {
        console.log('Call url =>', `${BASE_URL}upload`);
        return http.request({
            url: `${BASE_URL}upload`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify(invoiceData)
        });
    }
}