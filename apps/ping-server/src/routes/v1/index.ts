import { pingRoute } from './ping.route'

import { Router } from 'express'
import { healthRoute } from './health.route'
import { userRoute } from './user'

// import all routes from the v1 directory
const router = Router()
router.use('/ping', pingRoute)
router.use('/health', healthRoute)
router.use('/user', userRoute)

export default router
