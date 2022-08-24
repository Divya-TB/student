

const services = require('../services/student.class')

module.exports.studentclassList = async (req, res) => {
    try {
        const data = await services.student(req)
        res.status(data.status).send(data);
  
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "success_status": false,
            "response": "Internal Server Error",
            "info": error
        });
    }
  };



  module.exports.studentclasscreate = async (req, res) => {
    try {
        const data = await services.studentadd(req)
        res.status(data.status).send(data);
  
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "success_status": false,
            "response": "Internal Server Error",
            "info": error
        });
    }
  };
  
  
  module.exports.getone = async (req, res) => {
    try {
        const data = await services.getone(req)
        res.status(data.status).send(data);
      
  
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "success_status": false,
            "response": "Internal Server Error",
            "info": error
        });
    }
  };



  module.exports.getoneBYclass = async (req, res) => {
    try {
        const data = await services.getoneclass(req);
        res.status(data.status).send(data);
  
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "success_status": false,
            "response": "Internal Server Error",
            "info": error
        });
    }
  };
  



  module.exports.getoneBYstudent = async (req, res) => {
    try {
        const data = await services.getonestudent(req);
        res.status(data.status).send(data);
  
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "success_status": false,
            "response": "Internal Server Error",
            "info": error
        });
    }
  };
  


  module.exports.studentclassupdate = async (req, res) => {
    try {
        const data = await services.edit(req)
        res.status(data.status).send(data);
  
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "success_status": false,
            "response": "Internal Server Error",
            "info": error
        });
    }
  };
  

  module.exports.studentclassdelete = async (req, res) => {
    try {
        const data = await services.delete(req)
        res.status(data.status).send(data);
  
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "success_status": false,
            "response": "Internal Server Error",
            "info": error
        });
    }
  };
  
  
  
  
  
  
  
  