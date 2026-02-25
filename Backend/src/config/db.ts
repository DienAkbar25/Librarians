import { drizzle } from "drizzle-orm/postgres-js"
import { Pool } from "pg"

 export const db = new Pool ({
    host : Bun.env.DB_HOST, 
    port : Number(Bun.env.DB_PORT), 
    database : Bun.env.DB_NAME,
    user : Bun.env.DB_USER,
    password : Bun.env.DB_PASSWORD
 })
