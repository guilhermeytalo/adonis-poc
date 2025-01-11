import { defineConfig } from '@adonisjs/core/app'

export default defineConfig({
  /*
  |--------------------------------------------------------------------------
  | Commands
  |--------------------------------------------------------------------------
  |
  | List of ace commands to register from packages. The application commands
  | will be scanned automatically from the "./commands" directory.
  |
  */
  commands: [() => import('@adonisjs/core/commands'), () => import('@adonisjs/lucid/commands')],

  /*
  |--------------------------------------------------------------------------
  | Directories
  |--------------------------------------------------------------------------
  |
  | Directories to load application files from. The directories array will be
  | registered with the application container and can be used to organize
  | your code.
  |
  */
  directories: {
    // Core layer
    entities: 'app/core/entities',
    domainRepositories: 'app/core/repositories', // Renamed to avoid conflict
    services: 'app/core/services',

    // Infrastructure layer
    models: 'app/infrastructure/database/models',
    repositories: 'app/infrastructure/database/repositories',
    infraServices: 'app/infrastructure/services',

    // Interface layer
    controllers: 'app/interfaces/http/controllers',
    middleware: 'app/interfaces/http/middleware',
    validators: 'app/interfaces/http/validators',
    routes: 'app/interfaces/http/routes',
    dtos: 'app/interfaces/dtos',

    // Application layer
    useCases: 'app/application/use-cases',
    errors: 'app/application/errors',

    // Default Adonis directories
    commands: 'commands',
    config: 'config',
    public: 'public',
    contracts: 'contracts',
    providers: 'providers',
    lang: 'lang',
    mails: 'app/mails',
    views: 'resources/views',
    start: 'start',
    tests: 'tests',
    tmp: 'tmp',
  },

  /*
  |--------------------------------------------------------------------------
  | Service providers
  |--------------------------------------------------------------------------
  |
  | List of service providers to import and register when booting the
  | application
  |
  */
  providers: [
    () => import('@adonisjs/core/providers/app_provider'),
    () => import('@adonisjs/core/providers/hash_provider'),
    {
      file: () => import('@adonisjs/core/providers/repl_provider'),
      environment: ['repl', 'test'],
    },
    () => import('@adonisjs/core/providers/vinejs_provider'),
    () => import('@adonisjs/cors/cors_provider'),
    () => import('@adonisjs/lucid/database_provider'),
    () => import('@adonisjs/session/session_provider'),
    () => import('@adonisjs/auth/auth_provider'),
  ],

  /*
  |--------------------------------------------------------------------------
  | Preloads
  |--------------------------------------------------------------------------
  |
  | List of modules to import before starting the application.
  |
  */
  preloads: [
    () => import('#start/routes'),
    () => import('#start/kernel'),
    // Corrected preload paths
    () => import('app/core/services'),
    () => import('app/application/use-cases'),
  ],

  /*
  |--------------------------------------------------------------------------
  | Tests
  |--------------------------------------------------------------------------
  |
  | List of test suites to organize tests by their type. Feel free to remove
  | and add additional suites.
  |
  */
  tests: {
    suites: [
      {
        files: ['tests/unit/**/*.spec(.ts|.js)'],
        name: 'unit',
        timeout: 2000,
      },
      {
        files: ['tests/functional/**/*.spec(.ts|.js)'],
        name: 'functional',
        timeout: 30000,
      },
    ],
    forceExit: false,
  },
})
