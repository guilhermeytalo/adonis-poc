/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// Register all routes from the interfaces layer
// import router from '@adonisjs/core/services/router'
import { registerRoutes } from '../app/interfaces/http/routes/index.js'

registerRoutes()
