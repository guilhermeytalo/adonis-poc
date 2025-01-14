import { GymSessionDTO } from '#interfaces/dtos/gym_session_dto'
import GymSession from '#models/gym_session'

export default class GymSessionRepository {
  public async findAll() {
    return GymSession.all()
  }

  public async findById(id: number) {
    return GymSession.findOrFail(id)
  }

  public async create(data: GymSessionDTO) {
    return GymSession.create(data)
  }

  public async update(gymSession: GymSession, data: Partial<GymSession>) {
    gymSession.merge(data)
    await gymSession.save()
    return gymSession
  }

  public async delete(gymSession: GymSession) {
    await gymSession.delete()
  }
}
