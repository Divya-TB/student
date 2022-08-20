module.exports = app => {

  const controller = require("../controller/class.controller");

  // // To upload Image
  // const filter = require('../../../../lib/upload_Image')
  // const storage = require('../../../../lib/upload_Image')
  // // upload Image -- to S3 bubket
  // var multer = require('multer');
  // const upload = multer({
  //   fileFilter: filter.imageFilter,
  //   storage: storage.Storage
  // });

   app.get("/api/class/List", controller.classList);

  /**
  * @swagger
  *
  * /api/class/List:
  *   get:
  *     description:
  *       - Use to get all class
  * 
  *     summary: Use to get all class
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



   app.post("/api/class/create", controller.classcreate);
  
   /**
   * @swagger
   *
   * /api/class/create:
   *   post:
   *     description:
   *       - Use to create class
   * 
   *     summary: Use to create class
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
   
   * 
   *       - name: name
   *         in: formData
   *         required: true
   *         type: string
  
   *       - name: class_start_time
   *         in: formData
   *         required: true
   *         type: string
   * 
   *       - name: class_end_time
   *         in: formData
   *         required: true
   *         type: string
   *
 
   
   *     responses:
   *         200:
   *           description: Success
   */


    app.put("/api/class/update/:id", controller.classupdate);
   /**
   * @swagger
   *
   * /api/class/update/{id}:
   *   put:
   *     description:
   *       - Use to  update a class
   * 
   *     summary: Use to  update a class
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
   
   *       - name: name
   *         in: formData
   *         required: true
   *         type: string
  
   *       - name: class_start_time
   *         in: formData
   *         required: true
   *         type: string
   * 
   *       - name: class_end_time
   *         in: formData
   *         required: true
   *         type: string
   *
   *     responses:
   *         200:
   *           description: Success
   */
 



 
 
 
 
   app.get("/api/class/getone/:id", controller.getone);
   /**
   * @swagger
   *
   * /api/class/getone/{id}:
   *   get:
   *     description:
   *       - Use to get a class
   * 
   *     summary: Use to get a class
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
 
   
    app.delete("/api/class/delete/:id", controller.classdelete);
    /**
    * @swagger
    *
    * /api/class/delete/{id}:
    *   delete:
    *     description:
    *       - Use to get a class
    * 
    *     summary: Use to get a class
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