import router from '@adonisjs/core/services/router'
import GymSessionController from '#controllers/gym_controller'

const gymSessionController = new GymSessionController()

export function registerGymRoutes(routerInstance: typeof router) {
  routerInstance.get('/gym', gymSessionController.index.bind(gymSessionController))
  routerInstance.post('/gym', gymSessionController.store.bind(gymSessionController))
  routerInstance.get('/gym/:id', gymSessionController.show.bind(gymSessionController))
  routerInstance.put('/gym/:id', gymSessionController.update.bind(gymSessionController))
  routerInstance.delete('/gym/:id', gymSessionController.delete.bind(gymSessionController))
}
