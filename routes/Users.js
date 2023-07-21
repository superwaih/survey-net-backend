const express = require('express')
const router = express.Router()

const {
    getAllUsers, createUser, submitInformation,
  updatePaymentStatus

} = require('../controller/Users')

router.route('/all').get(getAllUsers)
router.route('/create').post(createUser)
router.route('/update/:email').put(submitInformation)
router.route('/updatepayment/:email').put(updatePaymentStatus)



module.exports = router