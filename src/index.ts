import express from "express";
import "express-async-errors"
import moviesRouter from "@/Router";

const app = express()

app.use(express.json())
app.get("/health", (req, res) => {
    res.send("Estou vivo")
})

app.use(moviesRouter)

const port = Number(process.env.PORT) || 5000

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))