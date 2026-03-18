import { Router } from 'express'
import { users } from '../data/db.js'

const router = Router()

router.get('/', (req, res) => {
  res.json(users)
})

export default router
