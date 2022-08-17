const Query = require('../Query/class.query')

var moment = require('moment');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports.class =  async (req)=>{
  try{
  let query_builder={
    where : {status : 1}
  }
    const data = await Query.classlist(query_builder);
    return(data);
  }
  catch (error) {
    console.error(error);
    return ({ "status": 400, "success_status": false, "response": "Bad request", "info": error });
}
}



module.exports.classadd =  async (req)=>{
  try{
  if(req.body){
   // start time and end time
let startTime = moment(req.body.class_start_time, 'HH:mm:ss a');
let endTime = moment(req.body.class_end_time, 'HH:mm:ss a');

// calculate total duration
var duration = moment.duration(endTime.diff(startTime));

// duration in hours
var hours = parseInt(duration.asHours());

// duration in minutes
var minutes = parseInt(duration.asMinutes()) % 60;

let time = hours + ' hours and ' + minutes + ' minutes'
   console.log(time)
    let query ={
      where : {name : req.body.name}
    }
    let query_builder = {
      ...req.body,
      class_duration: time,
      status: 1,
      created_on: moment().format()
    }
    let is_exist = await Query.getOne(query)
    if(is_exist.status === 200){
      return ({ "status": 201, "success_status": false, "response": "Class title already exist" });
    }
    const data = await Query.classcreate(query_builder);
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



module.exports.edit =  async (req)=>{
  try{
  if(req.body && req.params.id){
    let query ={
      where : {name : req.body.name}
    }
    
    // start time and end time
let startTime = moment(req.body.class_start_time, 'HH:mm:ss a');
let endTime = moment(req.body.class_end_time, 'HH:mm:ss a');

// calculate total duration
var duration = moment.duration(endTime.diff(startTime));

// duration in hours
var hours = parseInt(duration.asHours());

// duration in minutes
var minutes = parseInt(duration.asMinutes()) % 60;

let time = hours + ' hours and ' + minutes + ' minutes'

let query_builder = {
  ...req.body,
  class_duration: time,
where: {id : req.params.id}
}

    let is_exist = await Query.getOne(query)
    if(is_exist.status === 200){
      if(is_exist.info[0].id != req.params.id){
        return ({ "status": 201, "success_status": false, "response": "Class Name already exist" });
      }
      
    }
    const data = await Query.classupdate(query_builder);
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
  
    const data = await Query.classdelete(query_builder);
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
