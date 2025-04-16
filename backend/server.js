const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const CrewRoute = require("./Routes/Crew/CrewRoute");

app.use("/api/crew", CrewRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
