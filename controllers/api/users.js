const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');


module.exports = {
    create,
    login,
    checkToken
}

async function create(req, res) {
    try {
        // Creates and adds user to database
        const user = await User.create(req.body)
        // Token created will be a string
        const token = createJWT(user)
        // Yes, we can use res.json to send back just a string
        // The client code needs to take this into consideration
        res.json(token)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        // Query for the user based on email
        const user = await User.findOne({email: req.body.email})
        if (!user) throw new Error('User not found')
        // Compare the inputted password with the password saved in the database.
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = createJWT(user)
            res.json(token)
        } else {
            throw new Error('Invalid Password')
        }
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user)
    res.json(req.exp)
}

/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
        // Data Payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}