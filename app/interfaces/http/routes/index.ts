// app/interfaces/http/routes/index.ts
import router from '@adonisjs/core/services/router'
import { registerHealthRoutes } from './health.routes.js' // Use relative path
import { registerUserRoutes } from './user.routes.js' // Use relative path

export function registerRoutes() {
  registerHealthRoutes(router)
  registerUserRoutes(router)
  return router
}
