const express = require("express");
const router = express.Router();
const controller = require("../controllers/pontosController");


router.get("/", controller.getAllPontos);
router.get("/", controller.getByResiduo);
router.post("/", controller.createPonto);
router.put("/:id", controller.updatePonto);
router.delete("/:id", controller.deletePonto);

module.exports = router;
