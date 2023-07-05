const router = require("express").Router();

//importando o router para que tudo seja depois do /
const servicesRouter = require("./services");

router.use("/", servicesRouter);


module.exports = router;