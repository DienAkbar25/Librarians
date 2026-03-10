import { db } from "../../config/db";
import { eq } from "drizzle-orm";
import { books } from "../../db/schema/books";
import { booksgenre } from "../../db/schema/booksgenre";
import { genre } from "../../db/schema/genre";


export const genres = async (genrename:string) => {
try {
    const result = await db
        .select()
        .from(books)
        .innerJoin(booksgenre, eq(books.id_book, booksgenre.id_book))
        .innerJoin(genre, eq(books.id_book, booksgenre.id_book))
        .where(eq(genre.genre_name, genrename))

        return {
            status: "ok",
            data: result,
        }
    } catch (err) {
        console.log("Error Db", err)

        return {
            status: "error",
            message: String(err)
        }
    }
    
}