import * as types from "./types";
import axios from "axios";

export function loginRequest(username, password) {
  return dispatch => {
    dispatch(login());

    return axios
      .post("/api/account/login", { username, password })
      .then(res => {
        dispatch(loginSuccess(username));
      })
      .catch(e => {
        dispatch(loginFailure());
      });
  };
}

export function login() {
  return {
    type: types.AUTH_LOGIN
  };
}

export function loginSuccess(username) {
  return {
    type: types.AUTH_LOGIN_SUCCESS,
    username
  };
}

export function loginFailure() {
  return {
    type: types.AUTH_LOGIN_FAILURE
  };
}
