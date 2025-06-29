import { pingRoute } from './ping.route'

import { Router } from 'express'
import { healthRoute } from './health.route'

// import all routes from the v1 directory
const router = Router()
router.use('/ping', pingRoute)
router.use('/health', healthRoute)

export default router
