import router from '@adonisjs/core/services/router'
import { MiddlewareFn } from '@adonisjs/core/types/http'

import UserController from '#controllers/user_controller'
import AuthMiddleware from '#middleware/auth_middleware'

const userController = new UserController()

export function registerUserRoutes(routerInstance: typeof router) {
  routerInstance.group(() => {
    routerInstance.get('users', userController.index.bind(userController))
    routerInstance.post('users', userController.store.bind(userController))
    routerInstance.get('users/:id', userController.show.bind(userController))
    routerInstance.put('users/:id', userController.update.bind(userController))
    routerInstance
      .delete('users/:id', userController.destroy.bind(userController))
      .middleware([AuthMiddleware as unknown as MiddlewareFn])
    // .middleware(['auth']) 
  })
}
