const connectToDatabase = require('../../../../config/db')

module.exports.teacherlist = async (data) => {
    const DB = await connectToDatabase()
    try {
        const result = await DB.Models.teacher.findAll({  include: [
           
            {
                model: DB.Models.subject,
                attributes:['title'], 
               
               }]
          ,
          attributes: {
            exclude: ['subject_id','password','image']
        },
        order: [ ["id", "DESC"]],where: data.where,limit:data.limit,offset:data.offset, raw: true })
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " teacher list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " teacher list doest not exist", "info": result });
    
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
        const result = await DB.Models.teacher.findAll({  include: [
           
            {
                model: DB.Models.subject,
                attributes:[['id','subject_id'],'title'], 
               
               }]
          ,
          attributes: ['id','name','email','phone','address','cityORcountry','state','user_type'], where : data.where, raw: true })
     
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





module.exports.teachercreate = async (data) => {
    const DB = await connectToDatabase()
    try {
         await DB.Models.teacher.create( data)
     
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



module.exports.teacherupdate = async (data) => {
    const DB = await connectToDatabase()
    try {
     await DB.Models.teacher.update(data, {where :data.where })
     
      
          
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



module.exports.teacherdelete = async (data) => {
    const DB = await connectToDatabase()
    try {
     await DB.Models.teacher.update(data, {where :data.where })
     
      
          
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
