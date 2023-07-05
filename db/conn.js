const mongoose = require("mongoose");

//conexão com banco de dados 
async function main( ) {

  try {

    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://betocrdev:MtVmr8d4HA3mRJye@cluster0.oyikslf.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("conectado ao banco")

  }catch(error) {
    console.log(`"error" ${error}`)
  }

}


module.exports = main