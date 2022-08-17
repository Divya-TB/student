const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const path = require("path");





app.use(bodyParser.json());



const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");



const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "project",
      version: "1.0.0",
      servers: ["http://localhost:3000"],
    },
  },
  apis: [
    "./app/modules/student/routes/students.routes.js",
    "./app/modules/teacher/routes/teachers.routes.js",

    "./app/modules/class/routes/class.routes.js",
    "./app/modules/subject/routes/subjects.routes.js",
  ],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.urlencoded({ extended: true }));



app.use('/uploads', express.static(path.join(__dirname, '/uploads/images')))
// app.use('/uploads', express.static(path.join(__dirname, '/uploads/users')))
// app.use('/uploads', express.static(path.join(__dirname, '/uploads/pdfs')))


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to project" });
});




require("./app/modules/student/routes/students.routes.js")(app);
require("./app/modules/teacher/routes/teachers.routes.js")(app);
require("./app/modules/class/routes/class.routes.js")(app);
require("./app/modules/subject/routes/subjects.routes.js")(app);



// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
