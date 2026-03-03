import { db } from "../../config/db"
import { books } from "../../db/schema/books"
import { ilike } from "drizzle-orm"

export const searchbytitle = async (keyword : string) => {
    try {
        const result = await db 
        .select()
        .from(books)
        .where(ilike(books.title, `%${keyword}%`))
        .limit(10)

        return {
            status : "ok",
            data : result
        }
    } catch (err) {
        console.log("Error db", err)

        return {
            status : "error",
            message : String(err)
        }
    }
}