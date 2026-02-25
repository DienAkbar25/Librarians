import { Elysia } from "elysia"
import { checkdb } from "./src/controllers/books/SearchByTitle"

const app = new Elysia();

app.get ("/controllers/books/SearchByTitle", async () => {
  return await checkdb ()

})

app.listen(3000)