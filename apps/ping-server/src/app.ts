import express from 'express'
import apiRouter from './routes'

const app = express()

// TODO: this middleware needs to be modularized
app.use(express.json()) // this is the middleware to parse JSON bodies

app.use('/api', apiRouter)

export default app
