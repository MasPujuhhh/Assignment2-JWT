const data = require('./../json/data.json')
const { sign } = require('./../jwt/jwt')

class dataController {
    static SignIn(req, res) {
        try {
            const { username, password } = req.body
            if (username === data.username && password === data.password) {
                const token = sign({ username: data.username, password: data.password })
                res.status(200).json({ token })
            } else {
                throw error
            }
        } catch(error) {
            res.status(400).json({message: "username/ password incorrect"})
        }
    }

    static GetData(req, res) {
        const auth = req.headers.auth
        const token = auth
        try {
            res.status(200).json({data, token})
        } catch (error) {
            res.status(400).json({messsage:"Invalid Token"})
        }
        
        
    }

}

module.exports = dataController