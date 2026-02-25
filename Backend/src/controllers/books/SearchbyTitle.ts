import { status } from "elysia"
import { db } from "../../config/db"

export const checkdb = async () => {
    const res = await db.query("SELECT NOW()")

    return {
        status : "ok",
        time : res.rows[0],
    }
}