const express = require('express')
const app = express()
const {PORT, CLIENT_URL} = require('./constants')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')

// Import passport middleware
require('./middlewares/passport-middleware')

// Initialize middlewares
app.use(express.json())
app.use(cookieParser())
// app.use(cors({origin: CLIENT_URL, credentials: true}))
app.use(passport.initialize())

const corsOptions = {
    origin: CLIENT_URL,
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

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