import React from "react";
import { Redirect } from "react-router";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getLogin() {
    return localStorage.getItem("login");
  }

  getPassword() {
    return localStorage.getItem("password");
  }

  render() {
    return (
      <div id="profile">
        {this.getLogin() === null ? <Redirect to="/sign-in" /> : ""}
        <h3>Профиль</h3>
        <br />
        <div>
          <p>
            <strong>Логин:</strong> {this.getLogin()}{" "}
          </p>
        </div>
        <div>
          <p>
            <strong>Пароль:</strong> {this.getPassword()}{" "}
          </p>
        </div>
        <br />
        <button
          onClick={() => {
            localStorage.clear();
            this.setState(() => {
              return {};
            });
          }}
        >
          Выйти
        </button>
      </div>
    );
  }
}
