'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShoppingCartSchema extends Schema {
  up () {
    this.create('shopping_carts', (table) => {
      table.increments()
      table.timestamps()
      table.string('username', 80).notNullable().unique()
    })
  }

  down () {
    this.drop('shopping_carts')
  }
}

module.exports = ShoppingCartSchema
