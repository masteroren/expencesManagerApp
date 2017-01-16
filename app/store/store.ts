import {Injectable} from "@angular/core";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {AppReducer} from "./reducers/app-reducer";
import {ExpensesReducer} from "./reducers/expenses-reducer";
import {UserMiddleware} from "./middlewares/user-middleware";
import {ExpensesMiddleware} from "./middlewares/expenses-middleware";

@Injectable()
export class Store {
    private _store: any;

    constructor(userMW: UserMiddleware, expensesMW: ExpensesMiddleware) {
      this._store = createStore(
        combineReducers({
          user:AppReducer.reduce,
          expenses:ExpensesReducer.reduce
        }),
        applyMiddleware(userMW.call, expensesMW.upload)
      );
    }

    getState() {
        return this._store.getState();
    }

    dispatch(action: any) {
        // action.payload = Object.assign({}, action.payload);
        this._store.dispatch(action)
    }

    subscribe(cb) {
        return this._store.subscribe(cb)
    }
}
