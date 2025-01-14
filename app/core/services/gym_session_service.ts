import GymSessionRepository from '#repositories/gym_session_repository'

export default class GymSessionService {
  private repository: GymSessionRepository

  constructor() {
    this.repository = new GymSessionRepository()
  }

  public async getAllSessions() {
    return this.repository.findAll()
  }

  public async createSession(data: any) {
    return this.repository.create(data)
  }

  public async getSessionById(id: number) {
    return this.repository.findById(id)
  }

  public async updateSession(id: number, data: any) {
    const gymSession = await this.repository.findById(id)
    return this.repository.update(gymSession, data)
  }

  public async deleteSession(id: number) {
    const gymSession = await this.repository.findById(id)
    await this.repository.delete(gymSession)
  }
}
