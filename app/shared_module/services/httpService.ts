import { Api } from './../../config/api';
import {Injectable} from "@angular/core";
import {IInvoice} from "./../../interfaces/IInvoice";
import {Http} from "@angular/http";

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    users() {
        return this.http.get(Api.GET_USERS);
    }

    upload(invoiceData: IInvoice) {
        return this.http.post(Api.ADD_INVOICE, invoiceData);
    }

    expensesTypes() {
        return this.http.get(Api.GET_EXPENCE_TYPES);
    }
}