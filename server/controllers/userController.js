const userSchema = require("../models/userModel");
const bcrypt = require("bcryptjs");

const userRegister = async (req, res) => {
  console.log("working");
  console.log(req.body);
  try {
    const { name, email, password, profession, about, phoneNumber, gender } =
      req.body;
    const savedemail = await userSchema.findOne({
      email: email,
    });
    if (savedemail) {
      return res.send({ status: 1, message: "email is already in use" });
    }

    //hash the password using bcryptjs library
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const createdUser = await userSchema.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      gender: gender,
      password: hashPassword,
      profession: profession,
      about: about,
    });
    res.send({
      user: createdUser,
      status: 0,
      msg: "User registered successfully",
    });
  } catch (error) {
    // res.send({
    //   status: 1,
    //   msg: error,
    //   data: null,
    // });
    console.log(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email: email });
    if (!user) return res.send({ message: "email is incorrect" });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.send({ message: "invalid password" });

    res.send({
      status: 0,
      role: user.role,
      msg: "logged in",
    });
  } catch (error) {
    res.send({
      status: 1,
      msg: error,
      data: null,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const result = await userSchema.find();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const userId = req.query.userId;
    // console.log(userId);
    const result = await userSchema.findById(userId);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const updateDetails = async (req, res) => {
  try {
    const userId = req.query.userId;
    const { name, email, profession, about, phoneNumber, gender } = req.body;
    console.log(req.query);
    const tempUser = userSchema.findById(userId);
    if (!tempUser) {
      res.send({
        status: 1,
        msg: "user not found",
      });
    } else {
      await userSchema.findByIdAndUpdate(
        userId,
        {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          gender: gender,
          profession: profession,
          about: about,
        },
        { new: true }
      );
      res.send({
        status: 0,
        msg: "data updated",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  userRegister,
  userLogin,
  getAllUser,
  getSingleUser,
  updateDetails,
};
