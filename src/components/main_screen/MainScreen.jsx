import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './MainScreen.module.css';

class MainScreen extends Component {
    render() {
      return (
        <div className={s.main}>
          <div className={s.a}>
            <img src="http://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/sets_desktop.png"/>
            <span>СЕТЫ</span>
          </div>
          <div className={s.b}>
            <div className={s.rolls}>
              <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/rolls_desktop.png" align="middle"/>
              <span>РОЛЛЫ</span>
            </div>
            <div className={s.sushi}>
              <span>СУШИ</span>
              <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/sushi_desktop.png" align="middle"/>
            </div>
            <div className={s.fried_rolls}>
              <div><img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/fried_rolls_desktop.png"/></div>
              <div>ЖАРЕНЫЕ<br/>РОЛЛЫ</div>
            </div>
          </div>
          <div className={s.c}>
            <div className={s.text_vok}>
              <div>ВОК</div>
              <div>КОНСТРУКТОР</div>
              <div>СОБЕРИ СВОЙ</div>
            </div>
            <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/wok_desktop.png"/>
          </div>
          <div className={s.d}>
            <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/soups_desktop.png"/>
            <div>СУПЫ</div>
          </div>
          <div className={s.e}>
            <div>
              <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/tempura_desktop.png"/>
              <div>ТЕМПУРА</div>
            </div>
            <div>
              <div>НАПИТКИ</div>
              <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/beverages_desktop.png"/>
            </div>
          </div>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => ({

  })

  const mapDispatchToProps = (dispatch) => ({

  })

  export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
