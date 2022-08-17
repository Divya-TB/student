const bcrypt = require('bcryptjs');
 
module.exports.value_bc = async(value)=>{
      
       const salt = await bcrypt.genSalt(10);
       const bcrypted = await bcrypt.hash(value,salt);
   
       return bcrypted;
}



module.exports.compare = async(value,hash)=>{
  console.log(value,hash)
  const compared = await bcrypt.compare(value, hash);
  console.log(hash)
  console.log(value)
  return compared;
     
}




