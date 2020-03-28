const { Router } = require("express");
const { jwtMiddleware } = require("../middlewares");
const { TrackerController } = require("../controllers");

const router = Router();

router.get("/list", jwtMiddleware, TrackerController.getTrackerList);

module.exports = router;
