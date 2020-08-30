import { Router } from 'express'

const routes = Router()

routes.get('/', (req, resp) => {
  resp.send('OK! It`s working')
})

export default routes
