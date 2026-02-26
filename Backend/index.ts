import { Elysia } from "elysia"
import { Get10books } from "./src/controllers/books/get10books";
import { bookroutes } from "./src/routes/books/get10books";


const app = new Elysia();
app.use(bookroutes)


app.listen(3000)
console.log("Server running on http://localhost:3000")