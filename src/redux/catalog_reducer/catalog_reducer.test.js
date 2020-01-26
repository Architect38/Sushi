import catalogReducer, {setProducts, changePreloader} from './catalog_reducer.js';

let state = {
  products: [

  ],
  preloader: false,
}

test('preloader should be changed', () => {
  const newState = catalogReducer(state, changePreloader());
  expect(newState.preloader).toBe(true);
});

test('products should be added', () => {
  const products =  [
    { id: 1, name: "test1", description: "d1" },
    { id: 2, name: "test2", description: "d2" }
  ];
  const newState = catalogReducer(state, setProducts(products));
  expect(newState.products.length).toBe(2);
});
