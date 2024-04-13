const express = require("express");

const router = express.Router();

const isLoggedIn = require("../helper/isLoggedIn");

const authCtrl = require ("../controllers/auth");

router.get("/auth/users", isLoggedIn, authCtrl.auth_user_get);
router.get("/auth/users/detail", isLoggedIn, authCtrl.user_detail_get);

router.post("/auth/signup", authCtrl.auth_signup_post);
router.post("/auth/login", authCtrl.auth_login_post);
// router.post("/auth/refresh", authCtrl.auth_session_refresh_post);
// router.post("/auth/changepass", authCtrl.auth_password_change);

module.exports = router;