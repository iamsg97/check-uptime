import app from './app'
import { config } from 'dotenv'

/** @todo load env files based on different working environment */
config()

const PORT = process.env.PORT || 3001

console.log(PORT)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
