import Joi from "joi";
import { movie } from "../utils/moviesUtils";

export const moviesSchema = Joi.object<movie>({
    name: Joi.string().min(3).required(),
    genero: Joi.string().valid("terror", "humor", "romantico", "ação", "suspense").required(),
    faixa_etaria: Joi.number().required()
})

export const moviesDeleteSchema = Joi.object({
    name: Joi.string().required()
})

export const movieUpdateSchema = Joi.object<movie>({
    name: Joi.string().required(),
    id: Joi.number().required(),
    genero: Joi.string().valid("terror", "humor", "romantico", "ação", "suspense").required(),
    faixa_etaria: Joi.number().required()
})