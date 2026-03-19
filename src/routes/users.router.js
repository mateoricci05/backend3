import { Router } from 'express'
import { users } from '../data/db.js'

const router = Router()

router.get('/', (req, res) => res.json(users))

router.get('/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id)
  if (!user) return res.status(404).json({ error: 'Not found' })
  res.json(user)
})

router.post('/', (req, res) => {
  const newUser = { id: Date.now(), ...req.body }
  users.push(newUser)
  res.status(201).json(newUser)
})

router.put('/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id)
  if (!user) return res.status(404).json({ error: 'Not found' })
  Object.assign(user, req.body)
  res.json(user)
})

router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id)
  if (index === -1) return res.status(404).json({ error: 'Not found' })
  users.splice(index, 1)
  res.json({ message: 'Deleted' })
})

export default router
