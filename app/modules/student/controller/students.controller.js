

const services = require('../services/students.services')

module.exports.studentList = async (req, res) => {
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



  module.exports.studentcreate = async (req, res) => {
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
  


  module.exports.studentupdate = async (req, res) => {
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
  

  module.exports.studentdelete = async (req, res) => {
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
  
  
  
  
  
  
  
  