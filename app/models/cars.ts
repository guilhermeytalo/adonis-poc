import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Car extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public brand!: string

  @column()
  public model!: string

  @column()
  public year!: number

  @column()
  public color!: string

  @column()
  public plate!: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
