const express = require("express")
const mysql = require("mysql")
const sequelize = require("sequelize")
const bodyparser = require("body-parser")
const app = express();

const port = 5000;
app.use(bodyparser.json())

const connection = new sequelize('cartdb','root','root',{
    dialect : 'mysql'
})
connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
 
  const user = connection.define("table1", {
  email : sequelize.STRING,
  password : sequelize.INTEGER
  });
  //  console.log(user.email, user.password)

// sequelize.sync

  // connection.sync()

  const validatePassword = (emailId) =>{
    var password = 12345
    user.findOne({where:{email: emailId , password: password}})
    .then(results => {
        console.log("true")
        console.log(results)
        //   return users
    })
    .catch(error => {
        console.log("false")
        return error
    })
   }
   validatePassword("harshsingla1.@gmail.com")

app.listen(port ,()=>{
 console.log("server is running at port 8000")
})