require("dotenv").config();
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const connectDB = require("../config/db");
const jobRoutes = require("../routes/jobRoutes");
const jobAlertRoutes = require("../routes/jobalertroutes");

// ❌ REMOVE cron
// require("./cron/jobstatusupdater");

const app = express();

// CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

// ✅ Connect DB once
connectDB();

// Routes
app.use("/api", jobRoutes);
app.use("/api/job-alerts", jobAlertRoutes);

app.get("/", (req, res) => {
  res.send("Daily Job Openings API Running");
});

module.exports = serverless(app);