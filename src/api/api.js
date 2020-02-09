import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": ""
    },
    baseURL: "https://sushi/api/1.0/"
});

export const catalogAPI = {
    async getProducts(category){
       //let response = await instance.get(`products?category=${category}`); делаем запрос на получение позиций
       //return response.data;

      //Далее идет имитация взаимодействия с сервером
      let image = process.env.PUBLIC_URL + `/temp/${category}.png`;
      const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
      const data = [
        {id:1,name:category,description:description,price:560,image:image},
        {id:2,name:category,description:description,price:560,image:image},
        {id:3,name:category,description:description,price:560,image:image},
        {id:4,name:category,description:description,price:560,image:image},
        {id:5,name:category,description:description,price:560,image:image},
        {id:6,name:category,description:description,price:560,image:image},
        {id:7,name:category,description:description,price:560,image:image},
        {id:8,name:category,description:description,price:560,image:image},
        {id:9,name:category,description:description,price:560,image:image},
        {id:10,name:category,description:description,price:560,image:image},
        {id:11,name:category,description:description,price:560,image:image},
        {id:12,name:category,description:description,price:560,image:image},
        {id:13,name:category,description:description,price:560,image:image},
        {id:14,name:category,description:description,price:560,image:image},
      ];
      return new Promise((resolve)=>{
        setTimeout(()=>resolve(data),500)
      });
    },
}
