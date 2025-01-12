import GymSession from '#models/gym_session'
import { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'

export default class GymSessionController {
  public async index({}: HttpContext) {
    const gymSessions = await GymSession.all()
    return {
      status: '200',
      data: gymSessions,
    }
  }

  public async store({ response, request }: HttpContext) {
    try {
      const gymData = request.only(['user_id', 'session_date', 'duration_minutes', 'notes'])

      if (!gymData.session_date) {
        return response.badRequest({ error: 'Missing Date' })
      }

      const gymSession = await GymSession.create(gymData)

      return { status: 'ok', gymSession }
    } catch (error) {
      console.log(error)
      logger.error(error)
      return response.status(400).send({ error: 'Error creating gym session' })
    }
  }

  public async show({ params, response }: HttpContext) {
    try {
      const gymSession = await GymSession.findOrFail(params.id)
      return { status: 'ok', gymSession }
    } catch (error) {
      return response.notFound({ error: 'Gym session not found' })
    }
  }

  public async update({ params, request, response }: HttpContext) {
    try {
      const gymSession = await GymSession.findOrFail(params.id)
      const data = request.only(['session_date', 'duration_minutes', 'notes'])

      gymSession.merge(data)
      await gymSession.save()

      return { status: 'ok', gymSession }
    } catch (error) {
      console.error(error)
      return response.internalServerError({ error: 'Unable to update gym session' })
    }
  }

  public async delete({ params, response }: HttpContext) {
    try {
      const gymSession = await GymSession.findOrFail(params.id)
      await gymSession.delete()

      return { status: 'ok', message: 'Gym session deleted successfully' }
    } catch (error) {
      return response.notFound({ error: 'Gym session not found' })
    }
  }
}
