const { Router } = require("express");
const { loginUser, registerNewUser } = require("../controllers/users");
const { googleLogin } = require("../controllers/googleAuthController");

const router = Router();

router.post("/register", registerNewUser);
router.post("/login", loginUser);
router.post("/googlelogin", googleLogin);

module.exports = router;
