const path = require('path');

const express = require('express');

const profileController = require('../controllers/profile');
const isAuth = require('../middleware/is-auth');

const router = express.Router();


router.get('/profile', profileController.getProfiles);

// router.post(
//    '/edit-profile-picture',
//    // [
//    //    body('imageUrl').isURL(),
//    // ],
//    isAuth,
//    profileController.editProfilePicture
// );

module.exports = router;