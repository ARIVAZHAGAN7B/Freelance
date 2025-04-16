const express = require("express");
const router = express.Router();

const AddCrew = require("../../Controllers/Admin/AddCrew");
const AddModules = require("../../Controllers/Admin/AddModules");

router.post("/addcrew",AddCrew);
router.post("/addmodules",AddModules);

module.exports = router ;