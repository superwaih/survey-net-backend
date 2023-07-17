const express = require('express')
const router = express.Router()

const {
    getAllUsers, createUser, submitInformation
} = require('../controller/Users')

router.route('/all').get(getAllUsers)
router.route('/create').post(createUser)
router.route('/update/:email').put(submitInformation)


module.exports = router