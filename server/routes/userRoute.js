const router = require("express").Router();

const {
  userLogin,
  userRegister,
  getSingleUser,
  getAllUser,
  updateDetails,
} = require("../controllers/userController");

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/get-user-detail", getSingleUser);

router.get("/get-all-user", getAllUser);

router.put("/update-user", updateDetails);

module.exports = router;
