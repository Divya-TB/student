module.exports = app => {

    const controller = require("../controller/teacher_class.controller");
  
    // // To upload Image
    // const filter = require('../../../../lib/upload_Image')
    // const storage = require('../../../../lib/upload_Image')
    // // upload Image -- to S3 bubket
    // var multer = require('multer');
    // const upload = multer({
    //   fileFilter: filter.imageFilter,
    //   storage: storage.Storage
    // });
  
     app.get("/api/teacher-class/List", controller.teacherclassList);
  
    /**
    * @swagger
    *
    * /api/teacher-class/List:
    *   get:
    *     description:
    *       - Use to get all teacher
    * 
    *     summary: Use to get all teacher
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
    * 
    *       - in: query
    *         name: page
    *         type: integer
    *         required: true
    *     responses:
    *         200:
    *           description: Success
    */
  
  
     app.post("/api/teacher-class/create", controller.teacherclasscreate);
    
     /**
     * @swagger
     *
     * /api/teacher-class/create:
     *   post:
     *     description:
     *       - Use to create  teacher in class
     * 
     *     summary: Use to create  teacher in class
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
     *       - name: teacher_id
     *         in: formData
     *         required: true
     *         type: integer
    
     *       - name: class_id
     *         in: formData
     *         required: true
     *         type: integer
     * 
    
     *     responses:
     *         200:
     *           description: Success
     */
  
  
      app.put("/api/teacher-class/update/:id", controller.teacherclassupdate);
     /**
     * @swagger
     *
     * /api/teacher-class/update/{id}:
     *   put:
     *     description:
     *       - Use to  update a teacher in classs
     * 
     *     summary: Use to  update a teacher in class
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
     
     
     *       - name: teacher_id
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
   
  
  
  
   
   
   
   
     app.get("/api/teacher-class/getone/:id", controller.getone);
     /**
     * @swagger
     *
     * /api/teacher-class/getone/{id}:
     *   get:
     *     description:
     *       - Use to get a teacher in class
     * 
     *     summary: Use to get a teacher in class
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
   


      app.get("/api/teacher-classes/getone/:class_id", controller.getoneBYclass);
     /**
     * @swagger
     *
     * /api/teacher-classes/getone/{class_id}:
     *   get:
     *     description:
     *       - Use to get a teacher in class
     * 
     *     summary: Use to get a teacher in class
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
   
     
      app.delete("/api/teacher-class/delete/:id", controller.teacherclassdelete);
      /**
      * @swagger
      *
      * /api/teacher-class/delete/{id}:
      *   delete:
      *     description:
      *       - Use to delete a teacher from class
      * 
      *     summary: Use to delete a teacher from class
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