import React from "react";

export default class SignInPage extends React.Component {
  signIn() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    let userLogin = localStorage.getItem("login");
    let userPassword = localStorage.getItem("password");

    if (login === "") alert("Введите логин");
    else if (password === "") alert("Введите пароль");
    else if (userLogin === null && userPassword === null) {
      localStorage.setItem("login", login);
      localStorage.setItem("password", password);
      alert("Вы вошли");
    } else alert("Вы уже вошли");
  }

  render() {
    return (
      <div id="sign-form">
        <h3>Вход</h3>
        <br />
        <label>Логин</label>
        <br />
        <input type="text" id="login" />
        <br />
        <br />
        <label>Пароль</label>
        <br />
        <input type="password" id="password" />
        <br />
        <br />
        <button onClick={() => this.signIn()} id="sign-in">
          Войти
        </button>
      </div>
    );
  }
}
