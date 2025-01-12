import router from '@adonisjs/core/services/router'
import { registerHealthRoutes } from './health.routes.js'
import { registerUserRoutes } from './user.routes.js'
import { registerGymRoutes } from './gym.routes.js'

export function registerRoutes() {
  registerHealthRoutes(router)
  registerUserRoutes(router)
  registerGymRoutes(router)

  router.get('/', async () => {
    return { status: 'ok' }
  })

  return router
}
