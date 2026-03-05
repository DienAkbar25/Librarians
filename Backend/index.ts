import { Elysia } from "elysia"
import { get10bookroutes } from "./src/routes/books/get10books";
import { searchbytitleroutes } from "./src/routes/books/searchbytitles";
import { searchgenreroutes } from "./src/routes/books/searchbygenre";
import { searchbypromoroutes } from "./src/routes/books/searchbypromo";

const app = new Elysia();
app.use(get10bookroutes)
app.use(searchbytitleroutes)
app.use(searchgenreroutes)
app.use(searchbypromoroutes)

app.listen(3000)
console.log("Server running on http://localhost:3000")