const app = require("express");
const router = app.Router();

const {
  Dummy,
  SignUp,
  Login,
  allUsers,
  userbyEmail,
  deleteUser,
  DefaultAdmin,
} = require("./controller");

router.post("/users", Dummy);
router.post("/signup", SignUp);
router.post("/login", Login);
router.get("/getallusers", allUsers);
router.get("/getuserbyemail", userbyEmail); // this is done using query params
router.delete("/deleteuser", deleteUser);

router.get("/default-admin", DefaultAdmin);

module.exports = router;
