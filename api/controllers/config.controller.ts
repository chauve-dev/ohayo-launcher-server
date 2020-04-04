import { Request, Response } from 'express'
import Joi, { ValidationResult } from '@hapi/joi'

async function install(req: Request, res: Response) {
  const schema = Joi.object({
    admin_name: Joi.string().max(50).required(),
    admin_password: Joi.string().max(150).required(),
    admin_confirmation: Joi.ref('admin_password'),
    db_name: Joi.string().required(),
    db_type: Joi.string().valid('mysql', 'sqlite', 'psql', 'mssql').required(),
    db_host: Joi.string(),
    db_user: Joi.string(),
    db_password: Joi.string(),
  })

  const { error }: ValidationResult = await schema.validate(req.body, {
    abortEarly: false,
  })

  if (error) {
    const formatedErrors: any = {}

    for (const e of error.details) {
      formatedErrors[e.path[0]] = {
        message: e.message,
        errorKey: `error.validation.${e.type.replace(/\./g, '_')}`,
      }
    }

    return res.status(400).send({
      errors: formatedErrors,
    })
  }

  res.send({
    success: true,
  })
}

export default {
  install,
}
