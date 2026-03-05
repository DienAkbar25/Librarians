import { serial , varchar } from "drizzle-orm/pg-core";
import { pgSchema } from "drizzle-orm/pg-core";

const librarians = pgSchema("librarians")

export const genre = librarians.table("genres", 
    {
        id_genre:serial("id_genre").notNull().primaryKey(),
        genre_name:varchar("genre_name", {length : 100}).notNull()

    }
)