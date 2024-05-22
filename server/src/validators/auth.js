const {check} = require('express-validator')
const db = require('../db')

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

module.exports = {
    registerValidation: [email, password, emailExists]
}