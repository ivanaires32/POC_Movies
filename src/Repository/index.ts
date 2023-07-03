import connection from "../Database"
import { movie } from "../utils/moviesUtils"

async function getMovies() {
    const query = `
        SELECT * FROM movies
    `
    const result = await connection.query<movie>(query)

    return result
}

async function postMovies(name: string, genero: string, faixa_etaria: number) {

    const nameRepeated = await connection.query(`
        SELECT * FROM movies
        WHERE name=$1
    `, [name])

    if (nameRepeated.rowCount >= 1) return nameRepeated
    const query = `
        INSERT INTO movies (name, genero, faixa_etaria) VALUES ($1, $2, $3)
    `
    await connection.query(query, [name, genero, faixa_etaria])

    return "ok"
}

async function deleteMovie(name: string) {
    const query = `
        DELETE FROM movies
        WHERE name=$1
    `

    const deleteMovie = await connection.query(query, [name])

    return deleteMovie
}

async function updateMovie(id: number, name: string, genero: string, faixa_etaria: number) {
    const query = `
        UPDATE movies SET name = $2, genero = $3, faixa_etaria = $4
        WHERE id=$1
    `

    const update = await connection.query(query, [id, name, genero, faixa_etaria])

    return update
}

const moviesRepository = {
    getMovies,
    postMovies,
    deleteMovie,
    updateMovie
}

export default moviesRepository