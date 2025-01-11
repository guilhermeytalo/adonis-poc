import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'body_metrics'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id')
      table.date('record_date').notNullable()
      table.decimal('current_weight').notNullable()
      table.decimal('target_weight').notNullable()
      table.decimal('chest_size').notNullable()
      table.decimal('waist_size').notNullable()
      table.decimal('hip_size').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
