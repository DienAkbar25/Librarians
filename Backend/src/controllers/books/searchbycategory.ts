import { db } from "../../config/db";
import { eq } from "drizzle-orm";
import { categories } from "../../db/schema/categories";
import { books } from "../../db/schema/books";
import { bookcategory } from "../../db/schema/bookcategory";


export const searchbycategory = async ( categoryname : string) => {
try {
    const result = await db
        .select()
        .from(books)
        .innerJoin(bookcategory, eq(books.id_book, bookcategory.id_category))
        .innerJoin(categories, eq(bookcategory.id_category, categories.id_category))
        .where(eq(categories.category_name, categoryname))

        return {
            status : "ok",
            data : result,
        }

    } catch (err){
        console.log("Error Db", err);

            return {
                status : "error",
                message: String(err)
         
        }
    }
    
}