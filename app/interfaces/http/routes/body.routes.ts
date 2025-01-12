import router from '@adonisjs/core/services/router'

import BodyController from '#controllers/body_controller'

const bodyController = new BodyController()

export function registerBodyRoutes(routerInstance: typeof router) {
  routerInstance.post('/body', bodyController.create.bind(bodyController))
  routerInstance.get('/body', bodyController.index.bind(bodyController))
  routerInstance.get('/body/:id', bodyController.show.bind(bodyController))
  routerInstance.put('/body/:id', bodyController.update.bind(bodyController))
  routerInstance.delete('/body/:id', bodyController.destroy.bind(bodyController))
}
