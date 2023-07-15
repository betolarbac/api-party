const router = require("express").Router();

//importando o router para que tudo seja depois do /
const servicesRouter = require("./services");

router.use("/", servicesRouter);


//parties routes

const partyRouter = require("./parties");

router.use("/", partyRouter)

module.exports = router;