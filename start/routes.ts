/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import CarController from '#controllers/CarsController'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

const carController = new CarController()
router.get('/cars', carController.index.bind(carController))
router.post('/cars', carController.store.bind(carController))
