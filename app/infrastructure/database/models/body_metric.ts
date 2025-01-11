import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class BodyMetric extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: number

  @column()
  declare record_date: string

  @column()
  declare current_weight: number

  @column()
  declare target_weight: number

  @column()
  declare chest_size: number

  @column()
  declare waist_size: number

  @column()
  declare hip_size: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
