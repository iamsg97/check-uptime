import { Request, Response } from 'express'

export const signUpUser = (req: Request, res: Response) => {
    res.status(201).json({
        message: 'User created successfully',
        user: {
            name: 'Suvadeep',
        },
        timestamp: new Date().toISOString(),
    })
}
