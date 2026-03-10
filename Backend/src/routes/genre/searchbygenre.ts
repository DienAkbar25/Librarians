import { Elysia } from "elysia";
import { genres } from "../../controllers/books/searchbygenre";

export const searchgenreroutes = new Elysia ()
    .get ("api/books/searchbygenre", async ({ query }) => {
        const { keyword } = query

        if(!keyword) {
            return {
                status: "error",
                message:"need query"
            }
        }
        return await searchbygenre(keyword)  
})