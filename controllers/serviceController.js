const { Service: ServiceModel} = require("../models/Service");


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

    //pegar serviços pelo id 
      get: async(req, res) => {
        try {
          //pegar id 
          const id = req.params.id;
          const service = await ServiceModel.findById(id);

          if(!service) {
            res.status(404).json({msg: "serviço não encontrado"});
            return
          }

          res.json(service);
        } catch (error) {
          console.log(error)
        }
      },

      delete: async(req, res) => {
        try {
          
          const id = req.params.id

          const service = await ServiceModel.findById(id);

          if(!service) {
            res.status(404).json({msg: "serviço não encontrado"});
            return
          }

          const deletedService = await ServiceModel.findByIdAndDelete(id);

          res.status(200).json({deletedService, msg: "serviço excluído"});

        } catch (error) {
          console.log(error)
        }
      },

      update: async(req, res) => {

        const id = req.params.id;

        const service = {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          image: req.body.image,
      };

      const updatedService = await ServiceModel.findByIdAndUpdate(id, service);

      if(!updatedService) {
        res.status(404).json({msg: "serviço não encontrado"});
        return
      }

      res.status(200).json({service, msg: "serviço atualizado"});

      }
}

module.exports = serviceController;