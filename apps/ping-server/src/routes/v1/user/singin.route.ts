import { Router } from 'express'
import { signInUser } from '../../../controllers/user'

const router = Router()

router.post('/', signInUser)

export const singInRoute = router
