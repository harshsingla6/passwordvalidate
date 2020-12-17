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
  //  console.log(user.email, user.password

  const validatePassword = (emailId, userPassword) =>{
    user.findOne({
      attributes : ["email"],
      where:{email : emailId , password : userPassword },
      raw:true
    })
    .then(data => {
       if(data == null){
        // console.log(data)
        console.log("false")
          // return data
       }
       else{
         console.log("true")
       }
    })
    .catch(error => {
        console.log("false")
        console.log(error)
    })
   }
   validatePassword("harshsingla1.@gmail.com" , 1345)

app.listen(port ,()=>{
 console.log("server is running at port 8000")
})