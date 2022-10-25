const express = require("express");

const {validation, authenticate} = require("../../middlewares")
const {ctrlMiddleware} = require("../../middlewares");
const {schema} = require("../../mod/user");
const ctrl = require("../../controllers/auth")


const router = express.Router();

//users/signup
router.post('/signup', validation(schema.signupShema), ctrlMiddleware(ctrl.signup));

//login
router.post('/login', validation(schema.loginShema), ctrlMiddleware(ctrl.login));

//current
router.get('/current', authenticate, ctrlMiddleware(ctrl.getCurrent));

//logout
router.get('/logout', authenticate, ctrlMiddleware(ctrl.logout));

module.exports = router;

