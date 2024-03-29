const { Router } = require('express')
const{ createUser,loginUser,logoutUser } = require('../controllers/user.controllers.js') 
const{ getMovies,getShows } = require('../movie-controllers/get.controllers.js')
const{ bookings } = require('../movie-controllers/bookings.controllers.js')
const{ forgetPassword,resetPassword } = require('../controllers/forget-password.controllers.js')

const router = Router()

router.route('/register-user').post(createUser)
router.route('/login-user').post(loginUser)
router.route('/logout-user').post(logoutUser)
router.route('/get-movies').get(getMovies)
router.route('/get-shows').get(getShows)
router.route('bookings').get(bookings)
router.route('/forget-password').post(forgetPassword)
router.route('/reset-password').post(resetPassword)





module.exports = router
