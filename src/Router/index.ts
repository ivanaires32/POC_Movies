import { Router } from "express";
import { validationSchema } from "../Middlewares/moviesMiddleware";
import { movieUpdateSchema, moviesDeleteSchema, moviesSchema } from "../Schemas/moviesSchemas";
import moviesController from "../Controllers/movies.Controllers";

const moviesRouter = Router()

moviesRouter.get("/movies", moviesController.getMovies)
moviesRouter.post("/movies", validationSchema(moviesSchema), moviesController.postMovies)
moviesRouter.delete("/movies", validationSchema(moviesDeleteSchema), moviesController.deleteMovies)
moviesRouter.put("/movies", validationSchema(movieUpdateSchema), moviesController.updateMovie)

export default moviesRouter