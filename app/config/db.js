const Sequelize = require("sequelize");
const dbConfig = require('../config/db.config')
require("dotenv").config();



const subjectModel = require("../modules/admin/subject/model/subject.model")
const classModel = require("../modules/admin/class/models/class.models")
const teacherModel = require("../modules/admin/teacher/models/teacher.model")
const studentModel = require("../modules/admin/student/model/student.model")
const student_classModel = require('../modules/admin/students_class/models/student.class.models')
const teacher_classModel = require('../modules/admin/teacher_class/models/teacher_class.models')







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
  const StudentClass = student_classModel(sequelize, Sequelize);
  const TeacherClass =  teacher_classModel(sequelize, Sequelize);
  


  // table joining
  const { DataTypes } = Sequelize;
  const dbInstanceData = { DataTypes, dbInstance: sequelize };


  // Relations -- Table joining relation
  


 

  subject.hasMany(teacher, { foreignKey: 'subject_id' })
  teacher.belongsTo(subject)


  classes.hasMany(StudentClass,{ foreignKey: 'class_id' })
  StudentClass.belongsTo(classes)


  student.hasMany(StudentClass,{foreignKey: 'student_id'})
  StudentClass.belongsTo(student)


  classes.hasMany(TeacherClass,{ foreignKey: 'class_id' })
  TeacherClass.belongsTo(classes)


  teacher.hasMany(TeacherClass,{foreignKey: 'teacher_id'})
  TeacherClass.belongsTo(teacher)



  
  

  const Models = {
    dbInstanceData,
   subject,classes,teacher,
   student,
   StudentClass,
   TeacherClass
    
    

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
