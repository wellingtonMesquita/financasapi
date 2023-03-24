const router = require("express").Router();

const walletController = require("../controllers/walletController");

router
.route("/wallet")
.post((req,res) => walletController.create(req, res));

module.exports = router;