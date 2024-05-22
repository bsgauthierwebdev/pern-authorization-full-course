const express = require('express')
const app = express()
const {PORT} = require('./constants')

// Import Routes
const authRoutes = require('./routes/auth')

// Initialize Routes
app.use('/api', authRoutes)

// App Start
const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`The app is running at http://localhost:${PORT}`)
        })
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
}

appStart()