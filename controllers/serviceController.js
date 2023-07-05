const { Service: ServiceModel} = require("../models/service");


const serviceController = {
    //função de criação de dados da api
      create: async(req, res) => {
        try {
          
          const service = {
              name: req.body.name,
              description: req.body.description,
              price: req.body.price,
              image: req.body.image,
          };

          const response = await ServiceModel.create(service);

          res.status(201).json({response, msg:"Serviço criado com sucesso"})

        } catch (error) {
          console.log(error)
        }
      },
    //função get da api 
      getAll: async(req, res) => {

        try {
          const services = await ServiceModel.find();

          res.json(services);


        } catch (error) {
          console.log(error)
        }

      },
      get: async(req, res) => {
        try {
          //pegar id 
          const id = req.params.id;
          const service = await ServiceModel.findById(id);

          res.json(service);

        } catch (error) {
          console.log(error)
        }
      }
}

module.exports = serviceController;