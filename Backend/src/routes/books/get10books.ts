import { Elysia } from "elysia"
import { Get10books } from "../../controllers/books/get10books"

export const bookroutes = new Elysia ()
    .get("api/books/top10", async () => {
        return await Get10books()
    })

