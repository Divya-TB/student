module.exports = app => {

    const controller = require("../controller/student.class.controller");
  
    // // To upload Image
    // const filter = require('../../../../lib/upload_Image')
    // const storage = require('../../../../lib/upload_Image')
    // // upload Image -- to S3 bubket
    // var multer = require('multer');
    // const upload = multer({
    //   fileFilter: filter.imageFilter,
    //   storage: storage.Storage
    // });
  
     app.get("/api/student-class/List", controller.studentclassList);
  
    /**
    * @swagger
    *
    * /api/student-class/List:
    *   get:
    *     description:
    *       - Use to get all student 
    * 
    *     summary: Use to get all student
    * 
    *     tags:
    *        - Admin Module
    * 
    *     produces:
    *       - application/json
    * 
    *     consumes:
    *       - multipart/form-data
    * 
    *     parameters:
    *       - in: header
    *         name: Content-Type
    *         type: string
    *         value: application/x-www-form-urlencoded
    *         required: true
    *     responses:
    *         200:
    *           description: Success
    */
  
  
     app.post("/api/student-class/create", controller.studentclasscreate);
    
     /**
     * @swagger
     *
     * /api/student-class/create:
     *   post:
     *     description:
     *       - Use to create student in class
     * 
     *     summary: Use to create student in class
     * 
     *     tags:
     *        - Admin Module
     *     produces:
     *       - application/json
     * 
     *     parameters:
     *       - in: header
     *         name: Content-Type
     *         type: string
     *         value: application/x-www-form-urlencoded
     *         required: true
     * 
     *       - name: student_id
     *         in: formData
     *         required: true
     *         type: string
    
     *       - name: class_id
     *         in: formData
     *         required: true
     *         type: string
     * 
    
     *     responses:
     *         200:
     *           description: Success
     */
  
  
      app.put("/api/student-class/update/:id", controller.studentclassupdate);
     /**
     * @swagger
     *
     * /api/student-class/update/{id}:
     *   put:
     *     description:
     *       - Use to  update a student in classs
     * 
     *     summary: Use to  update a student in class
     * 
     *     tags:
     *       - Admin Module
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: header
     *         name: Content-Type
     *         type: string
     *         value: application/x-www-form-urlencoded
     *         required: true
     * 
     * 
     *       - in: path
     *         name: id   
     *         required: true
     *         type: integer
     
     
     *       - name: student_id
     *         in: formData
     *         required: true
     *         type: string
    
     *       - name: class_id
     *         in: formData
     *         required: true
     *         type: string
     * 
     
   
     *     responses:
     *         200:
     *           description: Success
     */
   
  
  
  
   
   
   
   
     app.get("/api/student-class/getone/:id", controller.getone);
     /**
     * @swagger
     *
     * /api/student-class/getone/{id}:
     *   get:
     *     description:
     *       - Use to get a student in class
     * 
     *     summary: Use to get a student in class
     * 
     *     tags:
     *       - Admin Module
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: header
     *         name: Content-Type
     *         type: string
     *         value: application/x-www-form-urlencoded
     *         required: true
     * 
     * 
     *       - in: path
     *         name: id   
     *         required: true
     *         type: integer
     
     * 
     *     responses:
     *         200:
     *           description: Success
     */
   


      app.get("/api/student-classes/getone/:class_id", controller.getoneBYclass);
     /**
     * @swagger
     *
     * /api/student-classes/getone/{class_id}:
     *   get:
     *     description:
     *       - Use to get a student in class
     * 
     *     summary: Use to get a student in class
     * 
     *     tags:
     *       - Admin Module
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: header
     *         name: Content-Type
     *         type: string
     *         value: application/x-www-form-urlencoded
     *         required: true
     * 
     * 
     *       - in: path
     *         name: class_id   
     *         required: true
     *         type: integer
     
     * 
     *     responses:
     *         200:
     *           description: Success
     */



      app.get("/api/student-classes/getone/:student_name", controller.getoneBYstudent);
      /**
      * @swagger
      *
      * /api/student-classes/getone/{student_name}:
      *   get:
      *     description:
      *       - Use to get a student in class
      * 
      *     summary: Use to get a student in class by student name
      * 
      *     tags:
      *       - Admin Module
      *     produces:
      *       - application/json
      *     parameters:
      *       - in: header
      *         name: Content-Type
      *         type: string
      *         value: application/x-www-form-urlencoded
      *         required: true
      * 
      * 
      *       - in: path
      *         name: student_name  
      *         required: true
      *         type: string
      
      * 
      *     responses:
      *         200:
      *           description: Success
      */
    
   
     
      app.delete("/api/student-class/delete/:id", controller.studentclassdelete);
      /**
      * @swagger
      *
      * /api/student-class/delete/{id}:
      *   delete:
      *     description:
      *       - Use to get a student
      * 
      *     summary: Use to get a student
      * 
      *     tags:
      *       - Admin Module
      *     produces:
      *       - application/json
      *     parameters:
      *       - in: header
      *         name: Content-Type
      *         type: string
      *         value: application/x-www-form-urlencoded
      *         required: true
      * 
      * 
      *       - in: path
      *         name: id   
      *         required: true
      *         type: integer
      
      * 
      *     responses:
      *         200:
      *           description: Success
      */
    
  };