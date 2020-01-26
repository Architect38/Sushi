import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './Catalog.module.css';
import {getProducts, changeCurrentCategory} from './../../redux/catalog_reducer/catalog_reducer.js';
import Product from './../product/Product.jsx';

class Catalog extends Component {
    constructor(props){
      super(props);
      this.changeCategory = this.changeCategory.bind(this);
    }
    changeCategory(e){
      this.props.changeCurrentCategory(e.currentTarget.dataset.id);
      this.props.getProducts(e.currentTarget.dataset.id);
    }
    componentDidMount(){
      this.props.getProducts(this.props.currentCategory);
    }
    render() {
      let products = this.props.products.map((item)=>{
        return <Product name={item.name} description={item.description} price={item.price} image={item.image}/>
      });
      let categories = this.props.categories.map((item)=>{
        return (
          <span data-id={item} className={item===this.props.currentCategory?s.active:s.noActive}onClick={(e)=>this.changeCategory(e)}>{item}</span>
        );
      });
      return (
        <div className={s.main}>
          <div className={s.menu}>
            {categories}
          </div>
          {
            this.props.preloader===true
              ? <div className={s.preloader}><img src={process.env.PUBLIC_URL +"/preloader.gif"}/></div>
              : <div className={s.products}>
                    {products}
                </div>
          }
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  products: state.catalogPage.products,
  preloader: state.catalogPage.preloader,
  categories: state.catalogPage.categories,
  currentCategory: state.catalogPage.currentCategory,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (category)=>dispatch(getProducts(category)),
  changeCurrentCategory: (category) => dispatch(changeCurrentCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
