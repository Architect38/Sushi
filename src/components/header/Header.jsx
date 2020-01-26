import React, { Component } from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <div className={s.main}>
          <NavLink className={s.redirect} to="/sushi">
            <img className={s.logo} src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/logo.png"/>
          </NavLink>
          <span className={s.info_1}>
              <div><span>Волгоград&#9660;</span><span>8-800-550-30-30</span></div>
              <div><span>Личный кабинет</span></div>
          </span>
          <span className={s.info_2}>
            <div><span>О компании</span><span>Условия доставки</span></div>
            <div><span>Пользовательское соглашение</span></div>
          </span>
          <button className={s.info_3}><span>Икринки&nbsp;</span><img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/egg.svg"/></button>
        </div>
      );
    }
}

export default Header;
