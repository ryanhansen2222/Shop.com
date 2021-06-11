'use strict'

const Product = use('App/Models/Product')
const Database = use('Database')

class ProductController {


  async all({ request, response}){
        const page = request.input('page',1);
        const limit = 10;
        const allproduct = await Product.all();

        /*
        dict = {};
        for x in allproduct{
          dict[x.name = x];
        }

        return dict.toJSON();
        */

        return allproduct.toJSON();
  }


  async create({ request, response, session, auth, params }) {

    const product = request.all();

    const posted = await auth.user.product().create({
      name: product.name,
      quantity: 0


    })

    session.flash({ message: 'Your product has been created' });
    return 1;


  }

  async add_to_cart({request, response, session, auth, params}){
    const product = await Product.query().where('name', request.all().name).update({quantity: request.all().quantity});

    /*var pre = product.quantity;
    product["quantity"] = request.all().quantity;
    var post = product.quantity;

    //await product.save();
    session.flash({ message: 'Your cart has been updated. '});

    return [pre, post];
    */
    //return product;
    return '200 - Success - Cart Updated';

  }

// delete comment call
  async delete({ response, session, params}) {
    const product = await Product.query().where('name', request.all().name).update({quantity: 0});
    session.flash({ message: 'Comment deleted'});
    return '200 - Success - Item Removed from Cart';

  }


    async update ({ response, request, session, params }) {
    const comment = await Comment.find(params.id);

        comment.text = request.all().text;


        await comment.save();

        session.flash({ message: 'Your comment has been updated. '});
        //return response.route('VideoController.watch', { id: params.video_id });
        return response.redirect('back');
    }

}

module.exports = ProductController
