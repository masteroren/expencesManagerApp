import { Injectable } from "@angular/core";
import { Api } from './../../config/api';
import { IInvoice } from './../../interfaces/IInvoice';
import { ICategory } from './../../interfaces/ICategory';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { IEmployee } from "../../interfaces/IEmployee";

@Injectable()
export class DataService {

    public category: ICategory;
    public expenseModel: IInvoice = {
        empId: 0,
        empName: '',
        type: '',
        amount: 0,
        invoiceDate: 0,
        createDate: 0,
        image: ''
    };

    constructor(private http: HttpClient) {}

    getUsers(): Observable<IEmployee[]> {
        return this.http.get<IEmployee[]>(Api.GET_USERS)
    }

    uploadInvoice() {
        return this.http.post(Api.ADD_INVOICE, this.expenseModel);
    }

    getExpensesTypes() {
        return this.http.get(Api.GET_EXPENCE_TYPES);    }
}