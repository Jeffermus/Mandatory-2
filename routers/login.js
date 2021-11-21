const router = require("express").Router();
const connection = require("./database/database.js");

router.post("/login", (req,res) => {
    console.log(req.body);

    const {username, password} = req.body

    res.send();
    
});

module.exports = {
    router
};