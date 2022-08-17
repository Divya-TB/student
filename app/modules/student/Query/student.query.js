const connectToDatabase = require('../../../config/db')

module.exports.studentlist = async (data) => {
    const DB = await connectToDatabase()
    try {
        const result = await DB.Models.student.findAll({  include: [
            {
            model: DB.Models.classes, 
            attributes:['name','class_start_time','class_end_time'], 
            },
        ]
          ,
          attributes: {
            exclude: ['password','image']
        },
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
        const result = await DB.Models.student.findAll({  include: [
            {
            model: DB.Models.classes, 
            attributes:['name'], 
            },
            {
                model: DB.Models.subject,
                attributes:['title'], 
               
               }]
          ,
          attributes: {
            exclude: ['password','image']
        }, where : data.where, raw: true })
     
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





module.exports.studentcreate = async (data) => {
    const DB = await connectToDatabase()
    try {
         await DB.Models.student.create( data)
     
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



module.exports.studentupdate = async (data) => {
    const DB = await connectToDatabase()
    try {
     await DB.Models.student.update(data, {where :data.where })
     
      
          
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



module.exports.studentdelete = async (data) => {
    const DB = await connectToDatabase()
    try {
     await DB.Models.student.update(data, {where :data.where })
     
      
          
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
