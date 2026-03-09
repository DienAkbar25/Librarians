import { Elysia } from "elysia";
import { searchbycategory } from "../../controllers/books/searchbycategory"

export const searchbycategoryroutes = new Elysia ()
    .get("api/books/searchbycategory", async ({ query }) => {
        const { keyword } = query

        if(!keyword) {
            return {
                status : "error",
                message : "need query"
            }
        } return await searchbycategory(keyword)
    }) 