const connectToDatabase = require('../../../config/db')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


module.exports.studentlist = async (data) => {
    const DB = await connectToDatabase()
    try {
       
       const result = await DB.Models.student.findAll({
                                    attributes: ['id','name','email','address','state','cityORcountry','admission_year'],
                                    where : data.where,
                                    raw: true
                                                        })
        
      

       if(result.length>0){
        return ({ "status": 200, "success_status": true, "response": " Student list", "info": result });
       }
       else{
        return ({ "status": 200, "success_status": true, "response": " Student list", "info": result });
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




module.exports.classlist = async (data) => {
    const DB = await connectToDatabase()
    try {
        let result;
       if(data.type === 'studentclass'){
       result = await DB.Models.StudentClass.findAll({attributes:[],
        include:[{
            model: DB.Models.classes,
            attributes: ['id','name','class_duration','class_start_time','class_end_time'],
        }],
           
            where : data.where,
            raw: true
                                })
       }
       else{
        result = await DB.Models.classes.findAll({
            attributes: ['id','name'],
            where : data.where,limit: data.limit,offset: data.offset,
            raw: true
                                })

       }
      
       if(result.length>0){
        return ({ "status": 200, "success_status": true, "response": " Class list", "info": result });
       }
       else{
        return ({ "status": 200, "success_status": true, "response": " Class list", "info": result });
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






module.exports.teacherdetails = async (data) => {
    const DB = await connectToDatabase()
    try {
       let teacher;

         teacher = await DB.Models.TeacherClass.findAll({ include: [
            {
                model: DB.Models.teacher,
                attributes: [['id','teacher_id'],'name'],
                include: [{
                    model: DB.Models.subject,
                    attributes: ['title'],
                }]
            }         
          ],
        attributes : [],
        where: data.where, raw: true })
        result = {
          
            
            teacher: teacher.length>0 ? teacher : []
          }
      
                return ({ "status": 200, "success_status": true, "response": " Teacher list ", "info": result });

  
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
       
      let result;
      if(data.type === 'name'){
         result = await DB.Models.teacher.findAll({attributes : ['id'],
          
        where: {
            [Op.and]: [{ name:{ [Op.like]: `%${data.name}%` }}, 
                { status:data.status} ]
        }, 
        raw: true })
      }
      else{
        result = await DB.Models.student.findAll({  
            attributes: {
              exclude: ['password','image']
          }, where : data.where, raw: true })
      }
       
                           
     if(result.length>0){
        return ({ "status": 200, "success_status": true, "response": " teacher list", "info": result });
     }
     else{
        return ({ "status": 201, "success_status": true, "response": " teacher list", "info": result });
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

