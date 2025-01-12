export default class BodyController {
  public async create() {
    return { status: 'ok, Body created' }
  }

  public async index() {
    return { status: 'ok, Body index' }
  }

  public async show() {
    return { status: 'ok, Body show' }
  }

  public async update() {
    return { status: 'ok, Body updated' }
  }

  public async destroy() {
    return { status: 'ok, Body destroyed' }
  }
}
