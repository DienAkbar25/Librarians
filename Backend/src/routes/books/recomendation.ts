import { Elysia } from "elysia"
import { book } from "../../controllers/books/recomendation"

export const recomendation = new Elysia ()
    .get("api/books/top10", async () => {
        return await book()
    })

