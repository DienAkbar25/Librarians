import { serial, varchar} from "drizzle-orm/pg-core";
import { pgSchema } from "drizzle-orm/pg-core";

const librarians = pgSchema("librarians")

export const categories = librarians.table("categories",
    {
        id_category:serial("id_categorie").notNull().primaryKey(),
        category_name:varchar("category_name", { length : 100}).notNull(),
        characteristic:varchar("characteristic", { length : 25}).notNull()

    }
)