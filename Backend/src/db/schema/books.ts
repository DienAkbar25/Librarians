import { Table } from "drizzle-orm";
import { varchar, date, text, serial, integer, decimal, pgSchema } from "drizzle-orm/pg-core";

const librarians = pgSchema("librarians")

export const books = librarians.table ("books", 
    {
        id_book:serial("id_book").primaryKey().notNull(),
        title:varchar("title", {length : 255}).notNull(),
        author:varchar("author", {length : 255}).notNull(),
        publication_date:date("publication_date").notNull(),
        publisher:varchar("publisher", {length : 255}).notNull(),
        isbn:varchar("isbn", {length : 100}).notNull(),
        stocks:integer("stocks"),
        price:decimal("price", {precision : 10, scale : 2}),
        synopsis:text("synopsis")
    }

)   

export const tabel = { 
    books
} as const

export type table = typeof Table