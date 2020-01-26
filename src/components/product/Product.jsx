import React, { Component } from 'react';
import s from './Product.module.css';

class Product extends Component {
    render() {
      return (
          <div className={s.main}>
            <div className={s.a}>
              <img src={this.props.image}/>
            </div>
            <div className={s.b}>
              <div>{this.props.name}</div>
              <div>
                {this.props.description}
              </div>
            </div>
            <div className={s.c}>
              <div>
                <span>{this.props.price}р</span>
                <button>В КОРЗИНУ</button>
              </div>
            </div>
          </div>
      )
    }
}

export default Product;
