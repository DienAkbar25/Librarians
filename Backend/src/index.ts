import { listen } from 'bun'  
import { Elysia } from 'elysia'

new Elysia()
  .get('/', () => 'hello world')
  .listen (3000)