const db = require('../db')

exports.getUsers = async (req, res) => {
    try {
        const {rows} = await db.query('SELECT * FROM users')
        console.log(rows)
    } catch (err) {
        console.log(err.message)
    }
}

exports.register = async (req, res) => {
    try {
        // const {rows} = await db.query(
        //     'INSERT INTO users VALUES($1, $2)'
        // )
        // console.log(rows)
        console.log('validation test passed')
    } catch (err) {
        console.log(err.message)
    }
}