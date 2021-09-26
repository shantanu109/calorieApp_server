const express = require('express');

const router = express.Router();


const usersApi = require('../../../controllers/api/v1/users_api');


router.post('/create-session',usersApi.createSession);
router.post('/signup', usersApi.signUp);
router.post('/edit', usersApi.editProfile);
router.get('/search/:name', usersApi.searchUser);
router.post('/createhistory',usersApi.createHistory);


module.exports = router;