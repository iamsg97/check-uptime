import { Request, Response } from 'express'

export const getPing = (req: Request, res: Response) => {
    res.json({ message: 'pong', timestamp: new Date().toISOString() })
}
