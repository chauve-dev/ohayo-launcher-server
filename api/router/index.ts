import { Application } from 'express'
import ConfigRouter from './config.router'

export default (app: Application) => {
  app.use('/config', ConfigRouter)
}
