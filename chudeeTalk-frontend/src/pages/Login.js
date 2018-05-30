import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginRequest } from "../redux/actions/authentication";

const Test1 = styled.div`
  flex: 1;
`;
const Test2 = styled.div`
  flex: 1;
  flex-direction: column;
  margin: 3rem;
`;
const Test3 = styled.div`
  flex: 1;
`;
const InputWrapper = styled.input`
  border: none;
  outline: 0;
  padding: 1rem;
  height: 1.5rem;
  display: block;
`;

const ButtonWrapper = styled.button`
  outline: 0;
  background-color: rgba(255, 255, 255, 0.9);
  margin-top: 0.5rem;
  height: 3rem;
  border: 1px solid #aaa;
  border-right: 1rem;
`;

import { LoginWrapper } from "../components/wrapper";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleClickLogin = e => {
    return this.props
      .loginRequest(this.state.username, this.state.password)
      .then(() => {
        if (this.props.status === "SUCCESS") {
          let loginData = {
            isLoggedIn: true,
            username: id
          };

          document.cookie = "key=" + btoa(JSON.stringify(loginData));

          this.props.history.push("/");
        } else {
          return false;
        }
      });
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { match } = this.props;
    const { username, password } = this.state;

    return (
      <LoginWrapper>
        <Test1 />
        <Test2>
          <InputWrapper
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <InputWrapper
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <ButtonWrapper onClick={this.handleClickLogin}>로그인</ButtonWrapper>
        </Test2>
        <Test3>
          <button>asd</button>
          <button>asdasd</button>
        </Test3>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.authentication.login.status
  };
};

const mapDispatchToProps = dispatch => ({
  loginRequest: bindActionCreators(loginRequest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
