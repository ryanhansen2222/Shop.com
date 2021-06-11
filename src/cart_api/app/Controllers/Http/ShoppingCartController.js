'use strict'

const Product = use('App/Models/Product')
const Database = use('Database')

class ShoppingCartController {

  async home({request, view}){

    const page = request.input('page',1);
    const limit = 10;
    const cart = await Database.table('products').where('quantity', '>', 0);
    return cart;



  }

}

module.exports = ShoppingCartController
