import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const { Pool } = pg
const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123456",
    database: "moveisDB"
});

export default connection