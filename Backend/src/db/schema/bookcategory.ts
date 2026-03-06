import { serial } from "drizzle-orm/pg-core";
import { pgSchema } from "drizzle-orm/pg-core";
import { books } from "./books";
import { categories } from "./categories";
import { primaryKey } from "drizzle-orm/pg-core";

const librarians = pgSchema("librarians")

export const bookcategory = librarians.table("book_category",
    {
        id_book:serial("id_book").notNull().references(() => books.id_book),
        id_category:serial("id_category").notNull().references(() => categories.id_category)
        
    }, (bookcategory) => ({
        pk : primaryKey({ columns : [bookcategory.id_book, bookcategory.id_category]})
    })
)