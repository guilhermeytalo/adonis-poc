import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Cars extends BaseSchema {
  protected tableName = 'cars'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('brand').notNullable()
      table.string('model').notNullable()
      table.integer('year').notNullable()
      table.string('color').notNullable()
      table.string('plate').unique().notNullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
