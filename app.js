const express = require("express");
const app = express();
const { createPage } = require("./render/render.js");
const loginpage = createPage("./public/pages/login/login.js");
const createuser = createPage("./public/pages/createUser/createUser.js");
const adminuser = createPage("./public/pages/admin/admin.js");

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
  res.send(loginpage);
});

app.get("/createuser", (req, res) => {
  res.send(createuser);
});

app.get("/admin", (req, res) => {
    res.send(adminuser);
  });


const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  console.log("Server is running on", PORT);
});