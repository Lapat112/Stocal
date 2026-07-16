import express from 'express';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcrypt';   
import cors from 'cors';  // cors

const sqlite = sqlite3.verbose()

const db = new sqlite3.Database("User.db")




const app = express();
const PORT = 8000;


app.use(cors())                // cors
app.use(express.json())         //

app.use(express.json())

app.get("/",(req,res) => {
    res.send("Hello World");
})

app.post("/login",(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const sql = (`SELECT * FROM User WHERE Name= ? `)

    
    
    db.get(sql,[username], async (err,row) =>{
        if(err){
            return res.status(500).json({
                message: err.message
            })
        }
        if (!row) {
            return res.json({
                message: "User not found"
            })
        }

        const Hank = await bcrypt.compare(password, row.Password) 

        if(Hank){
            res.json({
                message: "Login Success"
            })
        }else{
            return res.json({
                message: "Filed login"
            })
        }
        
    })

})


app.post("/register" , async (req,res)=>{

    const username = req.body.username
    const password = req.body.password

    const hasdpassword = await bcrypt.hash(password,10)

    const slq = `
        INSERT INTO User (Name, Password)
        VALUES (?, ?)
    `

    db.run(slq, [username, hasdpassword], function(err){
    if(err){
        return res.status(500).json({
            message: err.message
        })
    }
    res.json({
            message: "User success"
        })
    })

 }) 




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});