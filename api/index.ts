import express, { Application } from 'express'

/**
 * Configuring Express application
 */
const app: Application = express()

/**
 * Export application for the NuxtJS serverMiddleware option
 */
export default {
  path: '/api',
  handler: app,
}
