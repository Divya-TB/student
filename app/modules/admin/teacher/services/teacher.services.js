const Query = require('../Query/teacher.query')

const teacherclass = require('../../teacher_class/Query/teacher_class.query')
var moment = require('moment')
const encrypt = require('../../../../lib/bcrypt');


module.exports.teacher =  async (req)=>{
  try{
    let pagesize = 10;
  let query_builder={
    where : {status : 1},
    limit: pagesize ,
    offset: (req.query.page-1) * pagesize
  }
    const data = await Query.teacherlist(query_builder);
    return(data);
  }
  catch (error) {
    console.error(error);
    return ({ "status": 400, "success_status": false, "response": "Bad request", "info": error });
}
}



module.exports.teacheradd =  async (req)=>{
  try{
  if(req.body){
    let email_query ={
      where : {email : req.body.email}
    }
    let phone_query = {
        where : {email : req.body.email}
    }

    const phone = await Query.getOne(phone_query)
    const email = await Query.getOne(email_query)

  
   
    
    if(phone.status === 200){

      return ({ "status": 201, "success_status": false, "response": "phonenumber already exist" });
    }
    if(email.status === 200){
        return ({ "status": 201, "success_status": false, "response": "Email already exist" });  
    }

    const encrypted_password =  await encrypt.value_bc(req.body.password)

    for (let i in req.body) {
        delete req.body.password;
    }


    let query_builder = {
        ...req.body,
        password : encrypted_password,
        status: 1,
        created_on: moment().format()
      }

    const data = await Query.teachercreate(query_builder);
    return(data);
  }
  else{
    return ({ "status": 201, "success_status": false, "response": "params are misiing" });
  }
    
  }
  catch (error) {
    console.error(error);
    return ({ "status": 400, "success_status": false, "response": "Bad request", "info": error });
}
}



module.exports.teacheredit =  async (req)=>{
  try{
  if(req.body && req.params.id){
    let email_query ={
        where : {email : req.body.email}
      }
      let phone_query = {
          where : {email : req.body.email}
      }
  
      const phone = await Query.getOne(phone_query)
      const email = await Query.getOne(email_query)
  
    
     
      
      if(phone.status === 200){
        if(phone.info[0].id !== req.params.id){
            return ({ "status": 201, "success_status": false, "response": "phonenumber already exist" });
        }
        
      }
      if(email.status === 200){
        if(email.info[0].id !== req.params.id){
            return ({ "status": 201, "success_status": false, "response": "Email already exist" });  
        }
      
      }


      let query_builder; 

  if(req.body.password ){
    var encrypted_password =  await encrypt.value_bc(req.body.password)
  
    for (let i in req.body) {
        delete req.body.password;
    }
     query_builder = {
        ...req.body,
        password : encrypted_password,
        status: 1,
        created_on: moment().format()
      }
  }
  else{
    query_builder = {
        ...req.body,
        status: 1,
        created_on: moment().format()
      }
  }

  
    const data = await Query.teacherupdate(query_builder);
    return(data);
  }
  else{
    return ({ "status": 201, "success_status": false, "response": "params are misiing" });
  }
    
  }
  catch (error) {
    console.error(error);
    return ({ "status": 400, "success_status": false, "response": "Bad request", "info": error });
}
}



module.exports.getone =  async (req)=>{
  try{
  if(req.params.id){
    let query_builder ={
      where : {id : req.params.id}
    }
  
    const data = await Query.getOne(query_builder);
    return(data);
  }
  else{
    return ({ "status": 201, "success_status": false, "response": "params are misiing" });
  }
}
  

  catch (error) {
    console.error(error);
    return ({ "status": 400, "success_status": false, "response": "Bad request", "info": error });
}
}




module.exports.delete =  async (req)=>{
  try{
  if(req.params.id){
    let query_builder ={
      status: 2,
      where : {id : req.params.id}
    }

    let query ={
      status: 2,
      where : {teacher_id : req.params.id}
    }
    await teacherclass.teacherClassdelete(query)
    const data = await Query.teacherdelete(query_builder);
    return(data);
  }
  else{
    return ({ "status": 201, "success_status": false, "response": "params are misiing" });
  }
}
  

  catch (error) {
    console.error(error);
    return ({ "status": 400, "success_status": false, "response": "Bad request", "info": error });
}
}
