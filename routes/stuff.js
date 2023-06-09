const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const stuffCtrl = require("../controllers/stuff");

router.get("/", auth, stuffCtrl.getAllStuff);
router.get("/:id", auth, stuffCtrl.getOneThing);
router.post("/", auth, stuffCtrl.createThing);
router.put("/:id", auth, stuffCtrl.modifyThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);

module.exports = router;
