import express from "express"
import mysql from "mysql"
const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "bookstore"
})

app.listen(8800, ()=>{
    console.log("Connected to backend")
})