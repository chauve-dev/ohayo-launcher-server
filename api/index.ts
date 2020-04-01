import express, { Application } from 'express'
import router from './router'

/**
 * Configuring Express application
 */
const app: Application = express()

/**
 * Registering routes
 */
router(app)

/**
 * Export application for the NuxtJS serverMiddleware option
 */
export default {
  path: '/api',
  handler: app,
}
