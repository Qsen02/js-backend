let { Router } = require("express");
const { showHome, onSearch } = require("../controlers/home");
const { showBreedForm, onCreate } = require("../controlers/addBreed");
const { showCreateForm, onCreateCat } = require("../controlers/createCat");
const { showEditForm, onEdit } = require("../controlers/edit");
const { showDeleteFrom, onDelete } = require("../controlers/delete");
const { upload } = require("./multer");

let router = Router();

router.get("/", showHome);
router.get("/cats/add-breed", showBreedForm);
router.post("/cats/add-breed", onCreate);
router.get("/cats/add-cat", showCreateForm);
router.post("/cats/add-cat", upload.single("imgURL"), onCreateCat);
router.get("/search?*", onSearch);
router.get("/cats/edit/:id", showEditForm);
router.post("/cats/edit/:id", upload.single("imgURL"), onEdit);
router.get("/cats/delete/:id", showDeleteFrom);
router.post("/cats/delete/:id", onDelete);

router.get("*", (req, res) => {
    res.render("404");
})

module.exports = {
    router
}