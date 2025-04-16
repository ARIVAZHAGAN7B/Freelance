const express = reqiure("express");
const router = express.router();
const SendForm = require("../Client/SendForm");
const TimeLine = require("../Client/Timeline");
router.post("/sendform",SendForm);
router.get("/timeline",TimeLine);
module.exports = router;