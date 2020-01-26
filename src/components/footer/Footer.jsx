import React, { Component } from 'react';
import s from './Footer.module.css';

class Footer extends Component {
    render() {
      return (
        <div className={s.main}>
            <span class={s.info_1}>
              <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/menu-phone-social-icon-2.svg" align="middle"/>
              <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/menu-phone-social-icon-1.svg" align="middle"/>
              <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/menu-phone-social-icon-3.svg" align="middle"/>
              <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/menu-phone-social-icon-4.svg" align="middle"/>
              <span>Ближайшие СушиВесла</span>
            </span>
            <span className={s.info_2}>
              <span>Условия доставки</span>
              <span>Акции</span>
              <span>Новости</span>
              <span>Франшиза</span>
              <span>Вакансии</span>
              <span>Отзывы</span>
              <span>Политика обработки персональных данных</span>
              <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/master-card.svg"/>
              <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/visa.svg"/>
            </span>
        </div>
      )
    }
}

export default Footer;
