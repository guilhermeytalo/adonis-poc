import { HttpContext } from '@adonisjs/core/http'
import GymSessionService from '#services/gym_session_service'
import { gymSessionSchema } from '#validators/gym_session_validator'

export default class GymSessionController {
  private service: GymSessionService

  constructor() {
    this.service = new GymSessionService()
  }

  public async index({}: HttpContext) {
    const gymSessions = await this.service.getAllSessions()
    return { status: '200', data: gymSessions }
  }

  public async store({ request, response }: HttpContext) {
    try {
      const gymData = await request.validate({ schema: gymSessionSchema })
      const gymSession = await this.service.createSession(gymData)
      return { status: 'ok', gymSession }
    } catch (error) {
      return response.badRequest({ error: error.messages || 'Validation error' })
    }
  }

  public async show({ params, response }: HttpContext) {
    try {
      const gymSession = await this.service.getSessionById(params.id)
      return { status: 'ok', gymSession }
    } catch {
      return response.notFound({ error: 'Gym session not found' })
    }
  }

  public async update({ params, request, response }: HttpContext) {
    try {
      const data = await request.validate({ schema: gymSessionSchema })
      const gymSession = await this.service.updateSession(params.id, data)
      return { status: 'ok', gymSession }
    } catch (error) {
      return response.internalServerError({ error: 'Unable to update gym session' })
    }
  }

  public async delete({ params, response }: HttpContext) {
    try {
      await this.service.deleteSession(params.id)
      return { status: 'ok', message: 'Gym session deleted successfully' }
    } catch {
      return response.notFound({ error: 'Gym session not found' })
    }
  }
}
