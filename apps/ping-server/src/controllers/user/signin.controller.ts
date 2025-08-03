import type { Request, Response } from 'express'
import { users } from './utils/users'

export const signInUser = (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const user = users.find((user) => user.email === email && user.password === password)
        if (user) {
            res.status(200).json({
                message: 'User signed in successfully',
                timestamp: new Date().toISOString(),
            })
        } else {
            res.status(401).json({
                message: 'Invalid email or password',
                timestamp: new Date().toISOString(),
            })
        }
    } catch (error_) {
        res.status(500).json({
            message: (error_ as Error).message || 'Internal server error',
            timestamp: new Date().toISOString(),
        })
    }
}
