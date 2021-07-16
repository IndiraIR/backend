const jwt = require("jsonwebtoken");
const authRouter = require("express").Router();

const { signUp, logIn } = require("../controllers/auth.controller");

authRouter.post("/signUp", signUp);
authRouter.post("/login", logIn);

module.exports = authRouter;
