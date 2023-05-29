var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/dadosPersonagem/:idPersonagem", function (req, res) {
  medidaController.dadosPersonagem(req, res);
});
 
router.get("/dadosEps/:idEps", function (req, res) {
  medidaController.dadosEps(req, res);
});

module.exports = router;
