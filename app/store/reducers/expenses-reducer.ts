import {Injectable} from "@angular/core";
import {EXPENSES_ACTIONS} from "../actions/expenses-actions";

const initState = {
  expenses: [],

};

@Injectable()
export class ExpensesReducer {
  static reduce(state = initState.expenses, action: any): any {
    switch (action.type) {
      case EXPENSES_ACTIONS.SET_EXPENSES:
        // return Object.assign([], state, action.payload);
      default:
        return state;
    }
  }
}
