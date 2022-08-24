const connectToDatabase = require('../../../../config/db')


module.exports.classlist = async (data) => {
    const DB = await connectToDatabase()
    try {
        const result = await DB.Models.classes.findAll({  order: [ ["id", "DESC"]],where: data.where, limit : data.limit,offset : data.limit,raw: true })
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " Class list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " Class list doest not exist", "info": result });
    
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
        const result = await DB.Models.classes.findAll({  where : data.where, raw: true })
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " Class list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " Class list doest not exist", "info": result });
    
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





module.exports.classcreate = async (data) => {
    const DB = await connectToDatabase()
    try {
         await DB.Models.classes.create( data)
     
        return ({ "status": 200, "success_status": true, "response": " Class created successfully"});

         
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};



module.exports.classupdate = async (data) => {
    const DB = await connectToDatabase()
    try {
     await DB.Models.classes.update(data, {where :data.where });
     
     
      
          
    return ({ "status": 200, "success_status": true, "response": " Class updated successfully"});

         
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};



module.exports.classdelete = async (data) => {
    const DB = await connectToDatabase()
    try {
     await DB.Models.classes.update(data, {where :data.where })
     
      
          
 return ({ "status": 200, "success_status": true, "response": " Class deleted successfully"});

         
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};
