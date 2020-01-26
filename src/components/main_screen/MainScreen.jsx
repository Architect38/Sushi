import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './MainScreen.module.css';
import { NavLink } from 'react-router-dom';
import {changeCurrentCategory} from './../../redux/catalog_reducer/catalog_reducer.js';

class MainScreen extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <NavLink className={s.redirect} to="/Sushi/catalog">
        <div className={s.main}>
            <div onClick={()=>this.props.changeCurrentCategory("Сеты")} className={s.a}>
                <img src="http://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/sets_desktop.png"/>
                <span>СЕТЫ</span>
            </div>
            <div className={s.b}>
                <div onClick={()=>this.props.changeCurrentCategory("Роллы")} className={s.rolls}>
                    <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/rolls_desktop.png" align="middle"/>
                    <span>РОЛЛЫ</span>
                </div>
                <div onClick={()=>this.props.changeCurrentCategory("Суши")} className={s.sushi}>
                  <span>СУШИ</span>
                  <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/sushi_desktop.png" align="middle"/>
                </div>
                <div onClick={()=>this.props.changeCurrentCategory("Роллы")} className={s.fried_rolls}>
                  <div><img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/fried_rolls_desktop.png"/></div>
                  <div>ЖАРЕНЫЕ<br/>РОЛЛЫ</div>
                </div>
            </div>
              <div onClick={()=>this.props.changeCurrentCategory("Воки")} className={s.c}>
                <div className={s.text_vok}>
                  <div>ВОК</div>
                  <div>КОНСТРУКТОР</div>
                  <div>СОБЕРИ СВОЙ</div>
                </div>
                <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/wok_desktop.png"/>
              </div>
              <div onClick={()=>this.props.changeCurrentCategory("Супы")} className={s.d}>
                <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/soups_desktop.png"/>
                <div>СУПЫ</div>
              </div>
            <div className={s.e}>
              <div onClick={()=>this.props.changeCurrentCategory("Темпура")}>
                <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/tempura_desktop.png"/>
                <div>ТЕМПУРА</div>
              </div>
              <div onClick={()=>this.props.changeCurrentCategory("Напитки")}>
                <div>НАПИТКИ</div>
                <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/index/beverages_desktop.png"/>
              </div>
            </div>
        </div>
        </NavLink>
      )
    }
  }

  const mapStateToProps = (state) => ({
    currentCategory: state.catalogPage.currentCategory,
  })

  const mapDispatchToProps = (dispatch) => ({
    changeCurrentCategory: (category) => dispatch(changeCurrentCategory(category))
  })

  export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
