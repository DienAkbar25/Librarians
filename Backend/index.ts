import { Elysia } from "elysia"
import { get10bookroutes } from "./src/routes/books/get10books";
import { searchbytitleroutes } from "./src/routes/books/searchbytitles";



const app = new Elysia();
app.use(get10bookroutes)
app.use(searchbytitleroutes)

app.listen(3000)
console.log("Server running on http://localhost:3000")