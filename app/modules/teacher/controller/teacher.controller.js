

const services = require('../services/teacher.services')

module.exports.teacherList = async (req, res) => {
    try {
        const data = await services.teacher(req)
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



  module.exports.teachercreate = async (req, res) => {
    try {
        const data = await services.teacheradd(req)
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
  


  module.exports.teacherupdate = async (req, res) => {
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
  

  module.exports.teacherdelete = async (req, res) => {
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
  
  
  
  
  
  
  
  