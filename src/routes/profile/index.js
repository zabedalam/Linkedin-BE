const express = require("express");
const router = express.Router();
const Profile = require("../../models/profile");

router.get("/profile", async (req, res) => {
  try {
    const response = await Profile.find().populate("experiences");
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }

  // console.log("HI I AM FROM PROFILE ROUTER")
});

router.post("/profile", (req, res) => {
  console.log("HI I AM FROM PROFILE ROUTER");
});

router.put("/profile", (req, res) => {
  console.log("HI I AM FROM PROFILE ROUTER");
});

router.delete("/profile", (req, res) => {
  console.log("HI I AM FROM PROFILE ROUTER");
});

module.exports = router;
