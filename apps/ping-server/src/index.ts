import express from 'express'

const app = express()
const port = process.env.PORT || 3001

app.use(express.json()) // this is the middleware to parse JSON bodies

app.get('/ping', (_req, res) => {
    res.json({ message: 'pong', timestamp: new Date().toISOString() })
})

app.get('/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() })
})

app.post('/sign-up', (req, res) => {
    res.json({
        message: 'User signed up successfully',
        user: req.body,
    })
})

app.post('/sign-in', (req, res) => {
    res.json({
        message: 'User signed in successfully',
        user: req.body,
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
