const express = require('express')
const router = express.Router()
const {register, login, getUserData} = require('../controllers/userControllers')
const authMiddleware = require('../middlewares/authMiddleware')
const { check } = require('express-validator');


router.post('/register',[check("email","Your email is not valid").isEmail().normalizeEmail(),check("password" ,"the password must be at least 6 characters and contains 1 uppercase letter , 1 lowercase, 1 symbol; 1 number").isStrongPassword({ minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 })],register)
router.post('/login', login)
router.get('/',authMiddleware, getUserData)
module.exports = router
