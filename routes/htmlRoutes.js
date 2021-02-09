const path = require("path");
const router = require("express").Router();

// This is the default page that will load when the user first arrives at the application
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/list", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/list.html"));
})

module.exports = router;