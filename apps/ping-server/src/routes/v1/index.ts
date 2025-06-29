import { pingRoute } from './ping.route'

import { Router } from 'express'

// import all routes from the v1 directory
const router = Router()
router.use('/ping', pingRoute)

export default router
