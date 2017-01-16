"use strict";
var core_1 = require("@angular/core");
var user_actions_1 = require("../actions/user-actions");
var initState = {
    user: {}
};
exports.APP_ACTIONS = {
    'RESET_STATE': 'RESET_STATE'
};
var AppReducer = (function () {
    function AppReducer() {
    }
    AppReducer.reduce = function (state, action) {
        if (state === void 0) { state = initState.user; }
        switch (action.type) {
            case exports.APP_ACTIONS.RESET_STATE:
            // return Object.assign({}, initState);
            case user_actions_1.USER_ACTIONS.LOGIN_SUCCESS:
            // return Object.assign({}, state,action.payload);
            case user_actions_1.USER_ACTIONS.AUTH_RESULT:
            // return Object.assign({}, state,action.payload);
            default:
                return state;
        }
    };
    AppReducer = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppReducer);
    return AppReducer;
}());
exports.AppReducer = AppReducer;
//# sourceMappingURL=app-reducer.js.map