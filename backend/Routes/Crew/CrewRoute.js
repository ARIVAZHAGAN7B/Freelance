const express = require("express");
const router = express.Router();
const MaintainTimeLine = require("../../Controllers/Crew/MaintainTimeLine");
const Modules = require("../../Controllers/Crew/Modules");
const {getPortfolioData} = require("../../Controllers/Crew/Portfolio");
const RequestCrew = require("../../Controllers/Crew/RequestCrew");
router.post("/portfolio/:membername",getPortfolioData);
module.exports = router;