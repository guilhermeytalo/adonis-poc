import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class MealEntry extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: number

  @column()
  declare meal_date: string

  @column()
  declare meal_type: string

  @column()
  declare food_name: string

  @column()
  declare portion_size: number

  @column()
  declare portion_unit: string

  @column()
  declare calories: number

  @column()
  declare proteins: number

  @column()
  declare carbs: number

  @column()
  declare fats: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
