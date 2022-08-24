

const services = require('../services/teacher_class.services')

module.exports.teacherclassList = async (req, res) => {
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



  module.exports.teacherclasscreate = async (req, res) => {
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
  


  module.exports.teacherclassupdate = async (req, res) => {
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
  

  module.exports.teacherclassdelete = async (req, res) => {
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
  
  
  
  
  
  
  
  