import { Elysia } from "elysia"
import { title } from "../../controllers/books/title"

export const title = new Elysia ()
    .get ("api/books/searchbytitle", async ({ query }) => {
        const { keyword } = query;

        if(!keyword) {
            return {
                status : "error",
                message : "need query"
            }
        }
        return await title(keyword);

    })  