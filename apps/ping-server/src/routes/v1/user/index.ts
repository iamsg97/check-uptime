import { Router } from 'express'
import { signUpRoute } from './signup.route'
import { singInRoute } from './singin.route'

const router = Router()

router.use('/sign-up', signUpRoute)
router.use('/sign-in', singInRoute)

export const userRoute = router
