import { Router } from 'express'
import { signUpRoute } from './signup.route'

const router = Router()

router.use('/sign-up', signUpRoute)

export const userRoute = router
