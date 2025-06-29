import { Router } from 'express'
import { signUpUser } from '../../../controllers/user'

const router = Router()

router.post('/', signUpUser)

export const signUpRoute = router
