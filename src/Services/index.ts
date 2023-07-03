import moviesRepository from "@/Repository";
import { confiltName, notFound } from "@/Errors/moviesErrors";

async function getMovies() {
    const result = await moviesRepository.getMovies()

    return result.rows
}

async function postMovies(name: string, genero: string, faixa_etaria: number) {
    const result = await moviesRepository.postMovies(name, genero, faixa_etaria)
    if (result !== "ok") {
        throw confiltName()
    }
    return result
}

async function deleteMovies(name: string) {
    const result = await moviesRepository.deleteMovie(name)
    if (result.rowCount <= 0) throw notFound()
    return result
}

async function updateMovie(id: number, name: string, genero: string, faixa_etaria: number) {
    const result = await moviesRepository.updateMovie(id, name, genero, faixa_etaria)
    if (result.rowCount === 0) throw notFound()

    return result
}

const moviesServices = {
    getMovies,
    postMovies,
    deleteMovies,
    updateMovie
}

export default moviesServices