import { HttpService } from './http.service';
import { Injectable } from "@angular/core";
import { Api } from './../../config/api';
import { IInvoice } from './../../interfaces/IInvoice';
import { ICategory } from './../../interfaces/ICategory';

@Injectable()
export class ExpensesService {

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

    constructor(private httpSrv: HttpService) {
    }

    getUsers() {
        return this.httpSrv.get(Api.GET_USERS)

    }

    uploadInvoice() {
        return this.httpSrv.post(Api.ADD_INVOICE, this.expenseModel);
    }

    getExpensesTypes() {
        return this.httpSrv.get(Api.GET_EXPENCE_TYPES);
    }
}