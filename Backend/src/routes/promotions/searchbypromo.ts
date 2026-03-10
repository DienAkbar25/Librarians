import { Elysia } from "elysia"
import { promotion } from "../../controllers/books/searchbypromo" 

export const searchbypromoroutes = new Elysia ()
    .get("api/promo/searchbypromo", async ({ query }) => {
        const { keyword } = query 

        if(!keyword){
            return {
                status: "error",
                message: "need query"
            }
        } return await promotion(keyword)
        
    })