const {check} = require('express-validator')
const db = require('../db')
const { compare } = require('bcryptjs')

// Password
const password = check('password')
    .isLength({min: 6, max: 32})
    .withMessage('Password must be between 6 and 32 characters')

// Email
const email = check('email')
    .isEmail()
    .withMessage('Please enter a valid email address')

// Check if email exists in db
const emailExists = check('email').custom(async (value) => {
    const {rows} = await db.query(
        'SELECT * FROM users WHERE email = $1', [value]
    )

    if (rows.length) {
        throw new Error('Email already exists in our records')
    }
})

// Login validation
const loginFieldsCheck = check('email').custom(async (value, {req}) => {
    const user = await db.query('SELECT * FROM users WHERE email = $1', [value])
    if (!user.rows.length) {
        throw new Error('Email does not exist in our records')
    }

    const validPassword = await compare(req.body.password, user.rows[0].password)

    if (!validPassword) {
        throw new Error('Password does not match')
    }
})

module.exports = {
    registerValidation: [email, password, emailExists],
    loginValidation: [loginFieldsCheck]
}