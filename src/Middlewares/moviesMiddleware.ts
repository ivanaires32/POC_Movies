import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

export function validationSchema(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validate = schema.validate(req.body, { abortEarly: false })

        if (validate.error) {
            const errors = validate.error.details.map(d => d.message)

            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors)
        }

        next()
    }
}