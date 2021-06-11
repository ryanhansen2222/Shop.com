'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PrepriceSchema extends Schema {
  up () {
    this.table('preprices', (table) => {
      // alter table
    })
  }

  down () {
    this.table('preprices', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PrepriceSchema
