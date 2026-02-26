import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

const pool = new Pool ({
    host : Bun.env.DB_HOST, 
    port : Number(Bun.env.DB_PORT), 
    database : Bun.env.DB_NAME,
    user : Bun.env.DB_USER,
    password : Bun.env.DB_PASSWORD
 })

 export const db = drizzle(pool)
