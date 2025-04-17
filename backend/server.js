const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDb = require("./config/db"); 
require("dotenv").config(); // Load .env

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
connectDb();
// Routes
const CrewRoute = require("./Routes/Crew/CrewRoute");
app.use("/api/crew", CrewRoute);

// Start Server
app.listen(5000, () => {
  console.log("🚀 Server is running on port 5000");
});
