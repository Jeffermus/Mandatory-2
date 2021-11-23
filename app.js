const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const { createPage} = require("./render/render.js");
const createuser = createPage("createUser/createUser.js");
// const adminuser = createPage("admin/admin.js");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Import and use routes  */
const loginRouter = require("./routers/login");
const createUserRouter = require("./routers/createUser");
const adminRouter = require("./routers/admin");
const projectsRouter = require("./routers/projects.js");
const pagesRouter = require("./routers/pages.js")
const contactRouter = require("./routers/contact.js");

app.use(loginRouter.router);
app.use(createUserRouter.router);
app.use(adminRouter.router);
app.use(projectsRouter.router);
app.use(pagesRouter.router);
app.use(contactRouter.router);


const { urlencoded } = require("express");

/* Ready the pages */
const frontpagePage = createPage("frontpage/frontpage.html", { 
  title: "Nodefolio | Welcome"
});
const CVPage = createPage("CVPage/CVPage.html");
const projectsPage = createPage("projects/projects.html");
const contactPage = createPage("contact/contact.html");
const adminuser = createPage("admin/admin.html");




app.get("/", (req, res) => {
  res.send(frontpagePage);
});

app.get("/cv", (req, res) => {
  res.send(CVPage);
});

app.get("/projects", (req, res) => {
  res.send(projectsPage);
});

app.get("/contact", (req, res) => {
  res.send(contactPage);
});

app.get("/login", (req, res) => {
  const optionsObj = {
    title:"login", 
    scriptTag:"login.js"
  }
  const loginPage = createPage("login/login.html", optionsObj);
  res.send(loginPage);
});

app.get("/createuser", (req, res) => {
  res.send(createuser);
});

app.get("/admin", (req, res) => {
    res.send(adminuser);
  });


 app.post('/send-email', function (req, res) {
              let transporter = nodeMailer.createTransport({
                  host: 'smtp.office365.com', // Office 365 server
                  port: 587,     // secure SMTP
                  secure: false,
                  auth: {
                      user: "jeff0866@stud.kea.dk", // Insert mail user into a config file using module.exports
                      pass: "Mj8d4la#" // Insert mail password into a config file using module.exports
                  },
                  tls: {
                      rejectUnauthorized: false
                  }
              });
              let mailOptions = {
                  from: "jeff0866@stud.kea.dk", // sender address
                  to: "jeffoech@gmail.com", // reciver
                  subject: "<h3>Fra</h3>  Jeffrey", // Subject line
                  html: "<h3>Hello You!</h3>" // plain text bodyy
              };
              let dato = new Date()
              transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                      return console.log(dato + error);
                  }
                  console.log(dato + 'Message %s sent: %s');
                      res.render('render');
                    });
                  });
  
const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  console.log("Server is running on", PORT);
});