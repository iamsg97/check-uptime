import { Router } from 'express'
import { getHealth } from '../../controllers'

const router = Router()

router.get('/', getHealth)

export const healthRoute = router
