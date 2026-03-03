import { db } from "../../config/db"
import { books } from "../../db/schema/books"
import { desc } from "drizzle-orm"


export const Get10books = async () => {
try {
    const result = await db 
        .select()
        .from(books)
        .orderBy(desc(books.publication_date))
        .limit(10)

    return {
        status : "ok",
        data : result,
    }
} catch (err) {
    console.log("Error Db", err)

    return {
        status : "error",
        message : String(err),
        
        }
    }   
}