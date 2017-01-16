import {Injectable} from "@angular/core";
import {HTTP} from "../../shared/services/http-service";
import {USER_ACTIONS} from "../actions/user-actions";
import {Router} from "@angular/router";
import {APP_ACTIONS} from "../reducers/app-reducer";

@Injectable()
export class UserMiddleware {
  private http: any;
  private router: any;

  constructor(http: HTTP, router: Router) {
    this.http = http;
    this.router = router;
  }

  private redirect() {
    if (this.router.url !== '/login') {
      this.router.navigate(['login']);
    }
  }


  public call = state => next => (action) => {
    switch (action.type) {
      case USER_ACTIONS.LOGIN:
        this.http.get(action.type, action.payload)
          .map(res => res.json())
          .do(data => localStorage.setItem('user', JSON.stringify({token: data.user.token})))
          .subscribe(data => {
            next({
              type: USER_ACTIONS.LOGIN_SUCCESS,
              payload: data.user
            });
          });
        break;
      case USER_ACTIONS.AUTH:
        this.http.get('auth', action.payload)
          .map(res => res.json())
          .subscribe(data => {
            next({
              type: USER_ACTIONS.AUTH_RESULT,
              payload: data
            });
          }, () => {
            next({
              type: USER_ACTIONS.AUTH_RESULT
            });
          });
        break;
      case USER_ACTIONS.LOGOUT:
        next({
          type: APP_ACTIONS.RESET_STATE
        });
        this.redirect();
        break;
      default:
        return next(action);
    }

  };
}
