const jwt = require('jsonwebtoken')



function sign(payload){
    return jwt.sign(payload, "justsecret")
}

function verify(token){
    return jwt.verify(token, "justsecret")
}

module.exports = {
    sign, verify
}