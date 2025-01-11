// app/interfaces/http/routes/index.ts
import router from '@adonisjs/core/services/router'

import { registerHealthRoutes } from '#routes/health.routes.js'
import { registerUserRoutes } from '#routes/user.routes.js'

// Import other route modules as needed

export function registerRoutes() {
  // Register all route modules
  registerHealthRoutes(router)
  registerUserRoutes(router)
  // Register other route modules

  return router
}
