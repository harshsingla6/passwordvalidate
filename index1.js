const express = require("express")
const mysql = require("mysql")
const sequelize = require("sequelize")
const bodyparser = require("body-parser")
const bcrypt = require("bcrypt")
const app = express();

const port = 5000;
app.use(bodyparser.json())

const connection = new sequelize('cartdb', 'root', 'root', {
  dialect: 'mysql'
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
  email: sequelize.STRING,
  password: sequelize.INTEGER
});

const validatePassword = (emailId, userPassword) => {
  console.log("Password validation")
  return new Promise((resolve,reject)=>{
    user.findOne({
      attributes: ["email"],
      where: { email: emailId },
      raw: true
    })
    .then(data => {
      if(data){
        console.log(data)
      if (data && bcrypt.compareSync(userPassword , user.password)) {
        // console.log(data)
        console.log("true")
        // reject("Invalid password")    // data is equal to null because password condition not match
      }
      else {
        console.log("false")
       // console.log("Welcome") // data is not equal to null & condition match
        // resolve(data)
      }
    }
    else{
      console.log("email is wrong")
    }
    })
    .catch(error => {
      console.log("error")
      reject(error)
    })
  })
}
validatePassword("harshsingla1.@gmail.com", 1235)

app.listen(port, () => {
  console.log("server is running at port 8000")
})