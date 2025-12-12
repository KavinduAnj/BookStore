import express from "express"
import mysql from "mysql"
const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "bookstore"
})
app.get("/", (req,res) =>{
    res.json("Hi. This is the backend")
})
app.get("/books",(req,res)=>{
    const q = "SELECT * FROM books;"
    db.query(q,(err,data)=>{
        if(err) {return res.json(err)}
        return res.json(data)
     })
})
app.post("/books",(req,res)=>{
    const q = "INSERT INTO books (`author`,`description`,`cover`) VALUES (?)"
    const values = ["new author","new desc","new cover"]
    db.query(q,[values],(err,data)=>{
        if(err) {return res.json(err)}
        return res.json("Book has been created")
     })
})

app.listen(8800, ()=>{
    console.log("Connected to backend")
})