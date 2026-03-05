import { serial, primaryKey } from "drizzle-orm/pg-core";
import { books } from "./books";
import { genre } from "./genre";
import { pgSchema } from "drizzle-orm/pg-core"; 

const librarians = pgSchema("librarians")
 
export const booksgenre = librarians.table("book_genre",
    {

        id_book:serial("id_book").notNull().references(() => books.id_book),
        id_genre:serial("id_genre").notNull().references(() => genre.id_genre)

    }, (booksgenre) => ({
        pk : primaryKey({ columns : [booksgenre.id_book, booksgenre.id_book]})

    }),
)