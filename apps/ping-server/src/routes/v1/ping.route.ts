import { Router } from 'express'
import { getPing } from '../../controllers'

const router = Router()
router.get('/', getPing)

export const pingRoute = router
