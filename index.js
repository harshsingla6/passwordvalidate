const express = require("express")
const mysql = require("mysql")
const sequelize = require("sequelize")
const validator = require("express-validator")
const bodyparser = require("body-parser")
const app = express();
app.use(bodyparser.json())
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "cartdb",
    port: "3306"
});
connection.connect((error) => {
    if (error) {
        console.log("error");
        console.log(error);
    }
    // else {
    //     console.log("connected");
    // }
})




app.listen(8000, () => {
    console.log("server is running...!")
})


// function insertdata(){
//             var sql = "Insert into table1(email, password) values('harshsingla1.@gmail.com', 12345)" ;
//             connection.query(sql, (err,result)=>{
//                 if(err) throw err;
//                 console.log("inserted..!")
//             })
//         }
//         insertdata()

// connection.query("CREATE TABLE table1( email varchar(55), password varchar(20))", (error, rows, fields) => {
//     if (error) {
//         console.log("Error in the query", error)
//     }
//     else {
//         console.log("Sucessful create table...!")
//         // console.log(rows)
//         insertdata()
//     }
// })

// app.post('/login', (req, res)=>{
//   const userdata = {
//       email : req.body.email,
//       password : req.body.password
//   }
//    cartdb.findOne({
//        userdata
//    })
    
    // const check = ((email_Id) => {
    //  var  email_Id = req.body.emailId
    //  var  password = req.body.password
    // cartdb.findOne({ attributes : ['password' , 'emailId'], where:{email_ID : email_Id, password : password}
    //  })
    //  .exec((error,user)=>{
    //             if(user){
    //                 console.log("true")
    //                 res.send("true")
    //             }
    //             else{
    //                 console.log("false")
    //                 res.json("false")
    //             }
    //             })
    // })
 
// cartdb.findOne({email: req.body.email , password : req.body.password})
//     .exec((error,user)=>{
//         if(user){
//             console.log("true")
//             res.send("true")
//         }
//         else{
//             console.log("false")
//             res.json("false")
//         }
//         });
// })


// app.post("/login",(req,res)=>{
//  var email = req.body.email
//  var password = req.body.password
//  connection.query('select * from table1 where email = ? and password = ?',[email , password], function(error,results){
//     if(error){
//     console.log("error")
//      res.send(error)    
//  }
//  else{
//      if(results.length>0){
//          res.send("true")
//          return true
//      }
//      else{
//         res.send("false")
//          return false
//      }
//     // console.log(results)
//  }
//  })
// })

const validatePassword = (emailId) =>{
 var password = 12345
 connection.query('select * from table1 where email = ? and password = ?',[emailId , password], function(error,results){
        if(error){
        console.log("error")
         res.send(error)    
     }
     else{
         if(results.length>0){
             console.log("true")
             return true
         }
         else{
            console.log("false")
             return false
         }
     }
     })
}
validatePassword("harshsingla1.@gmail.com")