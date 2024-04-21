const express = require("express");

const router = express.Router();

const imageCtrl = require ("../controllers/images");
const isLoggedIn = require("../helper/isLoggedIn");


// CREATE

router.post("/images/add", isLoggedIn, imageCtrl.image_create);

// READ

router.get("/images/all", imageCtrl.images_all_get);
router.get("/images/detail", imageCtrl.image_one_get);
router.get("/images/category", imageCtrl.image_category_get);

// UPDATE

router.get("/images/edit", isLoggedIn, imageCtrl.image_edit_get);
router.put("/images/update", isLoggedIn, imageCtrl.image_update_put);

// DELETE

router.delete("/images/delete", isLoggedIn, imageCtrl.image_delete);

module.exports = router;