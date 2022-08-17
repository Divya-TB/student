const connectToDatabase = require('../../../config/db')


module.exports.subjectlist = async (data) => {
    const DB = await connectToDatabase()
    try {
        const result = await DB.Models.subject.findAll({  order: [ ["id", "DESC"]],where: data.where, raw: true })
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " Subject list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " Subject list doest not exist", "info": result });
    
            }
            
        
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};




module.exports.getOne = async (data) => {
    const DB = await connectToDatabase()
    try {
        const result = await DB.Models.subject.findAll({  where : data.where, raw: true })
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " Subject list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " Subject list doest not exist", "info": result });
    
            }
            
        
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};





module.exports.subjectcreate = async (data) => {
    const DB = await connectToDatabase()
    try {
        const result = await DB.Models.subject.create( data)
     
      
          
                return ({ "status": 200, "success_status": true, "response": " Subject created successfully"});

         
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};



module.exports.subjectupdate = async (data) => {
    const DB = await connectToDatabase()
    try {
     await DB.Models.subject.update(data, {where :data.where })
     
      
          
                return ({ "status": 200, "success_status": true, "response": " Subject updated successfully"});

         
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};



module.exports.subjectdelete = async (data) => {
    const DB = await connectToDatabase()
    try {
     await DB.Models.subject.update(data, {where :data.where })
     
      
          
 return ({ "status": 200, "success_status": true, "response": " Subject deleted successfully"});

         
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};
