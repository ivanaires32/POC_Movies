import { Request, Response } from "express";
import httpStatus from "http-status";
import moviesServices from "../Services";
import { movie } from "../utils/moviesUtils";

async function getMovies(req: Request, res: Response) {
    try {
        const result = await moviesServices.getMovies()

        res.status(httpStatus.CREATED).send(result)
    } catch (err) {
        console.log(err.message)
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

async function postMovies(req: Request, res: Response) {
    const { name, genero, faixa_etaria } = req.body as movie
    try {

        await moviesServices.postMovies(name, genero, faixa_etaria)

        res.sendStatus(httpStatus.CREATED)
    } catch (error) {
        if (error.type === "Conflit") {
            return res.status(httpStatus.CONFLICT).send(error.message)
        }
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

async function deleteMovies(req: Request, res: Response) {
    const { name } = req.body
    try {
        await moviesServices.deleteMovies(name)
        res.sendStatus(httpStatus.OK)
    } catch (err) {
        if (err.type === "notFound") {
            return res.status(httpStatus.NOT_FOUND).send(err.message)
        }
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

async function updateMovie(req: Request, res: Response) {
    const { id, name, genero, faixa_etaria } = req.body
    try {
        const test = await moviesServices.updateMovie(id, name, genero, faixa_etaria)
        res.status(httpStatus.OK).send(test.rows[0])
    } catch (err) {
        if (err.type === "notFound") {
            return res.status(httpStatus.NOT_FOUND).send(err.message)
        }
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

const moviesController = {
    postMovies,
    getMovies,
    deleteMovies,
    updateMovie
}

export default moviesController