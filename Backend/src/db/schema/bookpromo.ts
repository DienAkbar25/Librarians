import { primaryKey } from "drizzle-orm/pg-core";
import { pgSchema, serial } from "drizzle-orm/pg-core";
import { books } from "./books";
import { promotions } from "./promotions";

const librarians = pgSchema("librarians")

export const bookpromo = librarians.table("book_promo", 
    {
        id_book:serial("id_book").notNull().references(() => books.id_book),
        id_promo:serial("id_promo").notNull().references(() => promotions.id_promo)
    }, (bookpromo) => ({
        pk : primaryKey({ columns : [bookpromo.id_book, bookpromo.id_promo]})
        
    })
)