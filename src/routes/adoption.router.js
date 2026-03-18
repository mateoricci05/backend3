import { Router } from 'express'
import { pets } from '../data/db.js'

const router = Router()

router.get('/', (req, res) => {
  res.json(pets)
})

router.post('/:id', (req, res) => {
  const pet = pets.find(p => p.id == req.params.id)
  if (!pet) return res.status(404).json({ error: 'Pet not found' })
  if (pet.adopted) return res.status(400).json({ error: 'Already adopted' })

  pet.adopted = true
  res.json({ message: 'Adopted', pet })
})

export default router
