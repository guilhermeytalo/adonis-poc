import vine from '@vinejs/vine'
import Car from '#models/cars'

export default class CarsController {
  public async index() {
    const cars = await Car.all()
    return cars
  }

  public async store({ request, response }: any) {
    const carSchema = vine.object({
      brand: vine.string(),
      model: vine.string(),
      year: vine.number().range([1900, 2100]),
      color: vine.string().optional(),
      plate: vine.string(),
    })

    const carData = request.only(['brand', 'model', 'year', 'color', 'plate'])

    try {
      const validatedData = await vine.validate({ data: carData, schema: carSchema })
      console.log(validatedData)
      const existingCar = await Car.findBy('plate', validatedData.plate)
      if (existingCar) {
        return response.conflict({ error: 'Car with this plate already exists' })
      }

      const car = await Car.create(validatedData)

      return response.created(car)
    } catch (error) {
      return response.badRequest({ error: error.messages || 'Validation failed' })
    }
  }
}
