// app/interfaces/http/routes/health.routes.ts
import router from '@adonisjs/core/services/router'

import HealthController from '#controllers/health_controller'

const healthController = new HealthController()

export function registerHealthRoutes(routerInstance: typeof router) {
  routerInstance.get('/health', healthController.index.bind(healthController))
}
