import { books } from "../../db/schema/books";
import { promotions } from "../../db/schema/promotions";
import { bookpromo } from "../../db/schema/bookpromo";
import { db } from "../../config/db";
import { eq } from "drizzle-orm";

export const promotion = async (promoname : string) => {
    try {
        const result = await db
            .select()
            .from(books)
            .innerJoin(bookpromo ,eq(books.id_book, bookpromo.id_book))
            .innerJoin(promotions, eq(bookpromo.id_promo, promotions.id_promo))
            .where(eq(promotions.promo_name, promoname))
            
        return {
            status: "ok",
            data: result
        }
    } catch (err) {
        console.log("Error Db", err)

        return {
            status : "error",
            message : String(err)
        }
    }
    
}