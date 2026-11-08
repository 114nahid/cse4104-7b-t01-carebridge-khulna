import { Router } from 'express'

const router = Router()

// Simple check that the API is running
router.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'CareBridge Khulna API' })
})

export default router
