const Query = require('../Query/student.class.query')
const moment = require('moment')



module.exports.student =  async (req)=>{
  try{
  let query_builder={
    where : {status : 1},
    limit: 10,
    offset: req.query.page * limit
  }
    const data = await Query.studentclasslist(query_builder);
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

    let query_builder = {
        ...req.body,
        status: 1,
        created_on: moment().format()
      }

    const data = await Query.studentclasscreate(query_builder);
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
  
     query_builder = {
        ...req.body,
        status: 1,
        created_on: moment().format()
      }
  

  
    const data = await Query.studentclassupdate(query_builder);
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
  if(req.params.id ){
    let query_builder ={
      where : {id : req.params.id,status:1}
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





module.exports.getoneclass =  async (req)=>{
  try{
  if(req.params.class_id ){
    let query_builder ={
      where : {class_id : req.params.class_id,status:1},
      limit : 10,
      offset : req.query.page * limit
    }
   
  
    const data = await Query.getOneclass(query_builder);
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


module.exports.getonestudent =  async (req)=>{
  try{
  if(req.params.student_name ){
    let query_builder ={
      name : req.params.student_name,
      status :1
    }
    const is_exist = await Query.getOne(query_builder)
   let query = {
    where :{student_id : is_exist.info[o].id,status :1}
   }
    if(is_exist.status === 200){
     const data = await Query.getOne(query);
     return(data);
    }
    else{
     return ({ "status": 400, "success_status": false, "response": `There is no student with name '${req.params.student_name}'`});
    }
   
   
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
  
    const data = await Query.studentClassdelete(query_builder);
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
