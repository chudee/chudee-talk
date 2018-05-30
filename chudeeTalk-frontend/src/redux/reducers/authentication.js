import * as types from "../actions/types";

const initialState = {
  login: {
    status: "INIT"
  },
  status: {
    valid: false,
    isLoggedIn: false,
    currentUser: ""
  }
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_LOGIN:
      return {
        login: {
          status: "WAITING"
        },
        ...state
      };

    case types.AUTH_LOGIN_SUCCESS:
      return {
        login: {
          status: "SUCCESS"
        },
        status: {
          isLoggedIn: true,
          currentUser: action.username
        },
        ...state
      };
    case types.AUTH_LOGIN_FAILURE:
      return {
        login: {
          status: "FAILURE"
        },
        ...state
      };

    default:
      return state;
  }

  return state;
}
