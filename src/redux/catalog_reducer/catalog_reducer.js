import {catalogAPI} from './../../api/api.js';


const set_products = 'src\\redux\\catalog_reducer.js\\set_products';
const change_preloader = 'src\\redux\\catalog_reducer.js\\change_preloader';
const change_current_category = 'src\\redux\\catalog_reducer.js\\change_current_category';

export const setProducts = (data) => ({type: set_products, data});
export const changePreloader = () => ({type:change_preloader});
export const changeCurrentCategory = (category) => ({type:change_current_category, category});

export const getProducts = (category)=>{
    return (dispatch)=>{
        dispatch(changePreloader());
        catalogAPI.getProducts(category).then(data=>{
            dispatch(setProducts(data));
            dispatch(changePreloader());
        });
    }
}

let initialState = {
  products: [],
  categories: ["Роллы","Комбо","Сеты","Сеты edition","Суши","Воки","Супы","Темпура","Десерт","Соусы","Напитки","Салаты",],
  currentCategory:"",
  preloader: false,
}

const catalogReducer = (state = initialState,action) => {
  switch(action.type){
    case set_products:
      return {
        ...state,
        products: action.data
      }
    case change_preloader:
      return {
        ...state,
        preloader: state.preloader===true?false:true
      }
    case change_current_category:
      return {
        ...state,
        currentCategory: action.category
      }
    default:
      return state;
  }
}

export default catalogReducer;
