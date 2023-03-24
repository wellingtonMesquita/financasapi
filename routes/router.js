const router = require("express").Router();

const walletRouter = require("./wallet");

router.use("/",walletRouter);

module.exports = router;