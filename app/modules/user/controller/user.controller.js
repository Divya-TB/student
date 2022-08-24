const services = require('../services/user.services')

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



  module.exports.classlist = async (req, res) => {
    try {
        const data = await services.class(req)
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


  module.exports.classdetails = async (req, res) => {
    try {
        const data = await services.getoneclass(req)
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



  module.exports.teacherdetails = async (req, res) => {
    try {
        const data = await services.getteacher(req)
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

  module.exports.teacherbyname = async (req, res) => {
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


  module.exports.teacherlist = async (req, res) => {
    try {
        const data = await services.teacherlist(req)
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
  