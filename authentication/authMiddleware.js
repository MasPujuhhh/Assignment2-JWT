const { verify } = require('./../jwt/jwt')

function Authentication(req, res, next) {
    const auth = req.headers.auth
    try {
        const { username } = verify(auth)
        req.data = { username }
        next()
    } catch (error) {
        res.status(400).json({message:"Invalid token"})
    }
}

module.exports = Authentication