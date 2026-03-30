const express = require("express");
const router = express.Router();
const { subscribeJobAlert } = require("../controllers/jobalertcontroller");

router.post("/subscribe-to-job-alerts", subscribeJobAlert);
// router.delete("/unsubscribe-from-job-alerts/:email", unsubscribeJobAlert);

module.exports = router;