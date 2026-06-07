import express from "express"
import sqlite3 from "sqlite3"
import bcrypt from "bcrypt"

const sqlite = sqlite3.verbose()

const db = new sqlite3.Database("user.db")

const app = express()
const PORT = 8000

app.use(express.json())





app.get("/", (req, res) => {
    const sql = "SELECT * FROM Userdata"

    db.all(sql,[],(err,rows)=>{
        if(err){
            return res.status(400).json({
                message:"error"
            })
        }
        res.json(rows)

    })
    
})


app.post("/register", async (req, res) => {

    const username = req.body.username
    const password = req.body.password


    const hasdPassword = await bcrypt.hash(password,10)


    const sql = `
        INSERT INTO Userdata (Name, Password)
        VALUES (?, ?)
    `

    db.run(sql, [username,hasdPassword], function(err) {

        if (err) {
            return res.status(500).json({
                message: err.message
            })
        }

        res.json({
            message: "User Success",
            id: this.lastID
        })

    })

})

app.post("/login",(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const sql = `
        SELECT * FROM Userdata
        WHERE Name= ? AND Password = ?
    `
      db.get(sql, [username, password], (err, row) => {

        if (err) {

            return res.status(500).json({
                message: err.message
            })
        }

        if (row) {

            res.json({
                message: "Login Success"
            })

        } else {

            res.json({
                message: "Name or Password incorrect"
            })
        }
    }) 




})











app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})