const express = require("express");
const router = express.Router();
const controller = require("../controller/ponto-de-coletaController");

router.get("/", controller.allPonto);
router.post("/", controller.createPonto);
router.put("/:id", controller.updatePonto);
router.delete("/:id", controller.removePonto);

module.exports = router;