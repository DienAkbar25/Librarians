import { Elysia } from "elysia"
import { Get10books } from "../../controllers/books/get10books"

export const get10bookroutes = new Elysia ()
    .get("api/books/top10", async () => {
        return await Get10books()
    })

