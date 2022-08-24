
module.exports = app => {

    const controller = require("../controller/user.controller");
  
    // // To upload Image
    // const filter = require('../../../../lib/upload_Image')
    // const storage = require('../../../../lib/upload_Image')
    // // upload Image -- to S3 bubket
    // var multer = require('multer');
    // const upload = multer({
    //   fileFilter: filter.imageFilter,
    //   storage: storage.Storage
    // });
  
     app.get("/api/user/student/getone/:id", controller.studentList);
  
    /**
    * @swagger
    *
    * /api/user/student/getone/{id}:
    *   get:
    *     description:
    *       - Use to get a student
    * 
    *     summary: Use to get a student
    * 
    *     tags:
    *        - user Module
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
    *       - name: id
    *         in: path
    *         required: true
    *         type: integer
    *     responses:
    *         200:
    *           description: Success
    */
  

    app.get("/api/user/teacher/list/:user_id",controller.teacherlist);
   /**
     * @swagger
     *
     * /api/user/teacher/List/{user_id}:
     *   get:
     *     description:
     *       - Use to get a teacher list
     * 
     *     summary: Use to get a teacherlist
     * 
     *     tags:
     *        - user Module
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
     *       - name: user_id
     *         in: path
     *         required: true
     *         type: integer
     *     responses:
     *         200:
     *           description: Success
     */
   

    app.get("/api/user/teacher/list/:user_id&class_id",controller.teacherdetails);
    /**
      * @swagger
      *
      * /api/user/teacher/List/{user_id&class_id}:
      *   get:
      *     description:
      *       - Use to get a teacher list
      * 
      *     summary: Use to get a class teacherlist
      * 
      *     tags:
      *        - user Module
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
      *       - name: user_id
      *         in: path
      *         required: true
      *         type: integer
      * 
      *       - name: class_id
      *         in: path
      *         required: true
      *         type: integer
      *     responses:
      *         200:
      *           description: Success
      */
    

    app.get("/api/user/class/list",controller.classlist);
   /**
     * @swagger
     *
     * /api/user/class/List:
     *   get:
     *     description:
     *       - Use to get a class list
     * 
     *     summary: Use to get a classlist
     * 
     *     tags:
     *        - user Module
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
     *       - in: query
     *         name: page
     *         type: integer
     *         required: true
     * 
     
     *     responses:
     *         200:
     *           description: Success
     */
   
    app.get("/api/user/getone/classdetails/:user_id",controller.classdetails);
    /**
      * @swagger
      *
      * /api/user/getone/classdetails/{user_id}:
      *   get:
      *     description:
      *       - Use to get a class list
      * 
      *     summary: Use to get a classlist
      * 
      *     tags:
      *        - user Module
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
      *       - in: path
      *         name: user_id
      *         type: integer
      *         required: true
      * 
     
      
      *     responses:
      *         200:
      *           description: Success
      */
    
 
 


     app.get("/api/user/teacher/get/:teacher_name", controller.teacherbyname);
  
     /**
     * @swagger
     *
     * /api/user/teacher/get/{teacher_name}:
     *   get:
     *     description:
     *       - Use to get a teacher by name
     * 
     *     summary: Use to get a teacher by name
     * 
     *     tags:
     *        - user Module
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
     *       - name: teacher_name
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *         200:
     *           description: Success
     */
   

    
  

app.post("/api/user/student/create", controller.studentcreate);
  
   /**
   * @swagger
   *
   * /api/user/student/create:
   *   post:
   *     description:
   *       - Use to create student
   * 
   *     summary: Use to create student
   * 
   *     tags:
   *        - user Module
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
   *       - name: name
   *         in: formData
   *         required: true
   *         type: string
  
   *       - name: email
   *         in: formData
   *         required: true
   *         type: string
   * 
   *       - name: phone
   *         in: formData
   *         required: true
   *         type: string
   *
   *       - name: password
   *         in: formData
   *         required: true
   *         type: string
   * 
   *       - name: address
   *         in: formData
   *         required: true
   *         type: string
   * 
   *       - name: cityORcountry
   *         in: formData
   *         required: true
   *         type: string
   * 
   *       - name: state
   *         in: formData
   *         required: true
   *         type: string
   *       - name: admission_year
   *         in: formData
   *         required: true
   *         type: string
   
  
  
   *       - name: image
   *         in: formData
   *         required: true
   *         type: string
   *
 
   
   *     responses:
   *         200:
   *           description: Success
   */


    app.put("/api/user/student/update/:id", controller.studentupdate);
   /**
   * @swagger
   *
   * /api/user/student/update/{id}:
   *   put:
   *     description:
   *       - Use to  update a student
   * 
   *     summary: Use to  update a student
   * 
   *     tags:
   *       - user Module
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
   
   
   *       - name: name
   *         in: formData
   *         required: true
   *         type: string
  
   *       - name: email
   *         in: formData
   *         required: true
   *         type: string
   * 
   *       - name: phone
   *         in: formData
   *         required: true
   *         type: string
   *
   *       - name: password
   *         in: formData
   *         type: string
   * 
   *       - name: address
   *         in: formData
   *         required: true
   *         type: string
   * 
   *       - name: cityORcountry
   *         in: formData
   *         required: true
   *         type: string
   * 
   *       - name: state
   *         in: formData
   *         required: true
   *         type: string
   * 
   *       - name: admission_year
   *         in: formData
   *         required: true
   *         type: string
   
  
   *       - name: image
   *         in: formData
   *         type: string
   *
 
   *     responses:
   *         200:
   *           description: Success
   */
 
}