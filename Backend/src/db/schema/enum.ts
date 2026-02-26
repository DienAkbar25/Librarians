import { pgEnum } from "drizzle-orm/pg-core";

export const promotypes = pgEnum("promo_types", 
    ["Percentage","Fixed Price"])

export const sexs = pgEnum("sexs", 
    ["Female", "Male"])