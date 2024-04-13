const express = require("express");

const router = express.Router();

const eventsCtrl = require ("../controllers/events");
const isLoggedIn = require("../helper/isLoggedIn");


// CREATE

router.post("/events/add", isLoggedIn, eventsCtrl.event_create);

// READ

router.get("/events/all", eventsCtrl.events_all_get);
router.get("/events/detail", eventsCtrl.event_one_get);

// UPDATE

router.get("/events/edit", isLoggedIn, eventsCtrl.event_edit_get);
router.put("/events/update", isLoggedIn, eventsCtrl.event_update_put);

// DELETE

router.delete("/events/delete", isLoggedIn, eventsCtrl.event_delete);

module.exports = router;