export default class HealthController {
  public async index() {
    return { status: 'ok, Health' }
  }
}
