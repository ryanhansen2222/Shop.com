'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.timestamps()
      table.integer('quantity')
      table.string('name')
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
