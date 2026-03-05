import { primaryKey } from "drizzle-orm/pg-core";
import { pgSchema, serial } from "drizzle-orm/pg-core";

const librarians = pgSchema("librarians")

export const bookpromo = librarians.table("book_promo", 
    {
        id_book:serial("id_book").notNull(),
        id_promo:serial("id_promo").notNull()
    }, (bookpromo) => ({
        pk : primaryKey({ columns : [bookpromo.id_book, bookpromo.id_promo]})
        
    })
)