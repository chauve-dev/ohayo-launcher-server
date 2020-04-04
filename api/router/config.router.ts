import { Router, Response } from 'express'
import ConfigController from '../controllers/config.controller'

const router = Router()

router.get('/', (_, res: Response) => {
  return res.status(200).send({})
})

router.post('/install', ConfigController.install)

export default router
