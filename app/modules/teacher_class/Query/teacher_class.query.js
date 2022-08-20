const connectToDatabase = require('../../../config/db')

module.exports.teacherclasslist = async (data) => {
    const DB = await connectToDatabase()
    try {
         const result = await DB.Models.TeacherClass.findAll({ include: [
            {
            model: DB.Models.classes, 
            attributes:['name'], 
            },
            {
                model: DB.Models.teacher,
                include:[{model: DB.Models.subject,attributes:['title']}],
                attributes: {
                    exclude: ['id','created_on','status','subject_id','password','image']
                }
               }
            ],
            attributes: 
            ['id']
            ,order: [ ["id", "DESC"]],where: data.where, raw: true })
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " teacher list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": "teacher list doest not exist", "info": result });
    
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
        const result = await DB.Models.TeacherClass.findAll({  include: [
            {
            model: DB.Models.classes, 
            attributes:['id','name'], 
            },
            {
                model: DB.Models.teacher,
                include:[{model: DB.Models.subject,attributes:['title']}],
                attributes: {
                    exclude: ['subject_id','password','image']
                }
               }
            ]
          
       ,attributes: ['id'], where : data.where, raw: true })
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " Teacher list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " Teacher list doest not exist", "info": result });
    
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
        const result = await DB.Models.TeacherClass.findAll({  include: [
            {
                model: DB.Models.teacher,
                include:[{model: DB.Models.subject,attributes:['title']}],
                attributes: {
                    exclude: ['subject_id','password','image']
                }
               }]
          
       ,attributes: ['id'],  where : data.where, order: [ ["id", "ASC"]],raw: true })
      
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": `Teacher list in class ${data.where.class_id}`, "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " Teacher list doest not exist", "info": result });
    
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




module.exports.teacherclasscreate = async (data) => {
    const DB = await connectToDatabase()
    try {
         await DB.Models.TeacherClass.create( data)
     
        return ({ "status": 200, "success_status": true, "response": " Teacher created successfully"});

         
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};



module.exports.teacherclassupdate = async (data) => {
    const DB = await connectToDatabase()
    try {
     await DB.Models.TeacherClass.update(data, {where :data.where })
     
      
          
    return ({ "status": 200, "success_status": true, "response": " Teacher updated successfully"});

         
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};



module.exports.teacherClassdelete = async (data) => {
    const DB = await connectToDatabase()
    try {
     await DB.Models.TeacherClass.update(data, {where :data.where })
     
      
          
 return ({ "status": 200, "success_status": true, "response": " Teacher deleted successfully"});

         
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};
