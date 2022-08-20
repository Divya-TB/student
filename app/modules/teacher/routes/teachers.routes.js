module.exports = app => {

  const controller = require("../controller/teacher.controller");

  // // To upload Image
  // const filter = require('../../../../lib/upload_Image')
  // const storage = require('../../../../lib/upload_Image')
  // // upload Image -- to S3 bubket
  // var multer = require('multer');
  // const upload = multer({
  //   fileFilter: filter.imageFilter,
  //   storage: storage.Storage
  // });

   app.get("/api/teacher/List", controller.teacherList);

  /**
  * @swagger
  *
  * /api/teacher/List:
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
  *     responses:
  *         200:
  *           description: Success
  */


   app.post("/api/teacher/create", controller.teachercreate);
  
   /**
   * @swagger
   *
   * /api/teacher/create:
   *   post:
   *     description:
   *       - Use to create teacher
   * 
   *     summary: Use to create teacher
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
   *       - name: user_type
   *         in: formData
   *         required: true
   *         type: string
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
   * 
   *       - name: class_id
   *         in: formData
   *         required: true
   *         type: integer
   * 
   *       - name: subject_id
   *         in: formData
   *         required: true
   *         type: integer
  
   *       - name: image
   *         in: formData
   *         required: true
   *         type: string
   *
 
   
   *     responses:
   *         200:
   *           description: Success
   */


    app.put("/api/teacher/update/:id", controller.teacherupdate);
   /**
   * @swagger
   *
   * /api/teacher/update/{id}:
   *   put:
   *     description:
   *       - Use to  update a teacher
   * 
   *     summary: Use to  update a teacher
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
   *       - name: user_type
   *         in: formData
   *         required: true
   *         type: string
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
   *       - name: class_id
   *         in: formData
   *         required: true
   *         type: integer
   * 
   *       - name: subject_id
   *         in: formData
   *         required: true
   *         type: integer
  
   *       - name: image
   *         in: formData
   *         type: string
   *
 
   *     responses:
   *         200:
   *           description: Success
   */
 



 
 
 
 
   app.get("/api/teacher/getone/:id", controller.getone);
   /**
   * @swagger
   *
   * /api/teacher/getone/{id}:
   *   get:
   *     description:
   *       - Use to get a teacher
   * 
   *     summary: Use to get a teacher
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
 
   
    app.delete("/api/teacher/delete/:id", controller.teacherdelete);
    /**
    * @swagger
    *
    * /api/teacher/delete/{id}:
    *   delete:
    *     description:
    *       - Use to get a teacher
    * 
    *     summary: Use to get a teacher
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