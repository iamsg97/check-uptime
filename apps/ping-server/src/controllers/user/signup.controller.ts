import type { Request, Response } from 'express'
import { users } from './utils/users'

export const signUpUser = (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        users.push({ email, password })
        res.status(201).json({
            message: 'User created successfully',
            timestamp: new Date().toISOString(),
        })
    } catch (error_) {
        res.status(500).json({
            message: (error_ as Error).message || 'Internal server error',
            timestamp: new Date().toISOString(),
        })
    }
}
