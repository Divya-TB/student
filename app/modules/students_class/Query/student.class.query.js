const connectToDatabase = require('../../../config/db')

module.exports.studentclasslist = async (data) => {
    const DB = await connectToDatabase()
    try {
         const result = await DB.Models.StudentClass.findAll({ include: [
            {
            model: DB.Models.classes, 
            attributes:['id','name'], 
            },
            {
                model: DB.Models.student,
                attributes: {
                    exclude: ['password','image']
                }
               }]
          
       ,attributes: ['id'],
        order: [ ["id", "DESC"]],where: data.where, raw: true })
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " Student list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": "Student list doest not exist", "info": result });
    
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
        const result = await DB.Models.StudentClass.findAll({  include: [
            {
            model: DB.Models.classes, 
            attributes:['id','name'], 
            },
            {
                model: DB.Models.student,
                attributes: {
                    exclude: ['password','image']
                }
               }]
          
       ,attributes: ['id'], where : data.where, raw: true })
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " Student list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " Student list doest not exist", "info": result });
    
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


module.exports.getOneclass = async (data) => {
    const DB = await connectToDatabase()
    try {
        const result = await DB.Models.StudentClass.findAll({  include: [
            {
                model: DB.Models.student,
                attributes: {
                    exclude: ['password','image']
                }
               }]
          
       ,attributes: ['id'],  where : data.where, order: [ ["student_id", "ASC"]],raw: true })
      
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": `Student list in class ${data.where.class_id}`, "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " Student list doest not exist", "info": result });
    
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




module.exports.studentclasscreate = async (data) => {
    const DB = await connectToDatabase()
    try {
         await DB.Models.StudentClass.create( data)
     
        return ({ "status": 200, "success_status": true, "response": " Student created successfully"});

         
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};



module.exports.studentclassupdate = async (data) => {
    const DB = await connectToDatabase()
    try {
     await DB.Models.StudentClass.update(data, {where :data.where })
     
      
          
    return ({ "status": 200, "success_status": true, "response": " student updated successfully"});

         
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};



module.exports.studentClassdelete = async (data) => {
    const DB = await connectToDatabase()
    try {
     await DB.Models.StudentClass.update(data, {where :data.where })
     
      
          
 return ({ "status": 200, "success_status": true, "response": " student deleted successfully"});

         
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};
