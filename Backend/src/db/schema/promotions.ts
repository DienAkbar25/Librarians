import { varchar, serial, date, boolean, decimal} from "drizzle-orm/pg-core";
import { pgSchema } from "drizzle-orm/pg-core";
import { promotypes } from "./enum";

const librarians = pgSchema("librarians")

export const promotions = librarians.table("promotions",
    {
        id_promo:serial("id_promo").notNull().primaryKey(),
        promo_name:varchar("promo_name", {length:255}).notNull(),
        start_date:date("start_date").notNull(),
        end_date:date("end_date").notNull(),  
        promo_type:promotypes("promo_type").notNull(),
        promo_value:decimal("promo_value", {precision : 10, scale :2}).notNull(),
        is_active:boolean("is_active").notNull(),

    }
)

