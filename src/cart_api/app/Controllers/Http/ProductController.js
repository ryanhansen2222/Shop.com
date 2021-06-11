'use strict'

const Product = use('App/Models/Product')
const Database = use('Database')

class ProductController {


  async all({ request, response}){
        const page = request.input('page',1);
        const limit = 10;
        const allproduct = await Product.all();

        return allproduct.toJSON();
  }


  async create({ request, response, session, auth, params }) {

    const product = request.all();

    const productID = await Database.table('products').insert({
      name: product.name,
      quantity: 0
    })
    //session.flash({ message: 'Your product has been created' });
    var message = '200 - New product "' + product.name + '" created';
    return message;
  }


  //Modify cart product quantity to X
  async add_to_cart({request, response, session, auth, params}){
    const product = await Product.query().where('name', request.all().name).update({quantity: request.all().quantity});

    //If product does not eist in database, we return error code 409, otherwise success
    if(product == 0){//Query did not execute
        return '409 - Failure - ' + product.name + ' Does not exist in DB';


    }else{
        return '200 - Success - ' + product.name + ' has been updated';
    }


  }

// delete product from cart
  async delete({ request, response}) {
    const product = await Product.query().where('name', request.all().name).update({quantity: 0});
    //session.flash({ message: 'Comment deleted'});
    return '200 - Success - ' + product.name + ' removed from Cart';

  }

}

module.exports = ProductController
