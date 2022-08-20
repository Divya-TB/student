const Query = require('../Query/student.query')


var moment = require('moment')
const encrypt = require('../../../lib/bcrypt');
const { user } = require('../../../config/db.config');


module.exports.student =  async ()=>{
  try{
  let query_builder={
    where : {status : 1}
  }
    const data = await Query.studentlist(query_builder);
    return(data);
  }
  catch (error) {
    console.error(error);
    return ({ "status": 400, "success_status": false, "response": "Bad request", "info": error });
}
}



module.exports.studentadd =  async (req)=>{
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

  console.log(req.body)
   
    
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
        user_type: user,
        password : encrypted_password,
        status: 1,
        created_on: moment().format()
      }

    const data = await Query.studentcreate(query_builder);
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



module.exports.studentedit =  async (req)=>{
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

  
    const data = await Query.studentupdate(query_builder);
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
  
    const data = await Query.studentdelete(query_builder);
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
