import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meal_entries'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id')
      table.date('meal_date').notNullable()
      table.string('meal_type').notNullable()
      table.string('food_name').notNullable()
      table.decimal('portion_size').notNullable()
      table.string('portion_unit').notNullable()
      table.integer('calories').notNullable()
      table.decimal('proteins').notNullable()
      table.decimal('carbs').notNullable()
      table.decimal('fats').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
