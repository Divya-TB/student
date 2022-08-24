const Query = require('../Query/subject.query')

var moment = require('moment')
module.exports.subject =  async (req)=>{
  try{
    let pagesize = 10;
  let query_builder={
    where : {status : 1},
    limit : pagesize,
    offset : pagesize * (req.query.page-1)
  }
    const data = await Query.subjectlist(query_builder);
    return(data);
  }
  catch (error) {
    console.error(error);
    return ({ "status": 400, "success_status": false, "response": "Bad request", "info": error });
}
}



module.exports.subjectadd =  async (req)=>{
  try{
  if(req.body){
    let query ={
      where : {title : req.body.title}
    }
    let query_builder = {
      ...req.body,
      status: 1,
      created_on: moment().format()
    }
    let is_exist = await Query.getOne(query)
    if(is_exist.status === 200){
      return ({ "status": 201, "success_status": false, "response": "Subject title already exist" });
    }
    const data = await Query.subjectcreate(query_builder);
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



module.exports.subjectedit =  async (req)=>{
  try{
  if(req.body && req.params.id){
    let query ={
      where : {title : req.body.title}
    }
    let query_builder = {
      ...req.body,
    where: {id : req.params.id}
    }
    let is_exist = await Query.getOne(query)
    if(is_exist.status === 200){
      if(is_exist.info[0].id != req.params.id){
        return ({ "status": 201, "success_status": false, "response": "Subject title already exist" });
      }
      
    }
    const data = await Query.subjectupdate(query_builder);
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
  
    const data = await Query.subjectdelete(query_builder);
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
