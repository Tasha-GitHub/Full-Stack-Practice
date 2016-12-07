/***    ROUTES.JS PSEUDOCODE    ***/

    //Require any Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const mysql = require("mysql");
const router = express.Router();
    //Connect to DataBase
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "employeeRegistry"
}});

connection.connect();
    //Declare Routes for both GET and POST
router.get("/", function(req,res){
	res.sendFile(path.join(__dirname, index.html));
});


//api router 


router.get("/getMyData", function(req, res){
	connection.query("SELECT * FROM employees", function(err,data){
	if err throw err
		res.send(data);
	}); 
});

//employee get route

route.get("/newEmployee", function(req, res){
	res.sendFile(path.join(__dirname, "newEmployee.html"));
});

//set post route 
router.post("/newEmployee", function(req,res){
	console.log(req.body);
	let first_name = req.body.first_name;
	let last_name = req.body.last_name;
	let age = req.body.age;
	let enjoys = req.body.enjoys;

	//query our database using sql, insert new record into our database using user's input.
	connection.query('INSERT INTO employees(first_name, last_name, age, enjoys) VALUES("' + first_name + '","' + last_name + '",' + age + ',"' + enjoys +  '")');
	res.redirect("/");


});

//Export Routes
module.exports = router;


