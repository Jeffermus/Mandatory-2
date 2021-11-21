const router = require("express").Router();
const connection = require("/database/database.js");

router.post("/createuser", (req,res) => {
    const {username, password} = req.body
    connection.query(`INSERT INTO users (username, password) VALUES (${username,password})`, (error,result) => {
        if (error) res.send(error);
        if (result) res.send(result);
    });
    
    
});

module.exports = {
    router
};