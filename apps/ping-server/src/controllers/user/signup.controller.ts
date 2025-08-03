import type { Request, Response } from 'express'

const users: Array<{ name: string }> = []

export const signUpUser = (req: Request, res: Response) => {
    const { name } = req.body
    users.push({ name })
    res.status(201).json({
        message: 'User created successfully',
        timestamp: new Date().toISOString(),
    })
}
