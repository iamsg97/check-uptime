import { Router } from 'express'
import v1Router from './v1'

const router = Router()

// Import all v1 routes
router.use('/v1', v1Router)

export default router
