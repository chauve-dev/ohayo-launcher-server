import express, { Application } from 'express'
import bodyParser from 'body-parser'
import router from './router'

/**
 * Configuring Express application
 */
const app: Application = express()

/**
 * Registering parsers
 */
app.use(bodyParser.json())

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
