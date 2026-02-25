import { Elysia } from "elysia"
import { checkdb } from "./src/controllers/books/SearchByTitle"

const app = new Elysia();

app.get ("/controllers/books/SearchByTitle", async () => {
  return await checkdb ()

})

app.listen(3000)
console.log("Server running on http://localhost:3000")