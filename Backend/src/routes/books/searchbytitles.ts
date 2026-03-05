import { Elysia } from "elysia"
import { searchbytitle } from "../../controllers/books/searchbytitle"

export const searchbytitleroutes = new Elysia ()
    .get ("api/books/searchbytitle", async ({ query }) => {
        const { keyword } = query;

        if(!keyword) {
            return {
                status : "error",
                message : "need query"
            }
        }
        return await searchbytitle(keyword);

    })  