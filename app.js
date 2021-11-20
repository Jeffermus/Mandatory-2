const express = require('express');
const { createPage } = require('./render/render');
const app = express();
const loginpage = createPage("login/login.html");




app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/login", (req, res) => {
    res.send(loginpage);
});

/* Import and use routes */
const loginRouter = require("./routers/login.js");


app.use(loginRouter.router);


/* app.get("/", (req, res) => {
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
}); */

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});