import {Injectable} from "@angular/core";
import {USER_ACTIONS} from "../actions/user-actions";


const initState = {
  user: {}
};

export const APP_ACTIONS = {
  'RESET_STATE': 'RESET_STATE'
};

@Injectable()
export class AppReducer {
  static reduce(state = initState.user, action: any): any {
    switch (action.type) {
      case APP_ACTIONS.RESET_STATE:
        // return Object.assign({}, initState);
      case USER_ACTIONS.LOGIN_SUCCESS:
        // return Object.assign({}, state,action.payload);
      case USER_ACTIONS.AUTH_RESULT:
        // return Object.assign({}, state,action.payload);
      default:
        return state;
    }
  }
}
