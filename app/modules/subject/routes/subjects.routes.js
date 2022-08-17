module.exports = app => {

    const controller = require("../controller/subjects.controller");
  
    // // To upload Image
    // const filter = require('../../../../lib/upload_Image')
    // const storage = require('../../../../lib/upload_Image')
    // // upload Image -- to S3 bubket
    // var multer = require('multer');
    // const upload = multer({
    //   fileFilter: filter.imageFilter,
    //   storage: storage.Storage
    // });
  
     app.get("/api/subject/List", controller.subjectList);
  
    /**
    * @swagger
    *
    * /api/subject/List:
    *   get:
    *     description:
    *       - Use to get all subject
    * 
    *     summary: Use to get all subject
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
  
  
  
    app.post("/api/subject/create", controller.subjectcreate);
  
    /**
    * @swagger
    *
    * /api/subject/create:
    *   post:
    *     description:
    *       - Use to create subject
    * 
    *     summary: Use to create subject
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
    *       - name: title
    *         in: formData
    *         required: true
    *         type: string
   
    *       - name: sub_title
    *         in: formData
    *         required: true
    *         type: string
  
    
    *     responses:
    *         200:
    *           description: Success
    */


     app.put("/api/subject/update/:id", controller.subjectupdate);
    /**
    * @swagger
    *
    * /api/subject/update/{id}:
    *   put:
    *     description:
    *       - Use to  update a subject
    * 
    *     summary: Use to  update a subject
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
    
    *       - name: title
    *         in: formData
    *         required: true
    *         type: string
   
    *       - name: sub_title
    *         in: formData
    *         required: true
    *         type: string
   
    *     responses:
    *         200:
    *           description: Success
    */
  



  
  
  
  
    app.get("/api/subject/getone/:id", controller.getone);
    /**
    * @swagger
    *
    * /api/subject/getone/{id}:
    *   get:
    *     description:
    *       - Use to get a subject
    * 
    *     summary: Use to get a subject
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
  
    
     app.delete("/api/subject/delete/:id", controller.subjectdelete);
     /**
     * @swagger
     *
     * /api/subject/delete/{id}:
     *   delete:
     *     description:
     *       - Use to get a subject
     * 
     *     summary: Use to get a subject
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
  
  
  