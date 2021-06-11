const cart_endpoint = "https://localhost:3333/cart";
const products_endpoint = "https://localhost:3333/products";
const fetch = require("node-fetch");

const { BasePresenter } = require('edge.js');

class ApiCaller extends BasePresenter {



  async getCart(){
    var x = await fetch(cart_endpoint)
        .then((response) => response.json())
        .then((responseJSON) => {
           return responseJSON;
        });

    //return 2;

  }

  async getProducts(){
    const response = await fetch(products_endpoint).then(response => response.json());
    return response;
  }

}

module.exports = ApiCaller
