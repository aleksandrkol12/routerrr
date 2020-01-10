import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <ul id="nav">
        <li>
          <Link to="/">Главная </Link>
        </li>
        <li>
          <Link to="/sign-in">Регистрация</Link>
        </li>
        <li>
          <Link to="/profile">Профиль</Link>
        </li>
      </ul>
    );
  }
}
