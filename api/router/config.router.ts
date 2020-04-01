import { Router, Response } from 'express'

const router = Router()

router.get('/', (_, res: Response) => {
  return res.status(200).send({})
})

export default router
