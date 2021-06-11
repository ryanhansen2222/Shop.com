'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('welcome');

Route.get('cart', 'ShoppingCartController.home');
Route.get('products', 'ProductController.all');

Route.post('add', 'ProductController.add_to_cart');
Route.delete('delete', 'ProductController.delete');
Route.post('create', 'ProductController.create');
