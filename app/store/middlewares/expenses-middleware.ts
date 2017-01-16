import {Injectable} from "@angular/core";
import {HTTP} from "../../shared/services/http-service";
import {EXPENSES_ACTIONS} from "../actions/expenses-actions";

@Injectable()
export class ExpensesMiddleware {
  private http: any;

  constructor(http: HTTP) {
    this.http = http;
  }

  public upload = state => next => (action) => {
    switch (action.type) {
      case EXPENSES_ACTIONS.UPLOAD:
        this.http.multipart('upload', action.payload, action.payload.invoice[0])
          .map(res => res.json())
          .subscribe(res => {
            debugger;
            next({
              type:EXPENSES_ACTIONS.SET_EXPENSES,
              payload:res.invoices
            });
          });
        break;
      default:
        return next(action);
    }
  };
}
