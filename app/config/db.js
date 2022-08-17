const Sequelize = require("sequelize");
const dbConfig = require('../config/db.config')
require("dotenv").config();



const subjectModel = require("../modules/subject/model/subject.model")
const classModel = require("../modules/class/models/class.models")
const teacherModel = require("../modules/teacher/models/teacher.model")
const studentModel = require("../modules/student/model/student.model")







module.exports = async () => {

  var connection = {};
  
  console.log('dev')

  const sequelize = new Sequelize(dbConfig.database, dbConfig.user,
    dbConfig.password, {
      host: dbConfig.host,
      dialect: 'postgres',
      port: dbConfig.port,
      pool: {
        maxConnections: 200, maxIdleTime: 60 },
          // disable logging; default: console.log
          logging: false,
      
    });

  

  const subject = subjectModel(sequelize, Sequelize);
  const classes = classModel(sequelize, Sequelize);
  const teacher = teacherModel(sequelize, Sequelize);
  const student = studentModel(sequelize, Sequelize);
  


  // table joining
  const { DataTypes } = Sequelize;
  const dbInstanceData = { DataTypes, dbInstance: sequelize };


  // Relations -- Table joining relation
  


   classes.hasMany(teacher, { foreignKey: 'id' })
  teacher.belongsTo(classes, { foreignKey: 'id',target_key : 'class_id' })


  subject.hasMany(teacher, { foreignKey: 'id' })
  teacher.belongsTo(subject, { foreignKey: 'id',target_key :'subject_id' })


  classes.hasMany(teacher, { foreignKey: 'id' })
  student.belongsTo(student, { foreignKey: 'id',target_key : 'class_id' })


  subject.hasMany(teacher, { foreignKey: 'id' })
  student.belongsTo(student, { foreignKey: 'id',target_key :'subject_id' })



  subject.hasMany(classes, { foreignKey: 'id' })
  classes.belongsTo(subject, { foreignKey: 'id',target_key : 'subject_id' })
  

  

  const Models = {
    dbInstanceData,
   subject,classes,teacher
    
    

  };
  if (connection.isConnected) {
    console.log("=> Using existing connection.");
    return Models;
  }

  await sequelize.sync();
  await sequelize.authenticate();
  connection.isConnected = true;
  console.log('=> Created a new connection.')
  return { Models, sequelize };
};
